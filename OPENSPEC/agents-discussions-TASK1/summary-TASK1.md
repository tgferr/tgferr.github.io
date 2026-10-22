# summary-TASK1 — Contador de downloads (sem backend)

## Escopo aprovado
Ícone de olho discreto no topo-direito (5 páginas) com o **total de downloads**, e contador discreto **abaixo de cada botão** (Enterprise / Domestic) em `project_brain_framework.html`.

## Deltas aplicados

### ADDED
- `OPENSPEC/agents-discussions-TASK1/` — registro da roda e este sumário.

### MODIFIED
- `index.html`, `gem_gemini_QA.html`, `gem_gemini_CALL_SUMMARIZER.html`, `copilot_template.html` — bloco `.header-right` + `.dl-stats` (#dlStats/#dlTotal) e `<style>` autocontido + script de leitura (`get`).
- `project_brain_framework.html` — header com o widget, `data-dl-key` nos 2 botões, `.dl-count` por botão e script `hit`+`get`+cache.

### REMOVED
- (nenhum)

## Contrato de dados
`abacus.jasoncameron.dev/{hit,get}/tgferr-github-io/{enterprise,domestic}` → `{"value":N}`. Fallback `—` quando indisponível; **nunca** 0/undefined/NaN.

## Testes
- [x] Sintaxe JS (`new Function`) nas 5 páginas — 0 erros
- [x] `node --check js/main.js js/modals.js` — 0 erros
- [x] HTML bem-formado (parser): 0 erros novos (3 pré-existentes no HEAD, inalterados)
- [x] Fluxo funcional: `hit`→`get`→soma; `GET` comprovadamente read-only
- [x] CORS `*` + preflight OK (navegador pode chamar)
- [ ] Render Jekyll — **não validável** no host (Ruby ausente)

## Pendências
- **R2 (pessoas online)** não implementado (decisão do dev).
- Contagem inicia em 0 → chaves só existem após o 1º clique; o widget já aparece com `—`.