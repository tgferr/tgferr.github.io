# UNIVERSAL BRAIN FRAMEWORK — Single-File Operating System

> **Framework**: SDD OPENSPEC + Brain Agent Unificado  
> **Versão**: 3.5.0 (Dual-Engine: Enterprise Luizalabs + Community Portátil)  
> **Uso**: Copie este arquivo para qualquer projeto como `PROJECT-BRAIN.md` ou `.openspec/brain.md`.

---

## 1. PROPÓSITO E DIRETRIZES FUNDAMENTAIS

Este arquivo é a **ÚNICA FONTE DE VERDADE**, memória viva e orquestrador de desenvolvimento de qualquer repositório. Ele opera em **dois modos automáticos de runtime**:

1. **Perfil Enterprise Luizalabs (MIA + Claude Code CLI / Copilot CLI)**: Ativa sinergia com o ecossistema corporativo (Sandbox Context-Mode nativo de 12MB em disco, RTK no PATH, LSPs automáticos de Go/Python/TS, autenticação Google PKCE e plugins curados).
2. **Perfil Community / Doméstico (VS Code Chat / Standalone)**: Opera com agentes autônomos puros, formulários interativos via UI e simulação de governança local sem dependência de proxy corporativo.

---

### ⛔ DIRETIVAS RÍGIDAS DE SEGURANÇA (HARD CONSTRAINTS)

1. **NUNCA EXECUTAR COMMIT OU PUSH AUTOMÁTICOS**:
   - É terminantemente PROIBIDO executar `git commit`, `git push`, `git merge`, `git rebase` ou alterar histórico remoto sem instrução expressa e intencional do desenvolvedor.
   - Operações git devem ser estritamente de leitura (`status`, `diff`, `log`) ou staging cirúrgico pré-aprovado (`git add`).
2. **TRAVA PRÉ-CÓDIGO INEGOCIÁVEL (PROIBIDO EDITAR/CRIAR ARQUIVOS SEM PLANO APROVADO)**:
   - É **TERMINANTEMENTE PROIBIDO** invocar ferramentas de edição ou criação de código (`replace_string_in_file`, `insert_edit_into_file`, `create_file`, etc.) antes de o usuário aprovar o plano em turno explícito.
   - O agente NUNCA pode pular da fase de coleta/perguntas diretamente para a escrita de código.
   - O fluxo obrigatório é: **Coleta de Requisitos → Deep-Search / Explore → Apresentação do Plano → Pergunta de Aprovação `[A] Aprovar plano` → SOMENTE APÓS APROVAÇÃO executar código**.
   - Qualquer tentativa de criar arquivos da solução (`index.html`, `main.js`, scripts, etc.) sem aprovação prévia do plano é considerada violação gravíssima de integridade.
3. **TRANSPARÊNCIA DO RUNTIME & PERFIL DE EXECUÇÃO**:
   - **No Claude Code CLI (`mia launch claude`)**: O agente reconhece que está no LiteLLM interno (`labs-code`), herda o Context-Mode nativo e foca estritamente na lógica de negócio, Clean Architecture, testes 100% e atualização da memória viva.
   - **No VS Code Copilot Chat**: A LLM ativa é a da IDE (Gemini Flash, Claude Sonnet, GPT-4o). O agente utiliza o `vscode_askQuestions` para interações de UI e executa comandos de terminal com comprovação real de saída.
4. **GATEWAY INTERATIVO DE ABERTURA**:
   - No **VS Code**: Dispara a tool nativa `vscode_askQuestions` com botões clicáveis.
   - No **Claude Code CLI (`mia launch claude`)**: Apresenta menu limpo formatado e aguarda comando direto ou atalhos (`1`, `A`, etc.).
5. **ZERO DUMP DE CONTEÚDO BRUTO NO CHAT**:
   - Proibido colar logs inteiros, dumps de stack trace ou arquivos volumosos na conversa. Processar no sandbox e retornar apenas métricas, causas raiz e diffs mínimos.
