# IA Tools Hub - Instruções para Agentes de IA

## 🎯 Visão Geral do Projeto

Este é o **IA Tools Hub** - um site GitHub Pages que serve como centro de referência para templates, gems e utilitários de IA. O projeto é focado em facilitar a configuração e uso do GitHub Copilot através de templates automatizados e documentação completa.

### Arquitetura Principal

- **Frontend**: Site estático Jekyll com interface SPA-like em vanilla JavaScript
- **Estrutura**: Hub de ferramentas com navegação por abas (sem reload de página)
- **Conteúdo**: Templates para download, documentação interativa, recursos de Copilot e GEMs especializadas
- **Deploy**: GitHub Pages automático via Jekyll

## 🏗️ Estrutura do Projeto

```
tgferr.github.io/
├── index.html                    # Hub principal com navegação SPA
├── copilot_template.html          # Página dedicada ao Template Copilot
├── gem_gemini_QA.html            # Apresentação do QA Expert Gem
├── gem_gemini_CALL_SUMMARIZER.html # Apresentação do Arquiteto de Insights
├── project_brain_framework.html # Apresentação do PROJECT BRAIN Framework
├── PROJECT_BRAIN_FRAMEWORK.md  # Framework single-file para download (+ PROJECT-BRAIN.md symlink)
├── AGENTS.md               # Protocolo agêntico (Universal Brain Framework)
├── .claude/agents/         # 6 subagentes executáveis Claude Code
├── .agents/                # 6 personas portáteis (padrão AGENTS.md)
├── OPENSPEC/               # Fluxo OpenSpec (README, active_todo, templates)
├── Checklist/              # Template de checklist por demanda
├── copilot-init-template/        # Template completo para download
│   ├── README.md                 # Instruções de uso
│   ├── COMANDO-UNIVERSAL.md      # Comando otimizado para execução
│   ├── project-template.instructions.md  # Template base universal
│   └── [outros arquivos de documentação]
├── css/style.css                 # Tema completo com dark/light mode
├── js/main.js                    # Funcionalidades principais SPA
├── js/modals.js                  # Sistema de modais interativos
└── _config.yml                   # Configuração Jekyll
```

## 🎨 Padrões de Interface e Experiência

### Sistema de Navegação SPA

- **Navegação sem reload**: JavaScript gerencia mudança de conteúdo via `showPage(pageId)`
- **URLs amigáveis**: Não usa hash routing, mantém experiência fluida
- **Estado persistente**: Theme e preferências salvos em localStorage

### Tema Adaptativo

- **CSS Variables**: Sistema de tema baseado em `--bg-primary`, `--text-primary`, etc.
- **Toggle automático**: Botão com persistência e ícones Font Awesome
- **Tema escuro**: Atributo `[data-theme="dark"]` alterna paleta completa

### Sistema de Modais Dinâmicos

```javascript
// Padrão para criar modais interativos
createModal(id, title, content);
// Exemplo: openProfileModal(profileData) para perfis de usuário
```

## 🛠️ Fluxos de Trabalho Críticos

### 1. Adição de Nova Ferramenta

```bash
# 1. Criar nova página HTML (se necessário)
touch nova_ferramenta.html

# 2. Adicionar card no index.html seção cards-grid
# 3. Adicionar nova página no sistema de navegação JS
# 4. Atualizar documentação em copilot-init-template/
```

### 2. Atualização do Template Copilot

```bash
# Template localizado em copilot-init-template/
# Arquivos principais a modificar:
# - README.md (instruções de uso)
# - COMANDO-UNIVERSAL.md (comando otimizado)
# - project-template.instructions.md (template base)
```

### 3. Deploy e Publicação

- **Automático**: Push para `main` triggera build Jekyll no GitHub Pages
- **URL oficial**: https://tgferr.github.io
- **Configuração**: `_config.yml` define tema, plugins e SEO

## 🎯 Convenções de Código Específicas

### JavaScript Modular

