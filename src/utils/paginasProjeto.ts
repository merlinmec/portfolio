import { rotas, type Idioma } from '@/i18n/ui';
import { getProjetos } from '@/utils/projetos';

/** getStaticPaths das páginas de projeto, compartilhado entre /projetos e /en/projects. */
export const caminhosProjeto = async (idioma: Idioma) => {
  const projetos = await getProjetos(idioma);
  const outro: Idioma = idioma === 'pt' ? 'en' : 'pt';
  return projetos.map((projeto, i) => ({
    params: { slug: projeto.slug },
    props: {
      projeto,
      proximo: projetos[(i + 1) % projetos.length],
      alternativo: rotas.projeto(outro, projeto.slug),
    },
  }));
};
