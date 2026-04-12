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
  if (token && authService.isTokenExpired(token)) {
    authService.startMandatoryLogoutFlow('expired');
    return false;
  }

  // 1. Vérification locale du token (expiry) — sans réseau, instantané
  if (!authService.isLoggedIn()) {
    localStorage.setItem('pendingReturnUrl', state.url);
    router.navigate(['/auth/login']);
    return false;
  }

  // 2. Ping backend : vérifie que le token est toujours accepté et le compte actif
  // - 200  → OK, on laisse passer
  // - 401  → token expiré côté serveur → forceLogout
  // - 423  → compte bloqué → blockedInterceptor gère l'affichage de la modal
  // - erreur réseau → on laisse passer (évite de bloquer hors-ligne)
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
