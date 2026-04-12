"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6050],{

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

/***/ 86050:
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/admin-analytics/admin-analytics.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminAnalyticsComponent: () => (/* binding */ AdminAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/analytics/analytics.service */ 60452);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 63855);










const _c0 = ["topEngChart"];
const _c1 = ["topRatingChart"];
const _c2 = ["donutChart"];
const _c3 = () => [];
function AdminAnalyticsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Attention");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 32)(8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 32)(14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.analytics.platformAvgAttention.toFixed(0), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.analytics.platformTotalEnrollments);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.analytics.allCourses.length);
  }
}
function AdminAnalyticsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Analyse en cours\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminAnalyticsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Impossible de charger les analytics.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminAnalyticsComponent_div_35_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.loadAnalytics());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "R\u00E9essayer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53)(5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const kpi_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", kpi_r4.bg);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinterpolate1"]("isax ", kpi_r4.icon, " kpi-icon-size"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", kpi_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](kpi_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](kpi_r4.label);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Aucune donn\u00E9e cam\u00E9ra disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_apx_chart_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "apx-chart", 76);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx_r0.platformDonutOptions.series)("chart", ctx_r0.platformDonutOptions.chart)("labels", ctx_r0.platformDonutOptions.labels)("colors", ctx_r0.platformDonutOptions.colors)("legend", ctx_r0.platformDonutOptions.legend)("dataLabels", ctx_r0.platformDonutOptions.dataLabels)("plotOptions", ctx_r0.platformDonutOptions.plotOptions)("stroke", ctx_r0.platformDonutOptions.stroke);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83D\uDCC8");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Pas encore de donn\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_apx_chart_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "apx-chart", 77);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx_r0.topEngagementChartOptions.series)("chart", ctx_r0.topEngagementChartOptions.chart)("xaxis", ctx_r0.topEngagementChartOptions.xaxis)("yaxis", ctx_r0.topEngagementChartOptions.yaxis)("plotOptions", ctx_r0.topEngagementChartOptions.plotOptions)("dataLabels", ctx_r0.topEngagementChartOptions.dataLabels)("colors", ctx_r0.topEngagementChartOptions.colors)("grid", ctx_r0.topEngagementChartOptions.grid)("tooltip", ctx_r0.topEngagementChartOptions.tooltip);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Aucune \u00E9valuation pour l'instant");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_apx_chart_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "apx-chart", 77);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx_r0.topRatingChartOptions.series)("chart", ctx_r0.topRatingChartOptions.chart)("xaxis", ctx_r0.topRatingChartOptions.xaxis)("yaxis", ctx_r0.topRatingChartOptions.yaxis)("plotOptions", ctx_r0.topRatingChartOptions.plotOptions)("dataLabels", ctx_r0.topRatingChartOptions.dataLabels)("colors", ctx_r0.topRatingChartOptions.colors)("grid", ctx_r0.topRatingChartOptions.grid)("tooltip", ctx_r0.topRatingChartOptions.tooltip);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Tous les cours sont performants !");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_43_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const c_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.coverUrl(c_r5.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", c_r5.title);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_43_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminAnalyticsComponent_ng_container_36_div_12_div_43_img_1_Template, 1, 2, "img", 79)(2, AdminAnalyticsComponent_ng_container_36_div_12_div_43_div_2_Template, 2, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 81)(4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 83)(7, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "/100");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", c_r5.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !c_r5.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", c_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.truncate(c_r5.title, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", c_r5.recommendationColor + "22")("color", c_r5.recommendationColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", c_r5.recommendationIcon, " ", c_r5.recommendationBadge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Attention: ", c_r5.avgAttentionScore.toFixed(0), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r0.getRingColor(c_r5.engagementScore));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r5.engagementScore.toFixed(0), " ");
  }
}
function AdminAnalyticsComponent_ng_container_36_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 56)(2, "div", 57)(3, "div", 58)(4, "div", 59)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "R\u00E9partition Plateforme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AdminAnalyticsComponent_ng_container_36_div_12_div_11_Template, 5, 0, "div", 63)(12, AdminAnalyticsComponent_ng_container_36_div_12_apx_chart_12_Template, 1, 8, "apx-chart", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 65)(14, "div", 58)(15, "div", 59)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Top 6 \u2014 Score d'Engagement");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "engagement = attention + rating + inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AdminAnalyticsComponent_ng_container_36_div_12_div_22_Template, 5, 0, "div", 63)(23, AdminAnalyticsComponent_ng_container_36_div_12_apx_chart_23_Template, 1, 9, "apx-chart", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 68)(25, "div", 69)(26, "div", 59)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Top 6 \u2014 Meilleures Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AdminAnalyticsComponent_ng_container_36_div_12_div_31_Template, 5, 0, "div", 63)(32, AdminAnalyticsComponent_ng_container_36_div_12_apx_chart_32_Template, 1, 9, "apx-chart", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 68)(34, "div", 69)(35, "div", 59)(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Cours \u00E0 Am\u00E9liorer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Score < 40");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AdminAnalyticsComponent_ng_container_36_div_12_div_42_Template, 5, 0, "div", 63)(43, AdminAnalyticsComponent_ng_container_36_div_12_div_43_Template, 15, 14, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.analytics.platformTotalDetections, " d\u00E9tections");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.platformTotalDetections === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.platformTotalDetections > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.topEngagementCourses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.topEngagementCourses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.topRatedCourses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.topRatedCourses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.needsImprovementCourses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.analytics.needsImprovementCourses);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_div_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 110);
  }
  if (rf & 2) {
    const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.coverUrl(c_r6.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", c_r6.title);
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_div_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_div_2_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00BD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AdminAnalyticsComponent_ng_container_36_div_13_div_2_img_4_Template, 1, 2, "img", 97)(5, AdminAnalyticsComponent_ng_container_36_div_13_div_2_div_5_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 99)(7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div")(12, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 105)(17, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AdminAnalyticsComponent_ng_container_36_div_13_div_2_ng_container_21_Template, 2, 0, "ng-container", 108)(22, AdminAnalyticsComponent_ng_container_36_div_13_div_2_ng_container_22_Template, 2, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", c_r6.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !c_r6.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", c_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.truncate(c_r6.title, 28));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.getScoreRing(c_r6.engagementScore, 44), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r0.getRingColor(c_r6.engagementScore));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r6.engagementScore.toFixed(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r6.enrollmentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c3).constructor(ctx_r0.stars(c_r6.avgRating).full));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.stars(c_r6.avgRating).half);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r6.avgRating != null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](24, 19, c_r6.avgRating, "1.1-1") : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", c_r6.recommendationColor + "22")("color", c_r6.recommendationColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", c_r6.recommendationIcon, " ", c_r6.recommendationBadge, " ");
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\uD83D\uDCDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Aucun cours publi\u00E9 pour l'instant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AdminAnalyticsComponent_ng_container_36_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AdminAnalyticsComponent_ng_container_36_div_13_div_2_Template, 27, 23, "div", 92)(3, AdminAnalyticsComponent_ng_container_36_div_13_div_3_Template, 6, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.analytics.allCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.analytics.allCourses.length === 0);
  }
}
function AdminAnalyticsComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AdminAnalyticsComponent_ng_container_36_div_2_Template, 9, 9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 45)(4, "li", 46)(5, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminAnalyticsComponent_ng_container_36_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.setTab("overview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Vue d'ensemble ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li", 46)(9, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminAnalyticsComponent_ng_container_36_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.setTab("ranking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Classement Cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AdminAnalyticsComponent_ng_container_36_div_12_Template, 44, 9, "div", 30)(13, AdminAnalyticsComponent_ng_container_36_div_13_Template, 4, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.platformKpiCards);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.activeTab === "ranking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "ranking");
  }
}
let AdminAnalyticsComponent = /*#__PURE__*/(() => {
  class AdminAnalyticsComponent {
    analyticsService;
    http;
    topEngChart;
    topRatingChart;
    donutChart;
    analytics = null;
    loading = true;
    activeTab = 'overview';
    featuredActionLoading = {};
    topEngagementChartOptions = {};
    topRatingChartOptions = {};
    platformDonutOptions = {};
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
    constructor(analyticsService, http) {
      this.analyticsService = analyticsService;
      this.http = http;
    }
    ngOnInit() {
      this.loadAnalytics();
    }
    loadAnalytics() {
      this.loading = true;
      this.analyticsService.getAdminAnalytics().subscribe({
        next: data => {
          this.analytics = data;
          this.loading = false;
          this.buildCharts(data);
        },
        error: () => {
          this.loading = false;
          this.showToast('error', 'Impossible de charger les analytics.');
        }
      });
    }
    buildCharts(data) {
      // ── Top Engagement Bar (horizontal) ──────────────────────────────────────
      const engCourses = data.topEngagementCourses;
      this.topEngagementChartOptions = {
        chart: {
          type: 'bar',
          height: 280,
          toolbar: {
            show: false
          },
          fontFamily: 'inherit'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 5,
            barHeight: '60%'
          }
        },
        series: [{
          name: 'Score Engagement',
          data: engCourses.map(c => Math.round(c.engagementScore))
        }],
        xaxis: {
          categories: engCourses.map(c => this.truncate(c.title, 22)),
          max: 100,
          labels: {
            style: {
              fontSize: '11px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '11px'
            }
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '11px'
          }
        },
        colors: ['#6366f1'],
        grid: {
          borderColor: '#e5e7eb',
          strokeDashArray: 4
        },
        tooltip: {
          y: {
            formatter: v => v + ' / 100'
          }
        }
      };
      // ── Top Rated Bar (horizontal) ────────────────────────────────────────────
      const ratedCourses = data.topRatedCourses;
      this.topRatingChartOptions = {
        chart: {
          type: 'bar',
          height: 280,
          toolbar: {
            show: false
          },
          fontFamily: 'inherit'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 5,
            barHeight: '60%'
          }
        },
        series: [{
          name: 'Note Moyenne',
          data: ratedCourses.map(c => +(c.avgRating ?? 0).toFixed(2))
        }],
        xaxis: {
          categories: ratedCourses.map(c => this.truncate(c.title, 22)),
          min: 0,
          max: 5,
          labels: {
            style: {
              fontSize: '11px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '11px'
            }
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '11px'
          },
          formatter: v => '★ ' + v
        },
        colors: ['#f59e0b'],
        grid: {
          borderColor: '#e5e7eb',
          strokeDashArray: 4
        },
        tooltip: {
          y: {
            formatter: v => '★ ' + v + ' / 5'
          }
        }
      };
      // ── Platform Donut ────────────────────────────────────────────────────────
      this.platformDonutOptions = {
        chart: {
          type: 'donut',
          height: 250,
          fontFamily: 'inherit'
        },
        series: [Math.round(data.platformConcentrationRate), Math.round(data.platformFatigueRate), Math.round(data.platformDistractionRate)],
        labels: ['Concentration', 'Fatigue', 'Distraction'],
        colors: ['#6366f1', '#f59e0b', '#ef4444'],
        legend: {
          position: 'bottom',
          fontSize: '12px'
        },
        dataLabels: {
          enabled: true,
          formatter: v => Math.round(v) + '%'
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
                  formatter: () => '100%'
                }
              }
            }
          }
        },
        stroke: {
          width: 0
        }
      };
    }
    setTab(tab) {
      this.activeTab = tab;
    }
    markAsFeatured(course) {
      this.featuredActionLoading[course.courseId] = true;
      this.http.put(`${this.apiUrl}/admin/courses/${course.courseId}/featured`, {}).subscribe({
        next: () => {
          this.featuredActionLoading[course.courseId] = false;
          this.showToast('success', `"${course.title}" est maintenant Featured !`);
        },
        error: () => {
          this.featuredActionLoading[course.courseId] = false;
          this.showToast('error', 'Action impossible.');
        }
      });
    }
    get platformKpiCards() {
      if (!this.analytics) return [];
      const a = this.analytics;
      return [{
        label: 'Attention Moyenne',
        value: a.platformAvgAttention.toFixed(1) + '%',
        icon: 'isax-eye5',
        bg: 'rgba(99,102,241,.1)',
        color: '#6366f1'
      }, {
        label: 'Concentration',
        value: a.platformConcentrationRate.toFixed(1) + '%',
        icon: 'isax-activity5',
        bg: 'rgba(34,197,94,.1)',
        color: '#22c55e'
      }, {
        label: 'Taux Fatigue',
        value: a.platformFatigueRate.toFixed(1) + '%',
        icon: 'isax-warning-25',
        bg: 'rgba(245,158,11,.1)',
        color: '#f59e0b'
      }, {
        label: 'Distraction',
        value: a.platformDistractionRate.toFixed(1) + '%',
        icon: 'isax-danger5',
        bg: 'rgba(239,68,68,.1)',
        color: '#ef4444'
      }, {
        label: 'Inscriptions',
        value: a.platformTotalEnrollments.toString(),
        icon: 'isax-people5',
        bg: 'rgba(59,130,246,.1)',
        color: '#3b82f6'
      }, {
        label: 'Note Moyenne',
        value: (a.platformAvgRating ?? 0).toFixed(1) + ' ★',
        icon: 'isax-star5',
        bg: 'rgba(245,158,11,.1)',
        color: '#f59e0b'
      }];
    }
    getScoreRing(score, size = 54) {
      const r = (size - 6) / 2;
      const circ = 2 * Math.PI * r;
      const fill = score / 100 * circ;
      const color = score >= 65 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444';
      return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#f1f5f9" stroke-width="6"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="6"
        stroke-dasharray="${fill} ${circ}" stroke-linecap="round"
        transform="rotate(-90 ${size / 2} ${size / 2})"/>
    </svg>`;
    }
    getRingColor(score) {
      return score >= 65 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
    }
    coverUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_3__.resolveCourseImage)(path, '');
    }
    truncate(text, max = 30) {
      return text.length > max ? text.slice(0, max) + '…' : text;
    }
    stars(rating) {
      const r = rating ?? 0;
      const full = Math.floor(r);
      const half = r - full >= 0.5;
      const empty = 5 - full - (half ? 1 : 0);
      return {
        full,
        half,
        empty
      };
    }
    showToast(type, msg) {
      const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true
      });
      Toast.fire({
        icon: type,
        title: msg
      });
    }
    static ɵfac = function AdminAnalyticsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AdminAnalyticsComponent,
      selectors: [["app-admin-analytics"]],
      viewQuery: function AdminAnalyticsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.topEngChart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.topRatingChart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.donutChart = _t.first);
        }
      },
      decls: 37,
      vars: 4,
      consts: [[1, "main-wrapper"], [1, "page-content"], [1, "container-fluid", "p-4"], [1, "anl-hero", "mb-4"], [1, "anl-glow", "anl-glow-1"], [1, "anl-glow", "anl-glow-2"], [1, "anl-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "anl-av-wrap"], [1, "anl-av-ring"], [1, "anl-av-border"], [1, "anl-av-circle"], [1, "isax", "isax-chart-215", 2, "font-size", "26px", "color", "#fff"], [1, "anl-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "anl-chip"], [1, "isax", "isax-cpu", "me-1", 2, "font-size", "9px"], [1, "anl-live"], [1, "anl-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], ["class", "anl-glass d-none d-md-flex align-items-center", 4, "ngIf"], [1, "anl-refresh", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-refresh", 2, "font-size", "14px"], ["class", "text-center py-5", 4, "ngIf"], ["class", "text-center py-5 text-danger", 4, "ngIf"], [4, "ngIf"], [1, "anl-glass", "d-none", "d-md-flex", "align-items-center"], [1, "anl-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.55)", "font-size", "10px"], [1, "anl-stat-div"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5", "text-danger"], [1, "ti", "ti-alert-circle", "analytics-error-icon", "d-block", "mb-2"], [1, "mt-2"], [1, "btn", "btn-outline-primary", "btn-sm", "mt-2", 3, "click"], [1, "row", "g-3", "mb-4"], ["class", "col-xl-2 col-md-4 col-6", 4, "ngFor", "ngForOf"], [1, "nav", "admin-analytics-tabs", "mb-4"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "isax", "isax-chart-2", "me-1"], [1, "isax", "isax-ranking-1", "me-1"], [1, "col-xl-2", "col-md-4", "col-6"], [1, "admin-kpi-card"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "row", "g-4"], [1, "col-lg-4"], [1, "analytics-card", "h-100"], [1, "analytics-card-header"], [1, "isax", "isax-chart-21", "me-2", "text-primary"], [1, "text-muted"], [1, "analytics-card-body"], ["class", "no-data-placeholder", 4, "ngIf"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "stroke", 4, "ngIf"], [1, "col-lg-8"], [1, "isax", "isax-activity5", "me-2", "text-primary"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "colors", "grid", "tooltip", 4, "ngIf"], [1, "col-lg-6"], [1, "analytics-card"], [1, "isax", "isax-star5", "me-2", "text-warning"], [1, "isax", "isax-warning-25", "me-2", "text-danger"], [1, "badge", "ms-2", "badge-low-score"], [1, "analytics-card-body", "p-3"], ["class", "improve-row", 4, "ngFor", "ngForOf"], [1, "no-data-placeholder"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "stroke"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "dataLabels", "colors", "grid", "tooltip"], [1, "improve-row"], ["class", "improve-thumb", 3, "src", "alt", 4, "ngIf"], ["class", "improve-thumb course-no-cover", 4, "ngIf"], [1, "improve-info"], [1, "improve-title", 3, "title"], [1, "improve-stats"], [1, "badge", "me-1"], [1, "text-muted", 2, "font-size", "11px"], [1, "improve-score"], [2, "font-size", "10px", "font-weight", "400", "color", "#94a3b8"], [1, "improve-thumb", 3, "src", "alt"], [1, "improve-thumb", "course-no-cover"], [1, "isax", "isax-book-1"], [1, "row", "g-3"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "col-xl-4", "col-md-6"], [1, "rank-card"], [1, "rank-badge"], ["class", "rank-thumb", 3, "src", "alt", 4, "ngIf"], ["class", "rank-thumb course-no-cover", 4, "ngIf"], [1, "rank-body"], [1, "rank-title", 3, "title"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [3, "innerHTML"], [1, "ring-score"], [2, "font-size", "10px", "color", "#94a3b8"], [1, "rank-metrics"], [1, "rank-meta"], [1, "isax", "isax-people5", "me-1"], [4, "ngFor", "ngForOf"], [1, "rank-meta", "rank-badge-reco"], [1, "rank-thumb", 3, "src", "alt"], [1, "rank-thumb", "course-no-cover"], [1, "col-12"], [1, "ranking-empty-state"], [1, "analytics-emoji"]],
      template: function AdminAnalyticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 11)(12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div")(17, "div", 16)(18, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Analytics IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "TEMPS R\u00C9EL");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "h3", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Analytics IA \u2014 Administration");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Vue strat\u00E9gique globale \u2014 engagement, notes, recommandations");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 23)(29, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AdminAnalyticsComponent_div_30_Template, 18, 3, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminAnalyticsComponent_Template_button_click_31_listener() {
            return ctx.loadAnalytics();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AdminAnalyticsComponent_div_34_Template, 4, 0, "div", 28)(35, AdminAnalyticsComponent_div_35_Template, 7, 0, "div", 29)(36, AdminAnalyticsComponent_ng_container_36_Template, 14, 7, "ng-container", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.analytics);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.analytics);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.analytics);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.NgApexchartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.anl-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #FD3995 0%, #9b59b6 30%, #5625E8 62%, #02a8b5 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_anl-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(253, 57, 149, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.14);\n}\n.anl-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.anl-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.anl-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.anl-glow-1[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background: radial-gradient(circle, rgba(2, 168, 181, 0.22) 0%, transparent 70%);\n  top: -130px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_anl-float 7s ease-in-out infinite;\n}\n\n.anl-glow-2[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(253, 57, 149, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_anl-float 9s ease-in-out infinite reverse;\n}\n\n.anl-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.anl-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(253, 164, 175, 0.55);\n  animation: _ngcontent-%COMP%_anl-rotate 12s linear infinite;\n}\n\n.anl-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #fda4af, #FD3995, #5625E8, #02a8b5);\n}\n\n.anl-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625E8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.anl-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(253, 164, 175, 0.35);\n  animation: _ngcontent-%COMP%_anl-pulse 2.5s ease-out infinite;\n}\n\n.anl-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 16px;\n  padding: 10px 4px;\n}\n\n.anl-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 72px;\n}\n\n.anl-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.anl-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.anl-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_anl-blink 1.2s ease-in-out infinite;\n}\n\n.anl-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n.anl-refresh[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n}\n.anl-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);\n}\n\n@keyframes _ngcontent-%COMP%_anl-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_anl-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_anl-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_anl-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_anl-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.admin-kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #f1f5f9;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.admin-kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.admin-kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.admin-kpi-card[_ngcontent-%COMP%]   .kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.admin-kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2b;\n  line-height: 1.2;\n}\n.admin-kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-top: 1px;\n}\n\n.kpi-icon-size[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.analytics-page-title[_ngcontent-%COMP%] {\n  color: #1a1a2b;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.analytics-page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n}\n\n.analytics-error-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.admin-analytics-tabs[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 5px 6px;\n  border: 1px solid #f1f5f9;\n  gap: 4px;\n  display: flex;\n}\n.admin-analytics-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex: 0;\n}\n.admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  border-radius: 9px;\n  padding: 8px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1a1a2b;\n}\n.admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n\n.analytics-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.analytics-card[_ngcontent-%COMP%]   .analytics-card-header[_ngcontent-%COMP%] {\n  padding: 14px 20px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n  font-size: 13.5px;\n  color: #374151;\n  background: #f8f9ff;\n  border-bottom: 1px solid #eef0f8;\n}\n.analytics-card[_ngcontent-%COMP%]   .analytics-card-body[_ngcontent-%COMP%] {\n  padding: 8px 8px 0;\n}\n\n.no-data-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.no-data-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 8px;\n}\n.no-data-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin: 0;\n}\n\n.improve-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f8fafc;\n}\n.improve-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.improve-thumb[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 38px;\n  border-radius: 7px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #f1f5f9;\n}\n\n.improve-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.improve-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #1a1a2b;\n}\n\n.improve-stats[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.improve-score[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  text-align: right;\n  line-height: 1;\n}\n\n.rank-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1.5px solid #f1f5f9;\n  padding: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: all 0.2s;\n  position: relative;\n}\n.rank-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n\n.rank-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #6366f1;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 20px;\n}\n\n.rank-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.rank-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.rank-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 8px;\n}\n\n.ring-score[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.rank-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  font-size: 11px;\n  color: #6b7280;\n}\n\n.rank-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.rank-badge-reco[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 2px 7px;\n  font-weight: 600;\n}\n\n.featured-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1.5px solid #e0e7ff;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);\n  overflow: hidden;\n  transition: all 0.25s;\n}\n.featured-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);\n  transform: translateY(-2px);\n}\n\n.featured-card-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.featured-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n  display: block;\n}\n\n.course-no-cover[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.0705882353) 0%, rgba(139, 92, 246, 0.0705882353) 100%);\n  border-radius: inherit;\n  font-size: 1.4rem;\n  color: #6366f1;\n}\n\n.featured-score-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 10px;\n  font-size: 20px;\n  font-weight: 800;\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.featured-score-overlay[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.featured-card-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n\n.featured-title[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #1a1a2b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 2px;\n}\n\n.featured-instructor[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 8px;\n}\n\n.featured-stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n\n.badge-low-score[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  font-size: 10px;\n}\n\n.ranking-empty-state[_ngcontent-%COMP%] {\n  padding: 60px;\n  text-align: center;\n  color: #94a3b8;\n}\n.ranking-empty-state[_ngcontent-%COMP%]   .analytics-emoji[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 8px;\n}\n.ranking-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.analytics-emoji[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 8px;\n}\n\n.dark-mode[_nghost-%COMP%]   .admin-kpi-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .admin-kpi-card[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .admin-kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .admin-kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .admin-analytics-tabs[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .admin-analytics-tabs[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .admin-analytics-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .analytics-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .analytics-card[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .analytics-card-header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .analytics-card[_ngcontent-%COMP%]   .analytics-card-header[_ngcontent-%COMP%] {\n  background: #111119;\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tYW5hbHl0aWNzL2FkbWluLWFuYWx5dGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OzREQUFBO0FBR0E7RUFDRSx1RkFBQTtFQUNBLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3JCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQ3BCLGdDQUFBO0VBQ0Esd0ZBQUE7QUFJRjtBQUhFO0VBQVksV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFFBQUE7RUFBVSxvQkFBQTtFQUFzQixVQUFBO0VBQVksd0ZBQUE7RUFBc0YsMEJBQUE7QUFZakw7O0FBVkE7RUFBaUIsa0JBQUE7RUFBb0IsVUFBQTtBQWVyQzs7QUFkQTtFQUFZLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLG9CQUFBO0FBb0JwRDs7QUFuQkE7RUFBYyxZQUFBO0VBQWMsYUFBQTtFQUFlLGdGQUFBO0VBQThFLFdBQUE7RUFBYSxTQUFBO0VBQVcsNENBQUE7QUE0QmpKOztBQTNCQTtFQUFjLFlBQUE7RUFBYyxhQUFBO0VBQWUsaUZBQUE7RUFBK0UsYUFBQTtFQUFlLFFBQUE7RUFBVSxvREFBQTtBQW9Dbko7O0FBbkNBO0VBQWlCLGtCQUFBO0VBQW9CLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLFlBQUE7QUEwQ2xFOztBQXpDQTtFQUFpQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsOENBQUE7RUFBNEMseUNBQUE7QUFpRGxIOztBQWhEQTtFQUFpQixrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFBb0IsdUVBQUE7QUF1RG5FOztBQXREQTtFQUFpQixrQkFBQTtFQUFvQixVQUFBO0VBQVksa0JBQUE7RUFBb0IscURBQUE7RUFBdUQsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBZ0VoSzs7QUEvREE7RUFBaUIsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLGtCQUFBO0VB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OVNBO0VBQ0UsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUNyQyxtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtFQUF5QixrQkFBQTtBQXNUbEU7O0FBcFRBO0VBQXVCLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixrQkFBQTtBQTBUeEQ7O0FBelRBO0VBQWtCLGVBQUE7RUFBaUIsY0FBQTtBQThUbkM7O0FBM1RBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQThURjs7QUExVEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBNlRGO0FBM1RFO0VBQW1CLGVBQUE7RUFBaUIsa0JBQUE7QUErVHRDO0FBOVRFO0VBQUksU0FBQTtBQWlVTjs7QUE3VEE7RUFBbUIsZUFBQTtFQUFpQixrQkFBQTtBQWtVcEM7O0FBOVRFO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtBQWlVSjtBQWhVSTtFQUFhLGNBQUE7QUFtVWpCO0FBalVFO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtBQW1VSjtBQWxVSTtFQUNFLGNBQUE7QUFvVU47QUFuVU07RUFBVSxxQ0FBQTtFQUFtQyxjQUFBO0FBdVVuRDtBQXBVRTtFQUNFLG1CQUFBO0VBQ0EsdUNBQUE7QUFzVUo7QUFyVUk7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtBQXVVTiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4gICBBbmFseXRpY3MgSGVybyDDosKAwpQgSW5kaWdvL1Zpb2xldFxyXG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cclxuLmFubC1oZXJvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkQzOTk1IDAlLCAjOWI1OWI2IDMwJSwgIzU2MjVFOCA2MiUsICMwMmE4YjUgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogMjhweCAyOHB4IDI0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogYW5sLWZhZGUtaW4gLjVzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgyNTMsNTcsMTQ5LC4zKSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xNCk7XHJcbiAgJjo6YmVmb3JlIHsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB6LWluZGV4OiAwOyBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCk7IGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4OyB9XHJcbn1cclxuLmFubC1oZXJvLWJvZHkgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IH1cclxuLmFubC1nbG93IHsgcG9zaXRpb246IGFic29sdXRlOyBib3JkZXItcmFkaXVzOiA1MCU7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XHJcbi5hbmwtZ2xvdy0xIHsgd2lkdGg6IDM4MHB4OyBoZWlnaHQ6IDM4MHB4OyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIsMTY4LDE4MSwuMjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpOyB0b3A6IC0xMzBweDsgcmlnaHQ6IDIlOyBhbmltYXRpb246IGFubC1mbG9hdCA3cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxyXG4uYW5sLWdsb3ctMiB7IHdpZHRoOiAyNDBweDsgaGVpZ2h0OiAyNDBweDsgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTMsNTcsMTQ5LC4xNSkgMCUsIHRyYW5zcGFyZW50IDcwJSk7IGJvdHRvbTogLTcwcHg7IGxlZnQ6IDUlOyBhbmltYXRpb246IGFubC1mbG9hdCA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSByZXZlcnNlOyB9XHJcbi5hbmwtYXYtd3JhcCAgIHsgcG9zaXRpb246IHJlbGF0aXZlOyBmbGV4LXNocmluazogMDsgd2lkdGg6IDY4cHg7IGhlaWdodDogNjhweDsgfVxyXG4uYW5sLWF2LXJpbmcgICB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IC04cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAxLjVweCBkYXNoZWQgcmdiYSgyNTMsMTY0LDE3NSwuNTUpOyBhbmltYXRpb246IGFubC1yb3RhdGUgMTJzIGxpbmVhciBpbmZpbml0ZTsgfVxyXG4uYW5sLWF2LWJvcmRlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZkYTRhZiwgI0ZEMzk5NSwgIzU2MjVFOCwgIzAyYThiNSk7IH1cclxuLmFubC1hdi1jaXJjbGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzliNTliNiwgIzU2MjVFOCk7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbi5hbmwtYXYtcHVsc2UgIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1MywxNjQsMTc1LC4zNSk7IGFuaW1hdGlvbjogYW5sLXB1bHNlIDIuNXMgZWFzZS1vdXQgaW5maW5pdGU7IH1cclxuLmFubC1nbGFzcyAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7IGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDEwcHggNHB4OyB9XHJcbi5hbmwtc3RhdCAgICAgeyBwYWRkaW5nOiAwIDE0cHg7IG1pbi13aWR0aDogNzJweDsgfVxyXG4uYW5sLXN0YXQtZGl2IHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAzMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgfVxyXG4uYW5sLWxpdmUgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgfVxyXG4uYW5sLWxpdmUtZG90IHsgd2lkdGg6IDdweDsgaGVpZ2h0OiA3cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogIzRhZGU4MDsgYW5pbWF0aW9uOiBhbmwtYmxpbmsgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxyXG4uYW5sLWNoaXAgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDkuNXB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogLjdweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgcGFkZGluZzogNHB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cclxuLmFubC1yZWZyZXNoIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTQpOyBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI4KTsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNjAwOyBwYWRkaW5nOiA4cHggMThweDsgYm9yZGVyLXJhZGl1czogMjRweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjIyczsgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjI2KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoOTksMTAyLDI0MSwuMyk7IH0gfVxyXG5Aa2V5ZnJhbWVzIGFubC1mYWRlLWluIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogbm9uZTsgfSB9XHJcbkBrZXlmcmFtZXMgYW5sLWZsb2F0ICAgeyAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7IH0gfVxyXG5Aa2V5ZnJhbWVzIGFubC1yb3RhdGUgIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQGtleWZyYW1lcyBhbmwtcHVsc2UgICB7IDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogLjY7IH0gMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS41NSk7IG9wYWNpdHk6IDA7IH0gfVxyXG5Aa2V5ZnJhbWVzIGFubC1ibGluayAgIHsgMCUsMTAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogLjQ7IH0gfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEtQSSBDYXJkcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmFkbWluLWtwaS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMDQpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjJzLCB0cmFuc2Zvcm0gLjJzO1xyXG5cclxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4wOCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgfVxyXG5cclxuICAua3BpLWljb24ge1xyXG4gICAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICAua3BpLWJvZHkgeyBmbGV4OiAxOyB9XHJcbiAgLmtwaS12YWx1ZSB7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxYTFhMmI7IGxpbmUtaGVpZ2h0OiAxLjI7IH1cclxuICAua3BpLWxhYmVsIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzk0YTNiODsgZm9udC13ZWlnaHQ6IDUwMDsgbWFyZ2luLXRvcDogMXB4OyB9XHJcbn1cclxuXHJcbi8vIGljw4PCtG5lIGRhbnMgbGVzIEtQSSBjYXJkc1xyXG4ua3BpLWljb24tc2l6ZSB7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFBhZ2UgaGVhZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLXBhZ2UtdGl0bGUge1xyXG4gIGNvbG9yOiAjMWExYTJiO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hbmFseXRpY3MtcGFnZS1zdWJ0aXRsZSB7IGZvbnQtc2l6ZTogMTMuNXB4OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRXJyb3IgaWNvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmFuYWx5dGljcy1lcnJvci1pY29uIHsgZm9udC1zaXplOiAycmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVGFiIG5hdmlnYXRpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5hZG1pbi1hbmFseXRpY3MtdGFicyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDVweCA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcclxuICBnYXA6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAubmF2LWl0ZW0geyBmbGV4OiAwOyB9XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7IHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNTAwOyBjb2xvcjogIzZiNzI4MDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7IGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgY29sb3I6ICMxYTFhMmI7IH1cclxuICAgICYuYWN0aXZlIHsgYmFja2dyb3VuZDogIzYzNjZmMTsgY29sb3I6ICNmZmY7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBBbmFseXRpY3MgQ2FyZHMgKHNoYXJlZCB3aXRoIGluc3RydWN0b3IpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLC4wNCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmFuYWx5dGljcy1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMTMuNXB4OyBjb2xvcjogIzM3NDE1MTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjBmODtcclxuICB9XHJcbiAgLmFuYWx5dGljcy1jYXJkLWJvZHkgeyBwYWRkaW5nOiA4cHggOHB4IDA7IH1cclxufVxyXG5cclxuLm5vLWRhdGEtcGxhY2Vob2xkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBhZGRpbmc6IDQwcHggMjBweDtcclxuICBzcGFuIHsgZm9udC1zaXplOiA0MHB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cclxuICBwIHsgY29sb3I6ICM5NGEzYjg7IGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luOiAwOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBJbXByb3ZlIGxpc3Qgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5pbXByb3ZlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZmFmYztcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG59XHJcbi5pbXByb3ZlLXRodW1iIHtcclxuICB3aWR0aDogNTJweDsgaGVpZ2h0OiAzOHB4OyBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7IGZsZXgtc2hyaW5rOiAwOyBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcbi5pbXByb3ZlLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuLmltcHJvdmUtdGl0bGUgeyBmb250LXNpemU6IDEyLjVweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxYTFhMmI7IH1cclxuLmltcHJvdmUtc3RhdHMgeyBtYXJnaW4tdG9wOiAzcHg7IH1cclxuLmltcHJvdmUtc2NvcmUgeyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtYWxpZ246IHJpZ2h0OyBsaW5lLWhlaWdodDogMTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJhbmtpbmcgY2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5yYW5rLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwuMDQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsMCwwLC4wOCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgfVxyXG59XHJcbi5yYW5rLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMTBweDsgbGVmdDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNjM2NmYxOyBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMnB4IDdweDsgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ucmFuay10aHVtYiB7XHJcbiAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTIwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJhbmstYm9keSB7IGZsZXg6IDE7IH1cclxuLnJhbmstdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMxYTFhMmI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4ucmluZy1zY29yZSB7IGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG4ucmFuay1tZXRyaWNzIHtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM2YjcyODA7XHJcbn1cclxuLnJhbmstbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogM3B4OyB9XHJcbi5yYW5rLWJhZGdlLXJlY28geyBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAycHggN3B4OyBmb250LXdlaWdodDogNjAwOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRmVhdHVyZWQgY2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5mZWF0dXJlZC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTBlN2ZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDk5LDEwMiwyNDEsLjA4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xyXG5cclxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDk5LDEwMiwyNDEsLjE1KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XHJcbn1cclxuLmZlYXR1cmVkLWNhcmQtaW1nLXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuLmZlYXR1cmVkLXRodW1iIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTMwcHg7IG9iamVjdC1maXQ6IGNvdmVyOyBkaXNwbGF5OiBibG9jazsgfVxyXG4uY291cnNlLW5vLWNvdmVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxMTIgMCUsICM4YjVjZjYxMiAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtOyBjb2xvcjogIzYzNjZmMTtcclxufVxyXG4uZmVhdHVyZWQtc2NvcmUtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDhweDsgcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMyk7XHJcbiAgc21hbGwgeyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cclxufVxyXG4uZmVhdHVyZWQtY2FyZC1ib2R5IHsgcGFkZGluZzogMTRweDsgfVxyXG4uZmVhdHVyZWQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzFhMWEyYjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbi5mZWF0dXJlZC1pbnN0cnVjdG9yIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzZiNzI4MDsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XHJcbi5mZWF0dXJlZC1zdGF0cyB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM0YjU1NjM7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBCYWRnZSBzY29yZSA8IDQwIGRhbnMgXCJDb3VycyDDg8KgIEFtw4PCqWxpb3JlclwiIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uYmFkZ2UtbG93LXNjb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xyXG4gIGNvbG9yOiAjZGMyNjI2O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJhbmtpbmcgZW1wdHkgc3RhdGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5yYW5raW5nLWVtcHR5LXN0YXRlIHtcclxuICBwYWRkaW5nOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzk0YTNiODtcclxuXHJcbiAgLmFuYWx5dGljcy1lbW9qaSB7IGZvbnQtc2l6ZTogNDhweDsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XHJcbiAgcCB7IG1hcmdpbjogMDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRW1vamkgaGVscGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLWVtb2ppIHsgZm9udC1zaXplOiA0MHB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBEQVJLIE1PREUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbjpob3N0LWNvbnRleHQoLmRhcmstbW9kZSkge1xyXG4gIC5hZG1pbi1rcGktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTJiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNyk7XHJcbiAgICAua3BpLXZhbHVlIHsgY29sb3I6ICNlMmU4ZjA7IH1cclxuICB9XHJcbiAgLmFkbWluLWFuYWx5dGljcy10YWJzIHtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMmI7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KTtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDUpOyBjb2xvcjogI2UyZThmMDsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYW5hbHl0aWNzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogIzFhMWEyYjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDcpO1xyXG4gICAgLmFuYWx5dGljcy1jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxMTExMTk7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KTtcclxuICAgICAgY29sb3I6ICNlMmU4ZjA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return AdminAnalyticsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=6050.js.map