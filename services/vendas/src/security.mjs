const encoder = new TextEncoder();
export const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const PROVIDER_ID = /^[a-z0-9_-]{1,100}$/i;

export async function hash(value) {
  return [...new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)))].map(b => b.toString(16).padStart(2, '0')).join('');
}

export function receiptToken(request) {
  const token = request.headers.get('Authorization')?.match(/^Bearer ([a-f0-9]{64})$/i)?.[1];
  return token ?? null;
}

// Mercado Pago's manifest signs data.id from the URL, x-request-id and ts.
// Do not replace this with a generic HMAC of the JSON body.
export async function verifyWebhook(request, secret, now = Date.now()) {
  const id = new URL(request.url).searchParams.get('data.id');
  const requestId = request.headers.get('x-request-id');
  if (!id || !PROVIDER_ID.test(id) || !requestId || requestId.length > 200 || !secret) return null;
  const signature = request.headers.get('x-signature') ?? '';
  const parts = signature.split(',').map(s => s.trim().split('='));
  const timestamps = parts.filter(p => p[0] === 'ts');
  const signatures = parts.filter(p => p[0] === 'v1');
  if (timestamps.length !== 1 || signatures.length !== 1) return null;
  const ts = timestamps[0][1];
  const signed = signatures[0][1];
  if (!/^\d{10,13}$/.test(ts ?? '') || !/^[a-f0-9]{64}$/i.test(signed ?? '')) return null;
  const milliseconds = Number(ts) * (ts.length <= 10 ? 1000 : 1);
  if (Math.abs(now - milliseconds) > 15 * 60 * 1000) return null;
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
  const bytes = new Uint8Array(signed.match(/../g).map(b => parseInt(b, 16)));
  const valid = await crypto.subtle.verify('HMAC', key, bytes, encoder.encode(`id:${id.toLowerCase()};request-id:${requestId};ts:${ts};`));
  return valid ? id : null;
}

export async function readJson(request, max = 4096) {
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) throw new Error('content_type');
  if (Number(request.headers.get('Content-Length')) > max) throw new Error('too_large');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('empty_body');
  const chunks = [];
  let size = 0;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > max) { await reader.cancel(); throw new Error('too_large'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}
