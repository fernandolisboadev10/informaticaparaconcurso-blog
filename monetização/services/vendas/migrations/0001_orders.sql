CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  checkout_key TEXT NOT NULL UNIQUE,
  receipt_hash TEXT NOT NULL,
  email TEXT NOT NULL,
  product TEXT NOT NULL DEFAULT 'apostila-cebraspe-552',
  amount_cents INTEGER NOT NULL DEFAULT 2790 CHECK (amount_cents = 2790),
  currency TEXT NOT NULL DEFAULT 'BRL' CHECK (currency = 'BRL'),
  checkout_state TEXT NOT NULL DEFAULT 'creating' CHECK (checkout_state IN ('creating', 'ready', 'failed')),
  preference_id TEXT,
  checkout_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','in_process','authorized','approved','rejected','cancelled','refunded','charged_back','in_mediation')),
  review_required INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  reconciled_at INTEGER NOT NULL DEFAULT 0
) STRICT;

CREATE TABLE payments (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id),
  status TEXT NOT NULL,
  amount_cents INTEGER NOT NULL,
  refunded_cents INTEGER NOT NULL DEFAULT 0,
  provider_updated_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
) STRICT;
CREATE INDEX payments_order ON payments(order_id);
CREATE INDEX orders_reconcile ON orders(reconciled_at, created_at);

-- Payment verification and future delivery tasks are persisted in one D1 batch.
-- No email or download is sent by this phase of the integration.
CREATE TABLE outbox (
  id INTEGER PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id),
  kind TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at INTEGER NOT NULL,
  UNIQUE(order_id, kind)
) STRICT;
