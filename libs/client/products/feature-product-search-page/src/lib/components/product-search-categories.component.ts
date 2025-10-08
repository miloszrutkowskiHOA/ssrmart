import { ChangeDetectionStrategy, Component } from '@angular/core';
import { capitalize } from '@ssrmart/client/utils';
import { PRODUCT_CATEGORIES } from '@ssrmart/shared/types';
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

type NavigationItem = {
  label: string;
  category: string | undefined;
  id: string;
};

const CATEGORIES_NAVIGATION: NavigationItem[] = [
  {
    label: 'All categories',
    category: undefined,
    id: 'all',
  },
  ...PRODUCT_CATEGORIES.map((category) => ({
    label: capitalize(category),
    category: category,
    id: category,
  })),
];

@Component({
  selector: 'ssrmart-product-search-categories',
  template: `
    @defer (hydrate on interaction) {
    <div class="mat-title-medium mb-2">Category</div>
    <ul class="flex flex-col gap-2 list-none p-0">
      @for (category of categoriesNavigation; track category.id) {
      <li>
        <a
          [routerLink]="['/products']"
          [queryParams]="{ category: category.category }"
          queryParamsHandling="merge"
          [routerLinkActive]="['text-[--mat-sys-primary]', 'font-bold']"
          [routerLinkActiveOptions]="routerLinkActiveOptions"
          >{{ category.label }}</a
        >
      </li>
      }
    </ul>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
})
export class ProductSearchCategoriesComponent {
  readonly categoriesNavigation = CATEGORIES_NAVIGATION;
  readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'exact',
    matrixParams: 'ignored',
    fragment: 'ignored',
  };
}
