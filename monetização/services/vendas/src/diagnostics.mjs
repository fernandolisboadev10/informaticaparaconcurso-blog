const fields = ['type','processing_mode','external_reference','total_amount','currency','items','payer.email','payer','config.online','config','transactions','checkout_url'];
const upperCodes = new Set(['PA_UNAUTHORIZED_RESULT_FROM_POLICIES','UNAUTHORIZED','BAD_REQUEST']);
export function safeProviderDetails(body) {
  const raw = body?.errors?.[0]?.code ?? body?.cause?.[0]?.code ?? body?.error?.code ?? body?.error;
  const text = typeof raw === 'string' || typeof raw === 'number' ? String(raw) : '';
  const code = /^[a-z_]{1,48}$/.test(text) || /^\d{1,5}$/.test(text) || upperCodes.has(text) ? text : 'unknown_provider_error';
  const messages = [body?.message,...(Array.isArray(body?.errors) ? body.errors.map(e => e.message) : []),...(Array.isArray(body?.cause) ? body.cause.map(e => e.description) : [])].filter(s => typeof s === 'string').join(' ');
  return { code,mentionedFields:fields.filter(field => new RegExp(`\\b${field.replaceAll('.', '\\.')}\\b`).test(messages)) };
}

export class ProviderFailure extends Error {
  constructor(status, code, mentionedFields = []) {
    super('payment_provider_unavailable');
    this.providerStatus = status;
    this.providerCode = code;
    this.mentionedFields = mentionedFields;
  }
}

export function safeFailure(error, phase) {
  return {
    phase,
    providerStatus: error instanceof ProviderFailure ? error.providerStatus : 0,
    providerCode: error instanceof ProviderFailure ? error.providerCode : phase === 'checkout_link' ? 'invalid_checkout_response' : 'internal_error',
    mentionedFields: error instanceof ProviderFailure ? error.mentionedFields : [],
  };
}
