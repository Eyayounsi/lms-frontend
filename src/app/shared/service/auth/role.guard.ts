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

    // Rôle correct → accès autorisé (vérifie rôle principal + rôles secondaires)
    if (role === requiredRole) {
      return true;
    }
    // Vérifier les rôles secondaires (ex: INSTRUCTOR peut accéder aux pages STUDENT)
    try {
      const secondaryRoles: string[] = JSON.parse(localStorage.getItem('secondaryRoles') || '[]');
      if (secondaryRoles.includes(requiredRole)) {
        return true;
      }
    } catch { /* ignore parse error */ }
    // Règle implicite: INSTRUCTOR a toujours accès STUDENT
    if (role === 'INSTRUCTOR' && requiredRole === 'STUDENT') {
      return true;
    }

    // Mauvais rôle → redirection vers le bon dashboard
    if (role === 'SUPERADMIN') {
      router.navigate(['/superadmin/superadmin-dashboard']);
    } else if (role === 'ADMIN') {
      router.navigate(['/admin/admin-dashboard']);
    } else if (role === 'INSTRUCTOR') {
      router.navigate(['/instructor/instructor-dashboard']);
    } else if (role === 'RECRUITER') {
      router.navigate(['/recruiter/recruiter-dashboard']);
    } else if (role === 'STUDENT') {
      router.navigate(['/student/student-dashboard']);
    } else {
      router.navigate(['/index']);
    }
    return false;
  };
};
