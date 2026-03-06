import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/common/common.service.ts
var CommonService = class _CommonService {
  base = new BehaviorSubject("");
  page = new BehaviorSubject("");
  last = new BehaviorSubject("");
  isuserHeader = new BehaviorSubject(true);
  isAdminHeader = new BehaviorSubject(false);
  isstudentHeader = new BehaviorSubject(false);
  mainFooter = new BehaviorSubject(true);
  static \u0275fac = function CommonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommonService, factory: _CommonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CommonService
};
//# sourceMappingURL=chunk-CDB6UHUA.js.map
