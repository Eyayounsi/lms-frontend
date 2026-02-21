import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
//import { environment } from 'src/environments/environment';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  
  // Stockage de l'email pendant le processus de réinitialisation
  private resetEmail = new BehaviorSubject<string>('');
  public resetEmail$ = this.resetEmail.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(data: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  // Envoyer l'email pour recevoir l'OTP
  forgotPassword(data: any) {
    // responseType: 'text' dit à Angular: "Je vais recevoir du texte brut, pas du JSON"
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, data, {
      responseType: 'text' as 'json'  // Accepte le texte brut
    });
  }

  // Vérifier l'OTP et réinitialiser le mot de passe
  verifyOtp(data: any) {
    // responseType: 'text' dit à Angular: "Je vais recevoir du texte brut, pas du JSON"
    return this.http.post(`${this.apiUrl}/auth/verify-otp`, data, {
      responseType: 'text' as 'json'  // Accepte le texte brut
    });
  }

  resetPassword(data: any) {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, data);
  }

  addRole(data: any) {
    return this.http.post(`${this.apiUrl}/auth/add-role`, data);
  }

  // Stocker l'email temporairement (pour passer d'un composant à l'autre)
  setResetEmail(email: string): void {
    this.resetEmail.next(email);
  }

  // Récupérer l'email stocké
  getResetEmail(): string {
    return this.resetEmail.value;
  }

  logout() {
    // Appeler l'endpoint logout du backend
    // L'intercepteur ajoutera automatiquement le token Bearer dans le header Authorization
    return this.http.post(`${this.apiUrl}/auth/logout`, {}, {
      responseType: 'text' as 'json'  // Le backend retourne du texte brut
    }).subscribe({
      next: (response: any) => {
        console.log('✅ [LOGOUT] Réponse du backend:', response);
        // Supprimer TOUTES les données stockées au login
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('fullName');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        // Rediriger vers la page de login
        this.router.navigate(['/auth/login']);
      },
      error: (error: any) => {
        console.error('❌ [LOGOUT] Erreur:', error);
        // Supprimer TOUTES les données même en cas d'erreur (sécurité)
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('fullName');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        // Rediriger vers la page de login
        this.router.navigate(['/auth/login']);
      }
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Vérifie si le compte est encore actif (utilisé par authGuard).
  // Si le compte est BLOQUÉ, le backend retourne 423 → blockedInterceptor gère la déconnexion.
  ping() {
    return this.http.get(`${this.apiUrl}/user/ping`, { responseType: 'text' as 'json' });
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
