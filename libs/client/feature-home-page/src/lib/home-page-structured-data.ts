import { inject } from '@angular/core';
import { StructuredData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';

export const getHomePageStructuredData = (): StructuredData => {
  const baseUrl = inject(ConfigService).get('baseUrl');

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SSRMart',
    url: baseUrl,
    description:
      'Discover cutting-edge technology that tranforms yout everyday experience',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/products?term={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SSRMart',
      url: baseUrl,
      logo: `${baseUrl}/logo.svg`,
    },
  };
};
