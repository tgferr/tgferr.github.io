# 🎯 Prompts Reutilizáveis para GitHub Copilot

## 📋 Prompts de Análise Inicial

### 🔍 Análise Completa do Projeto

```
@workspace Analise este projeto seguindo o template de instruções:

1. Examine pyproject.toml/package.json para mapear stack tecnológico e dependências
2. Identifique a arquitetura (monolito, microserviços, domain-driven, etc.)
3. Mapeie padrões de código existentes (logs, APIs, configurações, testes)
4. Analise Makefile/scripts para comandos disponíveis
5. Verifique estrutura de pastas e convenções de nomenclatura
6. Identifique integrações externas e dependências críticas
7. Gere resumo executivo com principais tecnologias e padrões

Formate a resposta como checklist marcando cada item analisado.
```

### 🛠️ Verificação de Ambiente

```
Execute verificação completa do ambiente de desenvolvimento:

1. Verifique se está na virtual environment correta
2. Confirme versões de Python/Node.js conforme projeto
3. Valide se Docker containers estão rodando (se aplicável)
4. Teste conectividade com bancos de dados/serviços
5. Confirme que dependências estão instaladas
6. Execute health check da aplicação se disponível

Use apenas comandos do Makefile/package.json quando disponíveis.
Reporte qualquer problema encontrado com sugestões de correção.
```

## 🏗️ Prompts de Implementação

### 🆕 Novo Feature/Endpoint

```
Implemente um novo [FEATURE] seguindo exatamente os padrões do projeto:

Pré-requisitos:
1. Analise implementações similares existentes
2. Identifique padrões de estrutura de arquivos
3. Mapeie convenções de nomenclatura
4. Verifique padrões de logs, validação e testes

Implementação:
1. Crie estrutura seguindo padrão identificado
2. Implemente código seguindo convenções existentes
3. Adicione logs estruturados conforme padrão
4. Crie testes com coverage >= [X]%
5. Valide com linter/formatter do projeto

Finalize executando testes e validações usando Makefile.
```

### 🐛 Debug e Correção

```
Debug este problema: [DESCRIÇÃO DO PROBLEMA]

Processo:
1. Analise logs e stack traces disponíveis
2. Identifique área do código relacionada ao problema
3. Examine código similar funcionando no projeto
4. Execute testes relacionados para reproduzir o problema
5. Implemente correção seguindo padrões do projeto
6. Execute bateria completa de testes
7. Valide que a correção não quebrou outras funcionalidades

Use ferramentas de debug disponíveis no projeto (logs, testes, profiling).
```

### 🔧 Refatoração

```
Refatore este código mantendo 100% compatibilidade:

Análise:
1. Identifique todos os pontos de uso do código atual
2. Mapeie dependências e integrações
3. Analise testes existentes que cobrem este código

Refatoração:
1. Mantenha interface pública inalterada
2. Siga padrões arquiteturais do projeto
3. Preserve comportamento existente
4. Melhore legibilidade e performance
5. Atualize documentação se necessário

Validação:
1. Execute todos os testes existentes
2. Execute testes de integração
3. Confirme que performance não degradou
```

## 🧪 Prompts de Testes

### ✅ Criar Testes Abrangentes

```
Crie suite completa de testes para [COMPONENTE]:

Análise:
1. Examine padrões de teste existentes no projeto
2. Identifique framework de testes e convenções
3. Mapeie casos de uso e edge cases

Implementação:
1. Testes unitários para lógica de negócio
2. Testes de integração para APIs/banco de dados
3. Testes de contrato para integrações externas
4. Testes de performance se necessário
5. Mocks/fixtures seguindo padrões do projeto

Meta: Atingir [X]% de coverage mantendo qualidade.
Use comandos do Makefile para executar e validar.
```

### 🎭 Testes End-to-End

```
Implemente testes E2E para fluxo: [FLUXO]

Mapeamento:
1. Identifique todos os componentes envolvidos
2. Mapeie dependências externas e mocks necessários
3. Defina dados de teste e cenários

Implementação:
1. Setup de ambiente de teste isolado
2. Implementação de cenários principais e alternativos
3. Validação de estados intermediários
4. Cleanup após execução
5. Integração com pipeline de CI/CD

Execute via Makefile e valide cobertura completa do fluxo.
```

## 📊 Prompts de Análise e Otimização

### ⚡ Análise de Performance

