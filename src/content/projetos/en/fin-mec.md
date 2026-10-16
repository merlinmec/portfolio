---
nome: fin-mec
ordem: 1
inicio: 2026-08
linguagem: Java
stack: [Java 21, Spring Boot, Spring Security, PostgreSQL, Flyway, React, TypeScript, Testcontainers, Docker]
repo: https://github.com/merlinmec/fin-mec
demo: https://fin-mec-demo.onrender.com/demo
resumo: Personal finance with a balance forecast
problema: A spending spreadsheet only shows the past. It won't warn you that the card bill is about to blow up, or how much will be left at the end of the month.
solucao: A personal finance app that brings accounts, credit cards, budgets and goals together and forecasts the balance day by day, with every financial rule tested on the back-end.
imagens:
  - src: ../../../assets/projetos/fin-mec/dashboard.webp
    legenda: Monthly overview with the balance forecast
  - src: ../../../assets/projetos/fin-mec/relatorios.webp
    legenda: Income and expense reports
  - src: ../../../assets/projetos/fin-mec/lancamentos.webp
    legenda: Transactions, with installments and transfers
  - src: ../../../assets/projetos/fin-mec/metas.webp
    legenda: Savings goals
---

## How it's built

A modular monolith: a single deployment, with one package per domain (accounts, transactions, credit card, budget, goals, importing, household) and the same four layers inside each one: `api`, `application`, `domain` and `infra`. The React app is served by Spring itself, on the same origin as the API, so there's no CORS in production.

## Decisions worth reading

- **Every financial rule lives on the back-end.** Balance, card bills, due dates and the forecast are computed on the server and covered by integration tests against a real Postgres through Testcontainers, not H2.
- **Derived status isn't stored.** "Overdue" is computed on read from the date, so it doesn't depend on a job having run.
- **Idempotent recurrence and imports.** Running the recurring-transactions job twice duplicates nothing, and neither does importing the same bank statement twice: a unique index on account and external ID guarantees it.
- **Ports and adapters only where there's an external dependency:** Open Finance (Pluggy), receipt storage and notifications.
- **Session cookie with HttpOnly and CSRF**, and 2FA built on RFC 6238, validated against the RFC's own test vectors, with the secret encrypted with AES-256-GCM.

The back-end has over 300 tests, and CI runs the back-end, the front-end and the Docker image build on every PR. The public demo creates a temporary account with fictional data, deleted after 24 hours. It runs on a free plan that sleeps when idle, so the first visit can take about a minute.
