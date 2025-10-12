import { ProductImage } from "../product";

export type CartItem = {
  productId: string;
  productName: string;
  productImage: ProductImage;
  productPrice: number;
};