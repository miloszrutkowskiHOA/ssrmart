import { Router } from 'express';
import { PRODUCT_CATEGORIES } from '@ssrmart/shared/types';
import { getProducts } from '@ssrmart/server/products';
import { getServerConfig } from '@ssrmart/shared/config';

type SitemapItem = {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

const getSitemapItems = async (baseUrl: string): Promise<SitemapItem[]> => {
  const staticPages: SitemapItem[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 1,
    },
    {
      loc: `${baseUrl}/products`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const categoriesPages = PRODUCT_CATEGORIES.map((category) => ({
    loc: `${baseUrl}/products?category=${category}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily' as const,
    priority: 0.9,
  }));

  const productsPages = (await getProducts()).map((product) => ({
    loc: `${baseUrl}/products/${product.id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly' as const,
    priority: product.isBestSeller ? 0.8 : 0.6,
  }));

  return [...staticPages, ...categoriesPages, ...productsPages];
};

export const sitemapRoute = (router: Router): void => {
  router.get('/sitemap.xml', async (req, res) => {
    const { baseUrl } = getServerConfig();
    const sitemapItems = await getSitemapItems(baseUrl);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapItems
      .map(
        (item) => `
      <url>
        <loc>${item.loc}</loc>
        <lastmod>${item.lastmod}</lastmod>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${item.priority}</priority>
      </url>`
      )
      .join('')}
    </urlset>`;

    res.set('Content-Type', 'application/xml');
    res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    res.send(xml);
  });
};
