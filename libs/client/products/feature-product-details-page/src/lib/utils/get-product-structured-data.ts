import { StructuredData } from "@ssrmart/client/utils";
import { Product } from "@ssrmart/shared/types";

export const getProductStructuredData = (
  product: Product,
  baseUrl: string
): StructuredData => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': `${baseUrl}/products/${product.id}`,
    name: product.name,
    description: product.shortDescription,
    image: product.image.url,
    sku: product.id,
    category: product.category,
    keywords: product.keywords.join(', '),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      ratingCount: product.ratingCount,
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/products/${product.id}`,
      priceCurrency: 'USD',
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'SSRMart',
        url: baseUrl,
      },
    },
    brand: {
      '@type': 'Brand',
      name: 'SSRMart',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Best Seller',
        value: product.isBestSeller,
      },
    ],
  };
};
