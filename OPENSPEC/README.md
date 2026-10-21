# OPENSPEC — Fluxo do Enterprise Brain Framework neste repositório

> **Framework**: SDD OPENSPEC + Enterprise Brain Framework (`PROJECT-BRAIN.md` → symlink para `ENTERPRISE_PROJECT_FRAMEWORK.md`).
> **Versão**: 4.0.0-ENTERPRISE (MIA-Native Luizalabs).

Este diretório centraliza a esteira de demandas do repositório: memória de sessão, encerramento de entregas e templates de documentação.

## Estrutura

```
OPENSPEC/
├── README.md                       # Este guia
├── active_todo.md                  # Memória viva da sessão (compacta, ≤100 linhas)
└── openspec-files/
    ├── MR_DESCRIPTION.md           # Template de entrega (Context / Changes / Tests)
    └── execution-summary.md        # Histórico de execução acumulado
```

> As personas e subagentes (6) vivem em `.claude/agents/` (Claude Code) e `.agents/` (portáteis). O `Checklist/` fica na raiz com o template por demanda.

## Ciclo de uma demanda

1. **Coleta** — colete requisitos do card (código, objetivo, links). Crie a pasta/checklist em `Checklist/`.
2. **Deep-Search / Explore** — varra downstreams/upstreams e consulte a memória viva (§8 do BRAIN).
3. **Roda com Opositor** — Tiago Ferreira (Opositor Crítico) é o primeiro a contra-argumentar; Modo Ágil vs Modo Pleno (§2).
4. **Plano + `[A]`** — apresente plano conciso e **PARE** até aprovação explícita. Nada de código antes.
5. **Execute** — implementação cirúrgica (deltas), validação local.
6. **Feed-brain / Close** — destile lições na Seção 8 do `ENTERPRISE_PROJECT_FRAMEWORK.md`, preencha `MR_DESCRIPTION.md`, atualize `execution-summary.md`, limpe `active_todo.md`.

## Comandos

```bash
# Acionar o Brain (MIA / Claude Code CLI)
iniciar demanda <CODIGO_CARD> seguindo @PROJECT-BRAIN.md
# ou
/start-demand <CODIGO_CARD_OU_NOME>
```

## Regras

- **Imutabilidade da Seção 8** (§5.1): lições válidas nunca são deletadas; só corrigidas/complementadas.
- **Zero dump bruto**: conversas/debates nunca são transcritos no BRAIN; apenas regras acionáveis.
- **Proibido commit/push** sem instrução expressa (hard constraint global).