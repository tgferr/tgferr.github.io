# ENTERPRISE BRAIN FRAMEWORK — Single-File Operating System (MIA-Native)

> **Framework**: SDD OPENSPEC + Brain Agent Unificado (Edição Enterprise Luizalabs)  
> **Versão**: 4.0.0-ENTERPRISE  
> **Motor de Runtime**: MIA (`mia launch claude` / `mia launch copilot`) + LiteLLM corporativo  
> **Uso**: Instância viva deste repositório (`IA Tools Hub`). O template genérico publicado para download é `ENTERPRISE_PROJECT_FRAMEWORK.md` — **não** editar aquele arquivo.  
> **Estado de Bootstrapping**: `[X] ESPECIALIZADO_NO_REPOSITORIO (IA Tools Hub — Jekyll/GitHub Pages estático)`

> **Divergência consciente**: este arquivo **não** é mais um symlink para `ENTERPRISE_PROJECT_FRAMEWORK.md`. Ele é a instância especializada (memória viva §8 + mapa §9). O framework-fonte permanece genérico para distribuição.

---

## ⚡ PROTOCOLO ZERO: BOOTSTRAPPING & AUTO-SOBREESCRITA NO PROJETO-ALVO

Este arquivo inicia como um **Metamodelo Neutro e Universal**, capaz de gerenciar repositórios em qualquer linguagem (Python, Go, Node.js/TypeScript, Java/Kotlin, Rust, Android, etc.).

### Como Funciona a Auto-Especialização do BRAIN Central:

```mermaid
flowchart TD
    A["Template Baixado no Repo<br/><code>PROJECT-BRAIN.md</code>"] --> B["Disparo Inicial<br/><code>/start-demand</code> ou <code>/init-brain</code>"]
    B --> C["Deep Explore Automático<br/>Linguagens, Frameworks, DBs, Testes, Linters"]
    C --> D["Auto-Sobrescrita do BRAIN Central<br/>Grava o Mapa Real do Projeto em <code>PROJECT-BRAIN.md</code>"]
    C --> E["Síntese e Persistência de Subagentes<br/>Salva em <code>.agents/</code> e <code>.claude/agents/</code>"]
    D --> F["Estado Ativo: <code>[X] ESPECIALIZADO</code><br/>Pronto para Operação Contínua"]
    E --> F
```

