import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Um arquivo por projeto e idioma: src/content/projetos/<pt|en>/<slug>.md.
// O corpo do Markdown é a seção de decisões técnicas da página do projeto.
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      ordem: z.number(),
      /** Mês do primeiro commit, "AAAA-MM". */
      inicio: z.string().regex(/^\d{4}-\d{2}$/),
      linguagem: z.string(),
      stack: z.array(z.string()).min(1),
      repo: z.url(),
      demo: z.url().nullable(),
      resumo: z.string().max(60),
      problema: z.string(),
      solucao: z.string(),
      /** A primeira é a capa. */
      imagens: z.array(z.object({ src: image(), legenda: z.string() })).min(1),
    }),
});

export const collections = { projetos };
