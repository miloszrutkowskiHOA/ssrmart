import { RenderMode, ServerRoute } from '@angular/ssr';

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
    path: 'products/**',
    renderMode: RenderMode.Server,
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
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
