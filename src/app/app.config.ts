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
import { IMAGE_CONFIG } from '@angular/common';
import environment from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZonelessChangeDetection(),
    provideRouter(ROUTES, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideConfig(environment),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 30,
      },
    },
  ],
};
