import {
  Product,
  ProductCategory,
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

export const sortProducts = (
  products: Product[],
  sorting: ProductSearchSortingOptions
): Product[] => {
  return products.sort((a, b) => {
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
