"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8754],{

/***/ 18754:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/instructor/settings/instructor-social-profiles/instructor-social-profiles.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorSocialProfilesComponent: () => (/* binding */ InstructorSocialProfilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);


let InstructorSocialProfilesComponent = /*#__PURE__*/(() => {
  class InstructorSocialProfilesComponent {
    static ɵfac = function InstructorSocialProfilesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorSocialProfilesComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InstructorSocialProfilesComponent,
      selectors: [["app-instructor-social-profiles"]],
      decls: 41,
      vars: 0,
      consts: [[1, "card"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], [1, "position-relative", "input-icon-start"], ["type", "text", "placeholder", "https://www.twitter.com/", 1, "form-control"], [1, "social-icon"], [1, "fa-brands", "fa-x-twitter", "fs-14"], ["type", "text", "placeholder", "https://www.facebook.com/", 1, "form-control"], [1, "fa-brands", "fa-square-facebook", "fs-14"], ["type", "text", "placeholder", "https://www.instagram.com/", 1, "form-control"], [1, "fa-brands", "fa-instagram", "fs-14"], ["type", "text", "placeholder", "https://www.linkedin.com/", 1, "form-control"], [1, "fa-brands", "fa-linkedin-in", "fs-14"], ["type", "text", "placeholder", "https://www.youtube.com/", 1, "form-control"], [1, "fa-brands", "fa-youtube", "fs-14"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-secondary"]],
      template: function InstructorSocialProfilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](10, "div", 2)(11, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](13, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](15, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](16, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](17, "div", 2)(18, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](20, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](21, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](22, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](23, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](24, "div", 2)(25, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "LinkedIn");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](27, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](28, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](29, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](30, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](31, "div", 2)(32, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "YouTube");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](34, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](35, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](36, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](37, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](38, "div", 16)(39, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Save Social Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InstructorSocialProfilesComponent;
})();

/***/ })

}]);
//# sourceMappingURL=8754.js.map