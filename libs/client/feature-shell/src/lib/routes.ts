import { Routes } from '@angular/router';
import {
  productCategoryGuard,
  productResolver,
  productSeoResolver,
  productSearchSeoResolver,
  homePageSeoResolver,
} from '@ssrmart/client/data-access';

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
        resolve: {
          seo: homePageSeoResolver,
        },
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
            resolve: {
              seo: productSearchSeoResolver,
            },
            runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
          },
          {
            path: ':category',
            loadComponent: () =>
              import(
                '@ssrmart/client/products/feature-product-search-page'
              ).then((m) => m.ProductSearchPageComponent),
            canMatch: [productCategoryGuard],
            resolve: {
              seo: productSearchSeoResolver,
            },
            runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
          },
          {
            path: ':id',
            loadComponent: () =>
              import('@ssrmart/client/products/product-details-page').then(
                (m) => m.ProductDetailsPageComponent
              ),
            resolve: {
              product: productResolver,
              seo: productSeoResolver,
            },
          },
        ],
      },
    ],
  },
];
