import { Router } from 'express';
import { productSearchRoute } from './lib/product-search';
import { getProductByIdRoute } from './lib/get-product-by-id';

const registerProductsRoutes = (router: Router): void => {
  productSearchRoute(router);
  getProductByIdRoute(router);
};

export default registerProductsRoutes;
export { getProducts } from './lib/get-products';
