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
import { ImageSizePipe, SeoService } from '@ssrmart/client/utils';
import { Article } from '@ssrmart/shared/types';
import { getArticleSeo } from './utils/get-article-seo';
import { ConfigService } from '@ssrmart/shared/config';

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
  private readonly _configService = inject(ConfigService);

  readonly article = input.required<Article>(); // resolver binding

  readonly sanitizedContent = computed(() => {
    const article = this.article();
    if (!article?.content) return '';
    return this._sanitizer.sanitize(1, article.content) || '';
  });

  constructor() {
    effect(() => {
      const seo = getArticleSeo(
        this.article(),
        this._configService.get('baseUrl')
      );

      this._seoService.setSeoData(seo);
    });

    effect(() => {
      this._seoService.setArticleMetadata(this.article());
    });
  }
}
