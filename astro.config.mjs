import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio-lac-mu-52.vercel.app',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Cabinet Grotesk',
      cssVariable: '--font-display-face',
      weights: [700, 800],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontshare(),
      name: 'General Sans',
      cssVariable: '--font-body-face',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono-face',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});
