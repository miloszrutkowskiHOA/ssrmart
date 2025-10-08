import { CurrencyPipe } from '@angular/common';
import {
  DEFAULT_CURRENCY_CODE,
  inject,
  InjectionToken,
  LOCALE_ID,
} from '@angular/core';

type CurrencyTransformFn = (
  value: number,
  digitsInfo?: string
) => string | null;

export const CURRENCY_TRANSFORM = new InjectionToken<CurrencyTransformFn>(
  'CURRENCY_TRANSFORM',
  {
    providedIn: 'root',
    factory: () => {
      const localeId = inject(LOCALE_ID);
      const defaultCurrencyCode = inject(DEFAULT_CURRENCY_CODE);

      const currencyPipe = new CurrencyPipe(localeId, defaultCurrencyCode);

      return (value: number, digitsInfo?: string): string | null =>
        currencyPipe.transform(
          value,
          defaultCurrencyCode,
          'symbol',
          digitsInfo
        );
    },
  }
);
