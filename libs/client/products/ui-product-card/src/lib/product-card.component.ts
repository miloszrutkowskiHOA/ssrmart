import { Component, input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '@ssrmart/shared/types';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { ImageSizePipe } from '@ssrmart/client/utils';

@Component({
  selector: 'ssrmart-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, MatCardModule, MatIconModule, CurrencyPipe, ImageSizePipe],
  host: {
    class: 'block max-w-[25rem]',
  },
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly imageLoadPriority = input<boolean>(true);
}
