import { ChangeDetectionStrategy, Component, effect, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ssrmart-product-search-term',
  template: `
    @defer (hydrate on interaction) {
    <mat-form-field class="w-full">
      <mat-label>Search Products</mat-label>
      <mat-icon matPrefix>search</mat-icon>
      <input
        matInput
        type="text"
        placeholder="Enter search term"
        [formControl]="termControl"
      />
    </mat-form-field>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class ProductSearchTermComponent {
  readonly term = model('');

  readonly termControl = new FormControl('');

  constructor() {
    effect(() => {
      if (this.term() !== this.termControl.value) {
        this.termControl.setValue(this.term());
      }
    });

    this.termControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(300), takeUntilDestroyed())
      .subscribe((value) => {
        this.term.set(value ?? '');
      });
  }
}
