import type { KeyValue } from '@angular/common';
import type { Article } from '@ssrmart/shared/types';
import type { OgImage } from './og-tags/og-image';
import type { OgType } from './og-tags/og-type';
import type { TwitterCardType } from './twitter-tags/twitter-card-type';

export type SeoData = {
  title?: string;
  description?: string;
  ogImage?: OgImage;
  ogType?: OgType;
  ogUrl?: string;
  twitterCardType?: TwitterCardType;
  twitterLabel?: KeyValue<string, string>;
  twitterLabel2?: KeyValue<string, string>;
  article?: Article;

  // Other SEO properties...
  keywords?: string[];
  noIndex?: boolean;
};
