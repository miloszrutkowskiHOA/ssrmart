import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ArticleService } from '@ssrmart/client/articles/data-access';
import { ProductService } from '@ssrmart/client/products/data-access';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: 'products',
    renderMode: RenderMode.Server,
  },
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const productService = inject(ProductService);
      const products = await firstValueFrom(productService.searchProducts(), {
        defaultValue: [],
      });

      return products.map((product) => ({ id: product.id }));
    },
  },
  {
    path: 'blog',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const articleService = inject(ArticleService);
      const articles = await firstValueFrom(articleService.getArticles(), {
        defaultValue: [],
      });

      return articles.map((article) => ({ id: article.id }));
    },
  },
  {
    path: 'terms-of-service',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
