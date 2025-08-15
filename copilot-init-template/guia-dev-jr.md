# 🚀 Guia do DEV Jr - Como Turbinar seu Desenvolvimento com GitHub Copilot

## 👋 Bem-vindo! Acabou de conseguir o Copilot da Magalu?

Este guia vai te ensinar **EXATAMENTE** como configurar e usar o GitHub Copilot para turbinar seu desenvolvimento, **passo a passo**, sem errar nada!

---

## 🎯 **PASSO 1: Configuração Inicial (5 minutos)**

### 1.1 - Instalar Extensões no VS Code

#### ▶️ Abra o VS Code e vá em Extensions (`Ctrl+Shift+X`)

```
🔍 Pesquise e instale (nesta ordem):
1. "GitHub Copilot"
2. "GitHub Copilot Chat"
```

**💡 Dica Visual**: Procure pelas extensões com o ícone do GitHub e muitos downloads!

### 1.2 - Fazer Login no GitHub

#### ▶️ Clique no ícone de conta (canto inferior esquerdo)

```
👤 Accounts → Sign in to sync VS Code → GitHub
→ Autorize no navegador → Volte pro VS Code
```

**✅ Como saber se deu certo**: Vai aparecer seu nome/foto no canto inferior esquerdo

### 1.3 - Ativar o Copilot

#### ▶️ Pressione `Ctrl+Shift+P` e digite:

```
> GitHub Copilot: Sign In
```

**✅ Como saber se deu certo**: Vai aparecer um ícone do Copilot na barra de status (canto inferior direito)

---

## 🎯 **PASSO 2: Configuração Básica de Segurança (3 minutos)**

### 2.1 - Abrir Configurações

#### ▶️ Pressione `Ctrl+,` (vírgula) para abrir Settings

### 2.2 - Configurar Privacidade

#### ▶️ Na barra de pesquisa, digite: `copilot telemetry`

```json
☑️ Desmarque: "Github › Copilot: Telemetry Enabled"
```

#### ▶️ Pesquise: `telemetry level`

```json
🔽 Mude para: "error" ou "off"
```

**🔒 Por que fazer isso**: Seus dados ficam mais privados!

---

## 🎯 **PASSO 3: Configurar para seu Projeto (5 minutos)**

### 3.1 - Abrir seu Projeto

#### ▶️ No VS Code: `File → Open Folder` → Escolha a pasta do seu projeto

### 3.2 - Criar Pasta de Configuração

#### ▶️ Crie a pasta `.vscode` na raiz do projeto (se não existir)

```bash
# No terminal do VS Code (Ctrl+`)
mkdir .vscode
```

### 3.3 - Configurar Comandos Seguros

#### ▶️ Crie o arquivo `.vscode/settings.json` com este conteúdo:

```json
{
  "github.copilot.chat.agent.terminal.allowList": [
    "npm run",
    "yarn",
    "make test",
    "make lint",
    "git status",
    "git diff",
    "python -m pytest",
    "ls",
    "cat"
  ],

  "github.copilot.chat.agent.terminal.denyList": ["rm", "sudo", "curl", "wget"],

  "chat.tools.autoApprove": false
}
```

**🛡️ Por que fazer isso**: O Copilot só vai executar comandos seguros automaticamente!

---

## 🎯 **PASSO 4: Testar se Está Funcionando (2 minutos)**

### 4.1 - Teste de Sugestões de Código

#### ▶️ Crie um arquivo novo: `teste.py` (ou `.js`)

#### ▶️ Digite este comentário:

```python
# função para calcular o quadrado de um número
```

**✅ Se funcionou**: O Copilot vai sugerir código em cinza. Pressione `Tab` para aceitar!

### 4.2 - Teste do Chat

#### ▶️ Pressione `Ctrl+Alt+I` para abrir o Copilot Chat

#### ▶️ Digite:

```
Olá! Você pode me explicar o que faz o arquivo package.json deste projeto?
```

**✅ Se funcionou**: O Copilot vai responder sobre seu projeto!

---

## 🎯 **PASSO 5: Configurar Modos de Chat Especiais (Opcional - 3 minutos)**

### 5.1 - Baixar Templates Prontos

#### ▶️ Se você tem acesso aos templates da Magalu, copie estes arquivos para seu projeto:

```bash
# Baixe ou copie da pasta templates:
- copilot-chat-modes.json
- project-template.instructions.md
```

### 5.2 - Configurar Modos Especiais

#### ▶️ Adicione no seu `.vscode/settings.json`:

```json
{
  "github.copilot.chat.instructionFiles": ["*.instructions.md"],

  "github.copilot.chat.experimental.chatModes": [
    {
      "id": "analisador",
      "label": "🔍 Analisador",
      "instructions": "Analise este projeto: dependências, estrutura, padrões de código. Seja detalhado!"
    }
  ]
}
```

---

## 🎯 **PASSO 6: Primeiro Uso Prático (10 minutos)**

### 6.1 - Análise do Projeto

#### ▶️ No Copilot Chat, digite:

```
@workspace Analise este projeto completamente: que tecnologias usa, como está organizado, que padrões de código seguem, e como posso contribuir seguindo esses padrões.
```

**💡 Leia a resposta com atenção!** O Copilot vai te explicar todo o projeto.

### 6.2 - Primeiro Código

#### ▶️ Peça para criar algo simples:

```
Seguindo os padrões deste projeto, crie uma função simples para [descreva o que você quer]
```

### 6.3 - Primeiro Teste

#### ▶️ Peça para criar testes:

```
Crie testes para a função que você acabou de criar, seguindo o padrão de testes deste projeto
```

---

## 🎯 **COMANDOS ESSENCIAIS QUE VOCÊ VAI USAR TODO DIA**

### 🎤 Atalhos do Teclado

```
Ctrl+I         → Inline Chat (conversar no código)
Ctrl+Alt+I     → Chat Sidebar (conversa lateral)
Tab            → Aceitar sugestão
Esc            → Rejeitar sugestão
Ctrl+→         → Aceitar só uma palavra da sugestão
```

### 💬 Prompts que SEMPRE funcionam

```
@workspace     → Falar sobre todo o projeto
#file:nome.py  → Falar sobre um arquivo específico
#selection     → Falar sobre código selecionado

