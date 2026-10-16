import 'photoswipe/style.css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

// O lightbox só registra os cliques; o núcleo do PhotoSwipe (a parte pesada)
// é baixado na primeira vez que alguém amplia uma tela.
const lightbox = new PhotoSwipeLightbox({
  gallery: '[data-galeria]',
  children: 'a[data-pswp-width]',
  pswpModule: () => import('photoswipe'),
  bgOpacity: 0.94,
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
      pswp.on('change', () => {
        const atual = pswp.currSlide?.data.element;
        el.textContent = atual?.querySelector('img')?.getAttribute('alt') ?? '';
      });
    },
  });
});

lightbox.init();
