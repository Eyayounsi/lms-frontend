"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8203],{

/***/ 28203:
/*!*************************************************************************!*\
  !*** ./src/app/features/courses/course-watch/course-watch.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseWatchComponent: () => (/* binding */ CourseWatchComponent)
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipe/safe-url.pipe */ 27890);
/* harmony import */ var _shared_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipe/safe-html.pipe */ 37022);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _shared_service_note_note_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/service/note/note.service */ 46054);
/* harmony import */ var _shared_service_qa_qa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/service/qa/qa.service */ 9490);
/* harmony import */ var _shared_service_detection_detection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/service/detection/detection.service */ 28768);
/* harmony import */ var _shared_service_ai_ai_agents_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/service/ai/ai-agents.service */ 23947);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 54285);






 // keeps innerHTML unsanitized so Quill HTML renders correctly












const _c0 = ["videoPlayer"];
const _c1 = ["cameraVideo"];
const _c2 = ["cameraCanvas"];
const _c3 = () => ["/student/student-dashboard"];
const _c4 = (a0, a1, a2) => ({
  "isax-play-circle text-primary": a0,
  "isax-play-circle5 text-muted": a1,
  "isax-document text-danger": a2
});
const _c5 = (a0, a1, a2, a3) => ({
  "bg-success": a0,
  "bg-primary": a1,
  "bg-warning text-dark": a2,
  "bg-danger text-white": a3
});
const _c6 = (a0, a1, a2, a3) => ({
  "isax-tick-circle5": a0,
  "isax-video-circle5": a1,
  "isax-note-2": a2,
  "isax-document": a3
});
function CourseWatchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Chargement du cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseWatchComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Retour aux cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function CourseWatchComponent_div_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Last activity: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ctx_r0.courseProgress.lastAccessedAt, "mediumDate"), " ");
  }
}
function CourseWatchComponent_div_4_div_20_div_16_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 67);
  }
}
function CourseWatchComponent_div_4_div_20_div_16_ng_template_4_i_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 70);
  }
}
function CourseWatchComponent_div_4_div_20_div_16_ng_template_4_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 71);
  }
  if (rf & 2) {
    const lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](1, _c4, lesson_r4.id === ctx_r0.activeLessonId && lesson_r4.lessonType !== "PDF", lesson_r4.id !== ctx_r0.activeLessonId && lesson_r4.lessonType !== "PDF", lesson_r4.lessonType === "PDF"));
  }
}
function CourseWatchComponent_div_4_div_20_div_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, CourseWatchComponent_div_4_div_20_div_16_ng_template_4_i_0_Template, 1, 0, "i", 68)(1, CourseWatchComponent_div_4_div_20_div_16_ng_template_4_i_1_Template, 1, 5, "i", 69);
  }
  if (rf & 2) {
    const lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isLessonLocked(lesson_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.isLessonLocked(lesson_r4.id));
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.formatDuration(lesson_r4.durationSeconds));
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "span", 76);
  }
}
function CourseWatchComponent_div_4_div_20_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_20_div_16_Template_div_click_0_listener() {
      const lesson_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.selectLesson(lesson_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 56)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, CourseWatchComponent_div_4_div_20_div_16_i_3_Template, 1, 0, "i", 58)(4, CourseWatchComponent_div_4_div_20_div_16_ng_template_4_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 59)(7, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CourseWatchComponent_div_4_div_20_div_16_span_10_Template, 2, 0, "span", 62)(11, CourseWatchComponent_div_4_div_20_div_16_span_11_Template, 2, 0, "span", 63)(12, CourseWatchComponent_div_4_div_20_div_16_span_12_Template, 2, 0, "span", 64)(13, CourseWatchComponent_div_4_div_20_div_16_span_13_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CourseWatchComponent_div_4_div_20_div_16_span_14_Template, 1, 0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lesson_r4 = ctx.$implicit;
    const notDoneIcon_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cw-lesson-row--active", lesson_r4.id === ctx_r0.activeLessonId)("cw-lesson-row--done", ctx_r0.isLessonDone(lesson_r4.id) && lesson_r4.id !== ctx_r0.activeLessonId)("cw-lesson-row--locked", ctx_r0.isLessonLocked(lesson_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isLessonDone(lesson_r4.id))("ngIfElse", notDoneIcon_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("fw-semibold", lesson_r4.id === ctx_r0.activeLessonId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](lesson_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lesson_r4.hasQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lesson_r4.lessonType === "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lesson_r4.lessonType === "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lesson_r4.durationSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lesson_r4.id === ctx_r0.activeLessonId);
  }
}
function CourseWatchComponent_div_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "div", 45)(4, "div", 46)(5, "div")(6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 52)(15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CourseWatchComponent_div_4_div_20_div_16_Template, 15, 16, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r6 = ctx.$implicit;
    const si_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-bs-target", "#cw-sec-" + si_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Section ", si_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](section_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.getSectionProgress(section_r6), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r0.getSectionProgress(section_r6), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("bg-success", ctx_r0.getSectionProgress(section_r6) === 100)("bg-primary", ctx_r0.getSectionProgress(section_r6) < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", "cw-sec-" + si_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", section_r6.lessons);
  }
}
function CourseWatchComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_ng_container_24_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.activeLesson.description);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "video", 94, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ended", function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template_video_ended_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onVideoEnd());
    })("pause", function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template_video_pause_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.saveCurrentProgress());
    })("timeupdate", function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template_video_timeupdate_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Votre navigateur ne supporte pas la balise video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r0.getMediaUrl(ctx_r0.activeLesson.videoUrl), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95)(1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Vid\u00E9o non disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template, 4, 1, "div", 93)(2, CourseWatchComponent_div_4_ng_container_24_div_10_ng_template_2_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const noVideo_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.videoUrl)("ngIfElse", noVideo_r10);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "iframe", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r0.getMediaUrl(ctx_r0.activeLesson.pdfUrl)), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeResourceUrl"]);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r0.activeLesson.articleContent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.activeLesson.description || "Contenu textuel de la le\u00E7on.");
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_ng_container_24_div_12_div_1_Template, 2, 3, "div", 100)(2, CourseWatchComponent_div_4_ng_container_24_div_12_ng_template_2_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const textFallback_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.articleContent)("ngIfElse", textFallback_r11);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 103)(1, "div", 104)(2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 107)(5, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Quiz associ\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.activeLesson.quizTitle || "Quiz de la le\u00E7on");
  }
}
function CourseWatchComponent_div_4_ng_container_24_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Faire le Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function CourseWatchComponent_div_4_ng_container_24_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function CourseWatchComponent_div_4_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 78)(2, "div", 79)(3, "div")(4, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CourseWatchComponent_div_4_ng_container_24_p_6_Template, 2, 1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, CourseWatchComponent_div_4_ng_container_24_div_10_Template, 4, 2, "div", 13)(11, CourseWatchComponent_div_4_ng_container_24_div_11_Template, 3, 3, "div", 13)(12, CourseWatchComponent_div_4_ng_container_24_div_12_Template, 4, 2, "div", 84)(13, CourseWatchComponent_div_4_ng_container_24_div_13_Template, 9, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 86)(15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_ng_container_24_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.goToPrevLesson());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_ng_container_24_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.markCompleted());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_ng_container_24_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.goToNextOrQuiz());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CourseWatchComponent_div_4_ng_container_24_ng_container_22_Template, 3, 0, "ng-container", 13)(23, CourseWatchComponent_div_4_ng_container_24_ng_container_23_Template, 3, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.activeLesson.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](22, _c5, ctx_r0.lessonCompleted, !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType !== "TEXT" && ctx_r0.activeLesson.lessonType !== "PDF", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "TEXT", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "PDF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](27, _c6, ctx_r0.lessonCompleted, !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType !== "TEXT" && ctx_r0.activeLesson.lessonType !== "PDF", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "TEXT", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "PDF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.lessonCompleted ? "Termin\u00E9" : ctx_r0.activeLesson.lessonType === "TEXT" ? "Article" : ctx_r0.activeLesson.lessonType === "PDF" ? "PDF" : "Vid\u00E9o", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.lessonType === "VIDEO" || !ctx_r0.activeLesson.lessonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.lessonType === "PDF" && ctx_r0.activeLesson.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.lessonType === "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.hasQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.lessonCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("isax-tick-circle5", ctx_r0.lessonCompleted)("isax-tick-circle", !ctx_r0.lessonCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.lessonCompleted ? "Termin\u00E9 \u2713" : "Marquer comme termin\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cw-nav-btn--quiz", ctx_r0.activeLesson.hasQuiz)("cw-nav-btn--next", !ctx_r0.activeLesson.hasQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.lessonCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.hasQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.activeLesson.hasQuiz);
  }
}
function CourseWatchComponent_div_4_div_25_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.reviews.length);
  }
}
function CourseWatchComponent_div_4_div_25_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.qaQuestions.length);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.activeLesson.description);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](obj_r13);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 23)(2, "h6", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "What You'll Learn");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ul", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_li_5_Template, 2, 1, "li", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.course.objectives);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const req_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](req_r14);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 48)(2, "h6", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ul", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_li_5_Template, 2, 1, "li", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.course.requirements);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 23)(2, "h6", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_p_4_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_Template, 6, 1, "ng-container", 13)(6, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_Template, 6, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.activeLesson.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.course.objectives == null ? null : ctx_r0.course.objectives.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.course.requirements == null ? null : ctx_r0.course.requirements.length);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "S\u00E9lectionnez une le\u00E7on dans le panneau de gauche pour commencer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseWatchComponent_div_4_div_25_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_Template, 7, 4, "ng-container", 93)(2, CourseWatchComponent_div_4_div_25_div_16_ng_template_2_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const noLessonOverview_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson)("ngIfElse", noLessonOverview_r15);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_17_div_1_span_5_Template_span_click_0_listener() {
      const s_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.myRating = s_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-warning", s_r18 <= ctx_r0.myRating)("text-muted", s_r18 > ctx_r0.myRating);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_17_div_1_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.deleteMyReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.reviewMsg);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.reviewError);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 134)(1, "h6", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseWatchComponent_div_4_div_25_div_17_div_1_span_5_Template, 2, 4, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "textarea", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_17_div_1_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.myComment, $event) || (ctx_r0.myComment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 141)(10, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_17_div_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.submitReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CourseWatchComponent_div_4_div_25_div_17_div_1_button_13_Template, 3, 0, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CourseWatchComponent_div_4_div_25_div_17_div_1_div_14_Template, 2, 1, "div", 145)(15, CourseWatchComponent_div_4_div_25_div_17_div_1_div_15_Template, 2, 1, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.myReview ? "Modifier mon avis" : "Laisser un avis", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.myRating, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.myComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.reviewSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.reviewSubmitting ? "Envoi..." : ctx_r0.myReview ? "Modifier" : "Publier", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.myReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.reviewMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.reviewError);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Terminez le cours \u00E0 100% pour laisser un avis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Aucun avis pour l'instant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r20 = ctx.$implicit;
    const review_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](s_r20 <= review_r21.rating ? "fa fa-star text-warning" : "fa fa-star-o text-muted");
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const review_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](review_r21.comment);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Aucun commentaire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 157)(1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 160)(4, "div", 161)(5, "strong", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CourseWatchComponent_div_4_div_25_div_17_div_4_span_11_Template, 2, 2, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CourseWatchComponent_div_4_div_25_div_17_div_4_p_14_Template, 2, 1, "p", 166)(15, CourseWatchComponent_div_4_div_25_div_17_div_4_p_15_Template, 2, 0, "p", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const review_r21 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", review_r21.studentAvatar ? "http://localhost:8081/" + review_r21.studentAvatar : "assets/img/profiles/avatar-02.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](review_r21.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 7, review_r21.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", review_r21.rating, "/5)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", review_r21.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !review_r21.comment);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_div_25_div_17_div_1_Template, 16, 9, "div", 130)(2, CourseWatchComponent_div_4_div_25_div_17_div_2_Template, 4, 0, "div", 131)(3, CourseWatchComponent_div_4_div_25_div_17_div_3_Template, 4, 0, "div", 132)(4, CourseWatchComponent_div_4_div_25_div_17_div_4_Template, 16, 10, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isCourseDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.isCourseDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.reviews.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (le\u00E7on : ", ctx_r0.activeLesson.title, ")");
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Aucune question pour l'instant. Soyez le premier !");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.qaActiveQuestion.body);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ans_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.startEditAnswer(ans_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ans_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.deleteAnswer(ans_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "textarea", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.editAnswerBody, $event) || (ctx_r0.editAnswerBody = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 205)(3, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ans_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.saveEditAnswer(ans_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.cancelEditAnswer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editAnswerBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.editAnswerBody.trim());
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ans_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ans_r25.body);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 193)(1, "div", 158)(2, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 160)(5, "div", 161)(6, "strong", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_span_8_Template, 2, 0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_12_Template, 2, 0, "button", 197)(13, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_13_Template, 2, 0, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template, 8, 2, "ng-container", 13)(15, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_p_15_Template, 2, 1, "p", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ans_r25 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ans_r25.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ans_r25.instructorAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 7, ans_r25.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ans_r25.authorId === ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ans_r25.authorId === ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.editingAnswerId === ans_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.editingAnswerId !== ans_r25.id);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 181)(1, "div", 182)(2, "div")(3, "h6", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, CourseWatchComponent_div_4_div_25_div_18_div_13_p_8_Template, 2, 1, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.closeQuestionDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "h6", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_Template, 16, 10, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 190)(16, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_13_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.qaAnswerText, $event) || (ctx_r0.qaAnswerText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.submitAnswer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.qaActiveQuestion.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("Par ", ctx_r0.qaActiveQuestion.authorName, " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 8, ctx_r0.qaActiveQuestion.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.qaActiveQuestion.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("R\u00E9ponses (", (ctx_r0.qaActiveQuestion.answers == null ? null : ctx_r0.qaActiveQuestion.answers.length) || 0, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.qaActiveQuestion.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.qaAnswerText);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.qaAnswerSubmitting || !ctx_r0.qaAnswerText.trim());
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 160)(2, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.editQuestionTitle, $event) || (ctx_r0.editQuestionTitle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "textarea", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.editQuestionBody, $event) || (ctx_r0.editQuestionBody = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 205)(5, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const q_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.saveEditQuestion(q_r29.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.cancelEditQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editQuestionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.editQuestionBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.editQuestionTitle.trim());
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_13_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31);
      const q_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.startEditQuestion(q_r29, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_14_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const q_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.deleteQuestion(q_r29.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const q_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.openQuestionDetail(q_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const q_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.openQuestionDetail(q_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h6", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_13_Template, 2, 0, "button", 217)(14, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_14_Template, 2, 0, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const q_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](q_r29.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", q_r29.authorName, " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](9, 6, q_r29.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", q_r29.answerCount || 0, " r\u00E9ponse(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", q_r29.authorId === ctx_r0.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", q_r29.authorId === ctx_r0.currentUserId);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template, 10, 3, "ng-container", 13)(2, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template, 15, 9, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r29 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.editingQuestionId === q_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.editingQuestionId !== q_r29.id);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 134)(2, "h6", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Poser une question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseWatchComponent_div_4_div_25_div_18_small_5_Template, 2, 1, "small", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.qaNewTitle, $event) || (ctx_r0.qaNewTitle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "textarea", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_Template_textarea_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.qaNewBody, $event) || (ctx_r0.qaNewBody = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_div_18_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.submitQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, CourseWatchComponent_div_4_div_25_div_18_div_11_Template, 2, 0, "div", 175)(12, CourseWatchComponent_div_4_div_25_div_18_div_12_Template, 4, 0, "div", 132)(13, CourseWatchComponent_div_4_div_25_div_18_div_13_Template, 19, 11, "div", 176)(14, CourseWatchComponent_div_4_div_25_div_18_div_14_Template, 3, 2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.qaNewTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.qaNewBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.qaSubmitting || !ctx_r0.qaNewTitle.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.qaSubmitting ? "Envoi..." : "Publier", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.qaLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.qaLoading && ctx_r0.qaQuestions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.qaActiveQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.qaQuestions);
  }
}
function CourseWatchComponent_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 112)(1, "ul", 113)(2, "li", 114)(3, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.activeTab = "overview");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "li", 114)(6, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r0.activeTab = "reviews";
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.loadReviews());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Avis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CourseWatchComponent_div_4_div_25_span_9_Template, 2, 1, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "li", 114)(11, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_25_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r0.activeTab = "qa";
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.loadQaQuestions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Q&A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CourseWatchComponent_div_4_div_25_span_14_Template, 2, 1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, CourseWatchComponent_div_4_div_25_div_16_Template, 4, 2, "div", 13)(17, CourseWatchComponent_div_4_div_25_div_17_Template, 5, 4, "div", 13)(18, CourseWatchComponent_div_4_div_25_div_18_Template, 15, 9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.activeTab === "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.reviews.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.activeTab === "qa");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.qaQuestions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "qa");
  }
}
function CourseWatchComponent_div_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 223)(1, "div", 224)(2, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div")(5, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Suivi IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Analyse d'attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 229)(10, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseWatchComponent_div_4_div_27_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 232)(13, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Attention en temps r\u00E9el");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Recommandations intelligentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "i", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Exercices de respiration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "i", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Rapport de session personnalis\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_27_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.startCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Activer le suivi IA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r0.cameraActive);
  }
}
function CourseWatchComponent_div_4_div_28_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.currentTip, " ");
  }
}
function CourseWatchComponent_div_4_div_28_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Analyse en cours\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 270)(1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Assistant IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_div_12_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.dismissMicroCoaching());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, CourseWatchComponent_div_4_div_28_div_12_div_8_Template, 3, 1, "div", 276)(9, CourseWatchComponent_div_4_div_28_div_12_div_9_Template, 3, 0, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.currentTip);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.currentTip);
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_div_28_div_18_span_1_Template, 2, 0, "span", 283)(2, CourseWatchComponent_div_4_div_28_div_18_span_2_Template, 2, 0, "span", 284)(3, CourseWatchComponent_div_4_div_28_div_18_span_3_Template, 2, 0, "span", 285)(4, CourseWatchComponent_div_4_div_28_div_18_span_4_Template, 2, 0, "span", 286)(5, CourseWatchComponent_div_4_div_28_div_18_span_5_Template, 2, 0, "span", 287)(6, CourseWatchComponent_div_4_div_28_div_18_span_6_Template, 2, 0, "span", 288)(7, CourseWatchComponent_div_4_div_28_div_18_span_7_Template, 2, 0, "span", 289)(8, CourseWatchComponent_div_4_div_28_div_18_span_8_Template, 2, 0, "span", 290)(9, CourseWatchComponent_div_4_div_28_div_18_span_9_Template, 2, 0, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.latestDetection.face_detected);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.eyes_closed);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.looking_away);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.yawning);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.expression === "SMILING");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.expression === "CONCENTRATED");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.expression === "SAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.expression === "ANGRY");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection.expression === "TIRED");
  }
}
function CourseWatchComponent_div_4_div_28_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 309)(1, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background", ctx_r0.getAttentionLevelColor() + "22")("color", ctx_r0.getAttentionLevelColor())("border-color", ctx_r0.getAttentionLevelColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.getAttentionLevelLabel(), " ");
  }
}
function CourseWatchComponent_div_4_div_28_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 311)(1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "small", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Pause recommand\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "small", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Besoin de souffler ? Essayez un exercice de respiration.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 315)(8, "button", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_div_28_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.startBreathingExercise());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " \uD83C\uDF2C\uFE0F Commencer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_div_28_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.dismissBreathingSuggestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Plus tard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function CourseWatchComponent_div_4_div_28_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 318)(1, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Exercice de respiration");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_div_29_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.stopBreathingExercise());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 322)(8, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 325)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Inspirez (4s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Gardez (2s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Expirez (6s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("inhale", ctx_r0.breathingPhase === "inhale")("hold", ctx_r0.breathingPhase === "hold")("exhale", ctx_r0.breathingPhase === "exhale");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.breathingTimeLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.getBreathingLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.breathingPhase === "inhale");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.breathingPhase === "hold");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r0.breathingPhase === "exhale");
  }
}
function CourseWatchComponent_div_4_div_28_div_40_div_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("border-color", t_r38.color)("color", t_r38.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", t_r38.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](t_r38.count);
  }
}
function CourseWatchComponent_div_4_div_28_div_40_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 337)(1, "small", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "D\u00E9tections");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CourseWatchComponent_div_4_div_28_div_40_div_15_span_4_Template, 4, 6, "span", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.sessionTypeCountsSorted);
  }
}
function CourseWatchComponent_div_4_div_28_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 326)(1, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Session en cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "small", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 330)(8, "div", 331)(9, "small", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Attention moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "small", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, CourseWatchComponent_div_4_div_28_div_40_div_15_Template, 5, 1, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "i", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.sessionDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx_r0.sessionAvgAttention >= 75 ? "#22c55e" : ctx_r0.sessionAvgAttention >= 50 ? "#f59e0b" : "#ef4444");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.sessionAvgAttention, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r0.sessionAvgAttention, "%")("background", ctx_r0.sessionAvgAttention >= 75 ? "#22c55e" : ctx_r0.sessionAvgAttention >= 50 ? "#f59e0b" : "#ef4444");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.sessionTypeCountsSorted.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.sessionImprovementTip);
  }
}
function CourseWatchComponent_div_4_div_28_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 344)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div")(4, "p", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "small", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r39 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate1"]("isax ", ctx_r0.getRemarkIcon(r_r39.type), " flex-shrink-0 mt-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx_r0.getRemarkColor(r_r39.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](r_r39.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 7, r_r39.time, "HH:mm:ss"));
  }
}
function CourseWatchComponent_div_4_div_28_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_div_4_div_28_div_47_div_1_Template, 9, 10, "div", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.cameraRemarks);
  }
}
function CourseWatchComponent_div_4_div_28_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Aucune remarque \u2014 Continuez ainsi ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_div_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 240)(1, "div", 241)(2, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Suivi IA Actif");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 141)(7, "span", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 245)(10, "input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseWatchComponent_div_4_div_28_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CourseWatchComponent_div_4_div_28_div_12_Template, 10, 2, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "video", 248, 5)(16, "canvas", 249, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CourseWatchComponent_div_4_div_28_div_18_Template, 10, 9, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 251)(20, "div", 252)(21, "small", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Niveau d'attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "small", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, CourseWatchComponent_div_4_div_28_div_27_Template, 3, 7, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, CourseWatchComponent_div_4_div_28_div_28_Template, 12, 0, "div", 258)(29, CourseWatchComponent_div_4_div_28_div_29_Template, 19, 14, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 260)(31, "button", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleSessionStats());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "i", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleTts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleSound());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_div_28_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleMicroCoaching());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " \uD83E\uDD16 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, CourseWatchComponent_div_4_div_28_div_40_Template, 20, 10, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 265)(42, "h6", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "i", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Remarques r\u00E9centes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, CourseWatchComponent_div_4_div_28_div_47_Template, 2, 1, "div", 268)(48, CourseWatchComponent_div_4_div_28_div_48_Template, 3, 0, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background", ctx_r0.getAttentionColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.attentionScore, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r0.cameraActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showMicroCoaching);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.latestDetection);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("color", ctx_r0.getAttentionColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.attentionScore, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r0.attentionScore, "%")("background", ctx_r0.getAttentionColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.getAttentionLevelLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.breathingSuggested && !ctx_r0.breathingActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.breathingActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.showSessionStats ? "Masquer stats" : "Session", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background", ctx_r0.ttsEnabled ? "#f5f3ff" : "#f9fafb")("color", ctx_r0.ttsEnabled ? "#7c3aed" : "#6b7280")("border", ctx_r0.ttsEnabled ? "1px solid #ddd6fe" : "1px solid #e5e7eb");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](ctx_r0.ttsEnabled ? "D\u00E9sactiver la lecture vocale" : "Activer la lecture vocale des recommandations"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.ttsEnabled ? "\uD83D\uDD0A" : "\uD83D\uDD07", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background", ctx_r0.soundEnabled ? "#f0fdf4" : "#fef2f2")("color", ctx_r0.soundEnabled ? "#16a34a" : "#dc2626")("border", ctx_r0.soundEnabled ? "1px solid #bbf7d0" : "1px solid #fecaca");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](ctx_r0.soundEnabled ? "Couper le son" : "Activer le son"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.soundEnabled ? "\uD83D\uDD14" : "\uD83D\uDD15", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("background", ctx_r0.showMicroCoaching ? "#f0fdf4" : "#f5f3ff")("color", ctx_r0.showMicroCoaching ? "#16a34a" : "#7c3aed")("border", ctx_r0.showMicroCoaching ? "1px solid #bbf7d0" : "1px solid #ddd6fe");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](ctx_r0.showMicroCoaching ? "Masquer l'assistant IA" : "Afficher l'assistant IA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showSessionStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.cameraRemarks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.cameraRemarks.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.cameraRemarks.length === 0);
  }
}
function CourseWatchComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "div", 23)(5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_div_4_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.backToCourse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Back to Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Tableau de bord ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 23)(14, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CourseWatchComponent_div_4_span_18_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CourseWatchComponent_div_4_div_20_Template, 17, 12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 34)(22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, CourseWatchComponent_div_4_div_23_Template, 2, 0, "div", 36)(24, CourseWatchComponent_div_4_ng_container_24_Template, 24, 32, "ng-container", 13)(25, CourseWatchComponent_div_4_div_25_Template, 19, 11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, CourseWatchComponent_div_4_div_27_Template, 32, 1, "div", 39)(28, CourseWatchComponent_div_4_div_28_Template, 49, 47, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.cameraActive ? "col-lg-3" : "col-lg-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](14, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.course.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.completionPercent, "% Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", ctx_r0.completionPercent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.courseProgress == null ? null : ctx_r0.courseProgress.lastAccessedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.cameraActive ? "col-lg-6" : "col-lg-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.loading && ctx_r0.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.course && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.cameraActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.cameraActive);
  }
}
function CourseWatchComponent_ng_container_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 394);
  }
}
function CourseWatchComponent_ng_container_5_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 395);
  }
}
function CourseWatchComponent_ng_container_5_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.studentAiHistory = []);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u2715 Effacer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_ng_container_5_div_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u2022 ", ctx_r0.activeLesson == null ? null : ctx_r0.activeLesson.lessonType);
  }
}
function CourseWatchComponent_ng_container_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 397)(1, "div", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Contexte charg\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, CourseWatchComponent_ng_container_5_div_21_span_7_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r0.activeLesson == null ? null : ctx_r0.activeLesson.title) || (ctx_r0.course == null ? null : ctx_r0.course.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.course == null ? null : ctx_r0.course.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson == null ? null : ctx_r0.activeLesson.lessonType);
  }
}
function CourseWatchComponent_ng_container_5_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 401)(1, "div", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\uD83E\uDDE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Coach p\u00E9dagogique instantan\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Posez une question sur la le\u00E7on, demandez un r\u00E9sum\u00E9,");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "des exercices ou une explication simplifi\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 405)(10, "button", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_div_22_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.studentAiInput = "R\u00E9sume cette le\u00E7on en 5 points essentiels");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "R\u00E9sum\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_div_22_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.studentAiInput = "Explique cette le\u00E7on avec des mots simples et un exemple");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Explication simple");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_div_22_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.studentAiInput = "Donne-moi 3 questions de r\u00E9vision avec r\u00E9ponses courtes");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "R\u00E9vision");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "button", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_div_22_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.studentAiInput = "Propose 3 exercices pratiques progressifs");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Exercices");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function CourseWatchComponent_ng_container_5_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 409)(1, "div", 410)(2, "span", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "div", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r43 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("ai-msg--user", msg_r43.role === "user")("ai-msg--assistant", msg_r43.role === "assistant");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](msg_r43.role === "user" ? "V" : "IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", msg_r43.role === "user" ? "Vous" : "Agent IA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", msg_r43.role === "assistant" ? ctx_r0.formatStudentMessage(msg_r43.content) : msg_r43.content, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
  }
}
function CourseWatchComponent_ng_container_5_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseWatchComponent_ng_container_5_div_23_div_1_Template, 6, 7, "div", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.studentAiHistory);
  }
}
function CourseWatchComponent_ng_container_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 413)(1, "div", 414)(2, "span", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Assistant p\u00E9dagogique \u00B7 pr\u00E9paration de la r\u00E9ponse\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "span")(7, "span")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseWatchComponent_ng_container_5_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Analyse\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function CourseWatchComponent_ng_container_5_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 418);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Envoyer ");
  }
}
function CourseWatchComponent_ng_container_5_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 419);
  }
}
function CourseWatchComponent_ng_container_5_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "i", 187);
  }
}
function CourseWatchComponent_ng_container_5_small_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u2014 ", ctx_r0.activeLesson.title);
  }
}
function CourseWatchComponent_ng_container_5_small_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u2014 aucune le\u00E7on");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_ng_container_5_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Sauvegard\u00E9 ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_ng_container_5_span_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Sauvegard\u00E9 ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseWatchComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.openStudentAiAssistant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CourseWatchComponent_ng_container_5_i_2_Template, 1, 0, "i", 348)(3, CourseWatchComponent_ng_container_5_i_3_Template, 1, 0, "i", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 350)(5, "div", 351)(6, "div", 352)(7, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\uD83C\uDF93");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div")(10, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Assistant IA \u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Aide contextuelle sur votre le\u00E7on active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 356)(15, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "span", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "ACTIF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, CourseWatchComponent_ng_container_5_button_18_Template, 2, 0, "button", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "button", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.showStudentAiPanel = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CourseWatchComponent_ng_container_5_div_21_Template, 8, 3, "div", 362)(22, CourseWatchComponent_ng_container_5_div_22_Template, 18, 0, "div", 363)(23, CourseWatchComponent_ng_container_5_div_23_Template, 2, 1, "div", 364)(24, CourseWatchComponent_ng_container_5_div_24_Template, 9, 0, "div", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 366)(26, "textarea", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_ng_container_5_Template_textarea_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.studentAiInput, $event) || (ctx_r0.studentAiInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 368)(28, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.copyLastStudentAiReply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "i", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, " Copier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "button", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.sendStudentAiMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, CourseWatchComponent_ng_container_5_ng_container_32_Template, 3, 0, "ng-container", 93)(33, CourseWatchComponent_ng_container_5_ng_template_33_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.toggleNotesPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, CourseWatchComponent_ng_container_5_i_36_Template, 1, 0, "i", 373)(37, CourseWatchComponent_ng_container_5_i_37_Template, 1, 0, "i", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 375)(39, "div", 351)(40, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "i", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "span", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Mes Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "button", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.showNotesPanel = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 378)(46, "div", 379)(47, "div", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "i", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Le\u00E7on actuelle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, CourseWatchComponent_ng_container_5_small_51_Template, 2, 1, "small", 382)(52, CourseWatchComponent_ng_container_5_small_52_Template, 2, 0, "small", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "textarea", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_ng_container_5_Template_textarea_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.lessonNote, $event) || (ctx_r0.lessonNote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 385)(55, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.saveLessonNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "i", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Sauvegarder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, CourseWatchComponent_ng_container_5_span_58_Template, 3, 0, "span", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "hr", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 379)(61, "div", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "i", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Ce cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "small", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "textarea", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseWatchComponent_ng_container_5_Template_textarea_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.courseNote, $event) || (ctx_r0.courseNote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 385)(69, "button", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseWatchComponent_ng_container_5_Template_button_click_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.saveNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "i", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Sauvegarder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, CourseWatchComponent_ng_container_5_span_72_Template, 3, 0, "span", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const studentAiReady_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](34);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("notes-fab--open", ctx_r0.showStudentAiPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.studentAiBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.studentAiBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("notes-panel--visible", ctx_r0.showStudentAiPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.studentAiHistory.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.course || ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.studentAiHistory.length === 0 && !ctx_r0.studentAiBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.studentAiHistory.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.studentAiBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.studentAiInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.studentAiBusy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.studentAiHistory.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.studentAiBusy || !ctx_r0.studentAiInput.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.studentAiBusy)("ngIfElse", studentAiReady_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("notes-fab--open", ctx_r0.showNotesPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.showNotesPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showNotesPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("notes-panel--visible", ctx_r0.showNotesPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.lessonNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.activeLesson);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.lessonNoteSaved);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u2014 ", ctx_r0.course.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.courseNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.courseNoteSaved);
  }
}
let CourseWatchComponent = /*#__PURE__*/(() => {
  class CourseWatchComponent {
    route;
    router;
    courseService;
    noteService;
    qaService;
    detectionService;
    aiAgentsService;
    toastr;
    videoRef;
    cameraVideoRef;
    cameraCanvasRef;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes;
    //  IDs depuis query params
    courseId = null;
    activeLessonId = null;
    //  Données du cours
    course = null;
    sections = [];
    allLessons = [];
    activeLesson = null;
    //  Progression
    courseProgress = null;
    lessonProgress = null;
    lessonCompleted = false;
    completedLessons = new Set(); // track across navigation
    //  Autosave timer
    saveInterval = null;
    SAVE_INTERVAL_MS = 30000;
    //  UI
    loading = true;
    errorMsg = '';
    activeTab = 'overview';
    //  Reviews
    reviews = [];
    myReview = null;
    myRating = 5;
    myComment = '';
    reviewSubmitting = false;
    reviewMsg = '';
    reviewError = '';
    stars = [1, 2, 3, 4, 5];
    //  Notes personnelles (localStorage)
    courseNote = ''; // note globale du cours
    lessonNote = ''; // note de la leçon active
    courseNoteSaved = false;
    lessonNoteSaved = false;
    showNotesPanel = false;
    showStudentAiPanel = false;
    studentAiBusy = false;
    studentAiHistory = [];
    studentAiInput = '';
    noteSaveTimer = null;
    lessonNoteSaveTimer = null;
    // ═══ Q&A ═══
    currentUserId = 0;
    qaQuestions = [];
    qaLoading = false;
    qaNewTitle = '';
    qaNewBody = '';
    qaSubmitting = false;
    qaActiveQuestion = null;
    qaAnswerText = '';
    qaAnswerSubmitting = false;
    // ═══ Q&A Edit ═══
    editingQuestionId = null;
    editQuestionTitle = '';
    editQuestionBody = '';
    editingAnswerId = null;
    editAnswerBody = '';
    // ═══ Camera Detection ═══
    cameraActive = false;
    cameraStream = null;
    cameraInterval = null;
    attentionScore = 100;
    latestDetection = null;
    cameraRemarks = [];
    detectionSub = null;
    cameraPromptShown = false;
    // ═══ Session Stats & Tips ═══
    sessionStartTime = null;
    showSessionStats = false;
    attentionHistory = [];
    sessionTypeCounts = {};
    currentTip = null;
    tipTimer = null;
    ttsTimer = null;
    attentionSampleCounter = 0;
    // ═══ Breathing Exercise ═══
    breathingActive = false;
    breathingPhase = 'inhale';
    breathingTimeLeft = 0;
    breathingTimer = null;
    breathingDismissed = false;
    breathingSuggested = false;
    // ═══ Micro-coaching ═══
    showMicroCoaching = true;
    // ═══ Audio notifications ═══
    audioCtx = null;
    soundEnabled = true;
    // ═══ Text-to-Speech ═══
    ttsEnabled = false;
    constructor(route, router, courseService, noteService, qaService, detectionService, aiAgentsService, toastr) {
      this.route = route;
      this.router = router;
      this.courseService = courseService;
      this.noteService = noteService;
      this.qaService = qaService;
      this.detectionService = detectionService;
      this.aiAgentsService = aiAgentsService;
      this.toastr = toastr;
    }
    ngOnInit() {
      this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
      this.route.queryParams.subscribe(params => {
        const cId = params['courseId'];
        const lId = params['lessonId'];
        if (cId) {
          this.courseId = +cId;
          this.loadCourseContent(lId ? +lId : null);
        } else {
          this.errorMsg = 'Aucun cours spécifié.';
          this.loading = false;
        }
      });
    }
    ngOnDestroy() {
      this.saveCurrentProgress(); // Save last position before leaving
      this.clearSaveInterval();
      if (this.noteSaveTimer) clearTimeout(this.noteSaveTimer);
      if (this.lessonNoteSaveTimer) clearTimeout(this.lessonNoteSaveTimer);
      this.stopBreathingExercise();
      this.stopCamera();
      if (this.audioCtx) {
        this.audioCtx.close();
        this.audioCtx = null;
      }
      window.speechSynthesis?.cancel();
    }
    //  Chargement 
    loadCourseContent(firstLessonId) {
      if (!this.courseId) return;
      // Charger contenu + progression en parallèle
      this.courseService.getCourseContent(this.courseId).subscribe({
        next: data => {
          this.course = data;
          this.sections = data.sections || [];
          this.allLessons = this.sections.flatMap(s => s.lessons || []);
          // Charger les notes sauvegardées pour ce cours (API)
          this.noteService.getCourseNote(this.courseId).subscribe({
            next: n => {
              this.courseNote = n?.content || '';
            },
            error: () => {
              this.courseNote = '';
            }
          });
          const lessonToLoad = firstLessonId || data.lastLessonId || (this.allLessons[0]?.id ?? null);
          if (lessonToLoad) {
            this.selectLesson(lessonToLoad);
          } else {
            this.loading = false;
          }
          // Prompt caméra (une seule fois par session)
          if (!this.cameraPromptShown) {
            this.cameraPromptShown = true;
            setTimeout(() => this.promptCamera(), 1000);
          }
        },
        error: e => {
          if (e?.status === 403 || e?.status === 400) {
            this.errorMsg = e?.error?.message || 'Vous devez acheter ce cours pour y accéder.';
          } else {
            this.errorMsg = 'Erreur lors du chargement du cours.';
          }
          this.loading = false;
        }
      });
      this.courseService.getCourseProgress(this.courseId).subscribe({
        next: progress => {
          this.courseProgress = progress;
          // Pré-remplir les leçons complétées pour le verrouillage séquentiel
          if (progress?.completedLessonIds) {
            progress.completedLessonIds.forEach(id => this.completedLessons.add(id));
          }
        },
        error: () => {}
      });
      this.loadReviews();
    }
    //  Sélection d'une leçon
    selectLesson(lessonId) {
      if (this.isLessonLocked(lessonId)) {
        this.toastr.warning('Terminez la leçon précédente pour débloquer celle-ci.', 'Leçon verrouillée');
        return;
      }
      this.activeLessonId = lessonId;
      this.activeLesson = this.allLessons.find(l => l.id === lessonId) || null;
      this.lessonCompleted = false;
      this.loading = true;
      this.lessonNoteSaved = false;
      this.courseNoteSaved = false;
      // Charger la note de cette leçon (API)
      this.noteService.getLessonNote(lessonId).subscribe({
        next: n => {
          this.lessonNote = n?.content || '';
        },
        error: () => {
          this.lessonNote = '';
        }
      });
      this.clearSaveInterval();
      this.courseService.getLessonProgress(lessonId).subscribe({
        next: progress => {
          this.lessonProgress = progress;
          this.lessonCompleted = progress?.isCompleted || false;
          if (this.lessonCompleted) this.completedLessons.add(lessonId);
          this.loading = false;
          // Reprendre la vidéo là où on s'était arrêté
          if (this.activeLesson?.lessonType !== 'PDF') {
            setTimeout(() => {
              const video = this.videoRef?.nativeElement;
              if (video && progress?.watchedSeconds > 0) {
                video.currentTime = progress.watchedSeconds;
              }
            }, 200);
          }
          this.startAutoSave();
        },
        error: () => {
          this.lessonProgress = null;
          this.loading = false;
          this.startAutoSave();
        }
      });
    }
    //  Autosave toutes les 30 secondes 
    startAutoSave() {
      if (this.activeLesson?.lessonType === 'VIDEO') {
        this.saveInterval = setInterval(() => {
          this.saveCurrentProgress();
        }, this.SAVE_INTERVAL_MS);
      }
    }
    clearSaveInterval() {
      if (this.saveInterval) {
        clearInterval(this.saveInterval);
        this.saveInterval = null;
      }
    }
    saveCurrentProgress() {
      if (!this.activeLessonId) return;
      const video = this.videoRef?.nativeElement;
      const watched = video ? Math.floor(video.currentTime) : 0;
      this.courseService.saveProgress(this.activeLessonId, watched).subscribe({
        next: () => {},
        error: () => {}
      });
    }
    //  Fin de la vidéo 
    onVideoEnd() {
      if (!this.activeLessonId) return;
      this.courseService.markLessonCompleted(this.activeLessonId).subscribe({
        next: progress => {
          this.lessonCompleted = true;
          this.lessonProgress = progress;
          if (this.activeLessonId) this.completedLessons.add(this.activeLessonId);
          // Rafraîchir la progression globale
          this.courseService.getCourseProgress(this.courseId).subscribe({
            next: cp => this.courseProgress = cp,
            error: () => {}
          });
        },
        error: () => {}
      });
    }
    //  Marquer manuellement comme terminé 
    markCompleted() {
      this.onVideoEnd();
    }
    //  Aller à la leçon suivante
    goToNextLesson() {
      if (!this.activeLessonId) return;
      const idx = this.allLessons.findIndex(l => l.id === this.activeLessonId);
      if (idx >= 0 && idx < this.allLessons.length - 1) {
        this.selectLesson(this.allLessons[idx + 1].id);
      }
    }
    //  Aller au quiz ou à la leçon suivante selon le contexte
    goToNextOrQuiz() {
      if (!this.activeLesson) return;
      if (this.activeLesson.hasQuiz && this.activeLesson.quizId) {
        this.router.navigate(['/student/student-quiz-questions', this.activeLesson.quizId], {
          queryParams: {
            courseId: this.courseId,
            lessonId: this.activeLesson.id
          }
        });
      } else {
        this.goToNextLesson();
      }
    }
    goToPrevLesson() {
      if (!this.activeLessonId) return;
      const idx = this.allLessons.findIndex(l => l.id === this.activeLessonId);
      if (idx > 0) {
        this.selectLesson(this.allLessons[idx - 1].id);
      }
    }
    //  Utilitaires
    isLessonDone(lessonId) {
      return this.completedLessons.has(lessonId);
    }
    isLessonLocked(lessonId) {
      const idx = this.allLessons.findIndex(l => l.id === lessonId);
      if (idx <= 0) return false; // première leçon toujours accessible
      return !this.completedLessons.has(this.allLessons[idx - 1].id);
    }
    lessonStatus(lesson) {
      if (lesson.id === this.activeLessonId) return 'active';
      if (this.completedLessons.has(lesson.id)) return 'completed';
      return 'default';
    }
    getSectionProgress(section) {
      const lessons = section.lessons || [];
      if (!lessons.length) return 0;
      const done = lessons.filter(l => this.completedLessons.has(l.id)).length;
      return Math.round(done / lessons.length * 100);
    }
    get completionPercent() {
      return this.courseProgress?.completionPercentage || 0;
    }
    formatDuration(seconds) {
      if (!seconds) return '';
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}:${s.toString().padStart(2, '0')}`;
    }
    getMediaUrl(path) {
      if (!path) return '';
      if (path.startsWith('http')) return path;
      const clean = path.startsWith('/') ? path : '/' + path;
      return `http://localhost:8081${clean}`;
    }
    getSectionForLesson(lessonId) {
      return this.sections.find(s => s.lessons?.some(l => l.id === lessonId));
    }
    isLessonCompleted(lessonId) {
      return this.activeLessonId === lessonId && this.lessonCompleted;
    }
    backToCourse() {
      if (this.courseId) {
        this.router.navigate([this.routes.courseListPublic]);
      }
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  REVIEWS
    // ═══════════════════════════════════════════════════════════════════════
    loadReviews() {
      if (!this.courseId) return;
      this.courseService.getCourseReviews(this.courseId).subscribe({
        next: data => {
          this.reviews = data;
          // Détecter si l'étudiant a déjà soumis un avis (même myReview null au départ)
          const saved = localStorage.getItem(`my-review-course-${this.courseId}`);
          if (saved) {
            try {
              const parsed = JSON.parse(saved);
              this.myReview = parsed;
              this.myRating = parsed.rating || 5;
              this.myComment = parsed.comment || '';
            } catch {
              this.myReview = null;
            }
          }
        },
        error: () => {}
      });
    }
    submitReview() {
      if (!this.courseId || this.myRating < 1) return;
      this.reviewSubmitting = true;
      this.reviewMsg = '';
      this.reviewError = '';
      this.courseService.upsertReview(this.courseId, {
        rating: this.myRating,
        comment: this.myComment
      }).subscribe({
        next: saved => {
          this.reviewSubmitting = false;
          this.myReview = saved;
          this.reviewMsg = 'Votre avis a été publié avec succès !';
          localStorage.setItem(`my-review-course-${this.courseId}`, JSON.stringify(saved));
          // Recharger la liste
          this.loadReviews();
          setTimeout(() => this.reviewMsg = '', 3000);
        },
        error: () => {
          this.reviewSubmitting = false;
          this.reviewError = 'Erreur lors de la publication. Veuillez réessayer.';
        }
      });
    }
    deleteMyReview() {
      if (!this.courseId) return;
      this.courseService.deleteReview(this.courseId).subscribe({
        next: () => {
          this.myReview = null;
          this.myRating = 5;
          this.myComment = '';
          localStorage.removeItem(`my-review-course-${this.courseId}`);
          this.toastr.success('Avis supprimé avec succès.');
          this.loadReviews();
        },
        error: err => {
          // 400 = avis introuvable en base (cache localStorage désynchronisé)
          // On réinitialise l'état local pour corriger la désynchronisation
          if (err.status === 400 || err.status === 404) {
            this.myReview = null;
            this.myRating = 5;
            this.myComment = '';
            localStorage.removeItem(`my-review-course-${this.courseId}`);
            this.reviewError = '';
            this.loadReviews();
          } else {
            this.reviewError = 'Erreur lors de la suppression. Veuillez réessayer.';
          }
        }
      });
    }
    get isCourseDone() {
      return this.completionPercent >= 100;
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  NOTES PERSONNELLES (localStorage)
    // ═══════════════════════════════════════════════════════════════════════
    saveNote() {
      if (!this.courseId) return;
      this.noteService.saveCourseNote(this.courseId, this.courseNote).subscribe({
        next: () => {
          this.courseNoteSaved = true;
          this.toastr.success('Note du cours sauvegardée');
          if (this.noteSaveTimer) clearTimeout(this.noteSaveTimer);
          this.noteSaveTimer = setTimeout(() => this.courseNoteSaved = false, 2500);
        },
        error: () => {}
      });
    }
    saveLessonNote() {
      if (!this.activeLessonId) return;
      this.noteService.saveLessonNote(this.activeLessonId, this.lessonNote).subscribe({
        next: () => {
          this.lessonNoteSaved = true;
          this.toastr.success('Note de leçon sauvegardée');
          if (this.lessonNoteSaveTimer) clearTimeout(this.lessonNoteSaveTimer);
          this.lessonNoteSaveTimer = setTimeout(() => this.lessonNoteSaved = false, 2500);
        },
        error: () => {}
      });
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  Q&A par leçon / cours
    // ═══════════════════════════════════════════════════════════════════════
    loadQaQuestions() {
      if (!this.courseId) return;
      this.qaLoading = true;
      this.qaService.getQuestionsByCourse(this.courseId).subscribe({
        next: data => {
          this.qaQuestions = data;
          this.qaLoading = false;
        },
        error: () => {
          this.qaLoading = false;
        }
      });
    }
    submitQuestion() {
      if (!this.courseId || !this.qaNewTitle.trim()) return;
      this.qaSubmitting = true;
      this.qaService.askQuestion({
        courseId: this.courseId,
        lessonId: this.activeLessonId || undefined,
        title: this.qaNewTitle.trim(),
        body: this.qaNewBody.trim()
      }).subscribe({
        next: () => {
          this.qaNewTitle = '';
          this.qaNewBody = '';
          this.qaSubmitting = false;
          this.toastr.success('Question publiée !');
          this.loadQaQuestions();
        },
        error: () => {
          this.qaSubmitting = false;
        }
      });
    }
    openQuestionDetail(q) {
      this.qaActiveQuestion = null;
      this.qaAnswerText = '';
      this.qaService.getQuestionDetail(q.id).subscribe({
        next: detail => {
          this.qaActiveQuestion = detail;
        }
      });
    }
    closeQuestionDetail() {
      this.qaActiveQuestion = null;
      this.qaAnswerText = '';
    }
    submitAnswer() {
      if (!this.qaActiveQuestion || !this.qaAnswerText.trim()) return;
      this.qaAnswerSubmitting = true;
      this.qaService.answerQuestion(this.qaActiveQuestion.id, {
        body: this.qaAnswerText.trim()
      }).subscribe({
        next: () => {
          this.qaAnswerSubmitting = false;
          this.qaAnswerText = '';
          this.toastr.success('Réponse publiée !');
          this.openQuestionDetail(this.qaActiveQuestion);
          this.loadQaQuestions();
        },
        error: () => {
          this.qaAnswerSubmitting = false;
        }
      });
    }
    deleteQuestion(questionId, event) {
      event.stopPropagation(); // prevent opening question detail
      if (!confirm('Supprimer cette question ?')) return;
      this.qaService.deleteQuestion(questionId).subscribe({
        next: () => {
          this.toastr.success('Question supprimée.');
          if (this.qaActiveQuestion?.id === questionId) this.qaActiveQuestion = null;
          this.loadQaQuestions();
        },
        error: () => this.toastr.error('Erreur lors de la suppression.')
      });
    }
    deleteAnswer(answerId) {
      if (!confirm('Supprimer cette réponse ?')) return;
      this.qaService.deleteAnswer(answerId).subscribe({
        next: () => {
          this.toastr.success('Réponse supprimée.');
          this.openQuestionDetail(this.qaActiveQuestion);
        },
        error: () => this.toastr.error('Erreur lors de la suppression.')
      });
    }
    // ═══ Q&A Edit ═══
    startEditQuestion(q, event) {
      event.stopPropagation();
      this.editingQuestionId = q.id;
      this.editQuestionTitle = q.title;
      this.editQuestionBody = q.body || '';
    }
    cancelEditQuestion() {
      this.editingQuestionId = null;
      this.editQuestionTitle = '';
      this.editQuestionBody = '';
    }
    saveEditQuestion(questionId) {
      if (!this.editQuestionTitle.trim()) return;
      this.qaService.updateQuestion(questionId, {
        title: this.editQuestionTitle.trim(),
        body: this.editQuestionBody.trim()
      }).subscribe({
        next: () => {
          this.toastr.success('Question modifiée.');
          this.cancelEditQuestion();
          this.loadQaQuestions();
        },
        error: () => this.toastr.error('Erreur lors de la modification.')
      });
    }
    startEditAnswer(ans) {
      this.editingAnswerId = ans.id;
      this.editAnswerBody = ans.body || '';
    }
    cancelEditAnswer() {
      this.editingAnswerId = null;
      this.editAnswerBody = '';
    }
    saveEditAnswer(answerId) {
      if (!this.editAnswerBody.trim()) return;
      this.qaService.updateAnswer(answerId, {
        body: this.editAnswerBody.trim()
      }).subscribe({
        next: () => {
          this.toastr.success('Réponse modifiée.');
          this.cancelEditAnswer();
          this.openQuestionDetail(this.qaActiveQuestion);
        },
        error: () => this.toastr.error('Erreur lors de la modification.')
      });
    }
    toggleNotesPanel() {
      this.showNotesPanel = !this.showNotesPanel;
    }
    openStudentAiAssistant() {
      this.showStudentAiPanel = !this.showStudentAiPanel;
    }
    sendStudentAiMessage() {
      var _this = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const message = _this.studentAiInput.trim();
        if (!message || _this.studentAiBusy) {
          return;
        }
        _this.studentAiInput = '';
        _this.studentAiHistory.push({
          role: 'user',
          content: message
        });
        _this.studentAiBusy = true;
        try {
          const rawLessonContent = String(_this.activeLesson?.articleContent || _this.activeLesson?.description || '');
          const lessonContent = rawLessonContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 1800);
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.aiAgentsService.studentTutor({
            message,
            userId: localStorage.getItem('id') || undefined,
            sessionId: localStorage.getItem('sessionId') || undefined,
            courseId: _this.courseId ? String(_this.courseId) : undefined,
            history: _this.studentAiHistory.slice(-6),
            context: {
              lessonTitle: _this.activeLesson?.title || null,
              courseTitle: _this.course?.title || null,
              courseName: _this.course?.title || null,
              lessonContent,
              lessonType: _this.activeLesson?.lessonType || null
            }
          }));
          _this.studentAiHistory.push({
            role: 'assistant',
            content: (response.reply || '').trim() || 'Aucune réponse reçue.'
          });
        } catch {
          _this.toastr.error('Assistant IA indisponible pour le moment.');
          _this.studentAiHistory.push({
            role: 'assistant',
            content: 'Assistant IA indisponible pour le moment. Réessayez dans quelques instants.'
          });
        } finally {
          _this.studentAiBusy = false;
        }
      })();
    }
    copyLastStudentAiReply() {
      var _this2 = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const lastReply = [..._this2.studentAiHistory].reverse().find(msg => msg.role === 'assistant');
        const content = lastReply?.content?.trim();
        if (!content) {
          _this2.toastr.info('Aucune réponse à copier pour le moment.');
          return;
        }
        try {
          yield navigator.clipboard.writeText(content);
          _this2.toastr.success('Dernière réponse copiée.');
        } catch {
          _this2.toastr.error('Impossible de copier la réponse.');
        }
      })();
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  CAMERA — Computer Vision Attention Tracking
    // ═══════════════════════════════════════════════════════════════════════
    promptCamera() {
      const key = `cv-camera-prompted-${this.courseId}`;
      if (localStorage.getItem(key)) return; // Only prompt once per course
      localStorage.setItem(key, '1');
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        title: '🎯 Suivi intelligent par IA',
        html: `
        <div style="text-align:left; font-size:14px; color:#374151;">
          <p style="margin-bottom:10px;">Activez le suivi par caméra pour bénéficier de :</p>
          <ul style="padding-left:18px; margin:0; line-height:1.9;">
            <li>📊 Analyse de votre <strong>niveau d'attention</strong> en temps réel</li>
            <li>💡 <strong>Recommandations personnalisées</strong> selon votre état</li>
            <li>🧘 Exercices de <strong>respiration guidés</strong> si fatigue détectée</li>
            <li>📈 <strong>Rapport de session</strong> à la fin du cours</li>
          </ul>
          <p style="margin-top:10px; font-size:12px; color:#6b7280;">Vous pouvez activer/désactiver la caméra à tout moment.</p>
        </div>`,
        icon: undefined,
        showCancelButton: true,
        confirmButtonText: '📷 Activer la caméra',
        cancelButtonText: 'Plus tard',
        confirmButtonColor: '#3b82f6',
        cancelButtonColor: '#6b7280',
        customClass: {
          popup: 'swal-cv-prompt'
        }
      }).then(result => {
        if (result.isConfirmed) {
          this.startCamera();
        }
      });
    }
    toggleCamera() {
      if (this.cameraActive) {
        this.stopCamera();
      } else {
        this.startCamera();
      }
    }
    startCamera() {
      var _this3 = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          _this3.cameraStream = yield navigator.mediaDevices.getUserMedia({
            video: {
              width: 320,
              height: 240,
              facingMode: 'user'
            }
          });
          _this3.cameraActive = true;
          // Reset session stats
          _this3.sessionStartTime = new Date();
          _this3.attentionHistory = [];
          _this3.sessionTypeCounts = {};
          _this3.showSessionStats = false;
          _this3.attentionSampleCounter = 0;
          // Connect to Python CV service FIRST
          _this3.detectionService.connectWebSocket();
          // Subscribe to detection results
          _this3.detectionSub = _this3.detectionService.detection$.subscribe(result => {
            _this3.latestDetection = result;
            _this3.attentionScore = result.attention_score;
            // Sample attention every 10 frames (~2s)
            _this3.attentionSampleCounter++;
            if (_this3.attentionSampleCounter % 10 === 0) {
              _this3.attentionHistory.push({
                score: result.attention_score,
                time: new Date()
              });
              if (_this3.attentionHistory.length > 300) _this3.attentionHistory.shift();
            }
            // If a new remark is generated, add it and save to backend
            if (result.remark && result.remark_type) {
              _this3.cameraRemarks.unshift({
                type: result.remark_type,
                message: result.remark,
                time: new Date()
              });
              // Track session type counts
              _this3.sessionTypeCounts[result.remark_type] = (_this3.sessionTypeCounts[result.remark_type] || 0) + 1;
              // Keep only last 20 remarks in UI
              if (_this3.cameraRemarks.length > 20) _this3.cameraRemarks.length = 20;
              // Save to backend
              _this3.detectionService.saveRemark({
                courseId: _this3.courseId,
                lessonId: _this3.activeLessonId,
                remarkType: result.remark_type,
                remarkMessage: result.remark,
                attentionScore: result.attention_score
              }).subscribe({
                error: () => {}
              });
            }
            // Suggest breathing exercise when CV recommends it
            if (result.recommend_breathing && !_this3.breathingActive && !_this3.breathingDismissed) {
              _this3.breathingSuggested = true;
            }
            // Update tip
            _this3.computeTip();
          });
          // Start rotating tips every 30s
          _this3.tipTimer = setInterval(() => _this3.computeTip(), 30000);
          // Check attention and speak via TTS every 90s
          _this3.ttsTimer = setInterval(() => _this3.checkAndSpeak(), 90000);
          // Wait for Angular to render the video element (ngIf change detection)
          setTimeout(() => {
            const video = _this3.cameraVideoRef?.nativeElement;
            if (video) {
              video.srcObject = _this3.cameraStream;
              // Wait for video to be ready before capturing frames
              video.onloadeddata = () => {
                console.log('[CV] Video ready, starting frame capture');
                // Give WebSocket 500ms to connect, then start sending frames
                setTimeout(() => {
                  _this3.cameraInterval = setInterval(() => _this3.captureAndSendFrame(), 200);
                }, 500);
              };
            } else {
              console.warn('[CV] Video element not found, retrying...');
              // Retry after another change detection cycle
              setTimeout(() => {
                const v = _this3.cameraVideoRef?.nativeElement;
                if (v) {
                  v.srcObject = _this3.cameraStream;
                  v.onloadeddata = () => {
                    setTimeout(() => {
                      _this3.cameraInterval = setInterval(() => _this3.captureAndSendFrame(), 200);
                    }, 500);
                  };
                }
              }, 300);
            }
          }, 200);
          _this3.playSound('camera');
          _this3.toastr.success('Caméra activée pour le suivi d\'attention');
        } catch (err) {
          console.error('Camera access denied', err);
          _this3.toastr.error('Impossible d\'accéder à la caméra. Vérifiez les permissions.');
          _this3.cameraActive = false;
        }
      })();
    }
    captureAndSendFrame() {
      const video = this.cameraVideoRef?.nativeElement;
      const canvas = this.cameraCanvasRef?.nativeElement;
      if (!video || !canvas || video.readyState < 2) return;
      canvas.width = video.videoWidth || 320;
      canvas.height = video.videoHeight || 240;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64 = canvas.toDataURL('image/jpeg', 0.7);
      this.detectionService.sendFrame(base64);
    }
    stopCamera() {
      this.cameraActive = false;
      if (this.cameraInterval) {
        clearInterval(this.cameraInterval);
        this.cameraInterval = null;
      }
      if (this.tipTimer) {
        clearInterval(this.tipTimer);
        this.tipTimer = null;
      }
      if (this.ttsTimer) {
        clearInterval(this.ttsTimer);
        this.ttsTimer = null;
      }
      if (this.detectionSub) {
        this.detectionSub.unsubscribe();
        this.detectionSub = null;
      }
      this.detectionService.disconnectWebSocket();
      if (this.cameraStream) {
        this.cameraStream.getTracks().forEach(t => t.stop());
        this.cameraStream = null;
      }
      this.stopBreathingExercise();
      this.breathingSuggested = false;
      this.breathingDismissed = false;
      this.latestDetection = null;
      this.currentTip = null;
      // Show personalized session summary
      this.showSessionSummary();
    }
    showSessionSummary() {
      if (!this.sessionStartTime || !Object.keys(this.sessionTypeCounts).length) return;
      const issue = this.dominantIssue;
      const avg = this.sessionAvgAttention;
      let icon = '🏆';
      let title = '';
      let message = '';
      let color = '#22c55e';
      let showBreathing = false;
      if (issue === 'EYES_CLOSED' || issue === 'TIRED' || issue === 'YAWNING') {
        icon = '😴';
        title = 'Récupérez votre énergie';
        message = 'Nous avons remarqué que vous sembliez fatigué pendant une partie du cours. Prenez un moment pour respirer profondément afin de retrouver votre énergie.';
        color = '#f59e0b';
        showBreathing = true;
      } else if (issue === 'LOOKING_AWAY' || issue === 'ABSENT') {
        icon = '🎯';
        title = 'Restez concentré';
        message = 'Votre attention a été parfois perturbée pendant le cours. Essayez de réduire les distractions autour de vous pour mieux profiter de la prochaine session.';
        color = '#3b82f6';
        showBreathing = false;
      } else if (issue === 'SAD' || issue === 'ANGRY') {
        icon = '💙';
        title = 'Prenez soin de vous';
        message = 'Votre état émotionnel peut affecter votre apprentissage. Une courte pause et quelques respirations profondes peuvent vous aider à vous sentir mieux.';
        color = '#6366f1';
        showBreathing = true;
      } else if (!issue && avg >= 70) {
        icon = '🏆';
        title = 'Session excellente !';
        message = `Excellent travail ! Vous êtes resté concentré pendant la majeure partie du cours. Votre attention moyenne était de <strong>${avg}%</strong>. Continuez sur cette lancée !`;
        color = '#22c55e';
        showBreathing = false;
      } else {
        icon = '👍';
        title = 'Bonne session !';
        message = `Session terminée avec une attention moyenne de <strong>${avg}%</strong>. Chaque effort compte pour votre progression !`;
        color = '#3b82f6';
        showBreathing = false;
      }
      const breathingHtml = showBreathing ? `
      <div style="margin-top:14px;padding:12px;background:#f0f9ff;border-radius:10px;border:1px solid #bae6fd;">
        <div style="font-weight:600;color:#0369a1;margin-bottom:8px;">🌬️ Exercice de respiration (20 secondes)</div>
        <div style="color:#374151;font-size:13px;line-height:1.8;">
          • Inspirez pendant <strong>4 secondes</strong><br>
          • Gardez l'air <strong>2 secondes</strong><br>
          • Expirez lentement pendant <strong>6 secondes</strong><br>
          • Répétez pendant 20 secondes
        </div>
        <div style="margin-top:8px;font-size:12px;color:#0369a1;">Prenez 20 secondes pour respirer et retrouver votre concentration.</div>
      </div>` : '';
      // Plain text version for TTS (strip HTML tags)
      const breathingTts = showBreathing ? ' Nous vous suggérons un exercice de respiration : inspirez 4 secondes, tenez 2 secondes, expirez lentement 6 secondes. Répétez 3 fois.' : '';
      const plainMessage = `${title}. ${message.replace(/<[^>]+>/g, '')}${breathingTts}`;
      const speakBtnHtml = `
      <div style="margin-top:12px;">
        <button id="swal-tts-btn"
          style="background:#f5f3ff;color:#7c3aed;border:1px solid #ddd6fe;border-radius:8px;
                 padding:6px 14px;font-size:13px;cursor:pointer;transition:background .2s;"
          onmouseover="this.style.background='#ede9fe'"
          onmouseout="this.style.background='#f5f3ff'">
          🔊 Écouter la recommandation
        </button>
      </div>`;
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
        title: `${icon} ${title}`,
        html: `<p style="color:#374151;margin-bottom:0;">${message}</p>${breathingHtml}${speakBtnHtml}`,
        confirmButtonText: showBreathing ? '🧘 Commencer la respiration' : '👍 Merci !',
        showCancelButton: showBreathing,
        cancelButtonText: 'Fermer',
        confirmButtonColor: color,
        cancelButtonColor: '#6b7280',
        timer: showBreathing ? undefined : 9000,
        timerProgressBar: !showBreathing,
        didOpen: popup => {
          const btn = popup.querySelector('#swal-tts-btn');
          if (btn) {
            btn.addEventListener('click', () => this.speak(plainMessage));
          }
          // Auto-read if ttsEnabled
          if (this.ttsEnabled) {
            setTimeout(() => this.speak(plainMessage), 600);
          }
        },
        willClose: () => {
          window.speechSynthesis?.cancel();
        }
      }).then(result => {
        if (result.isConfirmed && showBreathing) {
          this.startBreathingExercise();
        }
      });
    }
    dismissMicroCoaching() {
      this.showMicroCoaching = false;
    }
    toggleMicroCoaching() {
      this.showMicroCoaching = !this.showMicroCoaching;
    }
    // ═══ Sound notifications (Web Audio API — no external files) ═══
    toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      if (this.soundEnabled) this.playSound('camera'); // confirmation beep
    }
    // ═══ Text-to-Speech ═══
    toggleTts() {
      this.ttsEnabled = !this.ttsEnabled;
      if (!this.ttsEnabled) {
        window.speechSynthesis?.cancel();
      } else {
        // Speak confirmation, then immediately do a first attention check (after 2.5s so voices don't overlap)
        this.speak('Lecture vocale activée.');
        setTimeout(() => this.checkAndSpeak(), 2500);
      }
    }
    // ═══ Periodic attention check — speaks based on recent concentration ═══
    checkAndSpeak() {
      if (!this.ttsEnabled || !this.cameraActive) return;
      // Use the last 30 samples (≈ 60 seconds of data at 1 sample/2s)
      const recent = this.attentionHistory.slice(-30);
      if (recent.length < 3) return; // not enough data yet
      const recentAvg = Math.round(recent.reduce((acc, h) => acc + h.score, 0) / recent.length);
      const issue = this.dominantIssue;
      if (recentAvg >= 70) {
        // Concentrated → positive encouragement
        const msgs = ['Excellent travail ! Vous êtes très concentré. Continuez sur cette lancée !', 'Super ! Votre attention est au top. Vous êtes dans la zone idéale.', 'Bravo ! Vous progressez très bien. Restez dans cet état de concentration.', 'Parfait ! Votre niveau d\'attention est excellent. Continuez comme ça !'];
        this.speak(msgs[Math.floor(Math.random() * msgs.length)]);
      } else if (recentAvg >= 45) {
        // Middle range → gentle reminder to refocus
        const msgs = ['Vous êtes sur la bonne voie ! Essayez de rester focalisé sur le cours.', 'Bonne session. Un petit effort de concentration et vous serez au top !', 'Continuez, vous faites du bon travail. Restez attentif pour progresser encore plus.'];
        this.speak(msgs[Math.floor(Math.random() * msgs.length)]);
      } else {
        // Low attention → motivating message based on detected issue
        let msg;
        if (issue === 'EYES_CLOSED' || issue === 'TIRED' || issue === 'YAWNING') {
          msg = 'Vous semblez fatigué. Prenez une grande respiration et une courte pause pour retrouver votre énergie.';
        } else if (issue === 'LOOKING_AWAY' || issue === 'ABSENT') {
          msg = 'Votre attention semble dispersée. Recentrez-vous sur le cours, vous êtes presque là !';
        } else if (issue === 'SAD' || issue === 'ANGRY') {
          msg = 'Prenez une grande respiration. Vous faites du bon travail, chaque effort compte.';
        } else {
          msg = 'Votre concentration a baissé. Prenez un instant pour vous recentrer, vous en êtes capable !';
        }
        this.speak(msg);
      }
    }
    speak(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel(); // cancel any ongoing speech
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'fr-FR';
      utter.rate = 0.92;
      utter.pitch = 1.05;
      // Try to pick a French voice; getVoices() may be empty on first call
      const setVoiceAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        const frVoice = voices.find(v => v.lang.startsWith('fr')) ?? null;
        if (frVoice) utter.voice = frVoice;
        window.speechSynthesis.speak(utter);
      };
      if (window.speechSynthesis.getVoices().length) {
        setVoiceAndSpeak();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null;
          setVoiceAndSpeak();
        };
      }
    }
    getAudioContext() {
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    }
    playSound(type) {
      if (!this.soundEnabled) return;
      try {
        const ctx = this.getAudioContext();
        const notes = [];
        if (type === 'positive') {
          // Ascending two-note soft chime (C5 → E5)
          notes.push({
            freq: 523.25,
            start: 0,
            dur: 0.12
          });
          notes.push({
            freq: 659.25,
            start: 0.13,
            dur: 0.18
          });
        } else if (type === 'warning') {
          // Descending soft tone (G4 → D4)
          notes.push({
            freq: 392.00,
            start: 0,
            dur: 0.15
          });
          notes.push({
            freq: 293.66,
            start: 0.16,
            dur: 0.22
          });
        } else if (type === 'camera') {
          // 3-note ascending chime (C5 → E5 → G5)
          notes.push({
            freq: 523.25,
            start: 0,
            dur: 0.10
          });
          notes.push({
            freq: 659.25,
            start: 0.11,
            dur: 0.10
          });
          notes.push({
            freq: 783.99,
            start: 0.22,
            dur: 0.20
          });
        } else {
          // Breathing — calm low double pulse (A3)
          notes.push({
            freq: 220.00,
            start: 0,
            dur: 0.30
          });
          notes.push({
            freq: 220.00,
            start: 0.40,
            dur: 0.30
          });
        }
        notes.forEach(n => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = type === 'warning' ? 'triangle' : 'sine';
          osc.frequency.value = n.freq;
          gain.gain.setValueAtTime(0, ctx.currentTime + n.start);
          gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + n.start + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + n.start + n.dur);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + n.start);
          osc.stop(ctx.currentTime + n.start + n.dur + 0.01);
        });
      } catch {/* audio not supported */}
    }
    getRemarkIcon(type) {
      switch (type) {
        case 'EYES_CLOSED':
          return 'isax-eye-slash';
        case 'YAWNING':
          return 'isax-emoji-sad';
        case 'LOOKING_AWAY':
          return 'isax-eye';
        case 'ABSENT':
          return 'isax-user-remove';
        case 'SMILING':
          return 'isax-emoji-happy';
        case 'CONCENTRATED':
          return 'isax-brain';
        case 'SAD':
          return 'isax-emoji-sad';
        case 'ANGRY':
          return 'isax-danger';
        case 'TIRED':
          return 'isax-moon';
        default:
          return 'isax-info-circle';
      }
    }
    getRemarkColor(type) {
      switch (type) {
        case 'EYES_CLOSED':
          return '#f59e0b';
        case 'YAWNING':
          return '#8b5cf6';
        case 'LOOKING_AWAY':
          return '#ef4444';
        case 'ABSENT':
          return '#6b7280';
        case 'SMILING':
          return '#22c55e';
        case 'CONCENTRATED':
          return '#3b82f6';
        case 'SAD':
          return '#6366f1';
        case 'ANGRY':
          return '#dc2626';
        case 'TIRED':
          return '#a855f7';
        default:
          return '#3b82f6';
      }
    }
    getAttentionColor() {
      if (this.attentionScore >= 75) return '#22c55e';
      if (this.attentionScore >= 50) return '#f59e0b';
      return '#ef4444';
    }
    // ═══ Session Stats Getters ═══
    get sessionAvgAttention() {
      if (!this.attentionHistory.length) return this.attentionScore;
      const sum = this.attentionHistory.reduce((acc, h) => acc + h.score, 0);
      return Math.round(sum / this.attentionHistory.length);
    }
    get sessionDuration() {
      if (!this.sessionStartTime) return '0 min';
      const secs = Math.floor((new Date().getTime() - this.sessionStartTime.getTime()) / 1000);
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return m > 0 ? `${m} min ${s}s` : `${s}s`;
    }
    get dominantIssue() {
      const issues = ['EYES_CLOSED', 'LOOKING_AWAY', 'YAWNING', 'ABSENT', 'TIRED', 'SAD', 'ANGRY'];
      let max = 0;
      let dominant = null;
      for (const t of issues) {
        const c = this.sessionTypeCounts[t] || 0;
        if (c > max) {
          max = c;
          dominant = t;
        }
      }
      return max > 0 ? dominant : null;
    }
    get sessionImprovementTip() {
      const issue = this.dominantIssue;
      const avg = this.sessionAvgAttention;
      if (!issue && avg >= 70) return 'Excellente session ! Votre concentration était remarquable tout au long du cours. 🌟';
      switch (issue) {
        case 'EYES_CLOSED':
          return 'Pour améliorer votre attention : assurez-vous d\'être bien reposé avant chaque session et éclairez correctement votre espace. 💤';
        case 'LOOKING_AWAY':
          return 'Essayez d\'éliminer les distractions visuelles dans votre environnement de travail pour rester focus. 🎯';
        case 'YAWNING':
          return 'Boire de l\'eau régulièrement et faire de courtes pauses (technique Pomodoro) peut renforcer votre énergie. 💧';
        case 'ABSENT':
          return 'Assurez-vous d\'être bien positionné face à la caméra et dans un endroit calme. 🏠';
        case 'TIRED':
          return 'Prenez le temps de vous étirer entre les sessions pour maintenir votre énergie. 🤸';
        case 'SAD':
          return 'Un environnement confortable, une musique légère ou un café peuvent améliorer votre humeur d\'apprentissage. ☕';
        case 'ANGRY':
          return 'Des pauses courtes et régulières permettent de maintenir la patience face aux défis. 🧘';
        default:
          return 'Continuez sur cette lancée — chaque session vous rapproche de vos objectifs ! 🚀';
      }
    }
    get sessionTypeCountsSorted() {
      const all = [{
        type: 'EYES_CLOSED',
        label: 'Yeux fermés',
        color: '#f59e0b'
      }, {
        type: 'YAWNING',
        label: 'Bâillements',
        color: '#8b5cf6'
      }, {
        type: 'LOOKING_AWAY',
        label: 'Regard ailleurs',
        color: '#ef4444'
      }, {
        type: 'ABSENT',
        label: 'Absences',
        color: '#6b7280'
      }, {
        type: 'SAD',
        label: 'Tristesse',
        color: '#6366f1'
      }, {
        type: 'ANGRY',
        label: 'Frustration',
        color: '#dc2626'
      }, {
        type: 'TIRED',
        label: 'Fatigue',
        color: '#a855f7'
      }, {
        type: 'SMILING',
        label: 'Sourires',
        color: '#22c55e'
      }, {
        type: 'CONCENTRATED',
        label: 'Concentration',
        color: '#3b82f6'
      }];
      return all.filter(t => (this.sessionTypeCounts[t.type] || 0) > 0).map(t => ({
        ...t,
        count: this.sessionTypeCounts[t.type] || 0
      })).sort((a, b) => b.count - a.count);
    }
    toggleSessionStats() {
      this.showSessionStats = !this.showSessionStats;
    }
    // ═══ Real-time Tips Logic ═══
    computeTip() {
      const d = this.latestDetection;
      if (!d) {
        this.currentTip = null;
        return;
      }
      const level = d.attention_level || '';
      // Priority: breathing active → expression → detection flags → attention level
      if (this.breathingActive) {
        this.currentTip = null; // breathing UI handles its own display
        return;
      }
      if (!d.face_detected) {
        this.currentTip = 'Positionnez-vous face à la caméra pour ne rien manquer 📷';
      } else if (d.expression === 'CONCENTRATED') {
        this.currentTip = 'Vous êtes en pleine concentration 🎯 Excellent ! Continuez ainsi.';
      } else if (d.expression === 'SMILING') {
        this.currentTip = 'Votre enthousiasme est visible ! Gardez cette énergie positive 😊';
      } else if (d.expression === 'TIRED') {
        this.currentTip = 'Vous semblez fatigué — étirez vos bras et respirez profondément 🤸';
      } else if (d.expression === 'ANGRY') {
        this.currentTip = 'Prenez une grande inspiration… Les défis font partie de l\'apprentissage 🧘';
      } else if (d.expression === 'SAD') {
        this.currentTip = 'C\'est normal de trouver ça difficile. Vous y êtes presque ! 🌈';
      } else if (d.eyes_closed) {
        this.currentTip = 'Respirez profondément pour rester alerte. Un verre d\'eau peut aider ! 💧';
      } else if (d.yawning) {
        this.currentTip = 'Vous semblez fatigué. Une pause de 2 min peut booster votre concentration ! ⏱️';
      } else if (d.looking_away) {
        this.currentTip = 'Recentrez votre regard sur le cours — vous pouvez le faire ! 💪';
      } else if (level === 'VERY_FOCUSED') {
        this.currentTip = 'Performance optimale ! Votre concentration est excellente 🚀';
      } else if (level === 'FOCUSED') {
        this.currentTip = 'Bonne concentration ! Gardez ce rythme 👍';
      } else if (level === 'SLIGHTLY_DISTRACTED') {
        this.currentTip = 'Petite baisse de concentration — recentrez-vous doucement 🎯';
      } else if (level === 'DISTRACTED') {
        this.currentTip = 'Votre attention baisse — essayez de changer de position ou coupez les distractions 🌟';
      } else if (level === 'VERY_DISTRACTED') {
        this.currentTip = 'Attention très basse — une courte pause vous ferait du bien 🛑';
      } else {
        this.currentTip = null;
      }
    }
    // ═══ Breathing Exercise ═══
    startBreathingExercise() {
      this.breathingSuggested = false;
      this.breathingDismissed = false;
      this.breathingActive = true;
      this.breathingPhase = 'inhale';
      this.breathingTimeLeft = 4;
      this.runBreathingCycle();
    }
    stopBreathingExercise() {
      this.breathingActive = false;
      this.breathingSuggested = false;
      if (this.breathingTimer) {
        clearInterval(this.breathingTimer);
        this.breathingTimer = null;
      }
    }
    dismissBreathingSuggestion() {
      this.breathingSuggested = false;
      this.breathingDismissed = true;
      // Allow re-suggestion after 3 minutes
      setTimeout(() => {
        this.breathingDismissed = false;
      }, 180000);
    }
    runBreathingCycle() {
      let cycleCount = 0;
      const maxCycles = 3; // 3 full cycles (~36 seconds)
      this.breathingTimer = setInterval(() => {
        this.breathingTimeLeft--;
        if (this.breathingTimeLeft <= 0) {
          if (this.breathingPhase === 'inhale') {
            this.breathingPhase = 'hold';
            this.breathingTimeLeft = 2;
          } else if (this.breathingPhase === 'hold') {
            this.breathingPhase = 'exhale';
            this.breathingTimeLeft = 6;
          } else {
            cycleCount++;
            if (cycleCount >= maxCycles) {
              this.stopBreathingExercise();
              this.currentTip = 'Bravo ! Exercice terminé. Vous devriez vous sentir plus détendu 🧘';
              return;
            }
            this.breathingPhase = 'inhale';
            this.breathingTimeLeft = 4;
          }
        }
      }, 1000);
    }
    getBreathingLabel() {
      switch (this.breathingPhase) {
        case 'inhale':
          return 'Inspirez lentement…';
        case 'hold':
          return 'Gardez l\'air…';
        case 'exhale':
          return 'Expirez lentement…';
      }
    }
    getAttentionLevelLabel() {
      const level = this.latestDetection?.attention_level || '';
      switch (level) {
        case 'VERY_FOCUSED':
          return 'Très concentré';
        case 'FOCUSED':
          return 'Concentré';
        case 'SLIGHTLY_DISTRACTED':
          return 'Légèrement distrait';
        case 'DISTRACTED':
          return 'Distrait';
        case 'VERY_DISTRACTED':
          return 'Très distrait';
        default:
          return '';
      }
    }
    getAttentionLevelColor() {
      const level = this.latestDetection?.attention_level || '';
      switch (level) {
        case 'VERY_FOCUSED':
          return '#059669';
        case 'FOCUSED':
          return '#22c55e';
        case 'SLIGHTLY_DISTRACTED':
          return '#f59e0b';
        case 'DISTRACTED':
          return '#ef4444';
        case 'VERY_DISTRACTED':
          return '#dc2626';
        default:
          return '#6b7280';
      }
    }
    formatStudentMessage(markdown) {
      if (!markdown) {
        return '';
      }
      const escapeHtml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      let html = escapeHtml(markdown);
      const codeBlocks = [];
      html = html.replace(/```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g, (_full, lang, code) => {
        const language = (lang || '').trim();
        const codeHtml = `<pre class="ai-msg__code-block"><code>${code}</code></pre>`;
        const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
        codeBlocks.push(codeHtml.replace('<pre class="ai-msg__code-block">', `<pre class="ai-msg__code-block${language ? ` lang-${language}` : ''}">`));
        return token;
      });
      html = html.replace(/^#### (.+)$/gm, '<h5 class="ai-msg__section-title">$1</h5>');
      html = html.replace(/^### (.+)$/gm, '<h4 class="ai-msg__section-title">$1</h4>');
      html = html.replace(/^## (.+)$/gm, '<h3 class="ai-msg__section-title">$1</h3>');
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      html = html.replace(/`([^`\n]+?)`/g, '<code class="ai-msg__code">$1</code>');
      html = html.replace(/^---$/gm, '<hr class="ai-msg__divider">');
      const lines = html.split('\n');
      let listType = null;
      const out = [];
      for (const line of lines) {
        const bullet = line.match(/^\s*[-•*]\s+(.+)$/);
        const numbered = line.match(/^\s*\d+\.\s+(.+)$/);
        if (bullet) {
          if (listType !== 'ul') {
            if (listType) out.push('</ol>');
            out.push('<ul class="ai-msg__list">');
            listType = 'ul';
          }
          out.push(`<li class="ai-msg__list-item">${bullet[1]}</li>`);
          continue;
        }
        if (numbered) {
          if (listType !== 'ol') {
            if (listType) out.push('</ul>');
            out.push('<ol class="ai-msg__list ai-msg__list--ordered">');
            listType = 'ol';
          }
          out.push(`<li class="ai-msg__list-item">${numbered[1]}</li>`);
          continue;
        }
        if (listType) {
          out.push(listType === 'ul' ? '</ul>' : '</ol>');
          listType = null;
        }
        out.push(line.trim() ? `<p>${line}</p>` : '');
      }
      if (listType) {
        out.push(listType === 'ul' ? '</ul>' : '</ol>');
      }
      html = out.join('');
      codeBlocks.forEach((block, idx) => {
        html = html.replace(`@@CODEBLOCK_${idx}@@`, block);
      });
      return html;
    }
    static ɵfac = function CourseWatchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseWatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_12__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_note_note_service__WEBPACK_IMPORTED_MODULE_13__.NoteService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_qa_qa_service__WEBPACK_IMPORTED_MODULE_14__.QaService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_detection_detection_service__WEBPACK_IMPORTED_MODULE_15__.DetectionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_ai_ai_agents_service__WEBPACK_IMPORTED_MODULE_16__.AiAgentsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CourseWatchComponent,
      selectors: [["app-course-watch"]],
      viewQuery: function CourseWatchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.cameraVideoRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.cameraCanvasRef = _t.first);
        }
      },
      decls: 6,
      vars: 4,
      consts: [["notDoneIcon", ""], ["noVideo", ""], ["videoPlayer", ""], ["textFallback", ""], ["noLessonOverview", ""], ["cameraVideo", ""], ["cameraCanvas", ""], ["studentAiReady", ""], [1, "content", "pt-0"], [1, "container-fluid"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger m-3", 4, "ngIf"], ["class", "course-watch-section", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2"], [1, "alert", "alert-danger", "m-3"], [1, "alert-link", "ms-2", 3, "routerLink"], [1, "course-watch-section"], [1, "row"], [1, "border-end", 3, "ngClass"], [1, "progress-overview-section"], [1, "mb-4"], ["href", "javascript:void(0);", 1, "back-to-course", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], [1, "back-to-course", "d-block", "mt-2", 3, "routerLink"], [1, "isax", "isax-home", "me-1"], [1, "mb-1"], ["role", "progressbar", 1, "progress", "progress-xs", "mb-2"], [1, "progress-bar", "bg-success"], ["class", "fw-medium text-muted small", 4, "ngIf"], ["id", "accordionCourseWatch", 1, "accordions-items-seperate"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "course-watch-content"], ["class", "text-center py-4", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "col-lg-3"], ["class", "cv-widget", 4, "ngIf"], ["class", "camera-panel", 4, "ngIf"], [1, "fw-medium", "text-muted", "small"], [1, "accordion-item"], [1, "accordion-header"], ["role", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-block", "mb-1", "text-muted", "small"], [1, "mb-0"], [1, "cw-section-pct", "text-muted", "small", "ms-2"], [1, "progress", "mt-2", 2, "height", "3px", "border-radius", "4px"], [1, "progress-bar", 2, "transition", "width .4s ease"], [1, "accordion-collapse", "collapse", "show", 3, "id"], [1, "accordion-body"], ["class", "cw-lesson-row", 3, "cw-lesson-row--active", "cw-lesson-row--done", "cw-lesson-row--locked", "click", 4, "ngFor", "ngForOf"], [1, "cw-lesson-row", 3, "click"], [1, "d-flex", "align-items-start", "gap-2"], [1, "cw-lesson-icon", "flex-shrink-0"], ["class", "isax isax-tick-circle5 text-success fs-18", 4, "ngIf", "ngIfElse"], [1, "flex-grow-1", "min-w-0"], [1, "cw-lesson-title", "mb-0"], [1, "d-flex", "flex-wrap", "gap-1", "mt-1"], ["class", "cw-badge-quiz", 4, "ngIf"], ["class", "cw-badge-type cw-badge-type--text", 4, "ngIf"], ["class", "cw-badge-type cw-badge-type--pdf", 4, "ngIf"], ["class", "cw-badge-duration text-muted", 4, "ngIf"], ["class", "cw-active-dot", 4, "ngIf"], [1, "isax", "isax-tick-circle5", "text-success", "fs-18"], ["class", "isax isax-lock fs-18 text-muted", 4, "ngIf"], ["class", "isax fs-18", 3, "ngClass", 4, "ngIf"], [1, "isax", "isax-lock", "fs-18", "text-muted"], [1, "isax", "fs-18", 3, "ngClass"], [1, "cw-badge-quiz"], [1, "cw-badge-type", "cw-badge-type--text"], [1, "cw-badge-type", "cw-badge-type--pdf"], [1, "cw-badge-duration", "text-muted"], [1, "cw-active-dot"], [1, "text-center", "py-4"], [1, "cw-content-header", "mb-3"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-2"], [1, "fw-bold", "mb-1"], ["class", "text-muted small mb-0", 4, "ngIf"], [1, "badge", "rounded-pill", "flex-shrink-0", "mt-1", 3, "ngClass"], [1, "isax", "me-1", 3, "ngClass"], ["class", "p-3 bg-light rounded mb-3", 4, "ngIf"], ["class", "cw-quiz-card mb-3", 4, "ngIf"], [1, "cw-nav-bar", "mb-3"], [1, "cw-nav-btn", "cw-nav-btn--prev", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "cw-nav-btn", "cw-nav-btn--complete", 3, "click", "disabled"], [1, "isax", "me-1"], [1, "cw-nav-btn", 3, "click", "disabled"], [1, "text-muted", "small", "mb-0"], [4, "ngIf", "ngIfElse"], ["controls", "", 1, "w-100", "rounded", "mb-2", 2, "max-height", "450px", "background", "#000", 3, "ended", "pause", "timeupdate", "src"], [1, "bg-dark", "text-white", "d-flex", "align-items-center", "justify-content-center", "rounded", "mb-2", 2, "height", "300px"], [1, "text-center"], [1, "isax", "isax-video-circle5", "fs-48", "d-block", "mb-2", "opacity-50"], [1, "w-100", "rounded", "mb-2", 2, "height", "500px", "border", "none", 3, "src"], [1, "p-3", "bg-light", "rounded", "mb-3"], ["class", "article-content", 3, "innerHTML", 4, "ngIf", "ngIfElse"], [1, "article-content", 3, "innerHTML"], [1, "mb-0", "text-muted"], [1, "cw-quiz-card", "mb-3"], [1, "cw-quiz-card__inner"], [1, "cw-quiz-card__icon"], [1, "isax", "isax-medal-star"], [1, "cw-quiz-card__body"], [1, "cw-quiz-card__label"], [1, "cw-quiz-card__title"], [1, "isax", "isax-medal-star", "me-1"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "mt-3"], ["role", "tablist", 1, "nav-tabs", "mb-4", "nav-justified", "border-0", "nav-style-1", "d-sm-flex", "d-block"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "btn", "nav-link", 3, "click"], [1, "isax", "isax-star", "me-1"], ["class", "badge bg-warning text-dark ms-1 small", 4, "ngIf"], [1, "isax", "isax-message-question", "me-1"], ["class", "badge bg-info text-white ms-1 small", 4, "ngIf"], [1, "tab-content"], [1, "badge", "bg-warning", "text-dark", "ms-1", "small"], [1, "badge", "bg-info", "text-white", "ms-1", "small"], [1, "fs-18", "fw-semibold", "mb-1"], [1, "fs-18", "fw-semibold", "mb-2"], [1, "list-unstyled", "what-you-learn", "ms-4", 2, "list-style-type", "disc"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2"], [1, "text-center", "py-4", "text-muted"], [1, "isax", "isax-play-circle5", "fs-48", "d-block", "mb-2"], ["class", "card border-0 bg-light rounded-3 p-3 mb-4", 4, "ngIf"], ["class", "alert alert-info d-flex align-items-center gap-2 mb-4", 4, "ngIf"], ["class", "text-center py-3 text-muted", 4, "ngIf"], ["class", "d-flex gap-3 mb-3 pb-3 border-bottom", 4, "ngFor", "ngForOf"], [1, "card", "border-0", "bg-light", "rounded-3", "p-3", "mb-4"], [1, "fw-semibold", "mb-3"], [1, "isax", "isax-edit", "me-1"], [1, "mb-2", "d-flex", "gap-1", "align-items-center"], ["class", "fs-22", "style", "cursor:pointer;", 3, "text-warning", "text-muted", "click", 4, "ngFor", "ngForOf"], [1, "small", "text-muted", "ms-2"], ["rows", "3", "placeholder", "Partagez votre exp\u00E9rience avec ce cours...", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "isax", "isax-send-2", "me-1"], ["class", "btn btn-outline-danger btn-sm", 3, "click", 4, "ngIf"], ["class", "alert alert-success mt-2 mb-0 py-1 px-2 small", 4, "ngIf"], ["class", "alert alert-danger mt-2 mb-0 py-1 px-2 small", 4, "ngIf"], [1, "fs-22", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-star"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "isax", "isax-trash", "me-1"], [1, "alert", "alert-success", "mt-2", "mb-0", "py-1", "px-2", "small"], [1, "alert", "alert-danger", "mt-2", "mb-0", "py-1", "px-2", "small"], [1, "alert", "alert-info", "d-flex", "align-items-center", "gap-2", "mb-4"], [1, "isax", "isax-info-circle", "fs-18"], [1, "text-center", "py-3", "text-muted"], [1, "isax", "isax-star5", "fs-36", "d-block", "mb-2"], [1, "d-flex", "gap-3", "mb-3", "pb-3", "border-bottom"], [1, "flex-shrink-0"], ["width", "44", "height", "44", "alt", "", 1, "rounded-circle", 2, "object-fit", "cover", 3, "src"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "small"], [1, "text-muted", "small"], [4, "ngFor", "ngForOf"], [1, "small", "text-muted", "ms-1"], ["class", "mb-0 small", 4, "ngIf"], ["class", "mb-0 small text-muted fst-italic", 4, "ngIf"], [2, "font-size", "14px"], [1, "mb-0", "small"], [1, "mb-0", "small", "text-muted", "fst-italic"], [1, "isax", "isax-message-add", "me-1"], ["class", "text-muted fw-normal", 4, "ngIf"], ["type", "text", "placeholder", "Titre de la question", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "D\u00E9taillez votre question (optionnel)...", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], ["class", "text-center py-3", 4, "ngIf"], ["class", "card border rounded-3 p-3 mb-4", 4, "ngIf"], [1, "text-muted", "fw-normal"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "isax", "isax-message-question", "fs-36", "d-block", "mb-2"], [1, "card", "border", "rounded-3", "p-3", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "fw-semibold", "mb-1"], [1, "text-muted", "small", "mb-1"], ["class", "mb-0", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-close-circle"], [1, "small", "fw-semibold", "mb-2"], ["class", "d-flex gap-2 mb-3 pb-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-2", "mt-2"], ["type", "text", "placeholder", "Votre r\u00E9ponse...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-send-2"], [1, "d-flex", "gap-2", "mb-3", "pb-2", "border-bottom"], [1, "avatar", "avatar-sm", "avatar-rounded"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", ""], ["class", "badge bg-primary small", 4, "ngIf"], ["class", "btn btn-link btn-sm p-0 ms-auto text-primary", "title", "Modifier", 3, "click", 4, "ngIf"], ["class", "btn btn-link btn-sm p-0 text-danger", "title", "Supprimer", 3, "click", 4, "ngIf"], [1, "badge", "bg-primary", "small"], ["title", "Modifier", 1, "btn", "btn-link", "btn-sm", "p-0", "ms-auto", "text-primary", 3, "click"], [1, "isax", "isax-edit", "fs-14"], ["title", "Supprimer", 1, "btn", "btn-link", "btn-sm", "p-0", "text-danger", 3, "click"], [1, "isax", "isax-trash", "fs-14"], ["rows", "2", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["type", "text", "placeholder", "Titre", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "D\u00E9tails (optionnel)", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], [1, "flex-shrink-0", 2, "cursor", "pointer", 3, "click"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-message-question", "fs-20", "text-primary"], [1, "flex-grow-1", 2, "cursor", "pointer", 3, "click"], [1, "fs-14", "fw-medium", "mb-1"], [1, "badge", "bg-light", "text-dark", "small"], [1, "flex-shrink-0", "d-flex", "align-items-start", "gap-1"], ["class", "btn btn-link btn-sm p-0 text-primary", "title", "Modifier ma question", 3, "click", 4, "ngIf"], ["class", "btn btn-link btn-sm p-0 text-danger", "title", "Supprimer ma question", 3, "click", 4, "ngIf"], ["title", "Modifier ma question", 1, "btn", "btn-link", "btn-sm", "p-0", "text-primary", 3, "click"], [1, "isax", "isax-edit", "fs-15"], ["title", "Supprimer ma question", 1, "btn", "btn-link", "btn-sm", "p-0", "text-danger", 3, "click"], [1, "isax", "isax-trash", "fs-15"], [1, "cv-widget"], [1, "cv-widget__header"], [1, "cv-widget__icon-wrap"], [1, "isax", "isax-camera"], [1, "cv-widget__title"], [1, "cv-widget__sub"], ["title", "Activer la cam\u00E9ra", 1, "cv-switch", "ms-auto"], ["type", "checkbox", 3, "change", "checked"], [1, "cv-switch__track"], [1, "cv-widget__features"], [1, "cv-widget__feature"], [1, "isax", "isax-chart-2", 2, "color", "#3b82f6"], [1, "isax", "isax-lamp-on", 2, "color", "#f59e0b"], [1, "isax", "isax-wind", 2, "color", "#06b6d4"], [1, "isax", "isax-star", 2, "color", "#22c55e"], [1, "cv-widget__cta", 3, "click"], [1, "isax", "isax-camera", "me-2"], [1, "camera-panel"], [1, "camera-panel__header"], [1, "camera-panel__dot"], [1, "fw-semibold", "small"], [1, "badge", "rounded-pill", 2, "font-size", "0.7rem"], ["title", "D\u00E9sactiver la cam\u00E9ra", 1, "cv-switch"], ["class", "micro-coaching", 4, "ngIf"], [1, "camera-panel__video-wrapper"], ["autoplay", "", "playsinline", "", "muted", "", 1, "camera-panel__video"], [2, "display", "none"], ["class", "camera-panel__indicators", 4, "ngIf"], [1, "camera-panel__attention"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "text-muted"], [1, "fw-bold"], [1, "attention-track"], [1, "attention-fill"], ["class", "mt-1", 4, "ngIf"], ["class", "breathing-suggestion", 4, "ngIf"], ["class", "breathing-exercise", 4, "ngIf"], [1, "d-flex", "gap-2", "mt-2", 2, "padding", "0 14px"], [1, "btn", "btn-sm", "flex-fill", 2, "background", "#eff6ff", "color", "#1d4ed8", "border", "1px solid #bfdbfe", "font-size", "11.5px", 3, "click"], [1, "isax", "isax-chart-2", "me-1"], [1, "btn", "btn-sm", 3, "click", "title"], ["class", "camera-stats-panel", 4, "ngIf"], [1, "camera-panel__remarks", "mt-3"], [1, "isax", "isax-message-text", "me-1"], [1, "badge", "bg-secondary", "ms-1"], ["class", "camera-remarks-list", 4, "ngIf"], ["class", "text-center text-muted small py-3", 4, "ngIf"], [1, "micro-coaching"], [1, "micro-coaching__header"], [1, "isax", "isax-cpu", "me-1"], ["title", "Fermer", 1, "micro-coaching__close", 3, "click"], [1, "isax", "isax-close-square"], [1, "micro-coaching__body"], ["class", "micro-coaching__tip", 4, "ngIf"], ["class", "micro-coaching__tip micro-coaching__tip--idle", 4, "ngIf"], [1, "micro-coaching__tip"], [1, "isax", "isax-lamp-on", "me-1", "text-warning"], [1, "micro-coaching__tip", "micro-coaching__tip--idle"], [1, "isax", "isax-eye", "me-1", 2, "color", "#3b82f6"], [1, "camera-panel__indicators"], ["class", "camera-indicator", "title", "Visage non d\u00E9tect\u00E9", 4, "ngIf"], ["class", "camera-indicator camera-indicator--warn", "title", "Yeux ferm\u00E9s", 4, "ngIf"], ["class", "camera-indicator camera-indicator--warn", "title", "Regard ailleurs", 4, "ngIf"], ["class", "camera-indicator camera-indicator--info", "title", "B\u00E2illement", 4, "ngIf"], ["class", "camera-indicator camera-indicator--success", "title", "Sourire \uD83D\uDE0A", 4, "ngIf"], ["class", "camera-indicator camera-indicator--success", "title", "Concentr\u00E9 \uD83C\uDFAF", 4, "ngIf"], ["class", "camera-indicator camera-indicator--warn", "title", "Triste", 4, "ngIf"], ["class", "camera-indicator camera-indicator--danger", "title", "Frustr\u00E9", 4, "ngIf"], ["class", "camera-indicator camera-indicator--warn", "title", "Fatigu\u00E9", 4, "ngIf"], ["title", "Visage non d\u00E9tect\u00E9", 1, "camera-indicator"], [1, "isax", "isax-user-remove"], ["title", "Yeux ferm\u00E9s", 1, "camera-indicator", "camera-indicator--warn"], [1, "isax", "isax-eye-slash"], ["title", "Regard ailleurs", 1, "camera-indicator", "camera-indicator--warn"], [1, "isax", "isax-eye"], ["title", "B\u00E2illement", 1, "camera-indicator", "camera-indicator--info"], [1, "isax", "isax-emoji-sad"], ["title", "Sourire \uD83D\uDE0A", 1, "camera-indicator", "camera-indicator--success"], [1, "isax", "isax-emoji-happy"], ["title", "Concentr\u00E9 \uD83C\uDFAF", 1, "camera-indicator", "camera-indicator--success"], [1, "isax", "isax-brain"], ["title", "Triste", 1, "camera-indicator", "camera-indicator--warn"], ["title", "Frustr\u00E9", 1, "camera-indicator", "camera-indicator--danger"], [1, "isax", "isax-danger"], ["title", "Fatigu\u00E9", 1, "camera-indicator", "camera-indicator--warn"], [1, "isax", "isax-moon"], [1, "mt-1"], [1, "attention-badge"], [1, "breathing-suggestion"], [1, "isax", "isax-wind", 2, "color", "#0ea5e9"], [1, "fw-semibold", 2, "color", "#0369a1"], [2, "color", "#374151"], [1, "d-flex", "gap-1", "mt-2"], [1, "btn", "btn-sm", "flex-fill", 2, "background", "#0ea5e9", "color", "#fff", "font-size", "11px", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", 2, "font-size", "11px", 3, "click"], [1, "breathing-exercise"], [1, "breathing-exercise__header"], [1, "isax", "isax-wind", "me-1"], [1, "btn", "btn-sm", "btn-link", "text-muted", "p-0", "ms-auto", 3, "click"], [1, "breathing-exercise__circle"], [1, "breathing-exercise__time"], [1, "breathing-exercise__label"], [1, "breathing-exercise__phases"], [1, "camera-stats-panel"], [1, "camera-stats-panel__header"], [1, "isax", "isax-chart-2", "me-1", "text-info"], [1, "text-muted", "ms-auto"], [1, "camera-stats-panel__gauge"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "progress", 2, "height", "8px", "border-radius", "4px"], [1, "progress-bar", 2, "transition", "width 0.5s ease"], ["class", "camera-stats-panel__breakdown", 4, "ngIf"], [1, "camera-stats-panel__advice"], [1, "isax", "isax-star", "me-1", "text-warning"], [1, "camera-stats-panel__breakdown"], [1, "text-muted", "d-block", "mb-2"], [1, "detection-badges"], ["class", "detection-badge", 3, "borderColor", "color", 4, "ngFor", "ngForOf"], [1, "detection-badge"], [1, "camera-remarks-list"], ["class", "camera-remark-item", 4, "ngFor", "ngForOf"], [1, "camera-remark-item"], [1, "text-center", "text-muted", "small", "py-3"], [1, "isax", "isax-tick-circle", "d-block", "fs-24", "mb-1", "text-success"], ["title", "Assistant IA \u00C9tudiant", 1, "notes-fab", "student-ai-fab", 3, "click"], ["class", "isax isax-message-text", 4, "ngIf"], ["class", "isax isax-refresh", 4, "ngIf"], [1, "notes-panel", "ai-panel"], [1, "notes-panel__header"], [1, "ai-header-left"], [1, "ai-header-icon"], [1, "ai-header-title"], [1, "ai-header-mode"], [1, "ai-header-right"], [1, "ai-status-badge"], [1, "ai-status-dot"], ["class", "ai-clear-btn", "title", "Effacer la conversation", 3, "click", 4, "ngIf"], [1, "btn-close", "btn-close-white", "btn-sm", 3, "click"], [1, "notes-panel__body", "ai-panel__body"], ["class", "ai-lesson-context", 4, "ngIf"], ["class", "ai-empty-state", 4, "ngIf"], ["class", "ai-chat-list", 4, "ngIf"], ["class", "ai-typing-indicator", 4, "ngIf"], [1, "ai-panel__composer"], ["rows", "3", "placeholder", "Ex: R\u00E9sume cette le\u00E7on en 5 points + 3 questions de r\u00E9vision", 1, "notes-panel__textarea", "ai-panel__input", 3, "ngModelChange", "ngModel", "disabled"], [1, "ai-composer-actions"], [1, "ai-copy-btn", 3, "click", "disabled"], [1, "isax", "isax-copy", 2, "font-size", ".92rem"], [1, "ai-send-btn", 3, "click", "disabled"], ["title", "Mes Notes", 1, "notes-fab", 3, "click"], ["class", "isax isax-note", 4, "ngIf"], ["class", "isax isax-close-circle", 4, "ngIf"], [1, "notes-panel"], [1, "isax", "isax-note-2", "fs-18"], [1, "fw-semibold"], [1, "notes-panel__body"], [1, "notes-panel__section"], [1, "notes-panel__section-title"], [1, "isax", "isax-video-play", "fs-14", "me-1"], ["class", "text-truncate ms-1 opacity-75", 4, "ngIf"], ["class", "opacity-50", 4, "ngIf"], ["rows", "5", "placeholder", "Notes pour cette le\u00E7on...", 1, "notes-panel__textarea", 3, "ngModelChange", "ngModel", "disabled"], [1, "notes-panel__actions"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "isax", "isax-save-2", "me-1"], ["class", "notes-saved-msg", 4, "ngIf"], [1, "notes-panel__divider"], [1, "isax", "isax-book", "fs-14", "me-1"], [1, "text-truncate", "ms-1", "opacity-75"], ["rows", "5", "placeholder", "Notes g\u00E9n\u00E9rales pour ce cours...", 1, "notes-panel__textarea", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "isax", "isax-message-text"], [1, "isax", "isax-refresh"], ["title", "Effacer la conversation", 1, "ai-clear-btn", 3, "click"], [1, "ai-lesson-context"], [1, "ai-lesson-context__label"], [1, "ai-lesson-context__title"], [1, "ai-lesson-context__meta"], [1, "ai-empty-state"], [1, "ai-empty-state__icon"], [1, "ai-empty-state__title"], [1, "ai-empty-state__sub"], [1, "ai-audit-chips"], [1, "ai-chip", 3, "click"], [1, "ai-chat-list"], ["class", "ai-msg", 3, "ai-msg--user", "ai-msg--assistant", 4, "ngFor", "ngForOf"], [1, "ai-msg"], [1, "ai-msg__meta"], [1, "ai-msg__avatar"], [1, "ai-msg__bubble", 3, "innerHTML"], [1, "ai-typing-indicator"], [1, "ai-typing-meta"], [1, "ai-typing-avatar"], [1, "ai-typing-dots"], [1, "isax", "isax-refresh-2", 2, "animation", "spin 1s linear infinite", "font-size", ".92rem"], [1, "isax", "isax-send-2", 2, "font-size", ".92rem"], [1, "isax", "isax-note"], [1, "opacity-50"], [1, "notes-saved-msg"]],
      template: function CourseWatchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CourseWatchComponent_div_2_Template, 4, 0, "div", 10)(3, CourseWatchComponent_div_3_Template, 4, 2, "div", 11)(4, CourseWatchComponent_div_4_Template, 29, 15, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseWatchComponent_ng_container_5_Template, 73, 32, "ng-container", 13);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.course);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.errorMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.course && !ctx.errorMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.course);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _shared_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeUrlPipe, _shared_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe],
      styles: [".notes-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 1050;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.45);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);\n}\n.notes-fab--open[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #f97316);\n  box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);\n}\n\n.student-ai-fab[_ngcontent-%COMP%] {\n  bottom: 96px;\n}\n.student-ai-fab[_ngcontent-%COMP%]:not(.notes-fab--open)::after {\n  content: \"\";\n  position: absolute;\n  inset: -5px;\n  border-radius: 50%;\n  border: 2px solid rgba(99, 102, 241, 0.34);\n  animation: _ngcontent-%COMP%_ai-fab-ring 2.8s ease-out infinite;\n  pointer-events: none;\n}\n\n@keyframes _ngcontent-%COMP%_ai-fab-ring {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1.65);\n    opacity: 0;\n  }\n}\n.notes-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 96px;\n  right: 28px;\n  z-index: 1049;\n  width: 400px;\n  max-height: calc(100vh - 130px);\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 16px 56px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transform: translateY(24px) scale(0.96);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.3, 1), opacity 0.28s ease;\n}\n.notes-panel--visible[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n.notes-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px 16px;\n  background: linear-gradient(135deg, #0f766e 0%, #2563eb 100%);\n  color: #fff;\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.notes-panel__header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -40%;\n  right: -5%;\n  width: 120px;\n  height: 120px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.13) 0%, transparent 70%);\n  pointer-events: none;\n}\n.notes-panel__body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 14px 16px;\n  flex: 1;\n  scrollbar-width: thin;\n  scrollbar-color: #bfdbfe transparent;\n}\n.notes-panel__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.notes-panel__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.notes-panel__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #bfdbfe;\n  border-radius: 2px;\n}\n.notes-panel__section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.notes-panel__section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #6366f1;\n  margin-bottom: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.notes-panel__section-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #64748b;\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.notes-panel__textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #dbeafe;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.875rem;\n  resize: vertical;\n  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;\n  background: #f8fbff;\n  color: #1e293b;\n}\n.notes-panel__textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n  background: #fff;\n}\n.notes-panel__textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.notes-panel__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.notes-panel__divider[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  margin: 14px 0;\n}\n\n.notes-saved-msg[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #22c55e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 480px) {\n  .notes-panel[_ngcontent-%COMP%] {\n    right: 12px;\n    left: 12px;\n    width: auto;\n    bottom: 88px;\n  }\n  .notes-fab[_ngcontent-%COMP%] {\n    bottom: 16px;\n    right: 16px;\n  }\n  .student-ai-fab[_ngcontent-%COMP%] {\n    bottom: 84px;\n  }\n}\n.ai-panel[_ngcontent-%COMP%] {\n  bottom: 164px;\n}\n.ai-panel__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: linear-gradient(180deg, #f8fbff 0%, #f0f9ff 100%);\n}\n.ai-panel__composer[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #dbeafe;\n  padding: 12px 16px;\n  display: grid;\n  gap: 8px;\n  background: #fff;\n  box-shadow: 0 -2px 14px rgba(37, 99, 235, 0.07);\n}\n.ai-panel__input[_ngcontent-%COMP%] {\n  min-height: 84px;\n  margin-bottom: 0;\n}\n\n.ai-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ai-header-left[_ngcontent-%COMP%]   .ai-header-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.ai-header-left[_ngcontent-%COMP%]   .ai-header-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  line-height: 1.2;\n  letter-spacing: 0.01em;\n}\n.ai-header-left[_ngcontent-%COMP%]   .ai-header-mode[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.84;\n  margin-top: 1px;\n}\n\n.ai-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.ai-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  border-radius: 20px;\n  padding: 3px 9px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.ai-status-badge[_ngcontent-%COMP%]   .ai-status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_pulse-status 2s ease-in-out infinite;\n}\n\n.ai-clear-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: rgba(255, 255, 255, 0.88);\n  border-radius: 7px;\n  padding: 3px 8px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.ai-clear-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n}\n\n@keyframes _ngcontent-%COMP%_pulse-status {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 4px rgba(74, 222, 128, 0);\n  }\n}\n.ai-lesson-context[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ecfeff, #eff6ff);\n  border: 1.5px solid #bae6fd;\n  border-radius: 13px;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ai-lesson-context__label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #0284c7;\n}\n.ai-lesson-context__title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.35;\n}\n.ai-lesson-context__meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n\n.ai-chat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.ai-msg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  animation: _ngcontent-%COMP%_msg-in 0.22s ease;\n}\n.ai-msg__meta[_ngcontent-%COMP%] {\n  font-size: 0.69rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #94a3b8;\n}\n.ai-msg__avatar[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.ai-msg__bubble[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 10px 14px;\n  font-size: 0.855rem;\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n.ai-msg--user[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.ai-msg--user[_ngcontent-%COMP%]   .ai-msg__meta[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  color: #38bdf8;\n}\n.ai-msg--user[_ngcontent-%COMP%]   .ai-msg__avatar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #2563eb);\n  color: #fff;\n}\n.ai-msg--user[_ngcontent-%COMP%]   .ai-msg__bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #2563eb);\n  color: #fff;\n  max-width: 92%;\n  box-shadow: 0 3px 12px rgba(37, 99, 235, 0.28);\n  border-bottom-right-radius: 4px;\n}\n.ai-msg--assistant[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.ai-msg--assistant[_ngcontent-%COMP%]   .ai-msg__meta[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.ai-msg--assistant[_ngcontent-%COMP%]   .ai-msg__avatar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dbeafe, #cffafe);\n  color: #0369a1;\n}\n.ai-msg--assistant[_ngcontent-%COMP%]   .ai-msg__bubble[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #0f172a;\n  max-width: 100%;\n  border: 1.5px solid #dbeafe;\n  border-top-left-radius: 4px;\n  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.08);\n}\n.ai-msg__section-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #0369a1;\n  margin: 14px 0 5px;\n  padding-bottom: 4px;\n  border-bottom: 1.5px solid #dbeafe;\n}\n.ai-msg__section-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.ai-msg__list[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  padding-left: 18px;\n  list-style: disc;\n}\n.ai-msg__list-item[_ngcontent-%COMP%] {\n  margin: 3px 0;\n  font-size: 0.855rem;\n  line-height: 1.5;\n}\n.ai-msg__code[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.83rem;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.ai-msg__code-block[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 1px solid #d1d5db;\n  background: #0f172a;\n  color: #e2e8f0;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.82rem;\n  line-height: 1.45;\n  overflow-x: auto;\n  white-space: pre;\n}\n.ai-msg__list--ordered[_ngcontent-%COMP%] {\n  list-style: decimal;\n}\n.ai-msg__divider[_ngcontent-%COMP%] {\n  border: none;\n  height: 1.5px;\n  background: linear-gradient(90deg, transparent, #bfdbfe, transparent);\n  margin: 12px 0;\n}\n\n@keyframes _ngcontent-%COMP%_msg-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ai-typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ai-typing-indicator[_ngcontent-%COMP%]   .ai-typing-meta[_ngcontent-%COMP%] {\n  font-size: 0.69rem;\n  font-weight: 700;\n  color: #0284c7;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ai-typing-indicator[_ngcontent-%COMP%]   .ai-typing-meta[_ngcontent-%COMP%]   .ai-typing-avatar[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #dbeafe, #cffafe);\n  color: #0369a1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n}\n.ai-typing-indicator[_ngcontent-%COMP%]   .ai-typing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 14px;\n  background: #fff;\n  border: 1.5px solid #dbeafe;\n  border-radius: 14px;\n  border-top-left-radius: 4px;\n  width: fit-content;\n  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.08);\n}\n.ai-typing-indicator[_ngcontent-%COMP%]   .ai-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #38bdf8;\n  animation: _ngcontent-%COMP%_typing-bounce 1.4s ease-in-out infinite;\n}\n.ai-typing-indicator[_ngcontent-%COMP%]   .ai-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.18s;\n}\n.ai-typing-indicator[_ngcontent-%COMP%]   .ai-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.36s;\n}\n\n@keyframes _ngcontent-%COMP%_typing-bounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-6px);\n    opacity: 1;\n  }\n}\n.ai-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 10px 6px 4px;\n}\n.ai-empty-state__icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #dbeafe, #cffafe);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  box-shadow: 0 3px 12px rgba(37, 99, 235, 0.18);\n}\n.ai-empty-state__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #0369a1;\n  margin-bottom: 3px;\n}\n.ai-empty-state__sub[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n\n.ai-audit-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.ai-chip[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1.5px solid #bfdbfe;\n  border-radius: 20px;\n  padding: 5px 13px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #0369a1;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s, transform 0.12s, box-shadow 0.12s;\n}\n.ai-chip[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #0ea5e9, #2563eb);\n  color: #fff;\n  border-color: transparent;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.32);\n}\n\n.ai-composer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.ai-send-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #2563eb);\n  border: none;\n  color: #fff;\n  border-radius: 10px;\n  padding: 8px 20px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(37, 99, 235, 0.35);\n  transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s;\n}\n.ai-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 5px 16px rgba(37, 99, 235, 0.42);\n}\n.ai-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n\n.ai-copy-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #dbeafe;\n  color: #0369a1;\n  border-radius: 10px;\n  padding: 7px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.ai-copy-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eff6ff;\n  border-color: #2563eb;\n}\n.ai-copy-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.38;\n  cursor: not-allowed;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .ai-panel[_ngcontent-%COMP%] {\n    bottom: 156px;\n  }\n  .ai-status-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.cw-lesson-row[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.18s ease, box-shadow 0.18s ease;\n  margin-bottom: 6px;\n}\n.cw-lesson-row[_ngcontent-%COMP%]:hover {\n  background: #f1f5ff;\n}\n.cw-lesson-row--active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ede9fe, #f0fdf4);\n  border-left: 3px solid #6366f1;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.1);\n}\n.cw-lesson-row--active[_ngcontent-%COMP%]   .cw-lesson-title[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.cw-lesson-row--done[_ngcontent-%COMP%]:not(.cw-lesson-row--active) {\n  opacity: 0.75;\n}\n.cw-lesson-row--done[_ngcontent-%COMP%]:not(.cw-lesson-row--active)   .cw-lesson-title[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.cw-lesson-row--locked[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n.cw-lesson-row--locked[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.cw-lesson-row--locked[_ngcontent-%COMP%]   .cw-lesson-title[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n\n.cw-lesson-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.35;\n  color: #1e293b;\n  transition: color 0.15s;\n}\n\n.cw-lesson-icon[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n.cw-active-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6366f1;\n  flex-shrink: 0;\n  margin-top: 6px;\n  animation: _ngcontent-%COMP%_pulse-dot 1.8s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.55);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(99, 102, 241, 0);\n  }\n}\n.cw-badge-quiz[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  background: #6f42c1;\n  color: #fff;\n  letter-spacing: 0.3px;\n}\n\n.cw-badge-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n.cw-badge-type--text[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.cw-badge-type--pdf[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n\n.cw-badge-duration[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.cw-section-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.cw-content-header[_ngcontent-%COMP%] {\n  padding: 14px 0 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cw-content-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.35;\n}\n\n.cw-quiz-card[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  border: 1.5px solid #c4b5fd;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.cw-quiz-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.14);\n}\n.cw-quiz-card__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n}\n.cw-quiz-card__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.cw-quiz-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-quiz-card__label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n  color: #7c3aed;\n  margin-bottom: 1px;\n}\n.cw-quiz-card__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.cw-nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px 0;\n  border-top: 1px solid #e2e8f0;\n}\n\n.cw-nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 30px;\n  border: none;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cw-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.cw-nav-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-1px);\n}\n.cw-nav-btn--prev[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.cw-nav-btn--prev[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #e2e8f0;\n}\n.cw-nav-btn--complete[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);\n}\n.cw-nav-btn--complete[_ngcontent-%COMP%]:disabled {\n  background: #d1fae5;\n  color: #6ee7b7;\n  box-shadow: none;\n}\n.cw-nav-btn--next[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.cw-nav-btn--next[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #e2e8f0;\n}\n.cw-nav-btn--quiz[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);\n}\n.cw-nav-btn--quiz[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.5);\n}\n\n.article-content[_ngcontent-%COMP%] {\n  font-size: 0.97rem;\n  line-height: 1.8;\n  color: #1e293b;\n}\n.article-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 1.4rem 0 0.5rem;\n}\n.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 1.2rem 0 0.45rem;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 0.25rem;\n}\n.article-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  margin: 1rem 0 0.4rem;\n}\n.article-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0.85rem 0 0.35rem;\n}\n.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.6rem;\n  margin-bottom: 0.9rem;\n}\n.article-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n.article-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.article-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.article-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n  text-decoration: underline;\n}\n.article-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.article-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 0.875em;\n  font-family: \"Cascadia Code\", \"Fira Code\", \"Consolas\", monospace;\n  color: #c7254e;\n  white-space: nowrap;\n}\n.article-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #6366f1;\n  background: #f8f7ff;\n  padding: 10px 18px;\n  margin: 1rem 0;\n  border-radius: 0 6px 6px 0;\n  color: #4b5563;\n  font-style: italic;\n}\n.article-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 1rem auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.article-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px solid #e2e8f0;\n  margin: 1.5rem 0;\n}\n\n@media (max-width: 768px) {\n  .cw-quiz-card__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cw-quiz-card__btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .cw-nav-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .cw-nav-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 120px;\n    font-size: 0.78rem;\n    padding: 7px 10px;\n  }\n}\n.cv-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.cv-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.cv-switch__track[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 22px;\n  background: #d1d5db;\n  border-radius: 11px;\n  transition: background 0.25s;\n  position: relative;\n  display: block;\n}\n.cv-switch__track[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border-radius: 50%;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.25s, box-shadow 0.25s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.cv-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .cv-switch__track[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.cv-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .cv-switch__track[_ngcontent-%COMP%]::after {\n  transform: translateX(18px);\n}\n\n.cv-widget[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px;\n  box-shadow: 0 2px 16px rgba(59, 130, 246, 0.07);\n  animation: _ngcontent-%COMP%_fadeInSlide 0.35s ease;\n}\n.cv-widget__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.cv-widget__icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(135deg, #eff6ff, #dbeafe);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.cv-widget__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n  color: #1e3a5f;\n}\n.cv-widget__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.cv-widget__features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cv-widget__feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #374151;\n}\n.cv-widget__feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.cv-widget__cta[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px;\n  background: linear-gradient(135deg, #3b82f6, #2563eb);\n  color: #fff;\n  border: none;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cv-widget__cta[_ngcontent-%COMP%]:hover {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.cv-widget__cta[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.camera-panel[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 10px;\n  padding: 0;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 24px rgba(59, 130, 246, 0.09);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInSlide 0.35s ease;\n}\n.camera-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%);\n  color: #fff;\n}\n.camera-panel__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4ade80;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_pulse-dot 1.5s infinite;\n  box-shadow: 0 0 6px #4ade80;\n}\n.camera-panel__video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #0f172a;\n}\n.camera-panel__video[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transform: scaleX(-1);\n}\n.camera-panel__indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.camera-panel__attention[_ngcontent-%COMP%] {\n  padding: 10px 14px 6px;\n}\n.camera-panel__remarks[_ngcontent-%COMP%] {\n  max-height: 260px;\n  overflow-y: auto;\n  padding: 0 14px 14px;\n}\n\n.attention-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n\n.attention-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s;\n}\n\n.attention-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  border: 1px solid;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n\n.micro-coaching[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 14px;\n  background: linear-gradient(135deg, #fafafa, #f8faff);\n  border-bottom: 1px solid #e8edf5;\n}\n.micro-coaching__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f46e5;\n  margin-bottom: 5px;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n}\n.micro-coaching__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin-left: auto;\n  color: #9ca3af;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1;\n}\n.micro-coaching__close[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n}\n.micro-coaching__tip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n  animation: _ngcontent-%COMP%_fadeInSlide 0.3s ease;\n}\n.micro-coaching__tip--idle[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n}\n\n.camera-indicator[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.camera-indicator--warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.88);\n}\n.camera-indicator--info[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.88);\n}\n.camera-indicator--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.88);\n}\n.camera-indicator--danger[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.88);\n}\n\n.camera-remarks-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.camera-remark-item[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border-left: 3px solid #e2e8f0;\n  font-size: 12px;\n}\n.camera-remark-item[_ngcontent-%COMP%]:first-child {\n  border-left-color: #3b82f6;\n  background: #eff6ff;\n}\n\n.camera-panel[_ngcontent-%COMP%]    > .d-flex[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n}\n\n.camera-stats-panel[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 14px;\n  background: #f0f9ff;\n  border-top: 1px solid #bae6fd;\n  animation: _ngcontent-%COMP%_fadeInSlide 0.3s ease;\n}\n.camera-stats-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0369a1;\n  margin-bottom: 10px;\n}\n.camera-stats-panel__gauge[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.camera-stats-panel__breakdown[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.camera-stats-panel__advice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 5px;\n  padding: 7px 9px;\n  background: #fefce8;\n  border: 1px solid #fef08a;\n  border-radius: 6px;\n  font-size: 11px;\n  color: #374151;\n  line-height: 1.4;\n}\n.camera-stats-panel__advice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.detection-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.detection-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  border: 1px solid currentColor;\n  font-size: 10.5px;\n  background: #fff;\n}\n.detection-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.camera-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 8px 10px;\n  margin: 0 14px 8px;\n  background: linear-gradient(135deg, #fffbeb, #fef9c3);\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  font-size: 11.5px;\n  color: #374151;\n  line-height: 1.4;\n}\n.camera-tip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.breathing-suggestion[_ngcontent-%COMP%] {\n  margin: 0 14px 8px;\n  padding: 10px 12px;\n  background: linear-gradient(135deg, #eff6ff, #dbeafe);\n  border: 1px solid #93c5fd;\n  border-radius: 10px;\n  font-size: 11.5px;\n  color: #1e40af;\n  animation: _ngcontent-%COMP%_fadeInSlide 0.4s ease;\n}\n.breathing-suggestion[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.breathing-exercise[_ngcontent-%COMP%] {\n  margin: 0 14px 8px;\n  padding: 14px 12px;\n  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);\n  border: 1px solid #7dd3fc;\n  border-radius: 12px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeInSlide 0.3s ease;\n}\n.breathing-exercise__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #0369a1;\n  margin-bottom: 10px;\n}\n.breathing-exercise__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  font-size: 14px;\n}\n.breathing-exercise__circle[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto 8px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(56, 189, 248, 0.15);\n  border: 3px solid #38bdf8;\n  transition: transform 1s ease, background 0.5s ease, border-color 0.5s ease;\n}\n.breathing-exercise__circle.inhale[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_breatheIn 4s ease-in-out infinite;\n  border-color: #38bdf8;\n  background: rgba(56, 189, 248, 0.2);\n}\n.breathing-exercise__circle.hold[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n  border-color: #a78bfa;\n  background: rgba(167, 139, 250, 0.15);\n}\n.breathing-exercise__circle.exhale[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_breatheOut 6s ease-in-out infinite;\n  border-color: #34d399;\n  background: rgba(52, 211, 153, 0.15);\n}\n.breathing-exercise__time[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0c4a6e;\n}\n.breathing-exercise__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #0369a1;\n  margin-bottom: 6px;\n}\n.breathing-exercise__phases[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  font-size: 10px;\n  color: #94a3b8;\n}\n.breathing-exercise__phases[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.breathing-exercise__phases[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n  color: #fff;\n  font-weight: 600;\n}\n\n@keyframes _ngcontent-%COMP%_breatheIn {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.18);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_breatheOut {\n  0% {\n    transform: scale(1.15);\n  }\n  50% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1.15);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.camera-stats-panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 10px;\n  background: #ffffff;\n  border: 1px solid #dbeafe;\n  border-radius: 10px;\n}\n.camera-stats-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1e40af;\n  margin-bottom: 10px;\n}\n.camera-stats-panel__gauge[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.camera-stats-panel__breakdown[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.camera-stats-panel__advice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 5px;\n  padding: 7px 9px;\n  background: #fefce8;\n  border: 1px solid #fef08a;\n  border-radius: 6px;\n  font-size: 11px;\n  color: #374151;\n  line-height: 1.4;\n}\n.camera-stats-panel__advice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.detection-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.detection-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  border: 1px solid currentColor;\n  font-size: 10.5px;\n  background: #fff;\n}\n.detection-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY291cnNlcy9jb3Vyc2Utd2F0Y2gvY291cnNlLXdhdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0FBREY7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsK0NBQUE7QUFESjtBQUlFO0VBQ0UscURBQUE7RUFDQSw2Q0FBQTtBQUZKOztBQU1BO0VBQ0UsWUFBQTtBQUhGO0FBS0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esb0JBQUE7QUFISjs7QUFPQTtFQUNFO0lBQU8sbUJBQUE7SUFBd0IsWUFBQTtFQUYvQjtFQUdBO0lBQU8sc0JBQUE7SUFBd0IsVUFBQTtFQUMvQjtBQUNGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBFQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDhFQUFBO0FBREY7QUFHRTtFQUNFLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDRSxX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LyDDosKUwoDDosKUwoDDosKUwoAgRmxvYXRpbmcgTm90ZXMgQnV0dG9uIChjaGF0Ym90IHN0eWxlKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuXHJcbi5ub3Rlcy1mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDI4cHg7XHJcbiAgcmlnaHQ6IDI4cHg7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40NSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyNHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjU1KTtcclxuICB9XHJcblxyXG4gICYtLW9wZW4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCwgI2Y5NzMxNik7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxOHB4IHJnYmEoMjM5LCA2OCwgNjgsIDAuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3R1ZGVudC1haS1mYWIge1xyXG4gIGJvdHRvbTogOTZweDtcclxuXHJcbiAgJjpub3QoLm5vdGVzLWZhYi0tb3Blbik6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IC01cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNCk7XHJcbiAgICBhbmltYXRpb246IGFpLWZhYi1yaW5nIDIuOHMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYWktZmFiLXJpbmcge1xyXG4gIDAlICAgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyAgICBvcGFjaXR5OiAwLjg7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjY1KTsgb3BhY2l0eTogMDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTm90ZXMgU2xpZGUtaW4gUGFuZWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG4ubm90ZXMtcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDk2cHg7XHJcbiAgcmlnaHQ6IDI4cHg7XHJcbiAgei1pbmRleDogMTA0OTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxNnB4IDU2cHggcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0cHgpIHNjYWxlKDAuOTYpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjhzIGN1YmljLWJlemllciguMiwgLjgsIC4zLCAxKSwgb3BhY2l0eSAwLjI4cyBlYXNlO1xyXG5cclxuICAmLS12aXNpYmxlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gSGVhZGVyXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTNweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBmNzY2ZSAwJSwgIzI1NjNlYiAxMDAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNDAlO1xyXG4gICAgICByaWdodDogLTUlO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMykgMCUsIHRyYW5zcGFyZW50IDcwJSk7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2Nyb2xsYWJsZSBib2R5XHJcbiAgJl9fYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogI2JmZGJmZSB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZmRiZmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fc2VjdGlvbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICBjb2xvcjogIzYzNjZmMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2RiZWFmZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cywgYm94LXNoYWRvdyAwLjE1cywgYmFja2dyb3VuZCAwLjE1cztcclxuICAgIGJhY2tncm91bmQ6ICNmOGZiZmY7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzNywgOTksIDIzNSwgMC4xKTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC40NTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2FjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmX19kaXZpZGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2UyZThmMDtcclxuICAgIG1hcmdpbjogMTRweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLm5vdGVzLXNhdmVkLW1zZyB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICMyMmM1NWU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm5vdGVzLXBhbmVsIHtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm90dG9tOiA4OHB4O1xyXG4gIH1cclxuXHJcbiAgLm5vdGVzLWZhYiB7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5zdHVkZW50LWFpLWZhYiB7XHJcbiAgICBib3R0b206IDg0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQUkgQ2hhdCBQYW5lbCAoU3R1ZGVudCkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG4uYWktcGFuZWwge1xyXG4gIGJvdHRvbTogMTY0cHg7XHJcblxyXG4gICZfX2JvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhmYmZmIDAlLCAjZjBmOWZmIDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgJl9fY29tcG9zZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgI2RiZWFmZTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIC0ycHggMTRweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjA3KTtcclxuICB9XHJcblxyXG4gICZfX2lucHV0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDg0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFpLWhlYWRlci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA5cHg7XHJcblxyXG4gIC5haS1oZWFkZXItaWNvbiB7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFpLWhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuODhyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgfVxyXG5cclxuICAuYWktaGVhZGVyLW1vZGUge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBvcGFjaXR5OiAwLjg0O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFpLWhlYWRlci1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uYWktc3RhdHVzLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAuYWktc3RhdHVzLWRvdCB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGFkZTgwO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZS1zdGF0dXMgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWktY2xlYXItYnRuIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1zdGF0dXMge1xyXG4gIDAlLCAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDc0LCAyMjIsIDEyOCwgMC41KTsgfVxyXG4gIDUwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDc0LCAyMjIsIDEyOCwgMCk7IH1cclxufVxyXG5cclxuLmFpLWxlc3Nvbi1jb250ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWNmZWZmLCAjZWZmNmZmKTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICNiYWU2ZmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogM3B4O1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuNjhyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XHJcbiAgICBjb2xvcjogIzAyODRjNztcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gIH1cclxuXHJcbiAgJl9fbWV0YSB7XHJcbiAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYWktY2hhdC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4uYWktbXNnIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0cHg7XHJcbiAgYW5pbWF0aW9uOiBtc2ctaW4gMC4yMnMgZWFzZTtcclxuXHJcbiAgJl9fbWV0YSB7XHJcbiAgICBmb250LXNpemU6IDAuNjlyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBjb2xvcjogIzk0YTNiODtcclxuICB9XHJcblxyXG4gICZfX2F2YXRhciB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICAmX19idWJibGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41NTtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICB9XHJcblxyXG4gICYtLXVzZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5haS1tc2dfX21ldGEge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgIGNvbG9yOiAjMzhiZGY4O1xyXG4gICAgfVxyXG5cclxuICAgIC5haS1tc2dfX2F2YXRhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZWE1ZTksICMyNTYzZWIpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAuYWktbXNnX19idWJibGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjMjU2M2ViKTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG1heC13aWR0aDogOTIlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjgpO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tYXNzaXN0YW50IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5haS1tc2dfX21ldGEge1xyXG4gICAgICBjb2xvcjogIzAyODRjNztcclxuICAgIH1cclxuXHJcbiAgICAuYWktbXNnX19hdmF0YXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGJlYWZlLCAjY2ZmYWZlKTtcclxuICAgICAgY29sb3I6ICMwMzY5YTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmFpLW1zZ19fYnViYmxlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZGJlYWZlO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgzNywgOTksIDIzNSwgMC4wOCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMzY5YTE7XHJcbiAgICBtYXJnaW46IDE0cHggMCA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2RiZWFmZTtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2xpc3Qge1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XHJcbiAgfVxyXG5cclxuICAmX19saXN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAzcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NTVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgJl9fY29kZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgcGFkZGluZzogMnB4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDAuODNyZW07XHJcbiAgICBjb2xvcjogIzFkNGVkODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgfVxyXG5cclxuICAmX19jb2RlLWJsb2NrIHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xyXG4gICAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICAgIGNvbG9yOiAjZTJlOGYwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgfVxyXG5cclxuICAmX19saXN0LS1vcmRlcmVkIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcbiAgfVxyXG5cclxuICAmX19kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMS41cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAjYmZkYmZlLCB0cmFuc3BhcmVudCk7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbXNnLWluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4uYWktdHlwaW5nLWluZGljYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG5cclxuICAuYWktdHlwaW5nLW1ldGEge1xyXG4gICAgZm9udC1zaXplOiAwLjY5cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDI4NGM3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVweDtcclxuXHJcbiAgICAuYWktdHlwaW5nLWF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RiZWFmZSwgI2NmZmFmZSk7XHJcbiAgICAgIGNvbG9yOiAjMDM2OWExO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFpLXR5cGluZy1kb3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZGJlYWZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgzNywgOTksIDIzNSwgMC4wOCk7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzOGJkZjg7XHJcbiAgICAgIGFuaW1hdGlvbjogdHlwaW5nLWJvdW5jZSAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG5cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xOHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMzZzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGluZy1ib3VuY2Uge1xyXG4gIDAlLCA2MCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDAuNDsgfVxyXG4gIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4uYWktZW1wdHktc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDZweCA0cHg7XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RiZWFmZSwgI2NmZmFmZSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggcmdiYSgzNywgOTksIDIzNSwgMC4xOCk7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuODJyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMzY5YTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgfVxyXG5cclxuICAmX19zdWIge1xyXG4gICAgZm9udC1zaXplOiAwLjc0cmVtO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxufVxyXG5cclxuLmFpLWF1ZGl0LWNoaXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYWktY2hpcCB7XHJcbiAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICNiZmRiZmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTNweDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAzNjlhMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cywgY29sb3IgMC4xNXMsIHRyYW5zZm9ybSAwLjEycywgYm94LXNoYWRvdyAwLjEycztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjMjU2M2ViKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgzNywgOTksIDIzNSwgMC4zMik7XHJcbiAgfVxyXG59XHJcblxyXG4uYWktY29tcG9zZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmFpLXNlbmQtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjMjU2M2ViKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBmb250LXNpemU6IDAuODJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMzUpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMsIHRyYW5zZm9ybSAwLjE1cywgYm94LXNoYWRvdyAwLjE1cztcclxuXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBvcGFjaXR5OiAwLjkyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTZweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjQyKTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40NTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmFpLWNvcHktYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2RiZWFmZTtcclxuICBjb2xvcjogIzAzNjlhMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMsIGJvcmRlci1jb2xvciAwLjE1cztcclxuXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjM4O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5haS1wYW5lbCB7XHJcbiAgICBib3R0b206IDE1NnB4O1xyXG4gIH1cclxuXHJcbiAgLmFpLXN0YXR1cy1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIExlc3NvbiBSb3dzIGluIFNpZGViYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG4uY3ctbGVzc29uLXJvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xOHMgZWFzZSwgYm94LXNoYWRvdyAwLjE4cyBlYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWZmO1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZGU5ZmUsICNmMGZkZjQpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjM2NmYxO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKTtcclxuXHJcbiAgICAuY3ctbGVzc29uLXRpdGxlIHtcclxuICAgICAgY29sb3I6ICM2MzY2ZjE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLS1kb25lOm5vdCguY3ctbGVzc29uLXJvdy0tYWN0aXZlKSB7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG5cclxuICAgIC5jdy1sZXNzb24tdGl0bGUge1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLWxvY2tlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC41NTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmN3LWxlc3Nvbi10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN3LWxlc3Nvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zNTtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcclxufVxyXG5cclxuLmN3LWxlc3Nvbi1pY29uIHtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5jdy1hY3RpdmUtZG90IHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjNjM2NmYxO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBhbmltYXRpb246IHB1bHNlLWRvdCAxLjhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlLWRvdCB7XHJcbiAgMCUsIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoOTksIDEwMiwgMjQxLCAwLjU1KTsgfVxyXG4gIDUwJSAgICAgICB7IGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMCk7IH1cclxufVxyXG5cclxuLmN3LWJhZGdlLXF1aXoge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAxcHggN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzZmNDJjMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbn1cclxuXHJcbi5jdy1iYWRnZS10eXBlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMXB4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAmLS10ZXh0ICB7IGJhY2tncm91bmQ6ICNmZmYzY2Q7IGNvbG9yOiAjODU2NDA0OyB9XHJcbiAgJi0tcGRmICAgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2I5MWMxYzsgfVxyXG59XHJcblxyXG4uY3ctYmFkZ2UtZHVyYXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNlY3Rpb24gcGVyY2VudCBidWJibGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG4uY3ctc2VjdGlvbi1wY3Qge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBMZXNzb24gY29udGVudCBoZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG4uY3ctY29udGVudC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDE0cHggMCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEVsZWdhbnQgUXVpeiBDYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG5cclxuLmN3LXF1aXotY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjNmZjtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICNjNGI1ZmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTQpO1xyXG4gIH1cclxuXHJcbiAgJl9faW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA5cHggMTRweDtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9keSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgIGNvbG9yOiAjN2MzYWVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTmF2aWdhdGlvbiBCYXIgQnV0dG9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuXHJcbi5jdy1uYXYtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5jdy1uYXYtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC40NTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuXHJcbiAgJi0tcHJldiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHsgYmFja2dyb3VuZDogI2UyZThmMDsgfVxyXG4gIH1cclxuXHJcbiAgJi0tY29tcGxldGUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMzUpO1xyXG4gICAgJjpkaXNhYmxlZCB7IGJhY2tncm91bmQ6ICNkMWZhZTU7IGNvbG9yOiAjNmVlN2I3OyBib3gtc2hhZG93OiBub25lOyB9XHJcbiAgfVxyXG5cclxuICAmLS1uZXh0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZTJlOGYwOyB9XHJcbiAgfVxyXG5cclxuICAmLS1xdWl6IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjQpO1xyXG4gICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7IGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuNSk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBBcnRpY2xlIGNvbnRlbnQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG4uYXJ0aWNsZS1jb250ZW50IHtcclxuICBmb250LXNpemU6IDAuOTdyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuXHJcbiAgLy8gSGVhZGluZ3NcclxuICBoMSB7IGZvbnQtc2l6ZTogMS43NXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAxLjRyZW0gMCAwLjVyZW07IH1cclxuICBoMiB7IGZvbnQtc2l6ZTogMS40cmVtOyAgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luOiAxLjJyZW0gMCAwLjQ1cmVtOyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UyZThmMDsgcGFkZGluZy1ib3R0b206IDAuMjVyZW07IH1cclxuICBoMyB7IGZvbnQtc2l6ZTogMS4xNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luOiAxcmVtIDAgMC40cmVtOyB9XHJcbiAgaDQgeyBmb250LXNpemU6IDFyZW07ICAgIGZvbnQtd2VpZ2h0OiA2MDA7IG1hcmdpbjogMC44NXJlbSAwIDAuMzVyZW07IH1cclxuXHJcbiAgLy8gUGFyYWdyYXBocyAmIGxpc3RzXHJcbiAgcCAgeyBtYXJnaW4tYm90dG9tOiAwLjlyZW07IH1cclxuICB1bCwgb2wgeyBwYWRkaW5nLWxlZnQ6IDEuNnJlbTsgbWFyZ2luLWJvdHRvbTogMC45cmVtOyB9XHJcbiAgbGkgeyBtYXJnaW4tYm90dG9tOiAwLjNyZW07IH1cclxuXHJcbiAgLy8gQm9sZCAvIGl0YWxpYyAvIGxpbmtzXHJcbiAgc3Ryb25nIHsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG4gIGVtICAgICB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxyXG4gIGEgICAgICB7IGNvbG9yOiAjNjM2NmYxOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG4gIGE6aG92ZXIgeyBjb2xvcjogIzRmNDZlNTsgfVxyXG5cclxuICAvLyBJbmxpbmUgY29kZVxyXG4gIGNvZGUge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgIHBhZGRpbmc6IDJweCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBmb250LWZhbWlseTogJ0Nhc2NhZGlhIENvZGUnLCAnRmlyYSBDb2RlJywgJ0NvbnNvbGFzJywgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6ICNjNzI1NGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLy8gQmxvY2sgcXVvdGUgKGZyb20gUXVpbGwgYmxvY2txdW90ZSlcclxuICBibG9ja3F1b3RlIHtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzYzNjZmMTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY3ZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xyXG4gICAgY29sb3I6ICM0YjU1NjM7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICAvLyBJbWFnZXNcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLDAsMCwuMDgpO1xyXG4gIH1cclxuXHJcbiAgLy8gSG9yaXpvbnRhbCBydWxlXHJcbiAgaHIgeyBib3JkZXI6IG5vbmU7IGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTJlOGYwOyBtYXJnaW46IDEuNXJlbSAwOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIHNpZGViYXIgKyBxdWl6IGNhcmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY3ctcXVpei1jYXJkX19pbm5lciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gIC5jdy1xdWl6LWNhcmRfX2J0biAgIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbiAgLmN3LW5hdi1iYXIgICAgICAgICAgeyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAuY3ctbmF2LWJ0biAgICAgICAgICB7IGZsZXg6IDE7IG1pbi13aWR0aDogMTIwcHg7IGZvbnQtc2l6ZTogMC43OHJlbTsgcGFkZGluZzogN3B4IDEwcHg7IH1cclxufVxyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vICBDQU1FUkEgUEFORUwgw6LCgMKUIENvbXB1dGVyIFZpc2lvbiBBdHRlbnRpb24gVHJhY2tpbmdcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcblxyXG4vLyDDosKUwoDDosKUwoAgVG9nZ2xlIFN3aXRjaCDDosKUwoDDosKUwoBcclxuLmN2LXN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgaW5wdXQgeyBvcGFjaXR5OiAwOyB3aWR0aDogMDsgaGVpZ2h0OiAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuXHJcbiAgJl9fdHJhY2sge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDFkNWRiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdG9wOiAzcHg7XHJcbiAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBib3gtc2hhZG93IDAuMjVzO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dDpjaGVja2VkIH4gLmN2LXN3aXRjaF9fdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNiODJmNjtcclxuICAgICY6OmFmdGVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgQ2FtZXJhIE9GRiB3aWRnZXQgw6LClMKAw6LClMKAXHJcbi5jdi13aWRnZXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTZweCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNyk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5TbGlkZSAwLjM1cyBlYXNlO1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgJl9faWNvbi13cmFwIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmZjZmZiwgI2RiZWFmZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjM2I4MmY2O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMxZTNhNWY7XHJcbiAgfVxyXG5cclxuICAmX19zdWIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM2YjcyODA7XHJcbiAgfVxyXG5cclxuICAmX19mZWF0dXJlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gICZfX2ZlYXR1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMzc0MTUxO1xyXG5cclxuICAgIGkgeyBmb250LXNpemU6IDE1cHg7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbiAgfVxyXG5cclxuICAmX19jdGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2LCAjMjU2M2ViKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuMTVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHsgb3BhY2l0eTogMC45MjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XHJcbiAgICAmOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIENhbWVyYSBwYW5lbCAoYWN0aXZlKSDDosKUwoDDosKUwoBcclxuLmNhbWVyYS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoNTksMTMwLDI0NiwwLjA5KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluU2xpZGUgMC4zNXMgZWFzZTtcclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFlM2E1ZiAwJSwgIzFkNGVkOCAxMDAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJl9fZG90IHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0YWRlODA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBhbmltYXRpb246IHB1bHNlLWRvdCAxLjVzIGluZmluaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjNGFkZTgwO1xyXG4gIH1cclxuXHJcbiAgJl9fdmlkZW8td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICB9XHJcblxyXG4gICZfX3ZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgfVxyXG5cclxuICAmX19pbmRpY2F0b3JzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgcmlnaHQ6IDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDRweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAmX19hdHRlbnRpb24ge1xyXG4gICAgcGFkZGluZzogMTBweCAxNHB4IDZweDtcclxuICB9XHJcblxyXG4gICZfX3JlbWFya3Mge1xyXG4gICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxNHB4IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgQXR0ZW50aW9uIHRyYWNrIMOiwpTCgMOiwpTCgFxyXG4uYXR0ZW50aW9uLXRyYWNrIHtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG4uYXR0ZW50aW9uLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpLCBiYWNrZ3JvdW5kIDAuNHM7XHJcbn1cclxuLmF0dGVudGlvbi1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDJweCA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBmb250LXNpemU6IDEwLjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWljcm8tY29hY2hpbmcgY2FyZCDDosKUwoDDosKUwoBcclxuLm1pY3JvLWNvYWNoaW5nIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmYWZhZmEsICNmOGZhZmYpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlZGY1O1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICM0ZjQ2ZTU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gICZfX2Nsb3NlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzljYTNhZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICAgICY6aG92ZXIgeyBjb2xvcjogIzZiNzI4MDsgfVxyXG4gIH1cclxuXHJcbiAgJl9fdGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMzc0MTUxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluU2xpZGUgMC4zcyBlYXNlO1xyXG5cclxuICAgICYtLWlkbGUgeyBjb2xvcjogIzljYTNhZjsgZm9udC1zdHlsZTogaXRhbGljOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgaW5kaWNhdG9ycyDDosKUwoDDosKUwoBcclxuLmNhbWVyYS1pbmRpY2F0b3Ige1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcblxyXG4gICYtLXdhcm4gICB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwwLjg4KTsgfVxyXG4gICYtLWluZm8gICB7IGJhY2tncm91bmQ6IHJnYmEoMTM5LDkyLDI0NiwwLjg4KTsgfVxyXG4gICYtLXN1Y2Nlc3N7IGJhY2tncm91bmQ6IHJnYmEoMzQsMTk3LDk0LDAuODgpOyB9XHJcbiAgJi0tZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSgyMjAsMzgsMzgsMC44OCk7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIHJlbWFya3Mgw6LClMKAw6LClMKAXHJcbi5jYW1lcmEtcmVtYXJrcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5jYW1lcmEtcmVtYXJrLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2UyZThmMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMzYjgyZjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIGFjdGlvbiBidXR0b25zIGFyZWEgw6LClMKAw6LClMKAXHJcbi5jYW1lcmEtcGFuZWwgPiAuZC1mbGV4IHsgcGFkZGluZzogNnB4IDE0cHg7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBzdGF0cyBwYW5lbCDDosKUwoDDosKUwoBcclxuLmNhbWVyYS1zdGF0cy1wYW5lbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZjBmOWZmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmFlNmZkO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluU2xpZGUgMC4zcyBlYXNlO1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMzY5YTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAmX19nYXVnZSAgeyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XHJcbiAgJl9fYnJlYWtkb3duIHsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxyXG4gICZfX2FkdmljZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIHBhZGRpbmc6IDdweCA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVmY2U4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlZjA4YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjMzc0MTUxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGkgeyBmbGV4LXNocmluazogMDsgbWFyZ2luLXRvcDogMXB4OyB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0ZWN0aW9uLWJhZGdlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuLmRldGVjdGlvbi1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDNweDtcclxuICBwYWRkaW5nOiAycHggN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgc3Ryb25nIHsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG59XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpAgVGlwcyAmIFNlc3Npb24gU3RhdHMgw6LClcKQw6LClcKQw6LClcKQXHJcblxyXG4uY2FtZXJhLXRpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBtYXJnaW46IDAgMTRweCA4cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmJlYiwgI2ZlZjljMyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZDM0ZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgY29sb3I6ICMzNzQxNTE7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBpIHsgY29sb3I6ICNmNTllMGI7IGZvbnQtc2l6ZTogMTNweDsgZmxleC1zaHJpbms6IDA7IG1hcmdpbi10b3A6IDFweDsgfVxyXG59XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpAgQnJlYXRoaW5nIFN1Z2dlc3Rpb24gw6LClcKQw6LClcKQw6LClcKQXHJcblxyXG4uYnJlYXRoaW5nLXN1Z2dlc3Rpb24ge1xyXG4gIG1hcmdpbjogMCAxNHB4IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmZjZmZiwgI2RiZWFmZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkzYzVmZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGNvbG9yOiAjMWU0MGFmO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluU2xpZGUgMC40cyBlYXNlO1xyXG4gIGkgeyBmb250LXNpemU6IDE0cHg7IH1cclxufVxyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQIEJyZWF0aGluZyBFeGVyY2lzZSDDosKVwpDDosKVwpDDosKVwpBcclxuXHJcbi5icmVhdGhpbmctZXhlcmNpc2Uge1xyXG4gIG1hcmdpbjogMCAxNHB4IDhweDtcclxuICBwYWRkaW5nOiAxNHB4IDEycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwZjlmZiwgI2UwZjJmZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdkZDNmYztcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IGZhZGVJblNsaWRlIDAuM3MgZWFzZTtcclxuXHJcbiAgJl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDM2OWExO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBpOmZpcnN0LWNoaWxkIHsgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgfVxyXG5cclxuICAmX19jaXJjbGUge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NiwgMTg5LCAyNDgsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM4YmRmODtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLCBiYWNrZ3JvdW5kIDAuNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuNXMgZWFzZTtcclxuXHJcbiAgICAmLmluaGFsZSB7XHJcbiAgICAgIGFuaW1hdGlvbjogYnJlYXRoZUluIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMzOGJkZjg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaG9sZCB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2E3OGJmYTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjE1KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmV4aGFsZSB7XHJcbiAgICAgIGFuaW1hdGlvbjogYnJlYXRoZU91dCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMzRkMzk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAyMTEsIDE1MywgMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBjNGE2ZTtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAzNjlhMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICB9XHJcblxyXG4gICZfX3BoYXNlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwZWE1ZTk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBicmVhdGhlSW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xOCk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJyZWF0aGVPdXQge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblNsaWRlIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLmNhbWVyYS1zdGF0cy1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZWFmZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxZTQwYWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fZ2F1Z2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gICZfX2JyZWFrZG93biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYWR2aWNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogN3B4IDlweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZWZjZTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVmMDhhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG5cclxuICAgIGkgeyBmbGV4LXNocmluazogMDsgbWFyZ2luLXRvcDogMXB4OyB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0ZWN0aW9uLWJhZGdlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5kZXRlY3Rpb24tYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAzcHg7XHJcbiAgcGFkZGluZzogMnB4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBmb250LXNpemU6IDEwLjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICBzdHJvbmcgeyBmb250LXdlaWdodDogNzAwOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2UtZG90IHtcclxuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAwLjM7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return CourseWatchComponent;
})();

