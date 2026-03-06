import {
  QuizService
} from "./chunk-6JHDQTXF.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-quiz/student-quiz.component.ts
var _c0 = (a0) => ["/student/student-quiz-questions", a0];
function StudentQuizComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function StudentQuizComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2, "No quizzes available yet.");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div")(2, "h6", 11)(3, "a", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "a", 14);
    \u0275\u0275element(9, "i", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, q_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", q_r1.courseName, " \u2022 ", q_r1.numberOfQuestions, " Questions \u2022 ", q_r1.attempts, " attempt(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, q_r1.id));
  }
}
function StudentQuizComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentQuizComponent_ng_container_5_div_1_Template, 10, 10, "div", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.quizzes);
  }
}
var StudentQuizComponent = class _StudentQuizComponent {
  quizService;
  routes = routes;
  quizzes = [];
  loading = true;
  constructor(quizService) {
    this.quizService = quizService;
  }
  ngOnInit() {
    this.quizService.getAllStudentQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function StudentQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQuizComponent)(\u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizComponent, selectors: [["app-student-quiz"]], decls: 6, vars: 3, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], ["class", "text-center py-5", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-center", "py-4"], [1, "text-muted"], ["class", "d-flex align-items-center justify-content-between border p-3 mb-3 rounded-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-between", "border", "p-3", "mb-3", "rounded-2"], [1, "mb-1"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "arrow-next", 3, "routerLink"], [1, "isax", "isax-arrow-right-1"]], template: function StudentQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, StudentQuizComponent_div_3_Template, 4, 0, "div", 1)(4, StudentQuizComponent_div_4_Template, 3, 0, "div", 2)(5, StudentQuizComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.quizzes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz", imports: [CommonModule, RouterLink], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5>My Quiz Attempts</h5>
    </div>

    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- Empty -->
    <div *ngIf="!loading && quizzes.length === 0" class="text-center py-4">
        <p class="text-muted">No quizzes available yet.</p>
    </div>

    <ng-container *ngIf="!loading">
        <div class="d-flex align-items-center justify-content-between border p-3 mb-3 rounded-2" *ngFor="let q of quizzes">
            <div>
                <h6 class="mb-1"><a [routerLink]="['/student/student-quiz-questions', q.id]">{{ q.title }}</a></h6>
                <p class="fs-14 mb-0">{{ q.courseName }} &bull; {{ q.numberOfQuestions }} Questions &bull; {{ q.attempts }} attempt(s)</p>
            </div>
            <div>
                <a [routerLink]="['/student/student-quiz-questions', q.id]" class="arrow-next"><i class="isax isax-arrow-right-1"></i></a>
            </div>
        </div>
    </ng-container>\r
` }]
  }], () => [{ type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizComponent, { className: "StudentQuizComponent", filePath: "src/app/features/student/student-quiz/student-quiz.component.ts", lineNumber: 13 });
})();
export {
  StudentQuizComponent
};
//# sourceMappingURL=chunk-ZMW4ODWM.js.map
