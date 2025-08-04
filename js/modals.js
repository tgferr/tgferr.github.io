// Modal content data and functionality

function getFeatureData(featureType) {
  const features = {
    terminal: {
      title: "Terminal AllowList/DenyList",
      description:
        "Configure quais comandos o Copilot pode executar automaticamente",
      content: `
                <div class="feature-section">
                    <h4>🎯 O que é o Terminal AllowList?</h4>
                    <p>O AllowList controla quais comandos o GitHub Copilot Agent pode executar automaticamente, sem pedir confirmação. Isso garante segurança e produtividade.</p>
                </div>
                
                <div class="feature-section">
                    <h4>⚙️ Configuração Básica</h4>
                    <div class="step-code">
                        <div class="code-header">
                            <span>.vscode/settings.json</span>
                            <button class="copy-btn" onclick="copyModalCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="code-content">
                            <pre><code>{
  "github.copilot.chat.agent.terminal.allowList": [
    "npm run.*",
    "yarn.*", 
    "make (test|lint|build)",
    "git (status|diff|log)",
    "python -m pytest.*",
    "ls.*",
    "cat.*"
  ],
  "github.copilot.chat.agent.terminal.denyList": [
    "rm.*",
    "sudo.*",
    "/rm -rf.*/",
    "curl.*",
    "wget.*",
    "/.*password.*/i"
  ]
}</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="feature-section">
                    <h4>🔒 Configuração por Projeto</h4>
                    <p>Cada projeto pode ter suas próprias regras:</p>
                    <ul class="feature-list">
                        <li><strong>Frontend React:</strong> npm run, yarn, jest</li>
                        <li><strong>Backend Python:</strong> pytest, pip, uvicorn</li>
                        <li><strong>DevOps:</strong> docker, kubectl, terraform</li>
                        <li><strong>Mobile:</strong> react-native, expo, adb</li>
                    </ul>
                </div>
                
                <div class="feature-section">
                    <h4>🚨 Comandos Perigosos (Sempre no DenyList)</h4>
                    <div class="warning-box">
                        <ul class="danger-list">
                            <li><code>rm -rf</code> - Deletar arquivos</li>
                            <li><code>sudo</code> - Executar como admin</li>
                            <li><code>curl | sh</code> - Executar scripts remotos</li>
                            <li><code>.*password.*</code> - Qualquer coisa com senha</li>
                        </ul>
                    </div>
                </div>
            `,
    },
    chatmodes: {
      title: "Chat Modes Personalizados",
      description: "Crie modos de chat especializados para diferentes cenários",
      content: `
                <div class="feature-section">
                    <h4>🎛️ O que são Chat Modes?</h4>
                    <p>Chat Modes são modos personalizados que definem instruções específicas para o Copilot seguir em diferentes contextos.</p>
                </div>
                
                <div class="feature-section">
                    <h4>📋 Exemplo: Analisador de Projeto</h4>
                    <div class="step-code">
                        <div class="code-header">
                            <span>Chat Mode Configuration</span>
                            <button class="copy-btn" onclick="copyModalCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="code-content">
                            <pre><code>{
  "github.copilot.chat.experimental.chatModes": [
    {
      "id": "project-analyzer",
      "label": "🔍 Analisador de Projeto",
      "description": "Analisa estrutura e padrões do projeto",
      "instructions": "Você é um especialista em análise de projetos. Sempre analise: 1) Dependências 2) Estrutura de pastas 3) Padrões arquiteturais 4) Comandos de build 5) Padrões de código"
    }
  ]
}</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="feature-section">
                    <h4>🛠️ Modos Recomendados</h4>
                    <div class="modes-grid">
                        <div class="mode-card">
                            <h5>🔍 Analisador</h5>
                            <p>Analisa projeto antes de qualquer implementação</p>
                        </div>
                        <div class="mode-card">
                            <h5>📋 Seguidor de Padrões</h5>
                            <p>Mantém consistência com código existente</p>
                        </div>
                        <div class="mode-card">
                            <h5>🧪 Mestre dos Testes</h5>
                            <p>Foca em implementar testes abrangentes</p>
                        </div>
                        <div class="mode-card">
                            <h5>🐛 Debug Detective</h5>
                            <p>Especialista em debugging sistemático</p>
                        </div>
                    </div>
                </div>
            `,
    },
    instructions: {
      title: "Instruction Files",
      description: "Documente padrões do projeto para o Copilot seguir",
      content: `
                <div class="feature-section">
                    <h4>📄 O que são Instruction Files?</h4>
                    <p>Arquivos .instructions.md que documentam padrões, arquitetura e convenções do projeto para o Copilot seguir automaticamente.</p>
                </div>
                
                <div class="feature-section">
                    <h4>📋 Template Base</h4>
                    <div class="step-code">
                        <div class="code-header">
                            <span>projeto.instructions.md</span>
                            <button class="copy-btn" onclick="copyModalCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="code-content">
                            <pre><code># Instruções do Projeto

## Stack Tecnológico
- **Linguagem:** Python 3.12
- **Framework:** FastAPI 0.115.2
- **Banco:** MongoDB + Redis
- **Testes:** pytest + coverage

## Padrões Arquiteturais
- Domain-driven design
- Repository pattern
- Dependency injection
- Clean architecture

## Convenções de Código
- Type hints obrigatórios
- Docstrings em todas funções públicas
- Máximo 80 caracteres por linha
- Usar async/await para I/O

## Comandos de Build
- make test - Executar testes
- make lint - Verificar código
- make format - Formatar código
- make docs - Gerar documentação</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="feature-section">
                    <h4>⚙️ Configuração no VS Code</h4>
                    <div class="step-code">
                        <div class="code-header">
                            <span>settings.json</span>
                            <button class="copy-btn" onclick="copyModalCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="code-content">
                            <pre><code>{
  "github.copilot.chat.instructionFiles": [
    "*.instructions.md",
    "docs/coding-standards.md"
  ]
}</code></pre>
                        </div>
                    </div>
                </div>
            `,
    },
    security: {
      title: "Configurações de Segurança",
      description: "Políticas corporativas e controle de dados",
      content: `
                <div class="feature-section">
                    <h4>🔒 Políticas de Segurança</h4>
                    <p>Configure o Copilot para atender requisitos corporativos de segurança e compliance.</p>
                </div>
                
                <div class="feature-section">
                    <h4>🛡️ Configuração Corporativa</h4>
                    <div class="step-code">
                        <div class="code-header">
                            <span>Corporate Security Settings</span>
                            <button class="copy-btn" onclick="copyModalCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="code-content">
                            <pre><code>{
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "env": false
  },
  "github.copilot.chat.agent.terminal.denyList": [
    "rm.*",
    "sudo.*",
    "curl.*",
    "wget.*",
    "/.*password.*/i",
    "/.*secret.*/i",
    "/.*token.*/i",
    "/.*key.*/i"
  ],
  "chat.tools.autoApprove": false,
  "telemetry.telemetryLevel": "off"
}</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="feature-section">
                    <h4>📊 Controle de Dados</h4>
                    <ul class="feature-list">
                        <li><strong>Telemetria:</strong> Desabilitada por padrão</li>
                        <li><strong>Logs:</strong> Apenas erros críticos</li>
                        <li><strong>Arquivos sensíveis:</strong> Excluídos automaticamente</li>
                        <li><strong>Comandos perigosos:</strong> Sempre requerem aprovação</li>
                    </ul>
                </div>
                
                <div class="feature-section">
                    <h4>🏢 Implementação Organizacional</h4>
                    <div class="org-steps">
                        <div class="org-step">
                            <span class="step-number">1</span>
                            <div>
                                <strong>Definir Política</strong>
                                <p>Criar documento de política de uso de IA</p>
                            </div>
                        </div>
                        <div class="org-step">
                            <span class="step-number">2</span>
                            <div>
                                <strong>Configurar Templates</strong>
                                <p>Settings padrão para toda organização</p>
                            </div>
                        </div>
                        <div class="org-step">
                            <span class="step-number">3</span>
                            <div>
                                <strong>Treinar Equipe</strong>
                                <p>Programa de treinamento em segurança</p>
                            </div>
                        </div>
                        <div class="org-step">
                            <span class="step-number">4</span>
                            <div>
                                <strong>Monitorar Uso</strong>
                                <p>Auditoria e compliance contínuos</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },
  };

  return features[featureType] || features.terminal;
}

function getPhaseData(phaseNumber) {
  const phases = {
    1: {
      title: "Fase 1: Preparação Organizacional",
      description: "Preparativos essenciais antes da implementação",
      content: `
                <div class="phase-section">
                    <h4>📋 Checklist de Preparação</h4>
                    <div class="checklist">
                        <div class="checklist-item">
                            <input type="checkbox" id="licenses">
                            <label for="licenses">Licenças GitHub Copilot adquiridas para toda equipe</label>
                        </div>
                        <div class="checklist-item">
                            <input type="checkbox" id="policy">
                            <label for="policy">Política de segurança para uso de IA definida</label>
                        </div>
                        <div class="checklist-item">
                            <input type="checkbox" id="legal">
                            <label for="legal">Aprovação legal para ferramentas de código IA</label>
                        </div>
                        <div class="checklist-item">
                            <input type="checkbox" id="training">
                            <label for="training">Programa de treinamento planejado</label>
                        </div>
                        <div class="checklist-item">
                            <input type="checkbox" id="budget">
                            <label for="budget">Budget aprovado e ROI definido</label>
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>📊 ROI Esperado</h4>
                    <div class="roi-cards">
                        <div class="roi-card">
                            <div class="roi-metric">40-60%</div>
                            <div class="roi-label">Redução no onboarding</div>
                        </div>
                        <div class="roi-card">
                            <div class="roi-metric">3x</div>
                            <div class="roi-label">Velocidade de desenvolvimento</div>
                        </div>
                        <div class="roi-card">
                            <div class="roi-metric">90%+</div>
                            <div class="roi-label">Consistência de padrões</div>
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>📝 Documentos Necessários</h4>
                    <ul class="documents-list">
                        <li>Política de uso de IA e GitHub Copilot</li>
                        <li>Acordo de licenciamento e termos</li>
                        <li>Plano de implementação por fases</li>
                        <li>Programa de treinamento da equipe</li>
                        <li>Métricas de sucesso e KPIs</li>
                    </ul>
                </div>
            `,
    },
    2: {
      title: "Fase 2: Configuração Padrão",
      description: "Templates e configurações corporativas",
      content: `
                <div class="phase-section">
                    <h4>⚙️ Settings Corporativos</h4>
                    <div class="step-code">
                        <div class="code-header">
                            <span>corporate-settings.json</span>
                            <button class="copy-btn" onclick="copyModalCode(this)">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="code-content">
                            <pre><code>{
  "github.copilot.chat.localeOverride": "pt-BR",
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false
  },
  "github.copilot.chat.agent.terminal.allowList": [
    "npm run.*",
    "yarn.*", 
    "make (test|lint|build)",
    "git (status|diff|log)",
    "docker ps",
    "kubectl get.*"
  ],
  "github.copilot.chat.agent.terminal.denyList": [
    "rm.*",
    "sudo.*",
    "curl.*",
    "wget.*",
    ".*password.*",
    ".*secret.*"
  ],
  "chat.tools.autoApprove": false,
  "telemetry.telemetryLevel": "error"
}</code></pre>
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>📋 Template Corporativo</h4>
                    <p>Crie um arquivo corporate.instructions.md base:</p>
                    <div class="template-features">
                        <div class="template-item">
                            <strong>Stack padrão da empresa</strong>
                            <p>Tecnologias aprovadas e versões</p>
                        </div>
                        <div class="template-item">
                            <strong>Padrões arquiteturais</strong>
                            <p>Clean code, SOLID, DDD, etc.</p>
                        </div>
                        <div class="template-item">
                            <strong>Convenções de código</strong>
                            <p>Naming, formatação, estrutura</p>
                        </div>
                        <div class="template-item">
                            <strong>Comandos corporativos</strong>
                            <p>Scripts de build, deploy, teste</p>
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>🎛️ Chat Modes Corporativos</h4>
                    <div class="corporate-modes">
                        <div class="mode-item">
                            <strong>🔍 Security Auditor</strong>
                            <p>Foca em práticas de segurança corporativas</p>
                        </div>
                        <div class="mode-item">
                            <strong>📊 Performance Optimizer</strong>
                            <p>Otimização seguindo padrões da empresa</p>
                        </div>
                        <div class="mode-item">
                            <strong>📚 Documentation Expert</strong>
                            <p>Documentação conforme templates corporativos</p>
                        </div>
                    </div>
                </div>
            `,
    },
    3: {
      title: "Fase 3: Onboarding da Equipe",
      description: "Treinamento e certificação individual",
      content: `
                <div class="phase-section">
                    <h4>📚 Programa de Treinamento</h4>
                    <div class="training-timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker">1</div>
                            <div class="timeline-content">
                                <strong>Sessão Inicial (2h)</strong>
                                <p>Introdução ao Copilot, políticas de segurança, setup básico</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker">2</div>
                            <div class="timeline-content">
                                <strong>Hands-on (2h)</strong>
                                <p>Prática com templates corporativos, chat modes, workflows</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker">3</div>
                            <div class="timeline-content">
                                <strong>Q&A Session (1h)</strong>
                                <p>Dúvidas, troubleshooting, casos específicos</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker">4</div>
                            <div class="timeline-content">
                                <strong>Certificação (30min)</strong>
                                <p>Demonstração prática das competências</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>✅ Checklist de Certificação Individual</h4>
                    <div class="certification-checklist">
                        <div class="cert-category">
                            <h5>Setup Técnico</h5>
                            <ul>
                                <li>Extensões instaladas e configuradas</li>
                                <li>Login corporativo funcionando</li>
                                <li>Settings corporativos aplicados</li>
                                <li>Template do projeto configurado</li>
                            </ul>
                        </div>
                        <div class="cert-category">
                            <h5>Conhecimento</h5>
                            <ul>
                                <li>Conhece comandos essenciais (Tab, Ctrl+I, Ctrl+Alt+I)</li>
                                <li>Sabe usar @workspace para contexto</li>
                                <li>Entende quando aceitar/rejeitar sugestões</li>
                                <li>Conhece política de segurança da empresa</li>
                            </ul>
                        </div>
                        <div class="cert-category">
                            <h5>Prática</h5>
                            <ul>
                                <li>Completou exercício de primeiro commit</li>
                                <li>Criou testes usando Copilot seguindo padrões</li>
                                <li>Fez debug de problema usando chat</li>
                                <li>Demonstrou uso de chat modes corporativos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
    },
    4: {
      title: "Fase 4: Monitoramento e Evolução",
      description: "Métricas de sucesso e melhoria contínua",
      content: `
                <div class="phase-section">
                    <h4>📊 Dashboard de Métricas</h4>
                    <div class="metrics-dashboard">
                        <div class="metric-category">
                            <h5>Adoção</h5>
                            <ul>
                                <li>% da equipe usando ativamente</li>
                                <li>Commits por dia com Copilot</li>
                                <li>Tempo médio de onboarding</li>
                                <li>Satisfação da equipe (NPS)</li>
                            </ul>
                        </div>
                        <div class="metric-category">
                            <h5>Qualidade</h5>
                            <ul>
                                <li>Issues relacionadas a padrões</li>
                                <li>Tempo médio de code review</li>
                                <li>Cobertura de testes</li>
                                <li>Bugs em produção</li>
                            </ul>
                        </div>
                        <div class="metric-category">
                            <h5>Produtividade</h5>
                            <ul>
                                <li>Velocidade de desenvolvimento</li>
                                <li>Features entregues por sprint</li>
                                <li>Tempo para primeiro commit (novos devs)</li>
                                <li>Reuso de código</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>🔄 Processo de Melhoria</h4>
                    <div class="improvement-cycle">
                        <div class="cycle-step">
                            <strong>Semana 1-2:</strong> Coleta inicial de dados
                        </div>
                        <div class="cycle-step">
                            <strong>Semana 3:</strong> Análise e feedback da equipe
                        </div>
                        <div class="cycle-step">
                            <strong>Semana 4:</strong> Ajustes em padrões e templates
                        </div>
                        <div class="cycle-step">
                            <strong>Mês 2:</strong> Primeira iteração de melhorias
                        </div>
                    </div>
                </div>
                
                <div class="phase-section">
                    <h4>🎯 Critérios de Sucesso</h4>
                    <div class="success-criteria">
                        <div class="success-item success">
                            <i class="fas fa-check-circle"></i>
                            <span>90%+ da equipe usando diariamente</span>
                        </div>
                        <div class="success-item success">
                            <i class="fas fa-check-circle"></i>
                            <span>Redução 40%+ no tempo de onboarding</span>
                        </div>
                        <div class="success-item success">
                            <i class="fas fa-check-circle"></i>
                            <span>Melhoria mensurável na consistência</span>
                        </div>
                        <div class="success-item success">
                            <i class="fas fa-check-circle"></i>
                            <span>ROI positivo vs investimento em licenças</span>
                        </div>
                    </div>
                </div>
            `,
    },
  };

  return phases[phaseNumber] || phases[1];
}

function createFeatureModalContent(featureData) {
  return `
        <div class="feature-modal-content">
            <p class="feature-modal-description">${featureData.description}</p>
            ${featureData.content}
            <div class="feature-actions">
                <button class="btn btn-primary" onclick="closeModal()">
                    Implementar Configuração
                </button>
                <button class="btn btn-outline" onclick="closeModal(); scrollToSection('teams')">
                    Ver Implementação em Equipes
                </button>
            </div>
        </div>
    `;
}

function createPhaseModalContent(phaseData) {
  return `
        <div class="phase-modal-content">
            <p class="phase-modal-description">${phaseData.description}</p>
            ${phaseData.content}
            <div class="phase-actions">
                <button class="btn btn-primary" onclick="closeModal()">
                    Implementar Fase
                </button>
                <button class="btn btn-outline" onclick="closeModal(); scrollToSection('setup')">
                    Voltar ao Setup
                </button>
            </div>
        </div>
    `;
}
