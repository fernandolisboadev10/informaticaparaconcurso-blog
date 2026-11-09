ALTER TABLE orders RENAME COLUMN preference_id TO provider_order_id;
ALTER TABLE orders ADD COLUMN provider_updated_at INTEGER NOT NULL DEFAULT 0;
ALTER TABLE orders ADD COLUMN sync_token TEXT;
CREATE UNIQUE INDEX orders_provider_id ON orders(provider_order_id) WHERE provider_order_id IS NOT NULL;
ALTER TABLE payments ADD COLUMN paid_cents INTEGER NOT NULL DEFAULT 0;
