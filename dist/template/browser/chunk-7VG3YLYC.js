import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import "./chunk-MFSRU4HL.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 31)(2, "div", 32);
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "h3", 35);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 36);
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
function ForgotPasswordComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Submit");
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ForgotPasswordComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  DataService;
  authService;
  router;
  routes = routes;
  welcomeLogin = [];
  password = false;
  // Propriétés pour le formulaire
  email = "";
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  togglePassword() {
    this.password = !this.password;
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
  constructor(DataService2, authService, router) {
    this.DataService = DataService2;
    this.authService = authService;
    this.router = router;
    this.welcomeLogin = this.DataService.welcomeLogin;
  }
  // Méthode appelée lors de la soumission du formulaire
  submitForgotPassword() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.email || !this.email.trim()) {
      this.errorMessage = "Veuillez entrer votre adresse email";
      return;
    }
    this.isLoading = true;
    this.authService.forgotPassword({ email: this.email }).subscribe({
      next: (response) => {
        console.log("\u2705 [SUCCESS] R\xE9ponse brute:", response);
        console.log("\u2705 [SUCCESS] Type:", typeof response);
        this.isLoading = false;
        let message = "";
        if (response && typeof response === "object" && response.message) {
          message = response.message;
          console.log('\u2705 Format d\xE9tect\xE9: JSON avec "message"');
        } else if (typeof response === "string" && response.trim()) {
          message = response;
          console.log("\u2705 Format d\xE9tect\xE9: Texte brut");
        } else if (response && typeof response === "object") {
          message = JSON.stringify(response);
          console.log("\u2705 Format d\xE9tect\xE9: Objet JSON (converti)");
        } else {
          message = "OTP envoy\xE9 \xE0 votre email!";
          console.log("\u2705 Format d\xE9tect\xE9: Vide (fallback)");
        }
        console.log("\u2705 Message final:", message);
        this.successMessage = message;
        this.authService.setResetEmail(this.email);
        setTimeout(() => {
          this.router.navigate([routes.otp]);
        }, 1500);
      },
      error: (error) => {
        console.error("\u274C [ERROR FULL]:", error);
        console.error("\u274C Status:", error.status);
        console.error("\u274C Error:", error.error);
        console.error("\u274C Message:", error.message);
        this.isLoading = false;
        let errorMsg = "Une erreur est survenue. Veuillez r\xE9essayer.";
        if (error.error && typeof error.error === "string") {
          errorMsg = error.error;
        } else if (error.error && error.error.message) {
          errorMsg = error.error.message;
        } else if (error.message) {
          errorMsg = error.message;
        }
        this.errorMessage = errorMsg;
      }
    });
  }
  directIndex() {
    this.router.navigate([routes.setPassword]);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 41, vars: 9, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "topic"], [1, "fs-32", "fw-bold", "mb-3"], [1, "fs-14", "fw-normal", "mb-0"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "name", "email", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], [4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success mt-3", "role", "alert", 4, "ngIf"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-success", "mt-3"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, ForgotPasswordComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "h1", 15);
      \u0275\u0275text(18, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 16);
      \u0275\u0275text(20, "Enter your email to reset your password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 17);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_21_listener() {
        return ctx.submitForgotPassword();
      });
      \u0275\u0275elementStart(22, "div", 18)(23, "label", 19);
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementStart(25, "span", 20);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 21)(28, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275element(30, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 24)(32, "button", 25);
      \u0275\u0275template(33, ForgotPasswordComponent_span_33_Template, 3, 0, "span", 26)(34, ForgotPasswordComponent_span_34_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, ForgotPasswordComponent_div_35_Template, 2, 1, "div", 27)(36, ForgotPasswordComponent_div_36_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 29);
      \u0275\u0275text(38, " Remember Password?");
      \u0275\u0275elementStart(39, "a", 30);
      \u0275\u0275text(40, " Sign In");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: '<div class="main-wrapper">\n  <div class="login-content">\n      <div class="row">\n          <!-- Login Banner -->\n          <div class="col-md-6 login-bg d-none d-lg-flex">\n              <div class="login-carousel">\n                <ngx-slick-carousel [config]="authSlider">\n                  @for (slide of welcomeLogin; track slide) {\n                    <div ngxSlickItem>\n                      <div class="login-carousel-section mb-3">\n                          <div class="login-banner">\n                              <img [src]="slide.img" class="img-fluid" alt="Logo">\n                          </div>\n                          <div class="mentor-course text-center">\n                              <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>\n                              <p>{{slide.paragraph}}</p>\n                          </div>\n                      </div>\n                  </div>\n                  }\n                </ngx-slick-carousel>\n                  \n                  \n              </div>\n          </div>\n          <!-- /Login Banner -->\n\n          <div class="col-md-6 login-wrap-bg">\n            <!-- Login -->\n            <div class="login-wrapper">\n                <div class="loginbox">\n                    <div class="w-100">\n                        <div class="d-flex align-items-center justify-content-between login-header">\n                            <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">\n                            <a [routerLink]="routes.home" class="link-1">Back to Home</a>\n                        </div>\n                        <div class="topic">\n                            <h1 class="fs-32 fw-bold mb-3">Forgot Password</h1>\n                            <p class="fs-14 fw-normal mb-0">Enter your email to reset your password.</p>\n                        </div>\n                        <form (ngSubmit)="submitForgotPassword()" class="mb-3 pb-3">\n                            <div class="mb-3 position-relative">\n                                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                                <div class="position-relative">\n                                    <input type="email" class="form-control form-control-lg" [(ngModel)]="email" name="email" required>\n                                    <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>\n                                </div>\n                            </div>\n                            <div class="d-grid">\n                                <button class="btn btn-secondary btn-lg" type="submit" [disabled]="isLoading">\n                                    <span *ngIf="!isLoading">Submit<i class="isax isax-arrow-right-3 ms-1"></i></span>\n                                    <span *ngIf="isLoading">Loading...</span>\n                                </button>\n                            </div>\n                            <div *ngIf="errorMessage" class="alert alert-danger mt-3" role="alert">\n                                {{ errorMessage }}\n                            </div>\n                            <div *ngIf="successMessage" class="alert alert-success mt-3" role="alert">\n                                {{ successMessage }}\n                            </div>\n                        </form>\n\n                        <p class="fs-14 fw-normal d-flex align-items-center justify-content-center">\n                            Remember Password?<a [routerLink]="routes.login" class="link-2 ms-1"> Sign In</a>\n                        </p>\n\n                        <!-- /Login -->\n\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n  </div>\n</div>' }]
  }], () => [{ type: DataService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 19 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-7VG3YLYC.js.map
