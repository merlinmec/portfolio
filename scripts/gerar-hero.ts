// Gera o desenho em braille do hero com o próprio Text-Art (repositório
// pixel-type): renderiza a marca "mec" na fonte do site, passa a imagem
// pelo `convertToText` do Text-Art e grava o texto em src/data/.
//
// Uso: npm run gerar:hero -- [caminho do pixel-type]  (padrão: ../pixel-type)
//
// O resultado é versionado: o build da Vercel não precisa do pixel-type.

import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const pixelTypeDir = resolve(process.argv[2] ?? '../pixel-type');
const { convertToText } = await import(pathToFileURL(resolve(pixelTypeDir, 'src/core/convert.ts')).href);

// Degradê de cima pra baixo: o pontilhado do braille vai rareando, em vez
// de virar um bloco chapado de ⣿.
const html = `<!doctype html>
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800&display=block">
<style>
  html, body { margin: 0; background: #fff; }
  .mark {
    display: inline-block; padding: 0 24px 24px;
    font: 800 420px/0.86 'Cabinet Grotesk', sans-serif; letter-spacing: -0.06em;
    background: linear-gradient(180deg, #000 0%, #000 45%, #8a8a8a 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
</style>
<span class="mark">mec</span>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  const png = await page.locator('.mark').screenshot();

  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const buffer = { width: info.width, height: info.height, data: new Uint8ClampedArray(data) };

  const raw: string = convertToText(buffer, { columns: 64, charset: 'braille', dithering: true });
  // U+2800 é a célula braille sem pontos: linhas só com ela são margem.
  const text = raw
    .split('\n')
    .filter((line) => /[^⠀\s]/.test(line))
    .join('\n');
  const out = resolve('src/data/hero-braille.txt');
  await writeFile(out, text + '\n', 'utf8');
  console.log(text);
  console.log(`\n${text.split('\n').length} linhas gravadas em ${out}`);
} finally {
  await browser.close();
}
