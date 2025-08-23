import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
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

    afterNextRender(async () => {
      await this._initializeMap();
    });
  }

  private async _initializeMap(): Promise<void> {
    const lat = 52.225996;
    const lng = 20.949808;
    const zoom = 16;

    try {
      const L = await import('leaflet');
      const map = L.map('map').setView([lat, lng], zoom);
      L.marker([lat, lng]).addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } catch (error) {
      console.error('Failed to initialize map:', error);
    }
  }
}
