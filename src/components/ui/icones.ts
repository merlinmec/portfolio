import arrowSquareOut from '@phosphor-icons/core/fill/arrow-square-out-fill.svg?raw';
import arrowsOut from '@phosphor-icons/core/bold/arrows-out-bold.svg?raw';
import downloadSimple from '@phosphor-icons/core/bold/download-simple-bold.svg?raw';
import envelopeSimple from '@phosphor-icons/core/fill/envelope-simple-fill.svg?raw';
import githubLogo from '@phosphor-icons/core/fill/github-logo-fill.svg?raw';
import linkedinLogo from '@phosphor-icons/core/fill/linkedin-logo-fill.svg?raw';
import mapPin from '@phosphor-icons/core/fill/map-pin-fill.svg?raw';

// Phosphor: o SVG entra inline no HTML, sem fonte de ícones nem JS.
export const icones = {
  'link-externo': arrowSquareOut,
  'tela-cheia': arrowsOut,
  download: downloadSimple,
  email: envelopeSimple,
  github: githubLogo,
  linkedin: linkedinLogo,
  local: mapPin,
};

export type NomeIcone = keyof typeof icones;
