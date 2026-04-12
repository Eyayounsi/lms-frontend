"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5982],{

/***/ 15982:
/*!*****************************************************************************!*\
  !*** ./src/app/features/admin/admin-detection/admin-detection.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDetectionComponent: () => (/* binding */ AdminDetectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_detection_detection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/detection/detection.service */ 28768);






function AdminDetectionComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Surveill\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 32)(8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Score moy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 32)(14, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Critiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.totalMonitored);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.avgScore ?? "\u2014", "", ctx_r0.avgScore !== null ? "%" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.criticalStudents);
  }
}
function AdminDetectionComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement des donn\u00E9es\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AdminDetectionComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AdminDetectionComponent_div_33_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AdminDetectionComponent_div_33_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.filterSummaries());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.searchTerm);
  }
}
function AdminDetectionComponent_div_34_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminDetectionComponent_div_34_div_15_tr_13_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r0.getScoreColor(r_r4.attentionScore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r4.attentionScore, "%");
  }
}
function AdminDetectionComponent_div_34_div_15_tr_13_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminDetectionComponent_div_34_div_15_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td")(5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AdminDetectionComponent_div_34_div_15_tr_13_span_10_Template, 2, 3, "span", 70)(11, AdminDetectionComponent_div_34_div_15_tr_13_span_11_Template, 2, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 6, r_r4.detectedAt, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.getTypeBadgeClass(r_r4.remarkType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getTypeLabel(r_r4.remarkType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r4.remarkMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", r_r4.attentionScore != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", r_r4.attentionScore == null);
  }
}
function AdminDetectionComponent_div_34_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "table", 59)(2, "thead", 60)(3, "tr")(4, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AdminDetectionComponent_div_34_div_15_tr_13_Template, 12, 9, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.selectedRemarks);
  }
}
function AdminDetectionComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminDetectionComponent_div_34_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.closeDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminDetectionComponent_div_34_div_14_Template, 2, 0, "div", 54)(15, AdminDetectionComponent_div_34_div_15_Template, 14, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedStudentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedCourseTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.detailLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.detailLoading);
  }
}
function AdminDetectionComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Aucune donn\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Aucune donn\u00E9e de d\u00E9tection cam\u00E9ra disponible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AdminDetectionComponent_div_36_tr_27_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r0.getScoreColor(s_r6.avgAttentionScore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", s_r6.avgAttentionScore, "%");
  }
}
function AdminDetectionComponent_div_36_tr_27_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AdminDetectionComponent_div_36_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 89)(1, "td", 90)(2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td")(21, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td")(24, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td")(27, "div", 46)(28, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AdminDetectionComponent_div_36_tr_27_span_30_Template, 2, 3, "span", 102)(31, AdminDetectionComponent_div_36_tr_27_span_31_Template, 2, 0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td", 105)(36, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminDetectionComponent_div_36_tr_27_Template_button_click_36_listener() {
      const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.viewDetail(s_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.studentEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.courseTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.totalRemarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.typeCounts["EYES_CLOSED"] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.typeCounts["YAWNING"] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.typeCounts["LOOKING_AWAY"] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r6.typeCounts["ABSENT"] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((s_r6.typeCounts["SMILING"] || 0) + (s_r6.typeCounts["CONCENTRATED"] || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", (s_r6.avgAttentionScore ?? 0) + "%")("background", ctx_r0.getScoreColor(s_r6.avgAttentionScore ?? 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", s_r6.avgAttentionScore != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", s_r6.avgAttentionScore == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](34, 16, s_r6.lastDetectedAt, "dd/MM/yy HH:mm"));
  }
}
function AdminDetectionComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 79)(1, "div", 58)(2, "table", 80)(3, "thead", 81)(4, "tr")(5, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\uD83D\uDE48 Ferm\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\uD83D\uDE34 B\u00E2ill.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\uD83D\uDC40 Regard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\uD83D\uDEAB Absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u2705 Positif");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Score moy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Derni\u00E8re d\u00E9tecc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "th", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AdminDetectionComponent_div_36_tr_27_Template, 38, 19, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.filteredSummaries);
  }
}
let AdminDetectionComponent = /*#__PURE__*/(() => {
  class AdminDetectionComponent {
    detectionService;
    summaries = [];
    filteredSummaries = [];
    selectedRemarks = [];
    loading = true;
    detailLoading = false;
    searchTerm = '';
    selectedStudentName = '';
    selectedCourseTitle = '';
    constructor(detectionService) {
      this.detectionService = detectionService;
    }
    ngOnInit() {
      this.loadSummary();
    }
    loadSummary() {
      this.loading = true;
      this.detectionService.getAdminSummary().subscribe({
        next: data => {
          this.summaries = data;
          this.filteredSummaries = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    filterSummaries() {
      const term = this.searchTerm.toLowerCase().trim();
      if (!term) {
        this.filteredSummaries = this.summaries;
        return;
      }
      this.filteredSummaries = this.summaries.filter(s => s.studentName.toLowerCase().includes(term) || s.studentEmail.toLowerCase().includes(term) || s.courseTitle.toLowerCase().includes(term));
    }
    viewDetail(summary) {
      this.detailLoading = true;
      this.selectedStudentName = summary.studentName;
      this.selectedCourseTitle = summary.courseTitle;
      this.detectionService.getRemarksByStudentAndCourse(summary.studentId, summary.courseId).subscribe({
        next: data => {
          this.selectedRemarks = data;
          this.detailLoading = false;
        },
        error: () => {
          this.detailLoading = false;
        }
      });
    }
    closeDetail() {
      this.selectedRemarks = [];
      this.selectedStudentName = '';
      this.selectedCourseTitle = '';
    }
    getTypeBadgeClass(type) {
      switch (type) {
        case 'EYES_CLOSED':
          return 'det-badge-warn';
        case 'YAWNING':
          return 'det-badge-purple';
        case 'LOOKING_AWAY':
          return 'det-badge-red';
        case 'ABSENT':
          return 'det-badge-gray';
        case 'SMILING':
          return 'det-badge-green';
        case 'CONCENTRATED':
          return 'det-badge-ok';
        case 'SAD':
          return 'det-badge-purple';
        case 'ANGRY':
          return 'det-badge-red';
        case 'TIRED':
          return 'det-badge-warn';
        default:
          return 'det-badge-gray';
      }
    }
    getTypeLabel(type) {
      switch (type) {
        case 'EYES_CLOSED':
          return 'Yeux fermés';
        case 'YAWNING':
          return 'Bâillement';
        case 'LOOKING_AWAY':
          return 'Regard ailleurs';
        case 'ABSENT':
          return 'Absent';
        case 'SMILING':
          return 'Sourire';
        case 'CONCENTRATED':
          return 'Concentration';
        case 'SAD':
          return 'Tristesse';
        case 'ANGRY':
          return 'Frustration';
        case 'TIRED':
          return 'Fatigue';
        default:
          return type;
      }
    }
    getScoreColor(score) {
      if (score == null) return '#6b7280';
      if (score >= 75) return '#22c55e';
      if (score >= 50) return '#f59e0b';
      return '#ef4444';
    }
    get totalMonitored() {
      return this.summaries.length;
    }
    get avgScore() {
      const withScore = this.summaries.filter(s => s.avgAttentionScore != null);
      if (!withScore.length) return null;
      const sum = withScore.reduce((acc, s) => acc + s.avgAttentionScore, 0);
      return Math.round(sum / withScore.length);
    }
    get criticalStudents() {
      return this.summaries.filter(s => s.avgAttentionScore != null && s.avgAttentionScore < 50).length;
    }
    static ɵfac = function AdminDetectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminDetectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_detection_detection_service__WEBPACK_IMPORTED_MODULE_4__.DetectionService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminDetectionComponent,
      selectors: [["app-admin-detection"]],
      decls: 37,
      vars: 6,
      consts: [[1, "page-content"], [1, "det-hero", "mb-4"], [1, "det-glow", "det-glow-1"], [1, "det-glow", "det-glow-2"], [1, "det-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "det-av-wrap"], [1, "det-av-ring"], [1, "det-av-border"], [1, "det-av-circle"], [1, "ti", "ti-eye", 2, "font-size", "26px", "color", "#fff"], [1, "det-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "det-chip"], [1, "ti", "ti-cpu", "me-1", 2, "font-size", "9px"], [1, "det-live"], [1, "det-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], ["class", "det-glass d-none d-md-flex align-items-center", 4, "ngIf"], [1, "det-refresh", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-refresh", 2, "font-size", "14px"], ["class", "text-center py-5", 4, "ngIf"], ["class", "ac-card mb-4 p-3", 4, "ngIf"], ["class", "ac-card mb-4", 4, "ngIf"], ["class", "ac-empty", 4, "ngIf"], ["class", "ac-card", 4, "ngIf"], [1, "det-glass", "d-none", "d-md-flex", "align-items-center"], [1, "det-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.55)", "font-size", "10px"], [1, "det-stat-div"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", 2, "color", "#7c3aed"], [1, "mt-2", "text-muted"], [1, "ac-card", "mb-4", "p-3"], [1, "input-group"], [1, "input-group-text", "bg-transparent", "border-end-0", 2, "border-color", "#e2e8f0"], [1, "ti", "ti-search", "text-muted"], ["type", "text", "placeholder", "Rechercher par nom d'\u00E9tudiant, email ou cours\u2026", 1, "form-control", "border-start-0", "ps-0", 2, "border-color", "#e2e8f0", 3, "ngModelChange", "input", "ngModel"], [1, "ac-card", "mb-4"], [1, "det-detail-header"], [1, "d-flex", "align-items-center", "gap-2"], [1, "det-detail-icon"], [1, "ti", "ti-user"], [1, "fw-bold", 2, "color", "#0f172a"], [1, "text-muted", "small"], [1, "det-btn-close", 3, "click"], [1, "ti", "ti-x"], [1, "p-0"], ["class", "text-center py-3", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", 2, "color", "#7c3aed"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover", "align-middle", "mb-0"], [2, "background", "linear-gradient(135deg,#f5f3ff,#ede9fe)", "border-bottom", "1px solid rgba(124,58,237,.15)"], [1, "ps-4", "py-3", "text-muted", "small", "fw-semibold", 2, "width", "160px"], [1, "py-3", "text-muted", "small", "fw-semibold", 2, "width", "130px"], [1, "py-3", "text-muted", "small", "fw-semibold"], [1, "py-3", "text-muted", "small", "fw-semibold", "pe-4", 2, "width", "90px"], [4, "ngFor", "ngForOf"], [1, "ps-4", "small", "text-nowrap", "text-muted"], [1, "det-badge", 3, "ngClass"], [1, "small"], [1, "pe-4"], ["class", "fw-bold", 3, "color", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "fw-bold"], [1, "text-muted"], [1, "ac-empty"], [1, "ac-empty-icon"], [1, "ti", "ti-eye-off"], [1, "fw-semibold", "text-secondary", "mb-1"], [1, "text-muted", "small", "mb-0"], [1, "ac-card"], [1, "table", "table-hover", "mb-0"], [2, "background", "linear-gradient(135deg,#f5f3ff,#ede9fe)", "border-bottom", "2px solid rgba(124,58,237,.15)"], [1, "ps-4", "py-3", "text-muted", "small", "fw-semibold"], [1, "py-3", "text-muted", "small", "fw-semibold", 2, "width", "70px"], [1, "py-3", "text-muted", "small", "fw-semibold", 2, "width", "85px"], [1, "py-3", "text-muted", "small", "fw-semibold", 2, "width", "110px"], [1, "py-3", "text-muted", "small", "fw-semibold", 2, "width", "140px"], [1, "py-3", "text-muted", "small", "fw-semibold", "text-end", "pe-4", 2, "width", "80px"], ["class", "det-row", 4, "ngFor", "ngForOf"], [1, "det-row"], [1, "ps-4"], [1, "fw-semibold", "small", 2, "color", "#0f172a"], [1, "text-muted", 2, "font-size", "11px"], [1, "small", "text-muted"], [1, "det-badge", "det-badge-dark"], [1, "det-badge", "det-badge-warn"], [1, "det-badge", "det-badge-purple"], [1, "det-badge", "det-badge-red"], [1, "det-badge", "det-badge-gray"], [1, "det-badge", "det-badge-green"], [1, "det-score-bar-track", "flex-grow-1"], [1, "det-score-bar-fill"], ["class", "fw-bold small", "style", "min-width:36px", 3, "color", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "small", "text-nowrap", "text-muted"], [1, "text-end", "pe-4"], ["title", "Voir d\u00E9tails", 1, "det-btn-detail", 3, "click"], [1, "ti", "ti-eye"], [1, "fw-bold", "small", 2, "min-width", "36px"]],
      template: function AdminDetectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "div", 14)(16, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Computer Vision");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "IA ACTIVE");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Suivi d'Attention \u2014 Cam\u00E9ra");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Remarques de d\u00E9tection cam\u00E9ra par \u00E9tudiant et par cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 21)(27, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AdminDetectionComponent_div_28_Template, 18, 4, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminDetectionComponent_Template_button_click_29_listener() {
            return ctx.loadSummary();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AdminDetectionComponent_div_32_Template, 4, 0, "div", 26)(33, AdminDetectionComponent_div_33_Template, 5, 1, "div", 27)(34, AdminDetectionComponent_div_34_Template, 16, 4, "div", 28)(35, AdminDetectionComponent_div_35_Template, 7, 0, "div", 29)(36, AdminDetectionComponent_div_36_Template, 28, 1, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedRemarks.length > 0 || ctx.detailLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredSummaries.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredSummaries.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n.det-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 45%, #8b5cf6 80%, #a78bfa 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_det-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12);\n}\n.det-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.det-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.det-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.det-glow-1[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background: radial-gradient(circle, rgba(221, 214, 254, 0.22) 0%, transparent 70%);\n  top: -130px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_det-float 7s ease-in-out infinite;\n}\n\n.det-glow-2[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(237, 233, 254, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_det-float 9s ease-in-out infinite reverse;\n}\n\n.det-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.det-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(221, 214, 254, 0.5);\n  animation: _ngcontent-%COMP%_det-rotate 12s linear infinite;\n}\n\n.det-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #ddd6fe, #a78bfa, #7c3aed, #2e1065);\n}\n\n.det-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #4c1d95, #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.det-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(221, 214, 254, 0.3);\n  animation: _ngcontent-%COMP%_det-pulse 2.5s ease-out infinite;\n}\n\n.det-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 16px;\n  padding: 10px 4px;\n}\n\n.det-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 72px;\n}\n\n.det-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.det-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.det-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_det-blink 1.2s ease-in-out infinite;\n}\n\n.det-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n.det-refresh[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n}\n.det-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);\n}\n\n\n\n.det-detail-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: linear-gradient(135deg, #f5f3ff, #ede9fe);\n  border-bottom: 1px solid rgba(124, 58, 237, 0.14);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.det-detail-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n\n.det-btn-close[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.det-btn-close[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n\n\n\n.det-score-bar-track[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  overflow: hidden;\n}\n\n.det-score-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.6s ease;\n}\n\n\n\n.det-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n  min-width: 28px;\n}\n\n.det-badge-dark[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.1);\n  color: #0f172a;\n}\n\n.det-badge-warn[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.12);\n  color: #a16207;\n}\n\n.det-badge-purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7c3aed;\n}\n\n.det-badge-red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n\n.det-badge-gray[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #475569;\n}\n\n.det-badge-green[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n}\n\n.det-badge-critical[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n\n.det-badge-warning[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.12);\n  color: #a16207;\n}\n\n.det-badge-ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #15803d;\n}\n\n.det-row[_ngcontent-%COMP%]:hover {\n  background: #faf5ff !important;\n}\n\n.det-btn-detail[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(124, 58, 237, 0.08);\n  border: 1.5px solid rgba(124, 58, 237, 0.3);\n  color: #7c3aed;\n  cursor: pointer;\n  transition: all 0.18s;\n  font-size: 14px;\n}\n.det-btn-detail[_ngcontent-%COMP%]:hover {\n  background: #7c3aed;\n  color: #fff;\n  border-color: #7c3aed;\n  transform: translateY(-2px);\n}\n\n@keyframes _ngcontent-%COMP%_det-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_det-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_det-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_det-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_det-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tZGV0ZWN0aW9uL2FkbWluLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs0REFBQTtBQUtBO0VBQ0UsdUZBQUE7RUFDQSxtQkFBQTtFQUFxQix1QkFBQTtFQUNyQixrQkFBQTtFQUFvQixnQkFBQTtFQUNwQixnQ0FBQTtFQUNBLHlGQUFBO0FBR0Y7QUFGRTtFQUFZLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsb0JBQUE7RUFBc0IsVUFBQTtFQUFZLHdGQUFBO0VBQXNGLDBCQUFBO0FBV2pMOztBQVRBO0VBQWlCLGtCQUFBO0VBQW9CLFVBQUE7QUFjckM7O0FBYkE7RUFBWSxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixvQkFBQTtBQW1CcEQ7O0FBbEJBO0VBQWMsWUFBQTtFQUFjLGFBQUE7RUFBZSxrRkFBQTtFQUFnRixXQUFBO0VBQWEsU0FBQTtFQUFXLDRDQUFBO0FBMkJuSjs7QUExQkE7RUFBYyxZQUFBO0VBQWMsYUFBQTtFQUFlLGtGQUFBO0VBQWdGLGFBQUE7RUFBZSxRQUFBO0VBQVUsb0RBQUE7QUFtQ3BKOztBQWpDQTtFQUFpQixrQkFBQTtFQUFvQixjQUFBO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0FBd0NsRTs7QUF2Q0E7RUFBaUIsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLDZDQUFBO0VBQTJDLHlDQUFBO0FBK0NqSDs7QUE5Q0E7RUFBaUIsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGtCQUFBO0VBQW9CLHVFQUFBO0FBcURuRTs7QUFwREE7RUFBaUIsa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGtCQUFBO0VBQW9CLHFEQUFBO0VBQXVELGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtBQThEaEs7O0FBN0RBO0VBQWlCLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxrQkFBQTtF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QUFBO0VBQWtDLDJDQUFBO0VBQXlDLGNBQUE7RUFDM0UsZUFBQTtFQUFpQixxQkFBQTtFQUFzQixlQUFBO0FBNE56QztBQTNORTtFQUFVLG1CQUFBO0VBQXFCLFdBQUE7RUFBYSxxQkFBQTtFQUF1QiwyQkFBQTtBQWlPckU7O0FBOU5BO0VBQXlCO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBb08xQztFQXBPeUU7SUFBSyxVQUFBO0lBQVksZUFBQTtFQXdPMUY7QUFDRjtBQXhPQTtFQUF5QjtJQUFVLHdCQUFBO0VBNE9qQztFQTVPNkQ7SUFBTSw0QkFBQTtFQStPbkU7QUFDRjtBQS9PQTtFQUF5QjtJQUFLLHlCQUFBO0VBbVA1QjtBQUNGO0FBblBBO0VBQXlCO0lBQUssbUJBQUE7SUFBcUIsWUFBQTtFQXdQakQ7RUF4UGdFO0lBQU8sc0JBQUE7SUFBd0IsVUFBQTtFQTRQL0Y7QUFDRjtBQTVQQTtFQUF5QjtJQUFVLFVBQUE7RUFnUWpDO0VBaFErQztJQUFNLFlBQUE7RUFtUXJEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbiAgIEFkbWluIERldGVjdGlvbiDDosKAwpQgRnVsbCBSZWRlc2lnblxuICAgUHJpbWFyeTogIzdjM2FlZCAoUHVycGxlKSAgRGFyazogIzRjMWQ5NVxuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbi5kZXQtaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1YjIxYjYgMCUsICM3YzNhZWQgNDUlLCAjOGI1Y2Y2IDgwJSwgI2E3OGJmYSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogMjhweCAyOHB4IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBkZXQtZmFkZS1pbiAuNXMgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgxMjQsNTgsMjM3LC4zNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMTIpO1xuICAmOjpiZWZvcmUgeyBjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IDA7IGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTsgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7IH1cbn1cbi5kZXQtaGVyby1ib2R5IHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxOyB9XG4uZGV0LWdsb3cgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDUwJTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5kZXQtZ2xvdy0xIHsgd2lkdGg6IDM4MHB4OyBoZWlnaHQ6IDM4MHB4OyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIyMSwyMTQsMjU0LC4yMikgMCUsIHRyYW5zcGFyZW50IDcwJSk7IHRvcDogLTEzMHB4OyByaWdodDogMiU7IGFuaW1hdGlvbjogZGV0LWZsb2F0IDdzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XG4uZGV0LWdsb3ctMiB7IHdpZHRoOiAyNDBweDsgaGVpZ2h0OiAyNDBweDsgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzcsMjMzLDI1NCwuMTUpIDAlLCB0cmFuc3BhcmVudCA3MCUpOyBib3R0b206IC03MHB4OyBsZWZ0OiA1JTsgYW5pbWF0aW9uOiBkZXQtZmxvYXQgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgcmV2ZXJzZTsgfVxuXG4uZGV0LWF2LXdyYXAgICB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleC1zaHJpbms6IDA7IHdpZHRoOiA2OHB4OyBoZWlnaHQ6IDY4cHg7IH1cbi5kZXQtYXYtcmluZyAgIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLThweDsgYm9yZGVyLXJhZGl1czogNTAlOyBib3JkZXI6IDEuNXB4IGRhc2hlZCByZ2JhKDIyMSwyMTQsMjU0LC41KTsgYW5pbWF0aW9uOiBkZXQtcm90YXRlIDEycyBsaW5lYXIgaW5maW5pdGU7IH1cbi5kZXQtYXYtYm9yZGVyIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGRkNmZlLCAjYTc4YmZhLCAjN2MzYWVkLCAjMmUxMDY1KTsgfVxuLmRldC1hdi1jaXJjbGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRjMWQ5NSwgIzdjM2FlZCk7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4uZGV0LWF2LXB1bHNlICB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IC0xMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyMjEsMjE0LDI1NCwuMyk7IGFuaW1hdGlvbjogZGV0LXB1bHNlIDIuNXMgZWFzZS1vdXQgaW5maW5pdGU7IH1cblxuLmRldC1nbGFzcyAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xOCk7IGJvcmRlci1yYWRpdXM6IDE2cHg7IHBhZGRpbmc6IDEwcHggNHB4OyB9XG4uZGV0LXN0YXQgICAgIHsgcGFkZGluZzogMCAxNHB4OyBtaW4td2lkdGg6IDcycHg7IH1cbi5kZXQtc3RhdC1kaXYgeyB3aWR0aDogMXB4OyBoZWlnaHQ6IDMycHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyB9XG5cbi5kZXQtbGl2ZSB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjg1KTsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC41cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4uZGV0LWxpdmUtZG90IHsgd2lkdGg6IDdweDsgaGVpZ2h0OiA3cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogIzRhZGU4MDsgYW5pbWF0aW9uOiBkZXQtYmxpbmsgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxuLmRldC1jaGlwIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC43cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDRweCAxMnB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4uZGV0LXJlZnJlc2ggeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNCk7IGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjgpOyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxMi41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDhweCAxOHB4OyBib3JkZXItcmFkaXVzOiAyNHB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAuMjJzOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMjYpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMjQsNTgsMjM3LC4zKTsgfSB9XG5cbi8qIERldGFpbCBwYW5lbCBoZWFkZXIgKi9cbi5kZXQtZGV0YWlsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ZjNmZiwgI2VkZTlmZSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyNCw1OCwyMzcsLjE0KTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRldC1kZXRhaWwtaWNvbiB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI0LDU4LDIzNywuMSk7IGNvbG9yOiAjN2MzYWVkO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4OyBmbGV4LXNocmluazogMDtcbn1cbi5kZXQtYnRuLWNsb3NlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDtcbiAgY29sb3I6ICM0NzU1Njk7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNlMmU4ZjA7IH1cbn1cblxuLyogU2NvcmUgYmFyICovXG4uZGV0LXNjb3JlLWJhci10cmFjayB7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGJhY2tncm91bmQ6ICNmMWY1Zjk7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5kZXQtc2NvcmUtYmFyLWZpbGwgIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiA2cHg7IHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlOyB9XG5cbi8qIEJhZGdlcyAqL1xuLmRldC1iYWRnZSB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiAycHggOHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyBtaW4td2lkdGg6IDI4cHg7IH1cbi5kZXQtYmFkZ2UtZGFyayAgIHsgYmFja2dyb3VuZDogcmdiYSgxNSwyMyw0MiwuMSk7ICBjb2xvcjogIzBmMTcyYTsgfVxuLmRldC1iYWRnZS13YXJuICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwxNzksOCwuMTIpOyBjb2xvcjogI2ExNjIwNzsgfVxuLmRldC1iYWRnZS1wdXJwbGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDEyNCw1OCwyMzcsLjEyKTsgY29sb3I6ICM3YzNhZWQ7IH1cbi5kZXQtYmFkZ2UtcmVkICAgIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjEyKTsgY29sb3I6ICNkYzI2MjY7IH1cbi5kZXQtYmFkZ2UtZ3JheSAgIHsgYmFja2dyb3VuZDogcmdiYSgxMDAsMTE2LDEzOSwuMSk7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZGV0LWJhZGdlLWdyZWVuICB7IGJhY2tncm91bmQ6IHJnYmEoMjIsMTYzLDc0LC4xMik7IGNvbG9yOiAjMTU4MDNkOyB9XG4uZGV0LWJhZGdlLWNyaXRpY2FsIHsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjEyKTsgY29sb3I6ICNkYzI2MjY7IH1cbi5kZXQtYmFkZ2Utd2FybmluZyAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwxNzksOCwuMTIpOyBjb2xvcjogI2ExNjIwNzsgfVxuLmRldC1iYWRnZS1vayAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjIsMTYzLDc0LC4xMik7IGNvbG9yOiAjMTU4MDNkOyB9XG5cbi5kZXQtcm93OmhvdmVyIHsgYmFja2dyb3VuZDogI2ZhZjVmZiAhaW1wb3J0YW50OyB9XG5cbi5kZXQtYnRuLWRldGFpbCB7XG4gIHdpZHRoOiAzNHB4OyBoZWlnaHQ6IDM0cHg7IGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyNCw1OCwyMzcsLjA4KTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDEyNCw1OCwyMzcsLjMpOyBjb2xvcjogIzdjM2FlZDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjE4czsgZm9udC1zaXplOiAxNHB4O1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogIzdjM2FlZDsgY29sb3I6ICNmZmY7IGJvcmRlci1jb2xvcjogIzdjM2FlZDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgZGV0LWZhZGUtaW4geyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyB9IH1cbkBrZXlmcmFtZXMgZGV0LWZsb2F0ICAgeyAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7IH0gfVxuQGtleWZyYW1lcyBkZXQtcm90YXRlICB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5Aa2V5ZnJhbWVzIGRldC1wdWxzZSAgIHsgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNjsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjU1KTsgb3BhY2l0eTogMDsgfSB9XG5Aa2V5ZnJhbWVzIGRldC1ibGluayAgIHsgMCUsMTAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogLjQ7IH0gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AdminDetectionComponent;
})();

/***/ })

}]);
//# sourceMappingURL=5982.js.map