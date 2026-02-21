import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { BlockedService } from './blocked.service';

export const blockedInterceptor: HttpInterceptorFn = (req, next) => {
  const blockedService = inject(BlockedService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Skip 423 interception for the logout endpoint to avoid stale re-trigger
      if (error.status === 423 && !req.url.includes('/auth/logout')) {
        const message = error.error?.message || 'Votre compte a été bloqué par l\'administrateur.';
        blockedService.trigger(message);
      }
      return throwError(() => error);
    })
  );
};
