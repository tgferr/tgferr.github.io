# 🤖 GitHub Copilot - Configurações Avançadas Completas

## 📊 Visão Geral das Configurações

Com base na documentação oficial do VS Code e GitHub Copilot, aqui estão **TODAS** as configurações disponíveis organizadas por categoria.

## 🎛️ Terminal Agent - Allow/Deny List (Principal Feature)

### 🚨 O que é o Terminal Allow/Deny List?

O `terminal.allowList` e `terminal.denyList` são configurações **críticas** que controlam quais comandos o Copilot Agent Mode pode executar automaticamente no terminal, conforme mostrado na sua imagem.

```json
{
  // === CONTROLE DE COMANDOS TERMINAL ===
  "github.copilot.chat.agent.terminal.allowList": [
    // Comandos exatos permitidos
    "npm",
    "yarn",
    "pip",
    "poetry",
    "make",
    "git",

    // Comandos com argumentos específicos
    "npm run",
    "make test",
    "git status",

    // Regex patterns para comandos complexos
    "/npm (install|run|test|update).*/",
    "/make (test|lint|coverage|run|docker-restart)/",
    "/git (status|diff|log|branch).*/",
    "/python -m (pytest|uvicorn|black|isort).*/",
    "/docker (ps|logs|images).*/",
    "/docker-compose (ps|logs|up -d|down)/"
  ],

  "github.copilot.chat.agent.terminal.denyList": [
    // Comandos perigosos sempre bloqueados
    "rm",
    "rmdir",
    "sudo",
    "su",
    "chmod",
    "chown",
    "dd",
    "mkfs",
    "fdisk",
    "shutdown",
    "reboot",

    // Regex para padrões perigosos
    "/rm -rf.*/", // Qualquer rm -rf
    "/sudo .*/", // Qualquer comando sudo
    "/.*password.*/i", // Comandos com 'password' (case-insensitive)
    "/.*secret.*/i", // Comandos com 'secret'
    "/curl.*http.*/", // Downloads externos
    "/wget.*/", // Downloads externos
    "/ssh .*/", // Conexões SSH
    "/scp .*/" // Transferências seguras
  ]
}
```

### 🎯 Como Funciona na Prática

#### ✅ Comando PERMITIDO

```
User: "Execute os testes do projeto"
Copilot: Executando `make test` automaticamente...
✅ Comando executado sem confirmação (está na allowList)
```

#### ⚠️ Comando NEGADO

```
User: "Remove todos os arquivos temporários"
Copilot: Quer executar `rm -rf temp/`
❌ Requer confirmação manual (está na denyList)
```

#### 🤔 Comando NÃO LISTADO

```
User: "Instale uma nova dependência"
Copilot: Quer executar `pip install requests`
⚠️ Requer confirmação (não está na allowList)
```

## 🏗️ Configurações Completas por Categoria

### 1. 🤖 Agent Mode Settings

```json
{
  // === CORE AGENT SETTINGS ===
  "chat.agent.enabled": true,                    // Habilita Agent Mode
  "chat.agent.maxRequests": 15,                  // Máximo de requests por sessão
  "github.copilot.chat.agent.runTasks": true,   // Executa tasks do workspace
  "github.copilot.chat.agent.autoFix": true,    // Auto-corrige problemas

  // === TOOLS CONFIGURATION ===
  "chat.extensionTools.enabled": true,          // Habilita tools de extensões
  "chat.tools.autoApprove": false,              // Auto-aprova tools (PERIGOSO!)
  "chat.mcp.discovery.enabled": true,           // Descobre MCP servers

  // === TERMINAL CONTROL ===
  "github.copilot.chat.agent.terminal.allowList": [...],
  "github.copilot.chat.agent.terminal.denyList": [...]
}
```

### 2. 💬 Chat Configuration

