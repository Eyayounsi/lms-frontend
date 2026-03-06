import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-5DE2SIVI.js";

// src/app/shared/pipe/capitalize-words.pipe.ts
var CapitalizeWordsPipe = class _CapitalizeWordsPipe {
  transform(value) {
    if (!value) {
      return "";
    }
    return value.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  static \u0275fac = function CapitalizeWordsPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CapitalizeWordsPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "capitalizeWords", type: _CapitalizeWordsPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CapitalizeWordsPipe, [{
    type: Pipe,
    args: [{
      name: "capitalizeWords",
      standalone: true
    }]
  }], null, null);
})();

export {
  CapitalizeWordsPipe
};
//# sourceMappingURL=chunk-6HITJ3QB.js.map
