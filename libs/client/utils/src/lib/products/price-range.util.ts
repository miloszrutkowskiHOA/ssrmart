import { ProductSearchPriceRange } from '@ssrmart/shared/types';

export const PRICE_RANGE_MIN = 0;
export const PRICE_RANGE_MAX = 2000;

export const DEFAULT_PRICE_RANGE: ProductSearchPriceRange = {
  min: PRICE_RANGE_MIN,
  max: PRICE_RANGE_MAX,
};

export const priceRangeToParam = (value: ProductSearchPriceRange): string => {
  return `${value.min}-${value.max}`;
};

export const priceRangeFromParam = (value: string): ProductSearchPriceRange => {
  const [min, max] = value.split('-').map((v) => parseInt(v));

  if (
    isNaN(min) ||
    isNaN(max) ||
    min < PRICE_RANGE_MIN ||
    max > PRICE_RANGE_MAX ||
    min > max
  ) {
    return DEFAULT_PRICE_RANGE;
  }

  return { min, max };
};
