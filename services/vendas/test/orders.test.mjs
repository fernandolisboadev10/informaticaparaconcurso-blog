import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync, readdirSync } from 'node:fs';
import { createWorker } from '../src/index.mjs';

// Execute the real migrations and SQL, including the atomic D1 batch, against SQLite.
class D1 {
  constructor() {
    this.db=new DatabaseSync(':memory:');this.db.exec('PRAGMA foreign_keys=ON');
    const dir=new URL('../migrations/',import.meta.url);
    for(const file of readdirSync(dir).sort())this.db.exec(readFileSync(new URL(file,dir),'utf8'));
  }
  prepare(sql) {
    const db=this.db;let args=[];
    return {
      bind(...values){args=values;return this;},
      async first(){return db.prepare(sql).get(...args)??null;},
      async all(){return {results:db.prepare(sql).all(...args)};},
      async run(){return {meta:{changes:db.prepare(sql).run(...args).changes}};},
      sync(){return {meta:{changes:db.prepare(sql).run(...args).changes}};},
    };
  }
  async batch(statements){
    this.db.exec('BEGIN');
    try{const result=statements.map(s=>s.sync());this.db.exec('COMMIT');return result;}
    catch(error){this.db.exec('ROLLBACK');throw error;}
  }
}
const site='https://informaticaparaconcurso.com.br',api='https://payments.example';
const now=Date.parse('2026-11-08T20:00:00Z'),token='a'.repeat(64);
const secret='unit-test-signing-key-not-a-real-credential';
const remoteId='ORD01234TEST';
function fixture(){
  const env={DB:new D1(),CHECKOUT_ENABLED:'true',PAYMENTS_MODE:'test',SITE_URL:site,API_PUBLIC_URL:api,
    ALLOWED_ORIGINS:site,MP_ACCESS_TOKEN:'unit-test-only',MP_WEBHOOK_SECRET:secret,MP_COLLECTOR_ID:'123',
    CHECKOUT_RATE_LIMITER:{async limit(){return {success:true};}}};
  const calls=[];let snapshot,failed=false;
  const worker=createWorker({now:()=>now,fetch:async(url,options)=>{
    calls.push({url,options});
    if(failed)return Response.json(failed.body,{status:failed.status});
    if(options.method==='POST')return Response.json({id:remoteId,checkout_url:'https://sandbox.mercadopago.com.br/checkout/v1/redirect?order_id=test'});
    if(url.includes('?'))return Response.json({data:snapshot?[snapshot]:[]});
    return Response.json(snapshot);
  }});
  const key=crypto.randomUUID();
  const checkout=(body={},headers={})=>worker.fetch(new Request(`${api}/checkout`,{method:'POST',headers:{Origin:site,'Content-Type':'application/json','Idempotency-Key':key,Authorization:`Bearer ${token}`,...headers},body:JSON.stringify({email:'aluno@example.com',...body})}),env);
  const notify=(body={},headers={},id=remoteId)=>{
    const ts=String(now/1000),rid='unit-test-request';
    const v1=createHmac('sha256',secret).update(`id:${id.toLowerCase()};request-id:${rid};ts:${ts};`).digest('hex');
    return worker.fetch(new Request(`${api}/webhooks/mercado-pago?data.id=${id}`,{method:'POST',headers:{'Content-Type':'application/json','x-request-id':rid,'x-signature':`ts=${ts},v1=${v1}`,...headers},body:JSON.stringify({type:'order',data:{id},...body})}),env);
  };
  const row=()=>env.DB.db.prepare('SELECT * FROM orders').get();
  const task=()=>env.DB.db.prepare('SELECT * FROM outbox').get();
  return {env,worker,calls,checkout,notify,row,task,fail(status=503,body={error:'mock-unavailable'}){failed={status,body};},
    async order(){const response=await checkout();assert.equal(response.status,201);return (await response.json()).orderId;},
    snapshot(id,change={}){
      snapshot={id:remoteId,type:'online',external_reference:id,user_id:'123',currency:'BRL',total_amount:'27.90',total_paid_amount:'27.90',
        status:'processed',status_detail:'accredited',last_updated_date:'2026-11-08T19:59:00Z',
        transactions:{payments:[{id:'PAYTEST01',status:'processed',status_detail:'accredited',amount:'27.90',paid_amount:'27.90',refunded_amount:'0'}]},...change};return snapshot;
    },
  };
}

