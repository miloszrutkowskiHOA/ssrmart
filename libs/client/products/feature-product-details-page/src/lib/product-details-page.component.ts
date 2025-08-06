import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from '@ssrmart/shared/types';
import { ImageSizePipe } from '@ssrmart/client/utils';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ssrmart-product-details-page',
  templateUrl: './product-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, CurrencyPipe, ImageSizePipe, MatButtonModule],
})
export class ProductDetailsPageComponent {
  readonly product = input<Product>(); // resolver binding
}