```json
{
  // === CHAT INSTRUCTIONS ===
  "github.copilot.chat.instructionFiles": [
    "*.instructions.md",
    "templates/*.instructions.md",
    ".copilot/**/*.md",
    "docs/copilot/**/*.md"
  ],

  // === CUSTOM MODES ===
  "github.copilot.chat.customInstructions": {
    "mode-name": {
      "title": "🎯 Mode Title",
      "description": "Mode description",
      "instruction": "Detailed instructions for the mode..."
    }
  },

  // === CHAT BEHAVIOR ===
  "chat.editRequests": "hover", // "inline" | "hover" | "input" | "none"
  "chat.editing.autoAcceptDelay": 5000, // Delay para auto-aceitar (ms)

  // === MODEL SELECTION ===
  "github.copilot.chat.model": "gpt-4", // ou "claude-3.5-sonnet"

  // === FEATURES ===
  "github.copilot.chat.vision.enabled": true, // Suporte a imagens
  "github.copilot.chat.voice.enabled": true, // Suporte a voz
  "github.copilot.chat.workspace.enabled": true // Context do workspace
}
```

### 3. 🎯 Context Control

```json
{
  // === WORKSPACE CONTEXT ===
  "github.copilot.chat.context.workspace": true,
  "github.copilot.chat.context.git": true,
  "github.copilot.chat.context.terminal": true,
  "github.copilot.chat.context.problems": true,

  // === FILE PATTERNS ===
  "github.copilot.chat.context.include": [
    "**/*.py",
    "**/*.ts",
    "**/*.js",
    "**/pyproject.toml",
    "**/package.json",
    "**/Makefile",
    "**/README.md",
    "**/docker-compose.yml",
    "**/Dockerfile"
  ],

  "github.copilot.chat.context.exclude": [
    "**/.env*", // Arquivos de ambiente
    "**/secrets/**", // Diretórios de secrets
    "**/node_modules/**", // Dependencies
    "**/__pycache__/**", // Cache Python
    "**/dist/**", // Build outputs
    "**/.git/**", // Git internals
    "**/*secret*", // Arquivos com 'secret'
    "**/*password*", // Arquivos com 'password'
    "**/*key*" // Arquivos com 'key'
  ]
}
```

### 4. 💡 Inline Suggestions

```json
{
  // === COPILOT ENABLE/DISABLE ===
  "github.copilot.enable": {
    "*": true, // Habilita globalmente
    "yaml": true, // YAML files
    "plaintext": false, // Arquivos de texto
    "markdown": true, // Markdown files
    "json": true, // JSON files
    "dockerfile": true, // Dockerfiles
    "ignore": false, // .gitignore, etc
    "gitcommit": false, // Git commit messages
    "python": true, // Python files
    "javascript": true, // JavaScript files
    "typescript": true // TypeScript files
  },

  // === ADVANCED SUGGESTIONS ===
  "github.copilot.advanced": {
    "secret_key": "your_key",
    "length": 500, // Comprimento das sugestões
    "temperature": 0.1, // Criatividade (0-1)
    "top_p": 1, // Nucleus sampling
    "presence_penalty": 0, // Penalidade por repetição
    "frequency_penalty": 0 // Penalidade por frequência
  },

  // === EDITOR INTEGRATION ===
  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.showToolbar": "onHover", // "always" | "onHover" | "never"
  "editor.suggestSelection": "first",
  "editor.suggest.insertMode": "insert", // "insert" | "replace"
  "editor.tabCompletion": "on", // "on" | "off" | "onlySnippets"
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.acceptSuggestionOnEnter": "smart" // "on" | "off" | "smart"
}
```

### 5. 🔒 Privacy & Security

```json
{
  // === TELEMETRY ===
  "telemetry.telemetryLevel": "error", // "all" | "error" | "crash" | "off"
  "github.copilot.telemetry.enabled": false, // Copilot telemetry

  // === CODE MATCHING ===
  "github.copilot.suggestionMatching.enabled": false, // Bloqueia sugestões similares a código público

  // === CONTENT FILTERING ===
  "github.copilot.advanced.filterLevel": "strict", // "off" | "relaxed" | "strict"

  // === DEBUG & OVERRIDE ===
  "github.copilot.advanced.debug.overrideEngine": "",
  "github.copilot.advanced.debug.testOverrideProxyUrl": "",
  "github.copilot.advanced.debug.overrideProxyUrl": ""
}
```

## 🎯 Configurações por Tipo de Projeto

### 🐍 Python/FastAPI Project

