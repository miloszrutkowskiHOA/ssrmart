import { ProductCategory } from './product-category';

export type ProductSearchFilters = {
  category?: ProductCategory;
  isBestSeller?: boolean;
};

export const PRODUCT_SEARCH_SORTING_OPTIONS = [
  'top-rated',
  'price-asc',
  'price-desc',
] as const;

export type ProductSearchSortingOptions =
  (typeof PRODUCT_SEARCH_SORTING_OPTIONS)[number];

export type ProductSearchQuery = {
  filters?: ProductSearchFilters;
  sort?: ProductSearchSortingOptions;
  term?: string;
  limit?: number;
};