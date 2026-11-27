import test from 'node:test';
import assert from 'node:assert/strict';
import { safeProviderDetails, ProviderFailure, safeFailure } from '../src/diagnostics.mjs';
import { createWorker } from '../src/index.mjs';

test('provider error metadata excludes messages, credentials and customer values',()=>{
  const info=safeProviderDetails({error:'bad_request',message:'Invalid payer.email comprador@example.com and config.online. Access token APP_USR_not_for_logs'});
  assert.equal(info.code,'bad_request');
  assert.ok(info.mentionedFields.includes('payer.email'));
  const text=JSON.stringify(info);assert.equal(text.includes('@'),false);assert.equal(text.includes('APP_USR'),false);
});

test('arbitrary error strings and raw exceptions never become diagnostics',()=>{
  for(const error of ['comprador@example.com','APP_USR-private-token','a'.repeat(64),{token:'private'}]){
    assert.equal(safeProviderDetails({error}).code,'unknown_provider_error');
  }
  const result=safeFailure(new Error('D1 internal query with comprador@example.com'),'database_update');
  assert.deepEqual(result,{phase:'database_update',providerStatus:0,providerCode:'internal_error',mentionedFields:[]});
});

test('upstream HTTP status is retained with bounded safe codes',()=>{
  const result=safeFailure(new ProviderFailure(401,'unauthorized'),'provider_request');
  assert.equal(result.providerStatus,401);assert.equal(result.providerCode,'unauthorized');
  assert.equal(safeProviderDetails({error:'PA_UNAUTHORIZED_RESULT_FROM_POLICIES'}).code,'PA_UNAUTHORIZED_RESULT_FROM_POLICIES');
});

test('health identifies the diagnostics build without exposing secrets',async()=>{
  const response=await createWorker().fetch(new Request('https://example.com/health'),{});
  assert.deepEqual(await response.json(),{service:'apostila-vendas',checkoutEnabled:false,diagnosticsVersion:1,returnSyncVersion:3});
});
