# 🎯 Comandos para Forçar Execução do Copilot

## ⚠️ **PROBLEMA IDENTIFICADO**

O Copilot está **descrevendo** ao invés de **executar** as ações. Isso acontece quando:

- Comando é muito genérico
- Não há palavras-chave de ação específicas
- Falta contexto sobre execução vs explicação

---

## ✅ **COMANDOS CORRIGIDOS PARA EXECUÇÃO**

### 🎯 **COMANDO PRINCIPAL** (USE ESTE)

```
Configure este projeto AGORA com GitHub Copilot. EXECUTE estas ações específicas:

1. CREATE FILE: .github/copilot-instructions.md com análise do projeto
2. CREATE FILE: .vscode/settings.json com Agent Mode 2025
3. CREATE FILE: .vscode/tasks.json baseado no build system
4. CREATE FILE: .vscode/launch.json para debug
5. DELETE FOLDER: copilot-init-template/
6. SHOW ME: Lista dos arquivos criados

Use copilot-init-template/project-template.instructions.md como guia.
EXECUTE AGORA - não explique.
```

### 🔧 **COMANDO STEP-BY-STEP** (Alternativa)

Se o comando principal não funcionar, execute um por vez:

#### **Passo 1: Criar estrutura**

```
@terminal mkdir -p .github .vscode && ls -la .github .vscode
```

#### **Passo 2: Criar arquivo principal**

```
Create file .github/copilot-instructions.md with project analysis following copilot-init-template/project-template.instructions.md template
```

#### **Passo 3: Configurar VS Code**

```
Create file .vscode/settings.json with GitHub Copilot Agent Mode configuration for this project
```

#### **Passo 4: Adicionar tasks**

```
Create .vscode/tasks.json with build/test/run tasks based on project structure
```

#### **Passo 5: Configurar debug**

```
Create .vscode/launch.json with debug configuration for this project type
```

#### **Passo 6: Remover template**

```
@terminal rm -rf copilot-init-template && echo "Template removido com sucesso"
```

---

## 🎮 **COMANDOS AGENT MODE** (Mais Assertivos)

### 🤖 **Agent Mode com Terminal**

```
@terminal Execute as seguintes ações em sequência:

1. mkdir -p .github .vscode
2. echo "# $(basename $(pwd)) - GitHub Copilot Instructions" > .github/copilot-instructions.md
3. echo '{"github.copilot.chat.instructionFiles": [".github/copilot-instructions.md"]}' > .vscode/settings.json
4. rm -rf copilot-init-template
5. ls -la .github .vscode
```

### 🎯 **Agent Mode Focado**

```
You are now in EXECUTION MODE.

TASK: Configure GitHub Copilot for this project
REFERENCE: copilot-init-template/project-template.instructions.md
ACTION REQUIRED: Create actual files, not explanations

EXECUTE:
1. Analyze project structure and identify main language/framework
2. Generate .github/copilot-instructions.md with project-specific content
3. Generate .vscode/settings.json with Agent Mode configuration
4. Generate .vscode/tasks.json based on build system
5. Remove copilot-init-template directory
6. Confirm files created

DO NOT explain steps - EXECUTE them immediately.
```

---

## 🎪 **TÉCNICAS AVANÇADAS DE EXECUÇÃO**

### 🎯 **Technique 1: Chain Commands**

```
Create .github/copilot-instructions.md && Create .vscode/settings.json && Create .vscode/tasks.json && @terminal rm -rf copilot-init-template
```

### 🎯 **Technique 2: Role Playing**

```
You are a DevOps engineer setting up a new project. Your task is incomplete until you:
✅ Create .github/copilot-instructions.md
✅ Create .vscode/settings.json
✅ Create .vscode/tasks.json
✅ Delete copilot-init-template/

STATUS: INCOMPLETE - Execute all tasks now.
```

### 🎯 **Technique 3: Validation Driven**

```
Setup GitHub Copilot configuration and prove it worked by showing:
1. Content of .github/copilot-instructions.md (create it first)
2. Content of .vscode/settings.json (create it first)
3. Confirm copilot-init-template is deleted (delete it first)

Show me the files to prove setup is complete.
```

### 🎯 **Technique 4: Error-Driven**

```
I need to validate these files exist - show me their content:
- .github/copilot-instructions.md
- .vscode/settings.json
- .vscode/tasks.json

If they don't exist, create them using copilot-init-template/project-template.instructions.md as reference, then delete copilot-init-template folder.
```

---

## 🔍 **DEBUGGING COMMANDS**

### **Se nada funcionar, teste:**

```
@terminal echo "Testing execution..." && mkdir -p test-folder && ls -la test-folder && rm -rf test-folder && echo "Execution working!"
```

### **Verificar se Agent Mode está ativo:**

```
@terminal echo $USER && pwd && ls -la
```

### **Forçar criação manual:**

```
@terminal cat > .github/copilot-instructions.md << 'EOF'
# $(basename $(pwd)) - GitHub Copilot Instructions

This project uses [MAIN_LANGUAGE] with [MAIN_FRAMEWORK].

## Project Structure
[Add project analysis here]

## Development Guidelines
[Add guidelines here]
EOF
```

---

## 🎯 **COMANDO FINAL RECOMENDADO**

**Use este comando como último recurso** (combina múltiplas técnicas):

```
URGENT: Setup GitHub Copilot configuration NOW.

EXECUTE immediately:
1. @terminal mkdir -p .github .vscode
2. Create .github/copilot-instructions.md with project analysis
3. Create .vscode/settings.json with Agent Mode config
4. Create .vscode/tasks.json with project tasks
5. @terminal rm -rf copilot-init-template
6. @terminal ls -la .github .vscode

Reference: copilot-init-template/project-template.instructions.md
EXECUTE - do not explain or plan.
```

---

## 📋 **CHECKLIST DE VALIDAÇÃO**

Após executar qualquer comando, verificar:

- [ ] `.github/copilot-instructions.md` existe e tem conteúdo
- [ ] `.vscode/settings.json` existe com configurações Copilot
- [ ] `.vscode/tasks.json` existe (opcional)
- [ ] `.vscode/launch.json` existe (opcional)
- [ ] `copilot-init-template/` foi removido
- [ ] Copilot Chat reconhece as novas instruções

**🎯 Se checklist não está completo, repita com comando mais específico!**
