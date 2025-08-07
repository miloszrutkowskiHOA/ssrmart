import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from './seo-data.model';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly _titleService = inject(Title);
  private readonly _metaService = inject(Meta);
  private readonly _document = inject(DOCUMENT);

  setSeoData(seoData: SeoData): void {
    const title = seoData.title ? `${seoData.title} | SSRmart` : 'SSRmart';

    this._titleService.setTitle(title);

    this._updateMetaTag('og:title', title);
    this._updateMetaTag('og:description', seoData.description);
    this._updateMetaTag('og:image', this._getImageParamsUrl(seoData.imageUrl));
    this._updateMetaTag('og:url', seoData.url);
    this._updateMetaTag('og:type', seoData.type);

    this._updateMetaTag('twitter:card', 'summary_large_image');
    this._updateMetaTag('twitter:title', title);
    this._updateMetaTag('twitter:description', seoData.description);
    this._updateMetaTag(
      'twitter:image',
      this._getImageParamsUrl(seoData.imageUrl)
    );

    this._updateCanonicalUrl(seoData.url);
  }

  private _updateMetaTag(name: string, content?: string): void {
    if (!content) {
      this._metaService.removeTag(`property="${name}"`);
      return;
    }

    if (this._metaService.getTag(`property="${name}"`)) {
      this._metaService.updateTag({ property: name, content });
    } else {
      this._metaService.addTag({ property: name, content });
    }
  }

  private _updateCanonicalUrl(url?: string): void {
    const existingCanonicalUrl = this._document.querySelector(
      'link[rel="canonical"]'
    );

    if (existingCanonicalUrl) existingCanonicalUrl.remove();

    if (url) {
      const canonicalLink = this._document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      this._document.head.appendChild(canonicalLink);
    }
  }

  private _getImageParamsUrl(imageUrl?: string): string | undefined {
    if (!imageUrl) return undefined;

    /*
      Open Graph image requirements:
      - size: 1200x630
      - format: jpg or png
    */

    const url = new URL(imageUrl);
    url.search = '';
    url.searchParams.set('w', '1200');
    url.searchParams.set('fm', 'jpg');
    url.searchParams.set('fit', 'crop');

    return url.toString();
  }
}
