import { Component, input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumb } from '@ssrmart/client/utils';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ssrmart-breadcrumb',
  template: `
    <nav aria-label="breadcrumb" class="p-4">
      <ol class="flex items-center gap-2 text-gray-500">
        @for (item of breadcrumb(); track item.label;) {
        <li>
          @if ($last) {
          <span class="mat-label-large">{{ item.label }}</span>
          } @else {
          <div class="flex items-center gap-2">
            <a [routerLink]="item.url" [queryParams]="item.queryParams" class="underline mat-label-large">{{
              item.label
            }}</a>

            <mat-icon aria-hidden="true">chevron_right</mat-icon>
          </div>
          }
        </li>
        }
      </ol>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
})
export class BreadcrumbComponent {
  readonly breadcrumb = input.required<Breadcrumb>();
}
