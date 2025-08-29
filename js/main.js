// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setLastUpdateDate();
});

function initializeApp() {
  setupThemeToggle();
  setupSmoothScrolling();
  setupNavigationHighlight();
  setupCodeAnimation();
  setupCopyButtons();
  setupProfileCards();
}

// Set last update date
function setLastUpdateDate() {
  const lastUpdateEl = document.getElementById("lastUpdate");
  if (lastUpdateEl) {
    const updateDate = new Date("2025-08-04");
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Sao_Paulo",
    };
    lastUpdateEl.textContent = updateDate.toLocaleDateString("pt-BR", options);
  }
}

// Theme Toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");

  // Check for saved theme or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(themeIcon, savedTheme);

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(themeIcon, newTheme);
  });
}

function updateThemeIcon(icon, theme) {
  icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
}

// Smooth Scrolling
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Navigation Highlight
function setupNavigationHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// Code Animation
function setupCodeAnimation() {
  const codeLines = document.querySelectorAll(".copilot-suggestion");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lines = entry.target.querySelectorAll(".copilot-suggestion");
        lines.forEach((line, index) => {
          line.style.setProperty("--line-index", index);
          line.style.animationDelay = `${index * 0.5}s`;
        });
      }
    });
  });

  const codePreview = document.querySelector(".code-preview");
  if (codePreview) {
    observer.observe(codePreview);
  }
}

// Copy Buttons
function setupCopyButtons() {
  document.addEventListener("click", function (e) {
    if (e.target.closest(".copy-btn")) {
      copyCode(e.target.closest(".copy-btn"));
    }
  });
}

function copyCode(button) {
  const codeContent = button
    .closest(".step-code")
    .querySelector(".code-content code");
  const text = codeContent.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const originalIcon = button.querySelector("i");
    originalIcon.className = "fas fa-check";
    button.style.color = "var(--accent-color)";

    setTimeout(() => {
      originalIcon.className = "fas fa-copy";
      button.style.color = "";
    }, 2000);
  });
}

// Profile Cards
function setupProfileCards() {
  const profileCards = document.querySelectorAll(".profile-card");

  profileCards.forEach((card) => {
    card.addEventListener("click", function () {
      const profile = this.getAttribute("data-profile");
      selectProfile(profile);
    });
  });
}

// Profile Selection
function selectProfile(profileType) {
  const profileData = getProfileData(profileType);
  openProfileModal(profileData);
}

