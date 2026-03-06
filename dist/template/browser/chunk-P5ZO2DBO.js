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

// src/app/shared/service/certificate/certificate.service.ts
var CertificateService = class _CertificateService {
  http;
  api = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getMyCertificates() {
    return this.http.get(`${this.api}/student/certificates`);
  }
  generateCertificate(courseId) {
    return this.http.post(`${this.api}/student/certificates/generate/${courseId}`, {});
  }
  getCertificateById(id) {
    return this.http.get(`${this.api}/student/certificates/${id}`);
  }
  /** Public — no auth needed */
  verifyByCode(code) {
    return this.http.get(`${this.api}/courses/certificates/verify/${code}`);
  }
  static \u0275fac = function CertificateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificateService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertificateService, factory: _CertificateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CertificateService
};
//# sourceMappingURL=chunk-P5ZO2DBO.js.map
