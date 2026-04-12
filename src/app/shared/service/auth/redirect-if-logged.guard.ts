import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Guard appliqué sur les routes publiques (ex: /index).
 * Si l'utilisateur est déjà connecté → redirige vers son dashboard.
 * Sinon → laisse passer normalement.
 */
export const redirectIfLoggedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router      = inject(Router);

  if (!authService.isLoggedIn()) {
    return true; // pas connecté → page publique accessible
  }

  const role: string = localStorage.getItem('role') || '';

  if (role.includes('SUPERADMIN')) {
    router.navigate(['/superadmin/superadmin-dashboard']);
  } else if (role.includes('ADMIN')) {
    router.navigate(['/admin/admin-dashboard']);
  } else if (role.includes('INSTRUCTOR')) {
    router.navigate(['/instructor/instructor-dashboard']);
  } else if (role.includes('RECRUITER')) {
    router.navigate(['/recruiter/recruiter-dashboard']);
  } else if (role.includes('STUDENT')) {
    router.navigate(['/student/student-dashboard']);
  } else {
    return true; // rôle inconnu → laisser passer
  }

  return false;
};
