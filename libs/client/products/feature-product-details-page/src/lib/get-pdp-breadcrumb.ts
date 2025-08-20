import { Breadcrumb, capitalize } from '@ssrmart/client/utils';
import { Product } from '@ssrmart/shared/types';

export const getPdpBreadcrumb = (product: Product): Breadcrumb => {
  return [
    { label: 'SSRmart', url: '/' },
    {
      label: capitalize(product.category),
      url: `/products/${product.category}`,
    },
    { label: product.name, url: `/products/${product.id}` },
  ];
};
