import {
  QuizService
} from "./chunk-6JHDQTXF.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-quiz-questions/student-quiz-questions.component.ts
var _c0 = (a0) => ({ courseId: a0 });
function StudentQuizQuestionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function StudentQuizQuestionsComponent_ng_container_1_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 34);
    \u0275\u0275listener("change", function StudentQuizQuestionsComponent_ng_container_1_div_29_div_3_Template_input_change_1_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const q_r3 = \u0275\u0275nextContext().ngIf;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectChoice(q_r3.id, c_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const last_r5 = ctx.last;
    const q_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mb-2", !last_r5)("mb-0", last_r5);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q-" + q_r3.id)("id", "choice-" + c_r2.id)("checked", ctx_r3.isSelected(q_r3.id, c_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "choice-" + c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.text);
  }
}
function StudentQuizQuestionsComponent_ng_container_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h6", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentQuizQuestionsComponent_ng_container_1_div_29_div_3_Template, 4, 9, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r3.questionText);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r3.choices);
  }
}
function StudentQuizQuestionsComponent_ng_container_1_a_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_1_a_31_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.movePrev());
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, "Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function StudentQuizQuestionsComponent_ng_container_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_1_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.moveNext());
    });
    \u0275\u0275text(1, "Suivant");
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementEnd();
  }
}
function StudentQuizQuestionsComponent_ng_container_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function StudentQuizQuestionsComponent_ng_container_1_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submitQuiz());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.submitting ? "Envoi..." : "Terminer", " ");
  }
}
function StudentQuizQuestionsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "h5");
    \u0275\u0275text(3, "Tentative de Quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div", 12)(11, "div", 13)(12, "div", 14);
    \u0275\u0275element(13, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h5", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18)(18, "p", 19);
    \u0275\u0275element(19, "i", 20);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "div", 21)(22, "div", 22)(23, "span", 23);
    \u0275\u0275text(24, "Progression du Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 24);
    \u0275\u0275element(28, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, StudentQuizQuestionsComponent_ng_container_1_div_29_Template, 4, 2, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27);
    \u0275\u0275template(31, StudentQuizQuestionsComponent_ng_container_1_a_31_Template, 3, 0, "a", 28)(32, StudentQuizQuestionsComponent_ng_container_1_span_32_Template, 1, 0, "span", 1)(33, StudentQuizQuestionsComponent_ng_container_1_button_33_Template, 3, 0, "button", 29)(34, StudentQuizQuestionsComponent_ng_container_1_button_34_Template, 2, 2, "button", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r3.quizData.quizTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.quizData.durationMinutes, " min ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("Question ", ctx_r3.selected + 1, " sur ", ctx_r3.totalQuestions);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.progress, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.questions[ctx_r3.selected]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.selected > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selected === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selected < ctx_r3.totalQuestions - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selected === ctx_r3.totalQuestions - 1);
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "h6", 56);
    \u0275\u0275text(2, "F\xE9licitations ! Vous avez r\xE9ussi \u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, "Vous avez r\xE9ussi le quiz avec succ\xE8s. Continuez comme \xE7a !");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "h6", 56);
    \u0275\u0275text(2, "Vous n'avez pas r\xE9ussi cette fois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, "Ne vous d\xE9couragez pas, apprenez de cette tentative et revenez plus fort !");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizQuestionsComponent_ng_container_2_a_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, "Retour au cours");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r3.routes.courseWatch)("queryParams", \u0275\u0275pureFunction1(2, _c0, ctx_r3.courseId));
  }
}
function StudentQuizQuestionsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "h5");
    \u0275\u0275text(3, "R\xE9sultat du Quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 41)(5, "div", 42)(6, "div", 43)(7, "div", 44)(8, "span", 45);
    \u0275\u0275element(9, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275element(11, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, StudentQuizQuestionsComponent_ng_container_2_div_16_Template, 5, 0, "div", 50)(17, StudentQuizQuestionsComponent_ng_container_2_div_17_Template, 5, 0, "div", 50);
    \u0275\u0275elementStart(18, "div", 51);
    \u0275\u0275template(19, StudentQuizQuestionsComponent_ng_container_2_a_19_Template, 3, 4, "a", 52);
    \u0275\u0275elementStart(20, "a", 53);
    \u0275\u0275element(21, "i", 54);
    \u0275\u0275text(22, "Tableau de bord");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("border-success", ctx_r3.result.passed)("border-danger", !ctx_r3.result.passed);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-success", ctx_r3.result.passed)("border-danger", !ctx_r3.result.passed);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", ctx_r3.result.passed)("text-danger", !ctx_r3.result.passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.result.score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Score: ", ctx_r3.result.earnedMarks, " / ", ctx_r3.result.totalMarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.result.passed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.result.passed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.courseId);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r3.routes.students_Dashboard);
  }
}
var StudentQuizQuestionsComponent = class _StudentQuizQuestionsComponent {
  route;
  quizService;
  routes = routes;
  quizId;
  courseId = 0;
  // set from queryParams to allow "Back to course" navigation
  quizData = null;
  questions = [];
  answers = {};
  // questionId -> choiceId
  selected = 0;
  // current question index (0-based)
  loading = true;
  submitting = false;
  result = null;
  // filled after submit
  constructor(route, quizService) {
    this.route = route;
    this.quizService = quizService;
  }
  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get("quizId"));
    this.courseId = Number(this.route.snapshot.queryParamMap.get("courseId") || 0);
    if (this.quizId) {
      this.quizService.startQuiz(this.quizId).subscribe({
        next: (data) => {
          this.quizData = data;
          this.questions = data.questions || [];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }
  get totalQuestions() {
    return this.questions.length;
  }
  get progress() {
    return this.totalQuestions > 0 ? Math.round((this.selected + 1) / this.totalQuestions * 100) : 0;
  }
  selectChoice(questionId, choiceId) {
    this.answers[questionId] = choiceId;
  }
  isSelected(questionId, choiceId) {
    return this.answers[questionId] === choiceId;
  }
  moveNext() {
    if (this.selected < this.totalQuestions - 1) {
      this.selected++;
    }
  }
  movePrev() {
    if (this.selected > 0) {
      this.selected--;
    }
  }
  submitQuiz() {
    this.submitting = true;
    const answersArray = Object.entries(this.answers).map(([questionId, choiceId]) => ({
      questionId: Number(questionId),
      selectedChoiceId: choiceId
    }));
    const payload = { answers: answersArray };
    this.quizService.submitQuiz(this.quizId, payload).subscribe({
      next: (res) => {
        this.result = res;
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
  static \u0275fac = function StudentQuizQuestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQuizQuestionsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizQuestionsComponent, selectors: [["app-student-quiz-questions"]], decls: 3, vars: 3, consts: [["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "quiz-attempt-card", "border-0"], [1, "quiz-attempt-body", "p-0"], [1, "border", "p-3", "mb-3", "rounded-2"], [1, "bg-light", "border", "p-3", "mb-3", "rounded-2", "flex-wrap"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "mb-2", "mb-md-0"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "me-3", "flex-shrink-0"], ["src", "assets/img/students/quiz.jpg", "alt", "", 1, "img-fluid", "rounded-3"], [1, "fs-18"], [1, "col-md-4"], [1, "text-md-end"], [1, "d-inline-flex", "align-items-center", "mb-0"], [1, "isax", "isax-clock", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fw-semibold", "text-gray-9"], [1, "progress", "progress-xs", "flex-grow-1", "mb-1"], ["role", "progressbar", 1, "progress-bar", "bg-success", "rounded"], ["class", "mb-0", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "class", "btn bg-gray-100 d-inline-flex rounded-pill align-items-center prev_btn me-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary rounded-pill next_btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary rounded-pill", 3, "disabled", "click", 4, "ngIf"], [1, "mb-0"], ["class", "form-check", 3, "mb-2", "mb-0", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "change", "name", "id", "checked"], [1, "form-check-label", 3, "for"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "d-inline-flex", "rounded-pill", "align-items-center", "prev_btn", "me-1", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1", "fs-10"], ["type", "button", 1, "btn", "btn-secondary", "rounded-pill", "next_btn", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1", "fs-10"], ["type", "button", 1, "btn", "btn-secondary", "rounded-pill", 3, "click", "disabled"], [1, "card"], [1, "card-body"], [1, "quiz-circle-progress", "m-0", "mb-3"], [1, "circle-progress", "mb-2"], [1, "progress-left"], [1, "progress-bar"], [1, "progress-right"], [1, "progress-value", "fw-bold", "fs-24"], [1, "text-center", "fs-14"], ["class", "text-center mb-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["class", "btn btn-outline-secondary rounded-pill", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "isax", "isax-grid-2", "me-1", "fs-10"], [1, "text-center", "mb-3"], [1, "mb-1"], [1, "fs-14"], [1, "btn", "btn-outline-secondary", "rounded-pill", 3, "routerLink", "queryParams"]], template: function StudentQuizQuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentQuizQuestionsComponent_div_0_Template, 4, 0, "div", 0)(1, StudentQuizQuestionsComponent_ng_container_1_Template, 35, 11, "ng-container", 1)(2, StudentQuizQuestionsComponent_ng_container_2_Template, 23, 19, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.result && ctx.quizData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.result);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizQuestionsComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz-questions", imports: [CommonModule, RouterLink], template: `    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- Quiz Taking -->
    <ng-container *ngIf="!loading && !result && quizData">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>Tentative de Quiz</h5>
        </div>
        <div class="quiz-attempt-card border-0">
            <div class="quiz-attempt-body p-0">
                <div class="border p-3 mb-3 rounded-2">
                    <div class="bg-light border p-3 mb-3 rounded-2 flex-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="mb-2 mb-md-0">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-3 flex-shrink-0">
                                            <img class="img-fluid rounded-3" src="assets/img/students/quiz.jpg" alt="">
                                        </div>
                                        <h5 class="fs-18">{{ quizData.quizTitle }}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="text-md-end">
                                    <p class="d-inline-flex align-items-center mb-0">
                                        <i class="isax isax-clock me-1"></i>
                                        {{ quizData.durationMinutes }} min
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                            <span class="fw-semibold text-gray-9">Progression du Quiz</span>
                            <span>Question {{ selected + 1 }} sur {{ totalQuestions }}</span>
                        </div>
                        <div class="progress progress-xs flex-grow-1 mb-1">
                            <div class="progress-bar bg-success rounded" role="progressbar" [style.width.%]="progress"></div>
                        </div>
                    </div>
                    <div class="mb-0" *ngIf="questions[selected] as q">
                        <h6 class="mb-3">{{ q.questionText }}</h6>
                        <div class="form-check" [class.mb-2]="!last" [class.mb-0]="last" *ngFor="let c of q.choices; let last = last">
                            <input class="form-check-input" type="radio" [name]="'q-' + q.id" [id]="'choice-' + c.id" [checked]="isSelected(q.id, c.id)" (change)="selectChoice(q.id, c.id)">
                            <label class="form-check-label" [for]="'choice-' + c.id">{{ c.text }}</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <a *ngIf="selected > 0" href="javascript:void(0);" class="btn bg-gray-100 d-inline-flex rounded-pill align-items-center prev_btn me-1" (click)="movePrev()"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Pr\xE9c\xE9dent</a>
                    <span *ngIf="selected === 0"></span>
                    <button *ngIf="selected < totalQuestions - 1" type="button" class="btn btn-secondary rounded-pill next_btn" (click)="moveNext()">Suivant<i class="isax isax-arrow-right-3 ms-1 fs-10"></i></button>
                    <button *ngIf="selected === totalQuestions - 1" type="button" class="btn btn-secondary rounded-pill" (click)="submitQuiz()" [disabled]="submitting">
                        {{ submitting ? 'Envoi...' : 'Terminer' }}
                    </button>
                </div>
            </div>
        </div>
    </ng-container>

    <!-- Result: Passed -->
    <ng-container *ngIf="result">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>R\xE9sultat du Quiz</h5>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="quiz-circle-progress m-0 mb-3">
                    <div class="circle-progress mb-2">
                        <span class="progress-left">
                            <span class="progress-bar" [class.border-success]="result.passed" [class.border-danger]="!result.passed"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar" [class.border-success]="result.passed" [class.border-danger]="!result.passed"></span>
                        </span>
                        <div class="progress-value fw-bold fs-24" [class.text-success]="result.passed" [class.text-danger]="!result.passed">{{ result.score }}%</div>
                    </div>
                    <p class="text-center fs-14">Score: {{ result.earnedMarks }} / {{ result.totalMarks }}</p>
                </div>
                <div class="text-center mb-3" *ngIf="result.passed">
                    <h6 class="mb-1">F\xE9licitations ! Vous avez r\xE9ussi \u{1F389}</h6>
                    <p class="fs-14">Vous avez r\xE9ussi le quiz avec succ\xE8s. Continuez comme \xE7a !</p>
                </div>
                <div class="text-center mb-3" *ngIf="!result.passed">
                    <h6 class="mb-1">Vous n'avez pas r\xE9ussi cette fois</h6>
                    <p class="fs-14">Ne vous d\xE9couragez pas, apprenez de cette tentative et revenez plus fort !</p>
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2">
                    <a *ngIf="courseId" [routerLink]="routes.courseWatch" [queryParams]="{courseId: courseId}" class="btn btn-outline-secondary rounded-pill"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Retour au cours</a>
                    <a [routerLink]="routes.students_Dashboard" class="btn btn-secondary rounded-pill"><i class="isax isax-grid-2 me-1 fs-10"></i>Tableau de bord</a>
                </div>
            </div>
        </div>
    </ng-container>
` }]
  }], () => [{ type: ActivatedRoute }, { type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizQuestionsComponent, { className: "StudentQuizQuestionsComponent", filePath: "src/app/features/student/student-quiz-questions/student-quiz-questions.component.ts", lineNumber: 13 });
})();
export {
  StudentQuizQuestionsComponent
};
//# sourceMappingURL=chunk-CAMIUEEH.js.map
