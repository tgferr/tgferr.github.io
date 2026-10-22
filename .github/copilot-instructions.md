# IA Tools Hub — Instruções para Agentes de IA

> **Fonte de verdade**: [`PROJECT-BRAIN.md`](../PROJECT-BRAIN.md) (symlink → `ENTERPRISE_PROJECT_FRAMEWORK.md`, v4.0.0-ENTERPRISE MIA-Native).
> Este arquivo (e o symlink `CLAUDE.md` → aqui) resume as regras para agentes neste repositório. Em conflito, o BRAIN prevalece.

## 🎯 Visão Geral do Projeto

O **IA Tools Hub** é um site estático **Jekyll / GitHub Pages** que serve como centro de referência para templates, GEMs e utilitários de IA. Não há runtime de servidor, banco de dados nem build de aplicação — apenas HTML/CSS/JS servidos estaticamente, com o GitHub Pages gerando o site a partir da branch `main`.

### Arquitetura Principal

- **Frontend**: HTML estático + vanilla JavaScript (navegação SPA por `showPage`, sem reload).
- **Estilo**: `css/style.css` (tema claro/escuro) usado por `copilot_template.html`; as demais páginas são **autocontidas** (estilo inline) e não dependem de `css/`/`js/`.
- **Conteúdo**: templates para download, documentação interativa e os **metamodelos do framework** (`ENTERPRISE_PROJECT_FRAMEWORK.md`, `DOMESTICUSER_PROJECT_FRAMEWORK.md`) — artefatos **genéricos** publicados para download.
- **Deploy**: GitHub Pages automático via Jekyll (push em `main`).

## ⛔ Hard Constraints (Diretivas Rígidas)

1. **Nunca commit/push automático**: `git commit`, `git push`, `git merge`, `git rebase` ou alteração de histórico remoto **apenas** com instrução expressa e intencional do desenvolvedor. Git é somente leitura (`status`, `diff`, `log`) ou staging cirúrgico pré-aprovado.
2. **Trava pré-código**: proibido criar/editar arquivos (`*.html`, `*.css`, `*.js`, `*.md`) antes de um **plano aprovado em turno explícito** (`[A] Aprovar plano`). Fluxo: **Coleta → Explore → Roda (Opositor) → Plano → `[A]` → Código**.
3. **Metamodelos são produto**: **não** especializar nem sobrescrever `ENTERPRISE_PROJECT_FRAMEWORK.md` / `DOMESTICUSER_PROJECT_FRAMEWORK.md`. O conhecimento específico deste repo vive em `AGENTS.md`, nas personas e em `OPENSPEC/`.
4. **Zero dump bruto**: logs/arquivos volumosos são processados no sandbox; apenas métricas, causas raiz e deltas chegam ao chat.
5. **Saída enxuta**: deltas `## ADDED` / `## MODIFIED (De:/Para:)` / `## REMOVED`, com ≤3 linhas de vizinhança.

## 🏗️ Estrutura do Projeto

```
tgferr.github.io/
├── index.html                      # Hub SPA (navegação showPage) + cards da home
├── copilot_template.html           # Página do Template Copilot (usa css/style.css + js/*.js)
├── gem_gemini_QA.html              # Gem QA Expert (autocontida)
├── gem_gemini_CALL_SUMMARIZER.html # Gem Arquiteto de Insights (autocontida)
├── project_brain_framework.html    # Apresentação do PROJECT BRAIN Framework (autocontida)
├── ENTERPRISE_PROJECT_FRAMEWORK.md # Metamodelo Enterprise v4.0.0 (download → PROJECT-BRAIN.md)
├── DOMESTICUSER_PROJECT_FRAMEWORK.md # Edição Community/Portátil (download)
├── PROJECT-BRAIN.md                # symlink → ENTERPRISE_PROJECT_FRAMEWORK.md
├── CLAUDE.md                       # symlink → .github/copilot-instructions.md
├── AGENTS.md                       # Protocolo agêntico (Enterprise Brain Framework)
├── .claude/agents/                 # 6 subagentes executáveis (Claude Code)
├── .agents/                        # 6 personas portáveis (.agent.md — Copilot/Cursor/Aider)
├── OPENSPEC/                       # Fluxo OpenSpec (README, active_todo, openspec-files/)
├── Checklist/                      # Template de checklist por demanda
├── copilot-init-template/          # Template completo para download
├── css/style.css                   # Tema claro/escuro
├── js/main.js                      # Funcionalidades SPA
├── js/modals.js                    # Sistema de modais
└── _config.yml                     # Configuração Jekyll
```