function getProfileData(profileType) {
  const profiles = {
    junior: {
      title: "DEV Jr - Seu Roteiro Personalizado",
      icon: "fas fa-seedling",
      description: "Configuração completa do zero ao produtivo em 1 dia",
      steps: [
        {
          title: "⚡ Quick Start (5 min)",
          description: "Setup básico para começar a usar hoje",
          actions: [
            "Instalar extensões",
            "Fazer login",
            "Configurar segurança básica",
            "Testar funcionamento",
          ],
        },
        {
          title: "🚀 Configuração Completa (30 min)",
          description: "Setup detalhado com segurança e best practices",
          actions: [
            "Configurar terminal allowList",
            "Setup de projeto",
            "Primeiros comandos",
            "Troubleshooting",
          ],
        },
        {
          title: "📸 Apoio Visual (15 min)",
          description: "Screenshots e fluxogramas para não errar",
          actions: [
            "Seguir capturas de tela",
            "Usar checklists",
            "Identificar problemas visuais",
          ],
        },
        {
          title: "💪 Evolução (1 semana)",
          description: "Tornando-se produtivo com Copilot",
          actions: [
            "Usar @workspace",
            "Criar testes",
            "Debug com IA",
            "Seguir padrões",
          ],
        },
      ],
      nextSteps: "Após dominar o básico, evolua para configurações avançadas",
    },
    experienced: {
      title: "DEV Experiente - Configurações Avançadas",
      icon: "fas fa-code",
      description: "Desbloqueie todo o potencial do Copilot",
      steps: [
        {
          title: "🤖 Terminal AllowList/DenyList",
          description: "Configure comandos seguros para automação",
          actions: [
            "Definir comandos permitidos",
            "Bloquear comandos perigosos",
            "Configurar por projeto",
          ],
        },
        {
          title: "🎯 Prompts Profissionais",
          description: "Library de prompts para casos específicos",
          actions: [
            "Prompts de análise",
            "Prompts de implementação",
            "Prompts de debug",
          ],
        },
        {
          title: "🎛️ Chat Modes Customizados",
          description: "Modos especializados para diferentes tarefas",
          actions: [
            "Analisador de projeto",
            "Seguidor de padrões",
            "Especialista em testes",
          ],
        },
        {
          title: "📚 Workflows Avançados",
          description: "Automação completa de desenvolvimento",
          actions: [
            "Refatoração automática",
            "Geração de docs",
            "Code review assistido",
          ],
        },
      ],
      nextSteps: "Considere implementar essas práticas em sua equipe",
    },
    architect: {
      title: "Arquiteto/Tech Lead - Implementação em Projetos",
      icon: "fas fa-building",
      description: "Padronize Copilot em toda arquitetura do projeto",
      steps: [
        {
          title: "📋 Template de Projeto",
          description: "Crie arquivo .instructions.md personalizado",
          actions: [
            "Documentar stack tecnológico",
            "Definir padrões arquiteturais",
            "Comandos de build",
          ],
        },
        {
          title: "⚙️ Configuração de Workspace",
          description: "Settings padronizados para toda equipe",
          actions: [
            "VS Code settings",
            "Tasks automáticas",
            "Launch configurations",
          ],
        },
        {
          title: "📚 Estratégias de Implementação",
          description: "Roadmap de adoção no projeto",
          actions: [
            "Análise de impacto",
            "Plano de migração",
            "Treinamento da equipe",
          ],
        },
        {
          title: "🔄 Validação e Iteração",
          description: "Métricas e melhoria contínua",
          actions: [
            "Coletar feedback",
            "Ajustar padrões",
            "Documentar learnings",
          ],
        },
      ],
      nextSteps: "Escale para implementação organizacional",
    },
    manager: {
      title: "Gestor/CTO - Implementação Organizacional",
      icon: "fas fa-users",
      description: "ROI mensurável e políticas corporativas",
      steps: [
        {
          title: "🏢 Preparação Organizacional",
          description: "Licenças, políticas e aprovações",
          actions: [
            "Aquisição de licenças",
            "Política de segurança",
            "Aprovação legal",
            "Budget planning",
          ],
        },
        {
          title: "⚙️ Configuração Padrão",
          description: "Templates e settings corporativos",
          actions: [
            "Settings corporativos",
            "AllowList/DenyList padrão",
            "Chat modes empresa",
          ],
        },
        {
          title: "👥 Onboarding da Equipe",
          description: "Treinamento e certificação",
          actions: [
            "Programa de treinamento",
            "Certificação individual",
            "Suporte contínuo",
          ],
        },
        {
          title: "📊 Monitoramento e ROI",
          description: "Métricas de sucesso e evolução",
          actions: [
            "KPIs definidos",
            "Dashboard de métricas",
            "Relatórios regulares",
            "Evolução contínua",
          ],
        },
      ],
      nextSteps: "Monitore ROI e expanda para outras áreas",
    },
  };

  return profiles[profileType] || profiles.junior;
}

