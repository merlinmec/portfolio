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

## Como é feito

Quatro módulos, e só um deles conhece o Spring: o encoder, a validação e a renderização em SVG e PNG são bibliotecas puras, e a API é a única camada com framework. O encoder não usa lib pronta: byte mode em UTF-8, as 40 versões nos 4 níveis de correção, Reed-Solomon sobre GF(256) com intercalação de blocos, as 8 máscaras com as penalidades e o format e version info com BCH.

## Decisões que valem a leitura

- **Testado em três camadas:** os vetores da especificação, a matriz idêntica à do ZXing módulo a módulo nas 40 versões e nos 4 níveis, e a leitura real, em que o QR vira imagem e o leitor devolve o texto original. O ZXing entra só nos testes.
- **A área do logo pela conta real:** quantos codewords ele destrói em cada bloco contra quantos aquele bloco consegue corrigir. No modo automático, a correção sobe sozinha até o logo caber.
- **Conferido com câmera de verdade.** Uma página de calibração com 46 QRs, de 1,5:1 a 21:1 de contraste, mostrou o celular hesitando perto de 2,5:1. O limite ficou em 4,5:1.
- **O servidor revalida no export.** O arquivo só sai se a validação aprovar, independente do que a interface mostrou. Se não passar, a resposta é 422 com os motivos.

O QR da seção de contato deste site foi gerado por essa API e passou pela mesma validação. A demo roda num servidor gratuito que dorme, e o editor avisa enquanto ele acorda.
