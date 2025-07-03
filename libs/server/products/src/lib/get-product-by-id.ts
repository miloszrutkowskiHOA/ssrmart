import { Product } from '@ssrmart/shared/types';
import { Application } from 'express';

export const getProductByIdRoute = (app: Application): void => {
  const products = require('./products.json') as Product[];

  app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      res
        .status(404)
        .json({ error: `Product with id ${productId} not found` });
      return;
    }

    res.json(product);
  });
};
