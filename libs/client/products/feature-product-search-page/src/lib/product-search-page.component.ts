import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  DEFAULT_PRICE_RANGE,
  priceRangeFromParam,
  priceRangeToParam,
  queryController,
  SeoData,
  SeoService,
} from '@ssrmart/client/utils';
import {
  ProductSearchBestsellersControlComponent,
  ProductSearchCategoriesComponent,
  ProductSearchPriceRangeComponent,
  ProductSearchSortingComponent,
  ProductSearchTermComponent,
} from './components';
import {
  PRODUCT_CATEGORIES,
  ProductCategory,
  ProductSearchPriceRange,
  ProductSearchQuery,
  ProductSearchSortingOptions,
} from '@ssrmart/shared/types';
import { ProductService } from '@ssrmart/client/data-access';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '@ssrmart/client/products/ui-product-card';

@Component({
  selector: 'ssrmart-product-search-page',
  templateUrl: './product-search-page.component.html',
  imports: [
    MatCardModule,
    ProductSearchCategoriesComponent,
    ProductSearchBestsellersControlComponent,
    ProductSearchPriceRangeComponent,
    ProductSearchTermComponent,
    ProductSearchSortingComponent,
    MatProgressSpinnerModule,
    RouterLink,
    ProductCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex  gap-4 p-4 relative',
  },
})
export class ProductSearchPageComponent {
  private readonly _productsService = inject(ProductService);
  private readonly _seoService = inject(SeoService);

  // SEO data from resolver
  readonly seo = input<SeoData>();

  readonly category = queryController<ProductCategory | undefined>(
    'category',
    undefined,
    {
      fromParam: (value) =>
        PRODUCT_CATEGORIES.find((category) => category === value) ?? undefined,
    }
  );

  readonly sort = queryController<ProductSearchSortingOptions>('sort', 'name');
  readonly term = queryController('term', '');

  readonly isBestSeller = queryController('bestsellers', false, {
    fromParam: Boolean,
  });

  readonly priceRange = queryController<ProductSearchPriceRange>(
    'price',
    DEFAULT_PRICE_RANGE,
    {
      toParam: priceRangeToParam,
      fromParam: priceRangeFromParam,
    }
  );

  readonly productSearchQuery = computed<ProductSearchQuery>(() => ({
    filters: {
      category: this.category(),
      isBestSeller: this.isBestSeller(),
      priceRange: this.priceRange(),
    },
    sort: this.sort(),
    term: this.term(),
  }));

  readonly productSearchResource = rxResource({
    params: () => this.productSearchQuery(),
    stream: ({ params }) => this._productsService.searchProducts(params),
    defaultValue: [],
  });

  constructor() {
    effect(() => {
      this._seoService.setSeoData({
        ...this.seo(),
        noIndex: this.productSearchResource.value().length === 0,
      });
    });
  }
}
