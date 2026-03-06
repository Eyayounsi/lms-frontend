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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-quiz-details/instructor-quiz-details.component.ts
function InstructorQuizDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorQuizDetailsComponent_ng_container_1_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "i", 15);
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r1.questionType === "TRUE_FALSE" ? "T/F" : "MCQ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.questionText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.givenAnswer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.correctAnswer);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-light-success", q_r1.isCorrect)("badge-light-danger", !q_r1.isCorrect);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r1.isCorrect ? "Correct" : "Incorrect", " ");
  }
}
function InstructorQuizDetailsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "a", 6);
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275text(4, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul")(10, "li");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "table", 10)(17, "thead")(18, "tr")(19, "th");
    \u0275\u0275text(20, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Total Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Pass Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Correct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Incorrect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Earned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Result");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "tbody")(36, "tr")(37, "td")(38, "div", 11)(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p")(43, "span");
    \u0275\u0275text(44, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td")(59, "span", 12);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(61, "div", 13)(62, "h6");
    \u0275\u0275text(63, "Quiz Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 9)(65, "table", 10)(66, "thead")(67, "tr")(68, "th");
    \u0275\u0275text(69, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "Given Answers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Correct Answers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "Result");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "tbody");
    \u0275\u0275template(81, InstructorQuizDetailsComponent_ng_container_1_tr_81_Template, 16, 10, "tr", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.routes.instructorQuiz);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Course: ", ctx_r2.attempt.courseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.attempt.quizTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Quiz Time: ", ctx_r2.attempt.durationMinutes, " Minutes");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Student: ", ctx_r2.attempt.studentName);
    \u0275\u0275advance(27);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 20, ctx_r2.attempt.finishedAt, "medium"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(": ", ctx_r2.attempt.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.attempt.correctAnswers + ctx_r2.attempt.incorrectAnswers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.attempt.totalMarks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.attempt.passMark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.attempt.correctAnswers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.attempt.incorrectAnswers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.attempt.earnedMarks, " (", ctx_r2.attempt.score, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-light-success", ctx_r2.attempt.passed)("badge-light-danger", !ctx_r2.attempt.passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.attempt.passed ? "Pass" : "Fail", " ");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r2.attempt.questionOverview);
  }
}
var InstructorQuizDetailsComponent = class _InstructorQuizDetailsComponent {
  route;
  quizService;
  routes = routes;
  attemptId;
  attempt = null;
  loading = true;
  constructor(route, quizService) {
    this.route = route;
    this.quizService = quizService;
  }
  ngOnInit() {
    this.attemptId = Number(this.route.snapshot.paramMap.get("attemptId"));
    if (this.attemptId) {
      this.quizService.getAttemptDetailInstructor(this.attemptId).subscribe({
        next: (data) => {
          this.attempt = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }
  static \u0275fac = function InstructorQuizDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorQuizDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorQuizDetailsComponent, selectors: [["app-instructor-quiz-details"]], decls: 2, vars: 2, consts: [["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "quiz-details"], [1, "back-link", 3, "routerLink"], [1, "bx", "bx-left-arrow-alt"], [1, "table-quiz"], [1, "table-responsive", "custom-table"], [1, "table", "table-nowrap", "mb-0"], [1, "quiz-table"], [1, "resut-badge"], [1, "quiz-overview"], [4, "ngFor", "ngForOf"], [1, "bx", "bxs-adjust"], [1, "ms-1", "fs-12", "text-muted"]], template: function InstructorQuizDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorQuizDetailsComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorQuizDetailsComponent_ng_container_1_Template, 82, 23, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.attempt);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorQuizDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-quiz-details", imports: [CommonModule, RouterLink], template: `    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <ng-container *ngIf="!loading && attempt">
    <div class="quiz-details">
        <a [routerLink]="routes.instructorQuiz" class="back-link"><i class="bx bx-left-arrow-alt"></i>Back</a>
        <p>Course: {{ attempt.courseName }}</p>
        <h6>{{ attempt.quizTitle }}</h6>
        <ul>
            <li>Quiz Time: {{ attempt.durationMinutes }} Minutes</li>
            <li>Student: {{ attempt.studentName }}</li>
        </ul>
    </div>

    <!-- Attempt Summary -->
    <div class="table-quiz">
        <div class="table-responsive custom-table">
            <table class="table table-nowrap mb-0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Questions</th>
                        <th>Total Marks</th>
                        <th>Pass Marks</th>
                        <th>Correct</th>
                        <th>Incorrect</th>
                        <th>Earned</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="quiz-table">
                                <p>{{ attempt.finishedAt | date:'medium' }}</p>
                                <p><span>Student</span>: {{ attempt.studentName }}</p>
                            </div>
                        </td>
                        <td>{{ attempt.correctAnswers + attempt.incorrectAnswers }}</td>
                        <td>{{ attempt.totalMarks }}</td>
                        <td>{{ attempt.passMark }}</td>
                        <td>{{ attempt.correctAnswers }}</td>
                        <td>{{ attempt.incorrectAnswers }}</td>
                        <td>{{ attempt.earnedMarks }} ({{ attempt.score }}%)</td>
                        <td>
                            <span class="resut-badge" [class.badge-light-success]="attempt.passed" [class.badge-light-danger]="!attempt.passed">
                                {{ attempt.passed ? 'Pass' : 'Fail' }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Question Overview -->
    <div class="quiz-overview">
        <h6>Quiz Overview</h6>
        <div class="table-responsive custom-table">
            <table class="table table-nowrap mb-0">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Type</th>
                        <th>Questions</th>
                        <th>Given Answers</th>
                        <th>Correct Answers</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let q of attempt.questionOverview; let i = index">
                        <td>{{ i + 1 }}</td>
                        <td>
                            <i class="bx bxs-adjust"></i>
                            <span class="ms-1 fs-12 text-muted">{{ q.questionType === 'TRUE_FALSE' ? 'T/F' : 'MCQ' }}</span>
                        </td>
                        <td>{{ q.questionText }}</td>
                        <td>{{ q.givenAnswer }}</td>
                        <td>{{ q.correctAnswer }}</td>
                        <td>
                            <span class="resut-badge" [class.badge-light-success]="q.isCorrect" [class.badge-light-danger]="!q.isCorrect">
                                {{ q.isCorrect ? 'Correct' : 'Incorrect' }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </ng-container>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorQuizDetailsComponent, { className: "InstructorQuizDetailsComponent", filePath: "src/app/features/instructor/instructor-quiz-details/instructor-quiz-details.component.ts", lineNumber: 13 });
})();
export {
  InstructorQuizDetailsComponent
};
//# sourceMappingURL=chunk-7XSF2OCA.js.map