```
Analise performance de [COMPONENTE/ENDPOINT]:

Profiling:
1. Execute ferramentas de profiling disponíveis
2. Identifique gargalos de CPU, memória, I/O
3. Analise queries de banco de dados
4. Verifique uso de cache e otimizações

Otimização:
1. Implemente melhorias seguindo padrões do projeto
2. Adicione cache onde apropriado
3. Otimize queries e operações custosas
4. Mantenha compatibilidade e legibilidade

Validação:
1. Execute benchmarks antes/depois
2. Confirme que funcionalidade não foi afetada
3. Execute testes de carga se disponíveis
```

### 🔒 Revisão de Segurança

```
Execute auditoria de segurança em [COMPONENTE]:

Análise:
1. Verifique autenticação e autorização
2. Analise validação de inputs
3. Identifique possíveis vulnerabilidades
4. Verifique logs de segurança

Correções:
1. Implemente validações faltantes
2. Adicione sanitização de dados
3. Melhore logging de eventos de segurança
4. Siga padrões de segurança do projeto

Use ferramentas de security scan disponíveis no Makefile.
```

## 🚀 Prompts de Deploy e CI/CD

### 📦 Preparação para Deploy

```
Prepare [FEATURE] para deploy em produção:

Checklist:
1. Execute todos os testes (unit, integration, E2E)
2. Valide coverage de testes >= [X]%
3. Execute linting e formatação
4. Verifique compatibilidade de dependências
5. Execute security scan
6. Valide configurações de ambiente
7. Teste migrations/scripts de deploy
8. Verifique logs e monitoramento

Execute pipeline completo via Makefile.
Documente mudanças e impactos.
```

### 🔄 Rollback de Emergência

```
Execute rollback de emergência para versão anterior:

Processo:
1. Identifique versão estável anterior
2. Execute procedimento de rollback
3. Valide serviços críticos
4. Monitore logs e métricas
5. Comunique status aos stakeholders
6. Documente incidente e lições aprendidas

Use comandos de rollback definidos no projeto.
Mantenha comunicação constante durante processo.
```

## 🎨 Prompts de Customização por Stack

### 🐍 Python/FastAPI

```
[Prompt específico] seguindo padrões Python:

- Use type hints em todas as funções
- Implemente logging com logger estruturado
- Siga PEP 8 e convenções do projeto
- Use Pydantic para validação de dados
- Implemente async/await onde apropriado
- Execute pytest com coverage
- Use black/isort para formatação
```

### ⚛️ React/TypeScript

```
[Prompt específico] seguindo padrões React:

- Use TypeScript com strict mode
- Implemente hooks personalizados
- Siga convenções de nomenclatura de componentes
- Use ESLint/Prettier para formatação
- Implemente testes com Testing Library
- Otimize re-renders e performance
- Execute npm scripts para validação
```

### 🟢 Node.js/Express

```
[Prompt específico] seguindo padrões Node.js:

- Use ESModules ou CommonJS conforme projeto
- Implemente middleware seguindo padrões
- Use validação com Joi/Yup
- Implemente logging estruturado
- Use async/await para operações assíncronas
- Execute Jest para testes
- Valide com ESLint/Prettier
```

## 💡 Prompts de Mentoria e Aprendizado

### 🎓 Explicação de Código

```
Explique este código como mentor experiente:

1. Quebre o código em partes lógicas
2. Explique o propósito de cada componente
3. Identifique padrões e best practices utilizados
4. Aponte possíveis melhorias ou alternativas
5. Explique como este código se encaixa no projeto maior
6. Sugira próximos passos para aprendizado

Use linguagem clara e exemplos práticos.
```

### 📚 Documentação Automática

```
Gere documentação completa para [COMPONENTE]:

Estrutura:
1. Visão geral e propósito
2. Arquitetura e componentes
3. APIs e interfaces públicas
4. Configuração e deployment
5. Exemplos de uso
6. Troubleshooting comum
7. Roadmap e TODOs

Formate em Markdown seguindo padrões do projeto.
Inclua diagramas e exemplos práticos.
```

---

## 🎯 Como Usar Estes Prompts

1. **Copie o prompt** desejado
2. **Substitua placeholders** [FEATURE], [COMPONENTE], etc.
3. **Execute via @workspace** ou chat normal
4. **Combine prompts** para workflows complexos
5. **Personalize** conforme necessidades específicas

Estes prompts são templates - adapte conforme seu projeto e contexto específico!
