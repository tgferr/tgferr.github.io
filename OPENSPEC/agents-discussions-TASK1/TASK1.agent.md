# Roda de Discussão — TASK1 (destilada)

> Demanda: contador discreto de **downloads** (ícone de olho + nº) no topo-direito e abaixo dos botões.
> Modo: **Ágil**. Opositor abre o debate (§2.1/§4 do BRAIN). Registro destilado — sem transcrição bruta.

## Convocados
⚖️ Tiago Ferreira (Opositor) · 🏛️ Contratos · 🔌 Integração · 📱 Compatibilidade · 📊 SRE · 🧪 QA · 🤖 MIA/Tooling

## Fatos do Deep-Search (que ancoraram o debate)
1. GitHub Pages é **estático**: não roda API Node, não grava arquivos. "JSON como DB" no próprio repo é **impossível** (cliente não escreve no servidor).
2. Já existe contador **ClustrMaps** (`index.html`) — risco de duplicidade.
3. Downloads são `<a download>` **direto** → o site não é notificado do clique.

## Objeções do Opositor (resolvidas)
| Objeção | Resolução adotada |
| :-- | :-- |
| R2 "online agora" é impossível sem backend | **Escopo cortado por decisão do dev**: entrega-se apenas R3 (downloads). R2 fica fora. |
| "JSON no repo como DB" não grava | Trocado por **contador hospedado** (abacus), que persiste fora do Pages. |
| Clique ≠ download concluído | Rótulo honesto: conta **cliques de download**, não transferências completas. |
| Risco de inflar contagem | Verificado: `GET` é **read-only**; só `/hit` incrementa. |
| Peso/performance (LCP) | **Zero SDK** — apenas `fetch` assíncrono após o paint; fallback `—`. |
| Privacidade/LGPD | Sem cookies, sem PII; só um par chave→inteiro. |

## Decisões de arquitetura
- **Sem backend, sem conta**: contador hospedado **abacus.jasoncameron.dev** (`hit`/`get`, CORS `*`, auto-cria a chave).
- **Escopo entregue**: R1 (ícone de olho no header) + R3/R4 (total e por-botão). R2 (online agora) **fora**.
- **Por botão**: chaves `enterprise` e `domestic`; header soma os dois.
- **Service Worker**: descartado (complexidade > benefício para v1).

## Votação
Convergência. Opositor votou **a favor** da variante com rótulo honesto + fallback `—` + carga assíncrona + escopo cortado para R3. Sem objeções pendentes.