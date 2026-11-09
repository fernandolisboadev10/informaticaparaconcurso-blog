CREATE TABLE rate_limits (
  key TEXT PRIMARY KEY,
  attempts INTEGER NOT NULL DEFAULT 1,
  expires_at INTEGER NOT NULL
) STRICT;
CREATE INDEX rate_limits_expiry ON rate_limits(expires_at);
