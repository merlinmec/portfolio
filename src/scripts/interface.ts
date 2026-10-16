// Todo o JS do site fora da galeria. Sem framework: cada bloco liga um
// comportamento a atributos `data-*` do HTML, que já chega pronto do build.

const raiz = document.documentElement;
// Avisa o fallback do <head> (Base.astro) que o script carregou.
raiz.dataset.pronto = '';

const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Entrada ao rolar: o CSS esconde [data-reveal] só quando <html> tem `.js`. */
if (raiz.classList.contains('js')) {
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.classList.add('is-in');
        observador.unobserve(entrada.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => observador.observe(el));
}

/* Hero: frases que se digitam e se apagam sozinhas, em loop. */
const digitando = document.querySelector<HTMLElement>('[data-digitar]');
if (digitando && !reduzMovimento) {
  const frases: [string, number][] = JSON.parse(digitando.dataset.digitar ?? '[]');
  const espera = (ms: number) => new Promise((resolver) => setTimeout(resolver, ms));
  digitando.classList.add('digitando');
  (async () => {
    for (let i = 0; ; i = (i + 1) % frases.length) {
      const [frase, pausa] = frases[i];
      for (let n = digitando.textContent?.length ?? 0; n < frase.length; n++) {
        digitando.textContent = frase.slice(0, n + 1);
        await espera(45);
      }
      await espera(pausa);
      for (let n = frase.length; n > 0; n--) {
        digitando.textContent = frase.slice(0, n - 1);
        await espera(22);
      }
    }
  })();
}

/* Hero: desenho em braille gerado pelo Text-Art. */
const braille = document.querySelector<HTMLElement>('[data-braille]');

/* A largura do glifo braille depende da fonte que cada sistema usa pra esse
   bloco Unicode, então o CSS chuta por baixo e aqui o desenho é esticado até
   ocupar a largura exata do contêiner. */
if (braille) {
  // Mede sempre o desenho final num clone invisível: durante a animação o
  // texto muda, e a célula vazia (U+2800) nem sempre tem a largura das outras.
  const textoFinal = braille.textContent ?? '';
  let larguraAnterior = 0;
  const ajustar = () => {
    if (braille.clientWidth === larguraAnterior) return;
    larguraAnterior = braille.clientWidth;
    const clone = braille.cloneNode() as HTMLElement;
    clone.removeAttribute('data-braille');
    clone.textContent = textoFinal;
    clone.style.fontSize = '';
    Object.assign(clone.style, {
      position: 'absolute',
      visibility: 'hidden',
      width: 'auto',
      overflow: 'visible',
    });
    braille.after(clone);
    const base = parseFloat(getComputedStyle(clone).fontSize);
    const larguraTexto = clone.getBoundingClientRect().width;
    clone.remove();
    if (larguraTexto > 0) braille.style.fontSize = `${(base * braille.clientWidth) / larguraTexto}px`;
  };
  document.fonts.ready.then(() => {
    larguraAnterior = 0;
    ajustar();
  });
  // Só a largura importa: a altura muda com o próprio ajuste.
  new ResizeObserver(ajustar).observe(braille);

  /* O braille se resolve da esquerda pra direita, a partir de células
     aleatórias, quando aparece na tela. O texto final já está no HTML. */
  if (!reduzMovimento) animarBraille(braille, textoFinal, Number(braille.dataset.colunas));
}

function animarBraille(braille: HTMLElement, textoFinal: string, largura: number) {
  const final = Array.from(textoFinal);
  const coluna: number[] = [];
  let c = 0;
  for (const ch of final) {
    coluna.push(c);
    c = ch === '\n' ? 0 : c + 1;
  }
  const VAZIO = 0x2800;
  const duracao = 1400;
  let inicio = 0;

  const quadro = (agora: number) => {
    inicio ||= agora;
    const progresso = Math.min(1, (agora - inicio) / duracao);
    let saida = '';
    for (let i = 0; i < final.length; i++) {
      const ch = final[i];
      const limite = coluna[i] / largura;
      if (ch === '\n' || ch.codePointAt(0) === VAZIO || progresso >= limite * 0.75 + 0.25) saida += ch;
      else if (progresso >= limite * 0.75)
        saida += String.fromCodePoint(VAZIO + 1 + Math.floor(Math.random() * 255));
      else saida += String.fromCodePoint(VAZIO);
    }
    braille.textContent = saida;
    if (progresso < 1) requestAnimationFrame(quadro);
  };

  const quandoVisivel = new IntersectionObserver(([entrada]) => {
    if (!entrada.isIntersecting) return;
    quandoVisivel.disconnect();
    requestAnimationFrame(quadro);
  });
  quandoVisivel.observe(braille);
}

/* Navbar: marca a seção que está no meio da tela. */
const linksSecao = document.querySelectorAll<HTMLElement>('[data-secao]');
const secoes = Array.from(linksSecao)
  .map((link) => document.getElementById(link.dataset.secao ?? ''))
  .filter((secao): secao is HTMLElement => secao !== null);
if (secoes.length) {
  const marcar = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        linksSecao.forEach((link) => {
          if (link.dataset.secao !== entrada.target.id) return;
          if (entrada.isIntersecting) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  secoes.forEach((secao) => marcar.observe(secao));
}

/* Skills: filtro por categoria. Sem JS os botões ficam escondidos e todas
   as skills aparecem. */
const filtros = document.querySelector<HTMLElement>('[data-filtros]');
if (filtros) {
  filtros.hidden = false;
  const botoes = filtros.querySelectorAll<HTMLButtonElement>('[data-filtro]');
  const itens = document.querySelectorAll<HTMLElement>('[data-categoria]');
  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      const escolhida = botao.dataset.filtro;
      botoes.forEach((b) => b.setAttribute('aria-pressed', String(b === botao)));
      itens.forEach((item) => {
        item.hidden = escolhida !== 'all' && item.dataset.categoria !== escolhida;
      });
    });
  });
}
