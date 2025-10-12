import { Router } from 'express';
import { getCart } from './lib/get-cart';
import { addToCart } from './lib/add-to-cart';
import { removeFromCart } from './lib/remove-from-cart';

const registerCartRoutes = (router: Router): void => {
  getCart(router);
  addToCart(router);
  removeFromCart(router);
};

export default registerCartRoutes;