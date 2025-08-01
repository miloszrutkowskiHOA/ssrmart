import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '@ssrmart/client/products/ui-product-card';
import { ProductService } from '@ssrmart/client/products/products-data-access';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ssrmart-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
      .hero-section {
        background: linear-gradient(
          45deg,
          var(--mat-sys-primary),
          var(--mat-sys-tertiary)
        );
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    RouterLink,
    NgOptimizedImage,
    ProductCardComponent,
  ],
})
export class HomePageComponent {
  private readonly _productService = inject(ProductService);

  readonly bestsellersResource = rxResource({
    stream: () =>
      this._productService.searchProducts({
        filters: {
          isBestSeller: true,
        },
        limit: 3,
      }),
  });
}
