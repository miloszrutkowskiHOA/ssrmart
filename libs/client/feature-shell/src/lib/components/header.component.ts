import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  path: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
];

@Component({
  selector: 'ssrmart-header',
  template: `
    <mat-toolbar role="heading">
      <img ngSrc="/logo.svg" width="120" height="40" alt="SRRmart logo" />

      <div class="flex-auto"></div>

      <nav>
        <ul class="flex items-center gap-4">
          @for (item of navItems; track item.path) {
          <li>
            <a class="link" [routerLink]="item.path">{{ item.label }}</a>
          </li>
          }

          <li class="ml-8">
            <a mat-icon-button [routerLink]="'/cart'">
              <mat-icon color="primary">shopping_cart</mat-icon>
            </a>
          </li>
        </ul>
      </nav>
    </mat-toolbar>
  `,
  styles: [
    `
      .mat-icon.mat-primary {
        --mat-icon-color: var(--mat-sys-primary);
      }
    `,
  ],
  imports: [MatToolbarModule, MatIconModule, RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly navItems = NAV_ITEMS;
}
