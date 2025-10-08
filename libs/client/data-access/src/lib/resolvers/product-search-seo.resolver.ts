import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { capitalize, SeoData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';
import { PRODUCT_CATEGORIES, ProductCategory } from '@ssrmart/shared/types';

const categoryTypeGuard = (category: string): category is ProductCategory =>
  PRODUCT_CATEGORIES.some((c) => c === category);

const getTitle = (
  category: string,
  searchTerm: string,
  isBestSeller: boolean
): string => {
  if (categoryTypeGuard(category)) {
    return searchTerm
      ? `Search Results for "${searchTerm}" in ${capitalize(category)}`
      : `${capitalize(category)} Products`;
  }

  if (searchTerm) return `Search Results for "${searchTerm}"`;

  if (isBestSeller) return 'Best Selling Products';

  return 'Products';
};

const getDescription = (
  category: string,
  searchTerm: string,
  isBestSeller: boolean
): string => {
  if (searchTerm) return `Find the best products matching "${searchTerm}".`;

  if (categoryTypeGuard(category))
    return `Discover amazing ${category} products at great prices.`;

  if (isBestSeller) return 'Shop our most popular and best-selling products.';

  return 'Browse our wide selection of products.';
};

export const productSearchSeoResolver: ResolveFn<SeoData> = (route) => {
  const category = route.queryParams['category'];
  const searchTerm = route.queryParams['term'];
  const isBestSeller = route.queryParams['bestsellers'];

  const baseUrl = inject(ConfigService).get('baseUrl');
  const url = category
    ? `${baseUrl}/products?category=${category}`
    : `${baseUrl}/products`;

  const imageUrl =
    'https://images.unsplash.com/photo-1498049794561-7780e7231661';

  return {
    title: getTitle(category, searchTerm, Boolean(isBestSeller)),
    description: getDescription(category, searchTerm, Boolean(isBestSeller)),
    keywords: ['products', 'shop', 'online store', category, searchTerm].filter(
      Boolean
    ),
    ogType: 'website',
    ogUrl: url,
    imageUrl,
  };
};
