import {
  DomSanitizer
} from "./chunk-QFZWCWB7.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-5DE2SIVI.js";

// src/app/shared/pipe/safe-url.pipe.ts
var SafeUrlPipe = class _SafeUrlPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static \u0275fac = function SafeUrlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeUrlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeUrl", type: _SafeUrlPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeUrlPipe, [{
    type: Pipe,
    args: [{
      name: "safeUrl",
      standalone: true
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

export {
  SafeUrlPipe
};
//# sourceMappingURL=chunk-5AFZJH43.js.map
