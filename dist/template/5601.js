"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5601],{

/***/ 85601:
/*!************************************************************************************!*\
  !*** ./src/app/features/superadmin/superadmin-users/superadmin-users.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuperadminUsersComponent: () => (/* binding */ SuperadminUsersComponent)
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_superadmin_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/superadmin-api.service */ 6816);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);









const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item.id;
function SuperadminUsersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.users.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.countActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.countBlocked());
  }
}
function SuperadminUsersComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_32_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.successMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function SuperadminUsersComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_33_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function SuperadminUsersComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Chargement des utilisateurs...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SuperadminUsersComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Aucun utilisateur trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Modifiez vos filtres de recherche");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_88_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.searchTerm = "";
      ctx_r0.filterRole = "";
      ctx_r0.filterStatus = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Voir tous les utilisateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function SuperadminUsersComponent_Conditional_89_For_21_Conditional_7_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onAvatarError(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(user_r7), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", user_r7.fullName);
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 12);
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r7.fullName.charAt(0).toUpperCase());
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Super Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SuperadminUsersComponent_Conditional_89_For_21_Conditional_22_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.changeRole(user_r7, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Recruteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Administrateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Super Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sa-rs-admin", user_r7.role === "ADMIN")("sa-rs-instructor", user_r7.role === "INSTRUCTOR")("sa-rs-student", user_r7.role === "STUDENT")("sa-rs-recruiter", user_r7.role === "RECRUITER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", user_r7.role);
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_For_2_Template_button_click_3_listener() {
      const sr_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9).$implicit;
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.removeSecondaryRole(user_r7, sr_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sr_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sa-sr-instructor", sr_r10 === "INSTRUCTOR")("sa-sr-student", sr_r10 === "STUDENT")("sa-sr-recruiter", sr_r10 === "RECRUITER")("sa-sr-admin", sr_r10 === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ti-school", sr_r10 === "INSTRUCTOR")("ti-user-graduate", sr_r10 === "STUDENT")("ti-briefcase", sr_r10 === "RECRUITER")("ti-shield", sr_r10 === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", sr_r10 === "INSTRUCTOR" ? "Instruct." : sr_r10 === "STUDENT" ? "\u00C9tudiant" : sr_r10 === "RECRUITER" ? "Recruteur" : "Admin", " ");
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Conditional_3_For_2_Template_button_click_0_listener() {
      const r_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12).$implicit;
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.addSecondaryRole(user_r7, r_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sa-ddi-instructor", r_r13 === "INSTRUCTOR")("sa-ddi-student", r_r13 === "STUDENT")("sa-ddi-recruiter", r_r13 === "RECRUITER")("sa-ddi-admin", r_r13 === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ti-school", r_r13 === "INSTRUCTOR")("ti-user-graduate", r_r13 === "STUDENT")("ti-briefcase", r_r13 === "RECRUITER")("ti-shield", r_r13 === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getRoleLabel(r_r13), " ");
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Conditional_3_For_2_Template, 3, 17, "button", 128, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r0.availableSecondaryRoles(user_r7));
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121)(1, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.toggleAddRoleDropdown(user_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](3, SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Conditional_3_Template, 3, 0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.addingSecondaryRoleFor === user_r7.id ? 3 : -1);
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_For_2_Template, 5, 17, "span", 120, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](3, SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Conditional_3_Template, 4, 1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](user_r7.secondaryRoles || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.availableSecondaryRoles(user_r7).length > 0 ? 3 : -1);
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Actif");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Bloqu\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_89_For_21_Conditional_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.confirmAndDelete(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_89_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 96)(2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td")(5, "div", 5)(6, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](7, SuperadminUsersComponent_Conditional_89_For_21_Conditional_7_Template, 1, 2, "img", 99)(8, SuperadminUsersComponent_Conditional_89_For_21_Conditional_8_Template, 1, 0, "i", 12)(9, SuperadminUsersComponent_Conditional_89_For_21_Conditional_9_Template, 2, 1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div")(11, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td")(17, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](21, SuperadminUsersComponent_Conditional_89_For_21_Conditional_21_Template, 3, 0, "span", 105)(22, SuperadminUsersComponent_Conditional_89_For_21_Conditional_22_Template, 11, 9, "select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](23, SuperadminUsersComponent_Conditional_89_For_21_Conditional_23_Template, 4, 2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](25, SuperadminUsersComponent_Conditional_89_For_21_Conditional_25_Template, 3, 0, "span", 108)(26, SuperadminUsersComponent_Conditional_89_For_21_Conditional_26_Template, 3, 0, "span", 109)(27, SuperadminUsersComponent_Conditional_89_For_21_Conditional_27_Template, 3, 0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td")(29, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "td", 112)(33, "div", 113)(34, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SuperadminUsersComponent_Conditional_89_For_21_Template_input_change_34_listener() {
      const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.confirmToggleBlock(user_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](36, SuperadminUsersComponent_Conditional_89_For_21_Conditional_36_Template, 2, 0, "button", 115)(37, SuperadminUsersComponent_Conditional_89_For_21_Conditional_37_Template, 2, 0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ɵ$index_269_r15 = ctx.$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sa-row-superadmin", user_r7.role === "SUPERADMIN")("sa-row-admin", user_r7.role === "ADMIN")("sa-row-blocked", user_r7.accountStatus === "BLOCKED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r0.currentPage - 1) * ctx_r0.pageSize + ɵ$index_269_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sa-av-superadmin", user_r7.role === "SUPERADMIN")("sa-av-admin", user_r7.role === "ADMIN")("sa-av-instructor", user_r7.role === "INSTRUCTOR")("sa-av-student", user_r7.role === "STUDENT")("sa-av-recruiter", user_r7.role === "RECRUITER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.hasAvatar(user_r7) ? 7 : user_r7.role === "SUPERADMIN" ? 8 : 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r7.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r7.phone || "Non renseign\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", user_r7.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](user_r7.role === "SUPERADMIN" ? 21 : 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](user_r7.role !== "SUPERADMIN" ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](user_r7.accountStatus === "ACTIVE" ? 25 : user_r7.accountStatus === "BLOCKED" ? 26 : 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(user_r7.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", user_r7.accountStatus === "BLOCKED")("disabled", user_r7.role === "SUPERADMIN")("title", user_r7.role === "SUPERADMIN" ? "Impossible de bloquer un Super Admin" : user_r7.accountStatus === "BLOCKED" ? "D\u00E9bloquer" : "Bloquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](user_r7.role !== "SUPERADMIN" ? 36 : 37);
  }
}
function SuperadminUsersComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "table", 88)(2, "thead")(3, "tr")(4, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Bloquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "th", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](20, SuperadminUsersComponent_Conditional_89_For_21_Template, 38, 29, "tr", 95, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r0.pagedUsers);
  }
}
function SuperadminUsersComponent_Conditional_90_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_90_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_90_Conditional_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](3, SuperadminUsersComponent_Conditional_90_Conditional_14_Conditional_3_Template, 2, 0, "li", 143);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.pageNumbers[0] > 2 ? 3 : -1);
  }
}
function SuperadminUsersComponent_Conditional_90_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_90_For_16_Template_button_click_1_listener() {
      const n_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.goToPage(n_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const n_r19 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sa-page-active", n_r19 === ctx_r0.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](n_r19);
  }
}
function SuperadminUsersComponent_Conditional_90_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SuperadminUsersComponent_Conditional_90_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, SuperadminUsersComponent_Conditional_90_Conditional_17_Conditional_0_Template, 2, 0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li")(2, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_90_Conditional_17_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.goToPage(ctx_r0.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.pageNumbers[ctx_r0.pageNumbers.length - 1] < ctx_r0.totalPages - 1 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.totalPages);
  }
}
function SuperadminUsersComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64)(1, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Affichage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " sur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " utilisateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nav", 136)(10, "ul", 137)(11, "li")(12, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_90_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, SuperadminUsersComponent_Conditional_90_Conditional_14_Template, 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](15, SuperadminUsersComponent_Conditional_90_For_16_Template, 3, 3, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](17, SuperadminUsersComponent_Conditional_90_Conditional_17_Template, 4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li")(19, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_90_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r0.pageStart, "\u2013", ctx_r0.pageEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.filteredUsers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.pageNumbers[0] > 1 ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r0.pageNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.pageNumbers[ctx_r0.pageNumbers.length - 1] < ctx_r0.totalPages ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function SuperadminUsersComponent_Conditional_91_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.createError, " ");
  }
}
function SuperadminUsersComponent_Conditional_91_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cr\u00E9ation... ");
  }
}
function SuperadminUsersComponent_Conditional_91_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cr\u00E9er le compte ");
  }
}
function SuperadminUsersComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 144)(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "div", 5)(5, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "h6", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Cr\u00E9er un compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Admin ou Recruteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_91_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.closeCreateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](14, SuperadminUsersComponent_Conditional_91_Conditional_14_Template, 3, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 154)(16, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "R\u00F4le du compte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 157)(21, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_91_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.createForm.role = "RECRUITER");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Recruteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_91_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.createForm.role = "ADMIN");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Administrateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 161)(28, "div", 162)(29, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Nom complet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Conditional_91_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.fullName, $event) || (ctx_r0.createForm.fullName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 162)(35, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Conditional_91_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.email, $event) || (ctx_r0.createForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 162)(41, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "T\u00E9l\u00E9phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "(opt.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Conditional_91_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.phone, $event) || (ctx_r0.createForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 162)(47, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Soci\u00E9t\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "(opt.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Conditional_91_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.companyName, $event) || (ctx_r0.createForm.companyName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 168)(53, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "(opt.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 169)(58, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Conditional_91_Template_input_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.password, $event) || (ctx_r0.createForm.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_91_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.showCreatePassword = !ctx_r0.showCreatePassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 168)(62, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "small", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Si le mot de passe est vide, un mot de passe temporaire sera g\u00E9n\u00E9r\u00E9 automatiquement. Les identifiants seront envoy\u00E9s par email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 175)(67, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_91_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.closeCreateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Conditional_91_Template_button_click_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.createAccount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](70, SuperadminUsersComponent_Conditional_91_Conditional_70_Template, 2, 0)(71, SuperadminUsersComponent_Conditional_91_Conditional_71_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "div", 178);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.createError ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.createForm.role === "RECRUITER")("sa-pick-recruiter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.createForm.role === "ADMIN")("sa-pick-admin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r0.showCreatePassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r0.showCreatePassword ? "ti ti-eye-off" : "ti ti-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.creating ? 70 : 71);
  }
}
let SuperadminUsersComponent = /*#__PURE__*/(() => {
  class SuperadminUsersComponent {
    superAdminApi;
    authService;
    users = [];
    filteredUsers = [];
    searchTerm = '';
    filterRole = '';
    filterStatus = '';
    loading = false;
    errorMessage = '';
    successMessage = '';
    // Pagination
    pageSize = 10;
    currentPage = 1;
    pagedUsers = [];
    get totalPages() {
      return Math.max(1, Math.ceil(this.filteredUsers.length / this.pageSize));
    }
    get pageNumbers() {
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);
      return Array.from({
        length: end - start + 1
      }, (_, i) => start + i);
    }
    get pageEnd() {
      return Math.min(this.currentPage * this.pageSize, this.filteredUsers.length);
    }
    get pageStart() {
      return (this.currentPage - 1) * this.pageSize + 1;
    }
    // For create account modal
    showCreateModal = false;
    createForm = {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      password: '',
      role: 'RECRUITER'
    };
    creating = false;
    createError = '';
    showCreatePassword = false;
    // Secondary roles UI
    addingSecondaryRoleFor = null;
    avatarLoadErrors = new Set();
    /** Initiales du super-admin connecté (depuis localStorage) */
    userHeroInitials = 'SA';
    constructor(superAdminApi, authService) {
      this.superAdminApi = superAdminApi;
      this.authService = authService;
    }
    ngOnInit() {
      const fullName = localStorage.getItem('fullName') || '';
      if (fullName) {
        this.userHeroInitials = fullName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2) || 'SA';
      }
      this.loadUsers();
    }
    loadUsers() {
      this.loading = true;
      this.errorMessage = '';
      this.superAdminApi.getAllUsers().subscribe({
        next: data => {
          this.users = data;
          this.applyFilters();
          this.loading = false;
        },
        error: () => {
          this.errorMessage = 'Impossible de charger les utilisateurs.';
          this.loading = false;
        }
      });
    }
    applyFilters() {
      this.filteredUsers = this.users.filter(u => {
        const matchSearch = !this.searchTerm || u.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchRole = !this.filterRole || u.role === this.filterRole;
        const matchStatus = !this.filterStatus || u.accountStatus === this.filterStatus;
        return matchSearch && matchRole && matchStatus;
      });
      if (this.currentPage > this.totalPages) this.currentPage = 1;
      this.updatePage();
    }
    updatePage() {
      const start = (this.currentPage - 1) * this.pageSize;
      this.pagedUsers = this.filteredUsers.slice(start, start + this.pageSize);
    }
    goToPage(n) {
      if (n >= 1 && n <= this.totalPages) {
        this.currentPage = n;
        this.updatePage();
      }
    }
    prevPage() {
      this.goToPage(this.currentPage - 1);
    }
    nextPage() {
      this.goToPage(this.currentPage + 1);
    }
    onSearchChange() {
      this.currentPage = 1;
      this.applyFilters();
    }
    onFilterChange() {
      this.currentPage = 1;
      this.applyFilters();
    }
    confirmDelete(user) {
      this.confirmAndDelete(user);
    }
    cancelDelete() {}
    confirmAndDelete(user) {
      var _this = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
          title: 'Supprimer cet utilisateur ?',
          html: `<div style="text-align:center;padding:4px 0">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:rgba(231,13,13,.1);margin-bottom:12px">
          <i class="ti ti-user-x" style="font-size:24px;color:#E70D0D"></i>
        </div>
        <p style="margin:0;font-size:13.5px;color:#374151;font-weight:600">${user.fullName}</p>
        <p style="margin:4px 0 0;font-size:12px;color:#9ca3af">${user.email}</p>
        <p style="margin:10px 0 0;font-size:13px;color:#6b7280">Cette action est <strong style="color:#E70D0D">irréversible</strong>.</p>
      </div>`,
          showCancelButton: true,
          confirmButtonText: '<i class="ti ti-trash me-1"></i> Supprimer',
          cancelButtonText: 'Annuler',
          reverseButtons: true,
          focusCancel: true,
          buttonsStyling: false,
          customClass: {
            popup: 'sa-swal-popup sa-swal-danger-popup',
            confirmButton: 'sa-swal-btn sa-swal-btn-danger',
            cancelButton: 'sa-swal-btn sa-swal-btn-cancel',
            actions: 'sa-swal-actions'
          }
        });
        if (!result.isConfirmed) return;
        const id = user.id;
        _this.superAdminApi.deleteUser(id).subscribe({
          next: () => {
            _this.users = _this.users.filter(u => u.id !== id);
            _this.applyFilters();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
              toast: true,
              position: 'top-end',
              timer: 3500,
              timerProgressBar: true,
              showConfirmButton: false,
              html: `<div style="display:flex;align-items:flex-start;gap:12px;min-width:260px"><div style="width:34px;height:34px;border-radius:999px;display:grid;place-items:center;background:linear-gradient(135deg,#03C95A,#0ea5e9);box-shadow:0 8px 18px rgba(3,201,90,.22);flex-shrink:0"><i class="ti ti-circle-check" style="font-size:19px;color:#fff"></i></div><div style="text-align:left;line-height:1.25"><div style="font-size:13.5px;font-weight:700;color:#111827">Utilisateur supprimé</div><div style="margin-top:2px;font-size:12px;color:#6b7280">L'action a été enregistrée avec succès.</div></div></div>`,
              customClass: {
                popup: 'sa-swal-toast sa-swal-toast-success'
              }
            });
          },
          error: err => {
            _this.errorMessage = err.error?.message || 'Impossible de supprimer cet utilisateur.';
          }
        });
      })();
    }
    confirmToggleBlock(user) {
      var _this2 = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (user.role === 'SUPERADMIN') return;
        const isBlocked = user.accountStatus === 'BLOCKED';
        const color = isBlocked ? '#03C95A' : '#E70D0D';
        const icon = isBlocked ? 'ti-lock-open' : 'ti-lock';
        const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
          title: isBlocked ? 'Débloquer cet utilisateur ?' : 'Bloquer cet utilisateur ?',
          html: `<div style="text-align:center;padding:4px 0">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:${isBlocked ? 'rgba(3,201,90,.1)' : 'rgba(231,13,13,.1)'};margin-bottom:12px">
          <i class="ti ${icon}" style="font-size:24px;color:${color}"></i>
        </div>
        <p style="margin:0;font-size:13.5px;color:#374151;font-weight:600">${user.fullName}</p>
        <p style="margin:8px 0 0;font-size:13px;color:#6b7280">
          ${isBlocked ? "L'accès de cet utilisateur sera <strong style='color:#03C95A'>réactivé</strong>." : "L'accès de cet utilisateur sera <strong style='color:#E70D0D'>suspendu</strong>."}
        </p>
      </div>`,
          showCancelButton: true,
          confirmButtonText: isBlocked ? '<i class="ti ti-lock-open me-1"></i> Débloquer' : '<i class="ti ti-lock me-1"></i> Bloquer',
          cancelButtonText: 'Annuler',
          reverseButtons: true,
          focusCancel: true,
          buttonsStyling: false,
          customClass: {
            popup: 'sa-swal-popup sa-swal-popup--soft',
            confirmButton: `sa-swal-btn ${isBlocked ? 'sa-swal-btn-success' : 'sa-swal-btn-danger'}`,
            cancelButton: 'sa-swal-btn sa-swal-btn-cancel',
            actions: 'sa-swal-actions'
          }
        });
        if (!result.isConfirmed) return;
        _this2.superAdminApi.toggleBlock(user.id).subscribe({
          next: updated => {
            user.accountStatus = updated.accountStatus;
            _this2.showSuccess(`Utilisateur ${user.accountStatus === 'BLOCKED' ? 'bloqué' : 'débloqué'}.`);
          },
          error: err => {
            _this2.errorMessage = err.error?.message || 'Impossible de modifier le statut.';
          }
        });
      })();
    }
    changeRole(user, newRole) {
      if (user.role === 'SUPERADMIN') return;
      const oldRole = user.role;
      this.superAdminApi.changeUserRole(user.id, newRole).subscribe({
        next: updated => {
          user.role = updated.role;
          this.showSuccess(`Rôle changé en ${this.getRoleLabel(updated.role)}.`);
        },
        error: err => {
          user.role = oldRole;
          this.errorMessage = err.error?.message || 'Impossible de changer le rôle.';
        }
      });
    }
    showSuccess(msg) {
      this.successMessage = msg;
      setTimeout(() => this.successMessage = '', 4000);
    }
    openCreateModal() {
      this.createForm = {
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        password: '',
        role: 'RECRUITER'
      };
      this.createError = '';
      this.showCreatePassword = false;
      this.showCreateModal = true;
    }
    closeCreateModal() {
      this.showCreateModal = false;
      this.createError = '';
    }
    createAccount() {
      if (!this.createForm.fullName.trim() || !this.createForm.email.trim()) {
        this.createError = 'Le nom et l\'email sont obligatoires.';
        return;
      }
      this.creating = true;
      this.createError = '';
      this.superAdminApi.createAccount(this.createForm).subscribe({
        next: created => {
          this.users.push(created);
          this.applyFilters();
          this.creating = false;
          this.showCreateModal = false;
          const roleLabel = created.role === 'ADMIN' ? 'Admin' : 'Recruteur';
          this.showSuccess(`Compte ${roleLabel} "${created.fullName}" créé. Les identifiants ont été envoyés par email.`);
        },
        error: err => {
          this.creating = false;
          this.createError = err.error || err.error?.message || 'Erreur lors de la création du compte.';
        }
      });
    }
    getRoleBadgeClass(role) {
      if (role === 'SUPERADMIN') return 'badge bg-warning text-dark';
      if (role === 'ADMIN') return 'badge bg-danger-transparent text-danger';
      if (role === 'INSTRUCTOR') return 'badge bg-primary-transparent text-primary';
      if (role === 'STUDENT') return 'badge bg-info-transparent text-info';
      if (role === 'RECRUITER') return 'badge bg-secondary-transparent text-secondary';
      return 'badge bg-light text-dark';
    }
    getRoleLabel(role) {
      const labels = {
        STUDENT: 'Étudiant',
        INSTRUCTOR: 'Instructeur',
        ADMIN: 'Admin',
        RECRUITER: 'Recruteur',
        SUPERADMIN: 'Super Admin'
      };
      return labels[role] || role;
    }
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    }
    getRoleIcon(role) {
      const icons = {
        STUDENT: 'ti ti-school',
        INSTRUCTOR: 'ti ti-chalkboard',
        ADMIN: 'ti ti-shield',
        RECRUITER: 'ti ti-briefcase',
        SUPERADMIN: 'ti ti-shield-bolt'
      };
      return icons[role] || 'ti ti-user';
    }
    countActive() {
      return this.users.filter(u => u.accountStatus === 'ACTIVE').length;
    }
    countBlocked() {
      return this.users.filter(u => u.accountStatus === 'BLOCKED').length;
    }
    getAvatarUrl(user) {
      return this.authService.resolveAvatarUrl(user?.avatarPath || '') || '';
    }
    hasAvatar(user) {
      return !!this.getAvatarUrl(user) && !this.avatarLoadErrors.has(user.id);
    }
    onAvatarError(user) {
      this.avatarLoadErrors.add(user.id);
    }
    // ─── Gestion des rôles secondaires ──────────────────────────────────────
    availableSecondaryRoles(user) {
      const all = ['STUDENT', 'INSTRUCTOR', 'RECRUITER', 'ADMIN'];
      return all.filter(r => r !== user.role && !(user.secondaryRoles || []).includes(r));
    }
    toggleAddRoleDropdown(userId) {
      this.addingSecondaryRoleFor = this.addingSecondaryRoleFor === userId ? null : userId;
    }
    addSecondaryRole(user, role) {
      this.superAdminApi.addSecondaryRole(user.id, role).subscribe({
        next: updated => {
          user.secondaryRoles = updated.secondaryRoles;
          this.addingSecondaryRoleFor = null;
          this.showSuccess(`Rôle secondaire "${this.getRoleLabel(role)}" ajouté à ${user.fullName}.`);
        },
        error: err => {
          this.errorMessage = err.error?.message || 'Impossible d\'ajouter le rôle secondaire.';
        }
      });
    }
    removeSecondaryRole(user, role) {
      this.superAdminApi.removeSecondaryRole(user.id, role).subscribe({
        next: updated => {
          user.secondaryRoles = updated.secondaryRoles;
          this.showSuccess(`Rôle secondaire "${this.getRoleLabel(role)}" retiré de ${user.fullName}.`);
        },
        error: err => {
          this.errorMessage = err.error?.message || 'Impossible de retirer le rôle secondaire.';
        }
      });
    }
    static ɵfac = function SuperadminUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SuperadminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_superadmin_api_service__WEBPACK_IMPORTED_MODULE_6__.SuperAdminApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SuperadminUsersComponent,
      selectors: [["app-superadmin-users"]],
      decls: 92,
      vars: 12,
      consts: [[1, "sa-hero", "mb-4"], [1, "sa-hero-glow", "sa-glow-1"], [1, "sa-hero-glow", "sa-glow-2"], [1, "row", "align-items-center", "position-relative", "z-1"], [1, "col-lg-7", "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center", "gap-3"], [1, "sa-hero-av-wrap"], [1, "sa-hero-av-ring1"], [1, "sa-hero-av-border"], [1, "sa-hero-av-circle"], [1, "ti", "ti-users", 2, "font-size", "26px", "color", "#a5f3fc"], [1, "sa-hero-av-crown"], [1, "ti", "ti-shield-bolt"], [1, "sa-hero-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "sa-tier-chip"], [1, "ti", "ti-shield-star", "me-1"], [1, "mb-0", "text-white", "fw-bold", "lh-sm"], [1, "mb-0", "text-white-50", "small"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-2", "flex-wrap"], ["class", "d-none d-md-flex align-items-center gap-1 sa-stats-row me-1", 4, "ngIf"], [1, "sa-hero-btn", "sa-hero-btn-ghost", 3, "click"], [1, "ti", "ti-refresh", "me-1"], [1, "sa-hero-btn", "sa-hero-btn-solid", 3, "click"], [1, "ti", "ti-user-plus", "me-1"], ["role", "alert", 1, "alert", "sa-toast", "sa-toast-success", "d-flex", "align-items-center", "gap-2", "mb-3"], ["role", "alert", 1, "alert", "sa-toast", "sa-toast-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "card", "border-0", "sa-filter-card", "mb-3"], [1, "card-body", "py-3"], [1, "row", "g-3", "align-items-end"], [1, "col-lg-5", "col-md-4"], [1, "form-label", "small", "fw-semibold", "text-muted", "mb-1"], [1, "ti", "ti-search", "me-1"], [1, "sa-search-wrap"], [1, "ti", "ti-search", "sa-search-ico"], ["type", "text", "placeholder", "Nom, email ou t\u00E9l\u00E9phone...", 1, "form-control", "form-control-sm", "sa-input", "sa-input-search", 3, "ngModelChange", "ngModel"], [1, "col-lg-3", "col-md-3"], [1, "ti", "ti-users", "me-1"], [1, "form-select", "form-select-sm", "sa-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "SUPERADMIN"], ["value", "ADMIN"], ["value", "INSTRUCTOR"], ["value", "STUDENT"], ["value", "RECRUITER"], [1, "col-lg-2", "col-md-3"], [1, "ti", "ti-toggle-right", "me-1"], ["value", "ACTIVE"], ["value", "BLOCKED"], [1, "col-lg-2", "col-md-2", "d-flex", "align-items-end"], [1, "btn", "btn-outline-warning", "btn-sm", "rounded-pill", "w-100", "d-flex", "align-items-center", "justify-content-center", "gap-1", 3, "click"], [1, "ti", "ti-filter-off"], [1, "card", "border-0", "sa-table-card"], [1, "card-header", "bg-transparent", "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "card-title", "mb-0", "d-flex", "align-items-center", "gap-2"], [1, "icon-box", "bg-warning-transparent", 2, "width", "30px", "height", "30px"], [1, "ti", "ti-list", "text-warning", 2, "font-size", "15px"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-warning-transparent", "text-warning", "fw-semibold", "px-3", "py-2", "rounded-pill"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "text-center", "py-5", "px-3"], [1, "table-responsive"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mt-4", "px-1"], [1, "d-none", "d-md-flex", "align-items-center", "gap-1", "sa-stats-row", "me-1"], [1, "sa-stat-pill"], [1, "fw-bold"], [1, "sa-stat-label"], [1, "sa-stat-pill", "sa-stat-green"], [1, "ti", "ti-circle-check", "me-1"], [1, "sa-stat-pill", "sa-stat-red"], [1, "ti", "ti-ban", "me-1"], [1, "sa-toast-icon"], [1, "ti", "ti-circle-check"], [1, "flex-grow-1", "small", "fw-medium"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "sa-toast-icon", "sa-toast-icon-danger"], [1, "ti", "ti-alert-circle"], [1, "sa-spinner-wrap", "mb-3"], ["role", "status", 1, "spinner-border", "text-warning", 2, "width", "2.5rem", "height", "2.5rem"], [1, "text-muted", "small"], [1, "sa-empty-icon", "mx-auto", "mb-3"], [1, "ti", "ti-users-minus"], [1, "fw-semibold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "btn", "btn-outline-warning", "btn-sm", "rounded-pill", 3, "click"], [1, "ti", "ti-filter-off", "me-1"], [1, "table", "align-middle", "mb-0", "sa-table"], [1, "ps-4", 2, "width", "44px"], [2, "min-width", "180px"], [2, "width", "110px"], [2, "width", "120px"], [1, "text-center", 2, "width", "80px"], [1, "text-center", 2, "width", "64px"], [3, "sa-row-superadmin", "sa-row-admin", "sa-row-blocked"], [1, "ps-4"], [1, "sa-row-num"], [1, "sa-avatar", "flex-shrink-0"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "inherit", "display", "block", 3, "src", "alt"], [1, "mb-0", "fw-semibold", "text-truncate", 2, "max-width", "140px"], [1, "text-muted", "d-flex", "align-items-center", "gap-1"], [1, "ti", "ti-phone", 2, "font-size", "11px"], [1, "text-muted", "small", "d-flex", "align-items-center", "gap-1"], [1, "ti", "ti-mail", 2, "font-size", "13px", "opacity", ".45"], [1, "badge", "sa-badge-superadmin"], [1, "form-select", "form-select-sm", "sa-role-select", 3, "sa-rs-admin", "sa-rs-instructor", "sa-rs-student", "sa-rs-recruiter", "ngModel"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-1", "mt-1"], [1, "sa-status", "sa-status-active"], [1, "sa-status", "sa-status-blocked"], [1, "sa-status", "sa-status-pending"], [1, "ti", "ti-calendar", 2, "font-size", "12px", "opacity", ".45"], [1, "text-center"], [1, "form-check", "form-switch", "d-flex", "justify-content-center", "mb-0"], ["type", "checkbox", "role", "switch", 1, "form-check-input", "sa-switch", 3, "change", "checked", "disabled", "title"], ["title", "Supprimer", 1, "sa-btn-del"], [1, "text-muted"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "inherit", "display", "block", 3, "error", "src", "alt"], [1, "ti", "ti-shield-bolt", "me-1"], [1, "form-select", "form-select-sm", "sa-role-select", 3, "ngModelChange", "ngModel"], [1, "sa-sr-pill", 3, "sa-sr-instructor", "sa-sr-student", "sa-sr-recruiter", "sa-sr-admin"], [1, "position-relative", "sa-add-wrapper"], [1, "sa-sr-pill"], [1, "ti"], ["title", "Retirer", 1, "sa-sr-remove", 3, "click"], ["title", "Ajouter un r\u00F4le", 1, "sa-sr-add", 3, "click"], [1, "ti", "ti-plus"], [1, "sa-dropdown"], [1, "sa-dd-item", 3, "sa-ddi-instructor", "sa-ddi-student", "sa-ddi-recruiter", "sa-ddi-admin"], [1, "sa-dd-item", 3, "click"], [1, "sa-dot", "bg-success"], [1, "sa-dot", "bg-danger"], [1, "sa-dot", "bg-warning"], ["title", "Supprimer", 1, "sa-btn-del", 3, "click"], [1, "ti", "ti-trash"], [1, "mb-0", "text-muted", "small"], ["aria-label", "Pagination utilisateurs"], [1, "sa-pagination", "mb-0"], ["title", "Pr\u00E9c\u00E9dent", 1, "sa-page-btn", "sa-page-nav", 3, "click", "disabled"], [1, "ti", "ti-chevron-left"], ["title", "Suivant", 1, "sa-page-btn", "sa-page-nav", 3, "click", "disabled"], [1, "ti", "ti-chevron-right"], [1, "sa-page-btn", 3, "click"], [1, "sa-page-dots"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "sa-modal"], [1, "modal-header", "border-0", "pb-0", "px-4", "pt-4"], [1, "sa-modal-ico", "sa-modal-ico-warning"], [1, "ti", "ti-user-plus"], [1, "modal-title", "fw-bold", "mb-0"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4", "pt-3"], [1, "alert", "alert-danger", "py-2", "small", "d-flex", "align-items-center", "gap-2", "mb-3", "rounded-3"], [1, "mb-3"], [1, "form-label", "small", "fw-semibold", "mb-2"], [1, "text-danger"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "flex-fill", "sa-role-pick", 3, "click"], [1, "ti", "ti-briefcase", "d-block", "mb-1", 2, "font-size", "18px"], [1, "ti", "ti-shield-check", "d-block", "mb-1", 2, "font-size", "18px"], [1, "row", "g-3"], [1, "col-sm-6"], [1, "form-label", "small", "fw-semibold", "mb-1"], ["type", "text", "placeholder", "Jean Dupont", 1, "form-control", "form-control-sm", "sa-field", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "jean@email.com", 1, "form-control", "form-control-sm", "sa-field", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+33 6 12 34 56 78", 1, "form-control", "form-control-sm", "sa-field", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Acme Corp", 1, "form-control", "form-control-sm", "sa-field", 3, "ngModelChange", "ngModel"], [1, "col-12"], [1, "input-group", "input-group-sm"], ["placeholder", "Vide = g\u00E9n\u00E9ration automatique", 1, "form-control", "sa-field", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "sa-info-note", "d-flex", "align-items-start", "gap-2"], [1, "ti", "ti-info-circle", "text-warning", "mt-1", "flex-shrink-0", 2, "font-size", "15px"], [1, "text-muted", "lh-sm"], [1, "modal-footer", "border-0", "pt-2", "pb-4", "px-4", "gap-2"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "rounded-pill", "px-4", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "rounded-pill", "px-4", "d-flex", "align-items-center", "gap-2", 3, "click", "disabled"], [1, "modal-backdrop", "fade", "show"], [1, "ti", "ti-alert-circle", "flex-shrink-0"], [1, "spinner-border", "spinner-border-sm"]],
      template: function SuperadminUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "div", 14)(16, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Super Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h3", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Gestion des Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "G\u00E9rer, bloquer et administrer les comptes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 19)(24, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, SuperadminUsersComponent_div_25_Template, 19, 3, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Template_button_click_26_listener() {
            return ctx.loadUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Template_button_click_29_listener() {
            return ctx.openCreateModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Cr\u00E9er un compte ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](32, SuperadminUsersComponent_Conditional_32_Template, 6, 1, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](33, SuperadminUsersComponent_Conditional_33_Template, 6, 1, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 28)(35, "div", 29)(36, "div", 30)(37, "div", 31)(38, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Rechercher ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SuperadminUsersComponent_Template_input_ngModelChange_43_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 37)(45, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "R\u00F4le ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterRole, $event) || (ctx.filterRole = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_48_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Tous les r\u00F4les");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Super Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Instructeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\u00C9tudiant");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Recruteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 46)(62, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Statut ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterStatus, $event) || (ctx.filterStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_65_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Tous");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Bloqu\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 50)(73, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminUsersComponent_Template_button_click_73_listener() {
            ctx.searchTerm = "";
            ctx.filterRole = "";
            ctx.filterStatus = "";
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "R\u00E9initialiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 53)(77, "div", 54)(78, "h6", 55)(79, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " Liste Compl\u00E8te des Utilisateurs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 58)(83, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](87, SuperadminUsersComponent_Conditional_87_Template, 5, 0, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](88, SuperadminUsersComponent_Conditional_88_Template, 10, 0, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](89, SuperadminUsersComponent_Conditional_89_Template, 22, 0, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](90, SuperadminUsersComponent_Conditional_90_Template, 21, 11, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](91, SuperadminUsersComponent_Conditional_91_Template, 73, 20);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.successMessage ? 32 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.errorMessage ? 33 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.filteredUsers.length, " utilisateur(s) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.loading ? 87 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.loading && ctx.filteredUsers.length === 0 ? 88 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.loading && ctx.filteredUsers.length > 0 ? 89 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.filteredUsers.length > ctx.pageSize ? 90 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.showCreateModal ? 91 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.sa-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #020c18 0%, #0a1a2e 25%, #0d3a66 50%, #5625E8 75%, #0DCAF0 100%);\n  border-radius: 20px;\n  padding: 28px 32px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(86, 37, 232, 0.3);\n  animation: _ngcontent-%COMP%_sa-fadeIn 0.4s ease;\n  \n\n}\n.sa-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px);\n  background-size: 24px 24px;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.sa-hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.sa-glow-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: radial-gradient(circle, rgba(13, 202, 240, 0.22) 0%, transparent 70%);\n  top: -80px;\n  right: 5%;\n}\n\n.sa-glow-2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 70%);\n  bottom: -60px;\n  left: 10%;\n}\n\n\n\n.sa-hero-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 72px;\n  height: 72px;\n}\n\n.sa-hero-av-ring1[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -7px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(13, 202, 240, 0.45);\n  animation: _ngcontent-%COMP%_sa-rotateRing 8s linear infinite;\n}\n\n.sa-hero-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18 0%, #0d3a66 35%, #5625E8 65%, #0DCAF0 100%);\n}\n\n.sa-hero-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18, #0d3a66);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sa-hero-av-initial[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #a5f3fc;\n  line-height: 1;\n  text-shadow: 0 3px 14px rgba(13, 202, 240, 0.8);\n  letter-spacing: 1px;\n}\n\n.sa-hero-av-crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -4px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #0DCAF0, #0284c7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2.5px solid rgba(2, 12, 24, 0.9);\n  box-shadow: 0 3px 12px rgba(13, 202, 240, 0.8);\n  z-index: 10;\n  animation: _ngcontent-%COMP%_sa-crownPop 2s ease-in-out infinite;\n}\n.sa-hero-av-crown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #fff;\n}\n\n.sa-hero-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -9px;\n  border-radius: 50%;\n  border: 1px solid rgba(13, 202, 240, 0.25);\n  animation: _ngcontent-%COMP%_sa-pulse 2.4s ease-out infinite;\n}\n\n\n\n.sa-tier-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(13, 202, 240, 0.18);\n  border: 1px solid rgba(13, 202, 240, 0.38);\n  color: #a5f3fc;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n\n\n.sa-stats-row[_ngcontent-%COMP%] {\n  gap: 6px;\n}\n\n.sa-stat-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: #fff;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.sa-stat-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.sa-stat-green[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.18);\n  border-color: rgba(3, 201, 90, 0.3);\n}\n\n.sa-stat-red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n\n.sa-stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-left: 2px;\n}\n\n\n\n.sa-hero-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 7px 16px;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n\n.sa-hero-btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1.5px solid rgba(255, 255, 255, 0.3) !important;\n  color: #fff;\n}\n.sa-hero-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.6) !important;\n  color: #fff;\n}\n\n.sa-hero-btn-solid[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625E8, #392C7D);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(86, 37, 232, 0.4);\n}\n.sa-hero-btn-solid[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #6d3aed, #4a3a9d);\n  box-shadow: 0 6px 20px rgba(86, 37, 232, 0.5);\n  transform: translateY(-1px);\n}\n\n\n\n.sa-toast[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  padding: 10px 14px;\n  animation: _ngcontent-%COMP%_sa-slideDown 0.3s ease;\n}\n\n.sa-toast-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  box-shadow: 0 2px 12px rgba(3, 201, 90, 0.12);\n}\n\n.sa-toast-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  box-shadow: 0 2px 12px rgba(231, 13, 13, 0.12);\n}\n\n.sa-toast-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(3, 201, 90, 0.12);\n}\n.sa-toast-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #03C95A;\n}\n\n.sa-toast-icon-danger[_ngcontent-%COMP%] {\n  background: rgba(231, 13, 13, 0.1);\n}\n.sa-toast-icon-danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #E70D0D;\n}\n\n\n\n.sa-filter-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  border: 1px solid rgba(124, 58, 237, 0.09) !important;\n  background: rgba(248, 250, 252, 0.8) !important;\n}\n\n.sa-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sa-search-ico[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n  z-index: 2;\n}\n\n.sa-input-search[_ngcontent-%COMP%] {\n  padding-left: 32px !important;\n}\n\n.sa-input[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border-color: #E7E7E7;\n  font-size: 13px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.sa-input[_ngcontent-%COMP%]:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);\n}\n\n\n\n.sa-table-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.06) !important;\n  transition: box-shadow 0.2s;\n}\n.sa-table-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.07) !important;\n}\n\n.sa-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f8fafb, #f4f6f9);\n}\n.sa-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6D6D6D;\n  border-bottom: 2px solid rgba(124, 58, 237, 0.12);\n  padding: 13px 10px;\n}\n.sa-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n  border-bottom: 1px solid #F4F6F9;\n}\n.sa-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sa-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 10px;\n  vertical-align: middle;\n}\n.sa-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.035) !important;\n}\n\n.sa-row-superadmin[_ngcontent-%COMP%] {\n  background: rgba(255, 149, 0, 0.065) !important;\n}\n\n.sa-row-admin[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.05) !important;\n}\n\n.sa-row-blocked[_ngcontent-%COMP%] {\n  opacity: 0.62;\n}\n\n.sa-row-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #F4F6F9;\n  color: #6D6D6D;\n}\n\n\n\n.sa-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.sa-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.sa-av-superadmin[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #FF9500, #FF6B00);\n  box-shadow: 0 4px 12px rgba(255, 149, 0, 0.4);\n}\n.sa-av-superadmin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.sa-av-admin[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #392C7D, #5625E8);\n  box-shadow: 0 4px 12px rgba(57, 44, 125, 0.3);\n}\n\n.sa-av-instructor[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);\n}\n\n.sa-av-student[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03C95A, #059669);\n  box-shadow: 0 4px 12px rgba(3, 201, 90, 0.3);\n}\n\n.sa-av-recruiter[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0DCAF0, #0284c7);\n  box-shadow: 0 4px 12px rgba(13, 202, 240, 0.3);\n}\n\n\n\n.sa-badge-superadmin[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: linear-gradient(135deg, #FF9500, #FF6B00);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  box-shadow: 0 3px 10px rgba(255, 149, 0, 0.35);\n  letter-spacing: 0.2px;\n}\n\n\n\n.sa-role-select[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 138px;\n  padding: 4px 8px;\n  border-color: #E7E7E7;\n}\n.sa-role-select[_ngcontent-%COMP%]:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);\n}\n\n.sa-rs-admin[_ngcontent-%COMP%] {\n  border-color: rgba(57, 44, 125, 0.35);\n  color: #392C7D;\n}\n\n.sa-rs-instructor[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.35);\n  color: #6366f1;\n}\n\n.sa-rs-student[_ngcontent-%COMP%] {\n  border-color: rgba(3, 201, 90, 0.35);\n  color: #03C95A;\n}\n\n.sa-rs-recruiter[_ngcontent-%COMP%] {\n  border-color: rgba(13, 202, 240, 0.35);\n  color: #0DCAF0;\n}\n\n\n\n.sa-sr-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px 2px 5px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.sa-sr-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.sa-sr-pill.sa-sr-instructor[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.sa-sr-pill.sa-sr-student[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: #03C95A;\n  border: 1px solid rgba(3, 201, 90, 0.2);\n}\n.sa-sr-pill.sa-sr-recruiter[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.1);\n  color: #0ea5e9;\n  border: 1px solid rgba(13, 202, 240, 0.2);\n}\n.sa-sr-pill.sa-sr-admin[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n  border: 1px solid rgba(57, 44, 125, 0.2);\n}\n\n.sa-sr-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0 0 0 2px;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.sa-sr-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.sa-sr-add[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 1.5px dashed #B0B0B0;\n  color: #B0B0B0;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.sa-sr-add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.sa-sr-add[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: rgba(124, 58, 237, 0.07);\n}\n\n\n\n.sa-add-wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.sa-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 400;\n  background: #fff;\n  border: 1px solid #E7E7E7;\n  border-radius: 12px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.14);\n  padding: 5px;\n  min-width: 155px;\n  animation: _ngcontent-%COMP%_sa-popIn 0.15s ease;\n}\n\n.sa-dd-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 7px 10px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: left;\n}\n.sa-dd-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.sa-dd-item.sa-ddi-instructor[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.sa-dd-item.sa-ddi-instructor[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n.sa-dd-item.sa-ddi-student[_ngcontent-%COMP%] {\n  color: #03C95A;\n}\n.sa-dd-item.sa-ddi-student[_ngcontent-%COMP%]:hover {\n  background: rgba(3, 201, 90, 0.08);\n}\n.sa-dd-item.sa-ddi-recruiter[_ngcontent-%COMP%] {\n  color: #0ea5e9;\n}\n.sa-dd-item.sa-ddi-recruiter[_ngcontent-%COMP%]:hover {\n  background: rgba(14, 165, 233, 0.08);\n}\n.sa-dd-item.sa-ddi-admin[_ngcontent-%COMP%] {\n  color: #392C7D;\n}\n.sa-dd-item.sa-ddi-admin[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.08);\n}\n\n\n\n.sa-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.sa-status-active[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: #03C95A;\n}\n\n.sa-status-blocked[_ngcontent-%COMP%] {\n  background: rgba(231, 13, 13, 0.1);\n  color: #E70D0D;\n}\n\n.sa-status-pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #FFC107;\n}\n\n.sa-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_sa-blink 1.8s infinite;\n}\n\n\n\n.sa-switch[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 36px;\n  height: 20px;\n}\n.sa-switch[_ngcontent-%COMP%]:checked {\n  background-color: #E70D0D;\n  border-color: #E70D0D;\n}\n.sa-switch[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(231, 13, 13, 0.2);\n}\n\n\n\n.sa-btn-del[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1px solid rgba(231, 13, 13, 0.2);\n  color: #E70D0D;\n  background: rgba(231, 13, 13, 0.05);\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.sa-btn-del[_ngcontent-%COMP%]:hover {\n  background: #E70D0D;\n  color: #fff;\n  border-color: #E70D0D;\n  transform: scale(1.1);\n}\n\n\n\n.sa-empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #F4F6F9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sa-empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #B0B0B0;\n}\n\n\n\n.sa-modal[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_sa-popIn 0.22s ease;\n}\n\n.sa-modal-ico[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sa-modal-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.sa-modal-ico.sa-modal-ico-danger[_ngcontent-%COMP%] {\n  background: rgba(231, 13, 13, 0.1);\n}\n.sa-modal-ico.sa-modal-ico-danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #E70D0D;\n}\n.sa-modal-ico.sa-modal-ico-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 149, 0, 0.12);\n}\n.sa-modal-ico.sa-modal-ico-warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #FF9500;\n}\n\n\n\n.sa-role-pick[_ngcontent-%COMP%] {\n  border: 2px solid #E7E7E7 !important;\n  background: #fff;\n  color: #6D6D6D;\n  font-weight: 600;\n  border-radius: 12px !important;\n  padding: 10px;\n  transition: all 0.2s;\n  text-align: center;\n}\n.sa-role-pick[_ngcontent-%COMP%]:hover {\n  border-color: #B0B0B0 !important;\n}\n.sa-role-pick.sa-pick-recruiter.active[_ngcontent-%COMP%] {\n  border-color: #0DCAF0 !important;\n  background: rgba(13, 202, 240, 0.08);\n  color: #0ea5e9;\n}\n.sa-role-pick.sa-pick-admin.active[_ngcontent-%COMP%] {\n  border-color: #392C7D !important;\n  background: rgba(57, 44, 125, 0.08);\n  color: #392C7D;\n}\n\n\n\n.sa-field[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border-color: #E7E7E7;\n  font-size: 13px;\n}\n.sa-field[_ngcontent-%COMP%]:focus {\n  border-color: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);\n}\n\n.sa-info-note[_ngcontent-%COMP%] {\n  background: rgba(255, 149, 0, 0.06);\n  border: 1px solid rgba(255, 149, 0, 0.2);\n  border-radius: 10px;\n  padding: 10px 12px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_sa-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-popIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-rotateRing {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-crownPop {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.18);\n    box-shadow: 0 5px 18px rgb(255, 149, 0);\n  }\n}\n\n\n.sa-pagination[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.sa-page-btn[_ngcontent-%COMP%] {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 8px;\n  border-radius: 10px;\n  border: 1.5px solid #E7E7E7;\n  background: #fff;\n  color: #4B5563;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.sa-page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: rgba(124, 58, 237, 0.06);\n}\n.sa-page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.sa-page-active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #7c3aed, #FF9500) !important;\n  border-color: transparent !important;\n  color: #fff !important;\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);\n}\n\n.sa-page-nav[_ngcontent-%COMP%] {\n  color: #392C7D;\n}\n\n.sa-page-dots[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 28px;\n  height: 36px;\n  font-size: 14px;\n  color: #9ca3af;\n  font-weight: 700;\n  letter-spacing: 2px;\n}\n\n.dark-mode[_nghost-%COMP%]   .sa-filter-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-filter-card[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%] {\n  background: #111119 !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%]::placeholder, .dark-mode   [_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%]::placeholder {\n  color: #4b5563 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%]:focus, .dark-mode   [_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(124, 58, 237, 0.5) !important;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .sa-search-ico[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-search-ico[_ngcontent-%COMP%] {\n  color: #4b5563 !important;\n}\n.dark-mode[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-table-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-table-card[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(124, 58, 237, 0.1), rgba(86, 37, 232, 0.06)) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  border-bottom-color: rgba(124, 58, 237, 0.18) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n  border-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .sa-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwZXJhZG1pbi9zdXBlcmFkbWluLXVzZXJzL3N1cGVyYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Z0ZBQUE7QUFLQSwrRUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxvR0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUZBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUFjLGFBQUE7RUFDZCxpRkFBQTtFQUNBLFVBQUE7RUFBWSxTQUFBO0FBSWQ7O0FBRkE7RUFDRSxZQUFBO0VBQWMsYUFBQTtFQUNkLGtGQUFBO0VBQ0EsYUFBQTtFQUFlLFNBQUE7QUFPakI7O0FBSkEsZ0NBQUE7QUFDQTtFQUFtQixrQkFBQTtFQUFvQixjQUFBO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0FBV3BFOztBQVZBO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0VBQ2pDLDZDQUFBO0VBQ0EsMkNBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQW9CLFFBQUE7RUFBVSxrQkFBQTtFQUM5Qix1RkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxrQkFBQTtFQUFvQixVQUFBO0VBQVksa0JBQUE7RUFDaEMscURBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUF1QnRDOztBQXJCQTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUFnQixjQUFBO0VBQ25ELCtDQUFBO0VBQTZDLG1CQUFBO0FBNEIv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QUFBO0VBQ3JCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUNuRCxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQix1QkFBQTtFQUMzQyxlQUFBO0VBQWlCLDBCQUFBO0FBdWJuQjtBQXRiRTtFQUF5QixxQkFBQTtFQUF1QixjQUFBO0VBQWdCLG9DQUFBO0FBMmJsRTtBQTFiRTtFQUFhLFlBQUE7RUFBYSxtQkFBQTtBQThiNUI7O0FBNWJBO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUFzQyxzQkFBQTtFQUN0Qyw4Q0FBQTtBQWdjRjs7QUE5YkE7RUFBZSxjQUFBO0FBa2NmOztBQWpjQTtFQUNFLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLHVCQUFBO0VBQzNDLGVBQUE7RUFBaUIsWUFBQTtFQUFjLGVBQUE7RUFBaUIsY0FBQTtFQUNoRCxnQkFBQTtFQUFrQixtQkFBQTtBQTBjcEI7O0FBcGNFO0VBQ0UsOEJBQUE7RUFDQSxrREFBQTtBQXVjSjtBQXJjRTtFQUNFLDhCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQXVjSjtBQXRjSTtFQUFpQix5QkFBQTtBQXljckI7QUF4Y0k7RUFDRSxnREFBQTtFQUNBLHlEQUFBO0FBMGNOO0FBeGNJO0VBQVMsbUJBQUE7RUFBcUIsY0FBQTtBQTRjbEM7QUExY0U7RUFBaUIseUJBQUE7QUE2Y25CO0FBNWNFO0VBQWMseUJBQUE7QUErY2hCO0FBNWNFO0VBQ0UsOEJBQUE7RUFDQSxrREFBQTtBQThjSjtBQTNjSTtFQUNFLCtGQUFBO0FBNmNOO0FBNWNNO0VBQ0UseUJBQUE7RUFDQSx3REFBQTtBQThjUjtBQTNjSTtFQUFLLHlCQUFBO0VBQTJCLGtEQUFBO0FBK2NwQztBQTNjRTtFQUFnQixnREFBQTtBQThjbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbiAgIFN1cGVyQWRtaW4gVXNlcnMgIMOiwoDClCAgRHJlYW1zIExNUyBEZXNpZ24gU3lzdGVtXG4gICBQcmltYXJ5OiAjMzkyQzdEICB8ICBBbWJlcjogI0ZGOTUwMCAgfCAgRm9udDogSW50ZXJcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgSEVSTyBCQU5ORVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2EtaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAyMGMxOCAwJSwgIzBhMWEyZSAyNSUsICMwZDNhNjYgNTAlLCAjNTYyNUU4IDc1JSwgIzBEQ0FGMCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjhweCAzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDg2LDM3LDIzMiwuMyk7XG4gIGFuaW1hdGlvbjogc2EtZmFkZUluIDAuNHMgZWFzZTtcbiAgLyogR3JpbGxlIGRlIHBvaW50cyBkw4PCqWNvcmF0aXZlICovXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsLjEyKSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuXG4uc2EtaGVyby1nbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnNhLWdsb3ctMSB7XG4gIHdpZHRoOiAzMDBweDsgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMywyMDIsMjQwLC4yMikgMCUsIHRyYW5zcGFyZW50IDcwJSk7XG4gIHRvcDogLTgwcHg7IHJpZ2h0OiA1JTtcbn1cbi5zYS1nbG93LTIge1xuICB3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgYm90dG9tOiAtNjBweDsgbGVmdDogMTAlO1xufVxuXG4vKiBQcmVtaXVtIEF2YXRhciBkYW5zIGxlIGhlcm8gKi9cbi5zYS1oZXJvLWF2LXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwOyB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyB9XG4uc2EtaGVyby1hdi1yaW5nMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IC03cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgcmdiYSgxMywyMDIsMjQwLC40NSk7XG4gIGFuaW1hdGlvbjogc2Etcm90YXRlUmluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG59XG4uc2EtaGVyby1hdi1ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMjBjMTggMCUsICMwZDNhNjYgMzUlLCAjNTYyNUU4IDY1JSwgIzBEQ0FGMCAxMDAlKTtcbn1cbi5zYS1oZXJvLWF2LWNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDNweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDIwYzE4LCAjMGQzYTY2KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2EtaGVyby1hdi1pbml0aWFsIHtcbiAgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogOTAwOyBjb2xvcjogI2E1ZjNmYzsgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtc2hhZG93OiAwIDNweCAxNHB4IHJnYmEoMTMsMjAyLDI0MCwuOCk7IGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2EtaGVyby1hdi1jcm93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtNXB4OyByaWdodDogLTRweDtcbiAgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMERDQUYwLCAjMDI4NGM3KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMi41cHggc29saWQgcmdiYSgyLDEyLDI0LC45KTtcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDEzLDIwMiwyNDAsLjgpO1xuICB6LWluZGV4OiAxMDtcbiAgYW5pbWF0aW9uOiBzYS1jcm93blBvcCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgaSB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICNmZmY7IH1cbn1cbi5zYS1oZXJvLWF2LXB1bHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTlweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzLDIwMiwyNDAsLjI1KTtcbiAgYW5pbWF0aW9uOiBzYS1wdWxzZSAyLjRzIGVhc2Utb3V0IGluZmluaXRlO1xufVxuXG4vKiBUaWVyIGNoaXAgKi9cbi5zYS10aWVyLWNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgxMywyMDIsMjQwLC4xOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTMsMjAyLDI0MCwuMzgpO1xuICBjb2xvcjogI2E1ZjNmYztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4vKiBTdGF0cyBwaWxscyBkYW5zIGxlIGhlcm8gKi9cbi5zYS1zdGF0cy1yb3cgeyBnYXA6IDZweDsgfVxuLnNhLXN0YXQtcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgaSB7IGZvbnQtc2l6ZTogMTNweDsgfVxufVxuLnNhLXN0YXQtZ3JlZW4geyBiYWNrZ3JvdW5kOiByZ2JhKDMsMjAxLDkwLC4xOCk7IGJvcmRlci1jb2xvcjogcmdiYSgzLDIwMSw5MCwuMyk7IH1cbi5zYS1zdGF0LXJlZCAgIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjE4KTsgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSw2OCw2OCwuMyk7IH1cbi5zYS1zdGF0LWxhYmVsIHsgZm9udC1zaXplOiAxMHB4OyBvcGFjaXR5OiAuNzsgbWFyZ2luLWxlZnQ6IDJweDsgfVxuXG4vKiBIZXJvIEJ1dHRvbnMgKi9cbi5zYS1oZXJvLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zYS1oZXJvLWJ0bi1naG9zdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIyKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KSAhaW1wb3J0YW50OyBjb2xvcjogI2ZmZjsgfVxufVxuLnNhLWhlcm8tYnRuLXNvbGlkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2MjVFOCwgIzM5MkM3RCk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoODYsMzcsMjMyLC40KTtcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZDNhZWQsICM0YTNhOWQpOyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoODYsMzcsMjMyLC41KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBUT0FTVFMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2EtdG9hc3Qge1xuICBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYW5pbWF0aW9uOiBzYS1zbGlkZURvd24gLjNzIGVhc2U7XG59XG4uc2EtdG9hc3Qtc3VjY2VzcyB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgzLDIwMSw5MCwuMTIpOyB9XG4uc2EtdG9hc3QtZGFuZ2VyICB7IGJhY2tncm91bmQ6ICNmZWYyZjI7IGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgyMzEsMTMsMTMsLjEyKTsgfVxuLnNhLXRvYXN0LWljb24ge1xuICB3aWR0aDogMjhweDsgaGVpZ2h0OiAyOHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgzLDIwMSw5MCwuMTIpO1xuICBpIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogIzAzQzk1QTsgfVxufVxuLnNhLXRvYXN0LWljb24tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsMTMsMTMsLjEpO1xuICBpIHsgY29sb3I6ICNFNzBEMEQ7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEZJTFRFUiBDQVJEIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNhLWZpbHRlci1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyNCw1OCwyMzcsLjA5KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLC44KSAhaW1wb3J0YW50O1xufVxuXG4uc2Etc2VhcmNoLXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5zYS1zZWFyY2gtaWNvIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxMHB4OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogIzljYTNhZjsgZm9udC1zaXplOiAxNXB4OyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogMjtcbn1cbi5zYS1pbnB1dC1zZWFyY2ggeyBwYWRkaW5nLWxlZnQ6IDMycHggIWltcG9ydGFudDsgfVxuXG4uc2EtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRTdFN0U3O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzO1xuICAmOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjN2MzYWVkOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMjQsNTgsMjM3LC4xKTsgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgVEFCTEUgQ0FSRCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS10YWJsZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNikgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnM7XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMCwwLDAsLjA3KSAhaW1wb3J0YW50OyB9XG59XG5cbi5zYS10YWJsZSB7XG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmOGZhZmIsICNmNGY2ZjkpO1xuICAgIHRoIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4OyBjb2xvcjogIzZENkQ2RDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDEyNCw1OCwyMzcsLjEyKTtcbiAgICAgIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgICB9XG4gIH1cbiAgdGJvZHkgdHIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjE1cztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0RjZGOTtcbiAgICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gICAgdGQgeyBwYWRkaW5nOiAxNHB4IDEwcHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxMjQsNTgsMjM3LC4wMzUpICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuXG4uc2Etcm93LXN1cGVyYWRtaW4geyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwxNDksMCwuMDY1KSAhaW1wb3J0YW50OyB9XG4uc2Etcm93LWFkbWluICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDU3LDQ0LDEyNSwuMDUpICFpbXBvcnRhbnQ7IH1cbi5zYS1yb3ctYmxvY2tlZCAgICB7IG9wYWNpdHk6IC42MjsgfVxuXG4uc2Etcm93LW51bSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGJhY2tncm91bmQ6ICNGNEY2Rjk7IGNvbG9yOiAjNkQ2RDZEO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQVZBVEFSUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1hdmF0YXIge1xuICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycywgYm94LXNoYWRvdyAuMnM7XG4gICY6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbn1cbi5zYS1hdi1zdXBlcmFkbWluIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZGOTUwMCwgI0ZGNkIwMCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyNTUsMTQ5LDAsLjQpO1xuICBpIHsgZm9udC1zaXplOiAxOHB4OyB9XG59XG4uc2EtYXYtYWRtaW4gICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzOTJDN0QsICM1NjI1RTgpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTcsNDQsMTI1LC4zKTsgfVxuLnNhLWF2LWluc3RydWN0b3IgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDk5LDEwMiwyNDEsLjMpOyB9XG4uc2EtYXYtc3R1ZGVudCAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEsICMwNTk2NjkpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMywyMDEsOTAsLjMpOyB9XG4uc2EtYXYtcmVjcnVpdGVyICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwRENBRjAsICMwMjg0YzcpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTMsMjAyLDI0MCwuMyk7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFNVUEVSQURNSU4gQkFER0Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2EtYmFkZ2Utc3VwZXJhZG1pbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkY5NTAwLCAjRkY2QjAwKTtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgyNTUsMTQ5LDAsLjM1KTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBST0xFIFNFTEVDVCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1yb2xlLXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi13aWR0aDogMTM4cHg7IHBhZGRpbmc6IDRweCA4cHg7IGJvcmRlci1jb2xvcjogI0U3RTdFNztcbiAgJjpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzdjM2FlZDsgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMTI0LDU4LDIzNywuMSk7IH1cbn1cbi5zYS1ycy1hZG1pbiAgICAgIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDU3LDQ0LDEyNSwuMzUpOyBjb2xvcjogIzM5MkM3RDsgfVxuLnNhLXJzLWluc3RydWN0b3IgeyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwuMzUpOyBjb2xvcjogIzYzNjZmMTsgfVxuLnNhLXJzLXN0dWRlbnQgICAgeyBib3JkZXItY29sb3I6IHJnYmEoMywyMDEsOTAsLjM1KTsgY29sb3I6ICMwM0M5NUE7IH1cbi5zYS1ycy1yZWNydWl0ZXIgIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDEzLDIwMiwyNDAsLjM1KTsgY29sb3I6ICMwRENBRjA7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFLDg8KUTEVTIFNFQ09OREFJUkVTIMOiwoDClCBQSUxMUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1zci1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogM3B4O1xuICBwYWRkaW5nOiAycHggN3B4IDJweCA1cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDYwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaSB7IGZvbnQtc2l6ZTogMTFweDsgfVxuICAmLnNhLXNyLWluc3RydWN0b3IgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsLjEpOyAgY29sb3I6ICM2MzY2ZjE7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwuMik7IH1cbiAgJi5zYS1zci1zdHVkZW50ICAgIHsgYmFja2dyb3VuZDogcmdiYSgzLDIwMSw5MCwuMSk7ICAgIGNvbG9yOiAjMDNDOTVBOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMsMjAxLDkwLC4yKTsgICB9XG4gICYuc2Etc3ItcmVjcnVpdGVyICB7IGJhY2tncm91bmQ6IHJnYmEoMTMsMjAyLDI0MCwuMSk7ICBjb2xvcjogIzBlYTVlOTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMywyMDIsMjQwLC4yKTsgfVxuICAmLnNhLXNyLWFkbWluICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDU3LDQ0LDEyNSwuMSk7ICAgY29sb3I6ICMzOTJDN0Q7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4yKTsgIH1cbn1cbi5zYS1zci1yZW1vdmUge1xuICBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDAgMCAwIDJweDtcbiAgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMTsgY3Vyc29yOiBwb2ludGVyOyBvcGFjaXR5OiAuNTtcbiAgJjpob3ZlciB7IG9wYWNpdHk6IDE7IH1cbn1cbi5zYS1zci1hZGQge1xuICB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4OyBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAxLjVweCBkYXNoZWQgI0IwQjBCMDtcbiAgY29sb3I6ICNCMEIwQjA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAuMnM7XG4gIGkgeyBmb250LXNpemU6IDExcHg7IH1cbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogIzdjM2FlZDsgY29sb3I6ICM3YzNhZWQ7IGJhY2tncm91bmQ6IHJnYmEoMTI0LDU4LDIzNywuMDcpOyB9XG59XG5cbi8qIERyb3Bkb3duIGFqb3V0IHLDg8K0bGUgKi9cbi5zYS1hZGQtd3JhcHBlciB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuLnNhLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IGNhbGMoMTAwJSArIDRweCk7IGxlZnQ6IDA7IHotaW5kZXg6IDQwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFNzsgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgwLDAsMCwuMTQpO1xuICBwYWRkaW5nOiA1cHg7IG1pbi13aWR0aDogMTU1cHg7XG4gIGFuaW1hdGlvbjogc2EtcG9wSW4gLjE1cyBlYXNlO1xufVxuLnNhLWRkLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxMHB4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjE1czsgdGV4dC1hbGlnbjogbGVmdDtcbiAgaSB7IGZvbnQtc2l6ZTogMTRweDsgZmxleC1zaHJpbms6IDA7IH1cbiAgJi5zYS1kZGktaW5zdHJ1Y3RvciB7IGNvbG9yOiAjNjM2NmYxOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLC4wOCk7IH0gfVxuICAmLnNhLWRkaS1zdHVkZW50ICAgIHsgY29sb3I6ICMwM0M5NUE7ICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDMsMjAxLDkwLC4wOCk7ICAgfSB9XG4gICYuc2EtZGRpLXJlY3J1aXRlciAgeyBjb2xvcjogIzBlYTVlOTsgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTQsMTY1LDIzMywuMDgpOyB9IH1cbiAgJi5zYS1kZGktYWRtaW4gICAgICB7IGNvbG9yOiAjMzkyQzdEOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg1Nyw0NCwxMjUsLjA4KTsgIH0gfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU1RBVFVUUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2Etc3RhdHVzLWFjdGl2ZSAgeyBiYWNrZ3JvdW5kOiByZ2JhKDMsMjAxLDkwLC4xKTsgIGNvbG9yOiAjMDNDOTVBOyB9XG4uc2Etc3RhdHVzLWJsb2NrZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwxMywxMywuMSk7IGNvbG9yOiAjRTcwRDBEOyB9XG4uc2Etc3RhdHVzLXBlbmRpbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwxOTMsNywuMSk7IGNvbG9yOiAjRkZDMTA3OyB9XG4uc2EtZG90IHsgd2lkdGg6IDdweDsgaGVpZ2h0OiA3cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYW5pbWF0aW9uOiBzYS1ibGluayAxLjhzIGluZmluaXRlOyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBTV0lUQ0ggw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2Etc3dpdGNoIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB3aWR0aDogMzZweDsgaGVpZ2h0OiAyMHB4O1xuICAmOmNoZWNrZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcwRDBEOyBib3JkZXItY29sb3I6ICNFNzBEMEQ7IH1cbiAgJjpmb2N1cyB7IGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDIzMSwxMywxMywuMik7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIERFTEVURSBCVE4gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2EtYnRuLWRlbCB7XG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzMSwxMywxMywuMik7XG4gIGNvbG9yOiAjRTcwRDBEOyBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwxMywxMywuMDUpOyB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRTcwRDBEOyBjb2xvcjogI2ZmZjsgYm9yZGVyLWNvbG9yOiAjRTcwRDBEOyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNhLWVtcHR5LWljb24ge1xuICB3aWR0aDogNjRweDsgaGVpZ2h0OiA2NHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICNGNEY2Rjk7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpIHsgZm9udC1zaXplOiAyOHB4OyBjb2xvcjogI0IwQjBCMDsgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgTU9EQUxTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNhLW1vZGFsIHsgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDMycHggODBweCByZ2JhKDAsMCwwLC4xOCk7IGFuaW1hdGlvbjogc2EtcG9wSW4gLjIycyBlYXNlOyB9XG4uc2EtbW9kYWwtaWNvIHtcbiAgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwO1xuICBpIHsgZm9udC1zaXplOiAyNHB4OyB9XG4gICYuc2EtbW9kYWwtaWNvLWRhbmdlciAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwxMywxMywuMSk7ICBpIHsgY29sb3I6ICNFNzBEMEQ7IH0gfVxuICAmLnNhLW1vZGFsLWljby13YXJuaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMTQ5LDAsLjEyKTsgaSB7IGNvbG9yOiAjRkY5NTAwOyB9IH1cbn1cblxuLyogUm9sZSBwaWNrZXIgZGFucyBtb2RhbCAqL1xuLnNhLXJvbGUtcGljayB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFN0U3RTcgIWltcG9ydGFudDsgYmFja2dyb3VuZDogI2ZmZjsgY29sb3I6ICM2RDZENkQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDsgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4yczsgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiAjQjBCMEIwICFpbXBvcnRhbnQ7IH1cbiAgJi5zYS1waWNrLXJlY3J1aXRlci5hY3RpdmUgeyBib3JkZXItY29sb3I6ICMwRENBRjAgIWltcG9ydGFudDsgYmFja2dyb3VuZDogcmdiYSgxMywyMDIsMjQwLC4wOCk7IGNvbG9yOiAjMGVhNWU5OyB9XG4gICYuc2EtcGljay1hZG1pbi5hY3RpdmUgICAgIHsgYm9yZGVyLWNvbG9yOiAjMzkyQzdEICFpbXBvcnRhbnQ7IGJhY2tncm91bmQ6IHJnYmEoNTcsNDQsMTI1LC4wOCk7IGNvbG9yOiAjMzkyQzdEOyB9XG59XG5cbi8qIElucHV0IGRhbnMgbW9kYWwgKi9cbi5zYS1maWVsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6ICNFN0U3RTc7IGZvbnQtc2l6ZTogMTNweDtcbiAgJjpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzdjM2FlZDsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTI0LDU4LDIzNywuMSk7IH1cbn1cblxuLnNhLWluZm8tbm90ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDE0OSwwLC4wNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDE0OSwwLC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogMTBweCAxMnB4O1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQU5JTUFUSU9OUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBrZXlmcmFtZXMgc2EtZmFkZUluICAgIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5Aa2V5ZnJhbWVzIHNhLXNsaWRlRG93biB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuQGtleWZyYW1lcyBzYS1wb3BJbiAgICAgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSguOSk7ICAgICAgICB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgICAgIH0gfVxuQGtleWZyYW1lcyBzYS1wdWxzZSAgICAgeyAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IC43OyB9IDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IG9wYWNpdHk6IDA7IH0gfVxuQGtleWZyYW1lcyBzYS1yb3RhdGVSaW5nIHsgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5Aa2V5ZnJhbWVzIHNhLWJsaW5rICAgICB7IDAlLDEwMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IC4zNTsgfSB9XG5Aa2V5ZnJhbWVzIHNhLWNyb3duUG9wICB7IDAlLDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xOCk7IGJveC1zaGFkb3c6IDAgNXB4IDE4cHggcmdiYSgyNTUsMTQ5LDAsMSk7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgUEFHSU5BVElPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1wYWdpbmF0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcbn1cbi5zYS1wYWdlLWJ0biB7XG4gIG1pbi13aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgYm9yZGVyOiAxLjVweCBzb2xpZCAjRTdFN0U3O1xuICBiYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogIzRCNTU2MzsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4xOHMgZWFzZTtcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJvcmRlci1jb2xvcjogIzdjM2FlZDsgY29sb3I6ICM3YzNhZWQ7IGJhY2tncm91bmQ6IHJnYmEoMTI0LDU4LDIzNywuMDYpOyB9XG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxufVxuLnNhLXBhZ2UtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgI0ZGOTUwMCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTI0LDU4LDIzNywuMyk7XG59XG4uc2EtcGFnZS1uYXYgeyBjb2xvcjogIzM5MkM3RDsgfVxuLnNhLXBhZ2UtZG90cyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAyOHB4OyBoZWlnaHQ6IDM2cHg7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM5Y2EzYWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBEQVJLIE1PREUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG46aG9zdC1jb250ZXh0KC5kYXJrLW1vZGUpIHtcbiAgLy8gQ2FkcmUgZGUgcmVjaGVyY2hlIC8gZmlsdHJlc1xuICAuc2EtZmlsdGVyLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmIgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50O1xuICB9XG4gIC5zYS1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogIzExMTExOSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2UyZThmMCAhaW1wb3J0YW50O1xuICAgICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICM0YjU1NjMgIWltcG9ydGFudDsgfVxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyNCw1OCwyMzcsLjUpICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMjQsNTgsMjM3LC4xMikgIWltcG9ydGFudDtcbiAgICB9XG4gICAgb3B0aW9uIHsgYmFja2dyb3VuZDogIzFhMWEyYjsgY29sb3I6ICNlMmU4ZjA7IH1cbiAgfVxuICAuc2Etc2VhcmNoLWljbyB7IGNvbG9yOiAjNGI1NTYzICFpbXBvcnRhbnQ7IH1cbiAgLmZvcm0tbGFiZWwgeyBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50OyB9XG5cbiAgLy8gVGFibGUgY2FyZCArIHRhYmxlXG4gIC5zYS10YWJsZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTJiICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNykgIWltcG9ydGFudDtcbiAgfVxuICAuc2EtdGFibGUge1xuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjQsNTgsMjM3LC4xKSwgcmdiYSg4NiwzNywyMzIsLjA2KSkgIWltcG9ydGFudDtcbiAgICAgIHRoIHtcbiAgICAgICAgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxMjQsNTgsMjM3LC4xOCkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGQgeyBjb2xvcjogI2UyZThmMCAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA2KSAhaW1wb3J0YW50OyB9XG4gIH1cblxuICAvLyBUYWJsZSByb3cgaG92ZXJcbiAgLnNhLXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA0KSAhaW1wb3J0YW50OyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return SuperadminUsersComponent;
})();

/***/ })

}]);
//# sourceMappingURL=5601.js.map