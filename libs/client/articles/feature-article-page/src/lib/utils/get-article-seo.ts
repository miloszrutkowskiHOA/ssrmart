import { SeoData } from '@ssrmart/client/utils';
import { Article } from '@ssrmart/shared/types';

export const getArticleSeo = (article: Article, baseUrl: string): SeoData => ({
  title: article.title,
  description: article.excerpt,
  ogImage: article.image,
  keywords: article.tags,
  ogType: 'article',
  ogUrl: `${baseUrl}/blog/${article.id}`,
  twitterLabel: {
    key: 'Reading Time',
    value: `${article.readTime} min`,
  },
  twitterLabel2: {
    key: 'Published At',
    value: new Date(article.publishedAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
});
