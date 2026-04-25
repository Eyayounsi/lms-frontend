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

  private apiUrl         = environment.apiUrl;
  private faceServiceUrl = environment.faceServiceUrl;
  
  // Stockage de l'email pendant le processus de réinitialisation
  private resetEmail = new BehaviorSubject<string>('');
  public resetEmail$ = this.resetEmail.asObservable();

  // Rôle actif — notifie tous les abonnés quand il change
  private _currentRole = new BehaviorSubject<string>(localStorage.getItem('role') || '');
  public currentRole$ = this._currentRole.asObservable();

  // Nom complet actif — notifie sidebar, header, etc. en temps réel
  private _currentFullName = new BehaviorSubject<string>(localStorage.getItem('fullName') || '');
  public currentFullName$ = this._currentFullName.asObservable();

  // Avatar actif — notifie sidebar, header, dashboard en temps réel
  private _currentAvatarPath = new BehaviorSubject<string>(localStorage.getItem('avatarPath') || '');
  public currentAvatarPath$ = this._currentAvatarPath.asObservable();

  // Timer auto-logout — déclenché à l'exact moment d'expiration du JWT
  private autoLogoutTimer: ReturnType<typeof setTimeout> | null = null;
  private profileIdentityHydrated = false;
  // Protection contre les appels multiples de forceLogout (boucle de déconnexion)
  private isLoggingOut = false;

  /** Appeler après chaque changement de rôle (login, switch-role, add-role) */
  setCurrentRole(role: string): void {
    this._currentRole.next(role);
  }

  /** Appeler après chaque mise à jour de profil pour propager le nouveau nom */
  setFullName(name: string): void {
    localStorage.setItem('fullName', name);
    this._currentFullName.next(name);
  }

  /** Appeler après upload avatar pour synchroniser toute l'UI */
  setAvatarPath(path: string): void {
    localStorage.setItem('avatarPath', path || '');
    this._currentAvatarPath.next(path || '');
  }

  /**
   * Charge le profil connecté une seule fois pour synchroniser nom/avatar
   * (utile après refresh page quand localStorage ne contient pas avatarPath).
   */
  ensureProfileIdentityLoaded(): void {
    if (this.profileIdentityHydrated) return;
    if (!localStorage.getItem('token')) return;
    this.profileIdentityHydrated = true;

    this.http.get<any>(`${this.apiUrl}/user/profile`).subscribe({
      next: (profile) => {
        const fullName = profile?.fullName || '';
        const avatarPath = profile?.avatarPath || '';
        if (fullName) this.setFullName(fullName);
        if (avatarPath) this.setAvatarPath(avatarPath);
      },
      error: () => {
        // En cas d'erreur, autoriser une future tentative.
        this.profileIdentityHydrated = false;
      }
    });
  }

  /** Transforme avatarPath backend en URL exploitable côté front */
  resolveAvatarUrl(path?: string | null): string {
    const p = (path || '').trim();
    if (!p) return '';
    if (p.startsWith('http://') || p.startsWith('https://')) return p;

    // apiUrl attendu: http://localhost:8081/api
    const apiRoot = this.apiUrl.endsWith('/api')
      ? this.apiUrl.slice(0, -4)
      : this.apiUrl;

    return `${apiRoot}${p.startsWith('/') ? p : '/' + p}`;
  }

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Ne redirige vers login que depuis les zones protégées.
   * Sur les pages publiques (index/courses/pages/blog), on nettoie la session sans casser la navigation.
   */
  private shouldRedirectToLogin(currentUrl?: string): boolean {
    const url = (currentUrl || this.router.url || '').toLowerCase();
    return (
      url.startsWith('/student') ||
      url.startsWith('/instructor') ||
      url.startsWith('/admin') ||
      url.startsWith('/recruiter') ||
      url.startsWith('/superadmin')
    );
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  loginWithGoogle(idToken: string) {
    return this.http.post(`${this.apiUrl}/auth/google-login`, { idToken });
  }

  // ── Face ID ─────────────────────────────────────────────────────────────────

  /** Send 10 base64 images to Python face service to store encodings */
  registerFaceEncodings(email: string, fullName: string, images: string[]) {
    return this.http.post(`${this.faceServiceUrl}/face/register`, {
      email,
      full_name: fullName,
      images
    });
  }

  /** Create user account in Spring Boot (no password — face-only auth) */
  registerFaceUser(data: { fullName: string; email: string; role?: string }) {
    return this.http.post(`${this.apiUrl}/auth/face-register`, data);
  }

  /** Send a single base64 frame to Python service for recognition */
  recognizeFace(image: string) {
    return this.http.post(`${this.faceServiceUrl}/face/recognize`, { image });
  }

  /** Exchange HMAC token (from Python) for a Spring Boot JWT */
  faceLogin(data: { email: string; token: string; timestamp: string }) {
    return this.http.post(`${this.apiUrl}/auth/face-login`, data);
  }

  // ── Password reset ──────────────────────────────────────────────────────────
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

  /**
   * Changer le rôle actif du compte sans se déconnecter.
   * Renvoie un nouveau JWT avec le rôle cible comme rôle actif.
   * ✅ Maintenant demande le mot de passe pour sécurité renforcée
   */
  switchRole(targetRole: string, password: string = '') {
    const sourceRole = localStorage.getItem('role') || '';
    return this.http.post<any>(`${this.apiUrl}/auth/switch-role`, {
      targetRole,
      sourceRole,
      password  // ✅ Nouveau: mot de passe send with request
    });
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
    // Annuler le timer auto-logout avant d'appeler le backend
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
      this.autoLogoutTimer = null;
    }
    // Appeler l'endpoint logout du backend
    // L'intercepteur ajoutera automatiquement le token Bearer dans le header Authorization
    return this.http.post(`${this.apiUrl}/auth/logout`, {}, {
      responseType: 'text' as 'json'  // Le backend retourne du texte brut
    }).subscribe({
      next: (response: any) => {
        console.log('✅ [LOGOUT] Réponse du backend:', response);
        // Supprimer TOUTES les données stockées + synchroniser l'UI réactive
        this.clearAllStorage();
        // Rediriger vers la page de login
        this.router.navigate(['/auth/login']);
      },
      error: (error: any) => {
        console.error('❌ [LOGOUT] Erreur:', error);
        // Supprimer TOUTES les données même en cas d'erreur (sécurité)
        this.clearAllStorage();
        // Rediriger vers la page de login
        this.router.navigate(['/auth/login']);
      }
    });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    // Vérifier l'expiry du JWT sans librairie externe (décode le payload base64)
    if (this.isTokenExpired(token)) {
      this.clearAllStorage();
      return false;
    }
    return true;
  }

  /**
   * Décode le claim `exp` du JWT et vérifie si le token est expiré.
   * Ne vérifie PAS la signature — uniquement côté client pour l'UX.
   */
  isTokenExpired(token?: string): boolean {
    const t = token || localStorage.getItem('token');
    if (!t) return true;
    try {
      const payload = JSON.parse(atob(t.split('.')[1]));
      // exp est en secondes, Date.now() en millisecondes
      return payload.exp * 1000 < Date.now();
    } catch {
      return true; // token malformé = considéré expiré
    }
  }

  /**
   * Planifie un logout automatique à l'exact moment d'expiry du JWT.
   * Appeler après login et au chargement de l'app (AppComponent.ngOnInit).
   * Un seul timer actif à la fois — remplace le précédent si appelé à nouveau.
   */
  scheduleAutoLogout(): void {
    // Annuler tout timer précédent
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
      this.autoLogoutTimer = null;
    }
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const msUntilExpiry = payload.exp * 1000 - Date.now();
      if (msUntilExpiry <= 0) {
        // Token déjà expiré → déconnecter immédiatement
        this.forceLogout();
        return;
      }
      this.autoLogoutTimer = setTimeout(() => {
        this.forceLogout();
      }, msUntilExpiry);
    } catch {
      // Token malformé — ne rien planifier
    }
  }

  /**
   * Déconnexion forcée (expiration automatique) — sans appel backend.
   * Nettoie le localStorage et redirige vers login.
   */
  forceLogout(): void {
    if (this.isLoggingOut) return; // Évite les appels en cascade
    console.log('🔴 forceLogout() triggered - timer expired');
    this.autoLogoutTimer = null;
    this.startMandatoryLogoutFlow('expired');
  }

  /**
   * Redirige vers une page de déconnexion obligatoire avant retour login.
   * Utilisé quand la session expire (timer, 401 backend, guard).
   */
  startMandatoryLogoutFlow(reason: 'expired' | 'unauthorized' = 'expired'): void {
    if (this.isLoggingOut) return; // Évite les appels en cascade
    this.isLoggingOut = true;
    console.log(`🔴 startMandatoryLogoutFlow() - reason: ${reason}`);
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
      this.autoLogoutTimer = null;
    }
    this.internalClearSession();
    if (this.shouldRedirectToLogin()) {
      this.router.navigate(['/auth/session-expired'], {
        queryParams: { reason },
        replaceUrl: true
      }).then(() => {
        // Reset après navigation pour permettre un futur logout si re-login
        this.isLoggingOut = false;
      });
    } else {
      this.isLoggingOut = false;
    }
  }

  /**
   * Étape finale de déconnexion obligatoire: redirige vers login.
   */
  completeMandatoryLogout(): void {
    console.log('🔴 completeMandatoryLogout() - redirecting to login');
    this.internalClearSession();
    this.router.navigate(['/auth/login'], { replaceUrl: true });
  }

  /**
   * ⚡ Nettoyage complet de la session (PUBLIQUE pour usage dans interceptors).
   * Supprime TOUTES les clés d'authentification ET synchronise l'UI réactive.
   * À appeler chaque fois que l'authentification est invalidée (token expiré, compte bloqué, 401 du serveur).
   */
  internalClearSession(): void {
    console.log('🔴 internalClearSession() - clearing all auth data from localStorage');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('fullName');
    localStorage.removeItem('avatarPath');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('secondaryRoles');
    // Annuler tout timer auto-logout en cours
    if (this.autoLogoutTimer) {
      clearTimeout(this.autoLogoutTimer);
      this.autoLogoutTimer = null;
    }
    // Synchronise immédiatement l'UI (header/sidebar) après logout.
    this._currentRole.next('');
    this._currentFullName.next('');
    this._currentAvatarPath.next('');
  }

  /** @deprecated Utilisez internalClearSession() à la place. */
  private clearAllStorage(): void {
    this.internalClearSession();
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
