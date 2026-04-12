"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6330],{

/***/ 32537:
/*!******************************************************************!*\
  !*** ./src/app/features/admin/services/admin-reports.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminReportsService: () => (/* binding */ AdminReportsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let AdminReportsService = /*#__PURE__*/(() => {
  class AdminReportsService {
    http;
    base = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/admin/reports`;
    constructor(http) {
      this.http = http;
    }
    getOverview() {
      return this.http.get(`${this.base}/overview`);
    }
    getRevenue() {
      return this.http.get(`${this.base}/revenue`);
    }
    getCourseStats() {
      return this.http.get(`${this.base}/courses`);
    }
    getUserStats() {
      return this.http.get(`${this.base}/users`);
    }
    static ɵfac = function AdminReportsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminReportsService,
      factory: AdminReportsService.ɵfac,
      providedIn: 'root'
    });
  }
  return AdminReportsService;
})();

/***/ }),

/***/ 36330:
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_admin_reports_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/admin-reports.service */ 32537);









const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
const _c1 = () => ({});
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.title;
function AdminDashboardComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29)(8, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cours publi\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 29)(14, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Revenus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.totalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.publishedCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 3, ctx_r0.overview.totalRevenue, "1.0-0"), "\u20AC");
  }
}
function AdminDashboardComponent_div_34_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " cours en attente de validation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.pendingCourses);
  }
}
function AdminDashboardComponent_div_34_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 41)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " ticket(s) support ouvert(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.openTickets);
  }
}
function AdminDashboardComponent_div_34_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Voir les cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_courses);
  }
}
function AdminDashboardComponent_div_34_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Voir les tickets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_tickets);
  }
}
function AdminDashboardComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "div", 1)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminDashboardComponent_div_34_span_5_Template, 4, 1, "span", 37)(6, AdminDashboardComponent_div_34_span_6_Template, 4, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminDashboardComponent_div_34_a_8_Template, 3, 1, "a", 39)(9, AdminDashboardComponent_div_34_a_9_Template, 3, 1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.pendingCourses > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.overview.openTickets > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.pendingCourses > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.overview.openTickets > 0);
  }
}
function AdminDashboardComponent_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49)(1, "div", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 56)(4, "div", 57)(5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AdminDashboardComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, AdminDashboardComponent_Conditional_35_For_2_Template, 6, 0, "div", 49, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 50)(4, "div", 51)(5, "div", 52)(6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 55)(9, "div", 52)(10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](0, _c0));
  }
}
function AdminDashboardComponent_Conditional_36_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("+", ctx_r0.overview.newUsersThisMonth, " ");
  }
}
function AdminDashboardComponent_Conditional_36_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("+", ctx_r0.overview.newEnrollmentsThisMonth, " ");
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "apx-chart", 93);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.revenueSeries)("chart", ctx_r0.revenueOptions.chart)("colors", ctx_r0.revenueOptions.colors)("fill", ctx_r0.revenueOptions.fill)("stroke", ctx_r0.revenueOptions.stroke)("markers", ctx_r0.revenueOptions.markers)("xaxis", ctx_r0.revenueOptions.xaxis)("yaxis", ctx_r0.revenueOptions.yaxis)("grid", ctx_r0.revenueOptions.grid)("dataLabels", ctx_r0.revenueOptions.dataLabels)("legend", ctx_r0.revenueOptions.legend)("tooltip", ctx_r0.revenueOptions.tooltip);
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "apx-chart", 96);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.courseDonutSeries)("chart", ctx_r0.courseDonutOptions.chart)("labels", ctx_r0.courseDonutOptions.labels)("colors", ctx_r0.courseDonutOptions.colors)("legend", ctx_r0.courseDonutOptions.legend)("dataLabels", ctx_r0.courseDonutOptions.dataLabels)("plotOptions", ctx_r0.courseDonutOptions.plotOptions);
  }
}
function AdminDashboardComponent_Conditional_36_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 124)(1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Brouillon: ", ctx_r0.courseStats.byStatus.DRAFT);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Attente: ", ctx_r0.courseStats.byStatus.PENDING);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Publi\u00E9: ", ctx_r0.courseStats.byStatus.PUBLISHED);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Rejet\u00E9: ", ctx_r0.courseStats.byStatus.REJECTED);
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "apx-chart", 99);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.barSeries)("chart", ctx_r0.barOptions.chart)("plotOptions", ctx_r0.barOptions.plotOptions)("colors", ctx_r0.barOptions.colors)("dataLabels", ctx_r0.barOptions.dataLabels)("xaxis", ctx_r0.barOptions.xaxis)("yaxis", ctx_r0.barOptions.yaxis)("grid", ctx_r0.barOptions.grid)("legend", ctx_r0.barOptions.legend)("tooltip", ctx_r0.barOptions.tooltip);
  }
}
function AdminDashboardComponent_Conditional_36_For_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 101)(1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.getRoleColor(entry_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getRoleLabel(entry_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.getRoleColor(entry_r2.key) + "20")("color", ctx_r0.getRoleColor(entry_r2.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r2.value);
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "apx-chart", 119);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.lineSeries)("chart", ctx_r0.lineOptions.chart)("colors", ctx_r0.lineOptions.colors)("fill", ctx_r0.lineOptions.fill)("stroke", ctx_r0.lineOptions.stroke)("markers", ctx_r0.lineOptions.markers)("xaxis", ctx_r0.lineOptions.xaxis)("yaxis", ctx_r0.lineOptions.yaxis)("grid", ctx_r0.lineOptions.grid)("dataLabels", ctx_r0.lineOptions.dataLabels)("tooltip", ctx_r0.lineOptions.tooltip);
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_234_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 139)(7, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ɵ$index_661_r4 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("rank-" + (ɵ$index_661_r4 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ɵ$index_661_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](c_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](c_r3.enrollments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 6, c_r3.revenue, "1.0-0"), "\u00A0\u20AC");
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_234_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121)(1, "table", 133)(2, "thead")(3, "tr")(4, "th", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Titre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Inscrits");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Revenus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](13, AdminDashboardComponent_Conditional_36_Conditional_234_For_14_Template, 12, 9, "tr", null, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r0.courseStats.topCourses);
  }
}
function AdminDashboardComponent_Conditional_36_Conditional_235_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Aucun cours disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59)(1, "div", 49)(2, "div", 60)(3, "div", 61)(4, "div", 62)(5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Utilisateurs enregistr\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 68)(14, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AdminDashboardComponent_Conditional_36_span_16_Template, 3, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 49)(18, "div", 72)(19, "div", 61)(20, "div", 62)(21, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u00C0 valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Cours en attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 49)(32, "div", 76)(33, "div", 61)(34, "div", 62)(35, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Tickets ouverts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 49)(46, "div", 78)(47, "div", 61)(48, "div", 62)(49, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Revenus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Revenus totaux");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 48)(61, "div", 49)(62, "div", 80)(63, "div", 61)(64, "div", 62)(65, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Inscriptions totales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 68)(74, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, AdminDashboardComponent_Conditional_36_span_76_Template, 3, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 49)(78, "div", 82)(79, "div", 61)(80, "div", 62)(81, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Dipl\u00F4mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Certificats d\u00E9livr\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 49)(92, "div", 84)(93, "div", 61)(94, "div", 62)(95, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Ce mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Nouveaux utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 49)(106, "div", 86)(107, "div", 61)(108, "div", 62)(109, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Ce mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Nouvelles inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](118, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 48)(120, "div", 51)(121, "div", 88)(122, "div", 89)(123, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Revenus & Ventes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "12 derniers mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](129, AdminDashboardComponent_Conditional_36_Conditional_129_Template, 1, 12, "apx-chart", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 55)(131, "div", 88)(132, "div", 89)(133, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Cours par statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](137, AdminDashboardComponent_Conditional_36_Conditional_137_Template, 1, 7, "apx-chart", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, AdminDashboardComponent_Conditional_36_div_138_Template, 13, 4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 48)(140, "div", 7)(141, "div", 88)(142, "div", 89)(143, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "Utilisateurs par R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](149, AdminDashboardComponent_Conditional_36_Conditional_149_Template, 1, 10, "apx-chart", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](151, AdminDashboardComponent_Conditional_36_For_152_Template, 7, 8, "div", 101, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](153, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 22)(155, "div", 88)(156, "div", 89)(157, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](158, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "Actions Rapides");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 103)(161, "a", 104)(162, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](163, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "div", 106)(165, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "G\u00E9rer les Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Bloquer, supprimer, modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](169, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "a", 104)(171, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](172, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "div", 106)(174, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "Valider les Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](178, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "a", 104)(180, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](181, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "div", 106)(183, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "Tickets Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "a", 104)(189, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](190, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "div", 106)(192, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "Virements");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "V\u00E9rifier les paiements instructeurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](196, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "a", 104)(198, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](199, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "div", 106)(201, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](202, "Cat\u00E9gories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "Organiser les cours par th\u00E8me");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](205, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "a", 104)(207, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](208, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "div", 106)(210, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](211, "Analytics IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "Analyses avanc\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](214, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "div", 50)(216, "div", 7)(217, "div", 88)(218, "div", 89)(219, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](220, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, "Inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "12 derniers mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](225, AdminDashboardComponent_Conditional_36_Conditional_225_Template, 1, 11, "apx-chart", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "div", 22)(227, "div", 88)(228, "div", 89)(229, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](230, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](231, "Top Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](232, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, "Par inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](234, AdminDashboardComponent_Conditional_36_Conditional_234_Template, 15, 0, "div", 121)(235, AdminDashboardComponent_Conditional_36_Conditional_235_Template, 4, 0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.totalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.overview.newUsersThisMonth > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.pendingCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", (ctx_r0.overview.totalCourses > 0 ? ctx_r0.pendingCourses / ctx_r0.overview.totalCourses * 100 : 0) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_tickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.openTickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](55, 30, ctx_r0.overview.totalRevenue, "1.0-0"), "\u00A0\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.totalEnrollments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.overview.newEnrollmentsThisMonth > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.totalCertificates);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.newUsersThisMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.overview.newEnrollmentsThisMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.revenueSeries.length > 0 ? 129 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.courseDonutSeries.length > 0 ? 137 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.courseStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.overview.totalUsers, " total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.barSeries.length > 0 ? 149 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](153, 33, (ctx_r0.userStats == null ? null : ctx_r0.userStats.byRole) ?? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](35, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.pendingCourses, " cours en attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_tickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.overview.openTickets, " ticket(s) ouvert(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_payouts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.adminAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.lineSeries.length > 0 ? 225 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.courseStats && ctx_r0.courseStats.topCourses.length > 0 ? 234 : 235);
  }
}
let AdminDashboardComponent = /*#__PURE__*/(() => {
  class AdminDashboardComponent {
    reportsService;
    cdr;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    userName = '';
    userRole = '';
    get userHeroInitials() {
      if (!this.userName) return 'AD';
      return this.userName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
    }
    overview = null;
    userStats = null;
    courseStats = null;
    loading = true;
    // ─── Donut Chart ──────────────────────────────────────────────────────────
    // ─── Revenue Chart (area) ─────────────────────────────────────────────────
    revenueSeries = [];
    revenueOptions = {
      chart: {
        type: 'area',
        height: 260,
        toolbar: {
          show: false
        }
      },
      colors: ['#5625E8', '#03C95A'],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.4,
          opacityTo: 0.05
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      markers: {
        size: 4,
        strokeColors: '#fff',
        strokeWidth: 2
      },
      xaxis: {
        categories: [],
        labels: {
          rotate: -40,
          style: {
            fontSize: '10px'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: v => `${v.toFixed(0)} €`
        }
      },
      grid: {
        borderColor: '#f1f5f9',
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'top'
      },
      tooltip: {
        y: {
          formatter: v => `${v.toFixed(2)} €`
        }
      }
    };
    // ─── Bar Chart ────────────────────────────────────────────────────────────
    barSeries = [];
    barOptions = {
      chart: {
        type: 'bar',
        height: 260,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '55%',
          distributed: true
        }
      },
      colors: ['#5625E8', '#03C95A', '#9b59b6', '#FFC107', '#02a8b5'],
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          fontSize: '11px'
        }
      },
      xaxis: {
        categories: []
      },
      yaxis: {
        title: {
          text: 'Utilisateurs'
        }
      },
      grid: {
        borderColor: '#f1f5f9',
        strokeDashArray: 4
      },
      legend: {
        show: false
      },
      tooltip: {
        y: {
          formatter: val => `${val} utilisateur(s)`
        }
      }
    };
    // ─── Donut Chart (cours par statut) ──────────────────────────────────────
    courseDonutSeries = [];
    courseDonutOptions = {
      chart: {
        type: 'donut',
        height: 220,
        animations: {
          enabled: true
        }
      },
      labels: ['Brouillon', 'En attente', 'Publié', 'Rejeté'],
      colors: ['#94a3b8', '#FFC107', '#03C95A', '#5625E8'],
      legend: {
        position: 'bottom',
        fontSize: '11px'
      },
      dataLabels: {
        enabled: true,
        formatter: val => `${val.toFixed(0)}%`
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                fontSize: '13px',
                fontWeight: '700'
              }
            }
          }
        }
      }
    };
    // ─── Line Chart ───────────────────────────────────────────────────────────
    lineSeries = [];
    lineOptions = {
      chart: {
        type: 'area',
        height: 240,
        toolbar: {
          show: false
        }
      },
      colors: ['#5625E8'],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.05
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      markers: {
        size: 4,
        colors: ['#5625E8'],
        strokeColors: '#fff',
        strokeWidth: 2
      },
      xaxis: {
        categories: [],
        labels: {
          rotate: -40,
          style: {
            fontSize: '10px'
          }
        }
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: v => Math.round(v).toString()
        }
      },
      grid: {
        borderColor: '#f1f5f9',
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        y: {
          formatter: val => `${val} inscription(s)`
        }
      }
    };
    constructor(reportsService, cdr) {
      this.reportsService = reportsService;
      this.cdr = cdr;
    }
    ngOnInit() {
      this.userName = localStorage.getItem('fullName') || 'Administrateur';
      this.userRole = localStorage.getItem('role') || '';
      this.loadStats();
    }
    loadStats() {
      this.loading = true;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
        overview: this.reportsService.getOverview(),
        userStats: this.reportsService.getUserStats(),
        revenue: this.reportsService.getRevenue(),
        courseStats: this.reportsService.getCourseStats()
      }).subscribe({
        next: ({
          overview,
          userStats,
          revenue,
          courseStats
        }) => {
          this.overview = overview;
          this.userStats = userStats;
          this.courseStats = courseStats;
          this.buildCharts(overview, userStats, revenue, courseStats);
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    buildCharts(overview, userStats, revenue, courseStats) {
      // Revenue area chart
      this.revenueSeries = [{
        name: 'Revenus (€)',
        data: revenue.revenue
      }, {
        name: 'Ventes',
        data: revenue.sales
      }];
      this.revenueOptions = {
        ...this.revenueOptions,
        xaxis: {
          ...this.revenueOptions.xaxis,
          categories: revenue.labels
        }
      };
      // Bar — utilisateurs par rôle
      const roleLabels = {
        STUDENT: 'Étudiants',
        INSTRUCTOR: 'Instruct.',
        ADMIN: 'Admins',
        RECRUITER: 'Recruteurs',
        SUPERADMIN: 'SuperAdmin'
      };
      const roles = Object.keys(userStats.byRole ?? {});
      this.barSeries = [{
        name: 'Utilisateurs',
        data: roles.map(r => userStats.byRole[r] ?? 0)
      }];
      this.barOptions = {
        ...this.barOptions,
        xaxis: {
          ...this.barOptions.xaxis,
          categories: roles.map(r => roleLabels[r] || r)
        }
      };
      // Line — inscriptions (12 derniers mois)
      this.lineSeries = [{
        name: 'Inscriptions',
        data: userStats.registrations
      }];
      this.lineOptions = {
        ...this.lineOptions,
        xaxis: {
          ...this.lineOptions.xaxis,
          categories: userStats.labels
        }
      };
      // Donut — cours par statut
      this.courseDonutSeries = [courseStats.byStatus.DRAFT, courseStats.byStatus.PENDING, courseStats.byStatus.PUBLISHED, courseStats.byStatus.REJECTED];
    }
    get pendingCourses() {
      if (!this.overview) return 0;
      return Math.max(0, this.overview.totalCourses - this.overview.publishedCourses);
    }
    getRoleColor(role) {
      const colors = {
        STUDENT: '#5625E8',
        INSTRUCTOR: '#03C95A',
        ADMIN: '#9b59b6',
        RECRUITER: '#FFC107',
        SUPERADMIN: '#5625E8'
      };
      return colors[role] || '#6b7280';
    }
    getRoleLabel(role) {
      const labels = {
        STUDENT: 'Étudiants',
        INSTRUCTOR: 'Instructeurs',
        ADMIN: 'Admins',
        RECRUITER: 'Recruteurs',
        SUPERADMIN: 'Super Admins'
      };
      return labels[role] || role;
    }
    static ɵfac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_reports_service__WEBPACK_IMPORTED_MODULE_7__.AdminReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 37,
      vars: 6,
      consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "admin-hero"], [1, "adm-hero-glow", "adm-glow-1"], [1, "adm-hero-glow", "adm-glow-2"], [1, "admin-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "admin-hero-av-wrap"], [1, "admin-hero-av-ring1"], [1, "admin-hero-av-border"], [1, "admin-hero-av-circle"], [1, "admin-hero-av-initial"], [1, "admin-hero-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "admin-hero-chip"], [1, "ti", "ti-shield-check", "me-1", 2, "font-size", "9px"], [1, "adm-hero-live"], [1, "adm-hero-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], ["class", "adm-hero-glass-panel d-none d-md-flex align-items-center", 4, "ngIf"], [1, "admin-hero-refresh", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-refresh", 2, "font-size", "14px"], ["class", "row mb-3", 4, "ngIf"], [1, "adm-hero-glass-panel", "d-none", "d-md-flex", "align-items-center"], [1, "admin-hero-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.55)", "font-size", "10px"], [1, "admin-hero-stat-divider"], [1, "row", "mb-3"], [1, "alert", "alert-light", "border", "d-flex", "align-items-center", "gap-3", "py-2", "px-3", "mb-0", "admin-alert"], [1, "ti", "ti-alert-triangle", "fs-20", "text-warning"], [1, "d-flex", "flex-wrap", "gap-3", "small"], ["class", "d-flex align-items-center gap-1", 4, "ngIf"], [1, "ms-auto", "d-none", "d-sm-flex", "gap-2"], ["class", "btn btn-warning btn-sm py-1 px-2", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm py-1 px-2", "style", "background:linear-gradient(135deg,#FD3995,#9b59b6);color:#fff;border:none", 3, "routerLink", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-1"], [1, "badge", "bg-warning-transparent", "text-warning", "fw-semibold"], [1, "badge", 2, "background", "rgba(86,37,232,.1)", "color", "#5625E8", "font-weight", "700"], [1, "btn", "btn-warning", "btn-sm", "py-1", "px-2", 3, "routerLink"], [1, "ti", "ti-eye", "me-1"], [1, "btn", "btn-sm", "py-1", "px-2", 2, "background", "linear-gradient(135deg,#FD3995,#9b59b6)", "color", "#fff", "border", "none", 3, "routerLink"], [1, "ti", "ti-headset", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-xl-3"], [1, "row", "g-3"], [1, "col-lg-8"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "skeleton", 2, "height", "260px", "border-radius", "8px"], [1, "col-lg-4"], [1, "skeleton", "skeleton-line", "w-50", "mb-2"], [1, "skeleton", "skeleton-line", "w-75", "mb-3", 2, "height", "28px"], [1, "skeleton", "skeleton-line", "w-100"], [1, "row", "g-3", "mb-3"], [1, "adm-kpi", "adm-kpi-blue", 2, "cursor", "pointer", 3, "routerLink"], [1, "adm-kpi-body"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-1"], [1, "adm-kpi-icon"], [1, "ti", "ti-users"], [1, "adm-kpi-badge"], [1, "adm-kpi-value"], [1, "adm-kpi-label", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2"], [1, "adm-kpi-bar-track", "flex-grow-1", "me-2"], [1, "adm-kpi-bar-fill", 2, "width", "100%"], ["class", "adm-kpi-trend text-success", 4, "ngIf"], [1, "adm-kpi", "adm-kpi-red", 2, "cursor", "pointer", 3, "routerLink"], [1, "ti", "ti-clock-hour-4"], [1, "adm-kpi-bar-track", "mt-2"], [1, "adm-kpi-bar-fill"], [1, "adm-kpi", "adm-kpi-danger", 2, "cursor", "pointer", 3, "routerLink"], [1, "ti", "ti-headset"], [1, "adm-kpi", "adm-kpi-green"], [1, "ti", "ti-currency-euro"], [1, "adm-kpi", "adm-kpi-cyan"], [1, "ti", "ti-user-check"], [1, "adm-kpi", "adm-kpi-violet"], [1, "ti", "ti-certificate"], [1, "adm-kpi", "adm-kpi-teal"], [1, "ti", "ti-user-plus"], [1, "adm-kpi", "adm-kpi-pink"], [1, "ti", "ti-trending-up"], [1, "adm-chart-card", "card", "border-0", "shadow-sm", "h-100"], [1, "adm-chart-header"], [1, "ti", "ti-chart-line", "me-2", 2, "color", "#03C95A"], [1, "adm-chart-badge"], [1, "adm-chart-body"], [3, "series", "chart", "colors", "fill", "stroke", "markers", "xaxis", "yaxis", "grid", "dataLabels", "legend", "tooltip"], [1, "ti", "ti-chart-donut", "me-2", 2, "color", "#392C7D"], [1, "adm-chart-body", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions"], ["class", "d-flex flex-wrap justify-content-center gap-3 mt-2", 4, "ngIf"], [1, "ti", "ti-chart-bar", "me-2", 2, "color", "#392C7D"], [3, "series", "chart", "plotOptions", "colors", "dataLabels", "xaxis", "yaxis", "grid", "legend", "tooltip"], [1, "mt-3", "pt-2", "border-top"], [1, "d-flex", "align-items-center", "justify-content-between", "py-1"], [1, "ti", "ti-bolt", "me-2", 2, "color", "#FFC107"], [1, "adm-chart-body", "d-flex", "flex-column", "gap-2"], [1, "adm-quick-link", "d-flex", "align-items-center", "gap-3", "p-3", "text-decoration-none", 3, "routerLink"], [1, "adm-ql-icon", 2, "background", "rgba(29,78,216,.1)", "color", "#1d4ed8"], [1, "flex-grow-1"], [1, "fw-semibold", "mb-0", "text-dark", "small"], [1, "text-muted"], [1, "ti", "ti-chevron-right", "adm-ql-arrow"], [1, "adm-ql-icon", 2, "background", "rgba(245,158,11,.1)", "color", "#f59e0b"], [1, "adm-ql-icon", 2, "background", "rgba(86,37,232,.1)", "color", "#5625E8"], [1, "adm-ql-icon", 2, "background", "rgba(3,201,90,.1)", "color", "#03C95A"], [1, "ti", "ti-coin"], [1, "adm-ql-icon", 2, "background", "rgba(124,58,237,.1)", "color", "#7c3aed"], [1, "ti", "ti-category"], [1, "adm-ql-icon", 2, "background", "rgba(14,165,233,.1)", "color", "#0ea5e9"], [1, "ti", "ti-chart-area-line"], [1, "ti", "ti-trending-up", "me-2", 2, "color", "#5625E8"], [3, "series", "chart", "colors", "fill", "stroke", "markers", "xaxis", "yaxis", "grid", "dataLabels", "tooltip"], [1, "ti", "ti-trophy", "me-2", 2, "color", "#FFC107"], [1, "table-responsive"], [1, "adm-chart-body", "text-center", "text-muted", "py-4"], [1, "adm-kpi-trend", "text-success"], [1, "d-flex", "flex-wrap", "justify-content-center", "gap-3", "mt-2"], [1, "d-inline-block", "rounded-circle", 2, "width", "8px", "height", "8px", "background", "#94a3b8"], [1, "d-inline-block", "rounded-circle", 2, "width", "8px", "height", "8px", "background", "#f59e0b"], [1, "d-inline-block", "rounded-circle", 2, "width", "8px", "height", "8px", "background", "#22c55e"], [1, "d-inline-block", "rounded-circle", 2, "width", "8px", "height", "8px", "background", "#FD3995"], [1, "d-flex", "align-items-center", "gap-2"], [1, "role-dot"], [1, "fw-semibold"], [1, "badge"], [1, "table", "adm-top-table", "align-middle", "mb-0"], [2, "width", "32px"], [1, "text-end", 2, "width", "80px"], [1, "text-end", 2, "width", "90px"], [1, "rank-badge"], [1, "small", "text-truncate", "fw-semibold", 2, "max-width", "160px"], [1, "text-end"], [1, "badge", 2, "background", "rgba(57,44,125,.1)", "color", "#392C7D", "border-radius", "20px"], [1, "text-end", "fw-semibold", "text-success", "small"], [1, "ti", "ti-chart-bar", "fs-24", "d-block", "mb-2", "opacity-50"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 10)(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12)(13, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "div", 15)(18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "EN LIGNE");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Tableau de bord Administrateur \u2014 Vue compl\u00E8te de la plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 22)(29, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AdminDashboardComponent_div_30_Template, 19, 6, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_31_listener() {
            return ctx.loadStats();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AdminDashboardComponent_div_34_Template, 10, 4, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](35, AdminDashboardComponent_Conditional_35_Template, 12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](36, AdminDashboardComponent_Conditional_36_Template, 236, 36);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userHeroInitials);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Bienvenue, ", ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.overview);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.overview && (ctx.pendingCourses > 0 || ctx.overview.openTickets > 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.loading ? 35 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.loading && ctx.overview ? 36 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.NgApexchartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.KeyValuePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.admin-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #FD3995 0%, #9b59b6 30%, #5625E8 62%, #02a8b5 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n  box-shadow: 0 12px 40px rgba(253, 57, 149, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.14);\n  \n\n}\n.admin-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.admin-hero-body[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  z-index: 1;\n}\n\n\n\n.adm-hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.adm-glow-1[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  background: radial-gradient(circle, rgba(2, 168, 181, 0.22) 0%, transparent 70%);\n  top: -110px;\n  right: 3%;\n  animation: _ngcontent-%COMP%_adm-glow-float 7s ease-in-out infinite;\n}\n\n.adm-glow-2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  background: radial-gradient(circle, rgba(253, 57, 149, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 6%;\n  animation: _ngcontent-%COMP%_adm-glow-float 9s ease-in-out infinite reverse;\n}\n\n\n\n.admin-hero-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.admin-hero-av-ring1[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(253, 164, 175, 0.55);\n  animation: _ngcontent-%COMP%_adm-av-rotate 12s linear infinite;\n}\n\n.admin-hero-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625E8, #02a8b5);\n}\n\n.admin-hero-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625E8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.admin-hero-av-initial[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #fff;\n  line-height: 1;\n  text-shadow: 0 3px 14px rgba(253, 57, 149, 0.6);\n  letter-spacing: 1px;\n}\n\n.admin-hero-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(253, 164, 175, 0.35);\n  animation: _ngcontent-%COMP%_adm-hero-pulse 2.5s ease-out infinite;\n}\n\n\n\n.admin-hero-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n\n\n.adm-hero-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.adm-hero-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_adm-live-blink 1.2s ease-in-out infinite;\n}\n\n\n\n.adm-hero-glass-panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 16px;\n  padding: 10px 4px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  transition: background 0.22s ease;\n}\n.adm-hero-glass-panel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n\n\n\n.admin-hero-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 80px;\n}\n\n.admin-hero-stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n\n\n.admin-hero-refresh[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s ease;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n}\n.admin-hero-refresh[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.18), transparent);\n  transform: translateX(-100%);\n  transition: transform 0.4s ease;\n}\n.admin-hero-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  border-color: rgba(255, 255, 255, 0.45);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(29, 78, 216, 0.3);\n}\n.admin-hero-refresh[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(100%);\n}\n\n\n\n.admin-alert[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border-color: #fde68a !important;\n  background: linear-gradient(90deg, #fffbeb, #fff8e1) !important;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.1);\n}\n\n\n\n.adm-kpi[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  border: 1px solid rgba(0, 0, 0, 0.055) !important;\n  background: #fff;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  animation: _ngcontent-%COMP%_fadeInUp 0.35s ease both;\n  position: relative;\n}\n.adm-kpi[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.01);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.09) !important;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.3px;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n  margin: 8px 0 2px;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 12.5px;\n  margin-bottom: 10px;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-bar-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.6s ease;\n}\n.adm-kpi[_ngcontent-%COMP%]   .adm-kpi-trend[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n\n\n.adm-kpi-blue[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n}\n.adm-kpi-blue[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n}\n.adm-kpi-blue[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #392C7D;\n}\n.adm-kpi-blue[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #392C7D, #5625E8);\n}\n.adm-kpi-blue[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(57, 44, 125, 0.12) !important;\n}\n\n.adm-kpi-red[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.12);\n  color: #b45309;\n}\n.adm-kpi-red[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.12);\n  color: #b45309;\n}\n.adm-kpi-red[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.adm-kpi-red[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #FFC107, #f59e0b);\n}\n.adm-kpi-red[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.12) !important;\n}\n\n.adm-kpi-danger[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n}\n.adm-kpi-danger[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n}\n.adm-kpi-danger[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #5625E8;\n}\n.adm-kpi-danger[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #5625E8, #02a8b5);\n}\n.adm-kpi-danger[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(86, 37, 232, 0.1) !important;\n}\n\n.adm-kpi-green[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: #03C95A;\n}\n.adm-kpi-green[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: #03C95A;\n}\n.adm-kpi-green[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #03C95A;\n}\n.adm-kpi-green[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #03C95A, #10b981);\n}\n.adm-kpi-green[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(3, 201, 90, 0.12) !important;\n}\n\n.adm-kpi-cyan[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.12);\n  color: #0284c7;\n}\n.adm-kpi-cyan[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.12);\n  color: #0284c7;\n}\n.adm-kpi-cyan[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.adm-kpi-cyan[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #0DCAF0, #0ea5e9);\n}\n\n.adm-kpi-violet[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n}\n.adm-kpi-violet[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n}\n.adm-kpi-violet[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #5625E8;\n}\n.adm-kpi-violet[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #5625E8, #9b59b6);\n}\n\n.adm-kpi-teal[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(2, 168, 181, 0.12);\n  color: #02a8b5;\n}\n.adm-kpi-teal[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(2, 168, 181, 0.12);\n  color: #02a8b5;\n}\n.adm-kpi-teal[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #02a8b5;\n}\n.adm-kpi-teal[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #02a8b5, #0DCAF0);\n}\n\n.adm-kpi-pink[_ngcontent-%COMP%]   .adm-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.08);\n  color: #9b59b6;\n}\n.adm-kpi-pink[_ngcontent-%COMP%]   .adm-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.08);\n  color: #9b59b6;\n}\n.adm-kpi-pink[_ngcontent-%COMP%]   .adm-kpi-value[_ngcontent-%COMP%] {\n  color: #9b59b6;\n}\n.adm-kpi-pink[_ngcontent-%COMP%]   .adm-kpi-bar-fill[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #9b59b6, #5625E8);\n}\n\n.row[_ngcontent-%COMP%]    > [class*=col][_ngcontent-%COMP%]:nth-child(1)   .adm-kpi[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n\n.row[_ngcontent-%COMP%]    > [class*=col][_ngcontent-%COMP%]:nth-child(2)   .adm-kpi[_ngcontent-%COMP%] {\n  animation-delay: 0.07s;\n}\n\n.row[_ngcontent-%COMP%]    > [class*=col][_ngcontent-%COMP%]:nth-child(3)   .adm-kpi[_ngcontent-%COMP%] {\n  animation-delay: 0.14s;\n}\n\n.row[_ngcontent-%COMP%]    > [class*=col][_ngcontent-%COMP%]:nth-child(4)   .adm-kpi[_ngcontent-%COMP%] {\n  animation-delay: 0.21s;\n}\n\n\n\n.adm-chart-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  border: 1px solid rgba(0, 0, 0, 0.06) !important;\n  transition: box-shadow 0.2s ease;\n  overflow: hidden;\n}\n.adm-chart-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08) !important;\n}\n.adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.7));\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a1a2b;\n  margin: 0;\n}\n.adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%]   .adm-chart-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.adm-chart-card[_ngcontent-%COMP%]   .adm-chart-body[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n\n\n\n.adm-quick-link[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.03);\n  border: 1px solid rgba(57, 44, 125, 0.1);\n  border-radius: 12px;\n  transition: all 0.22s ease;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.adm-quick-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.95);\n  border-color: rgba(86, 37, 232, 0.2);\n  transform: translateX(5px);\n  box-shadow: 0 6px 20px rgba(86, 37, 232, 0.08);\n}\n.adm-quick-link[_ngcontent-%COMP%]:hover   .adm-ql-arrow[_ngcontent-%COMP%] {\n  color: #5625E8;\n  transform: translateX(3px);\n}\n\n.adm-ql-arrow[_ngcontent-%COMP%] {\n  transition: color 0.18s, transform 0.18s;\n}\n\n.adm-ql-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.adm-ql-arrow[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  transition: color 0.18s;\n}\n\n\n\n.role-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n\n\n.rank-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  background: #f3f4f6;\n}\n.rank-badge.rank-1[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fbbf24, #f59e0b);\n  color: #fff;\n  box-shadow: 0 2px 6px rgba(245, 158, 11, 0.35);\n}\n.rank-badge.rank-2[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d1d5db, #9ca3af);\n  color: #fff;\n}\n.rank-badge.rank-3[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d97706, #b45309);\n  color: #fff;\n}\n\n\n\n.adm-top-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(253, 57, 149, 0.05), rgba(86, 37, 232, 0.03));\n}\n.adm-top-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  border-bottom: 2px solid rgba(253, 57, 149, 0.12) !important;\n  padding: 10px 12px;\n}\n.adm-top-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(253, 57, 149, 0.03);\n}\n.adm-top-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n}\n\n\n\n.skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f0f4f8 25%, #e0e8f0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 6px;\n}\n.skeleton.skeleton-line[_ngcontent-%COMP%] {\n  height: 14px;\n  border-radius: 4px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dark-mode[_nghost-%COMP%]   .adm-kpi[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-kpi[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .adm-kpi[_ngcontent-%COMP%]   .adm-kpi-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-kpi[_ngcontent-%COMP%]   .adm-kpi-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .adm-kpi[_ngcontent-%COMP%]   .adm-kpi-bar-track[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-kpi[_ngcontent-%COMP%]   .adm-kpi-bar-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(26, 26, 43, 0.95), rgba(17, 17, 25, 0.8));\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%]   .adm-chart-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-chart-card[_ngcontent-%COMP%]   .adm-chart-header[_ngcontent-%COMP%]   .adm-chart-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .adm-quick-link[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-quick-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .adm-quick-link[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .adm-quick-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.14);\n}\n.dark-mode[_nghost-%COMP%]   .admin-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .admin-alert[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.06)) !important;\n  border-color: rgba(245, 158, 11, 0.3) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rank-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rank-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .adm-top-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-top-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(253, 57, 149, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .adm-top-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-top-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  border-bottom-color: rgba(253, 57, 149, 0.15) !important;\n}\n.dark-mode[_nghost-%COMP%]   .adm-top-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .adm-top-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.dark-mode[_nghost-%COMP%]   .skeleton[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1a1a2b 25%, #222235 50%, #1a1a2b 75%);\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_adm-hero-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_adm-glow-float {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-22px) scale(1.04);\n  }\n}\n@keyframes _ngcontent-%COMP%_adm-av-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_adm-live-blink {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.4;\n    transform: scale(0.8);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OztpRkFBQTtBQUtBLCtFQUFBO0FBQ0E7RUFDRSx1RkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3RkFBQTtFQUVBLHFCQUFBO0FBQUY7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsb0JBQUE7RUFBc0IsVUFBQTtFQUNwRCx3RkFBQTtFQUNBLDBCQUFBO0FBSUo7O0FBQUE7RUFBbUIsVUFBQTtFQUFZLGtCQUFBO0VBQW9CLFVBQUE7QUFNbkQ7O0FBSkEsdUJBQUE7QUFDQTtFQUFpQixrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixvQkFBQTtBQVV6RDs7QUFUQTtFQUNFLFlBQUE7RUFBYyxhQUFBO0VBQ2QsZ0ZBQUE7RUFDQSxXQUFBO0VBQWEsU0FBQTtFQUNiLGlEQUFBO0FBY0Y7O0FBWkE7RUFDRSxZQUFBO0VBQWMsYUFBQTtFQUNkLGlGQUFBO0VBQ0EsYUFBQTtFQUFlLFFBQUE7RUFDZix5REFBQTtBQWlCRjs7QUFkQSxtQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFBb0IsY0FBQTtFQUNwQixXQUFBO0VBQWEsWUFBQTtBQW1CZjs7QUFqQkE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFDakMsOENBQUE7RUFDQSw0Q0FBQTtBQXNCRjs7QUFwQkE7RUFDRSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFDOUIsOERBQUE7QUF5QkY7O0FBdkJBO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGtCQUFBO0VBQ2hDLHFEQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBOEJ0Qzs7QUE1QkE7RUFD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Lyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBBZG1pbiBEYXNoYm9hcmQgw6LCgMKUIFJlZGVzaWduZWQgU3R5bGVzXG4gICBQcmltYXJ5OiAjMWQ0ZWQ4IChSb3lhbCBCbHVlKSB8IEFjY2VudDogI2VmNDQ0NCAoQ3JpbXNvbilcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgSGVybyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG1pbi1oZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZEMzk5NSAwJSwgIzliNTliNiAzMCUsICM1NjI1RTggNjIlLCAjMDJhOGI1IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyOHB4IDI4cHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMjUzLDU3LDE0OSwuMyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMTQpO1xuXG4gIC8qIERvdC1ncmlkIG92ZXJsYXkgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XG4gIH1cbn1cblxuLmFkbWluLWhlcm8tYm9keSB7IHBhZGRpbmc6IDA7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgfVxuXG4vKiBGbG9hdGluZyBnbG93IG9yYnMgKi9cbi5hZG0taGVyby1nbG93IHsgcG9zaXRpb246IGFic29sdXRlOyBib3JkZXItcmFkaXVzOiA1MCU7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4uYWRtLWdsb3ctMSB7XG4gIHdpZHRoOiAzNDBweDsgaGVpZ2h0OiAzNDBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyLDE2OCwxODEsLjIyKSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgdG9wOiAtMTEwcHg7IHJpZ2h0OiAzJTtcbiAgYW5pbWF0aW9uOiBhZG0tZ2xvdy1mbG9hdCA3cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5hZG0tZ2xvdy0yIHtcbiAgd2lkdGg6IDIyMHB4OyBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1Myw1NywxNDksLjE1KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgYm90dG9tOiAtNzBweDsgbGVmdDogNiU7XG4gIGFuaW1hdGlvbjogYWRtLWdsb3ctZmxvYXQgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgcmV2ZXJzZTtcbn1cblxuLyogUHJlbWl1bSBBdmF0YXIgKi9cbi5hZG1pbi1oZXJvLWF2LXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNjhweDsgaGVpZ2h0OiA2OHB4O1xufVxuLmFkbWluLWhlcm8tYXYtcmluZzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHJnYmEoMjUzLDE2NCwxNzUsLjU1KTtcbiAgYW5pbWF0aW9uOiBhZG0tYXYtcm90YXRlIDEycyBsaW5lYXIgaW5maW5pdGU7XG59XG4uYWRtaW4taGVyby1hdi1ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YjU5YjYsICM1NjI1RTgsICMwMmE4YjUpO1xufVxuLmFkbWluLWhlcm8tYXYtY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogM3B4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YjU5YjYsICM1NjI1RTgpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZG1pbi1oZXJvLWF2LWluaXRpYWwge1xuICBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA5MDA7IGNvbG9yOiAjZmZmOyBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IDE0cHggcmdiYSgyNTMsNTcsMTQ5LC42KTsgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5hZG1pbi1oZXJvLWF2LXB1bHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1MywxNjQsMTc1LC4zNSk7XG4gIGFuaW1hdGlvbjogYWRtLWhlcm8tcHVsc2UgMi41cyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cblxuLyogQ2hpcCByb2xlICovXG4uYWRtaW4taGVyby1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC43cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDRweCAxMnB4OyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cblxuLyogTGl2ZSBiYWRnZSAqL1xuLmFkbS1oZXJvLWxpdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG4uYWRtLWhlcm8tbGl2ZS1kb3Qge1xuICB3aWR0aDogN3B4OyBoZWlnaHQ6IDdweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNGFkZTgwOyBmbGV4LXNocmluazogMDtcbiAgYW5pbWF0aW9uOiBhZG0tbGl2ZS1ibGluayAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4vKiBHbGFzcyBzdGF0IHBhbmVsICovXG4uYWRtLWhlcm8tZ2xhc3MtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMTgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjIycyBlYXNlO1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTYpOyB9XG59XG5cbi8qIE1pbmktc3RhdHMgKi9cbi5hZG1pbi1oZXJvLXN0YXQgeyBwYWRkaW5nOiAwIDE0cHg7IG1pbi13aWR0aDogODBweDsgfVxuLmFkbWluLWhlcm8tc3RhdC1kaXZpZGVyIHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAzNHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgfVxuXG4vKiBSZWZyZXNoIGJ1dHRvbiAqL1xuLmFkbWluLWhlcm8tcmVmcmVzaCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yOCk7XG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEyLjVweDsgZm9udC13ZWlnaHQ6IDYwMDsgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4yMnMgZWFzZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7IHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwuMTgpLCB0cmFuc3BhcmVudCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2U7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjYpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNDUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMjksNzgsMjE2LC4zKTtcbiAgICAmOjphZnRlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxuICB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBBbGVydCBCYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWRtaW4tYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZkZTY4YSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmZiZWIsICNmZmY4ZTEpICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuM3MgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDI0NSwxNTgsMTEsLjEpO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgS1BJIENhcmRzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbS1rcGkge1xuICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA1NSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCBib3gtc2hhZG93IC4ycyBlYXNlO1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuMzVzIGVhc2UgYm90aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjAxKTtcbiAgICBib3gtc2hhZG93OiAwIDE4cHggMzhweCByZ2JhKDAsMCwwLC4wOSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hZG0ta3BpLWJvZHkgeyBwYWRkaW5nOiAxOHB4IDE4cHggMTZweDsgfVxuXG4gIC5hZG0ta3BpLWljb24ge1xuICAgIHdpZHRoOiA0NnB4OyBoZWlnaHQ6IDQ2cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZsZXgtc2hyaW5rOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuYWRtLWtwaS1iYWRnZSB7XG4gICAgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBsZXR0ZXItc3BhY2luZzogLjNweDtcbiAgfVxuXG4gIC5hZG0ta3BpLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDJyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGxldHRlci1zcGFjaW5nOiAtLjVweDsgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBtYXJnaW46IDhweCAwIDJweDtcbiAgfVxuXG4gIC5hZG0ta3BpLWxhYmVsIHsgY29sb3I6ICM2YjcyODA7IGZvbnQtc2l6ZTogMTIuNXB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbiAgLmFkbS1rcGktYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wNik7IG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmFkbS1rcGktYmFyLWZpbGwge1xuICAgIGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xuICB9XG5cbiAgLmFkbS1rcGktdHJlbmQge1xuICAgIGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDJweDtcbiAgfVxufVxuXG4vKiBDb2xvciB2YXJpYW50cyAqL1xuLmFkbS1rcGktYmx1ZSAgIHtcbiAgLmFkbS1rcGktaWNvbiB7IGJhY2tncm91bmQ6IHJnYmEoNTcsNDQsMTI1LC4xKTsgY29sb3I6ICMzOTJDN0Q7IH1cbiAgLmFkbS1rcGktYmFkZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDU3LDQ0LDEyNSwuMSk7IGNvbG9yOiAjMzkyQzdEOyB9XG4gIC5hZG0ta3BpLXZhbHVlIHsgY29sb3I6ICMzOTJDN0Q7IH1cbiAgLmFkbS1rcGktYmFyLWZpbGwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzOTJDN0QsICM1NjI1RTgpOyB9XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDU3LDQ0LDEyNSwuMTIpICFpbXBvcnRhbnQ7IH1cbn1cbi5hZG0ta3BpLXJlZCAgICB7XG4gIC5hZG0ta3BpLWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwxOTMsNywuMTIpOyBjb2xvcjogI2I0NTMwOTsgfVxuICAuYWRtLWtwaS1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDE5Myw3LC4xMik7IGNvbG9yOiAjYjQ1MzA5OyB9XG4gIC5hZG0ta3BpLXZhbHVlIHsgY29sb3I6ICNiNDUzMDk7IH1cbiAgLmFkbS1rcGktYmFyLWZpbGwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkMxMDcsICNmNTllMGIpOyB9XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDI1NSwxOTMsNywuMTIpICFpbXBvcnRhbnQ7IH1cbn1cbi5hZG0ta3BpLWRhbmdlciB7XG4gIC5hZG0ta3BpLWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDg2LDM3LDIzMiwuMSk7IGNvbG9yOiAjNTYyNUU4OyB9XG4gIC5hZG0ta3BpLWJhZGdlIHsgYmFja2dyb3VuZDogcmdiYSg4NiwzNywyMzIsLjEpOyBjb2xvcjogIzU2MjVFODsgfVxuICAuYWRtLWtwaS12YWx1ZSB7IGNvbG9yOiAjNTYyNUU4OyB9XG4gIC5hZG0ta3BpLWJhci1maWxsIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTYyNUU4LCAjMDJhOGI1KTsgfVxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg4NiwzNywyMzIsLjEpICFpbXBvcnRhbnQ7IH1cbn1cbi5hZG0ta3BpLWdyZWVuICB7XG4gIC5hZG0ta3BpLWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDMsMjAxLDkwLC4xKTsgY29sb3I6ICMwM0M5NUE7IH1cbiAgLmFkbS1rcGktYmFkZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDMsMjAxLDkwLC4xKTsgY29sb3I6ICMwM0M5NUE7IH1cbiAgLmFkbS1rcGktdmFsdWUgeyBjb2xvcjogIzAzQzk1QTsgfVxuICAuYWRtLWtwaS1iYXItZmlsbCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAzQzk1QSwgIzEwYjk4MSk7IH1cbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMywyMDEsOTAsLjEyKSAhaW1wb3J0YW50OyB9XG59XG4uYWRtLWtwaS1jeWFuICAge1xuICAuYWRtLWtwaS1pY29uIHsgYmFja2dyb3VuZDogcmdiYSgxMywyMDIsMjQwLC4xMik7IGNvbG9yOiAjMDI4NGM3OyB9XG4gIC5hZG0ta3BpLWJhZGdlIHsgYmFja2dyb3VuZDogcmdiYSgxMywyMDIsMjQwLC4xMik7IGNvbG9yOiAjMDI4NGM3OyB9XG4gIC5hZG0ta3BpLXZhbHVlIHsgY29sb3I6ICMwMjg0Yzc7IH1cbiAgLmFkbS1rcGktYmFyLWZpbGwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwRENBRjAsICMwZWE1ZTkpOyB9XG59XG4uYWRtLWtwaS12aW9sZXQge1xuICAuYWRtLWtwaS1pY29uIHsgYmFja2dyb3VuZDogcmdiYSg4NiwzNywyMzIsLjEpOyBjb2xvcjogIzU2MjVFODsgfVxuICAuYWRtLWtwaS1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoODYsMzcsMjMyLC4xKTsgY29sb3I6ICM1NjI1RTg7IH1cbiAgLmFkbS1rcGktdmFsdWUgeyBjb2xvcjogIzU2MjVFODsgfVxuICAuYWRtLWtwaS1iYXItZmlsbCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzU2MjVFOCwgIzliNTliNik7IH1cbn1cbi5hZG0ta3BpLXRlYWwgICB7XG4gIC5hZG0ta3BpLWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKDIsMTY4LDE4MSwuMTIpOyBjb2xvcjogIzAyYThiNTsgfVxuICAuYWRtLWtwaS1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoMiwxNjgsMTgxLC4xMik7IGNvbG9yOiAjMDJhOGI1OyB9XG4gIC5hZG0ta3BpLXZhbHVlIHsgY29sb3I6ICMwMmE4YjU7IH1cbiAgLmFkbS1rcGktYmFyLWZpbGwgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMmE4YjUsICMwRENBRjApOyB9XG59XG4uYWRtLWtwaS1waW5rICAge1xuICAuYWRtLWtwaS1pY29uIHsgYmFja2dyb3VuZDogcmdiYSg4NiwzNywyMzIsLjA4KTsgY29sb3I6ICM5YjU5YjY7IH1cbiAgLmFkbS1rcGktYmFkZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDg2LDM3LDIzMiwuMDgpOyBjb2xvcjogIzliNTliNjsgfVxuICAuYWRtLWtwaS12YWx1ZSB7IGNvbG9yOiAjOWI1OWI2OyB9XG4gIC5hZG0ta3BpLWJhci1maWxsIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOWI1OWI2LCAjNTYyNUU4KTsgfVxufVxuXG4vLyBTdGFnZ2VyZWQgYW5pbWF0aW9uIGZvciBjYXJkIHJvd3Ncbi5yb3cgPiBbY2xhc3MqPVwiY29sXCJdOm50aC1jaGlsZCgxKSAuYWRtLWtwaSB7IGFuaW1hdGlvbi1kZWxheTogMHM7IH1cbi5yb3cgPiBbY2xhc3MqPVwiY29sXCJdOm50aC1jaGlsZCgyKSAuYWRtLWtwaSB7IGFuaW1hdGlvbi1kZWxheTogMC4wN3M7IH1cbi5yb3cgPiBbY2xhc3MqPVwiY29sXCJdOm50aC1jaGlsZCgzKSAuYWRtLWtwaSB7IGFuaW1hdGlvbi1kZWxheTogMC4xNHM7IH1cbi5yb3cgPiBbY2xhc3MqPVwiY29sXCJdOm50aC1jaGlsZCg0KSAuYWRtLWtwaSB7IGFuaW1hdGlvbi1kZWxheTogMC4yMXM7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIENoYXJ0IENhcmRzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbS1jaGFydC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNikgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDAsMCwwLC4wOCkgIWltcG9ydGFudDsgfVxuXG4gIC5hZG0tY2hhcnQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQ4LDI1MCwyNTIsLjkpLCByZ2JhKDI0MSwyNDUsMjQ5LC43KSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA1KTtcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgaDYgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMWExYTJiOyBtYXJnaW46IDA7IH1cbiAgICAuYWRtLWNoYXJ0LWJhZGdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDsgY29sb3I6ICM2YjcyODA7IGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cblxuICAuYWRtLWNoYXJ0LWJvZHkgeyBwYWRkaW5nOiAxMnB4IDE2cHg7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFF1aWNrIEFjdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWRtLXF1aWNrLWxpbmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU3LDQ0LDEyNSwuMDMpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjk1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoODYsMzcsMjMyLC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoODYsMzcsMjMyLC4wOCk7XG4gICAgLmFkbS1xbC1hcnJvdyB7IGNvbG9yOiAjNTYyNUU4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxuICB9XG59XG4uYWRtLXFsLWFycm93IHsgdHJhbnNpdGlvbjogY29sb3IgLjE4cywgdHJhbnNmb3JtIC4xOHM7IH1cbi5hZG0tcWwtaWNvbiB7XG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxOHB4O1xufVxuLmFkbS1xbC1hcnJvdyB7IGNvbG9yOiAjOWNhM2FmOyB0cmFuc2l0aW9uOiBjb2xvciAuMThzOyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBSb2xlIERvdHMgLyBMZWdlbmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucm9sZS1kb3QgeyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgUmFuayBCYWRnZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmFuay1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjNmI3MjgwOyBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuXG4gICYucmFuay0xIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZiYmYyNCwgI2Y1OWUwYik7IGNvbG9yOiAjZmZmOyBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgyNDUsMTU4LDExLC4zNSk7IH1cbiAgJi5yYW5rLTIgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDFkNWRiLCAjOWNhM2FmKTsgY29sb3I6ICNmZmY7IH1cbiAgJi5yYW5rLTMgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDk3NzA2LCAjYjQ1MzA5KTsgY29sb3I6ICNmZmY7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFRvcCBDb3VycyBUYWJsZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG0tdG9wLXRhYmxlIHtcbiAgdGhlYWQgdHIgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjUzLDU3LDE0OSwuMDUpLCByZ2JhKDg2LDM3LDIzMiwuMDMpKTsgfVxuICB0aGVhZCB0aCB7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM0NzU1Njk7IGxldHRlci1zcGFjaW5nOiAuNHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTMsNTcsMTQ5LC4xMikgIWltcG9ydGFudDsgcGFkZGluZzogMTBweCAxMnB4OyB9XG4gIHRib2R5IHRyOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTMsNTcsMTQ5LC4wMyk7IH1cbiAgdGJvZHkgdGQgeyBwYWRkaW5nOiAxMHB4IDEycHg7IGZvbnQtc2l6ZTogMTNweDsgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU2tlbGV0b24gTG9hZGluZyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5za2VsZXRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YwZjRmOCAyNSUsICNlMGU4ZjAgNTAlLCAjZjBmNGY4IDc1JSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IHNoaW1tZXIgMS40cyBpbmZpbml0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICYuc2tlbGV0b24tbGluZSB7IGhlaWdodDogMTRweDsgYm9yZGVyLXJhZGl1czogNHB4OyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBBbmltYXRpb25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBEQVJLIE1PREUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG46aG9zdC1jb250ZXh0KC5kYXJrLW1vZGUpIHtcbiAgLmFkbS1rcGkge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmIgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50O1xuICAgIC5hZG0ta3BpLWxhYmVsIHsgY29sb3I6ICM5NGEzYjg7IH1cbiAgICAuYWRtLWtwaS1iYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wOCk7IH1cbiAgfVxuICAuYWRtLWNoYXJ0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmIgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50O1xuICAgIC5hZG0tY2hhcnQtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNiwyNiw0MywuOTUpLCByZ2JhKDE3LDE3LDI1LC44KSk7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNyk7XG4gICAgICBoNiB7IGNvbG9yOiAjZTJlOGYwOyB9XG4gICAgICAuYWRtLWNoYXJ0LWJhZGdlIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDgpOyBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpOyBjb2xvcjogIzk0YTNiODsgfVxuICAgIH1cbiAgfVxuICAuYWRtLXF1aWNrLWxpbmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA0KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA4KTtcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDgpOyBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgfVxuICB9XG4gIC5hZG1pbi1hbGVydCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI0NSwxNTgsMTEsLjEpLCByZ2JhKDI0NSwxNTgsMTEsLjA2KSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LDE1OCwxMSwuMykgIWltcG9ydGFudDtcbiAgfVxuICAucmFuay1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA4KTsgY29sb3I6ICM5NGEzYjg7IH1cbiAgLmFkbS10b3AtdGFibGUge1xuICAgIHRoZWFkIHRyIHsgYmFja2dyb3VuZDogcmdiYSgyNTMsNTcsMTQ5LC4wNik7IH1cbiAgICB0aGVhZCB0aCB7IGNvbG9yOiAjOTRhM2I4OyBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1Myw1NywxNDksLjE1KSAhaW1wb3J0YW50OyB9XG4gICAgdGJvZHkgdHI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNCkgIWltcG9ydGFudDsgfVxuICB9XG4gIC5za2VsZXRvbiB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhMWEyYiAyNSUsICMyMjIyMzUgNTAlLCAjMWExYTJiIDc1JSk7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cbn1cblxuQGtleWZyYW1lcyBhZG0taGVyby1wdWxzZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogLjU7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS41NSk7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBhZG0tZ2xvdy1mbG9hdCB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjJweCkgc2NhbGUoMS4wNCk7IH1cbn1cblxuQGtleWZyYW1lcyBhZG0tYXYtcm90YXRlIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgYWRtLWxpdmUtYmxpbmsge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlICAgICAgIHsgb3BhY2l0eTogLjQ7IHRyYW5zZm9ybTogc2NhbGUoLjgpOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AdminDashboardComponent;
})();

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
//# sourceMappingURL=6330.js.map