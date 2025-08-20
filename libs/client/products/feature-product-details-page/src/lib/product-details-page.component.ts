import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
} from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from '@ssrmart/shared/types';
import {
  generateBreadcrumbStructuredData,
  ImageSizePipe,
  SeoData,
  SeoService,
  StructuredData,
  StructuredDataService,
} from '@ssrmart/client/utils';
import { MatButtonModule } from '@angular/material/button';
import { getPdpBreadcrumb } from './get-pdp-breadcrumb';
import { BreadcrumbComponent } from '@ssrmart/client/ui-breadcrumb';
import { ConfigService } from '@ssrmart/shared/config';

@Component({
  selector: 'ssrmart-product-details-page',
  templateUrl: './product-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    ImageSizePipe,
    MatButtonModule,
    BreadcrumbComponent,
  ],
})
export class ProductDetailsPageComponent {
  private readonly _seoService = inject(SeoService);
  private readonly _structuredDataService = inject(StructuredDataService);
  private readonly _configService = inject(ConfigService);

  readonly product = input<Product>(); // resolver binding
  readonly seo = input<SeoData>(); // resolver binding
  readonly structuredData = input<StructuredData>(); // resolver binding

  readonly breadcrumb = computed(() => {
    const product = this.product();
    return product ? getPdpBreadcrumb(product) : null;
  });

  constructor() {
    effect(() => {
      this._seoService.setSeoData(this.seo() ?? {});
    });

    effect(() => {
      this._structuredDataService.addStructuredData(
        this.structuredData() ?? {},
        'product'
      );
    });

    effect(() => {
      if (this.breadcrumb()) {
        this._structuredDataService.addStructuredData(
          generateBreadcrumbStructuredData(
            this.breadcrumb()!,
            this._configService.get('baseUrl')
          ),
          'breadcrumb'
        );
      }
    });

    inject(DestroyRef).onDestroy(() => {
      this._structuredDataService.removeStructuredData('product');
      this._structuredDataService.removeStructuredData('breadcrumb');
    });
  }
}
