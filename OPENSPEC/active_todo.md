# active_todo — Memória Viva da Sessão

> Compacto (≤100 linhas). Documenta decisões arquiteturais, regras de negócio e restrições acordadas. Atualizado incrementalmente a cada iteração.

## Sessão: 2026-10-21 / Demanda: Redesign Tabs project_brain_framework.html

**Demanda**: Refatorar `project_brain_framework.html` para sistema de máx 3 tabs (Tab 1: Guia lúdico & 1ª conversa; Tab 2: Governança & Personas; Tab 3: Downloads com Enterprise/MIA em destaque vs Domestic).

### Decisões

- Tab 1: Como iniciar 1ª conversa passo a passo lúdico + comandos CLI/Chat (concluído).
- Tab 2: Governança, Trava Pré-Código e Matriz de Personas resumida (concluído).
- Tab 3: Downloads com card Enterprise (MIA-native) destacado vs Domestic (pessoal) (concluído).
- Máx 3 tabs, página 100% autocontida com suporte a tema dark/light e navegação por URL hash.

### Regras de Negócio Descobertas

- Trava pré-código cumprida: plano aprovado via [A] antes de alteração no HTML.
- Zero erros de sintaxe ou lint.

### Restrições Acordadas

- Zero commit/push automático.
- Respeitar AGENTS.md e mobile responsiveness.

---

_Limpe/arquive este arquivo ao encerrar a demanda (`/feed-brain`)._
