import { UrlMatcher, UrlSegment } from '@angular/router';
import { PRODUCT_CATEGORIES } from '@ssrmart/shared/types';

/**
 * Matches only when the first path segment is a valid ProductCategory.
 * This avoids ambiguous dynamic segment matching between `:category` and `:id` routes on SSR.
 */
export const productCategoryMatcher: UrlMatcher = (segments: UrlSegment[]) => {
  if (!segments.length) {
    return null;
  }

  const firstSegment = segments[0]?.path ?? '';
  const isCategory = PRODUCT_CATEGORIES.some(
    (category) => category === firstSegment
  );

  return isCategory
    ? { consumed: [segments[0]], posParams: { category: segments[0] } }
    : null;
};
