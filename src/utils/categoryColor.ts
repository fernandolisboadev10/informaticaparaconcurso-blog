// Cor do chip por categoria (texto branco por cima: todas passam de 4.5:1).
const COLORS: Record<string, string> = {
  "Simulados": '#6d28d9',
  "Redes": '#2563eb',
  "Segurança": '#15803d',
  "Sistemas": '#0f766e',
  "Office": '#b45309',
  "Dicas": '#0369a1',
  "Hardware": '#a21caf',
  "Concursos": '#be123c',
  "Arquivos": '#475569',
};

export const categoryColor = (category: string): string => COLORS[category] ?? '#6d28d9';
