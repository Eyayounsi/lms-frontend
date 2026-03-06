import {
  DataService
} from "./chunk-44KX7P7T.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-PRTCGMFX.js";
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
  Router,
  RouterLink
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/set-password/set-password.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
function SetPasswordComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 41)(2, "div", 42);
    \u0275\u0275element(3, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "h3", 45);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", slide_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", slide_r1.content1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r1.content4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.paragraph);
  }
}
function SetPasswordComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275element(1, "img", 48);
    \u0275\u0275text(2, "Weak. Must contain at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275element(1, "img", 50);
    \u0275\u0275text(2, "Average. Must contain at least 1 letter or number ");
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275element(1, "img", 52);
    \u0275\u0275text(2, "Almost. Must contain special symbol ");
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275element(1, "img", 52);
    \u0275\u0275text(2, "Awesome! You have a secure password. ");
    \u0275\u0275elementEnd();
  }
}
var SetPasswordComponent = class _SetPasswordComponent {
  DataService;
  router;
  routes = routes;
  welcomeLogin = [];
  password = [false];
  // Add more as needed
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(DataService2, router) {
    this.DataService = DataService2;
    this.router = router;
    this.welcomeLogin = this.DataService.welcomeLogin;
  }
  directIndex() {
    this.router.navigate([routes.login]);
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
  static \u0275fac = function SetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetPasswordComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetPasswordComponent, selectors: [["app-set-password"]], decls: 53, vars: 28, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "topic"], [1, "fs-32", "fw-bold"], [1, "fw-normal", "fs-14", "mb-0"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", 1, "pass-input", "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mt-2"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-blueL fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold", 4, "ngIf"], ["id", "passwordInput", 1, "position-relative"], [1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold"], ["src", "assets/img/icon/angry.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold"], ["src", "assets/img/icon/anguish.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-blueL", "fs-15", "fw-semibold"], ["src", "assets/img/icon/smile.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold"]], template: function SetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, SetPasswordComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "h1", 15);
      \u0275\u0275text(18, "Set Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 16);
      \u0275\u0275text(20, "Your new password must be different from previous password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 17);
      \u0275\u0275listener("ngSubmit", function SetPasswordComponent_Template_form_ngSubmit_21_listener() {
        return ctx.directIndex();
      });
      \u0275\u0275elementStart(22, "div", 18)(23, "label", 19);
      \u0275\u0275text(24, "New Password ");
      \u0275\u0275elementStart(25, "span", 20);
      \u0275\u0275text(26, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 21)(28, "div", 22)(29, "input", 23);
      \u0275\u0275listener("input", function SetPasswordComponent_Template_input_input_29_listener($event) {
        return ctx.checkPasswordStrength($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 24);
      \u0275\u0275listener("click", function SetPasswordComponent_Template_span_click_30_listener() {
        return ctx.togglePassword(0);
      })("keydown.enter", function SetPasswordComponent_Template_span_keydown_enter_30_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 25);
      \u0275\u0275element(32, "span", 26)(33, "span", 27)(34, "span", 28)(35, "span", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 30);
      \u0275\u0275template(37, SetPasswordComponent_span_37_Template, 3, 0, "span", 31)(38, SetPasswordComponent_span_38_Template, 3, 0, "span", 32)(39, SetPasswordComponent_span_39_Template, 3, 0, "span", 33)(40, SetPasswordComponent_span_40_Template, 3, 0, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 18)(42, "label", 19);
      \u0275\u0275text(43, "Confirm Password ");
      \u0275\u0275elementStart(44, "span", 20);
      \u0275\u0275text(45, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 35);
      \u0275\u0275element(47, "input", 36);
      \u0275\u0275elementStart(48, "span", 37);
      \u0275\u0275listener("click", function SetPasswordComponent_Template_span_click_48_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function SetPasswordComponent_Template_span_keydown_enter_48_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 38)(50, "button", 39);
      \u0275\u0275text(51, "Reset Password ");
      \u0275\u0275element(52, "i", 40);
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(15);
      \u0275\u0275property("type", ctx.password[0] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(15, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx.strengthLevel === "heavy"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.strengthLevel === "poor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "weak");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "strong");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "heavy");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-set-password", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">
    <div class="login-content">
        <div class="row">
            <!-- Login Banner -->
            <div class="col-md-6 login-bg d-none d-lg-flex">
                <div class="login-carousel">
                  <ngx-slick-carousel [config]="authSlider">
                    @for (slide of welcomeLogin; track slide) {
                      <div ngxSlickItem>
                        <div class="login-carousel-section mb-3">
                            <div class="login-banner">
                                <img [src]="slide.img" class="img-fluid" alt="Logo">
                            </div>
                            <div class="mentor-course text-center">
                                <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>
                                <p>{{slide.paragraph}}</p>
                            </div>
                        </div>
                    </div>
                    }
                  </ngx-slick-carousel>
                    
                    
                </div>
            </div>
            <!-- /Login Banner -->
  
            <div class="col-md-6 login-wrap-bg">
                <div class="login-wrapper">
                    <div class="loginbox">
                        <div class="w-100">
                            <div class="d-flex align-items-center justify-content-between login-header">
                                <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">
                                <a [routerLink]="routes.home" class="link-1">Back to Home</a>
                            </div>
                            <div class="topic">
                                <h1 class="fs-32 fw-bold ">Set Password</h1>
                                <p class="fw-normal fs-14 mb-0">Your new password must be different from previous password</p>
                            </div>
                            <form (ngSubmit)="directIndex()" class="mb-3 pb-3">
                                <div class="mb-3 position-relative">
                                    <label class="form-label">New Password <span class="text-danger"> *</span></label>
                                    <div id="passwordInput" class="pass-group">
                                        <div class="pass-group mb-3">
                                            <input
                                          [type]="password[0] ? 'text' : 'password'"
                                          id="password"
                                          class="pass-input form-control form-control-lg"
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
                                    <div class="position-relative" id="passwordInput">
                                        <input [type]="password[1] ? 'text' : 'password'" class="pass-inputs form-control form-control-lg">
                                        <span tabindex="0" (click)="togglePassword(1)" (keydown.enter)="togglePassword(1)" class="isax toggle-passwords fs-14" [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"></span>
                                    </div>
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-secondary btn-lg" type="submit">Reset Password <i class="isax isax-arrow-right-3 ms-1"></i></button>
                                </div>
                            </form>
                            <!-- /Login -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>` }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetPasswordComponent, { className: "SetPasswordComponent", filePath: "src/app/auth/set-password/set-password.component.ts", lineNumber: 16 });
})();
export {
  SetPasswordComponent
};
//# sourceMappingURL=chunk-YDENAIBW.js.map
