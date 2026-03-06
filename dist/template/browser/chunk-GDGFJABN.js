import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  Router
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/lock-screen/lock-screen.component.ts
var LockScreenComponent = class _LockScreenComponent {
  router;
  routes = routes;
  password = [false];
  // Add more as needed
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
  }
  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }
  static \u0275fac = function LockScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LockScreenComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockScreenComponent, selectors: [["app-lock-screen"]], decls: 27, vars: 2, consts: [[1, "main-wrapper"], [1, "lock-screen"], [1, "lock-wrapper"], [1, "d-flex", "align-items-center", "justify-content-center", "lock-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "topic"], [1, "fs-32", "fw-bold", "mb-3", "text-center"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-4"], [1, "text-center"], [1, "user-profile", "rounded-circle", "mb-3"], ["src", "assets/img/user/user-02.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "mb-0"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger"], ["id", "passwordInput", 1, "position-relative"], [1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"]], template: function LockScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7, "Welcome Back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9);
      \u0275\u0275element(11, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h6", 11);
      \u0275\u0275text(13, "Ronald Richard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "form", 12);
      \u0275\u0275listener("ngSubmit", function LockScreenComponent_Template_form_ngSubmit_14_listener() {
        return ctx.directIndex();
      });
      \u0275\u0275elementStart(15, "div", 13)(16, "label", 14);
      \u0275\u0275text(17, "Confirm Password ");
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 16);
      \u0275\u0275element(21, "input", 17);
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275listener("click", function LockScreenComponent_Template_span_click_22_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function LockScreenComponent_Template_span_keydown_enter_22_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19)(24, "button", 20);
      \u0275\u0275text(25, "Sign In");
      \u0275\u0275element(26, "i", 21);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockScreenComponent, [{
    type: Component,
    args: [{ selector: "app-lock-screen", imports: [CommonModule, FormsModule], template: `	<!-- Main Wrapper -->
    <div class="main-wrapper">
        <div class="lock-screen">
            <div class="lock-wrapper">
                <div class="d-flex align-items-center justify-content-center lock-header">
                    <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">
                </div>
                <div class="topic">
                    <h1 class="fs-32 fw-bold mb-3 text-center">Welcome Back</h1>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <div class="text-center">
                        <div class="user-profile rounded-circle mb-3">
                            <img src="assets/img/user/user-02.jpg" alt="img" class="img-fluid rounded-circle">
                        </div>
                        <h6 class="mb-0">Ronald Richard</h6>
                    </div>
                </div>
                <form (ngSubmit)="directIndex()" class="mb-3 pb-3">
                    <div class="mb-3 position-relative">
                        <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>
                        <div class="position-relative" id="passwordInput">
                            <input [type]="password[1] ? 'text' : 'password'" class="pass-inputs form-control form-control-lg">
                            <span tabindex="0" (click)="togglePassword(1)" (keydown.enter)="togglePassword(1)" class="isax toggle-passwords fs-14" [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"></span>
                        </div>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-secondary btn-lg" type="submit">Sign In<i class="isax isax-arrow-right-3 ms-1"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
   <!-- /Main Wrapper -->` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockScreenComponent, { className: "LockScreenComponent", filePath: "src/app/auth/lock-screen/lock-screen.component.ts", lineNumber: 13 });
})();
export {
  LockScreenComponent
};
//# sourceMappingURL=chunk-GDGFJABN.js.map
