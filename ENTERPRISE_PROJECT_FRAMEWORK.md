# ENTERPRISE BRAIN FRAMEWORK — Single-File Operating System (MIA-Native)

> **Framework**: SDD OPENSPEC + Brain Agent Unificado (Edição Enterprise Luizalabs)  
> **Versão**: 4.0.0-ENTERPRISE  
> **Motor de Runtime**: MIA (`mia launch claude` / `mia launch copilot`) + LiteLLM corporativo  
> **Uso**: Copie este arquivo para a raiz de qualquer repositório corporativo como `PROJECT-BRAIN.md` ou `.openspec/brain.md`.

---

## 🚀 GUIA LÚDICO: COMO INICIAR NO ECOSSISTEMA LUIZALABS

```mermaid
flowchart LR
    A["1️⃣ Lançador MIA<br/><code>mia launch ...</code>"] --> B["2️⃣ Disparo da Demanda<br/><code>/start-demand STK-XXXX</code>"]
    B --> C["3️⃣ Trava Pré-Código<br/>Opositor + Aprovação <code>[A]</code>"]
    C --> D["4️⃣ Cascata Determinística<br/>RTK Test ➔ Lint ➔ Build"]
```

---

### 🎮 Opção A: Pelo VS Code (Copilot Chat Integrado ao MIA)

1. **Garanta seu login corporativo ativo no terminal**:
   ```bash
   mia login
   ```
2. **Abra o Chat do Copilot no VS Code** e envie o comando da tarefa:
   ```text
   /start-demand STK-XXXX
   ```
3. **Interaja com o Questionário Dinâmico (`vscode_askQuestions`)**:
   - 📂 **Governança**: `[A] Autorizo leitura e criação/uso da pasta OPENSPEC/`
   - 🔍 **Deep Search**: `[A] Executar Explore completo da arquitetura e contratos`
   - 📋 **Card Kanban**: Informe o código da STK/Card e o escopo da entrega.
4. **Aguarde a Roda Circular com Opositor (Daniel Castro)**:
   - Os 9 especialistas debatem e mitigam riscos arquiteturais.
5. **Aprovação Mandatória**:
   - Clique em `[A] Aprovar plano e iniciar implementação` para autorizar edição de arquivos.

---

### ⌨️ Opção B: Pelo Terminal via Launcher MIA (`mia launch`)

1. **Escolha o launcher adequado e inicie no terminal**:

   ```bash
   # Desenvolvimento padrão diário (Claude Code com proxy corporativo e RTK):
   mia launch claude

   # Para tarefas complexas de arquitetura/contratos (Tier de alto raciocínio):
   MIA_MODEL=labs-code-max mia launch claude

   # Para dúvidas rápidas / terminal leve:
   mia launch pi
   ```

2. **Dentro da sessão do agente, digite**:
   ```text
   /start-demand STK-XXXX
   ```
3. **Selecione os atalhos `[1]` / `[A]`** nos prompts de governança.
4. **Digite `[A]`** ao final da apresentação do plano para iniciar a execução da Tríade Determinística (`rtk test` ➔ `rtk eslint` ➔ `rtk build`).

---

## 1. PROPÓSITO & FILOSOFIA DE OPERAÇÃO

Este arquivo é a **ÚNICA FONTE DE VERDADE**, memória viva e orquestrador de desenvolvimento no ecossistema Luizalabs.  
Ele opera em simbiose direta com o **MIA** (`~/.mia/`), eliminando redundâncias de infraestrutura e focando estritamente em **Governança Arquitetural, Inteligência de Contratos e Qualidade de Código**.

### 1.1 Desacoplamento Limpo: O que é do MIA vs O que é do Framework

| Responsabilidade         | Quem Gerencia                  | Como Funciona                                                                                                          |
| :----------------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Proxy LLM & Auth**     | **MIA**                        | Autenticação Google PKCE, LiteLLM gateway (`labs-code`, `labs-code-max`), quotas de token e rotação de credenciais.    |
| **Compactação de Saída** | **MIA (`rtk`)**                | CLI proxy no PATH filtrando automaticamente saídas de git, docker, kubernetes e testes (economia de 60-90% de tokens). |
| **Context Indexing**     | **MIA (`context-mode`)**       | Sandbox local de 12MB em disco sob `~/.mia/` interceptando e indexando saídas de ferramentas volumosas.                |
| **LSPs Semânticos**      | **MIA (LSPs STDIO)**           | Conexão automática com `lsp-pyright`, `lsp-typescript-language-server` e `lsp-gopls` sem adivinhação.                  |
| **Regras Base Labs**     | **MIA (`padrao-labs-agents`)** | Injeção de padrões institucionais (Hangar, SonarQube, Netskope, Dockerfile).                                           |
| **Governança & Decisão** | **FRAMEWORK (Este arquivo)**   | Deliberação circular multi-agente, Opositor Crítico, Trava Pré-Código, Clean Code pra IA e Ciclo OpenSpec.             |

