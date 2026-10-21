# AGENTS.md — Protocolo do Enterprise Brain Framework (IA Tools Hub)

> Fonte: **[PROJECT-BRAIN.md](PROJECT-BRAIN.md)** (symlink → `ENTERPRISE_PROJECT_FRAMEWORK.md`).
> Este arquivo é a **única fonte de verdade** do fluxo agêntico deste repositório. Os agentes devem internalizar estas regras antes de executar.

## 🧭 Propósito

O repo é um site estático **Jekyll + GitHub Pages** (hub de IA: templates, GEMs e utilitários). O Enterprise Brain Framework (v4.0.0-ENTERPRISE, MIA-Native Luizalabs) orquestra qualquer demanda aqui com governança rígida: memória viva, ciclo OPENSPEC, Roda de Debate com Opositor, matriz de personas e **segurança por padrão**.

## ⛔ Hard Constraints (Diretivas Rígidas)

1. **Nunca commit/push automático**: `git commit`, `git push`, `git merge`, `git rebase` ou alterar histórico remoto apenas com instrução expressa e intencional do desenvolvedor. Git é somente leitura (`status`, `diff`, `log`) ou staging cirúrgico pré-aprovado.
2. **Trava pré-código**: proibido criar/editar arquivos (`*.html`, `.md`, scripts) antes de um **plano aprovado em turno explícito** (`[A] Aprovar plano`). Fluxo obrigatório: **Coleta → Explore → Plano → `[A]` → Código**.
3. **Runtimes**:
   - **Claude Code CLI (`mia launch claude`)**: LiteLLM interno (`labs-code`). Herda Context-Mode e RTK.
   - **VS Code Copilot Chat**: LLM da IDE; usar `vscode_askQuestions` e comprovar saída de terminal.
4. **Zero dump bruto**: logs, stack traces e arquivos volumosos são processados no sandbox; apenas métricas, causas raiz e deltas chegam ao chat.
5. **Saída enxuta**: deltas `## ADDED` / `## MODIFIED (De:/Para:)` / `## REMOVED`, com ≤3 linhas de vizinhança.

## 🔄 Ciclo Operacional (OPENSPEC Workflow)

```
/start-demand <ID-OU-NOME>  →  Coleta + Deep-Search → Roda (Opositor) → Plano → PARADA [A] → implementação
/review-personas            →  Debates as 6 lentes especializadas pré-código; risco/algo → pergunta ao dev
/execute                    →  Implementação cirúrgica + validação
/feed-brain & /close-demand →  Destilação de lições na Seção 8 + MR_DESCRIPTION.md + cleanup
```

- **Roda de Discussão Circular**: ⚖️ **Tiago Ferreira** (Opositor Crítico) é **obrigatoriamente o primeiro** a contra-argumentar após qualquer proposta; o debate é registrado em `OPENSPEC/agents-discussions-<DEMANDA>/<DEMANDA>.agent.md` (Modo Ágil vs Modo Pleno, §2 e §4 do BRAIN).
- Estruturas criadas em `OPENSPEC/` e `Checklist/` (`/start-demand`).
- Entregas em `OPENSPEC/openspec-files/MR_DESCRIPTION.md` (`Context` / `Changes` / `Tests`).

## 🧠 Matriz de Personas (6 lentes especialistas + Opositor)

| # | Persona | Claude Code (executável) | Portável (Copilot/Aider) |
| - | - | - | - |
| 0 | ⚖️ Tiago Ferreira (Opositor Crítico) | — | — |
| 1 | 🤖 MIA & Tooling | `.claude/agents/brain-mia-tooling.md` | `.agents/brain-mia-tooling.agent.md` |
| 2 | 🏛️ Arquiteto de Contratos | `.claude/agents/brain-contracts-architect.md` | `.agents/brain-contracts-architect.agent.md` |
| 3 | 🔌 Engenheiro de Integração | `.claude/agents/brain-integration-engineer.md` | `.agents/brain-integration-engineer.agent.md` |
| 4 | 📱 Compatibilidade | `.claude/agents/brain-compat-specialist.md` | `.agents/brain-compat-specialist.agent.md` |
| 5 | 📊 SRE & Observabilidade | `.claude/agents/brain-sre-observability.md` | `.agents/brain-sre-observability.agent.md` |
| 6 | 🧪 QA & Qualidade | `.claude/agents/brain-qa-quality.md` | `.agents/brain-qa-quality.agent.md` |

Uso na fase de review pré-código e suporte operacional (conforme §3–4 do framework). No Modo Pleno, o Opositor abre o debate; nos demais pontos, ver §2.1/§2.2 do BRAIN.

## 🔧 Setup de Ambiente

- **Ferramentas**: CLI `mia` (não `skills-tk`). Skills via `mia plugin install`. Cliente `claude` + `vscode-copilot`.
- **RTK**: comandos de terminal passam por `rtk` (proxy de compressão).
- **Netskope/SSL**: se downloads exigirem, exportar `NODE_EXTRA_CA_CERTS="/etc/ssl/certs/nscacert.pem"` (APENAS em erro SSL, não por padrão).
- **Jekyll local**: `bundle install` + `bundle exec jekyll serve` (http://localhost:4000). Deploy via push para `main` (GitHub Pages automático).

## 🔒 Segurança & Qualidade

- Nenhum segredo/token/PII em logs, URLs ou commites. `.env` ignorado.
- Páginas HTML autocontidas (estilo inline + toggle de tema + accordion + copy). NÃO depender de `css/style.css`/`js/*.js` nas gems/páginas standalone.
- Cobertura/validação: para alterações em JS, rodar testes equivalentes; validar HTML servido.
- Código cirúrgico: tocar somente as linhas do escopo. Sem refatoração por conveniência.
- Falhar alto: nunca esconder teste pulado, blocker ou incerteza.

## 📁 Estrutura do Repositório

```
├── index.html               # Hub SPA (navegação showPage) + cards home
├── *.html                   # Páginas standalone (Template Copilot, GEMs, project_brain_framework.html)
├── AGENTS.md                # Este arquivo
├── PROJECT-BRAIN.md         # symlink → ENTERPRISE_PROJECT_FRAMEWORK.md
├── ENTERPRISE_PROJECT_FRAMEWORK.md # Fonte viva do framework (Seção 8 acumula lições)
├── DOMESTICUSER_PROJECT_FRAMEWORK.md # Edição Community/Portátil (dual-engine, p/ download)
├── .claude/agents/          # 6 subagentes executáveis Claude Code
├── .agents/                 # 6 personas portáveis (.agent.md — Copilot/Cursor/Aider)
├── OPENSPEC/                # Fluxo OpenSpec: README, active_todo, templates (openspec-files/)
├── Checklist/               # Template de checklist por demanda
├── css/ js/                 # Usados apenas por copilot_template.html
└── _config.yml              # Config Jekyll
```