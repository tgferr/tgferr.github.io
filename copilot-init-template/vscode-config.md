# 🎯 Configurações VS Code para GitHub Copilot

## 📁 **ESTRUTURA OFICIAL DE PASTAS**

### ✅ **Localização Correta dos Arquivos (2025)**

**IMPORTANTE**: Use sempre a pasta `.github/` para arquivos do GitHub Copilot:

```
projeto/
├── .github/                              # ✅ PASTA OFICIAL para GitHub Copilot
│   ├── copilot-instructions.md           # ✅ Instruções principais do Copilot
│   ├── instructions/                     # ✅ Instruções específicas
│   │   ├── python.instructions.md        # ✅ Instruções para Python
│   │   ├── react.instructions.md         # ✅ Instruções para React/JS
│   │   └── docker.instructions.md        # ✅ Instruções para Docker
│   └── prompts/                          # ✅ Prompt files reutilizáveis
│       ├── code-review.prompt.md         # ✅ Prompt para code review
│       └── testing.prompt.md             # ✅ Prompt para testes
└── .vscode/                              # ✅ APENAS para configurações VS Code
    ├── settings.json                     # ✅ Configurações específicas do VS Code
    ├── tasks.json                        # ✅ Tasks do VS Code
    ├── launch.json                       # ✅ Debug configurations
    └── extensions.json                   # ✅ Extensões recomendadas
```

### ❌ **ESTRUTURA INCORRETA** (Causa comandos "foscos"):

```
projeto/
├── .vscode/
│   ├── copilot-instructions.md          # ❌ Local ERRADO - causa UI fosca
│   ├── python.instructions.md           # ❌ Local ERRADO - não é reconhecido
│   └── settings.json                    # ✅ Correto
```

## 📁 Estrutura de Configurações

### 1. Settings.json Global

Configurações aplicadas a todos os projetos:

```json
{
  // === GitHub Copilot Configuration ===
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": true,
    "markdown": true
  },

  // === Chat Instructions (CONFIGURAÇÃO CORRETA) ===
  "github.copilot.chat.instructionFiles": [
    ".github/copilot-instructions.md", // ✅ Arquivo principal
    ".github/instructions/*.instructions.md", // ✅ Instruções específicas
    ".github/prompts/*.prompt.md" // ✅ Prompt files
  ],

  // === Custom Chat Modes ===
  "github.copilot.chat.customInstructions": {
    "project-analyzer": {
      "title": "🔍 Project Analyzer",
      "description": "Analisa profundamente a estrutura e padrões do projeto",
      "instruction": "Você é um especialista em análise de projetos. Analise a estrutura, dependências, padrões de código e arquitetura. Forneça insights detalhados sobre tecnologias, convenções e best practices utilizadas. Use o arquivo de instruções do projeto como referência."
    },
    "pattern-follower": {
      "title": "🎯 Pattern Follower",
      "description": "Implementa seguindo exatamente os padrões do projeto",
      "instruction": "Você deve seguir EXATAMENTE os padrões existentes no projeto. Analise códigos similares antes de implementar. Use as mesmas convenções de nomenclatura, estrutura de arquivos, logging, testes e documentação. NUNCA invente padrões novos."
    },
    "env-validator": {
      "title": "🛠️ Environment Validator",
      "description": "Valida e configura ambiente de desenvolvimento",
      "instruction": "Verifique se o ambiente está configurado corretamente: virtual environment, dependências, Docker containers, banco de dados. Use apenas comandos do Makefile/package.json. Reporte problemas com soluções específicas."
    },
    "test-master": {
      "title": "🧪 Test Master",
      "description": "Especialista em testes abrangentes",
      "instruction": "Crie testes completos seguindo padrões do projeto. Foque em coverage alto, casos edge, testes de integração. Use frameworks e convenções existentes. Execute via Makefile e valide qualidade."
    },
    "debug-expert": {
      "title": "🐛 Debug Expert",
      "description": "Especialista em debugging e troubleshooting",
      "instruction": "Debug problemas sistematicamente: analise logs, reproduza erros, identifique root cause. Use ferramentas de debug do projeto. Implemente correções seguindo padrões existentes. Valide que não quebrou outras funcionalidades."
    }
  },

  // === Editor Configuration ===
  "editor.inlineSuggest.enabled": true,
  "editor.suggestSelection": "first",
  "editor.tabCompletion": "on",
  "editor.wordBasedSuggestions": "matchingDocuments",

  // === Language Specific ===
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit"
    }
  },

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit"
    }
  },

  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },

  // === Files and Search ===
  "files.exclude": {
    "**/__pycache__": true,
    "**/*.pyc": true,
    "**/node_modules": true,
    "**/.git": false,
    "**/.DS_Store": true
  },

  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/*.code-search": true,
    "**/__pycache__": true
  }
}
```

