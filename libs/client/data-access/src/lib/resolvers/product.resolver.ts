import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  Router,
  ResolveFn,
} from '@angular/router';
import { ProductService } from '../services';
import { Product } from '@ssrmart/shared/types';
import { catchError, of } from 'rxjs';

export const productResolver: ResolveFn<Product> = (
  route: ActivatedRouteSnapshot
) => {
  const router = inject(Router);

  return inject(ProductService)
    .getProduct(route.params['id'])
    .pipe(
      catchError(() =>
        of(new RedirectCommand(router.createUrlTree(['/products'])))
      )
    );
};
