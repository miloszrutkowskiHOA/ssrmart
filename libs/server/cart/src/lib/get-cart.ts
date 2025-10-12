import { Router } from 'express';
import { cartDb } from './cart-db';
import { getCartId } from './cart.util';

export const getCart = (router: Router): void => {
  router.get('/cart', async (req, res) => {
    const cartId = getCartId(req);
    const cart = cartDb.find((cart) => cart.id === cartId);

    if (!cart) {
      res.status(404).json({ error: `Cart with id ${cartId} not found` });
      return;
    }

    res.json(cart);
  });
};
