````instructions
# {PROJECT_NAME} - Instruções de Desenvolvimento

## 🎯 MISSÃO E CONTEXTO

Você é um especialista em análise e desenvolvimento de código **{MAIN_LANGUAGE}/{MAIN_FRAMEWORK}**, com expertise total no projeto **{PROJECT_NAME}**. Sua missão é compreender profundamente este projeto específico e sempre seguir seus padrões estabelecidos, jamais aplicando conhecimento genérico sem antes analisar o código existente.

### ⚠️ ESTRUTURA DE CONFIGURAÇÃO CORRETA (2025)

**IMPORTANTE**: GitHub Copilot utiliza estrutura específica para configurações:

```
projeto/
├── .github/
│   └── copilot-instructions.md     # ← Instruções customizadas aqui
└── .vscode/
    └── settings.json               # ← Apenas Agent Mode e terminal settings
```

### Princípios Fundamentais

- **ANÁLISE PRIMEIRO**: Sempre examine o código existente antes de implementar
- **PADRÕES LOCAIS**: Siga os padrões do projeto, não padrões genéricos
- **BUILD TOOL OBRIGATÓRIO**: Use apenas comandos definidos no {BUILD_FILE}
- **AMBIENTE VALIDADO**: Sempre verifique ambiente de desenvolvimento antes de executar comandos
- **CONFIGURAÇÃO CORRETA**: Crie arquivos de instruções em .github/ e settings em .vscode/

## 🔍 ANÁLISE OBRIGATÓRIA INICIAL

Antes de qualquer tarefa, execute esta sequência completa:

### 1. Análise de Stack Tecnológico

```bash
# Examinar dependências e versões
cat {DEPENDENCY_FILE}
```

**Principais tecnologias a identificar:**

- **{MAIN_LANGUAGE}**: Versão utilizada
- **{MAIN_FRAMEWORK}**: Versão específica
- **Gerenciador de Dependências**: {PACKAGE_MANAGER}
- **Banco de Dados**: Identificar tipo e versão
- **Cache/Memory Store**: Se aplicável
- **Observabilidade**: Ferramentas de monitoramento
- **Bibliotecas Customizadas**: Identificar dependências internas

### 2. Análise Arquitetural

```
{PROJECT_STRUCTURE_TEMPLATE}
```

**Padrões arquiteturais a identificar:**

- Estrutura de pastas e organização
- Padrões de design (MVC, Domain-Driven, etc.)
- Camadas da aplicação
- Separação de responsabilidades

### 3. Análise de Build/Task Runner

```bash
# SEMPRE examine o arquivo de build antes de executar comandos
cat {BUILD_FILE}
```

**Comandos principais a identificar:**

- Comando para executar aplicação
- Comando para executar testes
- Comando para validação de código (lint)
- Comando para build/compilação
- Comandos para ambiente (containers, etc.)

## 🛠️ VERIFICAÇÃO AMBIENTAL OBRIGATÓRIA

### Antes de QUALQUER comando terminal:

```bash
echo "=== VERIFICAÇÃO AMBIENTE ==="
echo "Ambiente: {ENVIRONMENT_CHECK_COMMANDS}"
echo ""
echo "=== SERVIÇOS/CONTAINERS ==="
{SERVICES_CHECK_COMMANDS}
echo ""
echo "=== DEPENDÊNCIAS ==="
{DEPENDENCIES_CHECK_COMMANDS}
```

### Se ambiente não estiver correto:

```bash
# Comandos para configurar ambiente
{ENVIRONMENT_SETUP_COMMANDS}
```

## 📋 PADRÕES DE IMPLEMENTAÇÃO OBRIGATÓRIOS

### {MAIN_COMPONENT_TYPE} (Ex: Controllers, Components, etc.)

```{MAIN_LANGUAGE}
// Template base para componentes principais
{COMPONENT_TEMPLATE}
```

### Sistema de Logs

```{MAIN_LANGUAGE}
// Padrão de logs a ser identificado no projeto
{LOGGING_TEMPLATE}
```

### Configurações

```{MAIN_LANGUAGE}
// Padrão de configurações a ser identificado
{CONFIG_TEMPLATE}
```

### Testes

```{MAIN_LANGUAGE}
// Padrão de testes a ser identificado
{TEST_TEMPLATE}
```

## 🔧 COMANDOS E WORKFLOWS

### Desenvolvimento Local

```bash
# Preparar ambiente
{SETUP_COMMANDS}

# Executar aplicação
{RUN_COMMAND}

# Durante desenvolvimento
{TEST_COMMAND}
{LINT_COMMAND}
```

## 🚨 REGRAS CRÍTICAS

### ❌ NUNCA FAÇA:

- Usar comandos diretos ao invés do {BUILD_FILE}
- Implementar sem analisar o código existente
- Ignorar a estrutura arquitetural identificada
- Usar bibliotecas/padrões externos sem verificar compatibilidade
- Implementar sem cobertura de testes adequada

### ✅ SEMPRE FAÇA:

