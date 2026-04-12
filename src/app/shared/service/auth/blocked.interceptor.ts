import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { BlockedService } from './blocked.service';
import { AuthService } from './auth.service';

// Empêche plusieurs déconnexions simultanées (race condition post-login)
let isLoggingOut = false;

function shouldSkipAutoLogoutOn401(url: string): boolean {
  const lower = (url || '').toLowerCase();
  return lower.includes('/api/ai/chatbot/')
    || lower.includes('/api/student/progress/lesson/');
}

export const blockedInterceptor: HttpInterceptorFn = (req, next) => {
  const blockedService = inject(BlockedService);
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // 423 — compte bloqué par l'admin
      if (error.status === 423 && !req.url.includes('/auth/logout')) {
        const message = error.error?.message || 'Votre compte a été bloqué par l\'administrateur.';
        blockedService.trigger(message);
      }

      // 401 — token expiré ou invalide → déconnexion automatique
      // On ne déconnecte que si la requête AVAIT un token (Authorization header présent)
      // pour éviter qu'un polling sans token (header/sidebar avant login) ne vide le localStorage
      // Garde-fou: on ignore le 401 si le token actuel en localStorage est DIFFERENT
      // de celui utilisé dans la requête (le token a été rafraîchi entre-temps)
      if (
        error.status === 401
        && !req.url.includes('/auth/')
        && req.headers.has('Authorization')
        && !shouldSkipAutoLogoutOn401(req.url)
      ) {
        const currentToken = localStorage.getItem('token');
        const requestToken = req.headers.get('Authorization')?.replace('Bearer ', '');

        // Ne déconnecter que si le token envoyé est celui actuellement en localStorage
        // (évite de déconnecter après un nouveau login qui a remplacé le token)
        if (!currentToken || currentToken === requestToken) {
          if (!isLoggingOut) {
            isLoggingOut = true;
            // Session invalide -> passer par la page de déconnexion obligatoire.
            console.log('🔴 blockedInterceptor - 401 detected, triggering logout via startMandatoryLogoutFlow');
            authService.startMandatoryLogoutFlow('unauthorized');
            // Réinitialiser le flag après un court délai pour permettre les futures déconnexions
            setTimeout(() => { isLoggingOut = false; }, 2000);
          }
        }
      }

      return throwError(() => error);
    })
  );
};