/***/ }),

/***/ 37022:
/*!***********************************************!*\
  !*** ./src/app/shared/pipe/safe-html.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);


let SafeHtmlPipe = /*#__PURE__*/(() => {
  class SafeHtmlPipe {
    sanitizer;
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
    }
    transform(html) {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    static ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
    static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
  }
  return SafeHtmlPipe;
})();

/***/ }),

/***/ 46054:
/*!*****************************************************!*\
  !*** ./src/app/shared/service/note/note.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteService: () => (/* binding */ NoteService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let NoteService = /*#__PURE__*/(() => {
  class NoteService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getCourseNote(courseId) {
      return this.http.get(`${this.apiUrl}/student/notes/course/${courseId}`);
    }
    saveCourseNote(courseId, content) {
      return this.http.put(`${this.apiUrl}/student/notes/course/${courseId}`, {
        content
      });
    }
    getLessonNote(lessonId) {
      return this.http.get(`${this.apiUrl}/student/notes/lesson/${lessonId}`);
    }
    saveLessonNote(lessonId, content) {
      return this.http.put(`${this.apiUrl}/student/notes/lesson/${lessonId}`, {
        content
      });
    }
    static ɵfac = function NoteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NoteService,
      factory: NoteService.ɵfac,
      providedIn: 'root'
    });
  }
  return NoteService;
})();

/***/ })

}]);
//# sourceMappingURL=8203.js.map