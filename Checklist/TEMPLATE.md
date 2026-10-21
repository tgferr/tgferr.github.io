# Checklist de Demanda — (código do card)

> Enterprise Brain Framework v4.0.0 — fluxo `/start-demand` → Roda (Opositor) → `[A]` → `/execute` → `/feed-brain`.

## 1. Coleta de Requisitos
- [ ] Código do card e objetivo registrados.
- [ ] Links/contexto anexados.
- [ ] Escopo e limites definidos (sem over-engineering).

## 2. Deep-Search / Explore
- [ ] Downstreams (consumidores) e upstreams (provedores) varridos.
- [ ] Memória viva (Seção 8 do BRAIN) consultada para lições relacionadas.

## 3. Roda com Opositor + Plano `[A]`
- [ ] Proposta com 2 pontos fortes; Opositor Crítico (Tiago Ferreira) contra-argumenta primeiro.
- [ ] Plano conciso apresentado (deltas esperados).
- [ ] **PARADA OBRIGATÓRIA**: aguardado `[A] Aprovar plano` antes de editar arquivos.

## 4. Execução
- [ ] Implementação cirúrgica (somente escopo).
- [ ] Validação local servida (Jekyll / http.server).
- [ ] Sem `console.log`/debug soltos, sem segredos.

## 5. Feed-brain / Close
- [ ] Lições destiladas e persistidas na Seção 8 (teto <300 linhas).
- [ ] `OPENSPEC/openspec-files/MR_DESCRIPTION.md` preenchido (Context/Changes/Tests).
- [ ] `execution-summary.md` atualizado.
- [ ] `active_todo.md` limpo/arquivado.
- [ ] Pergunta final ao dev sobre próximos passos.

---
*Crie uma cópia por demanda: `Checklist/<CARD>.md`.*