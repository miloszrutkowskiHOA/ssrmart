import { CartItem } from './cart-item';

export type Cart = {
  id: string;
  items: CartItem[];
  totalPrice: number;
};