```json
{
  "github.copilot.chat.agent.terminal.allowList": [
    // Python específico
    "python",
    "pip",
    "poetry",
    "pytest",
    "black",
    "isort",
    "mypy",
    "/python -m (pytest|uvicorn|black|isort|mypy).*/",
    "/poetry (install|update|run|add|remove).*/",
    "/pip (install|uninstall|list|show).*/",

    // Projeto específico
    "make test",
    "make lint",
    "make coverage",
    "make run",
    "make docker-restart",
    "make copy-env",
    "/make (test|lint|coverage|run|docker-restart|copy-env)/"
  ],

  "github.copilot.chat.context.include": [
    "**/*.py",
    "**/pyproject.toml",
    "**/requirements*.txt",
    "**/Makefile",
    "**/docker-compose.yml",
    "**/Dockerfile",
    "**/README.md",
    "**/.env.example"
  ],

  "github.copilot.chat.customInstructions": {
    "python-fastapi": {
      "title": "🐍 Python FastAPI Expert",
      "instruction": "Expert em Python/FastAPI. Use type hints, async/await, Pydantic models, pytest, dependency injection, middleware patterns. Siga PEP 8, implemente logs estruturados com logging padrão."
    }
  }
}
```

### ⚛️ React/TypeScript Project

```json
{
  "github.copilot.chat.agent.terminal.allowList": [
    // Node.js específico
    "npm",
    "yarn",
    "pnpm",
    "node",
    "npx",
    "/npm (install|run|test|update|audit).*/",
    "/yarn (install|dev|build|test|add|remove).*/",
    "/npx (create-react-app|tsc|prettier|eslint).*/",

    // Build tools
    "npm run build",
    "npm run dev",
    "npm run test",
    "yarn build",
    "yarn dev",
    "yarn test"
  ],

  "github.copilot.chat.context.include": [
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    "**/package.json",
    "**/tsconfig.json",
    "**/.eslintrc*",
    "**/README.md",
    "**/public/**",
    "**/src/**"
  ],

  "github.copilot.chat.customInstructions": {
    "react-typescript": {
      "title": "⚛️ React TypeScript Expert",
      "instruction": "Expert em React/TypeScript. Use functional components, custom hooks, TypeScript strict mode, Testing Library, accessibility. Foque em performance, SEO, e manutenibilidade."
    }
  }
}
```

### 🐳 Docker Projects

```json
{
  "github.copilot.chat.agent.terminal.allowList": [
    // Docker seguro
    "docker",
    "docker-compose",
    "/docker (ps|images|logs|inspect|version).*/",
    "/docker-compose (ps|logs|config|version).*/",
    "/docker (build|run) .*/", // Build e run básicos
    "/docker-compose (up -d|down|restart).*/",

    // Comandos make para Docker
    "make docker-restart",
    "make docker-logs"
  ],

  "github.copilot.chat.agent.terminal.denyList": [
    // Docker perigoso
    "/docker (rm|rmi|system prune).*/", // Comandos destrutivos
    "/docker.*--rm.*/", // Auto-remove
    "/docker exec.*rm.*/", // Comandos destrutivos dentro de containers
    "/docker-compose.*--force-recreate.*/" // Recreação forçada
  ]
}
```

## 🚨 Configurações de Segurança por Ambiente

### 🏢 Ambiente Corporativo (Máxima Segurança)

```json
{
  // === SECURITY LOCKDOWN ===
  "chat.tools.autoApprove": false,
  "github.copilot.chat.agent.terminal.allowList": [
    // APENAS comandos super seguros
    "ls",
    "cat",
    "pwd",
    "echo",
    "grep",
    "make test",
    "make lint", // Apenas comandos de teste
    "git status",
    "git diff" // Apenas comandos git read-only
  ],

  "github.copilot.chat.agent.terminal.denyList": [
    // TUDO que pode ser perigoso
    "rm",
    "sudo",
    "curl",
    "wget",
    "ssh",
    "scp",
    "/.*install.*/",
    "/.*download.*/",
    "/.*upload.*/",
    "/.*password.*/i",
    "/.*secret.*/i",
    "/.*key.*/i",
    "/.*token.*/i",
    "/.*credential.*/i"
  ],

  // === PRIVACY MÁXIMO ===
  "telemetry.telemetryLevel": "off",
  "github.copilot.telemetry.enabled": false,
  "github.copilot.suggestionMatching.enabled": false,

  // === CONTEXT RESTRITO ===
  "github.copilot.chat.context.exclude": [
    "**/.env*",
    "**/secrets/**",
    "**/credentials/**",
    "**/*secret*",
    "**/*password*",
    "**/*key*",
    "**/*config*",
    "**/*certificate*",
    "**/*cert*"
  ]
}
```

