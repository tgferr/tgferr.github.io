# active_todo — Memória Viva da Sessão

> Compacto (≤100 linhas). Documenta decisões arquiteturais, regras de negócio e restrições acordadas. Atualizado incrementalmente a cada iteração.

## Sessão: 2026-10-22 / Demanda: Rebootstrap do Enterprise Brain Framework no IA Tools Hub

**Demanda**: reespecializar a infraestrutura agêntica deste repositório à stack real (site estático Jekyll / GitHub Pages), após a remoção intencional da versão anterior pelo desenvolvedor.

### Contexto de Partida

- O working tree teve 19 arquivos do Brain removidos **de propósito** pelo dev, para rebootstrap limpo com os frameworks repaginados (v4.0.0).
- `PROJECT-BRAIN.md` era **symlink** (mode 120000) → `ENTERPRISE_PROJECT_FRAMEWORK.md`; os 6 `.agents/*.agent.md` e os 6 `.claude/agents/*.md` do HEAD eram genéricos de backend/mobile (GraphQL Federation, Protobuf, latência ≤500ms) — **incoerentes** com este repo.
- `OPENSPEC/active_todo.md` do HEAD estava com conteúdo **duplicado/truncado** (corrompido).

### Decisões

- **Metamodelos permanecem genéricos**: `ENTERPRISE_PROJECT_FRAMEWORK.md` / `DOMESTICUSER_PROJECT_FRAMEWORK.md` são publicados para download (`download="PROJECT-BRAIN.md"` em `project_brain_framework.html`). Proibido especializar/sobrescrever — o conhecimento do repo vive em `AGENTS.md` + personas + `OPENSPEC/`.
- **Personas ressintetizadas à stack estática** (substituindo os contratos de backend do HEAD):
  - Contratos → contratos de **interface web** (hooks de DOM, classes CSS, âncoras, `download`, `_config.yml`).
  - Integração → **CDNs (Font Awesome, Google Fonts), SRI, fallback de fontes, pipeline Jekyll**.
  - Compatibilidade → **browsers, viewports, a11y, tema claro/escuro, degradação sem JS**.
  - SRE → **Core Web Vitals (LCP/CLS/INP), peso de assets, build/deploy, higiene de console**.
  - QA → **Tríade adaptada**: `node --check`, markup bem-formado, links/âncoras, YAML válido.
- **Matriz de personas oficial**: Opositor Crítico é o **Tiago Ferreira** (conforme `AGENTS.md` local), não "Marcus".
- **AGENTS.md** já existe e está coerente com a stack — não reescrito (fora do escopo cirúrgico).

### Regras de Negócio Descobertas

- Páginas standalone (`gem_*.html`, `project_brain_framework.html`) são **autocontidas** (estilo inline); não dependem de `css/style.css` nem `js/*.js` — apenas `copilot_template.html` usa esses assets.
- Deploy é automático via push em `main` (GitHub Pages); não há pipeline de CI de testes neste repo.
- Host local não tem Ruby/Bundler/Jekyll — build Jekyll não é validável localmente sem instalar gems.

### Restrições Acordadas

- **Zero commit/push** (instrução explícita do dev: "não commitar nada ainda").
- Trava pré-código: infraestrutura só foi gerada após aprovação explícita do plano.
- Respostas enxutas (deltas).

---

_Limpe/arquive este arquivo ao encerrar a demanda (`/feed-brain`)._