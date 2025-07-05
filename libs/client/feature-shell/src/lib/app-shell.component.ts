import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    RouterOutlet,
  ],
})
export default class AppShellComponent {
  readonly navItems = NAV_ITEMS;
}