test('creates an Orders checkout with server price, decimal strings and documented online config',async()=>{
  const f=fixture(),response=await f.checkout({amount:0.01,currency:'USD',product:'other'});
  assert.equal(response.status,201);const result=await response.json();
  const {url,options}=f.calls[0];assert.equal(url,'https://api.mercadopago.com/v1/orders');
  const body=JSON.parse(options.body);
  assert.equal(body.type,'online');assert.equal(body.total_amount,'27.90');assert.equal(body.currency,'BRL');
  assert.deepEqual(body.items,[{external_code:'apostila-cebraspe-552',title:'Apostila Cebraspe — 552 Questões Comentadas de Informática',quantity:1,unit_price:'27.90'}]);
  assert.equal(body.external_reference,result.orderId);assert.equal(options.headers['X-Idempotency-Key'],result.orderId);
  assert.equal(body.config.online.callback_url,`${api}/webhooks/mercado-pago`);
  assert.equal(body.config.online.success_url.includes(token),false);
  assert.equal(body.transactions,undefined); // Card details are handled on the hosted checkout.
  const second=await f.checkout();assert.equal(second.status,200);assert.deepEqual(await second.json(),result);
  assert.equal(f.calls.length,1);
  assert.equal((await f.checkout({}, {Authorization:`Bearer ${'b'.repeat(64)}`})).status,400);
});

test('concurrent creation cannot produce two API calls',async()=>{
  const f=fixture(),responses=await Promise.all([f.checkout(),f.checkout()]);
  assert.equal(responses.filter(r=>r.status===201).length,1);assert.equal(f.calls.length,1);
});

test('disabled or unconfigured service, rate limiting and foreign origin fail closed',async()=>{
  const f=fixture();f.env.CHECKOUT_ENABLED='false';assert.equal((await f.checkout()).status,503);
  f.env.CHECKOUT_ENABLED='true';delete f.env.MP_ACCESS_TOKEN;assert.equal((await f.checkout()).status,503);
  f.env.MP_ACCESS_TOKEN='unit-test-only';f.env.CHECKOUT_RATE_LIMITER.limit=async()=>({success:false});
  assert.equal((await f.checkout()).status,429);assert.equal((await f.checkout({}, {Origin:'https://attacker.example'})).status,403);
  assert.equal(f.calls.length,0);
});

test('invalid email, token and oversized JSON are rejected',async()=>{
  const f=fixture();assert.equal((await f.checkout({email:'bad'})).status,400);
  assert.equal((await f.checkout({}, {Authorization:'Bearer short'})).status,400);
  assert.equal((await f.checkout({padding:'x'.repeat(5000)})).status,400);assert.equal(f.calls.length,0);
});

test('D1 enforces five attempts per minute when no native rate limiter is bound',async()=>{
  const f=fixture();delete f.env.CHECKOUT_RATE_LIMITER;
  for(let i=0;i<5;i++)assert.equal((await f.checkout({email:'bad'})).status,400);
  assert.equal((await f.checkout({email:'bad'})).status,429);
  const row=f.env.DB.db.prepare('SELECT * FROM rate_limits').get();
  assert.equal(row.key.length,64);assert.equal(row.key.includes('unknown'),false);
  assert.equal(f.calls.length,0);
});

