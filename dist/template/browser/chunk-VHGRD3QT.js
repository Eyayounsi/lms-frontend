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

// src/app/features/superadmin/services/superadmin-api.service.ts
var SuperAdminApiService = class _SuperAdminApiService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // ─── Stats ────────────────────────────────────────────────────────────────
  getSuperStats() {
    return this.http.get(`${this.apiUrl}/superadmin/stats`);
  }
  getAdminStats() {
    return this.http.get(`${this.apiUrl}/admin/stats`);
  }
  // ─── Users ────────────────────────────────────────────────────────────────
  getAllUsers() {
    return this.http.get(`${this.apiUrl}/superadmin/users`);
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/superadmin/users/${id}`, { responseType: "text" });
  }
  toggleBlock(id) {
    return this.http.put(`${this.apiUrl}/superadmin/users/${id}/toggle-block`, {});
  }
  changeUserRole(id, role) {
    return this.http.put(`${this.apiUrl}/superadmin/users/${id}/change-role?role=${role}`, {});
  }
  static \u0275fac = function SuperAdminApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperAdminApiService, factory: _SuperAdminApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SuperAdminApiService
};
//# sourceMappingURL=chunk-VHGRD3QT.js.map