### 2. Workspace Settings (.vscode/settings.json)

Configurações específicas do projeto:

```json
{
  // === Project Specific Instructions (PASTA CORRETA) ===
  "github.copilot.chat.instructionFiles": [
    ".github/copilot-instructions.md", // ✅ Instruções principais
    ".github/instructions/python.instructions.md", // ✅ Instruções Python
    ".github/instructions/api.instructions.md" // ✅ Instruções API
  ],

  // === Python Configuration ===
  "python.defaultInterpreterPath": "./.venv/bin/python",
  "python.terminal.activateEnvironment": true,
  "python.testing.pytestEnabled": true,
  "python.testing.pytestArgs": [
    "tests",
    "--cov=app",
    "--cov-report=term-missing",
    "--cov-fail-under=90"
  ],

  // === Tasks and Build ===
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.profiles.linux": {
    "bash": {
      "path": "bash",
      "args": ["-l"]
    },
    "venv": {
      "path": "bash",
      "args": ["-l", "-c", "source .venv/bin/activate && bash"]
    }
  },

  // === Extensions Configuration ===
  "black-formatter.args": ["--line-length", "120"],
  "isort.args": ["--profile", "black", "--line-length", "120"],
  "pylint.args": ["--max-line-length=120"],

  // === File Associations ===
  "files.associations": {
    "*.env.*": "dotenv",
    "Dockerfile*": "dockerfile",
    "docker-compose*.yml": "dockercompose"
  },

  // === Project Specific Exclusions ===
  "files.exclude": {
    "**/__pycache__": true,
    "**/*.pyc": true,
    ".pytest_cache": true,
    "htmlcov": true,
    ".coverage": true,
    "coverage.xml": true
  }
}
```

### 3. Tasks Configuration (.vscode/tasks.json)

Tasks para desenvolvimento:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run Application",
      "type": "shell",
      "command": "make",
      "args": ["run"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "Run Tests",
      "type": "shell",
      "command": "make",
      "args": ["test"],
      "group": {
        "kind": "test",
        "isDefault": true
      },
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "Run Coverage",
      "type": "shell",
      "command": "make",
      "args": ["coverage"],
      "group": "test",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "Lint Code",
      "type": "shell",
      "command": "make",
      "args": ["lint"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "Docker Restart",
      "type": "shell",
      "command": "make",
      "args": ["docker-restart"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "Environment Check",
      "type": "shell",
      "command": "bash",
      "args": [
        "-c",
        "echo '=== ENVIRONMENT CHECK ===' && echo 'VENV: $VIRTUAL_ENV' && which python && python --version && echo '=== DOCKER STATUS ===' && docker-compose ps"
      ],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

### 4. Launch Configuration (.vscode/launch.json)

Configurações de debug otimizadas:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug FastAPI App",
      "type": "debugpy",
      "request": "launch",
      "module": "uvicorn",
      "args": [
        "app.main:app",
        "--host",
        "0.0.0.0",
        "--port",
        "8000",
        "--reload"
      ],
      "console": "integratedTerminal",
      "envFile": "${workspaceFolder}/.env",
      "cwd": "${workspaceFolder}",
      "jinja": true,
      "justMyCode": false,
      "preLaunchTask": "Environment Check"
    },
    {
      "name": "Debug Current File",
      "type": "debugpy",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal",
      "envFile": "${workspaceFolder}/.env",
      "cwd": "${workspaceFolder}",
      "justMyCode": false
    },
    {
      "name": "Debug Pytest Current File",
      "type": "debugpy",
      "request": "launch",
      "module": "pytest",
      "args": ["${file}", "-v", "-s", "--cov=app", "--cov-report=term-missing"],
      "console": "integratedTerminal",
      "envFile": "${workspaceFolder}/.env",
      "cwd": "${workspaceFolder}",
      "justMyCode": false
    },
    {
      "name": "Debug All Tests",
      "type": "debugpy",
      "request": "launch",
      "module": "pytest",
      "args": [
        "tests/",
        "-v",
        "-s",
        "--cov=app",
        "--cov-report=term-missing",
        "--cov-fail-under=90"
      ],
      "console": "integratedTerminal",
      "envFile": "${workspaceFolder}/.env",
      "cwd": "${workspaceFolder}",
      "justMyCode": false
    }
  ]
}
```

### 5. Extensions Recommendations (.vscode/extensions.json)

Extensões essenciais:

```json
{
  "recommendations": [
    // === GitHub Copilot ===
    "github.copilot",
    "github.copilot-chat",

    // === Python Development ===
    "ms-python.python",
    "ms-python.black-formatter",
    "ms-python.isort",
    "ms-python.pylint",
    "ms-python.mypy-type-checker",

    // === FastAPI/API Development ===
    "ms-python.flake8",
    "humao.rest-client",
    "42crunch.vscode-openapi",

    // === Docker/DevOps ===
    "ms-azuretools.vscode-docker",
    "ms-vscode-remote.remote-containers",

    // === General Development ===
    "editorconfig.editorconfig",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",

    // === Git/Version Control ===
    "eamodio.gitlens",
    "github.vscode-pull-request-github",

    // === Testing ===
    "littlefoxteam.vscode-python-test-adapter",
    "hbenl.vscode-test-explorer",

    // === Productivity ===
    "gruntfuggly.todo-tree",
    "streetsidesoftware.code-spell-checker",
    "ms-vscode.vscode-json",

    // === Documentation ===
    "yzhang.markdown-all-in-one",
    "shd101wyy.markdown-preview-enhanced"
  ]
}
```

## 🚀 Setup Automático

### Script de Configuração Inicial

Crie um arquivo `setup-vscode.sh`:

```bash
#!/bin/bash

