import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const token = localStorage.getItem('token');

  // 1. Pas de token → rediriger vers login
  if (!token) {
    localStorage.setItem('pendingReturnUrl', state.url);
    router.navigate(['/auth/login']);
    return false;
  }

  // 2. Token expiré côté client → déconnexion immédiate
  if (authService.isTokenExpired(token)) {
    authService.startMandatoryLogoutFlow('expired');
    return false;
  }

  // 3. Token valide → vérifier s'il expire dans moins de 5 minutes
  //    Si oui : ping pour valider côté serveur (cas limite)
  //    Si non : laisser passer sans aller sur le réseau (évite le flash de page)
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const msUntilExpiry = payload.exp * 1000 - Date.now();
    const FIVE_MINUTES = 5 * 60 * 1000;

    if (msUntilExpiry > FIVE_MINUTES) {
      // Token encore largement valide — pas besoin de ping réseau
      return true;
    }
  } catch {
    // Token malformé — forcer le ping
  }

  // 4. Token proche de l'expiration → ping backend pour confirmation
  return authService.ping().pipe(
    map(() => true),
    catchError((err: HttpErrorResponse) => {
      if (err?.status === 401) {
        authService.forceLogout();
        return of(false);
      }
      // Autres erreurs (réseau coupé, 423 géré par blockedInterceptor) → laisser passer
      return of(true);
    })
  );
};
