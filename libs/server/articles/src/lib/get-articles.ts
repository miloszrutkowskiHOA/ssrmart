import { Article } from '@ssrmart/shared/types';

export const getArticles = async (): Promise<Article[]> => {
  const articles = await import('./articles.json');
  return articles.default as Article[];
};
