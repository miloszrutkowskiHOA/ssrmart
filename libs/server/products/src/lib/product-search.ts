import { Product, ProductSearchQuery } from '@ssrmart/shared/types';
import { Router, Request, Response } from 'express';
import {
  filterByCategory,
  filterByIsBestSeller,
  filterByTerm,
  limitProducts,
  sortProducts,
} from './product-search.utils';

export const productSearchRoute = (router: Router): void => {
  let products = [...require('./products.json')] as Product[];

  router.post('/products', (req: Request, res: Response) => {
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

    if (query.limit && query.limit > 0) {
      products = limitProducts(products, query.limit);
    }

    res.json(products);
  });
};
