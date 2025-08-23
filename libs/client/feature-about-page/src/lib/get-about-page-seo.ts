import { inject } from '@angular/core';
import { SeoData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';

export const getAboutPageSeo = (): SeoData => {
  const baseUrl = inject(ConfigService).get('baseUrl');

  return {
    title: 'About SSRmart - Your Smart E-commerce Shopping Destination',
    description:
      'Learn about SSRmart, a leading e-commerce platform offering 100K+ products with lightning-fast delivery, secure shopping, and 24/7 customer support. Discover our story and commitment to smart online shopping.',
    type: 'website',
    url: baseUrl,
    imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
  };
};