// Modal Functions
function openProfileSelector() {
  scrollToSection("profiles");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

function openStepModal(stepNumber) {
  const stepData = getStepData(stepNumber);
  createModal("step-modal", stepData.title, createStepModalContent(stepData));
}

function getStepData(stepNumber) {
  const steps = {
    1: {
      title: "Passo 1: Instalar Extensões",
      description: "Instale as extensões necessárias no VS Code",
      details: [
        "Abra o VS Code",
        "Pressione Ctrl+Shift+X para abrir Extensions",
        'Pesquise por "GitHub Copilot"',
        'Instale "GitHub Copilot" (publicado por GitHub)',
        'Instale "GitHub Copilot Chat" (publicado por GitHub)',
        "Reinicie o VS Code se solicitado",
      ],
      code: `// Extensões necessárias:
1. GitHub Copilot
2. GitHub Copilot Chat

// Como identificar:
- Procure pelo ícone do GitHub
- Verifique se é publicado por "GitHub"
- Deve ter muitos downloads (milhões)`,
      tips: [
        "Sempre instale extensões oficiais do GitHub",
        "Verifique se tem muitos downloads",
        "Leia as avaliações antes de instalar",
      ],
    },
    2: {
      title: "Passo 2: Fazer Login",
      description: "Conecte sua conta GitHub ao VS Code",
      details: [
        "Pressione Ctrl+Shift+P para abrir Command Palette",
        'Digite "GitHub Copilot: Sign In"',
        "Pressione Enter",
        "Seu navegador vai abrir",
        "Faça login no GitHub",
        "Autorize o VS Code",
        "Volte para o VS Code",
      ],
      code: `// Comando alternativo:
Ctrl+Shift+P → "GitHub Copilot: Sign In"

// Ou pelo menu:
Accounts (canto inferior esquerdo) → Sign in to sync VS Code → GitHub`,
      tips: [
        "Use a mesma conta que tem a licença do Copilot",
        "Se der erro, tente fazer logout e login novamente",
        "Verifique se o ícone do Copilot aparece na barra inferior",
      ],
    },
    3: {
      title: "Passo 3: Configurar Segurança",
      description: "Configure privacidade e telemetria",
      details: [
        "Pressione Ctrl+, para abrir Settings",
        'Pesquise por "copilot telemetry"',
        'Desmarque "Github › Copilot: Telemetry Enabled"',
        'Pesquise por "telemetry level"',
        'Mude para "error" ou "off"',
        "Salve as configurações",
      ],
      code: `// Configurações recomendadas:
{
  "github.copilot.advanced": {
    "length": 500,
    "temperature": 0.1
  },
  "telemetry.telemetryLevel": "error"
}`,
      tips: [
        "Isso melhora sua privacidade",
        "Reduz dados enviados para servidores",
        "Não afeta a funcionalidade do Copilot",
      ],
    },
    4: {
      title: "Passo 4: Configurar Projeto",
      description: "Configure comandos seguros para seu projeto",
      details: [
        "Crie a pasta .vscode na raiz do projeto",
        "Crie o arquivo .vscode/settings.json",
        "Cole a configuração de segurança",
        "Ajuste os comandos para seu projeto",
        "Salve o arquivo",
        "Reinicie o VS Code",
      ],
      code: `{
  "github.copilot.chat.agent.terminal.allowList": [
    "npm run.*",
    "yarn.*",
    "make test",
    "make lint", 
    "git status",
    "git diff",
    "python -m pytest",
    "ls",
    "cat"
  ],
  "github.copilot.chat.agent.terminal.denyList": [
    "rm.*",
    "sudo.*",
    "curl.*",
    "wget.*"
  ],
  "chat.tools.autoApprove": false
}`,
      tips: [
        "AllowList: comandos que o Copilot pode executar automaticamente",
        "DenyList: comandos que sempre precisam de confirmação",
        "Personalize para seu projeto específico",
      ],
    },
    5: {
      title: "Passo 5: Testar Funcionamento",
      description: "Valide se tudo está configurado corretamente",
      details: [
        "Crie um arquivo novo (test.py ou test.js)",
        "Digite um comentário descrevendo uma função",
        "Espere a sugestão do Copilot aparecer",
        "Pressione Tab para aceitar",
        "Teste o chat com Ctrl+Alt+I",
        "Faça uma pergunta simples",
      ],
      code: `# Exemplo para testar:
# função para calcular fibonacci
# (Copilot vai sugerir o código)

# No chat, teste:
"Olá! Você está funcionando?"
"@workspace Analise este projeto"`,
      tips: [
        "Se não aparecer sugestão, verifique o login",
        "Se o chat não abrir, reinstale a extensão Chat",
        "Teste com diferentes linguagens de programação",
      ],
    },
  };

  return steps[stepNumber] || steps[1];
}

function createStepModalContent(stepData) {
  return `
        <div class="step-modal-content">
            <p class="step-modal-description">${stepData.description}</p>
            
            <div class="step-details">
                <h4>Passos Detalhados:</h4>
                <ol class="step-list">
                    ${stepData.details
                      .map((detail) => `<li>${detail}</li>`)
                      .join("")}
                </ol>
            </div>
            
            <div class="step-code-section">
                <h4>Código/Comandos:</h4>
                <div class="step-code">
                    <div class="code-header">
                        <span>Exemplo</span>
                        <button class="copy-btn" onclick="copyModalCode(this)">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                    <div class="code-content">
                        <pre><code>${stepData.code}</code></pre>
                    </div>
                </div>
            </div>
            
            <div class="step-tips">
                <h4>💡 Dicas Importantes:</h4>
                <ul class="tips-list">
                    ${stepData.tips.map((tip) => `<li>${tip}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
}

// Global functions for modal interactions
window.openProfileModal = function (profileData) {
  createModal(
    "profile-modal",
    profileData.title,
    createProfileModalContent(profileData)
  );
};

window.openFeatureModal = function (featureType) {
  const featureData = getFeatureData(featureType);
  createModal(
    "feature-modal",
    featureData.title,
    createFeatureModalContent(featureData)
  );
};

window.openPhaseModal = function (phaseNumber) {
  const phaseData = getPhaseData(phaseNumber);
  createModal(
    "phase-modal",
    phaseData.title,
    createPhaseModalContent(phaseData)
  );
};

function createProfileModalContent(profileData) {
  return `
        <div class="profile-modal-content">
            <div class="profile-modal-header">
                <div class="profile-modal-icon">
                    <i class="${profileData.icon}"></i>
                </div>
                <p class="profile-modal-description">${
                  profileData.description
                }</p>
            </div>
            
            <div class="profile-steps">
                ${profileData.steps
                  .map(
                    (step, index) => `
                    <div class="profile-step">
                        <div class="profile-step-header">
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                        </div>
                        <div class="profile-step-actions">
                            ${step.actions
                              .map(
                                (action) => `
                                <div class="profile-action">
                                    <i class="fas fa-check-circle"></i>
                                    <span>${action}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
            
            <div class="profile-next-steps">
                <h4>🎯 Próximos Passos:</h4>
                <p>${profileData.nextSteps}</p>
            </div>
            
            <div class="profile-actions">
                <button class="btn btn-primary" onclick="closeModal(); scrollToSection('setup')">
                    Começar Setup
                </button>
                <button class="btn btn-outline" onclick="closeModal(); scrollToSection('advanced')">
                    Ver Recursos Avançados
                </button>
            </div>
        </div>
    `;
}

function createModal(id, title, content) {
  const modalHTML = `
        <div class="modal-overlay" id="${id}">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" onclick="closeModal('${id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-content">
                    ${content}
                </div>
            </div>
        </div>
    `;

  // Remove any existing modal with the same ID
  const existingModal = document.getElementById(id);
  if (existingModal) {
    existingModal.remove();
  }

  // Add new modal
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Show modal
  setTimeout(() => {
    document.getElementById(id).classList.add("active");
  }, 100);

  // Close on overlay click
  document.getElementById(id).addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal(id);
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal(id);
    }
  });
}

