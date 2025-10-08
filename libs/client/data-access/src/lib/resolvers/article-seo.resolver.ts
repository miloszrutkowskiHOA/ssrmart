import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SeoData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';
import { catchError, map, of } from 'rxjs';
import { ArticleService } from '../services';

export const articleSeoResolver: ResolveFn<SeoData> = (route) => {
  const articleService = inject(ArticleService);
  const configService = inject(ConfigService);

  return articleService.getArticle(route.params['id']).pipe(
    map(
      (article): SeoData => ({
        title: article.title,
        description: article.excerpt,
        ogImage: article.image,
        keywords: article.tags,
        ogType: 'article',
        ogUrl: `${configService.get('baseUrl')}/blog/${route.params['id']}`,
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
      })
    ),
    catchError(() => of({} as SeoData))
  );
};
