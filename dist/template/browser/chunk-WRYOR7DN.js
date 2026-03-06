import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  Router
} from "./chunk-TPKO67I6.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/auth/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = environment.apiUrl;
  // Stockage de l'email pendant le processus de réinitialisation
  resetEmail = new BehaviorSubject("");
  resetEmail$ = this.resetEmail.asObservable();
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }
  // Envoyer l'email pour recevoir l'OTP
  forgotPassword(data) {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, data, {
      responseType: "text"
      // Accepte le texte brut
    });
  }
  // Vérifier l'OTP et réinitialiser le mot de passe
  verifyOtp(data) {
    return this.http.post(`${this.apiUrl}/auth/verify-otp`, data, {
      responseType: "text"
      // Accepte le texte brut
    });
  }
  resetPassword(data) {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, data);
  }
  addRole(data) {
    return this.http.post(`${this.apiUrl}/auth/add-role`, data);
  }
  // Stocker l'email temporairement (pour passer d'un composant à l'autre)
  setResetEmail(email) {
    this.resetEmail.next(email);
  }
  // Récupérer l'email stocké
  getResetEmail() {
    return this.resetEmail.value;
  }
  logout() {
    return this.http.post(`${this.apiUrl}/auth/logout`, {}, {
      responseType: "text"
      // Le backend retourne du texte brut
    }).subscribe({
      next: (response) => {
        console.log("\u2705 [LOGOUT] R\xE9ponse du backend:", response);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        this.router.navigate(["/auth/login"]);
      },
      error: (error) => {
        console.error("\u274C [LOGOUT] Erreur:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        this.router.navigate(["/auth/login"]);
      }
    });
  }
  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
  // Vérifie si le compte est encore actif (utilisé par authGuard).
  // Si le compte est BLOQUÉ, le backend retourne 423 → blockedInterceptor gère la déconnexion.
  ping() {
    return this.http.get(`${this.apiUrl}/user/ping`, { responseType: "text" });
  }
  getRole() {
    return localStorage.getItem("role");
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-WRYOR7DN.js.map
