import {
  Product,
  ProductCategory,
  ProductSearchQuery,
  ProductSearchSortingOptions,
} from '@ssrmart/shared/types';
import { Application, Request, Response } from 'express';

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

export const productSearchRoute = (app: Application) => {
  let products = [...require('./products.json')];

  app.post('/api/products/search', (req: Request, res: Response) => {
    const query: ProductSearchQuery = req.body;

    if (query.filters?.category) {
      products = filterByCategory(products, query.filters.category);
    }

    if (query.filters?.isBestSeller) {
      products = filterByIsBestSeller(products, query.filters.isBestSeller);
    }

    if (query.term) {
      products = filterByTerm(products, query.term);
    }

    if (query.sort) {
      products = sortProducts(products, query.sort);
    }

    res.json(products);
  });
};
