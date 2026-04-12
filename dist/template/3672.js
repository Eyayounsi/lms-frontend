"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3672],{

/***/ 23672:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-course-detail/instructor-course-detail.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorCourseDetailComponent: () => (/* binding */ InstructorCourseDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_components_avatar_fallback_avatar_fallback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/avatar-fallback/avatar-fallback.component */ 23181);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 80436);









function InstructorCourseDetailComponent_h4_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.course.title, " ");
  }
}
function InstructorCourseDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.errorMessage, " ");
  }
}
function InstructorCourseDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chargement du cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InstructorCourseDetailComponent_div_8_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("error", function InstructorCourseDetailComponent_div_8_img_5_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onCoverImageError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.getCourseCoverImage(ctx_r0.course), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function InstructorCourseDetailComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.getCoverPlaceholderGradient(ctx_r0.course));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r0.course.title || "Cours").charAt(0));
  }
}
function InstructorCourseDetailComponent_div_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modification en attente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Mis en avant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r0.course.price, "1.2-2"), " \u20AC");
  }
}
function InstructorCourseDetailComponent_div_8_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r0.course.price, "1.2-2"), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 5, ctx_r0.course.effectivePrice, "1.2-2"), " \u20AC");
  }
}
function InstructorCourseDetailComponent_div_8_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Publi\u00E9 le :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 1, ctx_r0.course.publishedAt, "dd/MM/yyyy"), " ");
  }
}
function InstructorCourseDetailComponent_div_8_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Modification en attente :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Vous avez soumis des modifications pour ce cours. Elles sont en attente de validation par l'administration. Le cours reste visible dans sa version actuelle pour les \u00E9tudiants. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Modification rejet\u00E9e :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.course.editRejectionReason, " ");
  }
}
function InstructorCourseDetailComponent_div_8_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cours rejet\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.course.rejectionReason, " ");
  }
}
function InstructorCourseDetailComponent_div_8_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97)(1, "strong", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Objectifs :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.course.objectives);
  }
}
function InstructorCourseDetailComponent_div_8_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "strong", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Pr\u00E9requis :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.course.requirements);
  }
}
function InstructorCourseDetailComponent_div_8_p_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Non sp\u00E9cifi\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Aucune section ajout\u00E9e. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_103_div_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Gratuit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_103_div_12_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstructorCourseDetailComponent_div_8_div_103_div_12_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const lesson_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.openPreview(lesson_r5.videoUrl, "video"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vid\u00E9o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_103_div_12_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstructorCourseDetailComponent_div_8_div_103_div_12_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const lesson_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.openPreview(lesson_r5.pdfUrl, "pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_103_div_12_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Aucun fichier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_103_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, InstructorCourseDetailComponent_div_8_div_103_div_12_span_7_Template, 2, 0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InstructorCourseDetailComponent_div_8_div_103_div_12_button_9_Template, 3, 0, "button", 116)(10, InstructorCourseDetailComponent_div_8_div_103_div_12_button_10_Template, 3, 0, "button", 117)(11, InstructorCourseDetailComponent_div_8_div_103_div_12_span_11_Template, 2, 0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lesson_r5 = ctx.$implicit;
    const j_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", j_r7 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", lesson_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", lesson_r5.free);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", lesson_r5.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", lesson_r5.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !lesson_r5.videoUrl && !lesson_r5.pdfUrl);
  }
}
function InstructorCourseDetailComponent_div_8_div_103_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Aucune le\u00E7on dans cette section. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InstructorCourseDetailComponent_div_8_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 102)(1, "h2", 103)(2, "button", 104)(3, "div", 105)(4, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 108)(11, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, InstructorCourseDetailComponent_div_8_div_103_div_12_Template, 12, 6, "div", 110)(13, InstructorCourseDetailComponent_div_8_div_103_div_13_Template, 2, 0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("collapsed", i_r9 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-bs-target", "#section" + section_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](section_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (section_r8.lessons == null ? null : section_r8.lessons.length) || 0, " le\u00E7on(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", i_r9 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "section" + section_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", section_r8.lessons);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(section_r8.lessons == null ? null : section_r8.lessons.length));
  }
}
function InstructorCourseDetailComponent_div_8_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r0.course.averageRating, "1.1-1"), " / 5 ");
  }
}
function InstructorCourseDetailComponent_div_8_div_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chargement des avis...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InstructorCourseDetailComponent_div_8_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Aucun avis pour ce cours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function InstructorCourseDetailComponent_div_8_div_116_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 139);
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](s_r10 <= (ctx_r0.course.averageRating || 0) ? "fa fa-star text-warning" : "fa fa-star text-muted opacity-25");
  }
}
function InstructorCourseDetailComponent_div_8_div_116_div_11_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 148);
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const review_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](s_r11 <= review_r12.rating ? "fa fa-star text-warning" : "fa fa-star text-muted opacity-25");
  }
}
function InstructorCourseDetailComponent_div_8_div_116_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 140)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-avatar-fallback", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 143)(4, "div", 144)(5, "strong", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, InstructorCourseDetailComponent_div_8_div_116_div_11_i_8_Template, 1, 2, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const review_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imageUrl", ctx_r0.getImageUrl(review_r12.studentAvatar))("name", review_r12.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](review_r12.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getStarsArray(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 6, review_r12.createdAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](review_r12.comment || "(Aucun commentaire)");
  }
}
function InstructorCourseDetailComponent_div_8_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 133)(2, "div", 134)(3, "h2", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, InstructorCourseDetailComponent_div_8_div_116_i_7_Template, 1, 2, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, InstructorCourseDetailComponent_div_8_div_116_div_11_Template, 14, 9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.course.averageRating ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 4, ctx_r0.course.averageRating, "1.1-1") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getStarsArray(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.course.reviewCount, " \u00E9valuation(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
  }
}
function InstructorCourseDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, InstructorCourseDetailComponent_div_8_img_5_Template, 1, 1, "img", 28)(6, InstructorCourseDetailComponent_div_8_div_6_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 30)(8, "div", 31)(9, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, InstructorCourseDetailComponent_div_8_span_13_Template, 3, 0, "span", 34)(14, InstructorCourseDetailComponent_div_8_span_14_Template, 3, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 36)(16, "div", 37)(17, "div", 38)(18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div")(21, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 37)(27, "div", 38)(28, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, InstructorCourseDetailComponent_div_8_div_31_Template, 3, 4, "div", 45)(32, InstructorCourseDetailComponent_div_8_div_32_Template, 7, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 37)(36, "div", 38)(37, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div")(40, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Dur\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 48)(45, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Niveau :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Langue :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Cat\u00E9gorie :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Cr\u00E9\u00E9 le :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](65, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, InstructorCourseDetailComponent_div_8_div_66_Template, 6, 4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstructorCourseDetailComponent_div_8_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.editCourse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Modifier le cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, InstructorCourseDetailComponent_div_8_div_70_Template, 5, 0, "div", 57)(71, InstructorCourseDetailComponent_div_8_div_71_Template, 5, 1, "div", 58)(72, InstructorCourseDetailComponent_div_8_div_72_Template, 5, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 60)(74, "div", 61)(75, "div", 62)(76, "div", 63)(77, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 25)(81, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 61)(84, "div", 62)(85, "div", 63)(86, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Objectifs & Pr\u00E9requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, InstructorCourseDetailComponent_div_8_div_90_Template, 5, 1, "div", 67)(91, InstructorCourseDetailComponent_div_8_div_91_Template, 5, 1, "div", 7)(92, InstructorCourseDetailComponent_div_8_p_92_Template, 2, 0, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 69)(94, "div", 70)(95, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Contenu du cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, InstructorCourseDetailComponent_div_8_div_101_Template, 3, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](103, InstructorCourseDetailComponent_div_8_div_103_Template, 14, 11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 69)(105, "div", 70)(106, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Avis & \u00C9valuations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, InstructorCourseDetailComponent_div_8_span_110_Template, 4, 4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](114, InstructorCourseDetailComponent_div_8_div_114_Template, 4, 0, "div", 79)(115, InstructorCourseDetailComponent_div_8_div_115_Template, 4, 0, "div", 80)(116, InstructorCourseDetailComponent_div_8_div_116_Template, 12, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.hasCoverImage(ctx_r0.course));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.hasCoverImage(ctx_r0.course));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.course.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r0.getStatusBadgeClass(ctx_r0.course.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusLabel(ctx_r0.course.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.hasPendingEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.course.averageRating ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 32, ctx_r0.course.averageRating, "1.1-1") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.course.reviewCount || 0, " avis");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.course.onSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.onSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatDuration(ctx_r0.course.totalDurationSeconds));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.getLevelLabel(ctx_r0.course.level), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.course.language || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.course.categoryName || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](65, 35, ctx_r0.course.createdAt, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.publishedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.hasPendingEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.editRejectionReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.rejectionReason && ctx_r0.course.status === "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.course.description || "Aucune description.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.objectives);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.requirements);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.course.objectives && !ctx_r0.course.requirements);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", (ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length) || 0, " section(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.course.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.course.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.reviews.length, " avis");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loadingReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.loadingReviews && ctx_r0.reviews.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.loadingReviews && ctx_r0.reviews.length > 0);
  }
}
function InstructorCourseDetailComponent_video_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "video", 149);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.previewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function InstructorCourseDetailComponent_iframe_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "iframe", 150);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.safePreviewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
  }
}
let InstructorCourseDetailComponent = /*#__PURE__*/(() => {
  class InstructorCourseDetailComponent {
    route;
    router;
    courseService;
    sanitizer;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    course = null;
    reviews = [];
    loading = true;
    loadingReviews = true;
    errorMessage = '';
    courseId;
    coverImageFailed = false;
    constructor(route, router, courseService, sanitizer) {
      this.route = route;
      this.router = router;
      this.courseService = courseService;
      this.sanitizer = sanitizer;
    }
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.courseId = +params['courseId'];
        if (this.courseId) {
          this.loadCourse();
          this.loadReviews();
        } else {
          this.errorMessage = 'Aucun cours spécifié';
          this.loading = false;
          this.loadingReviews = false;
        }
      });
    }
    loadCourse() {
      this.loading = true;
      this.courseService.getMyCourse(this.courseId).subscribe({
        next: data => {
          this.course = data;
          this.coverImageFailed = false;
          this.loading = false;
        },
        error: err => {
          this.errorMessage = err.error?.message || 'Erreur lors du chargement du cours';
          this.loading = false;
        }
      });
    }
    loadReviews() {
      this.loadingReviews = true;
      this.courseService.getInstructorCourseReviews(this.courseId).subscribe({
        next: data => {
          this.reviews = data;
          this.loadingReviews = false;
        },
        error: () => {
          this.reviews = [];
          this.loadingReviews = false;
        }
      });
    }
    goBack() {
      this.router.navigate(['/instructor/instructor-course']);
    }
    editCourse() {
      this.router.navigate([this.routes.instructorEditCourse, this.courseId]);
    }
    // ── Prévisualisation médias ──────────────────────────────────
    previewUrl = '';
    previewType = 'video';
    openPreview(url, type) {
      this.previewUrl = this.getFileUrl(url);
      this.previewType = type;
      const el = document.getElementById('mediaPreviewModal');
      if (el) {
        new bootstrap.Modal(el).show();
      }
    }
    get safePreviewUrl() {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
    }
    // ── Helpers ──────────────────────────────────────────────────
    getCourseCoverImage(course) {
      const candidates = [course?.coverImage, course?.thumbnailUrl, course?.coverImageUrl, course?.thumbnail, course?.image, course?.imageUrl, course?.courseImageUrl, course?.courseImage];
      const found = candidates.find(value => !!value && String(value).trim());
      return this.getImageUrl(found || '');
    }
    hasCoverImage(course) {
      return !!this.getCourseCoverImage(course) && !this.coverImageFailed;
    }
    onCoverImageError() {
      this.coverImageFailed = true;
    }
    getCoverPlaceholderGradient(course) {
      const gradients = ['linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)', 'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)', 'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)', 'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'];
      const key = String(course?.id || course?.slug || course?.title || 'course');
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
      }
      return gradients[Math.abs(hash) % gradients.length];
    }
    getImageUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_3__.resolveCourseImage)(path, '');
    }
    getFileUrl(path) {
      if (!path) return '#';
      const clean = path.startsWith('/') ? path : '/' + path;
      return `http://localhost:8081${clean}`;
    }
    getStatusBadgeClass(status) {
      switch (status) {
        case 'PUBLISHED':
          return 'bg-success';
        case 'PENDING':
          return 'bg-warning text-dark';
        case 'DRAFT':
          return 'bg-secondary';
        case 'REJECTED':
          return 'bg-danger';
        case 'ARCHIVED':
          return 'bg-dark';
        default:
          return 'bg-secondary';
      }
    }
    getStatusLabel(status) {
      switch (status) {
        case 'PUBLISHED':
          return 'Publié';
        case 'PENDING':
          return 'En attente';
        case 'DRAFT':
          return 'Brouillon';
        case 'REJECTED':
          return 'Rejeté';
        case 'ARCHIVED':
          return 'Archivé';
        default:
          return status;
      }
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
    formatDuration(totalSeconds) {
      if (!totalSeconds) return '0 min';
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      if (hours > 0) return `${hours}h ${minutes}min`;
      return `${minutes} min`;
    }
    getStarsArray(rating) {
      return [1, 2, 3, 4, 5];
    }
    static ɵfac = function InstructorCourseDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorCourseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: InstructorCourseDetailComponent,
      selectors: [["app-instructor-course-detail"]],
      decls: 20,
      vars: 9,
      consts: [[1, "page-content", "icd-page"], [1, "d-flex", "align-items-center", "gap-3", "mb-4", "icd-topbar"], [1, "btn", "btn-outline-secondary", "btn-sm", "icd-back-btn", 3, "click"], [1, "fa-solid", "fa-arrow-left", "me-1"], ["class", "mb-0 icd-title", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["id", "mediaPreviewModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content", "bg-dark"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "btn-close-white"], [1, "modal-body", "p-2"], ["controls", "", "style", "width:100%; max-height:70vh; background:#000;", "class", "rounded", 3, "src", 4, "ngIf"], ["style", "width:100%; height:70vh; border:none;", "class", "rounded", 3, "src", 4, "ngIf"], [1, "mb-0", "icd-title"], [1, "fa-solid", "fa-book", "me-2", "text-primary"], [1, "alert", "alert-danger"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "card", "mb-4", "shadow-sm", "icd-card", "icd-hero-card"], [1, "card-body"], [1, "row"], [1, "col-md-4"], ["class", "img-fluid rounded shadow-sm icd-cover-image", "alt", "cover", 3, "src", "error", 4, "ngIf"], ["class", "icd-cover-placeholder rounded shadow-sm", 3, "background", 4, "ngIf"], [1, "col-md-8"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "mb-0"], [1, "badge", 3, "ngClass"], ["class", "badge bg-primary", 4, "ngIf"], ["class", "badge bg-warning text-dark", 4, "ngIf"], [1, "row", "g-3", "mb-3"], [1, "col-auto"], [1, "d-flex", "align-items-center", "gap-2", "icd-stat-chip"], [1, "bg-warning", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fw-bold"], [1, "text-muted"], [1, "bg-primary", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "fa-solid", "fa-euro-sign", "text-primary"], ["class", "fw-bold", 4, "ngIf"], [1, "bg-success", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "fa-solid", "fa-clock", "text-success"], [1, "row", "small", "text-muted"], [1, "col-6", "col-md-4", "mb-2"], [1, "fa-solid", "fa-signal", "me-1"], [1, "fa-solid", "fa-globe", "me-1"], [1, "fa-solid", "fa-folder", "me-1"], [1, "fa-solid", "fa-calendar", "me-1"], ["class", "col-6 col-md-4 mb-2", 4, "ngIf"], [1, "btn", "btn-outline-primary", "btn-sm", "mt-2", "icd-edit-btn", 3, "click"], [1, "fa-solid", "fa-pen", "me-1"], ["class", "alert alert-info mb-4", 4, "ngIf"], ["class", "alert alert-warning mb-4", 4, "ngIf"], ["class", "alert alert-danger mb-4", 4, "ngIf"], [1, "row", "mb-4", "icd-grid-cards"], [1, "col-md-6"], [1, "card", "h-100", "shadow-sm", "icd-card"], [1, "card-header", "bg-light", "icd-card-header"], [1, "fa-solid", "fa-align-left", "me-2"], [1, "text-muted", 2, "white-space", "pre-line"], [1, "fa-solid", "fa-bullseye", "me-2"], ["class", "mb-3", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "card", "mb-4", "shadow-sm", "icd-card"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center", "icd-card-header"], [1, "fa-solid", "fa-list-ol", "me-2"], [1, "badge", "bg-info"], ["class", "text-muted text-center py-3", 4, "ngIf"], ["id", "courseSectionsAccordion", 1, "accordion", "icd-accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-star", "me-2", "text-warning"], [1, "d-flex", "align-items-center", "gap-3"], [1, "badge", "bg-secondary"], ["class", "text-center py-3", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], ["alt", "cover", 1, "img-fluid", "rounded", "shadow-sm", "icd-cover-image", 3, "error", "src"], [1, "icd-cover-placeholder", "rounded", "shadow-sm"], [1, "fa-solid", "fa-book-open"], [1, "badge", "bg-primary"], [1, "fa-solid", "fa-pen-to-square", "me-1"], [1, "badge", "bg-warning", "text-dark"], [1, "fa-solid", "fa-star", "me-1"], [1, "text-decoration-line-through", "text-muted", "me-1"], [1, "fw-bold", "text-danger"], [1, "fa-solid", "fa-check-circle", "me-1"], [1, "alert", "alert-info", "mb-4"], [1, "fa-solid", "fa-info-circle", "me-2"], [1, "alert", "alert-warning", "mb-4"], [1, "fa-solid", "fa-exclamation-triangle", "me-2"], [1, "alert", "alert-danger", "mb-4"], [1, "fa-solid", "fa-ban", "me-2"], [1, "mb-3"], [1, "small"], [1, "text-muted", "small", "mt-1", 2, "white-space", "pre-line"], [1, "text-muted", "text-center", "py-3"], [1, "fa-solid", "fa-inbox", "fa-2x", "mb-2", "d-block"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", 1, "accordion-button"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-secondary", "rounded-pill"], [1, "badge", "bg-info", "ms-2"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-0"], ["class", "d-flex justify-content-between align-items-center px-3 py-2 border-bottom icd-lesson-row", 4, "ngFor", "ngForOf"], ["class", "text-muted text-center py-2 small", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "px-3", "py-2", "border-bottom", "icd-lesson-row"], [1, "fa-solid", "fa-play-circle", "text-primary"], ["class", "badge bg-success", 4, "ngIf"], [1, "d-flex", "gap-2"], ["type", "button", "class", "btn btn-sm btn-outline-success", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-info", 3, "click", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "badge", "bg-success"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "fa-solid", "fa-video", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "fa-solid", "fa-file-pdf", "me-1"], [1, "text-muted", "small"], [1, "text-muted", "text-center", "py-2", "small"], [1, "fa", "fa-star", "text-warning", "ms-1"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-warning"], [1, "ms-2", "text-muted"], [1, "text-center", "py-4"], [1, "fa-solid", "fa-comment-slash", "fa-2x", "text-muted", "mb-2", "d-block"], [1, "text-muted", "mb-0"], [1, "row", "mb-3"], [1, "col-md-4", "text-center"], [1, "mb-0", "text-warning"], [1, "mb-1"], ["style", "font-size: 16px;", 3, "class", 4, "ngFor", "ngForOf"], ["class", "d-flex gap-3 py-3 border-bottom icd-review-row", 4, "ngFor", "ngForOf"], [2, "font-size", "16px"], [1, "d-flex", "gap-3", "py-3", "border-bottom", "icd-review-row"], [1, "flex-shrink-0"], ["size", "md", 3, "imageUrl", "name"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], ["style", "font-size: 12px;", 3, "class", 4, "ngFor", "ngForOf"], [1, "text-muted", "ms-auto"], [1, "mb-0", "text-muted", "small"], [2, "font-size", "12px"], ["controls", "", 1, "rounded", 2, "width", "100%", "max-height", "70vh", "background", "#000", 3, "src"], [1, "rounded", 2, "width", "100%", "height", "70vh", "border", "none", 3, "src"]],
      template: function InstructorCourseDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstructorCourseDetailComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Retour ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, InstructorCourseDetailComponent_h4_5_Template, 3, 1, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, InstructorCourseDetailComponent_div_6_Template, 3, 1, "div", 5)(7, InstructorCourseDetailComponent_div_7_Template, 4, 0, "div", 6)(8, InstructorCourseDetailComponent_div_8_Template, 117, 38, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h6", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, InstructorCourseDetailComponent_video_18_Template, 1, 1, "video", 15)(19, InstructorCourseDetailComponent_iframe_19_Template, 1, 1, "iframe", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.course);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.course);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.previewType === "video" ? "fa-solid fa-video me-2" : "fa-solid fa-file-pdf me-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.previewType === "video" ? "Pr\u00E9visualisation vid\u00E9o" : "Pr\u00E9visualisation PDF", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.previewType === "video" && ctx.previewUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.previewType === "pdf" && ctx.previewUrl);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _shared_components_avatar_fallback_avatar_fallback_component__WEBPACK_IMPORTED_MODULE_1__.AvatarFallbackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["\n\n.icd-page[_ngcontent-%COMP%]   .icd-topbar[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem !important;\n}\n.icd-page[_ngcontent-%COMP%]   .icd-back-btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding-inline: 0.9rem;\n  font-weight: 600;\n}\n.icd-page[_ngcontent-%COMP%]   .icd-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.icd-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 6px 20px rgba(17, 24, 39, 0.06) !important;\n}\n\n.icd-hero-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n}\n\n.icd-cover-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n\n.icd-cover-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: #fff;\n  font-weight: 800;\n  font-size: 26px;\n  letter-spacing: 0.02em;\n}\n.icd-cover-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  opacity: 0.95;\n}\n\n.icd-stat-chip[_ngcontent-%COMP%] {\n  background: var(--bs-tertiary-bg, #f8fafc);\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  border-radius: 12px;\n  padding: 0.45rem 0.6rem;\n}\n\n.icd-edit-btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 600;\n  padding-inline: 0.9rem;\n}\n\n.icd-card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);\n  background: linear-gradient(180deg, rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.55)) !important;\n}\n\n.icd-accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%] {\n  border-inline: 0;\n  border-top: 0;\n  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);\n}\n.icd-accordion[_ngcontent-%COMP%]   .accordion-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.icd-lesson-row[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.icd-lesson-row[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.04);\n}\n\n.icd-review-row[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.icd-review-row[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.05);\n}\n\n@media (max-width: 767.98px) {\n  .icd-cover-image[_ngcontent-%COMP%] {\n    height: 190px;\n    margin-bottom: 0.85rem;\n  }\n  .icd-cover-placeholder[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n  .icd-hero-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.95rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLWNvdXJzZS1kZXRhaWwvaW5zdHJ1Y3Rvci1jb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUFBO0FBR0M7RUFDQyxpQ0FBQTtBQURGO0FBSUM7RUFDQyxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUtDO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU9BO0VBQ0MsaURBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0RBQUE7QUFKRDs7QUFPQTtFQUNDLGVBQUE7QUFKRDs7QUFPQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFKRDs7QUFPQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBSkQ7QUFNQztFQUNDLGVBQUE7RUFDQSxhQUFBO0FBSkY7O0FBUUE7RUFDQywwQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxEOztBQVFBO0VBQ0Msb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTEQ7O0FBUUE7RUFDQyx3REFBQTtFQUNBLG9HQUFBO0FBTEQ7O0FBU0M7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtBQU5GO0FBU0M7RUFDQyxnQkFBQTtBQVBGOztBQVdBO0VBQ0Msc0NBQUE7QUFSRDtBQVVDO0VBQ0Msb0NBQUE7QUFSRjs7QUFZQTtFQUNDLHNDQUFBO0FBVEQ7QUFXQztFQUNDLG9DQUFBO0FBVEY7O0FBYUE7RUFDQztJQUNDLGFBQUE7SUFDQSxzQkFBQTtFQVZBO0VBYUQ7SUFDQyxhQUFBO0VBWEE7RUFjRDtJQUNDLGdCQUFBO0VBWkE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGluc3RydWN0b3ItY291cnNlLWRldGFpbC5jb21wb25lbnQuc2NzcyAqL1xyXG5cclxuLmljZC1wYWdlIHtcclxuXHQuaWNkLXRvcGJhciB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuaWNkLWJhY2stYnRuIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdFx0cGFkZGluZy1pbmxpbmU6IC45cmVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcblxyXG5cdC5pY2QtdGl0bGUge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAtLjAxZW07XHJcblx0fVxyXG59XHJcblxyXG4uaWNkLWNhcmQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxNywgMjQsIDM5LCAuMDYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY2QtaGVyby1jYXJkIC5jYXJkLWJvZHkge1xyXG5cdHBhZGRpbmc6IDEuMnJlbTtcclxufVxyXG5cclxuLmljZC1jb3Zlci1pbWFnZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAyMjBweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmljZC1jb3Zlci1wbGFjZWhvbGRlciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAyMjBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Z2FwOiAxMHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAuMDJlbTtcclxuXHJcblx0aSB7XHJcblx0XHRmb250LXNpemU6IDIycHg7XHJcblx0XHRvcGFjaXR5OiAuOTU7XHJcblx0fVxyXG59XHJcblxyXG4uaWNkLXN0YXQtY2hpcCB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tYnMtdGVydGlhcnktYmcsICNmOGZhZmMpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRwYWRkaW5nOiAuNDVyZW0gLjZyZW07XHJcbn1cclxuXHJcbi5pY2QtZWRpdC1idG4ge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0cGFkZGluZy1pbmxpbmU6IC45cmVtO1xyXG59XHJcblxyXG4uaWNkLWNhcmQtaGVhZGVyIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI0OCwyNTAsMjUyLC44NSksIHJnYmEoMjQ4LDI1MCwyNTIsLjU1KSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljZC1hY2NvcmRpb24ge1xyXG5cdC5hY2NvcmRpb24taXRlbSB7XHJcblx0XHRib3JkZXItaW5saW5lOiAwO1xyXG5cdFx0Ym9yZGVyLXRvcDogMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xyXG5cdH1cclxuXHJcblx0LmFjY29yZGlvbi1idXR0b24ge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcbn1cclxuXHJcbi5pY2QtbGVzc29uLXJvdyB7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgLjA0KTtcclxuXHR9XHJcbn1cclxuXHJcbi5pY2QtcmV2aWV3LXJvdyB7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgLjA1KTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG5cdC5pY2QtY292ZXItaW1hZ2Uge1xyXG5cdFx0aGVpZ2h0OiAxOTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IC44NXJlbTtcclxuXHR9XHJcblxyXG5cdC5pY2QtY292ZXItcGxhY2Vob2xkZXIge1xyXG5cdFx0aGVpZ2h0OiAxOTBweDtcclxuXHR9XHJcblxyXG5cdC5pY2QtaGVyby1jYXJkIC5jYXJkLWJvZHkge1xyXG5cdFx0cGFkZGluZzogLjk1cmVtO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return InstructorCourseDetailComponent;
})();

/***/ }),

