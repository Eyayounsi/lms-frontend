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
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-reviews/student-reviews.component.ts
function StudentReviewsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMessage, " ");
  }
}
function StudentReviewsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function StudentReviewsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function StudentReviewsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "h5", 16);
    \u0275\u0275text(3, "Vous n'avez pas encore de cours achet\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 17);
    \u0275\u0275text(5, " Explorer les cours ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.courseListPublic);
  }
}
function StudentReviewsComponent_div_8_div_1_ng_container_12_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const review_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", star_r5 <= review_r6.rating ? "#f59e0b" : "#d1d5db");
  }
}
function StudentReviewsComponent_div_8_div_1_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 29);
    \u0275\u0275template(2, StudentReviewsComponent_div_8_div_1_ng_container_12_div_1_span_2_Template, 2, 2, "span", 30);
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "button", 34);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_8_div_1_ng_container_12_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const course_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReviewForm(course_r7));
    });
    \u0275\u0275element(9, "i", 35);
    \u0275\u0275text(10, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 36);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_8_div_1_ng_container_12_div_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const course_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteMyReview(course_r7.id));
    });
    \u0275\u0275element(12, "i", 37);
    \u0275\u0275text(13, "Supprimer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getStars(5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", review_r6.rating, "/5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r6.comment || "Pas de commentaire");
  }
}
function StudentReviewsComponent_div_8_div_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentReviewsComponent_div_8_div_1_ng_container_12_div_1_Template, 14, 3, "div", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const course_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingCourseId !== course_r7.id);
  }
}
function StudentReviewsComponent_div_8_div_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_8_div_1_ng_container_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const course_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReviewForm(course_r7));
    });
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275text(3, "Laisser un avis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function StudentReviewsComponent_div_8_div_1_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_8_div_1_div_14_span_5_Template_span_click_0_listener() {
      const star_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.formRating = star_r11);
    });
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", star_r11 <= ctx_r1.formRating ? "#f59e0b" : "#d1d5db");
  }
}
function StudentReviewsComponent_div_8_div_1_div_14_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 53);
  }
}
function StudentReviewsComponent_div_8_div_1_div_14_i_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function StudentReviewsComponent_div_8_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "label", 43);
    \u0275\u0275text(3, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275template(5, StudentReviewsComponent_div_8_div_1_div_14_span_5_Template, 2, 2, "span", 45);
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 42)(9, "label", 43);
    \u0275\u0275text(10, "Commentaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 47);
    \u0275\u0275twoWayListener("ngModelChange", function StudentReviewsComponent_div_8_div_1_div_14_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.formComment, $event) || (ctx_r1.formComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 33)(13, "button", 48);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_8_div_1_div_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const course_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitReview(course_r7.id));
    });
    \u0275\u0275template(14, StudentReviewsComponent_div_8_div_1_div_14_span_14_Template, 1, 0, "span", 49)(15, StudentReviewsComponent_div_8_div_1_div_14_i_15_Template, 1, 0, "i", 50);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 51);
    \u0275\u0275listener("click", function StudentReviewsComponent_div_8_div_1_div_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(18, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getStars(5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formRating, "/5");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function StudentReviewsComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "h6", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275element(9, "i", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24);
    \u0275\u0275template(12, StudentReviewsComponent_div_8_div_1_ng_container_12_Template, 2, 1, "ng-container", 6)(13, StudentReviewsComponent_div_8_div_1_ng_container_13_Template, 4, 0, "ng-container", 6)(14, StudentReviewsComponent_div_8_div_1_div_14_Template, 19, 7, "div", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r7.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", course_r7.instructorName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getMyReview(course_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getMyReview(course_r7.id) && ctx_r1.editingCourseId !== course_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editingCourseId === course_r7.id);
  }
}
function StudentReviewsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, StudentReviewsComponent_div_8_div_1_Template, 15, 6, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.enrolledCourses);
  }
}
var StudentReviewsComponent = class _StudentReviewsComponent {
  courseService;
  routes = routes;
  enrolledCourses = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  // Map courseId → {rating, comment} for existing reviews
  reviewMap = /* @__PURE__ */ new Map();
  // Form state per course
  editingCourseId = null;
  formRating = 5;
  formComment = "";
  submitting = false;
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => {
        this.enrolledCourses = courses;
        courses.forEach((c) => {
          this.courseService.getCourseReviews(c.id).subscribe({
            next: (reviews) => {
              const userId = Number(localStorage.getItem("userId"));
              const myReview = reviews.find((r) => r.studentId === userId);
              if (myReview)
                this.reviewMap.set(c.id, myReview);
            },
            error: () => {
            }
          });
        });
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Erreur lors du chargement des cours";
        this.loading = false;
      }
    });
  }
  getMyReview(courseId) {
    return this.reviewMap.get(courseId) || null;
  }
  openReviewForm(course) {
    this.editingCourseId = course.id;
    const existing = this.reviewMap.get(course.id);
    this.formRating = existing?.rating || 5;
    this.formComment = existing?.comment || "";
  }
  cancelEdit() {
    this.editingCourseId = null;
    this.formRating = 5;
    this.formComment = "";
  }
  submitReview(courseId) {
    if (this.formRating < 1 || this.formRating > 5) {
      this.errorMessage = "Note invalide (1-5)";
      return;
    }
    this.submitting = true;
    this.courseService.upsertReview(courseId, { rating: this.formRating, comment: this.formComment }).subscribe({
      next: (review) => {
        this.reviewMap.set(courseId, review);
        this.cancelEdit();
        this.submitting = false;
        this.showSuccess("Avis enregistr\xE9 !");
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de l'enregistrement";
        this.submitting = false;
      }
    });
  }
  deleteMyReview(courseId) {
    if (!confirm("Supprimer votre avis ?"))
      return;
    this.courseService.deleteReview(courseId).subscribe({
      next: () => {
        this.reviewMap.delete(courseId);
        this.showSuccess("Avis supprim\xE9");
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors de la suppression"
    });
  }
  getStars(rating) {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3500);
  }
  static \u0275fac = function StudentReviewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentReviewsComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentReviewsComponent, selectors: [["app-student-reviews"]], decls: 9, vars: 5, consts: [[1, "page-content"], ["class", "alert alert-success alert-dismissible fade show mb-3", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mb-3", 4, "ngIf"], [1, "mb-4"], [1, "fa-solid", "fa-star", "me-2", "text-warning"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-graduation-cap", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-2", 3, "routerLink"], ["class", "card mb-3 shadow-sm", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "shadow-sm"], [1, "card-body"], [1, "row", "align-items-start"], [1, "col-md-2"], ["alt", "", 1, "img-fluid", "rounded", 2, "height", "70px", "object-fit", "cover", "width", "100%", 3, "src"], [1, "col-md-5"], [1, "mb-1"], [1, "text-muted", "small", "mb-0"], [1, "fa-solid", "fa-user-tie", "me-1"], ["class", "border rounded p-3 bg-light", 4, "ngIf"], [1, "d-flex", "align-items-center", "mb-1"], [4, "ngFor", "ngForOf"], [1, "ms-2", "fw-medium", "text-warning"], [1, "text-muted", "small", "mb-2"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fa-solid", "fa-edit", "me-1"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa-solid", "fa-trash", "me-1"], [1, "fa-solid", "fa-star"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "fa-solid", "fa-star", "me-1"], [1, "border", "rounded", "p-3", "bg-light"], [1, "mb-2"], [1, "form-label", "fw-medium"], [1, "d-flex", "gap-2", "align-items-center"], ["style", "cursor:pointer; font-size:1.4rem;", 3, "click", 4, "ngFor", "ngForOf"], [1, "ms-2", "text-muted"], ["rows", "2", "placeholder", "Partagez votre exp\xE9rience...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "fa-solid fa-check me-1", 4, "ngIf"], [1, "btn", "btn-light", "btn-sm", 3, "click"], [2, "cursor", "pointer", "font-size", "1.4rem", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fa-solid", "fa-check", "me-1"]], template: function StudentReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StudentReviewsComponent_div_1_Template, 4, 1, "div", 1)(2, StudentReviewsComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "h4", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, "Mes Avis");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, StudentReviewsComponent_div_6_Template, 4, 0, "div", 5)(7, StudentReviewsComponent_div_7_Template, 6, 1, "div", 5)(8, StudentReviewsComponent_div_8_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.enrolledCourses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.enrolledCourses.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentReviewsComponent, [{
    type: Component,
    args: [{ selector: "app-student-reviews", imports: [CommonModule, FormsModule, RouterLink], template: `<div class="page-content">

  <!-- Messages -->
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show mb-3">
    <i class="fa-solid fa-check-circle me-2"></i>{{ successMessage }}
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>
  </div>
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show mb-3">
    <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
  </div>

  <h4 class="mb-4"><i class="fa-solid fa-star me-2 text-warning"></i>Mes Avis</h4>

  <!-- Loading -->
  <div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border text-warning" role="status"></div>
    <p class="mt-2 text-muted">Chargement...</p>
  </div>

  <!-- Vide -->
  <div *ngIf="!loading && enrolledCourses.length === 0" class="text-center py-5">
    <i class="fa-solid fa-graduation-cap fa-3x text-muted mb-3"></i>
    <h5 class="text-muted">Vous n'avez pas encore de cours achet\xE9s</h5>
    <a [routerLink]="routes.courseListPublic" class="btn btn-primary mt-2">
      Explorer les cours
    </a>
  </div>

  <!-- Liste des cours -->
  <div *ngIf="!loading && enrolledCourses.length > 0">
    <div class="card mb-3 shadow-sm" *ngFor="let course of enrolledCourses">
      <div class="card-body">
        <div class="row align-items-start">

          <!-- Image + Info -->
          <div class="col-md-2">
            <img [src]="getImageUrl(course.coverImage)"
                 class="img-fluid rounded" style="height:70px; object-fit:cover; width:100%;" alt="">
          </div>
          <div class="col-md-5">
            <h6 class="mb-1">{{ course.title }}</h6>
            <p class="text-muted small mb-0">
              <i class="fa-solid fa-user-tie me-1"></i>{{ course.instructorName }}
            </p>
          </div>

          <!-- Avis existant -->
          <div class="col-md-5">
            <ng-container *ngIf="getMyReview(course.id) as review">
              <div *ngIf="editingCourseId !== course.id">
                <div class="d-flex align-items-center mb-1">
                  <span *ngFor="let star of getStars(5)">
                    <i class="fa-solid fa-star"
                       [style.color]="star <= review.rating ? '#f59e0b' : '#d1d5db'"></i>
                  </span>
                  <span class="ms-2 fw-medium text-warning">{{ review.rating }}/5</span>
                </div>
                <p class="text-muted small mb-2">{{ review.comment || 'Pas de commentaire' }}</p>
                <div class="d-flex gap-2">
                  <button class="btn btn-outline-primary btn-sm" (click)="openReviewForm(course)">
                    <i class="fa-solid fa-edit me-1"></i>Modifier
                  </button>
                  <button class="btn btn-outline-danger btn-sm" (click)="deleteMyReview(course.id)">
                    <i class="fa-solid fa-trash me-1"></i>Supprimer
                  </button>
                </div>
              </div>
            </ng-container>
            <ng-container *ngIf="!getMyReview(course.id) && editingCourseId !== course.id">
              <button class="btn btn-warning btn-sm" (click)="openReviewForm(course)">
                <i class="fa-solid fa-star me-1"></i>Laisser un avis
              </button>
            </ng-container>

            <!-- Formulaire inline -->
            <div *ngIf="editingCourseId === course.id" class="border rounded p-3 bg-light">
              <div class="mb-2">
                <label class="form-label fw-medium">Note</label>
                <div class="d-flex gap-2 align-items-center">
                  <span *ngFor="let star of getStars(5)" style="cursor:pointer; font-size:1.4rem;"
                        (click)="formRating = star">
                    <i class="fa-solid fa-star" [style.color]="star <= formRating ? '#f59e0b' : '#d1d5db'"></i>
                  </span>
                  <span class="ms-2 text-muted">{{ formRating }}/5</span>
                </div>
              </div>
              <div class="mb-2">
                <label class="form-label fw-medium">Commentaire</label>
                <textarea class="form-control" rows="2" [(ngModel)]="formComment"
                          placeholder="Partagez votre exp\xE9rience..."></textarea>
              </div>
              <div class="d-flex gap-2">
                <button class="btn btn-primary btn-sm" (click)="submitReview(course.id)" [disabled]="submitting">
                  <span *ngIf="submitting" class="spinner-border spinner-border-sm me-1"></span>
                  <i *ngIf="!submitting" class="fa-solid fa-check me-1"></i>
                  {{ submitting ? 'Enregistrement...' : 'Enregistrer' }}
                </button>
                <button class="btn btn-light btn-sm" (click)="cancelEdit()">Annuler</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>\r
` }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentReviewsComponent, { className: "StudentReviewsComponent", filePath: "src/app/features/student/student-reviews/student-reviews.component.ts", lineNumber: 14 });
})();
export {
  StudentReviewsComponent
};
//# sourceMappingURL=chunk-QYIEQZ5E.js.map
