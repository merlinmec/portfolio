---
nome: Árvore
ordem: 2
inicio: 2026-09
linguagem: Java
stack: [Java 17, Spring Boot, PostgreSQL, Flyway, React, TypeScript, PWA, Testcontainers]
repo: https://github.com/merlinmec/arvore
demo: https://arvore-demo.onrender.com/demo
resumo: Habits, goals and progress by area
problema: Habit apps count streaks, but they don't show which area of your life is moving forward and which one you're letting slide.
solucao: Habits and goals organized as a tree of life areas, with the consistency of each branch over the weeks, a daily journal and a weekly review.
imagens:
  - src: ../../../assets/projetos/arvore/painel.webp
    legenda: 'Dashboard: consistency by area and the year as a heatmap'
  - src: ../../../assets/projetos/arvore/hoje.webp
    legenda: 'Today: the day plan, grouped by area'
  - src: ../../../assets/projetos/arvore/areas.webp
    legenda: Areas and sub-areas, with this week's progress
  - src: ../../../assets/projetos/arvore/revisao.webp
    legenda: Guided weekly review
---

## How it works

Areas form a tree (Health, then Running), and each one has goals with deadlines and activities placed on a weekly grid. The **Today** screen shows the day plan grouped by area. The **Dashboard** compares the completion rate with the previous period and shows consistency by area and by weekday, a yearly heatmap and the strength of each habit, computed with decay.

## Decisions worth reading

- **Negative habits** ("don't smoke") count every day, and what you log is the relapse. A small inversion in the model that saves you from checking the same box every day.
- **A journal crossed with the data:** mood and energy from 1 to 5 show up on the Dashboard, next to the consistency for the same period.
- **Works offline.** It's an installable PWA, and the Today screen opens with the last saved version.
- **Users own their data:** a CSV of completions ready for spreadsheets and a full JSON backup, with a restore that rejects an inconsistent file without touching anything.
- **Integration tests** spin up a real Postgres with Testcontainers, and CI runs everything on every push.

The demo creates a sample tree just for you, with ten weeks of history, deleted after 24 hours. It runs on a free plan that sleeps when idle, so the first visit can take about a minute.