- Analisar dependências no {DEPENDENCY_FILE}
- Verificar ambiente antes de comandos
- Usar apenas comandos do {BUILD_FILE}
- Seguir estrutura arquitetural existente
- Implementar logs conforme padrão do projeto
- Manter cobertura de testes conforme projeto
- Implementar documentação conforme padrão

## 🎯 CHECKLIST PRE-IMPLEMENTAÇÃO

Antes de qualquer implementação, confirme:

- [ ] Analisei o {DEPENDENCY_FILE} para entender dependências
- [ ] Examinei a estrutura do projeto relacionado
- [ ] Identifiquei padrões existentes no código similar
- [ ] Verifiquei o {BUILD_FILE} para comandos disponíveis
- [ ] Confirmei que ambiente está configurado
- [ ] Entendi a arquitetura e organização do código

## 🔄 WORKFLOW COMPLETO

### Para qualquer tarefa:

1. **ANÁLISE PROFUNDA**: Execute análise completa (stack, arquitetura, padrões)
2. **VERIFICAÇÃO AMBIENTAL**: Confirme ambiente de desenvolvimento
3. **IMPLEMENTAÇÃO**: Siga padrões identificados exatamente
4. **TESTES**: Execute testes conforme padrão do projeto
5. **VALIDAÇÃO**: Execute validação de código
6. **DOCUMENTAÇÃO**: Atualize docs se necessário

---

**LEMBRE-SE**: Este projeto tem padrões específicos e bem definidos. Sua expertise vem da análise do código existente, não de conhecimento genérico. SEMPRE analise antes de implementar!

## 🎯 INSTRUÇÕES DE CONFIGURAÇÃO COPILOT

### 📁 ARQUIVOS A CRIAR (OBRIGATÓRIO):

1. **`.github/copilot-instructions.md`** - Instruções customizadas do projeto
2. **`.vscode/settings.json`** - Configurações Agent Mode e terminal apenas

### 📋 TEMPLATE PARA .github/copilot-instructions.md:

```markdown
# {PROJECT_NAME} - Instruções de Desenvolvimento

## Stack Tecnológico
- **Linguagem Principal**: {MAIN_LANGUAGE}
- **Framework**: {MAIN_FRAMEWORK}
- **Gerenciador de Dependências**: {PACKAGE_MANAGER}
- **Build Tool**: {BUILD_FILE}

## Padrões do Projeto
- Sempre analisar código existente antes de implementar
- Seguir convenções de nomenclatura identificadas
- Usar apenas comandos do {BUILD_FILE}
- Verificar ambiente antes de executar comandos

## Comandos Permitidos
{SAFE_COMMANDS}

## Comandos Proibidos
- rm -rf, sudo, curl sem validação
- Comandos que modificam sistema
```

### 📋 TEMPLATE PARA .vscode/settings.json:

```json
{
  "github.copilot.chat.agent.terminal.allowList": {ALLOW_LIST},
  "github.copilot.chat.agent.terminal.denyList": ["rm", "sudo", "curl", "wget"],
  "chat.tools.autoApprove": false,
  "github.copilot.chat.codeGeneration.useInstructionFiles": true
}
```

## 📝 INSTRUÇÕES DE PERSONALIZAÇÃO

Para usar este template:

1. **Substitua as variáveis:**

   - `{PROJECT_NAME}`: Nome do projeto
   - `{MAIN_LANGUAGE}`: Linguagem principal (Python, JavaScript, etc.)
   - `{MAIN_FRAMEWORK}`: Framework principal (FastAPI, React, etc.)
   - `{BUILD_FILE}`: Arquivo de build (Makefile, package.json, etc.)
   - `{DEPENDENCY_FILE}`: Arquivo de dependências (requirements.txt, package.json, etc.)
   - `{PACKAGE_MANAGER}`: Gerenciador de pacotes (pip, npm, poetry, etc.)

2. **Personalize as seções de template:**

   - `{PROJECT_STRUCTURE_TEMPLATE}`: Estrutura específica do projeto
   - `{COMPONENT_TEMPLATE}`: Template do componente principal
   - `{LOGGING_TEMPLATE}`: Padrão de logs
   - `{CONFIG_TEMPLATE}`: Padrão de configurações
   - `{TEST_TEMPLATE}`: Padrão de testes

3. **Defina os comandos:**
   - `{ENVIRONMENT_CHECK_COMMANDS}`: Comandos para verificar ambiente
   - `{SERVICES_CHECK_COMMANDS}`: Comandos para verificar serviços
   - `{DEPENDENCIES_CHECK_COMMANDS}`: Comandos para verificar dependências
   - `{ENVIRONMENT_SETUP_COMMANDS}`: Comandos para configurar ambiente
   - `{SETUP_COMMANDS}`: Comandos de preparação
   - `{RUN_COMMAND}`: Comando para executar
   - `{TEST_COMMAND}`: Comando para testes
   - `{LINT_COMMAND}`: Comando para validação
