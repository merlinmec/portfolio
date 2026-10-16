---
nome: MEC Lineup
ordem: 4
inicio: 2026-09
linguagem: TypeScript
stack: [TypeScript, React, Vite, Tailwind CSS, IndexedDB (Dexie), Vitest]
repo: https://github.com/merlinmec/mec-lineup
demo: null
resumo: Lineups de Valorant no minimapa
problema: No meio da partida não dá tempo de procurar vídeo de lineup no YouTube.
solucao: Um minimapa com cada habilidade no tamanho real do jogo e o print de onde mirar, a um clique e sem internet.
imagens:
  - src: ../../../assets/projetos/mec-lineup/preview-posicao.webp
    legenda: Passe o mouse na posição e veja onde mirar
  - src: ../../../assets/projetos/mec-lineup/formas-reais.webp
    legenda: Habilidade desenhada no tamanho real do jogo
  - src: ../../../assets/projetos/mec-lineup/marcar-referencia.webp
    legenda: Marcando no print a referência de mira
  - src: ../../../assets/projetos/mec-lineup/menu.webp
    legenda: Escolha do mapa
---

## Como funciona

Escolhe o mapa, o agente e a habilidade, clica no ponto onde ela deve cair e vê de onde lançar. Cada posição guarda até três prints: onde mirar, onde ficar e onde a habilidade cai. Uma lupa automática amplia o detalhe de referência, porque num preview pequeno ele some. Foi feito para ficar aberto no segundo monitor, sem login e sem servidor na nuvem.

## Decisões que valem a leitura

- **Coordenadas normalizadas de 0 a 1** sobre a imagem do minimapa, independentes do zoom e do tamanho da tela.
- **Habilidades no tamanho real:** as medidas em metros vêm da wiki oficial e viram minimapa pela escala de cada mapa. O que é fixo no jogo fica travado no editor.
- **Marcações vetoriais:** círculos e setas são dados separados do print, então ficam nítidos em qualquer tamanho e podem ser editados depois.
- **Backup pelo servidor local.** O navegador não grava numa pasta fixa sem pedir permissão, e essa permissão expira. O servidor do Vite grava, e a rota exige um cabeçalho próprio, o que força o preflight de CORS: outro site aberto no navegador não consegue sobrescrever o backup.
- **Migrações que nunca perdem dados:** cada versão do banco converte o que já existe, e backups antigos passam pela mesma conversão, com testes.

Roda só na máquina de quem usa, então não tem demo pública.
