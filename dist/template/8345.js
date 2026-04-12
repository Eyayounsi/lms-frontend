"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8345],{

/***/ 18345:
/*!********************************************************************************************!*\
  !*** ./src/app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuperadminDashboardComponent: () => (/* binding */ SuperadminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_superadmin_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/superadmin-api.service */ 6816);








const _c0 = ["donutChart"];
const _c1 = ["barChart"];
const _c2 = ["lineChart"];
const _c3 = () => [1, 2, 3, 4];
const _forTrack0 = ($index, $item) => $item.role;
function SuperadminDashboardComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00B7 MAJ ", ctx_r0.lastUpdated);
  }
}
function SuperadminDashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.totalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.activeUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.blockedUsers);
  }
}
function SuperadminDashboardComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.currentTime);
  }
}
function SuperadminDashboardComponent_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38)(1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 47)(4, "div", 48)(5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SuperadminDashboardComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, SuperadminDashboardComponent_Conditional_35_For_2_Template, 6, 0, "div", 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 37)(4, "div", 39)(5, "div", 40)(6, "div", 41)(7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 22)(12, "div", 40)(13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](0, _c3));
  }
}
function SuperadminDashboardComponent_Conditional_36_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "apx-chart", 112);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.lineSeries)("chart", ctx_r0.lineOptions.chart)("colors", ctx_r0.lineOptions.colors)("fill", ctx_r0.lineOptions.fill)("stroke", ctx_r0.lineOptions.stroke)("markers", ctx_r0.lineOptions.markers)("xaxis", ctx_r0.lineOptions.xaxis)("yaxis", ctx_r0.lineOptions.yaxis)("grid", ctx_r0.lineOptions.grid)("tooltip", ctx_r0.lineOptions.tooltip)("dataLabels", ctx_r0.lineOptions.dataLabels);
  }
}
function SuperadminDashboardComponent_Conditional_36_Conditional_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "apx-chart", 117);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.donutSeries)("chart", ctx_r0.donutOptions.chart)("labels", ctx_r0.donutOptions.labels)("colors", ctx_r0.donutOptions.colors)("legend", ctx_r0.donutOptions.legend)("dataLabels", ctx_r0.donutOptions.dataLabels)("plotOptions", ctx_r0.donutOptions.plotOptions)("tooltip", ctx_r0.donutOptions.tooltip)("responsive", ctx_r0.donutOptions.responsive);
  }
}
function SuperadminDashboardComponent_Conditional_36_For_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121)(1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 106)(6, "small", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.getRoleColor(entry_r2.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getRoleLabel(entry_r2.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", entry_r2.count, " utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.getRoleColor(entry_r2.role) + "18")("color", ctx_r0.getRoleColor(entry_r2.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", entry_r2.percent, "%");
  }
}
function SuperadminDashboardComponent_Conditional_36_Conditional_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.totalUsers);
  }
}
function SuperadminDashboardComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 55)(6, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 37)(13, "div", 38)(14, "div", 59)(15, "div", 46)(16, "div", 60)(17, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Utilisateurs enregistr\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 38)(28, "div", 68)(29, "div", 46)(30, "div", 60)(31, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Comptes actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 38)(42, "div", 74)(43, "div", 46)(44, "div", 60)(45, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "h2", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Comptes bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 38)(56, "div", 80)(57, "div", 46)(58, "div", 60)(59, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Ce mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Nouvelles inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 37)(70, "div", 38)(71, "div", 85)(72, "div", 46)(73, "div", 60)(74, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Sant\u00E9 de la plateforme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 38)(85, "div", 90)(86, "div", 46)(87, "div", 60)(88, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "R\u00F4les");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "h2", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Types de comptes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 38)(99, "div", 96)(100, "div", 46)(101, "div", 60)(102, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Admins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h2", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Admins d\u00E9l\u00E9gu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 38)(113, "div", 102)(114, "div", 46)(115, "div", 60)(116, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](117, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Croissance");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "h2", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Inscriptions ce mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](125, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 37)(127, "div", 39)(128, "div", 104)(129, "div", 105)(130, "div", 106)(131, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div")(134, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "\u00C9volution des Inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Nouvelles inscriptions par mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](139, SuperadminDashboardComponent_Conditional_36_Conditional_139_Template, 1, 11, "apx-chart", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 22)(141, "div", 113)(142, "div", 105)(143, "div", 106)(144, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div")(147, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "Statut des Comptes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Actifs vs Bloqu\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](152, SuperadminDashboardComponent_Conditional_36_Conditional_152_Template, 1, 9, "apx-chart", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "div", 37)(154, "div", 39)(155, "div", 104)(156, "div", 105)(157, "div", 106)(158, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div")(161, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "Utilisateurs par R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "R\u00E9partition par type de compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "apx-chart", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](168, SuperadminDashboardComponent_Conditional_36_For_169_Template, 10, 9, "div", 121, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 22)(171, "div", 113)(172, "div", 105)(173, "div", 106)(174, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](175, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div")(177, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "Acc\u00E8s Rapides");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "Fonctionnalit\u00E9s principales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 124)(182, "div", 125)(183, "a", 126)(184, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](185, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "div", 55)(187, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "G\u00E9rer les Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "small", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "Acc\u00E8s, blocage, promotion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](192, SuperadminDashboardComponent_Conditional_36_Conditional_192_Template, 2, 1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](193, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "a", 126)(195, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](196, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "div", 55)(198, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Logs Syst\u00E8me");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "small", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "Journaux techniques");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](202, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "a", 126)(204, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](205, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "div", 55)(207, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "small", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "Param\u00E8tres du compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](211, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "div", 137)(213, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](214, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216, "Sant\u00E9 de la plateforme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "div", 141)(218, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](223, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("--sa-health-c", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Sant\u00E9 plateforme\u00A0: ", ctx_r0.platformHealth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("\u2014 ", ctx_r0.stats.activeUsers, "\u00A0comptes actifs sur ", ctx_r0.stats.totalUsers, "\u00A0enregistr\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.healthColor + "18")("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.activeRate, "% actifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.totalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.activeRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.activeUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.activeRate + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.blockedRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.blockedUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.blockedRate + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.newThisMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.healthColor + "18");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.healthColor + "18")("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.platformHealth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.activeRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.healthColor)("width", ctx_r0.activeRate + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.roleEntries.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.usersByRole["ADMIN"] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.stats.totalUsers > 0 ? (ctx_r0.stats.usersByRole["ADMIN"] || 0) / ctx_r0.stats.totalUsers * 100 + "%" : "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("+", ctx_r0.newThisMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.lineSeries.length > 0 ? 139 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.donutSeries.length > 0 ? 152 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx_r0.barSeries)("chart", ctx_r0.barOptions.chart)("plotOptions", ctx_r0.barOptions.plotOptions)("colors", ctx_r0.barOptions.colors)("dataLabels", ctx_r0.barOptions.dataLabels)("xaxis", ctx_r0.barOptions.xaxis)("yaxis", ctx_r0.barOptions.yaxis)("grid", ctx_r0.barOptions.grid)("tooltip", ctx_r0.barOptions.tooltip)("legend", ctx_r0.barOptions.legend);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r0.roleEntries);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.stats ? 192 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_logs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadminSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.activeRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.healthColor + "18")("color", ctx_r0.healthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.platformHealth, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.healthColor)("width", ctx_r0.activeRate + "%");
  }
}
let SuperadminDashboardComponent = /*#__PURE__*/(() => {
  class SuperadminDashboardComponent {
    superAdminApi;
    cdr;
    donutChart;
    barChart;
    lineChart;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    userName = localStorage.getItem('fullName') || 'Super Administrateur';
    // Stats brutes
    stats = null;
    loading = true;
    newThisMonth = 0;
    lastUpdated = null;
    currentTime = '';
    clockInterval;
    // ─── Computed getters ─────────────────────────────────────────────────────
    get userHeroInitials() {
      return this.userName.trim().split(/\s+/).map(w => w.charAt(0).toUpperCase()).join('').slice(0, 2) || 'SA';
    }
    get activeRate() {
      if (!this.stats || this.stats.totalUsers === 0) return 0;
      return Math.round(this.stats.activeUsers / this.stats.totalUsers * 100);
    }
    get blockedRate() {
      if (!this.stats || this.stats.totalUsers === 0) return 0;
      return Math.round(this.stats.blockedUsers / this.stats.totalUsers * 100);
    }
    get platformHealth() {
      const r = this.activeRate;
      if (r >= 85) return 'Excellente';
      if (r >= 60) return 'Bonne';
      return 'Critique';
    }
    get healthColor() {
      const h = this.platformHealth;
      if (h === 'Excellente') return '#22c55e';
      if (h === 'Bonne') return '#f59e0b';
      return '#ef4444';
    }
    get roleEntries() {
      if (!this.stats?.usersByRole) return [];
      const total = Object.values(this.stats.usersByRole).reduce((a, b) => a + b, 0);
      return Object.entries(this.stats.usersByRole).map(([role, count]) => ({
        role,
        count,
        percent: total > 0 ? Math.round(count / total * 100) : 0
      })).sort((a, b) => b.count - a.count);
    }
    // ─── Donut : Actifs vs Bloqués ────────────────────────────────────────────
    donutSeries = [];
    donutOptions = {
      chart: {
        type: 'donut',
        height: 260,
        fontFamily: 'inherit',
        animations: {
          enabled: true,
          speed: 800
        }
      },
      labels: ['Actifs', 'Bloqués'],
      colors: ['#38bdf8', '#7c3aed'],
      legend: {
        position: 'bottom',
        fontFamily: 'inherit',
        fontSize: '13px',
        labels: {
          colors: '#64748b'
        }
      },
      dataLabels: {
        enabled: true,
        formatter: val => `${val.toFixed(1)}%`,
        style: {
          fontSize: '11px',
          fontWeight: '600'
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '68%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '13px',
                fontWeight: '600',
                color: '#64748b'
              },
              value: {
                show: true,
                fontSize: '28px',
                fontWeight: '800',
                color: '#0f172a',
                formatter: val => parseInt(val).toString()
              },
              total: {
                show: true,
                label: 'Total',
                fontSize: '13px',
                fontWeight: '700',
                color: '#475569',
                formatter: w => w.globals.seriesTotals.reduce((a, b) => a + b, 0).toString()
              }
            }
          }
        }
      },
      tooltip: {
        y: {
          formatter: val => `${val} utilisateur(s)`
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 220
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    // ─── Bar : Utilisateurs par rôle ─────────────────────────────────────────
    barSeries = [];
    barOptions = {
      chart: {
        type: 'bar',
        height: 290,
        fontFamily: 'inherit',
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 700
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '52%',
          distributed: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#5625E8', '#7c3aed', '#392C7D', '#0DCAF0', '#020c18'],
      dataLabels: {
        enabled: true,
        offsetY: -18,
        style: {
          fontWeight: '700',
          fontSize: '12px',
          colors: ['#374151']
        }
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            fontWeight: '600',
            fontSize: '12px',
            colors: '#6b7280'
          }
        }
      },
      yaxis: {
        title: {
          text: 'Utilisateurs',
          style: {
            fontWeight: '600',
            color: '#6b7280'
          }
        },
        min: 0
      },
      grid: {
        borderColor: '#EEF0FF',
        strokeDashArray: 4,
        padding: {
          top: 20
        }
      },
      tooltip: {
        y: {
          formatter: val => `${val} utilisateur(s)`
        }
      },
      legend: {
        show: false
      }
    };
    // ─── Line : Inscriptions par mois ────────────────────────────────────────
    lineSeries = [];
    lineOptions = {
      chart: {
        type: 'area',
        height: 270,
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 900
        }
      },
      colors: ['#5625E8'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.02,
          stops: [0, 90, 100],
          colorStops: [{
            offset: 0,
            color: '#5625E8',
            opacity: 0.4
          }, {
            offset: 100,
            color: '#0DCAF0',
            opacity: 0.02
          }]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      markers: {
        size: 5,
        colors: ['#fff'],
        strokeColors: '#5625E8',
        strokeWidth: 2.5,
        hover: {
          size: 7
        }
      },
      xaxis: {
        categories: [],
        labels: {
          rotate: -40,
          style: {
            fontSize: '11px',
            colors: '#6b7280'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: v => Math.round(v).toString(),
          style: {
            colors: '#6b7280'
          }
        }
      },
      grid: {
        borderColor: '#EEF0FF',
        strokeDashArray: 4,
        padding: {
          top: 5,
          bottom: 5
        }
      },
      tooltip: {
        x: {
          show: true
        },
        y: {
          formatter: val => `${val} inscription(s)`
        },
        theme: 'light'
      },
      dataLabels: {
        enabled: false
      }
    };
    constructor(superAdminApi, cdr) {
      this.superAdminApi = superAdminApi;
      this.cdr = cdr;
    }
    ngOnInit() {
      this.loadStats();
      this.startClock();
    }
    ngOnDestroy() {
      if (this.clockInterval) clearInterval(this.clockInterval);
    }
    startClock() {
      const update = () => {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      };
      update();
      this.clockInterval = setInterval(update, 1000);
    }
    loadStats() {
      this.loading = true;
      this.superAdminApi.getSuperStats().subscribe({
        next: data => {
          this.stats = data;
          this.buildCharts(data);
          this.loading = false;
          this.lastUpdated = new Date().toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
          });
          this.cdr.detectChanges();
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            toast: true,
            position: 'bottom-end',
            icon: 'success',
            title: 'Statistiques actualisées',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            background: '#f8faff',
            color: '#1e293b',
            iconColor: '#38bdf8'
          });
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    confirmRefresh() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
        title: 'Actualiser les statistiques ?',
        html: '<p style="color:#6b7280;margin:0">Les données seront rechargées depuis le serveur.</p>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#5625E8',
        cancelButtonColor: '#9b59b6',
        cancelButtonText: 'Annuler',
        confirmButtonText: '<i class="ti ti-refresh"></i>&nbsp;Actualiser',
        timer: 10000,
        timerProgressBar: true
      }).then(result => {
        if (result.isConfirmed || result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason).timer) {
          this.loadStats();
        }
      });
    }
    buildCharts(data) {
      // Donut
      this.donutSeries = [data.activeUsers ?? 0, data.blockedUsers ?? 0];
      // Bar
      const roleLabels = {
        STUDENT: 'Étudiants',
        INSTRUCTOR: 'Instructeurs',
        ADMIN: 'Admins',
        RECRUITER: 'Recruteurs',
        SUPERADMIN: 'SuperAdmin'
      };
      const roles = Object.keys(data.usersByRole ?? {});
      const roleValues = roles.map(r => data.usersByRole[r] ?? 0);
      this.barSeries = [{
        name: 'Utilisateurs',
        data: roleValues
      }];
      this.barOptions = {
        ...this.barOptions,
        xaxis: {
          ...this.barOptions.xaxis,
          categories: roles.map(r => roleLabels[r] || r)
        }
      };
      // Line
      const months = Object.keys(data.registrationsByMonth ?? {});
      const monthValues = months.map(m => data.registrationsByMonth[m] ?? 0);
      // Calculer les inscriptions ce mois-ci pour la carte
      const now = new Date();
      const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
      this.newThisMonth = data.registrationsByMonth?.[currentKey] ?? 0;
      this.lineSeries = [{
        name: 'Inscriptions',
        data: monthValues
      }];
      this.lineOptions = {
        ...this.lineOptions,
        xaxis: {
          ...this.lineOptions.xaxis,
          categories: months.map(m => {
            const [year, month] = m.split('-');
            return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('fr-FR', {
              month: 'short',
              year: '2-digit'
            });
          })
        }
      };
    }
    getRoleIcon(role) {
      const icons = {
        STUDENT: 'ti ti-school',
        INSTRUCTOR: 'ti ti-chalkboard',
        ADMIN: 'ti ti-shield',
        RECRUITER: 'ti ti-briefcase',
        SUPERADMIN: 'ti ti-shield-bolt'
      };
      return icons[role] || 'ti ti-user';
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
    getRoleColor(role) {
      const colors = {
        STUDENT: '#5625E8',
        INSTRUCTOR: '#38bdf8',
        ADMIN: '#9b59b6',
        RECRUITER: '#0DCAF0',
        SUPERADMIN: '#392C7D'
      };
      return colors[role] || '#6b7280';
    }
    static ɵfac = function SuperadminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SuperadminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_superadmin_api_service__WEBPACK_IMPORTED_MODULE_7__.SuperAdminApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SuperadminDashboardComponent,
      selectors: [["app-superadmin-dashboard"]],
      viewQuery: function SuperadminDashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.donutChart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.barChart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.lineChart = _t.first);
        }
      },
      decls: 37,
      vars: 7,
      consts: [[1, "sa-hero", "mb-4"], [1, "sa-hero-glow", "sa-glow-1"], [1, "sa-hero-glow", "sa-glow-2"], [1, "row", "align-items-center", "position-relative", 2, "z-index", "2"], [1, "col-lg-7", "mb-3", "mb-lg-0"], [1, "d-flex", "align-items-center", "gap-3"], [1, "sa-hero-av-wrap"], [1, "sa-hero-av-ring1"], [1, "sa-hero-av-border"], [1, "sa-hero-av-circle"], [1, "sa-hero-av-initial"], [1, "sa-hero-av-crown"], [1, "ti", "ti-shield-bolt"], [1, "sa-hero-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "sa-tier-chip"], [1, "ti", "ti-shield-star", "me-1"], [1, "sa-live-badge"], [1, "sa-live-dot"], [1, "mb-0", "text-white", "fw-bold", "lh-sm"], [1, "mb-0", "text-white-50", "small"], [1, "opacity-60"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-2", "flex-wrap"], [1, "d-none", "d-md-flex", "align-items-center", "gap-1", "sa-stats-row", "me-1"], [1, "sa-time-badge"], [1, "sa-hero-btn", "sa-hero-btn-solid", 3, "click"], [1, "ti", "ti-refresh", "me-1"], [1, "sa-stat-pill"], [1, "ti", "ti-users", "me-1"], [1, "fw-bold"], [1, "sa-stat-label"], [1, "sa-stat-pill", "sa-stat-green"], [1, "ti", "ti-circle-check", "me-1"], [1, "sa-stat-pill", "sa-stat-red"], [1, "ti", "ti-ban", "me-1"], [1, "ti", "ti-clock", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-xl-3"], [1, "col-lg-7"], [1, "card", "border-0", "shadow-sm", 2, "height", "340px"], [1, "card-body", "d-flex", "align-items-center", "justify-content-center"], [1, "text-center", "text-muted"], [1, "ti", "ti-chart-area-line", "d-block", "mb-2", 2, "font-size", "36px", "opacity", ".12"], [1, "sa-skeleton", 2, "width", "180px", "height", "180px", "border-radius", "50%"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "sa-skeleton", "sa-skeleton-line", "w-50", "mb-2"], [1, "sa-skeleton", "sa-skeleton-line", "w-75", "mb-3", 2, "height", "28px"], [1, "sa-skeleton", "sa-skeleton-line", "w-100"], [1, "row", "mb-4"], [1, "col-12"], [1, "sa-health-alert", "card", "border-0"], [1, "card-body", "py-3", "px-4", "d-flex", "align-items-center", "gap-3"], [1, "sa-pulse-dot"], [1, "flex-grow-1"], [1, "fw-bold", "small"], [1, "text-muted", "small", "ms-2"], [1, "badge", "rounded-pill", "fw-semibold"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-primary"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "icon-box", "bg-primary-transparent"], [1, "ti", "ti-users", "fs-20", "text-primary"], [1, "badge", "bg-primary-transparent", "text-primary", "rounded-pill"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-2"], [1, "progress", "sa-kpi-bar"], [1, "progress-bar", "bg-primary", 2, "width", "100%"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-success"], [1, "icon-box", 2, "background", "rgba(56,189,248,.15)"], [1, "ti", "ti-circle-check", "fs-20", 2, "color", "#0284c7"], [1, "badge", "rounded-pill", 2, "background", "rgba(56,189,248,.15)", "color", "#0284c7"], [1, "fw-bold", "mb-1", 2, "color", "#0284c7"], [1, "progress-bar", 2, "background", "linear-gradient(90deg,#38bdf8,#0284c7)"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-danger"], [1, "icon-box", 2, "background", "rgba(155,91,182,.12)"], [1, "ti", "ti-ban", "fs-20", 2, "color", "#9b59b6"], [1, "badge", "rounded-pill", 2, "background", "rgba(155,91,182,.12)", "color", "#9b59b6"], [1, "fw-bold", "mb-1", 2, "color", "#9b59b6"], [1, "progress-bar", 2, "background", "#9b59b6"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-warning"], [1, "icon-box", 2, "background", "rgba(13,202,240,.12)"], [1, "ti", "ti-user-plus", "fs-20", 2, "color", "#0284c7"], [1, "badge", "rounded-pill", 2, "background", "rgba(13,202,240,.12)", "color", "#0284c7"], [1, "progress-bar", 2, "background", "linear-gradient(90deg,#5625E8,#0DCAF0)", "width", "65%"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-health"], [1, "icon-box"], [1, "ti", "ti-activity", "fs-20"], [1, "badge", "rounded-pill"], [1, "progress-bar"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-violet"], [1, "icon-box", 2, "background", "rgba(86,37,232,.1)"], [1, "ti", "ti-shield-bolt", "fs-20", 2, "color", "#5625E8"], [1, "badge", "rounded-pill", 2, "background", "rgba(86,37,232,.1)", "color", "#5625E8"], [1, "fw-bold", "mb-1", 2, "color", "#5625E8"], [1, "progress-bar", 2, "background", "linear-gradient(90deg,#5625E8,#0DCAF0)", "width", "100%"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-teal"], [1, "icon-box", 2, "background", "rgba(13,58,102,.1)"], [1, "ti", "ti-user-shield", "fs-20", 2, "color", "#0d3a66"], [1, "badge", "rounded-pill", 2, "background", "rgba(13,58,102,.1)", "color", "#0d3a66"], [1, "fw-bold", "mb-1", 2, "color", "#0d3a66"], [1, "progress-bar", 2, "background", "#0d3a66"], [1, "card", "border-0", "shadow-sm", "sa-kpi", "sa-kpi-pink"], [1, "ti", "ti-trending-up", "fs-20", 2, "color", "#5625E8"], [1, "card", "border-0", "shadow-sm", "sa-chart-card"], [1, "card-header", "bg-transparent", "border-0", "pb-0", "pt-3", "px-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "icon-box", 2, "background", "rgba(86,37,232,.1)", "width", "36px", "height", "36px"], [1, "ti", "ti-trending-up", "fs-18", 2, "color", "#5625E8"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "card-body", "pt-2"], [3, "series", "chart", "colors", "fill", "stroke", "markers", "xaxis", "yaxis", "grid", "tooltip", "dataLabels"], [1, "card", "border-0", "shadow-sm", "h-100", "sa-chart-card"], [1, "icon-box", "bg-primary-transparent", 2, "width", "36px", "height", "36px"], [1, "ti", "ti-chart-donut", "text-primary", "fs-18"], [1, "card-body", "pt-2", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "tooltip", "responsive"], [1, "ti", "ti-chart-bar", "text-primary", "fs-18"], [3, "series", "chart", "plotOptions", "colors", "dataLabels", "xaxis", "yaxis", "grid", "tooltip", "legend"], [1, "mt-3", "pt-2", "border-top"], [1, "d-flex", "align-items-center", "justify-content-between", "py-1"], [1, "icon-box", 2, "background", "rgba(13,202,240,.1)", "width", "36px", "height", "36px"], [1, "ti", "ti-bolt", "fs-18", 2, "color", "#0284c7"], [1, "card-body", "pt-3"], [1, "d-flex", "flex-column", "gap-2"], [1, "sa-quick-link", 3, "routerLink"], [1, "sa-quick-icon", 2, "background", "rgba(99,102,241,.1)"], [1, "ti", "ti-users", 2, "color", "#6366f1"], [1, "fw-semibold", "mb-0", "small"], [1, "text-muted"], [1, "badge", "rounded-pill", 2, "background", "rgba(99,102,241,.1)", "color", "#6366f1", "font-size", "11px"], [1, "ti", "ti-chevron-right", "text-muted", "small"], [1, "sa-quick-icon", 2, "background", "rgba(139,92,246,.1)"], [1, "ti", "ti-file-analytics", 2, "color", "#8b5cf6"], [1, "sa-quick-icon", 2, "background", "rgba(13,202,240,.1)"], [1, "ti", "ti-user-circle", 2, "color", "#0284c7"], [1, "sa-health-box", "mt-3"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "ti", "ti-activity"], [1, "fw-semibold", "small"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", 2, "font-size", "1.5rem"], [1, "progress", "mt-2", 2, "height", "6px", "border-radius", "4px"], [1, "sa-role-dot"], [1, "fw-semibold"]],
      template: function SuperadminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9)(10, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div")(16, "div", 14)(17, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Super Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "EN DIRECT");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Vue globale de la plateforme ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](27, SuperadminDashboardComponent_Conditional_27_Template, 2, 1, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 22)(29, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](30, SuperadminDashboardComponent_Conditional_30_Template, 19, 3, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](31, SuperadminDashboardComponent_Conditional_31_Template, 3, 1, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SuperadminDashboardComponent_Template_button_click_32_listener() {
            return ctx.confirmRefresh();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](35, SuperadminDashboardComponent_Conditional_35_Template, 15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](36, SuperadminDashboardComponent_Conditional_36_Template, 224, 73);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userHeroInitials);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Bienvenue, ", ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.lastUpdated ? 27 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.stats ? 30 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.currentTime ? 31 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.loading ? 35 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.loading && ctx.stats ? 36 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.NgApexchartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.sa-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #020c18 0%, #0a1a2e 25%, #0d3a66 50%, #5625E8 75%, #0DCAF0 100%);\n  border-radius: 20px;\n  padding: 28px 32px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(86, 37, 232, 0.3);\n  animation: _ngcontent-%COMP%_sa-fadeIn 0.4s ease;\n  \n\n}\n.sa-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px);\n  background-size: 24px 24px;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.sa-hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.sa-glow-1[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n  background: radial-gradient(circle, rgba(13, 202, 240, 0.22) 0%, transparent 70%);\n  top: -100px;\n  right: 0%;\n}\n\n.sa-glow-2[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);\n  bottom: -80px;\n  left: 8%;\n}\n\n\n\n.sa-hero-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 72px;\n  height: 72px;\n}\n\n.sa-hero-av-ring1[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -7px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(13, 202, 240, 0.45);\n  animation: _ngcontent-%COMP%_sa-rotateRing 8s linear infinite;\n}\n\n.sa-hero-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18 0%, #0d3a66 35%, #5625E8 65%, #0DCAF0 100%);\n}\n\n.sa-hero-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18, #0d3a66);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sa-hero-av-initial[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: #a5f3fc;\n  line-height: 1;\n  text-shadow: 0 3px 14px rgba(13, 202, 240, 0.7);\n  letter-spacing: 1px;\n}\n\n.sa-hero-av-crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -4px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #0DCAF0, #0284c7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2.5px solid rgba(2, 12, 24, 0.9);\n  box-shadow: 0 3px 12px rgba(13, 202, 240, 0.7);\n  z-index: 10;\n  animation: _ngcontent-%COMP%_sa-crownPop 2s ease-in-out infinite;\n}\n.sa-hero-av-crown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #fff;\n}\n\n.sa-hero-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -9px;\n  border-radius: 50%;\n  border: 1px solid rgba(13, 202, 240, 0.28);\n  animation: _ngcontent-%COMP%_sa-pulse 2.4s ease-out infinite;\n}\n\n\n\n.sa-tier-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(13, 202, 240, 0.18);\n  border: 1px solid rgba(13, 202, 240, 0.38);\n  color: #a5f3fc;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n\n\n.sa-live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.14);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.sa-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_sa-blink 1.2s ease-in-out infinite;\n}\n\n\n\n.sa-time-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.14);\n  color: rgba(255, 255, 255, 0.92);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 11px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  font-variant-numeric: tabular-nums;\n}\n\n\n\n.sa-stats-row[_ngcontent-%COMP%] {\n  gap: 6px;\n}\n\n.sa-stat-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: #fff;\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.sa-stat-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.sa-stat-green[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.2);\n  border-color: rgba(3, 201, 90, 0.35);\n}\n\n.sa-stat-red[_ngcontent-%COMP%] {\n  background: rgba(231, 13, 13, 0.2);\n  border-color: rgba(231, 13, 13, 0.3);\n}\n\n.sa-stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-left: 2px;\n}\n\n\n\n.sa-hero-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 600;\n  border-radius: 20px;\n  padding: 7px 16px;\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n}\n\n.sa-hero-btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1.5px solid rgba(255, 255, 255, 0.28) !important;\n  color: #fff;\n}\n.sa-hero-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.5) !important;\n  color: #fff;\n}\n\n.sa-hero-btn-solid[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625E8, #392C7D);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(86, 37, 232, 0.4);\n}\n.sa-hero-btn-solid[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #6d3aed, #4a3a9d);\n  box-shadow: 0 6px 20px rgba(86, 37, 232, 0.5);\n  transform: translateY(-1px);\n  color: #fff;\n}\n\n\n\n.sa-health-alert[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  border: 1px solid rgba(0, 0, 0, 0.06) !important;\n  border-left: 5px solid var(--sa-health-c, #22c55e) !important;\n  background: linear-gradient(90deg, rgba(var(--sa-health-c-rgb, 34, 197, 94), 0.04), transparent 60%) !important;\n  animation: _ngcontent-%COMP%_sa-alertSlide 0.5s ease;\n}\n\n.sa-pulse-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--sa-health-c, #22c55e);\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_sa-pulseRing 2s ease-out infinite;\n}\n\n\n\n.sa-kpi[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  border-top: 3px solid transparent !important;\n  transition: transform 0.22s ease, box-shadow 0.22s ease;\n  animation: _ngcontent-%COMP%_sa-slideInUp 0.45s ease both;\n  position: relative;\n  overflow: hidden;\n  \n\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.07s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.14s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.21s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.28s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.35s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.42s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.49s;\n}\n.sa-kpi[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 0.56s;\n}\n.sa-kpi[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -14px;\n  right: -10px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.04;\n  pointer-events: none;\n  transition: opacity 0.22s;\n}\n.sa-kpi[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n}\n.sa-kpi[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%] {\n  transform: scale(1.12) rotate(-6deg);\n}\n.sa-kpi[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.08;\n}\n.sa-kpi[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n}\n\n\n\n.sa-kpi-primary[_ngcontent-%COMP%] {\n  border-top-color: rgba(57, 44, 125, 0.22) !important;\n}\n.sa-kpi-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 36px rgba(57, 44, 125, 0.13) !important;\n  border-top-color: #392C7D !important;\n}\n\n.sa-kpi-success[_ngcontent-%COMP%] {\n  border-top-color: rgba(56, 189, 248, 0.25) !important;\n}\n.sa-kpi-success[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(56, 189, 248, 0.15) !important;\n  border-top-color: #38bdf8 !important;\n}\n\n.sa-kpi-danger[_ngcontent-%COMP%] {\n  border-top-color: rgba(155, 91, 182, 0.25) !important;\n}\n.sa-kpi-danger[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(155, 91, 182, 0.15) !important;\n  border-top-color: #9b59b6 !important;\n}\n\n.sa-kpi-warning[_ngcontent-%COMP%] {\n  border-top-color: rgba(13, 202, 240, 0.25) !important;\n}\n.sa-kpi-warning[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(13, 202, 240, 0.15) !important;\n  border-top-color: #0DCAF0 !important;\n}\n\n.sa-kpi-violet[_ngcontent-%COMP%] {\n  border-top-color: rgba(86, 37, 232, 0.22) !important;\n}\n.sa-kpi-violet[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(86, 37, 232, 0.14) !important;\n  border-top-color: #5625E8 !important;\n}\n\n.sa-kpi-teal[_ngcontent-%COMP%] {\n  border-top-color: rgba(13, 58, 102, 0.2) !important;\n}\n.sa-kpi-teal[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(13, 58, 102, 0.13) !important;\n  border-top-color: #0d3a66 !important;\n}\n\n.sa-kpi-pink[_ngcontent-%COMP%] {\n  border-top-color: rgba(86, 37, 232, 0.22) !important;\n}\n.sa-kpi-pink[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(86, 37, 232, 0.14) !important;\n  border-top-color: #5625E8 !important;\n}\n\n.sa-kpi-health[_ngcontent-%COMP%] {\n  \n\n  border-top-color: rgba(34, 197, 94, 0.22) !important;\n}\n.sa-kpi-health[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 36px rgba(34, 197, 94, 0.13) !important;\n}\n\n.sa-kpi-bar[_ngcontent-%COMP%] {\n  height: 5px !important;\n  border-radius: 4px !important;\n  background: rgba(0, 0, 0, 0.06) !important;\n}\n.sa-kpi-bar[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sa-progressFill 1.1s ease-out;\n  border-radius: 4px;\n}\n\n\n\n.icon-box[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n}\n\n\n\n.sa-chart-card[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  animation: _ngcontent-%COMP%_sa-fadeIn 0.55s ease;\n  background: linear-gradient(145deg, rgba(252, 253, 255, 0.98) 0%, rgba(246, 248, 255, 0.95) 100%) !important;\n  border: 1px solid rgba(86, 37, 232, 0.07) !important;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: 0 2px 16px rgba(2, 12, 24, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95) !important;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.sa-chart-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 40px rgba(86, 37, 232, 0.1) !important;\n  transform: translateY(-2px);\n}\n.sa-chart-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  border-bottom: 1px solid rgba(86, 37, 232, 0.07) !important;\n  background: linear-gradient(135deg, rgba(249, 250, 255, 0.99) 0%, rgba(244, 247, 255, 0.96) 100%) !important;\n  border-radius: 16px 16px 0 0 !important;\n}\n\n\n\n.sa-role-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n\n\n.sa-quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(86, 37, 232, 0.09);\n  background: linear-gradient(135deg, rgba(252, 253, 255, 0.98), rgba(246, 248, 255, 0.95));\n  text-decoration: none !important;\n  color: #374151;\n  transition: all 0.22s ease;\n}\n.sa-quick-link[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  border-color: rgba(86, 37, 232, 0.28);\n  color: #5625E8;\n  transform: translateX(5px);\n  box-shadow: 0 6px 20px rgba(86, 37, 232, 0.1);\n}\n.sa-quick-link[_ngcontent-%COMP%]:hover   .sa-quick-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.sa-quick-link[_ngcontent-%COMP%]:hover   .ti-chevron-right[_ngcontent-%COMP%] {\n  color: #0DCAF0 !important;\n  transform: translateX(3px);\n}\n.sa-quick-link[_ngcontent-%COMP%]   .ti-chevron-right[_ngcontent-%COMP%] {\n  transition: transform 0.2s, color 0.2s;\n}\n\n.sa-quick-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.2s ease;\n}\n.sa-quick-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.sa-health-box[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(86, 37, 232, 0.06), rgba(13, 202, 240, 0.04));\n  border-radius: 14px;\n  padding: 16px 18px;\n  border: 1px solid rgba(86, 37, 232, 0.1);\n}\n.sa-health-box[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n}\n.sa-health-box[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sa-progressFill 1.2s ease-out;\n}\n\n\n\n.sa-skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f0f4f8 25%, #dce5ef 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_sa-shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n.sa-skeleton-line[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_sa-fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-alertSlide {\n  from {\n    opacity: 0;\n    transform: translateX(-14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-shimmer {\n  from {\n    background-position: -200% 0;\n  }\n  to {\n    background-position: 200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-progressFill {\n  from {\n    width: 0 !important;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-rotateRing {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-pulseRing {\n  0% {\n    box-shadow: 0 0 0 0 var(--sa-health-c, 0.22c55e);\n  }\n  70% {\n    box-shadow: 0 0 0 10px transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n}\n@keyframes _ngcontent-%COMP%_sa-crownPop {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.18);\n    box-shadow: 0 5px 18px rgb(255, 149, 0);\n  }\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .icon-box.bg-primary-transparent[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .icon-box.bg-primary-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(86, 37, 232, 0.18) !important;\n  color: #a5b4fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .icon-box.bg-primary-transparent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .icon-box.bg-primary-transparent[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a5b4fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .badge.bg-primary-transparent[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .badge.bg-primary-transparent[_ngcontent-%COMP%] {\n  background-color: rgba(86, 37, 232, 0.18) !important;\n  color: #a5b4fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #7dd3fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.15) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #38bdf8 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.15) !important;\n  color: #38bdf8 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi-teal[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background: #38bdf8 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-kpi-bar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-kpi-bar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-chart-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-chart-card[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n.dark-mode[_nghost-%COMP%]   .sa-chart-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-chart-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #111119 !important;\n  border-bottom-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-chart-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-chart-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07) !important;\n  border-color: rgba(86, 37, 232, 0.35) !important;\n  color: #a5b4fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-quick-link[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #a5b4fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-quick-icon[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-quick-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-health-box[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-health-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-health-box[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-health-box[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.09) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-health-alert[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-health-alert[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08) !important;\n  background: linear-gradient(90deg, rgba(var(--sa-health-c-rgb, 34, 197, 94), 0.08), rgba(26, 26, 43, 0) 60%) !important;\n}\n.dark-mode[_nghost-%COMP%]   .sa-skeleton[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .sa-skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1a1a2b 25%, #222235 50%, #1a1a2b 75%) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwZXJhZG1pbi9zdXBlcmFkbWluLWRhc2hib2FyZC9zdXBlcmFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OztnRkFBQTtBQUtBLCtFQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG9HQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx5RkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFBZ0Isa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0IsVUFBQTtBQU05RTs7QUFMQTtFQUNFLFlBQUE7RUFBYyxhQUFBO0VBQ2QsaUZBQUE7RUFDQSxXQUFBO0VBQWEsU0FBQTtBQVVmOztBQVJBO0VBQ0UsWUFBQTtFQUFjLGFBQUE7RUFDZCxrRkFBQTtFQUNBLGFBQUE7RUFBZSxRQUFBO0FBYWpCOztBQVZBLGdDQUFBO0FBQ0E7RUFBbUIsa0JBQUE7RUFBb0IsY0FBQTtFQUFnQixXQUFBO0VBQWEsWUFBQTtBQWlCcEU7O0FBaEJBO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0VBQ2pDLDZDQUFBO0VBQ0EsMkNBQUE7QUFxQkY7O0FBbkJBO0VBQ0Usa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGtCQUFBO0VBQzlCLHVGQUFBO0FBd0JGOztBQXRCQTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxrQkFBQTtFQUNoQyxxREFBQTtFQUNBLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtBQTZCdEM7O0FBM0JBO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGNBQUE7RUFDbkQsK0NBQUE7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O0VBQ0UsOEJBQUE7RUFDQSxrREFBQTtBQXFTSjtBQWxTRTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7QUFvU0o7QUFuU0k7RUFBSSx5QkFBQTtBQXNTUjtBQW5TRTtFQUNFLG9EQUFBO0VBQ0EseUJBQUE7QUFxU0o7QUFqU0k7RUFBSyx5QkFBQTtBQW9TVDtBQW5TSTtFQUFZLCtDQUFBO0FBc1NoQjtBQXRTNkQ7RUFBSSx5QkFBQTtBQXlTakU7QUF4U0k7RUFBUywrQ0FBQTtFQUE2Qyx5QkFBQTtBQTRTMUQ7QUEzU0k7RUFBZ0IsOEJBQUE7QUE4U3BCO0FBM1NFO0VBQWMsZ0RBQUE7QUE4U2hCO0FBNVNFO0VBQ0UsOEJBQUE7RUFDQSxrREFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUE4U0o7QUE3U0k7RUFDRSw4QkFBQTtFQUNBLHlEQUFBO0FBK1NOO0FBOVNNO0VBQUsseUJBQUE7QUFpVFg7QUE3U0U7RUFDRSxnREFBQTtFQUNBLGtEQUFBO0VBQ0EseUJBQUE7QUErU0o7QUE5U0k7RUFBSSx5QkFBQTtBQWlUUjtBQWhUSTtFQUFRLHlCQUFBO0FBbVRaO0FBbFRJO0VBQ0UsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0FBb1ROO0FBblRNO0VBQUkseUJBQUE7QUFzVFY7QUFuVEU7RUFBaUIsZ0RBQUE7QUFzVG5CO0FBcFRFO0VBQ0UsZ0RBQUE7RUFDQSxrREFBQTtBQXNUSjtBQXJUSTtFQUFZLGdEQUFBO0FBd1RoQjtBQXJURTtFQUNFLGtEQUFBO0VBQ0EsdUhBQUE7QUF1VEo7QUFwVEU7RUFDRSxvRkFBQTtBQXNUSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgU3VwZXJBZG1pbiBEYXNoYm9hcmQgIMOiwoDClCAgRHJlYW1zIExNUyBEZXNpZ24gU3lzdGVtXG4gICBUZWFsOiAjMmRkNGJmICB8ICBQcmltYXJ5OiAjMzkyQzdEICB8ICBGb250OiBJbnRlclxuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIEJBTk5FUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDIwYzE4IDAlLCAjMGExYTJlIDI1JSwgIzBkM2E2NiA1MCUsICM1NjI1RTggNzUlLCAjMERDQUYwIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyOHB4IDMycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoODYsMzcsMjMyLC4zKTtcbiAgYW5pbWF0aW9uOiBzYS1mYWRlSW4gMC40cyBlYXNlO1xuICAvKiBHcmlsbGUgZGUgcG9pbnRzIGTDg8KpY29yYXRpdmUgKi9cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwuMTIpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG4uc2EtaGVyby1nbG93IHsgcG9zaXRpb246IGFic29sdXRlOyBib3JkZXItcmFkaXVzOiA1MCU7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAxOyB9XG4uc2EtZ2xvdy0xIHtcbiAgd2lkdGg6IDM2MHB4OyBoZWlnaHQ6IDM2MHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDEzLDIwMiwyNDAsLjIyKSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgdG9wOiAtMTAwcHg7IHJpZ2h0OiAwJTtcbn1cbi5zYS1nbG93LTIge1xuICB3aWR0aDogMjQwcHg7IGhlaWdodDogMjQwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsLjA4KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgYm90dG9tOiAtODBweDsgbGVmdDogOCU7XG59XG5cbi8qIFByZW1pdW0gQXZhdGFyIGRhbnMgbGUgaGVybyAqL1xuLnNhLWhlcm8tYXYtd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleC1zaHJpbms6IDA7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5zYS1oZXJvLWF2LXJpbmcxIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTdweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDEuNXB4IGRhc2hlZCByZ2JhKDEzLDIwMiwyNDAsLjQ1KTtcbiAgYW5pbWF0aW9uOiBzYS1yb3RhdGVSaW5nIDhzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zYS1oZXJvLWF2LWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAyMGMxOCAwJSwgIzBkM2E2NiAzNSUsICM1NjI1RTggNjUlLCAjMERDQUYwIDEwMCUpO1xufVxuLnNhLWhlcm8tYXYtY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogM3B4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMjBjMTgsICMwZDNhNjYpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zYS1oZXJvLWF2LWluaXRpYWwge1xuICBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA5MDA7IGNvbG9yOiAjYTVmM2ZjOyBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1zaGFkb3c6IDAgM3B4IDE0cHggcmdiYSgxMywyMDIsMjQwLC43KTsgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5zYS1oZXJvLWF2LWNyb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC01cHg7IHJpZ2h0OiAtNHB4O1xuICB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwRENBRjAsICMwMjg0YzcpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2JhKDIsMTIsMjQsLjkpO1xuICBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoMTMsMjAyLDI0MCwuNyk7XG4gIHotaW5kZXg6IDEwO1xuICBhbmltYXRpb246IHNhLWNyb3duUG9wIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBpIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogI2ZmZjsgfVxufVxuLnNhLWhlcm8tYXYtcHVsc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtOXB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTMsMjAyLDI0MCwuMjgpO1xuICBhbmltYXRpb246IHNhLXB1bHNlIDIuNHMgZWFzZS1vdXQgaW5maW5pdGU7XG59XG5cbi8qIFRpZXIgY2hpcCAqL1xuLnNhLXRpZXItY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLDIwMiwyNDAsLjE4KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMywyMDIsMjQwLC4zOCk7XG4gIGNvbG9yOiAjYTVmM2ZjOyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuN3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA0cHggMTJweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG5cbi8qIExpdmUgYmFkZ2UgKi9cbi5zYS1saXZlLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNCk7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KTtcbiAgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogLjZweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcbn1cbi5zYS1saXZlLWRvdCB7XG4gIHdpZHRoOiA3cHg7IGhlaWdodDogN3B4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM0YWRlODA7IGZsZXgtc2hyaW5rOiAwO1xuICBhbmltYXRpb246IHNhLWJsaW5rIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi8qIFRpbWUgYmFkZ2UgKi9cbi5zYS10aW1lLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNCk7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45Mik7XG4gIGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgcGFkZGluZzogNHB4IDExcHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIyKTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLyogU3RhdHMgcGlsbHMgZGFucyBsZSBoZXJvICovXG4uc2Etc3RhdHMtcm93IHsgZ2FwOiA2cHg7IH1cbi5zYS1zdGF0LXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDRweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjZmZmOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgaSB7IGZvbnQtc2l6ZTogMTNweDsgfVxufVxuLnNhLXN0YXQtZ3JlZW4gIHsgYmFja2dyb3VuZDogcmdiYSgzLDIwMSw5MCwuMik7ICBib3JkZXItY29sb3I6IHJnYmEoMywyMDEsOTAsLjM1KTsgfVxuLnNhLXN0YXQtcmVkICAgIHsgYmFja2dyb3VuZDogcmdiYSgyMzEsMTMsMTMsLjIpOyAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwxMywxMywuMyk7IH1cbi5zYS1zdGF0LWxhYmVsICB7IGZvbnQtc2l6ZTogMTBweDsgb3BhY2l0eTogLjc7IG1hcmdpbi1sZWZ0OiAycHg7IH1cblxuLyogSGVybyBidXR0b25zICovXG4uc2EtaGVyby1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA3cHggMTZweDsgdHJhbnNpdGlvbjogYWxsIC4yczsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXI6IG5vbmU7XG59XG4uc2EtaGVyby1idG4tZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xMik7IGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjgpICFpbXBvcnRhbnQ7IGNvbG9yOiAjZmZmO1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjIpOyBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpICFpbXBvcnRhbnQ7IGNvbG9yOiAjZmZmOyB9XG59XG4uc2EtaGVyby1idG4tc29saWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTYyNUU4LCAjMzkyQzdEKTsgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSg4NiwzNywyMzIsLjQpO1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZkM2FlZCwgIzRhM2E5ZCk7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg4NiwzNywyMzIsLjUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IGNvbG9yOiAjZmZmOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBIRUFMVEggQUxFUlQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2EtaGVhbHRoLWFsZXJ0IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNikgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1zYS1oZWFsdGgtYywgIzIyYzU1ZSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKHZhcigtLXNhLWhlYWx0aC1jLXJnYiwgMzQsMTk3LDk0KSwuMDQpLCB0cmFuc3BhcmVudCA2MCUpICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2EtYWxlcnRTbGlkZSAuNXMgZWFzZTtcbn1cbi5zYS1wdWxzZS1kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA5cHg7IGhlaWdodDogOXB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNhLWhlYWx0aC1jLCAjMjJjNTVlKTsgZmxleC1zaHJpbms6IDA7XG4gIGFuaW1hdGlvbjogc2EtcHVsc2VSaW5nIDJzIGVhc2Utb3V0IGluZmluaXRlO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgS1BJIENBUkRTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNhLWtwaSB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjJzIGVhc2UsIGJveC1zaGFkb3cgLjIycyBlYXNlO1xuICBhbmltYXRpb246IHNhLXNsaWRlSW5VcCAuNDVzIGVhc2UgYm90aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDgge1xuICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7IGFuaW1hdGlvbi1kZWxheTogI3skaSAqIDAuMDd9czsgfVxuICB9XG4gIC8qIEdob3N0IGljb24gZMODwqljb3JhdGlmIGVuIGZvbmQgKi9cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xNHB4OyByaWdodDogLTEwcHg7XG4gICAgd2lkdGg6IDgwcHg7IGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgIG9wYWNpdHk6IC4wNDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yMnM7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIC5pY29uLWJveCB7IHRyYW5zZm9ybTogc2NhbGUoMS4xMikgcm90YXRlKC02ZGVnKTsgfVxuICAgICY6OmFmdGVyIHsgb3BhY2l0eTogLjA4OyB9XG4gIH1cbiAgaDIgeyBmb250LXNpemU6IDEuOXJlbTsgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgVmFyaWFudGVzIGNvdWxldXIgcGFyIHR5cGUgZGUgS1BJIMOiwpTCgMOiwpTCgCAqL1xuLnNhLWtwaS1wcmltYXJ5IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSg1Nyw0NCwxMjUsLjIyKSAhaW1wb3J0YW50O1xuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCAxNnB4IDM2cHggcmdiYSg1Nyw0NCwxMjUsLjEzKSAhaW1wb3J0YW50OyBib3JkZXItdG9wLWNvbG9yOiAjMzkyQzdEICFpbXBvcnRhbnQ7IH1cbn1cbi5zYS1rcGktc3VjY2VzcyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoNTYsMTg5LDI0OCwuMjUpICFpbXBvcnRhbnQ7XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDE2cHggNDRweCByZ2JhKDU2LDE4OSwyNDgsLjE1KSAhaW1wb3J0YW50OyBib3JkZXItdG9wLWNvbG9yOiAjMzhiZGY4ICFpbXBvcnRhbnQ7IH1cbn1cbi5zYS1rcGktZGFuZ2VyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxNTUsOTEsMTgyLC4yNSkgIWltcG9ydGFudDtcbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgMTZweCA0NHB4IHJnYmEoMTU1LDkxLDE4MiwuMTUpICFpbXBvcnRhbnQ7IGJvcmRlci10b3AtY29sb3I6ICM5YjU5YjYgIWltcG9ydGFudDsgfVxufVxuLnNhLWtwaS13YXJuaW5nIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxMywyMDIsMjQwLC4yNSkgIWltcG9ydGFudDtcbiAgJjpob3ZlciB7IGJveC1zaGFkb3c6IDAgMTZweCA0NHB4IHJnYmEoMTMsMjAyLDI0MCwuMTUpICFpbXBvcnRhbnQ7IGJvcmRlci10b3AtY29sb3I6ICMwRENBRjAgIWltcG9ydGFudDsgfVxufVxuLnNhLWtwaS12aW9sZXQge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDg2LDM3LDIzMiwuMjIpICFpbXBvcnRhbnQ7XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDE2cHggNDRweCByZ2JhKDg2LDM3LDIzMiwuMTQpICFpbXBvcnRhbnQ7IGJvcmRlci10b3AtY29sb3I6ICM1NjI1RTggIWltcG9ydGFudDsgfVxufVxuLnNhLWtwaS10ZWFsIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgxMyw1OCwxMDIsLjIpICFpbXBvcnRhbnQ7XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDE2cHggNDRweCByZ2JhKDEzLDU4LDEwMiwuMTMpICFpbXBvcnRhbnQ7IGJvcmRlci10b3AtY29sb3I6ICMwZDNhNjYgIWltcG9ydGFudDsgfVxufVxuLnNhLWtwaS1waW5rIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSg4NiwzNywyMzIsLjIyKSAhaW1wb3J0YW50O1xuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCAxNnB4IDQ0cHggcmdiYSg4NiwzNywyMzIsLjE0KSAhaW1wb3J0YW50OyBib3JkZXItdG9wLWNvbG9yOiAjNTYyNUU4ICFpbXBvcnRhbnQ7IH1cbn1cbi5zYS1rcGktaGVhbHRoIHtcbiAgLyogYm9yZGVyLXRvcCBkeW5hbWlxdWUgZ8ODwqlyw4PCqSB2aWEgW3N0eWxlLi0tc2EtaGVhbHRoLWNdIGRhbnMgbGUgSFRNTCAqL1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDM0LDE5Nyw5NCwuMjIpICFpbXBvcnRhbnQ7XG4gICY6aG92ZXIgeyBib3gtc2hhZG93OiAwIDE2cHggMzZweCByZ2JhKDM0LDE5Nyw5NCwuMTMpICFpbXBvcnRhbnQ7IH1cbn1cblxuLnNhLWtwaS1iYXIge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDYpICFpbXBvcnRhbnQ7XG4gIC5wcm9ncmVzcy1iYXIgeyBhbmltYXRpb246IHNhLXByb2dyZXNzRmlsbCAxLjFzIGVhc2Utb3V0OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbn1cblxuLyogSWNvbi1ib3ggc2l6aW5nICh0ZW1wbGF0ZSBjbGFzcykgKi9cbi5pY29uLWJveCB7XG4gIHdpZHRoOiA0NnB4OyBoZWlnaHQ6IDQ2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQ0hBUlQgQ0FSRFMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2EtY2hhcnQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzYS1mYWRlSW4gLjU1cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDI1MiwyNTMsMjU1LDAuOTgpIDAlLCByZ2JhKDI0NiwyNDgsMjU1LDAuOTUpIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODYsMzcsMjMyLDAuMDcpICFpbXBvcnRhbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE2cHggcmdiYSgyLDEyLDI0LDAuMDYpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC45NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMgZWFzZSwgdHJhbnNmb3JtIC4ycyBlYXNlO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDg2LDM3LDIzMiwwLjEpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoODYsMzcsMjMyLDAuMDcpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDksMjUwLDI1NSwwLjk5KSAwJSwgcmdiYSgyNDQsMjQ3LDI1NSwwLjk2KSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgUk9MRSBET1Qgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uc2Etcm9sZS1kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgZmxleC1zaHJpbms6IDA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBRVUlDSyBMSU5LUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zYS1xdWljay1saW5rIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODYsMzcsMjMyLC4wOSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjUyLDI1MywyNTUsMC45OCksIHJnYmEoMjQ2LDI0OCwyNTUsMC45NSkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgY29sb3I6ICMzNzQxNTE7XG4gIHRyYW5zaXRpb246IGFsbCAuMjJzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDg2LDM3LDIzMiwuMjgpO1xuICAgIGNvbG9yOiAjNTYyNUU4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg4NiwzNywyMzIsLjEpO1xuICAgIC5zYS1xdWljay1pY29uIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XG4gICAgLnRpLWNoZXZyb24tcmlnaHQgeyBjb2xvcjogIzBEQ0FGMCAhaW1wb3J0YW50OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxuICB9XG4gIC50aS1jaGV2cm9uLXJpZ2h0IHsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycywgY29sb3IgLjJzOyB9XG59XG4uc2EtcXVpY2staWNvbiB7XG4gIHdpZHRoOiA0MnB4OyBoZWlnaHQ6IDQycHg7IGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xuICBpIHsgZm9udC1zaXplOiAxOHB4OyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBIRUFMVEggQk9YIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNhLWhlYWx0aC1ib3gge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDg2LDM3LDIzMiwuMDYpLCByZ2JhKDEzLDIwMiwyNDAsLjA0KSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDE2cHggMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4NiwzNywyMzIsLjEpO1xuICAucHJvZ3Jlc3MgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wNik7IH1cbiAgLnByb2dyZXNzLWJhciB7IGFuaW1hdGlvbjogc2EtcHJvZ3Jlc3NGaWxsIDEuMnMgZWFzZS1vdXQ7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFNLRUxFVE9OIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNhLXNrZWxldG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjBmNGY4IDI1JSwgI2RjZTVlZiA1MCUsICNmMGY0ZjggNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2Etc2hpbW1lciAxLjRzIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7IGRpc3BsYXk6IGJsb2NrO1xuICAmLWxpbmUgeyBoZWlnaHQ6IDE2cHg7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEFOSU1BVElPTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG5Aa2V5ZnJhbWVzIHNhLWZhZGVJbiAgICAgIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5Aa2V5ZnJhbWVzIHNhLXNsaWRlSW5VcCAgIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMnB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG5Aa2V5ZnJhbWVzIHNhLWFsZXJ0U2xpZGUgIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTRweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxuQGtleWZyYW1lcyBzYS1zaGltbWVyICAgICB7IGZyb20geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9IHRvIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9IH1cbkBrZXlmcmFtZXMgc2EtcHJvZ3Jlc3NGaWxsIHsgZnJvbSB7IHdpZHRoOiAwICFpbXBvcnRhbnQ7IH0gfVxuQGtleWZyYW1lcyBzYS1yb3RhdGVSaW5nICB7IGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuQGtleWZyYW1lcyBzYS1wdWxzZSAgICAgICB7IDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogLjY7IH0gMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS41NSk7IG9wYWNpdHk6IDA7IH0gfVxuQGtleWZyYW1lcyBzYS1wdWxzZVJpbmcgICB7IDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCB2YXIoLS1zYS1oZWFsdGgtYywuMjJjNTVlKTsgfSA3MCUgeyBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHRyYW5zcGFyZW50OyB9IDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHRyYW5zcGFyZW50OyB9IH1cbkBrZXlmcmFtZXMgc2EtYmxpbmsgICAgICAgIHsgMCUsMTAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogLjI1OyB9IH1cbkBrZXlmcmFtZXMgc2EtY3Jvd25Qb3AgICAgIHsgMCUsMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE4KTsgYm94LXNoYWRvdzogMCA1cHggMThweCByZ2JhKDI1NSwxNDksMCwxKTsgfSB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBEQVJLIE1PREUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG46aG9zdC1jb250ZXh0KC5kYXJrLW1vZGUpIHtcbiAgLnNhLWtwaSB7XG4gICAgYmFja2dyb3VuZDogIzFhMWEyYiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLy8gaWNvbi1ib3ggYXZlYyBjbGFzc2UgYmctKi10cmFuc3BhcmVudCAoYmFja2dyb3VuZCAjRUJFOUYxICFpbXBvcnRhbnQgw6LChsKSIG92ZXJyaWRlKVxuICAuaWNvbi1ib3guYmctcHJpbWFyeS10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwzNywyMzIsLjE4KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYTViNGZjICFpbXBvcnRhbnQ7XG4gICAgaSB7IGNvbG9yOiAjYTViNGZjICFpbXBvcnRhbnQ7IH1cbiAgfVxuICAvLyBiYWRnZSBiZy1wcmltYXJ5LXRyYW5zcGFyZW50IGRhbnMgbGVzIEtQSVxuICAuYmFkZ2UuYmctcHJpbWFyeS10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwzNywyMzIsLjE4KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYTViNGZjICFpbXBvcnRhbnQ7XG4gIH1cbiAgLy8gY2FyZCB0ZXh0IGNvbG9ycyBvdmVycmlkZXMgKGlubGluZSBzdHlsZT1cIiMwZDNhNjZcIiB0csODwqhzIHNvbWJyZSDDosKGwpIgaWxsaXNpYmxlKVxuICAuc2Eta3BpLXRlYWwge1xuICAgIGgyIHsgY29sb3I6ICM3ZGQzZmMgIWltcG9ydGFudDsgfVxuICAgIC5pY29uLWJveCB7IGJhY2tncm91bmQ6IHJnYmEoNTYsMTg5LDI0OCwuMTUpICFpbXBvcnRhbnQ7IGkgeyBjb2xvcjogIzM4YmRmOCAhaW1wb3J0YW50OyB9IH1cbiAgICAuYmFkZ2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDU2LDE4OSwyNDgsLjE1KSAhaW1wb3J0YW50OyBjb2xvcjogIzM4YmRmOCAhaW1wb3J0YW50OyB9XG4gICAgLnByb2dyZXNzLWJhciB7IGJhY2tncm91bmQ6ICMzOGJkZjggIWltcG9ydGFudDsgfVxuICB9XG4gIC8vIHByb2dyZXNzIHRyYWNrXG4gIC5zYS1rcGktYmFyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDgpICFpbXBvcnRhbnQ7IH1cbiAgLy8gQ2hhcnQgY2FyZHNcbiAgLnNhLWNoYXJ0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmIgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogIzExMTExOSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7XG4gICAgICBoNiB7IGNvbG9yOiAjZTJlOGYwICFpbXBvcnRhbnQ7IH1cbiAgICB9XG4gIH1cbiAgLy8gUXVpY2sgbGlua3Mgw6LCgMKUIGNvcnJlY3Rpb24gKMODwql0YWl0IC5zYS1xdWljay1saW5rLWNhcmQsIG4nZXhpc3RlIHBhcylcbiAgLnNhLXF1aWNrLWxpbmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA0KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNlMmU4ZjAgIWltcG9ydGFudDtcbiAgICBwIHsgY29sb3I6ICNlMmU4ZjAgIWltcG9ydGFudDsgfVxuICAgIHNtYWxsIHsgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDsgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoODYsMzcsMjMyLC4zNSkgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjYTViNGZjICFpbXBvcnRhbnQ7XG4gICAgICBwIHsgY29sb3I6ICNhNWI0ZmMgIWltcG9ydGFudDsgfVxuICAgIH1cbiAgfVxuICAuc2EtcXVpY2staWNvbiB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA2KSAhaW1wb3J0YW50OyB9XG4gIC8vIEhlYWx0aCBib3hcbiAgLnNhLWhlYWx0aC1ib3gge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA0KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDcpICFpbXBvcnRhbnQ7XG4gICAgLnByb2dyZXNzIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDkpICFpbXBvcnRhbnQ7IH1cbiAgfVxuICAvLyBIZWFsdGggYWxlcnQgYmFubmVyXG4gIC5zYS1oZWFsdGgtYWxlcnQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDgpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKHZhcigtLXNhLWhlYWx0aC1jLXJnYiwgMzQsMTk3LDk0KSwuMDgpLCByZ2JhKDI2LDI2LDQzLDApIDYwJSkgIWltcG9ydGFudDtcbiAgfVxuICAvLyBTa2VsZXRvbiBsb2FkaW5nXG4gIC5zYS1za2VsZXRvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWExYTJiIDI1JSwgIzIyMjIzNSA1MCUsICMxYTFhMmIgNzUlKSAhaW1wb3J0YW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return SuperadminDashboardComponent;
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
//# sourceMappingURL=8345.js.map