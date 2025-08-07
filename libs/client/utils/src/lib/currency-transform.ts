import { CurrencyPipe } from '@angular/common';
import {
  DEFAULT_CURRENCY_CODE,
  inject,
  InjectionToken,
  LOCALE_ID,
} from '@angular/core';

type CurrencyTransformFn = (value: number) => string | null;

export const CURRENCY_TRANSFORM = new InjectionToken<CurrencyTransformFn>(
  'CURRENCY_TRANSFORM',
  {
    providedIn: 'root',
    factory: () => {
      const currencyPipe = new CurrencyPipe(
        inject(LOCALE_ID),
        inject(DEFAULT_CURRENCY_CODE)
      );

      return (value: number): string | null => currencyPipe.transform(value);
    },
  }
);
