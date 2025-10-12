import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@ssrmart/shared/config';
import { Cart } from '@ssrmart/shared/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = inject(ConfigService).get('apiUrl');

  getCart(): Observable<Cart> {
    return this._http.get<Cart>(`${this._apiUrl}/cart`);
  }

  addToCart(productId: string): Observable<Cart> {
    return this._http.post<Cart>(`${this._apiUrl}/cart`, { productId });
  }

  removeFromCart(productId: string): Observable<Cart | null> {
    return this._http.delete<Cart | null>(`${this._apiUrl}/cart`, { body: { productId } });
  }
}