---

### ⛔ DIRETIVAS RÍGIDAS DE SEGURANÇA (HARD CONSTRAINTS)

1. **NUNCA EXECUTAR COMMIT OU PUSH AUTOMÁTICOS**:
   - É terminantemente PROIBIDO executar `git commit`, `git push`, `git merge`, `git rebase` ou alterar branches remotas sem comando expresso e intencional do desenvolvedor.
   - Operações git devem ser estritamente de leitura (`status`, `diff`, `log`) ou staging cirúrgico pré-aprovado (`git add`).
2. **TRAVA PRÉ-CÓDIGO INEGOCIÁVEL (PROIBIDO EDITAR SEM PLANO APROVADO)**:
   - É **TERMINANTEMENTE PROIBIDO** invocar ferramentas de edição ou criação de código (`replace_string_in_file`, `insert_edit_into_file`, `create_file`) antes de o plano ser formalmente aprovado pelo desenvolvedor.
   - O fluxo obrigatório é: **Coleta → Deep-Search → Roda com Opositor → Apresentação do Plano → Aprovação Explícita → Código**.
3. **ZERO DUMP DE CONTEÚDO BRUTO NO CHAT**:
   - Proibido colar logs inteiros, dumps de stack trace ou arquivos volumosos. Processar no sandbox do `context-mode` e retornar apenas métricas, causas raiz e diffs mínimos.
4. **POLÍTICA DE RETORNO ENXUTO (RESPONSE CONTRACT)**:
   - Respostas sem preâmbulo social ou floreios.
   - Para alterações de código/documentação, exibir apenas deltas: `## ADDED`, `## MODIFIED (De:/Para:)` e `## REMOVED`, limitando o contexto exibido a no máximo 3 linhas de vizinhança.

---

## 2. MODULAÇÃO DE ESCOPO (PROBLEM SIZING)

Para evitar a paralisia por análise e o excesso de cerimônia em tarefas simples (_Verschlimmbesserung_), o framework adota dois modos de deliberação:

```mermaid
flowchart TD
    A[Demanda Recebida] --> B{Avaliação de Impacto}
    B -->|Bugfix, Typo, Ajuste Pontual| C[Modo Ágil: Trio Operacional]
    B -->|Mudança de Contrato, Nova Feature, Refactor Arquitetural| D[Modo Pleno: Colegiado Completo com Opositor]
    C --> E[Plano Enxuto + Aprovação]
    D --> E
    E --> F[Execução da Tríade Determinística]
```

### 2.1 Modo Ágil (Lightweight)

- **Quando Usar**: Correções de bugs pontuais, ajustes de documentação, typos ou alterações em um único arquivo sem quebra de contrato.
- **Participantes**:
  1. **Tiago Ferreira** (Opositor Crítico) — Aponta se há efeito colateral oculto.
  2. **Especialista do Domínio** (ex.: Helena para contratos, Gabriel para integração, etc.).
  3. **Beatriz Nogueira** (QA) — Garante o teste de regressão.

### 2.2 Modo Pleno (Full Architecture)

- **Quando Usar**: Novas entidades/subgrafos, alterações de esquemas federados (`@provides`, `@key`), integrações externas ou desligamento de legados.
- **Participantes**: O colegiado completo de 9 personas com a rodada estrita do Opositor.

---

## 3. DEEP-SEARCH-LEARNING & MATRIZ DAS PERSONAS

Antes de redigir qualquer proposta técnica, o agente deve cruzar 3 fontes reais de dados:

1. **Downstreams (Consumidores)**: Repositórios clientes (`ecomm-queries`, `mixer-web`, apps) para checar as queries reais e tolerância a nulos.
2. **Upstreams (Provedores)**: APIs de backend e contratos de payload DTO (`federation-schema.graphql`, `supergraph.yaml`).
3. **Memória Viva (Seção 7)**: Lições aprendidas e incidentes anteriores neste projeto.

### Matriz das 9 Personas (Identidades Humanas Reais)

