# Plano: cluster "Reviews de celulares" (2 melhorias + 2 artigos novos)

Nada foi alterado nos artigos ainda. Este documento é o plano para aprovação.

## 1. Escopo

| # | Ação | Artigo | Slug |
|---|------|--------|------|
| A | Melhorar | Galaxy A57 | `review-galaxy-a57` |
| B | Melhorar | iPhone Duo | `iphone-duo-iphone-dobravel` |
| C | Criar | Galaxy S25 | `galaxy-s25` |
| D | Criar | iPhone 18 Pro e iPhone 18 Pro Max | `iphone-18-pro-e-pro-max` |

Categoria de todos: **Reviews**. As páginas de categoria (`/categoria/reviews/`) já existem e entram nos links.

## 2. Contexto verificado na pesquisa (a confirmar nas fontes oficiais ao escrever)

- **iPhone 18 Pro / Pro Max:** anunciados em setembro de 2026; venda no Brasil desde 18/09 (pré-venda em 12/09). Preços citados pela imprensa: Pro a partir de R$ 11.999; Pro Max de R$ 12.999 (256 GB) a R$ 21.999 (2 TB). Chip A20 Pro, câmera principal de 48 MP com abertura variável.
- **Galaxy S25:** lançado no Brasil a partir de R$ 6.999; em 2026 caiu para a faixa de R$ 3.000 a R$ 3.500 em promoções. O **Galaxy S26** foi apresentado em 25/02/2026 e parte de R$ 7.499 no Brasil. Por isso o ângulo não é "lançamento", e sim "vale a pena comprar hoje, com o preço em queda e o sucessor já no mercado".
- **Galaxy A57:** chegou em abril de 2026; o monitor de preços citado no artigo atual o mostra perto de R$ 1.700 (128 GB).
- **iPhone Duo:** pré-venda em 16/10 e loja em 23/10 de 2026, a partir de R$ 21.999.

## 3. O que melhorar nos dois artigos existentes

### A. Galaxy A57

| Problema hoje | Correção |
|---|---|
| A ficha técnica é só uma **imagem** (o Google não lê o texto dela) | Criar tabela de texto com tela, chip, câmeras, bateria, carregamento, IP68 e atualizações |
| "novo intermediário" no título já não é atual (saiu em abril) | Título com o gancho do preço: **"Galaxy A57 vale a pena em 2026? Preço caiu e ficha técnica"** (58) |
| Sem veredito visual | Caixa "Vale a pena?" no início, com a regra do preço (sim perto de R$ 2 mil) |
| Só 1 fonte institucional (CNN Brasil) e nenhuma da Samsung | Link para a página do A57 no site da Samsung Brasil e para o Samsung Newsroom Brasil |
| Só 2 links internos | Linkar S25, iPhone Duo e o iPhone 18 Pro |
| Última pergunta do FAQ sem ponto final | Corrigir |
| Preços atuais vêm de uma só loja | Citar a data da consulta e a fonte de cada valor |

### B. iPhone Duo

| Problema hoje | Correção |
|---|---|
| Tabela com **10 colunas e emojis**: ilegível no celular | Dividir em duas tabelas curtas (preços e ficha técnica) e reduzir o comparativo a 4 colunas |
| O artigo é um **preview**, mas está em "Reviews" e sem aviso | Deixar claro na abertura que o aparelho ainda não foi testado |
| Comparativo cita o "iPhone 18 Pro Max 2 TB" com dado estimado | Trocar pelos preços oficiais agora confirmados e linkar o artigo D |
| Fontes: Apple, Terra e Tabela FIPE (3 links, no limite) | Manter a Apple como institucional; conferir se a página ainda existe |
| Sem ligação com os outros celulares | Linkar A57, S25, iPhone 18 Pro e a categoria Reviews |
| `updated` sem hora | Colocar data com hora para subir no feed |

## 4. Artigos novos

### C. Galaxy S25

