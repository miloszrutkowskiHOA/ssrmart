import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./app-shell.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@ssrmart/client/feature-home-page').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                '@ssrmart/client/products/feature-product-search-page'
              ).then((m) => m.ProductSearchPageComponent),
          },
          {
            path: ':category',
            loadComponent: () =>
              import(
                '@ssrmart/client/products/feature-product-search-page'
              ).then((m) => m.ProductSearchPageComponent),
          },
        ],
      },
    ],
  },
];
