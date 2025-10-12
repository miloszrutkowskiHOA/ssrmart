import { Router } from 'express';
import { CART_ID_COOKIE_NAME, getCartId } from './cart.util';
import { cartDb } from './cart-db';

export const removeFromCart = (router: Router): void => {
  router.delete('/cart', async (req, res) => {
    const cartId = getCartId(req);
    const cart = cartDb.find((cart) => cart.id === cartId);

    if (!cart) {
      res.status(404).json({ error: `Cart with id ${cartId} not found` });
      return;
    }

    const productId = req.body.productId;
    const product = cart.items.find((item) => item.productId === productId);

    if (!product) {
      res.status(400).json({ error: `Product with id ${productId} not found in cart` });
      return;
    }

    cart.items = cart.items.filter((item) => item.productId !== productId);
    cart.totalPrice -= product.productPrice;

    if (cart.items.length === 0) {
      cartDb.splice(cartDb.indexOf(cart), 1);
      res.clearCookie(CART_ID_COOKIE_NAME);
      res.send(null)
    }

    res.json(cart);
  });
};