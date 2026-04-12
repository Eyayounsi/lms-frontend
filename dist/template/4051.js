"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[4051],{

/***/ 14051:
/*!***************************************************************************!*\
  !*** ./src/app/features/courses/course-resume/course-resume.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseResumeComponent: () => (/* binding */ CourseResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 85422);








function CourseResumeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function CourseResumeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Veuillez vous connecter pour voir vos cours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
  }
}
function CourseResumeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vous n'etes inscrit a aucun cours pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Parcourir les cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\nNo of Lecturers : ", section_r4.lessons.length, "\n");
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45)(7, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_li_1_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const course_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.watchCourse(course_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Watch\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lesson_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", lesson_r6.title, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", lesson_r6.duration ? lesson_r6.duration + "s" : "", "\n");
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_li_1_Template, 10, 2, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", section_r4.lessons);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No lessons in this section.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "h2", 33)(2, "a", 34)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_small_5_Template, 2, 1, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 37)(8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_ul_9_Template, 2, 1, "ul", 4)(10, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_p_10_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const j_r7 = ctx.index;
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "heading-" + i_r8 + "-" + j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("collapsed", j_r7 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-bs-target", "#collapse-" + i_r8 + "-" + j_r7)("aria-expanded", j_r7 === 0 ? "true" : "false")("aria-controls", "collapse-" + i_r8 + "-" + j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", section_r4.title, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", section_r4.lessons);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", j_r7 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "collapse-" + i_r8 + "-" + j_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-labelledby", "heading-" + i_r8 + "-" + j_r7)("data-bs-parent", "#accordion-" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", section_r4.lessons && section_r4.lessons.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !section_r4.lessons || section_r4.lessons.length === 0);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CourseResumeComponent_ng_container_5_div_1_ng_container_25_div_2_Template, 11, 15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const course_r3 = ctx_r8.$implicit;
    const i_r8 = ctx_r8.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "accordion-" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", course_r3.sections);
  }
}
function CourseResumeComponent_ng_container_5_div_1_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No curriculum available for this course.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CourseResumeComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18)(6, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 21)(11, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CourseResumeComponent_ng_container_5_div_1_Template_a_click_19_listener() {
      const course_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.watchCourse(course_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Resume Course\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 28)(23, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Course Curriculum");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CourseResumeComponent_ng_container_5_div_1_ng_container_25_Template, 3, 2, "ng-container", 29)(26, CourseResumeComponent_ng_container_5_div_1_ng_template_26_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const noSections_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.getImageUrl(course_r3.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](course_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](course_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", ctx_r0.getTotalLessons(course_r3), "+ Lesson\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", course_r3.enrollmentCount || 0, " students enrolled\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](course_r3.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", course_r3.sections && course_r3.sections.length > 0)("ngIfElse", noSections_r10);
  }
}
function CourseResumeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CourseResumeComponent_ng_container_5_div_1_Template, 28, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.enrolledCourses);
  }
}
let CourseResumeComponent = /*#__PURE__*/(() => {
  class CourseResumeComponent {
    courseService;
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    enrolledCourses = [];
    loading = true;
    isLoggedIn = false;
    constructor(courseService, router) {
      this.courseService = courseService;
      this.router = router;
    }
    ngOnInit() {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role') || '';
      this.isLoggedIn = !!token;
      if (!this.isLoggedIn || !role.includes('STUDENT')) {
        this.loading = false;
        return;
      }
      this.courseService.getMyEnrolledCourses().subscribe({
        next: courses => {
          this.enrolledCourses = courses;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    watchCourse(courseId) {
      this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseWatch], {
        queryParams: {
          courseId
        }
      });
    }
    getTotalLessons(course) {
      if (!course.sections) return 0;
      return course.sections.reduce((total, section) => {
        return total + (section.lessons ? section.lessons.length : 0);
      }, 0);
    }
    getImageUrl(image) {
      if (!image) return 'assets/img/course-img/courses-01.jpg';
      if (image.startsWith('preset:')) return `assets/img/course-img/${image.replace('preset:', '')}`;
      if (image.startsWith('http')) return image;
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_3__.resolveCourseImage)(image);
    }
    static ɵfac = function CourseResumeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CourseResumeComponent,
      selectors: [["app-course-resume"]],
      decls: 6,
      vars: 4,
      consts: [["noSections", ""], [1, "course-resume"], [1, "container"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "visually-hidden"], [1, "mb-3"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "text-muted"], [1, "btn", "btn-secondary", "mt-3", 3, "routerLink"], ["class", "card mb-4", 4, "ngFor", "ngForOf"], [1, "card", "mb-4"], [1, "card-body"], [1, "course-resume-details-1", "d-lg-flex", "align-items-center", "mb-3"], [1, "position-relative", "cou-resume-image"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "cou-resume-content", "w-100", "ps-lg-4"], [1, "mb-2"], [1, "mb-3", "fs-14"], [1, "d-flex", "align-items-center", "flex-wrap", "cou-lesson"], [1, "d-flex", "align-items-center", "me-3"], ["src", "./assets/img/icons/book3.svg", "alt", "img", 1, "img-fluid", "me-1"], ["src", "./assets/img/icons/people3.svg", "alt", "img", 1, "img-fluid", "me-1"], [1, "badge", "badge-sm", "fs-12", "rounded-pill", "bg-warning"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-pause-circle5", "me-1"], [1, "course-resume-details-2"], [4, "ngIf", "ngIfElse"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate", 3, "id"], ["class", "accordion-item", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "accordion-item"], [1, "accordion-header", 3, "id"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", 1, "accordion-button"], ["class", "d-flex fs-14 text-gray-7 fw-normal mt-1", 4, "ngIf"], [1, "isax", "isax-arrow-circle-up4"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "pb-0"], ["class", "text-muted fs-14", 4, "ngIf"], [1, "d-flex", "fs-14", "text-gray-7", "fw-normal", "mt-1"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-play-circle5", "fs-24", "text-success", "me-1"], [1, "text-gray-7", "fw-normal", "ms-auto", "flex-shrink-0"], [1, "d-flex", "mt-2"], ["href", "javascript:void(0);", 1, "btn", "play-again-btn", "px-3", "me-2", 3, "click"], [1, "isax", "isax-play-circle5", "me-2", "fs-10"], [1, "text-muted", "fs-14"]],
      template: function CourseResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CourseResumeComponent_div_2_Template, 4, 0, "div", 3)(3, CourseResumeComponent_div_3_Template, 5, 1, "div", 3)(4, CourseResumeComponent_div_4_Template, 5, 1, "div", 3)(5, CourseResumeComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isLoggedIn && ctx.enrolledCourses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isLoggedIn && ctx.enrolledCourses.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CourseResumeComponent;
})();

/***/ }),