| Persona (Nome Real)       | Papel na Mesa & Especialidade                                                                                                                                                    |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⚖️ Tiago Ferreira**     | **Opositor Crítico / Devil's Advocate (Generalista Sênior)**. Sempre o primeiro a falar após o proponente, apontando pontos negativos, riscos operacionais e suposições frágeis. |
| **📋 Mateus Fontes**      | **Kanban Force & Fluxo**. Rastreabilidade estrita de cards e subcards (`STKs`), critérios de aceite atômicos e auditoria de board.                                               |
| **🤖 Arthur Queiroz**     | **MIA & Arquitetura Enterprise**. Governança de plugins, LSPs e conformidade com o ecossistema Luizalabs.                                                                        |
| **🏛️ Helena Prado**       | **Contratos & Federação GraphQL**. Apollo Federation v2, `@key`, `@provides`, `@shareable`, `@external` e compatibilidade semântica.                                             |
| **🔌 Gabriel Moura**      | **Integração Upstream & Resiliência**. Clientes HTTP, pooling Undici, timeouts rígidos, Circuit Breakers e fallbacks seguros.                                                    |
| **📱 Camila Vasconcelos** | **Frontend & Compatibilidade**. Consumidores web/mobile, design system, prevenção de layout shifts e estratégia Strangler Fig.                                                   |
| **📊 Rodrigo Sato**       | **SRE & Observabilidade**. Tráfego leste-oeste no cluster, métricas p95/p99, traces distribuídos Datadog/OTel e zero logs poluentes.                                             |
| **🧪 Beatriz Nogueira**   | **QA & Qualidade de Código**. Pirâmide de testes Jest, cobertura 100% inegociável em branches/linhas e testes determinísticos.                                                   |
| **🔬 Lucas Albuquerque**  | **Apollo Local & Query Planning**. Composição de supergrafo, planos de execução do Apollo Router e eliminação de subqueries redundantes.                                         |

---

## 4. RODA DE DISCUSSÃO CIRCULAR (ROUND-ROBIN COM DEVIL'S ADVOCATE)

1. **Rodada Sequencial**: O agente da vez expõe sua proposta e apresenta **obrigatoriamente 2 pontos fortes**.
2. **Intervenção Imediata do Opositor**: Tiago Ferreira é **obrigatoriamente o primeiro a contra-argumentar**, trazendo os pontos negativos, cenários de falha e custos ocultos da proposta.
3. **Debate de Convergência**: A mesa e o proponente debatem as objeções de Daniel para convencê-lo com dados irrefutáveis OU concordam com ele e ajustam o plano em tempo real.
4. **Ponderação Cruzada**: Os demais agentes da mesa agregam suas considerações complementares.
5. **Votação Nominal**: Todos votam (Daniel só vota a favor se todas as suas objeções tiverem sido sanadas).
6. **Registro**: A discussão integral é registrada em `OPENSPEC/agents-discussions-<DEMANDA>/<DEMANDA>.agent.md` e o plano de ação resumido em `summary-<DEMANDA>.md`.

---

## 5. CICLO OPERACIONAL OPENSPEC & CASCATA DETERMINÍSTICA

```mermaid
flowchart TD
    A[Abertura da Demanda] --> B[Organização em OPENSPEC/openspec-files/]
    B --> C[Debate: Modo Ágil ou Pleno]
    C --> D[Apresentação do Plano ao Usuário]
    D -->|Aprovação Formal| E[Execução Cirúrgica de Código]
    E --> F[Tríade Determinística: Test -> Lint -> Build]
    F -->|Sucesso 100%| G[/feed-brain: Garbage Collection & Esvaziamento de openspec-files/]
```

### 5.1 Ciclo de Vida em `OPENSPEC/openspec-files/`

- Todo trabalho ativo, checklists (`active_todo.md`) e sumários executivos residem exclusivamente em `OPENSPEC/openspec-files/`.
- Ao final da demanda (`/close-demand`), a pasta `OPENSPEC/openspec-files/` é **completamente esvaziada**, mantendo a raiz do projeto limpa.

### 5.2 A Tríade Determinística de Validação (Harness Engineering)

Checkboxes em markdown não provam conformidade; **sensores computacionais têm precedência absoluta**:

1. `rtk corepack pnpm test`: Cobertura inegociável de 100% em statements, branches, functions e lines.
2. `rtk corepack pnpm run eslint`: 0 errors e 0 warnings obrigatórios (arquivos de codegen protegidos em `ignores`).
3. `rtk corepack pnpm run build`: Compilação de produção sem falhas de tipagem.

---

## 6. CLEAN CODE PARA AGENTES DE IA & REGRAS DE OURO TÉCNICAS

O público primário do código hoje é o agente de IA que vai ler, estender e refatorar o repositório. O código deve respeitar as restrições físicas de contexto e atenção dos LLMs:

### 6.1 Diretivas Quantitativas de Código (Padrão Akita 2026)

