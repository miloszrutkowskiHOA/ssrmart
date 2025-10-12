import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { ArticleService } from '@ssrmart/client/articles/data-access';
import { SeoService } from '@ssrmart/client/utils';
import { BlogCardComponent } from './components';
import { getBlogsLandingPageSeo } from './utils/get-blogs-landing-page-seo';

@Component({
  selector: 'ssrmart-blogs-landing-page',
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterLink,
    BlogCardComponent,
  ],
  templateUrl: './blogs-landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsLandingPageComponent {
  private readonly _articleService = inject(ArticleService);
  private readonly _seoService = inject(SeoService);

  readonly articlesResource = rxResource({
    stream: () => this._articleService.getArticles(),
    defaultValue: [],
  });

  constructor() {
    this._seoService.setSeoData(getBlogsLandingPageSeo());
  }
}
