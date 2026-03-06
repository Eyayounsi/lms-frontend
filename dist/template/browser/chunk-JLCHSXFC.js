import {
  QuizService
} from "./chunk-6JHDQTXF.js";
import {
  MatSort,
  MatSortModule
} from "./chunk-K7YQ4LBE.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import "./chunk-MFSRU4HL.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-quiz-results/instructor-quiz-results.component.ts
var _c0 = (a0) => ["/instructor/instructor-quiz-results", a0];
function InstructorQuizResultsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizResultsComponent_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " Aucun quiz cr\xE9\xE9 pour le moment. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorQuizResultsComponent_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div")(3, "h6", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "span");
    \u0275\u0275element(9, "i", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275element(12, "i", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275element(15, "i", 16);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "a", 17);
    \u0275\u0275element(18, "i", 18);
    \u0275\u0275text(19, "Voir les r\xE9sultats ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const quiz_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(quiz_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", quiz_r1.lessonTitle ? quiz_r1.lessonTitle + " " : "", "", quiz_r1.courseName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", quiz_r1.numberOfQuestions, " questions");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", quiz_r1.durationMinutes, " min");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Pass: ", quiz_r1.passMark, "/", quiz_r1.totalMarks);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, quiz_r1.id));
  }
}
function InstructorQuizResultsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5", 5);
    \u0275\u0275text(2, "R\xE9sultats des Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InstructorQuizResultsComponent_ng_container_1_div_3_Template, 2, 0, "div", 6)(4, InstructorQuizResultsComponent_ng_container_1_div_4_Template, 20, 10, "div", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.allQuizzes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.allQuizzes);
  }
}
function InstructorQuizResultsComponent_ng_container_2_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2, "No results yet");
    \u0275\u0275elementEnd()();
  }
}
function InstructorQuizResultsComponent_ng_container_2_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 50)(3, "span", 51);
    \u0275\u0275element(4, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", r_r4.studentAvatar || "assets/img/user/user-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r4.score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.attempts);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", r_r4.passed)("badge-danger", !r_r4.passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.passed ? "Passed" : "Failed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 10, r_r4.finishedAt, "short"));
  }
}
function InstructorQuizResultsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5", 19);
    \u0275\u0275text(2, "Quiz Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "div", 23);
    \u0275\u0275element(7, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h5", 25)(10, "a", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 27)(13, "p", 28);
    \u0275\u0275element(14, "i", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 30);
    \u0275\u0275element(17, "i", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(19, "div", 32)(20, "div", 33)(21, "div", 34)(22, "div", 21)(23, "div", 10)(24, "div")(25, "h6", 35);
    \u0275\u0275text(26, "Total Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37);
    \u0275\u0275element(30, "img", 38);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 33)(32, "div", 39)(33, "div", 21)(34, "div", 10)(35, "div")(36, "h6", 35);
    \u0275\u0275text(37, "Pass Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 36);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 40);
    \u0275\u0275element(41, "img", 41);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "div", 33)(43, "div", 42)(44, "div", 21)(45, "div", 10)(46, "div")(47, "h6", 35);
    \u0275\u0275text(48, "Average Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 36);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 43);
    \u0275\u0275element(52, "img", 44);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(53, "div", 45)(54, "table", 46);
    \u0275\u0275listener("matSortChange", function InstructorQuizResultsComponent_ng_container_2_Template_table_matSortChange_54_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortData($event));
    });
    \u0275\u0275elementStart(55, "thead", 47)(56, "tr")(57, "th");
    \u0275\u0275text(58, "Student Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "Attempts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "tbody");
    \u0275\u0275template(68, InstructorQuizResultsComponent_ng_container_2_tr_68_Template, 3, 0, "tr", 1)(69, InstructorQuizResultsComponent_ng_container_2_tr_69_Template, 17, 13, "tr", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.data.quizTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data.courseName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.results.length, " Attempts");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.data.totalParticipants);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r1.getPassRate(), "%");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r1.getAverageScore(), "%");
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.results.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.results);
  }
}
var InstructorQuizResultsComponent = class _InstructorQuizResultsComponent {
  route;
  quizService;
  quizId;
  data = null;
  results = [];
  loading = true;
  listMode = false;
  allQuizzes = [];
  constructor(route, quizService) {
    this.route = route;
    this.quizService = quizService;
  }
  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get("quizId"));
    if (this.quizId) {
      this.loadResults();
    } else {
      this.listMode = true;
      this.loadAllQuizzes();
    }
  }
  loadAllQuizzes() {
    this.loading = true;
    this.quizService.getInstructorQuizzes().subscribe({
      next: (data) => {
        this.allQuizzes = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadResults() {
    this.loading = true;
    this.quizService.getQuizResults(this.quizId).subscribe({
      next: (res) => {
        this.data = res;
        this.results = res.results || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  sortData(sort) {
    const d = this.results.slice();
    if (!sort.active || sort.direction === "") {
      this.results = d;
    } else {
      this.results = d.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  getAverageScore() {
    if (this.results.length === 0)
      return 0;
    const sum = this.results.reduce((acc, r) => acc + (r.score || 0), 0);
    return Math.round(sum / this.results.length);
  }
  getPassRate() {
    if (this.results.length === 0)
      return 0;
    const passed = this.results.filter((r) => r.passed).length;
    return Math.round(passed * 100 / this.results.length);
  }
  static \u0275fac = function InstructorQuizResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizResultsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizResultsComponent, selectors: [["app-instructor-quiz-results"]], decls: 3, vars: 3, consts: [["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "page-title", "fw-bold", "mb-3"], ["class", "border rounded-2 p-4 text-center text-muted", 4, "ngIf"], ["class", "border rounded-2 p-3 mb-3", 4, "ngFor", "ngForOf"], [1, "border", "rounded-2", "p-4", "text-center", "text-muted"], [1, "border", "rounded-2", "p-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1"], [1, "text-muted", "fs-12", "mb-1"], [1, "d-flex", "align-items-center", "gap-3", "fs-13"], [1, "isax", "isax-message-question5", "text-primary", "me-1"], [1, "isax", "isax-clock5", "text-secondary", "me-1"], [1, "isax", "isax-medal-star5", "text-warning", "me-1"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink"], [1, "isax", "isax-chart", "me-1"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "d-sm-flex", "align-items-center"], [1, "quiz-img", "me-3", "mb-2", "mb-sm-0"], ["src", "assets/img/students/quiz.jpg", "alt", ""], [1, "mb-2"], ["href", "javascript:void(0);"], [1, "question-info", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "fs-14", "me-2", "pe-2", "border-end", "mb-0"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "bg-secondary-transparent", "border-0"], [1, "mb-1", "fw-normal", "text-gray-5"], [1, "fs-20", "fw-bold", "mb-1", "d-block", "text-gray-9"], [1, "icon-box", "bg-soft-secondary"], ["src", "assets/img/icon/user-tick.svg", "alt", ""], [1, "card", "bg-info-transparent", "border-0"], [1, "icon-box", "bg-soft-info"], ["src", "assets/img/icon/document.svg", "alt", ""], [1, "card", "bg-purple-transparent", "border-0"], [1, "icon-box", "bg-soft-purple"], ["src", "assets/img/icon/clock.svg", "alt", ""], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [4, "ngFor", "ngForOf"], ["colspan", "5", 1, "text-center", "text-muted", "py-4"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], ["alt", "", 3, "src"], [1, "fs-14"], [1, "badge"]], template: function InstructorQuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorQuizResultsComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorQuizResultsComponent_ng_container_1_Template, 5, 2, "ng-container", 1)(2, InstructorQuizResultsComponent_ng_container_2_Template, 70, 8, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.listMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.listMode && ctx.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatSortModule, MatSort, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizResultsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz-results", imports: [CommonModule, MatSortModule, DatePipe, RouterLink], template: `
    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- LIST MODE : sidebar "Quiz Results" click (no quizId) -->
    <ng-container *ngIf="!loading && listMode">
        <h5 class="page-title fw-bold mb-3">R\xE9sultats des Quiz</h5>
        <div *ngIf="allQuizzes.length === 0" class="border rounded-2 p-4 text-center text-muted">
            Aucun quiz cr\xE9\xE9 pour le moment.
        </div>
        <div *ngFor="let quiz of allQuizzes" class="border rounded-2 p-3 mb-3">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <h6 class="mb-1">{{ quiz.title }}</h6>
                    <p class="text-muted fs-12 mb-1">
                        {{ quiz.lessonTitle ? quiz.lessonTitle + '  ' : '' }}{{ quiz.courseName }}
                    </p>
                    <div class="d-flex align-items-center gap-3 fs-13">
                        <span><i class="isax isax-message-question5 text-primary me-1"></i>{{ quiz.numberOfQuestions }} questions</span>
                        <span><i class="isax isax-clock5 text-secondary me-1"></i>{{ quiz.durationMinutes }} min</span>
                        <span><i class="isax isax-medal-star5 text-warning me-1"></i>Pass: {{ quiz.passMark }}/{{ quiz.totalMarks }}</span>
                    </div>
                </div>
                <a [routerLink]="['/instructor/instructor-quiz-results', quiz.id]" class="btn btn-sm btn-secondary">
                    <i class="isax isax-chart me-1"></i>Voir les r\xE9sultats
                </a>
            </div>
        </div>
    </ng-container>

    <!-- DETAIL MODE : specific quiz results -->
    <ng-container *ngIf="!loading && !listMode && data">
    <h5 class="page-title">Quiz Results</h5>
    <div class="card">
        <div class="card-body">
            <div class="d-sm-flex align-items-center">
                <div class="quiz-img me-3 mb-2 mb-sm-0">
                    <img src="assets/img/students/quiz.jpg" alt="">
                </div>
                <div>
                    <h5 class="mb-2"><a href="javascript:void(0);">{{ data.quizTitle }}</a></h5>
                    <div class="question-info d-flex align-items-center">
                        <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i class="isax isax-message-question5 text-primary-soft me-2"></i>{{ data.courseName }}</p>
                        <p class="d-flex align-items-center fs-14 mb-0"><i class="isax isax-clock5 text-secondary-soft me-2"></i>{{ results.length }} Attempts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="card bg-secondary-transparent border-0">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-1 fw-normal text-gray-5">Total Participants</h6>
                            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">{{ data.totalParticipants }}</span>
                        </div>
                        <div class="icon-box bg-soft-secondary">
                            <img src="assets/img/icon/user-tick.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card bg-info-transparent border-0">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-1 fw-normal text-gray-5">Pass Rate</h6>
                            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">{{ getPassRate() }}%</span>
                        </div>
                        <div class="icon-box bg-soft-info">
                            <img src="assets/img/icon/document.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card bg-purple-transparent border-0">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-1 fw-normal text-gray-5">Average Score</h6>
                            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">{{ getAverageScore() }}%</span>
                        </div>
                        <div class="icon-box bg-soft-purple">
                            <img src="assets/img/icon/clock.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="table-responsive custom-table">
        <table matSort (matSortChange)="sortData($event)" class="table">
            <thead class="thead-light">
                <tr>
                    <th>Student Name</th>
                    <th>Score</th>
                    <th>Attempts</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngIf="results.length === 0">
                    <td colspan="5" class="text-center text-muted py-4">No results yet</td>
                </tr>
                <tr *ngFor="let r of results">
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img [src]="r.studentAvatar || 'assets/img/user/user-01.jpg'" alt="">
                            </span>
                            <span class="fs-14">{{ r.studentName }}</span>
                        </div>
                    </td>
                    <td>{{ r.score }}%</td>
                    <td>{{ r.attempts }}</td>
                    <td>
                        <span class="badge" [class.badge-success]="r.passed" [class.badge-danger]="!r.passed">
                            {{ r.passed ? 'Passed' : 'Failed' }}
                        </span>
                    </td>
                    <td>{{ r.finishedAt | date:'short' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </ng-container>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizResultsComponent, { className: "InstructorQuizResultsComponent", filePath: "src/app/features/instructor/instructor-quiz-results/instructor-quiz-results.component.ts", lineNumber: 13 });
})();
export {
  InstructorQuizResultsComponent
};
//# sourceMappingURL=chunk-JLCHSXFC.js.map
