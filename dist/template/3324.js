"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3324],{

/***/ 23324:
/*!******************************************************************************!*\
  !*** ./src/app/features/instructor/students-grid/students-grid.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentsGridComponent: () => (/* binding */ StudentsGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_service_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/custom-pagination/custom-pagination.component */ 38888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/custom-pagination/pagination.service */ 37002);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);











const _c0 = a0 => ["/instructor/students-details", a0];
const _c1 = a0 => ({
  studentId: a0
});
const _forTrack0 = ($index, $item) => $item.enrollmentId || $item.studentId || $item.studentEmail || $item.studentName;
function StudentsGridComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StudentsGridComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucun \u00E9tudiant trouv\u00E9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StudentsGridComponent_Conditional_16_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function StudentsGridComponent_Conditional_16_For_2_Conditional_6_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const student_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onAvatarError(student_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const student_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.getStudentAvatar(student_r2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r2.getStudentName(student_r2));
  }
}
function StudentsGridComponent_Conditional_16_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const student_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getInitial(ctx_r2.getStudentName(student_r2)));
  }
}
function StudentsGridComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22)(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](6, StudentsGridComponent_Conditional_16_For_2_Conditional_6_Template, 1, 2, "img", 24)(7, StudentsGridComponent_Conditional_16_For_2_Conditional_7_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 26)(9, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 29)(14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 34)(19, "div", 26)(20, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 39)(28, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const student_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx_r2.getStudentAvatarGradient(student_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.hasValidAvatar(student_r2) ? 6 : 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getStudentName(student_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getStudentEmail(student_r2) || "Email non disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c0, student_r2.studentId || student_r2.studentEmail || student_r2.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r2.routes.instructorMessage)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c1, student_r2.studentId || student_r2.studentEmail || student_r2.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.getCourseTitle(student_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Inscrit le ", ctx_r2.formatDate(student_r2.enrolledAt || student_r2.createdAt || student_r2.joinedAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (student_r2 == null ? null : student_r2.totalCourses) || 1, " cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.formatDate(student_r2.enrolledAt || student_r2.createdAt || student_r2.joinedAt), " ");
  }
}
function StudentsGridComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, StudentsGridComponent_Conditional_16_For_2_Template, 31, 16, "div", 18, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-custom-pagination");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r2.tableData);
  }
}
let StudentsGridComponent = /*#__PURE__*/(() => {
  class StudentsGridComponent {
    courseService;
    router;
    pagination;
    authService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    students = [];
    filteredStudents = [];
    tableData = [];
    tableDataCopy = [];
    serialNumberArray = [];
    totalData = 0;
    pageSelection = [];
    currentPage = 1;
    skip = 0;
    searchValue = '';
    loading = true;
    avatarLoadErrors = new Set();
    pageSize = 9;
    limit = this.pageSize;
    constructor(courseService, router, pagination, authService) {
      this.courseService = courseService;
      this.router = router;
      this.pagination = pagination;
      this.authService = authService;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url === this.routes.studentsGrid) {
          this.getTableData({
            skip: res.skip,
            limit: res.limit
          });
          this.pageSize = res.pageSize;
        }
      });
    }
    ngOnInit() {
      this.courseService.getInstructorStudents().subscribe({
        next: data => {
          this.students = this.mergeStudentsByIdentity(Array.isArray(data) ? data : []);
          this.filteredStudents = [...this.students];
          this.totalData = this.filteredStudents.length;
          this.getTableData({
            skip: this.skip,
            limit: this.limit
          });
          this.loading = false;
        },
        error: () => {
          this.students = [];
          this.filteredStudents = [];
          this.totalData = 0;
          this.getTableData({
            skip: this.skip,
            limit: this.limit
          });
          this.loading = false;
        }
      });
    }
    searchData(value) {
      const query = (value || '').toLowerCase().trim();
      if (!query) {
        this.filteredStudents = [...this.students];
        this.skip = 0;
        this.currentPage = 1;
        this.getTableData({
          skip: this.skip,
          limit: this.limit
        });
        return;
      }
      this.filteredStudents = this.students.filter(student => {
        const name = (student?.studentName || student?.name || '').toLowerCase();
        const email = (student?.studentEmail || student?.email || '').toLowerCase();
        const course = (student?.courseTitle || student?.courseName || '').toLowerCase();
        return name.includes(query) || email.includes(query) || course.includes(query);
      });
      this.skip = 0;
      this.currentPage = 1;
      this.getTableData({
        skip: this.skip,
        limit: this.limit
      });
    }
    getInitial(name) {
      return name ? name.charAt(0).toUpperCase() : '?';
    }
    getStudentName(student) {
      return student?.studentName || student?.name || 'Étudiant';
    }
    getStudentEmail(student) {
      return student?.studentEmail || student?.email || '';
    }
    getCourseTitle(student) {
      return student?.courseTitle || student?.courseName || 'Cours';
    }
    getStudentAvatar(student) {
      const image = String(student?.studentAvatar || student?.avatarPath || student?.avatar || '').trim();
      if (!image) return '';
      return this.authService.resolveAvatarUrl(image) || '';
    }
    hasValidAvatar(student) {
      const key = this.getStudentRenderKey(student);
      return !!this.getStudentAvatar(student) && !this.avatarLoadErrors.has(key);
    }
    onAvatarError(student) {
      this.avatarLoadErrors.add(this.getStudentRenderKey(student));
    }
    getStudentAvatarGradient(student) {
      const palettes = ['linear-gradient(135deg,#6366f1,#8b5cf6)', 'linear-gradient(135deg,#0ea5e9,#06b6d4)', 'linear-gradient(135deg,#f59e0b,#f97316)', 'linear-gradient(135deg,#10b981,#14b8a6)', 'linear-gradient(135deg,#ec4899,#f43f5e)', 'linear-gradient(135deg,#7c3aed,#a855f7)'];
      const key = this.getStudentRenderKey(student);
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
      }
      return palettes[Math.abs(hash) % palettes.length];
    }
    getTableData(pageOption) {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = this.filteredStudents.length;
      this.filteredStudents.forEach((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    }
    getProgress(student) {
      const value = Number(student?.aggregateProgress ?? student?.completionPercentage ?? student?.progress ?? 0);
      return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
    }
    formatDate(value) {
      if (!value) return 'Date inconnue';
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return String(value);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    }
    mergeStudentsByIdentity(rows) {
      const map = new Map();
      rows.forEach((row, index) => {
        const key = this.getStudentKey(row, index);
        const currentCourses = this.extractCourseTitles(row?.courseTitle || row?.courseName || '');
        const rowProgress = this.getProgressValue(row);
        const rowCompleted = rowProgress >= 100;
        if (!map.has(key)) {
          map.set(key, {
            ...row,
            studentId: row?.studentId || row?.userId || row?.enrollmentId || row?.studentEmail || row?.email || String(index + 1),
            courseTitles: [...currentCourses],
            progressSum: rowProgress,
            progressCount: 1,
            completedCourses: rowCompleted ? 1 : 0
          });
          return;
        }
        const existing = map.get(key);
        currentCourses.forEach(courseTitle => {
          if (courseTitle && !existing.courseTitles.includes(courseTitle)) {
            existing.courseTitles.push(courseTitle);
          }
        });
        existing.progressSum += rowProgress;
        existing.progressCount += 1;
        if (rowCompleted) {
          existing.completedCourses += 1;
        }
      });
      return Array.from(map.values()).map(student => ({
        ...student,
        courseTitle: student.courseTitles.length > 0 ? student.courseTitles.join(' • ') : student?.courseTitle || student?.courseName || 'Cours',
        aggregateProgress: student.progressCount > 0 ? Math.round(student.progressSum / student.progressCount) : 0,
        totalCourses: student.progressCount || 0
      }));
    }
    getStudentKey(student, index) {
      const rawKey = student?.studentId || student?.userId || student?.studentEmail || student?.email || student?.enrollmentId;
      return String(rawKey || `student-${index}`);
    }
    getStudentRenderKey(student) {
      return String(student?.studentId || student?.userId || student?.studentEmail || student?.email || student?.studentName || 'student');
    }
    getProgressValue(student) {
      const value = Number(student?.completionPercentage ?? student?.progress ?? 0);
      return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
    }
    extractCourseTitles(rawValue) {
      const raw = String(rawValue || '').trim();
      if (!raw) return [];
      return raw.split(/[,;|•]/).map(part => part.trim()).filter(part => !!part).filter((value, index, self) => self.indexOf(value) === index);
    }
    static ɵfac = function StudentsGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_9__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: StudentsGridComponent,
      selectors: [["app-students-grid"]],
      decls: 17,
      vars: 6,
      consts: [[1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "page-title", "mb-3"], [1, "fw-bold", "mb-0"], [1, "d-flex", "align-items-center", "list-icons"], [1, "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [1, "active", 3, "routerLink"], [1, "isax", "isax-element-3"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher un \u00E9tudiant, un email ou un cours", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel"], [1, "text-center", "py-5"], [1, "text-center", "py-5", "text-muted"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "isax", "isax-people", "fs-1", "d-block", "mb-2"], [1, "row", "g-4"], [1, "col-xl-4", "col-md-6"], [1, "card", "h-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "gap-3", "overflow-hidden"], [1, "ins-st-avatar"], [3, "src", "alt"], [1, "ins-st-avatar-fallback"], [1, "overflow-hidden"], [1, "mb-1", "fw-bold", "text-truncate"], [1, "text-muted", "text-truncate", "d-block"], [1, "d-flex", "align-items-center", "gap-2", "flex-shrink-0"], ["title", "Voir les d\u00E9tails", 1, "avatar", "avatar-md", "avatar-rounded", "border", 3, "routerLink"], [1, "isax", "isax-eye", "text-gray-9", "fs-14"], ["title", "Envoyer un message", 1, "avatar", "avatar-md", "avatar-rounded", "border", 3, "routerLink", "queryParams"], [1, "isax", "isax-messages", "text-gray-9", "fs-14"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3", "pb-3"], [1, "badge", "bg-primary-transparent", "text-primary", "me-1", "mb-2"], [1, "isax", "isax-book", "me-1"], [1, "mb-0", "text-muted", "fs-14"], [1, "badge", "bg-light", "text-gray-9"], [1, "d-flex", "align-items-center", "justify-content-between", "fs-14"], [1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-calendar-add5", "text-primary", "me-1"], [3, "error", "src", "alt"]],
      template: function StudentsGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00C9tudiants");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function StudentsGridComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.searchValue, $event) || (ctx.searchValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function StudentsGridComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.searchData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](14, StudentsGridComponent_Conditional_14_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](15, StudentsGridComponent_Conditional_15_Template, 3, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](16, StudentsGridComponent_Conditional_16_Template, 4, 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.studentsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.studentsGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.searchValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.loading ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.loading && ctx.filteredStudents.length === 0 ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.loading && ctx.filteredStudents.length > 0 ? 16 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _shared_service_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.35s ease;\n}\n\n.list-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e5e7eb;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.list-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .list-icons[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  border-color: #c7d2fe;\n  background: linear-gradient(135deg, #eef2ff, #f8faff);\n}\n\n.input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border-color: #e5e7eb;\n  box-shadow: none;\n}\n.input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e6eaf2;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n  animation: _ngcontent-%COMP%_cardIn 0.35s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #c7d2fe;\n  box-shadow: 0 16px 30px rgba(79, 70, 229, 0.12);\n}\n\n.ins-st-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  padding: 2px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);\n}\n.ins-st-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.ins-st-avatar[_ngcontent-%COMP%]   .ins-st-avatar-fallback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.ins-st-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  display: block;\n  background: #fff;\n}\n\n.ins-st-avatar-fallback[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.92rem;\n  text-transform: uppercase;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n.avatar.avatar-md.avatar-rounded.border[_ngcontent-%COMP%] {\n  border-color: #dbe2f0 !important;\n  color: #475569;\n  transition: all 0.2s ease;\n}\n.avatar.avatar-md.avatar-rounded.border[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc !important;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n\n.badge.bg-primary-transparent[_ngcontent-%COMP%] {\n  border: 1px dashed rgba(79, 70, 229, 0.35);\n}\n\n.progress[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  background: #edf1f7;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  transition: width 0.6s ease;\n}\n\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9zdHVkZW50cy1ncmlkL3N0dWRlbnRzLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxpQ0FBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Q7QUFDQztFQUVDLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0FBQUY7O0FBSUE7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFERDtBQUdDO0VBQ0MscUJBQUE7RUFDQSw4Q0FBQTtBQURGOztBQUtBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0ZBQUE7RUFDQSw0QkFBQTtBQUZEO0FBSUM7RUFDQywyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0NBQUE7QUFGRjs7QUFNQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUFIRDtBQUtDOztFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1DO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFMRDs7QUFRQTtFQUNDLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBTEQ7QUFPQztFQUNDLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTEY7O0FBU0E7RUFDQywwQ0FBQTtBQU5EOztBQVNBO0VBQ0Msb0JBQUE7RUFDQSxtQkFBQTtBQU5EOztBQVNBO0VBQ0Msb0JBQUE7RUFDQSwyQkFBQTtBQU5EOztBQVNBO0VBQ0M7SUFBTyxVQUFBO0lBQVksMEJBQUE7RUFKbEI7RUFLRDtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQURoQjtBQUNGO0FBR0E7RUFDQztJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQUNsQjtFQUFEO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBSWhCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuXHRhbmltYXRpb246IGZhZGVTbGlkZUluIC4zNXMgZWFzZTtcclxufVxyXG5cclxuLmxpc3QtaWNvbnMgYSB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG5cdGNvbG9yOiAjNjQ3NDhiO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcblx0Jjpob3ZlcixcclxuXHQmLmFjdGl2ZSB7XHJcblx0XHRjb2xvcjogIzRmNDZlNTtcclxuXHRcdGJvcmRlci1jb2xvcjogI2M3ZDJmZTtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZWYyZmYsICNmOGZhZmYpO1xyXG5cdH1cclxufVxyXG5cclxuLmlucHV0LWljb24gLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRib3JkZXItY29sb3I6ICNlNWU3ZWI7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHJcblx0Jjpmb2N1cyB7XHJcblx0XHRib3JkZXItY29sb3I6ICNhNWI0ZmM7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4xMik7XHJcblx0fVxyXG59XHJcblxyXG4uY2FyZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U2ZWFmMjtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAuMDYpO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGVhc2UsIGJveC1zaGFkb3cgLjI1cyBlYXNlLCBib3JkZXItY29sb3IgLjI1cyBlYXNlO1xyXG5cdGFuaW1hdGlvbjogY2FyZEluIC4zNXMgZWFzZTtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcblx0XHRib3JkZXItY29sb3I6ICNjN2QyZmU7XHJcblx0XHRib3gtc2hhZG93OiAwIDE2cHggMzBweCByZ2JhKDc5LCA3MCwgMjI5LCAuMTIpO1xyXG5cdH1cclxufVxyXG5cclxuLmlucy1zdC1hdmF0YXIge1xyXG5cdHdpZHRoOiA0OHB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cGFkZGluZzogMnB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Ym94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDE1LCAyMywgNDIsIC4xOCk7XHJcblxyXG5cdGltZyxcclxuXHQuaW5zLXN0LWF2YXRhci1mYWxsYmFjayB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR9XHJcblxyXG5cdGltZyB7XHJcblx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR9XHJcbn1cclxuXHJcbi5pbnMtc3QtYXZhdGFyLWZhbGxiYWNrIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiAuOTJyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xMik7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuXHJcbi5hdmF0YXIuYXZhdGFyLW1kLmF2YXRhci1yb3VuZGVkLmJvcmRlciB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZGJlMmYwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICM0NzU1Njk7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI2E1YjRmYyAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogI2VlZjJmZjtcclxuXHRcdGNvbG9yOiAjNGY0NmU1O1xyXG5cdH1cclxufVxyXG5cclxuLmJhZGdlLmJnLXByaW1hcnktdHJhbnNwYXJlbnQge1xyXG5cdGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDc5LCA3MCwgMjI5LCAuMzUpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdGJhY2tncm91bmQ6ICNlZGYxZjc7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cdHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhcmRJbiB7XHJcblx0ZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpOyB9XHJcblx0dG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlU2xpZGVJbiB7XHJcblx0ZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgfVxyXG5cdHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentsGridComponent;
})();

/***/ })

}]);
//# sourceMappingURL=3324.js.map