import { ProductCategory } from './product-category';

export type ProductImage = {
  url: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: ProductImage;
  rating: number;
  price: number;
  category: ProductCategory;
  isBestSeller: boolean;
  keywords: string[];
  ratingCount: number;
};