test('provider errors preserve the order and idempotency key on retry',async()=>{
  const f=fixture();f.fail();assert.equal((await f.checkout()).status,502);assert.equal((await f.checkout()).status,502);
  assert.equal(f.env.DB.db.prepare('SELECT COUNT(*) n FROM orders').get().n,1);
  assert.equal(f.calls[0].options.headers['X-Idempotency-Key'],f.calls[1].options.headers['X-Idempotency-Key']);
});

test('test checkout reports upstream status and safe codes without copying provider messages',async(t)=>{
  const logged=[];t.mock.method(console,'error',(...args)=>logged.push(args));
  const f=fixture();f.fail(401,{error:'unauthorized',message:'Private value buyer@example.com APP_USR_do_not_echo'});
  const result=await f.checkout();assert.equal(result.status,502);const body=await result.json();
  assert.equal(body.diagnostic.phase,'provider_request');assert.equal(body.diagnostic.providerStatus,401);
  assert.equal(body.diagnostic.providerCode,'unauthorized');
  assert.equal(JSON.stringify([body,logged]).includes('APP_USR'),false);assert.equal(JSON.stringify([body,logged]).includes('@'),false);
});

test('live checkout does not expose diagnostic fields',async(t)=>{
  t.mock.method(console,'error',()=>{});
  const f=fixture();f.env.PAYMENTS_MODE='live';f.fail(400,{error:'bad_request'});
  assert.deepEqual(await (await f.checkout()).json(),{error:'payment_provider_unavailable'});
});

test('missing checkout URL identifies the response validation stage',async(t)=>{
  t.mock.method(console,'error',()=>{});
  const f=fixture();f.fail(200,{id:remoteId});const body=await (await f.checkout()).json();
  assert.equal(body.diagnostic.phase,'checkout_link');assert.equal(body.diagnostic.providerCode,'invalid_checkout_response');
  assert.equal(f.row().checkout_state,'failed');
});

test('forged signature, body mismatch and expired signed timestamp never reach the provider',async()=>{
  const f=fixture();await f.order();const before=f.calls.length;
  assert.equal((await f.notify({}, {'x-signature':'ts=0,v1=invalid'})).status,401);
  assert.equal((await f.notify({data:{id:'ORDOTHER'}})).status,400);
  const ts=String(now/1000-901),rid='unit-test-request';
  const v1=createHmac('sha256',secret).update(`id:${remoteId.toLowerCase()};request-id:${rid};ts:${ts};`).digest('hex');
  assert.equal((await f.notify({}, {'x-signature':`ts=${ts},v1=${v1}`})).status,401);assert.equal(f.calls.length,before);
});

for(const [name,change] of Object.entries({price:{total_amount:'0.01'},currency:{currency:'USD'},seller:{user_id:'999'},reference:{external_reference:crypto.randomUUID()},date:{last_updated_date:'invalid'},remoteId:{id:'ORDOTHER'},mode:{live_mode:true}})){
  test(`Orders snapshot validation rejects wrong ${name}`,async()=>{
    const f=fixture(),id=await f.order();f.snapshot(id,change);await f.notify();
    assert.equal(f.row().status,'pending');assert.equal(f.task(),undefined);
  });
}

test('only the official Orders snapshot can approve; repeats persist one task',async()=>{
  const f=fixture(),id=await f.order();f.snapshot(id,{status:'created',total_paid_amount:'0',transactions:{payments:[]}});
  await f.notify({status:'approved'});assert.equal(f.row().status,'pending');
  f.snapshot(id);await f.notify();await f.notify();assert.equal(f.row().status,'approved');
  assert.equal(f.env.DB.db.prepare('SELECT COUNT(*) n FROM outbox').get().n,1);
  assert.equal(f.env.DB.db.prepare('SELECT COUNT(*) n FROM payments').get().n,1);
});

test('full refund revokes queued fulfillment and older approvals cannot reopen it',async()=>{
  const f=fixture(),id=await f.order();f.snapshot(id);await f.notify();
  const updated=f.snapshot(id,{status:'refunded',last_updated_date:'2026-11-08T20:00:00Z'});
  updated.transactions.payments[0].refunded_amount='27.90';await f.notify();
  assert.equal(f.row().status,'refunded');assert.equal(f.task().status,'cancelled');
  f.snapshot(id);await f.notify();assert.equal(f.row().status,'refunded');
});