6. **POLÍTICA DE RETORNO ENXUTO (RESPONSE CONTRACT)**:
   - Respostas sem preâmbulo social ou floreios.
   - Para alterações de código/documentação, exibir apenas deltas: `## ADDED`, `## MODIFIED (De:/Para:)` e `## REMOVED`, limitando o contexto exibido a no máximo 3 linhas de vizinhança.

---

## 2. MODOS DE OPERAÇÃO: ENTERPRISE (LUIZALABS) VS COMMUNITY

### 2.1 Perfil Enterprise Luizalabs (`MIA + Claude Code CLI`)

Quando lançado via `mia launch claude`:

- **Motor de Execução**: Claude Code v2.x rodando sobre o LiteLLM interno (`labs-code` / `labs-code-max`).
- **Context-Mode & RTK**: Nativos no binário do MIA. Saídas de builds, testes e diffs são indexadas em disco sob `~/.mia/` e apenas sumários chegam ao contexto do agente.
- **Language Servers (LSPs)**: `pyright`, `gopls` e `typescript-language-server` já conectados via STDIO pelo MIA, oferecendo autocompletion semântico e checagem de tipos sem adivinhação.
- **Papel do BRAIN**: Orquestrar a demanda com Clean Architecture, garantir cobertura de testes inegociável de 100%, guiar a esteira OpenSpec e persistir lições na Seção 8.

### 2.2 Perfil Community / Doméstico (`VS Code / Standalone`)

Quando executado diretamente em editores ou sem proxy corporativo:

- **Motor de Execução**: Qualquer LLM disponível no cliente (Copilot, Ollama, OpenAI).
- **Interatividade**: Formulários dinâmicos via `vscode_askQuestions`.
- **Papel do BRAIN**: Substituir a falta de governança da máquina, atuando como o copiloto rigoroso que exige aprovação prévia, proíbe commits cegos e documenta as decisões.

---

## 3. DEEP-SEARCH-LEARNING: BOOTSTRAPPING DE SUBAGENTS ESPECIALISTAS

Antes de alterar qualquer linha de código ou propor schemas, o framework exige uma fase de **pesquisa profunda e aprendizado de ecossistema** para especializar as personas que atuarão na demanda.

```mermaid
flowchart TD
    A[Demanda Recebida] --> B[Deep-Search-Learning: Varredura de Clientes & Upstreams]
    B --> C[Especialização Dinâmica das 5 Personas]
    C --> D[Review Cruzado Pré-Código: /review-personas]
    D -->|Dúvida ou Conflito| E{Pergunta Interativa ao Dev}
    D -->|Consenso Técnico| F[Execução Cirúrgica OpenSpec]
```

### 3.1 Etapas do Deep-Search-Learning

1. **Varredura de Clientes Reais (Downstreams)**:
   - Investigar repositórios consumidores (frontends, gateways, microserviços clientes) para extrair queries exatas, fragments, headers enviados e tolerância a mudanças de contratos.
   - O Discovery indica a _visão alvo_, mas o cliente ativo define a _realidade imediata de produção_.
2. **Varredura de Provedores Reais (Upstreams)**:
   - Investigar APIs provedoras, contratos de payload DTO, estratégias de autenticação, tempos médios de resposta e headers obrigatórios (ex.: `X-Experiment-CID`, tracking IDs).
3. **Consulta à Memória Viva (Seção 8)**:
   - Varrer a base de lições aprendidas deste arquivo para identificar se o mesmo componente ou padrão já causou incidentes anteriores.

### 3.2 Matriz das Personas Especialistas Embutidas

Após o Deep-Search-Learning, cada uma destas lentes embutidas deve ser ativada na fase de review pré-código e suporte operacional:

