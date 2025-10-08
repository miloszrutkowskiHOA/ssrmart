import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Article } from '@ssrmart/shared/types';
import { SeoData } from './seo-data.model';
import type { TwitterCardType } from './twitter-tags/twitter-card-type';

interface ImageParams {
  width: number;
  height: number;
  // See: https://unsplash.com/documentation#supported-parameters
  // All possible types for Unsplash image parameters:
  format: 'jpg' | 'png' | 'webp';
  fit: 'clip' | 'crop' | 'fill' | 'facearea' | 'fit' | 'scale';
}

/*
  Open Graph image requirements:
  - size: 1200x630
  - format: jpg or png
*/
export const OG_IMAGE_PARAMS: ImageParams = {
  width: 1200,
  height: 630,
  format: 'jpg',
  fit: 'crop',
};

/*
  Twitter image requirements:
  - min size: 300x157, max size: 4096x4096
  - aspect ratio: 2:1
  - format: jpg, png, webp, gic
*/
export const TWITTER_IMAGE_PARAMS: ImageParams = {
  width: 1200,
  height: 600,
  format: 'jpg',
  fit: 'crop',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly _titleService = inject(Title);
  private readonly _metaService = inject(Meta);
  private readonly _document = inject(DOCUMENT);

  setSeoData(seoData: SeoData): void {
    const title = seoData.title ? `${seoData.title} | SSRmart` : 'SSRmart';

    this._titleService.setTitle(title);
    this._updateDescription(seoData.description);

    this._updateMetaTag('og:locale', 'en_US');
    this._updateMetaTag('og:site_name', 'SSRmart');
    this._updateMetaTag('og:title', title);
    this._updateMetaTag('og:description', seoData.description);

    this._updateMetaTag(
      'og:image',
      this._getImageParamsUrl(seoData.ogImage?.url, OG_IMAGE_PARAMS)
    );
    this._updateMetaTag('og:image:width', '1200');
    this._updateMetaTag('og:image:height', '630');
    this._updateMetaTag('og:image:type', 'image/jpeg');
    this._updateMetaTag('og:image:alt', seoData.ogImage?.alt);
    this._updateMetaTag('og:url', seoData.ogUrl);
    this._updateMetaTag('og:type', seoData.ogType);

    // The Twitter @username the card should be attributed to.
    this._updateMetaTag('twitter:site', '@ssrmart');
    const cardType: TwitterCardType =
      seoData.twitterCardType ?? 'summary_large_image';
    this._updateMetaTag('twitter:card', cardType);
    this._updateMetaTag('twitter:title', title);
    this._updateMetaTag('twitter:description', seoData.description);

    this._updateMetaTag(
      'twitter:image',
      this._getImageParamsUrl(seoData.ogImage?.url, TWITTER_IMAGE_PARAMS)
    );
    this._updateMetaTag('twitter:image:alt', seoData.ogImage?.alt);

    this._updateMetaTag(
      'robots',
      seoData.noIndex ? 'noindex,nofollow' : 'index,follow'
    );

    this._updateMetaTag('twitter:label1', seoData.twitterLabel?.key);
    this._updateMetaTag('twitter:data1', seoData.twitterLabel?.value);
    this._updateMetaTag('twitter:label2', seoData.twitterLabel2?.key);
    this._updateMetaTag('twitter:data2', seoData.twitterLabel2?.value);

    this._updateCanonicalUrl(seoData.ogUrl);
  }

  setArticleMetadata(article: Article): void {
    this._updateMetaTag('article:published_time', article.publishedAt);

    if (article.modifiedAt) {
      this._updateMetaTag('article:modified_time', article.modifiedAt);
    }

    if (article.expirationTime) {
      this._updateMetaTag('article:expiration_time', article.expirationTime);
    }

    this._updateMetaTag('article:author', article.author);
    this._updateMetaTag('article:section', article.category);

    // Set article tags
    article.tags.forEach((tag) => {
      this._updateMetaTag('article:tag', tag);
    });
  }

  private _updateDescription(description?: string): void {
    if (!description) {
      this._metaService.removeTag(`name="description"`);
      return;
    }

    if (this._metaService.getTag(`property="name"`)) {
      this._metaService.updateTag({
        name: 'description',
        content: description,
      });
    } else {
      this._metaService.addTag({ name: 'description', content: description });
    }
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

  private _getImageParamsUrl(
    imageUrl: string | undefined,
    imageParams: ImageParams
  ): string | undefined {
    if (!imageUrl) return undefined;

    const url = new URL(imageUrl);
    url.search = '';
    url.searchParams.set('w', imageParams.width.toString());
    url.searchParams.set('h', imageParams.height.toString());
    url.searchParams.set('fm', imageParams.format);
    url.searchParams.set('fit', imageParams.fit);

    return url.toString();
  }
}
