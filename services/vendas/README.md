# Pagamentos da apostila — Cloudflare Worker

Backend separado do Astro/GitHub Pages. Preço fixo de **R$ 27,90**, compra única.
Usa **Mercado Pago Checkout Pro com API de Orders** (`POST /v1/orders`), não API de Preferências.

## Estado desta implementação

- Worker e migrações D1 preparados, com checkout desativado por padrão.
- Testes automatizados usam respostas simuladas do provedor e SQLite real.
- O contrato de Orders foi conferido nos tipos do SDK oficial `mercadopago@3.6.1`
  (`clients/order/create/types.d.ts`, `commonTypes.d.ts` e `search/types.d.ts`).
- Ainda é obrigatório executar o fluxo real com a aplicação de **teste** do vendedor,
  confirmar os campos retornados e validar o webhook pelo painel do Mercado Pago.
- Este módulo registra a tarefa `payment_approved` na outbox. **Não envia e-mails nem PDFs ainda.**
- Nenhuma transação real, publicação remota, credencial real ou envio de arquivo é realizado pelos testes.
- Os links comerciais antigos do blog permanecem até a troca final, após testes de pagamento e entrega.

## Contrato HTTP

| Rota | Função |
| --- | --- |
| `GET /health` | Responde sobre o processo e se o checkout está habilitado; não comprova acesso à API do provedor |
| `POST /checkout` | Cria uma order com valor definido no servidor e retorna a `checkout_url` |
| `POST /webhooks/mercado-pago?data.id=...` | Valida assinatura e consulta `GET /v1/orders/{id}` |
| `GET /orders/{id}` | Consulta protegida do pedido, sem divulgar e-mail |

O checkout exige origem autorizada, `Idempotency-Key` UUID v4, `Authorization: Bearer <token aleatório de 32 bytes em hexadecimal>` e JSON `{ "email": "..." }`.
O mesmo token autoriza a consulta do pedido. Somente seu hash é guardado no D1.
A página conserva o token na `sessionStorage` da aba; ele não vai nas URLs de retorno.
Atualizar ou falsificar `status=approved` no navegador não aprova pedidos.

## Instalar e verificar

Execute no checkout existente; não crie um worktree apenas para configurar o ambiente.

```sh
cd /workspace/informaticaparaconcurso-blog/services/vendas
npm ci
npm test
npm run check
npm run db:local
npm run dev
```

No ambiente gerenciado, use um diretório gravável para o Wrangler, se necessário:

```sh
export XDG_CONFIG_HOME=/workspace/.config
export WRANGLER_SEND_METRICS=false
```

`npm run check` é um empacotamento local (`--dry-run`), não uma publicação.
O ID de D1 zerado no arquivo de configuração é apenas um marcador; substitua-o pelo ID real antes de qualquer migração/publicação remota.

Se o banco novo foi inicializado manualmente pelo Console com o arquivo `apostila-orders-inicial.sql` gerado nesta sessão, ele já contém o esquema final das três migrações. Nesse caso, execute `baseline-manual.sql` uma vez para registrar esse histórico antes de usar futuras migrações do Wrangler; não reaplique as três primeiras migrações sobre as tabelas existentes. Não use esse baseline em um banco antigo ou de esquema desconhecido.

## Configurar no Cloudflare

1. Criar o Worker **apostila-vendas** e o D1 **apostila-orders**.
2. Copiar o ID real do D1 para `d1_databases[0].database_id` em `wrangler.jsonc`.
3. Definir `API_PUBLIC_URL` com a origem HTTPS real do Worker, sem caminho ou barra final.
4. Vincular o banco com o nome **DB**. O Wrangler registra também o limitador **CHECKOUT_RATE_LIMITER**: cinco tentativas por IP a cada 60 segundos. Pelo painel, esse vínculo adicional é opcional: sem ele, o Worker aplica o limite no D1, com hash temporário do IP.
5. Manter `CHECKOUT_ENABLED=false` durante a configuração.
6. Usar `PAYMENTS_MODE=test` e o `MP_COLLECTOR_ID` correspondente ao vendedor das credenciais de teste.
7. Cadastrar estes **segredos** diretamente no Cloudflare, sem valores no Git ou no chat:
   - `MP_ACCESS_TOKEN`: Access Token do ambiente de teste da aplicação Orders.
   - `MP_WEBHOOK_SECRET`: segredo de assinatura das notificações de teste da mesma aplicação.
