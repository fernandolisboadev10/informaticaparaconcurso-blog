# Plano de revisão para o Google Discover — TechOnPlay

Escopo: 21 artigos em `src/content/blog/`. Nada foi alterado ainda; este documento é o plano.

## 1. Diagnóstico (o que encontrei)

**Estrutura / técnico**
- Nenhum artigo usa link interno relativo. Os 44 links "internos" são absolutos (`https://techonplay.com.br/...`) e vêm de um bloco "Leia também" repetido, quase idêntico em ~8 artigos (Subway Surfers, Google Flow, Higgsfield, navegadores). Não tem relação temática: Steam Machine e Linux Mint apontam para navegadores e Google Flow.
- `BaseLayout.astro` não tem `<meta name="robots" content="max-image-preview:large">`. Esse é o requisito nº 1 para imagem grande no Discover.
- `PostLayout.astro`: `dateModified` usa `date` em vez de `updated`. O schema `BlogPosting` não tem `image` como array nem `author.url`.
- `og:image` usa `image.src` sem largura/altura declaradas; falta `og:image:width/height` e `article:published_time`/`modified_time`.
- Todas as imagens de capa têm 1200×800 (ok, ≥1200 px). O `<Image>` do hero é renderizado a 720×480, mas o og/schema usa o arquivo original.
- `requisitos-pc-gta-6-2026.md` **não tem `image` nem `imageAlt`**. Sem imagem grande, o artigo fica fora do Discover.
- `tags` e `readingTime` estão ausentes em quase todos os artigos.
- `filme-inteligencia-artificial.md` linka para `techonplay.com` (domínio antigo em inglês), que deve ser removido.

**Títulos e descrições (problemas recorrentes)**
- Vários títulos passam de 65 caracteres e são cortados: `iphone-duo` (~68), `melhor-navegador` (~68), `google-ai-plus` (~70), `navegadores-alternativos`.
- Muitos seguem a fórmula de SEO ("X: guia prático", "veja 3 faixas"). Discover premia títulos com curiosidade/novidade, sem clickbait.
- Descrições: `review-galaxy-a57` tem erro ("e descubra se o ainda vale a pena"); `ia-que-cria-ia` está sem ponto final e passa de 155 caracteres.
- Vários artigos têm gancho fraco (evergreen puro): `o-que-e-bncc`, `o-que-significa-gpt`, `cmd-comandos-windows`.

## 2. Critérios do "ângulo Discover" (checklist por artigo)

| # | Item | Regra |
|---|------|-------|
| 1 | Título | ≤ 65 caracteres, gancho de curiosidade ou novidade, entidade forte (Google, Apple, GTA 6), sem clickbait nem MAIÚSCULAS |
| 2 | Meta descrição | 120–155 caracteres, promessa concreta + dado novo, sem repetir o título |
| 3 | Imagem de capa | ≥ 1200 px de largura, 3:2, sem texto embutido, sujeito claro, sem logo de terceiros; alt descritivo |
| 4 | Abertura | Primeiro parágrafo entrega o fato principal (quem/o quê/quando/quanto) |
| 5 | Atualidade | `updated` real, dados datados (preço, data, versão) conferidos |
| 6 | E-E-A-T | Autor, fonte primária citada, sem afirmação sem fonte |
| 7 | Categoria/tags | Categoria única; 3–5 tags de entidade |
| 8 | Links | 3–6 internos contextuais + até 3 externos de fonte primária |

## 3. Trabalho de infraestrutura (1 PR, antes dos artigos)

1. `BaseLayout.astro`: adicionar `<meta name="robots" content="max-image-preview:large, max-snippet:-1, max-video-preview:-1">`.
2. `PostLayout.astro`: `dateModified` = `updated ?? date`; `image` como array com URL absoluta; `author.url`; passar `updated` como prop; `og:image:width/height`, `article:published_time`, `article:modified_time`.
3. Criar o componente `RelatedPosts.astro` (3 cards no fim do artigo) e remover os blocos "Leia também" manuais nos `.md`. Critério de relação: mesma categoria + tags em comum, com fallback para os mais recentes.
4. Confirmar sitemap com `lastmod` e o feed RSS com `<enclosure>` de imagem.
5. Adicionar `tags` ao schema (já existe) e preenchê-las em todos os artigos.
6. Script de auditoria `scripts/audit-discover.mjs`: falha se título > 65, descrição fora de 120–155, sem imagem, sem alt, links externos > 3, links internos < 3, ou links `techonplay.com` sem `.br`.

## 4. Mapa de links internos (cluster temático)

Os links são contextuais, dentro do corpo do texto (âncora descritiva, sem "clique aqui"). Cada artigo recebe de 3 a 5 links, e cada um deve ser destino de pelo menos 2.

