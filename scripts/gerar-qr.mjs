// Gera o QR do contato com o próprio mec-qrsafe: o endpoint /export só
// devolve o arquivo se a validação de leitura passar (senão, 422 com os
// motivos). O SVG é versionado, então o build não depende da API.
//
// Uso: npm run gerar:qr -- [URL base da API]  (padrão: a demo pública)

import { writeFile } from 'node:fs/promises';

const api = process.argv[2] ?? 'https://mec-qrsafe.onrender.com';
const destino = 'https://www.linkedin.com/in/joao-manoel-carvalho/';

const pedido = {
  content: { type: 'STATIC', value: destino },
  style: {
    darkColor: '#0E0F0D',
    lightColor: '#C6F04F',
    quietZoneModules: 4,
    moduleShape: 'DOTS',
    eyeShape: 'ROUNDED',
  },
  errorCorrection: 'AUTO',
};

const resposta = await fetch(`${api}/api/v1/qr-codes/export?format=svg&size=1024`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(pedido),
});

if (!resposta.ok) {
  console.error(`mec-qrsafe recusou (${resposta.status}):`, await resposta.text());
  process.exit(1);
}

const svg = await resposta.text();
await writeFile('src/assets/qr-linkedin.svg', svg, 'utf8');
console.log(`QR validado e gravado (${svg.length} bytes) apontando pra ${destino}`);
