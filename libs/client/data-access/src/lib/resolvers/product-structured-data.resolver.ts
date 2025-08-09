import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import {
  generateProductStructuredData,
  StructuredData,
} from '@ssrmart/client/utils';
import { ProductService } from '../services';
import { ConfigService } from '@ssrmart/shared/config';
import { map } from 'rxjs';

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
