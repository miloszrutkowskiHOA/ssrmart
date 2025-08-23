import {
  ChangeDetectionStrategy,
  Component,
  model,
  ViewEncapsulation,
} from '@angular/core';
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import {
  PRODUCT_CATEGORIES,
  ProductSearchPriceRange,
} from '@ssrmart/shared/types';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {
  PRICE_RANGE_MIN,
  PRICE_RANGE_MAX,
  capitalize,
} from '@ssrmart/client/utils';
import { CurrencyPipe } from '@angular/common';

type NavigationItem = {
  label: string;
  category: string | undefined;
  id: string;
};

const CATEGORIES_NAVIGATION: NavigationItem[] = [
  {
    label: 'All categories',
    category: undefined,
    id: 'all',
  },
  ...PRODUCT_CATEGORIES.map((category) => ({
    label: capitalize(category),
    category: category,
    id: category,
  })),
];

@Component({
  selector: 'ssrmart-product-search-filters',
  template: `
    <div>
      <div class="mat-title-medium mb-2">Category</div>
      <ul class="flex flex-col gap-2 list-none p-0">
        @for (category of categoriesNavigation; track category.id) {
        <li>
          <a
            [routerLink]="['/products']"
            [queryParams]="{ category: category.category }"
            queryParamsHandling="merge"
            [routerLinkActive]="['text-[--mat-sys-primary]', 'font-bold']"
            [routerLinkActiveOptions]="routerLinkActiveOptions"
            >{{ category.label }}</a
          >
        </li>
        }
      </ul>
    </div>

    <mat-checkbox
      class="bestsellers-checkbox"
      [checked]="bestsellers()"
      (change)="bestsellers.set($event.checked)"
      >Bestsellers</mat-checkbox
    >

    <div>
      <div class="mat-title-medium">
        Price Range ({{ priceRange().min | currency }} -
        {{ priceRange().max | currency }})
      </div>
      <mat-slider
        class="!w-3/4"
        [min]="minPrice"
        [max]="maxPrice"
        [step]="10"
        discrete
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
    </div>
  `,
  styles: [
    `
      ssrmart-product-search-filters .bestsellers-checkbox {
        --mat-checkbox-label-text-font: var(--mat-sys-title-medium-font);
        --mat-checkbox-label-text-line-height: var(
          --mat-sys-title-medium-line-height
        );
        --mat-checkbox-label-text-letter-spacing: var(
          --mat-sys-title-medium-tracking
        );
        --mat-checkbox-label-text-weight: var(--mat-sys-title-medium-weight);
        --mat-checkbox-label-text-size: var(--mat-sys-title-medium-size);
        --mat-checkbox-state-layer-size: 0;

        .mdc-label {
          margin-left: 0.5rem;
        }
      }
    `,
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonModule,
    CurrencyPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'flex flex-col gap-8',
  },
})
export class ProductSearchFiltersComponent {
  readonly categoriesNavigation = CATEGORIES_NAVIGATION;
  readonly minPrice = PRICE_RANGE_MIN;
  readonly maxPrice = PRICE_RANGE_MAX;
  readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'ignored',
    fragment: 'ignored',
  };

  readonly bestsellers = model(false);

  readonly priceRange = model<ProductSearchPriceRange>({
    min: this.minPrice,
    max: this.maxPrice,
  });

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