- **Título:** "Galaxy S25 vale a pena em 2026? Preço caiu e o S26 já chegou" (60 caracteres)
- **Palavra-chave:** "Galaxy S25" / "Galaxy S25 vale a pena".
- **Ângulo Discover:** queda de preço + decisão de compra + sucessor já lançado.
- **Estrutura:** veredito rápido; ficha técnica em tabela de texto; preço de lançamento × hoje (com faixa de bom negócio); S25 × S26 (o que mudou); S25 × A57 (quando o intermediário basta); quem deve comprar e quem deve esperar; FAQ.
- **Links internos:** Galaxy A57, iPhone 18 Pro, iPhone Duo, categoria Reviews.
- **Links institucionais (máx. 3):** página do S25 no site da Samsung Brasil; Samsung Newsroom Brasil; 1 fonte de preço (TechTudo ou Canaltech).

### D. iPhone 18 Pro e iPhone 18 Pro Max

- **Título:** "iPhone 18 Pro ou Pro Max: qual comprar? Preços no Brasil" (56 caracteres)
- **Palavra-chave:** "iPhone 18 Pro" e "iPhone 18 Pro Max".
- **Ângulo Discover:** lançamento em curso, dúvida de compra e preços em reais.
- **Estrutura:** resposta direta ("qual escolher"); tabela de preços por armazenamento (256 GB a 2 TB); ficha técnica lado a lado; câmera de abertura variável e chip A20 Pro; bateria; cores; comparação com o iPhone Duo; quem deve comprar cada um; FAQ.
- **Links internos:** iPhone Duo, Galaxy S25, Galaxy A57, categoria Reviews.
- **Links institucionais (máx. 3):** página do iPhone 18 Pro no site da Apple Brasil; Apple Newsroom Brasil (anúncio); 1 fonte de preço no Brasil.

## 5. Mapa de links internos do cluster

| De \ Para | A57 | Duo | S25 | iPhone 18 |
|---|---|---|---|---|
| **A57** | | ✔ | ✔ | ✔ |
| **Duo** | ✔ | | ✔ | ✔ |
| **S25** | ✔ | ✔ | | ✔ |
| **iPhone 18** | ✔ | ✔ | ✔ | |

Todos os quatro também linkam `/categoria/reviews/` e usam a lista `related` com os outros três.

## 6. Regras de qualidade (valem para os quatro)

1. **Só dado com fonte:** ficha técnica e preço vêm da página oficial (Samsung ou Apple) ou de veículo citado, com data da consulta. Nada de especificação inventada.
2. **Honestidade sobre "review":** não testamos os aparelhos. Usar "análise", "ficha técnica" e "vale a pena" no texto, e dizer que os dados vêm das fontes.
3. **Máximo de 3 links externos** por artigo; o primeiro é sempre a instituição (Samsung ou Apple).
4. **Tabelas curtas** (no máximo 5 colunas) e sem imagem no lugar de texto.
5. `date` com hora nos novos e `updated` com hora nos editados, para o feed ficar em ordem.
6. Rodar `node scripts/audit-discover.mjs` e o build antes de cada commit.

## 7. Ordem de execução

| Passo | Entrega |
|---|---|
| 1 | D: iPhone 18 Pro e Pro Max (tema quente, vale publicar primeiro) |
| 2 | C: Galaxy S25 |
| 3 | B: melhorar iPhone Duo (já com os links para D e C) |
| 4 | A: melhorar Galaxy A57 (já com os links para C e D) |
| 5 | Conferir os links cruzados, auditoria, build e um commit por artigo |

## 8. Decisões que preciso de você

1. **Imagens de capa:** você prefere enviar fotos (as mais seguras para o Discover) ou posso gerar capas sem logos e sem texto, com custo de centavos? As capas do A57 e do Duo já existem.
2. **Título do A57:** aceita trocar o título atual pelo de gancho de preço?
3. **Preços:** posso consultar a web para confirmar os valores do dia durante a escrita?
4. **Duo:** mantenho a categoria "Reviews", mesmo sendo um artigo de pré-lançamento?
