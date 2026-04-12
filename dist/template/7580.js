"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7580],{

/***/ 77580:
/*!******************************************************************************!*\
  !*** ./src/app/features/instructor/students-list/students-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentsListComponent: () => (/* binding */ StudentsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/custom-pagination/custom-pagination.component */ 38888);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/service/custom-pagination/pagination.service */ 37002);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);














const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ["/instructor/students-details", a0];
const _c2 = a0 => ({
  studentId: a0
});
function StudentsListComponent_For_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function StudentsListComponent_For_31_Conditional_7_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onStudentImageError(data_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.getStudentImage(data_r2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", data_r2.studentName || "\u00C9tudiant");
  }
}
function StudentsListComponent_For_31_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r2.getStudentAvatarGradient(data_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.getStudentInitial(data_r2.studentName), " ");
  }
}
function StudentsListComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td")(5, "div", 17)(6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](7, StudentsListComponent_For_31_Conditional_7_Template, 1, 2, "img", 19)(8, StudentsListComponent_For_31_Conditional_8_Template, 2, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 5)(10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td")(15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td")(20, "div", 17)(21, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c1, data_r2.studentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r2.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c1, data_r2.studentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r2.hasStudentImage(data_r2) ? 7 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, data_r2.studentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r2.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r2.enrollDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r2.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r2.courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c1, data_r2.studentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r2.routes.instructorMessage)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c2, data_r2.studentId));
  }
}
let StudentsListComponent = /*#__PURE__*/(() => {
  class StudentsListComponent {
    courseService;
    router;
    pagination;
    authService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_6__.routes;
    // pagination variables
    pageSize = 10;
    tableData = [];
    tableDataCopy = [];
    actualData = [];
    filteredData = [];
    currentPage = 1;
    skip = 0;
    limit = this.pageSize;
    serialNumberArray = [];
    totalData = 0;
    pageSelection = [];
    dataSource;
    searchDataValue = '';
    imageLoadErrors = new Set();
    constructor(courseService, router, pagination, authService) {
      this.courseService = courseService;
      this.router = router;
      this.pagination = pagination;
      this.authService = authService;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url === this.routes.studentsList) {
          this.getTableData({
            skip: res.skip,
            limit: res.limit
          });
          this.pageSize = res.pageSize;
        }
      });
    }
    ngOnInit() {
      this.loadStudents();
    }
    loadStudents() {
      this.courseService.getInstructorStudents().subscribe({
        next: students => {
          const uniqueStudents = this.mergeStudentsByIdentity(students || []);
          this.actualData = uniqueStudents.map((student, index) => {
            const progress = this.getProgressValue(student);
            return {
              sNo: index + 1,
              studentId: String(student?.studentId || student?.userId || student?.studentEmail || student?.email || index + 1),
              img: student?.studentAvatar || student?.avatarPath || student?.avatar || '',
              studentName: student?.studentName || student?.name || 'Étudiant',
              enrollDate: this.formatDate(student?.enrolledAt || student?.createdAt || student?.joinedAt),
              progress: `${progress}%`,
              courses: student?.courseTitle || student?.courseName || 'Cours',
              width: `${progress}%`
            };
          });
          this.filteredData = [...this.actualData];
          this.totalData = this.filteredData.length;
          this.getTableData({
            skip: this.skip,
            limit: this.limit
          });
        },
        error: () => {
          this.actualData = [];
          this.filteredData = [];
          this.totalData = 0;
          this.getTableData({
            skip: this.skip,
            limit: this.limit
          });
        }
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
            studentId: row?.studentId || row?.userId || row?.studentEmail || row?.email || String(index + 1),
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
    getTableData(pageOption) {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = this.filteredData.length;
      this.filteredData.forEach((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.filteredData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    }
    searchData(value) {
      const query = (value || '').trim().toLowerCase();
      if (!query) {
        this.filteredData = [...this.actualData];
      } else {
        this.filteredData = this.actualData.filter(student => {
          const studentId = String(student?.studentId || '').toLowerCase();
          const name = String(student?.studentName || '').toLowerCase();
          const courses = String(student?.courses || '').toLowerCase();
          return studentId.includes(query) || name.includes(query) || courses.includes(query);
        });
      }
      this.skip = 0;
      this.currentPage = 1;
      this.getTableData({
        skip: this.skip,
        limit: this.limit
      });
    }
    sortData(sort) {
      const data = this.tableData.slice();
      if (!sort.active || sort.direction === '') {
        this.tableData = data;
      } else {
        this.tableData = data.sort((a, b) => {
          const aValue = a[sort.active];
          const bValue = b[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
    changePageSize(pageSize) {
      this.pageSelection = [];
      this.limit = pageSize;
      this.skip = 0;
      this.currentPage = 1;
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    }
    getProgressValue(student) {
      const value = Number(student?.aggregateProgress ?? student?.completionPercentage ?? student?.progress ?? 0);
      return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
    }
    extractCourseTitles(rawValue) {
      const raw = String(rawValue || '').trim();
      if (!raw) return [];
      return raw.split(/[,;|•]/).map(part => part.trim()).filter(part => !!part).filter((value, index, self) => self.indexOf(value) === index);
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
    getStudentImage(student) {
      const image = String(student?.img || '').trim();
      if (!image) return '';
      return this.authService.resolveAvatarUrl(image) || '';
    }
    hasStudentImage(student) {
      return !!this.getStudentImage(student) && !this.imageLoadErrors.has(this.getStudentRenderKey(student));
    }
    onStudentImageError(student) {
      this.imageLoadErrors.add(this.getStudentRenderKey(student));
    }
    getStudentInitial(name) {
      return (name || '?').trim().charAt(0).toUpperCase() || '?';
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
    getStudentRenderKey(student) {
      return String(student?.studentId || student?.studentName || student?.img || 'student');
    }
    static ɵfac = function StudentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_11__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: StudentsListComponent,
      selectors: [["app-students-list"]],
      decls: 33,
      vars: 5,
      consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "active", "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [3, "routerLink"], [1, "isax", "isax-element-3"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [1, "text-primary", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", 3, "routerLink"], [3, "src", "alt"], [1, "student-avatar-fallback", "d-inline-flex", "align-items-center", "justify-content-center", "fw-bold", 3, "background"], [1, "fs-14"], [1, "badge", "bg-primary-transparent", "text-primary"], ["title", "Voir les d\u00E9tails", 1, "d-inline-flex", "fs-14", "me-1", "action-icon", 3, "routerLink"], [1, "isax", "isax-eye"], ["title", "Envoyer un message", 1, "d-inline-flex", "fs-14", "action-icon", 3, "routerLink", "queryParams"], [1, "isax", "isax-messages-3"], [3, "error", "src", "alt"], [1, "student-avatar-fallback", "d-inline-flex", "align-items-center", "justify-content-center", "fw-bold"]],
      template: function StudentsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00C9tudiants");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function StudentsListComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function StudentsListComponent_Template_input_ngModelChange_13_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13)(15, "table", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function StudentsListComponent_Template_table_matSortChange_15_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "thead", 15)(17, "tr")(18, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "ID \u00E9tudiant");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Nom \u00E9tudiant");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Date d'inscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Progression");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](30, StudentsListComponent_For_31_Template, 25, 22, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "app-custom-pagination");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx.routes.studentsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx.routes.studentsGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, _shared_service_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__.CustomPaginationComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.35s ease;\n}\n\n.list-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e5e7eb;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.list-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .list-icons[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  border-color: #c7d2fe;\n  background: linear-gradient(135deg, #eef2ff, #f8faff);\n}\n\n.input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border-color: #e5e7eb;\n  box-shadow: none;\n}\n.input-icon[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n\n.custom-table[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid #e6eaf2;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n}\n.custom-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n  border-bottom: 1px solid #e6eaf2;\n}\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.2s ease;\n}\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n}\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-color: #eef2f7;\n}\n\n.action-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #dbe2f0;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.action-icon[_ngcontent-%COMP%]:hover {\n  border-color: #a5b4fc;\n  background: #eef2ff;\n  color: #4338ca;\n}\n\n.avatar.avatar-md.avatar-rounded[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 2px;\n  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);\n}\n.avatar.avatar-md.avatar-rounded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  background: #fff;\n}\n\n.student-avatar-fallback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 16px;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n.progress.progress-xs[_ngcontent-%COMP%] {\n  background: #edf1f7;\n  border-radius: 999px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  border-radius: 999px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9zdHVkZW50cy1saXN0L3N0dWRlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLGlDQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRDtBQUNDO0VBRUMsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7QUFBRjs7QUFJQTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUREO0FBR0M7RUFDQyxxQkFBQTtFQUNBLDhDQUFBO0FBREY7O0FBS0E7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQUZEO0FBSUM7RUFDQyxnQkFBQTtBQUZGO0FBS0M7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFIRjtBQU1DO0VBQ0MsZ0NBQUE7QUFKRjtBQU1FO0VBQ0MsbUJBQUE7QUFKSDtBQVFDO0VBQ0Msc0JBQUE7RUFDQSxxQkFBQTtBQU5GOztBQVVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVBEO0FBU0M7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVdBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7QUFSRDtBQVVDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFZQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBVEQ7O0FBWUE7RUFDQyxtQkFBQTtFQUNBLG9CQUFBO0FBVEQ7O0FBWUE7RUFDQyxvQkFBQTtBQVREOztBQVlBO0VBQ0M7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFQbEI7RUFRRDtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQUpoQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTRweDtcclxuXHRhbmltYXRpb246IGZhZGVTbGlkZUluIC4zNXMgZWFzZTtcclxufVxyXG5cclxuLmxpc3QtaWNvbnMgYSB7XHJcblx0d2lkdGg6IDM0cHg7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG5cdGNvbG9yOiAjNjQ3NDhiO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcblx0Jjpob3ZlcixcclxuXHQmLmFjdGl2ZSB7XHJcblx0XHRjb2xvcjogIzRmNDZlNTtcclxuXHRcdGJvcmRlci1jb2xvcjogI2M3ZDJmZTtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZWYyZmYsICNmOGZhZmYpO1xyXG5cdH1cclxufVxyXG5cclxuLmlucHV0LWljb24gLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRib3JkZXItY29sb3I6ICNlNWU3ZWI7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHJcblx0Jjpmb2N1cyB7XHJcblx0XHRib3JkZXItY29sb3I6ICNhNWI0ZmM7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4xMik7XHJcblx0fVxyXG59XHJcblxyXG4uY3VzdG9tLXRhYmxlIHtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmVhZjI7XHJcblx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIC4wNik7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0dGFibGUge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdHRoZWFkIHRoIHtcclxuXHRcdGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcblx0XHRjb2xvcjogIzQ3NTU2OTtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogLjA0ZW07XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmVhZjI7XHJcblx0fVxyXG5cclxuXHR0Ym9keSB0ciB7XHJcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlO1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjhmYWZmO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGJvZHkgdGQge1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdGJvcmRlci1jb2xvcjogI2VlZjJmNztcclxuXHR9XHJcbn1cclxuXHJcbi5hY3Rpb24taWNvbiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZjA7XHJcblx0Y29sb3I6ICM2NDc0OGI7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJvcmRlci1jb2xvcjogI2E1YjRmYztcclxuXHRcdGJhY2tncm91bmQ6ICNlZWYyZmY7XHJcblx0XHRjb2xvcjogIzQzMzhjYTtcclxuXHR9XHJcbn1cclxuXHJcbi5hdmF0YXIuYXZhdGFyLW1kLmF2YXRhci1yb3VuZGVkIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBhZGRpbmc6IDJweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTJlOGYwLCAjY2JkNWUxKTtcclxuXHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdH1cclxufVxyXG5cclxuLnN0dWRlbnQtYXZhdGFyLWZhbGxiYWNrIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MucHJvZ3Jlc3MteHMge1xyXG5cdGJhY2tncm91bmQ6ICNlZGYxZjc7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVTbGlkZUluIHtcclxuXHRmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpOyB9XHJcblx0dG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return StudentsListComponent;
})();

/***/ })

}]);
//# sourceMappingURL=7580.js.map