echo "🚀 Configurando VS Code para o projeto..."

# Criar estrutura .vscode se não existir
mkdir -p .vscode

# Copiar configurações dos templates
cp templates/vscode-settings.json .vscode/settings.json
cp templates/vscode-tasks.json .vscode/tasks.json
cp templates/vscode-launch.json .vscode/launch.json
cp templates/vscode-extensions.json .vscode/extensions.json

# Instalar extensões recomendadas
if command -v code &> /dev/null; then
    echo "📦 Instalando extensões recomendadas..."
    code --install-extension github.copilot
    code --install-extension github.copilot-chat
    code --install-extension ms-python.python
    code --install-extension ms-python.black-formatter
    code --install-extension ms-python.isort
    echo "✅ Extensões instaladas!"
else
    echo "⚠️  VS Code não encontrado. Instale as extensões manualmente."
fi

echo "🎉 Configuração VS Code concluída!"
echo "💡 Reinicie o VS Code para aplicar todas as configurações."
```

### Comando Make para Setup

Adicione ao Makefile:

```makefile
.PHONY: setup-vscode
setup-vscode:
	@chmod +x setup-vscode.sh
	@./setup-vscode.sh
```

## 🎯 Como Usar

### 1. Setup Inicial

```bash
# Executar setup automático
make setup-vscode

# Ou manualmente
mkdir -p .vscode
cp templates/vscode-*.json .vscode/
```

### 2. Usar Chat Modes

```
# No Copilot Chat
/mode project-analyzer

