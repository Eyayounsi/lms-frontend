"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8212],{

/***/ 48212:
/*!********************************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-detection/instructor-detection.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorDetectionComponent: () => (/* binding */ InstructorDetectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_detection_detection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/detection/detection.service */ 28768);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);







function InstructorDetectionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement des cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function InstructorDetectionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Vous n'avez aucun cours pour le moment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function InstructorDetectionComponent_div_11_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstructorDetectionComponent_div_11_button_4_Template_button_click_0_listener() {
      const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectCourse(c_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.selectedCourseId === c_r2.id ? "btn-primary" : "btn-outline-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r2.title, " ");
  }
}
function InstructorDetectionComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "S\u00E9lectionner un cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, InstructorDetectionComponent_div_11_button_4_Template, 2, 2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.myCourses);
  }
}
function InstructorDetectionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "S\u00E9lectionnez un cours pour voir les d\u00E9tections.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function InstructorDetectionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function InstructorDetectionComponent_ng_container_14_div_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.avgAttentionScore, "%");
  }
}
function InstructorDetectionComponent_ng_container_14_div_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function InstructorDetectionComponent_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Total remarques");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 28)(8, "div", 29)(9, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u00C9tudiants concern\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 28)(14, "div", 32)(15, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, InstructorDetectionComponent_ng_container_14_div_1_ng_container_16_Template, 2, 1, "ng-container", 10)(17, InstructorDetectionComponent_ng_container_14_div_1_ng_container_17_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Attention moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 28)(21, "div", 33)(22, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Yeux ferm\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 28)(27, "div", 35)(28, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Regard ailleurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 28)(33, "div", 32)(34, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Moments positifs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.remarks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.uniqueStudents.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.attentionScoreColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.avgAttentionScore != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.avgAttentionScore == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.countByType("EYES_CLOSED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.countByType("LOOKING_AWAY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.positiveCount);
  }
}
function InstructorDetectionComponent_ng_container_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Probl\u00E8me le plus fr\u00E9quent dans ce cours : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.mostCommonIssue.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", ctx_r2.mostCommonIssue.count, " occurrence", ctx_r2.mostCommonIssue.count > 1 ? "s" : "", "). Pensez \u00E0 renforcer l'interactivit\u00E9 \u00E0 ces moments. ");
  }
}
function InstructorDetectionComponent_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function InstructorDetectionComponent_ng_container_14_div_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.searchTerm, $event) || (ctx_r2.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function InstructorDetectionComponent_ng_container_14_div_3_Template_input_input_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.filterRemarks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.searchTerm);
  }
}
function InstructorDetectionComponent_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Aucune d\u00E9tection d'inattention pour ce cours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function InstructorDetectionComponent_ng_container_14_div_5_tr_17_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.getScoreColor(r_r5.attentionScore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r5.attentionScore, "% ");
  }
}
function InstructorDetectionComponent_ng_container_14_div_5_tr_17_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function InstructorDetectionComponent_ng_container_14_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, InstructorDetectionComponent_ng_container_14_div_5_tr_17_span_12_Template, 2, 3, "span", 53)(13, InstructorDetectionComponent_ng_container_14_div_5_tr_17_span_13_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r5.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 7, r_r5.detectedAt, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.getTypeBadgeClass(r_r5.remarkType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getTypeLabel(r_r5.remarkType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r5.remarkMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", r_r5.attentionScore != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", r_r5.attentionScore == null);
  }
}
function InstructorDetectionComponent_ng_container_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "table", 47)(4, "thead", 48)(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, InstructorDetectionComponent_ng_container_14_div_5_tr_17_Template, 14, 10, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.filteredRemarks);
  }
}
function InstructorDetectionComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InstructorDetectionComponent_ng_container_14_div_1_Template, 38, 9, "div", 23)(2, InstructorDetectionComponent_ng_container_14_div_2_Template, 7, 3, "div", 24)(3, InstructorDetectionComponent_ng_container_14_div_3_Template, 2, 1, "div", 25)(4, InstructorDetectionComponent_ng_container_14_div_4_Template, 4, 0, "div", 9)(5, InstructorDetectionComponent_ng_container_14_div_5_Template, 18, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.remarks.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.mostCommonIssue && ctx_r2.remarks.length > 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.remarks.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.remarks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.filteredRemarks.length > 0);
  }
}
let InstructorDetectionComponent = /*#__PURE__*/(() => {
  class InstructorDetectionComponent {
    detectionService;
    courseService;
    myCourses = [];
    selectedCourseId = null;
    selectedCourseTitle = '';
    remarks = [];
    filteredRemarks = [];
    loading = false;
    coursesLoading = true;
    searchTerm = '';
    constructor(detectionService, courseService) {
      this.detectionService = detectionService;
      this.courseService = courseService;
    }
    ngOnInit() {
      this.loadCourses();
    }
    loadCourses() {
      this.coursesLoading = true;
      this.courseService.getMyCourses().subscribe({
        next: data => {
          this.myCourses = data;
          this.coursesLoading = false;
        },
        error: () => {
          this.coursesLoading = false;
        }
      });
    }
    selectCourse(course) {
      this.selectedCourseId = course.id;
      this.selectedCourseTitle = course.title;
      this.loading = true;
      this.detectionService.getInstructorRemarksByCourse(course.id).subscribe({
        next: data => {
          this.remarks = data;
          this.filteredRemarks = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    filterRemarks() {
      const term = this.searchTerm.toLowerCase().trim();
      if (!term) {
        this.filteredRemarks = this.remarks;
        return;
      }
      this.filteredRemarks = this.remarks.filter(r => r.studentName.toLowerCase().includes(term) || r.remarkType.toLowerCase().includes(term) || r.remarkMessage.toLowerCase().includes(term));
    }
    getTypeBadgeClass(type) {
      switch (type) {
        case 'EYES_CLOSED':
          return 'bg-warning text-dark';
        case 'YAWNING':
          return 'bg-purple';
        case 'LOOKING_AWAY':
          return 'bg-danger';
        case 'ABSENT':
          return 'bg-secondary';
        case 'SMILING':
          return 'bg-success';
        case 'CONCENTRATED':
          return 'bg-primary';
        case 'SAD':
          return 'bg-indigo';
        case 'ANGRY':
          return 'bg-danger';
        case 'TIRED':
          return 'bg-purple';
        default:
          return 'bg-info';
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
    // Get unique students from current results
    get uniqueStudents() {
      const map = new Map();
      this.remarks.forEach(r => {
        map.set(r.studentName, (map.get(r.studentName) || 0) + 1);
      });
      return Array.from(map.entries()).map(([name, count]) => ({
        name,
        count
      })).sort((a, b) => b.count - a.count);
    }
    countByType(type) {
      return this.remarks.filter(r => r.remarkType === type).length;
    }
    // ═══ Computed Stats ═══
    get avgAttentionScore() {
      const scores = this.remarks.filter(r => r.attentionScore != null).map(r => r.attentionScore);
      if (!scores.length) return null;
      return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }
    get mostCommonIssue() {
      const issues = ['EYES_CLOSED', 'LOOKING_AWAY', 'YAWNING', 'ABSENT', 'TIRED', 'SAD', 'ANGRY'];
      let max = 0;
      let dominant = null;
      for (const t of issues) {
        const c = this.countByType(t);
        if (c > max) {
          max = c;
          dominant = t;
        }
      }
      if (!dominant) return null;
      return {
        type: dominant,
        label: this.getTypeLabel(dominant),
        count: max
      };
    }
    get positiveCount() {
      return this.countByType('SMILING') + this.countByType('CONCENTRATED');
    }
    get attentionScoreColor() {
      const s = this.avgAttentionScore;
      if (s == null) return '#6b7280';
      if (s >= 75) return '#22c55e';
      if (s >= 50) return '#f59e0b';
      return '#ef4444';
    }
    static ɵfac = function InstructorDetectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorDetectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_detection_detection_service__WEBPACK_IMPORTED_MODULE_4__.DetectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: InstructorDetectionComponent,
      selectors: [["app-instructor-detection"]],
      decls: 15,
      vars: 6,
      consts: [[1, "content"], [1, "container-fluid"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-1"], [1, "isax", "isax-eye", "me-2", "text-primary"], [1, "text-muted", "mb-0"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "ms-2", "text-muted"], [1, "alert", "alert-info"], [1, "mb-4"], [1, "form-label", "fw-semibold"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "text-center", "py-5", "text-muted"], [1, "isax", "isax-video-play", "fs-48", "d-block", "mb-2"], [1, "spinner-border", "text-primary"], ["class", "row mb-4", 4, "ngIf"], ["class", "alert alert-warning d-flex align-items-center gap-2 py-2 px-3 mb-3", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["class", "card border-0 shadow-sm", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-md-2", "col-sm-4", "mb-2"], [1, "card", "border-0", "bg-light", "text-center", "p-3"], [1, "fw-bold", "mb-0"], [1, "text-muted"], [1, "card", "border-0", "text-center", "p-3", 2, "background", "#f0fdf4"], [1, "card", "border-0", "text-center", "p-3", 2, "background", "#fefce8"], [1, "fw-bold", "mb-0", "text-warning"], [1, "card", "border-0", "text-center", "p-3", 2, "background", "#fef2f2"], [1, "fw-bold", "mb-0", "text-danger"], [1, "fw-bold", "mb-0", "text-success"], [1, "alert", "alert-warning", "d-flex", "align-items-center", "gap-2", "py-2", "px-3", "mb-3"], [1, "isax", "isax-info-circle"], [1, "small"], [1, "mb-3"], ["type", "text", "placeholder", "Rechercher par nom d'\u00E9tudiant ou type...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "isax", "isax-tick-circle", "fs-48", "d-block", "mb-2", "text-success"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "fw-medium", "small"], [1, "small", "text-nowrap"], [1, "badge", "rounded-pill", 3, "ngClass"], ["class", "fw-bold", 3, "color", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "fw-bold"]],
      template: function InstructorDetectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Suivi d'attention \u2014 Mes cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "D\u00E9tections cam\u00E9ra des \u00E9tudiants inscrits \u00E0 vos cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, InstructorDetectionComponent_div_9_Template, 4, 0, "div", 6)(10, InstructorDetectionComponent_div_10_Template, 2, 0, "div", 7)(11, InstructorDetectionComponent_div_11_Template, 5, 1, "div", 8)(12, InstructorDetectionComponent_div_12_Template, 4, 0, "div", 9)(13, InstructorDetectionComponent_div_13_Template, 2, 0, "div", 6)(14, InstructorDetectionComponent_ng_container_14_Template, 6, 5, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coursesLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.coursesLoading && ctx.myCourses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.coursesLoading && ctx.myCourses.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedCourseId && !ctx.coursesLoading && ctx.myCourses.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedCourseId && !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: [".bg-purple[_ngcontent-%COMP%] {\n  background-color: #8b5cf6 !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLWRldGVjdGlvbi9pbnN0cnVjdG9yLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXB1cnBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWNmNiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return InstructorDetectionComponent;
})();

/***/ })

}]);
//# sourceMappingURL=8212.js.map