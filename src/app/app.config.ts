import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ROUTES } from '@ssrmart/client/feature-shell';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideConfig } from '@ssrmart/shared/config';
import environment from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withComponentInputBinding()),
    provideClientHydration(
      withIncrementalHydration(),
      withHttpTransferCacheOptions({ includePostRequests: true })
    ),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideConfig(environment),
  ],
};
