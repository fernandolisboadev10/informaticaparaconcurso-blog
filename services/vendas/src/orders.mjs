import { PROVIDER_ID } from './security.mjs';

export function cents(amount) {
  if ((typeof amount !== 'number' && typeof amount !== 'string') || !/^\d+(\.\d{1,2})?$/.test(String(amount))) return null;
  const [whole, decimal = ''] = String(amount).split('.');
  const value = Number(whole) * 100 + Number(decimal.padEnd(2, '0'));
  return Number.isSafeInteger(value) ? value : null;
}

const statusMap = {
  created:'pending',pending:'pending',action_required:'pending',processing:'in_process',in_process:'in_process',
  authorized:'authorized',failed:'rejected',rejected:'rejected',expired:'cancelled',canceled:'cancelled',cancelled:'cancelled',
  refunded:'refunded',charged_back:'charged_back',in_mediation:'in_mediation',
};

// Orders API contract: mercadopago SDK 3.6.1, clients/order/{create/types,commonTypes}.d.ts.
// The actual response and webhook contract must still be exercised with the merchant's test app.
export function normalizeOrder(snapshot, localOrder, env) {
  if (!PROVIDER_ID.test(snapshot.id ?? '') || snapshot.external_reference !== localOrder.id ||
    (localOrder.provider_order_id && localOrder.provider_order_id !== snapshot.id) ||
    snapshot.type !== 'online' || String(snapshot.user_id) !== env.MP_COLLECTOR_ID ||
    snapshot.currency !== 'BRL' || cents(snapshot.total_amount) !== 2790 || localOrder.amount_cents !== 2790 ||
    localOrder.product !== 'apostila-cebraspe-552' ||
    (snapshot.live_mode !== undefined && snapshot.live_mode !== (env.PAYMENTS_MODE === 'live'))) return null;
  const updated = Date.parse(snapshot.last_updated_date);
  const totalPaid = cents(snapshot.total_paid_amount ?? '0');
  if (!Number.isFinite(updated) || totalPaid === null) return null;
  const entries = snapshot.transactions?.payments ?? [];
  if (!Array.isArray(entries)) return null;
  const payments = [];
  const unique = new Set();
  let paid = 0, refunded = 0, review = false;
  for (const entry of entries) {
    const amount = cents(entry.amount), collected = cents(entry.paid_amount ?? '0'), returned = cents(entry.refunded_amount ?? '0');
    if (!PROVIDER_ID.test(entry.id ?? '') || unique.has(entry.id) || amount === null || amount < 1 || collected === null || returned === null || returned > amount) return null;
    unique.add(entry.id);
    const approved = entry.status === 'approved' || (entry.status === 'processed' && entry.status_detail === 'accredited');
    let status = approved && collected === amount ? 'approved' : statusMap[entry.status] ?? 'pending';
    if (approved && collected !== amount) review = true;
    if (returned > 0) status = 'refunded';
    if (entry.status === 'charged_back') status = 'charged_back';
    paid += collected; refunded += returned;
    payments.push({ id:entry.id,status,amount,collected,returned });
  }
  if (totalPaid !== paid) review = true;
  const refundRecords = snapshot.transactions?.refunds ?? [];
  let confirmedRefunds = 0, refundPending = false;
  for (const refund of refundRecords) {
    if (['rejected','cancelled','canceled','failed'].includes(refund.status)) continue;
    const value = cents(refund.amount);
    if (value === null) return null;
    if (['approved','processed'].includes(refund.status)) confirmedRefunds += value;
    else refundPending = true;
  }
  refunded = Math.max(refunded,confirmedRefunds);
  let status = statusMap[snapshot.status] ?? 'pending';
  if (['processed','approved'].includes(snapshot.status) && paid === 2790 && totalPaid === 2790 &&
      payments.length > 0 && payments.every(p => p.status === 'approved')) status = 'approved';
  if (refunded > 0 || snapshot.status === 'refunded') status = 'refunded';
  if (refundPending) { status = 'in_process'; review = true; }
  if (snapshot.status === 'charged_back' || payments.some(p => p.status === 'charged_back') || (snapshot.transactions?.chargebacks?.length ?? 0)>0) {
    status = 'charged_back'; review = true;
  }
  if ((refunded > 0 && refunded < 2790) || paid > 2790 || totalPaid > 2790) review = true;
  return { id:snapshot.id,status,updated,payments,review };
}