| Persona Especialista                   | Foco no Deep-Search-Learning & Operação                                                                                                      | Gatilhos de Alerta & Perguntas Interativas                                                               |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **🤖 Especialista MIA & Tooling**      | Gestão de plugins, skills, MCPs corporativos, gateways LiteLLM (`labs-code`, `labs-code-max`, `labs-code-mini`) e certificados SSL/Netskope. | Uso de CLIs legados (`skills-tk`), falha de autenticação/tokens, seleção incorreta de LLM para a tarefa. |
| **🏛️ Arquiteto de Contratos**          | Contratos de schema (GraphQL Federation, OpenAPI, Protobuf, DTOs). Valida compatibilidade semântica, `@key`, `@provides`, `@shareable`.      | Alteração de tipo de campo, novo campo obrigatório, mudança de cardinalidade (array vs unitário).        |
| **🔌 Engenheiro de Integração**        | Clientes HTTP, pooling de conexões, orçamentos de latência, headers de sessão/experimento e Circuit Breaker.                                 | Chamada upstream sem timeout estrito, falta de fallback em caso de falha, retry storms.                  |
| **📱 Especialista em Compatibilidade** | Clientes web, mobile, apps legados e consumers assíncronos. Garante coexistência dual (Strangler Fig).                                       | Risco de quebra para apps legados, remoção prematura de campos, tipos não esperados no frontend.         |
| **📊 SRE & Observabilidade**           | Latência p95/p99, traces distribuídos, métricas RED/USE, sanitização de logs (proibido PII) e correlação.                                    | Uso de prints ou `console.log` síncronos, falta de context ID, vazamento de PII em logs.                 |
| **🧪 Especialista em QA & Qualidade**  | Testes de unidade e integração, isolamento via mocks de DI, cobertura 100% de statements, branches e lines.                                  | Cobertura $<100\%$, branches de dados nulos/inválidos sem cobertura, testes acoplados a estado global.   |

---

## 4. CICLO OPERACIONAL DE DEMANDAS (OPENSPEC WORKFLOW)

Todo trabalho neste repositório segue 4 etapas rigorosas, orquestradas através deste arquivo:

```mermaid
flowchart TD
    A[/start-demand: Cria Estrutura OPENSPEC/ & Checklist/] --> B[/review-personas: Análise Multi-Ângulo/]
    B --> C[/execute: Implementação Cirúrgica + 100% Testes/]
    C --> D[/feed-brain & /close-demand: Destilação & Encerramento/]

    B -.->|Dúvida ou Risco| Q{Pergunta Interativa ao Usuário}
    Q -->|Decisão| C
```

### 4.1 Comando `/start-demand <ID-OU-NOME>` ou `@PROJECT-BRAIN.md iniciar`

1. **Detecção Automática do Perfil de Execução**:
   - **Cenário A: Claude Code CLI (`mia launch claude`)**:
     - O Claude Code já carrega o ambiente com `labs-code`, Context-Mode, RTK e LSPs ativos.
     - Para acionar o Brain no terminal, basta digitar:
       ```bash
       /start-demand <CODIGO_CARD_OU_NOME>
       # ou
       iniciar demanda <CODIGO_CARD> seguindo @PROJECT-BRAIN.md
       ```
     - O Brain analisa a demanda, dispara a varredura das personas e exibe um plano de ação enxuto no terminal.
     - **PARADA OBRIGATÓRIA**: O Claude Code para e aguarda você digitar `sim`, `aprovo` ou sugerir ajustes antes de editar qualquer arquivo.
   - **Cenário B: VS Code Copilot Chat (Doméstico / Standalone)**:
     - O usuário digita `@PROJECT-BRAIN.md iniciar`.
     - O Brain dispara imediatamente a tool nativa `vscode_askQuestions` para renderizar os botões clicáveis na tela.

2. **Estrutura de Perguntas no `vscode_askQuestions` (Modo VS Code)**:
   - `question_permissoes`: Single-choice (Permitir leitura e criação de `OPENSPEC/`).
   - `question_gitignore`: Single-choice (Versionar no Git para inteligência coletiva vs .gitignore local).
   - `question_explore`: Single-choice (Rodar Explore completo para gerar especialistas vs rápido).
   - `question_skills`: Multi-choice (Kanban Force, Confluence, GitOps, Clean Code, Bruno/API, Todas recomendadas).
   - `question_demanda`: Freeform text (Código do card, objetivo da tarefa, links e logs).

