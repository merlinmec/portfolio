---
nome: mec-qrsafe
ordem: 5
inicio: 2026-08
linguagem: Kotlin
stack: [Kotlin, Spring Boot, Reed-Solomon, React, TypeScript, Canvas API, ZXing (testes), Docker]
repo: https://github.com/merlinmec/mec-qrsafe
demo: https://mec-qrsafe.onrender.com
resumo: QR code que confere se ainda lê
problema: Geradores de QR deixam pôr cor e logo à vontade, e só depois de impresso você descobre que o código não lê.
solucao: Um encoder de QR escrito do zero em Kotlin que valida cada ajuste pela conta real da correção de erro, conferida contra um leitor de verdade, e não deixa exportar o que não lê.
imagens:
  - src: ../../../assets/projetos/mec-qrsafe/editor.webp
    legenda: Pontos, cantos em círculo e degradê, validados ao vivo
  - src: ../../../assets/projetos/mec-qrsafe/raio-x.webp
    legenda: 'Raio-X: codewords por bloco e os que o logo destrói'
  - src: ../../../assets/projetos/mec-qrsafe/estrutura.webp
    legenda: 'Raio-X: os padrões fixos que o leitor usa primeiro'
  - src: ../../../assets/projetos/mec-qrsafe/bloqueio.webp
    legenda: 'Logo grande demais: exportar fica travado'
---
