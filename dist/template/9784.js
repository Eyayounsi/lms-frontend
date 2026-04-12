"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9784],{

/***/ 29784:
/*!************************************************************************************!*\
  !*** ./src/app/features/instructor/students-details/students-details.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentsDetailsComponent: () => (/* binding */ StudentsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_components_avatar_fallback_avatar_fallback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/avatar-fallback/avatar-fallback.component */ 23181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 85422);









const _forTrack0 = ($index, $item) => $item.title;
function StudentsDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8)(4, "div", 9)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Retour \u00E0 la liste ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 12)(9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-avatar-fallback", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 15)(12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Fiche \u00E9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 18)(17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 22)(24, "div", 23)(25, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 23)(30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Derni\u00E8re activit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 26)(40, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StudentsDetailsComponent_Conditional_2_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Envoyer un message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Explorer la liste ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r1.routes.studentsGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("imageUrl", ctx_r1.getAvatarUrl(ctx_r1.student))("name", ctx_r1.getStudentName(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getStudentName(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getProgressLabel(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getCourseCount(ctx_r1.student), " cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getCompletedCourseCount(ctx_r1.student), " termin\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getStudentEmail(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getAverageProgress(ctx_r1.student), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getLastActivity(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r1.routes.studentsGrid);
  }
}
function StudentsDetailsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Chargement des d\u00E9tails");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "R\u00E9cup\u00E9ration du profil et des parcours de l'\u00E9tudiant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function StudentsDetailsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u00C9tudiant non trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Cet \u00E9tudiant n'existe pas ou a \u00E9t\u00E9 supprim\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Retour \u00E0 la liste ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r1.routes.studentsGrid);
  }
}
function StudentsDetailsComponent_Conditional_5_Conditional_104_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Termin\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StudentsDetailsComponent_Conditional_5_Conditional_104_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "En cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StudentsDetailsComponent_Conditional_5_Conditional_104_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](8, StudentsDetailsComponent_Conditional_5_Conditional_104_For_2_Conditional_8_Template, 2, 0, "span", 91)(9, StudentsDetailsComponent_Conditional_5_Conditional_104_For_2_Conditional_9_Template, 2, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", $index_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](course_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](course_r4.status === "Termine" ? 8 : 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", course_r4.progress, "% compl\u00E9t\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", course_r4.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", course_r4.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("bg-success", course_r4.progress >= 100)("bg-primary", course_r4.progress < 100);
  }
}
function StudentsDetailsComponent_Conditional_5_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, StudentsDetailsComponent_Conditional_5_Conditional_104_For_2_Template, 16, 11, "div", 85, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.getCourseItems(ctx_r1.student));
  }
}
function StudentsDetailsComponent_Conditional_5_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Aucun cours trouv\u00E9 pour cet \u00E9tudiant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function StudentsDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5)(1, "div", 39)(2, "div", 5)(3, "div", 40)(4, "div", 41)(5, "div", 42)(6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 40)(13, "div", 41)(14, "div", 42)(15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Progression moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 40)(24, "div", 41)(25, "div", 42)(26, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Termin\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 40)(33, "div", 41)(34, "div", 42)(35, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Derni\u00E8re activit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 56)(42, "div", 57)(43, "div", 42)(44, "div", 58)(45, "div", 59)(46, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Coordonn\u00E9es et contexte");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 62)(51, "div", 63)(52, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 63)(57, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "ID \u00E9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 63)(62, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "span", 66)(65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 67)(68, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StudentsDetailsComponent_Conditional_5_Template_button_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Envoyer un message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Retour \u00E0 la liste ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 68)(75, "div", 59)(76, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "R\u00E9sum\u00E9 rapide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 69)(81, "div", 70)(82, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Cours achet\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 70)(87, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Cours termin\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 70)(92, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 72)(97, "div", 73)(98, "div", 42)(99, "div", 74)(100, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Parcours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Cours achet\u00E9s et progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](104, StudentsDetailsComponent_Conditional_5_Conditional_104_Template, 3, 0, "div", 75)(105, StudentsDetailsComponent_Conditional_5_Conditional_105_Template, 4, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 77)(107, "div", 42)(108, "div", 74)(109, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Chronologie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "Rep\u00E8res d'inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 78)(114, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](115, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div")(117, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "Date d'inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div")(124, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "Derni\u00E8re activit\u00E9 connue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](129, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div")(131, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "Progression globale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getCourseCount(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getAverageProgress(ctx_r1.student), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-valuenow", ctx_r1.getAverageProgress(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r1.getAverageProgress(ctx_r1.student), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getCompletedCourseCount(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getLastActivity(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getStudentEmail(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((ctx_r1.student == null ? null : ctx_r1.student.studentId) || (ctx_r1.student == null ? null : ctx_r1.student.enrollmentId) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinterpolate2"]("badge bg-", ctx_r1.getProgressTone(ctx_r1.student), "-transparent text-", ctx_r1.getProgressTone(ctx_r1.student)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getProgressLabel(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r1.routes.studentsGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getCourseCount(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getCompletedCourseCount(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.getAverageProgress(ctx_r1.student), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.getCourseItems(ctx_r1.student).length > 0 ? 104 : 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formatDate(ctx_r1.student.enrolledAt || ctx_r1.student.createdAt || ctx_r1.student.joinedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getLastActivity(ctx_r1.student));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r1.getAverageProgress(ctx_r1.student), "% - ", ctx_r1.getProgressLabel(ctx_r1.student));
  }
}
let StudentsDetailsComponent = /*#__PURE__*/(() => {
  class StudentsDetailsComponent {
    courseService;
    authService;
    activatedRoute;
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    student = null;
    loading = true;
    studentId = null;
    constructor(courseService, authService, activatedRoute, router) {
      this.courseService = courseService;
      this.authService = authService;
      this.activatedRoute = activatedRoute;
      this.router = router;
    }
    ngOnInit() {
      // Get student ID from route params
      this.studentId = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.studentId) {
        this.loadStudentDetails();
      } else {
        this.loading = false;
      }
    }
    loadStudentDetails() {
      // Fetch all instructor students and filter by unique student ID
      this.courseService.getInstructorStudents().subscribe({
        next: data => {
          const students = this.mergeStudentsByIdentity(Array.isArray(data) ? data : []);
          this.student = students.find(s => String(s?.studentId || s?.userId || s?.studentEmail || s?.email) === String(this.studentId)) || null;
          this.loading = false;
        },
        error: () => {
          this.student = null;
          this.loading = false;
        }
      });
    }
    getInitial(name) {
      return name ? name.charAt(0).toUpperCase() : '?';
    }
    getStudentName(student) {
      return student?.studentName || student?.name || 'Étudiant inconnu';
    }
    getStudentEmail(student) {
      return student?.studentEmail || student?.email || 'Email non disponible';
    }
    getCourseTitle(student) {
      return student?.courseTitle || student?.courseName || 'Cours inconnu';
    }
    getCourseItems(student = this.student) {
      return Array.isArray(student?.courseItems) ? student.courseItems : [];
    }
    getCourseCount(student = this.student) {
      return this.getCourseItems(student).length;
    }
    getCompletedCourseCount(student = this.student) {
      return this.getCourseItems(student).filter(course => Number(course?.progress ?? 0) >= 100).length;
    }
    getAverageProgress(student = this.student) {
      return this.getProgress(student);
    }
    getProgressLabel(student = this.student) {
      const progress = this.getAverageProgress(student);
      if (progress >= 100) return 'Parcours terminé';
      if (progress >= 75) return 'Très avancé';
      if (progress >= 40) return 'En progression';
      if (progress > 0) return 'Début de parcours';
      return 'Aucun avancement';
    }
    getProgressTone(student = this.student) {
      const progress = this.getAverageProgress(student);
      if (progress >= 100) return 'success';
      if (progress >= 75) return 'primary';
      if (progress >= 40) return 'info';
      if (progress > 0) return 'warning';
      return 'secondary';
    }
    getLastActivity(student = this.student) {
      return this.formatDate(student?.enrolledAt || student?.createdAt || student?.joinedAt);
    }
    getAvatarUrl(student = this.student) {
      const raw = student?.studentAvatar || student?.avatarPath || student?.avatar || student?.profileImage || student?.photoUrl || '';
      const resolved = this.authService.resolveAvatarUrl(raw);
      return resolved || null;
    }
    getProgress(student) {
      const value = Number(student?.aggregateProgress ?? student?.completionPercentage ?? student?.progress ?? 0);
      return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
    }
    formatDate(value) {
      if (!value) return 'Date inconnue';
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return String(value);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    }
    sendMessage() {
      const targetUserId = Number(this.student?.userId || this.student?.studentId || this.studentId || 0);
      // Navigate in SPA mode to preserve app state
      this.router.navigate([this.routes.instructorMessage], {
        queryParams: {
          studentUserId: Number.isFinite(targetUserId) && targetUserId > 0 ? targetUserId : null,
          studentId: this.studentId,
          studentName: this.getStudentName(this.student),
          studentAvatar: this.student?.studentAvatar || this.student?.avatarPath || null
        }
      });
    }
    mergeStudentsByIdentity(rows) {
      const map = new Map();
      rows.forEach((row, index) => {
        const key = this.getStudentKey(row, index);
        const currentCourses = this.extractCourseTitles(row?.courseTitle || row?.courseName || '');
        const rowProgress = this.getProgressValue(row);
        const rowCompleted = rowProgress >= 100;
        if (!map.has(key)) {
          const courseProgressMap = {};
          currentCourses.forEach(courseTitle => {
            courseProgressMap[courseTitle] = rowProgress;
          });
          const rowAvatar = this.extractAvatar(row);
          map.set(key, {
            ...row,
            studentId: row?.studentId || row?.userId || row?.studentEmail || row?.email || String(index + 1),
            studentAvatar: rowAvatar,
            avatarPath: rowAvatar,
            courseTitles: [...currentCourses],
            courseProgressMap,
            progressSum: rowProgress,
            progressCount: 1,
            completedCourses: rowCompleted ? 1 : 0
          });
          return;
        }
        const existing = map.get(key);
        const rowAvatar = this.extractAvatar(row);
        if (!this.extractAvatar(existing) && rowAvatar) {
          existing.studentAvatar = rowAvatar;
          existing.avatarPath = rowAvatar;
        }
        currentCourses.forEach(courseTitle => {
          if (courseTitle && !existing.courseTitles.includes(courseTitle)) {
            existing.courseTitles.push(courseTitle);
          }
          const prev = Number(existing.courseProgressMap?.[courseTitle] ?? 0);
          existing.courseProgressMap[courseTitle] = Math.max(prev, rowProgress);
        });
        existing.progressSum += rowProgress;
        existing.progressCount += 1;
        if (rowCompleted) {
          existing.completedCourses += 1;
        }
      });
      return Array.from(map.values()).map(student => ({
        ...student,
        courseTitle: student.courseTitles.length > 0 ? student.courseTitles.join(' • ') : student?.courseTitle || student?.courseName || 'Cours',
        aggregateProgress: student.progressCount > 0 ? Math.round(student.progressSum / student.progressCount) : 0,
        totalCourses: student.progressCount || 0,
        courseItems: student.courseTitles.map(title => {
          const progress = Number(student.courseProgressMap?.[title] ?? 0);
          return {
            title,
            progress,
            status: progress >= 100 ? 'Termine' : 'En cours'
          };
        })
      }));
    }
    getStudentKey(student, index) {
      const rawKey = student?.studentId || student?.userId || student?.studentEmail || student?.email || student?.enrollmentId;
      return String(rawKey || `student-${index}`);
    }
    getProgressValue(student) {
      const value = Number(student?.completionPercentage ?? student?.progress ?? 0);
      return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
    }
    extractCourseTitles(rawValue) {
      const raw = String(rawValue || '').trim();
      if (!raw) return [];
      return raw.split(/[,;|•]/).map(part => part.trim()).filter(part => !!part).filter((value, index, self) => self.indexOf(value) === index);
    }
    extractAvatar(student) {
      return student?.studentAvatar || student?.avatarPath || student?.avatar || student?.profileImage || student?.photoUrl || '';
    }
    static ɵfac = function StudentsDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: StudentsDetailsComponent,
      selectors: [["app-students-details"]],
      decls: 6,
      vars: 4,
      consts: [[1, "students-details"], [1, "students-details-shell"], [1, "students-details-hero", "card", "mb-3"], [1, "students-details-loading", "card", "py-5", "text-center"], [1, "students-details-empty", "card", "text-center", "py-5"], [1, "row", "g-3"], [1, "students-details-hero__glow", "students-details-hero__glow--one"], [1, "students-details-hero__glow", "students-details-hero__glow--two"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3", "position-relative"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-3", "flex-grow-1"], [1, "btn", "btn-light", "students-details-back", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-2"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "students-details-avatar-wrap"], ["size", "xl", 1, "students-details-avatar", 3, "imageUrl", "name"], [1, "students-details-headline"], [1, "students-details-kicker"], [1, "students-details-title", "mb-2"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "badge", "bg-primary-transparent", "text-primary", "students-details-badge"], [1, "badge", "bg-info-transparent", "text-info", "students-details-badge"], [1, "badge", "bg-success-transparent", "text-success", "students-details-badge"], [1, "students-details-hero-insights", "mt-3"], [1, "students-details-hero-insight"], [1, "students-details-hero-insight__label"], [1, "students-details-hero-insight__value"], [1, "d-flex", "flex-wrap", "gap-2", "position-relative"], ["type", "button", 1, "btn", "btn-primary", "students-details-action", 3, "click"], [1, "isax", "isax-messages", "me-2"], [1, "btn", "btn-outline-secondary", "students-details-action", 3, "routerLink"], [1, "isax", "isax-grid-1", "me-2"], ["role", "status", 1, "students-details-loading__spinner", "spinner-border", "text-primary"], [1, "mt-3", "mb-1"], [1, "text-muted", "mb-0"], [1, "students-details-empty__icon", "mx-auto", "mb-3"], [1, "isax", "isax-info-circle"], [1, "text-danger", "mb-2"], [1, "text-muted", "mb-4"], [1, "btn", "btn-primary", "students-details-action", "mx-auto", 3, "routerLink"], [1, "col-12"], [1, "col-md-3", "col-sm-6"], [1, "students-details-metric", "card", "h-100"], [1, "card-body"], [1, "students-details-metric__icon", "students-details-metric__icon--blue"], [1, "isax", "isax-book"], [1, "students-details-metric__label", "mb-1"], [1, "students-details-metric__value", "mb-0"], [1, "students-details-metric__icon", "students-details-metric__icon--green"], [1, "isax", "isax-chart-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "students-details-metric-progress", "mt-2"], [1, "progress-bar", "bg-primary"], [1, "students-details-metric__icon", "students-details-metric__icon--cyan"], [1, "isax", "isax-tick-circle"], [1, "students-details-metric__icon", "students-details-metric__icon--pink"], [1, "isax", "isax-calendar-1"], [1, "students-details-metric__value", "mb-0", "students-details-metric__value--small"], [1, "col-xl-4", "col-lg-5", "mb-3"], [1, "card", "students-details-panel", "h-100"], [1, "students-details-panel__section"], [1, "students-details-mini-header"], [1, "students-details-mini-header__kicker"], [1, "mb-0", "fw-bold"], [1, "students-details-contact-list"], [1, "students-details-contact-item"], [1, "students-details-contact-item__label"], [1, "students-details-contact-item__value"], [1, "students-details-contact-item__value", "students-details-contact-item__value--pill"], [1, "students-details-side-actions", "d-grid", "gap-2", "mt-3"], [1, "students-details-panel__section", "mt-4"], [1, "students-details-summary"], [1, "students-details-summary__item"], [1, "students-details-summary__label"], [1, "col-xl-8", "col-lg-7", "mb-3"], [1, "card", "students-details-panel", "mb-3"], [1, "students-details-mini-header", "mb-3"], [1, "students-details-course-stack"], [1, "students-details-course-empty"], [1, "card", "students-details-panel"], [1, "students-details-timeline"], [1, "students-details-timeline__item"], [1, "students-details-timeline__dot", "students-details-timeline__dot--blue"], [1, "mb-1", "text-muted", "fs-14"], [1, "mb-0", "fw-semibold"], [1, "students-details-timeline__dot", "students-details-timeline__dot--green"], [1, "students-details-timeline__dot", "students-details-timeline__dot--pink"], [1, "students-details-course-item"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-3", "mb-2"], [1, "students-details-course-main"], [1, "students-details-course-rank"], [1, "mb-1", "fw-semibold"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "badge", "bg-success-transparent", "text-success"], [1, "badge", "bg-info-transparent", "text-info"], [1, "text-muted", "fs-13"], [1, "students-details-course-score"], [1, "progress", "students-details-progress"], ["role", "progressbar", 1, "progress-bar"], [1, "isax", "isax-book-empty"], [1, "mb-0", "text-muted"]],
      template: function StudentsDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](2, StudentsDetailsComponent_Conditional_2_Template, 46, 11, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](3, StudentsDetailsComponent_Conditional_3_Template, 6, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](4, StudentsDetailsComponent_Conditional_4_Template, 10, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](5, StudentsDetailsComponent_Conditional_5_Template, 135, 23, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.loading && ctx.student ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.loading ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.loading && !ctx.student ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.loading && ctx.student ? 5 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _shared_components_avatar_fallback_avatar_fallback_component__WEBPACK_IMPORTED_MODULE_4__.AvatarFallbackComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.students-details[_ngcontent-%COMP%] {\n  --sd-primary: #4f46e5;\n  --sd-cyan: #06b6d4;\n  --sd-ink: #0f172a;\n  --sd-soft: #64748b;\n  --sd-card-border: #e6eaf2;\n  --sd-card-shadow: 0 8px 24px rgba(15, 23, 42, .06);\n  position: relative;\n  overflow: hidden;\n  padding: 0 16px 8px;\n  animation: _ngcontent-%COMP%_fadeInPage 0.45s ease;\n  background: radial-gradient(circle at 12% 8%, rgba(99, 102, 241, 0.08), transparent 24%), radial-gradient(circle at 88% 12%, rgba(6, 182, 212, 0.08), transparent 20%), linear-gradient(180deg, rgba(248, 250, 252, 0.65), rgba(255, 255, 255, 0));\n}\n\n.students-details-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1280px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.students-details[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: radial-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n  opacity: 0.32;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid var(--sd-card-border);\n  border-radius: 16px;\n  box-shadow: var(--sd-card-shadow);\n  overflow: hidden;\n  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: #c7d2fe;\n  box-shadow: 0 16px 28px rgba(79, 70, 229, 0.1);\n}\n\n.students-details[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], \n.students-details-hero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.students-details-hero[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #dbe4ff;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 255, 0.98));\n  padding: 1.4rem;\n  box-shadow: 0 18px 42px rgba(79, 70, 229, 0.09);\n  -webkit-backdrop-filter: saturate(1.15);\n          backdrop-filter: saturate(1.15);\n}\n\n.students-details-hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.36) 45%, transparent 70%);\n  transform: translateX(-120%);\n  animation: _ngcontent-%COMP%_heroShine 5.2s ease-in-out infinite;\n}\n\n.students-details-hero__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(2px);\n  animation: _ngcontent-%COMP%_floatGlow 8s ease-in-out infinite;\n}\n\n.students-details-hero__glow--one[_ngcontent-%COMP%] {\n  top: -42px;\n  right: 18px;\n  width: 160px;\n  height: 160px;\n  background: radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 68%);\n}\n\n.students-details-hero__glow--two[_ngcontent-%COMP%] {\n  bottom: -36px;\n  right: 28%;\n  width: 120px;\n  height: 120px;\n  background: radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, transparent 68%);\n  animation-delay: 1.2s;\n}\n\n.students-details-back[_ngcontent-%COMP%], \n.students-details-action[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n}\n\n.students-details-back[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);\n  border: 1px solid #e8edf7;\n  background: #fff;\n  color: #334155;\n}\n\n.students-details-back[_ngcontent-%COMP%]:hover {\n  background: #f8fbff;\n  border-color: #c7d2fe;\n  transform: translateY(-1px);\n}\n\n.students-details-avatar-wrap[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.16), rgba(6, 182, 212, 0.14));\n  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.12);\n  animation: _ngcontent-%COMP%_avatarPulse 5s ease-in-out infinite;\n  position: relative;\n}\n\n.students-details-avatar-wrap[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  border: 1px dashed rgba(79, 70, 229, 0.32);\n  opacity: 0.7;\n  animation: _ngcontent-%COMP%_ringOrbit 10s linear infinite;\n}\n\n.students-details-avatar[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.students-details-kicker[_ngcontent-%COMP%], \n.students-details-mini-header__kicker[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n\n.students-details-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.4rem, 2vw, 2.1rem);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #0f172a;\n}\n\n.students-details-headline[_ngcontent-%COMP%] {\n  max-width: 760px;\n}\n\n.students-details-hero-insights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.65rem;\n}\n\n.students-details-hero-insight[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.8rem;\n  border-radius: 14px;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 255, 0.95));\n  border: 1px solid #e5ebfb;\n  box-shadow: 0 8px 14px rgba(15, 23, 42, 0.05);\n  min-width: 0;\n  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;\n}\n\n.students-details-hero-insight[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #c7d2fe;\n  box-shadow: 0 14px 20px rgba(79, 70, 229, 0.08);\n}\n\n.students-details-hero-insight__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  line-height: 1.2;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n\n.students-details-hero-insight__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  line-height: 1.2;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.students-details-badge[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.45rem 0.75rem;\n  font-weight: 600;\n  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.04);\n}\n\n.students-details-metric[_ngcontent-%COMP%] {\n  border: 1px solid #e6eaf2;\n  border-radius: 18px;\n  overflow: hidden;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  background: linear-gradient(180deg, #fff, #fbfcff);\n  animation: _ngcontent-%COMP%_revealUp 0.45s ease both;\n}\n\n.students-details[_ngcontent-%COMP%]   .row.g-3[_ngcontent-%COMP%]    > .col-md-3[_ngcontent-%COMP%]:nth-child(2)   .students-details-metric[_ngcontent-%COMP%] {\n  animation-delay: 0.04s;\n}\n\n.students-details[_ngcontent-%COMP%]   .row.g-3[_ngcontent-%COMP%]    > .col-md-3[_ngcontent-%COMP%]:nth-child(3)   .students-details-metric[_ngcontent-%COMP%] {\n  animation-delay: 0.08s;\n}\n\n.students-details[_ngcontent-%COMP%]   .row.g-3[_ngcontent-%COMP%]    > .col-md-3[_ngcontent-%COMP%]:nth-child(4)   .students-details-metric[_ngcontent-%COMP%] {\n  animation-delay: 0.12s;\n}\n\n.students-details-metric[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 16px 28px rgba(79, 70, 229, 0.1);\n}\n\n.students-details-metric[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.1rem;\n}\n\n.students-details-metric__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  margin-bottom: 0.75rem;\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);\n}\n\n.students-details-metric__icon--blue[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3b82f6, #6366f1);\n}\n\n.students-details-metric__icon--green[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #22c55e);\n}\n\n.students-details-metric__icon--cyan[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #06b6d4, #0ea5e9);\n}\n\n.students-details-metric__icon--pink[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ec4899, #f97316);\n}\n\n.students-details-metric__label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 600;\n}\n\n.students-details-metric__value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n\n.students-details-metric__value--small[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.35;\n}\n\n.students-details-metric-progress[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e7edf9;\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.students-details-metric-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);\n  background-image: linear-gradient(90deg, #4f46e5, #06b6d4);\n}\n\n.students-details-panel[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background: linear-gradient(180deg, #ffffff, #fbfcff);\n  border-color: #e8edf7;\n  animation: _ngcontent-%COMP%_revealUp 0.45s ease both;\n}\n\n.students-details[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%]   .students-details-panel[_ngcontent-%COMP%] {\n  animation-delay: 0.06s;\n}\n\n.students-details[_ngcontent-%COMP%]   .col-xl-8[_ngcontent-%COMP%]   .students-details-panel[_ngcontent-%COMP%]:first-child {\n  animation-delay: 0.12s;\n}\n\n.students-details[_ngcontent-%COMP%]   .col-xl-8[_ngcontent-%COMP%]   .students-details-panel[_ngcontent-%COMP%]:last-child {\n  animation-delay: 0.18s;\n}\n\n.students-details-panel[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.students-details-panel__section[_ngcontent-%COMP%]    + .students-details-panel__section[_ngcontent-%COMP%] {\n  border-top: 1px solid #eef2f7;\n  padding-top: 1.25rem;\n}\n\n.students-details-mini-header[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  position: relative;\n  padding-bottom: 0.55rem;\n}\n\n.students-details-mini-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 64px;\n  height: 3px;\n  border-radius: 999px;\n  background: linear-gradient(90deg, rgba(79, 70, 229, 0.95), rgba(6, 182, 212, 0.9));\n}\n\n.students-details-contact-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.students-details-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.85rem 0.95rem;\n  border-radius: 16px;\n  background: #f8fbff;\n  border: 1px solid #e8edf7;\n  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.students-details-contact-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #c7d2fe;\n  box-shadow: 0 10px 18px rgba(79, 70, 229, 0.06);\n}\n\n.students-details-contact-item__label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n  font-weight: 700;\n  min-width: 88px;\n}\n\n.students-details-contact-item__value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0f172a;\n  text-align: right;\n  word-break: break-word;\n  flex: 1;\n}\n\n.students-details-contact-item__value--pill[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.students-details-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\n.students-details-summary__item[_ngcontent-%COMP%] {\n  padding: 0.95rem;\n  border-radius: 16px;\n  background: linear-gradient(180deg, #f8fbff, #ffffff);\n  border: 1px solid #e8edf7;\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.04);\n}\n\n.students-details-summary__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n  margin-bottom: 0.35rem;\n  font-weight: 700;\n}\n\n.students-details-course-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n\n.students-details-course-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 18px;\n  background: linear-gradient(180deg, #fff, #f8fbff);\n  border: 1px solid #e8edf7;\n  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n  animation: _ngcontent-%COMP%_revealRow 0.45s ease both;\n  position: relative;\n}\n\n.students-details-course-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 14px;\n  bottom: 14px;\n  width: 4px;\n  border-radius: 0 999px 999px 0;\n  background: linear-gradient(180deg, rgba(79, 70, 229, 0.9), rgba(6, 182, 212, 0.8));\n  opacity: 0.42;\n  transition: opacity 0.2s ease;\n}\n\n.students-details-course-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.04s;\n}\n\n.students-details-course-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.08s;\n}\n\n.students-details-course-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.12s;\n}\n\n.students-details-course-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.students-details-course-rank[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 24px;\n  padding: 0 0.55rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: #4338ca;\n  background: rgba(99, 102, 241, 0.11);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  margin-bottom: 0.45rem;\n}\n\n.students-details-course-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #c7d2fe;\n  box-shadow: 0 16px 28px rgba(99, 102, 241, 0.08);\n}\n.students-details-course-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.85;\n}\n\n.students-details-course-score[_ngcontent-%COMP%] {\n  min-width: 64px;\n  height: 40px;\n  padding: 0 0.75rem;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  color: #4338ca;\n  background: rgba(99, 102, 241, 0.1);\n  box-shadow: inset 0 0 0 1px rgba(99, 102, 241, 0.1);\n}\n\n.students-details-progress[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 999px;\n  background: #e9eef7;\n  overflow: hidden;\n}\n\n.students-details-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.students-details-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.16) 0 8px, rgba(255, 255, 255, 0.02) 8px 16px);\n  animation: _ngcontent-%COMP%_progressShift 1.4s linear infinite;\n}\n\n.students-details-course-empty[_ngcontent-%COMP%], \n.students-details-empty[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  background: linear-gradient(180deg, #ffffff, #f8fbff);\n  border: 1px dashed #d7deea;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);\n}\n\n.students-details-course-empty[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n  color: #64748b;\n}\n\n.students-details-course-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 52px;\n  height: 52px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 18px;\n  margin-bottom: 0.75rem;\n  font-size: 22px;\n  color: #3b82f6;\n  background: rgba(59, 130, 246, 0.08);\n}\n\n.students-details-timeline[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n  position: relative;\n}\n\n.students-details-timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 21px;\n  top: 16px;\n  bottom: 16px;\n  width: 2px;\n  background: linear-gradient(180deg, rgba(59, 130, 246, 0.25), rgba(16, 185, 129, 0.18), rgba(236, 72, 153, 0.2));\n  pointer-events: none;\n}\n\n.students-details-timeline__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n  padding: 0.95rem 1rem;\n  border-radius: 16px;\n  background: #f8fbff;\n  border: 1px solid #e8edf7;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  animation: _ngcontent-%COMP%_revealRow 0.45s ease both;\n}\n\n.students-details-timeline__item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.05s;\n}\n\n.students-details-timeline__item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.1s;\n}\n\n.students-details-timeline__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 20px rgba(15, 23, 42, 0.05);\n}\n\n.students-details-timeline__dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  margin-top: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.9);\n  position: relative;\n  z-index: 1;\n}\n\n.students-details-timeline__dot--blue[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n\n.students-details-timeline__dot--green[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n\n.students-details-timeline__dot--pink[_ngcontent-%COMP%] {\n  background: #ec4899;\n}\n\n.students-details-loading[_ngcontent-%COMP%], \n.students-details-empty[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 2rem;\n  border: 1px solid #e8edf7;\n  background: linear-gradient(180deg, #ffffff, #f8fbff);\n  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.06);\n}\n\n.students-details-loading__spinner[_ngcontent-%COMP%] {\n  width: 2.8rem;\n  height: 2.8rem;\n}\n\n.students-details-empty__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.08);\n  box-shadow: 0 10px 22px rgba(239, 68, 68, 0.08);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9edf5;\n  background: linear-gradient(180deg, #fbfcff, #f8fafc) !important;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 18px rgba(67, 56, 202, 0.24);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 14px 24px rgba(67, 56, 202, 0.28);\n}\n\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #cbd5e1;\n  color: #334155;\n}\n\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n\n.progress[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  background: #edf1f7;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  transition: width 0.6s ease;\n}\n\n.badge.bg-success-transparent[_ngcontent-%COMP%], \n.badge.bg-info-transparent[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n}\n\n.badge.bg-success-transparent[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.25);\n}\n\n.badge.bg-info-transparent[_ngcontent-%COMP%] {\n  border-color: rgba(59, 130, 246, 0.2);\n}\n\n@media (min-width: 992px) {\n  .students-details[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%], \n   .students-details[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 96px;\n  }\n}\n@media (max-width: 991.98px) {\n  .students-details-hero[_ngcontent-%COMP%] {\n    padding: 1.1rem;\n  }\n  .students-details-hero-insights[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .students-details-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 575.98px) {\n  .students-details[_ngcontent-%COMP%] {\n    padding-inline: 0;\n  }\n  .students-details-hero[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .students-details-title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .students-details-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .students-details-hero-insights[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .students-details-course-item[_ngcontent-%COMP%]::before {\n    top: 10px;\n    bottom: 10px;\n  }\n  .students-details-contact-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .students-details-contact-item__value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .students-details-contact-item__value--pill[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .students-details[_ngcontent-%COMP%], \n   .students-details[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInPage {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_avatarPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatGlow {\n  0%, 100% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, -8px, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_revealRow {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_revealUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_ringOrbit {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_heroShine {\n  0%, 72%, 100% {\n    transform: translateX(-120%);\n  }\n  85% {\n    transform: translateX(120%);\n  }\n}\n@keyframes _ngcontent-%COMP%_progressShift {\n  from {\n    transform: translateX(-16px);\n  }\n  to {\n    transform: translateX(16px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9zdHVkZW50cy1kZXRhaWxzL3N0dWRlbnRzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtQQUNDO0FBQUY7O0FBS0E7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBRkQ7O0FBS0E7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxnRkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBQUZEOztBQUtBO0VBQ0MsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRkFBQTtBQUZEO0FBSUM7RUFDQyxxQkFBQTtFQUNBLDhDQUFBO0FBRkY7O0FBTUE7O0VBRUMsa0JBQUE7RUFDQSxVQUFBO0FBSEQ7O0FBTUE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUZBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FBSEQ7O0FBTUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxtR0FBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7QUFIRDs7QUFNQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7QUFIRDs7QUFNQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpRkFBQTtBQUhEOztBQU1BO0VBQ0MsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdGQUFBO0VBQ0EscUJBQUE7QUFIRDs7QUFNQTs7RUFFQyxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRDs7QUFNQTtFQUNDLDhDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRDs7QUFNQTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUhEOztBQU1BO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0ZBQUE7RUFDQSxnREFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFIRDs7QUFNQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBSEQ7O0FBTUE7RUFDQyxjQUFBO0FBSEQ7O0FBTUE7O0VBRUMseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhEOztBQU1BO0VBQ0MscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUhEOztBQU1BO0VBQ0MsZ0JBQUE7QUFIRDs7QUFNQTtFQUNDLGFBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUFIRDs7QUFNQTtFQUNDLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0ZBQUE7QUFIRDs7QUFNQTtFQUNDLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtBQUhEOztBQU1BO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRDs7QUFNQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhEOztBQU1BO0VBQ0Msb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7QUFIRDs7QUFNQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQ0FBQTtBQUhEOztBQU1BO0VBQStFLHNCQUFBO0FBRi9FOztBQUdBO0VBQStFLHNCQUFBO0FBQy9FOztBQUFBO0VBQStFLHNCQUFBO0FBSS9FOztBQUZBO0VBQ0MsMkJBQUE7RUFDQSw4Q0FBQTtBQUtEOztBQUZBO0VBQ0MsZUFBQTtBQUtEOztBQUZBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBQUtEOztBQUZBO0VBQXVDLHFEQUFBO0FBTXZDOztBQUxBO0VBQXdDLHFEQUFBO0FBU3hDOztBQVJBO0VBQXVDLHFEQUFBO0FBWXZDOztBQVhBO0VBQXVDLHFEQUFBO0FBZXZDOztBQWJBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFnQkQ7O0FBYkE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBZ0JEOztBQWJBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBZ0JEOztBQWJBO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQWdCRDs7QUFiQTtFQUNDLHNEQUFBO0VBQ0EsMERBQUE7QUFnQkQ7O0FBYkE7RUFDQyxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtBQWdCRDs7QUFiQTtFQUFzRCxzQkFBQTtBQWlCdEQ7O0FBaEJBO0VBQWtFLHNCQUFBO0FBb0JsRTs7QUFuQkE7RUFBaUUsc0JBQUE7QUF1QmpFOztBQXJCQTtFQUNDLGdCQUFBO0FBd0JEOztBQXJCQTtFQUNDLDZCQUFBO0VBQ0Esb0JBQUE7QUF3QkQ7O0FBckJBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBd0JEOztBQXJCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1GQUFBO0FBd0JEOztBQXJCQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FBd0JEOztBQXJCQTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkVBQUE7QUF3QkQ7O0FBckJBO0VBQ0MsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO0FBd0JEOztBQXJCQTtFQUNDLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF3QkQ7O0FBckJBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUF3QkQ7O0FBckJBO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0FBd0JEOztBQXJCQTtFQUNDLGFBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUF3QkQ7O0FBckJBO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtBQXdCRDs7QUFyQkE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUF3QkQ7O0FBckJBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7QUF3QkQ7O0FBckJBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtFQUNBLGdGQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQXdCRDs7QUFyQkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtRkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQXdCRDs7QUFyQkE7RUFBNkMsc0JBQUE7QUF5QjdDOztBQXhCQTtFQUE2QyxzQkFBQTtBQTRCN0M7O0FBM0JBO0VBQTZDLHNCQUFBO0FBK0I3Qzs7QUE3QkE7RUFDQyxZQUFBO0FBZ0NEOztBQTdCQTtFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtBQWdDRDs7QUE3QkE7RUFDQywyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUFnQ0Q7QUE5QkM7RUFDQyxhQUFBO0FBZ0NGOztBQTVCQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsbURBQUE7QUErQkQ7O0FBNUJBO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQStCRDs7QUE1QkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBK0JEOztBQTVCQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpSEFBQTtFQUNBLDZDQUFBO0FBK0JEOztBQTVCQTs7RUFFQyxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7RUFDQSxrREFBQTtBQStCRDs7QUE1QkE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBK0JEOztBQTVCQTtFQUNDLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUErQkQ7O0FBNUJBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQStCRDs7QUE1QkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0hBQUE7RUFDQSxvQkFBQTtBQStCRDs7QUE1QkE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxREFBQTtFQUNBLG9DQUFBO0FBK0JEOztBQTVCQTtFQUFnRCxzQkFBQTtBQWdDaEQ7O0FBL0JBO0VBQWdELHFCQUFBO0FBbUNoRDs7QUFqQ0E7RUFDQywyQkFBQTtFQUNBLDhDQUFBO0FBb0NEOztBQWpDQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBb0NEOztBQWpDQTtFQUF3QyxtQkFBQTtBQXFDeEM7O0FBcENBO0VBQXlDLG1CQUFBO0FBd0N6Qzs7QUF2Q0E7RUFBd0MsbUJBQUE7QUEyQ3hDOztBQXpDQTs7RUFFQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFEQUFBO0VBQ0EsOENBQUE7QUE0Q0Q7O0FBekNBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QUE0Q0Q7O0FBekNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQ0FBQTtBQTRDRDs7QUF6Q0E7RUFDQyxnQ0FBQTtFQUNBLGdFQUFBO0FBNENEOztBQXpDQTtFQUNDLDhDQUFBO0VBQ0EscURBQUE7QUE0Q0Q7O0FBekNBO0VBQ0MsMkJBQUE7RUFDQSwrQ0FBQTtBQTRDRDs7QUF6Q0E7RUFDQyxxQkFBQTtFQUNBLGNBQUE7QUE0Q0Q7O0FBekNBO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQTRDRDs7QUF6Q0E7RUFDQyxvQkFBQTtFQUNBLG1CQUFBO0FBNENEOztBQXpDQTtFQUNDLG9CQUFBO0VBQ0EsMkJBQUE7QUE0Q0Q7O0FBekNBOztFQUVDLDZCQUFBO0FBNENEOztBQXpDQTtFQUNDLHFDQUFBO0FBNENEOztBQXpDQTtFQUNDLHFDQUFBO0FBNENEOztBQXpDQTtFQUNDOztJQUVDLGdCQUFBO0lBQ0EsU0FBQTtFQTRDQTtBQUNGO0FBekNBO0VBQ0M7SUFDQyxlQUFBO0VBMkNBO0VBeENEO0lBQ0MsZ0RBQUE7RUEwQ0E7RUF2Q0Q7SUFDQyxnREFBQTtFQXlDQTtBQUNGO0FBdENBO0VBQ0M7SUFDQyxpQkFBQTtFQXdDQTtFQXJDRDtJQUNDLGFBQUE7RUF1Q0E7RUFwQ0Q7SUFDQyxrQkFBQTtFQXNDQTtFQW5DRDtJQUNDLDBCQUFBO0VBcUNBO0VBbENEO0lBQ0MsMEJBQUE7RUFvQ0E7RUFqQ0Q7SUFDQyxTQUFBO0lBQ0EsWUFBQTtFQW1DQTtFQWhDRDtJQUNDLHNCQUFBO0VBa0NBO0VBL0JEO0lBQ0MsZ0JBQUE7RUFpQ0E7RUE5QkQ7SUFDQywyQkFBQTtFQWdDQTtBQUNGO0FBN0JBO0VBQ0M7O0lBRUMsMEJBQUE7SUFDQSwyQkFBQTtFQStCQTtBQUNGO0FBNUJBO0VBQ0M7SUFBTyxVQUFBO0lBQVksMEJBQUE7RUFnQ2xCO0VBL0JEO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBbUNoQjtBQUNGO0FBakNBO0VBQ0M7SUFBVyxtQkFBQTtFQW9DVjtFQW5DRDtJQUFNLHNCQUFBO0VBc0NMO0FBQ0Y7QUFwQ0E7RUFDQztJQUFXLCtCQUFBO0VBdUNWO0VBdENEO0lBQU0sa0NBQUE7RUF5Q0w7QUFDRjtBQXZDQTtFQUNDO0lBQU8sVUFBQTtJQUFZLDBCQUFBO0VBMkNsQjtFQTFDRDtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQThDaEI7QUFDRjtBQTVDQTtFQUNDO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBZ0RsQjtFQS9DRDtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQW1EaEI7QUFDRjtBQWpEQTtFQUNDO0lBQUssdUJBQUE7RUFvREo7RUFuREQ7SUFBTyx5QkFBQTtFQXNETjtBQUNGO0FBcERBO0VBQ0M7SUFBZ0IsNEJBQUE7RUF1RGY7RUF0REQ7SUFBTSwyQkFBQTtFQXlETDtBQUNGO0FBdkRBO0VBQ0M7SUFBTyw0QkFBQTtFQTBETjtFQXpERDtJQUFLLDJCQUFBO0VBNERKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzIHtcclxuXHQtLXNkLXByaW1hcnk6ICM0ZjQ2ZTU7XHJcblx0LS1zZC1jeWFuOiAjMDZiNmQ0O1xyXG5cdC0tc2QtaW5rOiAjMGYxNzJhO1xyXG5cdC0tc2Qtc29mdDogIzY0NzQ4YjtcclxuXHQtLXNkLWNhcmQtYm9yZGVyOiAjZTZlYWYyO1xyXG5cdC0tc2QtY2FyZC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAuMDYpO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDAgMTZweCA4cHg7XHJcblx0YW5pbWF0aW9uOiBmYWRlSW5QYWdlIC40NXMgZWFzZTtcclxuXHRiYWNrZ3JvdW5kOlxyXG5cdFx0cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMiUgOCUsIHJnYmEoOTksIDEwMiwgMjQxLCAuMDgpLCB0cmFuc3BhcmVudCAyNCUpLFxyXG5cdFx0cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4OCUgMTIlLCByZ2JhKDYsIDE4MiwgMjEyLCAuMDgpLCB0cmFuc3BhcmVudCAyMCUpLFxyXG5cdFx0bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNDgsIDI1MCwgMjUyLCAuNjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtc2hlbGwge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdG1heC13aWR0aDogMTI4MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlsczo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0aW5zZXQ6IDA7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMTQ4LCAxNjMsIDE4NCwgLjEwKSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XHJcblx0b3BhY2l0eTogLjMyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tc2QtY2FyZC1ib3JkZXIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0Ym94LXNoYWRvdzogdmFyKC0tc2QtY2FyZC1zaGFkb3cpO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgZWFzZSwgYm94LXNoYWRvdyAuMjVzIGVhc2UsIGJvcmRlci1jb2xvciAuMjVzIGVhc2U7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjYzdkMmZlO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAxNnB4IDI4cHggcmdiYSg3OSwgNzAsIDIyOSwgLjEwKTtcclxuXHR9XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzIC5jYXJkLFxyXG4uc3R1ZGVudHMtZGV0YWlscy1oZXJvIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtaGVybyB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGJlNGZmO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsLjk4KSwgcmdiYSgyNDgsMjUwLDI1NSwuOTgpKTtcclxuXHRwYWRkaW5nOiAxLjRyZW07XHJcblx0Ym94LXNoYWRvdzogMCAxOHB4IDQycHggcmdiYSg3OSwgNzAsIDIyOSwgLjA5KTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDEuMTUpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1oZXJvOjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGluc2V0OiAwO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDI1NSwyNTUsMjU1LC4zNikgNDUlLCB0cmFuc3BhcmVudCA3MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XHJcblx0YW5pbWF0aW9uOiBoZXJvU2hpbmUgNS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtaGVyb19fZ2xvdyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRmaWx0ZXI6IGJsdXIoMnB4KTtcclxuXHRhbmltYXRpb246IGZsb2F0R2xvdyA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtaGVyb19fZ2xvdy0tb25lIHtcclxuXHR0b3A6IC00MnB4O1xyXG5cdHJpZ2h0OiAxOHB4O1xyXG5cdHdpZHRoOiAxNjBweDtcclxuXHRoZWlnaHQ6IDE2MHB4O1xyXG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoOTksIDEwMiwgMjQxLCAuMTgpIDAlLCB0cmFuc3BhcmVudCA2OCUpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1oZXJvX19nbG93LS10d28ge1xyXG5cdGJvdHRvbTogLTM2cHg7XHJcblx0cmlnaHQ6IDI4JTtcclxuXHR3aWR0aDogMTIwcHg7XHJcblx0aGVpZ2h0OiAxMjBweDtcclxuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYsIDE4MiwgMjEyLCAuMTYpIDAlLCB0cmFuc3BhcmVudCA2OCUpO1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtYmFjayxcclxuLnN0dWRlbnRzLWRldGFpbHMtYWN0aW9uIHtcclxuXHRib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAuMDFlbTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtYmFjayB7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgxNSwgMjMsIDQyLCAuMDUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlOGVkZjc7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtYmFjazpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogI2Y4ZmJmZjtcclxuXHRib3JkZXItY29sb3I6ICNjN2QyZmU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1hdmF0YXItd3JhcCB7XHJcblx0cGFkZGluZzogNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsLjE2KSwgcmdiYSg2LDE4MiwyMTIsLjE0KSk7XHJcblx0Ym94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4xMik7XHJcblx0YW5pbWF0aW9uOiBhdmF0YXJQdWxzZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWF2YXRhci13cmFwOjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGluc2V0OiAtM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRib3JkZXI6IDFweCBkYXNoZWQgcmdiYSg3OSwgNzAsIDIyOSwgLjMyKTtcclxuXHRvcGFjaXR5OiAuNztcclxuXHRhbmltYXRpb246IHJpbmdPcmJpdCAxMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1hdmF0YXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1raWNrZXIsXHJcbi5zdHVkZW50cy1kZXRhaWxzLW1pbmktaGVhZGVyX19raWNrZXIge1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4xMmVtO1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjNjQ3NDhiO1xyXG5cdG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAydncsIDIuMXJlbSk7XHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRsZXR0ZXItc3BhY2luZzogLS4wMmVtO1xyXG5cdGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1oZWFkbGluZSB7XHJcblx0bWF4LXdpZHRoOiA3NjBweDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtaGVyby1pbnNpZ2h0cyB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XHJcblx0Z2FwOiAuNjVyZW07XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWhlcm8taW5zaWdodCB7XHJcblx0cGFkZGluZzogLjdyZW0gLjhyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LC45NSksIHJnYmEoMjQ4LDI1MCwyNTUsLjk1KSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U1ZWJmYjtcclxuXHRib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMTUsIDIzLCA0MiwgLjA1KTtcclxuXHRtaW4td2lkdGg6IDA7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yMnMgZWFzZSwgYm94LXNoYWRvdyAuMjJzIGVhc2UsIGJvcmRlci1jb2xvciAuMjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWhlcm8taW5zaWdodDpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG5cdGJvcmRlci1jb2xvcjogI2M3ZDJmZTtcclxuXHRib3gtc2hhZG93OiAwIDE0cHggMjBweCByZ2JhKDc5LCA3MCwgMjI5LCAuMDgpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1oZXJvLWluc2lnaHRfX2xhYmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IC43MnJlbTtcclxuXHRsaW5lLWhlaWdodDogMS4yO1xyXG5cdGNvbG9yOiAjNjQ3NDhiO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4wOGVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1oZXJvLWluc2lnaHRfX3ZhbHVlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IC44OHJlbTtcclxuXHRsaW5lLWhlaWdodDogMS4yO1xyXG5cdGNvbG9yOiAjMGYxNzJhO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtYmFkZ2Uge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdHBhZGRpbmc6IC40NXJlbSAuNzVyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMTUsIDIzLCA0MiwgLjA0KTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTZlYWYyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cyBlYXNlLCBib3gtc2hhZG93IC4yNXMgZWFzZTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZmJmY2ZmKTtcclxuXHRhbmltYXRpb246IHJldmVhbFVwIC40NXMgZWFzZSBib3RoO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscyAucm93LmctMyA+IC5jb2wtbWQtMzpudGgtY2hpbGQoMikgLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljIHsgYW5pbWF0aW9uLWRlbGF5OiAuMDRzOyB9XHJcbi5zdHVkZW50cy1kZXRhaWxzIC5yb3cuZy0zID4gLmNvbC1tZC0zOm50aC1jaGlsZCgzKSAuc3R1ZGVudHMtZGV0YWlscy1tZXRyaWMgeyBhbmltYXRpb24tZGVsYXk6IC4wOHM7IH1cclxuLnN0dWRlbnRzLWRldGFpbHMgLnJvdy5nLTMgPiAuY29sLW1kLTM6bnRoLWNoaWxkKDQpIC5zdHVkZW50cy1kZXRhaWxzLW1ldHJpYyB7IGFuaW1hdGlvbi1kZWxheTogLjEyczsgfVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljOmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcblx0Ym94LXNoYWRvdzogMCAxNnB4IDI4cHggcmdiYSg3OSwgNzAsIDIyOSwgLjEwKTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljIC5jYXJkLWJvZHkge1xyXG5cdHBhZGRpbmc6IDEuMXJlbTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljX19pY29uIHtcclxuXHR3aWR0aDogNDJweDtcclxuXHRoZWlnaHQ6IDQycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDE1LCAyMywgNDIsIC4xMik7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLW1ldHJpY19faWNvbi0tYmx1ZSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzYjgyZjYsICM2MzY2ZjEpOyB9XHJcbi5zdHVkZW50cy1kZXRhaWxzLW1ldHJpY19faWNvbi0tZ3JlZW4geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMjJjNTVlKTsgfVxyXG4uc3R1ZGVudHMtZGV0YWlscy1tZXRyaWNfX2ljb24tLWN5YW4geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDZiNmQ0LCAjMGVhNWU5KTsgfVxyXG4uc3R1ZGVudHMtZGV0YWlscy1tZXRyaWNfX2ljb24tLXBpbmsgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWM0ODk5LCAjZjk3MzE2KTsgfVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljX19sYWJlbCB7XHJcblx0Zm9udC1zaXplOiAuODJyZW07XHJcblx0Y29sb3I6ICM2NDc0OGI7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljX192YWx1ZSB7XHJcblx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRjb2xvcjogIzBmMTcyYTtcclxuXHRsZXR0ZXItc3BhY2luZzogLS4wMmVtO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1tZXRyaWNfX3ZhbHVlLS1zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1tZXRyaWMtcHJvZ3Jlc3Mge1xyXG5cdGhlaWdodDogNnB4O1xyXG5cdGJhY2tncm91bmQ6ICNlN2VkZjk7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWV0cmljLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xyXG5cdHRyYW5zaXRpb246IHdpZHRoIC42NXMgY3ViaWMtYmV6aWVyKC4yLC43LC4yLDEpO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRmNDZlNSwgIzA2YjZkNCk7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLXBhbmVsIHtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYsICNmYmZjZmYpO1xyXG5cdGJvcmRlci1jb2xvcjogI2U4ZWRmNztcclxuXHRhbmltYXRpb246IHJldmVhbFVwIC40NXMgZWFzZSBib3RoO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscyAuY29sLXhsLTQgLnN0dWRlbnRzLWRldGFpbHMtcGFuZWwgeyBhbmltYXRpb24tZGVsYXk6IC4wNnM7IH1cclxuLnN0dWRlbnRzLWRldGFpbHMgLmNvbC14bC04IC5zdHVkZW50cy1kZXRhaWxzLXBhbmVsOmZpcnN0LWNoaWxkIHsgYW5pbWF0aW9uLWRlbGF5OiAuMTJzOyB9XHJcbi5zdHVkZW50cy1kZXRhaWxzIC5jb2wteGwtOCAuc3R1ZGVudHMtZGV0YWlscy1wYW5lbDpsYXN0LWNoaWxkIHsgYW5pbWF0aW9uLWRlbGF5OiAuMThzOyB9XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1wYW5lbCAuY2FyZC1ib2R5IHtcclxuXHRwYWRkaW5nOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1wYW5lbF9fc2VjdGlvbiArIC5zdHVkZW50cy1kZXRhaWxzLXBhbmVsX19zZWN0aW9uIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2VlZjJmNztcclxuXHRwYWRkaW5nLXRvcDogMS4yNXJlbTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWluaS1oZWFkZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IC43NXJlbTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZy1ib3R0b206IC41NXJlbTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbWluaS1oZWFkZXI6OmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IDA7XHJcblx0d2lkdGg6IDY0cHg7XHJcblx0aGVpZ2h0OiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDc5LDcwLDIyOSwuOTUpLCByZ2JhKDYsMTgyLDIxMiwuOSkpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1jb250YWN0LWxpc3Qge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z2FwOiAuNzVyZW07XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvbnRhY3QtaXRlbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0Z2FwOiAxcmVtO1xyXG5cdHBhZGRpbmc6IC44NXJlbSAuOTVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjhmYmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlOGVkZjc7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCBib3JkZXItY29sb3IgLjJzIGVhc2UsIGJveC1zaGFkb3cgLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvbnRhY3QtaXRlbTpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG5cdGJvcmRlci1jb2xvcjogI2M3ZDJmZTtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMThweCByZ2JhKDc5LCA3MCwgMjI5LCAuMDYpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1jb250YWN0LWl0ZW1fX2xhYmVsIHtcclxuXHRmb250LXNpemU6IC44MnJlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAuMDhlbTtcclxuXHRjb2xvcjogIzY0NzQ4YjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdG1pbi13aWR0aDogODhweDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtY29udGFjdC1pdGVtX192YWx1ZSB7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRjb2xvcjogIzBmMTcyYTtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvbnRhY3QtaXRlbV9fdmFsdWUtLXBpbGwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtc3VtbWFyeSB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XHJcblx0Z2FwOiAuNzVyZW07XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLXN1bW1hcnlfX2l0ZW0ge1xyXG5cdHBhZGRpbmc6IC45NXJlbTtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGZiZmYsICNmZmZmZmYpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlOGVkZjc7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgxNSwgMjMsIDQyLCAuMDQpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1zdW1tYXJ5X19sYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAuMDhlbTtcclxuXHRjb2xvcjogIzY0NzQ4YjtcclxuXHRtYXJnaW4tYm90dG9tOiAuMzVyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtY291cnNlLXN0YWNrIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdhcDogLjlyZW07XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvdXJzZS1pdGVtIHtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiwgI2Y4ZmJmZik7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U4ZWRmNztcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cyBlYXNlLCBib3gtc2hhZG93IC4yNXMgZWFzZSwgYm9yZGVyLWNvbG9yIC4yNXMgZWFzZTtcclxuXHRhbmltYXRpb246IHJldmVhbFJvdyAuNDVzIGVhc2UgYm90aDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvdXJzZS1pdGVtOjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMTRweDtcclxuXHRib3R0b206IDE0cHg7XHJcblx0d2lkdGg6IDRweDtcclxuXHRib3JkZXItcmFkaXVzOiAwIDk5OXB4IDk5OXB4IDA7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg3OSw3MCwyMjksLjkpLCByZ2JhKDYsMTgyLDIxMiwuOCkpO1xyXG5cdG9wYWNpdHk6IC40MjtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1jb3Vyc2UtaXRlbTpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC4wNHM7IH1cclxuLnN0dWRlbnRzLWRldGFpbHMtY291cnNlLWl0ZW06bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAuMDhzOyB9XHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvdXJzZS1pdGVtOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogLjEyczsgfVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtY291cnNlLW1haW4ge1xyXG5cdG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtY291cnNlLXJhbmsge1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG5cdHBhZGRpbmc6IDAgLjU1cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGZvbnQtc2l6ZTogLjcycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xyXG5cdGNvbG9yOiAjNDMzOGNhO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAuMTEpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAuMik7XHJcblx0bWFyZ2luLWJvdHRvbTogLjQ1cmVtO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1jb3Vyc2UtaXRlbTpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG5cdGJvcmRlci1jb2xvcjogI2M3ZDJmZTtcclxuXHRib3gtc2hhZG93OiAwIDE2cHggMjhweCByZ2JhKDk5LCAxMDIsIDI0MSwgLjA4KTtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdG9wYWNpdHk6IC44NTtcclxuXHR9XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvdXJzZS1zY29yZSB7XHJcblx0bWluLXdpZHRoOiA2NHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRwYWRkaW5nOiAwIC43NXJlbTtcclxuXHRib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0Y29sb3I6ICM0MzM4Y2E7XHJcblx0YmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIC4xMCk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoOTksIDEwMiwgMjQxLCAuMTApO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1wcm9ncmVzcyB7XHJcblx0aGVpZ2h0OiA4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0YmFja2dyb3VuZDogI2U5ZWVmNztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhcjo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRpbnNldDogMDtcclxuXHRiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LC4xNikgMCA4cHgsIHJnYmEoMjU1LDI1NSwyNTUsLjAyKSA4cHggMTZweCk7XHJcblx0YW5pbWF0aW9uOiBwcm9ncmVzc1NoaWZ0IDEuNHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy1jb3Vyc2UtZW1wdHksXHJcbi5zdHVkZW50cy1kZXRhaWxzLWVtcHR5IHtcclxuXHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYsICNmOGZiZmYpO1xyXG5cdGJvcmRlcjogMXB4IGRhc2hlZCAjZDdkZWVhO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLWNvdXJzZS1lbXB0eSB7XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtY291cnNlLWVtcHR5IGkge1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdHdpZHRoOiA1MnB4O1xyXG5cdGhlaWdodDogNTJweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogLjc1cmVtO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRjb2xvcjogIzNiODJmNjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgLjA4KTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtdGltZWxpbmUge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z2FwOiAuOTVyZW07XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy10aW1lbGluZTo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjFweDtcclxuXHR0b3A6IDE2cHg7XHJcblx0Ym90dG9tOiAxNnB4O1xyXG5cdHdpZHRoOiAycHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg1OSwxMzAsMjQ2LC4yNSksIHJnYmEoMTYsMTg1LDEyOSwuMTgpLCByZ2JhKDIzNiw3MiwxNTMsLjIpKTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtdGltZWxpbmVfX2l0ZW0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0Z2FwOiAuODVyZW07XHJcblx0cGFkZGluZzogLjk1cmVtIDFyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjhmYmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlOGVkZjc7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCBib3gtc2hhZG93IC4ycyBlYXNlO1xyXG5cdGFuaW1hdGlvbjogcmV2ZWFsUm93IC40NXMgZWFzZSBib3RoO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy10aW1lbGluZV9faXRlbTpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC4wNXM7IH1cclxuLnN0dWRlbnRzLWRldGFpbHMtdGltZWxpbmVfX2l0ZW06bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAuMXM7IH1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLXRpbWVsaW5lX19pdGVtOmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcblx0Ym94LXNoYWRvdzogMCAxMnB4IDIwcHggcmdiYSgxNSwgMjMsIDQyLCAuMDUpO1xyXG59XHJcblxyXG4uc3R1ZGVudHMtZGV0YWlscy10aW1lbGluZV9fZG90IHtcclxuXHR3aWR0aDogMTJweDtcclxuXHRoZWlnaHQ6IDEycHg7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRmbGV4LXNocmluazogMDtcclxuXHRib3gtc2hhZG93OiAwIDAgMCA2cHggcmdiYSgyNTUsMjU1LDI1NSwuOSk7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zdHVkZW50cy1kZXRhaWxzLXRpbWVsaW5lX19kb3QtLWJsdWUgeyBiYWNrZ3JvdW5kOiAjM2I4MmY2OyB9XHJcbi5zdHVkZW50cy1kZXRhaWxzLXRpbWVsaW5lX19kb3QtLWdyZWVuIHsgYmFja2dyb3VuZDogIzEwYjk4MTsgfVxyXG4uc3R1ZGVudHMtZGV0YWlscy10aW1lbGluZV9fZG90LS1waW5rIHsgYmFja2dyb3VuZDogI2VjNDg5OTsgfVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbG9hZGluZyxcclxuLnN0dWRlbnRzLWRldGFpbHMtZW1wdHkge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0cGFkZGluZzogMnJlbTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZThlZGY3O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYsICNmOGZiZmYpO1xyXG5cdGJveC1zaGFkb3c6IDAgMTZweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgLjA2KTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtbG9hZGluZ19fc3Bpbm5lciB7XHJcblx0d2lkdGg6IDIuOHJlbTtcclxuXHRoZWlnaHQ6IDIuOHJlbTtcclxufVxyXG5cclxuLnN0dWRlbnRzLWRldGFpbHMtZW1wdHlfX2ljb24ge1xyXG5cdHdpZHRoOiA3MnB4O1xyXG5cdGhlaWdodDogNzJweDtcclxuXHRib3JkZXItcmFkaXVzOiAyMnB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdGNvbG9yOiAjZWY0NDQ0O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIC4wOCk7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDIycHggcmdiYSgyMzksIDY4LCA2OCwgLjA4KTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWRmNTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJmY2ZmLCAjZjhmYWZjKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1wcmltYXJ5IHtcclxuXHRib3gtc2hhZG93OiAwIDhweCAxOHB4IHJnYmEoNjcsIDU2LCAyMDIsIC4yNCk7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCBib3gtc2hhZG93IC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcblx0Ym94LXNoYWRvdzogMCAxNHB4IDI0cHggcmdiYSg2NywgNTYsIDIwMiwgLjI4KTtcclxufVxyXG5cclxuLmJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG5cdGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuXHRjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLmJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcblx0Ym9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGJhY2tncm91bmQ6ICNlZGYxZjc7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xyXG59XHJcblxyXG4uYmFkZ2UuYmctc3VjY2Vzcy10cmFuc3BhcmVudCxcclxuLmJhZGdlLmJnLWluZm8tdHJhbnNwYXJlbnQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYmFkZ2UuYmctc3VjY2Vzcy10cmFuc3BhcmVudCB7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDM0LCAxOTcsIDk0LCAuMjUpO1xyXG59XHJcblxyXG4uYmFkZ2UuYmctaW5mby10cmFuc3BhcmVudCB7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHQuc3R1ZGVudHMtZGV0YWlscyAuY29sLWxnLTQgPiAuY2FyZCxcclxuXHQuc3R1ZGVudHMtZGV0YWlscyAuY29sLXhsLTQgPiAuY2FyZCB7XHJcblx0XHRwb3NpdGlvbjogc3RpY2t5O1xyXG5cdFx0dG9wOiA5NnB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcblx0LnN0dWRlbnRzLWRldGFpbHMtaGVybyB7XHJcblx0XHRwYWRkaW5nOiAxLjFyZW07XHJcblx0fVxyXG5cclxuXHQuc3R1ZGVudHMtZGV0YWlscy1oZXJvLWluc2lnaHRzIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuXHR9XHJcblxyXG5cdC5zdHVkZW50cy1kZXRhaWxzLXN1bW1hcnkge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcblx0LnN0dWRlbnRzLWRldGFpbHMge1xyXG5cdFx0cGFkZGluZy1pbmxpbmU6IDA7XHJcblx0fVxyXG5cclxuXHQuc3R1ZGVudHMtZGV0YWlscy1oZXJvIHtcclxuXHRcdHBhZGRpbmc6IDFyZW07XHJcblx0fVxyXG5cclxuXHQuc3R1ZGVudHMtZGV0YWlscy10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDEuMzVyZW07XHJcblx0fVxyXG5cclxuXHQuc3R1ZGVudHMtZGV0YWlscy1zdW1tYXJ5IHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdH1cclxuXHJcblx0LnN0dWRlbnRzLWRldGFpbHMtaGVyby1pbnNpZ2h0cyB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHR9XHJcblxyXG5cdC5zdHVkZW50cy1kZXRhaWxzLWNvdXJzZS1pdGVtOjpiZWZvcmUge1xyXG5cdFx0dG9wOiAxMHB4O1xyXG5cdFx0Ym90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnN0dWRlbnRzLWRldGFpbHMtY29udGFjdC1pdGVtIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuc3R1ZGVudHMtZGV0YWlscy1jb250YWN0LWl0ZW1fX3ZhbHVlIHtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0fVxyXG5cclxuXHQuc3R1ZGVudHMtZGV0YWlscy1jb250YWN0LWl0ZW1fX3ZhbHVlLS1waWxsIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcblx0LnN0dWRlbnRzLWRldGFpbHMsXHJcblx0LnN0dWRlbnRzLWRldGFpbHMgKiB7XHJcblx0XHRhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluUGFnZSB7XHJcblx0ZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpOyB9XHJcblx0dG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhdmF0YXJQdWxzZSB7XHJcblx0MCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcblx0NTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0R2xvdyB7XHJcblx0MCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XHJcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtOHB4LCAwKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJldmVhbFJvdyB7XHJcblx0ZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpOyB9XHJcblx0dG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByZXZlYWxVcCB7XHJcblx0ZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfVxyXG5cdHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmluZ09yYml0IHtcclxuXHQwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcblx0MTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoZXJvU2hpbmUge1xyXG5cdDAlLCA3MiUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyMCUpOyB9XHJcblx0ODUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NTaGlmdCB7XHJcblx0ZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7IH1cclxuXHR0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return StudentsDetailsComponent;
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
//# sourceMappingURL=9784.js.map