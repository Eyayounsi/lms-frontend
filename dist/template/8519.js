"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8519],{

/***/ 28519:
/*!***************************************************************!*\
  !*** ./src/app/auth/face-register/face-register.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceRegisterComponent: () => (/* binding */ FaceRegisterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/routes/routes */ 92643);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 85422);











const _c0 = ["faceVideo"];
const _c1 = ["faceCanvas"];
const _c2 = () => [];
function FaceRegisterComponent_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function FaceRegisterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00C9tape 1 / 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 12)(8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Inscription Face ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Cr\u00E9ez votre compte et utilisez votre visage pour vous connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, FaceRegisterComponent_div_1_div_14_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 18, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function FaceRegisterComponent_div_1_Template_form_ngSubmit_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const faceForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onFormSubmit(faceForm_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 19)(18, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Nom complet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 25)(27, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Apr\u00E8s validation, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "10 photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " de votre visage seront captur\u00E9es pour s\u00E9curiser votre compte.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 30)(43, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " Continuer vers la capture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 33)(47, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Inscription classique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.routes.home);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.routes.register);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r1.routes.login);
  }
}
function FaceRegisterComponent_div_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.cameraError, " ");
  }
}
function FaceRegisterComponent_div_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FaceRegisterComponent_div_2_div_34_Template_button_click_2_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeImage(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate1"]("capture ", i_r6 + 1))("src", img_r7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r6 + 1);
  }
}
function FaceRegisterComponent_div_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function FaceRegisterComponent_div_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "10 captures effectu\u00E9es !");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Cliquez sur \"Finaliser l'inscription\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function FaceRegisterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 42)(4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Inscription de");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "strong", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u00C9tape 2 / 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 45)(13, "div", 46)(14, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Capture du visage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Cliquez sur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Capturer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " pour prendre une photo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Tournez l\u00E9g\u00E8rement la t\u00EAte entre chaque capture. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 50)(25, "div", 51)(26, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, FaceRegisterComponent_div_2_div_32_Template, 3, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, FaceRegisterComponent_div_2_div_34_Template, 6, 4, "div", 58)(35, FaceRegisterComponent_div_2_div_35_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 60)(37, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FaceRegisterComponent_div_2_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.submitRegistration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FaceRegisterComponent_div_2_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.restartCapture());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Recommencer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 65)(44, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "video", 67, 1)(47, "canvas", 68, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, FaceRegisterComponent_div_2_div_54_Template, 6, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 74)(56, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FaceRegisterComponent_div_2_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.captureImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " Capturer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Tournez l\u00E9g\u00E8rement la t\u00EAte et changez d'expression entre chaque capture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.formData.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.formData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-success", ctx_r1.capturedImages.length === 10)("bg-primary", ctx_r1.capturedImages.length < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.capturedImages.length, " / 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ctx_r1.captureProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-success", ctx_r1.capturedImages.length === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.cameraError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.capturedImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c2).constructor(10 - ctx_r1.capturedImages.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.capturedImages.length < 10 || ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.submitting ? "Enregistrement\u2026" : "Finaliser l'inscription", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("camera-error", !!ctx_r1.cameraError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.capturedImages.length, "/10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.capturedImages.length === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.capturedImages.length >= 10 || !!ctx_r1.cameraError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.capturedImages.length, "/10");
  }
}
let FaceRegisterComponent = /*#__PURE__*/(() => {
  class FaceRegisterComponent {
    authService;
    router;
    route;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes;
    // ── Multi-step state ─────────────────────────────────────────────────────
    step = 1;
    formData = {
      fullName: '',
      email: ''
    };
    requestedRole = '';
    errorMessage = '';
    // ── Camera state ─────────────────────────────────────────────────────────
    capturedImages = []; // base64 strings shown as thumbnails
    submitting = false;
    cameraError = '';
    stream = null;
    faceVideo;
    faceCanvas;
    constructor(authService, router, route) {
      this.authService = authService;
      this.router = router;
      this.route = route;
      const role = (this.route.snapshot.queryParamMap.get('role') || '').toUpperCase();
      this.requestedRole = role === 'INSTRUCTOR' ? 'INSTRUCTOR' : '';
    }
    ngAfterViewInit() {}
    ngOnDestroy() {
      this.stopCamera();
    }
    // ── Step 1: form submit ──────────────────────────────────────────────────
    onFormSubmit(form) {
      var _this = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.errorMessage = '';
        if (!form.valid) {
          _this.errorMessage = 'Veuillez remplir tous les champs correctement.';
          return;
        }
        _this.formData = {
          fullName: form.value.fullName?.trim(),
          email: form.value.email?.trim()
        };
        // SweetAlert guidance before opening camera
        const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          title: '📸 Capture de votre visage',
          html: `
        <div class="text-start small">
          <p class="mb-2">La caméra va s'ouvrir pour capturer <strong>10 photos</strong> de votre visage.</p>
          <p class="fw-semibold mb-1">📋 Conseils pour une bonne capture :</p>
          <ul class="ps-3 mb-0">
            <li>Restez <strong>face à la caméra</strong>, regardez l'objectif</li>
            <li>Assurez-vous d'avoir une <strong>bonne luminosité</strong> (pas de contre-jour)</li>
            <li>Tournez <strong>légèrement la tête</strong> à chaque capture (gauche, droite…)</li>
            <li>Retirez vos <strong>lunettes de soleil</strong> ou masque</li>
            <li>Gardez une <strong>expression neutre</strong></li>
          </ul>
        </div>
      `,
          icon: 'info',
          confirmButtonText: '🎬 Commencer la capture',
          cancelButtonText: 'Annuler',
          showCancelButton: true,
          confirmButtonColor: '#5C67E5',
          cancelButtonColor: '#6c757d',
          customClass: {
            htmlContainer: 'text-start'
          }
        });
        if (result.isConfirmed) {
          _this.step = 2;
          // Wait for *ngIf to render step 2 before accessing ViewChild
          setTimeout(() => _this.startCamera(), 150);
        }
      })();
    }
    // ── Camera ───────────────────────────────────────────────────────────────
    startCamera() {
      this.cameraError = '';
      navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: 'user'
        }
      }).then(stream => {
        this.stream = stream;
        const video = this.faceVideo.nativeElement;
        video.srcObject = stream;
        video.play();
      }).catch(err => {
        this.cameraError = 'Impossible d\'accéder à la caméra : ' + err.message;
      });
    }
    stopCamera() {
      this.stream?.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    // ── Capture one image ────────────────────────────────────────────────────
    captureImage() {
      if (this.capturedImages.length >= 10) return;
      const video = this.faceVideo.nativeElement;
      const canvas = this.faceCanvas.nativeElement;
      canvas.width = 320;
      canvas.height = 240;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 320, 240);
      const base64 = canvas.toDataURL('image/jpeg', 0.85);
      this.capturedImages.push(base64);
      // Small visual flash
      canvas.style.opacity = '0.5';
      setTimeout(() => canvas.style.opacity = '1', 100);
    }
    removeImage(index) {
      this.capturedImages.splice(index, 1);
    }
    get captureProgress() {
      return this.capturedImages.length / 10 * 100;
    }
    // ── Final submit: register face + user account ───────────────────────────
    submitRegistration() {
      var _this2 = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this2.capturedImages.length < 10 || _this2.submitting) return;
        _this2.submitting = true;
        _this2.stopCamera();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          title: 'Enregistrement en cours…',
          html: '<p>Analyse de votre visage et création du compte…</p>',
          allowOutsideClick: false,
          didOpen: () => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().showLoading()
        });
        // 1. Register face encodings in Python service
        _this2.authService.registerFaceEncodings(_this2.formData.email, _this2.formData.fullName, _this2.capturedImages).subscribe({
          next: pyRes => {
            // 2. Create user account in Spring Boot
            _this2.authService.registerFaceUser({
              ..._this2.formData,
              role: _this2.requestedRole || undefined
            }).subscribe({
              next: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                _this2.submitting = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                  title: '✅ Inscription réussie !',
                  html: `
                <p>Bienvenue <strong>${_this2.formData.fullName}</strong> !</p>
                <p>${pyRes.faces_detected} captures de votre visage ont été enregistrées.</p>
                <p class="text-muted small">Vous pouvez maintenant vous connecter avec votre visage.</p>
              `,
                  icon: 'success',
                  confirmButtonText: 'Aller au login',
                  confirmButtonColor: '#5C67E5',
                  allowOutsideClick: false
                }).then(() => {
                  _this2.router.navigate([_this2.routes.login]);
                });
              },
              error: err => {
                _this2.submitting = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                  title: 'Erreur création de compte',
                  text: err.error?.error || 'Impossible de créer le compte. Réessayez.',
                  icon: 'error'
                });
              }
            });
          },
          error: err => {
            _this2.submitting = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
              title: 'Erreur reconnaissance faciale',
              text: err.error?.detail || 'Problème avec le service Face ID. Vérifiez que le service Python est démarré.',
              icon: 'error'
            });
          }
        });
      })();
    }
    // ── Restart capture ──────────────────────────────────────────────────────
    restartCapture() {
      this.capturedImages = [];
      this.cameraError = '';
      this.startCamera();
    }
    static ɵfac = function FaceRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FaceRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FaceRegisterComponent,
      selectors: [["app-face-register"]],
      viewQuery: function FaceRegisterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.faceVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.faceCanvas = _t.first);
        }
      },
      decls: 3,
      vars: 2,
      consts: [["faceForm", "ngForm"], ["faceVideo", ""], ["faceCanvas", ""], [1, "face-register-page"], ["class", "step-wrapper step-form animate-in", 4, "ngIf"], ["class", "step-wrapper step-camera animate-in", 4, "ngIf"], [1, "step-wrapper", "step-form", "animate-in"], [1, "face-card"], [1, "face-card-header"], [3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "logo-img"], [1, "step-badge"], [1, "face-card-title"], [1, "face-icon-circle"], [1, "ti", "ti-face-id", "fs-32", "text-primary"], [1, "fw-bold", "mt-3", "mb-1"], [1, "text-muted", "small"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-3", "role", "alert", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger"], [1, "position-relative"], ["type", "text", "name", "fullName", "ngModel", "", "required", "", "placeholder", "Jean Dupont", 1, "form-control", "form-control-lg"], [1, "isax", "isax-user", "input-icon", "text-gray-7", "fs-14"], [1, "mb-4", "position-relative"], ["type", "email", "name", "email", "ngModel", "", "required", "", "placeholder", "exemple@email.com", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], [1, "info-banner", "mb-4"], [1, "ti", "ti-camera", "fs-18", "me-2", "text-primary"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "face-btn"], [1, "ti", "ti-camera", "me-2"], [1, "mt-4", "text-center", "links-row"], [1, "link-2", 3, "routerLink"], [1, "ti", "ti-user-plus", "me-1"], [1, "mx-2", "text-muted"], [1, "ti", "ti-login", "me-1"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "ti", "ti-alert-triangle", "fs-16", "flex-shrink-0"], [1, "step-wrapper", "step-camera", "animate-in"], [1, "capture-topbar"], [1, "topbar-info"], [1, "ms-1"], [1, "badge", "bg-light", "text-dark", "ms-2", "small"], [1, "capture-layout"], [1, "capture-sidebar"], [1, "fw-bold", "mb-1"], [1, "ti", "ti-camera", "me-1", "text-primary"], [1, "text-muted", "small", "mb-3"], [1, "progress-section", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "small", "fw-semibold"], [1, "badge"], [1, "progress", 2, "height", "8px"], ["role", "progressbar", 1, "progress-bar"], ["class", "alert alert-danger small p-2", 4, "ngIf"], [1, "thumbnails-grid"], ["class", "thumbnail-item", 4, "ngFor", "ngForOf"], ["class", "thumbnail-item thumbnail-empty", 4, "ngFor", "ngForOf"], [1, "d-grid", "gap-2", "mt-3"], [1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], [1, "ti", "ti-check", "me-2"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click", "disabled"], [1, "ti", "ti-refresh", "me-1"], [1, "capture-camera"], [1, "video-wrapper"], ["autoplay", "", "playsinline", "", "muted", "", 1, "camera-video"], [2, "display", "none"], [1, "face-guide-overlay"], [1, "face-oval"], [1, "capture-badge"], [1, "ti", "ti-camera", "me-1"], ["class", "ready-overlay", 4, "ngIf"], [1, "text-center", "mt-3"], [1, "btn", "btn-primary", "btn-capture", 3, "click", "disabled"], [1, "ti", "ti-camera", "fs-20", "me-2"], [1, "ms-2", "badge", "bg-white", "text-primary"], [1, "text-muted", "small", "mt-2"], [1, "ti", "ti-info-circle", "me-1"], [1, "alert", "alert-danger", "small", "p-2"], [1, "ti", "ti-alert-circle", "me-1"], [1, "thumbnail-item"], [1, "thumbnail-img", 3, "src", "alt"], ["title", "Supprimer", 1, "thumbnail-remove", 3, "click"], [1, "thumbnail-label"], [1, "thumbnail-item", "thumbnail-empty"], [1, "ti", "ti-camera", "text-muted"], [1, "ready-overlay"], [1, "ti", "ti-check-circle", "fs-48", "text-success", "mb-2"], [1, "fw-semibold", "mb-0"]],
      template: function FaceRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FaceRegisterComponent_div_1_Template, 55, 4, "div", 4)(2, FaceRegisterComponent_div_2_Template, 64, 24, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.step === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.step === 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["@charset \"UTF-8\";\n\n\n.face-register-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.35s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.logo-img[_ngcontent-%COMP%] {\n  height: 36px;\n  filter: brightness(0) invert(1);\n}\n\n.step-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n\n\n\n.step-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  padding-top: 1rem;\n}\n\n.face-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 2.5rem;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n\n.face-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n\n.face-card-header[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  filter: none;\n}\n\n.face-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.face-icon-circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1333333333), rgba(118, 75, 162, 0.1333333333));\n  border: 2px solid rgba(102, 126, 234, 0.2666666667);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.info-banner[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n  border: 1px solid #c7d2fe;\n  border-radius: 10px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: flex-start;\n  font-size: 13px;\n  color: #4338ca;\n}\n\n.face-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  border: none;\n  border-radius: 12px;\n  padding: 14px;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  transition: transform 0.15s;\n}\n.face-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n\n.links-row[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n\n\n.step-camera[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1100px;\n  padding-top: 1rem;\n}\n\n.capture-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border-radius: 14px;\n  padding: 12px 20px;\n  margin-bottom: 1.25rem;\n  color: #fff;\n}\n.capture-topbar[_ngcontent-%COMP%]   .topbar-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.capture-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 1.25rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .capture-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n\n.capture-sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  padding: 1.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.thumbnails-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 6px;\n  margin-bottom: 4px;\n}\n\n.thumbnail-item[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f8f9fa;\n  border: 2px solid #dee2e6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border-color 0.2s;\n}\n\n.thumbnail-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.thumbnail-empty[_ngcontent-%COMP%] {\n  border-style: dashed;\n  border-color: #d1d5db;\n  color: #9ca3af;\n  font-size: 14px;\n}\n\n.thumbnail-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: rgba(220, 53, 69, 0.85);\n  color: #fff;\n  border: none;\n  font-size: 10px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n\n.thumbnail-item[_ngcontent-%COMP%]:hover   .thumbnail-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.thumbnail-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  left: 3px;\n  font-size: 9px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.9);\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);\n}\n\n\n\n.capture-camera[_ngcontent-%COMP%] {\n  background: #1a1a2e;\n  border-radius: 18px;\n  padding: 1.25rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n}\n\n.video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #000;\n  aspect-ratio: 4/3;\n}\n.video-wrapper.camera-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #2d2d2d;\n}\n\n.camera-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scaleX(-1); \n\n}\n\n\n\n.face-guide-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n\n.face-oval[_ngcontent-%COMP%] {\n  width: 42%;\n  aspect-ratio: 3/4;\n  border: 3px dashed rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_pulse-oval 2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-oval {\n  0%, 100% {\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n  50% {\n    border-color: rgba(102, 126, 234, 0.9);\n  }\n}\n\n\n.capture-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #fff;\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 13px;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n\n\n.ready-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.3s ease-out;\n}\n\n\n\n.btn-capture[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  border: none;\n  border-radius: 50px;\n  padding: 14px 36px;\n  font-weight: 700;\n  font-size: 16px;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-capture[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.04);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);\n}\n.btn-capture[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9mYWNlLXJlZ2lzdGVyL2ZhY2UtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLGdGQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UscUNBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBSW5CO0VBSEE7SUFBTyxVQUFBO0lBQVksd0JBQUE7RUFPbkI7QUFDRjtBQUxBLCtFQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUFPRjs7QUFKQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU9GOztBQUpBLCtFQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQU9GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU9GOztBQUpBO0VBQ0UsWUFBQTtBQU9GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx3R0FBQTtFQUNBLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFPRjs7QUFKQTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQU9GO0FBTkU7RUFBVSwyQkFBQTtFQUE2QiwrQ0FBQTtBQVV6Qzs7QUFQQTtFQUNFLGVBQUE7QUFVRjs7QUFQQSwrRUFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFVRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBVUY7QUFSRTtFQUFlLE9BQUE7QUFXakI7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFXRjtBQVRFO0VBTkY7SUFPSSwwQkFBQTtFQVlGO0FBQ0Y7O0FBVEEsK0VBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUFZRjs7QUFUQSxlQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQVlGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVlGOztBQVRBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQVlGOztBQVRBO0VBQTBDLFVBQUE7QUFhMUM7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtBQWNGOztBQVhBLCtFQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQWNGOztBQVhBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWNGO0FBWkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUEsRUFBQSxXQUFBO0FBYUY7O0FBVkEsdUJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFhRjs7QUFWQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDZDQUFBO0FBYUY7O0FBVkE7RUFDRTtJQUFXLHNDQUFBO0VBY1g7RUFiQTtJQUFZLHNDQUFBO0VBZ0JaO0FBQ0Y7QUFkQSx3QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBZ0JGOztBQWJBLGtCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQWdCRjs7QUFiQSxtQkFBQTtBQUNBO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FBZ0JGO0FBZEU7RUFDRSxzQkFBQTtFQUNBLCtDQUFBO0FBZ0JKO0FBYkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFlSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpTCgMOiwpTCgCBQYWdlIHdyYXBwZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi5mYWNlLXJlZ2lzdGVyLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbn1cclxuXHJcbi5hbmltYXRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuMzVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVTbGlkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoAgU2hhcmVkIGVsZW1lbnRzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4ubG9nby1pbWcge1xyXG4gIGhlaWdodDogMzZweDtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4uc3RlcC1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4vKiDDosKUwoDDosKUwoAgU1RFUCAxIMOiwoDClCBGb3JtIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4uc3RlcC1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZmFjZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMi41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbn1cclxuXHJcbi5mYWNlLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZhY2UtY2FyZC1oZWFkZXIgLmxvZ28taW1nIHtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mYWNlLWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mYWNlLWljb24tY2lyY2xlIHtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYTIyLCAjNzY0YmEyMjIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjdlZWE0NDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaW5mby1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMGY0ZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M3ZDJmZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzQzMzhjYTtcclxufVxyXG5cclxuLmZhY2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cztcclxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLDEyNiwyMzQsMC40KTsgfVxyXG59XHJcblxyXG4ubGlua3Mtcm93IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBTVEVQIDIgw6LCgMKUIENhbWVyYSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cclxuLnN0ZXAtY2FtZXJhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNhcHR1cmUtdG9wYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLnRvcGJhci1pbmZvIHsgZmxleDogMTsgfVxyXG59XHJcblxyXG4uY2FwdHVyZS1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XHJcbiAgZ2FwOiAxLjI1cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBTaWRlYmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xyXG4uY2FwdHVyZS1zaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLyogVGh1bWJuYWlscyAqL1xyXG4udGh1bWJuYWlscy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhc3BlY3QtcmF0aW86IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcclxufVxyXG5cclxuLnRodW1ibmFpbC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnRodW1ibmFpbC1lbXB0eSB7XHJcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDFkNWRiO1xyXG4gIGNvbG9yOiAjOWNhM2FmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRodW1ibmFpbC1yZW1vdmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsNTMsNjksMC44NSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cztcclxufVxyXG5cclxuLnRodW1ibmFpbC1pdGVtOmhvdmVyIC50aHVtYm5haWwtcmVtb3ZlIHsgb3BhY2l0eTogMTsgfVxyXG5cclxuLnRodW1ibmFpbC1sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIGxlZnQ6IDNweDtcclxuICBmb250LXNpemU6IDlweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBDYW1lcmEgcGFuZWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcbi5jYXB0dXJlLWNhbWVyYSB7XHJcbiAgYmFja2dyb3VuZDogIzFhMWEyZTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4udmlkZW8td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGFzcGVjdC1yYXRpbzogNCAvIDM7XHJcblxyXG4gICYuY2FtZXJhLWVycm9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gIH1cclxufVxyXG5cclxuLmNhbWVyYS12aWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTsgLyogbWlycm9yICovXHJcbn1cclxuXHJcbi8qIEZhY2UgZ3VpZGUgb3ZlcmxheSAqL1xyXG4uZmFjZS1ndWlkZS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZmFjZS1vdmFsIHtcclxuICB3aWR0aDogNDIlO1xyXG4gIGFzcGVjdC1yYXRpbzogMyAvIDQ7XHJcbiAgYm9yZGVyOiAzcHggZGFzaGVkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMjAwMHB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZS1vdmFsIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlLW92YWwge1xyXG4gIDAlLCAxMDAlIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7IH1cclxuICA1MCUgICAgICAgeyBib3JkZXItY29sb3I6IHJnYmEoMTAyLDEyNiwyMzQsMC45KTsgfVxyXG59XHJcblxyXG4vKiBDYXB0dXJlIGNvdW50IGJhZGdlICovXHJcbi5jYXB0dXJlLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjY1KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG59XHJcblxyXG4vKiBSZWFkeSBvdmVybGF5ICovXHJcbi5yZWFkeS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi8qIENhcHR1cmUgYnV0dG9uICovXHJcbi5idG4tY2FwdHVyZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSwgIzc2NGJhMik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMTRweCAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cywgYm94LXNoYWRvdyAwLjE1cztcclxuXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEwMiwxMjYsMjM0LDAuNSk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return FaceRegisterComponent;
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
//# sourceMappingURL=8519.js.map