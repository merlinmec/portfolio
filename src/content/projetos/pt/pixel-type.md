---
nome: Text-Art
ordem: 3
inicio: 2026-08
linguagem: TypeScript
stack: [TypeScript, React, Vite, Canvas API, Vitest]
repo: https://github.com/merlinmec/pixel-type
demo: null
resumo: Conversor de imagem em arte de texto
problema: Conversores de ASCII art borram os traços finos e deixam desenho e anime irreconhecíveis.
solucao: Converte a imagem em texto direto no navegador, com detecção de borda própria que preserva o line art, pronto para copiar e colar.
imagens:
  - src: ../../../assets/projetos/pixel-type/bordas.webp
    legenda: 'Bordas: a Grande Onda desenhada só com traços'
  - src: ../../../assets/projetos/pixel-type/braille.webp
    legenda: 'Braille: alta resolução para tons contínuos'
  - src: ../../../assets/projetos/pixel-type/blocos.webp
    legenda: 'Blocos: poucos níveis, legível até de longe'
---

## Como funciona

O resultado é texto de verdade, que dá para selecionar e colar em qualquer lugar. Tudo roda no navegador, então a imagem nunca sai da máquina de quem usa. O núcleo de conversão é TypeScript puro, sem depender do DOM, e é testado isoladamente.

A imagem vira uma grade de células corrigida pela proporção real do glifo da fonte, medida na hora, para o desenho não sair achatado. Cada célula vira luminância, passa por auto-contraste e por um dithering Floyd-Steinberg opcional, que espalha o erro de arredondamento e evita faixas nas transições.

## A decisão que faz o line art sobreviver

No modo **Bordas**, o operador de Sobel roda pixel a pixel na resolução original, e não na grade já reduzida. Cada célula de texto herda o traço de maior intensidade que contém. Se o gradiente fosse calculado depois da redução, um traço de poucos pixels sumiria na média antes de virar borda, e é isso que estraga desenho e anime nos outros conversores.

O modo **Braille** usa a sub-grade de 2 por 4 pontos de cada caractere e tem oito vezes mais resolução que os outros. O desenho no topo deste site saiu dele: o mesmo `convertToText` do projeto, rodado num script durante o build.