8. Aplicar as três migrações, em ordem, antes de testar o código.

Variáveis públicas do Worker:

| Nome | Valor inicial |
| --- | --- |
| `CHECKOUT_ENABLED` | `false` |
| `PAYMENTS_MODE` | `test` |
| `SITE_URL` | `https://informaticaparaconcurso.com.br` |
| `API_PUBLIC_URL` | Endereço HTTPS real do Worker |
| `ALLOWED_ORIGINS` | `https://informaticaparaconcurso.com.br` |
| `MP_COLLECTOR_ID` | ID numérico do vendedor usado no teste |

O `user_id` da Orders consultada deve corresponder a `MP_COLLECTOR_ID`.
O modo de teste depende das credenciais e contas de teste do Mercado Pago; quando a resposta também fornece `live_mode`, o backend verifica sua compatibilidade. Não deduzir modo apenas pelo hostname do checkout.

## Publicação pelo Wrangler (com a conta autenticada)

```sh
cd services/vendas
npx wrangler login
# Se o banco ainda não existe, crie-o uma única vez:
npx wrangler d1 create apostila-orders
# Atualize wrangler.jsonc com o ID real, variáveis e URL do Worker.
npm run db:remote
npx wrangler secret put MP_ACCESS_TOKEN
npx wrangler secret put MP_WEBHOOK_SECRET
npm run deploy
```

Os comandos `secret put` solicitam os valores de forma privada. Não inclua os valores na linha de comando.
Se os recursos já foram criados pelo painel, reutilize-os em vez de criar duplicatas.
Não é necessário mover o blog, alterar os DNS da Hostinger ou configurar o gerador na Vercel nesta etapa.

## Mercado Pago: aplicação Orders de teste

1. Criar a aplicação selecionando **Checkout Pro → API de Orders**.
2. Configurar as notificações de **Orders** com `https://<endereço real do Worker>/webhooks/mercado-pago`.
3. Guardar a assinatura secreta dessa configuração no segredo `MP_WEBHOOK_SECRET`.
4. Confirmar com uma notificação do painel a assinatura (`x-signature`, `x-request-id`, `data.id`) e o tipo efetivamente enviado (`order`/`orders`).
5. Fazer uma compra com comprador/cartão de teste. Conferir `checkout_url`, `user_id`, moeda, total, transações e status retornados por `GET /v1/orders/{id}`.
6. Testar aprovação, pendência, recusa, cancelamento, reembolso, duplicação de webhook e retorno sem token.

A assinatura usa o manifesto documentado `id:<data.id em minúsculas>;request-id:<x-request-id>;ts:<ts>;`. A tolerância local é de 15 minutos; validar o comportamento de novas tentativas do provedor antes da produção. Notificações antigas não autorizam entrega e a reconciliação recupera estados perdidos.
O Worker aceita tópicos `order` e `orders`, mas a aprovação sempre depende da consulta autenticada e das verificações do pedido.

## Recuperação e garantias

- A criação do Checkout Pro usa `processing_mode: 'manual'` e `capture_mode: 'automatic'`, conforme o [exemplo oficial do SDK](https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/order/createCheckoutPro.ts). O comprador escolhe o meio de pagamento na página hospedada. Não usar processamento automático sem transações: esse é o fluxo de pagamento direto, que exige dados de pagamento já na criação.

- As chamadas externas usam `redirect: 'manual'`, suportado pelo Workers, e tratam respostas 3xx como falha. Não trocar por `error`: esse modo existe no fetch do Node, mas o runtime do Cloudflare lança uma exceção antes de enviar a requisição. O teste `runtime.test.mjs` exercita o código real com workerd e D1; apenas a resposta externa do Mercado Pago é simulada.

