import {
  CourseService
} from "./chunk-C7JGHRMX.js";
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
  NgIf,
  NgStyle
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/features/student/student-dashboard/student-dashboard.component.ts
var _c0 = () => ({ "transform": "rotate(160deg)" });
var _c1 = () => ({ "transform": "rotate(180deg)" });
var _c2 = () => ({ "transform": "rotate(108deg)" });
var _c3 = () => ({ "transform": "rotate(118deg)" });
var _c4 = () => ({ "transform": "rotate(64deg)" });
var _c5 = (a0) => ({ courseId: a0 });
function StudentDashboardComponent_h4_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.totalCourses);
  }
}
function StudentDashboardComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 65);
  }
}
function StudentDashboardComponent_h4_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeCourses);
  }
}
function StudentDashboardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function StudentDashboardComponent_h4_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.completedCourses);
  }
}
function StudentDashboardComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 67);
  }
}
function StudentDashboardComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, "Vous n'avez pas encore achet\xE9 de cours. ");
    \u0275\u0275elementStart(3, "a", 72);
    \u0275\u0275text(4, "Explorer le catalogue \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function StudentDashboardComponent_div_64_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2, "Termin\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_div_64_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "Non commenc\xE9");
    \u0275\u0275elementEnd();
  }
}
function StudentDashboardComponent_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "div", 76)(3, "a", 77);
    \u0275\u0275element(4, "img", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 79)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 80)(9, "h6", 81)(10, "a", 77);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 82);
    \u0275\u0275element(13, "i", 83);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 84)(16, "div", 85)(17, "span");
    \u0275\u0275text(18, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 86);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 87);
    \u0275\u0275element(22, "div", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 89);
    \u0275\u0275template(24, StudentDashboardComponent_div_64_div_1_span_24_Template, 3, 0, "span", 90)(25, StudentDashboardComponent_div_64_div_1_span_25_Template, 2, 0, "span", 91);
    \u0275\u0275elementStart(26, "a", 92);
    \u0275\u0275text(27);
    \u0275\u0275element(28, "i", 93);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseWatch)("queryParams", \u0275\u0275pureFunction1(24, _c5, course_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(course_r2.title))("src", ctx_r0.getImageUrl(course_r2.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-pill ", ctx_r0.getProgressClass(course_r2.progressPct)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r2.progressPct, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseWatch)("queryParams", \u0275\u0275pureFunction1(26, _c5, course_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r2.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", course_r2.instructorName, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", course_r2.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("progress-bar ", ctx_r0.getProgressClass(course_r2.progressPct)));
    \u0275\u0275styleProp("width", course_r2.progressPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", course_r2.progressPct >= 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r2.progressPct === 0);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.courseWatch)("queryParams", \u0275\u0275pureFunction1(28, _c5, course_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r2.progressPct > 0 ? "Continuer" : "Commencer", " ");
  }
}
function StudentDashboardComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, StudentDashboardComponent_div_64_div_1_Template, 29, 30, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentCourses);
  }
}
var StudentDashboardComponent = class _StudentDashboardComponent {
  courseService;
  routes = routes;
  // Infos utilisateur depuis localStorage
  userName = "";
  userRole = "";
  // Stats réelles
  totalCourses = 0;
  activeCourses = 0;
  // progression > 0% et < 100%
  completedCourses = 0;
  // progression = 100%
  // Cours récents avec progression enrichie
  recentCourses = [];
  loading = true;
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.userName = localStorage.getItem("fullName") || "Utilisateur";
    this.userRole = localStorage.getItem("role") || "";
    this.loadDashboard();
  }
  loadDashboard() {
    forkJoin({
      courses: this.courseService.getMyEnrolledCourses().pipe(catchError(() => of([]))),
      progress: this.courseService.getMyCourseProgress().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ courses, progress }) => {
        this.totalCourses = courses.length;
        const progressMap = /* @__PURE__ */ new Map();
        progress.forEach((p) => {
          progressMap.set(p.courseId, p.completionPercentage ?? 0);
        });
        this.completedCourses = progress.filter((p) => (p.completionPercentage ?? 0) >= 100).length;
        this.activeCourses = progress.filter((p) => {
          const pct = p.completionPercentage ?? 0;
          return pct > 0 && pct < 100;
        }).length;
        this.recentCourses = courses.slice(0, 6).map((c) => __spreadProps(__spreadValues({}, c), {
          progressPct: progressMap.get(c.id) ?? 0
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  /** Badge couleur en fonction de la progression */
  getProgressClass(pct) {
    if (pct >= 100)
      return "bg-success";
    if (pct >= 50)
      return "bg-primary";
    if (pct > 0)
      return "bg-warning";
    return "bg-secondary";
  }
  static \u0275fac = function StudentDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentDashboardComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 232, vars: 30, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "bg-primary", "text-white"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-3"], [1, "icon-box", "bg-white", "bg-opacity-25", "flex-shrink-0"], [1, "ti", "ti-user", "fs-20", "text-white"], [1, "mb-0", "text-white"], [1, "badge", "bg-white", "text-primary", "mt-1"], [1, "card", "bg-light", "quiz-ans-card"], ["src", "./assets/img/shapes/withdraw-bg1.svg", "alt", "img", 1, "quiz-ans-bg1"], ["src", "./assets/img/shapes/withdraw-bg2.svg", "alt", "img", 1, "quiz-ans-bg2"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "mb-1"], [1, "col-md-4"], [1, "text-end"], [1, "btn", "btn-primary", "rounded-pill", 3, "routerLink"], [1, "row"], [1, "col-md-6", "col-xl-4"], [1, "card"], [1, "d-flex", "align-items-center"], [1, "icon-box", "bg-primary-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/graduation.svg", "alt", ""], [1, "d-block"], ["class", "fs-24 mt-1", 4, "ngIf"], ["class", "spinner-border spinner-border-sm text-primary mt-1", 4, "ngIf"], [1, "icon-box", "bg-secondary-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/book.svg", "alt", ""], ["class", "spinner-border spinner-border-sm text-secondary mt-1", 4, "ngIf"], [1, "icon-box", "bg-success-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/bookmark.svg", "alt", ""], ["class", "spinner-border spinner-border-sm text-success mt-1", 4, "ngIf"], [1, "mb-3", "fs-18"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-xl-7"], [1, "mb-3", "border-bottom", "pb-3", "fs-18"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-2", "mb-3"], [1, "badge", "badge-sm", "bg-light", "border", "d-inline-flex", "me-3"], [1, "small"], [1, "heading-color", "fw-semibold"], [1, "badge", "fw-normal", "bg-success", "d-inline-flex", "align-items-center", "me-1"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], ["href", "javascript:void(0);", 1, "action-icon"], [1, "isax", "isax-document-download"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-2"], [1, "col-xl-5"], [1, "card", "mb-0"], [1, "mb-3", "fs-18", "border-bottom", "pb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "flex-md-nowrap", "justify-content-between", "row-gap-2", "mb-3"], ["data-value", "95", 1, "circle-progress", "flex-shrink-0"], [1, "progress-left"], [1, "progress-bar", "border-success", 3, "ngStyle"], [1, "progress-right"], [1, "progress-value"], ["data-value", "100", 1, "circle-progress", "flex-shrink-0"], ["data-value", "80", 1, "circle-progress", "flex-shrink-0"], ["data-value", "85", 1, "circle-progress", "flex-shrink-0"], [1, "d-flex", "align-items-center", "flex-wrap", "flex-md-nowrap", "justify-content-between", "row-gap-2"], ["data-value", "20", 1, "circle-progress", "flex-shrink-0"], [1, "progress-bar", "border-danger"], [1, "progress-bar", "border-danger", 3, "ngStyle"], [1, "fs-24", "mt-1"], [1, "spinner-border", "spinner-border-sm", "text-primary", "mt-1"], [1, "spinner-border", "spinner-border-sm", "text-secondary", "mt-1"], [1, "spinner-border", "spinner-border-sm", "text-success", "mt-1"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "alert", "alert-info"], [1, "isax", "isax-info-circle", "me-2"], [1, "alert-link", "ms-1", 3, "routerLink"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "course-item-two", "course-item", "mx-0"], [1, "course-img"], [3, "routerLink", "queryParams"], [1, "img-fluid", 2, "height", "180px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "p-2"], [1, "course-content"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-2", "text-muted", "small"], [1, "isax", "isax-user", "me-1"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "small", "mb-1"], [1, "fw-semibold"], [1, "progress", 2, "height", "6px"], ["role", "progressbar"], [1, "d-flex", "align-items-center", "justify-content-between"], ["class", "badge bg-success-transparent text-success", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", "ms-auto", 3, "routerLink", "queryParams"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "badge", "bg-success-transparent", "text-success"], [1, "isax", "isax-tick-circle", "me-1"], [1, "text-muted", "small"]], template: function StudentDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h5", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275element(12, "img", 9)(13, "img", 10);
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div")(18, "h6", 14);
      \u0275\u0275text(19, "Quiz : Build Responsive Real World ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Answered : 15/22");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "a", 17);
      \u0275\u0275text(25, "Continue Quiz");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "div", 11)(30, "div", 21)(31, "span", 22);
      \u0275\u0275element(32, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "span", 24);
      \u0275\u0275text(35, "Cours inscrits");
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, StudentDashboardComponent_h4_36_Template, 2, 1, "h4", 25)(37, StudentDashboardComponent_div_37_Template, 1, 0, "div", 26);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 19)(39, "div", 20)(40, "div", 11)(41, "div", 21)(42, "span", 27);
      \u0275\u0275element(43, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div")(45, "span", 24);
      \u0275\u0275text(46, "Cours en cours");
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, StudentDashboardComponent_h4_47_Template, 2, 1, "h4", 25)(48, StudentDashboardComponent_div_48_Template, 1, 0, "div", 29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 19)(50, "div", 20)(51, "div", 11)(52, "div", 21)(53, "span", 30);
      \u0275\u0275element(54, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "span", 24);
      \u0275\u0275text(57, "Cours termin\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, StudentDashboardComponent_h4_58_Template, 2, 1, "h4", 25)(59, StudentDashboardComponent_div_59_Template, 1, 0, "div", 32);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(60, "h5", 33);
      \u0275\u0275text(61, "Cours r\xE9cemment inscrits");
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, StudentDashboardComponent_div_62_Template, 2, 0, "div", 34)(63, StudentDashboardComponent_div_63_Template, 5, 1, "div", 35)(64, StudentDashboardComponent_div_64_Template, 2, 1, "div", 36);
      \u0275\u0275elementStart(65, "div")(66, "div", 18)(67, "div", 37)(68, "div", 20)(69, "div", 11)(70, "h5", 38);
      \u0275\u0275text(71, "Recent Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 39)(73, "div")(74, "h6", 14);
      \u0275\u0275text(75, "Build Responsive Real World Websites..");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 21)(77, "span", 40);
      \u0275\u0275text(78, "#INV001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 41);
      \u0275\u0275text(80, "Amount : ");
      \u0275\u0275elementStart(81, "span", 42);
      \u0275\u0275text(82, "$200");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 21)(84, "span", 43);
      \u0275\u0275element(85, "i", 44);
      \u0275\u0275text(86, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 45);
      \u0275\u0275element(88, "i", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 39)(90, "div")(91, "h6", 14);
      \u0275\u0275text(92, "Wordpress for Beginners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 21)(94, "span", 40);
      \u0275\u0275text(95, "#INV002");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 41);
      \u0275\u0275text(97, "Amount : ");
      \u0275\u0275elementStart(98, "span", 42);
      \u0275\u0275text(99, "$310");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(100, "div", 21)(101, "span", 43);
      \u0275\u0275element(102, "i", 44);
      \u0275\u0275text(103, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "a", 45);
      \u0275\u0275element(105, "i", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 39)(107, "div")(108, "h6", 14);
      \u0275\u0275text(109, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 21)(111, "span", 40);
      \u0275\u0275text(112, "#INV003");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 41);
      \u0275\u0275text(114, "Amount : ");
      \u0275\u0275elementStart(115, "span", 42);
      \u0275\u0275text(116, "$270");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(117, "div", 21)(118, "span", 43);
      \u0275\u0275element(119, "i", 44);
      \u0275\u0275text(120, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "a", 45);
      \u0275\u0275element(122, "i", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 39)(124, "div")(125, "h6", 14);
      \u0275\u0275text(126, "Sketch from A to Z (2024)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 21)(128, "span", 40);
      \u0275\u0275text(129, "#INV004");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p", 41);
      \u0275\u0275text(131, "Amount : ");
      \u0275\u0275elementStart(132, "span", 42);
      \u0275\u0275text(133, "$180");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(134, "div", 21)(135, "span", 43);
      \u0275\u0275element(136, "i", 44);
      \u0275\u0275text(137, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "a", 45);
      \u0275\u0275element(139, "i", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 47)(141, "div")(142, "h6", 14);
      \u0275\u0275text(143, "Become an app designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 21)(145, "span", 40);
      \u0275\u0275text(146, "#INV005");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 41);
      \u0275\u0275text(148, "Amount : ");
      \u0275\u0275elementStart(149, "span", 42);
      \u0275\u0275text(150, "$220");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(151, "div", 21)(152, "span", 43);
      \u0275\u0275element(153, "i", 44);
      \u0275\u0275text(154, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "a", 45);
      \u0275\u0275element(156, "i", 46);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(157, "div", 48)(158, "div", 49)(159, "div", 11)(160, "h5", 50);
      \u0275\u0275text(161, "Latest Quizes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 51)(163, "div")(164, "h6", 14);
      \u0275\u0275text(165, "Sketch from A to Z (2024)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 21)(167, "p");
      \u0275\u0275text(168, "Correct Answer : 15/22");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(169, "div", 52)(170, "span", 53);
      \u0275\u0275element(171, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "span", 55);
      \u0275\u0275element(173, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 56);
      \u0275\u0275text(175, "95%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 51)(177, "div")(178, "h6", 14);
      \u0275\u0275text(179, "Build Responsive Real World ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div", 21)(181, "p");
      \u0275\u0275text(182, "Correct Answer : 18/22");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 57)(184, "span", 53);
      \u0275\u0275element(185, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "span", 55);
      \u0275\u0275element(187, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 56);
      \u0275\u0275text(189, "100%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 51)(191, "div")(192, "h6", 14);
      \u0275\u0275text(193, "UI/UX Design Degree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 21)(195, "p");
      \u0275\u0275text(196, "Correct Answer : 25/30");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div", 58)(198, "span", 53);
      \u0275\u0275element(199, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "span", 55);
      \u0275\u0275element(201, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 56);
      \u0275\u0275text(203, "80%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "div", 51)(205, "div")(206, "h6", 14);
      \u0275\u0275text(207, "Build Responsive Real World ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 21)(209, "p");
      \u0275\u0275text(210, "Correct Answer : 15/20");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 59)(212, "span", 53);
      \u0275\u0275element(213, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "span", 55);
      \u0275\u0275element(215, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div", 56);
      \u0275\u0275text(217, "85%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(218, "div", 60)(219, "div")(220, "h6", 14);
      \u0275\u0275text(221, "Become an app designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "div", 21)(223, "p");
      \u0275\u0275text(224, "Correct Answer : 12/20");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "div", 61)(226, "span", 53);
      \u0275\u0275element(227, "span", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "span", 55);
      \u0275\u0275element(229, "span", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "div", 56);
      \u0275\u0275text(231, "20%");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Bienvenue, ", ctx.userName, " !");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userRole);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.studentsQuiz);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.recentCourses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.recentCourses.length > 0);
      \u0275\u0275advance(107);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(21, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(22, _c1));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(23, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(24, _c1));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(25, _c2));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(26, _c1));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(27, _c3));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(28, _c1));
      \u0275\u0275advance(14);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(29, _c4));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-student-dashboard", imports: [CommonModule, RouterLink], template: `<!-- Banni\xE8re de bienvenue -->
<div class="row mb-4">
    <div class="col-12">
        <div class="card border-0 bg-primary text-white">
            <div class="card-body d-flex align-items-center gap-3 py-3">
                <span class="icon-box bg-white bg-opacity-25 flex-shrink-0">
                    <i class="ti ti-user fs-20 text-white"></i>
                </span>
                <div>
                    <h5 class="mb-0 text-white">Bienvenue, {{ userName }} !</h5>
                    <span class="badge bg-white text-primary mt-1">{{ userRole }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="card bg-light quiz-ans-card">
        <img src="./assets/img/shapes/withdraw-bg1.svg" class="quiz-ans-bg1" alt="img">
        <img src="./assets/img/shapes/withdraw-bg2.svg" class="quiz-ans-bg2" alt="img">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <div>
                        <h6 class="mb-1">Quiz : Build Responsive Real World </h6>
                        <p>Answered : 15/22</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-end">
                        <a [routerLink]="routes.studentsQuiz" class="btn btn-primary rounded-pill">Continue Quiz</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0"><img src="assets/img/icon/graduation.svg" alt=""></span>
                        <div>
                            <span class="d-block">Cours inscrits</span>
                            <h4 class="fs-24 mt-1" *ngIf="!loading">{{ totalCourses }}</h4>
                            <div *ngIf="loading" class="spinner-border spinner-border-sm text-primary mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0"><img src="assets/img/icon/book.svg" alt=""></span>
                        <div>
                            <span class="d-block">Cours en cours</span>
                            <h4 class="fs-24 mt-1" *ngIf="!loading">{{ activeCourses }}</h4>
                            <div *ngIf="loading" class="spinner-border spinner-border-sm text-secondary mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="icon-box bg-success-transparent me-2 me-xxl-3 flex-shrink-0"><img src="assets/img/icon/bookmark.svg" alt=""></span>
                        <div>
                            <span class="d-block">Cours termin\xE9s</span>
                            <h4 class="fs-24 mt-1" *ngIf="!loading">{{ completedCourses }}</h4>
                            <div *ngIf="loading" class="spinner-border spinner-border-sm text-success mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h5 class="mb-3 fs-18">Cours r\xE9cemment inscrits</h5>

    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-4">
        <div class="spinner-border text-primary" role="status"></div>
    </div>

    <!-- Aucun cours -->
    <div *ngIf="!loading && recentCourses.length === 0" class="alert alert-info">
        <i class="isax isax-info-circle me-2"></i>Vous n'avez pas encore achet\xE9 de cours.
        <a [routerLink]="routes.courseListPublic" class="alert-link ms-1">Explorer le catalogue \u2192</a>
    </div>

    <div class="row" *ngIf="!loading && recentCourses.length > 0">
        <div class="col-xl-4 col-md-6" *ngFor="let course of recentCourses">
            <div class="course-item-two course-item mx-0">
                <div class="course-img">
                    <a [routerLink]="routes.courseWatch" [queryParams]="{courseId: course.id}">
                        <img [src]="getImageUrl(course.coverImage)" alt="{{ course.title }}" class="img-fluid" style="height:180px;object-fit:cover;">
                    </a>
                    <!-- Badge progression -->
                    <div class="position-absolute start-0 top-0 p-2">
                        <span class="badge rounded-pill {{ getProgressClass(course.progressPct) }}">
                            {{ course.progressPct }}%
                        </span>
                    </div>
                </div>
                <div class="course-content">
                    <h6 class="title mb-2">
                        <a [routerLink]="routes.courseWatch" [queryParams]="{courseId: course.id}">
                            {{ course.title }}
                        </a>
                    </h6>
                    <p class="d-flex align-items-center mb-2 text-muted small">
                        <i class="isax isax-user me-1"></i>{{ course.instructorName }}
                    </p>
                    <!-- Barre de progression -->
                    <div class="mb-3">
                        <div class="d-flex justify-content-between small mb-1">
                            <span>Progression</span>
                            <span class="fw-semibold">{{ course.progressPct }}%</span>
                        </div>
                        <div class="progress" style="height:6px;">
                            <div class="progress-bar {{ getProgressClass(course.progressPct) }}"
                                 role="progressbar"
                                 [style.width.%]="course.progressPct">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span *ngIf="course.progressPct >= 100" class="badge bg-success-transparent text-success">
                            <i class="isax isax-tick-circle me-1"></i>Termin\xE9
                        </span>
                        <span *ngIf="course.progressPct === 0" class="text-muted small">Non commenc\xE9</span>
                        <a [routerLink]="routes.courseWatch" [queryParams]="{courseId: course.id}"
                           class="btn btn-dark btn-sm d-inline-flex align-items-center ms-auto">
                            {{ course.progressPct > 0 ? 'Continuer' : 'Commencer' }}
                            <i class="isax isax-arrow-right-3 ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>

        <div class="row">
            <div class="col-xl-7">
                <div class="card">
                    <div class="card-body">
                        <h5 class="mb-3 border-bottom pb-3 fs-18">Recent Invoices</h5>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Build Responsive Real World Websites..</h6>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-sm bg-light border d-inline-flex me-3">#INV001</span>
                                    <p class="small">Amount : <span class="heading-color fw-semibold">$200</span></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span>
                                <a href="javascript:void(0);" class="action-icon"><i class="isax isax-document-download"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Wordpress for Beginners</h6>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-sm bg-light border d-inline-flex me-3">#INV002</span>
                                    <p class="small">Amount : <span class="heading-color fw-semibold">$310</span></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span>
                                <a href="javascript:void(0);" class="action-icon"><i class="isax isax-document-download"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Information About UI/UX Design Degree</h6>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-sm bg-light border d-inline-flex me-3">#INV003</span>
                                    <p class="small">Amount : <span class="heading-color fw-semibold">$270</span></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span>
                                <a href="javascript:void(0);" class="action-icon"><i class="isax isax-document-download"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Sketch from A to Z (2024)</h6>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-sm bg-light border d-inline-flex me-3">#INV004</span>
                                    <p class="small">Amount : <span class="heading-color fw-semibold">$180</span></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span>
                                <a href="javascript:void(0);" class="action-icon"><i class="isax isax-document-download"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                            <div>
                                <h6 class="mb-1">Become an app designer</h6>
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-sm bg-light border d-inline-flex me-3">#INV005</span>
                                    <p class="small">Amount : <span class="heading-color fw-semibold">$220</span></p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge fw-normal bg-success d-inline-flex align-items-center me-1"><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span>
                                <a href="javascript:void(0);" class="action-icon"><i class="isax isax-document-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="card mb-0">
                    <div class="card-body">
                        <h5 class="mb-3 fs-18 border-bottom pb-3">Latest Quizes</h5>
                        <div class="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Sketch from A to Z (2024)</h6>
                                <div class="d-flex align-items-center">
                                    <p>Correct Answer : 15/22</p>
                                </div>
                            </div>
                            <div class="circle-progress flex-shrink-0"  data-value='95'>
                                <span class="progress-left">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(160deg)'}"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(180deg)'}"></span>
                                </span>
                                <div class="progress-value">95%</div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Build Responsive Real World </h6>
                                <div class="d-flex align-items-center">
                                    <p>Correct Answer : 18/22</p>
                                </div>
                            </div>
                            <div class="circle-progress flex-shrink-0"  data-value='100'>
                                <span class="progress-left">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(180deg)'}"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(180deg)'}"></span>
                                </span>
                                <div class="progress-value">100%</div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">UI/UX Design Degree</h6>
                                <div class="d-flex align-items-center">
                                    <p>Correct Answer : 25/30</p>
                                </div>
                            </div>
                            <div class="circle-progress flex-shrink-0"  data-value='80'>
                                <span class="progress-left">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(108deg)'}"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(180deg)'}"></span>
                                </span>
                                <div class="progress-value">80%</div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3">
                            <div>
                                <h6 class="mb-1">Build Responsive Real World </h6>
                                <div class="d-flex align-items-center">
                                    <p>Correct Answer : 15/20</p>
                                </div>
                            </div>
                            <div class="circle-progress flex-shrink-0"  data-value='85'>
                                <span class="progress-left">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(118deg)'}"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(180deg)'}"></span>
                                </span>
                                <div class="progress-value">85%</div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2">
                            <div>
                                <h6 class="mb-1">Become an app designer</h6>
                                <div class="d-flex align-items-center">
                                    <p>Correct Answer : 12/20</p>
                                </div>
                            </div>
                            <div class="circle-progress flex-shrink-0"  data-value='20'>
                                <span class="progress-left">
                                    <span class="progress-bar border-danger" ></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar border-danger" [ngStyle]="{'transform':'rotate(64deg)'}"></span>
                                </span>
                                <div class="progress-value">20%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>` }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentDashboardComponent, { className: "StudentDashboardComponent", filePath: "src/app/features/student/student-dashboard/student-dashboard.component.ts", lineNumber: 14 });
})();
export {
  StudentDashboardComponent
};
//# sourceMappingURL=chunk-NQBMQB7I.js.map
