import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SeoService } from '@ssrmart/client/utils';
import { getAboutPageSeo } from './get-about-page-seo';

@Component({
  selector: 'ssrmart-about-page',
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatCardModule],
  host: {
    class:
      'block max-w-[--section-max-w] mx-auto py-16 px-4 xl:px-0 flex flex-col gap-16',
  },
})
export class AboutPageComponent {
  private readonly _seoService = inject(SeoService);

  constructor() {
    this._seoService.setSeoData(getAboutPageSeo());
  }
}
