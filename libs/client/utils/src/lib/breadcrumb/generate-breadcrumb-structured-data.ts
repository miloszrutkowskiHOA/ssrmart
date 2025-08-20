import { Breadcrumb } from './breadcrumb.model';

export const generateBreadcrumbStructuredData = (breadcrumb: Breadcrumb, baseUrl: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.url}`,
    })),
  };
};
