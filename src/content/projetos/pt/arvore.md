---
nome: Árvore
ordem: 2
inicio: 2026-09
linguagem: Java
stack: [Java 17, Spring Boot, PostgreSQL, Flyway, React, TypeScript, PWA, Testcontainers]
repo: https://github.com/merlinmec/arvore
demo: https://arvore-demo.onrender.com/demo
resumo: Hábitos, metas e progresso por área
problema: Apps de hábito contam sequências, mas não mostram em que área da vida você está avançando e qual está largando.
solucao: Hábitos e metas organizados numa árvore de áreas, com a consistência de cada galho ao longo das semanas, diário e revisão semanal.
imagens:
  - src: ../../../assets/projetos/arvore/painel.webp
    legenda: 'Painel: consistência por área e o ano em heatmap'
  - src: ../../../assets/projetos/arvore/hoje.webp
    legenda: 'Hoje: o plano do dia, agrupado por área'
  - src: ../../../assets/projetos/arvore/areas.webp
    legenda: Áreas e subáreas, com o progresso da semana
  - src: ../../../assets/projetos/arvore/revisao.webp
    legenda: Revisão semanal guiada
---

## Como funciona

As áreas formam uma árvore (Saúde, depois Corrida), e cada uma tem objetivos com prazo e atividades encaixadas numa grade semanal. A tela **Hoje** mostra o plano do dia agrupado por área. O **Painel** cruza a taxa de conclusão com o período anterior, a consistência por área e por dia da semana, um heatmap do ano e a força de cada hábito, calculada com decaimento.

## Decisões que valem a leitura

- **Hábitos negativos** ("não fumar") valem todo dia, e o que se registra é a recaída. É uma inversão pequena no modelo que evita marcar a mesma coisa todo dia.
- **Diário cruzado com os dados:** humor e energia de 1 a 5 entram no Painel, ao lado da consistência do mesmo período.
- **Funciona sem rede.** É uma PWA instalável, e a tela Hoje abre com a última versão salva.
- **Os dados são do usuário:** CSV das conclusões pronto para planilha e backup completo em JSON, com restauração que recusa um arquivo inconsistente sem mexer em nada.
- **Testes de integração** sobem um Postgres real com Testcontainers, e a CI roda tudo a cada push.

A demo cria uma árvore de exemplo só sua, com dez semanas de história, apagada em 24 horas. Ela roda num plano gratuito que dorme quando ninguém usa, então o primeiro acesso pode levar cerca de um minuto.
