# Divulgação da apostila e do Gerador de Questões

Esta pasta guarda os banners da Apostila e do Gerador de Questões, a página de vendas com checkout da Hotmart e suas imagens e amostras fora das pastas que o Astro publica. A página de acompanhamento em `/apostila/pagamento/` continua atendendo pedidos já iniciados.

O patch guarda os pontos de divulgação do blog e o carregamento do AdSense. A meta tag `google-adsense-account` e o `ads.txt` continuam disponíveis para verificação do site.

## Como reativar

1. Copie a capa de `monetização/public/images/` e os arquivos da lista abaixo para seus caminhos originais em `src/`. `ApostilaBanner.astro`, `QuestoesCTA.astro`, `ApostilaCheckout.astro` e `teste-pagamento.astro` são de uma configuração anterior.

   - `assets/apostila/`
   - `components/ApostilaSample.astro`, `GeneratorAnchor.astro`, `QuestionPhoneDemo.astro`, `SalesArrow.astro` e `StudyOffer.astro`
   - `data/apostila-samples.ts`, `apostila.ts` e `questoes.ts`
   - `pages/apostila/index.astro`
2. Na raiz do projeto, confira e reverta o patch para repor os pontos de divulgação. Se as páginas tiverem mudado e a conferência indicar conflito, use o patch como referência para recolocar os trechos.

   ```sh
   git apply --reverse --check "monetização/suspensao.patch"
   git apply --reverse "monetização/suspensao.patch"
   ```

3. Rode `npm run build` e confira os banners, a página `/apostila/` e os destinos dos botões antes de publicar.
