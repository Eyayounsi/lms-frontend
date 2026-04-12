"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2356],{

/***/ 82356:
/*!**************************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-course/instructor-course.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorCourseComponent: () => (/* binding */ InstructorCourseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);












function InstructorCourseComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.successMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.successMessage, " ");
  }
}
function InstructorCourseComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.errorMessage, " ");
  }
}
function InstructorCourseComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Chargement de vos cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function InstructorCourseComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Aucun cours trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 39)(5, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Cr\u00E9ez votre premier cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx_r1.routes.instructorAddCourse);
  }
}
function InstructorCourseComponent_div_56_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function InstructorCourseComponent_div_56_div_1_ng_container_4_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onCourseImageError(course_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.getCourseImage(course_r6), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function InstructorCourseComponent_div_56_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background", ctx_r1.getPlaceholderGradient(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getCourseInitial(course_r6), " ");
  }
}
function InstructorCourseComponent_div_56_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Modification en attente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Rejet\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", course_r6.rejectionReason, " ");
  }
}
function InstructorCourseComponent_div_56_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Modification rejet\u00E9e :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", course_r6.editRejectionReason, " ");
  }
}
function InstructorCourseComponent_div_56_div_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_56_div_1_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.editCourse(course_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "En attente de validation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_56_div_1_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.submitForReview(course_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Soumettre pour validation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_56_div_1_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.archiveCourse(course_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Archiver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_56_div_1_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.unarchiveCourse(course_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "D\u00E9sarchiver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_56_div_1_button_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openDeleteModal(course_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function InstructorCourseComponent_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42)(1, "div", 7)(2, "div", 43)(3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, InstructorCourseComponent_div_56_div_1_ng_container_4_Template, 2, 1, "ng-container", 45)(5, InstructorCourseComponent_div_56_div_1_ng_template_5_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 46)(8, "div", 47)(9, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, InstructorCourseComponent_div_56_div_1_span_13_Template, 3, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, InstructorCourseComponent_div_56_div_1_div_27_Template, 5, 1, "div", 58)(28, InstructorCourseComponent_div_56_div_1_div_28_Template, 5, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 60)(30, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_56_div_1_Template_button_click_30_listener() {
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.viewDetails(course_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "D\u00E9tails ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, InstructorCourseComponent_div_56_div_1_button_33_Template, 3, 0, "button", 63)(34, InstructorCourseComponent_div_56_div_1_button_34_Template, 3, 0, "button", 64)(35, InstructorCourseComponent_div_56_div_1_button_35_Template, 3, 0, "button", 65)(36, InstructorCourseComponent_div_56_div_1_button_36_Template, 3, 0, "button", 66)(37, InstructorCourseComponent_div_56_div_1_button_37_Template, 3, 0, "button", 66)(38, InstructorCourseComponent_div_56_div_1_button_38_Template, 3, 0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const course_r6 = ctx.$implicit;
    const imagePlaceholder_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasValidImage(course_r6))("ngIfElse", imagePlaceholder_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](course_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.getStatusBadgeClass(ctx_r1.getCourseStatus(course_r6)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusLabel(ctx_r1.getCourseStatus(course_r6)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.shouldShowPendingEditBadge(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.getLevelLabel(course_r6.level), " \u00A0|\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](19, 19, course_r6.price, "1.2-2"), " \u00A0|\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", course_r6.enrollmentCount || 0, " inscrit(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", course_r6.sectionsCount || 0, " section(s) \u00A0|\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", course_r6.lessonsCount || 0, " le\u00E7on(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.getCourseStatus(course_r6) === "REJECTED" && course_r6.rejectionReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", course_r6.editRejectionReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.canEditCourse(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.showPendingValidationState(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.canSubmitForReview(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.canArchiveCourse(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.canUnarchiveCourse(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.canDeleteCourse(course_r6));
  }
}
function InstructorCourseComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, InstructorCourseComponent_div_56_div_1_Template, 39, 22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCourses);
  }
}
function InstructorCourseComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "div", 85)(3, "div", 86)(4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h5", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Supprimer le cours ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " \u00CAtes-vous s\u00FBr de vouloir supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Cette action est irr\u00E9versible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 91)(16, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_57_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closeDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function InstructorCourseComponent_div_57_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Oui, supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.courseToDelete == null ? null : ctx_r1.courseToDelete.title);
  }
}
let InstructorCourseComponent = /*#__PURE__*/(() => {
  class InstructorCourseComponent {
    courseService;
    router;
    route;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_6__.routes;
    failedImageKeys = new Set();
    backendBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl.replace(/\/api\/?$/, '');
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    courses = [];
    filteredCourses = [];
    loading = true;
    errorMessage = '';
    successMessage = '';
    searchTerm = '';
    selectedStatus = '';
    // Stats
    publishedCount = 0;
    pendingCount = 0;
    draftCount = 0;
    rejectedCount = 0;
    // Modal delete
    courseToDelete = null;
    showDeleteModal = false;
    constructor(courseService, router, route) {
      this.courseService = courseService;
      this.router = router;
      this.route = route;
    }
    ngOnInit() {
      this.loadCourses();
      // Recharger les données chaque fois qu'on revient à ce composant après la navigation
      this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event.url.includes('/instructor/instructor-course') || event.url.includes('/instructor/instructor-dashboard'))).subscribe(() => {
        // Petit délai pour s'assurer que les données sont à jour
        setTimeout(() => this.loadCourses(), 300);
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    loadCourses() {
      this.loading = true;
      this.courseService.getMyCourses().subscribe({
        next: data => {
          this.courses = data;
          this.calculateSectionAndLessonCounts();
          this.applyFilters();
          this.computeStats();
          this.loading = false;
        },
        error: err => {
          this.showError('Erreur lors du chargement des cours');
          this.loading = false;
          console.error(err);
        }
      });
    }
    /** Calculer les compteurs de sections et leçons basés sur les données réelles */
    calculateSectionAndLessonCounts() {
      this.courses.forEach(course => {
        // Compter les sections
        if (course.sections && Array.isArray(course.sections)) {
          course.sectionsCount = course.sections.length;
          // Compter aussi les leçons totales
          let totalLessons = 0;
          course.sections.forEach(section => {
            if (section.lessons && Array.isArray(section.lessons)) {
              totalLessons += section.lessons.length;
            }
          });
          course.lessonsCount = totalLessons;
        }
      });
    }
    computeStats() {
      this.publishedCount = this.courses.filter(c => this.getCourseStatus(c) === 'PUBLISHED').length;
      this.pendingCount = this.courses.filter(c => this.getCourseStatus(c) === 'PENDING_REVIEW').length;
      this.draftCount = this.courses.filter(c => this.getCourseStatus(c) === 'DRAFT').length;
      this.rejectedCount = this.courses.filter(c => this.getCourseStatus(c) === 'REJECTED').length;
    }
    applyFilters() {
      const selectedStatus = (this.selectedStatus || '').toString().trim().toUpperCase();
      const normalizedStatus = selectedStatus ? this.normalizeCourseStatus(selectedStatus) : '';
      this.filteredCourses = this.courses.filter(c => {
        const matchSearch = !this.searchTerm || (c.title || '').toLowerCase().includes(this.searchTerm.toLowerCase());
        let matchStatus = true;
        if (selectedStatus === 'MODIFICATION_PENDING') {
          matchStatus = !!c?.hasPendingEdit;
        } else if (normalizedStatus === 'PENDING_REVIEW') {
          matchStatus = this.getCourseStatus(c) === 'PENDING_REVIEW' || !!c?.hasPendingEdit;
        } else if (normalizedStatus) {
          matchStatus = this.getCourseStatus(c) === normalizedStatus;
        }
        return matchSearch && matchStatus;
      });
    }
    // Soumettre un cours DRAFT pour revue
    submitForReview(course) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        icon: 'question',
        title: 'Soumettre pour validation ?',
        html: `<b>${course.title}</b><br><br>
             Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
             tant qu'il est en attente de validation par l'administrateur.`,
        confirmButtonText: '<i class="isax isax-send me-1"></i> Confirmer',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#6366f1',
        cancelButtonColor: '#64748b',
        showCancelButton: true,
        timer: 10000,
        timerProgressBar: true,
        allowOutsideClick: false,
        reverseButtons: true
      }).then(result => {
        if (!result.isConfirmed) return;
        this.courseService.submitForReview(course.id).subscribe({
          next: () => {
            this.showSuccess('Cours soumis pour validation !');
            this.loadCourses();
          },
          error: err => this.showError(err.error?.message || 'Erreur lors de la soumission')
        });
      });
    }
    // Archiver un cours PUBLISHED
    archiveCourse(course) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        icon: 'question',
        title: 'Archiver ce cours ?',
        html: `<b>${course.title}</b><br><br>Il ne sera plus visible par les étudiants.`,
        confirmButtonText: '<i class="fa-solid fa-archive me-1"></i> Archiver',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#6c757d',
        showCancelButton: true,
        reverseButtons: true,
        focusCancel: true
      }).then(result => {
        if (!result.isConfirmed) return;
        this.courseService.archiveCourse(course.id).subscribe({
          next: () => {
            this.showSuccess('Cours archivé avec succès');
            this.loadCourses();
          },
          error: err => this.showError(err.error?.message || 'Erreur lors de l\'archivage')
        });
      });
    }
    // Désarchiver un cours ARCHIVED
    unarchiveCourse(course) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        icon: 'question',
        title: 'Désarchiver ce cours ?',
        html: `<b>${course.title}</b><br><br>Le cours redeviendra visible pour les étudiants.`,
        confirmButtonText: '<i class="fa-solid fa-box-open me-1"></i> Désarchiver',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#6c757d',
        showCancelButton: true,
        reverseButtons: true,
        focusCancel: true
      }).then(result => {
        if (!result.isConfirmed) return;
        this.courseService.unarchiveCourse(course.id).subscribe({
          next: () => {
            this.showSuccess('Cours désarchivé avec succès');
            this.loadCourses();
          },
          error: err => this.showError(err.error?.message || 'Erreur lors du désarchivage')
        });
      });
    }
    // Ouvrir modal de suppression
    openDeleteModal(course) {
      this.courseToDelete = course;
      this.showDeleteModal = true;
    }
    closeDeleteModal() {
      this.courseToDelete = null;
      this.showDeleteModal = false;
    }
    confirmDelete() {
      if (!this.courseToDelete) return;
      this.courseService.deleteCourse(this.courseToDelete.id).subscribe({
        next: () => {
          this.showSuccess('Cours supprimé');
          this.closeDeleteModal();
          this.loadCourses();
        },
        error: err => {
          this.showError(err.error?.message || 'Erreur lors de la suppression');
          this.closeDeleteModal();
        }
      });
    }
    // Naviguer vers l'édition du cours
    editCourse(courseId) {
      this.router.navigate([this.routes.instructorEditCourse, courseId]);
    }
    // Naviguer vers les détails du cours
    viewDetails(courseId) {
      this.router.navigate(['/instructor/instructor-course-detail'], {
        queryParams: {
          courseId
        }
      });
    }
    /** Recharger les données d'un seul cours et mettre à jour la liste */
    refreshCourseInList(courseId) {
      this.courseService.getMyCourse(courseId).subscribe({
        next: updatedCourse => {
          const index = this.courses.findIndex(c => c.id === courseId);
          if (index !== -1) {
            this.courses[index] = updatedCourse;
            this.calculateSectionAndLessonCounts();
            this.applyFilters();
            this.computeStats();
          }
        },
        error: err => console.error('Erreur lors du rechargement du cours', err)
      });
    }
    // Badges de statut
    getStatusBadgeClass(status) {
      const normalized = this.normalizeCourseStatus(status);
      switch (normalized) {
        case 'PUBLISHED':
          return 'ins-course-status ins-course-status--published';
        case 'PENDING_REVIEW':
          return 'ins-course-status ins-course-status--pending';
        case 'DRAFT':
          return 'ins-course-status ins-course-status--draft';
        case 'REJECTED':
          return 'ins-course-status ins-course-status--rejected';
        case 'ARCHIVED':
          return 'ins-course-status ins-course-status--archived';
        default:
          return 'ins-course-status ins-course-status--default';
      }
    }
    getStatusLabel(status) {
      const normalized = this.normalizeCourseStatus(status);
      switch (normalized) {
        case 'PUBLISHED':
          return 'Publié';
        case 'PENDING_REVIEW':
          return 'En attente';
        case 'DRAFT':
          return 'Brouillon';
        case 'REJECTED':
          return 'Rejeté';
        case 'ARCHIVED':
          return 'Archivé';
        default:
          return normalized;
      }
    }
    getCourseStatus(course) {
      return this.normalizeCourseStatus(course?.status || course?.courseStatus || 'DRAFT');
    }
    canEditCourse(course) {
      const status = this.getCourseStatus(course);
      return status !== 'PENDING_REVIEW' && status !== 'ARCHIVED' && !course?.hasPendingEdit;
    }
    canSubmitForReview(course) {
      const status = this.getCourseStatus(course);
      return status === 'DRAFT' || status === 'REJECTED';
    }
    canArchiveCourse(course) {
      return this.getCourseStatus(course) === 'PUBLISHED' && !course?.hasPendingEdit;
    }
    canUnarchiveCourse(course) {
      return this.getCourseStatus(course) === 'ARCHIVED' && !course?.hasPendingEdit;
    }
    canDeleteCourse(course) {
      const status = this.getCourseStatus(course);
      return status === 'DRAFT';
    }
    showPendingValidationState(course) {
      const status = this.getCourseStatus(course);
      return status === 'PENDING_REVIEW' || status === 'PUBLISHED' && !!course?.hasPendingEdit;
    }
    shouldShowPendingEditBadge(course) {
      return !!course?.hasPendingEdit && this.getCourseStatus(course) !== 'ARCHIVED';
    }
    getLevelLabel(level) {
      switch (level) {
        case 'BEGINNER':
          return 'Débutant';
        case 'INTERMEDIATE':
          return 'Intermédiaire';
        case 'ADVANCED':
          return 'Avancé';
        default:
          return level;
      }
    }
    getCourseImage(course) {
      const candidates = [course?.coverImage, course?.thumbnailUrl, course?.coverImageUrl, course?.thumbnail, course?.imageUrl, course?.image, course?.courseImageUrl, course?.courseImage];
      const found = candidates.find(v => typeof v === 'string' && v.trim().length > 0);
      return this.getImageUrl(found || '');
    }
    getImageUrl(path) {
      if (!path || !path.trim()) return 'assets/img/course-img/courses-01.jpg';
      const normalizedPath = path.trim().replace(/\\/g, '/');
      if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
        return normalizedPath;
      }
      if (normalizedPath.startsWith('assets/')) {
        return normalizedPath;
      }
      if (normalizedPath.startsWith('preset:')) {
        const presetName = this.normalizeLegacyPresetFileName(normalizedPath.replace('preset:', '').trim());
        return this.resolveAssetPresetImage(presetName);
      }
      // Some records store only preset file names (e.g. "course-img3.jpg").
      if (!normalizedPath.includes('/')) {
        const fileName = this.normalizeLegacyPresetFileName(normalizedPath);
        if (/^(course-img|courses-)/i.test(fileName)) {
          return this.resolveAssetPresetImage(fileName);
        }
      }
      if (normalizedPath.startsWith('/')) {
        return `${this.backendBaseUrl}${normalizedPath}`;
      }
      return `${this.backendBaseUrl}/${normalizedPath}`;
    }
    hasValidImage(course) {
      const key = this.getCourseKey(course);
      return !!this.getCourseImage(course) && !this.failedImageKeys.has(key);
    }
    onCourseImageError(course) {
      this.failedImageKeys.add(this.getCourseKey(course));
    }
    getCourseInitial(course) {
      return (course?.title || 'C').trim().charAt(0).toUpperCase() || 'C';
    }
    getPlaceholderGradient(course) {
      const gradients = ['linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)', 'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)', 'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)', 'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'];
      const key = this.getCourseKey(course);
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
      }
      return gradients[Math.abs(hash) % gradients.length];
    }
    getCourseKey(course) {
      return String(course?.id || course?.slug || course?.title || Math.random());
    }
    resolveAssetPresetImage(fileName) {
      if (/^course-img/i.test(fileName) || /^courses-/i.test(fileName)) {
        return `assets/img/course-img/${fileName}`;
      }
      return `assets/img/course/${fileName}`;
    }
    normalizeCourseStatus(status) {
      const raw = (status || '').toString().trim().toUpperCase();
      if (!raw) return '';
      if (raw === 'PENDING') return 'PENDING_REVIEW';
      if (raw === 'PENDING_REVIEW') return 'PENDING_REVIEW';
      if (raw === 'PUBLISHED') return 'PUBLISHED';
      if (raw === 'REJECTED') return 'REJECTED';
      if (raw === 'ARCHIVED') return 'ARCHIVED';
      return 'DRAFT';
    }
    normalizeLegacyPresetFileName(name) {
      const trimmed = (name || '').trim();
      const m = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
      if (!m) return trimmed;
      return `course-img${m[1]}.${m[2]}`;
    }
    showSuccess(msg) {
      this.successMessage = msg;
      this.errorMessage = '';
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: msg,
        showConfirmButton: false,
        timer: 2200,
        timerProgressBar: true,
        background: '#ffffff',
        customClass: {
          popup: 'ins-course-toast ins-course-toast--info'
        }
      });
      setTimeout(() => this.successMessage = '', 3500);
    }
    showError(msg) {
      this.errorMessage = msg;
      this.successMessage = '';
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: msg,
        showConfirmButton: false,
        timer: 2800,
        timerProgressBar: true,
        background: '#ffffff',
        customClass: {
          popup: 'ins-course-toast ins-course-toast--info'
        }
      });
    }
    static ɵfac = function InstructorCourseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_11__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: InstructorCourseComponent,
      selectors: [["app-instructor-course"]],
      decls: 58,
      vars: 12,
      consts: [["imagePlaceholder", ""], [1, "page-content"], ["class", "alert alert-dismissible fade show ins-course-alert ins-course-alert--info", 4, "ngIf"], ["class", "alert alert-dismissible fade show ins-course-alert ins-course-alert--soft", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-xxl", "col-lg-3", "col-md-6"], [1, "card", "ins-course-stat-card", "ins-course-stat-card--one"], [1, "card-body"], [1, "fw-medium", "mb-1"], [1, "fw-bold"], [1, "card", "ins-course-stat-card", "ins-course-stat-card--two"], [1, "card", "ins-course-stat-card", "ins-course-stat-card--three"], [1, "card", "ins-course-stat-card", "ins-course-stat-card--four"], [1, "col-md-7"], [1, "input-group"], [1, "input-group-text"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Rechercher un cours...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-5"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "DRAFT"], ["value", "PENDING"], ["value", "MODIFICATION_PENDING"], ["value", "PUBLISHED"], ["value", "REJECTED"], ["value", "ARCHIVED"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], [1, "alert", "alert-dismissible", "fade", "show", "ins-course-alert", "ins-course-alert--info"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-dismissible", "fade", "show", "ins-course-alert", "ins-course-alert--soft"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-book-open", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "text-primary", 3, "routerLink"], ["class", "card mb-3 shadow-sm", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "shadow-sm"], [1, "row", "align-items-center"], [1, "col-md-2"], [4, "ngIf", "ngIfElse"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "mb-0"], [1, "badge", 3, "ngClass"], ["class", "badge ins-course-chip ins-course-chip--edit", 4, "ngIf"], [1, "text-muted", "small", "mb-1"], [1, "fa-solid", "fa-signal", "me-1"], [1, "fa-solid", "fa-euro-sign", "me-1"], [1, "fa-solid", "fa-users", "me-1"], [1, "text-muted", "small", "mb-0"], [1, "fa-solid", "fa-layer-group", "me-1"], [1, "fa-solid", "fa-play-circle", "me-1"], ["class", "alert py-1 px-2 mt-2 mb-0 small ins-course-note ins-course-note--muted", 4, "ngIf"], ["class", "alert py-1 px-2 mt-2 mb-0 small ins-course-note ins-course-note--soft", 4, "ngIf"], [1, "col-md-4", "text-end", "d-flex", "flex-column", "align-items-end", "gap-2"], [1, "btn", "btn-outline-primary", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-eye", "me-1"], ["class", "btn btn-outline-primary btn-sm w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary btn-sm w-100 disabled", "disabled", "", "title", "Modification impossible : en attente de validation", 4, "ngIf"], ["class", "btn btn-primary btn-sm w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary btn-sm w-100", 3, "click", 4, "ngIf"], ["alt", "cover", 1, "img-fluid", "rounded", "ins-course-cover", 3, "error", "src"], [1, "ins-course-cover", "ins-course-cover--placeholder"], [1, "badge", "ins-course-chip", "ins-course-chip--edit"], [1, "fa-solid", "fa-pen-to-square", "me-1"], [1, "alert", "py-1", "px-2", "mt-2", "mb-0", "small", "ins-course-note", "ins-course-note--muted"], [1, "fa-solid", "fa-ban", "me-1"], [1, "alert", "py-1", "px-2", "mt-2", "mb-0", "small", "ins-course-note", "ins-course-note--soft"], [1, "fa-solid", "fa-pen", "me-1"], ["disabled", "", "title", "Modification impossible : en attente de validation", 1, "btn", "btn-outline-secondary", "btn-sm", "w-100", "disabled"], [1, "fa-solid", "fa-lock", "me-1"], [1, "btn", "btn-primary", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-paper-plane", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-archive", "me-1"], [1, "fa-solid", "fa-box-open", "me-1"], [1, "fa-solid", "fa-trash", "me-1"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "py-4"], [1, "mb-3", 2, "width", "60px", "height", "60px", "background", "rgba(220,53,69,0.1)", "border-radius", "50%", "display", "inline-flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-trash", "fa-xl", "text-danger"], [1, "mb-2"], [1, "text-muted", "mb-4"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-light", "rounded-pill", "px-4", 3, "click"], [1, "btn", "btn-primary", "rounded-pill", "px-4", 3, "click"]],
      template: function InstructorCourseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, InstructorCourseComponent_div_1_Template, 4, 1, "div", 2)(2, InstructorCourseComponent_div_2_Template, 4, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Cours Publi\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 5)(12, "div", 10)(13, "div", 7)(14, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "En attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 5)(19, "div", 11)(20, "div", 7)(21, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Brouillons");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 5)(26, "div", 12)(27, "div", 7)(28, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Rejet\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 4)(33, "div", 13)(34, "div", 14)(35, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function InstructorCourseComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function InstructorCourseComponent_Template_input_input_37_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 18)(39, "select", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function InstructorCourseComponent_Template_select_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function InstructorCourseComponent_Template_select_change_39_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Tous les statuts");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Brouillon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "En attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Modification en attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Publi\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Rejet\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Archiv\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, InstructorCourseComponent_div_54_Template, 4, 0, "div", 27)(55, InstructorCourseComponent_div_55_Template, 7, 1, "div", 27)(56, InstructorCourseComponent_div_56_Template, 2, 1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, InstructorCourseComponent_div_57_Template, 20, 1, "div", 29);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.publishedCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.pendingCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.draftCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.rejectedCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredCourses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredCourses.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 0;\n}\n\n.page-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: radial-gradient(circle at 12% 10%, rgba(99, 102, 241, 0.06), transparent 20%), radial-gradient(circle at 88% 0%, rgba(6, 182, 212, 0.05), transparent 18%);\n  opacity: 0.9;\n}\n\n.page-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_insCourseFade 0.35s ease;\n}\n\n.ins-course-alert[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid transparent;\n}\n\n.ins-course-alert--info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(14, 165, 233, 0.08));\n  border-color: rgba(99, 102, 241, 0.28);\n  color: #334155;\n}\n\n.ins-course-alert--soft[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(100, 116, 139, 0.1), rgba(148, 163, 184, 0.1));\n  border-color: rgba(148, 163, 184, 0.35);\n  color: #334155;\n}\n\n.ins-course-stat-card[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 0 !important;\n}\n\n.ins-course-stat-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], \n.ins-course-stat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.ins-course-stat-card--one[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n}\n\n.ins-course-stat-card--two[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #38bdf8);\n}\n\n.ins-course-stat-card--three[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #7c3aed, #8b5cf6);\n}\n\n.ins-course-stat-card--four[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #334155, #475569);\n}\n\n.ins-course-chip[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.42rem 0.65rem;\n  font-weight: 600;\n}\n\n.ins-course-chip--edit[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #4f46e5;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n\n.ins-course-note[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid transparent;\n  background: #f8fafc;\n  color: #334155;\n}\n\n.ins-course-note--muted[_ngcontent-%COMP%] {\n  background: rgba(71, 85, 105, 0.08);\n  border-color: rgba(100, 116, 139, 0.24);\n}\n\n.ins-course-note--soft[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.22);\n}\n\n.ins-course-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.74rem;\n  border-radius: 999px;\n  padding: 0.42rem 0.65rem;\n  border: 1px solid transparent;\n}\n\n.ins-course-status--published[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.12);\n  border-color: rgba(14, 165, 233, 0.28);\n  color: #0369a1;\n}\n\n.ins-course-status--pending[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  border-color: rgba(99, 102, 241, 0.28);\n  color: #4338ca;\n}\n\n.ins-course-status--draft[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  border-color: rgba(124, 58, 237, 0.26);\n  color: #6d28d9;\n}\n\n.ins-course-status--rejected[_ngcontent-%COMP%] {\n  background: rgba(71, 85, 105, 0.12);\n  border-color: rgba(71, 85, 105, 0.28);\n  color: #334155;\n}\n\n.ins-course-status--archived[_ngcontent-%COMP%], \n.ins-course-status--default[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  border-color: rgba(148, 163, 184, 0.34);\n  color: #475569;\n}\n\n.row.mb-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.row.mb-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 28px rgba(79, 70, 229, 0.1);\n}\n\n.row.mb-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem 1.05rem;\n}\n\n.row.mb-4[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  letter-spacing: 0.02em;\n}\n\n.input-group[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-control[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border-color: #dbe4ef;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 14px 0 0 14px;\n  background: #fff;\n  color: #64748b;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  min-height: 48px;\n  box-shadow: none;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.text-center.py-5[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  background: linear-gradient(180deg, #fff, #f8fbff);\n  border: 1px solid #e6eaf2;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid #e6eaf2;\n  overflow: hidden;\n  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n  animation: _ngcontent-%COMP%_insCourseFade 0.35s ease;\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #c7d2fe;\n  box-shadow: 0 18px 30px rgba(79, 70, 229, 0.1) !important;\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.05rem;\n}\n\n.ins-course-cover[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.ins-course-cover--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 28px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%]   .row.align-items-center[_ngcontent-%COMP%] {\n  --bs-gutter-x: 1rem;\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.08);\n  transition: transform 0.25s ease, filter 0.25s ease;\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n\n.card.mb-3.shadow-sm[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.02rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n}\n\n.badge[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.42rem 0.65rem;\n}\n\n.alert.alert-danger.py-1[_ngcontent-%COMP%], \n.alert.alert-warning.py-1[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 20px rgba(67, 56, 202, 0.22);\n}\n\n.btn.btn-outline-info[_ngcontent-%COMP%], \n.btn.btn-outline-primary[_ngcontent-%COMP%], \n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #dbe4ef;\n}\n\n.btn.btn-outline-info[_ngcontent-%COMP%]:hover, \n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover, \n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fbff;\n  border-color: #c7d2fe;\n}\n\n.btn.btn-warning[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 18px rgba(245, 158, 11, 0.15);\n}\n\n.btn.btn-danger[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 18px rgba(220, 53, 69, 0.18);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 20px;\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.24);\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.6rem;\n}\n\n.ins-course-toast[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  box-shadow: 0 18px 35px rgba(15, 23, 42, 0.16) !important;\n  border: 1px solid rgba(226, 232, 240, 0.92) !important;\n}\n\n.ins-course-toast--info[_ngcontent-%COMP%] {\n  border-left: 4px solid #6366f1 !important;\n}\n\n@media (max-width: 991.98px) {\n  .row.mb-4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .card.mb-3.shadow-sm[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.95rem;\n  }\n  .card.mb-3.shadow-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 160px !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .d-flex.justify-content-between.align-items-center.mb-3[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .card.mb-3.shadow-sm[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    align-items: stretch !important;\n  }\n  .card.mb-3.shadow-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_insCourseFade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLWNvdXJzZS9pbnN0cnVjdG9yLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0tBQ0M7RUFFRCxZQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUFERDs7QUFJQTtFQUNDLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQ0FBQTtBQUREOztBQUlBO0VBQ0MsbUJBQUE7RUFDQSw2QkFBQTtBQUREOztBQUlBO0VBQ0MscUZBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFERDs7QUFJQTtFQUNDLHVGQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0Esb0JBQUE7QUFERDs7QUFJQTs7RUFFQyxXQUFBO0FBREQ7O0FBSUE7RUFDQyxxREFBQTtBQUREOztBQUlBO0VBQ0MscURBQUE7QUFERDs7QUFJQTtFQUNDLHFEQUFBO0FBREQ7O0FBSUE7RUFDQyxxREFBQTtBQUREOztBQUlBO0VBQ0Msb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBREQ7O0FBSUE7RUFDQyxvQ0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQUREOztBQUlBO0VBQ0MsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUREOztBQUlBO0VBQ0MsbUNBQUE7RUFDQSx1Q0FBQTtBQUREOztBQUlBO0VBQ0Msb0NBQUE7RUFDQSxzQ0FBQTtBQUREOztBQUlBO0VBQ0Msb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUREOztBQUlBO0VBQ0Msb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFERDs7QUFJQTtFQUNDLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FBREQ7O0FBSUE7RUFDQyxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQUREOztBQUlBO0VBQ0MsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFERDs7QUFJQTs7RUFFQyxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtBQUREOztBQUlBO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxxREFBQTtBQUREOztBQUlBO0VBQ0MsMkJBQUE7RUFDQSw4Q0FBQTtBQUREOztBQUlBO0VBQ0MscUJBQUE7QUFERDs7QUFJQTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7QUFERDs7QUFLQTs7O0VBR0MsbUJBQUE7RUFDQSxxQkFBQTtBQUZEOztBQUtBO0VBQ0MsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGRDs7QUFLQTs7RUFFQyxnQkFBQTtFQUNBLGdCQUFBO0FBRkQ7O0FBS0E7O0VBRUMscUJBQUE7RUFDQSw2Q0FBQTtBQUZEOztBQUtBO0VBQ0MsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7QUFGRDs7QUFLQTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdGQUFBO0VBQ0EsbUNBQUE7QUFGRDs7QUFLQTtFQUNDLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSx5REFBQTtBQUZEOztBQUtBO0VBQ0MsZ0JBQUE7QUFGRDs7QUFLQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkQ7O0FBS0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUZEOztBQUtBO0VBQ0MsbUJBQUE7QUFGRDs7QUFLQTtFQUNDLDhCQUFBO0VBQ0EsOENBQUE7RUFDQSxtREFBQTtBQUZEOztBQUtBO0VBQ0Msc0JBQUE7QUFGRDs7QUFLQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUZEOztBQUtBO0VBQ0Msb0JBQUE7RUFDQSx3QkFBQTtBQUZEOztBQUtBOztFQUVDLG1CQUFBO0FBRkQ7O0FBS0E7RUFDQyxvQkFBQTtFQUNBLDZFQUFBO0FBRkQ7O0FBS0E7RUFDQywyQkFBQTtBQUZEOztBQUtBO0VBQ0MsK0NBQUE7QUFGRDs7QUFLQTs7O0VBR0MscUJBQUE7QUFGRDs7QUFLQTs7O0VBR0MsbUJBQUE7RUFDQSxxQkFBQTtBQUZEOztBQUtBO0VBQ0MsZ0RBQUE7QUFGRDs7QUFLQTtFQUNDLCtDQUFBO0FBRkQ7O0FBS0E7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUZEOztBQUtBO0VBQ0MsZUFBQTtBQUZEOztBQUtBO0VBQ0MsOEJBQUE7RUFDQSx5REFBQTtFQUNBLHNEQUFBO0FBRkQ7O0FBS0E7RUFDQyx5Q0FBQTtBQUZEOztBQUtBO0VBQ0M7O0lBRUMsZ0JBQUE7RUFGQTtFQUtEO0lBQ0Msd0JBQUE7RUFIQTtBQUNGO0FBTUE7RUFDQztJQUNDLGVBQUE7SUFDQSxnQkFBQTtFQUpBO0VBT0Q7SUFDQyxZQUFBO0VBTEE7RUFRRDtJQUNDLCtCQUFBO0VBTkE7RUFTRDtJQUNDLFdBQUE7RUFQQTtBQUNGO0FBVUE7RUFDQztJQUFPLFVBQUE7SUFBWSwwQkFBQTtFQU5sQjtFQU9EO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBSGhCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQ6OmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGluc2V0OiAwO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJhY2tncm91bmQ6XHJcblx0XHRyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEyJSAxMCUsIHJnYmEoOTksIDEwMiwgMjQxLCAuMDYpLCB0cmFuc3BhcmVudCAyMCUpLFxyXG5cdFx0cmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4OCUgMCUsIHJnYmEoNiwgMTgyLCAyMTIsIC4wNSksIHRyYW5zcGFyZW50IDE4JSk7XHJcblx0b3BhY2l0eTogLjk7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQgPiAqIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgLjA2KTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNiwgMjMyLCAyNDAsIC45KTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblx0YW5pbWF0aW9uOiBpbnNDb3Vyc2VGYWRlIC4zNXMgZWFzZTtcclxufVxyXG5cclxuLmlucy1jb3Vyc2UtYWxlcnQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLWFsZXJ0LS1pbmZvIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDc5LCA3MCwgMjI5LCAuMTApLCByZ2JhKDE0LCAxNjUsIDIzMywgLjA4KSk7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDk5LCAxMDIsIDI0MSwgLjI4KTtcclxuXHRjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLmlucy1jb3Vyc2UtYWxlcnQtLXNvZnQge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTAwLCAxMTYsIDEzOSwgLjEwKSwgcmdiYSgxNDgsIDE2MywgMTg0LCAuMTApKTtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgLjM1KTtcclxuXHRjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLmlucy1jb3Vyc2Utc3RhdC1jYXJkIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucy1jb3Vyc2Utc3RhdC1jYXJkIGg2LFxyXG4uaW5zLWNvdXJzZS1zdGF0LWNhcmQgaDQge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaW5zLWNvdXJzZS1zdGF0LWNhcmQtLW9uZSB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzYzNjZmMSk7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLXN0YXQtY2FyZC0tdHdvIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjMzhiZGY4KTtcclxufVxyXG5cclxuLmlucy1jb3Vyc2Utc3RhdC1jYXJkLS10aHJlZSB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzhiNWNmNik7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLXN0YXQtY2FyZC0tZm91ciB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzMzNDE1NSwgIzQ3NTU2OSk7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLWNoaXAge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdHBhZGRpbmc6IC40MnJlbSAuNjVyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmlucy1jb3Vyc2UtY2hpcC0tZWRpdCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIC4xMik7XHJcblx0Y29sb3I6ICM0ZjQ2ZTU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwgMTAyLCAyNDEsIC4yNSk7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLW5vdGUge1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0YmFja2dyb3VuZDogI2Y4ZmFmYztcclxuXHRjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLmlucy1jb3Vyc2Utbm90ZS0tbXV0ZWQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzEsIDg1LCAxMDUsIC4wOCk7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIC4yNCk7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLW5vdGUtLXNvZnQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAuMDgpO1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSg5OSwgMTAyLCAyNDEsIC4yMik7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLXN0YXR1cyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogLjc0cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdHBhZGRpbmc6IC40MnJlbSAuNjVyZW07XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLXN0YXR1cy0tcHVibGlzaGVkIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxNjUsIDIzMywgLjEyKTtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAuMjgpO1xyXG5cdGNvbG9yOiAjMDM2OWExO1xyXG59XHJcblxyXG4uaW5zLWNvdXJzZS1zdGF0dXMtLXBlbmRpbmcge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAuMTIpO1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSg5OSwgMTAyLCAyNDEsIC4yOCk7XHJcblx0Y29sb3I6ICM0MzM4Y2E7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLXN0YXR1cy0tZHJhZnQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTI0LCA1OCwgMjM3LCAuMTIpO1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgxMjQsIDU4LCAyMzcsIC4yNik7XHJcblx0Y29sb3I6ICM2ZDI4ZDk7XHJcbn1cclxuXHJcbi5pbnMtY291cnNlLXN0YXR1cy0tcmVqZWN0ZWQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNzEsIDg1LCAxMDUsIC4xMik7XHJcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDcxLCA4NSwgMTA1LCAuMjgpO1xyXG5cdGNvbG9yOiAjMzM0MTU1O1xyXG59XHJcblxyXG4uaW5zLWNvdXJzZS1zdGF0dXMtLWFyY2hpdmVkLFxyXG4uaW5zLWNvdXJzZS1zdGF0dXMtLWRlZmF1bHQge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgLjE0KTtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgLjM0KTtcclxuXHRjb2xvcjogIzQ3NTU2OTtcclxufVxyXG5cclxuLnJvdy5tYi00IC5jYXJkIHtcclxuXHRib3JkZXI6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDE1LCAyMywgNDIsIC4wNik7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCBib3gtc2hhZG93IC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucm93Lm1iLTQgLmNhcmQ6aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuXHRib3gtc2hhZG93OiAwIDE2cHggMjhweCByZ2JhKDc5LCA3MCwgMjI5LCAuMTApO1xyXG59XHJcblxyXG4ucm93Lm1iLTQgLmNhcmQgLmNhcmQtYm9keSB7XHJcblx0cGFkZGluZzogMXJlbSAxLjA1cmVtO1xyXG59XHJcblxyXG4ucm93Lm1iLTQgaDYge1xyXG5cdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG59XHJcblxyXG5cclxuLmlucHV0LWdyb3VwLFxyXG4uZm9ybS1zZWxlY3QsXHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZGJlNGVmO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweCAwIDAgMTRweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGNvbG9yOiAjNjQ3NDhiO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCxcclxuLmZvcm0tc2VsZWN0IHtcclxuXHRtaW4taGVpZ2h0OiA0OHB4O1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzLFxyXG4uZm9ybS1zZWxlY3Q6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogI2E1YjRmYztcclxuXHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4xMCk7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlci5weS01IHtcclxuXHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNmOGZiZmYpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmVhZjI7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAuMDUpO1xyXG59XHJcblxyXG4uY2FyZC5tYi0zLnNoYWRvdy1zbSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMThweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTZlYWYyO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgZWFzZSwgYm94LXNoYWRvdyAuMjVzIGVhc2UsIGJvcmRlci1jb2xvciAuMjVzIGVhc2U7XHJcblx0YW5pbWF0aW9uOiBpbnNDb3Vyc2VGYWRlIC4zNXMgZWFzZTtcclxufVxyXG5cclxuLmNhcmQubWItMy5zaGFkb3ctc206aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuXHRib3JkZXItY29sb3I6ICNjN2QyZmU7XHJcblx0Ym94LXNoYWRvdzogMCAxOHB4IDMwcHggcmdiYSg3OSwgNzAsIDIyOSwgLjEwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC5tYi0zLnNoYWRvdy1zbSAuY2FyZC1ib2R5IHtcclxuXHRwYWRkaW5nOiAxLjA1cmVtO1xyXG59XHJcblxyXG4uaW5zLWNvdXJzZS1jb3ZlciB7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW5zLWNvdXJzZS1jb3Zlci0tcGxhY2Vob2xkZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXNpemU6IDI4cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC5tYi0zLnNoYWRvdy1zbSAucm93LmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcblx0LS1icy1ndXR0ZXIteDogMXJlbTtcclxufVxyXG5cclxuLmNhcmQubWItMy5zaGFkb3ctc20gaW1nIHtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAuMDgpO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGVhc2UsIGZpbHRlciAuMjVzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkLm1iLTMuc2hhZG93LXNtOmhvdmVyIGltZyB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuLmNhcmQubWItMy5zaGFkb3ctc20gaDUge1xyXG5cdGZvbnQtc2l6ZTogMS4wMnJlbTtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAtLjAxZW07XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0cGFkZGluZzogLjQycmVtIC42NXJlbTtcclxufVxyXG5cclxuLmFsZXJ0LmFsZXJ0LWRhbmdlci5weS0xLFxyXG4uYWxlcnQuYWxlcnQtd2FybmluZy5weS0xIHtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuXHRib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UsIGJveC1zaGFkb3cgLjJzIGVhc2UsIGJvcmRlci1jb2xvciAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1wcmltYXJ5IHtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDY3LCA1NiwgMjAyLCAuMjIpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1vdXRsaW5lLWluZm8sXHJcbi5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSxcclxuLmJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG5cdGJvcmRlci1jb2xvcjogI2RiZTRlZjtcclxufVxyXG5cclxuLmJ0bi5idG4tb3V0bGluZS1pbmZvOmhvdmVyLFxyXG4uYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIsXHJcbi5idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjZjhmYmZmO1xyXG5cdGJvcmRlci1jb2xvcjogI2M3ZDJmZTtcclxufVxyXG5cclxuLmJ0bi5idG4td2FybmluZyB7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDE4cHggcmdiYSgyNDUsIDE1OCwgMTEsIC4xNSk7XHJcbn1cclxuXHJcbi5idG4uYnRuLWRhbmdlciB7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDE4cHggcmdiYSgyMjAsIDUzLCA2OSwgLjE4KTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG5cdGJvcmRlcjogMDtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgLjI0KTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG5cdHBhZGRpbmc6IDEuNnJlbTtcclxufVxyXG5cclxuLmlucy1jb3Vyc2UtdG9hc3Qge1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcclxuXHRib3gtc2hhZG93OiAwIDE4cHggMzVweCByZ2JhKDE1LCAyMywgNDIsIC4xNikgIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNiwgMjMyLCAyNDAsIC45MikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucy1jb3Vyc2UtdG9hc3QtLWluZm8ge1xyXG5cdGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzYzNjZmMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuXHQucm93Lm1iLTQgLmNhcmQgLmNhcmQtYm9keSxcclxuXHQuY2FyZC5tYi0zLnNoYWRvdy1zbSAuY2FyZC1ib2R5IHtcclxuXHRcdHBhZGRpbmc6IC45NXJlbTtcclxuXHR9XHJcblxyXG5cdC5jYXJkLm1iLTMuc2hhZG93LXNtIGltZyB7XHJcblx0XHRoZWlnaHQ6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuXHQucGFnZS1jb250ZW50IHtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XHJcblx0fVxyXG5cclxuXHQuZC1mbGV4Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuLmFsaWduLWl0ZW1zLWNlbnRlci5tYi0zIHtcclxuXHRcdGdhcDogLjc1cmVtO1xyXG5cdH1cclxuXHJcblx0LmNhcmQubWItMy5zaGFkb3ctc20gLmNvbC1tZC00IHtcclxuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuY2FyZC5tYi0zLnNoYWRvdy1zbSAuYnRuIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnNDb3Vyc2VGYWRlIHtcclxuXHRmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7IH1cclxuXHR0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return InstructorCourseComponent;
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
//# sourceMappingURL=2356.js.map