---
nome: MEC Lineup
ordem: 4
inicio: 2026-09
linguagem: TypeScript
stack: [TypeScript, React, Vite, Tailwind CSS, IndexedDB (Dexie), Vitest]
repo: https://github.com/merlinmec/mec-lineup
demo: null
resumo: Valorant lineups on the minimap
problema: Mid-match, there's no time to look up a Valorant lineup video on YouTube.
solucao: A minimap with every ability at its real in-game size and a screenshot of where to aim, one click away and offline.
imagens:
  - src: ../../../assets/projetos/mec-lineup/preview-posicao.webp
    legenda: Hover a position to see where to aim
  - src: ../../../assets/projetos/mec-lineup/formas-reais.webp
    legenda: Ability drawn at its real in-game size
  - src: ../../../assets/projetos/mec-lineup/marcar-referencia.webp
    legenda: Marking the aim reference on the screenshot
  - src: ../../../assets/projetos/mec-lineup/menu.webp
    legenda: Map selection
---

## How it works

Pick the map, the agent and the ability, click the spot where it should land and see where to throw it from. Each position stores up to three screenshots: where to aim, where to stand and where the ability lands. An automatic magnifier enlarges the reference detail, because it disappears in a small preview. It's built to stay open on a second monitor, with no login and no cloud server.

## Decisions worth reading

- **Normalized coordinates from 0 to 1** over the minimap image, independent of zoom and screen size.
- **Abilities at their real size:** measurements in meters come from the official wiki and are converted to the minimap using each map's scale. What's fixed in the game stays locked in the editor.
- **Vector markings:** circles and arrows are stored separately from the screenshot, so they stay sharp at any size and can be edited later.
- **Backups through the local server.** The browser can't write to a fixed folder without asking, and that permission expires. The Vite server can, and the route requires a custom header, which forces a CORS preflight: another site open in the browser can't overwrite the backup.
- **Migrations that never lose data:** each database version converts what's already there, and old backups go through the same conversion, with tests.

It only runs on the user's own machine, so there's no public demo.
