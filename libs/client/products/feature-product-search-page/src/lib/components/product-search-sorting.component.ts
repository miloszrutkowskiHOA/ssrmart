import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  PRODUCT_SEARCH_SORTING_OPTIONS,
  ProductSearchSortingOptions,
} from '@ssrmart/shared/types';

type SortingOption = {
  label: string;
  value: string;
};

const SORTING_OPTIONS_LABELS: Record<ProductSearchSortingOptions, string> = {
  name: 'Name',
  'top-rated': 'Top Rated',
  'price-asc': 'Price (Low to High)',
  'price-desc': 'Price (High to Low)',
};

const SORTING_OPTIONS: SortingOption[] = PRODUCT_SEARCH_SORTING_OPTIONS.map(
  (option) => ({
    label: SORTING_OPTIONS_LABELS[option],
    value: option,
  })
);

@Component({
  selector: 'ssrmart-product-search-sorting',
  template: `
    @defer (hydrate on interaction) {
    <mat-form-field class="w-full">
      <mat-label>Sort by</mat-label>
      <mat-select [(value)]="sorting">
        @for (option of sortingOptions; track option.value) {
        <mat-option [value]="option.value">{{ option.label }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSelectModule, MatFormFieldModule],
})
export class ProductSearchSortingComponent {
  readonly sortingOptions = SORTING_OPTIONS;

  readonly sorting = model<ProductSearchSortingOptions>('name');
}
