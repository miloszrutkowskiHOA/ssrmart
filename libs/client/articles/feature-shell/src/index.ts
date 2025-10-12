import { Routes } from '@angular/router';
import {
  articleResolver,
} from '@ssrmart/client/articles/data-access';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@ssrmart/client/articles/feature-blog-page').then(
        (m) => m.BlogsLandingPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('@ssrmart/client/articles/feature-article-page').then(
        (m) => m.ArticlePageComponent
      ),
    resolve: {
      article: articleResolver,
    },
  },
];

export default routes;
