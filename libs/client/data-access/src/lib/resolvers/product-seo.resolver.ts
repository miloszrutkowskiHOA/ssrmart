import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CURRENCY_TRANSFORM, SeoData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';
import { catchError, map, of } from 'rxjs';
import { ProductService } from '../services';

export const productSeoResolver: ResolveFn<SeoData> = (route) => {
  const productService = inject(ProductService);
  const configService = inject(ConfigService);
  const currencyTransform = inject(CURRENCY_TRANSFORM);

  return productService.getProduct(route.params['id']).pipe(
    map(
      (product): SeoData => ({
        title: `${product.name} - ${currencyTransform(product.price)}`,
        description: product.shortDescription,
        ogImage: product.image,
        keywords: product.keywords,
        ogType: 'website',
        ogUrl: `${configService.get('baseUrl')}/products/${route.params['id']}`,
        twitterLabel: {
          key: 'Price',
          value: currencyTransform(product.price) ?? '',
        },
        twitterLabel2: {
          key: 'Category',
          value: product.category,
        },
      })
    ),
    catchError(() => of({} as SeoData))
  );
};
