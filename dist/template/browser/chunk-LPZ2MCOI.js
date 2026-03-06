import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import {
  BlockedService
} from "./chunk-7S53S3ES.js";
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
  NgClass,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/login/login.component.ts
function LoginComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 45)(2, "div", 46);
    \u0275\u0275element(3, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48)(5, "h3", 49);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", slide_r2.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", slide_r2.content1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r2.content2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r2.content3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r2.content4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r2.paragraph);
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.blockedMessage);
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
var LoginComponent = class _LoginComponent {
  DataService;
  router;
  authService;
  blockedService;
  courseService;
  routes = routes;
  welcomeLogin = [];
  password = false;
  blockedMessage = "";
  errorMessage = "";
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
  constructor(DataService2, router, authService, blockedService, courseService) {
    this.DataService = DataService2;
    this.router = router;
    this.authService = authService;
    this.blockedService = blockedService;
    this.courseService = courseService;
    this.welcomeLogin = this.DataService.welcomeLogin;
  }
  ngOnInit() {
    const msg = localStorage.getItem("blockedMessage");
    if (msg) {
      this.blockedMessage = msg;
      localStorage.removeItem("blockedMessage");
    }
  }
  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }
  // Fonction de connexion
  loginUser(form) {
    console.log("Form values:", form.value);
    this.errorMessage = "";
    this.blockedMessage = "";
    if (!form.valid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
    const loginData = {
      email: form.value.email?.trim(),
      password: form.value.password?.trim()
    };
    console.log("Sending login data:", loginData);
    this.authService.login(loginData).subscribe({
      next: (res) => {
        console.log("Connexion r\xE9ussie:", res);
        this.blockedService.clear();
        localStorage.removeItem("blockedMessage");
        localStorage.setItem("token", res.token);
        localStorage.setItem("id", res.id);
        localStorage.setItem("email", res.email);
        localStorage.setItem("fullName", res.fullName);
        localStorage.setItem("role", res.role);
        localStorage.setItem("firstLogin", res.firstLogin ? "true" : "false");
        if (res.firstLogin === true) {
          this.router.navigate([routes.forceChangePassword]);
          return;
        }
        const role = res.role;
        const guestCart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
        const hasGuestItems = guestCart.length > 0 && role.includes("STUDENT");
        const navigateAfterLogin = () => {
          if (role.includes("INSTRUCTOR")) {
            this.router.navigate([routes.instructor_dashboard]);
          } else if (role.includes("STUDENT")) {
            const returnUrl = localStorage.getItem("pendingReturnUrl");
            localStorage.removeItem("pendingReturnUrl");
            if (returnUrl) {
              this.router.navigateByUrl(returnUrl);
            } else if (hasGuestItems) {
              this.router.navigate([routes.cart]);
            } else {
              this.router.navigate([routes.students_Dashboard]);
            }
          } else if (role.includes("SUPERADMIN")) {
            this.router.navigate([routes.superadmin_dashboard]);
          } else if (role.includes("ADMIN")) {
            this.router.navigate([routes.admin_dashboard]);
          } else if (role.includes("RECRUITER")) {
            this.router.navigate([routes.recruiter_dashboard]);
          } else {
            this.router.navigate([routes.home]);
          }
        };
        if (hasGuestItems) {
          localStorage.removeItem("guest_cart");
          const cartCalls = guestCart.map((item) => this.courseService.addToCart(item.id).pipe(catchError(() => of(null))));
          forkJoin(cartCalls).subscribe({ next: () => navigateAfterLogin(), error: () => navigateAfterLogin() });
        } else {
          navigateAfterLogin();
        }
      },
      error: (error) => {
        console.error("Erreur connexion:", error);
        const msg = error.error?.message || "Email ou mot de passe incorrect";
        this.errorMessage = msg;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(BlockedService), \u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 64, vars: 8, consts: [["loginForm", "ngForm"], [1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning d-flex align-items-center gap-2 mb-3", "role", "alert", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "name", "email", "ngModel", "", "required", "", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], ["id", "passwordInput", 1, "position-relative"], ["name", "password", "ngModel", "", "required", "", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "ms-2"], [1, ""], [1, "link-2", 3, "routerLink"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "me-2"], ["src", "assets/img/icons/google.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "assets/img/icons/facebook.svg", "alt", "img", 1, "me-2"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "ti", "ti-ban", "fs-18", "flex-shrink-0"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "ti", "ti-alert-triangle", "fs-18", "flex-shrink-0"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "ngx-slick-carousel", 6);
      \u0275\u0275repeaterCreate(6, LoginComponent_For_7_Template, 14, 6, "div", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
      \u0275\u0275element(13, "img", 13);
      \u0275\u0275elementStart(14, "a", 14);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h1", 15);
      \u0275\u0275text(17, "Sign into Your Account");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, LoginComponent_div_18_Template, 4, 1, "div", 16)(19, LoginComponent_div_19_Template, 4, 1, "div", 17);
      \u0275\u0275elementStart(20, "form", 18, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() {
        \u0275\u0275restoreView(_r1);
        const loginForm_r4 = \u0275\u0275reference(21);
        return \u0275\u0275resetView(ctx.loginUser(loginForm_r4));
      });
      \u0275\u0275elementStart(22, "div", 19)(23, "label", 20);
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementStart(25, "span", 21);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 22);
      \u0275\u0275element(28, "input", 23);
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275element(30, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 19)(32, "label", 20);
      \u0275\u0275text(33, "Password ");
      \u0275\u0275elementStart(34, "span", 21);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 25);
      \u0275\u0275element(37, "input", 26);
      \u0275\u0275elementStart(38, "span", 27);
      \u0275\u0275listener("click", function LoginComponent_Template_span_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword());
      })("keydown.enter", function LoginComponent_Template_span_keydown_enter_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 28)(40, "div", 29);
      \u0275\u0275element(41, "input", 30);
      \u0275\u0275elementStart(42, "label", 31);
      \u0275\u0275text(43, " Remember Me ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 32)(45, "a", 33);
      \u0275\u0275text(46, " Forgot Password ? ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 34)(48, "button", 35);
      \u0275\u0275text(49, "Login ");
      \u0275\u0275element(50, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 37);
      \u0275\u0275text(52, " Or ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 38)(54, "a", 39);
      \u0275\u0275element(55, "img", 40);
      \u0275\u0275text(56, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 41);
      \u0275\u0275element(58, "img", 42);
      \u0275\u0275text(59, "Facebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 43);
      \u0275\u0275text(61, " Don't you have an account?");
      \u0275\u0275elementStart(62, "a", 44);
      \u0275\u0275text(63, " Sign up");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.blockedMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(18);
      \u0275\u0275property("type", ctx.password ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.forgot_password);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.register);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">
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
              <!-- Login -->
              <div class="login-wrapper">
                  <div class="loginbox">
                      <div class="w-100">
                          <div class="d-flex align-items-center justify-content-between login-header">
                              <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">
                              <a [routerLink]="routes.home" class="link-1">Back to Home</a>
                          </div>
                          <h1 class="fs-32 fw-bold topic">Sign into Your Account</h1>
                          <!-- Blocked account message -->
                          <div *ngIf="blockedMessage" class="alert alert-danger d-flex align-items-center gap-2 mb-3" role="alert">
                              <i class="ti ti-ban fs-18 flex-shrink-0"></i>
                              <span>{{ blockedMessage }}</span>
                          </div>
                          <!-- Login error message -->
                          <div *ngIf="errorMessage" class="alert alert-warning d-flex align-items-center gap-2 mb-3" role="alert">
                              <i class="ti ti-alert-triangle fs-18 flex-shrink-0"></i>
                              <span>{{ errorMessage }}</span>
                          </div>
                          <form #loginForm="ngForm" (ngSubmit)="loginUser(loginForm)" class="mb-3 pb-3">
                              <div class="mb-3 position-relative">
                                  <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                  <div class="position-relative">
                                      <input type="email" name="email" ngModel class="form-control form-control-lg" required>
                                      <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>
                                  </div>
                              </div>
                              <div class="mb-3 position-relative">
                                  <label class="form-label">Password <span class="text-danger ms-1">*</span></label>
                                  <div class="position-relative" id="passwordInput">
                                      <input [type]="password ? 'text' : 'password'" name="password" ngModel class="pass-inputs form-control form-control-lg" required>
                                      <span tabindex="0" (click)="togglePassword()" (keydown.enter)="togglePassword()" class="isax toggle-passwords fs-14" [ngClass]="password ? 'isax-eye' : 'isax-eye-slash'"></span>
                                  </div>	
                                  
                              </div>
                              <div class="d-flex align-items-center justify-content-between mb-4">
                                  <div class="remember-me d-flex align-items-center">
                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                      <label class="form-check-label ms-2" for="flexCheckDefault">
                                          Remember Me
                                      </label>
                                  </div>
                                  <div class="">
                                      <a [routerLink]="routes.forgot_password" class="link-2">
                                          Forgot Password ?
                                      </a>
                                  </div>
                              </div>
                              <div class="d-grid">
                                  <button class="btn btn-secondary btn-lg" type="submit">Login <i class="isax isax-arrow-right-3 ms-1"></i></button>
                              </div>
                          </form>

                          <div class="d-flex align-items-center justify-content-center or fs-14 mb-3">
                              Or
                          </div>

                          <div class="d-flex align-items-center justify-content-center mb-3">
                              <a href="javascript:void(0);" class="btn btn-light me-2"><img src="assets/img/icons/google.svg" alt="img" class="me-2">Google</a>
                              <a href="javascript:void(0);" class="btn btn-light"><img src="assets/img/icons/facebook.svg" alt="img" class="me-2">Facebook</a>
                          </div>

                          <div class="fs-14 fw-normal d-flex align-items-center justify-content-center">
                              Don't you have an account?<a [routerLink]="routes.register" class="link-2 ms-1"> Sign up</a>
                          </div>

                          <!-- /Login -->

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>` }]
  }], () => [{ type: DataService }, { type: Router }, { type: AuthService }, { type: BlockedService }, { type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 21 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-LPZ2MCOI.js.map