## 🧠 Matriz de Personas (6 lentes + Opositor)

| # | Persona | Claude Code (executável) | Portável (Copilot/Aider) |
| - | - | - | - |
| 0 | ⚖️ Tiago Ferreira (Opositor Crítico) | — | — |
| 1 | 🤖 MIA & Tooling | `.claude/agents/brain-mia-tooling.md` | `.agents/brain-mia-tooling.agent.md` |
| 2 | 🏛️ Arquiteto de Contratos | `.claude/agents/brain-contracts-architect.md` | `.agents/brain-contracts-architect.agent.md` |
| 3 | 🔌 Engenheiro de Integração | `.claude/agents/brain-integration-engineer.md` | `.agents/brain-integration-engineer.agent.md` |
| 4 | 📱 Compatibilidade | `.claude/agents/brain-compat-specialist.md` | `.agents/brain-compat-specialist.agent.md` |
| 5 | 📊 SRE & Observabilidade | `.claude/agents/brain-sre-observability.md` | `.agents/brain-sre-observability.agent.md` |
| 6 | 🧪 QA & Qualidade | `.claude/agents/brain-qa-quality.md` | `.agents/brain-qa-quality.agent.md` |

No Modo Pleno, o Opositor abre o debate (ver §2 e §4 do BRAIN).

## 🔄 Ciclo Operacional (OpenSpec)

```
/start-demand <ID-OU-NOME>  →  Coleta + Deep-Search → Roda (Opositor) → Plano → PARADA [A] → implementação
/feed-brain & /close-demand →  Destilação de lições (Seção 8) + MR_DESCRIPTION.md + cleanup
```

Trabalho ativo reside em `OPENSPEC/openspec-files/`; entregas em `MR_DESCRIPTION.md` (`Context` / `Changes` / `Tests`).

## 🔧 Setup de Ambiente

- **Ferramentas**: CLI `mia` (não `skills-tk`); skills via `mia plugin install`.
- **RTK**: comandos de terminal passam por `rtk` (proxy de compressão, 60-90% de economia).
- **Host local**: `node` v24 e `python3` 3.12 disponíveis; **Ruby/Bundler/Jekyll ausentes** — validar por `node`, e para o build Jekyll entregar `bundle install && bundle exec jekyll serve` (http://localhost:4000) pausando para o humano.
- **Netskope/SSL**: exportar `NODE_EXTRA_CA_CERTS="/etc/ssl/certs/nscacert.pem"` **apenas** em erro de validação SSL.

## ✅ Validação (Tríade Adaptada para Estático)

| Sensor | Comando | Critério |
| :-- | :-- | :-- |
| Sintaxe JS | `rtk node --check js/main.js js/modals.js` | 0 erros |
| Markup | tags pareadas, `id` único, `href`/`download` válidos | 0 quebras |
| YAML | frontmatter dos agentes + `_config.yml` parseáveis | 0 erros |

> Não há suite de testes de runtime neste repositório. Jekyll local é opcional e depende de Ruby (ausente no host).

## 🔒 Segurança & Qualidade

- Nenhum segredo/token/PII em logs, URLs, query strings ou commits.
- Páginas standalone autocontidas: **não** fazê-las depender de `css/style.css`/`js/*.js`.
- Código cirúrgico: tocar somente as linhas do escopo; sem refatoração por conveniência.
- Falhar alto: nunca esconder teste pulado, blocker ou incerteza.