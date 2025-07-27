import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductSearchQuery } from '@ssrmart/shared/types';
import { ConfigService } from '@ssrmart/shared/config';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = inject(ConfigService).get('apiUrl');

  searchProducts(query?: ProductSearchQuery) {
    return this._http.post<Product[]>(`${this._apiUrl}/products`, query);
  }

  getProduct(id: string) {
    return this._http.get<Product>(`${this._apiUrl}/products/${id}`);
  }
}
