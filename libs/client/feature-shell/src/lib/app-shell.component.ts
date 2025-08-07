import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

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
];

@Component({
  selector: 'ssrmart-app-shell',
  templateUrl: './app-shell.component.html',
  styles: [
    `
      .mat-icon.mat-primary {
        --mat-icon-color: var(--mat-sys-primary);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    RouterOutlet,
  ],
  host: {
    class: 'flex flex-col min-h-screen',
  },
})
export default class AppShellComponent {
  readonly navItems = NAV_ITEMS;
  readonly year = new Date().getFullYear();
}
