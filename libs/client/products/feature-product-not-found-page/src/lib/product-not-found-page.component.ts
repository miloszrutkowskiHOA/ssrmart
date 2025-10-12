import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SeoService } from '@ssrmart/client/utils';

@Component({
  selector: 'ssrmart-product-not-found-page',
  template: `
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
    <p class="text-xl text-gray-600 mb-6">
      The product you are looking for does not exist.
    </p>
    <button mat-raised-button color="primary" routerLink="/products">
      Browse Products
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, RouterLink],
  host: {
    class:
      'max-w-[--section-max-w] mx-auto py-8 px-4 xl:px-0 block flex flex-col items-center justify-center ',
  },
})
export class ProductNotFoundPageComponent {
  private readonly _seoService = inject(SeoService);

  constructor() {
    this._seoService.setSeoData({
      title: 'Product Not Found',
      noIndex: true,
    });

    // This code snippet shows how to dynamically handle the response status and headers
    // It is commented out because these are already configured in the app.routes.server.ts file

    // const response = inject(RESPONSE_INIT);

    // if (response) {
    //   response.status = 404;
    //   response.headers = { 'Cache-Control': 'no-cache' };
    // }
  }
}
