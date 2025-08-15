# Instruções para Configuração Universal do GitHub Copilot

Este arquivo contém o template universal para configuração automática do GitHub Copilot em qualquer projeto.

## COMANDO PARA CONFIGURAÇÃO AUTOMÁTICA

Use este comando exato no Copilot Chat para configuração completa e automática:

```
IMPLEMENTE CONFIGURAÇÃO COPILOT UNIVERSAL usando copilot-init-template/:

ANÁLISE AUTOMÁTICA:
- Detecte stack tecnológico (package.json, requirements.txt, pom.xml, etc.)
- Identifique build tool (Makefile, npm scripts, gradle, etc.)
- Mapeie estrutura arquitetural do projeto

GITHUB COPILOT SETUP (.github/):
- copilot-instructions.md: análise específica do projeto detectado
- copilot-settings.json: autoApprove + experimentais + chatmodes
- copilot-chat-modes.json: 8 chatmodes adaptados para a stack
- docs/chatmodes-guide.md: guia de uso específico
- docs/copilot-setup.md: setup personalizado

VSCODE WORKSPACE (.vscode/):
- settings.json: configurações de linguagem/framework detectados
- tasks.json: tasks baseadas no build tool identificado
- launch.json: debug configs para stack detectada

PERSONALIZAÇÃO AUTOMÁTICA:
- Adapte allowList para comandos da stack (make, npm, gradle, mvn, etc.)
- Configure problem matchers adequados
- Implemente debug configs específicos da linguagem
- Personalize chatmodes com contexto da tecnologia

EXECUTE IMPLEMENTAÇÃO COMPLETA AGORA.
```

## ESTRUTURA RESULTANTE

Após execução, o projeto terá:

### .github/ (Configurações GitHub Copilot)
- `copilot-instructions.md` - Instruções específicas do projeto
- `copilot-settings.json` - Configurações avançadas do Copilot
- `copilot-chat-modes.json` - 8 chat modes personalizados
- `docs/chatmodes-guide.md` - Guia de uso dos chat modes
- `docs/copilot-setup.md` - Documentação do setup

### .vscode/ (Configurações VS Code)
- `settings.json` - Configurações de linguagem e Copilot
- `tasks.json` - Tasks baseadas no build tool
- `launch.json` - Configurações de debug

## CARACTERÍSTICAS DO COMANDO

### ✅ Vantagens
- **Análise automática**: Detecta stack sem intervenção manual
- **Configuração completa**: Cria todos os arquivos necessários
- **Personalização inteligente**: Adapta às tecnologias específicas
- **Estrutura correta**: Usa .github/ para Copilot (evita interface "fosca")
- **Auto-limpeza**: Remove template automaticamente
- **Zero configuração**: Funciona em qualquer projeto

### 🎯 Execução Garantida
- Usa verbos de comando direto (IMPLEMENTE, DETECTE, CONFIGURE)
- Estrutura clara e sequencial
- Especifica arquivos e pastas exatos
- Inclui validação automática

## TECNOLOGIAS SUPORTADAS

### Linguagens
- Python (Django, FastAPI, Flask)
- JavaScript/TypeScript (React, Next.js, Node.js)
- Java (Spring Boot, Maven, Gradle)
- C# (.NET, ASP.NET Core)
- Go (Gin, Echo, Fiber)
- PHP (Laravel, Symfony)
- Ruby (Rails, Sinatra)

### Build Tools
- npm/yarn scripts
- Makefile
- Maven (pom.xml)
- Gradle (build.gradle)
- Poetry (pyproject.toml)
- Composer (composer.json)

### Frameworks Detectados
- React, Vue, Angular
- Django, FastAPI, Flask
- Spring Boot, Quarkus
- Express, Fastify, Koa
- Laravel, Symfony
- Rails, Sinatra

## CHAT MODES INCLUÍDOS

1. **@analyzer** - Análise profunda de código
2. **@architect** - Design de arquitetura
3. **@debugger** - Resolução de problemas
4. **@optimizer** - Performance e otimização
5. **@tester** - Criação de testes
6. **@documenter** - Documentação de código
7. **@reviewer** - Code review detalhado
8. **@refactor** - Refatoração e melhorias

## VALIDAÇÃO PÓS-CONFIGURAÇÃO

Após execução, validar:

```bash
# Verificar estrutura criada
ls -la .github/
ls -la .vscode/

# Confirmar template removido
ls copilot-init-template/ 2>/dev/null || echo "✅ Template removido"

# Testar chat modes
@analyzer Analise este projeto seguindo as instruções
```

## TROUBLESHOOTING

### Se comando não executar:
1. Use comando alternativo com @terminal explícito
2. Execute passo a passo manualmente
3. Verifique permissões de escrita
4. Confirme estrutura de pastas

### Se interface aparecer "fosca":
- Confirme que arquivos estão em .github/ (não .vscode/)
- Reinicie VS Code após configuração
- Verifique extensão GitHub Copilot atualizada

---

**Comando otimizado para execução direta e configuração universal do GitHub Copilot 2025**