"Explique este código"
"Como posso melhorar isso?"
"Crie testes para esta função"
"Refatore seguindo padrões do projeto"
"Qual é o problema neste código?"
```

---

## 🔥 **DICAS AVANÇADAS PARA IMPRESSIONAR**

### 1. 🎯 **Sempre use contexto**

```bash
❌ "Crie uma API"
✅ "@workspace Crie uma API seguindo os padrões deste projeto FastAPI"
```

### 2. 🛡️ **Sempre valide comandos perigosos**

```bash
Quando o Copilot sugerir comandos, SEMPRE:
- Leia o comando antes de confirmar
- Se não entender, pergunte "o que faz este comando?"
- NUNCA confirme comandos com rm, sudo, curl sem entender
```

### 3. 📚 **Use os modos especiais**

```bash
🔍 Para entender código: "Como funciona este arquivo?"
🧪 Para testes: "Preciso de testes para esta função"
🐛 Para bugs: "Este código tem um erro, pode me ajudar?"
```

### 4. ⚡ **Turbine seu workflow**

```bash
1. Sempre comece analisando o projeto (@workspace)
2. Peça para seguir padrões existentes
3. Peça para criar testes junto com o código
4. Use o Copilot para explicar código que não entende
5. Peça revisão antes de fazer commit
```

---

## 🚨 **ERROS COMUNS DE INICIANTES (E COMO EVITAR)**

### ❌ **ERRO 1**: Aceitar qualquer sugestão

**✅ CORRETO**: Sempre leia e entenda antes de aceitar

### ❌ **ERRO 2**: Não dar contexto

**✅ CORRETO**: Use @workspace e explique o que você quer

### ❌ **ERRO 3**: Não seguir padrões do projeto

**✅ CORRETO**: Sempre peça "seguindo os padrões deste projeto"

### ❌ **ERRO 4**: Não testar o código gerado

**✅ CORRETO**: Sempre peça para criar testes junto

### ❌ **ERRO 5**: Ter medo de perguntar

**✅ CORRETO**: O Copilot adora explicar! Pergunte tudo!

---

## 🎯 **CHECKLIST: VOCÊ ESTÁ PRONTO SE...**

- [ ] ✅ Copilot instalado e logado
- [ ] 🔒 Configurações de segurança ativadas
- [ ] ⚙️ Terminal allowList configurado
- [ ] 🧪 Testou sugestões de código (Tab funciona)
- [ ] 💬 Testou o chat (`Ctrl+Alt+I` funciona)
- [ ] 🎯 Conseguiu usar @workspace
- [ ] 📁 Configurou .vscode/settings.json
- [ ] 🛡️ Entende a diferença entre comandos seguros e perigosos

---

## 🚀 **PRÓXIMOS PASSOS**

### Semana 1: **Básico**

- Use sugestões de código (Tab)
- Faça perguntas simples no chat
- Peça explicações de código

### Semana 2: **Intermediário**

- Use @workspace para contexto
- Peça para criar testes
- Use para debugging

### Semana 3: **Avançado**

- Configure modos customizados
- Use para refatoração
- Configure allowList específico do projeto

---

## 🆘 **PRECISA DE AJUDA?**

### 📞 **Problemas Comuns**

#### "Copilot não está sugerindo código"

```bash
1. Verifique se está logado (ícone na barra inferior)
2. Pressione Ctrl+Shift+P → "GitHub Copilot: Check Status"
3. Reinicie o VS Code
```

#### "Chat não está funcionando"

```bash
1. Pressione Ctrl+Alt+I novamente
2. Verifique se a extensão GitHub Copilot Chat está ativa
3. Tente comando: "Olá, você está funcionando?"
```

#### "Comando negado no terminal"

```bash
✅ NORMAL! É a segurança funcionando
- Leia o comando antes de confirmar
- Se é seguro, clique "Continue"
- Se não tem certeza, pergunte no chat
```

---

## 🎉 **PARABÉNS! AGORA VOCÊ É UM COPILOT NINJA!**

Você configurou tudo certinho e está pronto para:

- 🚀 Desenvolver 3x mais rápido
- 🛡️ Com segurança total
- 📚 Aprendendo padrões do projeto
- 🧪 Criando testes automaticamente
- 🐛 Debuggando como um pro

**💡 Lembre-se**: O Copilot é seu assistente, não seu chefe. Sempre entenda o código antes de usar!

---

**🎯 Agora vai lá e arrebenta no código! 🚀**
