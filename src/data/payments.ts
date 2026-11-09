// These settings are public build configuration, never Mercado Pago or Cloudflare credentials.
const raw = import.meta.env.PUBLIC_PAYMENTS_API_URL ?? 'https://apostila-vendas.fernandolisboa-dev.workers.dev';
let apiUrl = '';
try {
  const url = new URL(raw);
  const local = import.meta.env.DEV && url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname);
  if ((url.protocol === 'https:' || local) && url.pathname === '/' && !url.username && !url.password && !url.search && !url.hash) apiUrl = url.origin;
} catch { /* Checkout stays unavailable until a valid backend is configured. */ }

export const PAYMENTS_API_URL = apiUrl;
export const PAYMENTS_UI_ENABLED = import.meta.env.PUBLIC_APOSTILA_CHECKOUT_ENABLED === 'true' && !!apiUrl;
