import { CartItem, Product } from '@ssrmart/shared/types';
import { Request } from 'express';

export const CART_ID_COOKIE_NAME = 'cartId';

export const getCartId = (req: Request): string | undefined => {
  return req.cookies[CART_ID_COOKIE_NAME];
};

export const mapToCartItem = (product: Product): CartItem => {
  return {
    productId: product.id,
    productName: product.name,
    productImage: product.image,
    productPrice: product.price,
  };
};
