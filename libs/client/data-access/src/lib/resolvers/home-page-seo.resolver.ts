import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SeoData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';
import { PRODUCT_CATEGORIES } from '@ssrmart/shared/types';

export const homePageSeoResolver: ResolveFn<SeoData> = () => {
  const configService = inject(ConfigService);
  const baseUrl = configService.get('baseUrl');

  return {
    title: 'Welcome to SSRmart - Your Online Shopping Destination',
    description:
      'Discover amazing products at great prices. Shop the latest trends in electronics. Fast shipping and excellent customer service.',
    keywords: [
      'online shopping',
      'ecommerce',
      'products',
      'electronics',
      'best prices',
      'fast shipping',
      ...PRODUCT_CATEGORIES,
    ],
    type: 'website',
    url: baseUrl,
    imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
  };
};
