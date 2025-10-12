import { inject, Injectable, signal } from '@angular/core';
import { Cart } from '@ssrmart/shared/types';
import { CartService } from './cart.service';
import { catchError, EMPTY, mergeMap, of, Subject, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartState {
  private readonly _cartApiService = inject(CartService);
  private readonly _cart = signal<Cart | null>(null);

  private readonly _getCart$ = new Subject<void>();
  private readonly _addToCart$ = new Subject<string>();
  private readonly _removeFromCart$ = new Subject<string>();

  readonly cart = this._cart.asReadonly();

  constructor() {
    this._handleGetCart();
    this._handleAddToCart();
    this._handleRemoveFromCart();
  }

  getCart(): void {
    this._getCart$.next();
  }

  addToCart(productId: string): void {
    this._addToCart$.next(productId);
  }

  removeFromCart(productId: string): void {
    this._removeFromCart$.next(productId);
  }

  private _handleGetCart(): void {
    this._getCart$
      .pipe(
        switchMap(() => this._cartApiService.getCart()),
        catchError(() => of(null)),
        takeUntilDestroyed()
      )
      .subscribe((cart) => {
        this._cart.set(cart);
      });
  }

  private _handleAddToCart(): void {
    this._addToCart$
      .pipe(
        mergeMap((productId) => this._cartApiService.addToCart(productId)),
        takeUntilDestroyed()
      )
      .subscribe((cart) => {
        this._cart.set(cart);
      });
  }

  private _handleRemoveFromCart(): void {
    this._removeFromCart$
      .pipe(
        mergeMap((productId) => this._cartApiService.removeFromCart(productId)),
        catchError((error: HttpErrorResponse) =>
          error.status === 404 ? of(null) : EMPTY
        ),
        takeUntilDestroyed()
      )
      .subscribe((cart) => {
        this._cart.set(cart);
      });
  }
}
