import { effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';

const isEqual = (a: unknown, b: unknown): boolean => {
  if (
    typeof a === 'object' &&
    a !== null &&
    typeof b === 'object' &&
    b !== null
  ) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return a === b;
};

export function queryController<T>(
  paramName: string,
  defaultValue: T,
  transform?: {
    toParam?: (value: T) => string | undefined;
    fromParam?: (param: string) => T;
  }
) {
  const route = inject(ActivatedRoute);
  const router = inject(Router);

  const querySignal = signal(defaultValue, {
    equal: isEqual,
  });

  // Initialize signal from query params
  route.queryParams
    .pipe(
      map((params) => params[paramName]),
      distinctUntilChanged(isEqual),
      map((paramValue) => {
        if (paramValue === undefined || paramValue === null) {
          return defaultValue;
        }

        return transform?.fromParam
          ? transform.fromParam(paramValue as string)
          : (paramValue as T);
      }),
      takeUntilDestroyed()
    )
    .subscribe((value) => {
      querySignal.set(value);
    });

  // Update query params when signal changes
  effect(() => {
    const currentValue = querySignal();
    const paramValue = transform?.toParam
      ? transform.toParam(currentValue)
      : (currentValue as string);

    const queryParams = { ...route.snapshot.queryParams };

    if (
      isEqual(currentValue, defaultValue) ||
      paramValue === undefined ||
      paramValue === null
    ) {
      delete queryParams[paramName];
    } else {
      queryParams[paramName] = paramValue;
    }

    router.navigate([], {
      relativeTo: route,
      queryParams,
      replaceUrl: true,
    });
  });

  return querySignal;
}
