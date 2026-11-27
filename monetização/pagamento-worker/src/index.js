// Pagamento da apostila: Mercado Pago (Checkout Pro) + webhook + entrega protegida do PDF (R2).
// Rotas:
//   GET  /comprar      cria a preferência de pagamento e redireciona para o Mercado Pago
//   POST /webhook      notificação do Mercado Pago (assinatura validada, pagamento reconfirmado na API)
//   GET  /obrigado     página de retorno; mostra o link quando o pagamento está aprovado
//   GET  /baixar?t=…   entrega o PDF com token temporário e limite de downloads

const MP = 'https://api.mercadopago.com';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const html = (body, status = 200) =>
  new Response(
    `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Apostila Cebraspe</title><style>body{font-family:system-ui,sans-serif;background:#0b0e14;color:#d5dcec;margin:0;display:grid;min-height:100vh;place-items:center;padding:24px}main{max-width:520px;background:#121826;border:1px solid #2f3d5c;border-radius:16px;padding:32px}h1{color:#fff;margin-top:0}a{color:#a5b4fc}a.b{display:inline-block;margin-top:16px;padding:14px 24px;border-radius:12px;background:#2dd4bf;color:#04201d;font-weight:800;text-decoration:none}small{color:#a9b4c9}</style></head><body><main>${body}</main></body></html>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } },
  );

const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

async function hmacHex(secret, text) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(text)));
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

async function mpGet(env, path) {
  const res = await fetch(`${MP}${path}`, { headers: { Authorization: `Bearer ${env.MP_ACCESS_TOKEN}` } });
  if (!res.ok) throw new Error(`Mercado Pago ${path}: ${res.status}`);
  return res.json();
}

const aprovado = (env, payment) =>
  payment.status === 'approved' && Number(payment.transaction_amount) >= Number(env.PRICE);

// ---------- /comprar ----------
async function comprar(env) {
  const orderId = crypto.randomUUID();
  const body = {
    items: [{ id: 'apostila-cebraspe', title: env.PRODUCT_TITLE, quantity: 1, currency_id: 'BRL', unit_price: Number(env.PRICE) }],
    external_reference: orderId,
    notification_url: `${env.PUBLIC_URL}/webhook`,
    back_urls: {
      success: `${env.PUBLIC_URL}/obrigado`,
      pending: `${env.PUBLIC_URL}/obrigado`,
      failure: `${env.SITE_URL}/`,
    },
    auto_return: 'approved',
    statement_descriptor: 'INFORMATICA CONC',
  };
  const res = await fetch(`${MP}/checkout/preferences`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.MP_ACCESS_TOKEN}`, 'content-type': 'application/json', 'X-Idempotency-Key': orderId },
    body: JSON.stringify(body),
  });
  if (!res.ok) return html('<h1>Não foi possível iniciar o pagamento</h1><p>Tente de novo em instantes.</p>', 502);
  const pref = await res.json();
  return Response.redirect(pref.init_point, 302);
}

// ---------- entrega ----------
async function liberarPedido(env, payment) {
  const orderId = payment.external_reference;
  if (!orderId) return null;
  const key = `pedido:${orderId}`;
  const existente = await env.PEDIDOS.get(key, 'json');
  if (existente) return existente;
  const token = crypto.randomUUID().replaceAll('-', '') + crypto.randomUUID().replaceAll('-', '');
  const ttl = Number(env.TOKEN_TTL_DAYS) * 86400;
  const pedido = {
    token,
    paymentId: String(payment.id),
    email: payment.payer?.email ?? null,
    criadoEm: new Date().toISOString(),
    downloads: 0,
  };
  await env.PEDIDOS.put(key, JSON.stringify(pedido), { expirationTtl: ttl });
  await env.PEDIDOS.put(`token:${token}`, orderId, { expirationTtl: ttl });
  await enviarEmail(env, pedido);
  return pedido;
}

async function enviarEmail(env, pedido) {
  if (!env.RESEND_API_KEY || !env.EMAIL_FROM || !pedido.email) return;
  const link = `${env.PUBLIC_URL}/baixar?t=${pedido.token}`;
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: env.EMAIL_FROM,
        to: pedido.email,
        subject: 'Sua apostila Cebraspe chegou',
        html: `<p>Obrigado pela compra!</p><p><a href="${link}">Baixar a apostila (PDF)</a></p><p>O link vale por ${env.TOKEN_TTL_DAYS} dias e permite até ${env.MAX_DOWNLOADS} downloads. Dúvidas: responda este e-mail.</p>`,
      }),
    });
  } catch {
    // o link continua disponível na página de obrigado
  }
}