/***/ 39937:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/course-image.util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCourseImage: () => (/* binding */ resolveCourseImage)
/* harmony export */ });
const DEFAULT_BACKEND_BASE_URL = 'http://localhost:8081';
function resolveCourseImage(path, fallback = 'assets/img/course-img/courses-01.jpg') {
  const normalized = sanitizePath(path);
  if (!normalized) return fallback;
  if (normalized.startsWith('http://') || normalized.startsWith('https://') || normalized.startsWith('data:image/')) {
    return normalized;
  }
  if (normalized.startsWith('assets/')) {
    return normalized;
  }
  if (normalized.startsWith('preset:')) {
    const presetName = normalizeLegacyPresetFileName(normalized.replace('preset:', '').trim());
    return resolveAssetPresetImage(presetName);
  }
  const lower = normalized.toLowerCase();
  // Legacy absolute paths may include /uploads/... somewhere in the middle
  const uploadsWithSlashIndex = lower.indexOf('/uploads/');
  if (uploadsWithSlashIndex > 0) {
    const suffix = normalized.substring(uploadsWithSlashIndex + '/uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  // Legacy absolute paths may include uploads/... without leading slash
  const uploadsIndex = lower.indexOf('uploads/');
  if (uploadsIndex > 0) {
    const suffix = normalized.substring(uploadsIndex + 'uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  if (!normalized.includes('/')) {
    const fileName = normalizeLegacyPresetFileName(normalized);
    if (/^(course-img|courses-)/i.test(fileName)) {
      return resolveAssetPresetImage(fileName);
    }
  }
  // Legacy records may store only sub-directory paths like "covers/abc.jpg".
  if (/^(covers|videos|pdfs|avatars)\//i.test(normalized)) {
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${normalized}`;
  }
  // Legacy records may store "uploads/..." without leading slash.
  if (/^uploads\//i.test(normalized)) {
    const suffix = normalized.substring('uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  // Legacy records may store "/uploads/..." with wrong casing.
  if (/^\/uploads\//i.test(normalized)) {
    const suffix = normalized.substring('/uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  if (normalized.startsWith('/')) {
    return `${DEFAULT_BACKEND_BASE_URL}${normalized}`;
  }
  return `${DEFAULT_BACKEND_BASE_URL}/${normalized}`;
}
function normalizeLegacyPresetFileName(name) {
  const trimmed = (name || '').trim();
  const match = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
  if (!match) return trimmed;
  return `course-img${match[1]}.${match[2]}`;
}
function sanitizePath(path) {
  const raw = String(path || '').trim().replace(/\\/g, '/');
  if (!raw) return '';
  // Some payloads contain quoted values: "..." or '...'
  const unquoted = raw.replace(/^['"]+|['"]+$/g, '').trim();
  return unquoted;
}
function resolveAssetPresetImage(fileName) {
  if (/^course-img/i.test(fileName) || /^courses-/i.test(fileName)) {
    return `assets/img/course-img/${fileName}`;
  }
  return `assets/img/course/${fileName}`;
}

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
//# sourceMappingURL=3672.js.map