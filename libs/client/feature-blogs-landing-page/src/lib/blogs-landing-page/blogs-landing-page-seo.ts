import { inject } from '@angular/core';
import { SeoData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';

export const getBlogsLandingPageSeo = (): SeoData => {
  const baseUrl = inject(ConfigService).get('baseUrl');

  return {
    title: 'Blog - Tech Product Reviews & Industry Insights',
    description:
      'Discover the latest tech products, reviews, and industry insights. From cutting-edge electronics to innovative gadgets, stay informed about the best tech products and trends.',
    keywords: [
      'blog',
      'tech reviews',
      'product reviews',
      'technology',
      'electronics',
      'gadgets',
      'industry insights',
      'tech trends',
    ],
    ogType: 'website',
    ogUrl: `${baseUrl}/blog`,
    ogImage: {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fm=jpg&fit=crop',
      alt: 'Blog image',
    },
  };
};
