import { Product } from '@ssrmart/shared/types';
import { Router } from 'express';

export const getProductByIdRoute = (router: Router): void => {
  router.get('/products/:id', async (req, res) => {
    const products = [...(await import('./products.json')).default] as Product[];

    const productId = req.params.id;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      res.status(404).json({ error: `Product with id ${productId} not found` });
      return;
    }

    res.json(product);
  });
};