- **main.js**: Funcionalidades core (tema, navegação, animações)
- **modals.js**: Sistema completo de modais com dados estruturados
- **Eventos globais**: Funções expostas via `window.functionName` para HTML

### CSS Arquitetural

```css
/* Padrão de variáveis temáticas */
:root {
  --primary-color: #2563eb;
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
}
```

### HTML Semântico e Acessível

- **Ícones Font Awesome**: Padrão `<i class="fas fa-icon-name"></i>`
- **Navegação**: Atributos `data-page` para SPA routing
- **Modais**: Sistema aria-compliant com overlay e escape key

## 🔧 Comandos de Desenvolvimento

### Jekyll Local

```bash
# Instalar dependências
bundle install

# Servir local (http://localhost:4000)
bundle exec jekyll serve

# Build para produção
bundle exec jekyll build
```

### Validação e Testes

```bash
# Verificar links quebrados
grep -r "href=" *.html | grep -v "http"

# Validar CSS/JS syntax
# (usar extensões VS Code ou ferramentas online)

# Testar responsividade
# Usar DevTools do navegador
```

## 📋 Templates e Recursos Específicos

### Template Copilot Universal

- **Localização**: `copilot-init-template/`
- **Comando otimizado**: Projetado para execução direta no Copilot Chat
- **Auto-configuração**: Detecta stack tecnológica e cria configurações personalizadas
- **Estrutura correta**: Usa `.github/copilot-instructions.md` (não `.vscode/`)

### Sistema de Perfis de Usuário

```javascript
// Perfis predefinidos em main.js
const profiles = {
  junior: {
    /* configuração para dev iniciante */
  },
  experienced: {
    /* configuração para dev experiente */
  },
  architect: {
    /* configuração para tech lead */
  },
  manager: {
    /* configuração para gestores */
  },
};
```

## 🚨 Práticas de Segurança e Compliance

### Configurações GitHub Copilot

- **AllowList/DenyList**: Templates incluem configurações de segurança
- **Telemetria**: Desabilitada por padrão nos templates
- **Arquivos sensíveis**: Excluídos das sugestões via configuração

### Content Security

- **Links externos**: Sempre com `target="_blank" rel="noopener"`
- **Scripts**: Apenas CDNs confiáveis (Font Awesome, Google Fonts)
- **Dados sensíveis**: Nenhuma informação corporativa hardcoded

## 🎯 Contribuição e Manutenção

### Ao adicionar novos recursos:

1. **Mantenha consistência**: Use padrões existentes de CSS/JS
2. **Documentação**: Atualize este arquivo se necessário
3. **Teste responsivo**: Verificar em mobile/desktop
4. **SEO**: Atualizar meta tags quando relevante

### Ao modificar templates:

1. **Backward compatibility**: Manter compatibilidade com versões anteriores
2. **Documentação atualizada**: README.md e arquivos de instrução
3. **Comando universal**: Validar se comando ainda executa corretamente

## 🧠 Universal Brain Framework — Agents & OpenSpec

O repositório roda o **Universal Brain Framework** (`PROJECT-BRAIN.md`, symlink para `PROJECT_BRAIN_FRAMEWORK.md`). Infraestrutura agêntica neste repo:

- **`.claude/agents/`** — 6 subagentes executáveis do Claude Code (matriz de personas).
- **`.agents/`** — 6 personas portáteis no padrão AGENTS.md (Copilot/Cursor/Aider).
- **`OPENSPEC/`** — fluxo OpenSpec: README, `active_todo.md` (memória de sessão) e templates (`openspec-files/`).
- **`Checklist/`** — template de checklist por demanda.

**Fluxo de demanda:** `iniciar demanda <CARD> seguindo @PROJECT-BRAIN.md` → Coleta → Explore → Plano → `[A]` → Execute → `/feed-brain`. Lições acumulam na Seção 8 do `PROJECT_BRAIN_FRAMEWORK.md`.

---

**Criado por**: Tiago Ferreira • **Ano**: 2025 • **Foco**: Produtividade com IA
