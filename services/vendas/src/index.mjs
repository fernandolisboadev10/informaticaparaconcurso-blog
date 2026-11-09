import { hash, readJson, receiptToken, UUID, PROVIDER_ID, verifyWebhook } from './security.mjs';

import { normalizeOrder } from './orders.mjs';
import { ProviderFailure, safeProviderDetails, safeFailure } from './diagnostics.mjs';

const PRODUCT = 'apostila-cebraspe-552';
const PRICE = 2790;
const paymentHosts = new Set(['www.mercadopago.com.br','sandbox.mercadopago.com.br']);

function httpsBase(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password && url.pathname === '/' && !url.search && !url.hash ? url.origin : null; }
  catch { return null; }
}

function configured(env) {
  return !!(env.DB && env.MP_ACCESS_TOKEN && env.MP_WEBHOOK_SECRET && /^\d+$/.test(env.MP_COLLECTOR_ID ?? '') && ['test','live'].includes(env.PAYMENTS_MODE) && httpsBase(env.API_PUBLIC_URL) && httpsBase(env.SITE_URL));
}

export function createWorker({ fetch: remoteFetch = globalThis.fetch, now = Date.now } = {}) {
  async function mp(env, path, options = {}) {
    let response;
    try { response = await remoteFetch(`https://api.mercadopago.com${path}`, {
      method: options.method ?? 'GET', redirect: 'manual', signal: AbortSignal.timeout(12000),
      headers: { Authorization: `Bearer ${env.MP_ACCESS_TOKEN}`, 'Content-Type': 'application/json', ...(options.key ? { 'X-Idempotency-Key': options.key } : {}) },
      ...(options.body ? { body: JSON.stringify(options.body) } : {}),
    }); } catch { throw new ProviderFailure(0,'provider_connection_failed'); }
    if (!response.ok) {
      const body = await response.json().catch(() => null);
      const details = safeProviderDetails(body);
      throw new ProviderFailure(response.status,details.code,details.mentionedFields);
    }
    try { return await response.json(); } catch { throw new ProviderFailure(response.status,'invalid_provider_json'); }
  }

  async function syncOrder(env, providerId) {
    const snapshot = await mp(env, `/v1/orders/${encodeURIComponent(providerId)}`);
    if (String(snapshot.id).toLowerCase() !== providerId.toLowerCase() || !UUID.test(snapshot.external_reference ?? '')) return 'ignored';
    const order = await env.DB.prepare('SELECT * FROM orders WHERE id=?').bind(snapshot.external_reference).first();
    if (!order) return 'ignored';
    const verified = normalizeOrder(snapshot,order,env);
    if (!verified) return 'ignored';
    const syncToken = crypto.randomUUID();
    const timestamp = now();
    const statements = [
      env.DB.prepare(`UPDATE orders SET provider_order_id=COALESCE(provider_order_id,?),provider_updated_at=?,
        sync_token=?,status=?,review_required=CASE WHEN ?=1 THEN 1 ELSE review_required END,updated_at=?
        WHERE id=? AND (provider_order_id IS NULL OR provider_order_id=?) AND provider_updated_at<=?
        AND NOT (status IN ('refunded','charged_back') AND ? NOT IN ('refunded','charged_back'))
        AND NOT (status='charged_back' AND ?!='charged_back')
        AND NOT (status='approved' AND ? IN ('pending','in_process','authorized','rejected','cancelled') AND ?=0)`)
        .bind(verified.id,verified.updated,syncToken,verified.status,verified.review?1:0,timestamp,order.id,verified.id,verified.updated,verified.status,verified.status,verified.status,verified.review?1:0),
    ];
    for (const payment of verified.payments) {
      statements.push(env.DB.prepare(`INSERT INTO payments (id,order_id,status,amount_cents,paid_cents,refunded_cents,provider_updated_at,updated_at)
        SELECT ?,?,?,?,?,?,?,? FROM orders WHERE id=? AND sync_token=?
        ON CONFLICT(id) DO UPDATE SET status=excluded.status,amount_cents=excluded.amount_cents,paid_cents=excluded.paid_cents,
        refunded_cents=excluded.refunded_cents,provider_updated_at=excluded.provider_updated_at,updated_at=excluded.updated_at
        WHERE payments.order_id=excluded.order_id`)
        .bind(payment.id,order.id,payment.status,payment.amount,payment.collected,payment.returned,verified.updated,timestamp,order.id,syncToken));
    }
    statements.push(
      env.DB.prepare(`INSERT OR IGNORE INTO outbox (order_id,kind,created_at)
        SELECT id,'payment_approved',? FROM orders WHERE id=? AND sync_token=? AND status='approved' AND review_required=0`).bind(timestamp,order.id,syncToken),
      env.DB.prepare(`UPDATE outbox SET status='cancelled' WHERE order_id=? AND status='pending'
        AND EXISTS (SELECT 1 FROM orders WHERE id=? AND sync_token=? AND (status!='approved' OR review_required=1))`).bind(order.id,order.id,syncToken),
    );
    await env.DB.batch(statements);
    return 'processed';
  }

  async function checkout(request, env, respond) {
    if (env.CHECKOUT_ENABLED !== 'true' || !configured(env)) return respond({ error: 'checkout_unavailable' },503);
    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    let allowed;
    if (env.CHECKOUT_RATE_LIMITER) {
      allowed = (await env.CHECKOUT_RATE_LIMITER.limit({ key:ip })).success;
    } else {
      // Dashboard-only deployments can use D1 without adding a Rate Limit binding.
      // Store a minute-scoped hash, never the raw visitor IP.
      const minute = Math.floor(now()/60000);
      const key = await hash(`${minute}:${ip}`);
      const limit = await env.DB.prepare(`INSERT INTO rate_limits (key,attempts,expires_at) VALUES (?,1,?)
        ON CONFLICT(key) DO UPDATE SET attempts=attempts+1 RETURNING attempts`).bind(key,(minute+2)*60000).first();
      allowed = limit.attempts <= 5;
    }
    if (!allowed) return respond({ error: 'too_many_requests' },429);
    const key = request.headers.get('Idempotency-Key');
    const token = receiptToken(request);
    if (!UUID.test(key ?? '') || !token) return respond({ error: 'invalid_request' },400);
    let body;
    try { body = await readJson(request); } catch { return respond({ error: 'invalid_request' },400); }
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respond({ error: 'invalid_email' },400);
    const receiptHash = await hash(token);
    const timestamp = now();
    const id = crypto.randomUUID();
    const inserted = await env.DB.prepare(`INSERT OR IGNORE INTO orders (id,checkout_key,receipt_hash,email,created_at,updated_at) VALUES (?,?,?,?,?,?)`)
      .bind(id,key,receiptHash,email,timestamp,timestamp).run();
    const order = await env.DB.prepare('SELECT * FROM orders WHERE checkout_key=?').bind(key).first();
    if (!order || order.receipt_hash !== receiptHash || order.email !== email) return respond({ error: 'invalid_request' },400);
    if (order.checkout_state === 'ready') return respond({ orderId:order.id,checkoutUrl:order.checkout_url });
    if (!inserted.meta.changes) {
      // Claim a failed/timed-out creation atomically; reuse the same Orders idempotency key on retry.
      const claim = await env.DB.prepare(`UPDATE orders SET checkout_state='creating',updated_at=? WHERE id=?
        AND (checkout_state='failed' OR (checkout_state='creating' AND updated_at<?))`).bind(timestamp,order.id,timestamp-90000).run();
      if (!claim.meta.changes) return respond({ error: 'checkout_preparing' },409);
    }
    let phase = 'provider_request';
    try {
      const returnUrl = `${httpsBase(env.SITE_URL)}/apostila/pagamento/?pedido=${order.id}`;
      const remoteOrder = await mp(env,'/v1/orders', { method:'POST', key:order.id, body:{
        // Checkout Pro creates the order before the buyer selects a payment method.
        // Automatic processing instead expects payment transactions in this request.
        type:'online',processing_mode:'manual',capture_mode:'automatic',total_amount:(PRICE/100).toFixed(2),currency:'BRL',external_reference:order.id,
        items:[{ external_code:PRODUCT,title:'Apostila Cebraspe — 552 Questões Comentadas de Informática',quantity:1,unit_price:(PRICE/100).toFixed(2) }],
        payer:{ email },
        config:{ online:{
          callback_url:`${httpsBase(env.API_PUBLIC_URL)}/webhooks/mercado-pago`,
          success_url:returnUrl,pending_url:returnUrl,failure_url:returnUrl,auto_return:'approved',
        }, payment_method:{ max_installments:1 } },
      }});
      phase = 'checkout_link';
      const url = new URL(remoteOrder.checkout_url);
      if (!PROVIDER_ID.test(remoteOrder.id ?? '') || url.protocol !== 'https:' || !paymentHosts.has(url.hostname) || url.username || url.password) throw new Error('invalid_checkout_url');
      phase = 'database_update';
      await env.DB.prepare(`UPDATE orders SET checkout_state='ready',provider_order_id=?,checkout_url=?,updated_at=? WHERE id=?`)
        .bind(remoteOrder.id,url.href,now(),order.id).run();
      return respond({ orderId:order.id,checkoutUrl:url.href },201);
    } catch (error) {
      const diagnostic = safeFailure(error,phase);
      console.error('checkout_creation_failed',diagnostic);
      try { await env.DB.prepare(`UPDATE orders SET checkout_state='failed',updated_at=? WHERE id=?`).bind(now(),order.id).run(); }
      catch { console.error('checkout_state_update_failed'); }
      return respond({ error: 'payment_provider_unavailable',...(env.PAYMENTS_MODE === 'test' ? { diagnostic } : {}) },502);
    }
  }

  return {
    async fetch(request, env) {
      const origin = request.headers.get('Origin');
      const allowed = (env.ALLOWED_ORIGINS ?? '').split(',').map(s => s.trim()).filter(Boolean);
      const isAllowed = origin && allowed.includes(origin);
      const respond = (body,status=200) => new Response(JSON.stringify(body), { status,headers:{
        'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',Vary:'Origin',
        ...(isAllowed ? { 'Access-Control-Allow-Origin':origin } : {}),
      }});
      const url = new URL(request.url);
      try {
        if (request.method === 'GET' && url.pathname === '/health') return respond({ service:'apostila-vendas',checkoutEnabled:env.CHECKOUT_ENABLED==='true' && configured(env),diagnosticsVersion:1 });
        if (request.method === 'OPTIONS') {
          if (!isAllowed) return respond({ error:'forbidden_origin' },403);
          return new Response(null,{ status:204,headers:{ 'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Allow-Headers':'Authorization, Content-Type, Idempotency-Key','Access-Control-Max-Age':'600',Vary:'Origin' }});
        }
        if (url.pathname === '/webhooks/mercado-pago' && request.method === 'POST') {
          if (!configured(env)) return respond({ error:'service_unavailable' },503);
          const id = await verifyWebhook(request,env.MP_WEBHOOK_SECRET,now());
          if (!id) return respond({ error:'invalid_signature' },401);
          let body;
          try { body = await readJson(request); } catch { return respond({ error:'invalid_notification' },400); }
          if (!['order','orders'].includes(body.type)) return respond({ received:true });
          if (String(body.data?.id).toLowerCase() !== id.toLowerCase()) return respond({ error:'invalid_notification' },400);
          const outcome = await syncOrder(env,String(body.data.id));
          return respond({ received:true,processed:outcome==='processed' });
        }
        if (!isAllowed) return respond({ error:'forbidden_origin' },403);
        if (url.pathname === '/checkout' && request.method === 'POST') return await checkout(request,env,respond);
        const orderId = url.pathname.match(/^\/orders\/([a-f0-9-]+)$/i)?.[1];
        if (orderId && UUID.test(orderId) && request.method === 'GET') {
          const token = receiptToken(request);
          if (!token || !env.DB) return respond({ error:'order_not_found' },404);
          const order = await env.DB.prepare('SELECT id,status,amount_cents,currency,receipt_hash,review_required FROM orders WHERE id=?').bind(orderId).first();
          if (!order || order.receipt_hash !== await hash(token)) return respond({ error:'order_not_found' },404);
          return respond({ orderId:order.id,status:order.status,amountCents:order.amount_cents,currency:order.currency,reviewRequired:!!order.review_required });
        }
        return respond({ error:'not_found' },404);
      } catch {
        // Never log request bodies, bearer tokens, payer data or upstream responses.
        console.error('payment_operation_failed');
        return respond({ error:'service_unavailable' },503);
      }
    },
    async scheduled(_event,env,ctx) {
      if (!configured(env)) return;
      ctx.waitUntil((async () => {
        await env.DB.prepare('DELETE FROM rate_limits WHERE expires_at<?').bind(now()).run();
        // Bounded recovery for lost notifications. Includes recent approved orders to catch refunds.
        const result = await env.DB.prepare(`SELECT id,provider_order_id,created_at FROM orders
          WHERE created_at>? ORDER BY reconciled_at ASC LIMIT 20`)
          .bind(now()-180*24*60*60*1000).all();
        for (const order of result.results) {
          try {
            if (order.provider_order_id) {
              await syncOrder(env,order.provider_order_id);
            } else {
              const query = new URLSearchParams({
                begin_date:new Date(order.created_at-60000).toISOString(),end_date:new Date(now()).toISOString(),
                external_reference:order.id,type:'online',page_size:'20',
              });
              const found = await mp(env,`/v1/orders?${query}`);
              if ((found.data?.length ?? 0)>1) await env.DB.prepare('UPDATE orders SET review_required=1 WHERE id=?').bind(order.id).run();
              for (const candidate of found.data ?? []) {
                if (PROVIDER_ID.test(candidate.id ?? '')) await syncOrder(env,candidate.id);
              }
            }
            await env.DB.prepare('UPDATE orders SET reconciled_at=? WHERE id=?').bind(now(),order.id).run();
          } catch { console.error('payment_reconciliation_failed'); }
        }
      })());
    },
  };
}

export default createWorker();
