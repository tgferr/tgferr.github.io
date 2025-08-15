# ⚡ QUICK START - 5 MINUTOS PARA FUNCIONAR

## 🚀 **SETUP RELÂMPAGO**

### 1️⃣ **PRÉ-REQUISITOS** (1 min)

- ✅ VS Code instalado
- ✅ GitHub Copilot extension ativa
- ✅ GitHub Copilot Chat extension ativa
- ✅ Login realizado

### 2️⃣ **COPIAR TEMPLATE** (1 min)

```bash
# Copie a pasta copilot-init-template para a raiz do seu projeto
# (Download já foi feito do site)
```

### 3️⃣ **COMANDO MÁGICO** (2 min)

Abra VS Code no seu projeto e execute no Copilot Chat (Ctrl+Alt+I):

```
@workspace Analise este projeto completamente seguindo copilot-init-template/project-template.instructions.md:
1. Identifique stack tecnológico, arquitetura e padrões
2. Configure Copilot seguindo padrões 2025 (.github/ e .vscode/)
3. NÃO crie arquivos na raiz do projeto
4. Valide configuração final
5. REMOVA a pasta copilot-init-template após configuração
```

### 4️⃣ **VALIDAÇÃO** (1 min)

Verifique se foram criados:

- ✅ `.github/copilot-instructions.md` (instruções personalizadas)
- ✅ `.vscode/settings.json` (configurações Agent Mode)
- ✅ Pasta `copilot-init-template` foi removida

## 🎯 **PRONTO!**

Agora você tem:

- 🤖 **Copilot personalizado** para seu projeto
- 🛡️ **Configurações de segurança** ativas
- 🚀 **Produtividade máxima** desde o primeiro uso

## 🆘 **PROBLEMAS?**

### Comando não respondeu?

- Pasta `copilot-init-template` está na raiz?
- VS Code aberto na pasta correta?
- Copilot Chat funcionando?

### Configuração incompleta?

- Execute novamente o comando
- Verifique se os arquivos foram criados
- Consulte `copilot-advanced-settings.md`

### Ainda com dúvidas?

Google Chat: **tiago.ferreira** ou **Tiago Ferreira**
],
"github.copilot.chat.agent.terminal.denyList": [
"rm", "sudo", "curl"
],
"chat.tools.autoApprove": false,
"github.copilot.chat.codeGeneration.useInstructionFiles": true
}

# Instruções customizadas vão em .github/copilot-instructions.md

# (criado automaticamente pelo template)

````

### 5️⃣ **TESTAR** (30 seg)

```bash
# Criar arquivo test.py:
# função para somar dois números

# Copilot vai sugerir → Pressione TAB
````

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
