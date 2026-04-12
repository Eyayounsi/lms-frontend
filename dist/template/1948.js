"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[1948],{

/***/ 51948:
/*!*******************************************************************************!*\
  !*** ./src/app/features/admin/admin-categories/admin-categories.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCategoriesComponent: () => (/* binding */ AdminCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);







function AdminCategoriesComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chargement\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AdminCategoriesComponent_div_44_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_44_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r1.searchTerm = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminCategoriesComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminCategoriesComponent_div_44_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AdminCategoriesComponent_div_44_Template_input_ngModelChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AdminCategoriesComponent_div_44_span_5_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.searchTerm);
  }
}
function AdminCategoriesComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucune cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_45_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openCreate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Nouvelle cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.searchTerm ? "Aucun r\u00E9sultat pour \"" + ctx_r1.searchTerm + "\"" : "Cr\u00E9ez votre premi\u00E8re cat\u00E9gorie de cours");
  }
}
function AdminCategoriesComponent_div_45_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 63)(1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 67)(9, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "code", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 70)(15, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_45_div_2_tr_17_Template_button_click_15_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openEdit(cat_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_45_div_2_tr_17_Template_button_click_17_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openDelete(cat_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getCategoryColorClass(cat_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.displayIcon(cat_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r6.description || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r6.slug);
  }
}
function AdminCategoriesComponent_div_45_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55)(1, "table", 56)(2, "thead", 57)(3, "tr")(4, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Ic\u00F4ne");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Slug");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AdminCategoriesComponent_div_45_div_2_tr_17_Template, 19, 7, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCategories);
  }
}
function AdminCategoriesComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminCategoriesComponent_div_45_div_1_Template, 10, 1, "div", 46)(2, AdminCategoriesComponent_div_45_div_2_Template, 18, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredCategories.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredCategories.length > 0);
  }
}
function AdminCategoriesComponent_div_46_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_46_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.form.icon = "isax isax-book-1");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AdminCategoriesComponent_div_46_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_46_button_22_Template_button_click_0_listener() {
      const preset_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectTemplateIcon(preset_r11.iconClass));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const preset_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.displayIcon(ctx_r1.form.icon) === preset_r11.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", preset_r11.color)("title", preset_r11.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](preset_r11.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](preset_r11.label);
  }
}
function AdminCategoriesComponent_div_46_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 108);
  }
}
function AdminCategoriesComponent_div_46_i_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 109);
  }
}
function AdminCategoriesComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "div", 78)(4, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_46_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 81)(9, "div", 82)(10, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Ic\u00F4ne de la cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 85)(14, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 88)(17, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminCategoriesComponent_div_46_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.icon, $event) || (ctx_r1.form.icon = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Classe d'ic\u00F4ne ou choisissez ci-dessous.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdminCategoriesComponent_div_46_button_20_Template, 2, 0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AdminCategoriesComponent_div_46_button_22_Template, 4, 7, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 94)(24, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminCategoriesComponent_div_46_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 94)(30, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "textarea", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminCategoriesComponent_div_46_Template_textarea_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 99)(34, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_46_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_46_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AdminCategoriesComponent_div_46_span_37_Template, 1, 0, "span", 102)(38, AdminCategoriesComponent_div_46_i_38_Template, 1, 0, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinterpolate1"]("ti ti-", ctx_r1.editId ? "edit" : "plus", " me-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.editId ? "Modifier la cat\u00E9gorie" : "Nouvelle cat\u00E9gorie", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.displayIcon(ctx_r1.form.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.form.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.selectableIconPresets);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.form.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.saving || !ctx_r1.form.name.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
function AdminCategoriesComponent_div_47_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 108);
  }
}
function AdminCategoriesComponent_div_47_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 74);
  }
}
function AdminCategoriesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 75)(1, "div", 110)(2, "div", 77)(3, "div", 111)(4, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Cette action est irr\u00E9versible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Les cours li\u00E9s n'auront plus de cat\u00E9gorie assign\u00E9e. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 115)(16, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_47_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_div_47_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AdminCategoriesComponent_div_47_span_19_Template, 1, 0, "span", 102)(20, AdminCategoriesComponent_div_47_i_20_Template, 1, 0, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.categoryToDelete == null ? null : ctx_r1.categoryToDelete.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.deleting);
  }
}
const DEFAULT_CATEGORY_ICON = 'fa-solid fa-layer-group';
/**
 * Presets synchronisés avec getCategoryIconClass() de home.component.ts.
 * color = classe CSS admin utilisée uniquement pour la grille de sélection.
 */
