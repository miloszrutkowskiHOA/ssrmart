import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  path: string;
};

type NavOrientation = 'horizontal' | 'vertical';

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
  selector: 'ssrmart-navigation',
  template: `
    <mat-nav-list>
      <ul
        class="flex items-center gap-4"
        [class.flex-col]="orientation() === 'vertical'"
      >
        @for (item of navItems; track item.path) {
        <li class="navigation-item">
          <a mat-list-item [routerLink]="item.path">{{ item.label }}</a>
        </li>
        }

        <ng-content />
      </ul>
    </mat-nav-list>
  `,
  styles: [
    `
      .navigation-item {
        display: var(--navigation-item-display, 'list-item');
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatNavList, RouterLink],
})
export class NavigationComponent {
  readonly navItems = NAV_ITEMS;

  readonly orientation = input<NavOrientation>('horizontal');
}