- Pedido tem identificador imprevisível; valor e produto não vêm do navegador.
- O mesmo pedido usa a mesma chave de idempotência na API de Orders.
- Uma criação em andamento recebe `409`, para evitar requisições concorrentes.
- Uma resposta perdida pode ser repetida com a mesma chave; a garantia externa deve ser validada no sandbox.
- Atualização do pedido, transações e outbox ocorre em um batch atômico do D1.
- A outbox tem uma tarefa por pedido; notificação repetida não cria outra entrega.
- Reembolsos/chargebacks cancelam tarefas pendentes. Reembolso parcial e divergências de valor exigem revisão.
- O agendamento reconcilia até 20 pedidos por execução, a cada 10 minutos, usando consulta por ID ou busca por referência quando a criação perdeu a resposta. A cobertura automática é de 180 dias; revisar a janela conforme os prazos de disputa da conta.
- `Cache-Control: no-store` e capacidade por token protegem a consulta. Respostas não incluem e-mail, tokens ou dados de cartão.
- Nenhum dado de cartão passa por este backend. Tokens de acesso, corpos e respostas do provedor não são registrados nos logs da aplicação.
- CORS não é autenticação: o endpoint de criação também é limitado por IP; acompanhar abuso e adicionar Turnstile antes de escalar, se necessário.

## Integração da página Astro

`.env.example` contém apenas configurações públicas. O componente da página comercial continua oculto sem a ativação explícita abaixo. A URL do Worker conhecido é o padrão público e pode ser sobrescrita:

```dotenv
PUBLIC_APOSTILA_CHECKOUT_ENABLED=true
PUBLIC_PAYMENTS_API_URL=https://<endereço real do Worker>
```

Essas duas opções exigem novo build do Astro. Não colocar Access Token ou segredo do webhook em variáveis `PUBLIC_`.
A página `/apostila/pagamento/` usa o token guardado na mesma aba para consultar o backend, e ignora a aprovação informada na URL de retorno.

A rota `/apostila/teste-pagamento/` apresenta um formulário separado para validar o checkout com o comprador e os cartões de teste do Mercado Pago. Ela não aparece na navegação nem no sitemap e usa `noindex`; isso não é controle de acesso. Usar somente com credenciais de teste enquanto a integração está em validação. Não divulgar como página comercial nem inserir dados de cartão reais.

**Não ativar compras públicas em produção antes de concluir e testar a entrega do PDF.**
Por enquanto, a confirmação aprovada informa que a entrega está em preparação e oferece suporte. R2, e-mails, download privado e GA4 de compra pertencem à próxima etapa.

## Validação externa pendente

### Diagnóstico seguro do checkout

O build de diagnóstico retorna `diagnosticsVersion: 1` em `/health`. Em `PAYMENTS_MODE=test`, falhas de criação retornam `diagnostic` com a etapa (`provider_request`, `checkout_link` ou `database_update`), o HTTP do provedor quando disponível, um código filtrado e nomes de campos reconhecidos. A página de teste exibe esses dados. Em modo `live`, esse objeto não é enviado ao navegador.
O evento de log `checkout_creation_failed` contém somente esses metadados, sem o corpo original da resposta, e-mails ou credenciais. Um `providerStatus: 0` não é um status HTTP: significa que nenhum status do provedor foi registrado nessa etapa.
O empacotamento para colar no editor do Cloudflare deve usar o arquivo inteiro gerado por `wrangler deploy --dry-run --outdir <diretório>`; atualizar código pelo painel preserva as variáveis e vínculos já configurados. Verificar o marcador de versão antes de repetir um teste.

Os destinos `api.cloudflare.com`, `dash.cloudflare.com`, `api.mercadopago.com` e a documentação do Mercado Pago precisam estar acessíveis no ambiente de execução para automação autenticada.
Nesta sessão, as credenciais não estavam configuradas e os acessos à documentação pública do Mercado Pago foram negados pela política de rede. A leitura dos tipos oficiais do SDK não substitui teste real no sandbox.
