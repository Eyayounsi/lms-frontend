import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  Router,
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
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/course-resume/course-resume.component.ts
function CourseResumeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function CourseResumeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h5", 8);
    \u0275\u0275text(2, "Veuillez vous connecter pour voir vos cours.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 9);
    \u0275\u0275text(4, "Se connecter");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
  }
}
function CourseResumeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h5", 10);
    \u0275\u0275text(2, "Vous n'etes inscrit a aucun cours pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 11);
    \u0275\u0275text(4, "Parcourir les cours");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\nNo of Lecturers : ", section_r4.lessons.length, "\n");
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "h6", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "a", 46);
    \u0275\u0275listener("click", function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_li_1_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const course_r3 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.watchCourse(course_r3.id));
    });
    \u0275\u0275element(8, "i", 47);
    \u0275\u0275text(9, "Watch\n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n", lesson_r6.title, "\n");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n", lesson_r6.duration ? lesson_r6.duration + "s" : "", "\n");
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_li_1_Template, 10, 2, "li", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", section_r4.lessons);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1, "No lessons in this section.");
    \u0275\u0275elementEnd();
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h2", 33)(2, "a", 34)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275template(5, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_small_5_Template, 2, 1, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38);
    \u0275\u0275template(9, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_Template, 2, 1, "ul", 4)(10, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_p_10_Template, 2, 0, "p", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const j_r7 = ctx.index;
    const i_r8 = \u0275\u0275nextContext(2).index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "heading-" + i_r8 + "-" + j_r7);
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", j_r7 > 0);
    \u0275\u0275attribute("data-bs-target", "#collapse-" + i_r8 + "-" + j_r7)("aria-expanded", j_r7 === 0 ? "true" : "false")("aria-controls", "collapse-" + i_r8 + "-" + j_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", section_r4.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r4.lessons);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", j_r7 === 0);
    \u0275\u0275property("id", "collapse-" + i_r8 + "-" + j_r7);
    \u0275\u0275attribute("aria-labelledby", "heading-" + i_r8 + "-" + j_r7)("data-bs-parent", "#accordion-" + i_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", section_r4.lessons && section_r4.lessons.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !section_r4.lessons || section_r4.lessons.length === 0);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275template(2, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_Template, 11, 15, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    const course_r3 = ctx_r8.$implicit;
    const i_r8 = ctx_r8.index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "accordion-" + i_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", course_r3.sections);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1, "No curriculum available for this course.");
    \u0275\u0275elementEnd();
  }
}
function CourseResumeComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275element(4, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "h3", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "p", 22);
    \u0275\u0275element(12, "img", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275element(15, "img", 24);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 25);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "a", 26);
    \u0275\u0275listener("click", function CourseResumeComponent_ng_container_5_div_1_Template_a_click_19_listener() {
      const course_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.watchCourse(course_r3.id));
    });
    \u0275\u0275element(20, "i", 27);
    \u0275\u0275text(21, " Resume Course\n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 28)(23, "h5");
    \u0275\u0275text(24, "Course Curriculum");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, CourseResumeComponent_ng_container_5_div_1_ng_container_25_Template, 3, 2, "ng-container", 29)(26, CourseResumeComponent_ng_container_5_div_1_ng_template_26_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const noSections_r10 = \u0275\u0275reference(27);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.getImageUrl(course_r3.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r3.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n", ctx_r0.getTotalLessons(course_r3), "+ Lesson\n");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n", course_r3.enrollmentCount || 0, " students enrolled\n");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r3.categoryName);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", course_r3.sections && course_r3.sections.length > 0)("ngIfElse", noSections_r10);
  }
}
function CourseResumeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CourseResumeComponent_ng_container_5_div_1_Template, 28, 8, "div", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.enrolledCourses);
  }
}
var CourseResumeComponent = class _CourseResumeComponent {
  courseService;
  router;
  routes = routes;
  enrolledCourses = [];
  loading = true;
  isLoggedIn = false;
  constructor(courseService, router) {
    this.courseService = courseService;
    this.router = router;
  }
  ngOnInit() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role") || "";
    this.isLoggedIn = !!token;
    if (!this.isLoggedIn || !role.includes("STUDENT")) {
      this.loading = false;
      return;
    }
    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => {
        this.enrolledCourses = courses;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  watchCourse(courseId) {
    this.router.navigate([routes.courseWatch], { queryParams: { courseId } });
  }
  getTotalLessons(course) {
    if (!course.sections)
      return 0;
    return course.sections.reduce((total, section) => {
      return total + (section.lessons ? section.lessons.length : 0);
    }, 0);
  }
  getImageUrl(image) {
    if (!image)
      return "assets/img/course/default-course.jpg";
    if (image.startsWith("http"))
      return image;
    return `http://localhost:8081/api/files/${image}`;
  }
  static \u0275fac = function CourseResumeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseResumeComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseResumeComponent, selectors: [["app-course-resume"]], decls: 6, vars: 4, consts: [["noSections", ""], [1, "course-resume"], [1, "container"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "visually-hidden"], [1, "mb-3"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "text-muted"], [1, "btn", "btn-secondary", "mt-3", 3, "routerLink"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], [1, "card", "mb-4"], [1, "card-body"], [1, "course-resume-details-1", "d-lg-flex", "align-items-center", "mb-3"], [1, "position-relative", "cou-resume-image"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "cou-resume-content", "w-100", "ps-lg-4"], [1, "mb-2"], [1, "mb-3", "fs-14"], [1, "d-flex", "align-items-center", "flex-wrap", "cou-lesson"], [1, "d-flex", "align-items-center", "me-3"], ["src", "./assets/img/icons/book3.svg", "alt", "img", 1, "img-fluid", "me-1"], ["src", "./assets/img/icons/people3.svg", "alt", "img", 1, "img-fluid", "me-1"], [1, "badge", "badge-sm", "fs-12", "rounded-pill", "bg-warning"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-pause-circle5", "me-1"], [1, "course-resume-details-2"], [4, "ngIf", "ngIfElse"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate", 3, "id"], ["class", "accordion-item", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "accordion-item"], [1, "accordion-header", 3, "id"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", 1, "accordion-button"], ["class", "d-flex fs-14 text-gray-7 fw-normal mt-1", 4, "ngIf"], [1, "isax", "isax-arrow-circle-up4"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "pb-0"], ["class", "text-muted fs-14", 4, "ngIf"], [1, "d-flex", "fs-14", "text-gray-7", "fw-normal", "mt-1"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-play-circle5", "fs-24", "text-success", "me-1"], [1, "text-gray-7", "fw-normal", "ms-auto", "flex-shrink-0"], [1, "d-flex", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "play-again-btn", "px-3", "me-2", 3, "click"], [1, "isax", "isax-play-circle5", "me-2", "fs-10"], [1, "text-muted", "fs-14"]], template: function CourseResumeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, CourseResumeComponent_div_2_Template, 4, 0, "div", 3)(3, CourseResumeComponent_div_3_Template, 5, 1, "div", 3)(4, CourseResumeComponent_div_4_Template, 5, 1, "div", 3)(5, CourseResumeComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isLoggedIn && ctx.enrolledCourses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isLoggedIn && ctx.enrolledCourses.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseResumeComponent, [{
    type: Component,
    args: [{ selector: "app-course-resume", imports: [CommonModule, RouterLink], template: `<!-- Course Resume -->
<div class="course-resume">
<div class="container">

<!-- Loading -->
<div *ngIf="loading" class="text-center py-5">
<div class="spinner-border text-secondary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
</div>

<!-- Not logged in -->
<div *ngIf="!loading && !isLoggedIn" class="text-center py-5">
<h5 class="mb-3">Veuillez vous connecter pour voir vos cours.</h5>
<a [routerLink]="routes.login" class="btn btn-secondary">Se connecter</a>
</div>

<!-- No enrolled courses -->
<div *ngIf="!loading && isLoggedIn && enrolledCourses.length === 0" class="text-center py-5">
<h5 class="text-muted">Vous n'etes inscrit a aucun cours pour le moment.</h5>
<a [routerLink]="routes.courseListPublic" class="btn btn-secondary mt-3">Parcourir les cours</a>
</div>

<!-- Enrolled courses list -->
<ng-container *ngIf="!loading && isLoggedIn && enrolledCourses.length > 0">
<div *ngFor="let course of enrolledCourses; let i = index" class="card mb-4">
<div class="card-body">

<!-- Course Header -->
<div class="course-resume-details-1 d-lg-flex align-items-center mb-3">
<div class="position-relative cou-resume-image">
<img class="img-fluid" [src]="getImageUrl(course.coverImage)" alt="img">
</div>
<div class="cou-resume-content w-100 ps-lg-4">
<h3 class="mb-2">{{ course.title }}</h3>
<p class="mb-3 fs-14">{{ course.description }}</p>
<div class="d-flex align-items-center flex-wrap cou-lesson">
<p class="d-flex align-items-center me-3">
<img class="img-fluid me-1" src="./assets/img/icons/book3.svg" alt="img">
{{ getTotalLessons(course) }}+ Lesson
</p>
<p class="d-flex align-items-center me-3">
<img class="img-fluid me-1" src="./assets/img/icons/people3.svg" alt="img">
{{ course.enrollmentCount || 0 }} students enrolled
</p>
<span class="badge badge-sm fs-12 rounded-pill bg-warning">{{ course.categoryName }}</span>
</div>
<a href="javascript:void(0);" (click)="watchCourse(course.id)" class="btn btn-secondary d-inline-flex align-items-center">
<i class="isax isax-pause-circle5 me-1"></i> Resume Course
</a>
</div>
</div>

<!-- Course Curriculum -->
<div class="course-resume-details-2">
<h5>Course Curriculum</h5>
<ng-container *ngIf="course.sections && course.sections.length > 0; else noSections">
<div class="accordion accordion-customicon1 accordions-items-seperate" [id]="'accordion-' + i">
<div *ngFor="let section of course.sections; let j = index" class="accordion-item" data-aos="fade-up">
<h2 class="accordion-header" [id]="'heading-' + i + '-' + j">
<a href="javascript:void(0);" class="accordion-button"
[class.collapsed]="j > 0"
data-bs-toggle="collapse"
[attr.data-bs-target]="'#collapse-' + i + '-' + j"
[attr.aria-expanded]="j === 0 ? 'true' : 'false'"
[attr.aria-controls]="'collapse-' + i + '-' + j">
<span>{{ section.title }}
<small class="d-flex fs-14 text-gray-7 fw-normal mt-1" *ngIf="section.lessons">
No of Lecturers : {{ section.lessons.length }}
</small>
</span>
<i class="isax isax-arrow-circle-up4"></i>
</a>
</h2>
<div [id]="'collapse-' + i + '-' + j"
class="accordion-collapse collapse"
[class.show]="j === 0"
[attr.aria-labelledby]="'heading-' + i + '-' + j"
[attr.data-bs-parent]="'#accordion-' + i">
<div class="accordion-body pb-0">
<ul *ngIf="section.lessons && section.lessons.length > 0">
<li *ngFor="let lesson of section.lessons">
<h6 class="d-flex align-items-center">
<i class="isax isax-play-circle5 fs-24 text-success me-1"></i>
{{ lesson.title }}
<span class="text-gray-7 fw-normal ms-auto flex-shrink-0">
{{ lesson.duration ? lesson.duration + 's' : '' }}
</span>
</h6>
<div class="d-flex mt-2">
<a href="javascript:void(0);" (click)="watchCourse(course.id)" class="btn play-again-btn px-3 me-2">
<i class="isax isax-play-circle5 me-2 fs-10"></i>Watch
</a>
</div>
</li>
</ul>
<p *ngIf="!section.lessons || section.lessons.length === 0" class="text-muted fs-14">No lessons in this section.</p>
</div>
</div>
</div>
</div>
</ng-container>
<ng-template #noSections>
<p class="text-muted fs-14">No curriculum available for this course.</p>
</ng-template>
</div>

</div>
</div>
</ng-container>

</div>
</div>
<!-- /Course Resume -->\r
` }]
  }], () => [{ type: CourseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseResumeComponent, { className: "CourseResumeComponent", filePath: "src/app/features/courses/course-resume/course-resume.component.ts", lineNumber: 13 });
})();
export {
  CourseResumeComponent
};
//# sourceMappingURL=chunk-OMK3F7D2.js.map
