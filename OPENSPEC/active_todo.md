# active_todo — Memória Viva da Sessão

> Compacto (≤100 linhas). Documenta decisões arquiteturais, regras de negócio e restrições acordadas. Atualizado incrementalmente a cada iteração.

## Sessão: 2026-10-22 / Demanda: TASK1 — Contador de downloads (sem backend)

**Demanda**: ícone discreto de olho no topo-direito com o total de downloads e contador discreto abaixo de cada botão de download.

### Decisões

- **Escopo cortado**: apenas **R3/R4 (downloads)**. **R2 ("pessoas online agora") foi descartado** por decisão do dev — impossível sem backend com estado compartilhado.
- **Sem backend próprio, sem conta**: "API Node no GitHub Pages" é **impossível** (Pages não executa server-side nem grava arquivos). Service Worker **não** resolve (isolado por navegador).
- **Solução**: contador hospedado **abacus.jasoncameron.dev** (`/hit` incrementa, `/get` é read-only, CORS `*`, auto-cria a chave). Atende "sem criar nada".
- **Por botão**: chaves `enterprise` e `domestic`; o header soma as duas.
- **Páginas**: widget read-only em 5 páginas; `hit` só em `project_brain_framework.html`.
- **Contrato**: fallback `—`; nunca 0/undefined/NaN. Widget aparece com JS mesmo sem número (visível no topo).

### Regras de Negócio Descobertas

- `GET` do abacus é **read-only** (verificado): o header **não** infla a contagem; só o clique incrementa.
- Contagem conta **cliques de download**, não transferências concluídas (rótulo honesto).
- Chaves só existem após o 1º hit → o widget mostra `—` até o primeiro download.

### Restrições Acordadas

- **Zero commit/push** (instrução do dev).
- Respostas enxutas (deltas).
- Páginas standalone autocontidas: CSS/JS inline por página (não depender de `css/style.css`/`js/*.js`).

---

_Limpe/arquive este arquivo ao encerrar a demanda (`/feed-brain`)._