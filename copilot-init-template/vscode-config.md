# 🎯 Configurações VS Code para GitHub Copilot

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

  // === Chat Instructions ===
  "github.copilot.chat.instructionFiles": [
    "*.instructions.md",
    "templates/*.instructions.md",
    ".copilot/instructions.md"
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
  // === Project Specific Instructions ===
  "github.copilot.chat.instructionFiles": [
    "ps-core-product-api.instructions.md",
    "templates/project-template.instructions.md"
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

## 🔧 Configurações Avançadas do GitHub Copilot

### 🤖 Configurações do Agent Mode

#### Terminal Allow/Deny List

As configurações mais importantes para controlar quais comandos o Copilot Agent pode executar automaticamente:

```json
{
  // === Agent Mode Terminal Control ===
  "github.copilot.chat.agent.terminal.allowList": [
    "npm",
    "yarn",
    "pnpm",
    "pip",
    "poetry",
    "make",
    "git",
    "docker",
    "docker-compose",
    "python",
    "node",
    "ls",
    "cat",
    "pwd",
    "echo",
    "/cd .*/", // Regex para permitir mudança de diretório
    "/npm (install|update|run).*/", // Regex para comandos npm específicos
    "/make (test|lint|coverage|run)/" // Regex para comandos make específicos
  ],

  "github.copilot.chat.agent.terminal.denyList": [
    "rm",
    "rmdir",
    "sudo",
    "su",
    "chmod",
    "chown",
    "dd",
    "mkfs",
    "fdisk",
    "/rm -rf.*/", // Regex para bloquear rm -rf
    "/sudo .*/", // Regex para bloquear qualquer comando sudo
    "/.*password.*/i" // Regex case-insensitive para comandos com password
  ],

  // === Agent Mode Settings ===
  "chat.agent.enabled": true,
  "chat.agent.maxRequests": 15,
  "github.copilot.chat.agent.runTasks": true,
  "github.copilot.chat.agent.autoFix": true,

  // === Tools Configuration ===
  "chat.extensionTools.enabled": true,
  "chat.tools.autoApprove": false, // CUIDADO: não recomendado true
  "chat.mcp.discovery.enabled": true,

  // === Edit Requests ===
  "chat.editRequests": "hover", // "inline" | "hover" | "input" | "none"
  "chat.editing.autoAcceptDelay": 5000 // 5 segundos para auto-aceitar
}
```

#### Explicação das Configurações Terminal

**allowList**: Lista de comandos ou regex que podem ser executados automaticamente

- Strings simples: comandos exatos (ex: `"npm"`, `"git"`)
- Regex: padrões complexos entre `/` (ex: `/npm (install|run).*/`)
- Case sensitive por padrão

**denyList**: Lista que sobrescreve allowList e força confirmação

- Comandos perigosos sempre bloqueados
- Regex para padrões complexos de comandos perigosos
- Pode usar flags como `/i` para case-insensitive

### 🎛️ Configurações Avançadas de Chat

```json
{
  // === Chat Behavior ===
  "github.copilot.chat.instructionFiles": [
    "*.instructions.md",
    "templates/*.instructions.md",
    ".copilot/**/*.md",
    "docs/copilot/**/*.md"
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
  // === Project Specific ===
  "github.copilot.chat.instructionFiles": [
    "ps-core-product-api.instructions.md" // Arquivo específico do projeto
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
    "**/README.md"
  ],

  "github.copilot.chat.context.exclude": [
    "**/node_modules/**",
    "**/__pycache__/**",
    "**/dist/**",
    "**/build/**",
    "**/.git/**"
  ]
}
```

## 🚨 Configurações de Segurança Recomendadas

### ⚠️ Configurações CRÍTICAS para Ambientes Corporativos

```json
{
  // === SEGURANÇA MÁXIMA ===
  "chat.tools.autoApprove": false, // NUNCA true em produção
  "github.copilot.chat.agent.terminal.allowList": [
    // Lista muito restritiva - apenas comandos seguros
    "ls",
    "cat",
    "pwd",
    "echo",
    "make test",
    "make lint",
    "make coverage"
  ],
  "github.copilot.chat.agent.terminal.denyList": [
    // Bloquear TODOS os comandos perigosos
    "rm",
    "sudo",
    "chmod",
    "curl",
    "wget",
    "/.*password.*/i",
    "/.*secret.*/i",
    "/.*key.*/i"
  ],

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
  // === DESENVOLVIMENTO SEGURO ===
  "chat.tools.autoApprove": false, // Sempre revisar comandos
  "chat.agent.maxRequests": 10, // Limitar requests por sessão
  "chat.editing.autoAcceptDelay": 10000, // 10s para revisar antes de aceitar

  // === TERMINAL CONTROLADO ===
  "github.copilot.chat.agent.terminal.allowList": [
    "npm run",
    "yarn",
    "poetry",
    "make",
    "git status",
    "git diff",
    "git log",
    "python -m pytest",
    "node",
    "python"
  ],

  // === CONTEXT INTELIGENTE ===
  "github.copilot.chat.context.workspace": true,
  "github.copilot.chat.context.git": true,
  "github.copilot.chat.instructionFiles": ["*.instructions.md", "docs/**/*.md"]
}
```

## 📋 Checklist de Configuração

### ✅ Setup Inicial

- [ ] Configurar `terminal.allowList` com comandos do projeto
- [ ] Definir `terminal.denyList` com comandos perigosos
- [ ] Configurar `instructionFiles` para o projeto
- [ ] Definir `customInstructions` para workflows específicos
- [ ] Configurar privacy settings apropriados

### ✅ Configuração de Segurança

- [ ] `chat.tools.autoApprove: false`
- [ ] `telemetry.telemetryLevel: "error"` ou `"off"`
- [ ] Context exclusions para arquivos sensíveis
- [ ] Terminal denyList com comandos perigosos
- [ ] Revisar permissions de workspace

### ✅ Otimização de Produtividade

- [ ] Chat modes personalizados para o stack
- [ ] Instructions específicas do projeto
- [ ] Context includes para arquivos relevantes
- [ ] Tasks integration habilitada
- [ ] Auto-fix habilitado para iterações

---

## 💡 Dicas Avançadas de Uso

### 🎯 Terminal Allow/Deny List - Casos de Uso

#### Para Projetos Python/FastAPI:

```json
{
  "allowList": [
    "poetry",
    "pip",
    "python",
    "pytest",
    "make test",
    "make lint",
    "make coverage",
    "make run",
    "/poetry (install|update|run).*/",
    "/python -m (pytest|uvicorn|black|isort).*/",
    "/make (test|lint|coverage|run|docker-restart)/"
  ]
}
```

#### Para Projetos Node.js/React:

```json
{
  "allowList": [
    "npm",
    "yarn",
    "pnpm",
    "node",
    "npm run",
    "yarn dev",
    "yarn build",
    "yarn test",
    "/npm (install|run|test).*/",
    "/yarn (install|dev|build|test).*/",
    "/npx .*/"
  ]
}
```

#### Para Projetos Docker:

```json
{
  "allowList": [
    "docker",
    "docker-compose",
    "/docker (build|run|ps|logs).*/",
    "/docker-compose (up|down|ps|logs).*/",
    "make docker-restart"
  ],
  "denyList": [
    "/docker (rm|rmi|system prune).*/", // Comandos destrutivos
    "/docker.*--rm.*/" // Auto-remove containers
  ]
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
