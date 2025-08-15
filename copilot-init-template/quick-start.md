# ⚡ QUICK START - 5 MINUTOS PARA FUNCIONAR

## 🚀 **SETUP RELÂMPAGO**

### 1️⃣ **INSTALAR** (1 min)

```bash
VS Code Extensions:
→ GitHub Copilot
→ GitHub Copilot Chat
```

### 2️⃣ **LOGIN** (1 min)

```bash
Ctrl+Shift+P → "GitHub Copilot: Sign In"
```

### 3️⃣ **SEGURANÇA** (1 min)

```bash
Ctrl+, → Pesquisar: "copilot telemetry" → Desmarcar
```

### 4️⃣ **CONFIGURAR PROJETO** (2 min)

```bash
# Criar .vscode/settings.json na raiz do projeto:
{
  "github.copilot.chat.agent.terminal.allowList": [
    "npm run", "make test", "git status", "ls"
  ],
  "github.copilot.chat.agent.terminal.denyList": [
    "rm", "sudo", "curl"
  ],
  "chat.tools.autoApprove": false,
  "github.copilot.chat.codeGeneration.useInstructionFiles": true
}

# Instruções customizadas vão em .github/copilot-instructions.md
# (criado automaticamente pelo template)
```

### 5️⃣ **TESTAR** (30 seg)

```bash
# Criar arquivo test.py:
# função para somar dois números

# Copilot vai sugerir → Pressione TAB
```

---

## 💬 **COMANDOS ESSENCIAIS**

```bash
Ctrl+I         # Chat inline
Ctrl+Alt+I     # Chat sidebar
Tab            # Aceitar sugestão
```

**Perguntas que sempre funcionam:**

```bash
@workspace Analise este projeto
Explique este código
Crie testes para esta função
Como melhorar este código?
```

---

## 🚨 **3 REGRAS DE OURO**

1. **SEMPRE** leia comandos antes de confirmar
2. **SEMPRE** use `@workspace` para contexto
3. **SEMPRE** peça para seguir padrões do projeto

---

## ✅ **PRONTO!**

- ✅ Copilot configurado e seguro
- ✅ Comandos perigosos bloqueados
- ✅ Pode começar a codar 3x mais rápido

**💡 Para configuração completa, veja:** `guia-dev-jr.md`

---

**🎯 AGORA VAI CODAR! 🚀**
