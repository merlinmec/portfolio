---
nome: Text-Art
ordem: 3
inicio: 2026-08
linguagem: TypeScript
stack: [TypeScript, React, Vite, Canvas API, Vitest]
repo: https://github.com/merlinmec/pixel-type
demo: null
resumo: Image to text art converter
problema: ASCII art converters smear thin strokes and leave drawings and anime unrecognizable.
solucao: Turns an image into text right in the browser, with custom edge detection that keeps line art intact, ready to copy and paste.
imagens:
  - src: ../../../assets/projetos/pixel-type/bordas.webp
    legenda: 'Edges: The Great Wave drawn with strokes only'
  - src: ../../../assets/projetos/pixel-type/braille.webp
    legenda: 'Braille: high resolution for continuous tones'
  - src: ../../../assets/projetos/pixel-type/blocos.webp
    legenda: 'Blocks: few levels, readable even from afar'
---

## How it works

The output is real text you can select and paste anywhere. Everything runs in the browser, so the image never leaves the user's machine. The conversion core is plain TypeScript with no DOM dependency, and it's tested in isolation.

The image becomes a grid of cells corrected by the real aspect ratio of the font's glyph, measured on the fly, so the drawing doesn't come out squashed. Each cell becomes a luminance value, goes through auto-contrast and an optional Floyd-Steinberg dithering that spreads the rounding error and avoids banding in transitions.

## The decision that keeps line art alive

In **Edges** mode, the Sobel operator runs pixel by pixel at the original resolution, not on the already reduced grid. Each text cell inherits the strongest stroke it contains. If the gradient were computed after the reduction, a stroke a few pixels wide would vanish into the average before it became an edge, and that's what ruins drawings and anime in other converters.

**Braille** mode uses the 2 by 4 dot sub-grid of each character and has eight times the resolution of the others. The drawing at the top of this site came out of it: the project's own `convertToText`, run by a script at build time.
