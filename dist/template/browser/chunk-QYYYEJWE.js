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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
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

// src/app/auth/register/register.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
function RegisterComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 59)(2, "div", 60);
    \u0275\u0275element(3, "img", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "h3", 63);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 64);
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
function RegisterComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275element(1, "img", 66);
    \u0275\u0275text(2, "Weak. Must contain at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275text(2, "Average. Must contain at least 1 letter or number ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275text(2, "Almost. Must contain special symbol ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275text(2, "Awesome! You have a secure password. ");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  DataService;
  router;
  authService;
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
  constructor(DataService2, router, authService) {
    this.DataService = DataService2;
    this.router = router;
    this.authService = authService;
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
  // Fonction d'enregistrement
  registerUser(form) {
    console.log("Form values:", form.value);
    if (!form.valid) {
      alert("Veuillez remplir tous les champs correctement");
      return;
    }
    const password = form.value.password?.trim();
    const confirmPassword = form.value.confirmPassword?.trim();
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    const registerData = {
      fullName: form.value.fullName?.trim(),
      email: form.value.email?.trim(),
      password
    };
    console.log("Sending data:", registerData);
    this.authService.register(registerData).subscribe({
      next: (res) => {
        console.log("Inscription r\xE9ussie:", res);
        localStorage.setItem("token", res.token);
        alert("Inscription r\xE9ussie ! Redirection vers login...");
        this.router.navigate([routes.login]);
      },
      error: (error) => {
        console.error("Erreur inscription:", error);
        alert("Erreur inscription: " + (error.error?.message || "Veuillez r\xE9essayer"));
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 92, vars: 29, consts: [["registerForm", "ngForm"], [1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "text", "name", "fullName", "ngModel", "", "required", "", 1, "form-control", "form-control-lg"], [1, "isax", "isax-user", "input-icon", "text-gray-7", "fs-14"], ["type", "email", "name", "email", "ngModel", "", "required", "", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], [1, "text-danger"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", "name", "password", "ngModel", "", "required", "", 1, "pass-input", "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mt-2"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-blueL fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold", 4, "ngIf"], ["id", "passwordInput", 1, "position-relative"], ["name", "confirmPassword", "ngModel", "", "required", "", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "mb-0", "d-inline-flex", "remember-me", "fs-14"], ["href", "javascript:void(0);", 1, "link-2", "mx-2"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "me-2"], ["src", "assets/img/icons/google.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "assets/img/icons/facebook.svg", "alt", "img", 1, "me-2"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold"], ["src", "assets/img/icon/angry.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold"], ["src", "assets/img/icon/anguish.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-blueL", "fs-15", "fw-semibold"], ["src", "assets/img/icon/smile.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "ngx-slick-carousel", 6);
      \u0275\u0275repeaterCreate(6, RegisterComponent_For_7_Template, 14, 6, "div", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
      \u0275\u0275element(13, "img", 13);
      \u0275\u0275elementStart(14, "a", 14);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h1", 15);
      \u0275\u0275text(17, "Sign up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "form", 16, 0);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() {
        \u0275\u0275restoreView(_r1);
        const registerForm_r3 = \u0275\u0275reference(19);
        return \u0275\u0275resetView(ctx.registerUser(registerForm_r3));
      });
      \u0275\u0275elementStart(20, "div", 17)(21, "label", 18);
      \u0275\u0275text(22, "Full Name");
      \u0275\u0275elementStart(23, "span", 19);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 20);
      \u0275\u0275element(26, "input", 21);
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275element(28, "i", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 17)(30, "label", 18);
      \u0275\u0275text(31, "Email");
      \u0275\u0275elementStart(32, "span", 19);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275element(35, "input", 23);
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275element(37, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 17)(39, "label", 18);
      \u0275\u0275text(40, "New Password ");
      \u0275\u0275elementStart(41, "span", 25);
      \u0275\u0275text(42, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 26)(44, "div", 27)(45, "input", 28);
      \u0275\u0275listener("input", function RegisterComponent_Template_input_input_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.checkPasswordStrength($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 29);
      \u0275\u0275listener("click", function RegisterComponent_Template_span_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(0));
      })("keydown.enter", function RegisterComponent_Template_span_keydown_enter_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(0));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 30);
      \u0275\u0275element(48, "span", 31)(49, "span", 32)(50, "span", 33)(51, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 35);
      \u0275\u0275template(53, RegisterComponent_span_53_Template, 3, 0, "span", 36)(54, RegisterComponent_span_54_Template, 3, 0, "span", 37)(55, RegisterComponent_span_55_Template, 3, 0, "span", 38)(56, RegisterComponent_span_56_Template, 3, 0, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 17)(58, "label", 18);
      \u0275\u0275text(59, "Confirm Password ");
      \u0275\u0275elementStart(60, "span", 25);
      \u0275\u0275text(61, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 40);
      \u0275\u0275element(63, "input", 41);
      \u0275\u0275elementStart(64, "span", 42);
      \u0275\u0275listener("click", function RegisterComponent_Template_span_click_64_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(1));
      })("keydown.enter", function RegisterComponent_Template_span_keydown_enter_64_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePassword(1));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 43)(66, "div", 44);
      \u0275\u0275element(67, "input", 45);
      \u0275\u0275elementStart(68, "label", 46);
      \u0275\u0275text(69, " I agree with ");
      \u0275\u0275elementStart(70, "a", 47);
      \u0275\u0275text(71, "Terms of Service");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " and ");
      \u0275\u0275elementStart(73, "a", 47);
      \u0275\u0275text(74, "Privacy Policy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 48)(76, "button", 49);
      \u0275\u0275text(77, "Sign Up ");
      \u0275\u0275element(78, "i", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 51);
      \u0275\u0275text(80, " Or ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 52)(82, "a", 53);
      \u0275\u0275element(83, "img", 54);
      \u0275\u0275text(84, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 55);
      \u0275\u0275element(86, "img", 56);
      \u0275\u0275text(87, "Facebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 57);
      \u0275\u0275text(89, " Already you have an account?");
      \u0275\u0275elementStart(90, "a", 58);
      \u0275\u0275text(91, " Login");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(31);
      \u0275\u0275property("type", ctx.password[0] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(16, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c1, ctx.strengthLevel === "heavy"));
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
      \u0275\u0275advance(26);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">
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
                            <h1 class="fs-32 fw-bold topic">Sign up</h1>
                            <form #registerForm="ngForm" (ngSubmit)="registerUser(registerForm)" class="mb-3 pb-3">
                                <div class="mb-3 position-relative">
                                    <label class="form-label">Full Name<span class="text-danger ms-1">*</span></label>
                                    <div class="position-relative">
                                        <input type="text" name="fullName" ngModel class="form-control form-control-lg" required>
                                        <span><i class="isax isax-user input-icon text-gray-7 fs-14"></i></span>
                                    </div>
                                </div>
                                <div class="mb-3 position-relative">
                                    <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                    <div class="position-relative">
                                        <input type="email" name="email" ngModel class="form-control form-control-lg" required>
                                        <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>
                                    </div>
                                </div>
                                <div class="mb-3 position-relative">
                                    <label class="form-label">New Password <span class="text-danger"> *</span></label>
                                    <div id="passwordInput" class="pass-group">
                                        <div class="pass-group mb-3">
                                            <input
                                          [type]="password[0] ? 'text' : 'password'"
                                          id="password"
                                          name="password"
                                          ngModel
                                          class="pass-input form-control form-control-lg"
                                          (input)="checkPasswordStrength($event)"
                                          required
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
                                        <input [type]="password[1] ? 'text' : 'password'" name="confirmPassword" ngModel class="pass-inputs form-control form-control-lg" required>
                                        <span tabindex="0" (click)="togglePassword(1)" (keydown.enter)="togglePassword(1)" class="isax toggle-passwords fs-14" [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"></span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="remember-me d-flex align-items-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label mb-0 d-inline-flex remember-me fs-14" for="flexCheckDefault">
                                                I agree with <a href="javascript:void(0);" class="link-2 mx-2">Terms of Service</a> and <a href="javascript:void(0);" class="link-2 mx-2">Privacy Policy</a> 
                                            </label>
                                    </div>
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-secondary btn-lg" type="submit">Sign Up <i class="isax isax-arrow-right-3 ms-1"></i></button>
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
                                Already you have an account?<a [routerLink]="routes.login" class="link-2 ms-1"> Login</a>
                            </div>

                            <!-- /Login -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>` }]
  }], () => [{ type: DataService }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/register/register.component.ts", lineNumber: 17 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-QYYYEJWE.js.map