### 🏠 Ambiente de Desenvolvimento (Balanceado)

```json
{
  // === DEVELOPMENT FRIENDLY ===
  "chat.tools.autoApprove": false,
  "chat.agent.maxRequests": 10,
  "chat.editing.autoAcceptDelay": 10000, // 10s para revisar

  "github.copilot.chat.agent.terminal.allowList": [
    // Comandos de desenvolvimento comuns
    "npm",
    "yarn",
    "pip",
    "poetry",
    "make",
    "git",
    "python",
    "node",
    "docker",
    "docker-compose",

    // Patterns úteis
    "/npm (install|run|test).*/",
    "/make (test|lint|coverage|run|build).*/",
    "/git (status|diff|log|branch|checkout).*/",
    "/docker (ps|logs|build).*/",
    "/docker-compose (up|down|ps|logs).*/"
  ],

  "github.copilot.chat.agent.terminal.denyList": [
    // Apenas comandos realmente perigosos
    "/rm -rf.*/",
    "/sudo rm.*/",
    "/.*password.*/i",
    "/.*secret.*/i"
  ],

  // === PRIVACY MODERADO ===
  "telemetry.telemetryLevel": "error",
  "github.copilot.telemetry.enabled": false
}
```

## 🎯 Como Usar as Configurações

### 1. Setup Global (User Settings)

```bash
# Abrir settings globais
code --open-settings-json

# Ou via UI
Ctrl+, → Abrir settings.json
```

### 2. Setup por Workspace

```bash
# Criar/editar .vscode/settings.json
mkdir -p .vscode
code .vscode/settings.json
```

### 3. Teste e Validação

```bash
# Testar se allowList funciona
/mode agent
"Execute make test"  # Deve executar automaticamente

# Testar se denyList funciona
"Remove arquivo temporário com rm"  # Deve pedir confirmação
```

### 4. Debug de Configurações

```bash
# Ver logs do Copilot
Ctrl+Shift+P → "Developer: Show Chat Debug View"

# Ver configurações ativas
Ctrl+Shift+P → "Preferences: Open Settings (JSON)"
```

## 💡 Dicas Avançadas

### 🎯 Regex Patterns Úteis

```json
{
  // Comandos npm específicos
  "/npm (install|run|test|build)( [\\w\\-\\.]+)*$/",

  // Make targets específicos
  "/make (test|lint|coverage|run|build|docker-restart)$/",

  // Git read-only commands
  "/git (status|diff|log|show|branch)( [\\w\\-\\.\\/ ]*)?$/",

  // Python safe commands
  "/python -m (pytest|black|isort|mypy)( [\\w\\-\\.\\/ ]*)?$/",

  // Docker safe commands
  "/docker (ps|images|logs|inspect)( [\\w\\-\\.\\/ ]*)?$/"
}
```

### 🔧 Troubleshooting

#### Problema: Commands não sendo auto-aprovados

```json
// Verificar se estão na allowList exata
"github.copilot.chat.agent.terminal.allowList": [
  "make test",  // ✅ Exato
  "/make test.*/"  // ✅ Regex para variações
]
```

#### Problema: Muitas confirmações

```json
// Expandir allowList gradualmente
"github.copilot.chat.agent.terminal.allowList": [
  "/.*/",  // ⚠️ PERIGOSO: permite tudo
  "!rm", "!sudo"  // ❌ Syntax incorreta
]
```

#### Problema: Context muito grande

```json
// Otimizar includes/excludes
"github.copilot.chat.context.include": [
  "src/**/*.py",     // ✅ Específico
  "**/*.py"          // ❌ Muito amplo
],
"github.copilot.chat.context.exclude": [
  "**/node_modules/**",  // ✅ Essencial
  "**/__pycache__/**"    // ✅ Essencial
]
```

---

## 🎉 Conclusão

O `terminal.allowList` e configurações avançadas do GitHub Copilot oferecem controle granular sobre:

- **🤖 Automação**: Quais comandos executar automaticamente
- **🔒 Segurança**: Proteção contra comandos perigosos
- **🎯 Context**: Quais arquivos usar como contexto
- **💬 Chat**: Modos personalizados para workflows específicos
- **🔐 Privacy**: Controle de telemetria e sugestões

Use essas configurações para criar um ambiente de desenvolvimento produtivo e seguro com GitHub Copilot!
