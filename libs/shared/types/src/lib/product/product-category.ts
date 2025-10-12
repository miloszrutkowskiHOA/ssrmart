export const PRODUCT_CATEGORIES = [
  'audio',
  'accessories',
  'gaming',
  'office',
  'photography',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
