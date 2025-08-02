import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ROUTES } from '@ssrmart/client/feature-shell';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideConfig } from '@ssrmart/shared/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZonelessChangeDetection(),
    provideRouter(ROUTES, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideConfig({
      baseUrl: 'http://localhost:4200',
      apiUrl: 'http://localhost:4200/api',
    }),
  ],
};
