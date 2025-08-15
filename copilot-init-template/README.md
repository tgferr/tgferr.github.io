# 🎯 GitHub Copilot Templates v2.0 - Agosto 2025

Esta pasta contém templates e configurações **ATUALIZADAS** para maximizar a produtividade com GitHub Copilot, seguindo as especificações mais recentes de 2025.

## ⚠️ **ATUALIZAÇÃO IMPORTANTE - AGOSTO 2025**

**GitHub Copilot mudou a estrutura de configurações:**
- ✅ **Instruções customizadas**: `.github/copilot-instructions.md`
- ✅ **Configurações VS Code**: `.vscode/settings.json` (apenas Agent Mode)
- ❌ **DESCONTINUADO**: Instruções em `.vscode/` folders

## 📍 **COMECE AQUI**: `INDEX.md`

**👉 [CLIQUE AQUI PARA VER SEU ROTEIRO PERSONALIZADO](INDEX.md)**

O arquivo `INDEX.md` organiza todo o conteúdo por perfil de usuário:

- 👶 **DEV Jr** (primeiro contato)
- 👨‍💻 **DEV Experiente** (quer melhorar)
- 🏗️ **Tech Lead** (implementando em projetos)
- 👔 **Gestores** (implementação organizacional)
- 🎓 **Professores** (ensinando Copilot)

## �📁 Arquivos Inclusos

| Arquivo                               | Descrição                           | Uso                                     |
| ------------------------------------- | ----------------------------------- | --------------------------------------- |
| 🎯 **`INDEX.md`**                     | **🆕 COMECE AQUI**                  | **Roteiro personalizado por perfil**    |
| 📋 `project-template.instructions.md` | Template genérico de instruções     | Copiar e customizar para novos projetos |
| 🎛️ `chat-modes.md`                    | Modos de chat personalizados        | Configurar VS Code settings             |
| 🎯 `copilot-prompts.md`               | Prompts reutilizáveis               | Usar diretamente no Copilot Chat        |
| ⚙️ `vscode-config.md`                 | Configurações VS Code completas     | Setup inicial de workspace              |
| 🤖 `copilot-advanced-settings.md`     | **Configurações avançadas Copilot** | **Terminal allowList, security, etc**   |
| 📚 `documentation.md`                 | **GUIA COMPLETO DE USO**            | **LEIA PRIMEIRO**                       |
| 🚀 `guia-dev-jr.md`                   | **🆕 Guia completo para DEV Jr**    | **Passo-a-passo para iniciantes**       |
| 📸 `guia-visual.md`                   | **🆕 Screenshots e fluxogramas**    | **Apoio visual ao guia**                |
| ⚡ `quick-start.md`                   | **🆕 Setup em 5 minutos**           | **Para quem tem pressa**                |
| 📋 `checklist-equipes.md`             | **🆕 Implementação em equipes**     | **Para líderes técnicos e gestores**    |

## 🚀 Quick Start

### 🔥 **Para DEV Jr que acabou de conseguir Copilot da Magalu**

**👶 INICIANTE TOTAL?**

```bash
Leia: quick-start.md (5 minutos para funcionar)
Depois: guia-dev-jr.md (guia completo passo-a-passo)
Apoio: guia-visual.md (screenshots e fluxogramas)
```

### 👔 **Para Líderes Técnicos e Gestores**

**🏢 IMPLEMENTANDO EM EQUIPE?**

```bash
Leia: checklist-equipes.md (implementação corporativa)
- Preparação organizacional
- Configuração padrão
- Onboarding da equipe
- Monitoramento e evolução
```

### 📊 **Para Desenvolvedor Experiente**

### 1. Para Novo Projeto

```bash
# Copie o template
cp templates/project-template.instructions.md [MEU_PROJETO].instructions.md

# Customize para seu projeto (stack, arquitetura, padrões)
# Configure VS Code seguindo vscode-config.md
# Leia documentation.md para uso completo
```

### 2. Para Projeto Existente

```bash
# Use este prompt no Copilot Chat:
@workspace Analise este projeto seguindo templates/project-template.instructions.md e gere arquivo de instruções personalizado
```

### 3. Configure Chat Modes

```json
// .vscode/settings.json
{
  "github.copilot.chat.instructionFiles": ["[MEU_PROJETO].instructions.md"]
}
```

## 🤖 **Terminal Allow/Deny List - Configuração Essencial**

A configuração mais importante que você precisa entender:

```json
{
  "github.copilot.chat.agent.terminal.allowList": [
    "make test",
    "make lint",
    "npm run",
    "git status",
    "/make (test|lint|coverage).*/",
    "/git (status|diff).*/"
  ],
  "github.copilot.chat.agent.terminal.denyList": [
    "rm",
    "sudo",
    "/rm -rf.*/",
    "/.*password.*/i"
  ]
}
```

**allowList**: Comandos que o Copilot Agent pode executar automaticamente  
**denyList**: Comandos que sempre requerem confirmação manual

📖 **Leia `copilot-advanced-settings.md` para configuração completa!**

## 🎯 Workflows Essenciais

### 🔍 Análise Inicial (Obrigatório)

```
/mode project-analyzer
Analise este projeto: stack, arquitetura, padrões, comandos disponíveis
```

### 🛠️ Implementação

```
/mode pattern-follower
Implemente [FEATURE] seguindo EXATAMENTE os padrões existentes
```

### 🧪 Testes

```
/mode test-master
Crie testes abrangentes com coverage >= [X]%
```

### 🐛 Debug

```
/mode debug-expert
Debug sistematicamente: logs → reprodução → root cause → correção
```

## 📊 Benefícios Esperados

- ⚡ **40-60% redução** no tempo de setup
- 🎯 **90%+ consistência** de padrões
- 🚀 **30-50% redução** no onboarding
- 🧪 **Melhoria automática** na qualidade

## 📚 Documentação Completa

**👉 Leia `documentation.md` para guia completo com:**

- Setup detalhado por tipo de projeto
- Workflows para diferentes cenários
- Customização por stack tecnológico
- Troubleshooting e best practices
- Métricas de sucesso

## 🛠️ Customização

### Por Stack Tecnológico

- **Python/FastAPI**: Type hints, async/await, Pydantic, pytest
- **React/TypeScript**: Hooks, TypeScript strict, Testing Library
- **Node.js/Express**: ES Modules, middleware patterns, Jest

### Por Arquitetura

- **Domain-Driven**: Domínios, agregados, repositórios
- **Clean Architecture**: Camadas, inversão de dependência
- **Microservices**: APIs, contratos, observabilidade

## 🔄 Evolução Contínua

1. **Usar consistentemente** por 1-2 sprints
2. **Coletar feedback** da equipe
3. **Iterar e melhorar** templates
4. **Documentar aprendizados**
5. **Compartilhar** com outros projetos

---

**💡 Dica**: Comece com o básico, use consistentemente, e melhore incrementalmente. A consistência de uso é mais importante que a perfeição inicial.

**🎯 Próximo Passo**: Leia `documentation.md` para implementação completa!
