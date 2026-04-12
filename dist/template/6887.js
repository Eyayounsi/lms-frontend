"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6887],{

/***/ 6887:
/*!*******************************************************************************!*\
  !*** ./src/app/features/pages/become-an-expert/become-an-expert.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BecomeAnExpertComponent: () => (/* binding */ BecomeAnExpertComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 85422);









const _c0 = () => ({
  role: "INSTRUCTOR"
});
function BecomeAnExpertComponent_span_210_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Faible. Minimum 8 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BecomeAnExpertComponent_span_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Moyen. Ajoutez lettres ou chiffres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BecomeAnExpertComponent_span_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Presque. Un caract\u00E8re sp\u00E9cial ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function BecomeAnExpertComponent_span_213_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Excellent ! Mot de passe s\u00E9curis\u00E9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
let BecomeAnExpertComponent = /*#__PURE__*/(() => {
  class BecomeAnExpertComponent {
    authService;
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    password = [false, false];
    passwordValue = '';
    strengthLevel = '';
    poorRegExp = /[a-z]/;
    weakRegExp = /(?=.*?[0-9])/;
    strongRegExp = /(?=.*?[#?!@$%^&*-])/;
    whitespaceRegExp = /^$|\s+/;
    constructor(authService, router) {
      this.authService = authService;
      this.router = router;
    }
    togglePassword(index) {
      this.password[index] = !this.password[index];
    }
    scrollToRegisterForm() {
      const formSection = document.getElementById('become-instructor-register-form');
      if (!formSection) return;
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
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
        this.strengthLevel = '';
        return;
      }
      if (hasWhitespace) {
        this.strengthLevel = '';
        return;
      }
      if (passwordLength < 8) {
        this.strengthLevel = 'poor';
        return;
      }
      if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
        this.strengthLevel = 'strong';
      } else {
        this.strengthLevel = 'weak';
      }
      if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
        this.strengthLevel = 'heavy';
      }
    }
    registerInstructor(form) {
      if (!form.valid) {
        alert('Veuillez remplir tous les champs correctement');
        return;
      }
      const password = form.value.password?.trim();
      const confirmPassword = form.value.confirmPassword?.trim();
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      const registerData = {
        fullName: form.value.fullName?.trim(),
        email: form.value.email?.trim(),
        phone: form.value.phone?.trim() || undefined,
        password,
        role: 'INSTRUCTOR'
      };
      this.authService.register(registerData).subscribe({
        next: () => {
          alert('Inscription instructeur réussie ! Redirection vers login...');
          this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes.login]);
        },
        error: error => {
          alert('Erreur inscription: ' + (error.error?.message || 'Veuillez réessayer'));
        }
      });
    }
    static ɵfac = function BecomeAnExpertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BecomeAnExpertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BecomeAnExpertComponent,
      selectors: [["app-become-an-expert"]],
      decls: 256,
      vars: 11,
      consts: [["instructorRegisterForm", "ngForm"], [1, "share-your-knowledge"], [1, "container"], [1, "row"], [1, "col-lg-7", "pe-xl-5"], [1, "share-knowledge-content"], [1, "section-header"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "me-2"], [1, "bg-secondary-transparent", "d-flex", "justify-content-center", "align-items-center", "p-3", "rounded-pill"], ["src", "assets/img/icons/instructor-icon1.svg", "alt", "img"], [1, "mb-1"], [1, "text-truncate", "line-clamb-1"], ["src", "assets/img/icons/instructor-icon2.svg", "alt", "img"], ["src", "assets/img/icons/instructor-icon3.svg", "alt", "img"], ["src", "assets/img/icons/instructor-icon4.svg", "alt", "img"], ["href", "javascript:void(0);", 1, "btn", "register-btn-1", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "col-lg-5"], [1, "share-your-knowledge-img", "d-none", "d-lg-flex"], ["src", "assets/img/shapes/shape-4.png", "alt", "img", 1, "img-fluid", "become-instructor-bg-02"], ["src", "assets/img/shapes/shape-5.png", "alt", "img", 1, "img-fluid", "become-instructor-bg-01"], ["src", "assets/img/shapes/shape-3.png", "alt", "img", 1, "img-fluid", "become-instructor-bg-03"], ["src", "assets/img/course-img/video-img.jpg", "alt", "Instructor session", 1, "img-fluid", "rounded-4", "become-instructor-bg-04"], ["src", "assets/img/course-img/video-img-01.jpg", "alt", "Teaching online", 1, "img-fluid", "rounded-4", "become-instructor-bg-05"], ["src", "assets/img/shapes/shape-7.svg", "alt", "img", 1, "img-fluid", "become-instructor-bg-06"], [1, "how-it-works-sec", "bg-light-900"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "share-knowledge-item-2"], ["src", "assets/img/icons/how-it-works-1.svg", "alt", "img"], [1, "mt-3", "mb-2"], [1, "text-truncate", "line-clamb-2"], ["src", "assets/img/icons/how-it-works-2.svg", "alt", "img"], ["src", "assets/img/icons/how-it-works-3.svg", "alt", "img"], [1, "counter-sec"], [1, "col-xl-3", "col-md-6"], [1, "become-instructor-item-3", "mb-0"], [1, "counter-icon"], ["src", "assets/img/icons/counter-icon1.svg", "alt", "img"], [1, "count-content", "ps-1", "pb-2"], [1, "text-info"], [1, "count-digit"], [1, "fw-medium", "text-truncate"], ["src", "assets/img/icons/counter-icon2.svg", "alt", "img"], [1, "text-warning"], ["src", "assets/img/icons/counter-icon3.svg", "alt", "img"], [1, "text-skyblue"], ["src", "assets/img/icons/counter-icon4.svg", "alt", "img"], [1, "text-lightgreen"], ["id", "become-instructor-register-form", 1, "register-sec"], [1, "row", "align-items-stretch"], [1, "register-img-container", "rounded-4", "overflow-hidden"], ["src", "assets/img/course-img/video-img.jpg", "alt", "Instructeur confirm\u00E9 en formation", 1, "img-fluid", "register-img-main", "d-none", "d-lg-flex"], [1, "register-img-overlay", "position-absolute", "top-0", "start-0", "w-100", "h-100"], [1, "register-img-content", "position-absolute", "bottom-0", "start-0", "w-100", "p-4"], [1, "badge", "bg-white", "text-dark", "mb-2"], [1, "text-white", "mb-2"], [1, "text-white-50", "small"], [1, "register-img-secondary", "mt-3", "rounded-3", "overflow-hidden", "d-none", "d-lg-block"], ["src", "assets/img/course-img/video-img-01.jpg", "alt", "Instructeur moderne en action", 1, "img-fluid", "w-100", "h-100"], [1, "register-section", "p-4", "p-sm-5", "p-md-6", "h-100", "d-flex", "flex-column", "justify-content-center"], [1, "mb-2"], [3, "ngSubmit"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label", "mb-1"], [1, "ms-1", "text-danger"], ["type", "text", "name", "fullName", "ngModel", "", "required", "", 1, "form-control"], ["type", "email", "name", "email", "ngModel", "", "required", "", 1, "form-control"], [1, "text-muted"], ["type", "tel", "name", "phone", "ngModel", "", 1, "form-control"], [1, "mb-3", "position-relative"], ["id", "passwordInput", 1, "position-relative"], ["name", "password", "ngModel", "", "required", "", 1, "pass-inputs", "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mb-3"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-blueL fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold", 4, "ngIf"], [1, "mb-4"], ["name", "confirmPassword", "ngModel", "", "required", "", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], [1, "mb-3", "d-flex", "align-items-center"], ["type", "checkbox", "id", "agreeTermsBecome", "required", "", 1, "form-check-input"], ["for", "agreeTermsBecome", 1, "form-check-label", "mb-0", "d-inline-flex", "remember-me", "fs-14", "ms-2"], ["href", "javascript:void(0);", 1, "link-2", "mx-2"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", "w-100", "justify-content-center"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "my-3"], [1, "btn", "btn-outline-secondary", "w-100", "face-register-btn", 3, "routerLink", "queryParams"], [1, "ti", "ti-face-id", "fs-18", "me-2"], [1, "badge", "bg-primary", "ms-2", "fs-10"], [1, "become-an-instructor", "rounded-2", "bg-primary", "position-relative", "mt-5", "p-5"], ["src", "assets/img/shapes/instructor-bg-1.png", "alt", "img", 1, "instructor-bg-1"], ["src", "assets/img/shapes/instructor-bg-2.png", "alt", "img", 1, "instructor-bg-2"], [1, "row", "align-items-center"], [1, "col-lg-8"], [1, "text-white", "mb-2", "mblg-3"], [1, "text-light"], [1, "col-lg-4", "d-flex", "justify-content-lg-end", "justify-content-center"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-lg", "mt-3", "mt-lg-0", 3, "click"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold"], ["src", "assets/img/icon/angry.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold"], ["src", "assets/img/icon/anguish.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-blueL", "fs-15", "fw-semibold"], ["src", "assets/img/icon/smile.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold"]],
      template: function BecomeAnExpertComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Share Knowledge");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Share Your Knowledge. Inspire the Future.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Share your knowledge, inspire learners worldwide, and earn while doing what you love. Join a community of experts transforming education through engaging and accessible content.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 3)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div")(21, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Flexible Work");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Teach at your own pace.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "div", 10)(28, "div", 11)(29, "div", 12)(30, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div")(33, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Earning Potential");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Monetize your expertise.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 8)(38, "div", 9)(39, "div", 10)(40, "div", 11)(41, "div", 12)(42, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div")(45, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Impact");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Reach and educate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 8)(50, "div", 9)(51, "div", 10)(52, "div", 11)(53, "div", 12)(54, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div")(57, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Access to dedicated support");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BecomeAnExpertComponent_Template_a_click_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.scrollToRegisterForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Register Now ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 22)(65, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "img", 24)(67, "img", 25)(68, "img", 26)(69, "img", 27)(70, "img", 28)(71, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 30)(73, "div", 2)(74, "div", 6)(75, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Our Workflow");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "How It Works");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Turn Your Expertise into Impact in Just 3 Simple Steps!");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 31)(82, "div", 32)(83, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "h5", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Apply & Get Approved");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Submit your application and get approved to access the platform");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 32)(90, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "h5", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Create & Upload Content");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Develop and upload your courses, including videos, lessons, quizzes, and assignments.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 32)(97, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "h5", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Teach & Earn");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Reach learners worldwide, teach, and start earning while making an impact.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 39)(104, "div", 2)(105, "div", 31)(106, "div", 40)(107, "div", 41)(108, "div", 11)(109, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 44)(112, "h4", 45)(113, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "K");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "Online Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 40)(119, "div", 41)(120, "div", 11)(121, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](122, "img", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 44)(124, "h4", 49)(125, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "200");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "Expert Tutors");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 40)(131, "div", 41)(132, "div", 11)(133, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "img", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 44)(136, "h4", 51)(137, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "Certified Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 40)(143, "div", 41)(144, "div", 11)(145, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](146, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 44)(148, "h4", 53)(149, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "60");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](151, "K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Online Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 54)(155, "div", 2)(156, "div", 55)(157, "div", 8)(158, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "img", 57)(160, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 59)(162, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "\uD83D\uDCA1 Pro Tips");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "h5", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](165, "Commencez d\u00E8s aujourd'hui");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "p", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "Rejoignez des milliers d'instructeurs qui transforment vies");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](169, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 8)(171, "div", 65)(172, "h5", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "Inscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "Votre adresse e-mail ne sera pas publi\u00E9e. Les champs obligatoires sont marqu\u00E9s *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "form", 67, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function BecomeAnExpertComponent_Template_form_ngSubmit_176_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const instructorRegisterForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](177);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.registerInstructor(instructorRegisterForm_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 3)(179, "div", 68)(180, "div", 69)(181, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "Nom complet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "span", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](185, "input", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "div", 68)(187, "div", 69)(188, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "span", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](192, "input", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "div", 68)(194, "div", 69)(195, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "Num\u00E9ro de t\u00E9l\u00E9phone ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "span", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "(optionnel)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](199, "input", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "div", 68)(201, "div", 76)(202, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "Nouveau mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "span", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "div", 77)(207, "input", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function BecomeAnExpertComponent_Template_input_input_207_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.checkPasswordStrength($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BecomeAnExpertComponent_Template_span_click_208_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.togglePassword(0));
          })("keydown.enter", function BecomeAnExpertComponent_Template_span_keydown_enter_208_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.togglePassword(0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](210, BecomeAnExpertComponent_span_210_Template, 3, 0, "span", 81)(211, BecomeAnExpertComponent_span_211_Template, 3, 0, "span", 82)(212, BecomeAnExpertComponent_span_212_Template, 3, 0, "span", 83)(213, BecomeAnExpertComponent_span_213_Template, 3, 0, "span", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "div", 68)(215, "div", 85)(216, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "Confirmez le mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "span", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](219, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](221, "input", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BecomeAnExpertComponent_Template_span_click_222_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.togglePassword(1));
          })("keydown.enter", function BecomeAnExpertComponent_Template_span_keydown_enter_222_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.togglePassword(1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "div", 68)(224, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](225, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "label", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](227, " J'accepte les ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "a", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229, "Conditions d'utilisation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, " et la ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "a", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "Politique de confidentialit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "div", 68)(234, "button", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, "S'inscrire comme Instructeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "div", 68)(237, "div", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, " Ou ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "a", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](240, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](241, " Inscription avec Face ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "span", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243, "Nouveau");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](245, "img", 97)(246, "img", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div", 99)(248, "div", 100)(249, "h3", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "Devenez un Instructeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "p", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](252, "Transformez votre expertise en cours impactants et inspirez des apprenants du monde entier. Rejoignez notre communaut\u00E9 d'instructeurs et lancez votre voyage aujourd'hui !");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "div", 103)(254, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BecomeAnExpertComponent_Template_a_click_254_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.scrollToRegisterForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "Commencer l'enseignement");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](207);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.password[0] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.password[0] ? "isax-eye" : "isax-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "poor");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "weak");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.strengthLevel === "heavy");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.face_register)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".face-register-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.face-register-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #5c67e5;\n  color: #5c67e5;\n  box-shadow: 0 4px 15px rgba(92, 103, 229, 0.2);\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  background: linear-gradient(180deg, #fff 0%, #f8faff 100%);\n}\n\n\n\n.share-your-knowledge[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n\n.share-knowledge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: 14px;\n  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.share-knowledge-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 14px 26px rgba(15, 23, 42, 0.1);\n}\n\n.share-your-knowledge-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.become-instructor-bg-04[_ngcontent-%COMP%], \n.become-instructor-bg-05[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 34px rgba(17, 24, 39, 0.18);\n}\n\n\n\n.register-sec[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n\n.register-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 480px;\n  background: linear-gradient(135deg, #5c67e5 0%, #4338ca 100%);\n  overflow: hidden;\n}\n.register-img-container[_ngcontent-%COMP%]   .register-img-main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s ease;\n}\n.register-img-container[_ngcontent-%COMP%]   .register-img-main[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.register-img-container[_ngcontent-%COMP%]   .register-img-overlay[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);\n  z-index: 2;\n}\n.register-img-container[_ngcontent-%COMP%]   .register-img-content[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n.register-img-container[_ngcontent-%COMP%]   .register-img-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.register-img-container[_ngcontent-%COMP%]   .register-img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 0;\n}\n\n.register-img-secondary[_ngcontent-%COMP%] {\n  height: 180px;\n  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.15);\n  transition: transform 0.4s ease, box-shadow 0.4s ease;\n}\n.register-img-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.register-img-secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.2);\n}\n\n.register-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(99, 102, 241, 0.14);\n  border-radius: 18px;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n}\n.register-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #0f1728;\n  font-weight: 700;\n  font-size: 28px;\n  margin-bottom: 12px;\n}\n.register-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n  margin-bottom: 28px;\n}\n.register-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: #0f1728;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.register-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  min-height: 46px;\n  border: 1px solid rgba(99, 102, 241, 0.18);\n  transition: all 0.3s ease;\n}\n.register-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #5c67e5;\n  box-shadow: 0 0 0 3px rgba(92, 103, 229, 0.08);\n}\n.register-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n\n.become-an-instructor[_ngcontent-%COMP%] {\n  background: linear-gradient(120deg, #4338ca 0%, #4f46e5 55%, #6366f1 100%) !important;\n  box-shadow: 0 20px 45px rgba(67, 56, 202, 0.28);\n  overflow: hidden;\n}\n.become-an-instructor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 36px;\n}\n.become-an-instructor[_ngcontent-%COMP%]   .text-light[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n.become-an-instructor[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #4338ca;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.become-an-instructor[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f0f4ff;\n  color: #4338ca;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n}\n\n\n\n@media (max-width: 992px) {\n  .become-instructor-hero-sec[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .become-instructor-hero-sec[_ngcontent-%COMP%]   .instructor-hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n    margin-bottom: 24px;\n  }\n  .become-instructor-hero-sec[_ngcontent-%COMP%]   .instructor-hero-stats[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    flex-wrap: wrap;\n    gap: 20px;\n  }\n  .instructor-hero-img-wrap[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .instructor-hero-img-wrap[_ngcontent-%COMP%]   .instructor-hero-img-primary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .instructor-hero-img-wrap[_ngcontent-%COMP%]   .instructor-hero-img-secondary[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .register-img-container[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n  .register-img-secondary[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .register-section[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .become-an-instructor[_ngcontent-%COMP%] {\n    padding: 32px !important;\n  }\n  .become-an-instructor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .become-an-instructor[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .become-instructor-hero-sec[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .become-instructor-hero-sec[_ngcontent-%COMP%]   .instructor-hero-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 20px;\n  }\n  .become-instructor-hero-sec[_ngcontent-%COMP%]   .instructor-hero-stats[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .become-instructor-hero-sec[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .become-instructor-hero-sec[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-of-type {\n    margin-bottom: 12px;\n  }\n  .instructor-hero-img-wrap[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .register-section[_ngcontent-%COMP%] {\n    padding: 20px !important;\n  }\n  .register-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .become-an-instructor[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .become-an-instructor[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .become-an-instructor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .become-an-instructor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGFnZXMvYmVjb21lLWFuLWV4cGVydC9iZWNvbWUtYW4tZXhwZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0Q7QUFDQztFQUNDLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFHQTtFQUNDLGNBQUE7RUFDQSwwREFBQTtBQUFEOztBQUdBLGtEQUFBO0FBQ0E7RUFDQyxpQkFBQTtBQUFEOztBQUdBO0VBQ0MsMENBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EscURBQUE7QUFBRDs7QUFHQTtFQUNDLDJCQUFBO0VBQ0EsNkNBQUE7QUFBRDs7QUFHQTtFQUNDLGlCQUFBO0FBQUQ7O0FBR0E7O0VBRUMsOENBQUE7QUFBRDs7QUFHQSxzREFBQTtBQUNBO0VBQ0MsZUFBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7RUFDQSxnQkFBQTtBQUFEO0FBRUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFBRjtBQUVFO0VBQ0Msc0JBQUE7QUFBSDtBQUlDO0VBQ0MsaUZBQUE7RUFDQSxVQUFBO0FBRkY7QUFLQztFQUNDLFVBQUE7QUFIRjtBQUtFO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQUhIO0FBTUU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFKSDs7QUFTQTtFQUNDLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHFEQUFBO0FBTkQ7QUFRQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFORjtBQVNDO0VBQ0MsMkJBQUE7RUFDQSw2Q0FBQTtBQVBGOztBQVdBO0VBQ0MsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFSRDtBQVVDO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUkY7QUFXQztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFURjtBQVlDO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVZGOztBQWNBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7QUFYRDtBQWFDO0VBQ0MscUJBQUE7RUFDQSw4Q0FBQTtBQVhGO0FBY0M7RUFDQyxjQUFBO0FBWkY7O0FBZ0JBO0VBQ0MscUZBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0FBYkQ7QUFlQztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQWJGO0FBZ0JDO0VBQ0MsMENBQUE7QUFkRjtBQWlCQztFQUNDLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFmRjtBQWlCRTtFQUNDLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QUFmSDs7QUFvQkEsNENBQUE7QUFDQTtFQUNDO0lBQ0MsZUFBQTtFQWpCQTtFQW1CQTtJQUNDLGVBQUE7SUFDQSxtQkFBQTtFQWpCRDtFQW9CQTtJQUNDLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7RUFsQkQ7RUFzQkQ7SUFDQyxhQUFBO0VBcEJBO0VBc0JBO0lBQ0MsV0FBQTtFQXBCRDtFQXVCQTtJQUNDLGFBQUE7RUFyQkQ7RUF5QkQ7SUFDQyxhQUFBO0VBdkJBO0VBMEJEO0lBQ0Msd0JBQUE7RUF4QkE7RUEyQkQ7SUFDQyxnQkFBQTtFQXpCQTtFQTRCRDtJQUNDLHdCQUFBO0VBMUJBO0VBNEJBO0lBQ0MsZUFBQTtFQTFCRDtFQTZCQTtJQUNDLGdCQUFBO0VBM0JEO0FBQ0Y7QUErQkE7RUFDQztJQUNDLGVBQUE7RUE3QkE7RUErQkE7SUFDQyxlQUFBO0lBQ0EsbUJBQUE7RUE3QkQ7RUFnQ0E7SUFDQyxTQUFBO0VBOUJEO0VBaUNBO0lBQ0MsV0FBQTtFQS9CRDtFQWlDQztJQUNDLG1CQUFBO0VBL0JGO0VBb0NEO0lBQ0MsYUFBQTtFQWxDQTtFQXFDRDtJQUNDLHdCQUFBO0VBbkNBO0VBcUNBO0lBQ0MsZUFBQTtFQW5DRDtFQXVDRDtJQUNDLGtCQUFBO0VBckNBO0VBdUNBO0lBQ0MsbUJBQUE7RUFyQ0Q7RUF3Q0E7SUFDQyxlQUFBO0VBdENEO0VBeUNBO0lBQ0MsZUFBQTtFQXZDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZhY2UtcmVnaXN0ZXItYnRuIHtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjNWM2N2U1O1xyXG5cdFx0Y29sb3I6ICM1YzY3ZTU7XHJcblx0XHRib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoOTIsIDEwMywgMjI5LCAwLjIpO1xyXG5cdH1cclxufVxyXG5cclxuOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYgMCUsICNmOGZhZmYgMTAwJSk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT0gU0hBUkUgS05PV0xFREdFIFNFQ1RJT04gPT09PT09PT09PSAqL1xyXG4uc2hhcmUteW91ci1rbm93bGVkZ2Uge1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcblxyXG4uc2hhcmUta25vd2xlZGdlLWNvbnRlbnQgLmNhcmQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAwLjEyKTtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgOHB4IDIycHggcmdiYSgxNSwgMjMsIDQyLCAwLjA1KTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnNoYXJlLWtub3dsZWRnZS1jb250ZW50IC5jYXJkOmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcblx0Ym94LXNoYWRvdzogMCAxNHB4IDI2cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xyXG59XHJcblxyXG4uc2hhcmUteW91ci1rbm93bGVkZ2UtaW1nIGltZyB7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5iZWNvbWUtaW5zdHJ1Y3Rvci1iZy0wNCxcclxuLmJlY29tZS1pbnN0cnVjdG9yLWJnLTA1IHtcclxuXHRib3gtc2hhZG93OiAwIDE0cHggMzRweCByZ2JhKDE3LCAyNCwgMzksIDAuMTgpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09IFJFR0lTVEVSIFNFQ1RJT04gLSBFTkhBTkNFRCA9PT09PT09PT09ICovXHJcbi5yZWdpc3Rlci1zZWMge1xyXG5cdHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZy1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDQ4MHB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1YzY3ZTUgMCUsICM0MzM4Y2EgMTAwJSk7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0LnJlZ2lzdGVyLWltZy1tYWluIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnJlZ2lzdGVyLWltZy1vdmVybGF5IHtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC40KSAxMDAlKTtcclxuXHRcdHotaW5kZXg6IDI7XHJcblx0fVxyXG5cclxuXHQucmVnaXN0ZXItaW1nLWNvbnRlbnQge1xyXG5cdFx0ei1pbmRleDogMztcclxuXHJcblx0XHRoNSB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHRcdH1cclxuXHJcblx0XHRwIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZy1zZWNvbmRhcnkge1xyXG5cdGhlaWdodDogMTgwcHg7XHJcblx0Ym94LXNoYWRvdzogMCAxMnB4IDMycHggcmdiYSgxNSwgMjMsIDQyLCAwLjE1KTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcclxuXHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuXHRcdGJveC1zaGFkb3c6IDAgMTZweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4yKTtcclxuXHR9XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1zZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAwLjE0KTtcclxuXHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMTZweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XHJcblxyXG5cdGg1IHtcclxuXHRcdGNvbG9yOiAjMGYxNzI4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0fVxyXG5cclxuXHRwIHtcclxuXHRcdGNvbG9yOiAjNmI3MjgwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjhweDtcclxuXHR9XHJcblxyXG5cdC5mb3JtLWxhYmVsIHtcclxuXHRcdGNvbG9yOiAjMGYxNzI4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1zZWN0aW9uIC5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0bWluLWhlaWdodDogNDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xOCk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcblx0Jjpmb2N1cyB7XHJcblx0XHRib3JkZXItY29sb3I6ICM1YzY3ZTU7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5MiwgMTAzLCAyMjksIDAuMDgpO1xyXG5cdH1cclxuXHJcblx0Jjo6cGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICM5Y2EzYWY7XHJcblx0fVxyXG59XHJcblxyXG4uYmVjb21lLWFuLWluc3RydWN0b3Ige1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM0MzM4Y2EgMCUsICM0ZjQ2ZTUgNTUlLCAjNjM2NmYxIDEwMCUpICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogMCAyMHB4IDQ1cHggcmdiYSg2NywgNTYsIDIwMiwgMC4yOCk7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0aDMge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdGZvbnQtc2l6ZTogMzZweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWxpZ2h0IHtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5idG4tc2Vjb25kYXJ5IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRjb2xvcjogIzQzMzhjYTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNGZmO1xyXG5cdFx0XHRjb2xvcjogIzQzMzhjYTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09IFJFU1BPTlNJVkUgREVTSUdOID09PT09PT09PT0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcblx0LmJlY29tZS1pbnN0cnVjdG9yLWhlcm8tc2VjIHtcclxuXHRcdHBhZGRpbmc6IDQwcHggMDtcclxuXHJcblx0XHQuaW5zdHJ1Y3Rvci1oZXJvLXRpdGxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5pbnN0cnVjdG9yLWhlcm8tc3RhdHMge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xyXG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdGdhcDogMjBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5pbnN0cnVjdG9yLWhlcm8taW1nLXdyYXAge1xyXG5cdFx0aGVpZ2h0OiAzNTBweDtcclxuXHJcblx0XHQuaW5zdHJ1Y3Rvci1oZXJvLWltZy1wcmltYXJ5IHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0Lmluc3RydWN0b3ItaGVyby1pbWctc2Vjb25kYXJ5IHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5yZWdpc3Rlci1pbWctY29udGFpbmVyIHtcclxuXHRcdGhlaWdodDogMzIwcHg7XHJcblx0fVxyXG5cclxuXHQucmVnaXN0ZXItaW1nLXNlY29uZGFyeSB7XHJcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQucmVnaXN0ZXItc2VjdGlvbiB7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0LmJlY29tZS1hbi1pbnN0cnVjdG9yIHtcclxuXHRcdHBhZGRpbmc6IDMycHggIWltcG9ydGFudDtcclxuXHJcblx0XHRoMyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHRcdH1cclxuXHJcblx0XHQuYnRuLXNlY29uZGFyeSB7XHJcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHQuYmVjb21lLWluc3RydWN0b3ItaGVyby1zZWMge1xyXG5cdFx0cGFkZGluZzogMzBweCAwO1xyXG5cclxuXHRcdC5pbnN0cnVjdG9yLWhlcm8tdGl0bGUge1xyXG5cdFx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Lmluc3RydWN0b3ItaGVyby1zdGF0cyB7XHJcblx0XHRcdGdhcDogMTVweDtcclxuXHRcdH1cclxuXHJcblx0XHQuYnRuIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHQmOmZpcnN0LW9mLXR5cGUge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5pbnN0cnVjdG9yLWhlcm8taW1nLXdyYXAge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5yZWdpc3Rlci1zZWN0aW9uIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxuXHJcblx0XHRoNSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5iZWNvbWUtYW4taW5zdHJ1Y3RvciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdFx0LmNvbC1sZy04IHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHRoMyB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdH1cclxuXHJcblx0XHRwIHtcclxuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return BecomeAnExpertComponent;
})();

