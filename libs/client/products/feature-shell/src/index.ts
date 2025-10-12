import { Routes } from '@angular/router';
import {
  productSearchSeoResolver,
  productResolver,
} from '@ssrmart/client/products/data-access';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@ssrmart/client/products/feature-product-search-page').then(
        (m) => m.ProductSearchPageComponent
      ),
    resolve: {
      seo: productSearchSeoResolver,
    },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('@ssrmart/client/products/product-not-found-page').then(
        (m) => m.ProductNotFoundPageComponent
      ),
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
];

export default routes;