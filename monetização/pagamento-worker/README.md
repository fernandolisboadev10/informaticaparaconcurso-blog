# Pagamento da apostila (Cloudflare Worker)

Site no GitHub Pages; pagamento em `https://pagamento.informaticaparaconcurso.com.br`.

## Publicar (uma vez)

```bash
cd monetização/pagamento-worker
npx wrangler login
npx wrangler kv namespace create PEDIDOS        # copie o id para wrangler.toml
npx wrangler r2 bucket create apostila-privada
npx wrangler r2 object put apostila-privada/apostila-completa.pdf --file ../apostila-completa-nova-capa.pdf --remote
npx wrangler secret put MP_ACCESS_TOKEN         # token de PRODUÇÃO (cole só no terminal)
npx wrangler secret put MP_WEBHOOK_SECRET
npx wrangler deploy
```

## Mercado Pago (painel de desenvolvedor)

- Webhooks > URL de produção: `https://pagamento.informaticaparaconcurso.com.br/webhook`, evento **Pagamentos**.
- Copie a "assinatura secreta" para `MP_WEBHOOK_SECRET`.

## Banners

Os botões passam a apontar para `https://pagamento.informaticaparaconcurso.com.br/comprar` (`APOSTILA_URL` em `src/data/apostila.ts`), só depois dos testes.

## Teste antes de divulgar

Use credenciais de teste (`TEST-...`) e contas de teste do Mercado Pago, compre e confira o download. Só depois troque para produção.

## Segurança

- O token e o segredo do webhook ficam só como segredos do Worker, nunca no Git.
- O webhook valida a assinatura e reconsulta o pagamento na API do Mercado Pago antes de liberar.
- O PDF fica em bucket privado do R2; o download exige token aleatório, com validade e limite.
