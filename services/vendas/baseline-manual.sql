-- Only for a NEW database initialized from the generated apostila-orders-inicial.sql
-- containing the final schema of migrations 0001, 0002 and 0003.
-- Do not run against an older or unknown schema.
-- Records the existing schema for future Wrangler migrations; does not change sale records.
CREATE TABLE IF NOT EXISTS d1_migrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE,
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
INSERT OR IGNORE INTO d1_migrations (name) VALUES ('0001_orders.sql');
INSERT OR IGNORE INTO d1_migrations (name) VALUES ('0002_orders_api.sql');
INSERT OR IGNORE INTO d1_migrations (name) VALUES ('0003_rate_limits.sql');
