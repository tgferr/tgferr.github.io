# IA Tools Hub

> Centro de referência para templates, gems e utilitários de IA

## �️ Ferramentas Disponíveis

### 📋 **Template Copilot**

Configuração automática do GitHub Copilot para qualquer projeto com análise de stack tecnológica e configurações personalizadas.

### 💎 **GEMs - Gemini**

Coleção de gems especializadas para Google Gemini:

- **QA Expert**: Comandos avançados para testes e validações
- **Arquiteto de Insights**: Análise holística de transcrições de reuniões com relatórios visuais

### 🧠 **PROJECT BRAIN Framework**

Sistema operacional single-file para orquestrar agentes de IA em qualquer repositório: memória viva, ciclo OpenSpec, matriz de personas especialistas e diretivas rígidas de segurança.

## 🧠 PROJECT BRAIN Framework no Repositório

O repositório adota o **Universal Brain Framework** (`PROJECT-BRAIN.md` → symlink para `PROJECT_BRAIN_FRAMEWORK.md`, fonte única) para orquestrar demandas de IA com governança. Infraestrutura agêntica:

- **`.claude/agents/`** — 6 subagentes executáveis do Claude Code (matriz de personas).
- **`.agents/`** — 6 personas portáteis no padrão AGENTS.md (Copilot/Cursor/Aider).
- **`OPENSPEC/`** — fluxo OpenSpec: README, `active_todo.md` (memória de sessão) e templates (`openspec-files/`).
- **`Checklist/`** — template de checklist por demanda.

**Fluxo de demanda:** `iniciar demanda <CARD> seguindo @PROJECT-BRAIN.md` → Coleta → Explore → Plano → `[A]` → Execute → `/feed-brain` (lições na Seção 8 do framework + `MR_DESCRIPTION.md`).

Consulte [AGENTS.md](AGENTS.md) e [OPENSPEC/README.md](OPENSPEC/README.md) para o protocolo completo.

## 🚀 Acesso

**Site:** [tgferr.github.io](https://tgferr.github.io)

- Interface unificada com tema claro/escuro
- Navegação intuitiva entre ferramentas
- Documentação interativa e exemplos práticos

## 📁 Estrutura

```
├── index.html              # Hub principal
├── copilot_template.html    # Página do Template Copilot
├── gem_gemini_QA.html      # Apresentação QA Expert
├── project_brain_framework.html # Apresentação PROJECT BRAIN Framework
├── PROJECT_BRAIN_FRAMEWORK.md  # Framework para download (+ PROJECT-BRAIN.md symlink)
├── AGENTS.md               # Protocolo agêntico do repositório
├── .claude/agents/         # 6 subagentes executáveis Claude Code
├── .agents/                # 6 personas portáteis (AGENTS.md / Copilot)
├── OPENSPEC/               # Fluxo OpenSpec (README, active_todo, templates)
├── Checklist/              # Template de checklist por demanda
├── copilot-init-template/   # Template para download
└── css/, js/               # Estilos e scripts
```

---

_Criado por Tiago Ferreira • 2025_
