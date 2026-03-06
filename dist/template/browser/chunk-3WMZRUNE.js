import {
  routes
} from "./chunk-E6TQA5KL.js";
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

// src/app/features/instructor/settings/instructor-setting-withdraw/instructor-setting-withdraw.component.ts
var InstructorSettingWithdrawComponent = class _InstructorSettingWithdrawComponent {
  routes = routes;
  static \u0275fac = function InstructorSettingWithdrawComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSettingWithdrawComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSettingWithdrawComponent, selectors: [["app-instructor-setting-withdraw"]], decls: 83, vars: 0, consts: [[1, "withdraw-method"], [1, "fs-18", "mb-3"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item", "mb-3"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "col-md-12"], ["type", "submit", 1, "btn", "btn-secondary"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["type", "text", "value", "test@example.com", 1, "form-control", "mb-1"], [1, "fs-14"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"]], template: function InstructorSettingWithdrawComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "form")(1, "div", 0)(2, "h5", 1);
      \u0275\u0275text(3, "Select a withdraw method");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "ul", 2)(5, "li", 3)(6, "button", 4);
      \u0275\u0275text(7, "Bank Transfer ");
      \u0275\u0275domElementStart(8, "span");
      \u0275\u0275text(9, "Minimum withdraw $50");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "li", 3)(11, "button", 5);
      \u0275\u0275text(12, "Stripe");
      \u0275\u0275domElementStart(13, "span");
      \u0275\u0275text(14, "Minimum withdraw $50");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(15, "li", 3)(16, "button", 6);
      \u0275\u0275text(17, "PayPal");
      \u0275\u0275domElementStart(18, "span");
      \u0275\u0275text(19, "Minimum withdraw $50");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(20, "div", 7)(21, "div", 8)(22, "div", 9)(23, "div", 10)(24, "div", 11)(25, "label", 12);
      \u0275\u0275text(26, "Account Name");
      \u0275\u0275domElementStart(27, "span", 13);
      \u0275\u0275text(28, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(29, "input", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 10)(31, "div", 11)(32, "label", 12);
      \u0275\u0275text(33, "Account Number");
      \u0275\u0275domElementStart(34, "span", 13);
      \u0275\u0275text(35, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(36, "input", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "div", 10)(38, "div", 11)(39, "label", 12);
      \u0275\u0275text(40, "Bank Name");
      \u0275\u0275domElementStart(41, "span", 13);
      \u0275\u0275text(42, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(43, "input", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "div", 10)(45, "div", 11)(46, "label", 12);
      \u0275\u0275text(47, "IBAN");
      \u0275\u0275domElementStart(48, "span", 13);
      \u0275\u0275text(49, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(50, "input", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(51, "div", 10)(52, "div", 11)(53, "label", 12);
      \u0275\u0275text(54, "BIC / SWIFT");
      \u0275\u0275domElementStart(55, "span", 13);
      \u0275\u0275text(56, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(57, "input", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(58, "div", 15)(59, "button", 16);
      \u0275\u0275text(60, "Save Withdrawal Account");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(61, "div", 17)(62, "div", 11)(63, "label", 12);
      \u0275\u0275text(64, "Stripe Email Address");
      \u0275\u0275domElementStart(65, "span", 13);
      \u0275\u0275text(66, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(67, "input", 18);
      \u0275\u0275domElementStart(68, "span", 19);
      \u0275\u0275text(69, "We will use this email address to send the money to your Stripe account");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(70, "button", 16);
      \u0275\u0275text(71, "Save Withdrawal Account");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(72, "div", 20)(73, "div", 11)(74, "label", 12);
      \u0275\u0275text(75, "PayPal Email Address");
      \u0275\u0275domElementStart(76, "span", 13);
      \u0275\u0275text(77, " *");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(78, "input", 18);
      \u0275\u0275domElementStart(79, "span", 19);
      \u0275\u0275text(80, "We will use this email address to send the money to your PayPal account");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(81, "button", 16);
      \u0275\u0275text(82, "Save Withdrawal Account");
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSettingWithdrawComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-setting-withdraw", imports: [], template: '<form>\n    <div class="withdraw-method">\n    <h5 class="fs-18 mb-3">Select a withdraw method</h5>\n    <ul class="nav nav-pills" id="pills-tab" role="tablist">\n      <li class="nav-item mb-3" role="presentation">\n          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Bank Transfer <span>Minimum withdraw $50</span></button>\n      </li>\n      <li class="nav-item mb-3" role="presentation">\n          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Stripe<span>Minimum withdraw $50</span></button>\n      </li>\n      <li class="nav-item mb-3" role="presentation">\n          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">PayPal<span>Minimum withdraw $50</span></button>\n      </li>\n   </ul>\n   \n  <div class="tab-content" id="pills-tabContent">\n      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">\n        <div class="row">\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Account Name<span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control">\n              </div>\n          </div>\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Account Number<span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control">\n              </div>\n          </div>\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">Bank Name<span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control">\n              </div>\n          </div>\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">IBAN<span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control">\n              </div>\n          </div>\n          <div class="col-md-6">\n              <div class="mb-3">\n                  <label class="form-label">BIC / SWIFT<span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control">\n              </div>\n          </div>\n          <div class="col-md-12">\n              <button class="btn btn-secondary" type="submit">Save Withdrawal Account</button>\n          </div>\n        </div>\n      </div>\n      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">\n              <div class="mb-3">\n                  <label class="form-label">Stripe Email Address<span class="text-danger"> *</span></label>\n                  <input type="text" class="form-control mb-1" value="test@example.com">\n                  <span class="fs-14">We will use this email address to send the money to your Stripe account</span>\n              </div>\n              <button class="btn btn-secondary" type="submit">Save Withdrawal Account</button>\n      </div>\n      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">\n          <div class="mb-3">\n              <label class="form-label">PayPal Email Address<span class="text-danger"> *</span></label>\n              <input type="text" class="form-control mb-1" value="test@example.com">\n              <span class="fs-14">We will use this email address to send the money to your PayPal account</span>\n          </div>\n          <button class="btn btn-secondary" type="submit">Save Withdrawal Account</button>\n      </div>\n  </div>\n    </div>\n  </form>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSettingWithdrawComponent, { className: "InstructorSettingWithdrawComponent", filePath: "src/app/features/instructor/settings/instructor-setting-withdraw/instructor-setting-withdraw.component.ts", lineNumber: 10 });
})();
export {
  InstructorSettingWithdrawComponent
};
//# sourceMappingURL=chunk-3WMZRUNE.js.map
