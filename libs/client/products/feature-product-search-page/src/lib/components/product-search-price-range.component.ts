import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
} from '@angular/core';
import {
  CURRENCY_TRANSFORM,
  PRICE_RANGE_MAX,
  PRICE_RANGE_MIN,
} from '@ssrmart/client/utils';
import { ProductSearchPriceRange } from '@ssrmart/shared/types';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'ssrmart-product-search-price-range',
  template: `
    @defer (hydrate on immediate) {
    <div>
      <span class="mat-title-medium">Price Range:</span>
      {{ minPriceFormatted() }} -
      {{ maxPriceFormatted() }}
    </div>
    <mat-slider
      [min]="minPrice"
      [max]="maxPrice"
      [step]="10"
      discrete
      class="slider"
    >
      <input
        matSliderStartThumb
        [value]="priceRange().min"
        (valueChange)="updateMinPrice($event)"
      />
      <input
        matSliderEndThumb
        [value]="priceRange().max"
        (valueChange)="updateMaxPrice($event)"
      />
    </mat-slider>
    }
  `,
  styles: [
    `
      .slider {
        width: calc(100% - 20px) !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSliderModule],
})
export class ProductSearchPriceRangeComponent {
  readonly minPrice = PRICE_RANGE_MIN;
  readonly maxPrice = PRICE_RANGE_MAX;

  private readonly _currencyTransform = inject(CURRENCY_TRANSFORM);

  readonly priceRange = model<ProductSearchPriceRange>({
    min: this.minPrice,
    max: this.maxPrice,
  });

  readonly minPriceFormatted = computed(() =>
    this._currencyTransform(this.priceRange().min, '1.0-0')
  );

  readonly maxPriceFormatted = computed(() =>
    this._currencyTransform(this.priceRange().max, '1.0-0')
  );

  updateMinPrice(value: number): void {
    this.priceRange.set({
      min: value,
      max: this.priceRange().max,
    });
  }

  updateMaxPrice(value: number): void {
    this.priceRange.set({
      min: this.priceRange().min,
      max: value,
    });
  }
}
