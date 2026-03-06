import {
  QuizService
} from "./chunk-6JHDQTXF.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YSUELB2P.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-quiz-questions/instructor-quiz-questions.component.ts
var _c0 = (a0) => ["/instructor/instructor-quiz-results", a0];
function InstructorQuizQuestionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizQuestionsComponent_ng_container_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "p", 61);
    \u0275\u0275text(3, 'No questions yet. Click "Add Question" to create one.');
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizQuestionsComponent_ng_container_1_div_27_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "input", 70);
    \u0275\u0275elementStart(2, "label", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    const qi_r7 = \u0275\u0275nextContext().index;
    \u0275\u0275classProp("mb-2", !last_r6)("mb-0", last_r6);
    \u0275\u0275advance();
    \u0275\u0275property("name", "question-" + qi_r7)("id", "radio-" + qi_r7 + "-" + c_r5.id)("checked", c_r5.isCorrect);
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + qi_r7 + "-" + c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5.text, " ");
  }
}
function InstructorQuizQuestionsComponent_ng_container_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 41)(2, "div", 62)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 63)(6, "a", 64);
    \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_ng_container_1_div_27_Template_a_click_6_listener() {
      const q_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(q_r4));
    });
    \u0275\u0275element(7, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 66);
    \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_ng_container_1_div_27_Template_a_click_8_listener() {
      const q_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(q_r4.id));
    });
    \u0275\u0275element(9, "i", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275template(11, InstructorQuizQuestionsComponent_ng_container_1_div_27_div_11_Template, 4, 9, "div", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r4.questionText);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", q_r4.choices);
  }
}
function InstructorQuizQuestionsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41)(3, "div", 42)(4, "div", 43)(5, "div")(6, "div", 44)(7, "div", 45);
    \u0275\u0275element(8, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "h5", 33)(11, "a", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "p", 49);
    \u0275\u0275element(15, "i", 50);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 51);
    \u0275\u0275element(18, "i", 52);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(20, "div", 53)(21, "div", 54)(22, "a", 55);
    \u0275\u0275text(23, "View Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 56);
    \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_ng_container_1_Template_a_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetAddForm());
    });
    \u0275\u0275text(25, "Add Question");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(26, InstructorQuizQuestionsComponent_ng_container_1_div_26_Template, 4, 0, "div", 57)(27, InstructorQuizQuestionsComponent_ng_container_1_div_27_Template, 12, 2, "div", 58);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r1.quiz == null ? null : ctx_r1.quiz.title) || "Quiz");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.questions.length, " Questions");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (ctx_r1.quiz == null ? null : ctx_r1.quiz.durationMinutes) || 0, " Minutes");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, ctx_r1.quizId));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.questions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questions);
  }
}
function InstructorQuizQuestionsComponent_ng_container_31_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 79);
    \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_ng_container_31_a_14_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const i_r11 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeChoice(i_r11));
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizQuestionsComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 72)(3, "div", 73)(4, "div", 74)(5, "label", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 75)(10, "label", 71);
    \u0275\u0275text(11, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_ng_container_31_Template_input_ngModelChange_12_listener($event) {
      const choice_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(choice_r9.isCorrect, $event) || (choice_r9.isCorrect = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_ng_container_31_Template_input_ngModelChange_13_listener($event) {
      const choice_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(choice_r9.text, $event) || (choice_r9.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, InstructorQuizQuestionsComponent_ng_container_31_a_14_Template, 2, 0, "a", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const choice_r9 = ctx.$implicit;
    const i_r11 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275classProp("extra-choice-row", i_r11 > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Choice ", i_r11 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("for", "add-switch-" + i_r11);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "add-switch-" + i_r11);
    \u0275\u0275twoWayProperty("ngModel", choice_r9.isCorrect);
    \u0275\u0275property("name", "addCorrect" + i_r11);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", choice_r9.text);
    \u0275\u0275property("name", "addChoiceText" + i_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r11 >= 2);
  }
}
function InstructorQuizQuestionsComponent_ng_container_68_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 79);
    \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_ng_container_68_a_14_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const i_r15 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEditChoice(i_r15));
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizQuestionsComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 72)(3, "div", 73)(4, "div", 74)(5, "label", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 75)(10, "label", 71);
    \u0275\u0275text(11, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_ng_container_68_Template_input_ngModelChange_12_listener($event) {
      const choice_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(choice_r13.isCorrect, $event) || (choice_r13.isCorrect = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_ng_container_68_Template_input_ngModelChange_13_listener($event) {
      const choice_r13 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(choice_r13.text, $event) || (choice_r13.text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, InstructorQuizQuestionsComponent_ng_container_68_a_14_Template, 2, 0, "a", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const choice_r13 = ctx.$implicit;
    const i_r15 = ctx.index;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Choice ", i_r15 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("correct-ans", choice_r13.isCorrect);
    \u0275\u0275property("for", "edit-switch-" + i_r15);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "edit-switch-" + i_r15);
    \u0275\u0275twoWayProperty("ngModel", choice_r13.isCorrect);
    \u0275\u0275property("name", "editCorrect" + i_r15);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", choice_r13.text);
    \u0275\u0275property("name", "editChoiceText" + i_r15);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r15 >= 2);
  }
}
var InstructorQuizQuestionsComponent = class _InstructorQuizQuestionsComponent {
  route;
  quizService;
  routes = routes;
  quizId;
  quiz = null;
  questions = [];
  loading = true;
  // Add question form
  formQuestionText = "";
  formQuestionType = "MULTIPLE_CHOICE";
  formChoices = [
    { text: "", isCorrect: true },
    { text: "", isCorrect: false }
  ];
  // Edit question form
  editingQuestion = null;
  editQuestionText = "";
  editQuestionType = "MULTIPLE_CHOICE";
  editChoices = [];
  // Delete
  deletingQuestionId = null;
  constructor(route, quizService) {
    this.route = route;
    this.quizService = quizService;
  }
  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get("quizId"));
    if (this.quizId) {
      this.loadData();
    }
  }
  loadData() {
    this.loading = true;
    this.quizService.getInstructorQuizzes().subscribe({
      next: (quizzes) => {
        this.quiz = quizzes.find((q) => q.id === this.quizId) || null;
      }
    });
    this.quizService.getQuestions(this.quizId).subscribe({
      next: (data) => {
        this.questions = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // ─── Add Question ────────────────────────────────────────────
  addNewChoice() {
    this.formChoices.push({ text: "", isCorrect: false });
  }
  removeChoice(index) {
    this.formChoices.splice(index, 1);
  }
  resetAddForm() {
    this.formQuestionText = "";
    this.formQuestionType = "MULTIPLE_CHOICE";
    this.formChoices = [
      { text: "", isCorrect: true },
      { text: "", isCorrect: false }
    ];
  }
  submitAddQuestion() {
    const payload = {
      questionText: this.formQuestionText,
      questionType: this.formQuestionType,
      choices: this.formChoices.map((c) => ({ text: c.text, isCorrect: c.isCorrect }))
    };
    this.quizService.addQuestion(this.quizId, payload).subscribe({
      next: () => {
        this.closeModal("add_question");
        this.resetAddForm();
        this.loadData();
      }
    });
  }
  // ─── Edit Question ───────────────────────────────────────────
  openEditModal(q) {
    this.editingQuestion = q;
    this.editQuestionText = q.questionText;
    this.editQuestionType = q.questionType;
    this.editChoices = (q.choices || []).map((c) => ({ text: c.text, isCorrect: c.isCorrect }));
    if (this.editChoices.length === 0) {
      this.editChoices = [{ text: "", isCorrect: true }, { text: "", isCorrect: false }];
    }
    const modal = new bootstrap.Modal(document.getElementById("edit_question"));
    modal.show();
  }
  addEditChoice() {
    this.editChoices.push({ text: "", isCorrect: false });
  }
  removeEditChoice(index) {
    this.editChoices.splice(index, 1);
  }
  submitEditQuestion() {
    if (!this.editingQuestion)
      return;
    const payload = {
      questionText: this.editQuestionText,
      questionType: this.editQuestionType,
      choices: this.editChoices.map((c) => ({ text: c.text, isCorrect: c.isCorrect }))
    };
    this.quizService.updateQuestion(this.editingQuestion.id, payload).subscribe({
      next: () => {
        this.closeModal("edit_question");
        this.editingQuestion = null;
        this.loadData();
      }
    });
  }
  // ─── Delete Question ─────────────────────────────────────────
  confirmDelete(questionId) {
    this.deletingQuestionId = questionId;
    const modal = new bootstrap.Modal(document.getElementById("delete_modal"));
    modal.show();
  }
  deleteQuestion() {
    if (!this.deletingQuestionId)
      return;
    this.quizService.deleteQuestion(this.deletingQuestionId).subscribe({
      next: () => {
        this.closeModal("delete_modal");
        this.deletingQuestionId = null;
        this.loadData();
      }
    });
  }
  closeModal(id) {
    const el = document.getElementById(id);
    if (el) {
      const m = bootstrap.Modal.getInstance(el);
      m?.hide();
    }
  }
  static \u0275fac = function InstructorQuizQuestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizQuestionsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizQuestionsComponent, selectors: [["app-instructor-quiz-questions"]], decls: 93, vars: 8, consts: [["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["id", "add_question", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "fw-bold"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [3, "ngSubmit"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "questionText", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "questionType", 1, "custom-mat-select", "select", 3, "ngModelChange", "ngModel"], ["value", "MULTIPLE_CHOICE"], ["value", "TRUE_FALSE"], [1, "add-choice-data"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "text-secondary", "d-inline-flex", "align-items-center", "fw-medium", "add-choice", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_question", 1, "modal", "fade"], ["type", "text", "name", "editQuestionText", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editQuestionType", 1, "custom-mat-select", "select", 3, "ngModelChange", "ngModel"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-secondary-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "card", "bg-light"], [1, "card-body"], [1, "row", "align-items-center", "gy-3"], [1, "col-xl-8"], [1, "d-sm-flex", "align-items-center"], [1, "quiz-img", "me-3", "mb-2", "mb-sm-0"], ["src", "assets/img/students/quiz.jpg", "alt", ""], ["href", "javascript:void(0);"], [1, "question-info", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "fs-14", "me-2", "pe-2", "border-end", "mb-0"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "col-xl-4"], [1, "d-flex", "align-items-center", "justify-content-sm-end"], [1, "text-info", "text-decoration-underline", "fs-12", "fw-medium", "me-3", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_question", 1, "btn", "btn-secondary", 3, "click"], ["class", "card", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body", "text-center", "py-5"], [1, "text-muted", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "me-2", "action-icon", 3, "click"], [1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "action-icon", 3, "click"], [1, "isax", "isax-trash"], ["class", "form-check", 3, "mb-2", "mb-0", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", "disabled", "", 1, "form-check-input", 3, "name", "id", "checked"], [1, "form-check-label", 3, "for"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "flex-fill"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-check", "form-switch", "form-switch-end"], ["type", "checkbox", "role", "switch", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "name"], ["type", "text", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "name"], ["href", "javascript:void(0);", "class", "delete-item ms-4", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "delete-item", "ms-4", 3, "click"]], template: function InstructorQuizQuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorQuizQuestionsComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorQuizQuestionsComponent_ng_container_1_Template, 28, 8, "ng-container", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
      \u0275\u0275text(7, "Add New Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 9);
      \u0275\u0275listener("ngSubmit", function InstructorQuizQuestionsComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submitAddQuestion();
      });
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "label", 12);
      \u0275\u0275text(14, "Question ");
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275text(16, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formQuestionText, $event) || (ctx.formQuestionText = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11)(19, "label", 12);
      \u0275\u0275text(20, "Question Type ");
      \u0275\u0275elementStart(21, "span", 13);
      \u0275\u0275text(22, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "mat-select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_Template_mat_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formQuestionType, $event) || (ctx.formQuestionType = $event);
        return $event;
      });
      \u0275\u0275elementStart(24, "mat-option", 16);
      \u0275\u0275text(25, "Multiple choice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 17);
      \u0275\u0275text(27, "True or False");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "h6", 11);
      \u0275\u0275text(29, "Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275template(31, InstructorQuizQuestionsComponent_ng_container_31_Template, 15, 10, "ng-container", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 20);
      \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_Template_a_click_32_listener() {
        return ctx.addNewChoice();
      });
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 22)(36, "button", 23);
      \u0275\u0275text(37, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 24);
      \u0275\u0275text(39, "Add Question");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(40, "div", 25)(41, "div", 3)(42, "div", 4)(43, "div", 5)(44, "h5", 6);
      \u0275\u0275text(45, "Edit Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 7);
      \u0275\u0275element(47, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "form", 9);
      \u0275\u0275listener("ngSubmit", function InstructorQuizQuestionsComponent_Template_form_ngSubmit_48_listener() {
        return ctx.submitEditQuestion();
      });
      \u0275\u0275elementStart(49, "div", 10)(50, "div", 11)(51, "label", 12);
      \u0275\u0275text(52, "Question ");
      \u0275\u0275elementStart(53, "span", 13);
      \u0275\u0275text(54, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editQuestionText, $event) || (ctx.editQuestionText = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 11)(57, "label", 12);
      \u0275\u0275text(58, "Question Type ");
      \u0275\u0275elementStart(59, "span", 13);
      \u0275\u0275text(60, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "mat-select", 27);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorQuizQuestionsComponent_Template_mat_select_ngModelChange_61_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editQuestionType, $event) || (ctx.editQuestionType = $event);
        return $event;
      });
      \u0275\u0275elementStart(62, "mat-option", 16);
      \u0275\u0275text(63, "Multiple choice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-option", 17);
      \u0275\u0275text(65, "True or False");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "h6", 11);
      \u0275\u0275text(67, "Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275template(68, InstructorQuizQuestionsComponent_ng_container_68_Template, 15, 10, "ng-container", 19);
      \u0275\u0275elementStart(69, "a", 20);
      \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_Template_a_click_69_listener() {
        return ctx.addEditChoice();
      });
      \u0275\u0275element(70, "i", 21);
      \u0275\u0275text(71, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 22)(73, "button", 23);
      \u0275\u0275text(74, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 24);
      \u0275\u0275text(76, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(77, "div", 28)(78, "div", 29)(79, "div", 4)(80, "div", 30)(81, "span", 31);
      \u0275\u0275element(82, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div")(84, "h4", 33);
      \u0275\u0275text(85, "Delete Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 11);
      \u0275\u0275text(87, "Are you sure you want to delete this question?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 34)(89, "a", 35);
      \u0275\u0275text(90, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "a", 36);
      \u0275\u0275listener("click", function InstructorQuizQuestionsComponent_Template_a_click_91_listener() {
        return ctx.deleteQuestion();
      });
      \u0275\u0275text(92, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.formQuestionText);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formQuestionType);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.formChoices);
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.editQuestionText);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.editQuestionType);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.editChoices);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizQuestionsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz-questions", imports: [CommonModule, RouterLink, FormsModule, MatSelectModule], template: `
    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <ng-container *ngIf="!loading">
    <!-- Quiz Header Card -->
    <div class="card bg-light">
        <div class="card-body">
            <div class="row align-items-center gy-3">
                <div class="col-xl-8">
                    <div>
                        <div class="d-sm-flex align-items-center">
                            <div class="quiz-img me-3 mb-2 mb-sm-0">
                                <img src="assets/img/students/quiz.jpg" alt="">
                            </div>
                            <div>
                                <h5 class="mb-2"><a href="javascript:void(0);">{{ quiz?.title || 'Quiz' }}</a></h5>
                                <div class="question-info d-flex align-items-center">
                                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i class="isax isax-message-question5 text-primary-soft me-2"></i>{{ questions.length }} Questions</p>
                                    <p class="d-flex align-items-center fs-14 mb-0"><i class="isax isax-clock5 text-secondary-soft me-2"></i>{{ quiz?.durationMinutes || 0 }} Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="d-flex align-items-center justify-content-sm-end">
                        <a [routerLink]="['/instructor/instructor-quiz-results', quizId]" class="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>
                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_question" (click)="resetAddForm()">Add Question</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Empty State -->
    <div *ngIf="questions.length === 0" class="card">
        <div class="card-body text-center py-5">
            <p class="text-muted mb-0">No questions yet. Click "Add Question" to create one.</p>
        </div>
    </div>

    <!-- Question Cards -->
    <div class="card" *ngFor="let q of questions; let qi = index">
        <div class="card-body">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>{{ q.questionText }}</h6>
                <div class="d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" (click)="openEditModal(q)"><i class="isax isax-edit-2"></i></a>
                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" (click)="confirmDelete(q.id)"><i class="isax isax-trash"></i></a>
                </div>
            </div>
            <div>
                <div class="form-check" [class.mb-2]="!last" [class.mb-0]="last" *ngFor="let c of q.choices; let last = last">
                    <input class="form-check-input" type="radio" [name]="'question-' + qi" [id]="'radio-' + qi + '-' + c.id" [checked]="c.isCorrect" disabled>
                    <label class="form-check-label" [for]="'radio-' + qi + '-' + c.id">
                        {{ c.text }}
                    </label>
                </div>
            </div>
        </div>
    </div>
    </ng-container>

    <!-- Add Question Modal -->
    <div class="modal fade" id="add_question">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="fw-bold">Add New Question</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form (ngSubmit)="submitAddQuestion()">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Question <span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" [(ngModel)]="formQuestionText" name="questionText" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Question Type <span class="text-danger"> *</span></label>
                            <mat-select class="custom-mat-select select" [(ngModel)]="formQuestionType" name="questionType">
                                <mat-option value="MULTIPLE_CHOICE">Multiple choice</mat-option>
                                <mat-option value="TRUE_FALSE">True or False</mat-option>
                            </mat-select>
                        </div>
                        <h6 class="mb-3">Answer</h6>
                        <div class="add-choice-data">
                            <ng-container *ngFor="let choice of formChoices; let i = index">
                                <div class="mb-3" [class.extra-choice-row]="i > 0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <label class="form-label">Choice {{ i + 1 }} <span class="text-danger"> *</span></label>
                                                <div class="form-check form-switch form-switch-end">
                                                    <label class="form-check-label" [for]="'add-switch-' + i">Correct Answer</label>
                                                    <input class="form-check-input" type="checkbox" role="switch" [id]="'add-switch-' + i" [(ngModel)]="choice.isCorrect" [name]="'addCorrect' + i">
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" [(ngModel)]="choice.text" [name]="'addChoiceText' + i" required>
                                        </div>
                                        <a *ngIf="i >= 2" href="javascript:void(0);" class="delete-item ms-4" (click)="removeChoice(i)"><i class="isax isax-trash"></i></a>
                                    </div>
                                </div>
                            </ng-container>
                        </div>
                        <a href="javascript:void(0);" class="text-secondary d-inline-flex align-items-center fw-medium add-choice" (click)="addNewChoice()">
                            <i class="isax isax-add me-1"></i>Add New
                        </a>
                    </div>
                    <div class="modal-footer">
                        <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
                        <button class="btn btn-secondary rounded-pill" type="submit">Add Question</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Add Question -->

    <!-- Edit Question Modal -->
    <div class="modal fade" id="edit_question">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="fw-bold">Edit Question</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form (ngSubmit)="submitEditQuestion()">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Question <span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" [(ngModel)]="editQuestionText" name="editQuestionText" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Question Type <span class="text-danger"> *</span></label>
                            <mat-select class="custom-mat-select select" [(ngModel)]="editQuestionType" name="editQuestionType">
                                <mat-option value="MULTIPLE_CHOICE">Multiple choice</mat-option>
                                <mat-option value="TRUE_FALSE">True or False</mat-option>
                            </mat-select>
                        </div>
                        <h6 class="mb-3">Answer</h6>
                        <ng-container *ngFor="let choice of editChoices; let i = index">
                            <div class="mb-3">
                                <div class="d-flex align-items-end justify-content-between">
                                    <div class="flex-fill">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label">Choice {{ i + 1 }} <span class="text-danger"> *</span></label>
                                            <div class="form-check form-switch form-switch-end">
                                                <label class="form-check-label" [class.correct-ans]="choice.isCorrect" [for]="'edit-switch-' + i">Correct Answer</label>
                                                <input class="form-check-input" type="checkbox" role="switch" [id]="'edit-switch-' + i" [(ngModel)]="choice.isCorrect" [name]="'editCorrect' + i">
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" [(ngModel)]="choice.text" [name]="'editChoiceText' + i" required>
                                    </div>
                                    <a *ngIf="i >= 2" href="javascript:void(0);" class="delete-item ms-4" (click)="removeEditChoice(i)"><i class="isax isax-trash"></i></a>
                                </div>
                            </div>
                        </ng-container>
                        <a href="javascript:void(0);" class="text-secondary d-inline-flex align-items-center fw-medium add-choice" (click)="addEditChoice()">
                            <i class="isax isax-add me-1"></i>Add New
                        </a>
                    </div>
                    <div class="modal-footer">
                        <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
                        <button class="btn btn-secondary rounded-pill" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Edit Question -->

    <!-- Delete Modal -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center custom-modal-body">
                    <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
                        <i class="isax isax-trash fs-24 text-danger"></i>
                    </span>
                    <div>
                        <h4 class="mb-2">Delete Question</h4>
                        <p class="mb-3">Are you sure you want to delete this question?</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" (click)="deleteQuestion()">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Modal -->
` }]
  }], () => [{ type: ActivatedRoute }, { type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizQuestionsComponent, { className: "InstructorQuizQuestionsComponent", filePath: "src/app/features/instructor/instructor-quiz-questions/instructor-quiz-questions.component.ts", lineNumber: 17 });
})();
export {
  InstructorQuizQuestionsComponent
};
//# sourceMappingURL=chunk-W64EMMC7.js.map
