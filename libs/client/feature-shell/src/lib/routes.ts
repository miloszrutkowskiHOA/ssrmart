import { Routes } from '@angular/router';
import {
  productCategoryGuard,
  productResolver,
} from '@ssrmart/client/products/products-data-access';

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
            canMatch: [productCategoryGuard],
          },
          {
            path: ':id',
            loadComponent: () =>
              import('@ssrmart/client/products/product-details-page').then(
                (m) => m.ProductDetailsPageComponent
              ),
            resolve: {
              product: productResolver,
            },
          },
        ],
      },
    ],
  },
];
