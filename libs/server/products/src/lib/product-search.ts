import {  ProductSearchQuery } from '@ssrmart/shared/types';
import { Router, Request, Response } from 'express';
import {
  filterByCategory,
  filterByIsBestSeller,
  filterByPriceRange,
  filterByTerm,
  limitProducts,
  sortProducts,
  validatePriceRange,
} from './product-search.utils';
import { getProducts } from './get-products';

export const productSearchRoute = (router: Router): void => {
  router.post('/products', async (req: Request, res: Response) => {
    const query: ProductSearchQuery = req.body;

    let products = await getProducts();

    if (query.filters?.category) {
      products = filterByCategory(products, query.filters.category);
    }

    if (query.filters?.isBestSeller) {
      products = filterByIsBestSeller(products, query.filters.isBestSeller);
    }

    if (query.filters?.priceRange) {
      try {
        validatePriceRange(query.filters.priceRange);
      } catch (error: unknown) {
        res.status(400).json({
          error: error instanceof Error ? error.message : 'Invalid price range',
        });
        return;
      }

      products = filterByPriceRange(products, query.filters.priceRange);
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
