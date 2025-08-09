import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '@ssrmart/client/products/ui-product-card';
import { ProductService } from '@ssrmart/client/data-access';
import { rxResource } from '@angular/core/rxjs-interop';
import { SeoData, SeoService } from '@ssrmart/client/utils';

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
  private readonly _seoService = inject(SeoService);

  readonly seo = input<SeoData>(); // resolver binding

  readonly bestsellersResource = rxResource({
    stream: () =>
      this._productService.searchProducts({
        filters: {
          isBestSeller: true,
        },
        limit: 3,
      }),
  });

  constructor() {
    effect(() => this._seoService.setSeoData(this.seo() ?? {}));
  }
}
