import { DatePipe, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ImageSizePipe, SeoData, SeoService } from '@ssrmart/client/utils';
import { Article } from '@ssrmart/shared/types';

@Component({
  selector: 'ssrmart-article-page',
  imports: [
    NgOptimizedImage,
    DatePipe,
    ImageSizePipe,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    RouterLink,
  ],
  templateUrl: './article-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePageComponent {
  private readonly _seoService = inject(SeoService);
  private readonly _sanitizer = inject(DomSanitizer);

  readonly article = input<Article>(); // resolver binding
  readonly seo = input<SeoData>(); // resolver binding

  readonly sanitizedContent = computed(() => {
    const article = this.article();
    if (!article?.content) return '';
    return this._sanitizer.sanitize(1, article.content) || '';
  });

  constructor() {
    effect(() => this._seoService.setSeoData(this.seo() ?? {}));

    effect(() => {
      const article = this.article();
      if (article) {
        this._seoService.setArticleMetadata(article);
      }
    });
  }
}