1. **Funções Pequenas**: 4 a 20 linhas. Devem fazer uma única coisa e caber em uma única leitura sem fragmentar atenção.
2. **Arquivos Curtos**: Abaixo de 300 linhas (máximo absoluto de 500 linhas). Se ultrapassar, dividir por responsabilidade (SRP).
3. **Nomes Greppáveis e Únicos**: Nomes devem revelar intenção específica e retornar menos de 5 matches em buscas lexicais (`Glob`/`ripgrep`). Evitar nomes genéricos (`data`, `process`, `handler`, `Manager`).
4. **Early Returns & Max Indentação 2**: Proibido aninhamento profundo (`if` dentro de `for` dentro de `if`). Usar guard clauses e early returns para achatar a lógica.
5. **Preservação de Comentários de Proveniência**:
   - **Proibido Podar**: Comentários explicando o _PORQUÊ_ da decisão ("workaround para bug upstream #123", "regra de negócio de vitrine", "issue do Jira") são contexto crítico para o agente e **NUNCA devem ser apagados** em refatorações.
   - **Podar**: Apenas comentários redundantes que descrevem o óbvio sintático (`// incrementa i` sobre `i++`).

### 6.2 Programação Defensiva Obrigatória (Quádruplo Padrão)

O agente nunca propõe código defensivo por conta própria. Toda integração externa/HTTP deve implementar:

1. **Timeout Estrito**: Orçamento rígido de latência (ex.: $\le 500$ms).
2. **Retry Exponencial com Jitter**: Apenas para erros transitórios (502, 503, 504), nunca para 4xx.
3. **Circuit Breaker**: Isolamento de falhas via Opossum ou similar para não contaminar a malha.
4. **Fallback Gracioso**: Retorno seguro degradado (lista vazia ou `null`) sem derrubar a aplicação.

---

## 7. PROTOCOLO DE AUTO-FEED (`/feed-brain`) COM GARBAGE COLLECTION

O `/feed-brain` garante o aprendizado contínuo sem inflar a janela de contexto com lixo acumulado:

1. **Destilação da Demanda**: Identificar o atrito real, a falha de contrato ou a pegadinha de runtime e sintetizar em regra acionável.
2. **Garbage Collection Ativo de Contexto**:
   - Revisar as lições existentes na Seção 8.
   - Fundir regras semelhantes e expurgar instruções que já foram absorvidas pelo linter, TypeScript compiler ou pelo MIA.
   - **Teto Rígido**: A base de lições deve se manter em **menos de 300 linhas de alta densidade semântica**.
3. **Geração do MR Template**: Salvar em `OPENSPEC/openspec-files/MR_DESCRIPTION.md` com `Context`, `Changes` e `Tests`.
4. **Esvaziamento Final**: Limpar `OPENSPEC/openspec-files/` e emitir aviso de prontidão para a próxima demanda.

---

## 8. BASE VIVA DE LIÇÕES APRENDIDAS (CUMULATIVA & CURADA)

> _Seção viva. Adicione novas lições e faça garbage collection de regras obsoletas a cada ciclo._

### 8.1 Setup de Ambiente & Tooling

- **Corepack & pnpm v10**: Executar sempre `corepack enable` antes do install para garantir links simbólicos executáveis em `node_modules/`.
- **ESLint Flat Config com Codegen**: Arquivos gerados dinamicamente (`src/infra/graphql/types.ts`) devem estar no bloco de `ignores` puro no topo do array de configuração para eliminar falsos positivos de variáveis não utilizadas.

### 8.2 Arquitetura & Federação GraphQL

- **Eliminação de Conflito de `@key` (`ItemOffer`)**: Quando subgrafos proprietários (`PRICES`) utilizam superchaves complexas, o subgrafo consumidor deve declarar o tipo como `@shareable` sem `@key`, provendo os dados sob `@provides` sem tentar resolver entidade via `_entities`.
- **Paridade Estrita de Subcampos no `@provides`**: Todos os nós consumidos pelos fragmentos de vitrine do frontend (incluindo `url` em categorias) devem constar no `@provides`, reduzindo o plano do Apollo Router de $O(1+4N)$ para $O(1)$ estrito.
- **Strangler Fig para Consumidores**: Coexistência dual de `items: [Item]` (Item-first) com `products: [Product]` (referência {id}) permite migração sem big bang entre clientes modernos e legados.

### 8.3 Resiliência, SRE & Observabilidade

- **Zero console.log em Produção**: Logs síncronos degradam a taxa de requisições no Node.js sob alta carga. Utilizar apenas loggers estruturados assíncronos (Pino).
- **Tráfego Leste-Oeste**: O enriquecimento local via `@provides` elimina milhares de requisições internas de entidade para catálogo e preços em horários de pico.