3. **Execução Mandatória do Explore & Apresentação do Plano**:
   - O agente dispara o subagente `Explore` para mapear arquitetura, padrões visuais e contratos.
   - O agente monta o documento de plano e apresenta no chat/terminal de forma concisa.
   - **PARADA OBRIGATÓRIA**: O turno ENCERRA com a pergunta:
     > _"Plano estruturado. Deseja aprovar a execução?"_
     > `[A] Aprovar plano e iniciar implementação`
     > `[B] Ajustar plano (digitar no campo livre)`
   - **É EXPRESSAMENTE PROIBIDO TOCAR EM ARQUIVOS DO PROJETO ANTES DE RECEBER O [A] OU APROVAÇÃO EXPLÍCITA DO USUÁRIO**.

### 4.2 Comando `/review-personas`

Antes de codificar, execute o debate técnico embutido acionando as 5 personas especializadas pelo Deep-Search-Learning:

- Emite parecer conciso estruturado por persona: Arquitetura, Integração, Compatibilidade, SRE e QA.
- Se qualquer persona identificar risco alto, conflito ou breaking change: **PARE e acione Pergunta Interativa estruturada ao desenvolvedor** (opções objetivas + campo livre aberto para digitar).

### 4.3 Comando `/execute`

1. Execução cirúrgica baseada em deltas (`ADDED`, `MODIFIED [De/Para]`, `REMOVED`).
2. Respeita Clean Architecture: mappers isolados em `domain/mappers/`, injeção dinâmica em containers de DI.
3. Constrói suíte de testes garantindo cobertura de 100% em branches, funções, statements e linhas.
4. Valida suíte usando comandos via `rtk`.
5. Em caso de falha de teste ou comando de build: **nunca tentar cegamente em loop**; emitir diagnóstico conciso seguido de pergunta interativa aberta ao desenvolvedor.
6. Nunca deixar `console.log`, `print` soltos ou segredos codificados.

### 4.4 Comando `/feed-brain` (Auto-Feed Contínuo) & `/close-demand`

1. Executa o **Protocolo Detalhado de Auto-Feed** (Seção 5).
2. Gera template de entrega (`OPENSPEC/openspec-files/MR_DESCRIPTION.md`) com as seções:
   - `Context`: O que foi resolvido e por quê.
   - `Changes`: Lista técnica concisa das alterações.
   - `Tests`: Cobertura atingida e comandos para reproduzir.
3. Confirma a persistência das novas lições na Seção 8 deste arquivo.
4. Limpar ou arquivar artefatos efêmeros (`active_todo.md`).
5. Finaliza com pergunta aberta para o desenvolvedor confirmar os próximos passos.
   - `Changes`: Lista técnica concisa das alterações.
   - `Tests`: Cobertura atingida e comandos para reproduzir.
6. Confirma a persistência das novas lições na Seção 8 deste arquivo.
7. Limpar ou arquivar artefatos efêmeros (`active_todo.md`).

---

## 5. PROTOCOLO DETALHADO DE AUTO-FEED & DESTILAÇÃO

O mecanismo de **Auto-Feed** é a chave da perenidade do framework: garante que o agente aprenda continuamente sem inflar a janela de contexto com poluição conversacional.

### 5.1 Regras de Ouro do Auto-Feed

- **Proibição Absoluta de Histórico Cru**: Nunca transcrever conversas de chat, debates intermediários ou mensagens completas para este arquivo.
- **Destilação em Regras Acionáveis**: Toda falha, bug de biblioteca, pegadinha de runtime ou decisão arquitetural deve ser convertida em uma regra objetiva e acionável.
- **Imutabilidade e Cumulatividade**: A Seção 8 (Lições Aprendidas) é cumulativa e nunca deve ter entradas válidas deletadas; apenas corrigidas ou complementadas.