/***/ }),

/***/ 92643:
/*!*************************************************!*\
  !*** ./src/app/shared/service/routes/routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = {
  // SuperAdmin Routes
  superadmin_dashboard: '/superadmin/superadmin-dashboard',
  superadmin_users: '/superadmin/superadmin-users',
  superadminSettings: '/superadmin/superadmin-settings',
  superadmin_logs: '/superadmin/superadmin-logs',
  // Admin Routes
  admin_dashboard: '/admin/admin-dashboard',
  admin_users: '/admin/admin-users',
  admin_courses: '/admin/admin-courses',
  admin_categories: '/admin/admin-categories',
  admin_blog: '/admin/admin-blog',
  admin_tickets: '/admin/admin-tickets',
  admin_payouts: '/admin/admin-payouts',
  admin_detection: '/admin/admin-detection',
  adminAnalytics: '/admin/admin-analytics',
  adminSettings: '/admin/admin-settings',
  // Recruiter Routes
  recruiter_dashboard: '/recruiter/recruiter-dashboard',
  recruiter_shared_profiles: '/recruiter/recruiter-shared-profiles',
  recruiter_certified_students: '/recruiter/recruiter-certified-students',
  recruiter_job_offers: '/recruiter/recruiter-job-offers',
  recruiter_messages: '/recruiter/recruiter-messages',
  recruiterSettings: '/recruiter/settings/recruiter-settings',
  recruiterChangePassword: '/recruiter/settings/recruiter-change-password',
  forceChangePassword: '/auth/force-change-password',
  face_register: '/auth/face-register',
  // Instructor Routes
  instructor: '/instructor/',
  instructor_dashboard: '/instructor/instructor-dashboard',
  instructor_payouts: '/instructor/instructor-payouts',
  instructor_tickets: '/instructor/instructor-tickets',
  instructorWishlist: '/instructor/instructor-wishlist',
  instructorWithdraw: '/instructor/instructor-withdraw',
  instructorProfile: '/instructor/instructor-profile',
  instructorQuizQuestion: '/instructor/instructor-quiz-questions',
  instructorQuiz: '/instructor/instructor-quiz',
  instructorCertificate: '/instructor/instructor-certificate',
  instructorEarning: '/instructor/instructor-payouts',
  instructorStatements: '/instructor/instructor-statements',
  quiz: 'quiz',
  studentsList: '/instructor/students-list',
  studentsGrid: '/instructor/students-grid',
  studentsDetails: '/instructor/students-details',
  instructorQuizResult: '/instructor/instructor-quiz-results',
  instructorCourse: '/instructor/instructor-course',
  instructorNotifications: '/instructor/notifications',
  instructorAddCourse: '/instructor/add-course',
  instructorEditCourse: '/instructor/edit-course',
  instructorMyCourses: '/instructor/instructor-course',
  instructorCourseGrid: '/instructor/instructor-course-grid',
  instructorTickets: '/instructor/instructor-tickets',
  instructorMessage: '/instructor/instructor-message',
  instructorQuizDetails: '/instructor/instructor-quiz-details',
  instructorSettingWithdraw: '/instructor/settings/instructor-setting-withdraw',
  instructorSettingNotifications: '/instructor/settings/instructor-setting-notifications',
  instructorPlans: '/instructor/settings/instructor-plans',
  instructorIntegrations: '/instructor/settings/instructor-integrations',
  instructorLinkedAccounts: '/instructor/settings/instructor-linked-accounts',
  instructorSocialProfiles: '/instructor/settings/instructor-social-profiles',
  instructorDeleteAccount: '/instructor/settings/instructor-delete-account',
  instructorChangePassword: '/instructor/settings/instructor-change-password',
  instructorSettings: '/instructor/settings/instructor-settings',
  instructorDetection: '/instructor/instructor-detection',
  instructorAnalytics: '/instructor/instructor-analytics',
  // Student Routes
  students: '/student/',
  students_profile: '/student/student-profile',
  students_Dashboard: '/student/student-dashboard',
  course_student: '/student/course-student',
  student_Certificate: '/student/student-certificate',
  student_Wishlist: '/student/student-wishlist',
  view_invoice_student: '/student/view-invoice',
  transactions_student: '/student/transactions-student',
  students_security: '/student/setting-student-security',
  students_notification: '/student/setting-student-notification',
  students_privacy: '/student/setting-student-privacy',
  students_delete: '/student/setting-student-delete-profile',
  students_accounts: '/student/setting-student-accounts',
  students_referral: '/student/student-referral',
  students_subscription: '/student/setting-student-subscription',
  students_billing: '/student/setting-student-billing',
  students_payments: '/student/setting-student-payment',
  students_invoice: '/student/setting-student-invoice',
  students_tickets: '/student/student-tickets',
  students_message: '/student/student-message',
  students_quiz_question: '/student/student-quiz-questions',
  students_quiz: '/student/student-quiz',
  studentsQuizQuestion: '/student/student-quiz-questions',
  studentsQuiz: '/student/student-quiz',
  studentProfile: '/student/student-profile',
  studentMessages: '/student/student-message',
  studentsMessage: '/student/student-message',
  studentOrderHistory: '/student/student-order-history',
  studentWishlist: '/student/student-wishlist',
  studentCourses: '/student/student-courses',
  studentMyCourses: '/student/student-my-courses',
  studentReviews: '/student/student-reviews',
  studentQuizDetails: '/student/student-quiz-details',
  studentQuiz: '/student/student-quiz',
  studentLinkedAccount: '/student/settings/student-linked-accounts',
  studentNotification: '/student/settings/student-notifications',
  students_social_profile: '/student/settings/student-social-profile',
  studentChangePassword: '/student/settings/student-change-password',
  studentSettings: '/student/settings/student-settings',
  studentBillingAddress: '/student/settings/student-billing-address',
  studentQa: '/student/student-qa',
  student_job_offers: '/student/student-job-offers',
  studentChallenges: '/student/student-challenges',
  studentPointsExchange: '/student/student-points-exchange',
  // Pages Routes
  pages: '/pages/',
  page_notifications: '/pages/notifications',
  becomeAnExpert: '/pages/become-an-instructor',
  testimonial: '/pages/testimonial',
  aboutUs: '/pages/about-us',
  contactUs: '/pages/contact-us',
  page_pricing_plan: '/pages/pricing-plan',
  page_faq: '/pages/faq',
  page_term_condition: '/pages/term-condition',
  page_privacy_policy: '/pages/privacy-policy',
  instructorDetails: '/pages/instructor-details',
  instructorGrid: '/pages/instructor-grid',
  instructorList: '/pages/instructor-list',
  // Blog Routes
  blog: '/blog/',
  blog_details_left_sidebar: '/blog/blog-details-left-sidebar',
  blog_details_right_sidebar: '/blog/blog-details-right-sidebar',
  blog_details: '/blog/blog-details',
  blog_masonry: '/blog/blog-masonry',
  blog_grid: '/blog/blog-grid',
  blog_grid2: '/blog/blog-2-grid',
  blog_grid3: '/blog/blog-3-grid',
  blog_carousal: '/blog/blog-carousal',
  blog_left_sidebar: '/blog/blog-left-sidebar',
  blog_right_sidebar: '/blog/blog-right-sidebar',
  // Auth Routes
  auth: '/auth/',
  forgot_password: '/auth/forgot-password',
  login: '/auth/login',
  register: '/auth/register',
  setPassword: '/auth/set-password',
  otp: '/auth/otp',
  lockScreen: '/auth/lock-screen',
  under_construction: '/under-construction',
  comming_soon: '/coming-soon',
  error_404: '/error-404',
  error_500: '/error-500',
  // Home Routes
  home: '/index',
  home2: '/index-two',
  home3: '/index-three',
  home4: '/index-four',
  home5: '/index-five',
  home6: '/index-six',
  // Courses Routes
  courses: '/courses',
  courseGrid: '/courses/course-grid',
  courseList: '/courses/course-list',
  courseCategory: '/courses/course-category',
  courseCategory2: '/courses/course-category-2',
  courseCategory3: '/courses/course-category-3',
  courseResume: '/courses/course-resume',
  courseWatch: '/courses/course-watch',
  cart: '/courses/cart',
  checkout: '/courses/checkout',
  courseDetails: '/courses/course-details',
  courseDetails2: '/courses/course-details-2',
  courseListPublic: '/courses/course-list-public',
  verifyCertificate: '/courses/certificates/verify',
  addCourse: '/courses/add-course',
  editCourse: '/courses/edit-course'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);
//# sourceMappingURL=6887.js.map