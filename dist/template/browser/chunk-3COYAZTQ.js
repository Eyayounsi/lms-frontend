import {
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/settings/instructor-integrations/instructor-integrations.component.ts
var InstructorIntegrationsComponent = class _InstructorIntegrationsComponent {
  static \u0275fac = function InstructorIntegrationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorIntegrationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorIntegrationsComponent, selectors: [["app-instructor-integrations"]], decls: 58, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "mb-3", "p-3", "rounded-3"], [1, "meet-icon", "me-3", "flex-shrink-0"], ["src", "./assets/img/icons/meet-icon-1.svg", "alt", "img"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "mb-1"], [1, "small"], [1, "form-check", "form-switch", "form-check-md", "mb-0"], ["type", "checkbox", "id", "checkZoom", "checked", "", 1, "form-check-input"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "value", "", 1, "form-control"], [1, "mb-4", "mt-1"], ["src", "./assets/img/icons/meet-icon-2.svg", "alt", "img"], ["type", "checkbox", "id", "checkGoogle", "checked", "", 1, "form-check-input"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary"]], template: function InstructorIntegrationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "div", 3);
      \u0275\u0275domElement(5, "img", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 5)(7, "div")(8, "h6", 6);
      \u0275\u0275text(9, "Zoom Meeting");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p", 7);
      \u0275\u0275text(11, "A virtual platform for real-time video, audio, and screen-sharing collaboration.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 8);
      \u0275\u0275domElement(13, "input", 9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "label", 13);
      \u0275\u0275text(18, "Client ID ");
      \u0275\u0275domElementStart(19, "span", 14);
      \u0275\u0275text(20, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(21, "input", 15);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 11)(23, "div", 12)(24, "label", 13);
      \u0275\u0275text(25, "Client Secret Key ");
      \u0275\u0275domElementStart(26, "span", 14);
      \u0275\u0275text(27, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(28, "input", 15);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(29, "hr", 16);
      \u0275\u0275domElementStart(30, "div", 2)(31, "div", 3);
      \u0275\u0275domElement(32, "img", 17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 5)(34, "div")(35, "h6", 6);
      \u0275\u0275text(36, "Google Meet");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "p", 7);
      \u0275\u0275text(38, "A video conferencing platform for seamless virtual meetings, collaboration, and screen sharing.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 8);
      \u0275\u0275domElement(40, "input", 18);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(41, "div", 10)(42, "div", 11)(43, "div", 12)(44, "label", 13);
      \u0275\u0275text(45, "Client ID ");
      \u0275\u0275domElementStart(46, "span", 14);
      \u0275\u0275text(47, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(48, "input", 15);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 11)(50, "div", 12)(51, "label", 13);
      \u0275\u0275text(52, "Client Secret Key ");
      \u0275\u0275domElementStart(53, "span", 14);
      \u0275\u0275text(54, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(55, "input", 15);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(56, "a", 19);
      \u0275\u0275text(57, "Save Changes");
      \u0275\u0275domElementEnd()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorIntegrationsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-integrations", imports: [CommonModule], template: '<div class="card">\n    <div class="card-body">\n  <form>\n      <div class="d-flex align-items-center justify-content-between border mb-3 p-3 rounded-3">\n          <div class="meet-icon me-3 flex-shrink-0">\n              <img src="./assets/img/icons/meet-icon-1.svg" alt="img">\n          </div>\n          <div class="d-flex align-items-center justify-content-between w-100">\n          <div>\n              <h6 class="mb-1">Zoom Meeting</h6>\n              <p class="small">A virtual platform for real-time video, audio, and screen-sharing collaboration.</p>\n          </div>\n          <div class="form-check form-switch form-check-md mb-0">\n              <input class="form-check-input" type="checkbox" id="checkZoom" checked="">\n          </div>\n      </div>\n      </div>\n      <div class="row">\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Client ID <span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control" value="">\n              </div>\n          </div>\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Client Secret Key <span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control" value="">\n              </div>\n          </div>\n      </div>\n      <hr class="mb-4 mt-1">\n      <div class="d-flex align-items-center justify-content-between border mb-3 p-3 rounded-3">\n          <div class="meet-icon me-3 flex-shrink-0">\n              <img src="./assets/img/icons/meet-icon-2.svg" alt="img">\n          </div>\n          <div class="d-flex align-items-center justify-content-between w-100">\n              <div>\n                  <h6 class="mb-1">Google Meet</h6>\n                  <p class="small">A video conferencing platform for seamless virtual meetings, collaboration, and screen sharing.</p>\n              </div>\n              <div class="form-check form-switch form-check-md mb-0">\n                  <input class="form-check-input" type="checkbox" id="checkGoogle" checked="">\n              </div>\n          </div>\n      </div>\n      <div class="row">\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Client ID <span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control" value="">\n              </div>\n          </div>\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Client Secret Key <span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control" value="">\n              </div>\n          </div>\n      </div>\n      <a href="javascript:void(0);" class="btn btn-secondary">Save Changes</a>\n  </form>\n    </div>\n    </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorIntegrationsComponent, { className: "InstructorIntegrationsComponent", filePath: "src/app/features/instructor/settings/instructor-integrations/instructor-integrations.component.ts", lineNumber: 10 });
})();
export {
  InstructorIntegrationsComponent
};
//# sourceMappingURL=chunk-3COYAZTQ.js.map
