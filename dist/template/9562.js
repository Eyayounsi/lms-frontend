"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9562],{

/***/ 39562:
/*!********************************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-analytics/instructor-analytics.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorAnalyticsComponent: () => (/* binding */ InstructorAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/analytics/analytics.service */ 60452);











const _c0 = ["chart"];
function InstructorAnalyticsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Analyse des donn\u00E9es en cours\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function InstructorAnalyticsComponent_ng_container_24_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Aucun cours publi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Publiez vos cours pour voir les analytics appara\u00EEtre ici.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "G\u00E9rer mes cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorCourse);
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "apx-chart", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("series", ctx_r0.attentionChart.series)("chart", ctx_r0.attentionChart.chart)("colors", ctx_r0.attentionChart.colors)("plotOptions", ctx_r0.attentionChart.plotOptions)("dataLabels", ctx_r0.attentionChart.dataLabels)("xaxis", ctx_r0.attentionChart.xaxis)("yaxis", ctx_r0.attentionChart.yaxis)("grid", ctx_r0.attentionChart.grid)("legend", ctx_r0.attentionChart.legend)("tooltip", ctx_r0.attentionChart.tooltip);
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Activez le suivi cam\u00E9ra pour voir les donn\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "apx-chart", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("series", ctx_r0.detectionDistChart.series)("chart", ctx_r0.detectionDistChart.chart)("colors", ctx_r0.detectionDistChart.colors)("plotOptions", ctx_r0.detectionDistChart.plotOptions)("dataLabels", ctx_r0.detectionDistChart.dataLabels)("xaxis", ctx_r0.detectionDistChart.xaxis)("yaxis", ctx_r0.detectionDistChart.yaxis)("grid", ctx_r0.detectionDistChart.grid)("legend", ctx_r0.detectionDistChart.legend)("fill", ctx_r0.detectionDistChart.fill)("tooltip", ctx_r0.detectionDistChart.tooltip);
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Activez le suivi cam\u00E9ra pour voir les donn\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 91);
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.coverUrl(c_r3.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_i_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 94);
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", s_r4 ? "isax-star-1 ia-star-on" : "isax-star ia-star-off");
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r3.totalDetections, " d\u00E9tections");
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Pas de suivi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_Template_div_click_1_listener() {
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.selectCourse(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_img_3_Template, 1, 1, "img", 62)(4, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_div_4_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 64)(6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 66)(9, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "svg", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "circle", 71)(16, "circle", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 73)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 74)(22, "div", 75)(23, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Attention ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 75)(32, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Fatigue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 81)(41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_i_42_Template, 1, 1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_span_49_Template, 3, 1, "span", 17)(50, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_span_50_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 86)(52, "div", 87)(53, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Recommandation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", (ctx_r0.selectedCourse == null ? null : ctx_r0.selectedCourse.courseId) === c_r3.courseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", c_r3.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !c_r3.coverImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", c_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.truncate(c_r3.title, 40));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", c_r3.recommendationColor + "18")("color", c_r3.recommendationColor)("border", "1px solid " + c_r3.recommendationColor + "60");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r3.recommendationBadge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", c_r3.enrollmentCount, " \u00E9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("stroke", ctx_r0.getRingColor(c_r3.engagementScore))("style", ctx_r0.getScoreRing(c_r3.engagementScore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeStyle"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r0.getRingColor(c_r3.engagementScore));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](20, 39, c_r3.engagementScore, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", c_r3.avgAttentionScore, "%")("background", c_r3.avgAttentionScore >= 70 ? "#4ade80" : c_r3.avgAttentionScore >= 50 ? "#fbbf24" : "#fb7185");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](30, 42, c_r3.avgAttentionScore, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", c_r3.fatigueRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](39, 45, c_r3.fatigueRate, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.stars(c_r3.avgRating));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r3.avgRating != null ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](45, 48, c_r3.avgRating, "1.1-1") : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", c_r3.reviewCount, " avis)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", c_r3.totalDetections > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", c_r3.totalDetections === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("open", (ctx_r0.selectedCourse == null ? null : ctx_r0.selectedCourse.courseId) === c_r3.courseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("border-top-color", c_r3.recommendationColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", c_r3.recommendationColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", c_r3.recommendationMessage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function InstructorAnalyticsComponent_ng_container_24_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 21)(2, "div", 41)(3, "div", 42)(4, "div", 43)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Attention par cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Score moyen de concentration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_10_Template, 2, 10, "div", 46)(11, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_11_Template, 5, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 41)(13, "div", 42)(14, "div", 43)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "R\u00E9partition des d\u00E9tections");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Concentration / Fatigue / Distraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_20_Template, 2, 11, "div", 46)(21, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_21_Template, 5, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Recommandations par cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, InstructorAnalyticsComponent_ng_container_24_ng_container_41_div_28_Template, 57, 51, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.attentionChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.attentionChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detectionDistChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.detectionDistChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.filteredCourses.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.filteredCourses);
  }
}
function InstructorAnalyticsComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Cours publi\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 22)(12, "div", 23)(13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div")(16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Attention moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 22)(21, "div", 23)(22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div")(25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Note moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 22)(32, "div", 23)(33, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div")(36, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\u00C9tudiants inscrits");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, InstructorAnalyticsComponent_ng_container_24_div_40_Template, 9, 1, "div", 16)(41, InstructorAnalyticsComponent_ng_container_24_ng_container_41_Template, 29, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.courses.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r0.avgAttention >= 70 ? "#22c55e" : ctx_r0.avgAttention >= 50 ? "#f59e0b" : "#f43f5e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.avgAttention, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.avgRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.totalStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.courses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.courses.length > 0);
  }
}
let InstructorAnalyticsComponent = /*#__PURE__*/(() => {
  class InstructorAnalyticsComponent {
    analyticsService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    chart;
    courses = [];
    filteredCourses = [];
    loading = true;
    selectedCourse = null;
    searchTerm = '';
    filterType = '';
    // Charts
    attentionChart;
    detectionDistChart;
    engagementChart;
    constructor(analyticsService) {
      this.analyticsService = analyticsService;
    }
    ngOnInit() {
      this.analyticsService.getInstructorAnalytics().subscribe({
        next: data => {
          this.courses = data;
          this.filteredCourses = data;
          this.loading = false;
          if (data.length) {
            this.selectedCourse = data[0];
            this.buildCharts(data);
          }
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    // ─── Filters ───────────────────────────────────────────────────────────
    applyFilters() {
      let list = [...this.courses];
      if (this.searchTerm.trim()) {
        const t = this.searchTerm.toLowerCase();
        list = list.filter(c => c.title.toLowerCase().includes(t));
      }
      if (this.filterType) {
        list = list.filter(c => c.recommendationType === this.filterType);
      }
      this.filteredCourses = list;
    }
    selectCourse(c) {
      this.selectedCourse = this.selectedCourse?.courseId === c.courseId ? null : c;
    }
    // ─── Global stats getters ──────────────────────────────────────────────
    get avgAttention() {
      const w = this.courses.filter(c => c.totalDetections > 0);
      if (!w.length) return 0;
      return Math.round(w.reduce((s, c) => s + c.avgAttentionScore, 0) / w.length);
    }
    get avgRating() {
      const w = this.courses.filter(c => c.avgRating != null);
      if (!w.length) return 0;
      return Math.round(w.reduce((s, c) => s + (c.avgRating ?? 0), 0) / w.length * 10) / 10;
    }
    get totalStudents() {
      return this.courses.reduce((s, c) => s + c.enrollmentCount, 0);
    }
    get excellentCount() {
      return this.courses.filter(c => c.recommendationType === 'EXCELLENT').length;
    }
    // ─── Charts ────────────────────────────────────────────────────────────
    buildCharts(data) {
      const withDet = data.filter(c => c.totalDetections > 0);
      const labels = withDet.map(c => this.truncate(c.title, 18));
      // Chart 1: Attention score per course
      this.attentionChart = {
        series: [{
          name: 'Attention moy.',
          data: withDet.map(c => Math.round(c.avgAttentionScore))
        }],
        chart: {
          type: 'bar',
          height: 240,
          toolbar: {
            show: false
          },
          fontFamily: 'inherit',
          animations: {
            enabled: true
          }
        },
        colors: withDet.map(c => c.avgAttentionScore >= 70 ? '#4ade80' : c.avgAttentionScore >= 50 ? '#fbbf24' : '#fb7185'),
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '55%',
            distributed: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: v => v + '%',
          offsetY: -18,
          style: {
            fontSize: '11px',
            fontWeight: 600
          }
        },
        xaxis: {
          categories: labels,
          labels: {
            style: {
              fontSize: '11px',
              colors: '#64748b'
            }
          }
        },
        yaxis: {
          max: 100,
          labels: {
            formatter: v => v + '%'
          }
        },
        grid: {
          borderColor: '#f1f5f9'
        },
        legend: {
          show: false
        },
        tooltip: {
          y: {
            formatter: v => v + '%'
          }
        }
      };
      // Chart 2: Detection distribution (concentration vs fatigue vs distraction)
      const conc = withDet.map(c => Math.round(c.concentrationRate));
      const fatig = withDet.map(c => Math.round(c.fatigueRate));
      const distr = withDet.map(c => Math.round(c.distractionRate));
      const other = withDet.map((c, i) => Math.max(0, 100 - conc[i] - fatig[i] - distr[i]));
      this.detectionDistChart = {
        series: [{
          name: 'Concentration',
          data: conc
        }, {
          name: 'Fatigue',
          data: fatig
        }, {
          name: 'Distraction',
          data: distr
        }, {
          name: 'Autre',
          data: other
        }],
        chart: {
          type: 'bar',
          height: 240,
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false
          },
          fontFamily: 'inherit',
          animations: {
            enabled: true
          }
        },
        colors: ['#4ade80', '#fbbf24', '#fb7185', '#cbd5e1'],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4
          }
        },
        xaxis: {
          categories: labels,
          labels: {
            style: {
              fontSize: '11px',
              colors: '#64748b'
            }
          }
        },
        yaxis: {
          labels: {
            formatter: v => v + '%'
          }
        },
        grid: {
          borderColor: '#f1f5f9'
        },
        legend: {
          position: 'top',
          fontSize: '12px'
        },
        tooltip: {
          y: {
            formatter: v => Math.round(v) + '%'
          }
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          enabled: false
        }
      };
      // Chart 3: Engagement score per course
      this.engagementChart = {
        series: [{
          name: 'Score engagement',
          data: data.map(c => Math.round(c.engagementScore))
        }],
        chart: {
          type: 'radar',
          height: 260,
          toolbar: {
            show: false
          },
          fontFamily: 'inherit',
          animations: {
            enabled: true
          }
        },
        colors: ['#6366f1'],
        labels: data.map(c => this.truncate(c.title, 14)),
        fill: {
          opacity: 0.25
        },
        stroke: {
          width: 2.2
        },
        markers: {
          size: 4.5
        },
        yaxis: {
          show: false
        },
        tooltip: {
          y: {
            formatter: v => Math.round(v) + '/100'
          }
        }
      };
    }
    // ─── Helpers ───────────────────────────────────────────────────────────
    truncate(s, n) {
      return s.length > n ? s.slice(0, n) + '…' : s;
    }
    coverUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_5__.resolveCourseImage)(path, '');
    }
    stars(rating) {
      const r = Math.round(rating ?? 0);
      return Array.from({
        length: 5
      }, (_, i) => i < r ? 1 : 0);
    }
    getScoreRing(score) {
      const pct = Math.round(score);
      const r = 20;
      const circ = 2 * Math.PI * r;
      const offset = circ - pct / 100 * circ;
      return `stroke-dasharray:${circ.toFixed(1)};stroke-dashoffset:${offset.toFixed(1)}`;
    }
    getRingColor(score) {
      if (score >= 70) return '#4ade80';
      if (score >= 50) return '#fbbf24';
      return '#fb7185';
    }
    static ɵfac = function InstructorAnalyticsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorAnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__.AnalyticsService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: InstructorAnalyticsComponent,
      selectors: [["app-instructor-analytics"]],
      viewQuery: function InstructorAnalyticsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 25,
      vars: 4,
      consts: [[1, "main-wrapper"], [1, "page-content"], [1, "container-fluid", "p-4", "ia-shell"], [1, "ia-hero", "d-flex", "align-items-center", "justify-content-end", "mb-4", "flex-wrap", "gap-3"], [1, "d-flex", "gap-2", "align-items-center", "ia-hero-filters", "flex-wrap"], [1, "ia-input-wrap"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Rechercher un cours\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", "ia-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "EXCELLENT"], ["value", "SEGMENT_CONTENT"], ["value", "SLOW_DOWN"], ["value", "NEEDS_ENGAGEMENT"], ["value", "ON_TRACK"], ["value", "NO_DATA"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary", "opacity-50"], [1, "text-muted", "mt-3", "ia-loading-text"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-lg-3"], [1, "analytics-kpi-card"], [1, "kpi-icon", "ia-kpi-icon--courses"], [1, "isax", "isax-teacher"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "ia-kpi-icon--attention"], [1, "isax", "isax-eye"], [1, "kpi-icon", "ia-kpi-icon--rating"], [1, "isax", "isax-star-1"], [1, "kpi-value", "ia-kpi-value-rating"], [1, "kpi-icon", "ia-kpi-icon--students"], [1, "isax", "isax-people"], [1, "kpi-value", "ia-kpi-value-students"], [1, "ia-empty-icon"], [1, "isax", "isax-chart-21"], [1, "mt-3", "fw-semibold", "ia-empty-title"], [1, "text-muted", "ia-empty-subtitle"], [1, "btn", "btn-primary", "btn-sm", "rounded-pill", "px-4", "ia-empty-btn", 3, "routerLink"], [1, "col-lg-6"], [1, "analytics-card", "h-100"], [1, "analytics-card-header"], [1, "isax", "isax-chart-1", "me-2"], [1, "text-muted"], ["class", "analytics-card-body", 4, "ngIf"], ["class", "no-data-placeholder", 4, "ngIf"], [1, "isax", "isax-graph", "me-2"], [1, "fw-bold", "mb-3", "ia-section-title"], [1, "isax", "isax-book-1", "me-2"], [1, "badge", "rounded-pill", "ms-2", "ia-section-badge"], [1, "row", "g-3"], ["class", "col-lg-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "analytics-card-body"], [3, "series", "chart", "colors", "plotOptions", "dataLabels", "xaxis", "yaxis", "grid", "legend", "tooltip"], [1, "no-data-placeholder"], [1, "isax", "isax-radar-1"], [3, "series", "chart", "colors", "plotOptions", "dataLabels", "xaxis", "yaxis", "grid", "legend", "fill", "tooltip"], [1, "col-lg-6", "col-xl-4"], [1, "course-analytics-card", 2, "cursor", "pointer", 3, "click"], [1, "course-card-top"], ["alt", "", "class", "course-thumb", 3, "src", 4, "ngIf"], ["class", "course-thumb course-thumb-placeholder", 4, "ngIf"], [1, "course-card-info"], [1, "course-title", 3, "title"], [1, "d-flex", "align-items-center", "gap-2", "mt-1"], [1, "badge", "rounded-pill", "ia-reco-badge"], [1, "text-muted", 2, "font-size", "11px"], [1, "engagement-ring-container"], ["width", "52", "height", "52", "viewBox", "0 0 52 52"], ["cx", "26", "cy", "26", "r", "20", "fill", "none", "stroke", "#e2e8f0", "stroke-width", "4"], ["cx", "26", "cy", "26", "r", "20", "fill", "none", "stroke-width", "4", "stroke-linecap", "round", "transform", "rotate(-90 26 26)"], [1, "ring-label"], [1, "course-metrics-row"], [1, "metric-item"], [1, "metric-bar"], [1, "metric-fill"], [1, "metric-label"], [1, "metric-fill", 2, "background", "#fbbf24"], [1, "isax", "isax-moon"], [1, "d-flex", "align-items-center", "justify-content-between", "px-3", "pb-2", "pt-1", "ia-course-foot"], ["class", "isax me-1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ms-1"], [1, "text-muted", "ms-1"], ["class", "text-muted", 4, "ngIf"], [1, "recommendation-box"], [1, "reco-inner"], [1, "reco-title"], [1, "isax", "isax-magicpen", "me-1"], [1, "reco-text", 3, "innerHTML"], ["alt", "", 1, "course-thumb", 3, "src"], [1, "course-thumb", "course-thumb-placeholder"], [1, "isax", "isax-book-1"], [1, "isax", "me-1", 3, "ngClass"]],
      template: function InstructorAnalyticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function InstructorAnalyticsComponent_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstructorAnalyticsComponent_Template_input_ngModelChange_7_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function InstructorAnalyticsComponent_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterType, $event) || (ctx.filterType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstructorAnalyticsComponent_Template_select_ngModelChange_8_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Tous les types");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Excellent");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Fatigue");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Avis n\u00E9gatifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Engagement faible");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "En progression");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Pas de donn\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, InstructorAnalyticsComponent_div_23_Template, 4, 0, "div", 16)(24, InstructorAnalyticsComponent_ng_container_24_Template, 42, 8, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterType);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.NgApexchartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.ia-shell[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ia-shell[_ngcontent-%COMP%]::before, .ia-shell[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  z-index: 0;\n  border-radius: 50%;\n  filter: blur(36px);\n}\n.ia-shell[_ngcontent-%COMP%]::before {\n  width: 260px;\n  height: 260px;\n  top: -40px;\n  right: -70px;\n  background: radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent 70%);\n}\n.ia-shell[_ngcontent-%COMP%]::after {\n  width: 220px;\n  height: 220px;\n  bottom: 4%;\n  left: -60px;\n  background: radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 72%);\n}\n.ia-shell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.ia-hero[_ngcontent-%COMP%] {\n  border: 1px solid #e5ecf6;\n  background: linear-gradient(160deg, #ffffff 0%, #f7f9ff 100%);\n  border-radius: 18px;\n  padding: 14px 16px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n}\n\n.ia-hero-title[_ngcontent-%COMP%] {\n  font-size: 1.12rem;\n  letter-spacing: -0.01em;\n}\n.ia-hero-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.ia-hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.ia-hero-filters[_ngcontent-%COMP%] {\n  row-gap: 0.5rem;\n}\n\n.ia-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ia-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.ia-input-wrap[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 215px;\n  min-height: 36px;\n  border-radius: 10px;\n  border: 1px solid #dce6f3;\n  padding-left: 30px;\n  box-shadow: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.ia-input-wrap[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #a5b4fc;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n\n.ia-select[_ngcontent-%COMP%] {\n  width: 175px;\n  min-height: 36px;\n  border-radius: 10px;\n  border: 1px solid #dce6f3;\n  box-shadow: none;\n}\n\n.ia-loading-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.analytics-kpi-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);\n  border-radius: 14px;\n  border: 1px solid #e4ecf7;\n  padding: 14px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n  animation: _ngcontent-%COMP%_iaRiseIn 0.4s ease both;\n}\n.analytics-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #cfdcf1;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n}\n.analytics-kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid transparent;\n}\n.analytics-kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.analytics-kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 750;\n  color: #1e293b;\n  line-height: 1.15;\n}\n.analytics-kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n  margin-top: 2px;\n}\n\n.ia-kpi-icon--courses[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dbeafe, #bfdbfe);\n  border-color: #c7dbfb;\n}\n.ia-kpi-icon--courses[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n\n.ia-kpi-icon--attention[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dcfce7, #bbf7d0);\n  border-color: #b7edcb;\n}\n.ia-kpi-icon--attention[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n\n.ia-kpi-icon--rating[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fef9c3, #fde68a);\n  border-color: #f9df7c;\n}\n.ia-kpi-icon--rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a16207;\n}\n\n.ia-kpi-icon--students[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ede9fe, #ddd6fe);\n  border-color: #d5cbfd;\n}\n.ia-kpi-icon--students[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6d28d9;\n}\n\n.ia-kpi-value-rating[_ngcontent-%COMP%] {\n  color: #a16207;\n}\n.ia-kpi-value-rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.ia-kpi-value-students[_ngcontent-%COMP%] {\n  color: #6d28d9;\n}\n\n.ia-empty-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #eef2ff, #dbeafe);\n  border: 1px solid #d9e2f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ia-empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  color: #4f46e5;\n}\n\n.ia-empty-title[_ngcontent-%COMP%] {\n  color: #334155;\n}\n\n.ia-empty-subtitle[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n}\n\n.ia-empty-btn[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 18px rgba(79, 70, 229, 0.2);\n}\n\n.analytics-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e6edf7;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.analytics-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 22px rgba(15, 23, 42, 0.08);\n}\n.analytics-card[_ngcontent-%COMP%]   .analytics-card-header[_ngcontent-%COMP%] {\n  padding: 13px 16px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n  font-size: 13.5px;\n  color: #334155;\n  background: linear-gradient(180deg, #f8faff, #f6f9ff);\n  border-bottom: 1px solid #e9eef7;\n}\n.analytics-card[_ngcontent-%COMP%]   .analytics-card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.analytics-card[_ngcontent-%COMP%]   .analytics-card-body[_ngcontent-%COMP%] {\n  padding: 8px 8px 0;\n}\n\n.no-data-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 34px 20px;\n}\n.no-data-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #eef2ff, #e2e8f0);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.no-data-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #64748b;\n}\n.no-data-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  margin: 10px 0 0;\n  text-align: center;\n}\n\n.ia-section-title[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.ia-section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n\n.ia-section-badge[_ngcontent-%COMP%] {\n  background: #6366f1;\n  font-size: 11px;\n}\n\n.course-analytics-card[_ngcontent-%COMP%] {\n  background: linear-gradient(155deg, rgba(255, 255, 255, 0.88), rgba(248, 251, 255, 0.78));\n  border-radius: 16px;\n  border: 1.5px solid rgba(214, 225, 242, 0.85);\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n  animation: _ngcontent-%COMP%_iaRiseIn 0.45s ease both;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  position: relative;\n}\n.course-analytics-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: linear-gradient(120deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 45%);\n}\n.course-analytics-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.1);\n  transform: translateY(-2px);\n  border-color: #cbd9ee !important;\n}\n.course-analytics-card.selected[_ngcontent-%COMP%] {\n  border-color: #6366f1 !important;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12), 0 10px 20px rgba(99, 102, 241, 0.08);\n}\n.course-analytics-card[_ngcontent-%COMP%]   .course-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 14px 10px;\n  position: relative;\n  z-index: 1;\n}\n.course-analytics-card[_ngcontent-%COMP%]   .course-thumb[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 44px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e7edf8;\n}\n.course-analytics-card[_ngcontent-%COMP%]   .course-thumb-placeholder[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #6366f1;\n}\n.course-analytics-card[_ngcontent-%COMP%]   .course-card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.course-analytics-card[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 650;\n  color: #1e293b;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ia-reco-badge[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 3px 8px;\n  letter-spacing: 0.01em;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.engagement-ring-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  flex-shrink: 0;\n}\n.engagement-ring-container[_ngcontent-%COMP%]   .ring-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.course-metrics-row[_ngcontent-%COMP%] {\n  padding: 2px 14px 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.metric-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.metric-bar[_ngcontent-%COMP%] {\n  height: 5px;\n  border-radius: 99px;\n  background: #edf2f7;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n\n.metric-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.7s ease;\n}\n\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.metric-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  vertical-align: -1px;\n}\n.metric-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #334155;\n}\n\n.ia-course-foot[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.ia-course-foot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  vertical-align: -1px;\n}\n\n.ia-star-on[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 13px;\n}\n\n.ia-star-off[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 13px;\n}\n\n.recommendation-box[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.recommendation-box.open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n\n.reco-inner[_ngcontent-%COMP%] {\n  padding: 12px 14px 16px;\n  border-top: 3px solid #d8e4f5;\n  background: linear-gradient(160deg, rgba(248, 251, 255, 0.9) 0%, rgba(252, 254, 255, 0.88) 100%);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n}\n.reco-inner[_ngcontent-%COMP%]   .reco-title[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  margin-bottom: 7px;\n}\n.reco-inner[_ngcontent-%COMP%]   .reco-text[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  line-height: 1.78;\n}\n.reco-inner[_ngcontent-%COMP%]   .reco-text[_ngcontent-%COMP%]     strong {\n  color: #1e293b;\n  font-weight: 600;\n}\n.reco-inner[_ngcontent-%COMP%]   .reco-text[_ngcontent-%COMP%]     ul, \n.reco-inner[_ngcontent-%COMP%]   .reco-text[_ngcontent-%COMP%]     ol {\n  padding-left: 18px;\n  margin: 6px 0 0;\n}\n.reco-inner[_ngcontent-%COMP%]   .reco-text[_ngcontent-%COMP%]     li {\n  margin-bottom: 4px;\n}\n\n@keyframes _ngcontent-%COMP%_iaRiseIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 767.98px) {\n  .ia-hero[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .ia-input-wrap[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n   .ia-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .ia-hero-filters[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .ia-hero-filters[_ngcontent-%COMP%]   .ia-input-wrap[_ngcontent-%COMP%], \n   .ia-hero-filters[_ngcontent-%COMP%]   .ia-select[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .analytics-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .analytics-kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLWFuYWx5dGljcy9pbnN0cnVjdG9yLWFuYWx5dGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhFQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2RUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFISjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsNkRBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFKRjtBQU1FO0VBQ0UscURBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUFKSjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FBTko7QUFRSTtFQUNFLHFCQUFBO0VBQ0EsOENBQUE7QUFOTjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtBQVJGOztBQVdBO0VBQ0UsNkRBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFDQSw2RUFBQTtFQUNBLGtDQUFBO0FBUkY7QUFVRTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtBQVJKO0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFUSjtBQVdJO0VBQ0UsZUFBQTtBQVROO0FBYUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFYSjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFnQkE7RUFDRSxxREFBQTtFQUNBLHFCQUFBO0FBYkY7QUFlRTtFQUFJLGNBQUE7QUFaTjs7QUFlQTtFQUNFLHFEQUFBO0VBQ0EscUJBQUE7QUFaRjtBQWNFO0VBQUksY0FBQTtBQVhOOztBQWNBO0VBQ0UscURBQUE7RUFDQSxxQkFBQTtBQVhGO0FBYUU7RUFBSSxjQUFBO0FBVk47O0FBYUE7RUFDRSxxREFBQTtFQUNBLHFCQUFBO0FBVkY7QUFZRTtFQUFJLGNBQUE7QUFUTjs7QUFZQTtFQUNFLGNBQUE7QUFURjtBQVdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBYUE7RUFDRSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZGO0FBWUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVZKOztBQWNBO0VBQ0UsY0FBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLDhDQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7QUFYRjtBQWFFO0VBQ0UsMkJBQUE7RUFDQSw4Q0FBQTtBQVhKO0FBY0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUNBLGdDQUFBO0FBWko7QUFjSTtFQUNFLGNBQUE7QUFaTjtBQWdCRTtFQUNFLGtCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBZkY7QUFpQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFmSjtBQWlCSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBZk47QUFtQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFqQko7O0FBcUJBO0VBQ0UsY0FBQTtBQWxCRjtBQW9CRTtFQUNFLGNBQUE7QUFsQko7O0FBc0JBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBbkJGOztBQXNCQTtFQUNFLHlGQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBbkJGO0FBcUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEZBQUE7QUFuQko7QUFzQkU7RUFDRSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFwQko7QUF1QkU7RUFDRSxnQ0FBQTtFQUNBLG9GQUFBO0FBckJKO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBdEJKO0FBeUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBdkJKO0FBMEJFO0VBQ0UsNkZBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXhCSjtBQTJCRTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBekJKO0FBNEJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBMUJKOztBQThCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQTNCRjtBQTZCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0JKOztBQStCQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQTVCRjs7QUErQkE7RUFDRSxXQUFBO0FBNUJGOztBQStCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTVCRjs7QUErQkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQTVCRjs7QUErQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTVCRjtBQThCRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUE1Qko7QUErQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUE3Qko7O0FBaUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUE5QkY7QUFnQ0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBOUJKOztBQWtDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWtDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWtDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FBL0JGO0FBaUNFO0VBQ0UsaUJBQUE7QUEvQko7O0FBbUNBO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdHQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBQWhDRjtBQWtDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFtQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWpDSjtBQW1DSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWpDTjtBQW9DSTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7QUFsQ047QUFxQ0k7RUFDRSxrQkFBQTtBQW5DTjs7QUF3Q0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQXJDRjtFQXVDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXJDRjtBQUNGO0FBd0NBO0VBQ0U7SUFDRSxhQUFBO0VBdENGO0VBeUNBOztJQUVFLFdBQUE7RUF2Q0Y7RUEwQ0E7SUFDRSxXQUFBO0VBeENGO0VBMENFOztJQUVFLGNBQUE7RUF4Q0o7RUE0Q0E7SUFDRSxhQUFBO0VBMUNGO0VBNENFO0lBQ0UsZUFBQTtFQTFDSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaWEtc2hlbGwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmlsdGVyOiBibHVyKDM2cHgpO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgcmlnaHQ6IC03MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg5OSwgMTAyLCAyNDEsIC4xMiksIHRyYW5zcGFyZW50IDcwJSk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYm90dG9tOiA0JTtcclxuICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNiwgMTg1LCAxMjksIC4xMCksIHRyYW5zcGFyZW50IDcyJSk7XHJcbiAgfVxyXG5cclxuICA+ICoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5pYS1oZXJvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlY2Y2O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsICNmZmZmZmYgMCUsICNmN2Y5ZmYgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAuMDYpO1xyXG59XHJcblxyXG4uaWEtaGVyby10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjEycmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzYzNjZmMSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbi5pYS1oZXJvLXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5pYS1oZXJvLWZpbHRlcnMge1xyXG4gIHJvdy1nYXA6IC41cmVtO1xyXG59XHJcblxyXG4uaWEtaW5wdXQtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgbWluLWhlaWdodDogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNlNmYzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZSwgYm94LXNoYWRvdyAuMnMgZWFzZTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjYTViNGZjO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4xMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaWEtc2VsZWN0IHtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgbWluLWhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U2ZjM7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmlhLWxvYWRpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uYW5hbHl0aWNzLWtwaS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZmJmZGZmIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZWNmNztcclxuICBwYWRkaW5nOiAxNHB4IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoMTUsIDIzLCA0MiwgLjA1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UsIGJveC1zaGFkb3cgLjJzIGVhc2UsIGJvcmRlci1jb2xvciAuMnMgZWFzZTtcclxuICBhbmltYXRpb246IGlhUmlzZUluIC40cyBlYXNlIGJvdGg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2ZkY2YxO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAuMDgpO1xyXG4gIH1cclxuXHJcbiAgLmtwaS1pY29uIHtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua3BpLXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gIH1cclxuXHJcbiAgLmtwaS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEta3BpLWljb24tLWNvdXJzZXMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkYmVhZmUsICNiZmRiZmUpO1xyXG4gIGJvcmRlci1jb2xvcjogI2M3ZGJmYjtcclxuXHJcbiAgaSB7IGNvbG9yOiAjMWQ0ZWQ4OyB9XHJcbn1cclxuXHJcbi5pYS1rcGktaWNvbi0tYXR0ZW50aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGNmY2U3LCAjYmJmN2QwKTtcclxuICBib3JkZXItY29sb3I6ICNiN2VkY2I7XHJcblxyXG4gIGkgeyBjb2xvcjogIzE1ODAzZDsgfVxyXG59XHJcblxyXG4uaWEta3BpLWljb24tLXJhdGluZyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZlZjljMywgI2ZkZTY4YSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjlkZjdjO1xyXG5cclxuICBpIHsgY29sb3I6ICNhMTYyMDc7IH1cclxufVxyXG5cclxuLmlhLWtwaS1pY29uLS1zdHVkZW50cyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZTlmZSwgI2RkZDZmZSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDVjYmZkO1xyXG5cclxuICBpIHsgY29sb3I6ICM2ZDI4ZDk7IH1cclxufVxyXG5cclxuLmlhLWtwaS12YWx1ZS1yYXRpbmcge1xyXG4gIGNvbG9yOiAjYTE2MjA3O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEta3BpLXZhbHVlLXN0dWRlbnRzIHtcclxuICBjb2xvcjogIzZkMjhkOTtcclxufVxyXG5cclxuLmlhLWVtcHR5LWljb24ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VlZjJmZiwgI2RiZWFmZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJmNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgY29sb3I6ICM0ZjQ2ZTU7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEtZW1wdHktdGl0bGUge1xyXG4gIGNvbG9yOiAjMzM0MTU1O1xyXG59XHJcblxyXG4uaWEtZW1wdHktc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG59XHJcblxyXG4uaWEtZW1wdHktYnRuIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMThweCByZ2JhKDc5LCA3MCwgMjI5LCAuMik7XHJcbn1cclxuXHJcbi5hbmFseXRpY3MtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmVkZjc7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDE1LCAyMywgNDIsIC4wNSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UsIGJveC1zaGFkb3cgLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDIycHggcmdiYSgxNSwgMjMsIDQyLCAuMDgpO1xyXG4gIH1cclxuXHJcbiAgLmFuYWx5dGljcy1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhmYWZmLCAjZjZmOWZmKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllZWY3O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzYzNjZmMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbmFseXRpY3MtY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5uby1kYXRhLXBsYWNlaG9sZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzNHB4IDIwcHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWVmMmZmLCAjZTJlOGYwKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzk0YTNiODtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEtc2VjdGlvbi10aXRsZSB7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICM2MzY2ZjE7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEtc2VjdGlvbi1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogIzYzNjZmMTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jb3Vyc2UtYW5hbHl0aWNzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjg4KSwgcmdiYSgyNDgsIDI1MSwgMjU1LCAuNzgpKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyMTQsIDIyNSwgMjQyLCAuODUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgLjA2KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGVhc2UsIGJveC1zaGFkb3cgLjI1cyBlYXNlLCBib3JkZXItY29sb3IgLjI1cyBlYXNlO1xyXG4gIGFuaW1hdGlvbjogaWFSaXNlSW4gLjQ1cyBlYXNlIGJvdGg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjU1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA0NSUpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIC4xKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2NiZDllZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2MzY2ZjEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LCAxMDIsIDI0MSwgLjEyKSwgMCAxMHB4IDIwcHggcmdiYSg5OSwgMTAyLCAyNDEsIC4wOCk7XHJcbiAgfVxyXG5cclxuICAuY291cnNlLWNhcmQtdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTRweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5jb3Vyc2UtdGh1bWIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZWRmODtcclxuICB9XHJcblxyXG4gIC5jb3Vyc2UtdGh1bWItcGxhY2Vob2xkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIC4xKSAwJSwgcmdiYSgxMzksIDkyLCAyNDYsIC4xKSAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiAjNjM2NmYxO1xyXG4gIH1cclxuXHJcbiAgLmNvdXJzZS1jYXJkLWluZm8ge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICB9XHJcblxyXG4gIC5jb3Vyc2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEtcmVjby1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAxMC41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDFlbTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuLmVuZ2FnZW1lbnQtcmluZy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIC5yaW5nLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY291cnNlLW1ldHJpY3Mtcm93IHtcclxuICBwYWRkaW5nOiAycHggMTRweCA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4ubWV0cmljLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWV0cmljLWJhciB7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICBiYWNrZ3JvdW5kOiAjZWRmMmY3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubWV0cmljLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC43cyBlYXNlO1xyXG59XHJcblxyXG4ubWV0cmljLWxhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM2YjcyODA7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzMzNDE1NTtcclxuICB9XHJcbn1cclxuXHJcbi5pYS1jb3Vyc2UtZm9vdCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogLjkycmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC0xcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWEtc3Rhci1vbiB7XHJcbiAgY29sb3I6ICNmYmJmMjQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uaWEtc3Rhci1vZmYge1xyXG4gIGNvbG9yOiAjY2JkNWUxO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnJlY29tbWVuZGF0aW9uLWJveCB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZWNvLWlubmVyIHtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHggMTZweDtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2Q4ZTRmNTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCByZ2JhKDI0OCwgMjUxLCAyNTUsIC45KSAwJSwgcmdiYSgyNTIsIDI1NCwgMjU1LCAuODgpIDEwMCUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcblxyXG4gIC5yZWNvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA3ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgfVxyXG5cclxuICAucmVjby10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ODtcclxuXHJcbiAgICA6Om5nLWRlZXAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICMxZTI5M2I7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIHVsLFxyXG4gICAgOjpuZy1kZWVwIG9sIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgICBtYXJnaW46IDZweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpYVJpc2VJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAuaWEtaGVybyB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmlhLWlucHV0LXdyYXAgLmZvcm0tY29udHJvbCxcclxuICAuaWEtc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmlhLWhlcm8tZmlsdGVycyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuaWEtaW5wdXQtd3JhcCxcclxuICAgIC5pYS1zZWxlY3Qge1xyXG4gICAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbmFseXRpY3Mta3BpLWNhcmQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgICAua3BpLXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return InstructorAnalyticsComponent;
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
//# sourceMappingURL=9562.js.map