test('refund represented in Orders refund records also blocks delivery',async()=>{
  const f=fixture(),id=await f.order();const snapshot=f.snapshot(id);
  snapshot.transactions.refunds=[{id:'REFUNDTEST01',amount:'27.90',status:'approved'}];await f.notify();
  assert.equal(f.row().status,'refunded');assert.equal(f.task(),undefined);
});

test('partial refund and excess paid amount are held for manual review',async()=>{
  const f=fixture(),id=await f.order();const snapshot=f.snapshot(id);
  snapshot.transactions.payments[0].refunded_amount='1.00';await f.notify();
  assert.equal(f.row().review_required,1);assert.equal(f.row().status,'refunded');
  const g=fixture(),gid=await g.order();const second=g.snapshot(gid,{total_paid_amount:'55.80'});
  second.transactions.payments.push({...second.transactions.payments[0],id:'PAYTEST02'});await g.notify();
  assert.equal(g.row().review_required,1);assert.equal(g.task(),undefined);
});

test('split payments require the exact collected total, not just an approved status',async()=>{
  const f=fixture(),id=await f.order();const snapshot=f.snapshot(id);
  snapshot.transactions.payments=[
    {id:'PAYTEST01',status:'processed',status_detail:'accredited',amount:'10.00',paid_amount:'10.00'},
    {id:'PAYTEST02',status:'processed',status_detail:'accredited',amount:'17.90',paid_amount:'17.90'},
  ];await f.notify();assert.equal(f.row().status,'approved');
  const g=fixture(),gid=await g.order();const under=g.snapshot(gid,{total_paid_amount:'1.00'});
  under.transactions.payments[0].paid_amount='1.00';await g.notify();assert.notEqual(g.row().status,'approved');assert.equal(g.task(),undefined);
});

test('Checkout Pro confirms a full approved total when individual paid_amount is omitted',async()=>{
  const f=fixture(),id=await f.order();const snapshot=f.snapshot(id);
  delete snapshot.transactions.payments[0].paid_amount;
  await f.notify();
  assert.equal(f.row().status,'approved');assert.equal(f.row().review_required,0);
  assert.equal(f.env.DB.db.prepare('SELECT paid_cents FROM payments').get().paid_cents,2790);
  assert.equal(f.task().kind,'payment_approved');
});

for (const [name,change] of Object.entries({
  partial_total:{total_paid_amount:'1.00'},
  missing_total:{total_paid_amount:undefined},
  pending_order:{status:'created'},
  rejected_payment:{paymentStatus:'rejected'},
  explicit_zero:{paidAmount:'0'},
})) {
  test(`omitted transaction amount cannot approve ${name}`,async()=>{
    const f=fixture(),id=await f.order();const snapshot=f.snapshot(id,change);
    delete snapshot.transactions.payments[0].paid_amount;
    if(change.paymentStatus)snapshot.transactions.payments[0].status=change.paymentStatus;
    if(change.paidAmount)snapshot.transactions.payments[0].paid_amount=change.paidAmount;
    await f.notify();
    assert.notEqual(f.row().status,'approved');assert.equal(f.task(),undefined);
  });
}

test('receipt lookup requires the capability and discloses no email or redirect-based approval',async()=>{
  const f=fixture(),id=await f.order();
  f.snapshot(id,{status:'created',total_paid_amount:'0',transactions:{payments:[]}});
  const lookup=(key)=>f.worker.fetch(new Request(`${api}/orders/${id}?status=approved`,{headers:{Origin:site,Authorization:`Bearer ${key}`}}),f.env);
  assert.equal((await lookup('b'.repeat(64))).status,404);const response=await lookup(token);
  assert.equal(response.headers.get('Cache-Control'),'no-store');
  const {diagnostic,...receipt}=await response.json();
  assert.equal(diagnostic.code,'provider_not_approved');
  assert.deepEqual(receipt,{orderId:id,status:'pending',amountCents:2790,currency:'BRL',reviewRequired:false});
});

