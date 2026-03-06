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

// src/app/shared/service/recruiter/recruiter.service.ts
var RecruiterService = class _RecruiterService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/recruiter/stats`);
  }
  getSharedProfiles() {
    return this.http.get(`${this.apiUrl}/recruiter/shared-profiles`);
  }
  static \u0275fac = function RecruiterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecruiterService, factory: _RecruiterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RecruiterService
};
//# sourceMappingURL=chunk-7FFXSULA.js.map
