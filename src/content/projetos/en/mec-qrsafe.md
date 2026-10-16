---
nome: mec-qrsafe
ordem: 5
inicio: 2026-08
linguagem: Kotlin
stack: [Kotlin, Spring Boot, Reed-Solomon, React, TypeScript, Canvas API, ZXing (tests), Docker]
repo: https://github.com/merlinmec/mec-qrsafe
demo: https://mec-qrsafe.onrender.com
resumo: A QR code that checks it still scans
problema: QR generators let you add colors and a logo freely, and you only find out the code doesn't scan after it's printed.
solucao: A QR encoder written from scratch in Kotlin that checks every tweak against the real error-correction math, verified with an actual reader, and refuses to export what won't scan.
imagens:
  - src: ../../../assets/projetos/mec-qrsafe/editor.webp
    legenda: Dots, circular corners and a gradient, checked live
  - src: ../../../assets/projetos/mec-qrsafe/raio-x.webp
    legenda: 'X-ray: codewords by block, and the ones the logo destroys'
  - src: ../../../assets/projetos/mec-qrsafe/estrutura.webp
    legenda: 'X-ray: the fixed patterns a reader looks for first'
  - src: ../../../assets/projetos/mec-qrsafe/bloqueio.webp
    legenda: 'Logo too big: export stays locked'
---
