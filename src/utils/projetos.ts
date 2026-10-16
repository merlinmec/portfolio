import { getCollection, type CollectionEntry } from 'astro:content';
import type { Idioma } from '@/i18n/ui';

export type Projeto = CollectionEntry<'projetos'> & { slug: string };

/** Projetos de um idioma, na ordem da vitrine. O id vem como "pt/fin-mec". */
export const getProjetos = async (idioma: Idioma): Promise<Projeto[]> => {
  const todos = await getCollection('projetos', ({ id }) => id.startsWith(`${idioma}/`));
  return todos
    .map((projeto) => ({ ...projeto, slug: projeto.id.slice(idioma.length + 1) }))
    .sort((a, b) => a.data.ordem - b.data.ordem);
};

/** Nome único da transição entre a capa na vitrine e a capa na página do projeto. */
export const nomeTransicao = (slug: string) => `capa-${slug}`;
