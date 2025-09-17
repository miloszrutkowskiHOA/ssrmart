import { ChangeDetectionStrategy, Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'lib-counter',
  template: `
    <div>{{ count() }}</div>
    <button (click)="count.set(count() + 1)">Increment</button>
    <button (click)="count.set(count() - 1)">Decrement</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }
    `,
  ],
})
export class CounterComponent {
  readonly count = signal(0);
}
