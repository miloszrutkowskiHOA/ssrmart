import {
  Product,
  ProductCategory,
  ProductSearchPriceRange,
  ProductSearchSortingOptions,
} from '@ssrmart/shared/types';

export const filterByCategory = (
  products: Product[],
  category: ProductCategory
): Product[] => {
  return products.filter((product) => product.category === category);
};

export const filterByIsBestSeller = (
  products: Product[],
  isBestSeller: boolean
): Product[] => {
  return products.filter((product) => product.isBestSeller === isBestSeller);
};

export const filterByTerm = (products: Product[], term: string): Product[] => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(term.toLowerCase())
  );
};

export const validatePriceRange = (
  priceRange: ProductSearchPriceRange
): void => {
  if (priceRange.min < 0) throw new Error('Price range minimum must be >= 0');
  if (priceRange.min > priceRange.max)
    throw new Error('Price range minimum must be <= maximum');
};

export const filterByPriceRange = (
  products: Product[],
  priceRange: ProductSearchPriceRange
): Product[] => {
  return products.filter(
    (product) =>
      product.price >= priceRange.min && product.price <= priceRange.max
  );
};

export const sortProducts = (
  products: Product[],
  sorting: ProductSearchSortingOptions
): Product[] => {
  return products.sort((a, b) => {
    if (sorting === 'name') {
      return a.name.localeCompare(b.name);
    }

    if (sorting === 'top-rated') {
      return b.rating - a.rating;
    }

    if (sorting === 'price-asc') {
      return a.price - b.price;
    }

    if (sorting === 'price-desc') {
      return b.price - a.price;
    }

    return 0;
  });
};

export const limitProducts = (
  products: Product[],
  limit: number
): Product[] => {
  return products.slice(0, limit);
};
