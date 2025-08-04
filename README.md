# 🎯 GitHub Copilot Guide - Site Documentation

## 📖 Sobre o Site

Este site foi criado para disponibilizar de forma visual e interativa todo o conteúdo dos templates GitHub Copilot. É uma versão web dos guias que permite navegação intuitiva e acesso rápido às informações.

## 🚀 Como Usar no GitHub Pages

### 1. Setup no Repositório

```bash
# 1. Copie a pasta docs-site para seu repositório
cp -r docs-site/* /caminho/para/seu/repo/

# 2. Faça commit e push
git add .
git commit -m "Add Copilot Guide website"
git push origin main
```

### 2. Configurar GitHub Pages

1. Vá até as configurações do seu repositório
2. Na seção "Pages", escolha source como "Deploy from a branch"
3. Selecione branch `main` e pasta `/` (root)
4. Seu site estará disponível em: `https://SEU-USUARIO.github.io/SEU-REPO`

### 3. Customização

#### Alterar Informações

- **Título do site**: Edite `<title>` em `index.html`
- **Logo/Nome**: Edite `.logo` no cabeçalho
- **Contato**: Edite seção `.footer-contact`

#### Remover Referências Específicas

O site já foi criado sem referências específicas da empresa, focando apenas em conteúdo educacional.

## 📁 Estrutura do Site

```
docs-site/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   ├── main.js         # Funcionalidade principal
│   └── modals.js       # Conteúdo dos modais
└── README.md           # Esta documentação
```

## 🎨 Features do Site

### 🏠 **Página Principal**

- Hero section com animação de código
- Seletor de perfil interativo
- Setup em 5 minutos
- Recursos avançados
- Implementação em equipes

### 🎭 **Modais Interativos**

- **Profile Modals**: Roteiro personalizado por perfil
- **Step Modals**: Detalhes de cada passo do setup
- **Feature Modals**: Configurações avançadas
- **Phase Modals**: Implementação organizacional

### 🎯 **Perfis Suportados**

- 👶 DEV Jr (primeiro contato)
- 👨‍💻 DEV Experiente (melhorar skills)
- 🏗️ Arquiteto/Tech Lead (implementar em projetos)
- 👔 Gestor/CTO (implementação organizacional)

### ⚡ **Funcionalidades**

- Dark/Light theme toggle
- Navegação suave entre seções
- Copy-to-clipboard nos códigos
- Responsive design
- Animações interativas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Variables, Grid, Flexbox, Animations
- **JavaScript (Vanilla)**: Sem dependências externas
- **Font Awesome**: Ícones
- **Google Fonts**: Typography (Inter)

## 🎨 Personalização Avançada

### Alterar Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
  --primary-color: #2563eb; /* Cor principal */
  --accent-color: #10b981; /* Cor de destaque */
  --warning-color: #f59e0b; /* Cor de alerta */
  --error-color: #ef4444; /* Cor de erro */
}
```

### Adicionar Novo Perfil

1. Edite `js/main.js` na função `getProfileData()`
2. Adicione novo card em `index.html` na seção profiles
3. Adicione novos estilos se necessário

### Modificar Conteúdo dos Modais

Edite `js/modals.js` nas funções:

- `getFeatureData()` - Features avançadas
- `getPhaseData()` - Fases de implementação
- `getStepData()` - Passos do setup

## 📊 Métricas de Uso

### Como Trackear (Opcional)

Se quiser adicionar analytics, adicione no `<head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_TRACKING_ID");
</script>
```

### Eventos Interessantes para Trackear

- Cliques nos perfis
- Abertura de modais
- Copy de códigos
- Navegação entre seções

## 🚀 Deploy Alternativo

### Netlify

1. Conecte seu repositório GitHub
2. Build command: (deixar vazio)
3. Publish directory: `/`

### Vercel

1. Importe projeto do GitHub
2. Framework Preset: Other
3. Root Directory: `/`

### GitHub Codespaces

O site funciona perfeitamente no GitHub Codespaces para desenvolvimento.

## 🔧 Desenvolvimento Local

```bash
# Abrir com Live Server (VS Code)
# Ou usar Python
python -m http.server 8000

# Ou usar Node.js
npx serve .

# Acessar: http://localhost:8000
```

## 📝 Manutenção

### Atualizações de Conteúdo

1. **Templates atualizados**: Edite `js/modals.js`
2. **Novos recursos**: Adicione em `getFeatureData()`
3. **Novas fases**: Adicione em `getPhaseData()`

### Melhorias Futuras

- [ ] Busca/filtro de conteúdo
- [ ] Modo offline (PWA)
- [ ] Mais animações
- [ ] Integração com APIs GitHub
- [ ] Versão mobile app

## 🎯 SEO e Performance

### SEO Built-in

- Meta tags configuradas
- Estrutura semântica
- Títulos hierárquicos
- Alt text em elementos visuais

### Performance

- CSS/JS minificados (para produção)
- Imagens otimizadas
- Lazy loading implementado
- Cache de assets

## 🆘 Troubleshooting

### Site não carrega

- Verifique GitHub Pages nas configurações
- Confirme que index.html está na raiz
- Aguarde alguns minutos para propagação

### Modais não abrem

- Verifique console do navegador
- Confirme que main.js e modals.js carregaram
- Teste em navegador diferente

### Estilos quebrados

- Verifique se style.css está carregando
- Confirme paths relativos corretos
- Teste cache refresh (Ctrl+F5)

## 📧 Suporte

Para dúvidas ou melhorias:

1. Abra issue no repositório
2. Faça fork e contribute
3. Documente mudanças no README

---

**🎯 Este site é open source e pode ser livremente customizado para suas necessidades educacionais!**
