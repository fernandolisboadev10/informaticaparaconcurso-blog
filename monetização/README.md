# Monetização

Esta pasta reúne os arquivos comerciais do Informática para Concurso. O Astro gera o site a partir de `src/pages/`, `src/content/` e `public/` na raiz do projeto.

| Caminho | Conteúdo |
| --- | --- |
| `src/components/`, `src/utils/` e `src/data/` | Banners da Apostila Cebraspe e do Gerador de Questões, encaixe entre seções, métricas das ofertas, amostras e configurações de pagamento. |
| `src/pages/apostila/` | Página de vendas da Apostila Cebraspe e páginas de teste e acompanhamento de pagamento. |
| `src/content/blog/` | Versão comercial anterior do artigo sobre Recenseador do IBGE e suas imagens. O guia educacional fica no blog, em `/conteudo-programatico-ibge-recenseador-2026/`. |
| `src/assets/apostila/` e `public/images/` | Imagens e páginas de amostra da Apostila Cebraspe. |
| `services/vendas/` e `pagamento-worker/` | Serviços de pagamento e suas instruções. |
| `materiais-locais/` | PDFs completos e artes de venda locais, ignorados pelo Git. |

A rota `/apostila/pagamento/` importa a tela arquivada e continua disponível para pedidos já iniciados, com `noindex`. O `ads.txt` e a meta tag do AdSense continuam disponíveis para verificação.

## Reativar a página de vendas

1. Crie `src/pages/apostila/index.astro` com um componente importado de `../../../monetização/src/pages/apostila/index.astro`, seguindo o exemplo da rota de acompanhamento existente.
2. Copie `monetização/public/images/apostila-capa.webp` para `public/images/apostila-capa.webp` para servir a capa da página.
3. Execute `npm run build` e confira a página de vendas, o destino do botão de compra e o fluxo de acompanhamento.

O arquivo `suspensao.patch` registra uma configuração anterior. Use-o como referência histórica dos pontos de divulgação.
