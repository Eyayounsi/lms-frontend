import {
  ProfileService
} from "./chunk-TQDXDFIT.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  RouterModule
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass,
  NgIf
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/settings/student-change-password/student-change-password.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
function StudentChangePasswordComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275text(2, "Weak. Must contain at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275text(2, "Average. Must contain at least 1 letter or number ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275text(2, "Almost. Must contain special symbol ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275text(2, "Awesome! You have a secure password. ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function StudentChangePasswordComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var StudentChangePasswordComponent = class _StudentChangePasswordComponent {
  profileService;
  routes = routes;
  password = [false, false, false];
  oldPassword = "";
  newPassword = "";
  confirmPassword = "";
  successMessage = "";
  errorMessage = "";
  constructor(profileService) {
    this.profileService = profileService;
  }
  onChangePassword() {
    this.successMessage = "";
    this.errorMessage = "";
    if (!this.oldPassword || !this.newPassword) {
      this.errorMessage = "Veuillez remplir tous les champs.";
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Les mots de passe ne correspondent pas.";
      return;
    }
    this.profileService.changePassword({ oldPassword: this.oldPassword, newPassword: this.newPassword }).subscribe({
      next: () => {
        this.successMessage = "Mot de passe modifi\xE9 avec succ\xE8s.";
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
        this.resetStrength();
      },
      error: (err) => {
        this.errorMessage = err.error || "Erreur lors du changement de mot de passe.";
      }
    });
  }
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  passwordValue = "";
  strengthLevel = "";
  passwordInfoMessage = null;
  passwordInfoColor = "";
  poorRegExp = /[a-z]/;
  weakRegExp = /(?=.*?[0-9])/;
  strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  whitespaceRegExp = /^$|\s+/;
  checkPasswordStrength(event) {
    const inputElement = event.target;
    const password = inputElement.value;
    this.passwordValue = password;
    const passwordLength = password.length;
    const hasPoor = this.poorRegExp.test(password);
    const hasWeak = this.weakRegExp.test(password);
    const hasStrong = this.strongRegExp.test(password);
    const hasWhitespace = this.whitespaceRegExp.test(password);
    if (password === "") {
      this.resetStrength();
      return;
    }
    if (hasWhitespace) {
      this.passwordInfoMessage = "Whitespaces are not allowed";
      this.passwordInfoColor = "red";
      this.strengthLevel = "";
      return;
    }
    if (passwordLength < 8) {
      this.strengthLevel = "poor";
      this.passwordInfoMessage = "Weak. Must contain at least 8 characters.";
      this.passwordInfoColor = "red";
    } else if (hasPoor || hasWeak || hasStrong) {
      this.strengthLevel = "weak";
      this.passwordInfoMessage = "Average. Must contain at least 1 letter or number.";
      this.passwordInfoColor = "#FFB54A";
    }
    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = "strong";
      this.passwordInfoMessage = "Almost strong. Must contain a special symbol.";
      this.passwordInfoColor = "#1D9CFD";
    }
    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = "heavy";
      this.passwordInfoMessage = "Awesome! You have a secure password.";
      this.passwordInfoColor = "#159F46";
    }
  }
  resetStrength() {
    this.strengthLevel = "";
    this.passwordInfoMessage = null;
  }
  static \u0275fac = function StudentChangePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentChangePasswordComponent)(\u0275\u0275directiveInject(ProfileService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentChangePasswordComponent, selectors: [["app-student-change-password"]], decls: 73, vars: 33, consts: [["cpForm", "ngForm"], [1, "card", "mb-0"], [1, "card-body"], [1, "border-bottom", "mb-4", "pb-4"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "mb-1", "fs-18"], ["href", "javascript:void(0);", 1, "text-decoration-underline"], [3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger"], [1, "position-relative"], ["name", "oldPassword", 1, "pass-inputs", "form-control", 3, "ngModelChange", "type", "ngModel"], ["tabindex", "0", 1, "isax", "toggle-password", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", "name", "newPassword", 1, "pass-input", "form-control", "form-control-lg", 3, "ngModelChange", "input", "type", "ngModel"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mt-2"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-blueL fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold", 4, "ngIf"], ["name", "confirmPassword", 1, "pass-inputs", "form-control", 3, "ngModelChange", "type", "ngModel"], ["class", "alert alert-success mb-2", 4, "ngIf"], ["class", "alert alert-danger mb-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary"], ["href", "javascript:void(0);", 1, "fw-semibold"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold"], ["src", "assets/img/icon/angry.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold"], ["src", "assets/img/icon/anguish.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-blueL", "fs-15", "fw-semibold"], ["src", "assets/img/icon/smile.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold"], [1, "alert", "alert-success", "mb-2"], [1, "alert", "alert-danger", "mb-2"]], template: function StudentChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h5", 7);
      \u0275\u0275text(7, "Change Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Can't remember your current password?\xA0");
      \u0275\u0275elementStart(10, "a", 8);
      \u0275\u0275text(11, "Reset your password via email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "form", 9, 0);
      \u0275\u0275listener("ngSubmit", function StudentChangePasswordComponent_Template_form_ngSubmit_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChangePassword());
      });
      \u0275\u0275elementStart(14, "div", 10)(15, "label", 11);
      \u0275\u0275text(16, "Current Password ");
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275text(18, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13)(20, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function StudentChangePasswordComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.oldPassword, $event) || (ctx.oldPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275listener("click", function StudentChangePasswordComponent_Template_span_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(1));
      })("keydown.enter", function StudentChangePasswordComponent_Template_span_keydown_enter_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(1));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 10)(23, "label", 11);
      \u0275\u0275text(24, "New Password ");
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 16)(28, "div", 17)(29, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function StudentChangePasswordComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function StudentChangePasswordComponent_Template_input_input_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.checkPasswordStrength($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275listener("click", function StudentChangePasswordComponent_Template_span_click_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(0));
      })("keydown.enter", function StudentChangePasswordComponent_Template_span_keydown_enter_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(0));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 20);
      \u0275\u0275element(32, "span", 21)(33, "span", 22)(34, "span", 23)(35, "span", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 25);
      \u0275\u0275template(37, StudentChangePasswordComponent_span_37_Template, 3, 0, "span", 26)(38, StudentChangePasswordComponent_span_38_Template, 3, 0, "span", 27)(39, StudentChangePasswordComponent_span_39_Template, 3, 0, "span", 28)(40, StudentChangePasswordComponent_span_40_Template, 3, 0, "span", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 10)(42, "label", 11);
      \u0275\u0275text(43, "Confirm Password ");
      \u0275\u0275elementStart(44, "span", 12);
      \u0275\u0275text(45, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 13)(47, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function StudentChangePasswordComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 15);
      \u0275\u0275listener("click", function StudentChangePasswordComponent_Template_span_click_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(2));
      })("keydown.enter", function StudentChangePasswordComponent_Template_span_keydown_enter_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(2));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(49, StudentChangePasswordComponent_div_49_Template, 2, 1, "div", 31)(50, StudentChangePasswordComponent_div_50_Template, 2, 1, "div", 32);
      \u0275\u0275elementStart(51, "div")(52, "button", 33);
      \u0275\u0275text(53, "Change Password");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 4)(55, "div", 5)(56, "div", 6)(57, "h5", 7);
      \u0275\u0275text(58, "Change Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p");
      \u0275\u0275text(60, "Your current email address is\xA0");
      \u0275\u0275elementStart(61, "a", 34);
      \u0275\u0275text(62, "richard@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "form")(64, "div", 6)(65, "label", 11);
      \u0275\u0275text(66, "New Email Address ");
      \u0275\u0275elementStart(67, "span", 12);
      \u0275\u0275text(68, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(69, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div")(71, "button", 33);
      \u0275\u0275text(72, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.oldPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.password[0] ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(20, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c1, ctx.strengthLevel === "heavy"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.strengthLevel === "poor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "weak");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "strong");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "heavy");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgClass, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-student-change-password", imports: [RouterModule, FormsModule, CommonModule], template: `<div class="card mb-0">
    <div class="card-body">
        <div class="border-bottom mb-4 pb-4">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <h5 class="mb-1 fs-18">Change Password</h5>
                        <p>Can't remember your current password?\xA0<a href="javascript:void(0);" class="text-decoration-underline">Reset your password via email</a></p>
                    </div>
                    <form (ngSubmit)="onChangePassword()" #cpForm="ngForm">
                        <div class="mb-3 position-relative">
                            <label class="form-label">Current Password <span class="text-danger"> *</span></label>
                            <div class="position-relative">
                                <input  [type]="password[1] ? 'text' : 'password'"
                                class="pass-inputs form-control"
                                [(ngModel)]="oldPassword" name="oldPassword">
                                <span
                                class="isax toggle-password"
                                [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"
                                (click)="togglePassword(1)"
                                (keydown.enter)="togglePassword(1)"
                                tabindex="0"
                              ></span>
                            </div>
                        </div>
                        <div class="mb-3 position-relative">
                            <label class="form-label">New Password <span class="text-danger"> *</span></label>
                            <div id="passwordInput" class="pass-group">
                                <div class="pass-group mb-3">
                                    <input
                                  [type]="password[0] ? 'text' : 'password'"
                                  id="password"
                                  class="pass-input form-control form-control-lg"
                                  [(ngModel)]="newPassword" name="newPassword"
                                  (input)="checkPasswordStrength($event)"
                                />
                                <span class="isax toggle-password fs-14"
                                    [ngClass]="password[0] ? 'isax-eye' : 'isax-eye-slash'"
                                    (click)="togglePassword(0)"
                                    (keydown.enter)="togglePassword(0)"
                                    tabindex="0"
                                    ></span>
                                </div>
                                <div id="passwordStrength" class="strength-meter password-strength" [ngClass]="{'poor-active':strengthLevel === 'poor','avg-active':strengthLevel === 'weak','strong-active':strengthLevel === 'strong','heavy-active':strengthLevel === 'heavy'}" >
                                  <span id="poor" [ngClass]="{'active': strengthLevel === 'poor'||strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                  <span id="weak" [ngClass]="{'active': strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                  <span id="strong" [ngClass]="{'active': strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                  <span id="heavy" [ngClass]="{'active': strengthLevel === 'heavy'}"></span>
                                </div>
                               
                              </div>
                              <div id="passwordInfo" class="mt-2" aria-live="polite">
                                <span *ngIf="strengthLevel === 'poor'" class="d-flex align-items-center text-danger fs-15 fw-semibold">
                                  <img src="assets/img/icon/angry.svg" class="me-2">Weak. Must contain at least 8 characters
                                </span>
                                <span *ngIf="strengthLevel === 'weak'" class="d-flex align-items-center text-warning fs-15 fw-semibold">
                                  <img src="assets/img/icon/anguish.svg" class="me-2">Average. Must contain at least 1 letter or number
                                </span>
                                <span *ngIf="strengthLevel === 'strong'" class="d-flex align-items-center text-blueL fs-15 fw-semibold">
                                  <img src="assets/img/icon/smile.svg" class="me-2">Almost. Must contain special symbol
                                </span>
                                <span *ngIf="strengthLevel === 'heavy'" class="d-flex align-items-center text-success fs-15 fw-semibold">
                                  <img src="assets/img/icon/smile.svg" class="me-2">Awesome! You have a secure password.
                                </span>
                              </div>
                          
                        </div>
                        <div class="mb-3 position-relative">
                            <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>
                            <div class="position-relative">
                                <input  [type]="password[2] ? 'text' : 'password'"
                                class="pass-inputs form-control"
                                [(ngModel)]="confirmPassword" name="confirmPassword">
                                <span
                                class="isax toggle-password"
                                [ngClass]="password[2] ? 'isax-eye' : 'isax-eye-slash'"
                                (click)="togglePassword(2)"
                                (keydown.enter)="togglePassword(2)"
                                tabindex="0"
                              ></span>
                            </div>
                        </div>
                        <div *ngIf="successMessage" class="alert alert-success mb-2">{{ successMessage }}</div>
                        <div *ngIf="errorMessage" class="alert alert-danger mb-2">{{ errorMessage }}</div>
                        <div>
                            <button class="btn btn-secondary" type="submit">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <h5 class="mb-1 fs-18">Change Email</h5>
                    <p>Your current email address is\xA0<a href="javascript:void(0);" class="fw-semibold">richard&#64;example.com</a></p>
                </div>
                <form>
                    <div class="mb-3">
                        <label class="form-label">New Email Address <span class="text-danger"> *</span></label>
                        <input type="text" class="form-control">
                    </div>
                    <div>
                        <button class="btn btn-secondary" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: ProfileService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentChangePasswordComponent, { className: "StudentChangePasswordComponent", filePath: "src/app/features/student/settings/student-change-password/student-change-password.component.ts", lineNumber: 14 });
})();
export {
  StudentChangePasswordComponent
};
//# sourceMappingURL=chunk-OOKHVFJN.js.map
