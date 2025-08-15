# GitHub Copilot Chat Modes Personalizados

## 📁 Como Configurar

Adicione estes chat modes no seu arquivo de configuração do Copilot (`settings.json`):

## 🎯 Como Usar os Chat Modes

### 1. 🔍 Analisador de Projeto

**Use quando:** Começar trabalho em projeto novo ou desconhecido
**Comando:** `@project-analyzer Analise este projeto completamente`

### 2. 📋 Seguidor de Padrões

**Use quando:** Implementar nova funcionalidade
**Comando:** `@pattern-follower Implemente [funcionalidade] seguindo os padrões do projeto`

### 3. 🛠️ Verificador de Ambiente

**Use quando:** Antes de executar comandos ou configurar ambiente
**Comando:** `@environment-checker Verifique e configure o ambiente`

### 4. 🧪 Mestre dos Testes

**Use quando:** Implementar ou executar testes
**Comando:** `@test-master Crie testes para [componente] seguindo padrões do projeto`

### 5. 📚 Especialista em Documentação

**Use quando:** Criar ou atualizar documentação
**Comando:** `@documentation-expert Documente [funcionalidade] seguindo padrões do projeto`

### 6. 🔒 Auditor de Segurança

**Use quando:** Revisar ou implementar segurança
**Comando:** `@security-auditor Analise a segurança de [componente]`

### 7. ⚡ Otimizador de Performance

**Use quando:** Melhorar performance
**Comando:** `@performance-optimizer Otimize a performance de [componente]`

### 8. 🐛 Detetive de Debug

**Use quando:** Resolver bugs ou problemas
**Comando:** `@debug-detective Ajude a debugar [problema específico]`

## 🔄 Workflow Recomendado

```
1. @project-analyzer → Entender o projeto
2. @environment-checker → Configurar ambiente
3. @pattern-follower → Implementar funcionalidade
4. @test-master → Criar/executar testes
5. @security-auditor → Validar segurança
6. @performance-optimizer → Otimizar se necessário
7. @documentation-expert → Documentar mudanças
```

## 📝 Personalização

Para personalizar para seu projeto específico, edite as `instructions` de cada chat mode incluindo:

- Nome do projeto
- Stack tecnológica específica
- Padrões arquiteturais específicos
- Ferramentas específicas do projeto
- Comandos específicos do build tool
