import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ssrmart-header',
  template: `
    <mat-toolbar role="heading">
      <img ngSrc="/logo.svg" width="120" height="40" alt="SRRmart logo" />

      <div class="flex-auto"></div>

      <ssrmart-navigation class="navigation">
        <li class="md:ml-4">
          <a mat-icon-button [routerLink]="'/cart'" aria-label="Cart">
            <mat-icon color="primary">shopping_cart</mat-icon>
          </a>
        </li>
      </ssrmart-navigation>

      <div class="md:hidden">
        <button
          mat-icon-button
          (click)="openSidenavMenu.emit()"
          aria-label="Open sidenav menu"
        >
          <mat-icon>menu</mat-icon>
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .mat-icon.mat-primary {
        --mat-icon-color: var(--mat-sys-primary);
      }

      .navigation {
        --navigation-item-display: none;

        @media (screen(md)) {
          --navigation-item-display: list-item;
        }
      }
    `,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage,
    MatButtonModule,
    NavigationComponent,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly openSidenavMenu = output<void>();
}
