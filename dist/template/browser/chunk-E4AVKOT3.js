import {
  QuizService
} from "./chunk-6JHDQTXF.js";
import {
  MatSelectModule
} from "./chunk-YSUELB2P.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-quiz/instructor-quiz.component.ts
var _c0 = (a0) => ["/instructor/instructor-quiz-questions", a0];
var _c1 = (a0) => ["/instructor/instructor-quiz-results", a0];
function InstructorQuizComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "div", 59);
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "p", 61);
    \u0275\u0275text(2, "Aucun quiz cr\xE9\xE9 pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorQuizComponent_div_8_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Le\xE7on ");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div", 64)(3, "div")(4, "h6", 65)(5, "a", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 67);
    \u0275\u0275text(8);
    \u0275\u0275template(9, InstructorQuizComponent_div_8_span_9_Template, 3, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 69)(11, "p", 70);
    \u0275\u0275element(12, "i", 71);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 70);
    \u0275\u0275element(15, "i", 72);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 73);
    \u0275\u0275element(18, "i", 74);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 75)(21, "div", 76)(22, "a", 77);
    \u0275\u0275element(23, "i", 78);
    \u0275\u0275text(24, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 79);
    \u0275\u0275text(26, "R\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 80);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_8_Template_a_click_27_listener() {
      const quiz_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(quiz_r2));
    });
    \u0275\u0275element(28, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 82);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_8_Template_a_click_29_listener() {
      const quiz_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(quiz_r2.id));
    });
    \u0275\u0275element(30, "i", 83);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const quiz_r2 = ctx.$implicit;
    const last_r4 = ctx.last;
    \u0275\u0275classProp("mb-0", last_r4);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, quiz_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(quiz_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", quiz_r2.lessonTitle ? quiz_r2.lessonTitle + " " : "", "", quiz_r2.courseName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", quiz_r2.lessonTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", quiz_r2.numberOfQuestions, " Questions");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", quiz_r2.durationMinutes, " Min");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Pass: ", quiz_r2.passMark, "/", quiz_r2.totalMarks);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, quiz_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, quiz_r2.id));
  }
}
function InstructorQuizComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError);
  }
}
function InstructorQuizComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.title);
  }
}
function InstructorQuizComponent_div_58_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.title);
  }
}
function InstructorQuizComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 17);
    \u0275\u0275text(2, "Section (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 88);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_div_58_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formSectionId, $event) || (ctx_r2.formSectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function InstructorQuizComponent_div_58_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSectionChange());
    });
    \u0275\u0275elementStart(4, "option", 87);
    \u0275\u0275text(5, "-- Aucune --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorQuizComponent_div_58_option_6_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formSectionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.formSections);
  }
}
function InstructorQuizComponent_div_59_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", l_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r9.title);
  }
}
function InstructorQuizComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 17);
    \u0275\u0275text(2, "Le\xE7on (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 89);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_div_59_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formLessonId, $event) || (ctx_r2.formLessonId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 87);
    \u0275\u0275text(5, "-- Aucune --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorQuizComponent_div_59_option_6_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formLessonId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.formLessons);
  }
}
function InstructorQuizComponent_p_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Points auto-distribu\xE9s : ", ctx_r2.formTotalMarks, " / ", ctx_r2.formQuestions.length, " = ~", \u0275\u0275pipeBind2(3, 3, ctx_r2.formTotalMarks / ctx_r2.formQuestions.length, "1.0-0"), " pts/question ");
  }
}
function InstructorQuizComponent_div_73_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "input", 106);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_73_div_18_Template_input_click_1_listener() {
      const ci_r14 = \u0275\u0275restoreView(_r13).index;
      const qi_r11 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCorrect(qi_r11, ci_r14));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_div_73_div_18_Template_input_ngModelChange_2_listener($event) {
      const ch_r15 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(ch_r15.text, $event) || (ch_r15.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_73_div_18_Template_button_click_3_listener() {
      const ci_r14 = \u0275\u0275restoreView(_r13).index;
      const qi_r11 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeChoice(qi_r11, ci_r14));
    });
    \u0275\u0275element(4, "i", 109);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ch_r15 = ctx.$implicit;
    const ci_r14 = ctx.index;
    const ctx_r15 = \u0275\u0275nextContext();
    const q_r12 = ctx_r15.$implicit;
    const qi_r11 = ctx_r15.index;
    \u0275\u0275advance();
    \u0275\u0275property("name", "correct_" + qi_r11)("checked", ch_r15.isCorrect);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ch_r15.text);
    \u0275\u0275property("name", "cText_" + qi_r11 + "_" + ci_r14);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", q_r12.choices.length <= 2);
  }
}
function InstructorQuizComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 95);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_73_Template_button_click_4_listener() {
      const qi_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeQuestion(qi_r11));
    });
    \u0275\u0275element(5, "i", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54)(7, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_div_73_Template_input_ngModelChange_7_listener($event) {
      const q_r12 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(q_r12.questionText, $event) || (q_r12.questionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 97)(9, "div", 98)(10, "label", 99);
    \u0275\u0275text(11, "Points:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 100)(13, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_div_73_Template_input_ngModelChange_13_listener($event) {
      const q_r12 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(q_r12.marks, $event) || (q_r12.marks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "p", 102);
    \u0275\u0275text(15, "Choix cocher la r\xE9ponse correcte ");
    \u0275\u0275elementStart(16, "span", 18);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, InstructorQuizComponent_div_73_div_18_Template, 5, 5, "div", 103);
    \u0275\u0275elementStart(19, "button", 104);
    \u0275\u0275listener("click", function InstructorQuizComponent_div_73_Template_button_click_19_listener() {
      const qi_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addChoice(qi_r11));
    });
    \u0275\u0275element(20, "i", 35);
    \u0275\u0275text(21, "Ajouter un choix");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r12 = ctx.$implicit;
    const qi_r11 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Question ", qi_r11 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.formQuestions.length <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", q_r12.questionText);
    \u0275\u0275property("name", "qText_" + qi_r11);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", q_r12.marks);
    \u0275\u0275property("name", "qMarks_" + qi_r11);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", q_r12.choices);
  }
}
function InstructorQuizComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1, ' Cliquez sur "Ajouter une question" pour commencer. ');
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formError);
  }
}
var InstructorQuizComponent = class _InstructorQuizComponent {
  quizService;
  courseService;
  router;
  routes = routes;
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
  formTitle = "";
  formTotalMarks = 100;
  formPassMark = 50;
  formDuration = 30;
  // â”€â”€â”€ Inline questions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  formQuestions = [];
  formError = "";
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
      next: (data) => {
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
      next: (data) => {
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
    if (!this.formCourseId)
      return;
    this.courseService.getMyCourse(this.formCourseId).subscribe({
      next: (course) => {
        this.formSections = course.sections || [];
      }
    });
  }
  onSectionChange() {
    this.formLessons = [];
    this.formLessonId = null;
    if (!this.formSectionId)
      return;
    const sec = this.formSections.find((s) => s.id === this.formSectionId);
    this.formLessons = sec ? sec.lessons || [] : [];
  }
  // â”€â”€â”€ Inline questions helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  addQuestion() {
    this.formQuestions.push({
      questionText: "",
      marks: 1,
      choices: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
      ]
    });
    this.autoDistributeMarks();
  }
  removeQuestion(qi) {
    this.formQuestions.splice(qi, 1);
    this.autoDistributeMarks();
  }
  /** Auto-distribute totalMarks evenly across all questions */
  autoDistributeMarks() {
    if (this.formQuestions.length === 0)
      return;
    const perQuestion = Math.ceil(this.formTotalMarks / this.formQuestions.length);
    this.formQuestions.forEach((q) => q.marks = perQuestion);
  }
  /** Called when totalMarks input changes */
  onTotalMarksChange() {
    this.autoDistributeMarks();
  }
  addChoice(qi) {
    this.formQuestions[qi].choices.push({ text: "", isCorrect: false });
  }
  removeChoice(qi, ci) {
    if (this.formQuestions[qi].choices.length > 2) {
      this.formQuestions[qi].choices.splice(ci, 1);
    }
  }
  setCorrect(qi, ci) {
    this.formQuestions[qi].choices.forEach((c, idx) => c.isCorrect = idx === ci);
  }
  // â”€â”€â”€ Form submit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  resetForm() {
    this.formCourseId = null;
    this.formSections = [];
    this.formSectionId = null;
    this.formLessons = [];
    this.formLessonId = null;
    this.formTitle = "";
    this.formTotalMarks = 100;
    this.formPassMark = 50;
    this.formDuration = 30;
    this.formQuestions = [];
    this.formError = "";
    this.editingQuiz = null;
  }
  openAddModal() {
    this.resetForm();
    this.addQuestion();
  }
  openEditModal(quiz) {
    this.editingQuiz = quiz;
    this.formCourseId = quiz.courseId;
    this.formTitle = quiz.title;
    this.formTotalMarks = quiz.totalMarks;
    this.formPassMark = quiz.passMark;
    this.formDuration = quiz.durationMinutes;
    this.formError = "";
  }
  validateCreate() {
    this.formError = "";
    if (!this.formTitle.trim()) {
      this.formError = "Le titre est requis.";
      return false;
    }
    if (!this.formCourseId) {
      this.formError = "Veuillez s\xC3\xA9lectionner un cours.";
      return false;
    }
    if (this.formQuestions.length === 0) {
      this.formError = "Au moins une question est requise.";
      return false;
    }
    for (let i = 0; i < this.formQuestions.length; i++) {
      const q = this.formQuestions[i];
      if (!q.questionText.trim()) {
        this.formError = `Question ${i + 1} : le texte est requis.`;
        return false;
      }
      const hasCorrect = q.choices.some((c) => c.isCorrect);
      if (!hasCorrect) {
        this.formError = `Question ${i + 1} : marquer une r\xC3\xA9ponse correcte.`;
        return false;
      }
      const emptyChoice = q.choices.some((c) => !c.text.trim());
      if (emptyChoice) {
        this.formError = `Question ${i + 1} : tous les choix doivent avoir un texte.`;
        return false;
      }
    }
    return true;
  }
  submitQuiz() {
    if (this.editingQuiz) {
      const data = {
        title: this.formTitle,
        totalMarks: this.formTotalMarks,
        passMark: this.formPassMark,
        durationMinutes: this.formDuration
      };
      this.quizService.updateQuiz(this.editingQuiz.id, data).subscribe({
        next: () => {
          this.loadQuizzes();
          this.closeModal("edit_quiz");
        }
      });
    } else {
      if (!this.validateCreate())
        return;
      const data = {
        title: this.formTitle,
        totalMarks: this.formTotalMarks,
        passMark: this.formPassMark,
        durationMinutes: this.formDuration,
        courseId: this.formCourseId,
        questions: this.formQuestions
      };
      if (this.formLessonId)
        data["lessonId"] = this.formLessonId;
      this.quizService.createQuiz(data).subscribe({
        next: (created) => {
          this.closeModal("add_quiz");
          this.router.navigate(["/instructor/instructor-quiz-questions", created.id]);
        },
        error: (err) => {
          this.formError = err?.error?.message || err?.error || "Erreur lors de la cr\xC3\xA9ation du quiz.";
        }
      });
    }
  }
  confirmDelete(quizId) {
    this.deletingQuizId = quizId;
  }
  deleteQuiz() {
    if (this.deletingQuizId) {
      this.quizService.deleteQuiz(this.deletingQuizId).subscribe({
        next: () => {
          this.loadQuizzes();
          this.closeModal("delete_modal");
        }
      });
    }
  }
  closeModal(id) {
    const el = document.getElementById(id);
    if (el) {
      const modal = bootstrap.Modal.getInstance(el);
      if (modal)
        modal.hide();
    }
  }
  static \u0275fac = function InstructorQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizComponent, selectors: [["app-instructor-quiz"]], decls: 131, vars: 21, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_quiz", 1, "btn", "btn-secondary", 3, "click"], ["class", "text-center py-4", 4, "ngIf"], ["class", "border rounded-2 p-4 text-center", 4, "ngIf"], ["class", "border rounded-2 p-3 mb-3", 3, "mb-0", 4, "ngFor", "ngForOf"], ["id", "add_quiz", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [3, "ngSubmit"], [1, "modal-body", "pb-0", 2, "max-height", "65vh", "overflow-y", "auto"], ["class", "alert alert-danger py-2 mb-3", 4, "ngIf"], [1, "row"], [1, "col-md-12", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "title", "placeholder", "Ex: Quiz Chapitre 1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4", "mb-3"], ["type", "number", "name", "totalMarks", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "passMark", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "duration", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "my-3"], [1, "fw-semibold", "mb-2"], ["name", "courseId", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "col-md-4 mb-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-semibold", "mb-0"], [1, "text-muted", "fs-12"], ["class", "text-muted fs-12 mb-0", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-add-circle", "me-1"], ["class", "border rounded-2 p-3 mb-3 bg-light", 4, "ngFor", "ngForOf"], ["class", "text-center py-3 text-muted fs-12 border rounded-2 mb-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_quiz", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-body", "pb-0"], [1, "mb-3"], ["type", "text", "name", "editTitle", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "editTotalMarks", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "editPassMark", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "editDuration", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill", 3, "click"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "border", "rounded-2", "p-4", "text-center"], [1, "text-muted", "mb-0"], [1, "border", "rounded-2", "p-3", "mb-3"], [1, "row", "align-items-center", "gy-3"], [1, "col-md-8"], [1, "mb-1"], [3, "routerLink"], [1, "text-muted", "fs-12", "mb-2"], ["class", "badge bg-primary-transparent text-primary ms-1", 4, "ngIf"], [1, "question-info", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "fs-14", "me-2", "pe-2", "border-end", "mb-0"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0"], [1, "isax", "isax-medal-star5", "text-warning", "me-2"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "justify-content-end", "mt-2", "mt-md-0"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "routerLink"], [1, "isax", "isax-message-question5", "me-1"], [1, "text-info", "text-decoration-underline", "fs-12", "fw-medium", "me-3", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_quiz", 1, "d-inline-flex", "fs-14", "me-1", "action-icon", 3, "click"], [1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "fs-14", "action-icon", 3, "click"], [1, "isax", "isax-trash"], [1, "badge", "bg-primary-transparent", "text-primary", "ms-1"], [1, "isax", "isax-book", "me-1"], [1, "alert", "alert-danger", "py-2", "mb-3"], [3, "ngValue"], ["name", "sectionId", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["name", "lessonId", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "text-muted", "fs-12", "mb-0"], [1, "isax", "isax-info-circle", "me-1"], [1, "border", "rounded-2", "p-3", "mb-3", "bg-light"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-2"], [1, "badge", "bg-secondary-transparent", "text-secondary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], ["type", "text", "placeholder", "Texte de la question *", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "row", "align-items-center", "mb-2"], [1, "col-auto"], [1, "form-label", "fs-12", "mb-0"], [1, "col-2"], ["type", "number", "min", "1", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "fs-12", "text-muted", "mb-1"], ["class", "d-flex align-items-center gap-2 mb-1", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "text-primary", "ps-0", "mt-1", 3, "click"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], ["type", "radio", 1, "form-check-input", "mt-0", "flex-shrink-0", 2, "cursor", "pointer", 3, "click", "name", "checked"], ["type", "text", "placeholder", "Choix *", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "py-0", "px-1", "flex-shrink-0", 3, "click", "disabled"], [1, "isax", "isax-close-circle", "fs-12"], [1, "text-center", "py-3", "text-muted", "fs-12", "border", "rounded-2", "mb-3"]], template: function InstructorQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div")(4, "a", 2);
      \u0275\u0275listener("click", function InstructorQuizComponent_Template_a_click_4_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275text(5, "Add Quiz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, InstructorQuizComponent_div_6_Template, 2, 0, "div", 3)(7, InstructorQuizComponent_div_7_Template, 3, 0, "div", 4)(8, InstructorQuizComponent_div_8_Template, 31, 19, "div", 5);
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h5", 1);
      \u0275\u0275text(14, "Nouveau Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "form", 12);
      \u0275\u0275listener("ngSubmit", function InstructorQuizComponent_Template_form_ngSubmit_17_listener() {
        return ctx.submitQuiz();
      });
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275template(19, InstructorQuizComponent_div_19_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "label", 17);
      \u0275\u0275text(23, "Titre du quiz ");
      \u0275\u0275elementStart(24, "span", 18);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formTitle, $event) || (ctx.formTitle = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 20)(28, "label", 17);
      \u0275\u0275text(29, "Total des points ");
      \u0275\u0275elementStart(30, "span", 18);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formTotalMarks, $event) || (ctx.formTotalMarks = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_32_listener() {
        return ctx.onTotalMarksChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 20)(34, "label", 17);
      \u0275\u0275text(35, "Points pour r\xE9ussir ");
      \u0275\u0275elementStart(36, "span", 18);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formPassMark, $event) || (ctx.formPassMark = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 20)(40, "label", 17);
      \u0275\u0275text(41, "Dur\xE9e (minutes) ");
      \u0275\u0275elementStart(42, "span", 18);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formDuration, $event) || (ctx.formDuration = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(45, "hr", 24);
      \u0275\u0275elementStart(46, "p", 25);
      \u0275\u0275text(47, "Association cours / le\xE7on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 15)(49, "div", 20)(50, "label", 17);
      \u0275\u0275text(51, "Cours ");
      \u0275\u0275elementStart(52, "span", 18);
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_select_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formCourseId, $event) || (ctx.formCourseId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InstructorQuizComponent_Template_select_change_54_listener() {
        return ctx.onCourseChange();
      });
      \u0275\u0275elementStart(55, "option", 27);
      \u0275\u0275text(56, "-- S\xE9lectionner --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, InstructorQuizComponent_option_57_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(58, InstructorQuizComponent_div_58_Template, 7, 3, "div", 29)(59, InstructorQuizComponent_div_59_Template, 7, 3, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "hr", 24);
      \u0275\u0275elementStart(61, "div", 30)(62, "div")(63, "p", 31);
      \u0275\u0275text(64, "Questions ");
      \u0275\u0275elementStart(65, "span", 18);
      \u0275\u0275text(66, "*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span", 32);
      \u0275\u0275text(68, "(min. 1)");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, InstructorQuizComponent_p_69_Template, 4, 6, "p", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 34);
      \u0275\u0275listener("click", function InstructorQuizComponent_Template_button_click_70_listener() {
        return ctx.addQuestion();
      });
      \u0275\u0275element(71, "i", 35);
      \u0275\u0275text(72, "Ajouter une question");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(73, InstructorQuizComponent_div_73_Template, 22, 7, "div", 36)(74, InstructorQuizComponent_div_74_Template, 2, 0, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 38)(76, "button", 39);
      \u0275\u0275text(77, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 40);
      \u0275\u0275text(79, "Cr\xE9er le quiz");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(80, "div", 41)(81, "div", 42)(82, "div", 8)(83, "div", 9)(84, "h5", 1);
      \u0275\u0275text(85, "Modifier le Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "button", 10);
      \u0275\u0275element(87, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "form", 12);
      \u0275\u0275listener("ngSubmit", function InstructorQuizComponent_Template_form_ngSubmit_88_listener() {
        return ctx.submitQuiz();
      });
      \u0275\u0275elementStart(89, "div", 43);
      \u0275\u0275template(90, InstructorQuizComponent_div_90_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(91, "div", 44)(92, "label", 17);
      \u0275\u0275text(93, "Titre du quiz ");
      \u0275\u0275elementStart(94, "span", 18);
      \u0275\u0275text(95, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formTitle, $event) || (ctx.formTitle = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 15)(98, "div", 20)(99, "label", 17);
      \u0275\u0275text(100, "Total des points");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formTotalMarks, $event) || (ctx.formTotalMarks = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 20)(103, "label", 17);
      \u0275\u0275text(104, "Points pour r\xE9ussir");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "input", 47);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_105_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formPassMark, $event) || (ctx.formPassMark = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 20)(107, "label", 17);
      \u0275\u0275text(108, "Dur\xE9e (minutes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "input", 48);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizComponent_Template_input_ngModelChange_109_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formDuration, $event) || (ctx.formDuration = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(110, "div", 38)(111, "button", 39);
      \u0275\u0275text(112, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 40);
      \u0275\u0275text(114, "Sauvegarder");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(115, "div", 49)(116, "div", 50)(117, "div", 8)(118, "div", 51)(119, "span", 52);
      \u0275\u0275element(120, "i", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div")(122, "h4", 54);
      \u0275\u0275text(123, "Supprimer le Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "p", 44);
      \u0275\u0275text(125, "\xCAtes-vous s\xFBr de vouloir supprimer ce quiz ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 55)(127, "a", 56);
      \u0275\u0275text(128, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "a", 57);
      \u0275\u0275listener("click", function InstructorQuizComponent_Template_a_click_129_listener() {
        return ctx.deleteQuiz();
      });
      \u0275\u0275text(130, "Oui, Supprimer");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.quizzes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.quizzes);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.formError);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.formTitle);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formTotalMarks);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formPassMark);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formDuration);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.formCourseId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.myCourses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formSections.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formLessons.length > 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.formQuestions.length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.formQuestions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formQuestions.length === 0);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngIf", ctx.formError);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formTitle);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formTotalMarks);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formPassMark);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formDuration);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatSelectModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz", imports: [CommonModule, MatSelectModule, RouterLink, FormsModule], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5 class="fw-bold">Quiz</h5>
        <div>
            <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_quiz" (click)="openAddModal()">Add Quiz</a>
        </div>
    </div>

    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-4">
        <div class="spinner-border text-primary" role="status"></div>
    </div>

    <!-- Empty state -->
    <div *ngIf="!loading && quizzes.length === 0" class="border rounded-2 p-4 text-center">
        <p class="text-muted mb-0">Aucun quiz cr\xE9\xE9 pour le moment.</p>
    </div>

    <!-- Quiz List -->
    <div *ngFor="let quiz of quizzes; let last = last" class="border rounded-2 p-3 mb-3" [class.mb-0]="last">
        <div class="row align-items-center gy-3">
            <div class="col-md-8">
                <div>
                    <h6 class="mb-1"><a [routerLink]="['/instructor/instructor-quiz-questions', quiz.id]">{{quiz.title}}</a></h6>
                    <p class="text-muted fs-12 mb-2">
                        {{quiz.lessonTitle ? quiz.lessonTitle + '  ' : ''}}{{quiz.courseName}}
                        <span *ngIf="quiz.lessonTitle" class="badge bg-primary-transparent text-primary ms-1">
                            <i class="isax isax-book me-1"></i>Le\xE7on
                        </span>
                    </p>
                    <div class="question-info d-flex align-items-center">
                        <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i class="isax isax-message-question5 text-primary-soft me-2"></i>{{quiz.numberOfQuestions}} Questions</p>
                        <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i class="isax isax-clock5 text-secondary-soft me-2"></i>{{quiz.durationMinutes}} Min</p>
                        <p class="d-flex align-items-center fs-14 mb-0"><i class="isax isax-medal-star5 text-warning me-2"></i>Pass: {{quiz.passMark}}/{{quiz.totalMarks}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                    <a [routerLink]="['/instructor/instructor-quiz-questions', quiz.id]" class="btn btn-sm btn-outline-primary me-2"><i class="isax isax-message-question5 me-1"></i>Questions</a>
                    <a [routerLink]="['/instructor/instructor-quiz-results', quiz.id]" class="text-info text-decoration-underline fs-12 fw-medium me-3">R\xE9sultats</a>
                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#edit_quiz" (click)="openEditModal(quiz)"><i class="isax isax-edit-2"></i></a>
                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal" (click)="confirmDelete(quiz.id)"><i class="isax isax-trash"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- ADD QUIZ MODAL -->
    <div class="modal fade" id="add_quiz">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="fw-bold">Nouveau Quiz</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form (ngSubmit)="submitQuiz()">
                    <div class="modal-body pb-0" style="max-height:65vh;overflow-y:auto">
                        <div *ngIf="formError" class="alert alert-danger py-2 mb-3">{{formError}}</div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label class="form-label">Titre du quiz <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" [(ngModel)]="formTitle" name="title" placeholder="Ex: Quiz Chapitre 1">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Total des points <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" [(ngModel)]="formTotalMarks" (ngModelChange)="onTotalMarksChange()" name="totalMarks" min="1">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Points pour r\xE9ussir <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" [(ngModel)]="formPassMark" name="passMark" min="0">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Dur\xE9e (minutes) <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" [(ngModel)]="formDuration" name="duration" min="1">
                            </div>
                        </div>
                        <hr class="my-3">
                        <p class="fw-semibold mb-2">Association cours / le\xE7on</p>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Cours <span class="text-danger">*</span></label>
                                <select class="form-select" [(ngModel)]="formCourseId" name="courseId" (change)="onCourseChange()">
                                    <option [ngValue]="null" disabled>-- S\xE9lectionner --</option>
                                    <option *ngFor="let c of myCourses" [ngValue]="c.id">{{c.title}}</option>
                                </select>
                            </div>
                            <div class="col-md-4 mb-3" *ngIf="formSections.length > 0">
                                <label class="form-label">Section (optionnel)</label>
                                <select class="form-select" [(ngModel)]="formSectionId" name="sectionId" (change)="onSectionChange()">
                                    <option [ngValue]="null">-- Aucune --</option>
                                    <option *ngFor="let s of formSections" [ngValue]="s.id">{{s.title}}</option>
                                </select>
                            </div>
                            <div class="col-md-4 mb-3" *ngIf="formLessons.length > 0">
                                <label class="form-label">Le\xE7on (optionnel)</label>
                                <select class="form-select" [(ngModel)]="formLessonId" name="lessonId">
                                    <option [ngValue]="null">-- Aucune --</option>
                                    <option *ngFor="let l of formLessons" [ngValue]="l.id">{{l.title}}</option>
                                </select>
                            </div>
                        </div>
                        <hr class="my-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <div>
                                <p class="fw-semibold mb-0">Questions <span class="text-danger">*</span> <span class="text-muted fs-12">(min. 1)</span></p>
                                <p class="text-muted fs-12 mb-0" *ngIf="formQuestions.length > 0">
                                    <i class="isax isax-info-circle me-1"></i>Points auto-distribu\xE9s : {{formTotalMarks}} / {{formQuestions.length}} = ~{{(formTotalMarks / formQuestions.length) | number:'1.0-0'}} pts/question
                                </p>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary" (click)="addQuestion()"><i class="isax isax-add-circle me-1"></i>Ajouter une question</button>
                        </div>
                        <div *ngFor="let q of formQuestions; let qi = index" class="border rounded-2 p-3 mb-3 bg-light">
                            <div class="d-flex align-items-start justify-content-between mb-2">
                                <span class="badge bg-secondary-transparent text-secondary">Question {{qi + 1}}</span>
                                <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeQuestion(qi)" [disabled]="formQuestions.length <= 1"><i class="isax isax-trash"></i></button>
                            </div>
                            <div class="mb-2">
                                <input type="text" class="form-control form-control-sm" placeholder="Texte de la question *" [(ngModel)]="q.questionText" [name]="'qText_'+qi">
                            </div>
                            <div class="row align-items-center mb-2">
                                <div class="col-auto"><label class="form-label fs-12 mb-0">Points:</label></div>
                                <div class="col-2"><input type="number" class="form-control form-control-sm" [(ngModel)]="q.marks" [name]="'qMarks_'+qi" min="1"></div>
                            </div>
                            <p class="fs-12 text-muted mb-1">Choix  cocher la r\xE9ponse correcte <span class="text-danger">*</span></p>
                            <div *ngFor="let ch of q.choices; let ci = index" class="d-flex align-items-center gap-2 mb-1">
                                <input type="radio" [name]="'correct_'+qi" [checked]="ch.isCorrect" (click)="setCorrect(qi, ci)" class="form-check-input mt-0 flex-shrink-0" style="cursor:pointer">
                                <input type="text" class="form-control form-control-sm" [(ngModel)]="ch.text" [name]="'cText_'+qi+'_'+ci" placeholder="Choix *">
                                <button type="button" class="btn btn-sm btn-outline-danger py-0 px-1 flex-shrink-0" (click)="removeChoice(qi, ci)" [disabled]="q.choices.length <= 2"><i class="isax isax-close-circle fs-12"></i></button>
                            </div>
                            <button type="button" class="btn btn-sm btn-link text-primary ps-0 mt-1" (click)="addChoice(qi)"><i class="isax isax-add-circle me-1"></i>Ajouter un choix</button>
                        </div>
                        <div *ngIf="formQuestions.length === 0" class="text-center py-3 text-muted fs-12 border rounded-2 mb-3">
                            Cliquez sur "Ajouter une question" pour commencer.
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Annuler</button>
                        <button class="btn btn-secondary rounded-pill" type="submit">Cr\xE9er le quiz</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Add Quiz Modal -->

    <!-- EDIT QUIZ MODAL -->
    <div class="modal fade" id="edit_quiz">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="fw-bold">Modifier le Quiz</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form (ngSubmit)="submitQuiz()">
                    <div class="modal-body pb-0">
                        <div *ngIf="formError" class="alert alert-danger py-2 mb-3">{{formError}}</div>
                        <div class="mb-3">
                            <label class="form-label">Titre du quiz <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" [(ngModel)]="formTitle" name="editTitle">
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Total des points</label>
                                <input type="number" class="form-control" [(ngModel)]="formTotalMarks" name="editTotalMarks">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Points pour r\xE9ussir</label>
                                <input type="number" class="form-control" [(ngModel)]="formPassMark" name="editPassMark">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Dur\xE9e (minutes)</label>
                                <input type="number" class="form-control" [(ngModel)]="formDuration" name="editDuration">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Annuler</button>
                        <button class="btn btn-secondary rounded-pill" type="submit">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Edit Quiz Modal -->

    <!-- DELETE MODAL -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center custom-modal-body">
                    <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
                        <i class="isax isax-trash fs-24 text-danger"></i>
                    </span>
                    <div>
                        <h4 class="mb-2">Supprimer le Quiz</h4>
                        <p class="mb-3">\xCAtes-vous s\xFBr de vouloir supprimer ce quiz ?</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Annuler</a>
                            <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" (click)="deleteQuiz()">Oui, Supprimer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Modal -->
` }]
  }], () => [{ type: QuizService }, { type: CourseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizComponent, { className: "InstructorQuizComponent", filePath: "src/app/features/instructor/instructor-quiz/instructor-quiz.component.ts", lineNumber: 18 });
})();
export {
  InstructorQuizComponent
};
//# sourceMappingURL=chunk-E4AVKOT3.js.map
