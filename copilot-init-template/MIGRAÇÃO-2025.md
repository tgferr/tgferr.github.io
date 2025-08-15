# 🚨 ALERTA: Configurações GitHub Copilot 2025 - ATUALIZAÇÃO CRÍTICA

## 📋 **PROBLEMA IDENTIFICADO**

As configurações `allowList` e `denyList` do GitHub Copilot foram **DEPRECATED** em 2025 e causam erros no terminal.

### ❌ **CONFIGURAÇÕES ANTIGAS (Deprecated)**

```json
{
  "github.copilot.chat.agent.terminal.allowList": [...],
  "github.copilot.chat.agent.terminal.denyList": [...]
}
```

**Erro reportado**:

> "As configurações github.copilot.chat.agent.terminal.allowList e denyList estão deprecated. Preciso atualizar para usar a configuração correta chat.tools.terminal.autoApprove."

### ✅ **NOVA SINTAXE CORRETA (2025)**

```json
{
  "chat.tools.terminal.autoApprove": {
    "mkdir": true,
    "echo": true,
    "/^git (status|show)\\b/": true,
    "rm": false,
    "del": false,
    "/dangerous/": false
  }
}
```

## 🔧 **CORREÇÕES IMPLEMENTADAS**

### 1. **Arquivo Atualizado**: `vscode-config.md`

✅ **Removidas todas as referências às configurações deprecated**
✅ **Adicionada nova sintaxe com exemplos práticos**
✅ **Incluído guia de migração automática**
✅ **Adicionados casos de uso para diferentes stacks**

### 2. **Principais Mudanças**:

#### **Terminal Control**:

- `allowList` → `chat.tools.terminal.autoApprove` (com `true`)
- `denyList` → `chat.tools.terminal.autoApprove` (com `false`)

#### **Agent Mode**:

- `chat.agent.maxRequests`: aumentado para 25 (2025)
- `chat.checkpoints.enabled`: nova funcionalidade
- `chat.mcp.enabled`: suporte MCP

#### **Tools Configuration**:

- `chat.tools.autoApprove`: controle global de tools
- `chat.extensionTools.enabled`: tools de extensões

## 📚 **CONFIGURAÇÃO ATUALIZADA RECOMENDADA**

```json
{
  // === Terminal AutoApprove (2025) ===
  "chat.tools.terminal.autoApprove": {
    // Comandos seguros - auto-aprovados
    "ls": true,
    "cat": true,
    "pwd": true,
    "echo": true,
    "make": true,
    "npm": true,
    "yarn": true,
    "pip": true,
    "poetry": true,
    "python": true,
    "git": true,
    "docker": true,

    // Regex para comandos específicos
    "/^git (status|show|log)\\b/": true,
    "/^npm (install|run|test)\\b/": true,
    "/^make (test|lint|coverage)\\b/": true,

    // Comandos perigosos - sempre pedir confirmação
    "rm": false,
    "sudo": false,
    "chmod": false,
    "curl": false,
    "wget": false,
    "/rm\\s+-rf/": false,
    "/sudo\\s+/": false
  },

  // === Agent Mode (2025) ===
  "chat.agent.enabled": true,
  "chat.agent.maxRequests": 25,
  "github.copilot.chat.agent.runTasks": true,
  "github.copilot.chat.agent.autoFix": true,

  // === Tools (2025) ===
  "chat.extensionTools.enabled": true,
  "chat.tools.autoApprove": false, // Segurança
  "chat.mcp.enabled": true,
  "chat.checkpoints.enabled": true,

  // === Privacy ===
  "telemetry.telemetryLevel": "error",
  "github.copilot.telemetry.enabled": false
}
```

## 🚀 **AÇÃO NECESSÁRIA**

### Para Usuários do Template:

1. **Baixar versão atualizada** do template
2. **Executar migração** das configurações existentes
3. **Testar Agent Mode** após migração
4. **Atualizar documentação** do projeto

### Script de Migração Rápida:

```bash
# Backup configuração atual
cp ~/.config/Code/User/settings.json ~/.config/Code/User/settings.json.backup

# Editar manualmente ou usar script Python incluído no template
```

## ✅ **VALIDAÇÃO**

Após atualizar, teste:

1. Abrir VS Code Copilot Chat (`Ctrl+Alt+I`)
2. Entrar em Agent Mode (`Ctrl+Shift+Alt+I`)
3. Testar comando: `@terminal ls` (deve funcionar sem confirmação)
4. Testar comando: `@terminal rm file` (deve pedir confirmação)

## 📝 **CHANGELOG**

- **[FIXED]** Configurações deprecated `allowList`/`denyList` removidas
- **[ADDED]** Nova sintaxe `chat.tools.terminal.autoApprove`
- **[ADDED]** Suporte completo para configurações 2025
- **[ADDED]** Guia de migração automática
- **[UPDATED]** Exemplos para Python, Node.js, Docker
- **[ADDED]** Script Python para migração automática

---

## 🔗 **Recursos Oficiais**

- [VS Code Copilot Settings Reference](https://code.visualstudio.com/docs/copilot/reference/copilot-settings)
- [Agent Mode Documentation](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [Terminal AutoApprove Guide](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode#_auto-approve-terminal-commands)

**⚠️ Esta atualização é CRÍTICA para o funcionamento correto do GitHub Copilot Agent Mode em 2025.**