// ---------- /webhook ----------
async function webhook(request, env) {
  const url = new URL(request.url);
  const sig = request.headers.get('x-signature') ?? '';
  const requestId = request.headers.get('x-request-id') ?? '';
  const parts = Object.fromEntries(sig.split(',').map((p) => p.trim().split('=')));
  const dataId = (url.searchParams.get('data.id') ?? '').toLowerCase();
  if (!parts.ts || !parts.v1 || !dataId) return new Response('bad request', { status: 400 });
  const esperado = await hmacHex(env.MP_WEBHOOK_SECRET, `id:${dataId};request-id:${requestId};ts:${parts.ts};`);
  if (!timingSafeEqual(esperado, parts.v1)) return new Response('invalid signature', { status: 401 });

  const type = url.searchParams.get('type') ?? url.searchParams.get('topic');
  if (type !== 'payment') return new Response('ignored', { status: 200 });

  // Nunca confia no corpo da notificação: reconsulta o pagamento direto na API.
  const payment = await mpGet(env, `/v1/payments/${encodeURIComponent(dataId)}`);
  if (aprovado(env, payment)) await liberarPedido(env, payment);
  return new Response('ok', { status: 200 });
}

// ---------- /obrigado ----------
async function obrigado(request, env) {
  const url = new URL(request.url);
  const paymentId = url.searchParams.get('payment_id') ?? url.searchParams.get('collection_id');
  if (!paymentId || !/^\d+$/.test(paymentId)) {
    return html(`<h1>Pedido não encontrado</h1><p>Volte ao <a href="${esc(env.SITE_URL)}">site</a>.</p>`, 404);
  }
  let payment;
  try {
    payment = await mpGet(env, `/v1/payments/${paymentId}`);
  } catch {
    return html('<h1>Não foi possível confirmar agora</h1><p>Atualize a página em alguns segundos.</p>', 502);
  }
  if (aprovado(env, payment)) {
    const pedido = await liberarPedido(env, payment);
    if (pedido) {
      const aviso = pedido.email ? ` Também enviamos para ${esc(pedido.email)}.` : '';
      return html(`<h1>Pagamento aprovado</h1><p>Obrigado! Sua apostila está pronta.</p><a class="b" href="/baixar?t=${pedido.token}">Baixar a apostila (PDF)</a><p><small>O link vale por ${esc(env.TOKEN_TTL_DAYS)} dias, com até ${esc(env.MAX_DOWNLOADS)} downloads.${aviso}</small></p>`);
    }
  }
  if (payment.status === 'pending' || payment.status === 'in_process') {
    return html('<h1>Aguardando confirmação</h1><p>Assim que o pagamento for aprovado (Pix costuma levar segundos), o link de download aparece aqui e chega por e-mail. Atualize esta página.</p>');
  }
  return html(`<h1>Pagamento não aprovado</h1><p>Você pode tentar novamente.</p><a class="b" href="${esc(env.SITE_URL)}">Voltar ao site</a>`);
}

// ---------- /baixar ----------
async function baixar(request, env) {
  const token = new URL(request.url).searchParams.get('t') ?? '';
  if (!/^[a-f0-9]{64}$/.test(token)) return html('<h1>Link inválido</h1>', 403);
  const orderId = await env.PEDIDOS.get(`token:${token}`);
  if (!orderId) return html('<h1>Link expirado</h1><p>Fale conosco para receber um novo link.</p>', 410);
  const key = `pedido:${orderId}`;
  const pedido = await env.PEDIDOS.get(key, 'json');
  if (!pedido) return html('<h1>Link expirado</h1>', 410);
  if (pedido.downloads >= Number(env.MAX_DOWNLOADS)) {
    return html('<h1>Limite de downloads atingido</h1><p>Fale conosco para receber um novo link.</p>', 429);
  }
  const obj = await env.ARQUIVOS.get(env.PDF_KEY);
  if (!obj) return html('<h1>Arquivo indisponível</h1><p>Tente mais tarde.</p>', 503);
  pedido.downloads += 1;
  const decorrido = Math.floor((Date.now() - Date.parse(pedido.criadoEm)) / 1000);
  const restante = Math.max(60, Number(env.TOKEN_TTL_DAYS) * 86400 - decorrido);
  await env.PEDIDOS.put(key, JSON.stringify(pedido), { expirationTtl: restante });
  return new Response(obj.body, {
    headers: {
      'content-type': 'application/pdf',
      'content-disposition': 'attachment; filename="apostila-cebraspe-informatica.pdf"',
      'cache-control': 'private, no-store',
    },
  });
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    try {
      if (request.method === 'GET' && pathname === '/comprar') return await comprar(env);
      if (request.method === 'POST' && pathname === '/webhook') return await webhook(request, env);
      if (request.method === 'GET' && pathname === '/obrigado') return await obrigado(request, env);
      if (request.method === 'GET' && pathname === '/baixar') return await baixar(request, env);
      return new Response('not found', { status: 404 });
    } catch (err) {
      console.error(err);
      return html('<h1>Erro inesperado</h1><p>Tente de novo em instantes.</p>', 500);
    }
  },
};
