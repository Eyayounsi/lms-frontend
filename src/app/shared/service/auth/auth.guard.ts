import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, catchError, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Token absent → redirect login
  if (!authService.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  // Ping le backend pour détecter un compte bloqué depuis la dernière connexion.
  // On retourne TOUJOURS true pour que la navigation se termine normalement.
  // Si 423 → blockedInterceptor déclenche BlockedService → modal s'affiche
  // PAR-DESSUS le dashboard du user. Pas de redirect inattendu.
  return authService.ping().pipe(
    map(() => true),
    catchError(() => of(true)) // erreur réseau ou 423 : on laisse passer, modal gère
  );
};