# Ou diretamente
Act as Project Analyzer: Analise este projeto...
```

### 3. Executar Tasks

- `Ctrl+Shift+P` → "Tasks: Run Task"
- Selecionar task desejada
- Ou usar atalhos configurados

### 4. Debug

- `F5` para debug da aplicação
- `Ctrl+F5` para run sem debug
- Breakpoints funcionam automaticamente

## 💡 Dicas Avançadas

### Snippets Customizados

Crie `.vscode/python.json`:

```json
{
  "FastAPI Controller": {
    "prefix": "fastapi-controller",
    "body": [
      "import logging",
      "from http import HTTPStatus",
      "from fastapi import APIRouter",
      "",
      "from app.domains.${1:domain}.schema import ${2:Schema}Response",
      "",
      "router = APIRouter(tags=['${1:domain}'])",
      "logger = logging.getLogger(__name__)",
      "",
      "@router.get(",
      "    '/v1/portfolios/${3:endpoint}',",
      "    status_code=HTTPStatus.OK,",
      "    response_model=${2:Schema}Response,",
      "    operation_id='portfolios_v1_get_${3:endpoint}',",
      ")",
      "def ${4:function_name}() -> dict:",
      "    \"\"\"${5:Description}.\"\"\"",
      "    logger.info('Executing ${4:function_name}')",
      "    $0",
      "    return {'status': 'OK'}"
    ],
    "description": "FastAPI controller template"
  }
}
```

### Workspace Multi-Root

Para múltiplos projetos:

```json
{
  "folders": [
    {
      "name": "API",
      "path": "./ps-core-product-api"
    },
    {
      "name": "Frontend",
      "path": "./ps-frontend"
    }
  ],
  "settings": {
    "github.copilot.chat.instructionFiles": ["*/**.instructions.md"]
  }
}
```

---

## 🔧 Troubleshooting

### Copilot não reconhece instruções

1. Verificar se arquivo está no `instructionFiles`
2. Reiniciar VS Code
3. Verificar extensão ativa

### Tasks não funcionam

1. Verificar se está na pasta correta
2. Verificar se Makefile existe
3. Testar comando manualmente no terminal

### Debug não inicia

1. Verificar se virtual environment está ativa
2. Verificar se dependências estão instaladas
3. Verificar arquivo `.env`

## 🔧 Configurações Avançadas do GitHub Copilot (2025)

### 🤖 Configurações do Agent Mode

#### ⚠️ CONFIGURAÇÕES ATUALIZADAS (2025)

**IMPORTANTE**: As configurações `allowList`/`denyList` foram **DEPRECATED** em 2025!

❌ **DEPRECATED** (não usar mais):

- `github.copilot.chat.agent.terminal.allowList`
- `github.copilot.chat.agent.terminal.denyList`

✅ **NOVA SINTAXE** (2025):

```json
{
  // === NOVA CONFIGURAÇÃO DE TERMINAL (2025) ===
  "chat.tools.terminal.autoApprove": {
    // Comandos auto-aprovados (true = sem confirmação)
    "mkdir": true,
    "echo": true,
    "ls": true,
    "cat": true,
    "pwd": true,
    "make": true,
    "npm": true,
    "yarn": true,
    "pip": true,
    "poetry": true,
    "python": true,
    "node": true,
    "git": true,
    "docker": true,

    // Regex patterns para comandos específicos
    "/^git (status|show|log|diff)\\b/": true,
    "/^npm (install|run|test)\\b/": true,
    "/^make (test|lint|coverage|run)\\b/": true,
    "/^poetry (install|update|run)\\b/": true,
    "/^docker (ps|logs|images)\\b/": true,

    // Comandos SEMPRE bloqueados (false = sempre pedir confirmação)
    "rm": false,
    "rmdir": false,
    "sudo": false,
    "chmod": false,
    "chown": false,
    "del": false,
    "kill": false,
    "curl": false,
    "wget": false,
    "eval": false,

    // Regex patterns para comandos perigosos
    "/rm\\s+-rf/": false,
    "/sudo\\s+/": false,
    "/password/i": false,
    "/secret/i": false,
    "/key/i": false,
    "/.env/": false
  },

  // === Agent Mode Settings (2025) ===
  "chat.agent.enabled": true,
  "chat.agent.maxRequests": 25, // Limite atualizado para 2025
  "github.copilot.chat.agent.runTasks": true,
  "github.copilot.chat.agent.autoFix": true,

  // === Tools Configuration (2025) ===
  "chat.extensionTools.enabled": true,
  "chat.tools.autoApprove": false, // EXPERIMENTAL: auto-aprovar TODAS as tools
  "chat.mcp.enabled": true, // MCP support
  "chat.mcp.discovery.enabled": true,

  // === Edit Requests (2025) ===
  "chat.editRequests": "inline", // "inline" | "hover" | "input" | "none"
  "chat.editing.autoAcceptDelay": 0, // 0 = desabilitado, >0 = segundos para auto-aceitar
  "chat.checkpoints.enabled": true // Checkpoints para reverter mudanças
}
```

#### ✅ Explicação da Nova Sintaxe

**chat.tools.terminal.autoApprove**: Objeto com comandos e valores boolean/regex

- `true`: Comando executado automaticamente sem confirmação
- `false`: Sempre pede confirmação antes de executar
- Regex entre `/`: Padrões complexos (ex: `/^git status\\b/`)
- Comandos `false` sempre sobrescrevem `true`

### 🎛️ Configurações Avançadas de Chat

```json
{
  // === Chat Behavior ===
  "github.copilot.chat.instructionFiles": [
    ".github/copilot-instructions.md",
    ".github/instructions/*.instructions.md",
    ".github/prompts/*.prompt.md"
  ],

  // === Custom Instructions por Linguagem ===
  "github.copilot.chat.customInstructions": {
    // Modes específicos para Python
    "python-expert": {
      "title": "🐍 Python Expert",
      "description": "Python specialist with FastAPI focus",
      "instruction": "Expert em Python/FastAPI. Use type hints, async/await, Pydantic models, pytest para testes. Siga PEP 8, implemente logs estruturados, use dependency injection do FastAPI."
    },

    // Mode para análise de performance
    "performance-auditor": {
      "title": "⚡ Performance Auditor",
      "description": "Analyze and optimize application performance",
      "instruction": "Analise performance de código: identifique gargalos de CPU/memória/I/O, otimize queries de banco, implemente cache eficiente, use profiling tools. Sempre meça antes/depois das otimizações."
    },

    // Mode para segurança
    "security-expert": {
      "title": "🔒 Security Expert",
      "description": "Security analysis and hardening",
      "instruction": "Execute auditoria de segurança: analise autenticação/autorização, validação de inputs, sanitização de dados, logs de segurança. Identifique vulnerabilidades OWASP Top 10 e implemente correções."
    }
  },

  // === Language Model Selection ===
  "github.copilot.chat.model": "gpt-4", // ou "claude-3.5-sonnet"

  // === Chat Features ===
  "github.copilot.chat.vision.enabled": true,
  "github.copilot.chat.voice.enabled": true,
  "github.copilot.chat.workspace.enabled": true
}
```

### 🔧 Configurações de Inline Suggestions

```json
{
  // === Completions Control ===
  "github.copilot.enable": {
    "*": true,
    "yaml": true,
    "plaintext": false,
    "markdown": true,
    "json": true,
    "dockerfile": true,
    "ignore": false,
    "gitcommit": false
  },

  // === Advanced Suggestions ===
  "github.copilot.advanced": {
    "secret_key": "your_key_here",
    "length": 500,
    "temperature": 0.1,
    "top_p": 1,
    "presence_penalty": 0,
    "frequency_penalty": 0
  },

  // === Editor Integration ===
  "editor.inlineSuggest.enabled": true,
  "editor.inlineSuggest.showToolbar": "onHover",
  "editor.suggestSelection": "first",
  "editor.suggest.insertMode": "insert",
  "editor.tabCompletion": "on",
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.acceptSuggestionOnEnter": "smart"
}
```

### 📊 Configurações de Telemetria e Privacy

```json
{
  // === Privacy Settings ===
  "telemetry.telemetryLevel": "error", // "all" | "error" | "crash" | "off"

  // === Copilot Specific Privacy ===
  "github.copilot.telemetry.enabled": false,
  "github.copilot.suggestionMatching.enabled": false,
  "github.copilot.advanced.debug.overrideEngine": "",
  "github.copilot.advanced.debug.testOverrideProxyUrl": "",
  "github.copilot.advanced.debug.overrideProxyUrl": "",

  // === Content Filtering ===
  "github.copilot.advanced.filterLevel": "strict" // "off" | "relaxed" | "strict"
}
```

### 🎯 Configurações por Workspace/Projeto

```json
{
  // === Project Specific (PASTA CORRETA) ===
  "github.copilot.chat.instructionFiles": [
    ".github/copilot-instructions.md" // ✅ Arquivo específico do projeto
  ],

  // === Context Awareness ===
  "github.copilot.chat.context.workspace": true,
  "github.copilot.chat.context.git": true,
  "github.copilot.chat.context.terminal": true,
  "github.copilot.chat.context.problems": true,

  // === File Patterns para Context ===
  "github.copilot.chat.context.include": [
    "**/*.py",
    "**/*.ts",
    "**/*.js",
    "**/pyproject.toml",
    "**/package.json",
    "**/Makefile",
    "**/README.md",
    ".github/**/*.md" // ✅ Incluir arquivos da pasta .github
  ],

  "github.copilot.chat.context.exclude": [
    "**/node_modules/**",
    "**/__pycache__/**",
    "**/dist/**",
    "**/build/**",
    "**/.git/**",
    "**/.vscode/**" // ✅ Excluir configurações VS Code do contexto
  ]
}
```

## 🚨 Configurações de Segurança Recomendadas (2025)

### ⚠️ Configurações CRÍTICAS para Ambientes Corporativos

```json
{
  // === SEGURANÇA MÁXIMA (2025) ===
  "chat.tools.autoApprove": false, // NUNCA true em produção

  // NOVA SINTAXE PARA TERMINAL (2025)
  "chat.tools.terminal.autoApprove": {
    // Lista muito restritiva - apenas comandos seguros
    "ls": true,
    "cat": true,
    "pwd": true,
    "echo": true,
    "/^make (test|lint|coverage)\\b/": true,

    // Bloquear TODOS os comandos perigosos
    "rm": false,
    "sudo": false,
    "chmod": false,
    "curl": false,
    "wget": false,
    "/password/i": false,
    "/secret/i": false,
    "/key/i": false,
    "/env/i": false
  },

  // === PRIVACY MÁXIMO ===
  "telemetry.telemetryLevel": "off",
  "github.copilot.telemetry.enabled": false,
  "github.copilot.suggestionMatching.enabled": false,

  // === CONTROLE DE CONTEXTO ===
  "github.copilot.chat.context.exclude": [
    "**/.env*",
    "**/secrets/**",
    "**/credentials/**",
    "**/*secret*",
    "**/*password*",
    "**/*key*"
  ]
}
```

### ✅ Configurações RECOMENDADAS para Desenvolvimento

```json
{
  // === DESENVOLVIMENTO SEGURO (2025) ===
  "chat.tools.autoApprove": false, // Sempre revisar comandos
  "chat.agent.maxRequests": 25, // Limite atualizado para 2025
  "chat.editing.autoAcceptDelay": 0, // Desabilitado por segurança

  // === TERMINAL CONTROLADO (NOVA SINTAXE 2025) ===
  "chat.tools.terminal.autoApprove": {
    "npm": true,
    "yarn": true,
    "poetry": true,
    "make": true,
    "python": true,
    "node": true,
    "/^git (status|diff|log)\\b/": true,
    "/^npm run\\b/": true,
    "/^make (test|lint|coverage|run)\\b/": true,
    "/^python -m pytest\\b/": true
  },

  // === CONTEXT INTELIGENTE ===
  "github.copilot.chat.context.workspace": true,
  "github.copilot.chat.context.git": true,
  "github.copilot.chat.instructionFiles": [
    ".github/copilot-instructions.md",
    ".github/instructions/*.instructions.md"
  ]
}
```

## 📋 Checklist de Configuração (2025)

### ✅ Setup Inicial

- [ ] Configurar `chat.tools.terminal.autoApprove` com comandos do projeto
- [ ] Definir comandos perigosos como `false` no autoApprove
- [ ] Configurar `instructionFiles` para o projeto
- [ ] Definir `customInstructions` para workflows específicos
- [ ] Configurar privacy settings apropriados

### ✅ Configuração de Segurança

- [ ] `chat.tools.autoApprove: false`
- [ ] `telemetry.telemetryLevel: "error"` ou `"off"`
- [ ] Context exclusions para arquivos sensíveis
- [ ] Terminal autoApprove com comandos perigosos bloqueados
- [ ] Revisar permissions de workspace

### ✅ Otimização de Produtividade

- [ ] Chat modes personalizados para o stack
- [ ] Instructions específicas do projeto
- [ ] Context includes para arquivos relevantes
- [ ] Tasks integration habilitada
- [ ] Auto-fix habilitado para iterações

---

## 💡 Dicas Avançadas de Uso (2025)

### 🎯 Terminal AutoApprove - Casos de Uso

#### Para Projetos Python/FastAPI (2025):

```json
{
  "chat.tools.terminal.autoApprove": {
    "poetry": true,
    "pip": true,
    "python": true,
    "pytest": true,
    "/^make (test|lint|coverage|run)\\b/": true,
    "/^poetry (install|update|run)\\b/": true,
    "/^python -m (pytest|uvicorn|black|isort)\\b/": true,
    "/^make (test|lint|coverage|run|docker-restart)\\b/": true
  }
}
```

#### Para Projetos Node.js/React (2025):

```json
{
  "chat.tools.terminal.autoApprove": {
    "npm": true,
    "yarn": true,
    "pnpm": true,
    "node": true,
    "/^npm (install|run|test)\\b/": true,
    "/^yarn (install|dev|build|test)\\b/": true,
    "/^npx\\s+/": true
  }
}
```

#### Para Projetos Docker (2025):

```json
{
  "chat.tools.terminal.autoApprove": {
    "docker": true,
    "docker-compose": true,
    "/^docker (build|run|ps|logs)\\b/": true,
    "/^docker-compose (up|down|ps|logs)\\b/": true,
    "/^make docker-restart\\b/": true,

    // Comandos destrutivos sempre bloqueados
    "/docker (rm|rmi|system prune)/": false,
    "/docker.*--rm/": false
  }
}
```

### 🎨 Custom Instructions Avançadas

#### Mode para Code Review:

```json
{
  "code-reviewer-expert": {
    "title": "👁️ Code Review Expert",
    "instruction": "Atue como um senior code reviewer. Analise: 1) Qualidade do código, 2) Potenciais bugs, 3) Performance, 4) Segurança, 5) Manutenibilidade, 6) Testes. Forneça feedback construtivo com exemplos específicos e sugestões de melhoria."
  }
}
```

#### Mode para DevOps:

```json
{
  "devops-specialist": {
    "title": "🚀 DevOps Specialist",
    "instruction": "Expert em DevOps e infraestrutura. Foque em: CI/CD pipelines, containerização, monitoramento, escalabilidade, segurança de infraestrutura. Use Terraform, Kubernetes, Docker, GitHub Actions. Sempre considere observabilidade e reliability."
  }
}
```

Use essas configurações avançadas para ter controle total sobre o GitHub Copilot e maximizar sua produtividade com segurança!

---

## 🔍 **POR QUE COMANDOS FICAM "FOSCOS" NA PASTA .vscode?**

### 📋 **Explicação Técnica**

O VS Code usa diferentes tratamentos visuais para identificar quando arquivos estão em locais incorretos:

#### ✅ **Comportamento Normal** (pasta .github):

- **Pasta**: `.github/copilot-instructions.md`
- **VS Code**: Reconhece como arquivo oficial do GitHub Copilot
- **Interface**: Comandos aparecem **normais** e **ativos**
- **Funcionalidade**: **100% funcional**

#### ❌ **Comportamento com Aviso** (pasta .vscode):

- **Pasta**: `.vscode/copilot-instructions.md`
- **VS Code**: Detecta arquivo do GitHub Copilot em local errado
- **Interface**: Comandos aparecem **"foscos/desbotados"**
- **Funcionalidade**: **Pode funcionar parcialmente**, mas não é oficial

### 🎯 **Como Identificar o Problema**

1. **Comandos foscos**: Se você vê comandos do Copilot com aparência desbotada
2. **Autocomplete limitado**: Sugestões reduzidas ou ausentes
3. **Reconhecimento parcial**: Algumas instruções funcionam, outras não

### 🔧 **Como Corrigir**

```bash
# 1. Mover arquivos para local correto
mkdir -p .github/instructions
mv .vscode/*.instructions.md .github/instructions/
mv .vscode/copilot-instructions.md .github/

# 2. Atualizar settings.json
# Remover referências à pasta .vscode
# Adicionar referências à pasta .github

# 3. Reiniciar VS Code
```

### 📚 **Documentação Oficial**

**GitHub Documentation confirms**:

- ✅ `.github/copilot-instructions.md` - **OFICIAL**
- ✅ `.github/instructions/*.instructions.md` - **OFICIAL**
- ❌ `.vscode/copilot-instructions.md` - **NÃO OFICIAL**

### 🎉 **Resultado Esperado Após Correção**

- **Comandos nítidos**: Todos os comandos do Copilot aparecem normais
- **Funcionalidade completa**: 100% das features funcionam
- **Performance otimizada**: Reconhecimento mais rápido das instruções
- **Compatibilidade total**: Funciona em todos os ambientes (Web, Desktop, Codespaces)

---

## 📋 **CHECKLIST FINAL DE VALIDAÇÃO**

### ✅ **Estrutura de Pastas Correta**

- [ ] Arquivos `.instructions.md` estão em `.github/instructions/`
- [ ] Arquivo `copilot-instructions.md` está em `.github/`
- [ ] Prompt files estão em `.github/prompts/`
- [ ] Pasta `.vscode/` contém apenas configs VS Code

### ✅ **Configurações Atualizadas**

- [ ] `settings.json` referencia `.github/` paths
- [ ] Removidas referências deprecated
- [ ] Terminal autoApprove configurado (nova sintaxe 2025)
- [ ] Context includes/excludes configurados

### ✅ **Funcionalidade Testada**

- [ ] Comandos Copilot aparecem **nítidos** (não foscos)
- [ ] Custom instructions são reconhecidas
- [ ] Agent mode funciona corretamente
- [ ] Terminal commands funcionam conforme esperado

### ✅ **Migração Completa**

- [ ] Backup das configurações antigas criado
- [ ] Nova estrutura testada
- [ ] Documentação do projeto atualizada
- [ ] Time notificado sobre mudanças

---

**🎯 RESUMO**: Use **`.github/`** para GitHub Copilot, **`.vscode/`** para VS Code. Esta é a estrutura oficial que garante funcionalidade completa e interface nítida!

---

## 🔄 **GUIA DE MIGRAÇÃO 2025**

### ⚠️ **CONFIGURAÇÕES DEPRECATED - MIGRAR URGENTEMENTE**

Se você tem essas configurações antigas no seu `settings.json`, **REMOVA e substitua**:

#### ❌ **REMOVER** (Deprecated):

```json
{
  "github.copilot.chat.agent.terminal.allowList": [...],
  "github.copilot.chat.agent.terminal.denyList": [...]
}
```

#### ✅ **SUBSTITUIR POR** (2025):

```json
{
  "chat.tools.terminal.autoApprove": {
    "comando": true, // ou false
    "/regex\b/": true
  }
}
```

### 🚀 **SCRIPT DE MIGRAÇÃO AUTOMÁTICA**

Crie um arquivo `migrate-copilot-config.py`:

```python
#!/usr/bin/env python3
"""
Script para migrar configurações deprecated do GitHub Copilot
"""
import json
import os
from pathlib import Path

def migrate_settings():
    """Migra settings.json para nova sintaxe 2025"""

    # Caminhos para settings.json
    paths = [
        Path.home() / '.config/Code/User/settings.json',  # Linux
        Path.home() / 'Library/Application Support/Code/User/settings.json',  # macOS
        Path.home() / 'AppData/Roaming/Code/User/settings.json',  # Windows
        Path('.vscode/settings.json')  # Workspace
    ]

    for settings_path in paths:
        if settings_path.exists():
            print(f"🔄 Migrando: {settings_path}")
            migrate_file(settings_path)


def migrate_file(file_path):
    """Migra um arquivo específico"""

    with open(file_path, 'r') as f:
        settings = json.load(f)

    changed = False

    # Migrar allowList para autoApprove
    if 'github.copilot.chat.agent.terminal.allowList' in settings:
        allow_list = settings.pop('github.copilot.chat.agent.terminal.allowList')
        deny_list = settings.pop('github.copilot.chat.agent.terminal.denyList', [])

        # Converter para nova sintaxe
        auto_approve = {}

        # Adicionar comandos permitidos
        for cmd in allow_list:
            auto_approve[cmd] = True

        # Adicionar comandos negados
        for cmd in deny_list:
            auto_approve[cmd] = False

        settings['chat.tools.terminal.autoApprove'] = auto_approve
        changed = True
        print(f"  ✅ Migrou allowList/denyList para autoApprove")

    # Atualizar outras configurações
    old_new_mapping = {
        'chat.agent.maxRequests': 25,
        'chat.agent.enabled': True,
        'chat.mcp.enabled': True,
        'chat.checkpoints.enabled': True
    }

    for key, default_value in old_new_mapping.items():
        if key not in settings:
            settings[key] = default_value
            changed = True
            print(f"  ✅ Adicionou: {key}")

    if changed:
        # Backup
        backup_path = f"{file_path}.backup"
        os.rename(file_path, backup_path)
        print(f"  💾 Backup criado: {backup_path}")

        # Salvar migrado
        with open(file_path, 'w') as f:
            json.dump(settings, f, indent=2)

        print(f"  🎉 Migração concluída!")
    else:
        print(f"  ✨ Nenhuma migração necessária")

if __name__ == "__main__":
    print("🚀 Iniciando migração das configurações do GitHub Copilot...")
    migrate_settings()
    print("✅ Migração concluída! Reinicie o VS Code.")
```

### 📋 **CHECKLIST DE MIGRAÇÃO**

- [ ] Executar script de migração
- [ ] Verificar se configurações antigas foram removidas
- [ ] Testar comandos de terminal no Agent Mode
- [ ] Atualizar documentação do projeto
- [ ] Compartilhar novas configurações com o time

### 🔍 **VALIDAÇÃO PÓS-MIGRAÇÃO**

Após migrar, teste no VS Code:

1. **Abrir Chat** (`Ctrl+Alt+I`)
2. **Entrar em Agent Mode** (`Ctrl+Shift+Alt+I`)
3. **Testar comando permitido**: `@terminal ls`
4. **Testar comando bloqueado**: `@terminal rm -rf`
5. **Verificar se pede confirmação corretamente**

---

## 📚 **RECURSOS ADICIONAIS 2025**

### 🔗 **Links Oficiais**

- [VS Code Copilot Settings Reference](https://code.visualstudio.com/docs/copilot/reference/copilot-settings)
- [Agent Mode Documentation](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
- [Terminal AutoApprove Guide](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode#_auto-approve-terminal-commands)

### 🆕 **Novidades 2025**

- **GPT-5 Support**: Novo modelo disponível
- **MCP Servers**: Extensibilidade via Model Context Protocol
- **Chat Checkpoints**: Reverter mudanças facilmente
- **Virtual Tools**: Mais de 128 tools por request
- **Improved Context**: Melhor awareness do workspace