### 5.2 Fluxo de Execução do Auto-Feed (`/feed-brain`)

1. **Identificar a Causa Raiz**: Analisar qual foi o atrito, bug de ambiente, pegadinha de runtime ou decisão de compatibilidade da demanda recém-concluída.
2. **Classificar a Lição**: Categorizar em _Ambiente & Setup_, _Arquitetura & Contratos_, _Integração & Resiliência_ ou _Testes & Qualidade_.
3. **Sintetizar em Formato Canônico**:
   - **Contexto/Causa Raiz**: O que falhou ou exigiu adaptação específica.
   - **Solução Padronizada**: Qual a regra de engenharia obrigatória a ser seguida a partir de agora em demandas futuras.
4. **Inserir na Seção 8**: Adicionar diretamente nas subseções correspondentes deste arquivo.

---

## 6. MAPA ARQUITETURAL DO REPOSITÓRIO (PREENCHER POR PROJETO)

> _Substitua os dados desta seção com as características do seu projeto atual._

- **Nome do Projeto / Subgrafo**: `[NOME_DO_PROJETO]`
- **Stack Tecnológica Principal**: `[Ex: TypeScript 5.x + Fastify + Apollo Federation v2 / Python FastAPI / etc.]`
- **Padrão de Injeção / Arquitetura**: `[Ex: Inversify DI, Clean Architecture, Ports & Adapters]`
- **Comunicação & Resiliência**: `[Ex: Undici Pool, Opossum Circuit Breaker, Redis Cache]`
- **Estrutura de Pastas Padrão**:
  ```
  src/
  ├── app/                  # Controllers / Resolvers / Handlers de entrada
  ├── domain/               # Entidades, Interfaces de Domínio e Mappers puros
  │   └── mappers/          # Transformação estrita de DTO Upstream -> Tipos de Domínio
  ├── domain/services/      # Casos de uso e orquestrações com resiliência
  ├── infra/                # Clientes HTTP, Banco de dados, Mensageria, GraphQL
  └── container.ts          # Injeção de dependências e Símbolos
  test/                     # Suíte de testes espelhando a árvore de src/
  ```

---

## 7. REGRAS DE OURO TÉCNICAS (INEGOCIÁVEIS)

1. **Clean Architecture nos Mappers**:
   - Toda conversão de DTO externo para formato do projeto deve residir em `domain/mappers/`.
   - Mappers devem ser funções/classes puras, idempotentes e com 100% de testes unitários para cada chave opcional.
2. **Orçamento Rígido de Latência & Fallback**:
   - Nenhuma chamada upstream pode travar a resposta principal além do SLA acordado (ex.: $\le 500$ms). Falhas upstream devem acionar fallback gracioso (devolver `null` ou payload degradado) sem derrubar a aplicação.
3. **Injeção de Dependências Dinâmica**:
   - Dependências nunca devem ser instanciadas como singletons estáticos em escopos globais de módulo onde impossibilitem rebind/mock em testes.
4. **Nenhum Segredo ou PII em Logs**:
   - Nunca trafegar tokens, senhas ou dados sensíveis em URL params (apenas no body).
   - Proibido logar dados pessoais de clientes (PII) nos logs da aplicação.
5. **Nomes de Arquivos ASCII Kebab-Case**:
   - Proibido uso de acentos, cedilhas ou caracteres especiais em caminhos de arquivos para evitar quebras em runners de CI e SonarScanner.

---

## 8. BASE VIVA DE LIÇÕES APRENDIDAS & INCIDENTES (CUMULATIVA)

> _Esta seção é cumulativa e NUNCA é reiniciada. Toda nova lição extraída via `/feed-brain` entra aqui._

### 8.1 Setup de Ambiente & Runtime

