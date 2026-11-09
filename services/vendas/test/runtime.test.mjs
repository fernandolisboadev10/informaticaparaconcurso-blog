import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { Miniflare, convertV4MiniflareOptions } from 'miniflare';

// Real workerd fetch + D1, with only the external Mercado Pago response stubbed.
// Node's fetch accepts redirect:"error"; workerd rejects it before sending any request.
test('checkout reaches the provider using redirect mode supported by Cloudflare Workers',async()=>{
  const requests=[];
  const source=new URL('../src/',import.meta.url);
  const modules=['index.mjs',...readdirSync(source).filter(name=>name.endsWith('.mjs')&&name!=='index.mjs')].map(name=>({
    type:'ESModule',path:fileURLToPath(new URL(name,source)),contents:readFileSync(new URL(name,source),'utf8'),
  }));
  const mf=new Miniflare(convertV4MiniflareOptions({
    modules,
    compatibilityDate:'2026-11-08',
    d1Databases:['DB'],
    bindings:{
      CHECKOUT_ENABLED:'true',PAYMENTS_MODE:'test',MP_ACCESS_TOKEN:'runtime-test-only',MP_WEBHOOK_SECRET:'runtime-test-only',
      MP_COLLECTOR_ID:'123',SITE_URL:'https://site.example',API_PUBLIC_URL:'https://api.example',ALLOWED_ORIGINS:'https://site.example',
    },
    outboundService:async request=>{
      requests.push({url:request.url,body:await request.json()});
      return Response.json({id:'ORD_RUNTIME_TEST',checkout_url:'https://sandbox.mercadopago.com.br/checkout/v1/redirect?order_id=runtime'});
    },
  }));
  try {
    const db=await mf.getD1Database('DB');
    const dir=new URL('../migrations/',import.meta.url);
    for(const filename of readdirSync(dir).sort()) {
      const sql=readFileSync(new URL(filename,dir),'utf8').replace(/^--.*$/gm,'');
      for(const statement of sql.split(';').map(s=>s.trim()).filter(Boolean))await db.prepare(statement).run();
    }
    const response=await mf.dispatchFetch('https://api.example/checkout',{
      method:'POST',headers:{Origin:'https://site.example','Content-Type':'application/json',Authorization:`Bearer ${'a'.repeat(64)}`,'Idempotency-Key':crypto.randomUUID()},
      body:JSON.stringify({email:'buyer@example.com'}),
    });
    assert.equal(response.status,201,await response.clone().text());
    assert.equal(requests.length,1);
    assert.equal(requests[0].url,'https://api.mercadopago.com/v1/orders');
    assert.equal(requests[0].body.total_amount,'27.90');
    const body=await response.json();assert.match(body.checkoutUrl,/^https:\/\/sandbox\.mercadopago\.com\.br\//);
    assert.equal((await db.prepare('SELECT checkout_state FROM orders WHERE id=?').bind(body.orderId).first()).checkout_state,'ready');
  } finally { await mf.dispose(); }
});
