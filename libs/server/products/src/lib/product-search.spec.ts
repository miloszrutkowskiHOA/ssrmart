import {
  filterByCategory,
  filterByIsBestSeller,
  filterByTerm,
  sortProducts,
} from './product-search';
import {
  Product,
  ProductCategory,
  ProductSearchSortingOptions,
} from '@ssrmart/shared/types';

const mockProducts: Product[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440009',
    name: 'Compact Power Bank 10000mAh',
    shortDescription: 'Ultra-portable power bank with fast charging technology',
    description: 'Ultra-compact 10000mAh power bank...',
    imageUrl:
      'https://images.unsplash.com/photo-1614399113305-a127bb2ca893?w=400&h=400&fm=webp',
    rating: 4.6,
    category: 'accessories',
    price: 24.99,
    isBestSeller: true,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440010',
    name: '3-in-1 Charging Station',
    shortDescription:
      'Simultaneous charging for phone, earbuds, and smartwatch',
    description: 'Elegant charging station...',
    imageUrl:
      'https://images.unsplash.com/photo-1633583828246-575af220bdc1?w=400&h=400&fm=webp',
    rating: 4.5,
    category: 'accessories',
    price: 149.99,
    isBestSeller: false,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440011',
    name: 'Braided USB-C Cable 6ft',
    shortDescription: 'Durable fast charging cable with reinforced connectors',
    description: 'Premium braided USB-C cable...',
    imageUrl:
      'https://images.unsplash.com/photo-1595756630452-736bc8ef3693?w=400&h=400&fm=webp',
    rating: 4.4,
    category: 'accessories',
    price: 19.99,
    isBestSeller: false,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440012',
    name: 'Ultra-Fast USB 3.0 Flash Drive 128GB',
    shortDescription: 'High-speed portable storage with secure encryption',
    description: 'High-performance USB 3.0 flash drive...',
    imageUrl:
      'https://images.unsplash.com/photo-1551818014-7c8ace9c1b5c?w=400&h=400&fm=webp',
    rating: 4.5,
    category: 'accessories',
    price: 22.99,
    isBestSeller: true,
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Wireless Bluetooth Headphones',
    shortDescription: 'Noise-cancelling over-ear headphones with 30h battery',
    description: 'Premium wireless headphones...',
    imageUrl:
      'https://images.unsplash.com/photo-1619296794093-3df1ae6819a8?w=400&h=400&fm=webp',
    rating: 4.7,
    category: 'audio',
    price: 149.99,
    isBestSeller: true,
  },
];

describe('filterByCategory', () => {
  it('should filter products by category', () => {
    const result = filterByCategory(mockProducts, 'audio' as ProductCategory);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Wireless Bluetooth Headphones');
  });
});

describe('filterByIsBestSeller', () => {
  it('should filter products by isBestSeller true', () => {
    const result = filterByIsBestSeller(mockProducts, true);
    expect(result.map((p) => p.name)).toEqual([
      'Compact Power Bank 10000mAh',
      'Ultra-Fast USB 3.0 Flash Drive 128GB',
      'Wireless Bluetooth Headphones',
    ]);
  });
  it('should filter products by isBestSeller false', () => {
    const result = filterByIsBestSeller(mockProducts, false);
    expect(result.map((p) => p.name)).toEqual([
      '3-in-1 Charging Station',
      'Braided USB-C Cable 6ft',
    ]);
  });
});

describe('filterByTerm', () => {
  it('should filter products by search term (case-insensitive)', () => {
    const result = filterByTerm(mockProducts, 'usb');
    expect(result.map((p) => p.name)).toEqual([
      'Braided USB-C Cable 6ft',
      'Ultra-Fast USB 3.0 Flash Drive 128GB',
    ]);
  });
});

describe('sortProducts', () => {
  it('should sort products by top-rated', () => {
    const result = sortProducts(
      [...mockProducts],
      'top-rated' as ProductSearchSortingOptions
    );
    expect(result[0].rating).toBe(4.7);
    expect(result[result.length - 1].rating).toBe(4.4);
  });
  it('should sort products by price ascending', () => {
    const result = sortProducts(
      [...mockProducts],
      'price-asc' as ProductSearchSortingOptions
    );
    expect(result[0].price).toBe(19.99);
    expect(result[result.length - 1].price).toBe(149.99);
  });
  it('should sort products by price descending', () => {
    const result = sortProducts(
      [...mockProducts],
      'price-desc' as ProductSearchSortingOptions
    );
    expect(result[0].price).toBe(149.99);
    expect(result[result.length - 1].price).toBe(19.99);
  });
});
