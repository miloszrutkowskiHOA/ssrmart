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
        loadChildren: () => import('@ssrmart/client/products/shell'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@ssrmart/client/feature-about-page').then(
            (m) => m.AboutPageComponent
          ),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('@ssrmart/client/feature-legal').then(
            (m) => m.PrivacyPolicyPageComponent
          ),
        title: 'Privacy Policy | SSRmart',
      },
      {
        path: 'terms-of-service',
        loadComponent: () =>
          import('@ssrmart/client/feature-legal').then(
            (m) => m.TermsOfServicePageComponent
          ),
        title: 'Terms of Service | SSRmart',
      },
      {
        path: 'blog',
        loadChildren: () => import('@ssrmart/client/articles/shell'),
      },
    ],
  },
];
