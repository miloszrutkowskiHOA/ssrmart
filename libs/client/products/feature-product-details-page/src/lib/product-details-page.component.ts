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
  SeoService,
  StructuredDataService,
} from '@ssrmart/client/utils';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from '@ssrmart/client/ui-breadcrumb';
import { ConfigService } from '@ssrmart/shared/config';
import { CURRENCY_TRANSFORM } from '@ssrmart/client/utils';
import { getPdpBreadcrumb, getPdpSeo, getProductStructuredData } from './utils';
import { CartState } from '@ssrmart/client/cart/data-access';

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
  private readonly _currencyTransform = inject(CURRENCY_TRANSFORM);
  private readonly _cartState = inject(CartState);

  readonly product = input.required<Product>(); // resolver binding

  readonly breadcrumb = computed(() => getPdpBreadcrumb(this.product()));

  constructor() {
    effect(() => {
      const seo = getPdpSeo(
        this.product(),
        this._configService.get('baseUrl'),
        this._currencyTransform
      );

      this._seoService.setSeoData(seo);
    });

    this._registerProductStructuredData();
    this._registerBreadcrumbStructuredData();
  }

  addToCart(productId: string): void {
    this._cartState.addToCart(productId);
  }

  private _registerProductStructuredData(): void {
    effect(() => {
      const productStructuredData = getProductStructuredData(
        this.product(),
        this._configService.get('baseUrl')
      );

      this._structuredDataService.addStructuredData(
        productStructuredData,
        'product'
      );
    });

    inject(DestroyRef).onDestroy(() => {
      this._structuredDataService.removeStructuredData('product');
    });
  }

  private _registerBreadcrumbStructuredData(): void {
    effect(() => {
      const bradcrumbStructuredData = generateBreadcrumbStructuredData(
        this.breadcrumb(),
        this._configService.get('baseUrl')
      );

      this._structuredDataService.addStructuredData(
        bradcrumbStructuredData,
        'breadcrumb'
      );
    });

    inject(DestroyRef).onDestroy(() => {
      this._structuredDataService.removeStructuredData('breadcrumb');
    });
  }
}
