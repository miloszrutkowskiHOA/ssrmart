import { Router } from 'express';
import { sitemapRoute } from './lib/sitemap';
import { robotsRoute } from './lib/robots';

const registerSeoRoutes = (router: Router): void => {
  sitemapRoute(router);
  robotsRoute(router);
};

export default registerSeoRoutes;