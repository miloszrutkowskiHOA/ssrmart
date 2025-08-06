import { ProductCategory } from './product-category';

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  rating: number;
  price: number;
  category: ProductCategory;
  isBestSeller: boolean;
  keywords: string[];
};
