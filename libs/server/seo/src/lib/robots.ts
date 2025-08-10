import { getServerConfig } from '@ssrmart/shared/config';
import { Router } from 'express';

export const robotsRoute = (router: Router): void => {
  router.get('/robots.txt', (req, res) => {
    const { baseUrl } = getServerConfig();

    const robots = `
      User-agent: *
      Allow: /

      Disallow: /cart
      Disallow: /privacy-policy
      Disallow: /terms-of-service
      Disallow: /api/*
      Disallow: /products?*
      Disallow: /products/*?*

      Sitemap: ${baseUrl}/sitemap.xml
    `;

    res.set('Content-Type', 'text/plain');
    res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    res.send(robots);
  });
};
