// Apostila de questões Cebraspe: produto pago, divulgado por banners (ApostilaBanner.astro).
// ATENÇÃO: troque APOSTILA_URL pelo link de compra (página de vendas ou checkout) antes de publicar.
export const APOSTILA_URL = '/apostila/';
export const APOSTILA_PRICE = 'R$ 19,90';
export const APOSTILA_QUESTIONS = 552;
// Para trocar a capa, substitua este arquivo (proporção 3:4).
export const APOSTILA_COVER = '/images/apostila-capa.webp';

export const apostilaAriaLabel = 'Apostila com mais de 500 questões reais da Cebraspe';

// Módulo da apostila que combina com cada categoria do blog (texto do banner da barra lateral).
export const MODULO_BY_CATEGORY: Record<string, { nome: string; questoes: number }> = {
  Sistemas: { nome: 'Sistemas Operacionais', questoes: 101 },
  Arquivos: { nome: 'Sistemas Operacionais', questoes: 101 },
  Office: { nome: 'Edição de Documentos', questoes: 183 },
  Redes: { nome: 'Redes de Computadores', questoes: 147 },
  Segurança: { nome: 'Segurança da Informação', questoes: 109 },
};
