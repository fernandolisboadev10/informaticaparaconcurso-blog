# Revisão conservadora do portal

Data: 10/11/2026. Base: `46922db6e7f811871f3c82e592b7c65b27067005`.

## Escopo e evidências

O portal é um site estático em Astro 7, publicado pelo GitHub Pages. O acervo contém 54 arquivos de artigos Markdown. O build da base gerou 79 páginas. Dependências instaladas com `npm ci`, sem atualizar manifests ou lockfile.

O domínio público continua bloqueado pela política de rede deste ambiente. Esta revisão foi feita no código fornecido e nas páginas compiladas localmente; não comprova o estado atual de produção nem o resultado da análise do AdSense. Fontes Google ficaram inacessíveis durante o build local: o Astro concluiu com avisos e fontes de fallback. A comparação visual é, portanto, aproximada quanto à tipografia.

Já existem: navegação por assunto, trilha Por onde começar, simulados interativos, índice por H2, barra de leitura, autoria identificada, referências em artigos, Sobre, contato por e-mail, transparência, privacidade e cookies. O repositório tem metadados de verificação Google/AdSense, ads.txt e controle de consentimento. A presença desses elementos não comprova aprovação ou conformidade integral.

## Problemas confirmados e lote preparado

| Achado | Evidência | Correção local |
| --- | --- | --- |
| Links de menu fechado recebem foco | No Chromium a 390 px, Tab após a busca focava Início dentro do menu recolhido | Menu fechado invisível à navegação; estado inert, Escape, retorno de foco e fechamento ao mudar para desktop |
| Não havia atalho ao conteúdo | Página de artigo exigia atravessar cabeçalho por teclado | Link Pular para o conteúdo e alvo principal focável |
| Navegação ativa dependia da query string | Header comparava pathname + search; o item perdia o estado com parâmetros | Comparação por pathname; aria-current também no menu móvel |
| Busca e menu podiam ficar abertos juntos | Dois controles independentes sem coordenação | Abrir um fecha o outro; sem mudar destinos de links |
| Descrição do Blog ainda citava IA, jogos e curiosidades | Texto em src/pages/blog/index.astro incompatível com matérias do acervo | Descrição de aulas, resumos e simulados de Informática, com mesma URL e título |
| Filtro não anunciava seleção nem contagem | aria-pressed ausente; mudanças só visuais | Grupo identificado, estado pressionado e contagem baseada nos resultados reais |
| Texto branco no filtro ativo escuro tem contraste baixo | Fundo violeta claro com texto branco no tema escuro | Par de cores do tema; teste de contraste mínimo 4,5:1 |
| Ver mais podia aparecer sem resultados | Regra display:flex sobrepunha a ocultação HTML | Regra explícita para atributo hidden |
| Fallbacks dependiam de variáveis de fonte disponíveis | Build sem acesso ao provedor não gerava as famílias | Fallbacks CSS para fontes de sistema, preservando as famílias principais |

O lote inicial se restringe a Header, BaseLayout (somente atalho e alvo principal), estilos globais (fallbacks/atalho) e página Blog. A pedido do responsável, também foi padronizado o banner do Gerador: a home e os 54 artigos usam o modelo azul com celular, substituindo o cartão verde antigo. O conteúdo Markdown, as datas e as URLs dos artigos são preservados.

## Pontos para uma etapa separada

