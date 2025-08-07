import { CanMatchFn } from '@angular/router';
import { PRODUCT_CATEGORIES } from '@ssrmart/shared/types';

export const productCategoryGuard: CanMatchFn = (_, segments) =>
  PRODUCT_CATEGORIES.some((category) => category === segments[0].path);
