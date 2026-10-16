// Todo o JS do site fora da galeria. Sem framework: cada bloco liga um
// comportamento a atributos `data-*` do HTML, que já chega pronto do build.

const reduzMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Entrada ao rolar: o CSS esconde [data-reveal] só quando <html> tem `.js`. */
const revelaveis = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-media]');
if (document.documentElement.classList.contains('js')) {
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
  revelaveis.forEach((el) => observador.observe(el));
}

/* Hero: o braille se resolve da esquerda pra direita, a partir de células
   aleatórias. O texto final já está no HTML; isto só anima a chegada. */
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
}

if (braille && !reduzMovimento) {
  const final = Array.from(braille.textContent ?? '');
  const largura = Math.max(...(braille.textContent ?? '').split('\n').map((l) => Array.from(l).length));
  const coluna: number[] = [];
  let c = 0;
  for (const ch of final) {
    coluna.push(c);
    c = ch === '\n' ? 0 : c + 1;
  }
  const VAZIO = 0x2800;
  const duracao = 1400;
  const inicio = performance.now();

  const quadro = (agora: number) => {
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
  requestAnimationFrame(quadro);
}

/* Botões: o preenchimento do hover nasce de onde o cursor entrou. */
document.querySelectorAll<HTMLElement>('[data-btn]').forEach((botao) => {
  botao.addEventListener('pointerenter', (evento) => {
    const caixa = botao.getBoundingClientRect();
    botao.style.setProperty('--x', `${evento.clientX - caixa.left}px`);
    botao.style.setProperty('--y', `${evento.clientY - caixa.top}px`);
  });
});

/* Navbar: marca a seção que está no meio da tela. */
const linksSecao = document.querySelectorAll<HTMLElement>('[data-secao]');
const secoes = Array.from(linksSecao)
  .map((link) => document.getElementById(link.dataset.secao ?? ''))
  .filter((secao): secao is HTMLElement => secao !== null);
if (secoes.length) {
  const marcar = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        const id = entrada.target.id;
        linksSecao.forEach((link) => {
          if (link.dataset.secao !== id) return;
          link.toggleAttribute('data-ativo', entrada.isIntersecting);
        });
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  secoes.forEach((secao) => marcar.observe(secao));
}

/* Menu mobile (popover nativo): fecha ao escolher um link. */
document.querySelectorAll('[data-fechar-menu]').forEach((link) => {
  link.addEventListener('click', () => document.getElementById('menu-mobile')?.hidePopover());
});

/* Tema: alterna e lembra. O valor inicial é aplicado no <head>, antes da pintura. */
const botaoTema = document.querySelector<HTMLButtonElement>('[data-alternar-tema]');
if (botaoTema) {
  const raiz = document.documentElement;
  const rotular = () => {
    const claro = raiz.dataset.theme === 'light';
    botaoTema.setAttribute(
      'aria-label',
      (claro ? botaoTema.dataset.rotuloEscuro : botaoTema.dataset.rotuloClaro) ?? ''
    );
  };
  rotular();
  botaoTema.addEventListener('click', () => {
    raiz.dataset.theme = raiz.dataset.theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('tema', raiz.dataset.theme);
    } catch {
      // Sem armazenamento (aba anônima, bloqueio): o tema vale só nesta página.
    }
    rotular();
  });
}
