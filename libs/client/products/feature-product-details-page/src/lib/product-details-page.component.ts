import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from '@ssrmart/shared/types';
import { ImageSizePipe, SeoData, SeoService } from '@ssrmart/client/utils';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ssrmart-product-details-page',
  templateUrl: './product-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, CurrencyPipe, ImageSizePipe, MatButtonModule],
})
export class ProductDetailsPageComponent {
  private readonly _seoService = inject(SeoService);

  readonly product = input<Product>(); // resolver binding
  readonly seo = input<SeoData>(); // resolver binding

  constructor() {
    effect(() => {
      this._seoService.setSeoData(this.seo() ?? {});
    });
  }
}
