# MR_DESCRIPTION — <DEMANDA>

> Preencha ao encerrar a demanda (`/feed-brain` / `/close-demand`). Deltas enxutos; sem dump bruto.

## Context

- **Card/STK**: <CODIGO>
- **Objetivo**: <o que a entrega resolve e por quê>
- **Escopo afetado**: <páginas/arquivos>

## Changes

### ADDED
- <arquivo novo> — <propósito>

### MODIFIED (De:/Para:)
- <arquivo>: De `<antigo>` → Para `<novo>`

### REMOVED
- <arquivo> — <motivo>

## Tests

- [ ] `rtk node --check js/main.js js/modals.js` — 0 erros
- [ ] Markup: tags pareadas, `id` único, `href`/`download` válidos
- [ ] YAML/frontmatter dos agentes e `_config.yml` parseáveis
- [ ] Casos de borda: tema claro/escuro, viewport pequeno, acentos pt-BR
- [ ] Sensores indisponíveis declarados (ex.: Jekyll/Ruby ausente)

## Riscos & Observações

- <risco residual, dívida técnica ou follow-up>