1. **Consentimento regional.** BaseLayout usa fuso horário e localStorage para decidir o estado inicial. Isso não identifica de forma confiável a localização nem comprova uso de uma CMP certificada. Conferir no painel e na orientação oficial vigente se a configuração atende aos públicos atendidos, incluindo EEE, Reino Unido e Suíça quando aplicável. Não trocar o banner ou a integração durante esta revisão.
2. **Configuração de sitemap.** Há um filtro escrito para `/categoria/`, enquanto as rotas atuais usam `/category/`. O regex da data de agendamento também está incorreto (`date:s*(S+)`). As páginas atuais usam `isPublished`; não encontramos os redirects legados de categorias no sitemap gerado. Tratar as divergências com testes específicos de categoria vazia, draft e agendamento antes de alterar indexabilidade.
3. **Auditor Discover existente.** A base retorna 2/54 artigos com avisos: título de 74 caracteres em gabarito-extraoficial-pm-ma-soldado; descrição de 156 caracteres em simulado-vespera-concurso. São limites internos do script, não requisitos universais do Google ou prova de problema no AdSense. Nenhum texto foi encurtado automaticamente.
4. **Artigo piloto.** Em regra-3-2-1, as seções são H3; o índice atual só considera H2. Também há um trecho avulso 3-2-1 e repetição da apresentação da regra, aparentando material herdado da migração. Preparar revisão editorial, preservando URL e fontes. Ver proposta separada; o artigo publicado não foi modificado.
5. **Promessas editoriais.** Sobre usa afirmações amplas, como disciplina que mais reprova no Brasil e conteúdos sempre atualizados. Revisar com o autor se há evidência ou se convém uma formulação mais precisa. Não criar dados ou credenciais para reforçar essas alegações.

## Preservações verificadas

Comparação automática com o build anterior: mesmas 79 rotas; metadados preservados, exceto a descrição corrigida do Blog e suas equivalentes sociais; robots, canônicas, datas e identificadores iguais. Arquivos ads.txt, robots.txt, CNAME, RSS e sitemaps comparados byte a byte. Script de anúncios/consentimento e CookieBanner preservados no código; todos os 54 artigos comparados sem alterações.

Não foram modificados publisher ID, código de verificação, carregamento de anúncios, Analytics, escolha de consentimento, checkout, preços, links comerciais, domínio, redirects, workflow de publicação, dependências ou schema. O navegador de teste bloqueia requisições externas e inicia com consentimento recusado para não carregar publicidade nem analytics durante a validação.

## Execução local e revisão

- Build: `ASTRO_TELEMETRY_DISABLED=1 XDG_CACHE_HOME=/workspace/.cache npm run build` neste ambiente. A variável de cache evita escrita fora do workspace; não é exigência de produção.
- Navegador: `BLOG_PLAYWRIGHT_MODULE=/caminho/para/playwright node scripts/check-ux.mjs` após o build. Usa Playwright já instalado; nenhuma dependência foi adicionada ao portal. `BLOG_BASELINE_DIST` habilita comparação com um build anterior preservado; `BLOG_SCREENSHOT_DIR` salva capturas.
- Validação final: build concluído com 79 páginas (avisos de fontes externas); `scripts/check-ux.mjs` com 18 verificações aprovadas e nenhuma falha; `git diff --check` aprovado. Navegação, filtro/contagem, foco do atalho, contraste e ausência de overflow testados em 320/390/768/1440 px, claro/escuro, com movimento reduzido.
- O script `node scripts/audit-discover.mjs` continua com os mesmos dois avisos da base, com saída idêntica à anterior.
- A publicação na main aciona GitHub Pages. O responsável autorizou commit e deploy depois da substituição do banner. Confirmar o status da execução no GitHub Actions: envio do commit não é prova de publicação concluída.

A evolução é incremental e reversível por arquivo. Melhorias técnicas não garantem aprovação no AdSense.


## Banner aprovado com celular

`QuestoesCTA.astro` agora concentra o modelo azul com `QuestionPhoneDemo`, a chamada Criar questões e o link existente do produto. A home usa placement home, com slot home-gerador; o PostLayout inclui o banner em todos os artigos, com slot post-fim-gerador. O script compartilhado mantém os eventos banner_view/banner_click, verificados sem duplicação. O modelo verde e sua demonstração de TCP foram removidos. Divulgação da apostila, checkout, consentimento e anúncios AdSense não foram alterados. O link contextual no resultado dos simulados continua funcional.

O celular permanece visível de 320 a 1440 px. Animação ilustrativa respeita movimento reduzido. O banner está no final do conteúdo do artigo/simulado, sem sobrepor texto ou botões de resposta. A aparência geral do portal é mantida.