| Cluster | Artigos | Hub sugerido |
|---|---|---|
| IA criativa (vídeo/imagem) | `google-flow-gratis`, `comandos-camera-google-flow`, `plugin-higgsfield-chatgpt`, `46-comandos-do-chatgpt`, `google-ai-plus-para-estudantes` | `google-flow-gratis` |
| IA — notícia e conceito | `ia-que-cria-ia`, `o-que-significa-gpt`, `filme-inteligencia-artificial` | `o-que-significa-gpt` |
| Windows / PC | `cmd-comandos-windows`, `limpar-arquivos-temporarios-windows`, `melhor-navegador-para-pc`, `navegadores-alternativos`, `linux-mint-xepub-clockenstei` | `melhor-navegador-para-pc` |
| Jogos / hardware | `steam-machine`, `requisitos-pc-gta-6-2026`, `subway-surfers-em-alta` | `steam-machine` |
| Celulares | `iphone-duo-iphone-dobravel`, `review-galaxy-a57` | `iphone-duo-iphone-dobravel` |
| Educação / Brasil | `o-que-e-bncc`, `competencias-bncc-robotica-educacional`, `urna-eletronica-curiosidades` | `o-que-e-bncc` |

Pontes entre clusters (1 link cada, quando fizer sentido): GTA 6 ↔ Steam Machine ↔ limpar temporários (desempenho); Google AI Plus ↔ Google Flow ↔ BNCC (estudantes); Linux Mint ↔ navegadores; filme Artificial ↔ `ia-que-cria-ia` ↔ GPT.

## 5. Regra para links externos (máx. 3 por artigo)

- Só fonte primária ou de referência: blog oficial da empresa, documentação, órgão público, Variety/9to5Google quando a notícia depender deles.
- Sem concorrentes diretos de notícias brasileiras se puder evitar; sem sites de afiliado.
- Abrir com `rel="noopener"`; o `rehype-external-links` já está configurado, então basta confirmar `nofollow` só em fontes não confiáveis.
- Se um artigo tem mais de 3 externos hoje, manter os 3 mais úteis e converter o resto em texto ou em citação sem link.
- Verificar cada URL (status 200) antes de mantê-la.

## 6. Fila de revisão por artigo

Prioridade = potencial de Discover (novidade + entidade forte + imagem). Cada item aplica o checklist da seção 2.

**Prioridade A (fazer primeiro):**
1. `iphone-duo-iphone-dobravel` — encurtar título (≤ 65), manter o gancho do preço; confirmar valores e data de outubro.
2. `steam-machine` — checar preço/data; ligar a GTA 6 e Subway Surfers (jogos).
3. `requisitos-pc-gta-6-2026` — **criar imagem de capa** (`npm run image`), alt e tags; ligar a Steam Machine.
4. `google-flow-gratis` — hub do cluster IA; conferir créditos/preços; 3 externos (blog.google, 9to5Google, plano).
5. `google-ai-plus-para-estudantes` — título ≤ 65; validar prazo da oferta; link ao Flow.
6. `filme-inteligencia-artificial` — remover link `techonplay.com`; manter Variety.
7. `review-galaxy-a57` — **corrigir a meta descrição quebrada**; título mais direto.

**Prioridade B:**
8. `ia-que-cria-ia`, 9. `plugin-higgsfield-chatgpt`, 10. `comandos-camera-google-flow`, 11. `46-comandos-do-chatgpt`, 12. `subway-surfers-em-alta`, 13. `linux-mint-xepub-clockenstei`, 14. `melhor-navegador-para-pc`, 15. `navegadores-alternativos`.

**Prioridade C (evergreen, menor apelo de Discover; reescrever o gancho):**
16. `o-que-e-bncc`, 17. `competencias-bncc-robotica-educacional`, 18. `o-que-significa-gpt`, 19. `cmd-comandos-windows`, 20. `limpar-arquivos-temporarios-windows`, 21. `urna-eletronica-curiosidades` (melhor janela: eleições).

## 7. Etapas de execução

| Etapa | Entrega | Verificação |
|---|---|---|
| 0 | Script de auditoria + relatório de base (nº de falhas por regra) | `node scripts/audit-discover.mjs` |
| 1 | Infra (seção 3): meta robots, schema, `RelatedPosts`, remoção do "Leia também" manual | `npm run build`; inspeção do HTML de 2 posts |
| 2 | Artigos da prioridade A (título, descrição, imagem, links) | Auditoria zerada nesses 7 |
| 3 | Prioridade B | Idem |
| 4 | Prioridade C | Idem |
| 5 | Validação final: build, links quebrados, Rich Results Test em 3 posts, envio do sitemap no Search Console | Relatório final |

Cada etapa vira um commit separado. Não publico nada sem sua aprovação.

## 8. Decisões que preciso de você

1. **Imagens novas:** posso gerar capas novas com `npm run image` (usa `OPENROUTER_API_KEY`, gera custo) para GTA 6 e para os artigos com capa fraca?
2. **Tom dos títulos:** aceita títulos com mais gancho de curiosidade (ex.: "Por que o iPhone Duo custa mais que uma moto"), mantendo a veracidade?
3. **Datas:** posso atualizar `updated` apenas quando revisar os fatos, sem inventar datas?
4. **Fatos:** para preços e datas (iPhone Duo, Steam Machine, GTA 6), quer que eu verifique na web durante a revisão?