window.closeModal = function (id) {
  const modal = id
    ? document.getElementById(id)
    : document.querySelector(".modal-overlay.active");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
};

window.copyModalCode = function (button) {
  const codeContent = button.closest(".step-code").querySelector("code");
  const text = codeContent.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const originalIcon = button.querySelector("i");
    originalIcon.className = "fas fa-check";
    button.style.color = "var(--accent-color)";

    setTimeout(() => {
      originalIcon.className = "fas fa-copy";
      button.style.color = "";
    }, 2000);
  });
};

// Template Functions
window.downloadTemplate = function () {
  // Create download link
  const link = document.createElement("a");
  link.href = "copilot-init-template.zip";
  link.download = "copilot-init-template.zip";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show success message
  showNotification("Template baixado com sucesso! 📦", "success");
};

window.copyToClipboard = function (button) {
  const codeBlock = button.parentElement.querySelector("pre code");
  const text = codeBlock.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const originalIcon = button.querySelector("i");
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.color = "var(--accent-color)";

    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.color = "";
    }, 2000);

    showNotification("Comando copiado! 📋", "success");
  });
};

window.showPrerequisiteCheck = function () {
  const checkModal = `
    <div class="modal-overlay" id="prerequisite-check">
      <div class="modal-content">
        <div class="modal-header">
          <h3><i class="fas fa-check-circle"></i> Verificação de Pré-requisitos</h3>
          <button class="close-btn" onclick="closeModal('prerequisite-check')">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="check-item">
            <h4><i class="fab fa-github"></i> GitHub Copilot Instalado</h4>
            <p>Verifique se as extensões estão ativas no VS Code:</p>
            <ul>
              <li>GitHub Copilot</li>
              <li>GitHub Copilot Chat</li>
            </ul>
            <p><strong>Como verificar:</strong> Ctrl+Shift+P → "GitHub Copilot"</p>
          </div>
          
          <div class="check-item">
            <h4><i class="fas fa-sign-in-alt"></i> Login Realizado</h4>
            <p>Confirme que está logado na conta Luiza Labs</p>
            <p><strong>Como verificar:</strong> Ícone do GitHub no VS Code deve estar verde</p>
          </div>
          
          <div class="check-item">
            <h4><i class="fas fa-comments"></i> Chat Funcionando</h4>
            <p>Teste o Copilot Chat:</p>
            <code>Ctrl+Alt+I → Digite: "Olá, você está funcionando?"</code>
          </div>
          
          <div class="check-results">
            <button class="btn btn-primary" onclick="testCopilotStatus()">
              <i class="fas fa-play"></i>
              Executar Verificação Automática
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  showModal("prerequisite-check", checkModal);
};

window.testCopilotStatus = function () {
  showNotification("Verifique manualmente no VS Code: Ctrl+Alt+I", "info");
};

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 300);
  }, 5000);
}
