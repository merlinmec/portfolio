---
nome: fin-mec
ordem: 1
inicio: 2026-08
linguagem: Java
stack: [Java 21, Spring Boot, Spring Security, PostgreSQL, Flyway, React, TypeScript, Testcontainers, Docker]
repo: https://github.com/merlinmec/fin-mec
demo: https://fin-mec-demo.onrender.com/demo
resumo: Finanças pessoais com previsão de saldo
problema: Planilha de gastos só mostra o passado. Não avisa que a fatura vai estourar nem quanto vai sobrar no fim do mês.
solucao: Um app de finanças pessoais que junta contas, cartão, orçamento e metas e projeta o saldo dia a dia, com toda a regra financeira testada no backend.
imagens:
  - src: ../../../assets/projetos/fin-mec/dashboard.webp
    legenda: Visão geral do mês, com a previsão de saldo
  - src: ../../../assets/projetos/fin-mec/relatorios.webp
    legenda: Relatórios de receitas e despesas
  - src: ../../../assets/projetos/fin-mec/lancamentos.webp
    legenda: Lançamentos, com parcelas e transferências
  - src: ../../../assets/projetos/fin-mec/metas.webp
    legenda: Metas de economia
---

## Como é feito

Um monólito modular: um único deploy, com um pacote por domínio (contas, lançamentos, cartão, orçamento, metas, importação, household) e as mesmas quatro camadas dentro de cada um: `api`, `application`, `domain` e `infra`. O React é servido pelo próprio Spring, na mesma origem da API, então não existe CORS em produção.

## Decisões que valem a leitura

- **Toda regra financeira fica no backend.** Saldo, fatura, vencimento e previsão são calculados no servidor e cobertos por testes de integração contra Postgres de verdade, com Testcontainers, e não contra H2.
- **Status derivado não é gravado.** "Atrasado" é calculado na leitura a partir da data, então não depende de um job ter rodado.
- **Recorrência e importação idempotentes.** Rodar o job de lançamentos fixos duas vezes não duplica nada, e importar o mesmo extrato duas vezes também não: um índice único por conta e identificador externo garante isso.
- **Portas e adapters só onde há dependência externa:** o Open Finance (Pluggy), o armazenamento de comprovantes e as notificações.
- **Sessão com cookie HttpOnly e CSRF**, e 2FA implementado sobre a RFC 6238, validado contra os vetores de teste da própria RFC, com o segredo cifrado em AES-256-GCM.

O backend tem mais de 300 testes, e a CI roda backend, frontend e o build da imagem Docker em todo PR. A demo pública cria uma conta temporária com dados fictícios, apagada em 24 horas. Ela roda num plano gratuito que dorme quando ninguém usa, então o primeiro acesso pode levar cerca de um minuto.