- **Padronização de Ferramental Agêntico via MIA CLI (Obrigatório)**:
  - O ecossistema de ferramentas e skills é gerenciado unicamente pelo `mia` (`curl -fsSL https://llm-code-proxy.luizalabs.com/v1/cli/install.sh | sh`). O antigo `skills-tk` foi descontinuado.
  - **Fluxo de Configuração de Fontes e Skills**:
    1. Registrar marketplace oficial: `mia plugin marketplace add <URL_GIT_MCP>`.
    2. Instalar skills nos clientes de destino: `mia plugin install <FONTE> -i <SKILL_NAME> -c vscode-copilot -c copilot -c claude -y`.
    3. Para CLIs e ferramentas Python distribuídas com o servidor MCP: instalar via ambiente isolado (`pipx install -e <DIR_CACHE_MIA>`).
  - **Tratamento de Certificados SSL (Netskope)**: Em downloads de navegadores automatizados (como `playwright install chromium` exigido para logins OAuth2 institucionais), exportar explicitamente o certificado corporativo: `export NODE_EXTRA_CA_CERTS="/etc/ssl/certs/nscacert.pem"`.
  - **Autenticação Interativa Compartilhada**: Operações de login institucional (`kf auth login`, `mia login`) exigem navegador real e MFA do usuário. O agente deve fornecer o comando exato, pausar o fluxo sem deadlocks e aguardar a confirmação do usuário antes de rodar comandos autenticados (`kf me`, extrações de dados).

- **Package Managers e Symlinks**: Em repositórios com restrições de package manager, execute sempre ativações oficiais (como `corepack enable`) antes de instalar dependências para garantir a materialização correta de symlinks e binários executáveis em `node_modules`.

- **Materialização de Subagentes: `.claude/agents/` é o único caminho executável (Claude Code)**:
  - **Contexto/Causa Raiz**: O Claude Code carrega subagentes **exclusivamente** de `.claude/agents/*.md` (com frontmatter `name` + `description`). A pasta `.agents/` segue o **padrão aberto AGENTS.md** e é consumida por Copilot/Cursor/Aider — não é lida pelo Claude Code. Tentar declarar um agente apenas em `.agents/` faz o Claude Code ignorá-lo silenciosamente. Agentes em `.claude/agents/` **não herdam** configuração — cada arquivo é autocontido (sem mecanismo de `include`).
  - **Solução Padronizada**: Ao materializar personas/subagentes do BRAIN, manter **dois espelhos em sincronia**: `.claude/agents/<slug>.md` (executável, frontmatter `name`/`description`/`tools`/`permissionMode`/`model`) **e** `.agents/<slug>.agent.md` (portável, padrão AGENTS.md, sem frontmatter YAML). Validar com `claude plugin validate .claude/agents`.

### 8.2 Arquitetura, Contratos & Compatibilidade

- **Estratégia Strangler Fig em Subgrafos**: Ao migrar modelos de dados legados para novos formatos, mantenha referências mínimas aos modelos legados permitindo que consumidores migrem gradualmente sem necessidade de big bang.
- **Tipos Dinâmicos**: Metadados abertos não devem usar estruturas rígidas de chave-valor quando o cliente consumir JSON arbítrio; adote custom scalars com validação de AST.
- **Normalização de Dados Numéricos**: Mappers de rating/score que recebem strings ou floats devem arredondar com segurança (`Math.round`) e ter fallback para `0` em caso de valores não numéricos.

### 8.3 Integração, Resiliência & Observabilidade

- **Zero console.log/print em Produção**: Utilize unicamente loggers estruturados assíncronos. Chamadas síncronas de escrita em stdout degradam performance e latência sob alta concorrência.
- **Propagação de Contexto de Sessão**: Headers de experimento, tenant e tracking devem ser interceptados na camada de entrada e propagados deterministicamente nas chamadas upstream.

### 8.4 Testes Unitários & E2E

- **Cobertura Absoluta de Casos de Borda**: 100% de cobertura de branches exige que chaves ausentes, arrays vazios, nulos e exceções de fallbacks possuam casos explícitos de teste na suíte.