/***/ 39937:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/course-image.util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveCourseImage: () => (/* binding */ resolveCourseImage)
/* harmony export */ });
const DEFAULT_BACKEND_BASE_URL = 'http://localhost:8081';
function resolveCourseImage(path, fallback = 'assets/img/course-img/courses-01.jpg') {
  const normalized = sanitizePath(path);
  if (!normalized) return fallback;
  if (normalized.startsWith('http://') || normalized.startsWith('https://') || normalized.startsWith('data:image/')) {
    return normalized;
  }
  if (normalized.startsWith('assets/')) {
    return normalized;
  }
  if (normalized.startsWith('preset:')) {
    const presetName = normalizeLegacyPresetFileName(normalized.replace('preset:', '').trim());
    return resolveAssetPresetImage(presetName);
  }
  const lower = normalized.toLowerCase();
  // Legacy absolute paths may include /uploads/... somewhere in the middle
  const uploadsWithSlashIndex = lower.indexOf('/uploads/');
  if (uploadsWithSlashIndex > 0) {
    const suffix = normalized.substring(uploadsWithSlashIndex + '/uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  // Legacy absolute paths may include uploads/... without leading slash
  const uploadsIndex = lower.indexOf('uploads/');
  if (uploadsIndex > 0) {
    const suffix = normalized.substring(uploadsIndex + 'uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  if (!normalized.includes('/')) {
    const fileName = normalizeLegacyPresetFileName(normalized);
    if (/^(course-img|courses-)/i.test(fileName)) {
      return resolveAssetPresetImage(fileName);
    }
  }
  // Legacy records may store only sub-directory paths like "covers/abc.jpg".
  if (/^(covers|videos|pdfs|avatars)\//i.test(normalized)) {
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${normalized}`;
  }
  // Legacy records may store "uploads/..." without leading slash.
  if (/^uploads\//i.test(normalized)) {
    const suffix = normalized.substring('uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  // Legacy records may store "/uploads/..." with wrong casing.
  if (/^\/uploads\//i.test(normalized)) {
    const suffix = normalized.substring('/uploads/'.length);
    return `${DEFAULT_BACKEND_BASE_URL}/uploads/${suffix}`;
  }
  if (normalized.startsWith('/')) {
    return `${DEFAULT_BACKEND_BASE_URL}${normalized}`;
  }
  return `${DEFAULT_BACKEND_BASE_URL}/${normalized}`;
}
function normalizeLegacyPresetFileName(name) {
  const trimmed = (name || '').trim();
  const match = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
  if (!match) return trimmed;
  return `course-img${match[1]}.${match[2]}`;
}
function sanitizePath(path) {
  const raw = String(path || '').trim().replace(/\\/g, '/');
  if (!raw) return '';
  // Some payloads contain quoted values: "..." or '...'
  const unquoted = raw.replace(/^['"]+|['"]+$/g, '').trim();
  return unquoted;
}
function resolveAssetPresetImage(fileName) {
  if (/^course-img/i.test(fileName) || /^courses-/i.test(fileName)) {
    return `assets/img/course-img/${fileName}`;
  }
  return `assets/img/course/${fileName}`;
}

/***/ }),

/***/ 92643:
/*!*************************************************!*\
  !*** ./src/app/shared/service/routes/routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = {
  // SuperAdmin Routes
  superadmin_dashboard: '/superadmin/superadmin-dashboard',
  superadmin_users: '/superadmin/superadmin-users',
  superadminSettings: '/superadmin/superadmin-settings',
  superadmin_logs: '/superadmin/superadmin-logs',
  // Admin Routes
  admin_dashboard: '/admin/admin-dashboard',
  admin_users: '/admin/admin-users',
  admin_courses: '/admin/admin-courses',
  admin_categories: '/admin/admin-categories',
  admin_blog: '/admin/admin-blog',
  admin_tickets: '/admin/admin-tickets',
  admin_payouts: '/admin/admin-payouts',
  admin_detection: '/admin/admin-detection',
  adminAnalytics: '/admin/admin-analytics',
  adminSettings: '/admin/admin-settings',
  // Recruiter Routes
  recruiter_dashboard: '/recruiter/recruiter-dashboard',
  recruiter_shared_profiles: '/recruiter/recruiter-shared-profiles',
  recruiter_certified_students: '/recruiter/recruiter-certified-students',
  recruiter_job_offers: '/recruiter/recruiter-job-offers',
  recruiter_messages: '/recruiter/recruiter-messages',
  recruiterSettings: '/recruiter/settings/recruiter-settings',
  recruiterChangePassword: '/recruiter/settings/recruiter-change-password',
  forceChangePassword: '/auth/force-change-password',
  face_register: '/auth/face-register',
  // Instructor Routes
  instructor: '/instructor/',
  instructor_dashboard: '/instructor/instructor-dashboard',
  instructor_payouts: '/instructor/instructor-payouts',
  instructor_tickets: '/instructor/instructor-tickets',
  instructorWishlist: '/instructor/instructor-wishlist',
  instructorWithdraw: '/instructor/instructor-withdraw',
  instructorProfile: '/instructor/instructor-profile',
  instructorQuizQuestion: '/instructor/instructor-quiz-questions',
  instructorQuiz: '/instructor/instructor-quiz',
  instructorCertificate: '/instructor/instructor-certificate',
  instructorEarning: '/instructor/instructor-payouts',
  instructorStatements: '/instructor/instructor-statements',
  quiz: 'quiz',
  studentsList: '/instructor/students-list',
  studentsGrid: '/instructor/students-grid',
  studentsDetails: '/instructor/students-details',
  instructorQuizResult: '/instructor/instructor-quiz-results',
  instructorCourse: '/instructor/instructor-course',
  instructorNotifications: '/instructor/notifications',
  instructorAddCourse: '/instructor/add-course',
  instructorEditCourse: '/instructor/edit-course',
  instructorMyCourses: '/instructor/instructor-course',
  instructorCourseGrid: '/instructor/instructor-course-grid',
  instructorTickets: '/instructor/instructor-tickets',
  instructorMessage: '/instructor/instructor-message',
  instructorQuizDetails: '/instructor/instructor-quiz-details',
  instructorSettingWithdraw: '/instructor/settings/instructor-setting-withdraw',
  instructorSettingNotifications: '/instructor/settings/instructor-setting-notifications',
  instructorPlans: '/instructor/settings/instructor-plans',
  instructorIntegrations: '/instructor/settings/instructor-integrations',
  instructorLinkedAccounts: '/instructor/settings/instructor-linked-accounts',
  instructorSocialProfiles: '/instructor/settings/instructor-social-profiles',
  instructorDeleteAccount: '/instructor/settings/instructor-delete-account',
  instructorChangePassword: '/instructor/settings/instructor-change-password',
  instructorSettings: '/instructor/settings/instructor-settings',
  instructorDetection: '/instructor/instructor-detection',
  instructorAnalytics: '/instructor/instructor-analytics',
  // Student Routes
  students: '/student/',
  students_profile: '/student/student-profile',
  students_Dashboard: '/student/student-dashboard',
  course_student: '/student/course-student',
  student_Certificate: '/student/student-certificate',
  student_Wishlist: '/student/student-wishlist',
  view_invoice_student: '/student/view-invoice',
  transactions_student: '/student/transactions-student',
  students_security: '/student/setting-student-security',
  students_notification: '/student/setting-student-notification',
  students_privacy: '/student/setting-student-privacy',
  students_delete: '/student/setting-student-delete-profile',
  students_accounts: '/student/setting-student-accounts',
  students_referral: '/student/student-referral',
  students_subscription: '/student/setting-student-subscription',
  students_billing: '/student/setting-student-billing',
  students_payments: '/student/setting-student-payment',
  students_invoice: '/student/setting-student-invoice',
  students_tickets: '/student/student-tickets',
  students_message: '/student/student-message',
  students_quiz_question: '/student/student-quiz-questions',
  students_quiz: '/student/student-quiz',
  studentsQuizQuestion: '/student/student-quiz-questions',
  studentsQuiz: '/student/student-quiz',
  studentProfile: '/student/student-profile',
  studentMessages: '/student/student-message',
  studentsMessage: '/student/student-message',
  studentOrderHistory: '/student/student-order-history',
  studentWishlist: '/student/student-wishlist',
  studentCourses: '/student/student-courses',
  studentMyCourses: '/student/student-my-courses',
  studentReviews: '/student/student-reviews',
  studentQuizDetails: '/student/student-quiz-details',
  studentQuiz: '/student/student-quiz',
  studentLinkedAccount: '/student/settings/student-linked-accounts',
  studentNotification: '/student/settings/student-notifications',
  students_social_profile: '/student/settings/student-social-profile',
  studentChangePassword: '/student/settings/student-change-password',
  studentSettings: '/student/settings/student-settings',
  studentBillingAddress: '/student/settings/student-billing-address',
  studentQa: '/student/student-qa',
  student_job_offers: '/student/student-job-offers',
  studentChallenges: '/student/student-challenges',
  studentPointsExchange: '/student/student-points-exchange',
  // Pages Routes
  pages: '/pages/',
  page_notifications: '/pages/notifications',
  becomeAnExpert: '/pages/become-an-instructor',
  testimonial: '/pages/testimonial',
  aboutUs: '/pages/about-us',
  contactUs: '/pages/contact-us',
  page_pricing_plan: '/pages/pricing-plan',
  page_faq: '/pages/faq',
  page_term_condition: '/pages/term-condition',
  page_privacy_policy: '/pages/privacy-policy',
  instructorDetails: '/pages/instructor-details',
  instructorGrid: '/pages/instructor-grid',
  instructorList: '/pages/instructor-list',
  // Blog Routes
  blog: '/blog/',
  blog_details_left_sidebar: '/blog/blog-details-left-sidebar',
  blog_details_right_sidebar: '/blog/blog-details-right-sidebar',
  blog_details: '/blog/blog-details',
  blog_masonry: '/blog/blog-masonry',
  blog_grid: '/blog/blog-grid',
  blog_grid2: '/blog/blog-2-grid',
  blog_grid3: '/blog/blog-3-grid',
  blog_carousal: '/blog/blog-carousal',
  blog_left_sidebar: '/blog/blog-left-sidebar',
  blog_right_sidebar: '/blog/blog-right-sidebar',
  // Auth Routes
  auth: '/auth/',
  forgot_password: '/auth/forgot-password',
  login: '/auth/login',
  register: '/auth/register',
  setPassword: '/auth/set-password',
  otp: '/auth/otp',
  lockScreen: '/auth/lock-screen',
  under_construction: '/under-construction',
  comming_soon: '/coming-soon',
  error_404: '/error-404',
  error_500: '/error-500',
  // Home Routes
  home: '/index',
  home2: '/index-two',
  home3: '/index-three',
  home4: '/index-four',
  home5: '/index-five',
  home6: '/index-six',
  // Courses Routes
  courses: '/courses',
  courseGrid: '/courses/course-grid',
  courseList: '/courses/course-list',
  courseCategory: '/courses/course-category',
  courseCategory2: '/courses/course-category-2',
  courseCategory3: '/courses/course-category-3',
  courseResume: '/courses/course-resume',
  courseWatch: '/courses/course-watch',
  cart: '/courses/cart',
  checkout: '/courses/checkout',
  courseDetails: '/courses/course-details',
  courseDetails2: '/courses/course-details-2',
  courseListPublic: '/courses/course-list-public',
  verifyCertificate: '/courses/certificates/verify',
  addCourse: '/courses/add-course',
  editCourse: '/courses/edit-course'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);
//# sourceMappingURL=4051.js.map