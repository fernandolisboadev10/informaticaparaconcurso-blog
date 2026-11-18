# Divulgação da apostila e do Gerador de Questões

Esta pasta guarda os banners, imagens, amostras e a página de vendas da apostila fora das pastas que o Astro publica. O checkout de teste do Mercado Pago também está aqui. A página de acompanhamento em `/apostila/pagamento/` continua atendendo pedidos já iniciados.

O blog encaminhava para a página do Gerador em `geradordequestoes.site`. A pasta guarda o banner, a demonstração e a configuração do link usados no blog. O Gerador tem hospedagem própria.

## Como reativar

1. Copie os arquivos de `monetização/src/` e `monetização/public/` para as pastas `src/` e `public/` da raiz, mantendo os caminhos relativos.
2. Na raiz do projeto, confira e reverta o patch para repor os pontos de divulgação. Se as páginas tiverem mudado e a conferência indicar conflito, use o patch como referência para recolocar os trechos.

   ```sh
   git apply --reverse --check "monetização/suspensao.patch"
   git apply --reverse "monetização/suspensao.patch"
   ```

3. Rode `npm run build` e confira os banners, a página `/apostila/` e os destinos dos botões antes de publicar.
