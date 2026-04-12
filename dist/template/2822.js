"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2822],{

/***/ 12822:
/*!***********************************************************************************!*\
  !*** ./src/app/features/student/student-dashboard/student-dashboard.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentDashboardComponent: () => (/* binding */ StudentDashboardComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);








const _c0 = a0 => ({
  courseId: a0
});
const _c1 = (a0, a1, a2, a3) => ({
  "badge-success": a0,
  "badge-primary": a1,
  "badge-warning": a2,
  "badge-secondary": a3
});
const _c2 = (a0, a1, a2) => ({
  "bg-success": a0,
  "bg-primary": a1,
  "bg-warning": a2
});
function StudentDashboardComponent_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.totalCourses);
  }
}
function StudentDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 77);
  }
}
function StudentDashboardComponent_h4_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.activeCourses);
  }
}
function StudentDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 78);
  }
}
function StudentDashboardComponent_h4_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.completedCourses);
  }
}
function StudentDashboardComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 79);
  }
}
function StudentDashboardComponent_h4_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.totalCourses > 0 ? ctx_r0.Math.round(ctx_r0.completedCourses / ctx_r0.totalCourses * 100) : 0);
  }
}
function StudentDashboardComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 80);
  }
}
function StudentDashboardComponent_a_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Explore More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function StudentDashboardComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 84)(2, "div", 84)(3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function StudentDashboardComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "No Courses Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "You haven't enrolled in any courses yet. Start your learning journey today!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Browse Catalog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function StudentDashboardComponent_div_55_div_1_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function StudentDashboardComponent_div_55_div_1_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function StudentDashboardComponent_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 96)(7, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StudentDashboardComponent_div_55_div_1_Template_a_click_7_listener() {
      const course_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.showContinueCourseAlert(course_r3.title, course_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 99)(11, "a", 93)(12, "h6", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 103)(18, "div", 104)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, StudentDashboardComponent_div_55_div_1_span_26_Template, 3, 0, "span", 108)(27, StudentDashboardComponent_div_55_div_1_span_27_Template, 3, 0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("animation-delay", i_r4 * 0.1 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseWatch)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c0, course_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.getImageUrl(course_r3.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", course_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction4"](26, _c1, course_r3.progressPct >= 100, course_r3.progressPct >= 50 && course_r3.progressPct < 100, course_r3.progressPct > 0 && course_r3.progressPct < 50, course_r3.progressPct === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", course_r3.progressPct, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseWatch)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](31, _c0, course_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", course_r3.progressPct > 0 ? "Continue" : "Start Now", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseWatch)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](33, _c0, course_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](course_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", course_r3.instructorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", course_r3.progressPct, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", course_r3.progressPct, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](35, _c2, course_r3.progressPct >= 100, course_r3.progressPct >= 50 && course_r3.progressPct < 100, course_r3.progressPct > 0 && course_r3.progressPct < 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", course_r3.progressPct >= 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", course_r3.progressPct === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseWatch)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](39, _c0, course_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", course_r3.progressPct > 0 ? "Continue" : "Start", " ");
  }
}
function StudentDashboardComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentDashboardComponent_div_55_div_1_Template, 31, 41, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.recentCourses);
  }
}
let StudentDashboardComponent = /*#__PURE__*/(() => {
  class StudentDashboardComponent {
    courseService;
    cdr;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    Math = Math;
    // ────── User Info ────────────────────────────────────────────
    userName = '';
    userRole = '';
    // ────── Stats ────────────────────────────────────────────────
    totalCourses = 0;
    activeCourses = 0; // progression > 0% et < 100%
    completedCourses = 0; // progression = 100%
    // ────── Data ─────────────────────────────────────────────────
    recentCourses = [];
    loading = true;
    constructor(courseService, cdr) {
      this.courseService = courseService;
      this.cdr = cdr;
    }
    ngOnInit() {
      this.userName = localStorage.getItem('fullName') || 'Student';
      this.userRole = localStorage.getItem('role') || '';
      this.loadDashboard();
    }
    loadDashboard() {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
        courses: this.courseService.getMyEnrolledCourses().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]))),
        progress: this.courseService.getMyCourseProgress().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([])))
      }).subscribe({
        next: ({
          courses,
          progress
        }) => {
          this.totalCourses = courses.length;
          // ────── Construire map courseId → progressionPct ────────
          const progressMap = new Map();
          progress.forEach(p => {
            progressMap.set(p.courseId, p.completionPercentage ?? 0);
          });
          // ────── Calcul des stats ────────────────────────────────
          this.completedCourses = progress.filter(p => (p.completionPercentage ?? 0) >= 100).length;
          this.activeCourses = progress.filter(p => {
            const pct = p.completionPercentage ?? 0;
            return pct > 0 && pct < 100;
          }).length;
          // ────── Enrichir les cours avec progression ─────────────
          this.recentCourses = courses.slice(0, 6).map(c => ({
            ...c,
            progressPct: Math.round(progressMap.get(c.id) ?? 0)
          }));
          this.loading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loading = false;
          this.cdr.markForCheck();
        }
      });
    }
    /**
     * Résoudre l'URL de l'image du cours
     */
    getImageUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_6__.resolveCourseImage)(path);
    }
    /**
     * Obtenir la classe Bootstrap pour le badge de progression
     */
    getProgressClass(pct) {
      if (pct >= 100) return 'bg-success';
      if (pct >= 50) return 'bg-primary';
      if (pct > 0) return 'bg-warning';
      return 'bg-secondary';
    }
    /**
     * Afficher une notification douce pour continuer un cours
     */
    showContinueCourseAlert(courseName, courseId) {
      if (typeof Swal === 'undefined') return;
      Swal.fire({
        title: 'Continue Learning?',
        html: `<p>Ready to continue <strong>${courseName}</strong>?</p>`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: '📚 Let\'s Go!',
        cancelButtonText: 'Later',
        confirmButtonColor: '#5625E8',
        cancelButtonColor: '#888',
        customClass: {
          popup: 'sa-swal-popup',
          container: 'sa-swal-container'
        }
      }).then(result => {
        if (result.isConfirmed) {
          // Navigation handled by button click
        }
      });
    }
    /**
     * Congratulations pour cours complété
     */
    showCongratulations(courseName) {
      if (typeof Swal === 'undefined') return;
      Swal.fire({
        title: '🎉 Congratulations!',
        html: `<p>You have successfully completed <strong>${courseName}</strong>!</p><p class="mt-2">Great achievement! Keep learning! 💪</p>`,
        icon: 'success',
        confirmButtonText: 'Awesome!',
        confirmButtonColor: '#03C95A',
        customClass: {
          popup: 'sa-swal-popup',
          container: 'sa-swal-container'
        }
      });
    }
    static ɵfac = function StudentDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_10__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: StudentDashboardComponent,
      selectors: [["app-student-dashboard"]],
      decls: 258,
      vars: 12,
      consts: [[1, "std-kpi-row"], [1, "std-kpi-card", "std-kpi-blue", 2, "animation-delay", "0s"], [1, "std-kpi-header"], [1, "std-kpi-icon"], [1, "ti", "ti-book-2"], [1, "std-kpi-label"], ["class", "std-kpi-value", 4, "ngIf"], ["class", "spinner-border spinner-border-sm text-primary", 4, "ngIf"], [1, "std-kpi-trend", "text-primary", "mt-2"], [1, "ti", "ti-arrow-up-right"], [1, "std-kpi-card", "std-kpi-orange", 2, "animation-delay", "0.1s"], [1, "ti", "ti-rocket"], ["class", "spinner-border spinner-border-sm text-warning", 4, "ngIf"], [1, "std-kpi-trend", "text-warning", "mt-2"], [1, "ti", "ti-flame"], [1, "std-kpi-card", "std-kpi-green", 2, "animation-delay", "0.2s"], [1, "ti", "ti-trophy"], ["class", "spinner-border spinner-border-sm text-success", 4, "ngIf"], [1, "std-kpi-trend", "text-success", "mt-2"], [1, "ti", "ti-check-circle"], [1, "std-kpi-card", "std-kpi-red", 2, "animation-delay", "0.3s"], [1, "ti", "ti-status-change"], ["class", "spinner-border spinner-border-sm text-danger", 4, "ngIf"], [1, "std-kpi-trend", "text-danger", "mt-2"], [1, "ti", "ti-trending-up"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "mb-1", "fs-18", 2, "font-weight", "700"], [1, "ti", "ti-book", "me-2", 2, "color", "#5f6bf5"], [1, "text-muted", "small", "mb-0"], ["class", "btn btn-sm", "style", "background:linear-gradient(135deg,#7c8cff,#5f6bf5);color:#fff;border:none;border-radius:8px;font-weight:600", 3, "routerLink", 4, "ngIf"], ["class", "std-courses-grid mb-4", 4, "ngIf"], ["class", "std-empty-state", 4, "ngIf"], ["class", "std-courses-grid", 4, "ngIf"], [1, "row", "mt-5", "mb-5"], [1, "col-12"], [1, "std-invoices-table-card"], [1, "std-table-header"], [1, "std-table-title"], [1, "ti", "ti-receipt-2"], [1, "std-table-subtitle"], [1, "std-table-controls"], [1, "std-table-search"], ["type", "text", "placeholder", "Search invoices...", 1, "form-control"], [1, "ti", "ti-search"], [1, "btn", "btn-sm", 2, "background", "linear-gradient(135deg,#7c8cff,#5f6bf5)", "color", "#fff", "border", "none", "border-radius", "8px", "padding", "0.6rem 1rem", "font-weight", "600"], [1, "ti", "ti-download", "me-1"], [1, "std-table-wrapper"], [1, "std-invoices-table"], [2, "text-align", "right"], [1, "std-table-row"], [1, "std-course-cell"], [1, "std-course-indicator", 2, "background", "linear-gradient(135deg,#7c8cff,#5f6bf5)"], [1, "std-course-name"], [1, "std-badge-invoice"], [2, "color", "#191919", "font-size", "15px"], [1, "std-date-text"], [1, "std-badge", "std-badge-paid"], [1, "ti", "ti-circle-filled"], [1, "std-action-group"], ["href", "javascript:void(0);", "title", "Download", 1, "std-action-icon"], [1, "ti", "ti-download"], ["href", "javascript:void(0);", "title", "View Details", 1, "std-action-icon"], [1, "ti", "ti-eye"], [1, "std-course-indicator", 2, "background", "linear-gradient(135deg,#03C95A,#02a876)"], [1, "std-course-indicator", 2, "background", "linear-gradient(135deg,#06b6d4,#0891b2)"], [1, "std-course-indicator", 2, "background", "linear-gradient(135deg,#f59e0b,#d97706)"], [1, "std-course-indicator", 2, "background", "linear-gradient(135deg,#8b5cf6,#7c3aed)"], [1, "std-course-indicator", 2, "background", "linear-gradient(135deg,#fb7185,#f43f5e)"], [1, "std-table-footer"], [1, "std-footer-text"], [1, "std-pagination"], [1, "std-pagination-btn", "disabled"], [1, "ti", "ti-chevron-left"], [1, "std-pagination-btn", "active"], [1, "std-pagination-btn"], [1, "ti", "ti-chevron-right"], [1, "std-kpi-value"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "spinner-border", "spinner-border-sm", "text-warning"], [1, "spinner-border", "spinner-border-sm", "text-success"], [1, "spinner-border", "spinner-border-sm", "text-danger"], [1, "btn", "btn-sm", 2, "background", "linear-gradient(135deg,#7c8cff,#5f6bf5)", "color", "#fff", "border", "none", "border-radius", "8px", "font-weight", "600", 3, "routerLink"], [1, "ti", "ti-plus", "me-1"], [1, "std-courses-grid", "mb-4"], [1, "std-skeleton-card"], [1, "std-empty-state"], [1, "ti", "ti-inbox"], [1, "btn", 3, "routerLink"], [1, "ti", "ti-arrow-right", "me-1"], [1, "std-courses-grid"], ["class", "std-course-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "std-course-card"], [1, "std-course-img-wrap"], [3, "routerLink", "queryParams"], [1, "img-fluid", 3, "src", "alt"], [1, "badge", "std-progress-badge", 3, "ngClass"], [1, "std-course-overlay"], [1, "std-course-btn", 3, "click", "routerLink", "queryParams"], [1, "ti", "ti-play"], [1, "std-course-body"], [1, "std-course-title"], [1, "std-course-instructor"], [1, "ti", "ti-user-circle"], [1, "std-progress-section"], [1, "std-progress-label"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", 1, "progress-bar", 3, "ngClass"], [1, "std-course-footer"], ["class", "std-status-badge", 4, "ngIf"], ["class", "std-status-badge badge-new", 4, "ngIf"], [1, "std-action-btn", 3, "routerLink", "queryParams"], [1, "ti", "ti-arrow-right"], [1, "std-status-badge"], [1, "ti", "ti-check-circle", "me-1"], [1, "std-status-badge", "badge-new"], [1, "ti", "ti-new", "me-1"]],
      template: function StudentDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Total Registered");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, StudentDashboardComponent_h4_7_Template, 2, 1, "h4", 6)(8, StudentDashboardComponent_div_8_Template, 1, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "All enrolled courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10)(13, "div", 2)(14, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "In Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, StudentDashboardComponent_h4_18_Template, 2, 1, "h4", 6)(19, StudentDashboardComponent_div_19_Template, 1, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Keep learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 15)(24, "div", 2)(25, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, StudentDashboardComponent_h4_29_Template, 2, 1, "h4", 6)(30, StudentDashboardComponent_div_30_Template, 1, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Great achievement!");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 20)(35, "div", 2)(36, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Progress Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, StudentDashboardComponent_h4_40_Template, 4, 1, "h4", 6)(41, StudentDashboardComponent_div_41_Template, 1, 0, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Overall performance");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 25)(46, "div")(47, "h5", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Recently Enrolled Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Continue your learning journey with these courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, StudentDashboardComponent_a_52_Template, 3, 1, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, StudentDashboardComponent_div_53_Template, 4, 0, "div", 30)(54, StudentDashboardComponent_div_54_Template, 9, 1, "div", 31)(55, StudentDashboardComponent_div_55_Template, 2, 1, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 33)(57, "div", 34)(58, "div", 35)(59, "div", 36)(60, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Transaction History & Invoices");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "All your purchases and payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 40)(67, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "input", 42)(69, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Export ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 46)(74, "table", 47)(75, "thead")(76, "tr")(77, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Invoice ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "th", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "tbody")(90, "tr", 49)(91, "td")(92, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Build Responsive Real World Websites");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "td")(97, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "#INV001");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "td")(100, "strong", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "$200.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "td")(103, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "Jan 15, 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "td")(106, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](107, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "td", 48)(110, "div", 58)(111, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](112, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](114, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "tr", 49)(116, "td")(117, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](118, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "WordPress for Beginners - Complete Guide");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "td")(122, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "#INV002");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "td")(125, "strong", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "$310.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "td")(128, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "Feb 03, 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "td")(131, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](132, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "td", 48)(135, "div", 58)(136, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](137, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](139, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "tr", 49)(141, "td")(142, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](143, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "Information About UI/UX Design Degree");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "td")(147, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "#INV003");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "td")(150, "strong", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "$270.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "td")(153, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "Feb 18, 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "td")(156, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](157, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "td", 48)(160, "div", 58)(161, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](162, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](164, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "tr", 49)(166, "td")(167, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](168, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "Sketch from A to Z (2024)");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "td")(172, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "#INV004");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "td")(175, "strong", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](176, "$180.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "td")(178, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "Mar 05, 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "td")(181, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](182, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "td", 48)(185, "div", 58)(186, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](187, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](189, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "tr", 49)(191, "td")(192, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](193, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, "Become an app designer - Advanced UX/UI");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "td")(197, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "#INV005");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "td")(200, "strong", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201, "$220.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "td")(203, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204, "Mar 22, 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "td")(206, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](207, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](208, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "td", 48)(210, "div", 58)(211, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](212, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](214, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "tr", 49)(216, "td")(217, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](218, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](220, "Advanced JavaScript Performance & Optimization");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "td")(222, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](223, "#INV006");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](224, "td")(225, "strong", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226, "$195.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "td")(228, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, "Apr 01, 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "td")(231, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](232, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "td", 48)(235, "div", 58)(236, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](237, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](239, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](240, "div", 68)(241, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](242, "Showing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](243, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, "1 - 6");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](245, " of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](247, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, " transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "div", 70)(250, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](251, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](253, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](257, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.recentCourses.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.recentCourses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.recentCourses.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap)[_ngcontent-%COMP%];@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --white: #fff;\n  --dark: #000;\n  --black: #000;\n  --light: #F8F8F8;\n  --gray-100: #E7E7E7;\n  --gray-200: #D1D1D1;\n  --gray-300: #B0B0B0;\n  --gray-400: #888888;\n  --gray-500: #6D6D6D;\n  --gray-600: #5D5D5D;\n  --gray-700: #4F4F4F;\n  --gray-800: #3D3D3D;\n  --gray-900: #191919;\n  --light-100: #FEFEFE;\n  --light-200: #FCFCFD;\n  --light-300: #FBFBFD;\n  --light-400: #F9FAFC;\n  --light-500: #F8FAFB;\n  --light-600: #F7F9FB;\n  --light-700: #F6F8FA;\n  --light-800: #F5F7FA;\n  --light-900: #F4F6F9;\n}\n\n.dark-mode[_ngcontent-%COMP%] {\n  --white: #0D0D0D;\n  --dark: #D6DADE;\n  --black: #D6DADE;\n  --light: #0D0D0D;\n  --gray-100: #171717;\n  --gray-200: #1F2228;\n  --gray-300: #2F343C;\n  --gray-400: #9CA3AF;\n  --gray-500: #6B7280;\n  --gray-600: #4B5563;\n  --gray-700: #374151;\n  --gray-800: #C8D2E0;\n  --gray-900: #D8DFEE;\n  --light-100: #0A0A0A;\n  --light-200: #0B0B0B;\n  --light-300: #0C0C0C;\n  --light-400: #0E0E0E;\n  --light-500: #0F0F0F;\n  --light-600: #101010;\n  --light-700: #111111;\n  --light-800: #121212;\n  --light-900: #181818;\n}\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, 100% {\n    box-shadow: 0 0 8px rgba(255, 70, 103, 0.1);\n  }\n  50% {\n    box-shadow: 0 0 16px rgba(255, 70, 103, 0.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.85) rotate(-5deg);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) rotate(0);\n  }\n}\n.std-dash-header[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #eef4ff 0%, #f3fff8 55%, #fff9ef 100%);\n  border: 1px solid #e6ecfb;\n  box-shadow: 0 10px 28px rgba(95, 107, 245, 0.08);\n}\n\n.std-dash-header__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 1.1rem 1.25rem;\n}\n.std-dash-header__inner[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #24324a;\n  font-weight: 800;\n}\n.std-dash-header__inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6c88;\n  font-size: 0.92rem;\n}\n\n.std-dash-header__chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.22rem 0.66rem;\n  border-radius: 999px;\n  background: #e6edff;\n  border: 1px solid #d2deff;\n  color: #4f5ee9;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n  margin-bottom: 0.4rem;\n}\n\n.std-dash-header__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.56rem 0.95rem;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #7c8cff 0%, #5f6bf5 100%);\n  color: #fff;\n  font-size: 0.86rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.std-dash-header__btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(95, 107, 245, 0.22);\n}\n\n.std-dash-header__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.std-dash-header__glow--1[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  top: -120px;\n  right: -40px;\n  background: radial-gradient(circle, rgba(124, 140, 255, 0.2) 0%, transparent 70%);\n}\n\n.std-dash-header__glow--2[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  bottom: -120px;\n  left: -40px;\n  background: radial-gradient(circle, rgba(52, 211, 153, 0.17) 0%, transparent 70%);\n}\n\n.quiz-ans-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(135deg, #7c8cff 0%, #5f6bf5 100%) !important;\n  border: none !important;\n  border-radius: 16px;\n  box-shadow: 0 10px 40px rgba(95, 107, 245, 0.15) !important;\n  animation: _ngcontent-%COMP%_slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin-bottom: 2rem;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.15;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   img.quiz-ans-bg1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromLeft 1.2s ease-out;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   img.quiz-ans-bg2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromLeft 1.4s ease-out;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 2rem !important;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 0.5rem;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 14px;\n  margin: 0;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n  border: 2px solid rgba(255, 255, 255, 0.4) !important;\n  color: #fff !important;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.quiz-ans-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3) !important;\n  border-color: rgba(255, 255, 255, 0.6) !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n\n.std-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n  animation: _ngcontent-%COMP%_slideUp 0.8s ease-out 0.1s backwards;\n}\n@media (max-width: 575.98px) {\n  .std-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.std-kpi-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 16px;\n  padding: 1.75rem;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  animation: _ngcontent-%COMP%_popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.std-kpi-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: linear-gradient(90deg, var(--kpi-color-start, #5625E8) 0%, var(--kpi-color-end, #392C7D) 100%);\n}\n.std-kpi-card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle, rgba(var(--kpi-rgb, 86, 37, 232), 0.05) 0%, transparent 70%);\n  pointer-events: none;\n}\n.std-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.std-kpi-card[_ngcontent-%COMP%]:hover   .std-kpi-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotate(8deg);\n}\n.std-kpi-card[_ngcontent-%COMP%]:hover   .std-kpi-value[_ngcontent-%COMP%] {\n  color: var(--kpi-color-start, #5625E8);\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: linear-gradient(135deg, var(--kpi-color-start, #5625E8) 0%, var(--kpi-color-end, #392C7D) 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 28px;\n  transition: all 0.4s ease;\n  position: relative;\n  z-index: 1;\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n  color: #191919;\n  transition: all 0.3s ease;\n  position: relative;\n  z-index: 1;\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #888;\n  margin-left: 4px;\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-trend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 0.75rem;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.std-kpi-card[_ngcontent-%COMP%]   .std-kpi-trend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.std-kpi-blue[_ngcontent-%COMP%] {\n  --kpi-color-start: #7c8cff;\n  --kpi-rgb: 124,140,255;\n  --kpi-color-end: #5f6bf5;\n}\n\n.std-kpi-green[_ngcontent-%COMP%] {\n  --kpi-color-start: #34d399;\n  --kpi-rgb: 52,211,153;\n  --kpi-color-end: #10b981;\n}\n\n.std-kpi-orange[_ngcontent-%COMP%] {\n  --kpi-color-start: #fbbf24;\n  --kpi-rgb: 251,191,36;\n  --kpi-color-end: #f59e0b;\n}\n\n.std-kpi-red[_ngcontent-%COMP%] {\n  --kpi-color-start: #fb7185;\n  --kpi-rgb: 251,113,133;\n  --kpi-color-end: #f43f5e;\n}\n\n.std-hero-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #392C7D 0%, #5625E8 50%, #2D1B4D 100%);\n  border-radius: 20px;\n  padding: 3rem;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 3rem;\n  animation: _ngcontent-%COMP%_slideUp 0.8s ease-out;\n}\n.std-hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: rgba(255, 70, 103, 0.1);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n.std-hero-section[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -20%;\n  left: 5%;\n  width: 300px;\n  height: 300px;\n  background: rgba(3, 201, 90, 0.08);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(30px);\n  }\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n}\n@media (max-width: 767.98px) {\n  .std-hero-section[_ngcontent-%COMP%]   .std-hero-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1.5rem;\n  }\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-avatar[_ngcontent-%COMP%]   .std-avatar-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 4px solid rgba(255, 255, 255, 0.2);\n  object-fit: cover;\n  animation: _ngcontent-%COMP%_popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-avatar[_ngcontent-%COMP%]   .std-avatar-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 110px;\n  height: 110px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-avatar[_ngcontent-%COMP%]   .std-avatar-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 16px;\n  height: 16px;\n  background: #03C95A;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-content[_ngcontent-%COMP%]   .std-hero-greeting[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0 0 0.5rem 0;\n  font-weight: 500;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-content[_ngcontent-%COMP%]   .std-hero-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0 0 1rem 0;\n  line-height: 1.2;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-content[_ngcontent-%COMP%]   .std-hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  padding: 0.5rem 1.2rem;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 600;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  animation: _ngcontent-%COMP%_slideUp 0.8s ease-out 0.2s backwards;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n@media (max-width: 575.98px) {\n  .std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%]   .btn.btn-hero-primary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  color: #fff;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%]   .btn.btn-hero-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%]   .btn.btn-hero-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5625E8;\n  border: none;\n}\n.std-hero-section[_ngcontent-%COMP%]   .std-hero-actions[_ngcontent-%COMP%]   .btn.btn-hero-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.95);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n\n.std-courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n@media (max-width: 767.98px) {\n  .std-courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 575.98px) {\n  .std-courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.std-course-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n  animation: _ngcontent-%COMP%_popIn 0.6s ease-out;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n}\n.std-course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-12px);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);\n}\n.std-course-card[_ngcontent-%COMP%]:hover   .std-course-img-wrap[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.std-course-card[_ngcontent-%COMP%]:hover   .std-course-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.std-course-card[_ngcontent-%COMP%]:hover   .std-course-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.std-course-card[_ngcontent-%COMP%]:hover   .std-course-btn[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n  background: linear-gradient(135deg, #f0f0f0 0%, #e5e5e5 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(135deg, rgba(86, 37, 232, 0.3) 0%, rgba(255, 70, 103, 0.3) 100%);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n  z-index: 1;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-progress-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out 0.2s backwards;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-progress-badge.badge-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03C95A 0%, #02a876 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-progress-badge.badge-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625E8 0%, #392C7D 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-progress-badge.badge-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #FFC107 0%, #FF9800 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-progress-badge.badge-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #888 0%, #666 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-course-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(57, 44, 125, 0.4);\n  opacity: 0;\n  transition: all 0.4s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-course-btn[_ngcontent-%COMP%] {\n  background: #5625E8;\n  color: #fff;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n  transform: translateY(20px) scale(0.9);\n  opacity: 0;\n  cursor: pointer;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%]   .std-course-btn[_ngcontent-%COMP%]:hover {\n  background: #392C7D;\n  box-shadow: 0 8px 20px rgba(86, 37, 232, 0.3);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  position: relative;\n  z-index: 2;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-body[_ngcontent-%COMP%]   .std-course-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #191919;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-body[_ngcontent-%COMP%]   .std-course-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  transition: color 0.3s ease;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-body[_ngcontent-%COMP%]   .std-course-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #5625E8;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-body[_ngcontent-%COMP%]   .std-course-instructor[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n  background: rgba(0, 0, 0, 0.01);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%]   .std-progress-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 0.75rem;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #03C95A 0%, #02a876 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.bg-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #5625E8 0%, #392C7D 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-progress-section[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.bg-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #FFC107 0%, #FF9800 100%);\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  gap: 0.75rem;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-footer[_ngcontent-%COMP%]   .std-status-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0.4rem 0.8rem;\n  border-radius: 8px;\n  background: rgba(3, 201, 90, 0.1);\n  color: #03C95A;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-footer[_ngcontent-%COMP%]   .std-status-badge.badge-new[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #FFC107;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-footer[_ngcontent-%COMP%]   .std-action-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: linear-gradient(135deg, #5625E8 0%, #392C7D 100%);\n  border: none;\n  color: #fff;\n  padding: 0.6rem 1.2rem;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.std-course-card[_ngcontent-%COMP%]   .std-course-footer[_ngcontent-%COMP%]   .std-action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(86, 37, 232, 0.4);\n}\n\n.std-empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: linear-gradient(135deg, rgba(86, 37, 232, 0.02) 0%, rgba(255, 70, 103, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(0, 0, 0, 0.08);\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease-out;\n}\n.std-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #5625E8;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.std-empty-state[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #191919;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.std-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n  margin-bottom: 1.5rem;\n}\n.std-empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: linear-gradient(135deg, #5625E8 0%, #392C7D 100%);\n  color: #fff;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.std-empty-state[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(86, 37, 232, 0.3);\n}\n\n.std-skeleton-card[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n  border-radius: 16px;\n  height: 350px;\n}\n\n.std-invoices-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.04);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #5625E8;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #191919;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]:hover {\n  background: rgba(86, 37, 232, 0.02);\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-weight: 600;\n  color: #191919;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-info[_ngcontent-%COMP%]   .std-invoice-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 12px;\n  color: #888;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-info[_ngcontent-%COMP%]   .std-invoice-meta[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.04);\n  color: #191919;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-status[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.4rem 0.8rem;\n  border-radius: 6px;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-status[_ngcontent-%COMP%]   .badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.15);\n  color: #03C95A;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-status[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.std-invoices-card[_ngcontent-%COMP%]   .std-invoice-list[_ngcontent-%COMP%]   .std-invoice-item[_ngcontent-%COMP%]   .std-invoice-status[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]:hover {\n  background: #5625E8;\n  color: #fff;\n}\n\n.std-invoices-table-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease-out;\n}\n\n.std-table-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2rem;\n  gap: 1.5rem;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.04);\n  background: linear-gradient(135deg, rgba(86, 37, 232, 0.02) 0%, rgba(255, 70, 103, 0.02) 100%);\n}\n@media (max-width: 767.98px) {\n  .std-table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n.std-table-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.std-table-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #5625E8;\n}\n.std-table-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #191919;\n}\n\n.std-table-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #888;\n  margin-top: 0.25rem;\n}\n\n.std-table-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-left: auto;\n}\n@media (max-width: 767.98px) {\n  .std-table-controls[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n\n.std-table-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.std-table-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 13px;\n  transition: all 0.3s ease;\n}\n.std-table-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #5625E8;\n  box-shadow: 0 0 0 3px rgba(86, 37, 232, 0.1);\n  outline: none;\n}\n.std-table-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.std-table-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.8rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #888;\n  font-size: 16px;\n}\n\n.std-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: #fff;\n}\n.std-table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.std-table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.std-table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n.std-table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.std-invoices-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.std-invoices-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.06);\n}\n.std-invoices-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.8px;\n  white-space: nowrap;\n}\n.std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n}\n.std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(86, 37, 232, 0.02);\n}\n.std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .std-action-group[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.2rem 1.25rem;\n  color: #191919;\n  vertical-align: middle;\n}\n\n.std-table-row[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n\n.std-course-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.std-course-cell[_ngcontent-%COMP%]   .std-course-indicator[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 40px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.std-course-cell[_ngcontent-%COMP%]   .std-course-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #191919;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.std-badge-invoice[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n  padding: 0.4rem 0.8rem;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 12px;\n  font-family: \"Courier New\", monospace;\n}\n\n.std-date-text[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 13px;\n}\n\n.std-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 0.9rem;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.std-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.std-badge.std-badge-paid[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.15);\n  color: #03C95A;\n}\n.std-badge.std-badge-processing[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.15);\n  color: #FFC107;\n}\n.std-badge.std-badge-failed[_ngcontent-%COMP%] {\n  background: rgba(255, 70, 103, 0.15);\n  color: #FF4667;\n}\n\n.std-action-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0.6;\n  transition: opacity 0.3s ease;\n}\n\n.std-action-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n  color: #5625E8;\n  transition: all 0.3s ease;\n  font-size: 16px;\n  text-decoration: none;\n}\n.std-action-icon[_ngcontent-%COMP%]:hover {\n  background: #5625E8;\n  color: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(86, 37, 232, 0.3);\n}\n.std-action-icon[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.std-table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  background: #f8f8f8;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n}\n@media (max-width: 767.98px) {\n  .std-table-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 1rem;\n    text-align: center;\n  }\n}\n\n.std-footer-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n}\n.std-footer-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #191919;\n  font-weight: 600;\n}\n\n.std-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.std-pagination-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n  color: #666;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.std-pagination-btn[_ngcontent-%COMP%]:hover:not(.disabled):not(.active) {\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n  border-color: #5625E8;\n}\n.std-pagination-btn.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625E8, #392C7D);\n  color: #fff;\n  border-color: #5625E8;\n}\n.std-pagination-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.std-pagination-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n@media (max-width: 991.98px) {\n  .std-hero-section[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .std-course-card[_ngcontent-%COMP%]   .std-course-img-wrap[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .std-invoices-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .std-invoices-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .std-kpi-card[_ngcontent-%COMP%]   .std-kpi-value[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .std-table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .std-table-header[_ngcontent-%COMP%]   .std-table-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .std-table-header[_ngcontent-%COMP%]   .std-table-controls[_ngcontent-%COMP%]   .std-table-search[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .std-invoices-table[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .std-invoices-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n  }\n  .std-invoices-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n  }\n  .std-course-cell[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.3rem;\n  }\n  .std-course-cell[_ngcontent-%COMP%]   .std-course-name[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .std-action-group[_ngcontent-%COMP%] {\n    gap: 0.3rem;\n  }\n  .std-action-icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 14px;\n  }\n}\n.std-course-btn[_ngcontent-%COMP%]:hover {\n  animation: _ngcontent-%COMP%_bounce 0.5s ease-in-out 1;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n}\n\n.std-kpi-card[_ngcontent-%COMP%]:active {\n  transform: translateY(-4px) scale(0.98);\n}\n\n.std-invoice-item[_ngcontent-%COMP%]:active {\n  background: rgba(86, 37, 232, 0.05);\n}\n\n.std-kpi-card[_ngcontent-%COMP%]:focus-within, \n.std-course-card[_ngcontent-%COMP%]:focus-within, \n.std-invoices-card[_ngcontent-%COMP%]:focus-within {\n  outline: 2px solid #5625E8;\n  outline-offset: 2px;\n}\n\n@media print {\n  .std-courses-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .std-hero-section[_ngcontent-%COMP%] {\n    background: transparent;\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3R1ZGVudC9zdHVkZW50LWRhc2hib2FyZC9zdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy91dGlscy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0toQjtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FESkY7O0FDTUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FETEY7O0FBL0NBOzt5RUFBQTtBQUtBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFnREY7RUE5Q0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFnREY7QUFDRjtBQTdDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBK0NGO0VBN0NBO0lBQ0UsVUFBQTtJQUNB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c3NldHMvc2Nzcy91dGlscy92YXJpYWJsZXNcIjtcclxuQHVzZSBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3V0aWxzL21peGluc1wiO1xyXG5cclxuLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbiAgIFNUVURFTlQgREFTSEJPQVJEIMOiwoDClCBNb2Rlcm4gUHJlbWl1bSBEZXNpZ24gd2l0aCBBbmltYXRpb25zXHJcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIEFOSU1BVElPTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVJbkZyb21MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdEluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoMC45NSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMDBweCAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMDBweCAwOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsb3cge1xyXG4gIDAlLCAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDI1NSwgNzAsIDEwMywgMC4xKTsgfVxyXG4gIDUwJSB7IGJveC1zaGFkb3c6IDAgMCAxNnB4IHJnYmEoMjU1LCA3MCwgMTAzLCAwLjMpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwb3BJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSkgcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIFNUVURFTlQgREFTSEJPQVJEIEhFQURFUiAoTElHSFQgVEhFTUUpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLWRhc2gtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZWY0ZmYgMCUsICNmM2ZmZjggNTUlLCAjZmZmOWVmIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmVjZmI7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSg5NSwgMTA3LCAyNDUsIDAuMDgpO1xyXG59XHJcblxyXG4uc3RkLWRhc2gtaGVhZGVyX19pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogMS4xcmVtIDEuMjVyZW07XHJcblxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjMjQzMjRhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM1ZjZjODg7XHJcbiAgICBmb250LXNpemU6IDAuOTJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3RkLWRhc2gtaGVhZGVyX19jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMjJyZW0gMC42NnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiAjZTZlZGZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmRlZmY7XHJcbiAgY29sb3I6ICM0ZjVlZTk7XHJcbiAgZm9udC1zaXplOiAwLjcycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG59XHJcblxyXG4uc3RkLWRhc2gtaGVhZGVyX19idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41NnJlbSAwLjk1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjOGNmZiAwJSwgIzVmNmJmNSAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuODZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoOTUsIDEwNywgMjQ1LCAwLjIyKTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGQtZGFzaC1oZWFkZXJfX2dsb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGQtZGFzaC1oZWFkZXJfX2dsb3ctLTEge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIHRvcDogLTEyMHB4O1xyXG4gIHJpZ2h0OiAtNDBweDtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDEyNCwgMTQwLCAyNTUsIDAuMikgMCUsIHRyYW5zcGFyZW50IDcwJSk7XHJcbn1cclxuXHJcbi5zdGQtZGFzaC1oZWFkZXJfX2dsb3ctLTIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvdHRvbTogLTEyMHB4O1xyXG4gIGxlZnQ6IC00MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNTIsIDIxMSwgMTUzLCAwLjE3KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIFFVSVpDQVJEIFBSRU1JVU0gKExFR0FDWSkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5xdWl6LWFucy1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2M4Y2ZmIDAlLCAjNWY2YmY1IDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDk1LCAxMDcsIDI0NSwgMC4xNSkgIWltcG9ydGFudDtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBcclxuICBpbWcge1xyXG4gICAgb3BhY2l0eTogMC4xNTtcclxuICAgICYucXVpei1hbnMtYmcxIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZUluRnJvbUxlZnQgMS4ycyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgICYucXVpei1hbnMtYmcyIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZUluRnJvbUxlZnQgMS40cyBlYXNlLW91dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBhZGRpbmc6IDJyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgS1BJIENBUkRTIFJPVyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1rcGktcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC44cyBlYXNlLW91dCAwLjFzIGJhY2t3YXJkcztcclxuXHJcbiAgQGluY2x1ZGUgbWl4aW5zLnJlc3BvbmQtYmVsb3coc20pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIEtQSSBDQVJEIEJhc2Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQta3BpLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxLjc1cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4gIGFuaW1hdGlvbjogcG9wSW4gMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIFxyXG4gICAgICB2YXIoLS1rcGktY29sb3Itc3RhcnQsICM1NjI1RTgpIDAlLFxyXG4gICAgICB2YXIoLS1rcGktY29sb3ItZW5kLCAjMzkyQzdEKSAxMDAlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTUwJTtcclxuICAgIHJpZ2h0OiAtNTAlO1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKHZhcigtLWtwaS1yZ2IsIDg2LDM3LDIzMiksIDAuMDUpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAuc3RkLWtwaS1pY29uIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KSByb3RhdGUoOGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZC1rcGktdmFsdWUge1xyXG4gICAgICBjb2xvcjogdmFyKC0ta3BpLWNvbG9yLXN0YXJ0LCAjNTYyNUU4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGQta3BpLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuc3RkLWtwaS1pY29uIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxcclxuICAgICAgdmFyKC0ta3BpLWNvbG9yLXN0YXJ0LCAjNTYyNUU4KSAwJSxcclxuICAgICAgdmFyKC0ta3BpLWNvbG9yLWVuZCwgIzM5MkM3RCkgMTAwJVxyXG4gICAgKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5zdGQta3BpLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuc3RkLWtwaS12YWx1ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzE5MTkxOTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGQta3BpLXRyZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCBLUEkgQ09MT1IgVkFSSUFOVFMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQta3BpLWJsdWUgICB7IC0ta3BpLWNvbG9yLXN0YXJ0OiAjN2M4Y2ZmOyAtLWtwaS1yZ2I6IDEyNCwxNDAsMjU1OyAtLWtwaS1jb2xvci1lbmQ6ICM1ZjZiZjU7IH1cclxuLnN0ZC1rcGktZ3JlZW4gIHsgLS1rcGktY29sb3Itc3RhcnQ6ICMzNGQzOTk7IC0ta3BpLXJnYjogNTIsMjExLDE1MzsgIC0ta3BpLWNvbG9yLWVuZDogIzEwYjk4MTsgfVxyXG4uc3RkLWtwaS1vcmFuZ2UgeyAtLWtwaS1jb2xvci1zdGFydDogI2ZiYmYyNDsgLS1rcGktcmdiOiAyNTEsMTkxLDM2OyAgLS1rcGktY29sb3ItZW5kOiAjZjU5ZTBiOyB9XHJcbi5zdGQta3BpLXJlZCAgICB7IC0ta3BpLWNvbG9yLXN0YXJ0OiAjZmI3MTg1OyAtLWtwaS1yZ2I6IDI1MSwxMTMsMTMzOyAtLWtwaS1jb2xvci1lbmQ6ICNmNDNmNWU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIFNFQ1RJT04gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQtaGVyby1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzkyQzdEIDAlLCAjNTYyNUU4IDUwJSwgIzJEMUI0RCAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC44cyBlYXNlLW91dDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MCU7XHJcbiAgICByaWdodDogLTEwJTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzAsIDEwMywgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogZmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMjAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzLCAyMDEsIDkwLCAwLjA4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogZmxvYXQgOHMgZWFzZS1pbi1vdXQgMXMgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZsb2F0IHtcclxuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTsgfVxyXG4gIH1cclxuXHJcbiAgLnN0ZC1oZXJvLWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMi41cmVtO1xyXG5cclxuICAgIEBpbmNsdWRlIG1peGlucy5yZXNwb25kLWJlbG93KG1kKSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RkLWhlcm8tYXZhdGFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgIC5zdGQtYXZhdGFyLWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBhbmltYXRpb246IHBvcEluIDAuOHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGQtYXZhdGFyLXJpbmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG5cclxuICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZC1hdmF0YXItcHVsc2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTRweDtcclxuICAgICAgcmlnaHQ6IC00cHg7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwM0M5NUE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGQtaGVyby1jb250ZW50IHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgLnN0ZC1oZXJvLWdyZWV0aW5nIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RkLWhlcm8tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RkLWhlcm8tYmFkZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjhzIGVhc2Utb3V0IDAuMnMgYmFja3dhcmRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0ZC1oZXJvLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBtaXhpbnMucmVzcG9uZC1iZWxvdyhzbSkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDAuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICAgICYuYnRuLWhlcm8tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1oZXJvLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzU2MjVFODtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIENPVVJTRVMgR1JJRCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1jb3Vyc2VzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xyXG4gIGdhcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICBAaW5jbHVkZSBtaXhpbnMucmVzcG9uZC1iZWxvdyhtZCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtaXhpbnMucmVzcG9uZC1iZWxvdyhzbSkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgQ09VUlNFIENBUkQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQtY291cnNlLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4gIGFuaW1hdGlvbjogcG9wSW4gMC42cyBlYXNlLW91dDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cclxuICAgIC5zdGQtY291cnNlLWltZy13cmFwIHtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGQtY291cnNlLW92ZXJsYXkge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RkLWNvdXJzZS1idG4ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb3Vyc2UgSW1hZ2VcclxuICAuc3RkLWNvdXJzZS1pbWctd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGYwZjAgMCUsICNlNWU1ZTUgMTAwJSk7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGluc2V0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDg2LCAzNywgMjMyLCAwLjMpIDAlLCByZ2JhKDI1NSwgNzAsIDEwMywgMC4zKSAxMDAlKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2dyZXNzIEJhZGdlXHJcbiAgICAuc3RkLXByb2dyZXNzLWJhZGdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEycHg7XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjVzIGVhc2Utb3V0IDAuMnMgYmFja3dhcmRzO1xyXG5cclxuICAgICAgJi5iYWRnZS1zdWNjZXNzIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzQzk1QSAwJSwgIzAyYTg3NiAxMDAlKTsgfVxyXG4gICAgICAmLmJhZGdlLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTYyNUU4IDAlLCAjMzkyQzdEIDEwMCUpOyB9XHJcbiAgICAgICYuYmFkZ2Utd2FybmluZyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkMxMDcgMCUsICNGRjk4MDAgMTAwJSk7IH1cclxuICAgICAgJi5iYWRnZS1zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODg4IDAlLCAjNjY2IDEwMCUpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3ZlcmxheSBCdXR0b25cclxuICAgIC5zdGQtY291cnNlLW92ZXJsYXkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGluc2V0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA0NCwgMTI1LCAwLjQpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RkLWNvdXJzZS1idG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTYyNUU4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKDAuOSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzOTJDN0Q7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDg2LCAzNywgMjMyLCAwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb3Vyc2UgQ29udGVudFxyXG4gIC5zdGQtY291cnNlLWJvZHkge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuXHJcbiAgICAuc3RkLWNvdXJzZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMxOTE5MTk7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAuNzVyZW0gMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzU2MjVFODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RkLWNvdXJzZS1pbnN0cnVjdG9yIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQcm9ncmVzcyBCYXJcclxuICAuc3RkLXByb2dyZXNzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMSk7XHJcblxyXG4gICAgLnN0ZC1wcm9ncmVzcy1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcblxyXG4gICAgICAgICYuYmctc3VjY2VzcyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAzQzk1QSAwJSwgIzAyYTg3NiAxMDAlKTsgfVxyXG4gICAgICAgICYuYmctcHJpbWFyeSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzU2MjVFOCAwJSwgIzM5MkM3RCAxMDAlKTsgfVxyXG4gICAgICAgICYuYmctd2FybmluZyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGQzEwNyAwJSwgI0ZGOTgwMCAxMDAlKTsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBY3Rpb24gRm9vdGVyXHJcbiAgLnN0ZC1jb3Vyc2UtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcblxyXG4gICAgLnN0ZC1zdGF0dXMtYmFkZ2Uge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAyMDEsIDkwLCAwLjEpO1xyXG4gICAgICBjb2xvcjogIzAzQzk1QTtcclxuXHJcbiAgICAgICYuYmFkZ2UtbmV3IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjRkZDMTA3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZC1hY3Rpb24tYnRuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NjI1RTggMCUsICMzOTJDN0QgMTAwJSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC40cmVtO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg4NiwgMzcsIDIzMiwgMC40KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLWVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoODYsIDM3LCAyMzIsIDAuMDIpIDAlLCByZ2JhKDI1NSwgNzAsIDEwMywgMC4wMikgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC42cyBlYXNlLW91dDtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBjb2xvcjogIzU2MjVFODtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBjb2xvcjogIzE5MTkxOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTYyNUU4IDAlLCAjMzkyQzdEIDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoODYsIDM3LCAyMzIsIDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgTE9BRElORyBTS0VMRVRPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1za2VsZXRvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MGRlZyxcclxuICAgICNmMGYwZjAgMCUsXHJcbiAgICAjZTBlMGUwIDUwJSxcclxuICAgICNmMGYwZjAgMTAwJVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDJzIGluZmluaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIElOVk9JQ0UvUkVDRUlQVFMgU0VDVElPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1pbnZvaWNlcy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiAgLnN0ZC1pbnZvaWNlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjNTYyNUU4O1xyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogIzE5MTkxOTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGQtaW52b2ljZS1saXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAuc3RkLWludm9pY2UtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDg2LCAzNywgMjMyLCAwLjAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZC1pbnZvaWNlLWluZm8ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMTkxOTE5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0ZC1pbnZvaWNlLW1ldGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzg4ODtcclxuXHJcbiAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC42cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTkxOTE5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZC1pbnZvaWNlLXN0YXR1cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICAgICAgLmJhZGdlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuICAgICAgICAgICYuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMjAxLCA5MCwgMC4xNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDNDOTVBO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbi1pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTYyNUU4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCBJTlZPSUNFUyBUQUJMRSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1pbnZvaWNlcy10YWJsZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC42cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnN0ZC10YWJsZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBnYXA6IDEuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDg2LCAzNywgMjMyLCAwLjAyKSAwJSwgcmdiYSgyNTUsIDcwLCAxMDMsIDAuMDIpIDEwMCUpO1xyXG5cclxuICBAaW5jbHVkZSBtaXhpbnMucmVzcG9uZC1iZWxvdyhtZCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGQtdGFibGUtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICM1NjI1RTg7XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxOTE5MTk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RkLXRhYmxlLXN1YnRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLnN0ZC10YWJsZS1jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gIEBpbmNsdWRlIG1peGlucy5yZXNwb25kLWJlbG93KG1kKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnN0ZC10YWJsZS1zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW0gMC43cmVtIDIuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1NjI1RTg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDg2LCAzNywgMjMyLCAwLjEpO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICNiYmI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDAuOHJlbTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgVEFCTEUgV1JBUFBFUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC10YWJsZS13cmFwcGVyIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCBUQUJMRSBTVFlMRVMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQtaW52b2ljZXMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRib2R5IHtcclxuICAgIHRyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODYsIDM3LCAyMzIsIDAuMDIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGQtYWN0aW9uLWdyb3VwIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEuMnJlbSAxLjI1cmVtO1xyXG4gICAgICBjb2xvcjogIzE5MTkxOTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCBUQUJMRSBST1cgJiBDRUxMUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC10YWJsZS1yb3cge1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc3RkLWNvdXJzZS1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG5cclxuICAuc3RkLWNvdXJzZS1pbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLnN0ZC1jb3Vyc2UtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxOTE5MTk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLnN0ZC1iYWRnZS1pbnZvaWNlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4NiwgMzcsIDIzMiwgMC4xKTtcclxuICBjb2xvcjogIzU2MjVFODtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uc3RkLWRhdGUtdGV4dCB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uc3RkLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC40cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjlyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi5zdGQtYmFkZ2UtcGFpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDIwMSwgOTAsIDAuMTUpO1xyXG4gICAgY29sb3I6ICMwM0M5NUE7XHJcbiAgfVxyXG5cclxuICAmLnN0ZC1iYWRnZS1wcm9jZXNzaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMTUpO1xyXG4gICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgfVxyXG5cclxuICAmLnN0ZC1iYWRnZS1mYWlsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDcwLCAxMDMsIDAuMTUpO1xyXG4gICAgY29sb3I6ICNGRjQ2Njc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgQUNUSU9OIEdST1VQIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLWFjdGlvbi1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zdGQtYWN0aW9uLWljb24ge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6ICM1NjI1RTg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NjI1RTg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg4NiwgMzcsIDIzMiwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgVEFCTEUgRk9PVEVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLXRhYmxlLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuICBAaW5jbHVkZSBtaXhpbnMucmVzcG9uZC1iZWxvdyhtZCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnN0ZC1mb290ZXItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG5cclxuICBzdHJvbmcge1xyXG4gICAgY29sb3I6ICMxOTE5MTk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIFBBR0lOQVRJT04gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQtcGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RkLXBhZ2luYXRpb24tYnRuIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzY2NjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoLmFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4NiwgMzcsIDIzMiwgMC4xKTtcclxuICAgIGNvbG9yOiAjNTYyNUU4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTYyNUU4O1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2MjVFOCwgIzM5MkM3RCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzU2MjVFODtcclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBpbmNsdWRlIG1peGlucy5yZXNwb25kLWJlbG93KGxnKSB7XHJcbiAgLnN0ZC1oZXJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcblxyXG4gIC5zdGQtY291cnNlLWNhcmQge1xyXG4gICAgLnN0ZC1jb3Vyc2UtaW1nLXdyYXAge1xyXG4gICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0ZC1pbnZvaWNlcy10YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgdGhlYWQgdGgsXHJcbiAgICB0Ym9keSB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1peGlucy5yZXNwb25kLWJlbG93KG1kKSB7XHJcbiAgLnN0ZC1rcGktY2FyZCB7XHJcbiAgICAuc3RkLWtwaS12YWx1ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGQtdGFibGUtaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnN0ZC10YWJsZS1jb250cm9scyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnN0ZC10YWJsZS1zZWFyY2gge1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0ZC1pbnZvaWNlcy10YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcblxyXG4gICAgdGhlYWQgdGgge1xyXG4gICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgdGJvZHkgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RkLWNvdXJzZS1jZWxsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC4zcmVtO1xyXG5cclxuICAgIC5zdGQtY291cnNlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RkLWFjdGlvbi1ncm91cCB7XHJcbiAgICBnYXA6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gIC5zdGQtYWN0aW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgTUlDUk8tSU5URVJBQ1RJT05TIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLWNvdXJzZS1idG46aG92ZXIge1xyXG4gIGFuaW1hdGlvbjogYm91bmNlIDAuNXMgZWFzZS1pbi1vdXQgMTtcclxuXHJcbiAgQGtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTsgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0ZC1rcGktY2FyZDphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgwLjk4KTtcclxufVxyXG5cclxuLnN0ZC1pbnZvaWNlLWl0ZW06YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDg2LCAzNywgMjMyLCAwLjA1KTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIEFDQ0VTU0lCSUxJVFkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdGQta3BpLWNhcmQsXHJcbi5zdGQtY291cnNlLWNhcmQsXHJcbi5zdGQtaW52b2ljZXMtY2FyZCB7XHJcbiAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM1NjI1RTg7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAIFBSSU5UIFNUWUxFUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuQG1lZGlhIHByaW50IHtcclxuICAuc3RkLWNvdXJzZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcblxyXG4gIC5zdGQtaGVyby1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcbn1cclxuIiwiQHVzZSBcInNhc3M6Y29sb3JcIjtcbi8vIEZvbnQgaW1wb3J0XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjppdGFsLG9wc3osd2dodEAwLDE0Li4zMiwxMDAuLjkwMDsxLDE0Li4zMiwxMDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcblxuXG46cm9vdCB7XG4gIC0td2hpdGU6ICNmZmY7XG4gIC0tZGFyazogIzAwMDtcbiAgLS1ibGFjazogIzAwMDtcbiAgLS1saWdodDogI0Y4RjhGODtcblxuICAtLWdyYXktMTAwOiAjRTdFN0U3O1xuICAtLWdyYXktMjAwOiAjRDFEMUQxO1xuICAtLWdyYXktMzAwOiAjQjBCMEIwO1xuICAtLWdyYXktNDAwOiAjODg4ODg4O1xuICAtLWdyYXktNTAwOiAjNkQ2RDZEO1xuICAtLWdyYXktNjAwOiAjNUQ1RDVEO1xuICAtLWdyYXktNzAwOiAjNEY0RjRGO1xuICAtLWdyYXktODAwOiAjM0QzRDNEO1xuICAtLWdyYXktOTAwOiAjMTkxOTE5O1xuICBcbiAgLS1saWdodC0xMDA6ICNGRUZFRkU7XG4gIC0tbGlnaHQtMjAwOiAjRkNGQ0ZEO1xuICAtLWxpZ2h0LTMwMDogI0ZCRkJGRDtcbiAgLS1saWdodC00MDA6ICNGOUZBRkM7XG4gIC0tbGlnaHQtNTAwOiAjRjhGQUZCO1xuICAtLWxpZ2h0LTYwMDogI0Y3RjlGQjtcbiAgLS1saWdodC03MDA6ICNGNkY4RkE7XG4gIC0tbGlnaHQtODAwOiAjRjVGN0ZBO1xuICAtLWxpZ2h0LTkwMDogI0Y0RjZGOTtcbn1cbi5kYXJrLW1vZGUge1xuICAtLXdoaXRlOiAjMEQwRDBEO1xuICAtLWRhcms6ICNENkRBREU7XG4gIC0tYmxhY2s6ICNENkRBREU7XG4gIC0tbGlnaHQ6ICMwRDBEMEQ7XG5cbiAgLS1ncmF5LTEwMDogIzE3MTcxNztcbiAgLS1ncmF5LTIwMDogIzFGMjIyODtcbiAgLS1ncmF5LTMwMDogIzJGMzQzQztcbiAgLS1ncmF5LTQwMDogIzlDQTNBRjtcbiAgLS1ncmF5LTUwMDogIzZCNzI4MDtcbiAgLS1ncmF5LTYwMDogIzRCNTU2MztcbiAgLS1ncmF5LTcwMDogIzM3NDE1MTtcbiAgLS1ncmF5LTgwMDogI0M4RDJFMDtcbiAgLS1ncmF5LTkwMDogI0Q4REZFRTtcbiAgXG4gIC0tbGlnaHQtMTAwOiAjMEEwQTBBO1xuICAtLWxpZ2h0LTIwMDogIzBCMEIwQjtcbiAgLS1saWdodC0zMDA6ICMwQzBDMEM7XG4gIC0tbGlnaHQtNDAwOiAjMEUwRTBFO1xuICAtLWxpZ2h0LTUwMDogIzBGMEYwRjtcbiAgLS1saWdodC02MDA6ICMxMDEwMTA7XG4gIC0tbGlnaHQtNzAwOiAjMTExMTExO1xuICAtLWxpZ2h0LTgwMDogIzEyMTIxMjtcbiAgLS1saWdodC05MDA6ICMxODE4MTg7XG5cbn1cblxuLy8gQmFzZSBGb250XG4kZm9udC1zaXplLWJhc2U6IDE0cHg7XG4kZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAuODc1O1xuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNTtcbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyO1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiBib2xkZXI7XG5cbi8vIEZvbnQgRmFtaWx5XG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtYXdlc29tZTogXCJGb250YXdlc29tZVwiO1xuXHRcbi8vIFRoZW1lIENvbG9ycyBWYXJpYWJsZXNcbiRwcmltYXJ5OiAjMzkyQzdEO1xuJHByaW1hcnktaG92ZXI6ICMyNDFCNEI7XG4kc2Vjb25kYXJ5OiAjRkY0NjY3O1xuJHNlY29uZGFyeS1ob3ZlcjogI0VEMTE0MztcbiRzdWNjZXNzOiAjMDNDOTVBO1xuJHN1Y2Nlc3MtaG92ZXI6IGNvbG9yLmFkanVzdCgkc3VjY2VzcywgJGxpZ2h0bmVzczogLTEwJSk7XG4kaW5mbzogIzU2MjVFODtcbiRpbmZvLWhvdmVyOiBjb2xvci5hZGp1c3QoJGluZm8sICRsaWdodG5lc3M6IC0xMCUpO1xuJHdhcm5pbmc6ICNGRkMxMDc7XG4kd2FybmluZy1ob3ZlcjogY29sb3IuYWRqdXN0KCR3YXJuaW5nLCAkbGlnaHRuZXNzOiAtMTAlKTtcbiRkYW5nZXI6ICNFNzBEMEQ7XG4kZGFuZ2VyLWhvdmVyOiBjb2xvci5hZGp1c3QoJGRhbmdlciwgJGxpZ2h0bmVzczogLTEwJSk7XG4kZGFyazogdmFyKC0tZGFyayk7XG4kZGFyay1ob3ZlcjogIzA2MTQyMztcbiRsaWdodDogdmFyKC0tbGlnaHQpO1xuJGxpZ2h0LWhvdmVyOiAjQThBQUIyO1xuJHdoaXRlOiB2YXIoLS13aGl0ZSk7XG4kYmxhY2s6IHZhcigtLWJsYWNrKTtcbiRwdXJwbGU6ICNBQjQ3QkM7XG4kcGluazogI0ZEMzk5NTtcbiRza3libHVlOiAjMERDQUYwO1xuJHRlYWw6ICMwMmE4YjU7XG4kbGlnaC1ncmVlbjogIzBERDNBMztcblxuJGRhcmstZ3JlZW46ICMxMTE5MjY7XG4kbmlnaHQtYmx1ZTogIzBGMEY0MTtcbiRkYXJrLWdyYXk6ICMyRTJFNDg7XG4kcm95YWwtYmx1ZTogIzAwMzlDNjtcbiRpbmRpZ286ICMzOTE2OTQ7XG4kZGFya2FxdWE6ICMxMTZENkU7XG4kd2hpdGVyb2NrOiAjRjBFNEQ3O1xuJHJvY2tibHVlOiAjOENCOUJEO1xuJGJsdWVoYXplOiAjQjVDMEQwO1xuJGJyaWdodGJsdWU6ICAjMjA2NkZGO1xuJGx1bmFyZ3JlZW46ICMzNjVFMzI7XG4kbGF2ZW5kYXI6ICM2NzNBQjc7XG4kbWFnZW50YTogI0U4M0U4QztcbiRjaHJvbWV5ZWxsb3c6ICNGRkI1NEE7XG4kbGF2YXJlZDogI0RDMjYyNjtcbiRibGFja3BlYXJsOiAjMDgwODIxO1xuJG1hcm9vbjogIzcxMDAzNDtcbiRibHVlZ2VtOiAjM0UxQzk1O1xuJGZpcmVmbHk6ICMwNTMzMzM7XG5cbiR2aW9sZXQ6IHJlZDtcbiRvcmFuZ2U6IG9yYW5nZTtcbiRncmVlbjogZ3JlZW47XG4kcmVkOiByZWQ7XG5cbi8vIFByaW1hcnlcbiRwcmltYXJ5LTEwMDogI0Q2RDRFNDtcbiRwcmltYXJ5LTIwMDogI0MyQkVENjtcbiRwcmltYXJ5LTMwMDogI0FFQTlDOTtcbiRwcmltYXJ5LTQwMDogIzlBOTNCQjtcbiRwcmltYXJ5LTUwMDogIzg1N0RBRDtcbiRwcmltYXJ5LTYwMDogIzcxNjhBMDtcbiRwcmltYXJ5LTcwMDogIzVENTI5MjtcbiRwcmltYXJ5LTgwMDogIzQ4M0Q4NTtcbiRwcmltYXJ5LTkwMDogIzM0Mjc3NztcblxuLy8gU2Vjb25kYXJ5XG4kc2Vjb25kYXJ5LTEwMDogI0ZGREFFMDtcbiRzZWNvbmRhcnktMjAwOiAjRkZDOEQxO1xuJHNlY29uZGFyeS0zMDA6ICNGRkI1QzE7XG4kc2Vjb25kYXJ5LTQwMDogI0ZGQTNCMjtcbiRzZWNvbmRhcnktNTAwOiAjRkY5MEEzO1xuJHNlY29uZGFyeS02MDA6ICNGRjdFOTM7XG4kc2Vjb25kYXJ5LTcwMDogI0ZGNTk3NDtcbiRzZWNvbmRhcnktODAwOiAjRkY1OTc0O1xuJHNlY29uZGFyeS05MDA6ICNGRjQ2NjU7XG5cbi8vIFBpbmtcbiRwaW5rLTEwMDogI0ZGREJFQztcbiRwaW5rLTIwMDogI0ZFQ0FFMztcbiRwaW5rLTMwMDogI0ZFQjhEOTtcbiRwaW5rLTQwMDogI0ZFQTZEMDtcbiRwaW5rLTUwMDogI0ZFOTRDNjtcbiRwaW5rLTYwMDogI0ZFODJCRDtcbiRwaW5rLTcwMDogI0ZENzFCMztcbiRwaW5rLTgwMDogI0ZENUZBQTtcbiRwaW5rLTkwMDogI0ZENERBMDtcblxuLy8gTGlnaHRcbiRsaWdodC0xMDA6IHZhcigtLWxpZ2h0LTEwMCk7XG4kbGlnaHQtMjAwOiB2YXIoLS1saWdodC0yMDApO1xuJGxpZ2h0LTMwMDogdmFyKC0tbGlnaHQtMzAwKTtcbiRsaWdodC00MDA6IHZhcigtLWxpZ2h0LTQwMCk7XG4kbGlnaHQtNTAwOiB2YXIoLS1saWdodC01MDApO1xuJGxpZ2h0LTYwMDogdmFyKC0tbGlnaHQtNjAwKTtcbiRsaWdodC03MDA6IHZhcigtLWxpZ2h0LTcwMCk7XG4kbGlnaHQtODAwOiB2YXIoLS1saWdodC04MDApO1xuJGxpZ2h0LTkwMDogdmFyKC0tbGlnaHQtOTAwKTtcblxuLy8gR3JheVxuJGdyYXktMTAwOiB2YXIoLS1ncmF5LTEwMCk7XG4kZ3JheS0yMDA6IHZhcigtLWdyYXktMjAwKTtcbiRncmF5LTMwMDogdmFyKC0tZ3JheS0zMDApO1xuJGdyYXktNDAwOiB2YXIoLS1ncmF5LTQwMCk7XG4kZ3JheS01MDA6IHZhcigtLWdyYXktNTAwKTtcbiRncmF5LTYwMDogdmFyKC0tZ3JheS02MDApO1xuJGdyYXktNzAwOiB2YXIoLS1ncmF5LTcwMCk7XG4kZ3JheS04MDA6IHZhcigtLWdyYXktODAwKTtcbiRncmF5LTkwMDogdmFyKC0tZ3JheS05MDApO1xuXG4vLyBJbmZvXG4kaW5mby0xMDA6ICNFMUQ4RkI7XG4kaW5mby0yMDA6ICNEMUM0Rjk7XG4kaW5mby0zMDA6ICNDMkIxRjc7XG4kaW5mby00MDA6ICNCMzlERjU7XG4kaW5mby01MDA6ICNBNDg5RjI7XG4kaW5mby02MDA6ICM5NTc2RjA7XG4kaW5mby03MDA6ICM4NTYyRUU7XG4kaW5mby04MDA6ICM3NjRGRUM7XG4kaW5mby05MDA6ICM2NzNCRUE7XG5cbi8vIFN1Y2Nlc3NcbiRzdWNjZXNzLTEwMDogI0QyRjVFMTtcbiRzdWNjZXNzLTIwMDogI0JCRjBEMztcbiRzdWNjZXNzLTMwMDogI0E0RUJDNDtcbiRzdWNjZXNzLTQwMDogIzhFRTdCNTtcbiRzdWNjZXNzLTUwMDogIzc3RTJBNjtcbiRzdWNjZXNzLTYwMDogIzYwREQ5NztcbiRzdWNjZXNzLTcwMDogIzQ5RDg4OTtcbiRzdWNjZXNzLTgwMDogIzMzRDM3QTtcbiRzdWNjZXNzLTkwMDogIzFDQ0U2QjtcblxuLy8gRGFuZ2VyXG4kZGFuZ2VyLTEwMDogI0Y2Q0VDRTtcbiRkYW5nZXItMjAwOiAjRjFCNkI2O1xuJGRhbmdlci0zMDA6ICNFQzlFOUU7XG4kZGFuZ2VyLTQwMDogI0U4ODY4NjtcbiRkYW5nZXItNTAwOiAjRTM2RDZEO1xuJGRhbmdlci02MDA6ICNERTU1NTU7XG4kZGFuZ2VyLTcwMDogI0Q5M0QzRDtcbiRkYW5nZXItODAwOiAjRDUyNDI0O1xuJGRhbmdlci05MDA6ICNEMDBDMEM7XG5cbi8vIFdhcm5pbmdcbiR3YXJuaW5nLTEwMDogI0ZGRjREMjtcbiR3YXJuaW5nLTIwMDogI0ZGRUVCQztcbiR3YXJuaW5nLTMwMDogI0ZGRTlBNjtcbiR3YXJuaW5nLTQwMDogI0ZGRTM5MDtcbiR3YXJuaW5nLTUwMDogI0ZGREQ3OTtcbiR3YXJuaW5nLTYwMDogI0ZGRDg2MztcbiR3YXJuaW5nLTcwMDogI0ZGRDI0RDtcbiR3YXJuaW5nLTgwMDogI0ZGQ0QzNjtcbiR3YXJuaW5nLTkwMDogI0ZGQzcyMDtcblxuLy8gUHVycGxlXG4kcHVycGxlLTEwMDogI0YwREVGMztcbiRwdXJwbGUtMjAwOiAjRThDREVEO1xuJHB1cnBsZS0zMDA6ICNFMUJERTc7XG4kcHVycGxlLTQwMDogI0Q5QUNFMTtcbiRwdXJwbGUtNTAwOiAjRDE5QkRCO1xuJHB1cnBsZS02MDA6ICNDQThCRDU7XG4kcHVycGxlLTcwMDogI0MyN0FDRjtcbiRwdXJwbGUtODAwOiAjQkI2QUM5O1xuJHB1cnBsZS05MDA6ICNCMzU5QzM7XG5cbi8vIFNreWJsdWVcbiRza3libHVlLTEwMDogI0QzRjVGQztcbiRza3libHVlLTIwMDogI0JFRjFGQjtcbiRza3libHVlLTMwMDogI0E4RUNGQTtcbiRza3libHVlLTQwMDogIzkyRTdGOTtcbiRza3libHVlLTUwMDogIzdDRTJGNztcbiRza3libHVlLTYwMDogIzY2RERGNjtcbiRza3libHVlLTcwMDogIzUxRDlGNTtcbiRza3libHVlLTgwMDogIzNCRDRGMztcbiRza3libHVlLTkwMDogIzI1Q0ZGMjtcblxuLy8gRGFya21vZGUgQmFzZVxuJGRhcmttb2RlLWxpZ2h0OiAjMjUyNTI1O1xuJGRhcmttb2RlLWRhcms6ICNENkRBREU7XG4kZGFya21vZGUtd2hpdGU6ICMwRDBEMEQ7XG5cbi8vIERhcmttb2RlIEdyYXlcbiRkYXJrbW9kZS1ncmF5LTkwMDogI0Q4REZFRTtcbiRkYXJrbW9kZS1ncmF5LTgwMDogI0M4RDJFMDtcbiRkYXJrbW9kZS1ncmF5LTcwMDogIzM3NDE1MTtcbiRkYXJrbW9kZS1ncmF5LTYwMDogIzRCNTU2MztcbiRkYXJrbW9kZS1ncmF5LTUwMDogIzZCNzI4MDtcbiRkYXJrbW9kZS1ncmF5LTQwMDogIzlDQTNBRjtcbiRkYXJrbW9kZS1ncmF5LTMwMDogIzJGMzQzQztcbiRkYXJrbW9kZS1ncmF5LTIwMDogIzFGMjIyODtcbiRkYXJrbW9kZS1ncmF5LTEwMDogIzE3MTcxNztcblxuLy8gRGFya21vZGUgTGlnaHRcbiRkYXJrbW9kZS1saWdodC05MDA6ICMxODE4MTg7XG4kZGFya21vZGUtbGlnaHQtODAwOiAjMTIxMjEyO1xuJGRhcmttb2RlLWxpZ2h0LTcwMDogIzExMTExMTtcbiRkYXJrbW9kZS1saWdodC02MDA6ICMxMDEwMTA7XG4kZGFya21vZGUtbGlnaHQtNTAwOiAjMEYwRjBGO1xuJGRhcmttb2RlLWxpZ2h0LTQwMDogIzBFMEUwRTtcbiRkYXJrbW9kZS1saWdodC0zMDA6ICMwQzBDMEM7XG4kZGFya21vZGUtbGlnaHQtMjAwOiAjMEIwQjBCO1xuJGRhcmttb2RlLWxpZ2h0LTEwMDogIzBBMEEwQTtcblxuLy8gRGFya21vZGUgVHJhbnNwYXJlbnRcbiRkYXJrbW9kZS1wcmltYXJ5LXRyYW5zcGFyZW50OiAjMTAwNjAxO1xuJGRhcmttb2RlLXNlY29uZGFyeS10cmFuc3BhcmVudDogIzAzMEQxMTtcbiRkYXJrbW9kZS1zdWNjZXNzLXRyYW5zcGFyZW50OiAjMDQxNTBDO1xuJGRhcmttb2RlLXdhcm5pbmctdHJhbnNwYXJlbnQ6ICMxNzEyMDM7XG4kZGFya21vZGUtZGFuZ2VyLXRyYW5zcGFyZW50OiAjMjQwNTA1O1xuJGRhcmttb2RlLWluZm8tdHJhbnNwYXJlbnQ6ICMwNTBDMTU7XG4kZGFya21vZGUtcHVycGxlLXRyYW5zcGFyZW50OiAjMTcwNTFCO1xuJGRhcmttb2RlLXNreWJsdWUtdHJhbnNwYXJlbnQ6ICMwMzE5MUU7XG4kZGFya21vZGUtcGluay10cmFuc3BhcmVudDogIzI0MDkxNztcbiRkYXJrbW9kZS1kYXJrLXRyYW5zcGFyZW50OiAjMjEyMzI0O1xuJGRhcmttb2RlLWxpZ2h0LXRyYW5zcGFyZW50OiAjMEIwRjE0O1xuXG4kY29sb3JzOiAoXG4gIFwic2t5Ymx1ZVwiOiAgICAkc2t5Ymx1ZSxcbiAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuKTtcblxuJHRoZW1lLWNvbG9yczogKFxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXG4gICAgXCJwdXJwbGVcIjogJHB1cnBsZVxuKTtcblxuJHRleHQtY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiR0aXRsZS1jb2xvcjogdmFyKC0tZ3JheS05MDApO1xuJHN1Yi10aXRsZTogdmFyKC0tZ3JheS01MDApO1xuJGJvZHktYmc6IHZhcigtLXdoaXRlKTtcbiR0ZXh0LW11dGVkOiAjNjc3Nzg4O1xuJGRlZmF1bHQtYmFja2dyb3VuZDogI0Y4RjlGQTtcbiRibGFjay1iZzogIzE0MTQzMjtcbiRpbnB1dC1iZzogIzJjMmM1MDtcbiRmb3JtLWNvbnRyb2wtYmc6IHZhcigtLXdoaXRlKTtcblxuLy8gU29jaWFsIEljb25zIENvbG9yc1xuJGZhY2Vib29rOiAjM0I1OTk4O1xuJHR3aXR0ZXI6ICMwMEFDRUU7XG4kZ29vZ2xlOiAjREQ0QjM5O1xuJGxpbmtlZGluOiAjMEU3NkE4O1xuJHlvdXR1YmU6ICNDNDMwMkI7XG4kaW5zdGFncmFtOiAjM0Y3MjlCO1xuJHBpbnRlcmVzdDogI2NjMjEyNztcbiRza3lwZTogIzAwQUZGMDtcbiRlbWFpbDogIzY1NjdBNTtcbiRhcHBzdG9yZTogIzAwMDtcblxuLy8gR3JhZGllbnQgVmFyaWFibGVzXG4kcHJpbWFyeS10cmFuc3BhcmVudDogI0VCRTlGMTtcbiRzZWNvbmRhcnktdHJhbnNwYXJlbnQ6ICNGRkVERjA7XG4kc3VjY2Vzcy10cmFuc3BhcmVudDogI0U4RkFGMDtcbiR3YXJuaW5nLXRyYW5zcGFyZW50OiAjRkZGOUU5O1xuJGRhbmdlci10cmFuc3BhcmVudDogI0ZBRTdFNztcbiRpbmZvLXRyYW5zcGFyZW50OiAjRjBFQkZEO1xuJHBpbmstdHJhbnNwYXJlbnQ6ICNGRkVERjY7XG4kbGlnaHQtdHJhbnNwYXJlbnQ6ICNGREZERkY7XG4kZGFyay10cmFuc3BhcmVudDogI0U4RThFODtcbiR0ZWFsLXRyYW5zcGFyZW50OiAjRTZGOUZGO1xuJHB1cnBsZS10cmFuc3BhcmVudDogI0Y3RUVGOTtcbiRza3libHVlLXRyYW5zcGFyZW50OiAjRTlGQUZFO1xuJHByaW1hcnktZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZFRTBERSAwJSwgI0U0RjVGRCA1MS4zOSUsICNEREVERkYgMTAwJSk7XG4kc2Vjb25kYXJ5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjM0I3MDgwIDAlLCAjM0Q5MEE5IDEwMCUpO1xuJHN1Y2Nlc3MtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRENCNzMgMCUsICMwREE5NTIgMTAwJSk7XG4kd2FybmluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGQzEwNyAwJSwgI0ZGRThBNSAxMDAlKTtcbiRkYW5nZXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNFNzBEMEQgMCUsICM4MTA3MDcgMTAwJSk7XG4kaW5mby1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzE3N0RCQyAwJSwgIzFBOTFEQiAxMDAlKTtcbiRsaWdodC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0Y4RjlGQSAwJSwgI0VERURFRCAxMDAlKTtcbiRkYXJrLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRjNGNkZGIDAlLCAjRkZGRkZGIDEwMCUpO1xuJHBpbmstZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkE3OTUgMCUsICNGRkZGRkYgMTAwJSk7XG4kcHVycGxlLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNEIzMDg4IDAlLCAjNUMyREM4IDEwMCUpO1xuJHRlYWwtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNFNkY5RkYgMCUsICNGRkZGRkYgMTAwJSk7XG4kb3JhbmdlLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkY5OTQ1IDAlLCAjRkM2MTczIDEwMCUpO1xuJGdyYWRpZW50LXB1cnBsZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzY2N0NFOCAwJSwgIzc1NEVBNyAxMDAlKTtcbiRibHVlLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDBDMEY5IDAlLCAjMDI1N0NFIDEwMCUpO1xuJG1hcm9vbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0VGM0I0QSAwJSwgIzUxM0E4RiAxMDAlKTtcblxuJHB1cnBsZS1ncmFkaWVudDI6IGxpbmVhci1ncmFkaWVudCgxMC45M2RlZywgIzM5MkM3RCAxNi4yMiUsICM2ODUwRTMgMTIwLjEzJSk7XG4kYmx1ZS1ncmFkaWVudDI6IGxpbmVhci1ncmFkaWVudCgxMC45M2RlZywgIzJDN0E5QyAxNi4yMiUsICMwOTM2Q0IgMTIwLjEzJSk7XG5cbi8vIFN0eWxlIEFuY2hvciBFbGVtZW50c1xuJGxpbmstY29sb3I6ICRwcmltYXJ5O1xuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcbiRsaW5rLXNoYWRlLXBlcmNlbnRhZ2U6IDIwJTtcbiRsaW5rLWhvdmVyLWNvbG9yOiBjb2xvci5hZGp1c3QoJGxpbmstY29sb3IsICRsaWdodG5lc3M6IC0xMCUpO1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbnVsbDtcbiRzcGFjZXI6IDFyZW07XG5cbi8vIEJvcmRlclxuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci1zdHlsZTogc29saWQ7XG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0xMDA7XG4kZGVmYXVsdC1ib3JkZXI6ICRncmF5LTEwMDtcbiRpbnB1dC1ib3JkZXI6ICRncmF5LTEwMDtcblxuLy8gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXM6IDRweDtcbiRib3JkZXItcmFkaXVzLXNtOiAzcHg7XG4kYm9yZGVyLXJhZGl1cy1sZzogNXB4O1xuJGJvcmRlci1yYWRpdXMteGw6IDhweDtcbiRib3JkZXItcmFkaXVzLXh4bDogMTJweDtcbiRyb3VuZGVkOiA1MCU7XG4kcm91bmRlZC1waWxsOiAxLjVyZW07XG5cbi8vIEJveCBTaGFkb3dcbiRib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggI0Q0RDRENDQwO1xuJGJveC1zaGFkb3cteHM6IDBweCAxcHggMXB4IDFweCByZ2JhKDE5OCwgMTk4LCAxOTgsIDAuMik7XG4kYm94LXNoYWRvdy14cy0yOiAwcHggNHB4IDRweCAwcHggcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjIpO1xuJGJveC1zaGFkb3ctc206IDBweCAycHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4kYm94LXNoYWRvdy1tZDogMHB4IDNweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRib3gtc2hhZG93LWxnOiAwcHggNHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiRkcm9wLXNoYWRvdzogMHB4IDRweCAxNHB4IDBweCAjREJEQkRCNDA7XG4kYm94LXNoYWRvdy0xMDA6IDBweCA4cHggMjRweCAwcHggIzk1OURBNTJFO1xuJGJveC1zaGFkb3cxOiAwcHggNHB4IDI0cHggMHB4IHJnYmEoMjIwLCAyMjAsIDIyMCwgMC4yNSk7XG5cblxuXG4vLyBGb250IFNpemVcbiRmb250LXNpemUtODogOHB4O1xuJGZvbnQtc2l6ZS05OiA5cHg7XG4kZm9udC1zaXplLTEwOiAxMHB4O1xuJGZvbnQtc2l6ZS0xMTogMTFweDtcbiRmb250LXNpemUtMTI6IDEycHg7XG4kZm9udC1zaXplLTEzOiAxM3B4O1xuJGZvbnQtc2l6ZS0xNDogMTRweDtcbiRmb250LXNpemUtMTU6IDE1cHg7XG4kZm9udC1zaXplLTE2OiAxNnB4O1xuJGZvbnQtc2l6ZS0xNzogMTdweDtcbiRmb250LXNpemUtMTg6IDE4cHg7XG4kZm9udC1zaXplLTIwOiAyMHB4O1xuJGZvbnQtc2l6ZS0yMjogMjJweDtcbiRmb250LXNpemUtMjQ6IDI0cHg7XG4kZm9udC1zaXplLTI2OiAyNnB4O1xuJGZvbnQtc2l6ZS0yODogMjhweDtcbiRmb250LXNpemUtMzA6IDMwcHg7XG4kZm9udC1zaXplLTMyOiAzMnB4O1xuJGZvbnQtc2l6ZS0zNDogMzRweDtcbiRmb250LXNpemUtMzY6IDM2cHg7XG4kZm9udC1zaXplLTM4OiAzOHB4O1xuJGZvbnQtc2l6ZS00MDogNDBweDtcbiRmb250LXNpemUtNDI6IDQycHg7XG4kZm9udC1zaXplLTQ0OiA0NHB4O1xuJGZvbnQtc2l6ZS00ODogNDhweDtcbiRmb250LXNpemUtNTA6IDUwcHg7XG4kZm9udC1zaXplLTU0OiA1NHB4O1xuJGZvbnQtc2l6ZS02MDogNjBweDtcblxuJGgxLWZvbnQtc2l6ZTogMjhweDtcbiRoMi1mb250LXNpemU6IDI0cHg7XG4kaDMtZm9udC1zaXplOiAyMHB4O1xuJGg0LWZvbnQtc2l6ZTogMThweDtcbiRoNS1mb250LXNpemU6IDE2cHg7XG4kaDYtZm9udC1zaXplOiAxNHB4O1xuIiwiQHVzZSBcInNhc3M6bWFwXCI7XG4kYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4XG4pO1xuXG4vLyBSZXNwb25kIEFib3ZlXG5cbkBtaXhpbiByZXNwb25kLWFib3ZlKCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAuaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxuICB9IEBlbHNlIHtcblxuICAgIC8vIExvZyBhIHdhcm5pbmcuXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcbiAgfVxufVxuXG4vLyBSZXNwb25kIEFib3ZlXG5cbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XG5cbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXG4gIEBpZiBtYXAuaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG5cbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAvLyBGb3IgdmFsdWUgbGlrZSA5OTEuOThweCwgMTE5OS45OHB4LCAxMzk5Ljk4cHhcbiAgICAkbWF4LXZhbHVlOiAkYnJlYWtwb2ludC12YWx1ZSAtIDAuMDJweDtcblxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heC12YWx1ZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cbiAgfSBAZWxzZSB7XG5cbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxuICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybSgkcHJvcGVydHkpIHtcbiAgdHJhbnNmb3JtOiAkcHJvcGVydHk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkcHJvcGVydHk7XG4gIC1tcy10cmFuc2Zvcm06ICRwcm9wZXJ0eTtcbn1cblxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHkpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkcHJvcGVydHk7XG4gIC1tcy10cmFuc2l0aW9uOiAkcHJvcGVydHk7XG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWNvbG9yKCRjb2xvcikge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogV2ViS2l0IGJyb3dzZXJzICovXG4gICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxuICAmOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICBvcGFjaXR5OiAxO1xuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5AbWl4aW4gcm91bmRlZCgkdW5pdCkge1xuICBib3JkZXItcmFkaXVzOiAkdW5pdDtcbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHByb3BlcnR5KSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46ICRwcm9wZXJ0eTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkcHJvcGVydHk7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkcHJvcGVydHk7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRpbnNldDppbnNldCwkaG9yaXpvbnRhbG9mZnNldDoxMHB4LCR2ZXJ0aWNhbG9mZnNldDoxMHB4LCRibHVyOjEwcHgsJHNwcmVhZDoxMHB4LCRjb2xvcjogIzAwMDAwMCkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRpbnNldCAkaG9yaXpvbnRhbG9mZnNldCAkdmVydGljYWxvZmZzZXQgJGJsdXIgJHNwcmVhZCAkY29sb3I7XG4gIC1tb3otYm94LXNoYWRvdzogJGluc2V0ICRob3Jpem9udGFsb2Zmc2V0ICR2ZXJ0aWNhbG9mZnNldCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbiAgYm94LXNoYWRvdzogJGluc2V0ICRob3Jpem9udGFsb2Zmc2V0ICR2ZXJ0aWNhbG9mZnNldCAkYmx1ciAkc3ByZWFkICRjb2xvcjtcbn1cblxuJWFuaW1hdGlvbi1lZmZlY3QgeyAgIFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return StudentDashboardComponent;
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
//# sourceMappingURL=2822.js.map