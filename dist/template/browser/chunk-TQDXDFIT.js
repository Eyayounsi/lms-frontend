import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/profile/profile.service.ts
var ProfileService = class _ProfileService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // Récupérer le profil depuis le backend
  getProfile() {
    return this.http.get(`${this.apiUrl}/user/profile`);
  }
  // Mettre à jour le profil (tous les champs)
  updateProfile(data) {
    return this.http.put(`${this.apiUrl}/user/profile`, data);
  }
  // Uploader l'avatar
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/user/avatar`, formData);
  }
  // Profil public d'un instructeur (sans auth)
  getInstructorProfile(instructorId) {
    return this.http.get(`${this.apiUrl}/public/instructor/${instructorId}`);
  }
  // Changer le mot de passe (exige l'ancien)
  changePassword(data) {
    return this.http.put(`${this.apiUrl}/user/change-password`, data, {
      responseType: "text"
    });
  }
  // Supprimer le compte (exige le mot de passe)
  deleteAccount(password) {
    return this.http.delete(`${this.apiUrl}/user/account`, {
      params: { password },
      responseType: "text"
    });
  }
  // Activer/désactiver le partage du profil avec les recruteurs
  toggleShareWithRecruiters(share) {
    return this.http.put(`${this.apiUrl}/user/share-profile`, { share }, {
      responseType: "text"
    });
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProfileService
};
//# sourceMappingURL=chunk-TQDXDFIT.js.map
