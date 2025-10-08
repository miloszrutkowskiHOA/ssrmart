import {
  ChangeDetectionStrategy,
  Component,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ssrmart-product-search-bestsellers-control',
  template: `
    @defer (hydrate on interaction) {
    <mat-checkbox
      class="bestsellers-checkbox"
      [checked]="bestsellers()"
      (change)="bestsellers.set($event.checked)"
      >Bestsellers</mat-checkbox
    >
    }
  `,
  styles: [
    `
      ssrmart-product-search-bestsellers-control .bestsellers-checkbox {
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [MatCheckboxModule],
})
export class ProductSearchBestsellersControlComponent {
  readonly bestsellers = model(false);
}
