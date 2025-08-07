import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CURRENCY_TRANSFORM, SeoData } from '@ssrmart/client/utils';
import { ProductService } from '../services';
import { catchError, map, of } from 'rxjs';
import { ConfigService } from '@ssrmart/shared/config';

export const productSeoResolver: ResolveFn<SeoData> = (route) => {
  const productService = inject(ProductService);
  const configService = inject(ConfigService);
  const currencyTransform = inject(CURRENCY_TRANSFORM);

  return productService.getProduct(route.params['id']).pipe(
    map((product) => ({
      title: `${product.name} - ${currencyTransform(product.price)}`,
      description: product.shortDescription,
      imageUrl: product.imageUrl,
      keywords: product.keywords,
      type: 'product',
      url: `${configService.get('baseUrl')}/products/${route.params['id']}`,
    })),
    catchError(() => of({} as SeoData))
  );
};
