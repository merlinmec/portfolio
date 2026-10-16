import { getCollection, type CollectionEntry } from 'astro:content';
import { idiomas, rotas, type Idioma } from '@/i18n/ui';

export type Projeto = CollectionEntry<'projetos'> & { slug: string };

/** Projetos de um idioma, na ordem da vitrine. O id vem como "pt/fin-mec". */
export const getProjetos = async (idioma: Idioma): Promise<Projeto[]> => {
  const todos = await getCollection('projetos', ({ id }) => id.startsWith(`${idioma}/`));
  return todos
    .map((projeto) => ({ ...projeto, slug: projeto.id.slice(idioma.length + 1) }))
    .sort((a, b) => a.data.ordem - b.data.ordem);
};

/**
 * Confere no build que os dois idiomas têm exatamente os mesmos projetos:
 * o seletor de idioma e o hreflang de cada página apontam pro par do outro.
 */
export const validarIdiomas = async () => {
  const [pt, en] = await Promise.all(idiomas.map(getProjetos));
  const slugsPt = pt
    .map((p) => p.slug)
    .sort()
    .join(', ');
  const slugsEn = en
    .map((p) => p.slug)
    .sort()
    .join(', ');
  if (slugsPt !== slugsEn) {
    throw new Error(`Projetos diferentes entre idiomas. pt: [${slugsPt}] en: [${slugsEn}]`);
  }
};

/** Link pra um projeto citado por slug fixo no código; slug inexistente quebra o build. */
export const linkProjeto = async (idioma: Idioma, slug: string) => {
  const existe = (await getProjetos(idioma)).some((p) => p.slug === slug);
  if (!existe) throw new Error(`Projeto "${slug}" não existe em src/content/projetos/${idioma}/`);
  return rotas.projeto(idioma, slug);
};

/** Nome único da transição entre a capa na vitrine e a capa na página do projeto. */
export const nomeTransicao = (slug: string) => `capa-${slug}`;
