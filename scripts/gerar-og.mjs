// Gera public/og.png (1200x630), a prévia do link em redes e mensageiros,
// com o mesmo desenho em braille do hero. Uso: npm run gerar:og
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const braille = (await readFile('src/data/hero-braille.txt', 'utf8')).trimEnd();

const html = `<!doctype html>
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800&f[]=general-sans@500&display=block">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; padding: 72px; background: #0e0f0d; color: #ecebe4;
    display: flex; flex-direction: column; justify-content: space-between; font-family: 'General Sans', sans-serif;
  }
  pre { color: #c6f04f; font-size: 15.5px; line-height: 1.1; align-self: flex-end; }
  h1 { font: 800 92px/0.92 'Cabinet Grotesk', sans-serif; letter-spacing: -0.045em; }
  p { margin-top: 22px; font-size: 30px; color: #a4a39b; }
</style>
<pre>${braille}</pre>
<div><h1>João Manoel Carvalho</h1><p>Desenvolvedor back-end · Java, Kotlin e Spring</p></div>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'public/og.png' });
  console.log('public/og.png gerado');
} finally {
  await browser.close();
}
