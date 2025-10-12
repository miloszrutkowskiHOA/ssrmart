import {
  ChangeDetectionStrategy,
  Component,
  inject,
  DestroyRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '@ssrmart/client/products/ui-product-card';
import { ProductService } from '@ssrmart/client/products/data-access';
import { rxResource } from '@angular/core/rxjs-interop';
import { SeoService, StructuredDataService } from '@ssrmart/client/utils';
import { getHomePageStructuredData } from './home-page-structured-data';
import { getHomePageSeo } from './home-page-seo';

@Component({
  selector: 'ssrmart-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
      .hero-section {
        background: var(--theme-grandient);
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
  private readonly _structuredDataService = inject(StructuredDataService);

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
    this._seoService.setSeoData(getHomePageSeo());

    this._structuredDataService.addStructuredData(
      getHomePageStructuredData(),
      'website'
    );

    inject(DestroyRef).onDestroy(() => {
      this._structuredDataService.removeStructuredData('website');
    });
  }
}
