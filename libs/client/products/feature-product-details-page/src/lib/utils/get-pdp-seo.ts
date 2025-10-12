import { SeoData, CurrencyTransformFn } from '@ssrmart/client/utils';
import { Product } from '@ssrmart/shared/types';

export const getPdpSeo = (
  product: Product,
  baseUrl: string,
  currencyTransform: CurrencyTransformFn
): SeoData => ({
  title: `${product.name} - ${currencyTransform(product.price)}`,
  description: product.shortDescription,
  ogImage: product.image,
  keywords: product.keywords,
  ogType: 'website',
  ogUrl: `${baseUrl}/products/${product.id}`,
  twitterLabel: {
    key: 'Price',
    value: currencyTransform(product.price) ?? '',
  },
  twitterLabel2: {
    key: 'Category',
    value: product.category,
  },
});
