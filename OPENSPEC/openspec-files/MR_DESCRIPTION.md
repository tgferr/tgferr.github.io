# MR — Descrição de Entrega

> **Demanda**: Materialização do Universal Brain Framework — pastas, agents, subagents + documentação
> **Framework**: Universal Brain Framework v3.5.0
> **Status**: Concluído

## Context

O repositório (IA Tools Hub — site estático Jekyll) passou a adotar o **Universal Brain Framework** como orquestrador de demandas de IA. Esta entrega materializa a infraestrutura agêntica do framework no repo: pastas de agentes (executáveis + portáteis), estrutura OPENSPEC/Checklist, documentação e a fonte viva do BRAIN instalada na raiz (symlink), além do `/feed-brain` com lição persistida na Seção 8.

## Changes

- **`.claude/agents/`** (6 subagentes executáveis Claude Code, frontmatter `name`/`description`/`tools`/`permissionMode`/`model`): `brain-mia-tooling`, `brain-contracts-architect`, `brain-integration-engineer`, `brain-compat-specialist`, `brain-sre-observability`, `brain-qa-quality`.
- **`.agents/`** (6 pessoas portáteis `.agent.md`, padrão AGENTS.md/Copilot): mesmo conjunto em sincronia.
- **`AGENTS.md`** (raiz): protocolo aberto do framework (hard constraints, ciclo OpenSpec, matriz de personas, setup, segurança).
- **`OPENSPEC/`**: `README.md` (guia do fluxo), `active_todo.md` (memória de sessão), `openspec-files/{MR_DESCRIPTION.md, execution-summary.md}` (templates).
- **`Checklist/TEMPLATE.md`**: checklist de demanda (coleta → explore → plano `[A]` → execute → feed-brain).
- **`PROJECT-BRAIN.md`**: symlink → `PROJECT_BRAIN_FRAMEWORK.md` (fonte única).
- **Editados**: `README.md` (seção BRAIN + árvore), `.github/copilot-instructions.md` (árvore + seção BRAIN).
- **Feed-brain**: lição adicionada na **§8.1** do `PROJECT_BRAIN_FRAMEWORK.md` (`.claude/agents/` é o único caminho executável do Claude Code; `.agents/` é padrão aberto para outros editores; manter os dois espelhos em sincronia).

## Tests

- `claude plugin validate .claude/agents` → validação dos 6 subagentes (frontmatter ok).
- `PROJECT-BRAIN.md` → symlink válido apontando para `PROJECT_BRAIN_FRAMEWORK.md`.
- Servidor local (`python3 -m http.server`) → páginas/markdown novos servidos (HTTP 200), sem quebra do site.
- `git status` → revisados arquivos novos/delta (nenhum commit efetuado).

---
<!-- Preenchido pelo /feed-brain ao final de cada demanda -->