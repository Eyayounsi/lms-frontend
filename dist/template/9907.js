"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9907],{

/***/ 49907:
/*!*********************************************************************!*\
  !*** ./src/app/features/courses/add-course/add-course.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCourseComponent: () => (/* binding */ AddCourseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipe/safe-url.pipe */ 27890);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 85422);











const _c0 = (a0, a1) => ({
  "progress-active": a0,
  "progress-activated": a1
});
const _c1 = a0 => ({
  "display": a0
});
function AddCourseComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_5_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.errorMsg = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMsg, " ");
  }
}
function AddCourseComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.successMsg = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.successMsg, " ");
  }
}
function AddCourseComponent_option_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", cat_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r4.name);
  }
}
function AddCourseComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "div", 198)(2, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_128_Template_input_ngModelChange_2_listener($event) {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.objectives[i_r6], $event) || (ctx_r1.objectives[i_r6] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_128_Template_a_click_3_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeObjective(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.objectives[i_r6]);
  }
}
function AddCourseComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "div", 198)(2, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_137_Template_input_ngModelChange_2_listener($event) {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.requirements[i_r8], $event) || (ctx_r1.requirements[i_r8] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_137_Template_a_click_3_listener() {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeRequirement(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.requirements[i_r8]);
  }
}
function AddCourseComponent_span_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 203);
  }
}
function AddCourseComponent_div_164_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_164_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_164_div_2_Template_div_click_0_listener() {
      const img_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectPreset(img_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddCourseComponent_div_164_div_2_div_2_Template, 2, 0, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", ctx_r1.selectedPresetImage === img_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", img_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "assets/img/course-img/" + img_r10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", img_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedPresetImage === img_r10);
  }
}
function AddCourseComponent_div_164_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Cliquez sur une image pour la s\u00E9lectionner comme couverture. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_164_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Image s\u00E9lectionn\u00E9e : ", ctx_r1.selectedPresetImage, " ");
  }
}
function AddCourseComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddCourseComponent_div_164_div_2_Template, 3, 6, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddCourseComponent_div_164_p_3_Template, 3, 0, "p", 206)(4, AddCourseComponent_div_164_p_4_Template, 3, 1, "p", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.presetImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.selectedPresetImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedPresetImage);
  }
}
function AddCourseComponent_ng_container_165_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.coverPreview, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AddCourseComponent_ng_container_165_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 218)(1, "div", 220)(2, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Aper\u00E7u de l'image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Aucune image s\u00E9lectionn\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function AddCourseComponent_ng_container_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Uploader votre image (JPEG, PNG, WebP \u2013 max 2 Mo)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AddCourseComponent_ng_container_165_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onCoverSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AddCourseComponent_ng_container_165_div_6_Template, 2, 1, "div", 217)(7, AddCourseComponent_ng_container_165_div_7_Template, 8, 0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.coverPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.coverPreview);
  }
}
function AddCourseComponent_span_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 203);
  }
}
function AddCourseComponent_div_191_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 234)(1, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_a_2_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const section_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.startEditSection(section_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const section_r14 = ctx_r14.$implicit;
    const si_r16 = ctx_r14.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-bs-target", "#sec" + si_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", "#f0f0f0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", section_r14.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (section_r14.lessons == null ? null : section_r14.lessons.length) || 0, " le\u00E7ons");
  }
}
function AddCourseComponent_div_191_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_191_div_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.editingSectionTitle, $event) || (ctx_r1.editingSectionTitle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function AddCourseComponent_div_191_div_3_Template_input_keyup_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const section_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.saveEditSection(section_r14));
    })("keyup.escape", function AddCourseComponent_div_191_div_3_Template_input_keyup_escape_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.cancelEditSection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const section_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.saveEditSection(section_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.cancelEditSection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.editingSectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.loading);
  }
}
function AddCourseComponent_div_191_div_6_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 267);
  }
}
function AddCourseComponent_div_191_div_6_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 268);
  }
}
function AddCourseComponent_div_191_div_6_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 269);
  }
}
function AddCourseComponent_div_191_div_6_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Gratuit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDuration(lesson_r19.durationSeconds), " ");
  }
}
function AddCourseComponent_div_191_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Vid\u00E9o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Quiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteContent(lesson_r19, "video"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteContent(lesson_r19, "pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteContent(lesson_r19, "article"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_191_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 245)(1, "div", 78)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddCourseComponent_div_191_div_6_i_3_Template, 1, 0, "i", 246)(4, AddCourseComponent_div_191_div_6_i_4_Template, 1, 0, "i", 247)(5, AddCourseComponent_div_191_div_6_i_5_Template, 1, 0, "i", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AddCourseComponent_div_191_div_6_span_8_Template, 2, 0, "span", 250)(9, AddCourseComponent_div_191_div_6_span_9_Template, 2, 1, "span", 251)(10, AddCourseComponent_div_191_div_6_span_10_Template, 3, 0, "span", 250)(11, AddCourseComponent_div_191_div_6_span_11_Template, 3, 0, "span", 252)(12, AddCourseComponent_div_191_div_6_span_12_Template, 3, 0, "span", 253)(13, AddCourseComponent_div_191_div_6_span_13_Template, 3, 0, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 255)(15, "button", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_Template_button_click_15_listener() {
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openPreview(lesson_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_Template_button_click_17_listener() {
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.triggerVideoUpload(lesson_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Vid\u00E9o");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AddCourseComponent_div_191_div_6_button_21_Template, 2, 0, "button", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_Template_button_click_22_listener() {
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.triggerPdfUpload(lesson_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, AddCourseComponent_div_191_div_6_button_26_Template, 2, 0, "button", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_Template_button_click_27_listener() {
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openArticleEditor(lesson_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, AddCourseComponent_div_191_div_6_button_31_Template, 2, 0, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_Template_button_click_33_listener() {
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openEditLessonModal(lesson_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_div_6_Template_button_click_35_listener() {
      const lesson_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18).$implicit;
      const section_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteLesson(section_r14, lesson_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const lesson_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.lessonType === "VIDEO" || !lesson_r19.lessonType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.lessonType === "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.lessonType === "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](lesson_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.free);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.durationSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.articleContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.hasQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-success", lesson_r19.videoUrl)("btn-outline-success", !lesson_r19.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](lesson_r19.videoUrl ? "Remplacer la vid\u00E9o" : "Ajouter une vid\u00E9o"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-info", lesson_r19.pdfUrl)("btn-outline-info", !lesson_r19.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](lesson_r19.pdfUrl ? "Remplacer le PDF" : "Ajouter un PDF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-warning", lesson_r19.articleContent)("btn-outline-warning", !lesson_r19.articleContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](lesson_r19.articleContent ? "Modifier l'article" : "R\u00E9diger un article"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", lesson_r19.articleContent);
  }
}
function AddCourseComponent_div_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 225)(1, "h2", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddCourseComponent_div_191_a_2_Template, 7, 5, "a", 227)(3, AddCourseComponent_div_191_div_3_Template, 7, 3, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 229)(5, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AddCourseComponent_div_191_div_6_Template, 37, 31, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 232)(8, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_191_Template_button_click_8_listener() {
      const section_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openAddLessonModal(section_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Ajouter une le\u00E7on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const section_r14 = ctx.$implicit;
    const si_r16 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editingSectionId !== section_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editingSectionId === section_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "sec" + si_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", section_r14.lessons);
  }
}
function AddCourseComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Aucune section pour le moment. Cliquez sur \"Ajouter une section\" pour commencer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_ng_container_254_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.discountPercent, "% de r\u00E9duction");
  }
}
function AddCourseComponent_ng_container_254_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 284)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Discount Price (\u20AC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_ng_container_254_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.step5.discountPrice, $event) || (ctx_r1.step5.discountPrice = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AddCourseComponent_ng_container_254_span_5_Template, 2, 1, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 86)(7, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Discount ends at");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_ng_container_254_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.step5.discountEndsAt, $event) || (ctx_r1.step5.discountEndsAt = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.step5.discountPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.discountPercent > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.step5.discountEndsAt);
  }
}
function AddCourseComponent_span_262_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 203);
  }
}
function AddCourseComponent_i_263_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 289);
  }
}
function AddCourseComponent_span_266_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 203);
  }
}
function AddCourseComponent_i_267_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 290);
  }
}
function AddCourseComponent_div_317_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "URL Vid\u00E9o embed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "(optionnel)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_317_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newLesson.videoUrl, $event) || (ctx_r1.newLesson.videoUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newLesson.videoUrl);
  }
}
function AddCourseComponent_ng_container_328_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "L'\u00E9diteur s'ouvrira automatiquement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function AddCourseComponent_div_352_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_352_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteContent(ctx_r1.editLessonModel.lesson, "video"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_352_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_352_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteContent(ctx_r1.editLessonModel.lesson, "pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_352_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_352_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteContent(ctx_r1.editLessonModel.lesson, "article"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_352_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 101)(1, "div", 86)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Titre de la le\u00E7on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_352_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.editLessonModel.title, $event) || (ctx_r1.editLessonModel.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 86)(8, "label", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Acc\u00E8s");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 296)(11, "div", 124)(12, "input", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_352_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.editLessonModel.isFree, $event) || (ctx_r1.editLessonModel.isFree = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Free Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 124)(16, "input", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_div_352_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.editLessonModel.isFree, $event) || (ctx_r1.editLessonModel.isFree = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "label", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h6", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Contenu de la le\u00E7on");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 302)(24, "div", 303)(25, "button", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_352_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.triggerVideoUpload(ctx_r1.editLessonModel.lesson.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Vid\u00E9o");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, AddCourseComponent_div_352_button_29_Template, 2, 0, "button", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 303)(31, "button", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_352_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.triggerPdfUpload(ctx_r1.editLessonModel.lesson.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, AddCourseComponent_div_352_button_35_Template, 2, 0, "button", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 303)(37, "button", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_div_352_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openArticleEditor(ctx_r1.editLessonModel.lesson));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, AddCourseComponent_div_352_button_41_Template, 2, 0, "button", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.editLessonModel.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.editLessonModel.isFree);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.editLessonModel.isFree);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-success", ctx_r1.editLessonModel.lesson.videoUrl)("btn-outline-success", !ctx_r1.editLessonModel.lesson.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](ctx_r1.editLessonModel.lesson.videoUrl ? "Remplacer la vid\u00E9o" : "Ajouter une vid\u00E9o"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editLessonModel.lesson.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-info", ctx_r1.editLessonModel.lesson.pdfUrl)("btn-outline-info", !ctx_r1.editLessonModel.lesson.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](ctx_r1.editLessonModel.lesson.pdfUrl ? "Remplacer le PDF" : "Ajouter un PDF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editLessonModel.lesson.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("btn-warning", ctx_r1.editLessonModel.lesson.articleContent)("btn-outline-warning", !ctx_r1.editLessonModel.lesson.articleContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](ctx_r1.editLessonModel.lesson.articleContent ? "Modifier l'article" : "R\u00E9diger un article"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editLessonModel.lesson.articleContent);
  }
}
function AddCourseComponent_span_389_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Sauvegard\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_445_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 317)(1, "h6", 318)(2, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Vid\u00E9o");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "video", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getFileUrl(ctx_r1.previewLesson.videoUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function AddCourseComponent_div_445_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 317)(1, "h6", 318)(2, "span", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Ouvrir dans un onglet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "iframe", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r1.getFileUrl(ctx_r1.previewLesson.pdfUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 2, ctx_r1.getFileUrl(ctx_r1.previewLesson.pdfUrl)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeResourceUrl"]);
  }
}
function AddCourseComponent_div_445_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 317)(1, "h6", 318)(2, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Les blocs de code affichent un bouton ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Ex\u00E9cuter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.previewLesson.articleContent, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function AddCourseComponent_div_445_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Aucun contenu disponible. Utilisez les boutons Vid\u00E9o / PDF / Article dans le curriculum pour ajouter du contenu \u00E0 cette le\u00E7on. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddCourseComponent_div_445_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddCourseComponent_div_445_div_1_Template, 6, 1, "div", 315)(2, AddCourseComponent_div_445_div_2_Template, 10, 4, "div", 315)(3, AddCourseComponent_div_445_div_3_Template, 10, 1, "div", 315)(4, AddCourseComponent_div_445_div_4_Template, 3, 0, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.previewLesson.videoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.previewLesson.pdfUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.previewLesson.articleContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.previewLesson.videoUrl && !ctx_r1.previewLesson.pdfUrl && !ctx_r1.previewLesson.articleContent);
  }
}
let AddCourseComponent = /*#__PURE__*/(() => {
  class AddCourseComponent {
    courseService;
    router;
    route;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    //  Wizard step 
    selectedFieldSet = [0];
    //  Statut 
    loading = false;
    errorMsg = '';
    successMsg = '';
    //  Données persistées côté backend (ID du cours créé) 
    courseId = null;
    //  Étape 1 : Informations de base 
    categories = [];
    step1 = {
      title: '',
      description: '',
      shortDescription: '',
      categoryId: null,
      level: 'BEGINNER',
      language: 'Français'
    };
    objectives = [''];
    requirements = [''];
    //  Étape 2 : Médias 
    coverFile = null;
    coverPreview = null;
    introVideoUrl = '';
    coverTab = 'preset';
    selectedPresetImage = null;
    presetImages = ['course-img1.jpg', 'course-img2.jpg', 'course-img3.jpg', 'course-img4.jpg', 'course-img5.jpg', 'course-img6.jpg', 'course-img7.jpg', 'course-img8.jpg', 'course-img9.jpg', 'courses-01.jpg', 'courses-02.jpg', 'courses-03.jpg', 'courses-04.jpg', 'courses-05.jpg', 'courses-06.jpg', 'cat-icon-1.svg', 'cat-icon-2.svg', 'cat-icon-3.svg', 'cat-icon-4.svg', 'cat-icon-5.png', 'cat-icon-6.svg', 'cat-icon-7.svg', 'cat-icon-8.svg', 'cat-icon-9.svg', 'cat-icon-10.svg', 'cat-icon-11.svg', 'cat-template-1.svg', 'cat-template-2.svg', 'cat-template-3.svg', 'cat-template-4.svg', 'cat-template-5.svg', 'cat-template-6.svg', 'cat-template-7.svg', 'cat-template-8.svg', 'cat-template-9.svg', 'cat-template-10.svg', 'cat-template-11.svg', 'cat-template-12.svg'];
    //  Étape 3 : Curriculum 
    sections = [];
    newSectionTitle = '';
    newLesson = {
      sectionId: null,
      title: '',
      type: 'VIDEO',
      videoUrl: '',
      isFree: false
    };
    // Édition du titre d'une section
    editingSectionId = null;
    editingSectionTitle = '';
    // Modèle pour la modal d'édition de leçon
    editLessonModel = null;
    //  Étape 5 : Tarification 
    step5 = {
      price: 0,
      isFree: false,
      hasDiscount: false,
      discountPrice: null,
      discountEndsAt: ''
    };
    isEditMode = false;
    courseStatus = ''; // DRAFT | PENDING | PUBLISHED | REJECTED | ARCHIVED
    constructor(courseService, router, route) {
      this.courseService = courseService;
      this.router = router;
      this.route = route;
    }
    ngOnInit() {
      this.courseService.getCategories().subscribe({
        next: cats => this.categories = cats,
        error: () => this.categories = []
      });
      let resolvedCourseId = null;
      // Nouvelle route: /courses/edit-course/:id
      this.route.params.subscribe(params => {
        if (params['id']) {
          const parsed = +params['id'];
          if (!Number.isNaN(parsed) && parsed > 0) {
            resolvedCourseId = parsed;
            this.courseId = parsed;
            this.isEditMode = true;
            this.loadCourseForEdit();
          }
        }
      });
      // Compatibilité ancienne route: /courses/add-course?id=...
      this.route.queryParams.subscribe(params => {
        if (!resolvedCourseId && params['id']) {
          const parsed = +params['id'];
          if (!Number.isNaN(parsed) && parsed > 0) {
            this.courseId = parsed;
            this.isEditMode = true;
            this.loadCourseForEdit();
          }
        }
      });
    }
    loadCourseForEdit() {
      if (!this.courseId) return;
      this.loading = true;
      this.courseService.getMyCourse(this.courseId).subscribe({
        next: course => {
          this.loading = false;
          this.step1 = {
            title: course.title || '',
            description: course.description || '',
            shortDescription: course.shortDescription || '',
            categoryId: course.categoryId || null,
            level: course.level || 'BEGINNER',
            language: course.language || 'Français'
          };
          const objLines = course.objectives ? course.objectives.split('\n').filter(o => o.trim()) : [];
          this.objectives = objLines.length ? objLines : [''];
          const reqLines = course.requirements ? course.requirements.split('\n').filter(r => r.trim()) : [];
          this.requirements = reqLines.length ? reqLines : [''];
          this.step5.price = course.price || 0;
          this.step5.isFree = !course.price || course.price === 0;
          this.sections = course.sections || [];
          this.courseStatus = course.status || '';
          // Restaurer l'image de couverture existante
          if (course.coverImage) {
            if (course.coverImage.startsWith('preset:')) {
              const imgName = course.coverImage.replace('preset:', '');
              this.selectedPresetImage = imgName;
              this.coverTab = 'preset';
            } else {
              if (course.coverImage.startsWith('http://') || course.coverImage.startsWith('https://')) {
                this.coverPreview = course.coverImage;
              } else {
                this.coverPreview = course.coverImage;
              }
              this.coverTab = 'upload';
            }
          }
          // Cours en attente de validation → mode lecture seule
          if (this.courseStatus === 'PENDING') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
              icon: 'info',
              title: 'Cours en attente de validation',
              html: 'Ce cours est actuellement <b>en attente de validation</b> par un administrateur.<br>Aucune modification n\'est possible tant que la validation n\'a pas été effectuée.',
              confirmButtonText: 'OK',
              confirmButtonColor: '#6c63ff'
            }).then(() => this.router.navigate([this.routes.instructorCourse]));
          }
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    ngOnDestroy() {}
    //  Utilitaires 
    addObjective() {
      this.objectives.push('');
    }
    removeObjective(i) {
      if (this.objectives.length > 1) this.objectives.splice(i, 1);
    }
    addRequirement() {
      this.requirements.push('');
    }
    removeRequirement(i) {
      if (this.requirements.length > 1) this.requirements.splice(i, 1);
    }
    trackByIndex(i) {
      return i;
    }
    //  Étape 1  créer le cours 
    saveStep1() {
      if (!this.step1.title.trim()) {
        this.errorMsg = 'Le titre du cours est obligatoire.';
        return;
      }
      this.normalizePricingState();
      this.errorMsg = '';
      this.loading = true;
      const payload = {
        title: this.step1.title,
        description: this.step1.description,
        shortDescription: this.step1.shortDescription,
        categoryId: this.step1.categoryId,
        level: this.step1.level,
        language: this.step1.language,
        objectives: this.objectives.filter(o => o.trim()).join('\n'),
        requirements: this.requirements.filter(r => r.trim()).join('\n'),
        // Preserve pricing in edit mode and keep valid non-null price at creation.
        price: this.step5.isFree ? 0 : this.step5.price || 0,
        discountPrice: this.step5.hasDiscount && this.step5.discountPrice ? this.step5.discountPrice : null,
        discountEndsAt: this.step5.hasDiscount && this.step5.discountEndsAt ? this.step5.discountEndsAt : null
      };
      if (this.courseId) {
        this.courseService.updateCourse(this.courseId, payload).subscribe({
          next: () => {
            this.loading = false;
            this.selectedFieldSet[0] = 1;
          },
          error: e => {
            this.loading = false;
            this.errorMsg = e?.error?.message || 'Erreur lors de la mise à jour.';
          }
        });
      } else {
        this.courseService.createCourse(payload).subscribe({
          next: course => {
            this.courseId = course.id;
            this.loading = false;
            this.selectedFieldSet[0] = 1;
          },
          error: e => {
            this.loading = false;
            this.errorMsg = e?.error?.message || 'Erreur lors de la création.';
          }
        });
      }
    }
    //  Étape 2  upload couverture 
    onCoverSelected(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        this.coverFile = input.files[0];
        this.selectedPresetImage = null;
        const reader = new FileReader();
        reader.onload = e => this.coverPreview = e.target?.result;
        reader.readAsDataURL(this.coverFile);
      }
    }
    selectPreset(img) {
      this.selectedPresetImage = img;
      this.coverFile = null;
      this.coverPreview = null;
    }
    saveStep2() {
      if (!this.courseId) {
        this.selectedFieldSet[0] = 0;
        return;
      }
      if (this.coverFile) {
        this.loading = true;
        this.courseService.uploadCoverImage(this.courseId, this.coverFile).subscribe({
          next: () => {
            this.loading = false;
            this.selectedFieldSet[0] = 2;
            this.loadCurriculum();
          },
          error: e => {
            this.loading = false;
            this.errorMsg = e?.error?.message || "Erreur lors de l'upload.";
          }
        });
      } else if (this.selectedPresetImage) {
        this.loading = true;
        this.courseService.setPresetCover(this.courseId, this.selectedPresetImage).subscribe({
          next: () => {
            this.loading = false;
            this.selectedFieldSet[0] = 2;
            this.loadCurriculum();
          },
          error: e => {
            this.loading = false;
            this.errorMsg = e?.error?.message || "Erreur lors de la sélection de l'image.";
          }
        });
      } else {
        this.selectedFieldSet[0] = 2;
        this.loadCurriculum();
      }
    }
    //  Étape 3 : Curriculum 
    loadCurriculum() {
      if (!this.courseId) return;
      this.courseService.getMyCourse(this.courseId).subscribe({
        next: c => this.sections = c.sections || [],
        error: () => this.sections = []
      });
    }
    openAddSectionModal() {
      this.newSectionTitle = '';
      const el = document.getElementById('add-topic');
      if (el) {
        const modal = new bootstrap.Modal(el);
        modal.show();
      }
    }
    confirmAddSection() {
      if (!this.newSectionTitle.trim() || !this.courseId) return;
      this.courseService.addSection(this.courseId, {
        title: this.newSectionTitle
      }).subscribe({
        next: sec => {
          this.sections.push({
            ...sec,
            lessons: []
          });
          this.newSectionTitle = '';
        },
        error: () => {}
      });
    }
    openAddLessonModal(sectionId) {
      this.newLesson = {
        sectionId,
        title: '',
        type: 'VIDEO',
        videoUrl: '',
        isFree: false
      };
      const el = document.getElementById('add-lesson');
      if (el) {
        const modal = new bootstrap.Modal(el);
        modal.show();
      }
    }
    confirmAddLesson() {
      if (!this.newLesson.title.trim() || !this.newLesson.sectionId) return;
      const lessonPayload = {
        title: this.newLesson.title,
        lessonType: this.newLesson.type,
        isFree: this.newLesson.isFree
      };
      if (this.newLesson.type === 'VIDEO' && this.newLesson.videoUrl.trim()) {
        lessonPayload.videoUrl = this.newLesson.videoUrl.trim();
      }
      const selectedType = this.newLesson.type; // capture before async callback
      this.courseService.addLesson(this.newLesson.sectionId, lessonPayload).subscribe({
        next: lesson => {
          // Ensure the local lessonType always matches what the user selected
          // (fallback in case the running backend version doesn't yet return it)
          if (!lesson.lessonType || lesson.lessonType === 'VIDEO' && selectedType !== 'VIDEO') {
            lesson.lessonType = selectedType;
          }
          const section = this.sections.find(s => s.id === this.newLesson.sectionId);
          if (section) section.lessons = [...(section.lessons || []), lesson];
          // For TEXT lessons: auto-open the article editor once the add-lesson modal is fully closed
          if (selectedType === 'TEXT') {
            setTimeout(() => this.openArticleEditor(lesson), 600);
          }
        },
        error: () => {}
      });
    }
    //  Édition du titre d'une section
    startEditSection(section) {
      this.editingSectionId = section.id;
      this.editingSectionTitle = section.title;
    }
    saveEditSection(section) {
      if (!this.editingSectionTitle.trim() || !this.courseId) {
        this.cancelEditSection();
        return;
      }
      this.loading = true;
      this.courseService.updateSection(this.courseId, section.id, {
        title: this.editingSectionTitle
      }).subscribe({
        next: () => {
          section.title = this.editingSectionTitle;
          this.loading = false;
          this.editingSectionId = null;
          this.editingSectionTitle = '';
        },
        error: () => {
          this.loading = false;
          this.editingSectionId = null;
          this.editingSectionTitle = '';
        }
      });
    }
    cancelEditSection() {
      this.editingSectionId = null;
      this.editingSectionTitle = '';
    }
    //  Upload vidéo pour une leçon
    triggerVideoUpload(lessonId) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'video/*';
      input.onchange = e => {
        const file = e.target.files?.[0];
        if (!file) return;
        this.loading = true;
        this.courseService.uploadLessonVideo(lessonId, file).subscribe({
          next: () => {
            this.loading = false;
            this.successMsg = 'Vidéo uploadée !';
            this.loadCurriculum();
          },
          error: err => {
            this.loading = false;
            this.errorMsg = err.error?.message || 'Erreur upload vidéo';
          }
        });
      };
      input.click();
    }
    //  Upload PDF pour une leçon
    triggerPdfUpload(lessonId) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/pdf';
      input.onchange = e => {
        const file = e.target.files?.[0];
        if (!file) return;
        this.loading = true;
        this.courseService.uploadLessonPdf(lessonId, file).subscribe({
          next: () => {
            this.loading = false;
            this.successMsg = 'PDF uploadé !';
            this.loadCurriculum();
          },
          error: err => {
            this.loading = false;
            this.errorMsg = err.error?.message || 'Erreur upload PDF';
          }
        });
      };
      input.click();
    }
    //  Étape 4  mise à jour objectives/requirements 
    saveStep4() {
      if (!this.courseId) {
        this.selectedFieldSet[0] = 4;
        return;
      }
      this.loading = true;
      const payload = {
        title: this.step1.title,
        description: this.step1.description,
        shortDescription: this.step1.shortDescription,
        categoryId: this.step1.categoryId,
        level: this.step1.level,
        language: this.step1.language,
        objectives: this.objectives.filter(o => o.trim()).join('\n'),
        requirements: this.requirements.filter(r => r.trim()).join('\n'),
        price: this.step5.isFree ? 0 : this.step5.price || 0
      };
      this.courseService.updateCourse(this.courseId, payload).subscribe({
        next: () => {
          this.loading = false;
          this.selectedFieldSet[0] = 4;
        },
        error: e => {
          this.loading = false;
          this.errorMsg = e?.error?.message || 'Erreur.';
        }
      });
    }
    //  Étape 5  tarification + soumettre / sauvegarder brouillon
    /** Affiche une alerte SweetAlert2 de confirmation avant d'enregistrer le brouillon */
    saveDraft() {
      if (!this.courseId) return;
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
        icon: 'info',
        title: 'Enregistrer comme brouillon',
        html: `Le cours sera enregistré en <b>brouillon</b>.<br>
             <span style="color:#6c757d;font-size:0.9em">Il ne sera pas publié tant qu'il n'est pas soumis pour validation.</span>`,
        confirmButtonText: 'Enregistrer',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#0dcaf0',
        cancelButtonColor: '#6c757d',
        showCancelButton: true,
        timer: 10000,
        timerProgressBar: true,
        allowOutsideClick: false,
        reverseButtons: true
      }).then(result => {
        // Procéder uniquement si l'utilisateur clique Enregistrer (pas sur timer expire)
        if (result.isConfirmed) {
          this._doSaveDraft();
        }
      });
    }
    /** Logique réelle de sauvegarde brouillon — appelée après confirmation Swal */
    _doSaveDraft() {
      this.errorMsg = '';
      this.normalizePricingState();
      if (!this.validatePricing()) {
        this.loading = false;
        return;
      }
      this.loading = true;
      const payload = {
        title: this.step1.title,
        description: this.step1.description,
        shortDescription: this.step1.shortDescription,
        categoryId: this.step1.categoryId,
        level: this.step1.level,
        language: this.step1.language,
        objectives: this.objectives.filter(o => o.trim()).join('\n'),
        requirements: this.requirements.filter(r => r.trim()).join('\n'),
        price: this.step5.isFree ? 0 : this.step5.price || 0,
        discountPrice: this.step5.hasDiscount && this.step5.discountPrice ? this.step5.discountPrice : null,
        discountEndsAt: this.step5.hasDiscount && this.step5.discountEndsAt ? this.step5.discountEndsAt : null
      };
      this.courseService.updateCourse(this.courseId, payload).subscribe({
        next: () => {
          this.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            icon: 'success',
            title: 'Brouillon enregistré !',
            text: 'Votre cours a été sauvegardé. Vous pourrez le soumettre quand il sera prêt.',
            confirmButtonText: 'Mes cours',
            confirmButtonColor: '#198754',
            timer: 4000,
            timerProgressBar: true
          }).then(() => this.router.navigate([this.routes.instructorCourse]));
        },
        error: e => {
          this.loading = false;
          this.errorMsg = e?.error?.message || 'Erreur lors de la sauvegarde.';
        }
      });
    }
    get discountPercent() {
      if (!this.step5.price || !this.step5.discountPrice) return 0;
      return Math.round((1 - this.step5.discountPrice / this.step5.price) * 100);
    }
    /** Affiche une alerte SweetAlert2 de confirmation avant de soumettre pour révision */
    submitCourse() {
      if (!this.courseId) return;
      this.normalizePricingState();
      if (!this.validatePricing()) {
        return;
      }
      // — Cours déjà en attente de validation —
      if (this.courseStatus === 'PENDING') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          icon: 'info',
          title: 'Déjà soumis',
          text: 'Ce cours est déjà en attente de validation par un administrateur. Vous serez notifié une fois qu\'il est approuvé.',
          confirmButtonColor: '#6c63ff'
        });
        return;
      }
      // — Vérification locale avant d'appeler le backend —
      const emptySections = [];
      for (const sec of this.sections) {
        const hasContent = (sec.lessons || []).some(l => l.videoUrl || l.pdfUrl || l.articleContent);
        if (!hasContent) emptySections.push(sec.title);
      }
      if (this.sections.length === 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          icon: 'error',
          title: 'Curriculum vide',
          text: 'Ajoutez au moins une section et une leçon avant de soumettre.'
        });
        return;
      }
      if (emptySections.length > 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          icon: 'warning',
          title: 'Section(s) sans contenu',
          html: `Les sections suivantes n'ont aucune leçon avec contenu :<br><br>
               <b>${emptySections.map(s => `« ${s} »`).join('<br>')}</b><br><br>
               Ajoutez au moins une vidéo, un PDF ou un article par section.`,
          confirmButtonText: 'Retour au curriculum',
          confirmButtonColor: '#e53e3e'
        }).then(() => this.selectedFieldSet[0] = 2);
        return;
      }
      const isPublished = this.courseStatus === 'PUBLISHED';
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
        icon: 'warning',
        title: isPublished ? 'Soumettre les modifications ?' : 'Soumettre pour validation ?',
        html: isPublished ? `Vos modifications seront soumises pour validation par l'administrateur.<br>
           <b>Le cours restera visible aux étudiants</b> pendant l'examen.` : `Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
             tant qu'il est en attente de validation par l'administrateur.`,
        confirmButtonText: '<i class="isax isax-send me-1"></i> Confirmer',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#d63384',
        cancelButtonColor: '#6c757d',
        showCancelButton: true,
        timer: 10000,
        timerProgressBar: true,
        allowOutsideClick: false,
        reverseButtons: true
      }).then(result => {
        // Procéder uniquement si l'utilisateur clique Confirmer (pas sur timer expire)
        if (result.isConfirmed) {
          this._doSubmitCourse();
        }
      });
    }
    /** Logique réelle de soumission — appelée après confirmation Swal */
    _doSubmitCourse() {
      this.normalizePricingState();
      if (!this.validatePricing()) {
        return;
      }
      this.loading = true;
      const isPublished = this.courseStatus === 'PUBLISHED';
      const payload = {
        title: this.step1.title,
        description: this.step1.description,
        shortDescription: this.step1.shortDescription,
        categoryId: this.step1.categoryId,
        level: this.step1.level,
        language: this.step1.language,
        objectives: this.objectives.filter(o => o.trim()).join('\n'),
        requirements: this.requirements.filter(r => r.trim()).join('\n'),
        price: this.step5.isFree ? 0 : this.step5.price,
        discountPrice: this.step5.hasDiscount && this.step5.discountPrice ? this.step5.discountPrice : null,
        discountEndsAt: this.step5.hasDiscount && this.step5.discountEndsAt ? this.step5.discountEndsAt : null
      };
      this.courseService.updateCourse(this.courseId, payload).subscribe({
        next: () => {
          if (isPublished) {
            // Cours publié : les modifications sont sauvegardées comme « pending edit »
            // et l'admin les verra dans sa liste. Pas de changement de statut.
            this.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
              icon: 'success',
              title: 'Modifications soumises',
              text: 'Vos modifications ont été enregistrées et soumises pour validation. L\'administrateur les examinera prochainement. Le cours reste visible aux étudiants en attendant.',
              confirmButtonText: 'Mes cours',
              showDenyButton: true,
              denyButtonText: 'Rester ici',
              customClass: {
                confirmButton: 'btn btn-secondary main-btn me-2',
                denyButton: 'btn btn-outline-secondary main-btn',
                actions: 'd-flex justify-content-center gap-2'
              },
              buttonsStyling: false
            }).then(result => {
              if (result.isConfirmed) {
                this.router.navigate([this.routes.instructorCourse]);
              }
            });
            return;
          }
          // Cours DRAFT ou REJECTED → soumettre pour validation (PENDING)
          this.courseService.submitForReview(this.courseId).subscribe({
            next: () => {
              this.loading = false;
              this.courseStatus = 'PENDING';
              const el = document.getElementById('success');
              if (el) {
                const modal = new bootstrap.Modal(el);
                modal.show();
              }
            },
            error: e => {
              this.loading = false;
              this.errorMsg = e?.error?.message || 'Erreur lors de la soumission.';
            }
          });
        },
        error: e => {
          this.loading = false;
          this.errorMsg = e?.error?.message || 'Erreur lors de la mise à jour.';
        }
      });
    }
    formatDuration(seconds) {
      if (!seconds) return '';
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}m ${s.toString().padStart(2, '0')}s`;
    }
    normalizePricingState() {
      if (this.step5.isFree) {
        this.step5.price = 0;
        this.step5.hasDiscount = false;
        this.step5.discountPrice = null;
        this.step5.discountEndsAt = '';
        return;
      }
      if (!this.step5.hasDiscount) {
        this.step5.discountPrice = null;
        this.step5.discountEndsAt = '';
      }
    }
    validatePricing() {
      if (!this.step5.isFree && (this.step5.price == null || this.step5.price < 0)) {
        this.errorMsg = 'Le prix du cours doit etre superieur ou egal a 0.';
        return false;
      }
      if (!this.step5.isFree && this.step5.hasDiscount) {
        if (this.step5.discountPrice == null || this.step5.discountPrice < 0) {
          this.errorMsg = 'Le prix promotionnel doit etre superieur ou egal a 0.';
          return false;
        }
        if (this.step5.discountPrice >= this.step5.price) {
          this.errorMsg = 'Le prix promotionnel doit etre strictement inferieur au prix normal.';
          return false;
        }
      }
      this.errorMsg = '';
      return true;
    }
    // ─── Lesson preview ─────────────────────────────────────────────────────────────────
    previewLesson = null;
    openPreview(lesson) {
      this.previewLesson = lesson;
      setTimeout(() => {
        const el = document.getElementById('lesson_preview_modal');
        if (!el) return;
        const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
        el.addEventListener('shown.bs.modal', () => {
          const body = el.querySelector('.article-preview-body');
          if (body) this._initCodeBlocks(body);
        }, {
          once: true
        });
        modal.show();
      }, 50);
    }
    getFileUrl(path) {
      if (!path) return '#';
      const clean = path.startsWith('/') ? path : '/' + path;
      return 'http://localhost:8081' + clean;
    }
    // ─── Article editor (Quill.js) ───────────────────────────────────────────
    articleLesson = null;
    articleSaving = false;
    articleSaved = false;
    _quill = null; // Quill instance, initialized on first modal open
    openArticleEditor(lesson) {
      this.articleLesson = lesson;
      this.articleSaved = false;
      const el = document.getElementById('article_editor_modal');
      if (!el) return;
      const bsModal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
      if (this._quill) {
        // Already initialized — just swap content
        this._quill.root.innerHTML = '';
        if (lesson.articleContent) {
          this._quill.clipboard.dangerouslyPasteHTML(lesson.articleContent);
        }
        bsModal.show();
        return;
      }
      // First open: init Quill after Bootstrap entrance animation completes
      el.addEventListener('shown.bs.modal', () => {
        const Quill = window.Quill;
        if (!Quill || this._quill) return;
        this._quill = new Quill('#quill-editor-container', {
          theme: 'snow',
          modules: {
            toolbar: '#ql-article-toolbar'
          },
          placeholder: 'Rédigez votre article ici…'
        });
        if (lesson.articleContent) {
          this._quill.clipboard.dangerouslyPasteHTML(lesson.articleContent);
        }
      }, {
        once: true
      });
      bsModal.show();
    }
    // ─── Édition et suppression de leçon ────────────────────────────────
    openEditLessonModal(lesson) {
      this.editLessonModel = {
        lesson,
        title: lesson.title,
        isFree: !!lesson.free
      };
    }
    confirmEditLesson() {
      if (!this.editLessonModel) return;
      const {
        lesson,
        title,
        isFree
      } = this.editLessonModel;
      if (!title.trim()) return;
      this.courseService.updateLesson(lesson.id, {
        title: title.trim(),
        isFree
      }).subscribe({
        next: updated => {
          lesson.title = updated.title;
          lesson.free = updated.free;
          this.editLessonModel = null;
          const el = document.getElementById('edit-lesson');
          if (el) {
            const modal = bootstrap.Modal.getInstance(el);
            if (modal) modal.hide();
          }
        },
        error: e => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          icon: 'error',
          title: 'Erreur',
          text: e?.error?.message || 'Impossible de modifier la leçon.'
        })
      });
    }
    deleteLesson(section, lesson) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
        icon: 'warning',
        title: 'Supprimer la leçon ?',
        html: `La leçon <b>« ${lesson.title} »</b> et tout son contenu (vidéo, PDF, article) seront <b>définitivement supprimés</b>.`,
        showCancelButton: true,
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#e53e3e',
        cancelButtonColor: '#6c757d',
        reverseButtons: true
      }).then(result => {
        if (!result.isConfirmed) return;
        this.courseService.deleteLesson(lesson.id).subscribe({
          next: () => {
            section.lessons = (section.lessons || []).filter(l => l.id !== lesson.id);
          },
          error: e => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            icon: 'error',
            title: 'Erreur',
            text: e?.error?.message || 'Impossible de supprimer la leçon.'
          })
        });
      });
    }
    // ─── Suppression de contenu d'une leçon ─────────────────────────────
    deleteContent(lesson, type) {
      const labels = {
        video: 'vidéo',
        pdf: 'PDF',
        article: 'article'
      };
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
        icon: 'warning',
        title: `Supprimer la ${labels[type]} ?`,
        text: `Cette action est irréversible. La ${labels[type]} de la leçon « ${lesson.title} » sera définitivement supprimée.`,
        showCancelButton: true,
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#e53e3e',
        cancelButtonColor: '#6c757d',
        reverseButtons: true
      }).then(result => {
        if (!result.isConfirmed) return;
        const obs = type === 'video' ? this.courseService.deleteLessonVideo(lesson.id) : type === 'pdf' ? this.courseService.deleteLessonPdf(lesson.id) : this.courseService.deleteLessonArticle(lesson.id);
        obs.subscribe({
          next: updated => {
            lesson.videoUrl = updated.videoUrl ?? null;
            lesson.pdfUrl = updated.pdfUrl ?? null;
            lesson.articleContent = updated.articleContent ?? null;
            lesson.lessonType = updated.lessonType ?? 'VIDEO';
          },
          error: e => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
              icon: 'error',
              title: 'Erreur',
              text: e?.error?.message || 'Impossible de supprimer le contenu.'
            });
          }
        });
      });
    }
    saveArticle() {
      if (!this._quill || !this.articleLesson) return;
      const content = this._quill.root.innerHTML;
      this.articleSaving = true;
      this.courseService.saveArticleContent(this.articleLesson.id, content).subscribe({
        next: _ => {
          this.articleLesson.articleContent = content;
          this.articleLesson.lessonType = 'TEXT';
          for (const sec of this.sections) {
            const idx = (sec.lessons || []).findIndex(l => l.id === this.articleLesson.id);
            if (idx >= 0) {
              sec.lessons[idx] = {
                ...sec.lessons[idx],
                articleContent: content,
                lessonType: 'TEXT'
              };
              break;
            }
          }
          this.articleSaving = false;
          this.articleSaved = true;
        },
        error: () => {
          this.articleSaving = false;
        }
      });
    }
    // ─── Shared code-block enhancer (article preview: instructor + admin) ────
    _initCodeBlocks(container) {
      // Pass 1 — <pre> blocks (ql-syntax, language-*, bare pre)
      const preBlocks = Array.from(container.querySelectorAll('pre:not([data-cb-enhanced])'));
      preBlocks.forEach(pre => this._enhanceBlock(pre, pre.querySelector('code') || pre));
      // Pass 2 — standalone <code> not inside a <pre>
      const codeBlocks = Array.from(container.querySelectorAll('code:not(pre code):not([data-cb-enhanced])'));
      codeBlocks.forEach(code => {
        code.style.display = 'block';
        this._enhanceBlock(code, code);
      });
      // Pass 3 — smart fallback: no formal blocks but text looks like code
      if (preBlocks.length === 0 && codeBlocks.length === 0) {
        const text = container.textContent || '';
        if (/console\.|function |=>|var |let |const |<script|<div|document\.|window\.|import |export /.test(text)) {
          const banner = document.createElement('div');
          banner.setAttribute('data-cb-enhanced', 'true');
          banner.style.cssText = 'background:#2d2d2d;border:1px solid #3a3a3a;border-radius:6px;padding:10px 14px;' + 'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:12px;';
          banner.innerHTML = '<span style="font-size:12px;color:#aaa;font-family:monospace;">' + '<i class="fa-solid fa-triangle-exclamation" style="color:#ffb74d;margin-right:6px"></i>' + 'Aucun bloc de code formel — le texte semble contenir du code.' + '</span>';
          const runAll = document.createElement('button');
          runAll.innerHTML = '<i class="fa-solid fa-play" style="margin-right:5px"></i>Exécuter comme JS';
          runAll.style.cssText = 'font-size:11px;padding:4px 12px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;white-space:nowrap;flex-shrink:0;';
          runAll.addEventListener('click', () => {
            let w = container.querySelector('.cb-smart-wrapper');
            if (!w) {
              w = document.createElement('div');
              w.className = 'cb-smart-wrapper';
              container.appendChild(w);
            }
            this._runCode(text, 'js', w);
          });
          banner.appendChild(runAll);
          container.insertBefore(banner, container.firstChild);
        }
      }
    }
    _enhanceBlock(blockEl, codeEl) {
      blockEl.setAttribute('data-cb-enhanced', 'true');
      const raw = codeEl.textContent || '';
      if (!raw.trim()) return;
      const classStr = (codeEl.className || '') + ' ' + (blockEl.className || '');
      const langMatch = classStr.match(/language-(\w+)|lang-(\w+)/i);
      const dataLang = blockEl.getAttribute('data-lang') || codeEl.getAttribute('data-lang') || '';
      const lang = langMatch ? (langMatch[1] || langMatch[2]).toLowerCase() : dataLang || 'js';
      // All languages are runnable: native for JS/TS/HTML, Piston API for the rest
      const isRunnable = true;
      const wrapper = document.createElement('div');
      wrapper.className = 'cb-card mb-3 rounded overflow-hidden';
      wrapper.style.cssText = 'border:1px solid #3a3a3a;';
      blockEl.parentNode?.insertBefore(wrapper, blockEl);
      wrapper.appendChild(blockEl);
      blockEl.style.cssText = 'background:#1e1e1e;color:#d4d4d4;margin:0;padding:14px 18px;' + 'font-size:13px;line-height:1.65;overflow-x:auto;white-space:pre;font-family:monospace;';
      const bar = document.createElement('div');
      bar.style.cssText = 'background:#2d2d2d;display:flex;justify-content:space-between;align-items:center;padding:5px 14px;gap:8px;';
      const badge = document.createElement('span');
      badge.textContent = lang.toUpperCase();
      badge.style.cssText = 'font-size:10px;font-family:monospace;color:#aaa;letter-spacing:1px;';
      bar.appendChild(badge);
      const btnRow = document.createElement('div');
      btnRow.style.cssText = 'display:flex;gap:6px;';
      if (isRunnable) {
        const runBtn = document.createElement('button');
        runBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-right:4px"></i>Exécuter';
        runBtn.style.cssText = 'font-size:11px;padding:3px 10px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;';
        runBtn.addEventListener('click', () => this._runCode(raw, lang, wrapper));
        btnRow.appendChild(runBtn);
      }
      const copyBtn = document.createElement('button');
      copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
      copyBtn.style.cssText = 'font-size:11px;padding:3px 10px;border:1px solid #888;background:transparent;color:#ccc;border-radius:4px;cursor:pointer;';
      copyBtn.addEventListener('click', () => {
        const fallback = () => {
          const t = document.createElement('textarea');
          t.value = raw;
          document.body.appendChild(t);
          t.select();
          document.execCommand('copy');
          document.body.removeChild(t);
        };
        navigator.clipboard?.writeText(raw).then(() => {}, fallback) ?? fallback();
        copyBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copié !';
        copyBtn.style.color = '#4ec9b0';
        copyBtn.style.borderColor = '#4ec9b0';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
          copyBtn.style.color = '#ccc';
          copyBtn.style.borderColor = '#888';
        }, 2000);
      });
      btnRow.appendChild(copyBtn);
      bar.appendChild(btnRow);
      wrapper.insertBefore(bar, blockEl);
    }
    _runCode(code, lang, wrapper) {
      wrapper.querySelector('.cb-runner')?.remove();
      const runner = document.createElement('div');
      runner.className = 'cb-runner';
      runner.style.cssText = 'border-top:1px solid #333;';
      const hdr = document.createElement('div');
      hdr.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:4px 14px;background:#111;';
      const X = document.createElement('button');
      X.textContent = '✕';
      X.style.cssText = 'background:none;border:none;color:#888;cursor:pointer;font-size:14px;line-height:1;';
      X.addEventListener('click', () => runner.remove());
      if (lang === 'html') {
        // ─ HTML: iframe sandboxed renderer ────────────────────────────────────────────
        hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-display" style="color:#64b5f6;margin-right:6px"></i>Rendu HTML</span>';
        hdr.appendChild(X);
        runner.appendChild(hdr);
        const frame = document.createElement('iframe');
        frame.srcdoc = code;
        frame.setAttribute('sandbox', 'allow-scripts allow-same-origin');
        frame.style.cssText = 'width:100%;height:300px;border:none;background:#fff;display:block;';
        runner.appendChild(frame);
      } else if (['js', 'javascript', 'ts', 'typescript'].includes(lang)) {
        // ─ JS / TS: native browser execution ────────────────────────────────────
        hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-terminal" style="color:#a5d6a7;margin-right:6px"></i>Console (natif)</span>';
        hdr.appendChild(X);
        runner.appendChild(hdr);
        const out = document.createElement('div');
        out.style.cssText = 'background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;';
        const logs = [];
        const orig = {
          log: console.log,
          error: console.error,
          warn: console.warn
        };
        const esc = x => (typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        console.log = (...a) => {
          orig.log(...a);
          logs.push(`<span style="color:#4ec9b0">${a.map(esc).join(' ')}</span>`);
        };
        console.error = (...a) => {
          orig.error(...a);
          logs.push(`<span style="color:#f44336">❌ ${a.map(esc).join(' ')}</span>`);
        };
        console.warn = (...a) => {
          orig.warn(...a);
          logs.push(`<span style="color:#ffb74d">⚠️ ${a.map(esc).join(' ')}</span>`);
        };
        try {
          new Function(code)();
        } catch (e) {
          logs.push(`<span style="color:#f44336">❌ ${esc(e.message)}</span>`);
        } finally {
          Object.assign(console, orig);
        }
        out.innerHTML = logs.length ? logs.join('<br>') : '<span style="color:#555">// Aucune sortie console</span>';
        runner.appendChild(out);
      } else {
        // ─ All other languages: Piston API ─────────────────────────────────────────
        hdr.innerHTML = `<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-cloud" style="color:#64b5f6;margin-right:6px"></i>Piston — ${lang.toUpperCase()}</span>`;
        hdr.appendChild(X);
        runner.appendChild(hdr);
        const out = document.createElement('div');
        out.style.cssText = 'background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;';
        runner.appendChild(out);
        this._runWithPiston(code, lang, out);
      }
      wrapper.appendChild(runner);
    }
    // ─── Piston integration ───────────────────────────────────────────────
    //  Maps our language identifiers to Piston [language, version] tuples.
    //  See https://emkc.org/api/v2/piston/runtimes for the full list.
    PISTON_LANGS = {
      python: ['python', '3.10.0'],
      py: ['python', '3.10.0'],
      java: ['java', '15.0.2'],
      c: ['c', '10.2.0'],
      cpp: ['c++', '10.2.0'],
      bash: ['bash', '5.1.0'],
      sh: ['bash', '5.1.0'],
      php: ['php', '8.0.0'],
      ruby: ['ruby', '3.0.0'],
      rb: ['ruby', '3.0.0'],
      rust: ['rust', '1.50.0'],
      rs: ['rust', '1.50.0'],
      go: ['go', '1.16.2'],
      kotlin: ['kotlin', '1.6.0'],
      kt: ['kotlin', '1.6.0'],
      swift: ['swift', '5.3.3'],
      csharp: ['csharp', '6.12.0'],
      cs: ['csharp', '6.12.0'],
      r: ['r', '4.1.1'],
      sql: ['sqlite3', '3.36.0']
    };
    _runWithPiston(code, lang, out) {
      const mapping = this.PISTON_LANGS[lang];
      const html = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
      if (!mapping) {
        out.innerHTML = `<span style="color:#ffb74d">⚠️ Langage "${lang}" non configuré pour l'exécution.</span>`;
        return;
      }
      const [pistonLang, pistonVer] = mapping;
      out.innerHTML = '<span style="color:#aaa"><i class="fa-solid fa-spinner fa-spin" style="margin-right:6px"></i>Exécution via Piston…</span>';
      fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          language: pistonLang,
          version: pistonVer,
          files: [{
            content: code
          }]
        })
      }).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      }).then(res => {
        const stdout = (res?.run?.stdout || '').trim();
        const stderr = (res?.run?.stderr || '').trim();
        const compile = (res?.compile?.stderr || '').trim();
        const parts = [];
        if (compile) parts.push(`<span style="color:#ff7043">⚙️ Erreur de compilation:<br>${html(compile)}</span>`);
        if (stdout) parts.push(`<span style="color:#4ec9b0">${html(stdout)}</span>`);
        if (stderr) parts.push(`<span style="color:#f44336">❌ ${html(stderr)}</span>`);
        if (!parts.length) parts.push('<span style="color:#555">// Aucune sortie</span>');
        out.innerHTML = parts.join('<br>');
      }).catch(e => {
        out.innerHTML = `<span style="color:#f44336">❌ Piston inaccessible : ${e.message}</span>`;
      });
    }
    static ɵfac = function AddCourseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AddCourseComponent,
      selectors: [["app-add-course"]],
      decls: 449,
      vars: 92,
      consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-xl-11", "col-lg-11", "mx-auto"], [1, "add-course-item"], ["class", "alert alert-danger alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], [1, "wizard"], ["id", "progressbar2", 1, "form-wizard-steps"], [3, "ngClass"], [1, "profile-step"], [1, "dot-active", "mb-2"], [1, "number"], [1, "tickmark"], [1, "fa-solid", "fa-check"], [1, "step-section"], [1, "initialization-form-set"], [1, "form-inner", "wizard-form-card", 3, "ngStyle"], [1, "title"], [1, "col-md-12"], [1, "input-block"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "placeholder", "Saisissez le titre du cours", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], [1, "text-muted", "ms-1"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], ["value", "EXPERT"], ["value", "Fran\u00E7ais"], ["value", "English"], ["value", "Arabe"], ["value", "Deutsch"], ["type", "text", "placeholder", "Bref r\u00E9sum\u00E9 affich\u00E9 sur les cartes du cours", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "5", "placeholder", "Description d\u00E9taill\u00E9e du cours...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "bg-light", "border", "p-4", "rounded-3"], [1, "mb-2"], ["class", "input-block", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "add-new-topic", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "add-form-btn", "widget-next-btn", "submit-btn", "d-flex", "justify-content-end", "mb-0"], [1, "btn", "main-btn", "next_btns", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "col-md-12", "mb-3"], [1, "nav", "nav-pills", "cover-tab-nav"], [1, "nav-item"], ["type", "button", 1, "nav-link", 3, "click"], [1, "isax", "isax-gallery", "me-1"], [1, "isax", "isax-document-upload", "me-1"], ["class", "col-md-12", 4, "ngIf"], [4, "ngIf"], [1, "col-md-12", "mt-3"], ["type", "text", "placeholder", "https://youtube.com/embed/...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "add-form-btn", "widget-next-btn", "submit-btn"], [1, "btn-left"], [1, "btn", "btn-light", "main-btn", "prev_btns", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "btn", "btn-secondary", "main-btn", "next_btns", "d-flex", "align-items-center", 3, "click", "disabled"], [1, "row", "align-items-center", "row-gap-2"], [1, "mb-0"], [1, "col-md-6", "text-md-end"], [1, "btn", "add-edit-btn", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-add-circle5", "me-1"], ["id", "accordionCurriculum", 1, "accordions-items-seperate"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-4", 4, "ngIf"], [1, "btn", "btn-light", "main-btn", "prev_btns", 3, "click"], [1, "btn", "btn-secondary", "main-btn", "next_btns", 3, "click"], ["type", "text", "placeholder", "javascript, react, angular (s\u00E9par\u00E9s par des virgules)", 1, "form-control"], [1, "fs-13", "text-gray-6", "mt-1", "d-block"], ["rows", "3", "placeholder", "Notes pour le validateur...", 1, "form-control"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "checked", "", "id", "licenseCheck", 1, "form-check-input"], ["for", "licenseCheck", 1, "form-check-label", "ms-2"], [1, "col-12"], [1, "d-flex", "align-items-center", "mb-3"], ["type", "checkbox", "id", "freeCheck", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "freeCheck", 1, "form-check-label", "ms-2"], [1, "input-block", "mb-3"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "discountCheck", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "discountCheck", 1, "form-check-label", "ms-2"], [1, "btn-left", "d-flex", "gap-2"], [1, "btn", "main-btn", "d-flex", "align-items-center", 2, "background", "#fff", "color", "#374151", "border", "1.5px solid #9ca3af", "font-weight", "500", 3, "click", "disabled"], ["class", "isax isax-save me-1", 4, "ngIf"], [1, "btn", "btn-secondary", "main-btn", "d-flex", "align-items-center", 3, "click", "disabled"], ["class", "isax isax-send me-1", 4, "ngIf"], ["id", "add-topic", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], ["type", "text", "placeholder", "Ex: Introduction", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-light"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["id", "add-lesson", "tabindex", "-1", 1, "modal", "fade"], ["type", "text", "placeholder", "Ex: Introduction to HTML", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted", "fs-12", "ms-1"], ["value", "VIDEO"], [1, "isax", "isax-video-circle"], ["value", "TEXT"], ["value", "PDF"], ["class", "input-block mb-3", 4, "ngIf"], [1, "alert", "alert-light", "border", "py-2", "fs-13", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "btn", "btn-success", "btn-sm", "py-0", "px-1", "disabled"], [1, "btn", "btn-info", "btn-sm", "py-0", "px-1", "disabled"], [1, "isax", "isax-document"], [1, "btn", "btn-warning", "btn-sm", "py-0", "px-1", "disabled"], [1, "isax", "isax-edit"], [1, "form-check", "me-3"], ["type", "radio", "name", "lessonAccess", "id", "freeLesson", 1, "form-check-input", 3, "ngModelChange", "value", "ngModel"], ["for", "freeLesson", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "lessonAccess", "id", "premiumLesson", 1, "form-check-input", 3, "ngModelChange", "value", "ngModel"], ["for", "premiumLesson", 1, "form-check-label"], ["id", "edit-lesson", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-title"], [1, "isax", "isax-edit-2", "me-2"], ["class", "modal-body", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", "me-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "isax", "isax-tick-square", "me-1"], ["id", "success", "tabindex", "-1", 1, "modal", "fade", "modal-default"], [1, "modal-body", "p-4"], [1, "text-center"], [1, "text-success", "h1", "mb-2"], [1, "isax", "isax-tick-circle5"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "routerLink"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["id", "article_editor_modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen"], [1, "modal-content", 2, "display", "flex", "flex-direction", "column", "height", "100dvh", "overflow", "hidden"], [1, "d-flex", "align-items-center", "justify-content-between", "px-4", "py-2", "flex-shrink-0", 2, "background", "linear-gradient(135deg,#1a1d2e 0%,#2d3250 100%)"], [1, "d-flex", "align-items-center", "gap-3"], [2, "width", "34px", "height", "34px", "border-radius", "8px", "background", "rgba(255,255,255,.12)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-pen-nib", "text-white", 2, "font-size", "14px"], [2, "font-size", "10px", "color", "rgba(255,255,255,.45)", "letter-spacing", "1px", "text-transform", "uppercase"], [1, "text-white", "fw-semibold", 2, "font-size", "15px"], [1, "d-flex", "align-items-center", "gap-2"], ["class", "text-success", "style", "font-size:12px;", 4, "ngIf"], [1, "btn", "btn-sm", "btn-light", 3, "click", "disabled"], [1, "fa-solid", "fa-floppy-disk", "me-1"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Fermer", 1, "btn-close", "btn-close-white"], ["id", "ql-article-toolbar"], [1, "ql-formats"], [1, "ql-header"], ["value", "1"], ["value", "2"], ["value", "3"], ["selected", ""], ["title", "Gras", 1, "ql-bold"], ["title", "Italique", 1, "ql-italic"], ["title", "Soulign\u00E9", 1, "ql-underline"], ["title", "Barr\u00E9", 1, "ql-strike"], ["title", "Citation", 1, "ql-blockquote"], ["value", "ordered", "title", "Liste num\u00E9rot\u00E9e", 1, "ql-list"], ["value", "bullet", "title", "Liste \u00E0 puces", 1, "ql-list"], ["value", "-1", 1, "ql-indent"], ["value", "+1", 1, "ql-indent"], ["title", "Couleur du texte", 1, "ql-color"], ["title", "Couleur de fond", 1, "ql-background"], ["title", "Lien", 1, "ql-link"], ["title", "Image", 1, "ql-image"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], ["title", "Effacer mise en forme", 1, "ql-clean"], [1, "flex-grow-1", 2, "overflow", "hidden", "min-height", "0", "background", "#fff"], ["id", "quill-editor-container", 2, "height", "100%"], ["id", "lesson_preview_modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-header", "py-2"], [1, "fw-bold", "mb-0"], [1, "isax", "isax-eye", "me-2", "text-secondary"], [1, "text-muted", "fw-normal"], ["class", "modal-body", "style", "max-height:80vh;overflow-y:auto", 4, "ngIf"], [1, "modal-footer", "py-2"], ["data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-check-circle", "me-2"], [1, "d-flex", "align-items-center", "add-new-input"], ["type", "text", "placeholder", "Objectif d'apprentissage", 1, "form-control", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-trash", 3, "click"], [1, "isax", "isax-trash"], ["type", "text", "placeholder", "Pr\u00E9requis", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "preset-image-grid"], ["class", "preset-image-item", 3, "selected", "title", "click", 4, "ngFor", "ngForOf"], ["class", "text-muted small mt-2", 4, "ngIf"], ["class", "text-success small mt-2", 4, "ngIf"], [1, "preset-image-item", 3, "click", "title"], ["loading", "lazy", 3, "src", "alt"], ["class", "preset-check", 4, "ngIf"], [1, "preset-check"], [1, "text-muted", "small", "mt-2"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-success", "small", "mt-2"], [1, "isax", "isax-tick-circle", "me-1"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 1, "form-control", 3, "change"], ["class", "col-md-12 mt-2", 4, "ngIf"], [1, "col-md-12", "mt-2"], ["alt", "Cover preview", 1, "img-fluid", "rounded", "mb-3", 2, "max-height", "280px", "object-fit", "cover", 3, "src"], [1, "upload-img-section", "d-flex", "align-items-center", "justify-content-center"], [1, "upload-content", "text-center"], [1, "isax", "isax-image5", "text-secondary", "fs-24"], [1, "fw-medium", "mb-1", "mt-2"], [1, "text-muted", "small"], [1, "accordion-item"], [1, "accordion-header"], ["href", "javascript:void(0);", "class", "accordion-button", "data-bs-toggle", "collapse", "aria-expanded", "true", 4, "ngIf"], ["class", "d-flex align-items-center gap-2 p-2", 4, "ngIf"], [1, "accordion-collapse", "collapse", "show", 3, "id"], [1, "accordion-body"], ["class", "d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2"], [1, "isax", "isax-add-circle5", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button"], [1, "d-flex", "align-items-center", "mb-0", "gap-2", "flex-wrap"], [1, "isax", "isax-menu-15", "me-2"], ["title", "Cliquez pour \u00E9diter", 2, "cursor", "pointer", "padding", "4px 8px", "border-radius", "4px", 3, "click"], [1, "badge", "bg-secondary", "ms-2"], [1, "d-flex", "align-items-center", "gap-2", "p-2"], [1, "isax", "isax-menu-15"], ["type", "text", "placeholder", "Titre de la section", "autofocus", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "btn", "btn-sm", "btn-success", "d-flex", "align-items-center", "gap-1", 3, "click", "disabled"], [1, "isax", "isax-check"], [1, "btn", "btn-sm", "btn-secondary", "d-flex", "align-items-center", "gap-1", 3, "click", "disabled"], [1, "d-flex", "align-items-center", "justify-content-between", "bg-white", "p-2", "border", "rounded-3", "mb-2"], ["class", "isax isax-play-circle5 text-success fs-24 me-1", 4, "ngIf"], ["class", "isax isax-document-text fs-24 me-1 text-info", 4, "ngIf"], ["class", "isax isax-document fs-24 me-1 text-danger", 4, "ngIf"], [1, "fw-medium", "text-gray-5", "mb-0"], ["class", "badge bg-success ms-2", 4, "ngIf"], ["class", "ms-2 text-muted small", 4, "ngIf"], ["class", "badge bg-info ms-2", 4, "ngIf"], ["class", "badge bg-warning ms-2", 4, "ngIf"], ["class", "badge ms-2", "style", "background:#6f42c1;color:#fff", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap"], ["title", "Aper\u00E7u de la le\u00E7on", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-eye"], [1, "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 3, "click", "title"], [1, "d-none", "d-lg-inline", 2, "font-size", "11px"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer la vid\u00E9o", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer le PDF", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer l'article", 3, "click", 4, "ngIf"], [1, "border-start", "mx-1", 2, "height", "24px", "display", "inline-block", "opacity", ".3"], ["title", "Modifier la le\u00E7on", "data-bs-toggle", "modal", "data-bs-target", "#edit-lesson", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-edit-2"], ["title", "Supprimer la le\u00E7on", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-play-circle5", "text-success", "fs-24", "me-1"], [1, "isax", "isax-document-text", "fs-24", "me-1", "text-info"], [1, "isax", "isax-document", "fs-24", "me-1", "text-danger"], [1, "badge", "bg-success", "ms-2"], [1, "ms-2", "text-muted", "small"], [1, "isax", "isax-video-circle", "me-1"], [1, "badge", "bg-info", "ms-2"], [1, "isax", "isax-document", "me-1"], [1, "badge", "bg-warning", "ms-2"], [1, "isax", "isax-document-text", "me-1"], [1, "badge", "ms-2", 2, "background", "#6f42c1", "color", "#fff"], [1, "isax", "isax-message-question5", "me-1"], ["title", "Supprimer la vid\u00E9o", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["title", "Supprimer le PDF", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["title", "Supprimer l'article", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "text-center", "text-muted", "py-4"], [1, "isax", "isax-document-text", "fs-32", "d-block", "mb-2"], [1, "input-block", "mb-2"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", "mb-1", 3, "ngModelChange", "ngModel"], ["class", "text-success fw-medium", 4, "ngIf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-success", "fw-medium"], [1, "isax", "isax-save", "me-1"], [1, "isax", "isax-send", "me-1"], [1, "text-muted", "fs-12"], ["type", "text", "placeholder", "https://youtube.com/watch?v=...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-success"], ["type", "text", "placeholder", "Ex: Introduction \u00E0 HTML", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-label", "d-block", "mb-1"], [1, "d-flex", "gap-3"], ["type", "radio", "name", "editLessonAccess", "id", "editFree", 1, "form-check-input", 3, "ngModelChange", "value", "ngModel"], ["for", "editFree", 1, "form-check-label"], ["type", "radio", "name", "editLessonAccess", "id", "editPremium", 1, "form-check-input", 3, "ngModelChange", "value", "ngModel"], ["for", "editPremium", 1, "form-check-label"], [1, "isax", "isax-paperclip", "me-1"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-1"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 3, "click", "title"], [2, "font-size", "12px"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer la vid\u00E9o", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer le PDF", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer l'article", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["title", "Supprimer la vid\u00E9o", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["title", "Supprimer le PDF", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["title", "Supprimer l'article", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "text-success", 2, "font-size", "12px"], [1, "fa-solid", "fa-circle-check", "me-1"], [1, "modal-body", 2, "max-height", "80vh", "overflow-y", "auto"], ["class", "mb-4", 4, "ngIf"], ["class", "text-center text-muted py-5", 4, "ngIf"], [1, "mb-4"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "badge", "bg-success"], ["controls", "", 1, "w-100", "rounded", 2, "max-height", "420px", "background", "#000", 3, "src"], [1, "badge", "bg-danger"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-danger", 3, "href"], [1, "isax", "isax-export", "me-1"], [1, "w-100", "rounded", 2, "height", "500px", "border", "1px solid #dee2e6", 3, "src"], [1, "badge", "bg-warning", "text-dark"], [1, "isax", "isax-edit", "me-1"], [1, "text-muted", 2, "font-size", "11px", "font-weight", "400"], [1, "article-preview-body", "p-4", "bg-light", "rounded", "border", 2, "font-size", "15px", "line-height", "1.7", 3, "innerHTML"], [1, "text-center", "text-muted", "py-5"]],
      template: function AddCourseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AddCourseComponent_div_5_Template, 3, 1, "div", 5)(6, AddCourseComponent_div_6_Template, 4, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "div", 10)(11, "span", 11)(12, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "01");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 15)(17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Informations du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "li", 9)(20, "div", 10)(21, "span", 11)(22, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "02");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 15)(27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "M\u00E9dias du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li", 9)(30, "div", 10)(31, "span", 11)(32, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 15)(37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "M\u00E9dias du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "li", 9)(40, "div", 10)(41, "span", 11)(42, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "04");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 15)(47, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Informations compl\u00E9mentaires");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "li", 9)(50, "div", 10)(51, "span", 11)(52, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "05");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 15)(57, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Informations du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 16)(60, "fieldset", 17)(61, "div", 18)(62, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Informations de base");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 2)(65, "div", 19)(66, "div", 20)(67, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Titre du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step1.title, $event) || (ctx.step1.title = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 24)(73, "div", 20)(74, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Cat\u00E9gorie du cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "(facultative)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_78_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step1.categoryId, $event) || (ctx.step1.categoryId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "-- Aucune cat\u00E9gorie --");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, AddCourseComponent_option_81_Template, 2, 2, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 24)(83, "div", 20)(84, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Niveau");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step1.level, $event) || (ctx.step1.level = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "D\u00E9butant");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Interm\u00E9diaire");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Avanc\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Expert");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 24)(98, "div", 20)(99, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, "Langue");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step1.language, $event) || (ctx.step1.language = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Fran\u00E7ais");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "English");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Arabe");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Deutsch");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 19)(113, "div", 20)(114, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Description courte");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_116_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step1.shortDescription, $event) || (ctx.step1.shortDescription = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "div", 19)(118, "div", 20)(119, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "Description du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "textarea", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_textarea_ngModelChange_123_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step1.description, $event) || (ctx.step1.description = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 39)(125, "div", 40)(126, "h6", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127, "Que vont apprendre les \u00E9tudiants ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, AddCourseComponent_div_128_Template, 5, 1, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 43)(130, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_a_click_130_listener() {
            return ctx.addObjective();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](131, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](132, " Ajouter un \u00E9l\u00E9ment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "div", 39)(134, "div", 40)(135, "h6", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "Pr\u00E9requis");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](137, AddCourseComponent_div_137_Template, 5, 1, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 43)(139, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_a_click_139_listener() {
            return ctx.addRequirement();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](140, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, " Ajouter un \u00E9l\u00E9ment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "div", 46)(143, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_143_listener() {
            return ctx.saveStep1();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](144, AddCourseComponent_span_144_Template, 1, 0, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](146, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "fieldset", 17)(148, "div", 18)(149, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](150, "M\u00E9dias du cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](152, "Choisissez une image de couverture parmi les mod\u00E8les disponibles ou uploadez la v\u00F4tre.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "div", 2)(154, "div", 50)(155, "ul", 51)(156, "li", 52)(157, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_157_listener() {
            return ctx.coverTab = "preset";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](158, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "Choisir un mod\u00E8le ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "li", 52)(161, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_161_listener() {
            return ctx.coverTab = "upload";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](162, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "Uploader une image ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](164, AddCourseComponent_div_164_Template, 5, 3, "div", 56)(165, AddCourseComponent_ng_container_165_Template, 8, 2, "ng-container", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 58)(167, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](168, "URL Vid\u00E9o d'intro (optionnel)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_169_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.introVideoUrl, $event) || (ctx.introVideoUrl = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 60)(171, "div", 61)(172, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_172_listener() {
            return ctx.selectedFieldSet[0] = 0;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](173, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174, "Pr\u00E9c\u00E9dent ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "div", 61)(176, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_176_listener() {
            return ctx.saveStep2();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](177, AddCourseComponent_span_177_Template, 1, 0, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, " Suivant ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](179, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "fieldset", 17)(181, "div", 18)(182, "div", 65)(183, "div", 39)(184, "h5", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "Curriculum");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "div", 67)(187, "button", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_187_listener() {
            return ctx.openAddSectionModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](188, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](189, " Ajouter une section ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](191, AddCourseComponent_div_191_Template, 11, 4, "div", 71)(192, AddCourseComponent_div_192_Template, 3, 0, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "div", 60)(194, "div", 61)(195, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_195_listener() {
            return ctx.selectedFieldSet[0] = 1;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](196, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "Pr\u00E9c\u00E9dent ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "div", 61)(199, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_199_listener() {
            return ctx.selectedFieldSet[0] = 3;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](200, " Suivant ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](201, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "fieldset", 17)(203, "div", 18)(204, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205, "Informations compl\u00E9mentaires");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "div", 2)(207, "div", 19)(208, "div", 20)(209, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](210, "Mots-cl\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](211, "input", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](213, "Maximum 14 mots-cl\u00E9s en minuscules.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](214, "div", 19)(215, "div", 20)(216, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](217, "Message au validateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](218, "textarea", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "div", 19)(220, "div", 78)(221, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](222, "input", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](223, "label", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](224, " Toutes les ressources utilis\u00E9es dans ce cours m'appartiennent ou sont correctement licenci\u00E9es. Je dispose de tous les droits pour vendre ce contenu. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "div", 60)(226, "div", 61)(227, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_227_listener() {
            return ctx.selectedFieldSet[0] = 2;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](228, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](229, "Pr\u00E9c\u00E9dent ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](230, "div", 61)(231, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_231_listener() {
            return ctx.selectedFieldSet[0] = 4;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](232, " Next ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](233, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](234, "fieldset", 17)(235, "div", 18)(236, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "Tarification");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "div", 2)(239, "div", 82)(240, "div", 83)(241, "div", 79)(242, "input", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_242_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step5.isFree, $event) || (ctx.step5.isFree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](243, "label", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](244, "This is a free course");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](245, "div", 86)(246, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "Course Price (\u20AC)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](248, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_248_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step5.price, $event) || (ctx.step5.price = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](249, "div", 83)(250, "div", 79)(251, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_251_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.step5.hasDiscount, $event) || (ctx.step5.hasDiscount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](252, "label", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](253, "Apply a discount price");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](254, AddCourseComponent_ng_container_254_Template, 10, 3, "ng-container", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](255, "div", 60)(256, "div", 61)(257, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_257_listener() {
            return ctx.selectedFieldSet[0] = 3;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](258, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "Prev ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "div", 90)(261, "button", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_261_listener() {
            return ctx.saveDraft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](262, AddCourseComponent_span_262_Template, 1, 0, "span", 48)(263, AddCourseComponent_i_263_Template, 1, 0, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](264, " Enregistrer brouillon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](265, "button", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_265_listener() {
            return ctx.submitCourse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](266, AddCourseComponent_span_266_Template, 1, 0, "span", 48)(267, AddCourseComponent_i_267_Template, 1, 0, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](268, " Soumettre pour r\u00E9vision ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](269, "div", 95)(270, "div", 96)(271, "div", 97)(272, "div", 98)(273, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](274, "Add New Section");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](275, "button", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](276, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](277, "div", 101)(278, "div", 20)(279, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](280, "Section Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](281, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](282, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "input", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_283_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.newSectionTitle, $event) || (ctx.newSectionTitle = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](284, "div", 103)(285, "button", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](286, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](287, "button", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_287_listener() {
            return ctx.confirmAddSection();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](288, " Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](289, "div", 106)(290, "div", 96)(291, "div", 97)(292, "div", 98)(293, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "New Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "button", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](296, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](297, "div", 101)(298, "div", 86)(299, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](300, "Lesson Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](301, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](302, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](303, "input", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_303_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.newLesson.title, $event) || (ctx.newLesson.title = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](304, "div", 86)(305, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](306, " Ic\u00F4ne principale ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](307, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](308, "\u2014 utilis\u00E9e dans le curriculum");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](309, "select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_309_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.newLesson.type, $event) || (ctx.newLesson.type = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](310, "option", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](311, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](312, " Vid\u00E9o");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](313, "option", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](314, "Article / Texte");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](315, "option", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](316, "PDF");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](317, AddCourseComponent_div_317_Template, 6, 1, "div", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](318, "div", 114)(319, "div", 115)(320, "span", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](321, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](322, "span", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](323, "i", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](324, "span", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](325, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](326, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](327, "Multi-contenu support\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](328, AddCourseComponent_ng_container_328_Template, 5, 0, "ng-container", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](329, "div", 78)(330, "div", 121)(331, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_331_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.newLesson.isFree, $event) || (ctx.newLesson.isFree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](332, "label", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](333, "Free Preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](334, "div", 124)(335, "input", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_335_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.newLesson.isFree, $event) || (ctx.newLesson.isFree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](336, "label", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](337, "Premium");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](338, "div", 103)(339, "button", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](340, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](341, "button", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_341_listener() {
            return ctx.confirmAddLesson();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](342, "Ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](343, "div", 127)(344, "div", 128)(345, "div", 97)(346, "div", 98)(347, "h5", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](348, "i", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](349, "Modifier la le\u00E7on");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](350, "button", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](351, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](352, AddCourseComponent_div_352_Template, 42, 26, "div", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](353, "div", 103)(354, "button", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](355, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](356, "button", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_356_listener() {
            return ctx.confirmEditLesson();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](357, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](358, "Enregistrer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](359, "div", 135)(360, "div", 96)(361, "div", 97)(362, "div", 136)(363, "div", 137)(364, "div", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](365, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](366, "h5", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](367, "Cours soumis avec succ\u00E8s !");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](368, "p", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](369, "Votre cours est maintenant en cours de r\u00E9vision. Une fois approuv\u00E9, il sera mis en ligne.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](370, "div", 141)(371, "a", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](372, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](373, "Mes cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](374, "a", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](375, " Voir mes cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](376, "div", 144)(377, "div", 145)(378, "div", 146)(379, "div", 147)(380, "div", 148)(381, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](382, "i", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](383, "div")(384, "div", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](385, "R\u00E9daction");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](386, "div", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](387);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](388, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](389, AddCourseComponent_span_389_Template, 3, 0, "span", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](390, "button", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_390_listener() {
            return ctx.saveArticle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](391, "i", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](392);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](393, "button", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](394, "div", 158)(395, "span", 159)(396, "select", 160)(397, "option", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](398, "Titre\u00A01");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](399, "option", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](400, "Titre\u00A02");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](401, "option", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](402, "Titre\u00A03");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](403, "option", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](404, "Normal");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](405, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](406, "button", 165)(407, "button", 166)(408, "button", 167)(409, "button", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](410, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](411, "button", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](412, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](413, "button", 170)(414, "button", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](415, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](416, "button", 172)(417, "button", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](418, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](419, "select", 174)(420, "select", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](421, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](422, "button", 176)(423, "button", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](424, "span", 159)(425, "select", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](426, "option", 164)(427, "option", 179)(428, "option", 180)(429, "option", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](430, "span", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](431, "button", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](432, "div", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](433, "div", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](434, "div", 185)(435, "div", 186)(436, "div", 97)(437, "div", 187)(438, "h5", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](439, "i", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](440, " Aper\u00E7u \u2014 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](441, "span", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](442);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](443, "button", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](444, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](445, AddCourseComponent_div_445_Template, 5, 4, "div", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](446, "div", 192)(447, "button", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](448, "Fermer");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.successMsg);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](67, _c0, ctx.selectedFieldSet[0] === 0, ctx.selectedFieldSet[0] > 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](70, _c0, ctx.selectedFieldSet[0] === 1, ctx.selectedFieldSet[0] > 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](73, _c0, ctx.selectedFieldSet[0] === 2, ctx.selectedFieldSet[0] > 2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](76, _c0, ctx.selectedFieldSet[0] === 3, ctx.selectedFieldSet[0] > 3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](79, _c0, ctx.selectedFieldSet[0] === 4, ctx.selectedFieldSet[0] > 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](82, _c1, ctx.selectedFieldSet[0] === 0 ? "block" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step1.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step1.categoryId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step1.level);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step1.language);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step1.shortDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step1.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.objectives)("ngForTrackBy", ctx.trackByIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.requirements)("ngForTrackBy", ctx.trackByIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](84, _c1, ctx.selectedFieldSet[0] === 1 ? "block" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.coverTab === "preset");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.coverTab === "upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.coverTab === "preset");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.coverTab === "upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.introVideoUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](86, _c1, ctx.selectedFieldSet[0] === 2 ? "block" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sections);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sections.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](88, _c1, ctx.selectedFieldSet[0] === 3 ? "block" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](90, _c1, ctx.selectedFieldSet[0] === 4 ? "block" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step5.isFree);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx.step5.isFree ? "none" : "block");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step5.price);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.step5.hasDiscount);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.step5.hasDiscount);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.newSectionTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.newLesson.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.newLesson.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.newLesson.type === "VIDEO");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.newLesson.type === "TEXT");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.newLesson.isFree);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.newLesson.isFree);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editLessonModel);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.instructorCourse);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.instructorCourse);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.articleLesson == null ? null : ctx.articleLesson.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.articleSaved);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.articleSaving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.articleSaving ? "Sauvegarde\u2026" : "Sauvegarder", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.previewLesson == null ? null : ctx.previewLesson.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.previewLesson);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _shared_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe],
      styles: [".cover-tab-nav[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.cover-tab-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #6b7280;\n  background: #f9fafb;\n  font-size: 0.875rem;\n  padding: 7px 16px;\n  transition: all 0.2s;\n}\n.cover-tab-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n}\n.cover-tab-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: #6366f1;\n  color: #6366f1;\n  background: #eff6ff;\n}\n\n.preset-image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n\n.preset-image-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  cursor: pointer;\n  aspect-ratio: 16/9;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.preset-image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.2s;\n}\n.preset-image-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.3137254902);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.18);\n}\n.preset-image-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.preset-image-item.selected[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);\n}\n.preset-image-item[_ngcontent-%COMP%]   .preset-check[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(99, 102, 241, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: #fff;\n}\n\n\n\n.add-course-item[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-step[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n\n.add-course-item[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-step[_ngcontent-%COMP%]   .step-section[_ngcontent-%COMP%] {\n  min-height: 34px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.add-course-item[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-step[_ngcontent-%COMP%]   .step-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  line-height: 1.2;\n  font-size: 13px;\n}\n\n@media (max-width: 991.98px) {\n  .add-course-item[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-step[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .add-course-item[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-step[_ngcontent-%COMP%]   .step-section[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY291cnNlcy9hZGQtY291cnNlL2FkZC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxRQUFBO0FBQUY7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFBTjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUFKRjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUpKO0FBT0U7RUFDRSw4Q0FBQTtFQUNBLCtDQUFBO0FBTEo7QUFPSTtFQUFNLHNCQUFBO0FBSlY7QUFPRTtFQUNFLHFCQUFBO0VBQ0EsOENBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTko7O0FBVUEsd0ZBQUE7QUFDQTtFQUNFLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUE7RUFDRTtJQUNFLGdCQUFBO0VBUEY7RUFVQTtJQUNFLGdCQUFBO0VBUkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUYWIgbmF2aWdhdGlvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmNvdmVyLXRhYi1uYXYge1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiAjNmI3MjgwO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBwYWRkaW5nOiA3cHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjM2NmYxO1xyXG4gICAgICBib3JkZXItY29sb3I6ICM2MzY2ZjE7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xyXG4gICAgICBjb2xvcjogIzYzNjZmMTtcclxuICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQcmVzZXQgaW1hZ2UgZ3JpZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnByZXNldC1pbWFnZS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5wcmVzZXQtaW1hZ2UtaXRlbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxNTA7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoOTksMTAyLDI0MSwuMTgpO1xyXG5cclxuICAgIGltZyB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7IH1cclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoOTksMTAyLDI0MSwuMjUpO1xyXG4gIH1cclxuXHJcbiAgLnByZXNldC1jaGVjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwuMzUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLyogS2VlcCB3aXphcmQgY2FwdGlvbnMgYWxpZ25lZCBhY3Jvc3MgYWxsIDUgc3RlcHMgKG5vdGFibHkgXCJBZGRpdGlvbmFsIGluZm9ybWF0aW9uXCIpLiAqL1xyXG4uYWRkLWNvdXJzZS1pdGVtIC53aXphcmQgLmZvcm0td2l6YXJkLXN0ZXBzIGxpIC5wcm9maWxlLXN0ZXAge1xyXG4gIG1pbi1oZWlnaHQ6IDcycHg7XHJcbn1cclxuXHJcbi5hZGQtY291cnNlLWl0ZW0gLndpemFyZCAuZm9ybS13aXphcmQtc3RlcHMgbGkgLnByb2ZpbGUtc3RlcCAuc3RlcC1zZWN0aW9uIHtcclxuICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtY291cnNlLWl0ZW0gLndpemFyZCAuZm9ybS13aXphcmQtc3RlcHMgbGkgLnByb2ZpbGUtc3RlcCAuc3RlcC1zZWN0aW9uIHAge1xyXG4gIG1hcmdpbjogOHB4IDAgMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLmFkZC1jb3Vyc2UtaXRlbSAud2l6YXJkIC5mb3JtLXdpemFyZC1zdGVwcyBsaSAucHJvZmlsZS1zdGVwIHtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuYWRkLWNvdXJzZS1pdGVtIC53aXphcmQgLmZvcm0td2l6YXJkLXN0ZXBzIGxpIC5wcm9maWxlLXN0ZXAgLnN0ZXAtc2VjdGlvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AddCourseComponent;
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
//# sourceMappingURL=9907.js.map