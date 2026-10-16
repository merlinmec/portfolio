import 'photoswipe/style.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

interface Tela {
  legenda: string;
  src: string;
  srcset: string;
  grande: string;
  largura: number;
  altura: number;
}

// Cada projeto: capa grande, miniaturas que trocam a capa e tela cheia ao
// clicar nela. O núcleo do PhotoSwipe só é baixado na primeira ampliação.
document.querySelectorAll<HTMLElement>('[data-galeria]').forEach((galeria) => {
  const telas: Tela[] = JSON.parse(galeria.dataset.galeria ?? '[]');
  const capa = galeria.querySelector<HTMLButtonElement>('[data-capa]');
  const imagem = capa?.querySelector('img');
  const legenda = galeria.querySelector<HTMLElement>('[data-legenda]');
  const miniaturas = galeria.querySelectorAll<HTMLButtonElement>('[data-mostrar]');
  const rotuloAmpliar = galeria.dataset.rotuloAmpliar ?? '{legenda}';
  if (!capa || !imagem) return;
  let ativa = 0;

  const mostrar = (indice: number) => {
    if (indice === ativa) return;
    ativa = indice;
    const tela = telas[indice];
    miniaturas.forEach((m, n) => m.setAttribute('aria-pressed', String(n === indice)));
    if (legenda) legenda.textContent = tela.legenda;
    capa.setAttribute('aria-label', rotuloAmpliar.replace('{legenda}', tela.legenda));
    // Troca suave: some, carrega a nova e reaparece.
    imagem.style.opacity = '0';
    const nova = new Image();
    nova.srcset = tela.srcset;
    nova.sizes = imagem.sizes;
    nova.src = tela.src;
    nova
      .decode()
      .catch(() => {})
      .finally(() => {
        if (ativa !== indice) return;
        imagem.srcset = tela.srcset;
        imagem.src = tela.src;
        imagem.style.opacity = '1';
      });
  };
  miniaturas.forEach((m) => m.addEventListener('click', () => mostrar(Number(m.dataset.mostrar))));

  const lightbox = new PhotoSwipeLightbox({
    dataSource: telas.map((tela) => ({
      src: tela.grande,
      width: tela.largura,
      height: tela.altura,
      alt: tela.legenda,
    })),
    pswpModule: () => import('photoswipe'),
    bgOpacity: 0.9,
    showHideAnimationType: 'fade',
  });
  lightbox.on('uiRegister', () => {
    lightbox.pswp?.ui?.registerElement({
      name: 'legenda',
      order: 9,
      isButton: false,
      appendTo: 'root',
      onInit: (el, pswp) => {
        el.className = 'pswp__legenda';
        el.setAttribute('aria-live', 'polite');
        pswp.on('change', () => {
          el.textContent = String(pswp.currSlide?.data.alt ?? '');
        });
      },
    });
  });
  // Ao fechar a tela cheia, a capa mostra a última tela vista.
  lightbox.on('close', () => mostrar(lightbox.pswp?.currIndex ?? ativa));
  lightbox.init();

  capa.addEventListener('click', () => lightbox.loadAndOpen(ativa));
});
