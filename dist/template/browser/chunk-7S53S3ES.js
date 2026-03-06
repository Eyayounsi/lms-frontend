import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/auth/blocked.service.ts
var BlockedService = class _BlockedService {
  _message = new BehaviorSubject(null);
  blocked$ = this._message.asObservable();
  trigger(message) {
    this._message.next(message);
  }
  clear() {
    this._message.next(null);
  }
  static \u0275fac = function BlockedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlockedService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlockedService, factory: _BlockedService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlockedService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  BlockedService
};
//# sourceMappingURL=chunk-7S53S3ES.js.map