test('authenticated return confirms approval without a webhook and queues delivery once',async()=>{
  const f=fixture(),id=await f.order();f.snapshot(id);
  const lookup=(key=token)=>f.worker.fetch(new Request(`${api}/orders/${id}`,{headers:{Origin:site,Authorization:`Bearer ${key}`}}),f.env);
  assert.equal((await lookup('b'.repeat(64))).status,404);
  assert.equal(f.calls.length,1); // Invalid capability never triggers a provider request.
  const responses=await Promise.all([lookup(),lookup()]);
  assert.equal(f.calls.filter(c=>c.options.method==='GET').length,1);
  assert.equal((await (await lookup()).json()).status,'approved');
  assert.equal(f.row().status,'approved');assert.equal(f.task().kind,'payment_approved');
  await f.notify();
  assert.equal(f.env.DB.db.prepare('SELECT COUNT(*) AS n FROM outbox').get().n,1);
  assert.ok(responses.every(r=>r.status===200));
});

test('return polling is throttled and a provider failure preserves the recorded status',async()=>{
  const f=fixture(),id=await f.order();f.fail();
  const lookup=()=>f.worker.fetch(new Request(`${api}/orders/${id}`,{headers:{Origin:site,Authorization:`Bearer ${token}`}}),f.env);
  assert.equal((await (await lookup()).json()).status,'pending');
  assert.equal((await (await lookup()).json()).status,'pending');
  assert.equal(f.calls.length,2); // Create + one refresh, despite repeated polls.
  assert.equal(f.task(),undefined);
});

test('return never approves a provider snapshot with the wrong seller',async()=>{
  const f=fixture(),id=await f.order();f.snapshot(id,{user_id:'999'});
  const response=await f.worker.fetch(new Request(`${api}/orders/${id}`,{headers:{Origin:site,Authorization:`Bearer ${token}`}}),f.env);
  const body=await response.json();
  assert.equal(body.status,'pending');assert.equal(f.task(),undefined);
  assert.equal(body.diagnostic.code,'provider_snapshot_mismatch');
  assert.deepEqual(body.diagnostic.fields,['user_id']);
});

test('return diagnostics identify missing provider fields without exposing customer data',async()=>{
  const f=fixture(),id=await f.order();f.snapshot(id,{currency:undefined,last_updated_date:undefined,payer:{email:'private@example.com'}});
  const response=await f.worker.fetch(new Request(`${api}/orders/${id}`,{headers:{Origin:site,Authorization:`Bearer ${token}`}}),f.env);
  const body=await response.json();
  assert.equal(body.status,'pending');assert.equal(f.task(),undefined);
  assert.deepEqual(body.diagnostic.fields,['currency','last_updated_date']);
  assert.equal(JSON.stringify(body).includes('private@example.com'),false);
});

test('live receipts omit return diagnostics',async()=>{
  const f=fixture(),id=await f.order();f.env.PAYMENTS_MODE='live';f.snapshot(id,{user_id:'999'});
  const response=await f.worker.fetch(new Request(`${api}/orders/${id}`,{headers:{Origin:site,Authorization:`Bearer ${token}`}}),f.env);
  assert.equal((await response.json()).diagnostic,undefined);
});

test('scheduled reconciliation recovers a missing webhook using the stored Orders id',async()=>{
  const f=fixture(),id=await f.order();f.snapshot(id);let work;
  await f.worker.scheduled({},f.env,{waitUntil(p){work=p;}});await work;
  assert.equal(f.row().status,'approved');assert.equal(f.task().status,'pending');
  assert.ok(f.calls.some(c=>c.url.endsWith(`/v1/orders/${remoteId}`)));
});
