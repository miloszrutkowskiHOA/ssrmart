import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { StructuredData } from '@ssrmart/client/utils';
import { Product } from '@ssrmart/shared/types';
import { ProductService } from '../services';
import { ConfigService } from '@ssrmart/shared/config';
import { map } from 'rxjs';

const generateProductStructuredData = (
  product: Product,
  baseUrl: string
): StructuredData => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': `${baseUrl}/products/${product.id}`,
    name: product.name,
    description: product.shortDescription,
    image: product.imageUrl,
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

export const productStructuredDataResolver: ResolveFn<StructuredData> = (
  route
) => {
  const productService = inject(ProductService);
  const configService = inject(ConfigService);

  return productService
    .getProduct(route.params['id'])
    .pipe(
      map((product) =>
        generateProductStructuredData(product, configService.get('baseUrl'))
      )
    );
};
