import { StructuredData } from './structured-data.type';

export const generateHomePageStructuredData = (
  baseUrl: string
): StructuredData => {
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
