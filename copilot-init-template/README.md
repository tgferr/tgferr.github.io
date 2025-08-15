# 🎯 GitHub Copilot Template v2.0 - Configuração Automática

Template para configuração automática do GitHub Copilot em qualquer projeto. Usa as especificações mais atualizadas (2025) com estrutura `.github/` e `.vscode/`.

## 🆕 **NOVIDADE 2025: Estrutura de Pastas Corrigida**

**DESCOBERTA IMPORTANTE**: A pasta `.vscode/` causa comandos "foscos" no GitHub Copilot!

✅ **CORRETO**:

- `.github/copilot-instructions.md` - Interface nítida, funcionalidade completa
- `.github/instructions/*.instructions.md` - Reconhecimento oficial

❌ **INCORRETO**:

- `.vscode/copilot-instructions.md` - Interface fosca, funcionalidade limitada

➡️ **[📁 Ver documentação completa sobre estrutura](estrutura-pastas.md)**

## ⚡ Como Usar (3 passos)

### 1. Copie o template para seu projeto

```bash
# Download e extração já feitos
# Copie a pasta copilot-init-template para a raiz do seu projeto
```

### 2. Execute o comando ESPECÍFICO de configuração

**⚠️ IMPORTANTE**: Use exatamente este comando no Copilot Chat (sem modificações):

```
@terminal mkdir -p .github .vscode && echo "Folders ready"

Create .github/copilot-instructions.md with project-specific content based on copilot-init-template/project-template.instructions.md

Create .vscode/settings.json with GitHub Copilot Agent Mode configuration

@terminal rm -rf copilot-init-template && echo "Template removed"

Show me the content of both created files to confirm setup.
```

**🎯 COMANDO ALTERNATIVO** (se o primeiro não executar todas as ações):

```
Execute setup sequence step by step:

1. @terminal mkdir -p .github .vscode
2. CREATE file .github/copilot-instructions.md using project analysis
3. CREATE file .vscode/settings.json with Agent Mode config
4. @terminal rm -rf copilot-init-template
5. @terminal ls -la .github .vscode

Reference guide: copilot-init-template/project-template.instructions.md
EXECUTE - do not explain steps.
```

**📚 SOLUÇÃO DE PROBLEMAS**: Se comandos não executarem, veja [comandos-execucao.md](comandos-execucao.md)

### 3. Confirmação automática

O template:

- ✅ Cria `.github/copilot-instructions.md` personalizado
- ✅ Configura `.vscode/settings.json` com Agent Mode
- ✅ Remove a pasta template automaticamente
- ✅ Valida que tudo está funcionando

## 🎯 Com essa instalação você vai conseguir:

### 🪄 **Configuração automática para qualquer stack**

O template analisa seu projeto e configura instruções específicas para Python, JavaScript, Java, C#, Go e outros.

### 🛡️ **Segurança com allowList/denyList**

Configurações de segurança do Agent Mode com listas de comandos permitidos e bloqueados para terminal.

### 🧹 **Auto-limpeza após configuração**

Zero commits acidentais - o template se remove automaticamente após configurar o projeto.

### 📁 **Estrutura GitHub Copilot 2025**

Usa as especificações mais atualizadas com `.github/copilot-instructions.md` e `.vscode/settings.json`.

### ✨ **Instruções baseadas em melhores práticas**

Templates personalizados com padrões de código, arquitetura e convenções do seu projeto.

### � **Suporte para múltiplas linguagens**

Python, JavaScript, TypeScript, Java, C#, Go, Rust e muitas outras linguagens suportadas.

## � Arquivos Principais

| Arquivo                            | Descrição                                                 |
| ---------------------------------- | --------------------------------------------------------- |
| `project-template.instructions.md` | Template principal para análise e configuração automática |
| `quick-start.md`                   | Guia rápido em 5 minutos                                  |
| `vscode-config.md`                 | Configurações detalhadas do VS Code                       |
| `copilot-advanced-settings.md`     | Configurações de segurança e Agent Mode                   |

## 🆘 Problemas?

### ❓ Comando não responde?

- Verifique se a pasta `copilot-init-template` está na raiz do projeto
- Confirme que o VS Code está aberto na pasta correta
- Teste se o Copilot está ativo

### 🚫 Erro de permissão?

- Configure allowList no `.vscode/settings.json`
- Veja exemplos em `copilot-advanced-settings.md`

### � Dúvidas?

Entre em contato no Google Chat: **tiago.ferreira** ou **Tiago Ferreira**

---

**💡 Dica**: O template é inteligente - ele analisa seu projeto e se adapta automaticamente. Apenas execute o comando e deixe a mágica acontecer!
