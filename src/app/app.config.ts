import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { ROUTES } from '@ssrmart/client/feature-shell';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideConfig } from '@ssrmart/shared/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZonelessChangeDetection(),
    provideRouter(ROUTES),
    provideHttpClient(),
    provideConfig({
      baseUrl: 'http://localhost:4200',
      apiUrl: 'http://localhost:4200/api',
    }),
  ],
};
