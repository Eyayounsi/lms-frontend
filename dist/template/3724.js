"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3724],{

/***/ 3724:
/*!**********************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-quiz/instructor-quiz.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorQuizComponent: () => (/* binding */ InstructorQuizComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 16060);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/quiz/quiz.service */ 7512);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 85422);













const _c0 = a0 => ["/instructor/instructor-quiz-questions", a0];
const _c1 = a0 => ["/instructor/instructor-quiz-results", a0];
function InstructorQuizComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function InstructorQuizComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 65)(1, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Aucun quiz cr\u00E9\u00E9 pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function InstructorQuizComponent_div_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Le\u00E7on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function InstructorQuizComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "div", 69)(3, "div")(4, "h6", 70)(5, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, InstructorQuizComponent_div_13_span_9_Template, 3, 0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 74)(11, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 79)(21, "div", 80)(22, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "R\u00E9sultats");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_div_13_Template_a_click_27_listener() {
      const quiz_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openEditModal(quiz_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](28, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_div_13_Template_a_click_29_listener() {
      const quiz_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.confirmDelete(quiz_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const quiz_r2 = ctx.$implicit;
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("mb-0", last_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c0, quiz_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](quiz_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", quiz_r2.lessonTitle ? quiz_r2.lessonTitle + " " : "", "", quiz_r2.courseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", quiz_r2.lessonTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", quiz_r2.numberOfQuestions, " Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", quiz_r2.durationMinutes, " Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("Pass: ", quiz_r2.passMark, "/", quiz_r2.totalMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c0, quiz_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](17, _c1, quiz_r2.id));
  }
}
function InstructorQuizComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.formError);
  }
}
function InstructorQuizComponent_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", c_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](c_r5.title);
  }
}
function InstructorQuizComponent_div_63_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", s_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](s_r7.title);
  }
}
function InstructorQuizComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Section (optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_div_63_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.formSectionId, $event) || (ctx_r2.formSectionId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InstructorQuizComponent_div_63_Template_select_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onSectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "-- Aucune --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, InstructorQuizComponent_div_63_option_6_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.formSectionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.formSections);
  }
}
function InstructorQuizComponent_div_64_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", l_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](l_r9.title);
  }
}
function InstructorQuizComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Le\u00E7on (optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_div_64_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.formLessonId, $event) || (ctx_r2.formLessonId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "-- Aucune --");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, InstructorQuizComponent_div_64_option_6_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.formLessonId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.formLessons);
  }
}
function InstructorQuizComponent_p_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("Points auto-distribu\u00E9s : ", ctx_r2.formTotalMarks, " / ", ctx_r2.formQuestions.length, " = ~", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 3, ctx_r2.formTotalMarks / ctx_r2.formQuestions.length, "1.0-0"), " pts/question ");
  }
}
function InstructorQuizComponent_div_78_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 109)(1, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_div_78_div_18_Template_input_click_1_listener() {
      const ci_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).index;
      const qi_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.setCorrect(qi_r11, ci_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_div_78_div_18_Template_input_ngModelChange_2_listener($event) {
      const ch_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ch_r15.text, $event) || (ch_r15.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_div_78_div_18_Template_button_click_3_listener() {
      const ci_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13).index;
      const qi_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeChoice(qi_r11, ci_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ch_r15 = ctx.$implicit;
    const ci_r14 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const q_r12 = ctx_r15.$implicit;
    const qi_r11 = ctx_r15.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "correct_" + qi_r11)("checked", ch_r15.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ch_r15.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "cText_" + qi_r11 + "_" + ci_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", q_r12.choices.length <= 2);
  }
}
function InstructorQuizComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_div_78_Template_button_click_4_listener() {
      const qi_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeQuestion(qi_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 59)(7, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_div_78_Template_input_ngModelChange_7_listener($event) {
      const q_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r12.questionText, $event) || (q_r12.questionText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 101)(9, "div", 102)(10, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 104)(13, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_div_78_Template_input_ngModelChange_13_listener($event) {
      const q_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r12.marks, $event) || (q_r12.marks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Choix cocher la r\u00E9ponse correcte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, InstructorQuizComponent_div_78_div_18_Template, 5, 5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_div_78_Template_button_click_19_listener() {
      const qi_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addChoice(qi_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Ajouter un choix");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r12 = ctx.$implicit;
    const qi_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Question ", qi_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.formQuestions.length <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r12.questionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "qText_" + qi_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r12.marks);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "qMarks_" + qi_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", q_r12.choices);
  }
}
function InstructorQuizComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Cliquez sur \"Ajouter une question\" pour commencer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function InstructorQuizComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.formError);
  }
}
function InstructorQuizComponent_p_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"]("Points auto-distribu\u00E9s : ", ctx_r2.formTotalMarks, " / ", ctx_r2.formQuestions.length, " = ~", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 3, ctx_r2.formTotalMarks / ctx_r2.formQuestions.length, "1.0-0"), " pts/question ");
  }
}
function InstructorQuizComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Chargement des questions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function InstructorQuizComponent_ng_container_129_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 109)(1, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_ng_container_129_div_1_div_18_Template_input_click_1_listener() {
      const ci_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20).index;
      const qi_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.setCorrect(qi_r18, ci_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_ng_container_129_div_1_div_18_Template_input_ngModelChange_2_listener($event) {
      const ch_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ch_r22.text, $event) || (ch_r22.text = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_ng_container_129_div_1_div_18_Template_button_click_3_listener() {
      const ci_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20).index;
      const qi_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeChoice(qi_r18, ci_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ch_r22 = ctx.$implicit;
    const ci_r21 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const q_r19 = ctx_r22.$implicit;
    const qi_r18 = ctx_r22.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "edit_correct_" + qi_r18)("checked", ch_r22.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ch_r22.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "edit_cText_" + qi_r18 + "_" + ci_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", q_r19.choices.length <= 2 || ctx_r2.savingQuiz);
  }
}
function InstructorQuizComponent_ng_container_129_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_ng_container_129_div_1_Template_button_click_4_listener() {
      const qi_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeQuestion(qi_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 59)(7, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_ng_container_129_div_1_Template_input_ngModelChange_7_listener($event) {
      const q_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r19.questionText, $event) || (q_r19.questionText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 101)(9, "div", 102)(10, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 104)(13, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_ng_container_129_div_1_Template_input_ngModelChange_13_listener($event) {
      const q_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](q_r19.marks, $event) || (q_r19.marks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Choix cocher la r\u00E9ponse correcte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, InstructorQuizComponent_ng_container_129_div_1_div_18_Template, 5, 5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_ng_container_129_div_1_Template_button_click_19_listener() {
      const qi_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addChoice(qi_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Ajouter un choix");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r19 = ctx.$implicit;
    const qi_r18 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Question ", qi_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.formQuestions.length <= 1 || ctx_r2.savingQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r19.questionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "edit_qText_" + qi_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", q_r19.marks);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", "edit_qMarks_" + qi_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", q_r19.choices);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.savingQuiz);
  }
}
function InstructorQuizComponent_ng_container_129_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Cliquez sur \"Ajouter une question\" pour commencer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function InstructorQuizComponent_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InstructorQuizComponent_ng_container_129_div_1_Template, 22, 8, "div", 39)(2, InstructorQuizComponent_ng_container_129_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.formQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.formQuestions.length === 0);
  }
}
let InstructorQuizComponent = /*#__PURE__*/(() => {
  class InstructorQuizComponent {
    quizService;
    courseService;
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    quizzes = [];
    myCourses = [];
    loading = true;
    // â”€â”€â”€ Cascade Course â†’ Section â†’ Lesson â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    formCourseId = null;
    formSections = [];
    formSectionId = null;
    formLessons = [];
    formLessonId = null;
    // Quiz metadata
    formTitle = '';
    formTotalMarks = 100;
    formPassMark = 50;
    formDuration = 30;
    // â”€â”€â”€ Inline questions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    formQuestions = [];
    formError = '';
    questionsLoading = false;
    savingQuiz = false;
    editingOriginalQuestionIds = [];
    editingQuiz = null;
    deletingQuizId = null;
    constructor(quizService, courseService, router) {
      this.quizService = quizService;
      this.courseService = courseService;
      this.router = router;
    }
    ngOnInit() {
      this.loadQuizzes();
      this.loadCourses();
    }
    loadQuizzes() {
      this.loading = true;
      this.quizService.getInstructorQuizzes().subscribe({
        next: data => {
          this.quizzes = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    loadCourses() {
      this.courseService.getMyCourses().subscribe({
        next: data => {
          this.myCourses = data;
        }
      });
    }
    // â”€â”€â”€ Cascade logic â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    onCourseChange() {
      this.formSections = [];
      this.formSectionId = null;
      this.formLessons = [];
      this.formLessonId = null;
      if (!this.formCourseId) return;
      this.courseService.getMyCourse(this.formCourseId).subscribe({
        next: course => {
          this.formSections = course.sections || [];
        }
      });
    }
    onSectionChange() {
      this.formLessons = [];
      this.formLessonId = null;
      if (!this.formSectionId) return;
      const sec = this.formSections.find(s => s.id === this.formSectionId);
      this.formLessons = sec ? sec.lessons || [] : [];
    }
    // â”€â”€â”€ Inline questions helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    addQuestion() {
      this.formQuestions.push({
        questionText: '',
        marks: 1,
        choices: [{
          text: '',
          isCorrect: false
        }, {
          text: '',
          isCorrect: false
        }]
      });
      this.autoDistributeMarks();
    }
    removeQuestion(qi) {
      this.formQuestions.splice(qi, 1);
      this.autoDistributeMarks();
    }
    /** Auto-distribute totalMarks evenly across all questions */
    autoDistributeMarks() {
      if (this.formQuestions.length === 0) return;
      const perQuestion = Math.ceil(this.formTotalMarks / this.formQuestions.length);
      this.formQuestions.forEach(q => q.marks = perQuestion);
    }
    /** Called when totalMarks input changes */
    onTotalMarksChange() {
      this.autoDistributeMarks();
    }
    addChoice(qi) {
      this.formQuestions[qi].choices.push({
        text: '',
        isCorrect: false
      });
    }
    removeChoice(qi, ci) {
      if (this.formQuestions[qi].choices.length > 2) {
        this.formQuestions[qi].choices.splice(ci, 1);
      }
    }
    setCorrect(qi, ci) {
      // Toggle selected; for MULTIPLE_CHOICE allow only 1 correct (radio-like)
      this.formQuestions[qi].choices.forEach((c, idx) => c.isCorrect = idx === ci);
    }
    // â”€â”€â”€ Form submit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    resetForm() {
      this.formCourseId = null;
      this.formSections = [];
      this.formSectionId = null;
      this.formLessons = [];
      this.formLessonId = null;
      this.formTitle = '';
      this.formTotalMarks = 100;
      this.formPassMark = 50;
      this.formDuration = 30;
      this.formQuestions = [];
      this.formError = '';
      this.editingQuiz = null;
      this.questionsLoading = false;
      this.savingQuiz = false;
      this.editingOriginalQuestionIds = [];
    }
    openAddModal() {
      this.resetForm();
      this.addQuestion(); // start with 1 question
    }
    openEditModal(quiz) {
      this.resetForm();
      this.editingQuiz = quiz;
      this.formCourseId = quiz.courseId;
      this.formTitle = quiz.title;
      this.formTotalMarks = quiz.totalMarks;
      this.formPassMark = quiz.passMark;
      this.formDuration = quiz.durationMinutes;
      this.formError = '';
      this.questionsLoading = true;
      this.quizService.getQuestions(quiz.id).subscribe({
        next: questions => {
          const list = Array.isArray(questions) ? questions : [];
          this.formQuestions = list.map(q => ({
            id: q.id,
            questionText: q.questionText || '',
            marks: Number(q.marks || 1),
            choices: (q.choices || []).map(c => ({
              text: c.text || '',
              isCorrect: !!c.isCorrect
            }))
          }));
          this.editingOriginalQuestionIds = this.formQuestions.map(q => q.id).filter(id => typeof id === 'number');
          if (this.formQuestions.length === 0) {
            this.addQuestion();
          }
          this.questionsLoading = false;
        },
        error: () => {
          this.formQuestions = [];
          this.addQuestion();
          this.questionsLoading = false;
        }
      });
    }
    validateForm(requireCourse) {
      this.formError = '';
      if (!this.formTitle.trim()) {
        this.formError = 'Le titre est requis.';
        return false;
      }
      if (requireCourse && !this.formCourseId) {
        this.formError = 'Veuillez sélectionner un cours.';
        return false;
      }
      if (this.formQuestions.length === 0) {
        this.formError = 'Au moins une question est requise.';
        return false;
      }
      for (let i = 0; i < this.formQuestions.length; i++) {
        const q = this.formQuestions[i];
        if (!q.questionText.trim()) {
          this.formError = `Question ${i + 1} : le texte est requis.`;
          return false;
        }
        const hasCorrect = q.choices.some(c => c.isCorrect);
        if (!hasCorrect) {
          this.formError = `Question ${i + 1} : marquer une réponse correcte.`;
          return false;
        }
        const emptyChoice = q.choices.some(c => !c.text.trim());
        if (emptyChoice) {
          this.formError = `Question ${i + 1} : tous les choix doivent avoir un texte.`;
          return false;
        }
      }
      return true;
    }
    submitQuiz() {
      if (this.savingQuiz) return;
      if (this.editingQuiz) {
        if (!this.validateForm(false)) return;
        const data = {
          title: this.formTitle,
          totalMarks: this.formTotalMarks,
          passMark: this.formPassMark,
          durationMinutes: this.formDuration
        };
        this.savingQuiz = true;
        this.quizService.updateQuiz(this.editingQuiz.id, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.syncEditQuestionsRequests())).subscribe({
          next: () => {
            this.savingQuiz = false;
            this.loadQuizzes();
            this.closeModal('edit_quiz');
          },
          error: err => {
            this.savingQuiz = false;
            this.formError = err?.error?.message || err?.error || 'Erreur lors de la mise à jour du quiz.';
          }
        });
      } else {
        if (!this.validateForm(true)) return;
        const data = {
          title: this.formTitle,
          totalMarks: this.formTotalMarks,
          passMark: this.formPassMark,
          durationMinutes: this.formDuration,
          courseId: this.formCourseId,
          questions: this.formQuestions.map(q => this.toQuestionPayload(q))
        };
        if (this.formLessonId) data['lessonId'] = this.formLessonId;
        this.savingQuiz = true;
        this.quizService.createQuiz(data).subscribe({
          next: created => {
            this.savingQuiz = false;
            this.closeModal('add_quiz');
            this.router.navigate(['/instructor/instructor-quiz-questions', created.id]);
          },
          error: err => {
            this.savingQuiz = false;
            this.formError = err?.error?.message || err?.error || 'Erreur lors de la création du quiz.';
          }
        });
      }
    }
    syncEditQuestionsRequests() {
      const currentExistingIds = this.formQuestions.map(q => q.id).filter(id => typeof id === 'number');
      const toDelete = this.editingOriginalQuestionIds.filter(id => !currentExistingIds.includes(id));
      const deleteRequests = toDelete.map(id => this.quizService.deleteQuestion(id));
      const upsertRequests = this.formQuestions.map(q => {
        const payload = this.toQuestionPayload(q);
        if (q.id) {
          return this.quizService.updateQuestion(q.id, payload);
        }
        return this.quizService.addQuestion(this.editingQuiz.id, payload);
      });
      const allRequests = [...deleteRequests, ...upsertRequests];
      if (allRequests.length === 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(allRequests);
    }
    toQuestionPayload(q) {
      return {
        questionText: q.questionText,
        questionType: 'MULTIPLE_CHOICE',
        marks: q.marks,
        choices: q.choices.map(c => ({
          text: c.text,
          isCorrect: c.isCorrect
        }))
      };
    }
    confirmDelete(quizId) {
      this.deletingQuizId = quizId;
    }
    deleteQuiz() {
      if (this.deletingQuizId) {
        this.quizService.deleteQuiz(this.deletingQuizId).subscribe({
          next: () => {
            this.loadQuizzes();
            this.closeModal('delete_modal');
          }
        });
      }
    }
    closeModal(id) {
      const el = document.getElementById(id);
      if (el) {
        const modal = bootstrap.Modal.getInstance(el);
        if (modal) modal.hide();
      }
    }
    static ɵfac = function InstructorQuizComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_10__.QuizService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_11__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: InstructorQuizComponent,
      selectors: [["app-instructor-quiz"]],
      decls: 151,
      vars: 29,
      consts: [[1, "iq-page"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "iq-page-title"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0", "fs-14"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_quiz", 1, "btn", "btn-secondary", "iq-add-btn", 3, "click"], [1, "isax", "isax-add-circle", "me-1"], ["class", "text-center py-4", 4, "ngIf"], ["class", "border rounded-2 p-4 text-center iq-empty-state", 4, "ngIf"], ["class", "border rounded-2 p-3 mb-3 iq-quiz-card", 3, "mb-0", 4, "ngFor", "ngForOf"], ["id", "add_quiz", 1, "modal", "fade", "iq-modal"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "iq-modal-header"], [1, "fw-bold"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [3, "ngSubmit"], [1, "modal-body", "pb-0", "iq-modal-body", 2, "max-height", "65vh", "overflow-y", "auto"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "row", "iq-form-grid"], [1, "col-md-12", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "title", "placeholder", "Ex: Quiz Chapitre 1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4", "mb-3"], ["type", "number", "name", "totalMarks", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "passMark", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "duration", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "my-3", "iq-divider"], [1, "fw-semibold", "mb-2"], ["name", "courseId", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "col-md-4 mb-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-semibold", "mb-0"], [1, "text-muted", "fs-12"], ["class", "text-muted fs-12 mb-0", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["class", "border rounded-2 p-3 mb-3 bg-light iq-question-card", 4, "ngFor", "ngForOf"], ["class", "text-center py-3 text-muted fs-12 border rounded-2 mb-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill", 3, "disabled"], ["id", "edit_quiz", 1, "modal", "fade", "iq-modal"], [1, "mb-3"], ["type", "text", "name", "editTitle", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row"], ["type", "number", "name", "editTotalMarks", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "editPassMark", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "editDuration", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], ["class", "text-center py-3", 4, "ngIf"], [4, "ngIf"], ["id", "delete_modal", 1, "modal", "fade", "iq-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body", "iq-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill", 3, "click"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "border", "rounded-2", "p-4", "text-center", "iq-empty-state"], [1, "text-muted", "mb-0"], [1, "border", "rounded-2", "p-3", "mb-3", "iq-quiz-card"], [1, "row", "align-items-center", "gy-3"], [1, "col-md-8"], [1, "mb-1", "iq-quiz-title"], [3, "routerLink"], [1, "text-muted", "fs-12", "mb-2"], ["class", "badge bg-primary-transparent text-primary ms-1", 4, "ngIf"], [1, "question-info", "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0", "iq-chip"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "isax", "isax-medal-star5", "text-warning", "me-2"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "justify-content-end", "mt-2", "mt-md-0", "iq-actions-wrap"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "routerLink"], [1, "isax", "isax-message-question5", "me-1"], [1, "text-info", "text-decoration-underline", "fs-12", "fw-medium", "me-3", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_quiz", 1, "d-inline-flex", "fs-14", "me-1", "action-icon", 3, "click"], [1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "fs-14", "action-icon", 3, "click"], [1, "isax", "isax-trash"], [1, "badge", "bg-primary-transparent", "text-primary", "ms-1"], [1, "isax", "isax-book", "me-1"], [1, "alert", "alert-danger", "py-2", "mb-3"], [3, "ngValue"], ["name", "sectionId", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["name", "lessonId", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "text-muted", "fs-12", "mb-0"], [1, "isax", "isax-info-circle", "me-1"], [1, "border", "rounded-2", "p-3", "mb-3", "bg-light", "iq-question-card"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-2"], [1, "badge", "bg-secondary-transparent", "text-secondary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], ["type", "text", "placeholder", "Texte de la question *", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "row", "align-items-center", "mb-2"], [1, "col-auto"], [1, "form-label", "fs-12", "mb-0"], [1, "col-2"], ["type", "number", "min", "1", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "fs-12", "text-muted", "mb-1"], ["class", "d-flex align-items-center gap-2 mb-1", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "text-primary", "ps-0", "mt-1", 3, "click"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], ["type", "radio", 1, "form-check-input", "mt-0", "flex-shrink-0", 2, "cursor", "pointer", 3, "click", "name", "checked"], ["type", "text", "placeholder", "Choix *", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "py-0", "px-1", "flex-shrink-0", 3, "click", "disabled"], [1, "isax", "isax-close-circle", "fs-12"], [1, "text-center", "py-3", "text-muted", "fs-12", "border", "rounded-2", "mb-3"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "text-muted", "fs-12", "mt-2", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "text-primary", "ps-0", "mt-1", 3, "click", "disabled"]],
      template: function InstructorQuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "h5", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Quiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Cr\u00E9ez et g\u00E9rez vos quiz avec une exp\u00E9rience moderne.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div")(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_Template_a_click_8_listener() {
            return ctx.openAddModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Ajouter un quiz ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, InstructorQuizComponent_div_11_Template, 2, 0, "div", 6)(12, InstructorQuizComponent_div_12_Template, 3, 0, "div", 7)(13, InstructorQuizComponent_div_13_Template, 31, 19, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Nouveau Quiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "form", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function InstructorQuizComponent_Template_form_ngSubmit_22_listener() {
            return ctx.submitQuiz();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, InstructorQuizComponent_div_24_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Titre du quiz ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formTitle, $event) || (ctx.formTitle = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 24)(33, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Total des points ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formTotalMarks, $event) || (ctx.formTotalMarks = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_37_listener() {
            return ctx.onTotalMarksChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 24)(39, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Points pour r\u00E9ussir ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formPassMark, $event) || (ctx.formPassMark = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 24)(45, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Dur\u00E9e (minutes) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formDuration, $event) || (ctx.formDuration = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "hr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "p", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Association cours / le\u00E7on");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 19)(54, "div", 24)(55, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "select", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_select_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formCourseId, $event) || (ctx.formCourseId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function InstructorQuizComponent_Template_select_change_59_listener() {
            return ctx.onCourseChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "-- S\u00E9lectionner --");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, InstructorQuizComponent_option_62_Template, 2, 2, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, InstructorQuizComponent_div_63_Template, 7, 3, "div", 33)(64, InstructorQuizComponent_div_64_Template, 7, 3, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "hr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 34)(67, "div")(68, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "Questions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "(min. 1)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, InstructorQuizComponent_p_74_Template, 4, 6, "p", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_Template_button_click_75_listener() {
            return ctx.addQuestion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](76, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Ajouter une question");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, InstructorQuizComponent_div_78_Template, 22, 7, "div", 39)(79, InstructorQuizComponent_div_79_Template, 2, 0, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 41)(81, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 44)(86, "div", 10)(87, "div", 11)(88, "div", 12)(89, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "Modifier le Quiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](92, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "form", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function InstructorQuizComponent_Template_form_ngSubmit_93_listener() {
            return ctx.submitQuiz();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, InstructorQuizComponent_div_95_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "div", 45)(97, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "Titre du quiz ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_101_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formTitle, $event) || (ctx.formTitle = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 47)(103, "div", 24)(104, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "Total des points");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formTotalMarks, $event) || (ctx.formTotalMarks = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 24)(108, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "Points pour r\u00E9ussir");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_110_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formPassMark, $event) || (ctx.formPassMark = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 24)(112, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "Dur\u00E9e (minutes)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_114_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.formDuration, $event) || (ctx.formDuration = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](115, "hr", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "div", 34)(117, "div")(118, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, "Questions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "(min. 1)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, InstructorQuizComponent_p_124_Template, 4, 6, "p", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_Template_button_click_125_listener() {
            return ctx.addQuestion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](126, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, "Ajouter une question");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, InstructorQuizComponent_div_128_Template, 4, 0, "div", 52)(129, InstructorQuizComponent_ng_container_129_Template, 3, 2, "ng-container", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "div", 41)(131, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 54)(136, "div", 55)(137, "div", 11)(138, "div", 56)(139, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](140, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "div")(142, "h4", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "Supprimer le Quiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "p", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "\u00CAtes-vous s\u00FBr de vouloir supprimer ce quiz ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "div", 60)(147, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "a", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InstructorQuizComponent_Template_a_click_149_listener() {
            return ctx.deleteQuiz();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](150, "Oui, Supprimer");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.quizzes.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.quizzes);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formError);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formTotalMarks);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formPassMark);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formDuration);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formCourseId);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.myCourses);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formSections.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formLessons.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formQuestions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.formQuestions);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formQuestions.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.savingQuiz);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.savingQuiz ? "Cr\u00E9ation..." : "Cr\u00E9er le quiz", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formError);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formTotalMarks);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formPassMark);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.formDuration);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.formQuestions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.questionsLoading || ctx.savingQuiz);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.questionsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.questionsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.savingQuiz || ctx.questionsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.savingQuiz ? "Sauvegarde..." : "Sauvegarder", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.iq-page[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_iqFadeIn 0.35s ease;\n}\n\n.iq-page-title[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.iq-add-btn[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 10px 18px rgba(99, 102, 241, 0.25);\n}\n\n.iq-empty-state[_ngcontent-%COMP%] {\n  border-color: #e5e7eb !important;\n  background: linear-gradient(180deg, #fbfdff, #ffffff);\n}\n\n.iq-quiz-card[_ngcontent-%COMP%] {\n  border-color: #e6eaf2 !important;\n  border-radius: 16px !important;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n  transition: all 0.25s ease;\n  background: #fff;\n}\n.iq-quiz-card[_ngcontent-%COMP%]:hover {\n  border-color: #c7d2fe !important;\n  box-shadow: 0 14px 28px rgba(79, 70, 229, 0.12);\n  transform: translateY(-2px);\n}\n\n.iq-quiz-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e293b;\n  text-decoration: none;\n}\n.iq-quiz-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4338ca;\n}\n\n.iq-chip[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  padding: 5px 10px;\n  background: #f8fafc;\n}\n\n.iq-actions-wrap[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #dbe2f0;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.iq-actions-wrap[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n  background: #eef2ff;\n  color: #4338ca;\n}\n\n.iq-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border: 1px solid #e6eaf2;\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);\n}\n\n.iq-modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9edf5;\n  background: linear-gradient(180deg, #fbfcff, #f8fafc);\n}\n\n.iq-modal-body[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.iq-form-grid[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.iq-form-grid[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.iq-modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.iq-modal-body[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border-color: #e2e8f0;\n  box-shadow: none;\n}\n.iq-form-grid[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.iq-form-grid[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.iq-modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.iq-modal-body[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n\n.iq-divider[_ngcontent-%COMP%] {\n  border-color: #edf2f7;\n}\n\n.iq-question-card[_ngcontent-%COMP%] {\n  border-color: #e3e8f4 !important;\n  border-radius: 14px !important;\n  background: linear-gradient(180deg, #fbfdff, #f8fbff) !important;\n}\n\n.iq-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9edf5;\n  background: #fcfdff;\n}\n\n@keyframes _ngcontent-%COMP%_iqFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLXF1aXovaW5zdHJ1Y3Rvci1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEOztBQUVBO0VBQ0MsOEJBQUE7QUFDRDs7QUFFQTtFQUNDLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLGdEQUFBO0FBQ0Q7O0FBRUE7RUFDQyxnQ0FBQTtFQUNBLHFEQUFBO0FBQ0Q7O0FBRUE7RUFDQyxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7QUFDQztFQUNDLGdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUdBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FBQUQ7QUFFQztFQUNDLGNBQUE7QUFBRjs7QUFJQTtFQUNDLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBREQ7QUFHQztFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBS0E7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQUZEOztBQUtBO0VBQ0MsZ0NBQUE7RUFDQSxxREFBQTtBQUZEOztBQUtBO0VBQ0MsZ0JBQUE7QUFGRDs7QUFLQTs7OztFQUlDLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZEO0FBSUM7Ozs7RUFDQyxxQkFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBR0E7RUFDQyxxQkFBQTtBQUFEOztBQUdBO0VBQ0MsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGdFQUFBO0FBQUQ7O0FBR0E7RUFDQyw2QkFBQTtFQUNBLG1CQUFBO0FBQUQ7O0FBR0E7RUFDQztJQUFPLFVBQUE7SUFBWSwwQkFBQTtFQUVsQjtFQUREO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBS2hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pcS1wYWdlIHtcclxuXHRhbmltYXRpb246IGlxRmFkZUluIC4zNXMgZWFzZTtcclxufVxyXG5cclxuLmlxLXBhZ2UtdGl0bGUge1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5pcS1hZGQtYnRuIHtcclxuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMTBweCAxOHB4IHJnYmEoOTksIDEwMiwgMjQxLCAuMjUpO1xyXG59XHJcblxyXG4uaXEtZW1wdHktc3RhdGUge1xyXG5cdGJvcmRlci1jb2xvcjogI2U1ZTdlYiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmZkZmYsICNmZmZmZmYpO1xyXG59XHJcblxyXG4uaXEtcXVpei1jYXJkIHtcclxuXHRib3JkZXItY29sb3I6ICNlNmVhZjIgIWltcG9ydGFudDtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4ICFpbXBvcnRhbnQ7XHJcblx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIC4wNik7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI2M3ZDJmZSAhaW1wb3J0YW50O1xyXG5cdFx0Ym94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSg3OSwgNzAsIDIyOSwgLjEyKTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuXHR9XHJcbn1cclxuXHJcbi5pcS1xdWl6LXRpdGxlIGEge1xyXG5cdGNvbG9yOiAjMWUyOTNiO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjb2xvcjogIzQzMzhjYTtcclxuXHR9XHJcbn1cclxuXHJcbi5pcS1jaGlwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbn1cclxuXHJcbi5pcS1hY3Rpb25zLXdyYXAgLmFjdGlvbi1pY29uIHtcclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZjA7XHJcblx0Y29sb3I6ICM2NDc0OGI7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI2E1YjRmYztcclxuXHRcdGJhY2tncm91bmQ6ICNlZWYyZmY7XHJcblx0XHRjb2xvcjogIzQzMzhjYTtcclxuXHR9XHJcbn1cclxuXHJcbi5pcS1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U2ZWFmMjtcclxuXHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgxNSwgMjMsIDQyLCAuMTgpO1xyXG59XHJcblxyXG4uaXEtbW9kYWwtaGVhZGVyIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWRmNTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJmY2ZmLCAjZjhmYWZjKTtcclxufVxyXG5cclxuLmlxLW1vZGFsLWJvZHkge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5pcS1mb3JtLWdyaWQgLmZvcm0tY29udHJvbCxcclxuLmlxLWZvcm0tZ3JpZCAuZm9ybS1zZWxlY3QsXHJcbi5pcS1tb2RhbC1ib2R5IC5mb3JtLWNvbnRyb2wsXHJcbi5pcS1tb2RhbC1ib2R5IC5mb3JtLXNlbGVjdCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRib3JkZXItY29sb3I6ICNlMmU4ZjA7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHJcblx0Jjpmb2N1cyB7XHJcblx0XHRib3JkZXItY29sb3I6ICNhNWI0ZmM7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4xMik7XHJcblx0fVxyXG59XHJcblxyXG4uaXEtZGl2aWRlciB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZWRmMmY3O1xyXG59XHJcblxyXG4uaXEtcXVlc3Rpb24tY2FyZCB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZTNlOGY0ICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmZkZmYsICNmOGZiZmYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pcS1tb2RhbCAubW9kYWwtZm9vdGVyIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWRmNTtcclxuXHRiYWNrZ3JvdW5kOiAjZmNmZGZmO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGlxRmFkZUluIHtcclxuXHRmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7IH1cclxuXHR0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return InstructorQuizComponent;
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
//# sourceMappingURL=3724.js.map