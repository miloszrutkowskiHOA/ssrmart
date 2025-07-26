import { Product, ProductSearchQuery } from '@ssrmart/shared/types';
import { Application, Request, Response } from 'express';
import {
  filterByCategory,
  filterByIsBestSeller,
  filterByTerm,
  sortProducts,
} from './product-search.utils';

export const productSearchRoute = (app: Application): void => {
  let products = [...require('./products.json')] as Product[];

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
