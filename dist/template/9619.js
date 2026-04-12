"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9619],{

/***/ 39619:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/data/data.service */ 30098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/service/auth/auth.service */ 34530);













const _c0 = (a0, a1, a2, a3) => ({
  "poor-active": a0,
  "avg-active": a1,
  "strong-active": a2,
  "heavy-active": a3
});
const _c1 = a0 => ({
  "active": a0
});
function RegisterComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 67)(5, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", slide_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", slide_r2.content1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](slide_r2.content2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](slide_r2.content3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", slide_r2.content4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](slide_r2.paragraph);
  }
}
function RegisterComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Weak. Must contain at least 8 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Average. Must contain at least 1 letter or number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Almost. Must contain special symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Awesome! You have a secure password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
let RegisterComponent = /*#__PURE__*/(() => {
  class RegisterComponent {
    DataService;
    router;
    authService;
    route;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
    welcomeLogin = [];
    googleAuthEnabled = !!_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.enableGoogleAuth;
    intendedRole;
    password = [false]; // Add more as needed
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
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    constructor(DataService, router, authService, route) {
      this.DataService = DataService;
      this.router = router;
      this.authService = authService;
      this.route = route;
      this.welcomeLogin = this.DataService.welcomeLogin;
      const requestedRole = (this.route.snapshot.queryParamMap.get('role') || '').toUpperCase();
      this.intendedRole = requestedRole === 'INSTRUCTOR' ? 'INSTRUCTOR' : '';
    }
    get roleQueryParams() {
      return this.intendedRole ? {
        role: this.intendedRole
      } : null;
    }
    directIndex() {
      this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.login]);
    }
    ngAfterViewInit() {
      if (!this.googleAuthEnabled) {
        return;
      }
      const initGoogle = () => {
        if (typeof google !== 'undefined' && google.accounts) {
          google.accounts.id.initialize({
            client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.googleClientId,
            callback: response => this.handleGoogleCredential(response)
          });
          google.accounts.id.renderButton(document.getElementById('google-btn-register'), {
            theme: 'outline',
            size: 'large',
            text: 'signup_with',
            shape: 'rectangular',
            width: 220
          });
        } else {
          setTimeout(initGoogle, 300);
        }
      };
      initGoogle();
    }
    handleGoogleCredential(response) {
      this.authService.loginWithGoogle(response.credential).subscribe({
        next: res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          localStorage.setItem('email', res.email);
          localStorage.setItem('fullName', res.fullName);
          localStorage.setItem('role', res.role);
          localStorage.setItem('firstLogin', 'false');
          this.authService.setFullName(res.fullName || '');
          this.authService.setCurrentRole(res.role || '');
          this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.students_Dashboard]);
        },
        error: err => {
          alert('Connexion Google échouée: ' + (err.error?.error || 'Réessayez'));
        }
      });
    }
    passwordValue = '';
    strengthLevel = '';
    passwordInfoMessage = null;
    passwordInfoColor = '';
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
      if (password === '') {
        this.resetStrength();
        return;
      }
      if (hasWhitespace) {
        this.passwordInfoMessage = 'Whitespaces are not allowed';
        this.passwordInfoColor = 'red';
        this.strengthLevel = '';
        return;
      }
      if (passwordLength < 8) {
        this.strengthLevel = 'poor';
        this.passwordInfoMessage = 'Weak. Must contain at least 8 characters.';
        this.passwordInfoColor = 'red';
      } else if (hasPoor || hasWeak || hasStrong) {
        this.strengthLevel = 'weak';
        this.passwordInfoMessage = 'Average. Must contain at least 1 letter or number.';
        this.passwordInfoColor = '#FFB54A';
      }
      if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
        this.strengthLevel = 'strong';
        this.passwordInfoMessage = 'Almost strong. Must contain a special symbol.';
        this.passwordInfoColor = '#1D9CFD';
      }
      if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
        this.strengthLevel = 'heavy';
        this.passwordInfoMessage = 'Awesome! You have a secure password.';
        this.passwordInfoColor = '#159F46';
      }
    }
    resetStrength() {
      this.strengthLevel = '';
      this.passwordInfoMessage = null;
    }
    // Fonction d'enregistrement
    registerUser(form) {
      console.log('Form values:', form.value); // Debug
      // Vérification que le formulaire est valide
      if (!form.valid) {
        alert('Veuillez remplir tous les champs correctement');
        return;
      }
      const password = form.value.password?.trim();
      const confirmPassword = form.value.confirmPassword?.trim();
      console.log('Password:', password);
      console.log('ConfirmPassword:', confirmPassword);
      // Vérification que les mots de passe correspondent
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      // Préparer les données pour l'API (en enlevant confirmPassword)
      const registerData = {
        fullName: form.value.fullName?.trim(),
        email: form.value.email?.trim(),
        password: password,
        role: this.intendedRole || undefined
      };
      console.log('Sending data:', registerData); // Debug
      this.authService.register(registerData).subscribe({
        next: res => {
          console.log('Inscription réussie:', res);
          localStorage.setItem('token', res.token);
          if (res.fullName) this.authService.setFullName(res.fullName);
          if (res.role) this.authService.setCurrentRole(res.role);
          alert('Inscription réussie ! Redirection vers login...');
          this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.login]);
        },
        error: error => {
          console.error('Erreur inscription:', error);
          alert('Erreur inscription: ' + (error.error?.message || 'Veuillez réessayer'));
        }
      });
    }
    static ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_8__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 100,
      vars: 32,
      consts: [["registerForm", "ngForm"], [1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "text", "name", "fullName", "ngModel", "", "required", "", 1, "form-control", "form-control-lg"], [1, "isax", "isax-user", "input-icon", "text-gray-7", "fs-14"], ["type", "email", "name", "email", "ngModel", "", "required", "", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], [1, "text-danger"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", "name", "password", "ngModel", "", "required", "", 1, "pass-input", "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mt-2"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-blueL fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold", 4, "ngIf"], ["id", "passwordInput", 1, "position-relative"], ["name", "confirmPassword", "ngModel", "", "required", "", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "mb-0", "d-inline-flex", "remember-me", "fs-14"], ["href", "javascript:void(0);", 1, "link-2", "mx-2"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "mb-3"], ["class", "d-flex align-items-center justify-content-center mb-3", 4, "ngIf"], [1, "mb-3"], [1, "d-flex", "align-items-center", "my-2"], [1, "flex-grow-1"], [1, "px-2", "text-muted", "fs-12"], [1, "btn", "btn-outline-secondary", "w-100", "face-register-btn", 3, "routerLink", "queryParams"], [1, "ti", "ti-face-id", "fs-18", "me-2"], [1, "badge", "bg-primary", "ms-2", "fs-10"], [1, "text-muted", "text-center", "small", "mt-2", "mb-0"], [1, "ti", "ti-shield-check", "me-1", "text-success"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold"], ["src", "assets/img/icon/angry.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold"], ["src", "assets/img/icon/anguish.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-blueL", "fs-15", "fw-semibold"], ["src", "assets/img/icon/smile.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["id", "google-btn-register", 1, "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "assets/img/icons/facebook.svg", "alt", "img", 1, "me-2"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "ngx-slick-carousel", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](6, RegisterComponent_For_7_Template, 14, 6, "div", 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Back to Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h1", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "form", 16, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            const registerForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.registerUser(registerForm_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 17)(21, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 17)(30, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 17)(39, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "New Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 26)(44, "div", 27)(45, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.checkPasswordStrength($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.togglePassword(0));
          })("keydown.enter", function RegisterComponent_Template_span_keydown_enter_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.togglePassword(0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "span", 31)(49, "span", 32)(50, "span", 33)(51, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, RegisterComponent_span_53_Template, 3, 0, "span", 36)(54, RegisterComponent_span_54_Template, 3, 0, "span", 37)(55, RegisterComponent_span_55_Template, 3, 0, "span", 38)(56, RegisterComponent_span_56_Template, 3, 0, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 17)(58, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Confirm Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.togglePassword(1));
          })("keydown.enter", function RegisterComponent_Template_span_keydown_enter_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.togglePassword(1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 43)(66, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " I agree with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 48)(76, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Sign Up ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, " Or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, RegisterComponent_div_81_Template, 5, 0, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 53)(83, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "hr", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "ou");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "hr", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, " Inscription avec Face ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Nouveau");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, " Connectez-vous avec votre visage, sans mot de passe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, " Already you have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "a", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.authSlider);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.welcomeLogin);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.password[0] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.password[0] ? "isax-eye" : "isax-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](19, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](24, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](28, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](30, _c1, ctx.strengthLevel === "heavy"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "poor");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "weak");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "heavy");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.googleAuthEnabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.face_register)("queryParams", ctx.roleQueryParams);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.login);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickItemDirective],
      styles: [".face-register-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.face-register-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #5C67E5;\n  color: #5C67E5;\n  box-shadow: 0 4px 15px rgba(92, 103, 229, 0.2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQUU7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFjZS1yZWdpc3Rlci1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJvcmRlci1jb2xvcjogIzVDNjdFNTtcclxuICAgIGNvbG9yOiAjNUM2N0U1O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDkyLDEwMywyMjksMC4yKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return RegisterComponent;
})();

/***/ })

}]);
//# sourceMappingURL=9619.js.map