1. **Gatilho de Bootstrapping**: Ao receber `/init-brain` ou o primeiro `/start-demand <CARD>`, o agente checa o cabeçalho. Se estiver como `[ ] TEMPLATE_BASE_AGNOSTICO`:
2. **Varredura da Stack (Deep Explore)**:
   - Detecta manifestos (`package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, `go.mod`, `pom.xml`, `build.gradle`, `Makefile`, `Dockerfile`).
   - Identifica suites de teste (`pytest`, `jest`, `vitest`, `go test`, `cargo test`, `junit`), linters (`eslint`, `ruff`, `flake8`, `golangci-lint`) e build scripts.
   - Mapeia arquitetura (pastas de entrada, regras de negócio/domínio, persistência/banco, rotas/endpoints, mensageria/filas, clientes HTTP).
3. **Auto-Sobrescrita do Próprio Arquivo (`PROJECT-BRAIN.md`)**:
   - Atualiza o cabeçalho para `[X] ESPECIALIZADO_NO_REPOSITORIO (<Nome do Projeto> - <Stack>)`.
   - Preenche o **Mapa Arquitetural do Repositório (Seção 9)** com a estrutura e convenções reais descobertas.
   - Especializa a **Tríade Determinística (Seção 5.2)** com os comandos de terminal exatos do repositório.
   - Limpa o histórico de projetos anteriores da **Seção 8 (Lições Aprendidas)**, mantendo-a pronta para registrar a evolução viva daquele código.
4. **Persistência Física dos Subagentes Especialistas**:
   - Gera e grava os arquivos de persona dedicados à stack do projeto sob:
     - Formato portável (Copilot/Cursor/Aider): `.agents/<persona-name>.agent.md`
     - Formato executável Claude Code: `.claude/agents/<persona-name>.md`
   - O `PROJECT-BRAIN.md` atua como **Agente Central Orquestrador (Maestro)**, coordenando esses especialistas nas fases de debate e execução.

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
3. **Interaja com o Questionário Dinâmico & Deep Explore (`vscode_askQuestions`)**:
   - 📂 **Governança**: `[A] Autorizo leitura e criação/uso da pasta OPENSPEC/`
   - 🔍 **Deep Search**: `[A] Executar Explore completo da arquitetura e contratos`
   - 💬 **Perguntas Dinâmicas Contínuas**: O agente conduz perguntas dinâmicas (sem travar o chat) para investigar a fundo o repositório e **criar dinamicamente os especialistas dedicados à stack do projeto**.
   - 📋 **Card Kanban**: Informe o código da STK/Card e o escopo da entrega.
4. **Aguarde a Roda Circular com Opositor**:
   - Os especialistas dedicados e a base de governança debatem e mitigam riscos arquiteturais.
5. **Aprovação Mandatória**:
   - Clique em `[A] Aprovar plano e iniciar implementação` para autorizar edição de arquivos.

---

### ⌨️ Opção B: Pelo Terminal via Launcher MIA (`mia launch`)

1. **Escolha o launcher adequado e inicie no terminal**:

   ```bash
   # Desenvolvimento padrão diário (Claude Code com proxy corporativo e RTK):
   mia launch claude

   # Assistente leve com busca corporativa ativa (Web-Search):
   mia launch codex

   # CLI oficial do Copilot com gestão centralizada de cotas:
   mia launch copilot

   # Para tarefas complexas de arquitetura/contratos (Tier de alto raciocínio):
   MIA_MODEL=labs-code-max mia launch claude

   # Para tarefas mecânicas, commits rápidos ou formatação (Tier super econômico):
   MIA_MODEL=labs-code-mini mia launch claude

   # Para dúvidas rápidas / terminal leve sem gastar cota:
   mia launch pi
   # ou:
   mia launch omp
   ```

   > 💡 **Dica de Governança**: Se tiver dúvidas sobre configuração de quotas, LSPs ou bloqueios Netskope/SSL, consulte o agente especialista **🤖 Logan (`brain-mia-tooling`)**. Comandos úteis: `mia doctor` (diagnóstico), `mia quota` (consumo), `mia tools list` (componentes).

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
   - É **TERMINANTEMENTE PROIBIDO** invocar ferramentas de edição ou criação de código antes de o plano ser formalmente aprovado pelo desenvolvedor.
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
- **Participantes**: Opositor Crítico (⚖️ Tiago Ferreira neste repo) + Especialista do Domínio + QA.

### 2.2 Modo Pleno (Full Architecture)

- **Quando Usar**: Novas entidades, alterações de esquema, integrações externas ou desligamento de legados.
- **Participantes**: O colegiado completo de personas com a rodada estrita do Opositor e especialistas dedicados sintetizados para o projeto.

---

## 3. DEEP-SEARCH-LEARNING & MATRIZ DAS PERSONAS

### 3.1 Explore Inicial Obrigatório & Criação Dinâmica de Especialistas

Ao receber o comando `/start-demand <CARD>`, `/init-brain` ou `iniciar <CARD>`, o agente **NÃO pode assumir um conjunto estático e genérico de regras**. O protocolo manda:

1. **Deep Explore no Repositório**: Mapear manifestos de dependência, contratos de interface, banco de dados, configs de ambiente e estrutura de diretórios.
2. **Interação Dinâmica com o Desenvolvedor**: Conduzir perguntas interativas (no VS Code via `vscode_askQuestions`; no CLI via menus dinâmicos), **sem travar a sessão**, refinando o escopo.
3. **Síntese de Especialistas Dedicados do Projeto**: instanciar e persistir agentes especialistas customizados para aquele repositório (ver §9 e `.claude/agents/`).

Antes de redigir qualquer proposta técnica, o agente deve cruzar 3 fontes reais de dados:

1. **Downstreams (Consumidores)**: quem consome os contratos alterados.
2. **Upstreams (Provedores)**: APIs externas, filas, tópicos e bancos provedores.
3. **Memória Viva (Seção 8)**: lições aprendidas e incidentes anteriores deste repositório.

### 3.2 Matriz de Personas (Governança Base + Especialistas Sintetizados)

#### 🏛️ A. Núcleo Imutável de Governança Institucional

| Persona (Nome) | Papel na Mesa & Especialidade |
| :------------- | :---------------------------- |
| **⚖️ Tiago Ferreira** | **Opositor Crítico / Devil's Advocate**. Sempre o primeiro a falar após o proponente, apontando riscos operacionais, quebra de contratos e suposições frágeis. |
| **📋 Mason** | **Kanban Force & Fluxo**. Rastreabilidade de cards (`STKs`) e critérios de aceite atômicos. |
| **🤖 Logan** | **MIA & Arquitetura Enterprise**. Plugins, LSPs, Netskope/SSL e conformidade Luizalabs. |
| **🧪 Sarah** | **QA & Qualidade**. Pirâmide de testes, cobertura inegociável, testes determinísticos. |

#### 🧬 B. Especialistas de Domínio Sintetizados neste Repositório

Salvos em `.agents/<persona>.agent.md` (portável) e `.claude/agents/<persona>.md` (Claude Code):

| Persona | Papel adaptado à stack real (estático) |
| :------ | :------------------------------------- |
| **🤖 MIA & Tooling** | MIA CLI, LLMs, plugins/MCPs, build Jekyll local (Ruby ausente). |
| **🏛️ Arquiteto de Contratos** | Contratos de **interface web**: hooks de DOM, classes CSS, âncoras, `download`, `_config.yml`. |
| **🔌 Engenheiro de Integração** | **CDNs** (Font Awesome/Google Fonts), SRI, fallback de fontes, pipeline Jekyll. |
| **📱 Compatibilidade** | Browsers, viewports, a11y, tema claro/escuro, degradação sem JS. |
| **📊 SRE & Observabilidade** | Core Web Vitals (LCP/CLS/INP), peso de assets, higiene de console. |
| **🧪 QA & Qualidade** | **Tríade adaptada**: `node --check`, markup por parser, links/âncoras, YAML. |

---

## 4. RODA DE DISCUSSÃO CIRCULAR (ROUND-ROBIN COM DEVIL'S ADVOCATE)

1. **Rodada Sequencial**: o agente da vez expõe sua proposta e apresenta **obrigatoriamente 2 pontos fortes**.
2. **Intervenção Imediata do Opositor**: ⚖️ Tiago Ferreira é **obrigatoriamente o primeiro a contra-argumentar** (pontos negativos, cenários de falha, custos ocultos).
3. **Debate de Convergência**: a mesa e o proponente debatem as objeções para convencê-lo com dados irrefutáveis OU ajustam o plano.
4. **Ponderação Cruzada**: os demais agentes agregam considerações complementares.
5. **Votação Nominal**: o Opositor só vota a favor se todas as suas objeções tiverem sido sanadas.
6. **Registro**: discussão em `OPENSPEC/agents-discussions-<DEMANDA>/<DEMANDA>.agent.md` e plano em `summary-<DEMANDA>.md`.

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
- Ao final da demanda (`/close-demand`), a pasta `OPENSPEC/openspec-files/` é **completamente esvaziada**.

### 5.2 A Tríade Determinística de Validação (Harness Engineering) — **ESPECIALIZADA**

Checkboxes em markdown não provam conformidade; **sensores computacionais têm precedência absoluta**. Neste repositório (sem runtime de aplicação, sem Ruby/Jekyll no host):

1. **Sintaxe JS**: `rtk node --check js/main.js js/modals.js` — 0 erros (e `new Function(<script>)` para scripts inline).
2. **Markup & Links**: HTML bem-formado por parser (`html.parser`), tags pareadas, `id` único, `href`/`download` apontando para arquivos existentes.
3. **YAML**: frontmatter dos agentes + `_config.yml` parseáveis (`yaml.safe_load`).

> **Limite declarado**: o build Jekyll (`bundle exec jekyll serve`) **não** é validável no host (Ruby/Bundler ausentes). Declarar sempre, nunca esconder.

---

## 6. CLEAN CODE PARA AGENTES DE IA & REGRAS DE OURO TÉCNICAS

O público primário do código hoje é o agente de IA que vai ler, estender e refatorar o repositório.

### 6.1 Diretivas Quantitativas de Código (Padrão Akita 2026)

1. **Funções Pequenas**: 4 a 20 linhas; uma única coisa.
2. **Arquivos Curtos**: abaixo de 300 linhas (máximo 500). Dividir por responsabilidade (SRP).
3. **Nomes Greppáveis e Únicos**: revelar intenção; evitar genéricos (`data`, `process`, `handler`, `Manager`).
4. **Early Returns & Max Indentação 2**: proibido aninhamento profundo; usar guard clauses.
5. **Preservação de Comentários de Proveniência**:
   - **Proibido Podar**: comentários do _PORQUÊ_ ("workaround para bug upstream #123", "regra de negócio") são contexto crítico e **NUNCA** devem ser apagados.
   - **Podar**: apenas comentários redundantes do óbvio sintático.

### 6.2 Programação Defensiva Obrigatória (Quádruplo Padrão)

Toda integração externa/HTTP deve implementar:

1. **Timeout Estrito**: orçamento rígido de latência.
2. **Retry Exponencial com Jitter**: apenas para erros transitórios (502/503/504), nunca 4xx.
3. **Circuit Breaker**: isolamento de falhas.
4. **Fallback Gracioso**: retorno seguro degradado sem derrubar a aplicação.

---

## 7. PROTOCOLO DE AUTO-FEED (`/feed-brain`) COM GARBAGE COLLECTION

1. **Destilação da Demanda**: identificar o atrito real e sintetizar em regra acionável.
2. **Garbage Collection Ativo de Contexto**: revisar a Seção 8, fundir regras semelhantes e expurgar o que já foi absorvido por linters/compiladores/MIA. **Teto Rígido**: manter a base em **menos de 300 linhas**.
3. **Geração do MR Template**: salvar em `OPENSPEC/openspec-files/MR_DESCRIPTION.md` com `Context`, `Changes` e `Tests`.
4. **Esvaziamento Final**: limpar `OPENSPEC/openspec-files/` e emitir aviso de prontidão.

> **Destino deste feed**: este arquivo (`PROJECT-BRAIN.md`). O `ENTERPRISE_PROJECT_FRAMEWORK.md` é o **template publicado** e deve permanecer **intacto**.

---

## 8. BASE VIVA DE LIÇÕES APRENDIDAS (CUMULATIVA & CURADA)

> _Seção viva. Acumula as lições e padrões aprendidos **exclusivamente neste repositório**. Novos itens entram via `/feed-brain`._

### 8.1 Setup de Ambiente, Tooling & Segurança

- **Filtros de Saída de Terminal via RTK**: executar comandos de console precedidos por `rtk` para comprimir saídas e poupar 60-90% de contexto.
- **Netskope e Certificados Corporativos**: variáveis CA (`NODE_EXTRA_CA_CERTS`, `REQUESTS_CA_BUNDLE`) só em caso de falha de validação SSL.
- **Segurança de Credenciais em Requisições**: jamais passe tokens/`client_secret` em query parameters; use o corpo (`data`/`json`) com `POST`.
- **Host sem Ruby/Jekyll**: validar JS com `node --check`/`new Function` e HTML com parser (`html.parser`). Contagem de tags por regex dá **falso-positivo** — comparar sempre com o `HEAD` (`git show HEAD:<arq>`) para separar erros **pré-existentes** dos **introduzidos**.

### 8.2 Arquitetura, Contratos & Domínio

- **GitHub Pages não é backend**: hospedagem estática **não** executa server-side nem grava arquivos. Estado **compartilhado** (contadores de visita/presença) exige serviço externo com estado. Service Worker **não** substitui — é isolado por navegador.
- **Páginas standalone autocontidas**: `index.html`, `gem_*.html` e `project_brain_framework.html` trazem `<style>`/`<script>` inline e **não** dependem de `css/style.css`/`js/*.js` (só `copilot_template.html` usa). Alterações nelas devem ser autocontidas.
- **Metamodelos são produto publicado**: `ENTERPRISE_PROJECT_FRAMEWORK.md`/`DOMESTICUSER_PROJECT_FRAMEWORK.md` são baixados como `PROJECT-BRAIN.md`; **não** especializar/sobrescrever. A instância viva deste repo é **este** `PROJECT-BRAIN.md` (arquivo real, não symlink).
- **Evolução de Contratos sem Breaking Changes**: em mudanças de interface, campos novos opcionais e depreciados mantidos até migração total (coexistência dual / Strangler Fig).

### 8.3 Resiliência, SRE & Observabilidade

- **Contador sem backend (site estático)**: `abacus.jasoncameron.dev` — `/hit` incrementa, `/get` é **read-only**, CORS `*`, auto-cria a chave (sem cadastro). Preferir `fetch` a SDKs pesados quando o requisito é leve (protege o LCP).
- **Nunca confie sem verificar**: comprovar que o endpoint de **leitura é read-only** (repetir `GET` e comparar valores) antes de usá-lo para exibir — evita inflar a métrica a cada pageview.
- **Contrato de dados com fallback**: exibir `—` quando o dado não existe/está indisponível; **nunca** `0`/`undefined`/`NaN`. Integrações externas devem falhar em silêncio (a página nunca quebra).
- **Higiene de console**: proibido `console.log`/`print` de depuração em produção; erros tratados, nunca silenciados. Zero PII/IP interno em markup, URLs ou comentários.

---

## 9. MAPA ARQUITETURAL DO REPOSITÓRIO (ESPECIALIZADO VIA BOOTSTRAPPING)

- **Nome do Projeto / Módulo**: `IA Tools Hub` (site pessoal de Tiago Ferreira)
- **Stack Tecnológica Principal**: HTML5 + CSS3 + **JavaScript vanilla** (sem framework); **Jekyll** (GitHub Pages); sem runtime de servidor.
- **Padrão de Arquitetura**: Site estático multi-página com **hub SPA-like** (`showPage` em `index.html`) + páginas standalone autocontidas.
- **Comunicação, Persistência & Mensageria**: apenas `fetch` para CDNs e para o contador externo (`abacus`). **Sem banco** próprio. Download de artefatos via `<a download>`.
- **Tríade Determinística Real**:
  - Testes: `rtk node --check js/main.js js/modals.js` + `new Function(<script>)` para inline
  - Linter: markup por parser (`html.parser`), links/âncoras, frontmatter YAML
  - Build: **N/A** — Jekyll é gerado pelo GitHub Pages (Ruby ausente no host)
- **Estrutura de Pastas Padrão**:
  ```
  tgferr.github.io/
  ├── index.html                    # Hub SPA (navegação showPage) + cards
  ├── copilot_template.html         # Única página que usa css/style.css + js/*.js
  ├── gem_gemini_QA.html            # Autocontida
  ├── gem_gemini_CALL_SUMMARIZER.html # Autocontida
  ├── project_brain_framework.html  # Autocontida (tabs, Mermaid, downloads)
  ├── ENTERPRISE_PROJECT_FRAMEWORK.md    # Template publicado (INTACTO)
  ├── DOMESTICUSER_PROJECT_FRAMEWORK.md  # Template publicado
  ├── PROJECT-BRAIN.md              # ESTE arquivo — instância viva especializada
  ├── AGENTS.md                     # Protocolo agêntico do repo
  ├── CLAUDE.md → .github/copilot-instructions.md
  ├── .claude/agents/ · .agents/    # 6 personas (Claude Code + portáveis)
  ├── OPENSPEC/                     # Fluxo OpenSpec (README, active_todo, openspec-files/)
  ├── Checklist/                    # Template de checklist por demanda
  ├── css/style.css · js/main.js · js/modals.js
  └── _config.yml                   # Config Jekyll
  ```