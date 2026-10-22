# MR_DESCRIPTION — TASK1 (Contador de downloads)

## Context

- **Card/STK**: TASK1
- **Objetivo**: exibir de forma discreta o **total de downloads** dos frameworks (Enterprise + Domestic) no topo-direito do site e abaixo de cada botão de download — **sem backend próprio e sem criar conta em serviço algum**.
- **Escopo afetado**: as 5 páginas do site (`index.html`, `project_brain_framework.html`, `gem_gemini_QA.html`, `gem_gemini_CALL_SUMMARIZER.html`, `copilot_template.html`).

## Changes

### ADDED
- `OPENSPEC/agents-discussions-TASK1/{TASK1.agent.md,summary-TASK1.md}` — registro da roda de debate e sumário.

### MODIFIED (De:/Para:)
- `index.html` e demais páginas standalone: header passa a ter `.header-right` com `.dl-stats` (`#dlStats`/`#dlTotal`) + `<style>` autocontido + script de leitura (`get`).
- `project_brain_framework.html`: botões ganham `data-dl-key`; novo `.dl-count` abaixo de cada botão; script com `hit`+`get`+cache `localStorage`.

### REMOVED
- (nenhum)

## Tests

- [x] Sintaxe JS (`new Function`) nas 5 páginas — 0 erros
- [x] `rtk node --check js/main.js js/modals.js` — 0 erros
- [x] HTML bem-formado (parser `html.parser`): 0 erros novos (3 pré-existentes no HEAD, inalterados)
- [x] Fluxo funcional: `hit` → `get` → soma; `GET` comprovadamente **read-only**
- [x] CORS `*` + preflight OK
- [ ] Render Jekyll — **não validável** no host (Ruby/Bundler/Jekyll ausentes)

## Riscos & Observações

- **R2 (pessoas online) não implementado** — descartado por decisão do dev.
- **Cliques de teste** durante a validação poluíram as chaves (`enterprise≈3`, `domestic≈1`); a contagem real começa daí. Trocar o namespace zera.
- Dependência externa: se `abacus.jasoncameron.dev` sair do ar, o widget mostra `—` (falha graciosa).