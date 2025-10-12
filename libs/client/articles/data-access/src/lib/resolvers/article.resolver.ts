import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
} from '@angular/router';
import { type Article } from '@ssrmart/shared/types';
import { catchError, of } from 'rxjs';
import { ArticleService } from '../services';

export const articleResolver: ResolveFn<Article> = (
  route: ActivatedRouteSnapshot
) => {
  const router = inject(Router);

  return inject(ArticleService)
    .getArticle(route.params['id'])
    .pipe(
      catchError(() => of(new RedirectCommand(router.createUrlTree(['/blog']))))
    );
};
