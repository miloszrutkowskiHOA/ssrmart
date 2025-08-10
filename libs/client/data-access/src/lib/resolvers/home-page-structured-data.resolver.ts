import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { generateHomePageStructuredData } from '@ssrmart/client/utils';
import { ConfigService } from '@ssrmart/shared/config';
import { StructuredData } from '@ssrmart/client/utils';

export const homePageStructuredDataResolver: ResolveFn<StructuredData> = () => {
  const baseUrl = inject(ConfigService).get('baseUrl');
  return generateHomePageStructuredData(baseUrl);
};
