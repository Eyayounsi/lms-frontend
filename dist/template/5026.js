"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5026],{

/***/ 15026:
/*!*********************************************************************!*\
  !*** ./src/app/features/admin/admin-users/admin-users.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUsersComponent: () => (/* binding */ AdminUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_admin_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/admin-api.service */ 15878);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);








function AdminUsersComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "small", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 66)(8, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "small", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 66)(14, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "small", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.totalUsersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.activeUsersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.blockedUsersCount);
  }
}
function AdminUsersComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "div", 73)(4, "div", 74)(5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 71)(16, "div", 82)(17, "div", 73)(18, "div", 74)(19, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Comptes actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 71)(30, "div", 86)(31, "div", 73)(32, "div", 74)(33, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Comptes bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 71)(44, "div", 92)(45, "div", 73)(46, "div", 74)(47, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Instruct.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Instructeurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.totalUsersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.activeUsersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r0.totalUsersCount ? ctx_r0.activeUsersCount / ctx_r0.totalUsersCount * 100 : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.blockedUsersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r0.totalUsersCount ? ctx_r0.blockedUsersCount / ctx_r0.totalUsersCount * 100 : 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.instructorsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r0.totalUsersCount ? ctx_r0.instructorsCount / ctx_r0.totalUsersCount * 100 : 0, "%");
  }
}
function AdminUsersComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chargement des utilisateurs\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AdminUsersComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98)(1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucun utilisateur trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Modifiez vos filtres de recherche");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_div_88_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r0.searchTerm = "";
      ctx_r0.filterRole = "";
      ctx_r0.filterStatus = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Voir tous les utilisateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AdminUsersComponent_div_89_tr_20_img_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function AdminUsersComponent_div_89_tr_20_img_7_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onAvatarError(user_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(user_r5), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", user_r5.fullName);
  }
}
function AdminUsersComponent_div_89_tr_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r5.fullName.charAt(0).toUpperCase());
  }
}
function AdminUsersComponent_div_89_tr_20_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sr_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("usr-sr-inst", sr_r6 === "INSTRUCTOR")("usr-sr-stud", sr_r6 === "STUDENT")("usr-sr-recr", sr_r6 === "RECRUITER")("usr-sr-adm", sr_r6 === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ti-school", sr_r6 === "INSTRUCTOR")("ti-user-graduate", sr_r6 === "STUDENT")("ti-briefcase", sr_r6 === "RECRUITER")("ti-shield", sr_r6 === "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", sr_r6 === "INSTRUCTOR" ? "Instruct." : sr_r6 === "STUDENT" ? "\u00C9tudiant" : sr_r6 === "RECRUITER" ? "Recruteur" : "Admin", " ");
  }
}
function AdminUsersComponent_div_89_tr_20_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminUsersComponent_div_89_tr_20_div_29_span_1_Template, 3, 17, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", user_r5.secondaryRoles);
  }
}
function AdminUsersComponent_div_89_tr_20_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Actif ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_89_tr_20_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Bloqu\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_89_tr_20_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "En attente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_89_tr_20_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_div_89_tr_20_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.confirmDelete(user_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_89_tr_20_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_div_89_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 114)(1, "td", 115)(2, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "div", 117)(6, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AdminUsersComponent_div_89_tr_20_img_7_Template, 1, 2, "img", 119)(8, AdminUsersComponent_div_89_tr_20_span_8_Template, 2, 1, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "small", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td")(20, "select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminUsersComponent_div_89_tr_20_Template_select_ngModelChange_20_listener($event) {
      const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changeRole(user_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\uD83D\uDCDA \u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\uD83C\uDF93 Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\uD83D\uDCBC Recruteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\uD83D\uDEE1 Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AdminUsersComponent_div_89_tr_20_div_29_Template, 2, 1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AdminUsersComponent_div_89_tr_20_span_31_Template, 3, 0, "span", 128)(32, AdminUsersComponent_div_89_tr_20_span_32_Template, 3, 0, "span", 129)(33, AdminUsersComponent_div_89_tr_20_span_33_Template, 3, 0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td")(35, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "td", 132)(39, "div", 133)(40, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AdminUsersComponent_div_89_tr_20_Template_input_change_40_listener() {
      const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.toggleBlock(user_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, AdminUsersComponent_div_89_tr_20_button_42_Template, 2, 0, "button", 135)(43, AdminUsersComponent_div_89_tr_20_span_43_Template, 2, 0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("usr-row-admin", user_r5.role.includes("ADMIN"))("usr-row-blocked", user_r5.accountStatus === "BLOCKED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("usr-av-adm", user_r5.role.includes("ADMIN"))("usr-av-inst", user_r5.role === "INSTRUCTOR")("usr-av-stud", user_r5.role === "STUDENT")("usr-av-recr", user_r5.role === "RECRUITER");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.hasAvatar(user_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.hasAvatar(user_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r5.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", user_r5.phone || "Non renseign\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", user_r5.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("usr-rs-admin", user_r5.role.includes("ADMIN"))("usr-rs-inst", user_r5.role === "INSTRUCTOR")("usr-rs-stud", user_r5.role === "STUDENT")("usr-rs-recr", user_r5.role === "RECRUITER");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", user_r5.role)("disabled", user_r5.role.includes("ADMIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r5.secondaryRoles == null ? null : user_r5.secondaryRoles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r5.accountStatus === "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r5.accountStatus === "BLOCKED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r5.accountStatus === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatDate(user_r5.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", user_r5.accountStatus === "BLOCKED")("disabled", user_r5.role.includes("ADMIN"))("title", user_r5.role.includes("ADMIN") ? "Impossible de bloquer un admin" : user_r5.accountStatus === "BLOCKED" ? "D\u00E9bloquer" : "Bloquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !user_r5.role.includes("ADMIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", user_r5.role.includes("ADMIN"));
  }
}
function AdminUsersComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 104)(1, "table", 105)(2, "thead", 106)(3, "tr")(4, "th", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Bloquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "th", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdminUsersComponent_div_89_tr_20_Template, 44, 38, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.filteredUsers);
  }
}
function AdminUsersComponent_div_90_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.createError, " ");
  }
}
function AdminUsersComponent_div_90_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 185);
  }
}
function AdminUsersComponent_div_90_i_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 186);
  }
}
function AdminUsersComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 151)(1, "div", 152)(2, "div", 153)(3, "div", 154)(4, "div", 117)(5, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div")(8, "h6", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cr\u00E9er un compte Recruteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "small", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Les identifiants seront envoy\u00E9s par email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_div_90_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.closeCreateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AdminUsersComponent_div_90_div_14_Template, 3, 1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 162)(16, "div", 163)(17, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Nom complet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_div_90_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.fullName, $event) || (ctx_r0.createForm.fullName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 163)(23, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_div_90_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.email, $event) || (ctx_r0.createForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 163)(29, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "T\u00E9l\u00E9phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "(optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_div_90_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.phone, $event) || (ctx_r0.createForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 163)(35, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Soci\u00E9t\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "(optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_div_90_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.companyName, $event) || (ctx_r0.createForm.companyName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 171)(41, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "(optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 172)(46, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_div_90_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.createForm.password, $event) || (ctx_r0.createForm.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_div_90_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.showCreatePassword = !ctx_r0.showCreatePassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 171)(50, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Si le mot de passe est vide, un mot de passe temporaire sera g\u00E9n\u00E9r\u00E9. Le recruteur devra le changer \u00E0 la premi\u00E8re connexion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 178)(55, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_div_90_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.closeCreateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_div_90_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.createRecruiter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, AdminUsersComponent_div_90_span_58_Template, 1, 0, "span", 181)(59, AdminUsersComponent_div_90_i_59_Template, 1, 0, "i", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.createError);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0.showCreatePassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.createForm.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.showCreatePassword ? "ti ti-eye-off" : "ti ti-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.creating ? "Cr\u00E9ation..." : "Cr\u00E9er le compte", " ");
  }
}
function AdminUsersComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 187);
  }
}
let AdminUsersComponent = /*#__PURE__*/(() => {
  class AdminUsersComponent {
    adminApi;
    authService;
    users = [];
    filteredUsers = [];
    searchTerm = '';
    filterRole = '';
    filterStatus = '';
    loading = false;
    avatarLoadErrors = new Set();
    // For create recruiter modal
    showCreateModal = false;
    createForm = {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      password: ''
    };
    creating = false;
    createError = '';
    showCreatePassword = false;
    constructor(adminApi, authService) {
      this.adminApi = adminApi;
      this.authService = authService;
    }
    ngOnInit() {
      this.loadUsers();
    }
    loadUsers() {
      this.loading = true;
      this.adminApi.getAllUsers().subscribe({
        next: data => {
          this.users = data;
          this.applyFilters();
          this.loading = false;
        },
        error: err => {
          this.showToast('error', 'Impossible de charger les utilisateurs.');
          this.loading = false;
        }
      });
    }
    applyFilters() {
      this.filteredUsers = this.users.filter(u => {
        const matchSearch = !this.searchTerm || u.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
        const matchRole = !this.filterRole || u.role.includes(this.filterRole);
        const matchStatus = !this.filterStatus || u.accountStatus === this.filterStatus;
        return matchSearch && matchRole && matchStatus;
      });
    }
    onSearchChange() {
      this.applyFilters();
    }
    onFilterChange() {
      this.applyFilters();
    }
    confirmDelete(user) {
      if (user.role.includes('ADMIN')) return;
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        title: 'Supprimer cet utilisateur ?',
        html: `Compte de <strong>${user.fullName}</strong> supprimé définitivement.<br><small class="text-muted">${user.email}</small>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#64748b',
        confirmButtonText: '<i class="ti ti-trash me-1"></i>Supprimer',
        cancelButtonText: 'Annuler',
        customClass: {
          popup: 'rounded-4 shadow-lg'
        }
      }).then(r => {
        if (r.isConfirmed) this.deleteUser(user);
      });
    }
    deleteUser(user) {
      this.adminApi.deleteUser(user.id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== user.id);
          this.applyFilters();
          this.showToast('success', 'Utilisateur supprimé avec succès.');
        },
        error: err => this.showToast('error', err.error?.message || 'Impossible de supprimer cet utilisateur.')
      });
    }
    toggleBlock(user) {
      if (user.role.includes('ADMIN')) return; // sécurité frontend
      this.adminApi.toggleBlock(user.id).subscribe({
        next: updated => {
          user.accountStatus = updated.accountStatus;
          const action = user.accountStatus === 'BLOCKED' ? 'bloqué' : 'débloqué';
          this.showToast('success', `Utilisateur ${action} avec succès.`);
        },
        error: err => {
          this.showToast('error', err.error?.message || 'Impossible de modifier le statut.');
        }
      });
    }
    changeRole(user, newRole) {
      if (user.role.includes('ADMIN')) return; // sécurité frontend
      const oldRole = user.role;
      this.adminApi.changeUserRole(user.id, newRole).subscribe({
        next: updated => {
          user.role = updated.role;
          this.showToast('success', `Rôle de ${user.fullName} changé en ${this.getRoleLabel(updated.role)}.`);
        },
        error: err => {
          user.role = oldRole;
          this.showToast('error', err.error?.message || 'Impossible de changer le rôle.');
        }
      });
    }
    showToast(type, msg) {
      const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true
      });
      Toast.fire({
        icon: type,
        title: msg
      });
    }
    openCreateModal() {
      this.createForm = {
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        password: ''
      };
      this.createError = '';
      this.showCreatePassword = false;
      this.showCreateModal = true;
    }
    closeCreateModal() {
      this.showCreateModal = false;
      this.createError = '';
    }
    createRecruiter() {
      if (!this.createForm.fullName.trim() || !this.createForm.email.trim()) {
        this.createError = 'Le nom et l\'email sont obligatoires.';
        return;
      }
      this.creating = true;
      this.createError = '';
      this.adminApi.createRecruiter(this.createForm).subscribe({
        next: created => {
          this.users.push(created);
          this.applyFilters();
          this.creating = false;
          this.showCreateModal = false;
          this.showToast('success', `Recruteur "${created.fullName}" créé avec succès. Les identifiants ont été envoyés par email.`);
        },
        error: err => {
          this.creating = false;
          this.createError = err.error || err.error?.message || 'Erreur lors de la création du compte.';
        }
      });
    }
    getRoleBadgeClass(role) {
      if (role.includes('ADMIN')) return 'badge bg-danger';
      if (role.includes('INSTRUCTOR')) return 'badge bg-primary';
      if (role.includes('STUDENT')) return 'badge bg-success';
      if (role.includes('RECRUITER')) return 'badge bg-warning text-dark';
      return 'badge bg-secondary';
    }
    getRoleLabel(role) {
      if (role.includes('ADMIN')) return 'Admin';
      if (role.includes('INSTRUCTOR')) return 'Instructeur';
      if (role.includes('STUDENT')) return 'Étudiant';
      if (role.includes('RECRUITER')) return 'Recruteur';
      return role;
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
    formatDate(dateStr) {
      if (!dateStr) return '-';
      try {
        return new Date(dateStr).toLocaleDateString('fr-FR');
      } catch {
        return dateStr;
      }
    }
    get totalUsersCount() {
      return this.users.length;
    }
    get activeUsersCount() {
      return this.users.filter(u => u.accountStatus === 'ACTIVE').length;
    }
    get blockedUsersCount() {
      return this.users.filter(u => u.accountStatus === 'BLOCKED').length;
    }
    get instructorsCount() {
      return this.users.filter(u => u.role.includes('INSTRUCTOR')).length;
    }
    static ɵfac = function AdminUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_admin_api_service__WEBPACK_IMPORTED_MODULE_5__.AdminApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdminUsersComponent,
      selectors: [["app-admin-users"]],
      decls: 92,
      vars: 11,
      consts: [[1, "usr-hero", "mb-4"], [1, "usr-glow", "usr-glow-1"], [1, "usr-glow", "usr-glow-2"], [1, "usr-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "usr-av-wrap"], [1, "usr-av-ring"], [1, "usr-av-border"], [1, "usr-av-circle"], [1, "ti", "ti-users", 2, "font-size", "26px", "color", "#fff"], [1, "usr-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "usr-chip"], [1, "ti", "ti-shield-check", "me-1", 2, "font-size", "9px"], [1, "usr-live"], [1, "usr-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], ["class", "usr-glass d-none d-md-flex align-items-center", 4, "ngIf"], [1, "d-flex", "gap-2"], [1, "usr-btn-ghost", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-refresh", 2, "font-size", "14px"], [1, "usr-btn-solid", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-user-plus", 2, "font-size", "14px"], ["class", "row g-3 mb-4", 4, "ngIf"], [1, "ac-card", "p-3", "mb-3"], [1, "row", "g-3", "align-items-end"], [1, "col-lg-5", "col-md-4"], [1, "usr-filter-label"], [1, "ti", "ti-search", "me-1"], [1, "usr-search-wrap"], [1, "ti", "ti-search", "usr-search-ico"], ["type", "text", "placeholder", "Nom ou email...", 1, "form-control", "usr-filter-input", "usr-search-pad", 3, "ngModelChange", "ngModel"], [1, "col-lg-3", "col-md-3"], [1, "ti", "ti-users", "me-1"], [1, "form-select", "usr-filter-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "ADMIN"], ["value", "INSTRUCTOR"], ["value", "STUDENT"], ["value", "RECRUITER"], [1, "col-lg-2", "col-md-3"], [1, "ti", "ti-toggle-right", "me-1"], ["value", "ACTIVE"], ["value", "BLOCKED"], ["value", "PENDING"], [1, "col-lg-2", "col-md-2", "d-flex", "align-items-end"], [1, "usr-reset-btn", "w-100", 3, "click"], [1, "ti", "ti-filter-off"], [1, "ac-card", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "p-4", "pb-2"], [1, "d-flex", "align-items-center", "gap-2"], [2, "width", "36px", "height", "36px", "border-radius", "10px", "background", "rgba(3,105,161,.1)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ti", "ti-list", 2, "color", "#0369a1", "font-size", "16px"], [1, "fw-bold", 2, "color", "#0f172a"], [1, "usr-count-badge"], ["class", "text-center py-5", 4, "ngIf"], ["class", "ac-empty py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "usr-glass", "d-none", "d-md-flex", "align-items-center"], [1, "usr-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.55)", "font-size", "10px"], [1, "usr-stat-div"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "ac-kpi", "ac-kpi-blue"], [1, "ac-kpi-body"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-1"], [1, "ac-kpi-icon"], [1, "ti", "ti-users"], [1, "usr-kpi-badge", "usr-kpi-badge-blue"], [1, "ac-kpi-val"], [1, "ac-kpi-label"], [1, "ac-kpi-bar-t"], [1, "ac-kpi-bar-f", 2, "width", "100%"], [1, "ac-kpi", "ac-kpi-green"], [1, "ti", "ti-circle-check"], [1, "usr-kpi-badge", "usr-kpi-badge-green"], [1, "ac-kpi-bar-f"], [1, "ac-kpi", 2, "--usr-r", "220", "--usr-g", "38", "--usr-b", "38"], [1, "ac-kpi-icon", 2, "background", "rgba(220,38,38,.1)", "color", "#dc2626"], [1, "ti", "ti-ban"], [1, "usr-kpi-badge", "usr-kpi-badge-red"], [1, "ac-kpi-val", 2, "color", "#dc2626"], [1, "ac-kpi-bar-f", 2, "background", "#dc2626"], [1, "ac-kpi", "ac-kpi-violet"], [1, "ti", "ti-chalkboard"], [1, "usr-kpi-badge", "usr-kpi-badge-violet"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", 2, "color", "#0284c7", "width", "2.2rem", "height", "2.2rem"], [1, "text-muted", "small", "mt-3"], [1, "ac-empty", "py-5"], [1, "ac-empty-icon"], [1, "ti", "ti-users-minus"], [1, "fw-semibold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "usr-reset-btn", 3, "click"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "usr-thead"], [1, "ps-4", 2, "width", "44px"], [2, "min-width", "185px"], [2, "width", "115px"], [2, "width", "120px"], [1, "text-center", 2, "width", "80px"], [1, "text-center", 2, "width", "56px"], ["class", "usr-row", 3, "usr-row-admin", "usr-row-blocked", 4, "ngFor", "ngForOf"], [1, "usr-row"], [1, "ps-4"], [1, "usr-row-num"], [1, "d-flex", "align-items-center", "gap-3"], [1, "usr-avatar"], ["style", "width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;", 3, "src", "alt", "error", 4, "ngIf"], [4, "ngIf"], [1, "mb-0", "fw-semibold", "text-truncate", 2, "max-width", "140px", "color", "#0f172a"], [1, "text-muted", "d-flex", "align-items-center", "gap-1"], [1, "ti", "ti-phone", 2, "font-size", "11px"], [1, "text-muted", "small", "d-flex", "align-items-center", "gap-1"], [1, "ti", "ti-mail", 2, "font-size", "13px", "opacity", ".4"], [1, "form-select", "form-select-sm", "usr-role-select", 3, "ngModelChange", "ngModel", "disabled"], ["class", "d-flex flex-wrap gap-1 mt-1", 4, "ngIf"], ["class", "usr-status usr-status-active", 4, "ngIf"], ["class", "usr-status usr-status-blocked", 4, "ngIf"], ["class", "usr-status usr-status-pending", 4, "ngIf"], [1, "ti", "ti-calendar", 2, "font-size", "12px", "opacity", ".4"], [1, "text-center"], [1, "form-check", "form-switch", "d-flex", "justify-content-center", "mb-0"], ["type", "checkbox", "role", "switch", 1, "form-check-input", "usr-switch", 3, "change", "checked", "disabled", "title"], ["class", "usr-btn-del", "title", "Supprimer", 3, "click", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "inherit", "display", "block", 3, "error", "src", "alt"], [1, "d-flex", "flex-wrap", "gap-1", "mt-1"], ["class", "usr-sr-pill", 3, "usr-sr-inst", "usr-sr-stud", "usr-sr-recr", "usr-sr-adm", 4, "ngFor", "ngForOf"], [1, "usr-sr-pill"], [1, "ti"], [1, "usr-status", "usr-status-active"], [1, "usr-dot", 2, "background", "#16a34a"], [1, "usr-status", "usr-status-blocked"], [1, "usr-dot", 2, "background", "#dc2626"], [1, "usr-status", "usr-status-pending"], [1, "usr-dot", 2, "background", "#d97706"], ["title", "Supprimer", 1, "usr-btn-del", 3, "click"], [1, "ti", "ti-trash"], [1, "text-muted", "small"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "ac-modal-glass", 2, "overflow", "hidden"], [1, "d-flex", "align-items-center", "justify-content-between", "px-4", "py-3", 2, "background", "linear-gradient(135deg,#0369a1,#0284c7)"], [2, "width", "44px", "height", "44px", "border-radius", "12px", "background", "rgba(255,255,255,.18)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ti", "ti-user-plus", 2, "font-size", "22px", "color", "#fff"], [1, "modal-title", "fw-bold", "mb-0", "text-white"], [2, "color", "rgba(255,255,255,.7)"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "px-4", "pt-3", "pb-2"], ["class", "alert alert-danger py-2 small d-flex align-items-center gap-2 mb-3 rounded-3", 4, "ngIf"], [1, "row", "g-3"], [1, "col-sm-6"], [1, "usr-field-label"], [1, "text-danger"], ["type", "text", "placeholder", "Jean Dupont", 1, "form-control", "usr-field", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "jean@email.com", 1, "form-control", "usr-field", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["type", "text", "placeholder", "+33 6 12 34 56 78", 1, "form-control", "usr-field", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Acme Corp", 1, "form-control", "usr-field", 3, "ngModelChange", "ngModel"], [1, "col-12"], [1, "input-group"], ["placeholder", "Vide = g\u00E9n\u00E9ration automatique", 1, "form-control", "usr-field", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 2, "border-radius", "0 8px 8px 0", 3, "click"], [1, "usr-info-note", "d-flex", "align-items-start", "gap-2"], [1, "ti", "ti-info-circle", "mt-1", "flex-shrink-0", 2, "font-size", "15px", "color", "#0284c7"], [1, "text-muted", "lh-sm"], [1, "modal-footer", "border-0", "pt-2", "pb-4", "px-4", "gap-2"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "rounded-pill", "px-4", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "rounded-pill", "px-4", "d-flex", "align-items-center", "gap-2", 2, "background", "linear-gradient(135deg,#0369a1,#0284c7)", "border", "none", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "ti ti-user-plus", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "d-flex", "align-items-center", "gap-2", "mb-3", "rounded-3"], [1, "ti", "ti-alert-circle", "flex-shrink-0"], [1, "spinner-border", "spinner-border-sm"], [1, "ti", "ti-user-plus"], [1, "modal-backdrop", "fade", "show"]],
      template: function AdminUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div")(14, "div", 13)(15, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Administration");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "EN LIGNE");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Gestion des Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "G\u00E9rer, bloquer et administrer les comptes membres");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 20)(26, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AdminUsersComponent_div_27_Template, 18, 3, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 23)(29, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_29_listener() {
            return ctx.loadUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_32_listener() {
            return ctx.openCreateModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Cr\u00E9er Recruteur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AdminUsersComponent_div_35_Template, 57, 10, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 29)(37, "div", 30)(38, "div", 31)(39, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Rechercher");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_44_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 37)(46, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "R\u00F4le");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.filterRole, $event) || (ctx.filterRole = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_49_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Tous les r\u00F4les");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\uD83D\uDEE1 Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\uD83C\uDF93 Instructeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\uD83D\uDCDA \u00C9tudiant");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\uD83D\uDCBC Recruteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 45)(61, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Statut");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.filterStatus, $event) || (ctx.filterStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_64_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Tous");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "\u2705 Actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\uD83D\uDEAB Bloqu\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "\u23F3 En attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 50)(74, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_74_listener() {
            ctx.searchTerm = "";
            ctx.filterRole = "";
            ctx.filterStatus = "";
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "R\u00E9initialiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 53)(78, "div", 54)(79, "div", 55)(80, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Liste des Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, AdminUsersComponent_div_87_Template, 4, 0, "div", 60)(88, AdminUsersComponent_div_88_Template, 10, 0, "div", 61)(89, AdminUsersComponent_div_89_Template, 21, 1, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, AdminUsersComponent_div_90_Template, 61, 14, "div", 63)(91, AdminUsersComponent_div_91_Template, 1, 0, "div", 64);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.filterRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.filterStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.filteredUsers.length, " utilisateur(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredUsers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredUsers.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCreateModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCreateModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.usr-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #FD3995 0%, #9b59b6 30%, #5625E8 62%, #02a8b5 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_usr-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(253, 57, 149, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n.usr-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.usr-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.usr-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.usr-glow-1[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background: radial-gradient(circle, rgba(2, 168, 181, 0.22) 0%, transparent 70%);\n  top: -130px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_usr-float 7s ease-in-out infinite;\n}\n\n.usr-glow-2[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(253, 57, 149, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_usr-float 9s ease-in-out infinite reverse;\n}\n\n.usr-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.usr-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(253, 164, 175, 0.55);\n  animation: _ngcontent-%COMP%_usr-rotate 12s linear infinite;\n}\n\n.usr-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #fda4af, #FD3995, #5625E8, #02a8b5);\n}\n\n.usr-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625E8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.usr-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(253, 164, 175, 0.35);\n  animation: _ngcontent-%COMP%_usr-pulse 2.5s ease-out infinite;\n}\n\n.usr-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.13);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 16px;\n  padding: 10px 4px;\n}\n\n.usr-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 72px;\n}\n\n.usr-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.22);\n}\n\n.usr-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.usr-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_usr-blink 1.2s ease-in-out infinite;\n}\n\n.usr-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n.usr-btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 16px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n}\n.usr-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  transform: translateY(-2px);\n}\n\n.usr-btn-solid[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.96);\n  border: none;\n  color: #0369a1;\n  font-size: 12.5px;\n  font-weight: 700;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n}\n.usr-btn-solid[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n}\n\n\n\n.usr-kpi-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 20px;\n}\n\n.usr-kpi-badge-blue[_ngcontent-%COMP%] {\n  background: rgba(3, 105, 161, 0.1);\n  color: #0369a1;\n}\n\n.usr-kpi-badge-green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n\n.usr-kpi-badge-red[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n\n.usr-kpi-badge-violet[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n\n\n\n.usr-filter-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.usr-filter-input[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  border: 1.5px solid #e2e8f0 !important;\n  font-size: 13px;\n  transition: border 0.2s, box-shadow 0.2s;\n}\n.usr-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #0284c7 !important;\n  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.11) !important;\n  outline: none;\n}\n\n.usr-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.usr-search-ico[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 15px;\n  pointer-events: none;\n  z-index: 2;\n}\n\n.usr-search-pad[_ngcontent-%COMP%] {\n  padding-left: 34px !important;\n}\n\n.usr-reset-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.usr-reset-btn[_ngcontent-%COMP%]:hover {\n  border-color: #0284c7;\n  color: #0284c7;\n  background: #f0f9ff;\n}\n\n\n\n.usr-count-badge[_ngcontent-%COMP%] {\n  background: rgba(3, 105, 161, 0.1);\n  color: #0369a1;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 14px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n}\n\n.usr-thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);\n  border-bottom: 1px solid #bae6fd;\n}\n.usr-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #0369a1;\n}\n\n.usr-row[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n  border-bottom: 1px solid #f1f5f9;\n}\n.usr-row[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff !important;\n}\n.usr-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.usr-row-admin[_ngcontent-%COMP%] {\n  background: rgba(29, 78, 216, 0.025) !important;\n}\n\n.usr-row-blocked[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n\n.usr-row-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #64748b;\n}\n\n\n\n.usr-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 15px;\n  color: #fff;\n  flex-shrink: 0;\n  transition: transform 0.2s;\n}\n.usr-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n\n.usr-av-adm[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1d4ed8, #1e3a8a);\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);\n}\n\n.usr-av-inst[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.28);\n}\n\n.usr-av-stud[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #16a34a, #059669);\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.28);\n}\n\n.usr-av-recr[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #0284c7);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.28);\n}\n\n\n\n.usr-role-select[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 138px;\n  padding: 4px 8px;\n  border-color: #e2e8f0;\n}\n.usr-role-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n}\n\n.usr-rs-admin[_ngcontent-%COMP%] {\n  border-color: rgba(29, 78, 216, 0.35) !important;\n  color: #1d4ed8;\n}\n\n.usr-rs-inst[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.35) !important;\n  color: #6366f1;\n}\n\n.usr-rs-stud[_ngcontent-%COMP%] {\n  border-color: rgba(22, 163, 74, 0.35) !important;\n  color: #15803d;\n}\n\n.usr-rs-recr[_ngcontent-%COMP%] {\n  border-color: rgba(14, 165, 233, 0.35) !important;\n  color: #0284c7;\n}\n\n\n\n.usr-sr-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px 2px 5px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.usr-sr-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.usr-sr-inst[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n\n.usr-sr-stud[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n  border: 1px solid rgba(22, 163, 74, 0.2);\n}\n\n.usr-sr-recr[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.1);\n  color: #0284c7;\n  border: 1px solid rgba(14, 165, 233, 0.2);\n}\n\n.usr-sr-adm[_ngcontent-%COMP%] {\n  background: rgba(29, 78, 216, 0.1);\n  color: #1d4ed8;\n  border: 1px solid rgba(29, 78, 216, 0.2);\n}\n\n\n\n.usr-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.usr-status-active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.1);\n  color: #15803d;\n}\n\n.usr-status-blocked[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n\n.usr-status-pending[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #92400e;\n}\n\n.usr-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_usr-blink 1.8s infinite;\n}\n\n\n\n.usr-switch[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 36px;\n  height: 20px;\n}\n.usr-switch[_ngcontent-%COMP%]:checked {\n  background-color: #dc2626;\n  border-color: #dc2626;\n}\n.usr-switch[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2);\n}\n\n\n\n.usr-btn-del[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.05);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.usr-btn-del[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n  transform: scale(1.1);\n}\n\n\n\n.usr-field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 4px;\n}\n\n.usr-field[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border-color: #E7E7E7 !important;\n  font-size: 13px;\n}\n.usr-field[_ngcontent-%COMP%]:focus {\n  border-color: #0284c7 !important;\n  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1) !important;\n}\n\n.usr-info-note[_ngcontent-%COMP%] {\n  background: rgba(3, 105, 161, 0.04);\n  border: 1px solid rgba(3, 105, 161, 0.13);\n  border-radius: 10px;\n  padding: 10px 12px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_usr-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_usr-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_usr-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_usr-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_usr-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.dark-mode[_nghost-%COMP%]   .usr-filter-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .usr-filter-input[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .usr-filter-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .usr-filter-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .usr-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .usr-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7NERBQUE7QUFLQSwyREFBQTtBQUNBO0VBQ0UsdUZBQUE7RUFDQSxtQkFBQTtFQUFxQix1QkFBQTtFQUNyQixrQkFBQTtFQUFvQixnQkFBQTtFQUNwQixnQ0FBQTtFQUNBLHdGQUFBO0FBR0Y7QUFGRTtFQUFZLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsb0JBQUE7RUFBc0IsVUFBQTtFQUMzRSx5RkFBQTtFQUNBLDBCQUFBO0FBU0o7O0FBUEE7RUFBaUIsa0JBQUE7RUFBb0IsVUFBQTtBQVlyQzs7QUFYQTtFQUFZLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLG9CQUFBO0FBaUJwRDs7QUFoQkE7RUFBYyxZQUFBO0VBQWMsYUFBQTtFQUFlLGdGQUFBO0VBQThFLFdBQUE7RUFBYSxTQUFBO0VBQVcsNENBQUE7QUF5QmpKOztBQXhCQTtFQUFjLFlBQUE7RUFBYyxhQUFBO0VBQWUsaUZBQUE7RUFBK0UsYUFBQTtFQUFlLFFBQUE7RUFBVSxvREFBQTtBQWlDbko7O0FBL0JBO0VBQWlCLGtCQUFBO0VBQW9CLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLFlBQUE7QUFzQ2xFOztBQXJDQTtFQUFpQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsOENBQUE7RUFBNEMseUNBQUE7QUE2Q2xIOztBQTVDQTtFQUFpQixrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFBb0IsdUVBQUE7QUFtRG5FOztBQWxEQTtFQUFpQixrQkFBQTtFQUFvQixVQUFBO0VBQVksa0JBQUE7RUFBb0IscURBQUE7RUFBdUQsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBNERoSzs7QUEzREE7RUFBaUIsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLGtCQUFB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QkFBQTtFQUF5QixrQkFBQTtFQUFvQix3Q0FBQTtFQUFzQyxjQUFBO0VBQWdCLG1DQUFBO0VBQWlDLGVBQUE7RUFBaUIsb0JBQUE7QUFxWnRQO0FBcloyUTtFQUFVLG1CQUFBO0VBQXFCLFdBQUE7RUFBYSxxQkFBQTtFQUF1QixxQkFBQTtBQTJaOVU7O0FBelpBLDJEQUFBO0FBQ0E7RUFBbUIsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGtCQUFBO0FBaWF4Rjs7QUFoYUE7RUFBYSw2QkFBQTtFQUErQixnQ0FBQTtFQUFrQyxlQUFBO0FBc2E5RTtBQXRhK0Y7RUFBVSxnQ0FBQTtFQUFrQyx1REFBQTtBQTBhM0k7O0FBemFBO0VBQWlCLG1DQUFBO0VBQWlDLHlDQUFBO0VBQXVDLG1CQUFBO0VBQXFCLGtCQUFBO0FBZ2I5Rzs7QUE5YUEsMkRBQUE7QUFDQTtFQUF5QjtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQW9iMUM7RUFwYnlFO0lBQUssVUFBQTtJQUFZLGVBQUE7RUF3YjFGO0FBQ0Y7QUF4YkE7RUFBeUI7SUFBVSx3QkFBQTtFQTRiakM7RUE1YjZEO0lBQU0sNEJBQUE7RUErYm5FO0FBQ0Y7QUEvYkE7RUFBeUI7SUFBSyx5QkFBQTtFQW1jNUI7QUFDRjtBQW5jQTtFQUF5QjtJQUFLLG1CQUFBO0lBQXFCLFlBQUE7RUF3Y2pEO0VBeGNnRTtJQUFPLHNCQUFBO0lBQXdCLFVBQUE7RUE0Yy9GO0FBQ0Y7QUE1Y0E7RUFBeUI7SUFBVSxVQUFBO0VBZ2RqQztFQWhkK0M7SUFBTSxZQUFBO0VBbWRyRDtBQUNGO0FBaGRFO0VBQ0UsOEJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FBa2RKO0FBaGRFO0VBQW9CLGNBQUE7QUFtZHRCO0FBbGRFO0VBQWlCLGdEQUFBO0FBcWRuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQWRtaW4gVXNlcnMgw6LCgMKUIEN5YW4vU2t5IEhlcm9cbiAgIFByaW1hcnk6ICMwMjg0YzcgKFNreSBCbHVlKVxuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzci1oZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZEMzk5NSAwJSwgIzliNTliNiAzMCUsICM1NjI1RTggNjIlLCAjMDJhOGI1IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAyOHB4IDI4cHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHVzci1mYWRlLWluIC41cyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDI1Myw1NywxNDksLjMpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcbiAgJjo6YmVmb3JlIHsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsLjEyKSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7IH1cbn1cbi51c3ItaGVyby1ib2R5IHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxOyB9XG4udXNyLWdsb3cgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDUwJTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi51c3ItZ2xvdy0xIHsgd2lkdGg6IDM4MHB4OyBoZWlnaHQ6IDM4MHB4OyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIsMTY4LDE4MSwuMjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpOyB0b3A6IC0xMzBweDsgcmlnaHQ6IDIlOyBhbmltYXRpb246IHVzci1mbG9hdCA3cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxuLnVzci1nbG93LTIgeyB3aWR0aDogMjQwcHg7IGhlaWdodDogMjQwcHg7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjUzLDU3LDE0OSwuMTUpIDAlLCB0cmFuc3BhcmVudCA3MCUpOyBib3R0b206IC03MHB4OyBsZWZ0OiA1JTsgYW5pbWF0aW9uOiB1c3ItZmxvYXQgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgcmV2ZXJzZTsgfVxuXG4udXNyLWF2LXdyYXAgICB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleC1zaHJpbms6IDA7IHdpZHRoOiA2OHB4OyBoZWlnaHQ6IDY4cHg7IH1cbi51c3ItYXYtcmluZyAgIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLThweDsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IDEuNXB4IGRhc2hlZCByZ2JhKDI1MywxNjQsMTc1LC41NSk7IGFuaW1hdGlvbjogdXNyLXJvdGF0ZSAxMnMgbGluZWFyIGluZmluaXRlOyB9XG4udXNyLWF2LWJvcmRlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZkYTRhZiwgI0ZEMzk5NSwgIzU2MjVFOCwgIzAyYThiNSk7IH1cbi51c3ItYXYtY2lyY2xlIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogM3B4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YjU5YjYsICM1NjI1RTgpOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuLnVzci1hdi1wdWxzZSAgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtMTBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjUzLDE2NCwxNzUsLjM1KTsgYW5pbWF0aW9uOiB1c3ItcHVsc2UgMi41cyBlYXNlLW91dCBpbmZpbml0ZTsgfVxuXG4udXNyLWdsYXNzICAgIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTMpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMTZweCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIyKTsgYm9yZGVyLXJhZGl1czogMTZweDsgcGFkZGluZzogMTBweCA0cHg7IH1cbi51c3Itc3RhdCAgICAgeyBwYWRkaW5nOiAwIDE0cHg7IG1pbi13aWR0aDogNzJweDsgfVxuLnVzci1zdGF0LWRpdiB7IHdpZHRoOiAxcHg7IGhlaWdodDogMzJweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjIpOyB9XG4udXNyLWxpdmUgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuLnVzci1saXZlLWRvdCB7IHdpZHRoOiA3cHg7IGhlaWdodDogN3B4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICM0YWRlODA7IGFuaW1hdGlvbjogdXNyLWJsaW5rIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cbi51c3ItY2hpcCB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI4KTsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAuN3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBwYWRkaW5nOiA0cHggMTJweDsgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuLnVzci1idG4tZ2hvc3QgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNCk7IGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjgpOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxMi41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDhweCAxNnB4OyBib3JkZXItcmFkaXVzOiAyNHB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAuMjJzOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjYpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH0gfVxuLnVzci1idG4tc29saWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC45Nik7IGJvcmRlcjogbm9uZTsgY29sb3I6ICMwMzY5YTE7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiA4cHggMThweDsgYm9yZGVyLXJhZGl1czogMjRweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjIyczsgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZmY7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsMCwwLC4xNSk7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgS1BJIGJhZGdlIHBpbGxzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzci1rcGktYmFkZ2UgeyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4udXNyLWtwaS1iYWRnZS1ibHVlICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDMsMTA1LDE2MSwuMSk7ICBjb2xvcjogIzAzNjlhMTsgfVxuLnVzci1rcGktYmFkZ2UtZ3JlZW4gIHsgYmFja2dyb3VuZDogcmdiYSgyMiwxNjMsNzQsLjEpOyAgY29sb3I6ICMxNTgwM2Q7IH1cbi51c3Ita3BpLWJhZGdlLXJlZCAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjIwLDM4LDM4LC4xKTsgIGNvbG9yOiAjZGMyNjI2OyB9XG4udXNyLWtwaS1iYWRnZS12aW9sZXQgeyBiYWNrZ3JvdW5kOiByZ2JhKDEyNCw1OCwyMzcsLjEpOyBjb2xvcjogIzdjM2FlZDsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgRklMVEVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzci1maWx0ZXItbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMS41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjQ3NDhiOyBtYXJnaW4tYm90dG9tOiA0cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuNHB4OyB9XG4udXNyLWZpbHRlci1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDsgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIC4ycywgYm94LXNoYWRvdyAuMnM7XG4gICY6Zm9jdXMgeyBib3JkZXItY29sb3I6ICMwMjg0YzcgIWltcG9ydGFudDsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMiwxMzIsMTk5LC4xMSkgIWltcG9ydGFudDsgb3V0bGluZTogbm9uZTsgfVxufVxuLnVzci1zZWFyY2gtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLnVzci1zZWFyY2gtaWNvICB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTFweDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTVweDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IDI7IH1cbi51c3Itc2VhcmNoLXBhZCAgeyBwYWRkaW5nLWxlZnQ6IDM0cHggIWltcG9ydGFudDsgfVxuLnVzci1yZXNldC1idG4gICB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDsgY29sb3I6ICM2NDc0OGI7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgcGFkZGluZzogOHB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4yczsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDVweDsgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogIzAyODRjNzsgY29sb3I6ICMwMjg0Yzc7IGJhY2tncm91bmQ6ICNmMGY5ZmY7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgVEFCTEUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udXNyLWNvdW50LWJhZGdlIHsgYmFja2dyb3VuZDogcmdiYSgzLDEwNSwxNjEsLjEpOyBjb2xvcjogIzAzNjlhMTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiA1cHggMTRweDsgYm9yZGVyLXJhZGl1czogMjBweDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbi51c3ItdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjBmOWZmLCAjZTBmMmZlKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYWU2ZmQ7XG4gIHRoIHsgcGFkZGluZzogMTJweCA4cHg7IGZvbnQtc2l6ZTogMTEuNXB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjRweDsgY29sb3I6ICMwMzY5YTE7IH1cbn1cbi51c3Itcm93ICAgICAgICAgeyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXM7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5OyAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2YwZjlmZiAhaW1wb3J0YW50OyB9ICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH0gfVxuLnVzci1yb3ctYWRtaW4gICB7IGJhY2tncm91bmQ6IHJnYmEoMjksNzgsMjE2LC4wMjUpICFpbXBvcnRhbnQ7IH1cbi51c3Itcm93LWJsb2NrZWQgeyBvcGFjaXR5OiAuNjU7IH1cbi51c3Itcm93LW51bSAgICAgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNjAwOyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBjb2xvcjogIzY0NzQ4YjsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQVZBVEFSUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi51c3ItYXZhdGFyIHsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgYm9yZGVyLXJhZGl1czogMTBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICNmZmY7IGZsZXgtc2hyaW5rOiAwOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAmOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTsgfSB9XG4udXNyLWF2LWFkbSAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWQ0ZWQ4LCAjMWUzYThhKTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI5LDc4LDIxNiwuMyk7IH1cbi51c3ItYXYtaW5zdCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoOTksMTAyLDI0MSwuMjgpOyB9XG4udXNyLWF2LXN0dWQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTZhMzRhLCAjMDU5NjY5KTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIyLDE2Myw3NCwuMjgpOyB9XG4udXNyLWF2LXJlY3IgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjMDI4NGM3KTsgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE0LDE2NSwyMzMsLjI4KTsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgUk9MRSBTRUxFQ1Qgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udXNyLXJvbGUtc2VsZWN0IHsgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgbWluLXdpZHRoOiAxMzhweDsgcGFkZGluZzogNHB4IDhweDsgYm9yZGVyLWNvbG9yOiAjZTJlOGYwOyAmOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjMjU2M2ViOyBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgzNyw5OSwyMzUsLjEpOyB9IH1cbi51c3ItcnMtYWRtaW4gIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDI5LDc4LDIxNiwuMzUpICAhaW1wb3J0YW50OyBjb2xvcjogIzFkNGVkODsgfVxuLnVzci1ycy1pbnN0ICAgeyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwuMzUpICFpbXBvcnRhbnQ7IGNvbG9yOiAjNjM2NmYxOyB9XG4udXNyLXJzLXN0dWQgICB7IGJvcmRlci1jb2xvcjogcmdiYSgyMiwxNjMsNzQsLjM1KSAgIWltcG9ydGFudDsgY29sb3I6ICMxNTgwM2Q7IH1cbi51c3ItcnMtcmVjciAgIHsgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LDE2NSwyMzMsLjM1KSAhaW1wb3J0YW50OyBjb2xvcjogIzAyODRjNzsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU0VDT05EQVJZIFJPTEUgUElMTFMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udXNyLXNyLXBpbGwgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAzcHg7IHBhZGRpbmc6IDJweCA3cHggMnB4IDVweDsgYm9yZGVyLXJhZGl1czogMjBweDsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBpIHsgZm9udC1zaXplOiAxMXB4OyB9IH1cbi51c3Itc3ItaW5zdCB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwuMSk7IGNvbG9yOiAjNjM2NmYxOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsLjIpOyB9XG4udXNyLXNyLXN0dWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDIyLDE2Myw3NCwuMSk7ICBjb2xvcjogIzE1ODAzZDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMiwxNjMsNzQsLjIpOyB9XG4udXNyLXNyLXJlY3IgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsLjEpOyBjb2xvcjogIzAyODRjNzsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNCwxNjUsMjMzLC4yKTsgfVxuLnVzci1zci1hZG0gIHsgYmFja2dyb3VuZDogcmdiYSgyOSw3OCwyMTYsLjEpOyAgY29sb3I6ICMxZDRlZDg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjksNzgsMjE2LC4yKTsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU1RBVFVTIEJBREdFUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi51c3Itc3RhdHVzICAgICAgICAgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHBhZGRpbmc6IDRweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi51c3Itc3RhdHVzLWFjdGl2ZSAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIyLDE2Myw3NCwuMSk7ICBjb2xvcjogIzE1ODAzZDsgfVxuLnVzci1zdGF0dXMtYmxvY2tlZCB7IGJhY2tncm91bmQ6IHJnYmEoMjIwLDM4LDM4LC4xKTsgIGNvbG9yOiAjZGMyNjI2OyB9XG4udXNyLXN0YXR1cy1wZW5kaW5nIHsgYmFja2dyb3VuZDogcmdiYSgyMTcsMTE5LDYsLjEpOyAgY29sb3I6ICM5MjQwMGU7IH1cbi51c3ItZG90IHsgd2lkdGg6IDdweDsgaGVpZ2h0OiA3cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYW5pbWF0aW9uOiB1c3ItYmxpbmsgMS44cyBpbmZpbml0ZTsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU1dJVENIIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzci1zd2l0Y2ggeyBjdXJzb3I6IHBvaW50ZXI7IHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDIwcHg7ICY6Y2hlY2tlZCB7IGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7IGJvcmRlci1jb2xvcjogI2RjMjYyNjsgfSAmOmZvY3VzIHsgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjIwLDM4LDM4LC4yKTsgfSB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBERUxFVEUgQlROIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzci1idG4tZGVsIHsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsgcGFkZGluZzogMDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLDM4LDM4LC4yKTsgY29sb3I6ICNkYzI2MjY7IGJhY2tncm91bmQ6IHJnYmEoMjIwLDM4LDM4LC4wNSk7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4yczsgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNkYzI2MjY7IGNvbG9yOiAjZmZmOyBib3JkZXItY29sb3I6ICNkYzI2MjY7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfSB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBNT0RBTCBGT1JNIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnVzci1maWVsZC1sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDEyLjVweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMzNzQxNTE7IG1hcmdpbi1ib3R0b206IDRweDsgfVxuLnVzci1maWVsZCB7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6ICNFN0U3RTcgIWltcG9ydGFudDsgZm9udC1zaXplOiAxM3B4OyAmOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjMDI4NGM3ICFpbXBvcnRhbnQ7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIsMTMyLDE5OSwuMSkgIWltcG9ydGFudDsgfSB9XG4udXNyLWluZm8tbm90ZSB7IGJhY2tncm91bmQ6IHJnYmEoMywxMDUsMTYxLC4wNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywxMDUsMTYxLC4xMyk7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTJweDsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQU5JTUFUSU9OUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBrZXlmcmFtZXMgdXNyLWZhZGUtaW4geyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyB9IH1cbkBrZXlmcmFtZXMgdXNyLWZsb2F0ICAgeyAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7IH0gfVxuQGtleWZyYW1lcyB1c3Itcm90YXRlICB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5Aa2V5ZnJhbWVzIHVzci1wdWxzZSAgIHsgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNjsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjU1KTsgb3BhY2l0eTogMDsgfSB9XG5Aa2V5ZnJhbWVzIHVzci1ibGluayAgIHsgMCUsMTAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogLjQ7IH0gfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgREFSSyBNT0RFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuOmhvc3QtY29udGV4dCguZGFyay1tb2RlKSB7XG4gIC51c3ItZmlsdGVyLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTJiICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZTJlOGYwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVzci1maWx0ZXItbGFiZWwgeyBjb2xvcjogIzk0YTNiODsgfVxuICAudXNyLXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA0KSAhaW1wb3J0YW50OyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AdminUsersComponent;
})();

/***/ }),

/***/ 15878:
/*!**************************************************************!*\
  !*** ./src/app/features/admin/services/admin-api.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminApiService: () => (/* binding */ AdminApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let AdminApiService = /*#__PURE__*/(() => {
  class AdminApiService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getAllUsers() {
      return this.http.get(`${this.apiUrl}/admin/users`);
    }
    deleteUser(id) {
      return this.http.delete(`${this.apiUrl}/admin/users/${id}`, {
        responseType: 'text'
      });
    }
    toggleBlock(id) {
      return this.http.put(`${this.apiUrl}/admin/users/${id}/toggle-block`, {});
    }
    changeUserRole(id, role) {
      return this.http.put(`${this.apiUrl}/admin/users/${id}/change-role?role=${role}`, {});
    }
    createRecruiter(data) {
      return this.http.post(`${this.apiUrl}/admin/users/create-recruiter`, data);
    }
    static ɵfac = function AdminApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminApiService,
      factory: AdminApiService.ɵfac,
      providedIn: 'root'
    });
  }
  return AdminApiService;
})();

/***/ })

}]);
//# sourceMappingURL=5026.js.map