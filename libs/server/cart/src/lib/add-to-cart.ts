import { Router, Response } from 'express';
import { CART_ID_COOKIE_NAME, getCartId, mapToCartItem } from './cart.util';
import { cartDb } from './cart-db';
import { Cart, Product } from '@ssrmart/shared/types';
import { getProducts } from '@ssrmart/server/products';
import { v4 as uuidv4 } from 'uuid';

const addToExistingCart = (
  cart: Cart,
  product: Product,
  res: Response
): void => {
  cart.items.push(mapToCartItem(product));
  cart.totalPrice += product.price;

  res.json(cart);
};

const createNewCart = (product: Product, res: Response): void => {
  const newCart: Cart = {
    id: uuidv4(),
    items: [mapToCartItem(product)],
    totalPrice: product.price,
  };

  cartDb.push(newCart);

  res.cookie(CART_ID_COOKIE_NAME, newCart.id, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
  });
  res.json(newCart);
};

export const addToCart = async (router: Router): Promise<void> => {
  router.post('/cart', async (req, res) => {
    const productId = req.body.productId;
    const product = (await getProducts()).find(
      (product) => product.id === productId
    );

    if (!product) {
      res
        .status(400)
        .json({ error: `Product with id ${productId} does not exist` });

      return;
    }

    const cartId = getCartId(req);
    const cart = cartDb.find((cart) => cart.id === cartId);

    if (!cart) {
      createNewCart(product, res);
      return;
    }

    if (cart.items.some((item) => item.productId === productId)) {
      // product already in cart
      res.json(cart);
    } else {
      addToExistingCart(cart, product, res);
    }
  });
};
