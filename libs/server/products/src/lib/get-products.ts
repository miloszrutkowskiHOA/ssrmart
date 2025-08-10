import { Product } from '@ssrmart/shared/types';

export const getProducts = async (): Promise<Product[]> => {
  const products = await import('./products.json');
  return products.default as Product[];
};