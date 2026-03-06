import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Guard basé sur le rôle stocké dans localStorage.
 * Usage dans routes : canActivate: [roleGuard('INSTRUCTOR')]
 */
export const roleGuard = (requiredRole: string): CanActivateFn => {
  return () => {
    const router = inject(Router);
    const token = localStorage.getItem('token');
    const role: string = localStorage.getItem('role') || '';

    // Pas de token → page de login
    if (!token) {
      router.navigate(['/auth/login']);
      return false;
    }

    // Rôle correct → accès autorisé
    if (role.includes(requiredRole)) {
      return true;
    }

    // Mauvais rôle → redirection vers le bon dashboard
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
      router.navigate(['/index']);
    }
    return false;
  };
};