const CATEGORY_TEMPLATE_ICON_PRESETS = [
// ── Technologie & Dev ───────────────────────────────────
{
  label: 'Dév. Web',
  iconClass: 'fa-solid fa-code',
  color: 'cat-p-indigo'
}, {
  label: 'Frontend',
  iconClass: 'fa-solid fa-display',
  color: 'cat-p-indigo'
}, {
  label: 'Backend / API',
  iconClass: 'fa-solid fa-server',
  color: 'cat-p-indigo'
}, {
  label: 'DevOps / CI/CD',
  iconClass: 'fa-solid fa-infinity',
  color: 'cat-p-amber'
}, {
  label: 'DevSecOps',
  iconClass: 'fa-solid fa-shield-halved',
  color: 'cat-p-red'
}, {
  label: 'Cyber Sécurité',
  iconClass: 'fa-solid fa-shield-halved',
  color: 'cat-p-red'
}, {
  label: 'Cloud & Infra',
  iconClass: 'fa-solid fa-cloud',
  color: 'cat-p-sky'
}, {
  label: 'Réseaux',
  iconClass: 'fa-solid fa-network-wired',
  color: 'cat-p-teal'
}, {
  label: 'Mobile Apps',
  iconClass: 'fa-solid fa-mobile-screen',
  color: 'cat-p-teal'
}, {
  label: 'Bases de données',
  iconClass: 'fa-solid fa-database',
  color: 'cat-p-indigo'
}, {
  label: 'Blockchain',
  iconClass: 'fa-solid fa-cubes',
  color: 'cat-p-purple'
}, {
  label: 'Architecture',
  iconClass: 'fa-solid fa-sitemap',
  color: 'cat-p-slate'
}, {
  label: 'Tests / QA',
  iconClass: 'fa-solid fa-vial-circle-check',
  color: 'cat-p-slate'
}, {
  label: 'Automatisation',
  iconClass: 'fa-solid fa-robot',
  color: 'cat-p-slate'
}, {
  label: 'Systèmes / OS',
  iconClass: 'fa-solid fa-microchip',
  color: 'cat-p-slate'
},
// ── IA & Data ────────────────────────────────────────────
{
  label: 'IA / Machine Learning',
  iconClass: 'fa-solid fa-brain',
  color: 'cat-p-purple'
}, {
  label: 'Data Science',
  iconClass: 'fa-solid fa-chart-line',
  color: 'cat-p-purple'
}, {
  label: 'Data Analytics',
  iconClass: 'fa-solid fa-magnifying-glass-chart',
  color: 'cat-p-purple'
},
// ── Design & Créativité ──────────────────────────────────
{
  label: 'UI/UX Design',
  iconClass: 'fa-solid fa-pen-ruler',
  color: 'cat-p-pink'
}, {
  label: 'Design Graphique',
  iconClass: 'fa-solid fa-palette',
  color: 'cat-p-pink'
}, {
  label: 'Illustration',
  iconClass: 'fa-solid fa-paintbrush',
  color: 'cat-p-pink'
}, {
  label: 'Photographie',
  iconClass: 'fa-solid fa-camera-retro',
  color: 'cat-p-amber'
}, {
  label: 'Vidéo / Montage',
  iconClass: 'fa-solid fa-film',
  color: 'cat-p-amber'
}, {
  label: 'Musique / Audio',
  iconClass: 'fa-solid fa-music',
  color: 'cat-p-amber'
},
// ── Business & Marketing ─────────────────────────────────
{
  label: 'Marketing Digital',
  iconClass: 'fa-solid fa-chart-line',
  color: 'cat-p-emerald'
}, {
  label: 'E-commerce',
  iconClass: 'fa-solid fa-bag-shopping',
  color: 'cat-p-emerald'
}, {
  label: 'Entrepreneuriat',
  iconClass: 'fa-solid fa-lightbulb',
  color: 'cat-p-emerald'
}, {
  label: 'Vente / Sales',
  iconClass: 'fa-solid fa-handshake',
  color: 'cat-p-emerald'
}, {
  label: 'Gestion de projet',
  iconClass: 'fa-solid fa-list-check',
  color: 'cat-p-emerald'
},
// ── Finance & Droit ──────────────────────────────────────
{
  label: 'Finance',
  iconClass: 'fa-solid fa-wallet',
  color: 'cat-p-yellow'
}, {
  label: 'Comptabilité',
  iconClass: 'fa-solid fa-receipt',
  color: 'cat-p-yellow'
}, {
  label: 'Droit / Légal',
  iconClass: 'fa-solid fa-scale-balanced',
  color: 'cat-p-yellow'
},
// ── Soft Skills & Perso ──────────────────────────────────
{
  label: 'Communication',
  iconClass: 'fa-solid fa-language',
  color: 'cat-p-blue'
}, {
  label: 'Leadership',
  iconClass: 'fa-solid fa-people-group',
  color: 'cat-p-blue'
}, {
  label: 'Soft Skills',
  iconClass: 'fa-solid fa-user-gear',
  color: 'cat-p-blue'
}, {
  label: 'Productivité',
  iconClass: 'fa-solid fa-bolt',
  color: 'cat-p-blue'
}, {
  label: 'Carrière',
  iconClass: 'fa-solid fa-briefcase',
  color: 'cat-p-blue'
},
// ── Santé & Éducation ────────────────────────────────────
{
  label: 'Santé & Bien-être',
  iconClass: 'fa-solid fa-heart-pulse',
  color: 'cat-p-rose'
}, {
  label: 'Éducation',
  iconClass: 'fa-solid fa-graduation-cap',
  color: 'cat-p-rose'
}, {
  label: 'Sport & Fitness',
  iconClass: 'fa-solid fa-dumbbell',
  color: 'cat-p-rose'
},
// ── Générique ────────────────────────────────────────────
{
  label: 'Général',
  iconClass: 'fa-solid fa-layer-group',
  color: 'cat-p-slate'
}, {
  label: 'Livre / Cours',
  iconClass: 'fa-solid fa-book-open',
  color: 'cat-p-slate'
}, {
  label: 'Certificats',
  iconClass: 'fa-solid fa-certificate',
  color: 'cat-p-slate'
}, {
  label: 'Communauté',
  iconClass: 'fa-solid fa-users',
  color: 'cat-p-slate'
}];
const CATEGORY_TEMPLATE_ICON_CLASSES = Array.from(new Set(CATEGORY_TEMPLATE_ICON_PRESETS.map(preset => preset.iconClass)));
let AdminCategoriesComponent = /*#__PURE__*/(() => {
  class AdminCategoriesComponent {
    courseService;
    categories = [];
    filteredCategories = [];
    loading = true;
    searchTerm = '';
    // Formulaire créer / modifier
    showForm = false;
    editId = null;
    form = {
      name: '',
      description: '',
      icon: ''
    };
    saving = false;
    CATEGORY_TEMPLATE_ICON_PRESETS = CATEGORY_TEMPLATE_ICON_PRESETS;
    getCategoryColorClass(categoryName) {
      const name = (categoryName || '').toLowerCase();
      if (name.includes('devsecops') || name.includes('devsec')) return 'cat-p-red';
      if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'cat-p-sky';
      if (name.includes('cyber') || name.includes('securit')) return 'cat-p-red';
      if (name.includes('devops') || name.includes('cicd') || name.includes(' ops')) return 'cat-p-amber';
      if (name.includes('network') || name.includes('réseau') || name.includes('reseaux')) return 'cat-p-teal';
      if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter')) return 'cat-p-teal';
      if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'cat-p-pink';
      if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'cat-p-emerald';
      if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('code')) return 'cat-p-indigo';
      if (name.includes('data') || name.includes(' ia') || name.includes(' ai') || name.includes('machine') || name.includes('intelligence')) return 'cat-p-purple';
      if (name.includes('photo') || name.includes('video') || name.includes('media')) return 'cat-p-amber';
      if (name.includes('finance') || name.includes('compta')) return 'cat-p-yellow';
      if (name.includes('health') || name.includes('sant')) return 'cat-p-rose';
      if (name.includes('lang') || name.includes('communication')) return 'cat-p-blue';
      return 'cat-p-slate';
    }
    get selectableIconPresets() {
      const currentIcon = this.normalizeIconValue(this.form.icon);
      if (!currentIcon || CATEGORY_TEMPLATE_ICON_CLASSES.includes(currentIcon)) {
        return this.CATEGORY_TEMPLATE_ICON_PRESETS;
      }
      return [{
        label: 'Icône actuelle',
        iconClass: currentIcon,
        color: 'cat-p-slate'
      }, ...this.CATEGORY_TEMPLATE_ICON_PRESETS];
    }
    // Confirmation suppression
    showDeleteModal = false;
    categoryToDelete = null;
    deleting = false;
    constructor(courseService) {
      this.courseService = courseService;
    }
    ngOnInit() {
      this.load();
    }
    load() {
      this.loading = true;
      this.courseService.getCategories().subscribe({
        next: data => {
          this.categories = data;
          this.applyFilters();
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    applyFilters() {
      const term = this.searchTerm.toLowerCase().trim();
      this.filteredCategories = !term ? this.categories : this.categories.filter(c => c.name?.toLowerCase().includes(term) || c.description?.toLowerCase().includes(term));
    }
    openCreate() {
      this.editId = null;
      this.form = {
        name: '',
        description: '',
        icon: DEFAULT_CATEGORY_ICON
      };
      this.showForm = true;
    }
    openEdit(cat) {
      this.editId = cat.id;
      const iconValue = this.normalizeIconValue(cat.icon);
      this.form = {
        name: cat.name,
        description: cat.description || '',
        icon: iconValue
      };
      this.showForm = true;
    }
    cancelForm() {
      this.showForm = false;
      this.editId = null;
    }
    save() {
      if (!this.form.name.trim()) return;
      this.saving = true;
      const payload = {
        ...this.form,
        icon: this.normalizeIconValue(this.form.icon)
      };
      const obs = this.editId ? this.courseService.updateCategory(this.editId, payload) : this.courseService.createCategory(payload);
      obs.subscribe({
        next: () => {
          this.saving = false;
          this.showForm = false;
          this.showToast('success', this.editId ? 'Catégorie mise à jour !' : 'Catégorie créée !');
          this.editId = null;
          this.load();
        },
        error: e => {
          this.saving = false;
          this.showToast('error', e?.error?.message || 'Erreur lors de l\'enregistrement.');
        }
      });
    }
    displayIcon(value) {
      return this.normalizeIconValue(value);
    }
    selectTemplateIcon(iconClass) {
      this.form.icon = iconClass;
    }
    normalizeIconValue(value) {
      if (!value || value.startsWith('preset-img:') || value.startsWith('isax ')) {
        return DEFAULT_CATEGORY_ICON;
      }
      return value;
    }
    openDelete(cat) {
      this.categoryToDelete = cat;
      this.showDeleteModal = true;
    }
    closeDelete() {
      this.showDeleteModal = false;
      this.categoryToDelete = null;
    }
    confirmDelete() {
      if (!this.categoryToDelete) return;
      this.deleting = true;
      this.courseService.deleteCategory(this.categoryToDelete.id).subscribe({
        next: () => {
          this.deleting = false;
          this.closeDelete();
          this.showToast('success', 'Catégorie supprimée.');
          this.load();
        },
        error: e => {
          this.deleting = false;
          this.showToast('error', e?.error?.message || 'Erreur lors de la suppression.');
          this.closeDelete();
        }
      });
    }
    showToast(type, msg) {
      const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
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
    static ɵfac = function AdminCategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdminCategoriesComponent,
      selectors: [["app-admin-categories"]],
      decls: 48,
      vars: 7,
      consts: [[1, "page-content"], [1, "cat-hero", "mb-4"], [1, "cat-glow", "cat-glow-1"], [1, "cat-glow", "cat-glow-2"], [1, "cat-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "cat-av-wrap"], [1, "cat-av-ring"], [1, "cat-av-border"], [1, "cat-av-circle"], [1, "ti", "ti-tags", 2, "font-size", "26px", "color", "#fff"], [1, "cat-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "cat-chip"], [1, "ti", "ti-category", "me-1", 2, "font-size", "9px"], [1, "cat-live"], [1, "cat-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], [1, "cat-glass", "d-none", "d-md-flex", "align-items-center"], [1, "cat-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.55)", "font-size", "10px"], [1, "cat-stat-div"], [1, "cat-refresh", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-plus", 2, "font-size", "14px"], ["class", "text-center py-5", 4, "ngIf"], ["class", "ac-card mb-4 p-3", 4, "ngIf"], ["class", "ac-card", 4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "style", "background-color:rgba(15,23,42,.55);backdrop-filter:blur(4px)", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", 2, "color", "#0d9488"], [1, "mt-2", "text-muted"], [1, "ac-card", "mb-4", "p-3"], [1, "input-group"], [1, "input-group-text", "bg-transparent", "border-end-0", 2, "border-color", "#e2e8f0"], [1, "ti", "ti-search", "text-muted"], ["type", "text", "placeholder", "Rechercher par nom ou description\u2026", 1, "form-control", "border-start-0", "ps-0", 2, "border-color", "#e2e8f0", 3, "ngModelChange", "ngModel"], ["class", "input-group-text bg-transparent border-start-0", "style", "border-color:#e2e8f0;cursor:pointer", 3, "click", 4, "ngIf"], [1, "input-group-text", "bg-transparent", "border-start-0", 2, "border-color", "#e2e8f0", "cursor", "pointer", 3, "click"], [1, "ti", "ti-x", "text-muted"], [1, "ac-card"], ["class", "ac-empty", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "ac-empty"], [1, "ac-empty-icon"], [1, "ti", "ti-tags"], [1, "fw-semibold", "text-secondary", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "cat-btn-primary", 3, "click"], [1, "ti", "ti-plus"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [2, "background", "linear-gradient(135deg,#f0fdfa,#ccfbf1)", "border-bottom", "2px solid rgba(13,148,136,.15)"], [1, "ps-4", "py-3", "text-muted", "small", "fw-semibold", 2, "width", "40px"], [1, "py-3", "text-muted", "small", "fw-semibold", 2, "width", "72px"], [1, "py-3", "text-muted", "small", "fw-semibold"], [1, "py-3", "text-muted", "small", "fw-semibold", "text-end", "pe-4", 2, "width", "130px"], ["class", "cat-row", 4, "ngFor", "ngForOf"], [1, "cat-row"], [1, "ps-4", "text-muted", "small"], [1, "cat-icon-badge", 3, "ngClass"], [1, "fw-semibold", 2, "color", "#0f172a"], [1, "text-muted", "small", 2, "max-width", "260px"], [1, "text-truncate", "d-block"], [1, "small", 2, "color", "#0d9488", "background", "rgba(13,148,136,.08)", "padding", "2px 8px", "border-radius", "6px"], [1, "text-end", "pe-4"], ["title", "Modifier", 1, "cat-btn-icon", "cat-btn-edit", "me-1", 3, "click"], [1, "ti", "ti-edit"], ["title", "Supprimer", 1, "cat-btn-icon", "cat-btn-del", 3, "click"], [1, "ti", "ti-trash"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(15,23,42,.55)", "backdrop-filter", "blur(4px)"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", "ac-modal-glass"], [1, "modal-header", "border-0", "pb-0", 2, "background", "linear-gradient(135deg,#0f766e,#0d9488)", "border-radius", "17px 17px 0 0", "padding", "20px 24px"], [1, "modal-title", "text-white", "fw-bold"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", 2, "padding", "22px 24px"], [1, "mb-4"], [1, "form-label", "fw-semibold", "mb-2", 2, "color", "#0f766e"], [1, "ti", "ti-palette", "me-1"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-3", "border", 2, "width", "52px", "height", "52px", "background", "#f0fdfa", "border-color", "#99f6e4!important", "flex-shrink", "0"], [2, "font-size", "1.7rem", "color", "#0d9488"], [1, "flex-grow-1"], ["type", "text", "placeholder", "Ex: isax isax-book-1 ou fa-solid fa-book", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-text"], ["type", "button", "class", "btn btn-sm btn-outline-danger flex-shrink-0", 3, "click", 4, "ngIf"], [1, "category-icons-grid"], ["type", "button", "class", "btn category-icon-btn", 3, "active", "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["type", "text", "placeholder", "Ex: D\u00E9veloppement Web", "autofocus", "", 1, "form-control", 2, "border-radius", "10px", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Description de la cat\u00E9gorie\u2026", 1, "form-control", 2, "border-radius", "10px", "resize", "none", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "border-0", "pt-0", 2, "padding", "16px 24px 20px"], [1, "btn", "btn-light", "fw-semibold", "px-4", "rounded-pill", 3, "click"], [1, "cat-btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "ti ti-check", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "flex-shrink-0", 3, "click"], [1, "ti", "ti-refresh"], ["type", "button", 1, "btn", "category-icon-btn", 3, "click", "ngClass", "title"], [1, "category-icon-label"], [1, "spinner-border", "spinner-border-sm"], [1, "ti", "ti-check"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "py-5", "px-4"], [1, "ac-confirm-ico", "mx-auto", "mb-3"], [1, "fw-bold", "mb-2"], [1, "text-muted", "small", "mb-4"], [1, "d-flex", "justify-content-center", "gap-3"], [1, "ac-btn-delete", "rounded-pill", "px-4", 3, "click", "disabled"], ["class", "ti ti-trash", 4, "ngIf"]],
      template: function AdminCategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "div", 14)(16, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Administration");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "ACTIF");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Gestion des Cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Organisez et structurez les cat\u00E9gories de cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "small", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 24)(36, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "small", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Affich\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminCategoriesComponent_Template_button_click_40_listener() {
            return ctx.openCreate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Nouvelle cat\u00E9gorie ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AdminCategoriesComponent_div_43_Template, 4, 0, "div", 30)(44, AdminCategoriesComponent_div_44_Template, 6, 2, "div", 31)(45, AdminCategoriesComponent_div_45_Template, 3, 2, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, AdminCategoriesComponent_div_46_Template, 40, 15, "div", 33)(47, AdminCategoriesComponent_div_47_Template, 22, 4, "div", 33);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.categories.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.filteredCategories.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.cat-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #FD3995 0%, #9b59b6 30%, #5625E8 62%, #02a8b5 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_cat-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(253, 57, 149, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.14);\n}\n.cat-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.cat-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.cat-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.cat-glow-1[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n  background: radial-gradient(circle, rgba(2, 168, 181, 0.22) 0%, transparent 70%);\n  top: -120px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_cat-float 7s ease-in-out infinite;\n}\n\n.cat-glow-2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  background: radial-gradient(circle, rgba(253, 57, 149, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_cat-float 9s ease-in-out infinite reverse;\n}\n\n\n\n.cat-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.cat-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(253, 164, 175, 0.55);\n  animation: _ngcontent-%COMP%_cat-rotate 12s linear infinite;\n}\n\n.cat-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #fda4af, #FD3995, #5625E8, #02a8b5);\n}\n\n.cat-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625E8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cat-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(253, 164, 175, 0.35);\n  animation: _ngcontent-%COMP%_cat-pulse 2.5s ease-out infinite;\n}\n\n\n\n.cat-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 16px;\n  padding: 10px 4px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n\n.cat-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 72px;\n}\n\n.cat-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n\n\n.cat-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.cat-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_cat-blink 1.2s ease-in-out infinite;\n}\n\n.cat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n\n\n.cat-refresh[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.cat-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  border-color: rgba(255, 255, 255, 0.45);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(57, 44, 125, 0.3);\n}\n\n\n\n.cat-row[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n\n.cat-row[_ngcontent-%COMP%]:hover {\n  background: #f5f3ff !important;\n}\n\n\n\n.cat-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n}\n\n\n\n.cat-icon-badge.cat-p-indigo[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #eef2ff, #c7d2fe);\n  color: #4338ca;\n}\n\n.cat-icon-badge.cat-p-sky[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e0f2fe, #bae6fd);\n  color: #0369a1;\n}\n\n.cat-icon-badge.cat-p-red[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff1f2, #fecdd3);\n  color: #be123c;\n}\n\n.cat-icon-badge.cat-p-amber[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff7ed, #fed7aa);\n  color: #c2410c;\n}\n\n.cat-icon-badge.cat-p-purple[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #faf5ff, #e9d5ff);\n  color: #7e22ce;\n}\n\n.cat-icon-badge.cat-p-pink[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fdf2f8, #fbcfe8);\n  color: #be185d;\n}\n\n.cat-icon-badge.cat-p-teal[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0fdfa, #99f6e4);\n  color: #0f766e;\n}\n\n.cat-icon-badge.cat-p-emerald[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0fdf4, #bbf7d0);\n  color: #15803d;\n}\n\n.cat-icon-badge.cat-p-yellow[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fffbeb, #fde68a);\n  color: #b45309;\n}\n\n.cat-icon-badge.cat-p-rose[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff1f2, #ffd7d7);\n  color: #e11d48;\n}\n\n.cat-icon-badge.cat-p-blue[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #eff6ff, #bfdbfe);\n  color: #1d4ed8;\n}\n\n.cat-icon-badge.cat-p-slate[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  color: #475569;\n}\n\n\n\n.cat-btn-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.cat-btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cat-btn-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.cat-btn-edit[_ngcontent-%COMP%] {\n  background: rgba(13, 148, 136, 0.08);\n  border-color: rgba(13, 148, 136, 0.3);\n  color: #0d9488;\n}\n.cat-btn-edit[_ngcontent-%COMP%]:hover {\n  background: #0d9488;\n  color: #fff;\n  border-color: #0d9488;\n}\n\n.cat-btn-del[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.06);\n  border-color: rgba(239, 68, 68, 0.25);\n  color: #dc2626;\n}\n.cat-btn-del[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n\n\n\n.cat-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: linear-gradient(135deg, #0f766e, #0d9488);\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 9px 22px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n}\n.cat-btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(13, 148, 136, 0.4);\n  transform: translateY(-1px);\n}\n.cat-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_cat-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_cat-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_cat-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_cat-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_cat-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_cat-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.dark-mode[_nghost-%COMP%]   .cat-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .cat-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.dark-mode[_nghost-%COMP%]   .cat-icon-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .cat-icon-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.09) !important;\n  color: #a5b4fc !important;\n}\n.dark-mode[_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: #111119 !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n  color: #64748b !important;\n}\n.dark-mode[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background: #111119 !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder, .dark-mode   [_nghost-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #4b5563 !important;\n}\n.dark-mode[_nghost-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(57, 44, 125, 0.18), rgba(2, 168, 181, 0.07)) !important;\n  border-bottom-color: rgba(86, 37, 232, 0.18) !important;\n}\n.dark-mode[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  border-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n  border-color: rgba(255, 255, 255, 0.06) !important;\n}\n.dark-mode[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #5eead4 !important;\n  background: rgba(2, 168, 181, 0.12) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tY2F0ZWdvcmllcy9hZG1pbi1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7O2dGQUFBO0FBS0EsaUZBQUE7QUFDQTtFQUNFLHVGQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHdGQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsb0JBQUE7RUFBc0IsVUFBQTtFQUNwRCx3RkFBQTtFQUNBLDBCQUFBO0FBSUo7O0FBREE7RUFBaUIsa0JBQUE7RUFBb0IsVUFBQTtBQU1yQzs7QUFKQTtFQUFZLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLG9CQUFBO0FBVXBEOztBQVRBO0VBQ0UsWUFBQTtFQUFjLGFBQUE7RUFDZCxnRkFBQTtFQUNBLFdBQUE7RUFBYSxTQUFBO0VBQ2IsNENBQUE7QUFjRjs7QUFaQTtFQUNFLFlBQUE7RUFBYyxhQUFBO0VBQ2QsaUZBQUE7RUFDQSxhQUFBO0VBQWUsUUFBQTtFQUNmLG9EQUFBO0FBaUJGOztBQWRBLFdBQUE7QUFDQTtFQUFpQixrQkFBQTtFQUFvQixjQUFBO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0FBcUJsRTs7QUFwQkE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFDakMsOENBQUE7RUFDQSx5Q0FBQTtBQXlCRjs7QUF2QkE7RUFDRSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFDOUIsdUVBQUE7QUE0QkY7O0FBMUJBO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGtCQUFBO0VBQ2hDLHFEQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBaUN0Qzs7QUEvQkE7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsa0JBQUE7RUFDbEMsNkNBQUE7RUFDQSwyQ0FBQTtBQW9DRjs7QUFqQ0EsZ0JBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1EQUFBO0FBb0NGOztBQWxDQTtFQUFnQixlQUFBO0VBQWlCLGVBQUE7QUF1Q2pDOztBQXRDQTtFQUFnQixVQUFBO0VBQVksWUFBQTtFQUFjLG9DQUFBO0FBNEMxQzs7QUExQ0EsZ0JBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFDM0MscUNBQUE7RUFBbUMsMENBQUE7RUFDbkMsZ0NBQUE7RUFBOEIsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFDaEQscUJBQUE7RUFBc0IseUJBQUE7RUFDdEIsaUJBQUE7RUFBbUIsbUJBQUE7QUFvRHJCOztBQWxEQTtFQUNFLFVBQUE7RUFBWSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsbUJBQUE7RUFDN0MsOENBQUE7QUF3REY7O0FBdERBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFDdEIscUNBQUE7RUFBbUMsMkNBQUE7RUFDbkMsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLHFCQUFBO0VBQ2pELHlCQUFBO0VBQTJCLGlCQUFBO0VBQW1CLG1CQUFBO0FBZ0VoRDs7QUE3REEsb0JBQUE7QUFDQTtFQUNFLHFDQUFBO0VBQW1DLDZDQUFBO0VBQ25DLFdBQUE7RUFBYSxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixpQkFBQTtFQUNsRCxtQkFBQTtFQUFxQixlQUFBO0VBQWlCLHFCQUFBO0VBQ3RDLGtDQUFBO1VBQUEsMEJBQUE7QUFzRUY7QUFyRUU7RUFDRSxxQ0FBQTtFQUFtQyx1Q0FBQTtFQUNuQywyQkFBQTtFQUE2Qiw2Q0FBQTtBQXlFakM7O0FBckVBLGtGQUFBO0FBQ0E7RUFBVyw0QkFBQTtBQXlFWDs7QUF4RUE7RUFBaUIsOEJBQUE7QUE0RWpCOztBQTFFQSx3QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFBYyxtQkFBQTtFQUMzQixvQkFBQTtFQUFzQixtQkFBQTtFQUFxQix1QkFBQTtFQUMzQyxlQUFBO0VBQ0Esa0NBQUE7RUFBZ0MsY0FBQTtBQWtGbEM7O0FBL0VBLGdGQUFBO0FBQ0E7RUFBZ0MscURBQUE7RUFBdUQsY0FBQTtBQW9GdkY7O0FBbkZBO0VBQWdDLHFEQUFBO0VBQXVELGNBQUE7QUF3RnZGOztBQXZGQTtFQUFnQyxxREFBQTtFQUF1RCxjQUFBO0FBNEZ2Rjs7QUEzRkE7RUFBZ0MscURBQUE7RUFBdUQsY0FBQTtBQWdHdkY7O0FBL0ZBO0VBQWdDLHFEQUFBO0VBQXVELGNBQUE7QUFvR3ZGOztBQW5HQTtFQUFnQyxxREFBQTtFQUF1RCxjQUFBO0FBd0d2Rjs7QUF2R0E7RUFBZ0MscURBQUE7RUFBdUQsY0FBQTtBQTRHdkY7O0FBM0dBO0VBQWdDLHFEQUFBO0VBQXVELGNBQUE7QUFnSHZGOztBQS9HQTtFQUFnQyxxREFBQTtFQUF1RCxjQUFBO0FBb0h2Rjs7QUFuSEE7RUFBZ0MscURBQUE7RUFBdUQsY0FBQTtBQXdIdkY7O0FBdkhBO0VBQWdDLHFEQUFBO0VBQXVELGNBQUE7QUE0SHZGOztBQTNIQTtFQUFnQyxxREFBQTtFQUF1RCxjQUFBO0FBZ0l2Rjs7QUE5SEEsa0ZBQUE7QUFDQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFDM0Isb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsdUJBQUE7RUFDM0MsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixxQkFBQTtBQXVJeEM7QUF0SUU7RUFBSSxlQUFBO0FBeUlOO0FBeElFO0VBQVUsMkJBQUE7QUEySVo7O0FBeklBO0VBQ0Usb0NBQUE7RUFBa0MscUNBQUE7RUFBbUMsY0FBQTtBQThJdkU7QUE3SUU7RUFBVSxtQkFBQTtFQUFxQixXQUFBO0VBQWEscUJBQUE7QUFrSjlDOztBQWhKQTtFQUNFLG1DQUFBO0VBQWlDLHFDQUFBO0VBQW1DLGNBQUE7QUFxSnRFO0FBcEpFO0VBQVUsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLHFCQUFBO0FBeUo5Qzs7QUF0SkEsdUJBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFDM0MscURBQUE7RUFDQSxZQUFBO0VBQWMsV0FBQTtFQUFhLGVBQUE7RUFBaUIsZ0JBQUE7RUFDNUMsaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixxQkFBQTtBQWlLM0Q7QUFoS0U7RUFBVSw4Q0FBQTtFQUE0QywyQkFBQTtBQW9LeEQ7QUFuS0U7RUFBYSxZQUFBO0VBQWEsbUJBQUE7RUFBcUIsZUFBQTtBQXdLakQ7O0FBcktBLG1GQUFBO0FBQ0E7RUFBMEI7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUEySzNDO0VBM0swRTtJQUFLLFVBQUE7SUFBWSxlQUFBO0VBK0szRjtBQUNGO0FBL0tBO0VBQTBCO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBb0wzQztFQXBMMEU7SUFBSyxVQUFBO0lBQVksZUFBQTtFQXdMM0Y7QUFDRjtBQXhMQTtFQUEwQjtJQUFVLHdCQUFBO0VBNExsQztFQTVMOEQ7SUFBTSw0QkFBQTtFQStMcEU7QUFDRjtBQS9MQTtFQUEwQjtJQUFLLHlCQUFBO0VBbU03QjtBQUNGO0FBbk1BO0VBQTBCO0lBQUssbUJBQUE7SUFBcUIsWUFBQTtFQXdNbEQ7RUF4TWlFO0lBQU8sc0JBQUE7SUFBd0IsVUFBQTtFQTRNaEc7QUFDRjtBQTVNQTtFQUEwQjtJQUFVLFVBQUE7RUFnTmxDO0VBaE5nRDtJQUFNLFlBQUE7RUFtTnREO0FBQ0Y7QUEvTUU7RUFBaUIsZ0RBQUE7QUFrTm5CO0FBaE5FO0VBQWtCLGdEQUFBO0VBQThDLHlCQUFBO0FBb05sRTtBQWpORTtFQUNFLDhCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQW1OSjtBQWpORTtFQUNFLDhCQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtBQW1OSjtBQWxOSTtFQUFpQix5QkFBQTtBQXFOckI7QUFoTkk7RUFDRSxnR0FBQTtFQUNBLHVEQUFBO0FBa05OO0FBaE5JO0VBQUsseUJBQUE7RUFBMkIsa0RBQUE7QUFvTnBDO0FBbk5JO0VBQ0UseUJBQUE7RUFDQSxrREFBQTtBQXFOTjtBQXBOTTtFQUFPLHlCQUFBO0VBQTJCLDhDQUFBO0FBd054QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQWRtaW4gQ2F0ZWdvcmllcyDDosKAwpQgRnVsbCBSZWRlc2lnblxuICAgUHJpbWFyeTogIzM5MkM3RCAoVmlvbGV0KSAgTWlkOiAjNUQ1MjkyXG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEhlcm8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY2F0LWhlcm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkQzOTk1IDAlLCAjOWI1OWI2IDMwJSwgIzU2MjVFOCA2MiUsICMwMmE4YjUgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDI4cHggMjhweCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogY2F0LWZhZGUtaW4gLjVzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMjUzLDU3LDE0OSwuMyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMTQpO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwuMSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xuICB9XG59XG4uY2F0LWhlcm8tYm9keSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgfVxuXG4uY2F0LWdsb3cgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDUwJTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5jYXQtZ2xvdy0xIHtcbiAgd2lkdGg6IDM2MHB4OyBoZWlnaHQ6IDM2MHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIsMTY4LDE4MSwuMjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICB0b3A6IC0xMjBweDsgcmlnaHQ6IDIlO1xuICBhbmltYXRpb246IGNhdC1mbG9hdCA3cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5jYXQtZ2xvdy0yIHtcbiAgd2lkdGg6IDIyMHB4OyBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1Myw1NywxNDksLjE1KSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgYm90dG9tOiAtNzBweDsgbGVmdDogNSU7XG4gIGFuaW1hdGlvbjogY2F0LWZsb2F0IDlzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7XG59XG5cbi8qIEF2YXRhciAqL1xuLmNhdC1hdi13cmFwICAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwOyB3aWR0aDogNjhweDsgaGVpZ2h0OiA2OHB4OyB9XG4uY2F0LWF2LXJpbmcgICB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IC04cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgcmdiYSgyNTMsMTY0LDE3NSwuNTUpO1xuICBhbmltYXRpb246IGNhdC1yb3RhdGUgMTJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5jYXQtYXYtYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmRhNGFmLCAjRkQzOTk1LCAjNTYyNUU4LCAjMDJhOGI1KTtcbn1cbi5jYXQtYXYtY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogM3B4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YjU5YjYsICM1NjI1RTgpO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXQtYXYtcHVsc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtMTBweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjUzLDE2NCwxNzUsLjM1KTtcbiAgYW5pbWF0aW9uOiBjYXQtcHVsc2UgMi41cyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cblxuLyogR2xhc3MgcGFuZWwgKi9cbi5jYXQtZ2xhc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMTgpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XG59XG4uY2F0LXN0YXQgICAgIHsgcGFkZGluZzogMCAxNHB4OyBtaW4td2lkdGg6IDcycHg7IH1cbi5jYXQtc3RhdC1kaXYgeyB3aWR0aDogMXB4OyBoZWlnaHQ6IDMycHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyB9XG5cbi8qIExpdmUgLyBjaGlwICovXG4uY2F0LWxpdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jYXQtbGl2ZS1kb3Qge1xuICB3aWR0aDogN3B4OyBoZWlnaHQ6IDdweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjNGFkZTgwO1xuICBhbmltYXRpb246IGNhdC1ibGluayAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLmNhdC1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC43cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDRweCAxMnB4OyBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBSZWZyZXNoL0NUQSBidG4gKi9cbi5jYXQtcmVmcmVzaCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yOCk7XG4gIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEyLjVweDsgZm9udC13ZWlnaHQ6IDYwMDsgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIC4yMnM7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yNik7IGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNDUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDU3LDQ0LDEyNSwuMyk7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFRhYmxlIHJvdyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5jYXQtcm93IHsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzOyB9XG4uY2F0LXJvdzpob3ZlciB7IGJhY2tncm91bmQ6ICNmNWYzZmYgIWltcG9ydGFudDsgfVxuXG4vKiBJY29uIGJhZGdlIGluIHRhYmxlICovXG4uY2F0LWljb24tYmFkZ2Uge1xuICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4OyBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSg1Nyw0NCwxMjUsLjEpOyBjb2xvcjogIzM5MkM3RDtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFBlci1jYXRlZ29yeSBjb2xvciB2YXJpYW50cyAoc2FtZSBwYWxldHRlIGFzIGhvbWUgcGFnZSkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY2F0LWljb24tYmFkZ2UuY2F0LXAtaW5kaWdvICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZWYyZmYsICNjN2QyZmUpOyBjb2xvcjogIzQzMzhjYTsgfVxuLmNhdC1pY29uLWJhZGdlLmNhdC1wLXNreSAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTBmMmZlLCAjYmFlNmZkKTsgY29sb3I6ICMwMzY5YTE7IH1cbi5jYXQtaWNvbi1iYWRnZS5jYXQtcC1yZWQgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjFmMiwgI2ZlY2RkMyk7IGNvbG9yOiAjYmUxMjNjOyB9XG4uY2F0LWljb24tYmFkZ2UuY2F0LXAtYW1iZXIgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmY3ZWQsICNmZWQ3YWEpOyBjb2xvcjogI2MyNDEwYzsgfVxuLmNhdC1pY29uLWJhZGdlLmNhdC1wLXB1cnBsZSAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmFmNWZmLCAjZTlkNWZmKTsgY29sb3I6ICM3ZTIyY2U7IH1cbi5jYXQtaWNvbi1iYWRnZS5jYXQtcC1waW5rICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZkZjJmOCwgI2ZiY2ZlOCk7IGNvbG9yOiAjYmUxODVkOyB9XG4uY2F0LWljb24tYmFkZ2UuY2F0LXAtdGVhbCAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGZkZmEsICM5OWY2ZTQpOyBjb2xvcjogIzBmNzY2ZTsgfVxuLmNhdC1pY29uLWJhZGdlLmNhdC1wLWVtZXJhbGQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjBmZGY0LCAjYmJmN2QwKTsgY29sb3I6ICMxNTgwM2Q7IH1cbi5jYXQtaWNvbi1iYWRnZS5jYXQtcC15ZWxsb3cgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmJlYiwgI2ZkZTY4YSk7IGNvbG9yOiAjYjQ1MzA5OyB9XG4uY2F0LWljb24tYmFkZ2UuY2F0LXAtcm9zZSAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYxZjIsICNmZmQ3ZDcpOyBjb2xvcjogI2UxMWQ0ODsgfVxuLmNhdC1pY29uLWJhZGdlLmNhdC1wLWJsdWUgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWZmNmZmLCAjYmZkYmZlKTsgY29sb3I6ICMxZDRlZDg7IH1cbi5jYXQtaWNvbi1iYWRnZS5jYXQtcC1zbGF0ZSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmFmYywgI2UyZThmMCk7IGNvbG9yOiAjNDc1NTY5OyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBBY3Rpb24gYnV0dG9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5jYXQtYnRuLWljb24ge1xuICB3aWR0aDogMzRweDsgaGVpZ2h0OiAzNHB4OyBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjE4cztcbiAgaSB7IGZvbnQtc2l6ZTogMTRweDsgfVxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XG59XG4uY2F0LWJ0bi1lZGl0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMywxNDgsMTM2LC4wOCk7IGJvcmRlci1jb2xvcjogcmdiYSgxMywxNDgsMTM2LC4zKTsgY29sb3I6ICMwZDk0ODg7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjMGQ5NDg4OyBjb2xvcjogI2ZmZjsgYm9yZGVyLWNvbG9yOiAjMGQ5NDg4OyB9XG59XG4uY2F0LWJ0bi1kZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMDYpOyBib3JkZXItY29sb3I6IHJnYmEoMjM5LDY4LDY4LC4yNSk7IGNvbG9yOiAjZGMyNjI2O1xuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2RjMjYyNjsgY29sb3I6ICNmZmY7IGJvcmRlci1jb2xvcjogI2RjMjYyNjsgfVxufVxuXG4vKiBQcmltYXJ5IENUQSBidXR0b24gKi9cbi5jYXQtYnRuLXByaW1hcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZjc2NmUsICMwZDk0ODgpO1xuICBib3JkZXI6IG5vbmU7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDlweCAyMnB4OyBib3JkZXItcmFkaXVzOiAyNHB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAuMjJzO1xuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEzLDE0OCwxMzYsLjQpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IC42OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB0cmFuc2Zvcm06IG5vbmU7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEFuaW1hdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG5Aa2V5ZnJhbWVzIGNhdC1mYWRlLWluICB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG5vbmU7IH0gfVxuQGtleWZyYW1lcyBjYXQtZmFkZS11cCAgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyB9IH1cbkBrZXlmcmFtZXMgY2F0LWZsb2F0ICAgIHsgMCUsMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpOyB9IH1cbkBrZXlmcmFtZXMgY2F0LXJvdGF0ZSAgIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cbkBrZXlmcmFtZXMgY2F0LXB1bHNlICAgIHsgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNjsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjU1KTsgb3BhY2l0eTogMDsgfSB9XG5Aa2V5ZnJhbWVzIGNhdC1ibGluayAgICB7IDAlLDEwMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IC40OyB9IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIERBUksgTU9ERSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0LWNvbnRleHQoLmRhcmstbW9kZSkge1xuICAvLyBUYWJsZSByb3dcbiAgLmNhdC1yb3c6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNCkgIWltcG9ydGFudDsgfVxuICAvLyBJY29uIGJhZGdlXG4gIC5jYXQtaWNvbi1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA5KSAhaW1wb3J0YW50OyBjb2xvcjogI2E1YjRmYyAhaW1wb3J0YW50OyB9XG5cbiAgLy8gQmFycmUgZGUgcmVjaGVyY2hlIMOiwoDClCBvdmVycmlkZSBsZXMgaW5saW5lIHN0eWxlc1xuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogIzExMTExOSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMSkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQ6ICMxMTExMTkgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNlMmU4ZjAgIWltcG9ydGFudDtcbiAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjNGI1NTYzICFpbXBvcnRhbnQ7IH1cbiAgfVxuXG4gIC8vIFRhYmxlYXUgw6LCgMKUIG92ZXJyaWRlIGxlcyBpbmxpbmUgc3R5bGVzIGR1IHRoZWFkXG4gIHRhYmxlIHtcbiAgICB0aGVhZCB0ciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDU3LDQ0LDEyNSwuMTgpLCByZ2JhKDIsMTY4LDE4MSwuMDcpKSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg4NiwzNywyMzIsLjE4KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICB0aCB7IGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7IGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDYpICFpbXBvcnRhbnQ7IH1cbiAgICB0ZCB7XG4gICAgICBjb2xvcjogI2UyZThmMCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNikgIWltcG9ydGFudDtcbiAgICAgIGNvZGUgeyBjb2xvcjogIzVlZWFkNCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOiByZ2JhKDIsMTY4LDE4MSwuMTIpICFpbXBvcnRhbnQ7IH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return AdminCategoriesComponent;
})();

/***/ })

}]);
//# sourceMappingURL=1948.js.map