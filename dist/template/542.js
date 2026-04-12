"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[542],{

/***/ 35365:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/avatar-image.util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAvatarImage: () => (/* binding */ resolveAvatarImage)
/* harmony export */ });
const AVATAR_API_ROOT = 'http://localhost:8081';
function resolveAvatarImage(path, fallback = '') {
  if (!path || !String(path).trim()) {
    return fallback;
  }
  const raw = String(path).trim().replace(/\\/g, '/');
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:image')) {
    return raw;
  }
  if (raw.startsWith('assets/')) {
    return raw;
  }
  if (raw.startsWith('preset:')) {
    return `assets/img/course-img/${raw.replace('preset:', '')}`;
  }
  if (raw.startsWith('/')) {
    return `${AVATAR_API_ROOT}${raw}`;
  }
  if (raw.startsWith('api/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  if (raw.includes('/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  return `${AVATAR_API_ROOT}/api/files/${raw}`;
}

/***/ }),

/***/ 70542:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/recruiter/recruiter-certified-students/recruiter-certified-students.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterCertifiedStudentsComponent: () => (/* binding */ RecruiterCertifiedStudentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_recruiter_recruiter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/recruiter/recruiter.service */ 64280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 85422);









const _c0 = () => [1, 2, 3, 4, 5, 6];
function RecruiterCertifiedStudentsComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r1.searchQuery = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 41)(7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 45)(11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function RecruiterCertifiedStudentsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RecruiterCertifiedStudentsComponent_div_30_div_1_Template, 12, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
  }
}
function RecruiterCertifiedStudentsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_31_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.loadStudents());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "R\u00E9essayer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.error, " ");
  }
}
function RecruiterCertifiedStudentsComponent_div_32_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Essayez avec un autre terme de recherche.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_32_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Aucun \u00E9tudiant n'a encore obtenu de certificat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Aucun \u00E9tudiant certifi\u00E9 trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RecruiterCertifiedStudentsComponent_div_32_p_5_Template, 2, 0, "p", 53)(6, RecruiterCertifiedStudentsComponent_div_32_p_6_Template, 2, 0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.searchQuery);
  }
}
function RecruiterCertifiedStudentsComponent_div_33_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const student_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](student_r5.designation);
  }
}
function RecruiterCertifiedStudentsComponent_div_33_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r6 = ctx.$implicit;
    const j_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](ctx_r1.getCertStyle(j_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", cert_r6.courseName + " \u2014 " + ctx_r1.formatDate(cert_r6.issuedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cert_r6.courseName);
  }
}
function RecruiterCertifiedStudentsComponent_div_33_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const student_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +", student_r5.certificates.length - 3, " autres ");
  }
}
function RecruiterCertifiedStudentsComponent_div_33_div_1_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Contacter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_33_div_1_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 87);
  }
}
function RecruiterCertifiedStudentsComponent_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 37)(4, "div", 58)(5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 63)(10, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RecruiterCertifiedStudentsComponent_div_33_div_1_span_14_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 69)(19, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Certificats obtenus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, RecruiterCertifiedStudentsComponent_div_33_div_1_span_23_Template, 4, 4, "span", 73)(24, RecruiterCertifiedStudentsComponent_div_33_div_1_span_24_Template, 2, 1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 75)(26, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_33_div_1_Template_button_click_26_listener() {
      const student_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.viewStudent(student_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Voir profil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_33_div_1_Template_button_click_29_listener() {
      const student_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.contactStudent(student_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RecruiterCertifiedStudentsComponent_div_33_div_1_span_30_Template, 3, 0, "span", 79)(31, RecruiterCertifiedStudentsComponent_div_33_div_1_span_31_Template, 1, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const student_r5 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("animation-delay", i_r8 * 0.05 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.getAvatarUrl(student_r5.avatarPath, student_r5.fullName), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", student_r5.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](student_r5.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](student_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", student_r5.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", student_r5.certificates.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", student_r5.certificates.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", student_r5.certificates.length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.contactingId === student_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.contactingId !== student_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.contactingId === student_r5.id);
  }
}
function RecruiterCertifiedStudentsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RecruiterCertifiedStudentsComponent_div_33_div_1_Template, 32, 13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filteredStudents);
  }
}
function RecruiterCertifiedStudentsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_34_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_35_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedStudent.designation);
  }
}
function RecruiterCertifiedStudentsComponent_div_35_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 115)(1, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "LinkedIn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx_r1.selectedStudent.linkedinUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function RecruiterCertifiedStudentsComponent_div_35_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 118)(1, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u00C0 propos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedStudent.bio);
  }
}
function RecruiterCertifiedStudentsComponent_div_35_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 122)(1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 40)(4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](ctx_r1.getCertItemStyle(i_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cert_r11.courseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cert_r11.certificateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.formatDate(cert_r11.issuedAt));
  }
}
function RecruiterCertifiedStudentsComponent_div_35_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Contacter cet \u00E9tudiant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_35_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ouverture... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecruiterCertifiedStudentsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_35_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_35_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 97)(10, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "small", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RecruiterCertifiedStudentsComponent_div_35_span_14_Template, 2, 1, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, RecruiterCertifiedStudentsComponent_div_35_div_18_Template, 4, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, RecruiterCertifiedStudentsComponent_div_35_div_21_Template, 6, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div")(23, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, RecruiterCertifiedStudentsComponent_div_35_div_27_Template, 10, 5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 110)(29, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_35_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r1.contactStudent(ctx_r1.selectedStudent);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RecruiterCertifiedStudentsComponent_div_35_span_30_Template, 3, 0, "span", 79)(31, RecruiterCertifiedStudentsComponent_div_35_span_31_Template, 3, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecruiterCertifiedStudentsComponent_div_35_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.getAvatarUrl(ctx_r1.selectedStudent.avatarPath, ctx_r1.selectedStudent.fullName), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx_r1.selectedStudent.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedStudent.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedStudent.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedStudent.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedStudent.certificates.length, " certificat(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedStudent.linkedinUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedStudent.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Certificats (", ctx_r1.selectedStudent.certificates.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.selectedStudent.certificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.contactingId === ctx_r1.selectedStudent.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.contactingId !== ctx_r1.selectedStudent.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.contactingId === ctx_r1.selectedStudent.id);
  }
}
let RecruiterCertifiedStudentsComponent = /*#__PURE__*/(() => {
  class RecruiterCertifiedStudentsComponent {
    recruiterService;
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    students = [];
    filteredStudents = [];
    searchQuery = '';
    loading = true;
    error = '';
    contactingId = null;
    selectedStudent = null;
    constructor(recruiterService, router) {
      this.recruiterService = recruiterService;
      this.router = router;
    }
    ngOnInit() {
      this.loadStudents();
    }
    loadStudents() {
      this.loading = true;
      this.error = '';
      this.recruiterService.getCertifiedStudents().subscribe({
        next: data => {
          this.students = data;
          this.filteredStudents = data;
          this.loading = false;
        },
        error: () => {
          this.error = 'Impossible de charger les étudiants certifiés.';
          this.loading = false;
        }
      });
    }
    onSearch() {
      const q = this.searchQuery.toLowerCase().trim();
      if (!q) {
        this.filteredStudents = this.students;
        return;
      }
      this.filteredStudents = this.students.filter(s => (s.fullName || '').toLowerCase().includes(q) || (s.email || '').toLowerCase().includes(q) || (s.designation || '').toLowerCase().includes(q) || s.certificates.some(c => c.courseName.toLowerCase().includes(q)));
    }
    contactStudent(student) {
      this.contactingId = student.id;
      this.recruiterService.startConversation(student.id).subscribe({
        next: res => {
          this.contactingId = null;
          this.router.navigate([this.routes.recruiter_messages], {
            queryParams: {
              conversationId: res.conversationId
            }
          });
        },
        error: () => {
          this.contactingId = null;
        }
      });
    }
    viewStudent(student) {
      this.selectedStudent = student;
    }
    closeModal() {
      this.selectedStudent = null;
    }
    getAvatarUrl(avatarPath, name) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_3__.resolveAvatarImage)(avatarPath, this.generateInitialAvatar(name || 'E'));
    }
    generateInitialAvatar(name) {
      const initial = (name || 'U').charAt(0).toUpperCase();
      const colors = ['#392C7D', '#03C95A', '#0DCAF0', '#6d28d9', '#059669'];
      const bg = colors[(name || 'U').charCodeAt(0) % colors.length];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="40" y="53" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">${initial}</text></svg>`;
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }
    formatDate(dateStr) {
      if (!dateStr) return '';
      return new Date(dateStr).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    getCertBadgeClass(index) {
      const classes = ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-secondary'];
      return classes[index % classes.length];
    }
    getCertStyle(index) {
      const styles = ['background:rgba(3,201,90,.1);color:#03C95A;border:1px solid rgba(3,201,90,.2)', 'background:rgba(57,44,125,.09);color:#392C7D;border:1px solid rgba(57,44,125,.18)', 'background:rgba(245,159,11,.1);color:#d97706;border:1px solid rgba(245,159,11,.2)', 'background:rgba(13,202,240,.1);color:#0284c7;border:1px solid rgba(13,202,240,.2)', 'background:rgba(255,70,103,.08);color:#e11d48;border:1px solid rgba(255,70,103,.18)'];
      return styles[index % styles.length];
    }
    getCertItemStyle(index) {
      const colors = ['3,201,90', '57,44,125', '245,159,11', '13,202,240', '255,70,103'];
      const rgb = colors[index % colors.length];
      return `background:rgba(${rgb},.05);border:1px solid rgba(${rgb},.13)`;
    }
    static ɵfac = function RecruiterCertifiedStudentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RecruiterCertifiedStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_recruiter_recruiter_service__WEBPACK_IMPORTED_MODULE_6__.RecruiterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: RecruiterCertifiedStudentsComponent,
      selectors: [["app-recruiter-certified-students"]],
      decls: 36,
      vars: 9,
      consts: [[1, "rct-cs-hero", "mb-4"], [1, "rct-cs-glow", "rct-cs-glow-1"], [1, "rct-cs-glow", "rct-cs-glow-2"], [1, "rct-cs-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4"], [1, "rct-cs-av-wrap"], [1, "rct-cs-av-ring"], [1, "rct-cs-av-border"], [1, "rct-cs-av-circle"], [1, "ti", "ti-certificate", 2, "font-size", "26px", "color", "#fff"], [1, "rct-cs-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "rct-cs-chip"], [1, "ti", "ti-award", "me-1", 2, "font-size", "9px"], [1, "rct-cs-live"], [1, "rct-cs-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-0.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5", "mt-3", "mt-lg-0"], [1, "rct-cs-search-glass"], [1, "ti", "ti-search", "rct-cs-search-ico"], ["type", "text", "placeholder", "Rechercher par nom, cours certifi\u00E9...", 1, "rct-cs-search-input", 3, "ngModelChange", "ngModel"], ["class", "rct-cs-search-clear", 3, "click", 4, "ngIf"], ["class", "row g-3 mb-4", 4, "ngIf"], ["class", "rct-cs-alert-warn mb-4", 4, "ngIf"], ["class", "rct-cs-empty", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], ["class", "rct-cs-modal-backdrop", 3, "click", 4, "ngIf"], ["class", "rct-cs-modal", 3, "click", 4, "ngIf"], [1, "rct-cs-search-clear", 3, "click"], [1, "ti", "ti-x"], [1, "row", "g-3", "mb-4"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4"], [1, "rct-cs-card"], [1, "rct-cs-card-body"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "rct-cs-sk-av"], [1, "flex-grow-1"], [1, "rct-sk", "rct-sk-sm", "mb-2", 2, "width", "60%"], [1, "rct-sk", "rct-sk-sm", 2, "width", "40%"], [1, "rct-sk", "rct-sk-sm", "mb-2", 2, "width", "45%"], [1, "d-flex", "gap-2"], [1, "rct-sk", "rct-sk-xs", 2, "width", "80px", "height", "22px", "border-radius", "20px"], [1, "rct-cs-alert-warn", "mb-4"], [1, "ti", "ti-alert-circle", "me-2"], [1, "btn", "btn-sm", "btn-outline-warning", "ms-3", 3, "click"], [1, "rct-cs-empty"], [1, "rct-cs-empty-ico"], [1, "ti", "ti-certificate-off", 2, "font-size", "40px", "color", "#F59E0B"], [1, "fw-bold", "mb-1", 2, "color", "#1e1b4b"], ["class", "text-muted mb-0 small", 4, "ngIf"], [1, "text-muted", "mb-0", "small"], [1, "row", "g-3"], ["class", "col-md-6 col-xl-4", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "rct-cs-card-accent"], [1, "d-flex", "align-items-start", "gap-3", "mb-3"], [1, "rct-cs-av-wrap-sm", "flex-shrink-0"], [1, "rct-cs-av-img", 3, "src", "alt"], [1, "rct-cs-cert-badge"], [1, "ti", "ti-certificate", 2, "font-size", "8px"], [1, "flex-grow-1", "min-width-0"], [1, "mb-0", "fw-bold", "text-truncate", 2, "color", "#1e1b4b"], [1, "text-muted", "d-block", "text-truncate"], ["class", "rct-cs-desg-badge mt-1 d-inline-block", 4, "ngIf"], [1, "rct-cs-cert-count-badge", "flex-shrink-0"], [1, "ti", "ti-award", 2, "font-size", "12px"], [1, "mb-3"], [1, "small", "fw-semibold", "mb-2", 2, "color", "#6b7280"], [1, "ti", "ti-certificate", "me-1"], [1, "d-flex", "flex-wrap", "gap-1"], ["class", "rct-cs-cert-chip", 3, "style", "title", 4, "ngFor", "ngForOf"], ["class", "rct-cs-cert-chip rct-cs-cert-more", 4, "ngIf"], [1, "rct-cs-actions"], [1, "rct-cs-btn-view", 3, "click"], [1, "ti", "ti-eye", "me-1"], [1, "rct-cs-btn-contact", 3, "click", "disabled"], [4, "ngIf"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "rct-cs-desg-badge", "mt-1", "d-inline-block"], [1, "rct-cs-cert-chip", 3, "title"], [1, "ti", "ti-certificate", "me-1", 2, "font-size", "10px"], [1, "text-truncate", 2, "max-width", "130px"], [1, "rct-cs-cert-chip", "rct-cs-cert-more"], [1, "ti", "ti-message", "me-1"], [1, "spinner-border", "spinner-border-sm"], [1, "rct-cs-modal-backdrop", 3, "click"], [1, "rct-cs-modal", 3, "click"], [1, "rct-cs-modal-cover"], [1, "rct-cs-modal-cover-bg"], [1, "rct-cs-modal-av-ring"], [1, "rct-cs-modal-av", 3, "src", "alt"], [1, "rct-cs-modal-close", 3, "click"], [1, "rct-cs-modal-crown"], [1, "ti", "ti-award", 2, "font-size", "14px", "color", "#fff"], [1, "text-center", "px-4", "pt-5", "pb-3", "mt-2"], [1, "text-muted", "d-block", "mb-2"], ["class", "rct-cs-desg-badge me-2", 4, "ngIf"], [1, "rct-cs-cert-count-badge"], [1, "ti", "ti-award", "me-1", 2, "font-size", "12px"], ["class", "mt-2", 4, "ngIf"], [1, "rct-cs-modal-divider"], [1, "rct-cs-modal-body"], ["class", "rct-cs-modal-bio", 4, "ngIf"], [1, "fw-semibold", "small", "mb-3", 2, "color", "#1e1b4b"], [1, "ti", "ti-certificate", "me-1", 2, "color", "#F59E0B"], [1, "d-flex", "flex-column", "gap-2"], ["class", "rct-cs-cert-item", 3, "style", 4, "ngFor", "ngForOf"], [1, "rct-cs-modal-footer"], [1, "rct-cs-btn-contact-lg", 3, "click", "disabled"], [1, "rct-cs-btn-close", 3, "click"], [1, "ti", "ti-x", "me-1"], [1, "rct-cs-desg-badge", "me-2"], [1, "mt-2"], ["target", "_blank", 1, "rct-cs-li-btn", 3, "href"], [1, "ti", "ti-brand-linkedin", "me-1"], [1, "rct-cs-modal-bio"], [1, "fw-semibold", "small", "mb-1", 2, "color", "#03C95A"], [1, "ti", "ti-quote", "me-1"], [1, "small", "mb-0"], [1, "rct-cs-cert-item"], [1, "rct-cs-cert-item-ico"], [1, "ti", "ti-certificate", 2, "font-size", "18px"], [1, "fw-semibold", "small", "mb-0"], [1, "text-muted", "font-monospace"], [1, "text-muted", "flex-shrink-0"], [1, "ti", "ti-message", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function RecruiterCertifiedStudentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div")(14, "div", 13)(15, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Certifi\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\u00C9tudiants Certifi\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Talents valid\u00E9s par des certifications officielles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 20)(26, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterCertifiedStudentsComponent_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RecruiterCertifiedStudentsComponent_Template_input_ngModelChange_28_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RecruiterCertifiedStudentsComponent_button_29_Template, 2, 0, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RecruiterCertifiedStudentsComponent_div_30_Template, 2, 2, "div", 25)(31, RecruiterCertifiedStudentsComponent_div_31_Template, 5, 1, "div", 26)(32, RecruiterCertifiedStudentsComponent_div_32_Template, 7, 2, "div", 27)(33, RecruiterCertifiedStudentsComponent_div_33_Template, 2, 1, "div", 28)(34, RecruiterCertifiedStudentsComponent_div_34_Template, 1, 0, "div", 29)(35, RecruiterCertifiedStudentsComponent_div_35_Template, 35, 13, "div", 30);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.filteredStudents.length, " \u00E9tudiant(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.filteredStudents.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.filteredStudents.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedStudent);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedStudent);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n.rct-cs-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03C95A 0%, #392C7D 55%, #0DCAF0 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_rct-cs-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(245, 159, 11, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.14);\n}\n.rct-cs-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.rct-cs-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.rct-cs-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.rct-cs-glow-1[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  background: radial-gradient(circle, rgba(245, 159, 11, 0.2) 0%, transparent 70%);\n  top: -110px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_rct-cs-float 7s ease-in-out infinite;\n}\n\n.rct-cs-glow-2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: radial-gradient(circle, rgba(3, 201, 90, 0.15) 0%, transparent 70%);\n  bottom: -60px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_rct-cs-float 9s ease-in-out infinite reverse;\n}\n\n\n\n.rct-cs-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n}\n\n.rct-cs-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -7px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(255, 255, 255, 0.45);\n  animation: _ngcontent-%COMP%_rct-cs-rotate 12s linear infinite;\n}\n\n.rct-cs-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #392C7D, #0DCAF0);\n}\n\n.rct-cs-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #392C7D);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rct-cs-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(245, 159, 11, 0.35);\n  animation: _ngcontent-%COMP%_rct-cs-pulse 2.5s ease-out infinite;\n}\n\n\n\n.rct-cs-search-glass[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  border-radius: 14px;\n  padding: 10px 16px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n\n.rct-cs-search-ico[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.7);\n  flex-shrink: 0;\n}\n\n.rct-cs-search-input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  flex-grow: 1;\n  color: #fff;\n  font-size: 13.5px;\n}\n.rct-cs-search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.rct-cs-search-clear[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.rct-cs-search-clear[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #fff;\n}\n.rct-cs-search-clear[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n\n\n.rct-cs-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n.rct-cs-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.rct-cs-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_rct-cs-blink 1.2s infinite;\n}\n\n\n\n.rct-cs-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.055);\n  border-radius: 18px;\n  overflow: hidden;\n  transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;\n  animation: _ngcontent-%COMP%_rct-cs-fade-up 0.35s ease both;\n}\n.rct-cs-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 14px 36px rgba(245, 159, 11, 0.13);\n  border-color: rgba(245, 159, 11, 0.3);\n}\n\n.rct-cs-card-accent[_ngcontent-%COMP%] {\n  height: 3px;\n  background: linear-gradient(90deg, #03C95A, #392C7D, #0DCAF0);\n}\n\n.rct-cs-card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n\n\n.rct-cs-av-wrap-sm[_ngcontent-%COMP%] {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2.5px solid rgba(245, 159, 11, 0.25);\n  box-shadow: 0 4px 12px rgba(245, 159, 11, 0.15);\n  background: #e2e8f0;\n}\n\n.rct-cs-av-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.rct-cs-cert-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #F59E0B, #d97706);\n  border: 2px solid #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rct-cs-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: #fff;\n}\n\n.rct-cs-desg-badge[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 600;\n  color: #392C7D;\n  background: rgba(57, 44, 125, 0.1);\n  padding: 2px 10px;\n  border-radius: 20px;\n}\n\n.rct-cs-cert-count-badge[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #F59E0B;\n  background: rgba(245, 159, 11, 0.1);\n  border: 1px solid rgba(245, 159, 11, 0.22);\n  padding: 3px 10px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n\n\n.rct-cs-cert-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.rct-cs-cert-more[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.1);\n  color: #6b7280;\n  border: 1px dashed rgba(107, 114, 128, 0.3);\n}\n\n\n\n.rct-cs-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n  margin-top: 8px;\n}\n\n.rct-cs-btn-view[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px 12px;\n  border-radius: 10px;\n  background: rgba(57, 44, 125, 0.08);\n  color: #392C7D;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.18s;\n}\n.rct-cs-btn-view[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.15);\n}\n\n.rct-cs-btn-contact[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px 12px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  color: #fff;\n  border: none;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.rct-cs-btn-contact[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(3, 201, 90, 0.4);\n}\n.rct-cs-btn-contact[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n\n\n.rct-cs-sk-av[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_rct-cs-shimmer 1.4s infinite;\n  flex-shrink: 0;\n}\n\n.rct-sk[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_rct-cs-shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n\n.rct-sk-sm[_ngcontent-%COMP%] {\n  height: 14px;\n}\n\n.rct-sk-xs[_ngcontent-%COMP%] {\n  height: 12px;\n}\n\n\n\n.rct-cs-alert-warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.09);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  color: #92400e;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n}\n\n\n\n.rct-cs-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 24px;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.04), rgba(57, 44, 125, 0.03));\n  border: 1px dashed rgba(57, 44, 125, 0.15);\n  border-radius: 20px;\n}\n\n.rct-cs-empty-ico[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.1), rgba(57, 44, 125, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n  border: 1px solid rgba(3, 201, 90, 0.2);\n}\n\n\n\n.rct-cs-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 10, 35, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 1050;\n  animation: _ngcontent-%COMP%_rct-cs-fade-in 0.2s ease;\n}\n\n.rct-cs-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(96vw, 620px);\n  max-height: 90vh;\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  z-index: 1055;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 64px rgba(245, 159, 11, 0.18), 0 2px 8px rgba(0, 0, 0, 0.12);\n  animation: _ngcontent-%COMP%_rct-cs-modal-pop 0.28s cubic-bezier(0.22, 0.68, 0, 1.2);\n}\n\n.rct-cs-modal-cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 110px;\n  background: linear-gradient(135deg, #03C95A, #392C7D, #0DCAF0);\n}\n\n.rct-cs-modal-cover-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 20px 20px;\n}\n\n.rct-cs-modal-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -44px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 4px solid #fff;\n  overflow: hidden;\n  box-shadow: 0 6px 20px rgba(245, 159, 11, 0.28);\n  background: #e2e8f0;\n}\n\n.rct-cs-modal-av[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.rct-cs-modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rct-cs-modal-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.rct-cs-modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.rct-cs-modal-crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 16px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.rct-cs-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(57, 44, 125, 0.08);\n  margin: 12px 24px;\n}\n\n.rct-cs-modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 24px 12px;\n}\n\n.rct-cs-modal-bio[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.06);\n  border: 1px solid rgba(3, 201, 90, 0.14);\n  border-radius: 12px;\n  padding: 12px 16px;\n  margin-bottom: 16px;\n}\n\n.rct-cs-cert-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  transition: transform 0.15s;\n}\n.rct-cs-cert-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n\n.rct-cs-cert-item-ico[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(245, 159, 11, 0.12);\n  color: #F59E0B;\n  flex-shrink: 0;\n}\n\n.rct-cs-modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid rgba(57, 44, 125, 0.08);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.rct-cs-btn-contact-lg[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  padding: 10px 20px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.rct-cs-btn-contact-lg[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(3, 201, 90, 0.4);\n  transform: translateY(-2px);\n}\n.rct-cs-btn-contact-lg[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.rct-cs-btn-close[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.07);\n  color: #392C7D;\n  border: 1px solid rgba(57, 44, 125, 0.15);\n  border-radius: 12px;\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: background 0.18s;\n}\n.rct-cs-btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.13);\n}\n\n.rct-cs-li-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(10, 102, 194, 0.08);\n  color: #0a66c2;\n  border: 1px solid rgba(10, 102, 194, 0.18);\n  border-radius: 10px;\n  padding: 6px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.rct-cs-li-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(10, 102, 194, 0.15);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_rct-cs-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-16px);\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-cs-modal-pop {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n\n.dark-mode[_nghost-%COMP%]   .rct-cs-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-card[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-card[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-cs-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(245, 159, 11, 0.25) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-card-body[_ngcontent-%COMP%]   p[style*=\"6b7280\"][_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-card-body[_ngcontent-%COMP%]   p[style*=\"6b7280\"][_ngcontent-%COMP%] {\n  color: #4b5563 !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-actions[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-actions[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-modal[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-modal[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-modal-divider[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-modal-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-modal-footer[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-modal-footer[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-modal-bio[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-modal-bio[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.07) !important;\n  border-color: rgba(3, 201, 90, 0.12) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-cert-item[_ngcontent-%COMP%]:nth-child(1), .dark-mode   [_nghost-%COMP%]   .rct-cs-cert-item[_ngcontent-%COMP%]:nth-child(1) {\n  border-color: rgba(3, 201, 90, 0.12) !important;\n  background: rgba(3, 201, 90, 0.06) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-sk[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-sk[_ngcontent-%COMP%], .dark-mode[_nghost-%COMP%]   .rct-cs-sk-av[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-sk-av[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1a1a2b 25%, #222235 50%, #1a1a2b 75%) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-cs-empty[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-cs-empty[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.05), rgba(57, 44, 125, 0.04)) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL3JlY3J1aXRlci1jZXJ0aWZpZWQtc3R1ZGVudHMvcmVjcnVpdGVyLWNlcnRpZmllZC1zdHVkZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7O2dGQUFBO0FBSUEsa0ZBQUE7QUFDQTtFQUNFLDBFQUFBO0VBQ0EsbUJBQUE7RUFBcUIsdUJBQUE7RUFDckIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFDcEIsbUNBQUE7RUFDQSx5RkFBQTtBQUdGO0FBRkU7RUFDRSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLG9CQUFBO0VBQzNDLHdGQUFBO0VBQ0EsMEJBQUE7QUFPSjs7QUFKQTtFQUFvQixrQkFBQTtFQUFvQixVQUFBO0FBU3hDOztBQVJBO0VBQWUsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0Isb0JBQUE7QUFjdkQ7O0FBYkE7RUFBaUIsWUFBQTtFQUFhLGFBQUE7RUFBYyxnRkFBQTtFQUEyRSxXQUFBO0VBQVksU0FBQTtFQUFVLCtDQUFBO0FBc0I3STs7QUFyQkE7RUFBaUIsWUFBQTtFQUFhLGFBQUE7RUFBYywrRUFBQTtFQUEwRSxhQUFBO0VBQWMsUUFBQTtFQUFTLHVEQUFBO0FBOEI3STs7QUE1QkEsV0FBQTtBQUNBO0VBQWtCLGtCQUFBO0VBQW1CLGNBQUE7RUFBZSxXQUFBO0VBQVksWUFBQTtBQW1DaEU7O0FBbENBO0VBQWtCLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxrQkFBQTtFQUFtQiw4Q0FBQTtFQUEyQyw0Q0FBQTtBQTBDL0c7O0FBekNBO0VBQW9CLGtCQUFBO0VBQW1CLFFBQUE7RUFBUyxrQkFBQTtFQUFtQiw4REFBQTtBQWdEbkU7O0FBL0NBO0VBQW9CLGtCQUFBO0VBQW1CLFVBQUE7RUFBVyxrQkFBQTtFQUFtQixxREFBQTtFQUFvRCxhQUFBO0VBQWMsbUJBQUE7RUFBb0IsdUJBQUE7QUF5RDNKOztBQXhE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SUFBVSw0Q0FBQTtFQW1qQjNDO0VBbmpCcUY7SUFBRyxVQUFBO0lBQVUseUNBQUE7RUF1akJsRztBQUNGO0FBdGpCQSxtRkFBQTtBQUVFO0VBQWUsOEJBQUE7RUFBK0Isa0RBQUE7QUF5akJoRDtBQXpqQitGO0VBQUsseUJBQUE7QUE0akJwRztBQTVqQmdJO0VBQVUsaURBQUE7QUErakIxSTtBQTlqQkU7RUFBdUMseUJBQUE7QUFpa0J6QztBQWhrQkU7RUFBa0Isc0RBQUE7QUFta0JwQjtBQWxrQkU7RUFBZ0IsOEJBQUE7QUFxa0JsQjtBQXBrQkU7RUFBd0IsZ0RBQUE7QUF1a0IxQjtBQXRrQkU7RUFBdUIsc0RBQUE7QUF5a0J6QjtBQXhrQkU7RUFBb0IsNkNBQUE7RUFBMEMsK0NBQUE7QUE0a0JoRTtBQTNrQnNCO0VBQWdCLCtDQUFBO0VBQTRDLDZDQUFBO0FBK2tCbEY7QUE5a0JFO0VBQXdCLG9GQUFBO0FBaWxCMUI7QUFobEJFO0VBQWdCLCtGQUFBO0FBbWxCbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbiAgIFJlY3J1aXRlciBDZXJ0aWZpZWQgU3R1ZGVudHMgw6LCgMKUIFByZW1pdW0gUmVkZXNpZ25cbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgSGVybyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5yY3QtY3MtaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEgMCUsICMzOTJDN0QgNTUlLCAjMERDQUYwIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAyOHB4IDI4cHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHJjdC1jcy1mYWRlLWluIC41cyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDI0NSwxNTksMTEsLjIyKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xNCk7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcbiAgfVxufVxuLnJjdC1jcy1oZXJvLWJvZHkgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IH1cbi5yY3QtY3MtZ2xvdyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm9yZGVyLXJhZGl1czogNTAlOyBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuLnJjdC1jcy1nbG93LTEgeyB3aWR0aDozMjBweDsgaGVpZ2h0OjMyMHB4OyBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUscmdiYSgyNDUsMTU5LDExLC4yKSAwJSx0cmFuc3BhcmVudCA3MCUpOyB0b3A6LTExMHB4OyByaWdodDoyJTsgYW5pbWF0aW9uOiByY3QtY3MtZmxvYXQgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cbi5yY3QtY3MtZ2xvdy0yIHsgd2lkdGg6MjAwcHg7IGhlaWdodDoyMDBweDsgYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLHJnYmEoMywyMDEsOTAsLjE1KSAwJSx0cmFuc3BhcmVudCA3MCUpOyBib3R0b206LTYwcHg7IGxlZnQ6NSU7IGFuaW1hdGlvbjogcmN0LWNzLWZsb2F0IDlzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7IH1cblxuLyogQXZhdGFyICovXG4ucmN0LWNzLWF2LXdyYXAgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgZmxleC1zaHJpbms6MDsgd2lkdGg6NjRweDsgaGVpZ2h0OjY0cHg7IH1cbi5yY3QtY3MtYXYtcmluZyB7IHBvc2l0aW9uOmFic29sdXRlOyBpbnNldDotN3B4OyBib3JkZXItcmFkaXVzOjUwJTsgYm9yZGVyOjEuNXB4IGRhc2hlZCByZ2JhKDI1NSwyNTUsMjU1LC40NSk7IGFuaW1hdGlvbjpyY3QtY3Mtcm90YXRlIDEycyBsaW5lYXIgaW5maW5pdGU7IH1cbi5yY3QtY3MtYXYtYm9yZGVyIHsgcG9zaXRpb246YWJzb2x1dGU7IGluc2V0OjA7IGJvcmRlci1yYWRpdXM6NTAlOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAzQzk1QSwjMzkyQzdELCMwRENBRjApOyB9XG4ucmN0LWNzLWF2LWNpcmNsZSB7IHBvc2l0aW9uOmFic29sdXRlOyBpbnNldDozcHg7IGJvcmRlci1yYWRpdXM6NTAlOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAzQzk1QSwjMzkyQzdEKTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IH1cbi5yY3QtY3MtYXYtcHVsc2UgeyBwb3NpdGlvbjphYnNvbHV0ZTsgaW5zZXQ6LThweDsgYm9yZGVyLXJhZGl1czo1MCU7IGJvcmRlcjoxLjVweCBzb2xpZCByZ2JhKDI0NSwxNTksMTEsLjM1KTsgYW5pbWF0aW9uOnJjdC1jcy1wdWxzZSAyLjVzIGVhc2Utb3V0IGluZmluaXRlOyB9XG5cbi8qIFNlYXJjaCAqL1xuLnJjdC1jcy1zZWFyY2gtZ2xhc3MgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjEwcHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBiYWNrZHJvcC1maWx0ZXI6Ymx1cigxNnB4KTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigxNnB4KTsgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yMik7IGJvcmRlci1yYWRpdXM6MTRweDsgcGFkZGluZzoxMHB4IDE2cHg7IGJveC1zaGFkb3c6aW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7IH1cbi5yY3QtY3Mtc2VhcmNoLWljbyB7IGZvbnQtc2l6ZToxNnB4OyBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTsgZmxleC1zaHJpbms6MDsgfVxuLnJjdC1jcy1zZWFyY2gtaW5wdXQgeyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBib3JkZXI6bm9uZTsgb3V0bGluZTpub25lOyBmbGV4LWdyb3c6MTsgY29sb3I6I2ZmZjsgZm9udC1zaXplOjEzLjVweDsgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KTsgfSB9XG4ucmN0LWNzLXNlYXJjaC1jbGVhciB7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMTUpOyBib3JkZXI6bm9uZTsgYm9yZGVyLXJhZGl1czo1MCU7IHdpZHRoOjI0cHg7IGhlaWdodDoyNHB4OyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgY3Vyc29yOnBvaW50ZXI7IGZsZXgtc2hyaW5rOjA7IGkgeyBmb250LXNpemU6MTJweDsgY29sb3I6I2ZmZjsgfSAmOmhvdmVyIHsgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4zKTsgfSB9XG5cbi8qIENoaXBzICovXG4ucmN0LWNzLWNoaXAgeyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMTQpOyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTsgY29sb3I6I2ZmZjsgZm9udC1zaXplOjkuNXB4OyBmb250LXdlaWdodDo3MDA7IGxldHRlci1zcGFjaW5nOi43cHg7IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgcGFkZGluZzo0cHggMTJweDsgYm9yZGVyLXJhZGl1czoyMHB4OyB9XG4ucmN0LWNzLWxpdmUgeyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDo1cHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpOyBjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC44NSk7IGZvbnQtc2l6ZTo5LjVweDsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzouNXB4OyBwYWRkaW5nOjNweCAxMHB4OyBib3JkZXItcmFkaXVzOjIwcHg7IH1cbi5yY3QtY3MtbGl2ZS1kb3QgeyB3aWR0aDo3cHg7IGhlaWdodDo3cHg7IGJvcmRlci1yYWRpdXM6NTAlOyBiYWNrZ3JvdW5kOiM0YWRlODA7IGFuaW1hdGlvbjpyY3QtY3MtYmxpbmsgMS4ycyBpbmZpbml0ZTsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQ2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmN0LWNzLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNTUpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4OyBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjIycywgYm94LXNoYWRvdyAuMjJzLCBib3JkZXItY29sb3IgLjIycztcbiAgYW5pbWF0aW9uOiByY3QtY3MtZmFkZS11cCAuMzVzIGVhc2UgYm90aDtcbiAgJjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgYm94LXNoYWRvdzogMCAxNHB4IDM2cHggcmdiYSgyNDUsMTU5LDExLC4xMyk7IGJvcmRlci1jb2xvcjogcmdiYSgyNDUsMTU5LDExLC4zKTsgfVxufVxuLnJjdC1jcy1jYXJkLWFjY2VudCB7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwM0M5NUEsICMzOTJDN0QsICMwRENBRjApOyB9XG4ucmN0LWNzLWNhcmQtYm9keSB7IHBhZGRpbmc6IDE2cHg7IH1cblxuLyogU21hbGwgYXZhdGFyIHdpZGdldCAqL1xuLnJjdC1jcy1hdi13cmFwLXNtIHsgcG9zaXRpb246cmVsYXRpdmU7IHdpZHRoOjUycHg7IGhlaWdodDo1MnB4OyBib3JkZXItcmFkaXVzOjUwJTsgb3ZlcmZsb3c6aGlkZGVuOyBib3JkZXI6Mi41cHggc29saWQgcmdiYSgyNDUsMTU5LDExLC4yNSk7IGJveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDI0NSwxNTksMTEsLjE1KTsgYmFja2dyb3VuZDojZTJlOGYwOyB9XG4ucmN0LWNzLWF2LWltZyB7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlOyBvYmplY3QtZml0OmNvdmVyOyB9XG4ucmN0LWNzLWNlcnQtYmFkZ2UgeyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOjA7IHJpZ2h0OjA7IHdpZHRoOjE4cHg7IGhlaWdodDoxOHB4OyBib3JkZXItcmFkaXVzOjUwJTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNGNTlFMEIsI2Q5NzcwNik7IGJvcmRlcjoycHggc29saWQgI2ZmZjsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGkgeyBmb250LXNpemU6OHB4OyBjb2xvcjojZmZmOyB9IH1cbi5yY3QtY3MtZGVzZy1iYWRnZSB7IGZvbnQtc2l6ZToxMC41cHg7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6IzM5MkM3RDsgYmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMSk7IHBhZGRpbmc6MnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6MjBweDsgfVxuLnJjdC1jcy1jZXJ0LWNvdW50LWJhZGdlIHsgZm9udC1zaXplOjEwLjVweDsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojRjU5RTBCOyBiYWNrZ3JvdW5kOnJnYmEoMjQ1LDE1OSwxMSwuMSk7IGJvcmRlcjoxcHggc29saWQgcmdiYSgyNDUsMTU5LDExLC4yMik7IHBhZGRpbmc6M3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6MjBweDsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6NHB4OyB9XG5cbi8qIENlcnQgY2hpcHMgKi9cbi5yY3QtY3MtY2VydC1jaGlwIHsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6M3B4OyBmb250LXNpemU6MTBweDsgZm9udC13ZWlnaHQ6NjAwOyBwYWRkaW5nOjNweCAxMHB4OyBib3JkZXItcmFkaXVzOjIwcHg7IG1heC13aWR0aDoxODBweDsgd2hpdGUtc3BhY2U6bm93cmFwOyBvdmVyZmxvdzpoaWRkZW47IHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IH1cbi5yY3QtY3MtY2VydC1tb3JlIHsgYmFja2dyb3VuZDpyZ2JhKDEwNywxMTQsMTI4LC4xKTsgY29sb3I6IzZiNzI4MDsgYm9yZGVyOjFweCBkYXNoZWQgcmdiYSgxMDcsMTE0LDEyOCwuMyk7IH1cblxuLyogQWN0aW9ucyAqL1xuLnJjdC1jcy1hY3Rpb25zIHsgZGlzcGxheTpmbGV4OyBnYXA6OHB4OyBwYWRkaW5nLXRvcDoxMnB4OyBib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNik7IG1hcmdpbi10b3A6OHB4OyB9XG4ucmN0LWNzLWJ0bi12aWV3IHsgZmxleDoxOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgcGFkZGluZzo3cHggMTJweDsgYm9yZGVyLXJhZGl1czoxMHB4OyBiYWNrZ3JvdW5kOnJnYmEoNTcsNDQsMTI1LC4wOCk7IGNvbG9yOiMzOTJDN0Q7IGJvcmRlcjpub25lOyBmb250LXNpemU6MTIuNXB4OyBmb250LXdlaWdodDo2MDA7IGN1cnNvcjpwb2ludGVyOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgLjE4czsgJjpob3ZlciB7IGJhY2tncm91bmQ6cmdiYSg1Nyw0NCwxMjUsLjE1KTsgfSB9XG4ucmN0LWNzLWJ0bi1jb250YWN0IHsgZmxleDoxOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgcGFkZGluZzo3cHggMTJweDsgYm9yZGVyLXJhZGl1czoxMHB4OyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAzQzk1QSwjMDU5NjY5KTsgY29sb3I6I2ZmZjsgYm9yZGVyOm5vbmU7IGZvbnQtc2l6ZToxMi41cHg7IGZvbnQtd2VpZ2h0OjYwMDsgY3Vyc29yOnBvaW50ZXI7IHRyYW5zaXRpb246Ym94LXNoYWRvdyAuMnM7ICY6aG92ZXIgeyBib3gtc2hhZG93OjAgNHB4IDE0cHggcmdiYSgzLDIwMSw5MCwuNCk7IH0gJjpkaXNhYmxlZCB7IG9wYWNpdHk6LjY1OyBjdXJzb3I6bm90LWFsbG93ZWQ7IH0gfVxuXG4vKiBTa2VsZXRvbiAqL1xuLnJjdC1jcy1zay1hdiB7IHdpZHRoOjUycHg7IGhlaWdodDo1MnB4OyBib3JkZXItcmFkaXVzOjUwJTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2YwZjRmOCAyNSUsI2UyZWFmMCA1MCUsI2YwZjRmOCA3NSUpOyBiYWNrZ3JvdW5kLXNpemU6MjAwJSAxMDAlOyBhbmltYXRpb246cmN0LWNzLXNoaW1tZXIgMS40cyBpbmZpbml0ZTsgZmxleC1zaHJpbms6MDsgfVxuLnJjdC1zayB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCNmMGY0ZjggMjUlLCNlMmVhZjAgNTAlLCNmMGY0ZjggNzUlKTsgYmFja2dyb3VuZC1zaXplOjIwMCUgMTAwJTsgYW5pbWF0aW9uOnJjdC1jcy1zaGltbWVyIDEuNHMgaW5maW5pdGU7IGJvcmRlci1yYWRpdXM6NnB4OyBkaXNwbGF5OmJsb2NrOyB9XG4ucmN0LXNrLXNtIHsgaGVpZ2h0OjE0cHg7IH0gLnJjdC1zay14cyB7IGhlaWdodDoxMnB4OyB9XG5cbi8qIEFsZXJ0ICovXG4ucmN0LWNzLWFsZXJ0LXdhcm4geyBiYWNrZ3JvdW5kOnJnYmEoMjQ1LDE1OCwxMSwuMDkpOyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQ1LDE1OCwxMSwuMyk7IGNvbG9yOiM5MjQwMGU7IGJvcmRlci1yYWRpdXM6MTJweDsgcGFkZGluZzoxMnB4IDE2cHg7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XG5cbi8qIEVtcHR5ICovXG4ucmN0LWNzLWVtcHR5IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6NjBweCAyNHB4OyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMDQpLHJnYmEoNTcsNDQsMTI1LC4wMykpOyBib3JkZXI6MXB4IGRhc2hlZCByZ2JhKDU3LDQ0LDEyNSwuMTUpOyBib3JkZXItcmFkaXVzOjIwcHg7IH1cbi5yY3QtY3MtZW1wdHktaWNvIHsgd2lkdGg6ODBweDsgaGVpZ2h0OjgwcHg7IGJvcmRlci1yYWRpdXM6NTAlOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMSkscmdiYSg1Nyw0NCwxMjUsLjA2KSk7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBtYXJnaW4tYm90dG9tOjE2cHg7IGJvcmRlcjoxcHggc29saWQgcmdiYSgzLDIwMSw5MCwuMik7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIE1vZGFsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnJjdC1jcy1tb2RhbC1iYWNrZHJvcCB7IHBvc2l0aW9uOmZpeGVkOyBpbnNldDowOyBiYWNrZ3JvdW5kOnJnYmEoMTUsMTAsMzUsLjYpOyBiYWNrZHJvcC1maWx0ZXI6Ymx1cig0cHgpOyB6LWluZGV4OjEwNTA7IGFuaW1hdGlvbjpyY3QtY3MtZmFkZS1pbiAuMnMgZWFzZTsgfVxuLnJjdC1jcy1tb2RhbCB7IHBvc2l0aW9uOmZpeGVkOyB0b3A6NTAlOyBsZWZ0OjUwJTsgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpOyB3aWR0aDptaW4oOTZ2dyw2MjBweCk7IG1heC1oZWlnaHQ6OTB2aDsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjIycHg7IG92ZXJmbG93OmhpZGRlbjsgei1pbmRleDoxMDU1OyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYm94LXNoYWRvdzowIDI0cHggNjRweCByZ2JhKDI0NSwxNTksMTEsLjE4KSwwIDJweCA4cHggcmdiYSgwLDAsMCwuMTIpOyBhbmltYXRpb246cmN0LWNzLW1vZGFsLXBvcCAuMjhzIGN1YmljLWJlemllciguMjIsLjY4LDAsMS4yKTsgfVxuLnJjdC1jcy1tb2RhbC1jb3ZlciB7IHBvc2l0aW9uOnJlbGF0aXZlOyBoZWlnaHQ6MTEwcHg7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywjMDNDOTVBLCMzOTJDN0QsIzBEQ0FGMCk7IH1cbi5yY3QtY3MtbW9kYWwtY292ZXItYmcgeyBwb3NpdGlvbjphYnNvbHV0ZTsgaW5zZXQ6MDsgYmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLHJnYmEoMjU1LDI1NSwyNTUsLjEpIDFweCx0cmFuc3BhcmVudCAxcHgpOyBiYWNrZ3JvdW5kLXNpemU6MjBweCAyMHB4OyB9XG4ucmN0LWNzLW1vZGFsLWF2LXJpbmcgeyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOi00NHB4OyBsZWZ0OjUwJTsgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7IHdpZHRoOjg4cHg7IGhlaWdodDo4OHB4OyBib3JkZXItcmFkaXVzOjUwJTsgYm9yZGVyOjRweCBzb2xpZCAjZmZmOyBvdmVyZmxvdzpoaWRkZW47IGJveC1zaGFkb3c6MCA2cHggMjBweCByZ2JhKDI0NSwxNTksMTEsLjI4KTsgYmFja2dyb3VuZDojZTJlOGYwOyB9XG4ucmN0LWNzLW1vZGFsLWF2IHsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IG9iamVjdC1maXQ6Y292ZXI7IH1cbi5yY3QtY3MtbW9kYWwtY2xvc2UgeyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjE0cHg7IHJpZ2h0OjE0cHg7IHdpZHRoOjMycHg7IGhlaWdodDozMnB4OyBib3JkZXItcmFkaXVzOjUwJTsgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC4xOCk7IGJvcmRlcjoxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTsgY29sb3I6I2ZmZjsgY3Vyc29yOnBvaW50ZXI7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBpIHsgZm9udC1zaXplOjE0cHg7IH0gJjpob3ZlciB7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMyk7IH0gfVxuLnJjdC1jcy1tb2RhbC1jcm93biB7IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6MTJweDsgbGVmdDoxNnB4OyB3aWR0aDozNnB4OyBoZWlnaHQ6MzZweDsgYm9yZGVyLXJhZGl1czo1MCU7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMTUpOyBib3JkZXI6MS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMyk7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBiYWNrZHJvcC1maWx0ZXI6Ymx1cig4cHgpOyB9XG4ucmN0LWNzLW1vZGFsLWRpdmlkZXIgeyBoZWlnaHQ6MXB4OyBiYWNrZ3JvdW5kOnJnYmEoNTcsNDQsMTI1LC4wOCk7IG1hcmdpbjoxMnB4IDI0cHg7IH1cbi5yY3QtY3MtbW9kYWwtYm9keSB7IGZsZXg6MTsgb3ZlcmZsb3cteTphdXRvOyBwYWRkaW5nOjAgMjRweCAxMnB4OyB9XG4ucmN0LWNzLW1vZGFsLWJpbyB7IGJhY2tncm91bmQ6cmdiYSgzLDIwMSw5MCwuMDYpOyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMywyMDEsOTAsLjE0KTsgYm9yZGVyLXJhZGl1czoxMnB4OyBwYWRkaW5nOjEycHggMTZweDsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XG5cbi5yY3QtY3MtY2VydC1pdGVtIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDoxMnB4OyBwYWRkaW5nOjEwcHggMTJweDsgYm9yZGVyLXJhZGl1czoxMnB4OyB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTVzOyAmOmhvdmVyIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNHB4KTsgfSB9XG4ucmN0LWNzLWNlcnQtaXRlbS1pY28geyB3aWR0aDozNnB4OyBoZWlnaHQ6MzZweDsgYm9yZGVyLXJhZGl1czoxMHB4OyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYmFja2dyb3VuZDpyZ2JhKDI0NSwxNTksMTEsLjEyKTsgY29sb3I6I0Y1OUUwQjsgZmxleC1zaHJpbms6MDsgfVxuXG4ucmN0LWNzLW1vZGFsLWZvb3RlciB7IHBhZGRpbmc6MTZweCAyNHB4OyBib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMDgpOyBkaXNwbGF5OmZsZXg7IGdhcDoxMHB4OyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cbi5yY3QtY3MtYnRuLWNvbnRhY3QtbGcgeyBmbGV4OjE7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAzQzk1QSwjMDU5NjY5KTsgY29sb3I6I2ZmZjsgYm9yZGVyOm5vbmU7IGJvcmRlci1yYWRpdXM6MTJweDsgcGFkZGluZzoxMHB4IDIwcHg7IGZvbnQtc2l6ZToxMy41cHg7IGZvbnQtd2VpZ2h0OjcwMDsgY3Vyc29yOnBvaW50ZXI7IHRyYW5zaXRpb246Ym94LXNoYWRvdyAuMnMsdHJhbnNmb3JtIC4yczsgJjpob3ZlciB7IGJveC1zaGFkb3c6MCA2cHggMjBweCByZ2JhKDMsMjAxLDkwLC40KTsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTJweCk7IH0gJjpkaXNhYmxlZCB7IG9wYWNpdHk6LjY1OyBjdXJzb3I6bm90LWFsbG93ZWQ7IHRyYW5zZm9ybTpub25lOyB9IH1cbi5yY3QtY3MtYnRuLWNsb3NlIHsgYmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMDcpOyBjb2xvcjojMzkyQzdEOyBib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4xNSk7IGJvcmRlci1yYWRpdXM6MTJweDsgcGFkZGluZzoxMHB4IDE4cHg7IGZvbnQtc2l6ZToxM3B4OyBmb250LXdlaWdodDo2MDA7IGN1cnNvcjpwb2ludGVyOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4xOHM7ICY6aG92ZXIgeyBiYWNrZ3JvdW5kOnJnYmEoNTcsNDQsMTI1LC4xMyk7IH0gfVxuLnJjdC1jcy1saS1idG4geyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDo2cHg7IGJhY2tncm91bmQ6cmdiYSgxMCwxMDIsMTk0LC4wOCk7IGNvbG9yOiMwYTY2YzI7IGJvcmRlcjoxcHggc29saWQgcmdiYSgxMCwxMDIsMTk0LC4xOCk7IGJvcmRlci1yYWRpdXM6MTBweDsgcGFkZGluZzo2cHggMTRweDsgZm9udC1zaXplOjEyLjVweDsgZm9udC13ZWlnaHQ6NjAwOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgJjpob3ZlciB7IGJhY2tncm91bmQ6cmdiYSgxMCwxMDIsMTk0LC4xNSk7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQW5pbWF0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBrZXlmcmFtZXMgcmN0LWNzLWZhZGUtaW4gIHsgZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTJweCl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfSB9XG5Aa2V5ZnJhbWVzIHJjdC1jcy1mYWRlLXVwICB7IGZyb217b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDE2cHgpfXRve29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZX0gfVxuQGtleWZyYW1lcyByY3QtY3MtZmxvYXQgICAgeyAwJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfTUwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTZweCl9IH1cbkBrZXlmcmFtZXMgcmN0LWNzLXJvdGF0ZSAgIHsgdG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfSB9XG5Aa2V5ZnJhbWVzIHJjdC1jcy1wdWxzZSAgICB7IDAle3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5Oi42fTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEuNTUpO29wYWNpdHk6MH0gfVxuQGtleWZyYW1lcyByY3QtY3MtYmxpbmsgICAgeyAwJSwxMDAle29wYWNpdHk6MX01MCV7b3BhY2l0eTouNH0gfVxuQGtleWZyYW1lcyByY3QtY3Mtc2hpbW1lciAgeyAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjIwMCUgMH0xMDAle2JhY2tncm91bmQtcG9zaXRpb246LTIwMCUgMH0gfVxuQGtleWZyYW1lcyByY3QtY3MtbW9kYWwtcG9wIHsgZnJvbXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKC45Mil9dG97b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKX0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgREFSSyBNT0RFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuOmhvc3QtY29udGV4dCguZGFyay1tb2RlKSB7XG4gIC5yY3QtY3MtY2FyZCB7IGJhY2tncm91bmQ6IzFhMWEyYiAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7IGg2IHsgY29sb3I6I2UyZThmMCAhaW1wb3J0YW50OyB9ICY6aG92ZXIgeyBib3JkZXItY29sb3I6cmdiYSgyNDUsMTU5LDExLC4yNSkgIWltcG9ydGFudDsgfSB9XG4gIC5yY3QtY3MtY2FyZC1ib2R5IHBbc3R5bGUqPVwiNmI3MjgwXCJdIHsgY29sb3I6IzRiNTU2MyAhaW1wb3J0YW50OyB9XG4gIC5yY3QtY3MtYWN0aW9ucyB7IGJvcmRlci10b3AtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7IH1cbiAgLnJjdC1jcy1tb2RhbCB7IGJhY2tncm91bmQ6IzFhMWEyYiAhaW1wb3J0YW50OyB9XG4gIC5yY3QtY3MtbW9kYWwtZGl2aWRlciB7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7IH1cbiAgLnJjdC1jcy1tb2RhbC1mb290ZXIgeyBib3JkZXItdG9wLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50OyB9XG4gIC5yY3QtY3MtbW9kYWwtYmlvIHsgYmFja2dyb3VuZDpyZ2JhKDMsMjAxLDkwLC4wNykgIWltcG9ydGFudDsgYm9yZGVyLWNvbG9yOnJnYmEoMywyMDEsOTAsLjEyKSAhaW1wb3J0YW50OyB9XG4gIC5yY3QtY3MtY2VydC1pdGVtIHsgJjpudGgtY2hpbGQoMSl7IGJvcmRlci1jb2xvcjpyZ2JhKDMsMjAxLDkwLC4xMikgIWltcG9ydGFudDsgYmFja2dyb3VuZDpyZ2JhKDMsMjAxLDkwLC4wNikgIWltcG9ydGFudDsgfSB9XG4gIC5yY3Qtc2ssLnJjdC1jcy1zay1hdiB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCMxYTFhMmIgMjUlLCMyMjIyMzUgNTAlLCMxYTFhMmIgNzUlKSAhaW1wb3J0YW50OyB9XG4gIC5yY3QtY3MtZW1wdHkgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMDUpLHJnYmEoNTcsNDQsMTI1LC4wNCkpICFpbXBvcnRhbnQ7IH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return RecruiterCertifiedStudentsComponent;
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
//# sourceMappingURL=542.js.map