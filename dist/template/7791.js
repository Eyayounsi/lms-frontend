"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7791],{

/***/ 4935:
/*!*****************************************************************************!*\
  !*** ./node_modules/lightgallery/angular/fesm2022/lightgallery-angular.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightgalleryComponent: () => (/* binding */ LightgalleryComponent),
/* harmony export */   LightgalleryModule: () => (/* binding */ LightgalleryModule),
/* harmony export */   LightgalleryService: () => (/* binding */ LightgalleryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery */ 90828);



const _c0 = ["*"];
let LightgalleryService = /*#__PURE__*/(() => {
  var _staticBlock;
  class LightgalleryService {
    constructor() {}
    static #_ = _staticBlock = () => (this.ɵfac = function LightgalleryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LightgalleryService)();
    }, this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LightgalleryService,
      factory: LightgalleryService.ɵfac,
      providedIn: 'root'
    }));
  }
  _staticBlock();
  return LightgalleryService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const LgMethods = {
  onAfterAppendSlide: 'lgAfterAppendSlide',
  onInit: 'lgInit',
  onHasVideo: 'lgHasVideo',
  onContainerResize: 'lgContainerResize',
  onUpdateSlides: 'lgUpdateSlides',
  onAfterAppendSubHtml: 'lgAfterAppendSubHtml',
  onBeforeOpen: 'lgBeforeOpen',
  onAfterOpen: 'lgAfterOpen',
  onSlideItemLoad: 'lgSlideItemLoad',
  onBeforeSlide: 'lgBeforeSlide',
  onAfterSlide: 'lgAfterSlide',
  onPosterClick: 'lgPosterClick',
  onDragStart: 'lgDragStart',
  onDragMove: 'lgDragMove',
  onDragEnd: 'lgDragEnd',
  onBeforeNextSlide: 'lgBeforeNextSlide',
  onBeforePrevSlide: 'lgBeforePrevSlide',
  onBeforeClose: 'lgBeforeClose',
  onAfterClose: 'lgAfterClose',
  onRotateLeft: 'lgRotateLeft',
  onRotateRight: 'lgRotateRight',
  onFlipHorizontal: 'lgFlipHorizontal',
  onFlipVertical: 'lgFlipVertical'
};
let LightgalleryComponent = /*#__PURE__*/(() => {
  var _staticBlock2;
  class LightgalleryComponent {
    constructor(_elementRef) {
      this._elementRef = _elementRef;
      this.lgInitialized = false;
      this._elementRef = _elementRef;
    }
    ngAfterViewChecked() {
      if (!this.lgInitialized) {
        this.registerEvents();
        this.LG = (0,lightgallery__WEBPACK_IMPORTED_MODULE_2__["default"])(this._elementRef.nativeElement, this.settings);
        this.lgInitialized = true;
      }
    }
    ngOnDestroy() {
      this.LG.destroy();
      this.lgInitialized = false;
    }
    registerEvents() {
      if (this.onAfterAppendSlide) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onAfterAppendSlide, event => {
          this.onAfterAppendSlide && this.onAfterAppendSlide(event.detail);
        });
      }
      if (this.onInit) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onInit, event => {
          this.onInit && this.onInit(event.detail);
        });
      }
      if (this.onHasVideo) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onHasVideo, event => {
          this.onHasVideo && this.onHasVideo(event.detail);
        });
      }
      if (this.onContainerResize) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onContainerResize, event => {
          this.onContainerResize && this.onContainerResize(event.detail);
        });
      }
      if (this.onAfterAppendSubHtml) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onAfterAppendSubHtml, event => {
          this.onAfterAppendSubHtml && this.onAfterAppendSubHtml(event.detail);
        });
      }
      if (this.onBeforeOpen) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeOpen, event => {
          this.onBeforeOpen && this.onBeforeOpen(event.detail);
        });
      }
      if (this.onAfterOpen) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onAfterOpen, event => {
          this.onAfterOpen && this.onAfterOpen(event.detail);
        });
      }
      if (this.onSlideItemLoad) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onSlideItemLoad, event => {
          this.onSlideItemLoad && this.onSlideItemLoad(event.detail);
        });
      }
      if (this.onBeforeSlide) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeSlide, event => {
          this.onBeforeSlide && this.onBeforeSlide(event.detail);
        });
      }
      if (this.onAfterSlide) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onAfterSlide, event => {
          this.onAfterSlide && this.onAfterSlide(event.detail);
        });
      }
      if (this.onPosterClick) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onPosterClick, event => {
          this.onPosterClick && this.onPosterClick(event.detail);
        });
      }
      if (this.onDragStart) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onDragStart, event => {
          this.onDragStart && this.onDragStart(event.detail);
        });
      }
      if (this.onDragMove) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onDragMove, event => {
          this.onDragMove && this.onDragMove(event.detail);
        });
      }
      if (this.onDragEnd) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onDragEnd, event => {
          this.onDragEnd && this.onDragEnd(event.detail);
        });
      }
      if (this.onBeforeNextSlide) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeNextSlide, event => {
          this.onBeforeNextSlide && this.onBeforeNextSlide(event.detail);
        });
      }
      if (this.onBeforePrevSlide) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onBeforePrevSlide, event => {
          this.onBeforePrevSlide && this.onBeforePrevSlide(event.detail);
        });
      }
      if (this.onBeforeClose) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeClose, event => {
          this.onBeforeClose && this.onBeforeClose(event.detail);
        });
      }
      if (this.onAfterClose) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onAfterClose, event => {
          this.onAfterClose && this.onAfterClose(event.detail);
        });
      }
      if (this.onRotateLeft) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onRotateLeft, event => {
          this.onRotateLeft && this.onRotateLeft(event.detail);
        });
      }
      if (this.onRotateRight) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onRotateRight, event => {
          this.onRotateRight && this.onRotateRight(event.detail);
        });
      }
      if (this.onFlipHorizontal) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onFlipHorizontal, event => {
          this.onFlipHorizontal && this.onFlipHorizontal(event.detail);
        });
      }
      if (this.onFlipVertical) {
        this._elementRef.nativeElement.addEventListener(LgMethods.onFlipVertical, event => {
          this.onFlipVertical && this.onFlipVertical(event.detail);
        });
      }
    }
    static #_ = _staticBlock2 = () => (this.ɵfac = function LightgalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LightgalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
    }, this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LightgalleryComponent,
      selectors: [["lightgallery"]],
      inputs: {
        settings: "settings",
        onAfterAppendSlide: "onAfterAppendSlide",
        onInit: "onInit",
        onHasVideo: "onHasVideo",
        onContainerResize: "onContainerResize",
        onAfterAppendSubHtml: "onAfterAppendSubHtml",
        onBeforeOpen: "onBeforeOpen",
        onAfterOpen: "onAfterOpen",
        onSlideItemLoad: "onSlideItemLoad",
        onBeforeSlide: "onBeforeSlide",
        onAfterSlide: "onAfterSlide",
        onPosterClick: "onPosterClick",
        onDragStart: "onDragStart",
        onDragMove: "onDragMove",
        onDragEnd: "onDragEnd",
        onBeforeNextSlide: "onBeforeNextSlide",
        onBeforePrevSlide: "onBeforePrevSlide",
        onBeforeClose: "onBeforeClose",
        onAfterClose: "onAfterClose",
        onRotateLeft: "onRotateLeft",
        onRotateRight: "onRotateRight",
        onFlipHorizontal: "onFlipHorizontal",
        onFlipVertical: "onFlipVertical"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LightgalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    }));
  }
  _staticBlock2();
  return LightgalleryComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LightgalleryModule = /*#__PURE__*/(() => {
  var _staticBlock3;
  class LightgalleryModule {
    static #_ = _staticBlock3 = () => (this.ɵfac = function LightgalleryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LightgalleryModule)();
    }, this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LightgalleryModule
    }), this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({}));
  }
  _staticBlock3();
  return LightgalleryModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of lightgallery-angular
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 17791:
/*!*********************************************************************************!*\
  !*** ./src/app/features/courses/course-details-2/course-details-2.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseDetails2Component: () => (/* binding */ CourseDetails2Component)
/* harmony export */ });
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightgallery/plugins/zoom */ 46564);
/* harmony import */ var lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/video */ 81292);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var lightgallery_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lightgallery/angular */ 4935);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
















function CourseDetails2Component_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Chargement du cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function CourseDetails2Component_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Voir tous les cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function CourseDetails2Component_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.successMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
function CourseDetails2Component_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_div_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function CourseDetails2Component_ng_container_2_img_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function CourseDetails2Component_ng_container_2_img_25_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onInstructorAvatarError($event, ctx_r0.course.instructorName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.getCourseInstructorAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function CourseDetails2Component_ng_container_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.getInstructorInitial(), " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-warning", s_r5 <= (ctx_r0.course.averageRating || 0))("text-white", s_r5 > (ctx_r0.course.averageRating || 0));
  }
}
function CourseDetails2Component_ng_container_2_ng_container_52_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](obj_r6);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Ce que vous apprendrez");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ul", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CourseDetails2Component_ng_container_2_ng_container_52_li_4_Template, 2, 1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.course.objectives);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_53_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const req_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](req_r7);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h6", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Pr\u00E9requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ul", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, CourseDetails2Component_ng_container_2_ng_container_53_li_4_Template, 2, 1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.course.requirements);
  }
}
function CourseDetails2Component_ng_container_2_div_61_div_1_li_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Aper\u00E7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CourseDetails2Component_ng_container_2_div_61_div_1_li_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lesson_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, lesson_r8.durationSeconds, "1.0-0"), "s ");
  }
}
function CourseDetails2Component_ng_container_2_div_61_div_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 99)(1, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CourseDetails2Component_ng_container_2_div_61_div_1_li_8_a_5_Template, 2, 0, "a", 102)(6, CourseDetails2Component_ng_container_2_div_61_div_1_li_8_p_6_Template, 3, 4, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lesson_r8 = ctx.$implicit;
    const li_r9 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pb-0", li_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", lesson_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", lesson_r8.isFreePreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", lesson_r8.durationSeconds);
  }
}
function CourseDetails2Component_ng_container_2_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 92)(1, "h2", 93)(2, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 96)(6, "div", 97)(7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CourseDetails2Component_ng_container_2_div_61_div_1_li_8_Template, 7, 5, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("mb-0", i_r11 === ctx_r0.course.sections.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", "heading-" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-bs-target", "#collapse-" + i_r11)("aria-controls", "collapse-" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", section_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", "collapse-" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-labelledby", "heading-" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", section_r10.lessons);
  }
}
function CourseDetails2Component_ng_container_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CourseDetails2Component_ng_container_2_div_61_div_1_Template, 9, 9, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.course.sections);
  }
}
function CourseDetails2Component_ng_container_2_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Aucune section disponible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CourseDetails2Component_ng_container_2_img_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function CourseDetails2Component_ng_container_2_img_71_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onInstructorAvatarError($event, ctx_r0.course.instructorName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.getCourseInstructorAvatar(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function CourseDetails2Component_ng_container_2_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.getInstructorInitial(), " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-warning", s_r13 <= (ctx_r0.course.averageRating || 0));
  }
}
function CourseDetails2Component_ng_container_2_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_92_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-warning", s_r14 <= r_r15.rating)("text-muted", s_r14 > r_r15.rating);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_92_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 110)(1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 113)(4, "div", 114)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, CourseDetails2Component_ng_container_2_ng_container_92_div_1_ng_container_11_Template, 2, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(r_r15.studentAvatar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r15.studentName || "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 5, r_r15.createdAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](r_r15.comment);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_92_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Aucun avis pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CourseDetails2Component_ng_container_2_ng_container_92_div_1_Template, 14, 8, "div", 108)(2, CourseDetails2Component_ng_container_2_ng_container_92_p_2_Template, 2, 0, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.reviews.length === 0);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_93_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_ng_container_93_ng_container_5_Template_i_click_1_listener() {
      const s_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.myRating = s_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-warning", s_r18 <= ctx_r0.myRating)("text-muted", s_r18 > ctx_r0.myRating);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_93_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("text-success", ctx_r0.reviewMsg.includes("!"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.reviewMsg);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_93_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 126);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Laisser un avis");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CourseDetails2Component_ng_container_2_ng_container_93_ng_container_5_Template, 2, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "textarea", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function CourseDetails2Component_ng_container_2_ng_container_93_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r0.myComment, $event) || (ctx_r0.myComment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CourseDetails2Component_ng_container_2_ng_container_93_p_7_Template, 2, 3, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_ng_container_93_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.submitReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, CourseDetails2Component_ng_container_2_ng_container_93_span_9_Template, 1, 0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Publier l'avis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.myComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.reviewMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r0.submitingReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.submitingReview);
  }
}
function CourseDetails2Component_ng_container_2_p_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Inscrivez-vous au cours pour laisser un avis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function CourseDetails2Component_ng_container_2_p_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 127)(1, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Connectez-vous");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " pour laisser un avis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
  }
}
function CourseDetails2Component_ng_container_2_img_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function CourseDetails2Component_ng_container_2_img_103_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onCourseCoverError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.getCourseCoverImage(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function CourseDetails2Component_ng_container_2_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("background", ctx_r0.getCourseCoverPlaceholderGradient());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.getCourseCoverInitial());
  }
}
function CourseDetails2Component_ng_container_2_p_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 49)(1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "En promo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 1, ctx_r0.course.price, "1.2-2"), " \u20AC");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_ng_container_111_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.watchCourse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " Continuer le cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_112_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 126);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_ng_container_112_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.enrollFree());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CourseDetails2Component_ng_container_2_ng_container_112_span_2_Template, 1, 0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, " S'inscrire gratuitement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r0.buyingCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.buyingCourse);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Se connecter pour acheter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Voir le panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 126);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_button_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 149);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_ng_container_114_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CourseDetails2Component_ng_container_2_ng_container_114_button_3_span_1_Template, 1, 0, "span", 123)(2, CourseDetails2Component_ng_container_2_ng_container_114_button_3_i_2_Template, 1, 0, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r0.addingToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.addingToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.addingToCart);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_button_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 126);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CourseDetails2Component_ng_container_2_ng_container_114_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.buyCourse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CourseDetails2Component_ng_container_2_ng_container_114_button_7_span_1_Template, 1, 0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r0.buyingCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.buyingCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Acheter ", ctx_r0.formatPrice(), " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Se connecter pour acheter ", ctx_r0.formatPrice(), " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CourseDetails2Component_ng_container_2_ng_container_114_a_2_Template, 3, 1, "a", 139)(3, CourseDetails2Component_ng_container_2_ng_container_114_button_3_Template, 4, 3, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Partager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CourseDetails2Component_ng_container_2_ng_container_114_button_7_Template, 3, 3, "button", 143)(8, CourseDetails2Component_ng_container_2_ng_container_114_a_8_Template, 3, 2, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isInCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isInCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
  }
}
function CourseDetails2Component_ng_container_2_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 152)(1, "small", 104)(2, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Connectez-vous");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " pour acheter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
  }
}
function CourseDetails2Component_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CourseDetails2Component_ng_container_2_div_1_Template, 3, 1, "div", 10)(2, CourseDetails2Component_ng_container_2_div_2_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "section", 12)(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 18)(12, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 24)(23, "div", 25)(24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, CourseDetails2Component_ng_container_2_img_25_Template, 1, 1, "img", 27)(26, CourseDetails2Component_ng_container_2_div_26_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 29)(28, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, CourseDetails2Component_ng_container_2_ng_container_33_Template, 2, 4, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "p", 31)(35, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "section", 35)(40, "div", 13)(41, "div", 14)(42, "div", 15)(43, "div", 36)(44, "div", 37)(45, "div", 38)(46, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "Aper\u00E7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "Description du cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, CourseDetails2Component_ng_container_2_ng_container_52_Template, 5, 1, "ng-container", 3)(53, CourseDetails2Component_ng_container_2_ng_container_53_Template, 5, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 37)(55, "div", 38)(56, "div", 41)(57, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Contenu du cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, CourseDetails2Component_ng_container_2_div_61_Template, 2, 1, "div", 44)(62, CourseDetails2Component_ng_container_2_ng_template_62_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 37)(65, "div", 38)(66, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "\u00C0 propos de l'instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 45)(69, "div", 46)(70, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, CourseDetails2Component_ng_container_2_img_71_Template, 1, 1, "img", 27)(72, CourseDetails2Component_ng_container_2_div_72_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 29)(74, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, CourseDetails2Component_ng_container_2_ng_container_79_Template, 2, 2, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](82, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "div", 50)(84, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](85, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div", 37)(88, "div", 38)(89, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](91, CourseDetails2Component_ng_container_2_div_91_Template, 2, 0, "div", 53)(92, CourseDetails2Component_ng_container_2_ng_container_92_Template, 3, 2, "ng-container", 3)(93, CourseDetails2Component_ng_container_2_ng_container_93_Template, 11, 5, "ng-container", 3)(94, CourseDetails2Component_ng_container_2_p_94_Template, 2, 0, "p", 54)(95, CourseDetails2Component_ng_container_2_p_95_Template, 4, 1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 55)(97, "div", 56)(98, "div", 37)(99, "div", 38)(100, "div", 57)(101, "lightgallery", 58)(102, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, CourseDetails2Component_ng_container_2_img_103_Template, 1, 1, "img", 60)(104, CourseDetails2Component_ng_container_2_div_104_Template, 4, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](106, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "div", 64)(108, "h2", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](110, CourseDetails2Component_ng_container_2_p_110_Template, 6, 4, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](111, CourseDetails2Component_ng_container_2_ng_container_111_Template, 4, 0, "ng-container", 3)(112, CourseDetails2Component_ng_container_2_ng_container_112_Template, 4, 2, "ng-container", 3)(113, CourseDetails2Component_ng_container_2_ng_container_113_Template, 4, 1, "ng-container", 3)(114, CourseDetails2Component_ng_container_2_ng_container_114_Template, 9, 4, "ng-container", 3)(115, CourseDetails2Component_ng_container_2_div_115_Template, 5, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 37)(117, "div", 38)(118, "h5", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](119, "Inclus");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](121, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122, "Acc\u00E8s \u00E0 vie");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](124, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "Acc\u00E8s mobile et TV");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](127, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](128, "Certificat de compl\u00E9tion");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 72)(130, "div", 73)(131, "h5", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](132, "Caract\u00E9ristiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "ul")(134, "li")(135, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](136, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "li")(139, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](140, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "li")(143, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](144, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "li")(147, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](148, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "li")(151, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](152, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const noSections_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](63);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("inner-banner--with-cover", ctx_r0.hasCourseCover());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx_r0.getBannerStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.course.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.course.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.getTotalLessons(), " le\u00E7ons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.course.enrollmentCount || 0, " \u00E9tudiants inscrits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.course.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.getLevelLabel(ctx_r0.course.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.hasInstructorAvatar());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.hasInstructorAvatar());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.course.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](37, 51, ctx_r0.course.averageRating || 0, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (", ctx_r0.course.reviewCount || 0, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.course.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.course.objectives == null ? null : ctx_r0.course.objectives.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.course.requirements == null ? null : ctx_r0.course.requirements.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.getTotalLessons(), " le\u00E7ons");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length)("ngIfElse", noSections_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.hasInstructorAvatar());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.hasInstructorAvatar());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.course.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](82, 54, ctx_r0.course.averageRating || 0, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r0.getTotalLessons(), " le\u00E7ons ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Avis (", ctx_r0.reviews.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.loadingReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.loadingReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && ctx_r0.isEnrolled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && !ctx_r0.isEnrolled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("settings", ctx_r0.settings)("onInit", ctx_r0.onInit);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.hasCourseCover());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.hasCourseCover());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.formatPrice());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.course.onSale && ctx_r0.course.price > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isEnrolled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isEnrolled && ctx_r0.isCourseFree() && ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isEnrolled && ctx_r0.isCourseFree() && !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isEnrolled && !ctx_r0.isCourseFree());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Inscrits : ", ctx_r0.course.enrollmentCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Sections : ", (ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Le\u00E7ons : ", ctx_r0.getTotalLessons());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Niveau : ", ctx_r0.getLevelLabel(ctx_r0.course.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Langue : ", ctx_r0.course.language || "Fran\u00E7ais");
  }
}
let CourseDetails2Component = /*#__PURE__*/(() => {
  class CourseDetails2Component {
    route;
    router;
    courseService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    stars = [1, 2, 3, 4, 5];
    coverImageFailed = false;
    instructorAvatarFailed = false;
    coverCandidateIndex = 0;
    // LightGallery
    settings = {
      counter: false,
      plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_0__["default"], lightgallery_plugins_video__WEBPACK_IMPORTED_MODULE_1__["default"]]
    };
    lightGallery;
    needRefresh = false;
    ngAfterViewChecked() {
      if (this.needRefresh) {
        this.lightGallery?.refresh();
        this.needRefresh = false;
      }
    }
    onInit = detail => {
      this.lightGallery = detail.instance;
    };
    // Data
    course = null;
    loading = true;
    errorMessage = '';
    successMessage = '';
    // Reviews
    reviews = [];
    loadingReviews = false;
    // Review form (student only)
    myRating = 5;
    myComment = '';
    submitingReview = false;
    reviewMsg = '';
    // Auth
    isLoggedIn = false;
    isEnrolled = false;
    isInCart = false;
    buyingCourse = false;
    addingToCart = false;
    constructor(route, router, courseService) {
      this.route = route;
      this.router = router;
      this.courseService = courseService;
    }
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_3___default().init({
        duration: 1200,
        once: true
      });
      this.isLoggedIn = !!localStorage.getItem('token');
      this.route.queryParams.subscribe(params => {
        const courseId = params['courseId'];
        if (courseId) {
          this.loadCourse(+courseId);
        } else {
          this.loading = false;
          this.errorMessage = 'Aucun cours specifie.';
        }
      });
    }
    loadCourse(courseId) {
      this.loading = true;
      this.courseService.getCourseDetail(courseId).subscribe({
        next: data => {
          this.course = data;
          this.coverImageFailed = false;
          this.instructorAvatarFailed = false;
          this.coverCandidateIndex = 0;
          this.loading = false;
          this.needRefresh = true;
          this.loadReviews(courseId);
          if (this.isLoggedIn) {
            const role = localStorage.getItem('role') || '';
            const isStudent = role.includes('STUDENT');
            if (isStudent) {
              this.courseService.getMyEnrolledCourses().subscribe({
                next: items => {
                  this.isEnrolled = items.some(c => c.id === courseId);
                },
                error: () => {}
              });
              this.courseService.getCart().subscribe({
                next: cartItems => {
                  this.isInCart = cartItems.some(c => c.courseId === courseId);
                },
                error: () => {}
              });
            }
          }
        },
        error: () => {
          this.errorMessage = 'Cours introuvable.';
          this.loading = false;
        }
      });
    }
    loadReviews(courseId) {
      this.loadingReviews = true;
      this.courseService.getCourseReviews(courseId).subscribe({
        next: data => {
          this.reviews = data;
          this.loadingReviews = false;
        },
        error: () => {
          this.loadingReviews = false;
        }
      });
    }
    submitReview() {
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth/login']);
        return;
      }
      this.submitingReview = true;
      this.courseService.upsertReview(this.course.id, {
        rating: this.myRating,
        comment: this.myComment
      }).subscribe({
        next: () => {
          this.submitingReview = false;
          this.reviewMsg = 'Avis publie !';
          this.myComment = '';
          this.loadReviews(this.course.id);
          setTimeout(() => this.reviewMsg = '', 3000);
        },
        error: e => {
          this.submitingReview = false;
          this.reviewMsg = e.error?.message || 'Erreur.';
        }
      });
    }
    // Utilities
    getTotalLessons() {
      if (!this.course?.sections) return 0;
      return this.course.sections.reduce((sum, s) => sum + (s.lessons?.length ?? 0), 0);
    }
    formatPrice() {
      if (!this.course) return '';
      const price = +(this.course.effectivePrice ?? this.course.price ?? 0);
      return price === 0 ? 'Gratuit' : price.toFixed(2) + ' €';
    }
    isCourseFree() {
      return +(this.course?.effectivePrice ?? this.course?.price ?? 0) === 0;
    }
    enrollFree() {
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth/login']);
        return;
      }
      this.buyingCourse = true;
      this.courseService.enrollFree(this.course.id).subscribe({
        next: () => {
          this.buyingCourse = false;
          this.isEnrolled = true;
          this.showSuccess('Inscription reussie ! Vous pouvez maintenant acceder au cours.');
        },
        error: e => {
          this.buyingCourse = false;
          this.errorMessage = e.error?.message || 'Erreur lors de l\'inscription.';
          setTimeout(() => this.errorMessage = '', 5000);
        }
      });
    }
    buyCourse() {
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth/login']);
        return;
      }
      this.buyingCourse = true;
      this.courseService.createCheckoutSession(this.course.id).subscribe({
        next: r => {
          window.location.href = r.url;
        },
        error: e => {
          this.buyingCourse = false;
          this.errorMessage = e.error?.error || 'Erreur lors du paiement.';
          setTimeout(() => this.errorMessage = '', 5000);
        }
      });
    }
    addToCart() {
      // Guest: save to localStorage, no API call
      if (!this.isLoggedIn) {
        const cart = JSON.parse(localStorage.getItem('guest_cart') || '[]');
        if (!cart.some(c => c.id === this.course.id)) {
          cart.push({
            id: this.course.id,
            title: this.course.title,
            coverImage: this.course.coverImage,
            price: this.course.price,
            effectivePrice: this.course.effectivePrice,
            instructorName: this.course.instructorName
          });
          localStorage.setItem('guest_cart', JSON.stringify(cart));
          this.showSuccess('Ajoute au panier ! Connectez-vous pour finaliser l\'achat.');
        } else {
          this.router.navigate([this.routes.cart]);
        }
        return;
      }
      // Non-student (instructor, admin) ? redirect to login as student
      const role = localStorage.getItem('role') || '';
      if (!role.includes('STUDENT')) {
        this.router.navigate([this.routes.login]);
        return;
      }
      // Already enrolled
      if (this.isEnrolled) {
        this.watchCourse();
        return;
      }
      // Already in cart
      if (this.isInCart) {
        this.router.navigate([this.routes.cart]);
        return;
      }
      this.addingToCart = true;
      this.courseService.addToCart(this.course.id).subscribe({
        next: () => {
          this.addingToCart = false;
          this.isInCart = true;
          this.showSuccess('Ajoute au panier !');
        },
        error: e => {
          this.addingToCart = false;
          const status = e.status;
          if (status === 500 || status === 409 || status === 400) {
            // Backend throws when already in cart or already enrolled
            this.isInCart = true;
            this.router.navigate([this.routes.cart]);
          } else {
            this.errorMessage = e.error?.message || 'Erreur lors de l\'ajout au panier';
            setTimeout(() => this.errorMessage = '', 5000);
          }
        }
      });
    }
    watchCourse() {
      this.router.navigate([this.routes.courseWatch], {
        queryParams: {
          courseId: this.course.id
        }
      });
    }
    getLevelLabel(l) {
      const m = {
        BEGINNER: 'Debutant',
        INTERMEDIATE: 'Intermediaire',
        ADVANCED: 'Avance'
      };
      return m[l] ?? l;
    }
    hasCourseCover() {
      return this.getCourseCoverCandidates().length > 0 && !this.coverImageFailed;
    }
    getBannerStyle() {
      return {};
    }
    getImageUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_8__.resolveCourseImage)(path, 'assets/img/course-img/courses-01.jpg');
    }
    getAvatarUrl(path) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_9__.resolveAvatarImage)(path, 'assets/img/avatar/avatar10.jpg');
    }
    getCourseCoverImage() {
      const candidates = this.getCourseCoverCandidates();
      const raw = candidates[this.coverCandidateIndex] || '';
      return this.getImageUrl(raw);
    }
    getCourseCoverPlaceholderGradient() {
      const gradients = ['linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)', 'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)', 'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)', 'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'];
      const key = String(this.course?.id || this.course?.slug || this.course?.title || 'course');
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
      }
      return gradients[Math.abs(hash) % gradients.length];
    }
    getCourseCoverInitial() {
      const value = String(this.course?.title || 'Cours').trim();
      return (value.charAt(0) || 'C').toUpperCase();
    }
    hasInstructorAvatar() {
      return !!this.getCourseInstructorAvatarRaw() && !this.instructorAvatarFailed;
    }
    getCourseInstructorAvatar() {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_9__.resolveAvatarImage)(this.getCourseInstructorAvatarRaw(), '');
    }
    getInstructorInitial() {
      const value = String(this.course?.instructorName || 'I').trim();
      return (value.charAt(0) || 'I').toUpperCase();
    }
    onCourseCoverError(event) {
      const img = event?.target;
      if (!img) return;
      const candidates = this.getCourseCoverCandidates();
      if (this.coverCandidateIndex < candidates.length - 1) {
        this.coverCandidateIndex += 1;
        img.src = this.getImageUrl(candidates[this.coverCandidateIndex]);
        return;
      }
      this.coverImageFailed = true;
    }
    onInstructorAvatarError(event, name) {
      const img = event?.target;
      if (!img) return;
      this.instructorAvatarFailed = true;
      img.src = this.generateInitialAvatar(name || 'F');
    }
    getCourseCoverRaw() {
      return this.getCourseCoverCandidates()[0] || '';
    }
    getCourseCoverCandidates() {
      const pending = this.course?.pendingEditData || this.course?.pendingEdit || {};
      const values = [this.course?.coverImage, this.course?.coverImagePath, this.course?.cover, this.course?.courseCoverImage, this.course?.courseCoverImagePath, this.course?.thumbnailUrl, this.course?.coverImageUrl, this.course?.thumbnail, this.course?.imageUrl, this.course?.image, this.course?.courseImageUrl, this.course?.courseImage, this.course?.courseImagePath, pending?.coverImage, pending?.coverImagePath, pending?.courseCoverImage, pending?.thumbnailUrl, pending?.coverImageUrl, pending?.imageUrl, pending?.image];
      const normalized = values.map(v => String(v || '').trim()).filter(v => {
        if (!v) return false;
        const low = v.toLowerCase();
        return low !== 'null' && low !== 'undefined' && low !== 'none' && low !== 'n/a';
      });
      return Array.from(new Set(normalized));
    }
    getCourseInstructorAvatarRaw() {
      const raw = this.course?.instructorAvatar || this.course?.instructorAvatarPath || this.course?.instructorImage || this.course?.instructorPhoto || this.course?.instructorPhotoUrl || this.course?.avatarPath || this.course?.instructor?.avatarPath || this.course?.instructor?.avatar || this.course?.instructor?.profileImage || this.course?.instructor?.photo || this.course?.instructor?.photoUrl || '';
      return String(raw || '').trim();
    }
    generateInitialAvatar(name) {
      const initial = String(name || 'F').trim().charAt(0).toUpperCase() || 'F';
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs><rect width="80" height="80" rx="40" fill="url(#g)"/><text x="40" y="52" text-anchor="middle" font-size="32" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff">${initial}</text></svg>`;
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
    showSuccess(msg) {
      this.successMessage = msg;
      setTimeout(() => this.successMessage = '', 3000);
    }
    static ɵfac = function CourseDetails2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseDetails2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_13__.CourseService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: CourseDetails2Component,
      selectors: [["app-course-details-2"]],
      decls: 3,
      vars: 3,
      consts: [["noSections", ""], ["class", "text-center py-5", 4, "ngIf"], ["class", "container py-5 text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "mt-2"], [1, "container", "py-5", "text-center"], [1, "text-danger"], [1, "btn", "btn-primary", 3, "routerLink"], ["class", "alert alert-success alert-dismissible mx-3 mt-2", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible mx-3 mt-2", "role", "alert", 4, "ngIf"], [1, "inner-banner", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "text-white", "mb-3", "mb-sm-2"], [1, "text-white", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "gap-sm-3", "gap-xl-4", "flex-wrap", "justify-content-md-start", "justify-content-center"], [1, "fw-medium", "text-white", "d-flex", "align-items-center", "mb-0"], ["src", "./assets/img/icons/book.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/people.svg", "alt", "img", 1, "me-2"], [1, "badge", "badge-sm", "rounded-pill", "bg-warning", "fs-12"], [1, "badge", "badge-sm", "rounded-pill", "bg-info", "fs-12"], [1, "d-sm-flex", "align-items-center", "justify-content-sm-between", "mt-5"], [1, "d-flex", "text-start", "align-items-center", "justify-content-sm-start", "justify-content-center"], [1, "avatar", "avatar-lg"], ["class", "rounded-circle", "alt", "instructor", 3, "src", "error", 4, "ngIf"], ["class", "course-instructor-avatar-fallback", 4, "ngIf"], [1, "ms-2"], [1, "fs-18", "text-white"], [1, "text-white", "fs-14"], [1, "d-flex", "mt-sm-0", "mt-2", "align-items-center", "justify-content-sm-start", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "text-warning"], [1, "course-details"], [1, "course-page-content"], [1, "card"], [1, "card-body"], [1, "subs-title", "mb-3"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "flex-wrap"], [1, "subs-title", "mb-2", "mb-sm-3"], [1, "text-gray-7", "mb-3"], ["class", "accordion accordion-customicon1 accordions-items-seperate p-0", "id", "courseAccordion", 4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-4", "gap-2", "flex-wrap"], [1, "d-flex", "align-items-center"], ["class", "course-instructor-avatar-fallback course-instructor-avatar-fallback--light", 4, "ngIf"], [1, "fs-18", "fw-semibold"], [1, "mb-0"], [1, "course-info", "align-items-center", "d-flex", "gap-2", "gap-xl-3", "mt-3", "mb-3", "flex-wrap"], [1, "fw-medium", "d-flex", "align-items-center", "fs-14", "mb-0"], ["src", "./assets/img/icons/book2.svg", "alt", "img", 1, "me-2"], ["class", "text-center py-3", 4, "ngIf"], ["class", "text-muted fs-13 mt-2", 4, "ngIf"], [1, "col-lg-4"], [1, "course-sidebar-sec"], [1, "position-relative", "mb-4"], ["size", "1400-933", 3, "settings", "onInit"], ["href", "https://www.youtube.com/embed/1trvO6dqQUI", "id", "openVideoBtn", "target", "_blank"], ["class", "img-fluid", "alt", "course cover", 3, "src", "error", 4, "ngIf"], ["class", "course-sidebar-cover-placeholder", 3, "background", 4, "ngIf"], [1, "play-icon"], [1, "ti", "ti-player-play-filled", "fs-28"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "text-success", "fs-30"], ["class", "mb-0", 4, "ngIf"], ["class", "mt-2 text-center", 4, "ngIf"], [1, "subs-title"], ["src", "./assets/img/icons/key.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/monitor-mobbile.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/teacher.svg", "alt", "img", 1, "me-2"], [1, "cou-features-card"], [1, "cou-features"], ["src", "./assets/img/icons/people2.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/note.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/play3.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/chart.svg", "alt", "img", 1, "me-2"], [1, "fa-solid", "fa-globe", "me-2"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "mx-3", "mt-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "mx-3", "mt-2"], ["alt", "instructor", 1, "rounded-circle", 3, "error", "src"], [1, "course-instructor-avatar-fallback"], [1, "fa-solid", "fa-star", "me-1"], [1, "custom-list"], ["class", "list-items", 4, "ngFor", "ngForOf"], [1, "list-items"], [1, "mb-3", "mt-4"], [1, "custom-list", "mb-0"], ["id", "courseAccordion", 1, "accordion", "accordion-customicon1", "accordions-items-seperate", "p-0"], ["class", "accordion-item", 3, "mb-0", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "accordion-button", "collapsed"], [1, "fa-solid", "fa-chevron-down"], ["data-bs-parent", "#courseAccordion", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-0"], ["class", "p-4 px-3 d-flex justify-content-between", 3, "pb-0", 4, "ngFor", "ngForOf"], [1, "p-4", "px-3", "d-flex", "justify-content-between"], ["src", "./assets/img/icons/play.svg", "alt", "", 1, "me-2"], [1, "d-flex", "gap-xl-5", "gap-3"], ["href", "javascript:void(0);", "class", "preview-link", 4, "ngIf"], ["href", "javascript:void(0);", 1, "preview-link"], [1, "text-muted"], [1, "course-instructor-avatar-fallback", "course-instructor-avatar-fallback--light"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], ["class", "d-flex mb-4", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "mb-4"], [1, "avatar", "me-3"], ["alt", "avatar", 1, "rounded-circle", 2, "width", "40px", "height", "40px", "object-fit", "cover", 3, "src"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "text-muted", "fs-12"], [1, "mb-1"], [1, "mb-0", "fs-14"], [1, "fa-solid", "fa-star", "fs-12"], [1, "mb-2"], ["rows", "3", "placeholder", "Votre commentaire...", 1, "form-control", "mb-2", "fs-14", 3, "ngModelChange", "ngModel"], ["class", "fs-14", 3, "text-success", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "fa-solid", "fa-star", "fs-18", "me-1", "cursor-pointer", 2, "cursor", "pointer", 3, "click"], [1, "fs-14"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "text-muted", "fs-13", "mt-2"], [3, "routerLink"], ["alt", "course cover", 1, "img-fluid", 3, "error", "src"], [1, "course-sidebar-cover-placeholder"], [1, "ti", "ti-book-2"], [1, "text-decoration-line-through", "me-2"], [1, "btn", "btn-success", "w-100", "mb-3", "btn-enroll", 3, "click"], [1, "ti", "ti-player-play", "me-1"], [1, "btn", "btn-primary", "w-100", "mb-3", "btn-enroll", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-100", "mb-3", "btn-enroll", 3, "routerLink"], [1, "ti", "ti-login", "me-1"], [1, "d-flex", "justify-content-between", "gap-3", "wishlist-btns", "mb-3"], ["class", "btn d-flex btn-wish flex-grow-1 text-success", 3, "routerLink", 4, "ngIf"], ["class", "btn d-flex btn-wish flex-grow-1", 3, "disabled", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "btn", "d-flex", "btn-wish"], [1, "ti", "ti-share", "me-1", "fs-18"], ["class", "btn btn-primary w-100 btn-enroll", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary w-100 btn-enroll", 3, "routerLink", 4, "ngIf"], [1, "btn", "d-flex", "btn-wish", "flex-grow-1", "text-success", 3, "routerLink"], [1, "ti", "ti-shopping-cart-check", "me-1", "fs-18"], [1, "btn", "d-flex", "btn-wish", "flex-grow-1", 3, "click", "disabled"], ["class", "ti ti-shopping-cart me-1 fs-18", 4, "ngIf"], [1, "ti", "ti-shopping-cart", "me-1", "fs-18"], [1, "btn", "btn-primary", "w-100", "btn-enroll", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-100", "btn-enroll", 3, "routerLink"], [1, "mt-2", "text-center"]],
      template: function CourseDetails2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CourseDetails2Component_div_0_Template, 4, 0, "div", 1)(1, CourseDetails2Component_div_1_Template, 5, 2, "div", 2)(2, CourseDetails2Component_ng_container_2_Template, 154, 57, "ng-container", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.errorMessage && !ctx.course);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.course);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, lightgallery_angular__WEBPACK_IMPORTED_MODULE_7__.LightgalleryModule, lightgallery_angular__WEBPACK_IMPORTED_MODULE_7__.LightgalleryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.course-details[_ngcontent-%COMP%] {\n  padding: 46px 0 64px;\n  background: #ffffff;\n}\n\n\n\n.inner-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.14);\n  background: linear-gradient(115deg, #5b21b6 0%, #9333ea 48%, #ec4899 100%) !important;\n}\n\n.inner-banner[_ngcontent-%COMP%]::before {\n  content: none !important;\n}\n\n.inner-banner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: linear-gradient(180deg, rgba(36, 10, 52, 0.1), rgba(36, 10, 52, 0.3)), radial-gradient(900px 260px at 72% 0%, rgba(255, 255, 255, 0.1), transparent 60%);\n}\n\n.inner-banner.inner-banner--with-cover[_ngcontent-%COMP%]::after {\n  background: linear-gradient(180deg, rgba(36, 10, 52, 0.1), rgba(36, 10, 52, 0.32)), radial-gradient(900px 260px at 72% 0%, rgba(255, 255, 255, 0.1), transparent 60%);\n}\n\n.inner-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.inner-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n}\n\n.course-sidebar-cover-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  text-shadow: 0 1px 8px rgba(2, 6, 23, 0.25);\n}\n\n.course-sidebar-cover-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 205px;\n  border-radius: 14px;\n}\n.course-sidebar-cover-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.course-sidebar-cover-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.course-instructor-avatar-fallback[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #fff;\n  background: linear-gradient(135deg, #22d3ee, #6366f1);\n  border: 2px solid rgba(255, 255, 255, 0.35);\n}\n\n.course-instructor-avatar-fallback--light[_ngcontent-%COMP%] {\n  border-color: #dbe3ef;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);\n}\n\n\n\n.course-page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], \n.course-sidebar-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], \n.cou-features-card[_ngcontent-%COMP%] {\n  border: 1px solid #e6eaf2;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n  margin-bottom: 16px;\n  background: #fff;\n}\n\n.course-page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n.course-sidebar-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n.cou-features-card[_ngcontent-%COMP%]   .cou-features[_ngcontent-%COMP%] {\n  padding: 1.2rem 1.2rem;\n}\n\n.subs-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n\n\n.course-page-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.course-page-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #475569;\n  line-height: 1.6;\n}\n\n.course-page-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-weight: 700;\n}\n\n.custom-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.custom-list[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.4rem;\n  margin-bottom: 0.55rem;\n}\n\n.custom-list[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.5rem;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #5625e8, #02a8b5);\n}\n\n\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 1px solid #edf1f7;\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  background: #fff;\n  box-shadow: none;\n  padding: 0.95rem 0;\n}\n\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n  background: #fff;\n  color: #5625e8;\n}\n\n.accordion-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: auto;\n  transition: transform 0.2s ease;\n}\n\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed)   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.accordion-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.preview-link[_ngcontent-%COMP%] {\n  color: #5625e8;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.preview-link[_ngcontent-%COMP%]:hover {\n  color: #3f1bb2;\n}\n\n\n\n.course-page-content[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid #eef2ff;\n}\n\n.course-page-content[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  border-color: #dbe3ef;\n  border-radius: 10px;\n}\n\n.course-page-content[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #9ab0ff;\n  box-shadow: 0 0 0 0.15rem rgba(86, 37, 232, 0.13);\n}\n\n\n\n.course-sidebar-sec[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 92px;\n}\n\n.course-sidebar-sec[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n}\n\n.course-sidebar-sec[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 14px;\n  object-fit: cover;\n}\n\n.play-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n\n.play-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(15, 23, 42, 0.52);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n\n\n\n.btn-enroll[_ngcontent-%COMP%], \n.btn-wish[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.btn-enroll[_ngcontent-%COMP%]:hover, \n.btn-wish[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-enroll.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625e8, #6f36ea);\n  border-color: transparent;\n  box-shadow: 0 10px 22px rgba(86, 37, 232, 0.24);\n}\n\n.btn-enroll.btn-success[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 20px rgba(3, 195, 90, 0.2);\n}\n\n.wishlist-btns[_ngcontent-%COMP%]   .btn-wish[_ngcontent-%COMP%] {\n  border: 1px solid #e3e8f3;\n  background: #fff;\n  color: #334155;\n}\n\n.wishlist-btns[_ngcontent-%COMP%]   .btn-wish[_ngcontent-%COMP%]:hover {\n  border-color: #cfd9ee;\n  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);\n}\n\n\n\n.course-sidebar-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.cou-features-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #334155;\n}\n\n.cou-features-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.cou-features-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.55rem 0;\n  border-bottom: 1px dashed #e8edf7;\n}\n\n.cou-features-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 0;\n}\n\n\n\n@media (max-width: 991.98px) {\n  .course-details[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .inner-banner[_ngcontent-%COMP%] {\n    padding: 34px 0;\n  }\n  .course-sidebar-sec[_ngcontent-%COMP%] {\n    position: static;\n    top: auto;\n  }\n}\n@media (max-width: 575.98px) {\n  .course-page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .course-sidebar-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], \n   .cou-features-card[_ngcontent-%COMP%]   .cou-features[_ngcontent-%COMP%] {\n    padding: 1rem 0.95rem;\n  }\n  .inner-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.65rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY291cnNlcy9jb3Vyc2UtZGV0YWlscy0yL2NvdXJzZS1kZXRhaWxzLTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUEsdUJBQUE7QUFDQTtFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQSxrQkFBQTtBQUNBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0VBQ0EscUZBQUE7QUFDRDs7QUFFQTtFQUNDLHdCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxvS0FDQztBQUFGOztBQUlBO0VBQ0MscUtBQ0M7QUFGRjs7QUFNQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtBQUhEOztBQU1BO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBSEQ7O0FBTUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FBSEQ7O0FBS0E7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZEO0FBSUM7RUFDQyxrQkFBQTtBQUZGO0FBS0M7RUFDQyxpQkFBQTtBQUhGOztBQU9BO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7RUFDQSwyQ0FBQTtBQUpEOztBQU9BO0VBQ0MscUJBQUE7RUFDQSw2Q0FBQTtBQUpEOztBQU9BLHNCQUFBO0FBQ0E7OztFQUdDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpEOztBQU9BOzs7RUFHQyxzQkFBQTtBQUpEOztBQU9BO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFKRDs7QUFPQSxzQkFBQTtBQUNBOztFQUVDLGNBQUE7RUFDQSxnQkFBQTtBQUpEOztBQU9BO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBSkQ7O0FBT0E7RUFDQyxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSkQ7O0FBT0E7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFKRDs7QUFPQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBSkQ7O0FBT0EseUJBQUE7QUFDQTtFQUNDLFNBQUE7RUFDQSxnQ0FBQTtBQUpEOztBQU9BO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSkQ7O0FBT0E7RUFDQyxnQkFBQTtFQUNBLGNBQUE7QUFKRDs7QUFPQTtFQUNDLGlCQUFBO0VBQ0EsK0JBQUE7QUFKRDs7QUFPQTtFQUNDLHlCQUFBO0FBSkQ7O0FBT0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSkQ7O0FBT0E7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpEOztBQU9BO0VBQ0MsY0FBQTtBQUpEOztBQU9BLFlBQUE7QUFDQTtFQUNDLHlCQUFBO0FBSkQ7O0FBT0E7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0FBSkQ7O0FBT0E7RUFDQyxxQkFBQTtFQUNBLGlEQUFBO0FBSkQ7O0FBT0EsOEJBQUE7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsU0FBQTtBQUpEOztBQU9BO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQUpEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKRDs7QUFPQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUpEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBSkQ7O0FBT0EsZ0JBQUE7QUFDQTs7RUFFQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxREFBQTtBQUpEOztBQU9BOztFQUVDLDJCQUFBO0FBSkQ7O0FBT0E7RUFDQyxxREFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFKRDs7QUFPQTtFQUNDLDZDQUFBO0FBSkQ7O0FBT0E7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpEOztBQU9BO0VBQ0MscUJBQUE7RUFDQSw2Q0FBQTtBQUpEOztBQU9BLGdDQUFBO0FBQ0E7O0VBRUMsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUpEOztBQU9BO0VBQ0MsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUpEOztBQU9BO0VBQ0Msa0JBQUE7RUFDQSxpQ0FBQTtBQUpEOztBQU9BO0VBQ0MsZ0JBQUE7QUFKRDs7QUFPQSxXQUFBO0FBQ0E7RUFDQyxtQkFBQTtFQUNBLFNBQUE7QUFKRDs7QUFPQSxlQUFBO0FBQ0E7RUFDQztJQUNDLGlCQUFBO0VBSkE7RUFPRDtJQUNDLGVBQUE7RUFMQTtFQVFEO0lBQ0MsZ0JBQUE7SUFDQSxTQUFBO0VBTkE7QUFDRjtBQVNBO0VBQ0M7OztJQUdDLHFCQUFBO0VBUEE7RUFVRDtJQUNDLGtCQUFBO0VBUkE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogR2xvYmFsIHBhZ2Ugcmh5dGhtICovXHJcbi5jb3Vyc2UtZGV0YWlscyB7XHJcblx0cGFkZGluZzogNDZweCAwIDY0cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLyogQmFubmVyIHBvbGlzaCAqL1xyXG4uaW5uZXItYmFubmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjNWIyMWI2IDAlLCAjOTMzM2VhIDQ4JSwgI2VjNDg5OSAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5uZXItYmFubmVyOjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlubmVyLWJhbm5lcjo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRpbnNldDogMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOlxyXG5cdFx0bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgzNiwgMTAsIDUyLCAwLjEpLCByZ2JhKDM2LCAxMCwgNTIsIDAuMykpLFxyXG5cdFx0cmFkaWFsLWdyYWRpZW50KDkwMHB4IDI2MHB4IGF0IDcyJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCA2MCUpO1xyXG59XHJcblxyXG4uaW5uZXItYmFubmVyLmlubmVyLWJhbm5lci0td2l0aC1jb3Zlcjo6YWZ0ZXIge1xyXG5cdGJhY2tncm91bmQ6XHJcblx0XHRsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDM2LCAxMCwgNTIsIDAuMSksIHJnYmEoMzYsIDEwLCA1MiwgMC4zMikpLFxyXG5cdFx0cmFkaWFsLWdyYWRpZW50KDkwMHB4IDI2MHB4IGF0IDcyJSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCB0cmFuc3BhcmVudCA2MCUpO1xyXG59XHJcblxyXG4uaW5uZXItYmFubmVyIC5jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaW5uZXItYmFubmVyIGgxIHtcclxuXHRmb250LXdlaWdodDogODAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG59XHJcblxyXG4uY291cnNlLXNpZGViYXItY292ZXItcGxhY2Vob2xkZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRnYXA6IDAuNnJlbTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDIsIDYsIDIzLCAwLjI1KTtcclxufVxyXG4uY291cnNlLXNpZGViYXItY292ZXItcGxhY2Vob2xkZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6IDIwNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblxyXG5cdGkge1xyXG5cdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdH1cclxuXHJcblx0c3BhbiB7XHJcblx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHR9XHJcbn1cclxuXHJcbi5jb3Vyc2UtaW5zdHJ1Y3Rvci1hdmF0YXItZmFsbGJhY2sge1xyXG5cdHdpZHRoOiA1NnB4O1xyXG5cdGhlaWdodDogNTZweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDEuMTVyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjJkM2VlLCAjNjM2NmYxKTtcclxuXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG59XHJcblxyXG4uY291cnNlLWluc3RydWN0b3ItYXZhdGFyLWZhbGxiYWNrLS1saWdodCB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZGJlM2VmO1xyXG5cdGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcclxufVxyXG5cclxuLyogQmFzZSBjYXJkIHF1YWxpdHkgKi9cclxuLmNvdXJzZS1wYWdlLWNvbnRlbnQgLmNhcmQsXHJcbi5jb3Vyc2Utc2lkZWJhci1zZWMgLmNhcmQsXHJcbi5jb3UtZmVhdHVyZXMtY2FyZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U2ZWFmMjtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA1KTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNvdXJzZS1wYWdlLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSxcclxuLmNvdXJzZS1zaWRlYmFyLXNlYyAuY2FyZCAuY2FyZC1ib2R5LFxyXG4uY291LWZlYXR1cmVzLWNhcmQgLmNvdS1mZWF0dXJlcyB7XHJcblx0cGFkZGluZzogMS4ycmVtIDEuMnJlbTtcclxufVxyXG5cclxuLnN1YnMtdGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0Y29sb3I6ICMwZjE3MmE7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi8qIFJpY2ggdGV4dCBjbGFyaXR5ICovXHJcbi5jb3Vyc2UtcGFnZS1jb250ZW50IHAsXHJcbi5jb3Vyc2UtcGFnZS1jb250ZW50IGxpIHtcclxuXHRjb2xvcjogIzQ3NTU2OTtcclxuXHRsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uY291cnNlLXBhZ2UtY29udGVudCBoNiB7XHJcblx0Y29sb3I6ICMxZTI5M2I7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmN1c3RvbS1saXN0IHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tbGlzdCAubGlzdC1pdGVtcyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmctbGVmdDogMS40cmVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNTVyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tbGlzdCAubGlzdC1pdGVtczo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDAuNXJlbTtcclxuXHR3aWR0aDogOHB4O1xyXG5cdGhlaWdodDogOHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTYyNWU4LCAjMDJhOGI1KTtcclxufVxyXG5cclxuLyogQWNjb3JkaW9uIHJlZmluZW1lbnQgKi9cclxuLmFjY29yZGlvbi1pdGVtIHtcclxuXHRib3JkZXI6IDA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYxZjc7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tYnV0dG9uIHtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjMGYxNzJhO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRwYWRkaW5nOiAwLjk1cmVtIDA7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tYnV0dG9uOm5vdCguY29sbGFwc2VkKSB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzU2MjVlODtcclxufVxyXG5cclxuLmFjY29yZGlvbi1idXR0b24gaSB7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIGkge1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tYm9keSB1bCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnByZXZpZXctbGluayB7XHJcblx0Y29sb3I6ICM1NjI1ZTg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWxpbms6aG92ZXIge1xyXG5cdGNvbG9yOiAjM2YxYmIyO1xyXG59XHJcblxyXG4vKiBSZXZpZXdzICovXHJcbi5jb3Vyc2UtcGFnZS1jb250ZW50IC5hdmF0YXIgaW1nIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjZWVmMmZmO1xyXG59XHJcblxyXG4uY291cnNlLXBhZ2UtY29udGVudCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci1jb2xvcjogI2RiZTNlZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY291cnNlLXBhZ2UtY29udGVudCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzlhYjBmZjtcclxuXHRib3gtc2hhZG93OiAwIDAgMCAwLjE1cmVtIHJnYmEoODYsIDM3LCAyMzIsIDAuMTMpO1xyXG59XHJcblxyXG4vKiBTaWRlYmFyIHN0aWNreSBhbmQgcG9saXNoICovXHJcbi5jb3Vyc2Utc2lkZWJhci1zZWMge1xyXG5cdHBvc2l0aW9uOiBzdGlja3k7XHJcblx0dG9wOiA5MnB4O1xyXG59XHJcblxyXG4uY291cnNlLXNpZGViYXItc2VjIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY291cnNlLXNpZGViYXItc2VjIC5wb3NpdGlvbi1yZWxhdGl2ZSBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wbGF5LWljb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRpbnNldDogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wbGF5LWljb24gaSB7XHJcblx0d2lkdGg6IDY0cHg7XHJcblx0aGVpZ2h0OiA2NHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41Mik7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG5cclxuLyogQ1RBIGJ1dHRvbnMgKi9cclxuLmJ0bi1lbnJvbGwsXHJcbi5idG4td2lzaCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tZW5yb2xsOmhvdmVyLFxyXG4uYnRuLXdpc2g6aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1lbnJvbGwuYnRuLXByaW1hcnkge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NjI1ZTgsICM2ZjM2ZWEpO1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym94LXNoYWRvdzogMCAxMHB4IDIycHggcmdiYSg4NiwgMzcsIDIzMiwgMC4yNCk7XHJcbn1cclxuXHJcbi5idG4tZW5yb2xsLmJ0bi1zdWNjZXNzIHtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDMsIDE5NSwgOTAsIDAuMik7XHJcbn1cclxuXHJcbi53aXNobGlzdC1idG5zIC5idG4td2lzaCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2UzZThmMztcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGNvbG9yOiAjMzM0MTU1O1xyXG59XHJcblxyXG4ud2lzaGxpc3QtYnRucyAuYnRuLXdpc2g6aG92ZXIge1xyXG5cdGJvcmRlci1jb2xvcjogI2NmZDllZTtcclxuXHRib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XHJcbn1cclxuXHJcbi8qIEluY2x1ZGVzIGFuZCBmZWF0dXJlcyBsaXN0cyAqL1xyXG4uY291cnNlLXNpZGViYXItc2VjIC5jYXJkIHAsXHJcbi5jb3UtZmVhdHVyZXMtY2FyZCBsaSBwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Y29sb3I6ICMzMzQxNTU7XHJcbn1cclxuXHJcbi5jb3UtZmVhdHVyZXMtY2FyZCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvdS1mZWF0dXJlcy1jYXJkIGxpIHtcclxuXHRwYWRkaW5nOiAwLjU1cmVtIDA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZThlZGY3O1xyXG59XHJcblxyXG4uY291LWZlYXR1cmVzLWNhcmQgbGk6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogQWxlcnRzICovXHJcbi5hbGVydCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRib3JkZXI6IDA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcblx0LmNvdXJzZS1kZXRhaWxzIHtcclxuXHRcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0LmlubmVyLWJhbm5lciB7XHJcblx0XHRwYWRkaW5nOiAzNHB4IDA7XHJcblx0fVxyXG5cclxuXHQuY291cnNlLXNpZGViYXItc2VjIHtcclxuXHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHR0b3A6IGF1dG87XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuXHQuY291cnNlLXBhZ2UtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5LFxyXG5cdC5jb3Vyc2Utc2lkZWJhci1zZWMgLmNhcmQgLmNhcmQtYm9keSxcclxuXHQuY291LWZlYXR1cmVzLWNhcmQgLmNvdS1mZWF0dXJlcyB7XHJcblx0XHRwYWRkaW5nOiAxcmVtIDAuOTVyZW07XHJcblx0fVxyXG5cclxuXHQuaW5uZXItYmFubmVyIGgxIHtcclxuXHRcdGZvbnQtc2l6ZTogMS42NXJlbTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CourseDetails2Component;
})();

/***/ }),

/***/ 35365:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/avatar-image.util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAvatarImage: () => (/* binding */ resolveAvatarImage)
/* harmony export */ });
const AVATAR_API_ROOT = 'http://localhost:8081';
function resolveAvatarImage(path, fallback = '') {
  if (!path || !String(path).trim()) {
    return fallback;
  }
  const raw = String(path).trim().replace(/\\/g, '/');
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:image')) {
    return raw;
  }
  if (raw.startsWith('assets/')) {
    return raw;
  }
  if (raw.startsWith('preset:')) {
    return `assets/img/course-img/${raw.replace('preset:', '')}`;
  }
  if (raw.startsWith('/')) {
    return `${AVATAR_API_ROOT}${raw}`;
  }
  if (raw.startsWith('api/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  if (raw.includes('/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  return `${AVATAR_API_ROOT}/api/files/${raw}`;
}

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

/***/ 46564:
/*!***************************************************************!*\
  !*** ./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.9.0 | October 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var zoomSettings = {
  scale: 1,
  zoom: true,
  infiniteZoom: true,
  actualSize: true,
  showZoomInOutIcons: false,
  actualSizeIcons: {
    zoomIn: 'lg-zoom-in',
    zoomOut: 'lg-zoom-out'
  },
  enableZoomAfter: 300,
  zoomPluginStrings: {
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    viewActualSize: 'View actual size'
  }
};

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
  afterAppendSlide: 'lgAfterAppendSlide',
  init: 'lgInit',
  hasVideo: 'lgHasVideo',
  containerResize: 'lgContainerResize',
  updateSlides: 'lgUpdateSlides',
  afterAppendSubHtml: 'lgAfterAppendSubHtml',
  beforeOpen: 'lgBeforeOpen',
  afterOpen: 'lgAfterOpen',
  slideItemLoad: 'lgSlideItemLoad',
  beforeSlide: 'lgBeforeSlide',
  afterSlide: 'lgAfterSlide',
  posterClick: 'lgPosterClick',
  dragStart: 'lgDragStart',
  dragMove: 'lgDragMove',
  dragEnd: 'lgDragEnd',
  beforeNextSlide: 'lgBeforeNextSlide',
  beforePrevSlide: 'lgBeforePrevSlide',
  beforeClose: 'lgBeforeClose',
  afterClose: 'lgAfterClose',
  rotateLeft: 'lgRotateLeft',
  rotateRight: 'lgRotateRight',
  flipHorizontal: 'lgFlipHorizontal',
  flipVertical: 'lgFlipVertical',
  autoplay: 'lgAutoplay',
  autoplayStart: 'lgAutoplayStart',
  autoplayStop: 'lgAutoplayStop'
};
var ZOOM_TRANSITION_DURATION = 500;
var Zoom = /** @class */function () {
  function Zoom(instance, $LG) {
    // get lightGallery core plugin instance
    this.core = instance;
    this.$LG = $LG;
    this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
    return this;
  }
  // Append Zoom controls. Actual size, Zoom-in, Zoom-out
  Zoom.prototype.buildTemplates = function () {
    var zoomIcons = this.settings.showZoomInOutIcons ? "<button id=\"" + this.core.getIdName('lg-zoom-in') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-in lg-icon\"></button><button id=\"" + this.core.getIdName('lg-zoom-out') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomOut'] + "\" class=\"lg-zoom-out lg-icon\"></button>" : '';
    if (this.settings.actualSize) {
      zoomIcons += "<button id=\"" + this.core.getIdName('lg-actual-size') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['viewActualSize'] + "\" class=\"" + this.settings.actualSizeIcons.zoomIn + " lg-icon\"></button>";
    }
    this.core.outer.addClass('lg-use-transition-for-zoom');
    this.core.$toolbar.first().append(zoomIcons);
  };
  /**
   * @desc Enable zoom option only once the image is completely loaded
   * If zoomFromOrigin is true, Zoom is enabled once the dummy image has been inserted
   *
   * Zoom styles are defined under lg-zoomable CSS class.
   */
  Zoom.prototype.enableZoom = function (event) {
    var _this = this;
    // delay will be 0 except first time
    var _speed = this.settings.enableZoomAfter + event.detail.delay;
    // set _speed value 0 if gallery opened from direct url and if it is first slide
    if (this.$LG('body').first().hasClass('lg-from-hash') && event.detail.delay) {
      // will execute only once
      _speed = 0;
    } else {
      // Remove lg-from-hash to enable starting animation.
      this.$LG('body').first().removeClass('lg-from-hash');
    }
    this.zoomableTimeout = setTimeout(function () {
      if (!_this.isImageSlide(_this.core.index)) {
        return;
      }
      _this.core.getSlideItem(event.detail.index).addClass('lg-zoomable');
      if (event.detail.index === _this.core.index) {
        _this.setZoomEssentials();
      }
    }, _speed + 30);
  };
  Zoom.prototype.enableZoomOnSlideItemLoad = function () {
    // Add zoomable class
    this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
  };
  Zoom.prototype.getDragCords = function (e) {
    return {
      x: e.pageX,
      y: e.pageY
    };
  };
  Zoom.prototype.getSwipeCords = function (e) {
    var x = e.touches[0].pageX;
    var y = e.touches[0].pageY;
    return {
      x: x,
      y: y
    };
  };
  Zoom.prototype.getDragAllowedAxises = function (scale, scaleDiff) {
    if (!this.containerRect) {
      return {
        allowX: false,
        allowY: false
      };
    }
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first().get();
    var height = 0;
    var width = 0;
    var rect = $image.getBoundingClientRect();
    if (scale) {
      height = $image.offsetHeight * scale;
      width = $image.offsetWidth * scale;
    } else if (scaleDiff) {
      height = rect.height + scaleDiff * rect.height;
      width = rect.width + scaleDiff * rect.width;
    } else {
      height = rect.height;
      width = rect.width;
    }
    var allowY = height > this.containerRect.height;
    var allowX = width > this.containerRect.width;
    return {
      allowX: allowX,
      allowY: allowY
    };
  };
  Zoom.prototype.setZoomEssentials = function () {
    this.containerRect = this.core.$content.get().getBoundingClientRect();
  };
  /**
   * @desc Image zoom
   * Translate the wrap and scale the image to get better user experience
   *
   * @param {String} scale - Zoom decrement/increment value
   */
  Zoom.prototype.zoomImage = function (scale, scaleDiff, reposition, resetToMax) {
    if (!this.containerRect || Math.abs(scaleDiff) <= 0) return;
    var offsetX = this.containerRect.width / 2 + this.containerRect.left;
    var offsetY = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
    var originalX;
    var originalY;
    if (scale === 1) {
      this.positionChanged = false;
    }
    var dragAllowedAxises = this.getDragAllowedAxises(0, scaleDiff);
    var allowY = dragAllowedAxises.allowY,
      allowX = dragAllowedAxises.allowX;
    if (this.positionChanged) {
      originalX = this.left / (this.scale - scaleDiff);
      originalY = this.top / (this.scale - scaleDiff);
      this.pageX = offsetX - originalX;
      this.pageY = offsetY - originalY;
      this.positionChanged = false;
    }
    var possibleSwipeCords = this.getPossibleSwipeDragCords(scaleDiff);
    var x;
    var y;
    var _x = offsetX - this.pageX;
    var _y = offsetY - this.pageY;
    if (scale - scaleDiff > 1) {
      var scaleVal = (scale - scaleDiff) / Math.abs(scaleDiff);
      _x = (scaleDiff < 0 ? -_x : _x) + this.left * (scaleVal + (scaleDiff < 0 ? -1 : 1));
      _y = (scaleDiff < 0 ? -_y : _y) + this.top * (scaleVal + (scaleDiff < 0 ? -1 : 1));
      x = _x / scaleVal;
      y = _y / scaleVal;
    } else {
      var scaleVal = (scale - scaleDiff) * scaleDiff;
      x = _x * scaleVal;
      y = _y * scaleVal;
    }
    if (reposition) {
      if (allowX) {
        if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
          x = possibleSwipeCords.minX;
        } else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
          x = possibleSwipeCords.maxX;
        }
      } else {
        if (scale > 1) {
          if (x < possibleSwipeCords.minX) {
            x = possibleSwipeCords.minX;
          } else if (x > possibleSwipeCords.maxX) {
            x = possibleSwipeCords.maxX;
          }
        }
      }
      // @todo fix this
      if (allowY) {
        if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
          y = possibleSwipeCords.minY;
        } else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
          y = possibleSwipeCords.maxY;
        }
      } else {
        // If the translate value based on index of beyond the viewport, utilize the available space to prevent image being cut out
        if (scale > 1) {
          //If image goes beyond viewport top, use the minim possible translate value
          if (y < possibleSwipeCords.minY) {
            y = possibleSwipeCords.minY;
          } else if (y > possibleSwipeCords.maxY) {
            y = possibleSwipeCords.maxY;
          }
        }
      }
    }
    this.setZoomStyles({
      x: x,
      y: y,
      scale: scale
    });
    this.left = x;
    this.top = y;
    if (resetToMax) {
      this.setZoomImageSize();
    }
  };
  Zoom.prototype.resetImageTranslate = function (index) {
    if (!this.isImageSlide(index)) {
      return;
    }
    var $image = this.core.getSlideItem(index).find('.lg-image').first();
    this.imageReset = false;
    $image.removeClass('reset-transition reset-transition-y reset-transition-x');
    this.core.outer.removeClass('lg-actual-size');
    $image.css('width', 'auto').css('height', 'auto');
    setTimeout(function () {
      $image.removeClass('no-transition');
    }, 10);
  };
  Zoom.prototype.setZoomImageSize = function () {
    var _this = this;
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    setTimeout(function () {
      var actualSizeScale = _this.getCurrentImageActualSizeScale();
      if (_this.scale >= actualSizeScale) {
        $image.addClass('no-transition');
        _this.imageReset = true;
      }
    }, ZOOM_TRANSITION_DURATION);
    setTimeout(function () {
      var actualSizeScale = _this.getCurrentImageActualSizeScale();
      if (_this.scale >= actualSizeScale) {
        var dragAllowedAxises = _this.getDragAllowedAxises(_this.scale);
        $image.css('width', $image.get().naturalWidth + 'px').css('height', $image.get().naturalHeight + 'px');
        _this.core.outer.addClass('lg-actual-size');
        if (dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
          $image.addClass('reset-transition');
        } else if (dragAllowedAxises.allowX && !dragAllowedAxises.allowY) {
          $image.addClass('reset-transition-x');
        } else if (!dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
          $image.addClass('reset-transition-y');
        }
      }
    }, ZOOM_TRANSITION_DURATION + 50);
  };
  /**
   * @desc apply scale3d to image and translate to image wrap
   * @param {style} X,Y and scale
   */
  Zoom.prototype.setZoomStyles = function (style) {
    var $imageWrap = this.core.getSlideItem(this.core.index).find('.lg-img-wrap').first();
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    var $dummyImage = this.core.outer.find('.lg-current .lg-dummy-img').first();
    this.scale = style.scale;
    $image.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
    $dummyImage.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
    var transform = 'translate3d(' + style.x + 'px, ' + style.y + 'px, 0)';
    $imageWrap.css('transform', transform);
  };
  /**
   * @param index - Index of the current slide
   * @param event - event will be available only if the function is called on clicking/taping the imags
   */
  Zoom.prototype.setActualSize = function (index, event) {
    var _this = this;
    if (this.zoomInProgress) {
      return;
    }
    this.zoomInProgress = true;
    var currentItem = this.core.galleryItems[this.core.index];
    this.resetImageTranslate(index);
    setTimeout(function () {
      // Allow zoom only on image
      if (!currentItem.src || _this.core.outer.hasClass('lg-first-slide-loading')) {
        return;
      }
      var scale = _this.getCurrentImageActualSizeScale();
      var prevScale = _this.scale;
      if (_this.core.outer.hasClass('lg-zoomed')) {
        _this.scale = 1;
      } else {
        _this.scale = _this.getScale(scale);
      }
      _this.setPageCords(event);
      _this.beginZoom(_this.scale);
      _this.zoomImage(_this.scale, _this.scale - prevScale, true, true);
    }, 50);
    setTimeout(function () {
      _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
    }, 60);
    setTimeout(function () {
      _this.zoomInProgress = false;
    }, ZOOM_TRANSITION_DURATION + 110);
  };
  Zoom.prototype.getNaturalWidth = function (index) {
    var $image = this.core.getSlideItem(index).find('.lg-image').first();
    var naturalWidth = this.core.galleryItems[index].width;
    return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
  };
  Zoom.prototype.getActualSizeScale = function (naturalWidth, width) {
    var _scale;
    var scale;
    if (naturalWidth >= width) {
      _scale = naturalWidth / width;
      scale = _scale || 2;
    } else {
      scale = 1;
    }
    return scale;
  };
  Zoom.prototype.getCurrentImageActualSizeScale = function () {
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    var width = $image.get().offsetWidth;
    var naturalWidth = this.getNaturalWidth(this.core.index) || width;
    return this.getActualSizeScale(naturalWidth, width);
  };
  Zoom.prototype.getPageCords = function (event) {
    var cords = {};
    if (event) {
      cords.x = event.pageX || event.touches[0].pageX;
      cords.y = event.pageY || event.touches[0].pageY;
    } else {
      var containerRect = this.core.$content.get().getBoundingClientRect();
      cords.x = containerRect.width / 2 + containerRect.left;
      cords.y = containerRect.height / 2 + this.scrollTop + containerRect.top;
    }
    return cords;
  };
  Zoom.prototype.setPageCords = function (event) {
    var pageCords = this.getPageCords(event);
    this.pageX = pageCords.x;
    this.pageY = pageCords.y;
  };
  Zoom.prototype.manageActualPixelClassNames = function () {
    var $actualSize = this.core.getElementById('lg-actual-size');
    $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
  };
  // If true, zoomed - in else zoomed out
  Zoom.prototype.beginZoom = function (scale) {
    this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
    if (scale > 1) {
      this.core.outer.addClass('lg-zoomed');
      this.manageActualPixelClassNames();
    } else {
      this.resetZoom();
    }
    return scale > 1;
  };
  Zoom.prototype.getScale = function (scale) {
    var actualSizeScale = this.getCurrentImageActualSizeScale();
    if (scale < 1) {
      scale = 1;
    } else if (scale > actualSizeScale) {
      scale = actualSizeScale;
    }
    return scale;
  };
  Zoom.prototype.init = function () {
    var _this = this;
    if (!this.settings.zoom) {
      return;
    }
    this.buildTemplates();
    this.enableZoomOnSlideItemLoad();
    var tapped = null;
    this.core.outer.on('dblclick.lg', function (event) {
      if (!_this.$LG(event.target).hasClass('lg-image')) {
        return;
      }
      _this.setActualSize(_this.core.index, event);
    });
    this.core.outer.on('touchstart.lg', function (event) {
      var $target = _this.$LG(event.target);
      if (event.touches.length === 1 && $target.hasClass('lg-image')) {
        if (!tapped) {
          tapped = setTimeout(function () {
            tapped = null;
          }, 300);
        } else {
          clearTimeout(tapped);
          tapped = null;
          event.preventDefault();
          _this.setActualSize(_this.core.index, event);
        }
      }
    });
    this.core.LGel.on(lGEvents.containerResize + ".zoom " + lGEvents.rotateRight + ".zoom " + lGEvents.rotateLeft + ".zoom " + lGEvents.flipHorizontal + ".zoom " + lGEvents.flipVertical + ".zoom", function () {
      if (!_this.core.lgOpened || !_this.isImageSlide(_this.core.index) || _this.core.touchAction) {
        return;
      }
      var _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();
      _this.top = 0;
      _this.left = 0;
      _this.setZoomEssentials();
      _this.setZoomSwipeStyles(_LGel, {
        x: 0,
        y: 0
      });
      _this.positionChanged = true;
    });
    // Update zoom on resize and orientationchange
    this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function () {
      if (!_this.core.lgOpened) return;
      _this.scrollTop = _this.$LG(window).scrollTop();
    });
    this.core.getElementById('lg-zoom-out').on('click.lg', function () {
      // Allow zoom only on image
      if (!_this.isImageSlide(_this.core.index)) {
        return;
      }
      var timeout = 0;
      if (_this.imageReset) {
        _this.resetImageTranslate(_this.core.index);
        timeout = 50;
      }
      setTimeout(function () {
        var scale = _this.scale - _this.settings.scale;
        if (scale < 1) {
          scale = 1;
        }
        _this.beginZoom(scale);
        _this.zoomImage(scale, -_this.settings.scale, true, !_this.settings.infiniteZoom);
      }, timeout);
    });
    this.core.getElementById('lg-zoom-in').on('click.lg', function () {
      _this.zoomIn();
    });
    this.core.getElementById('lg-actual-size').on('click.lg', function () {
      _this.setActualSize(_this.core.index);
    });
    this.core.LGel.on(lGEvents.beforeOpen + ".zoom", function () {
      _this.core.outer.find('.lg-item').removeClass('lg-zoomable');
    });
    this.core.LGel.on(lGEvents.afterOpen + ".zoom", function () {
      _this.scrollTop = _this.$LG(window).scrollTop();
      // Set the initial value center
      _this.pageX = _this.core.outer.width() / 2;
      _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
      _this.scale = 1;
    });
    // Reset zoom on slide change
    this.core.LGel.on(lGEvents.afterSlide + ".zoom", function (event) {
      var prevIndex = event.detail.prevIndex;
      _this.scale = 1;
      _this.positionChanged = false;
      _this.zoomInProgress = false;
      _this.resetZoom(prevIndex);
      _this.resetImageTranslate(prevIndex);
      if (_this.isImageSlide(_this.core.index)) {
        _this.setZoomEssentials();
      }
    });
    // Drag option after zoom
    this.zoomDrag();
    this.pinchZoom();
    this.zoomSwipe();
    // Store the zoomable timeout value just to clear it while closing
    this.zoomableTimeout = false;
    this.positionChanged = false;
    this.zoomInProgress = false;
  };
  Zoom.prototype.zoomIn = function () {
    // Allow zoom only on image
    if (!this.isImageSlide(this.core.index)) {
      return;
    }
    var scale = this.scale + this.settings.scale;
    if (!this.settings.infiniteZoom) {
      scale = this.getScale(scale);
    }
    this.beginZoom(scale);
    this.zoomImage(scale, Math.min(this.settings.scale, scale - this.scale), true, !this.settings.infiniteZoom);
  };
  // Reset zoom effect
  Zoom.prototype.resetZoom = function (index) {
    this.core.outer.removeClass('lg-zoomed lg-zoom-drag-transition');
    var $actualSize = this.core.getElementById('lg-actual-size');
    var $item = this.core.getSlideItem(index !== undefined ? index : this.core.index);
    $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
    $item.find('.lg-img-wrap').first().removeAttr('style');
    $item.find('.lg-image').first().removeAttr('style');
    this.scale = 1;
    this.left = 0;
    this.top = 0;
    // Reset pagx pagy values to center
    this.setPageCords();
  };
  Zoom.prototype.getTouchDistance = function (e) {
    return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY));
  };
  Zoom.prototype.pinchZoom = function () {
    var _this = this;
    var startDist = 0;
    var pinchStarted = false;
    var initScale = 1;
    var prevScale = 0;
    var $item = this.core.getSlideItem(this.core.index);
    this.core.outer.on('touchstart.lg', function (e) {
      $item = _this.core.getSlideItem(_this.core.index);
      if (!_this.isImageSlide(_this.core.index)) {
        return;
      }
      if (e.touches.length === 2) {
        e.preventDefault();
        if (_this.core.outer.hasClass('lg-first-slide-loading')) {
          return;
        }
        initScale = _this.scale || 1;
        _this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
        _this.setPageCords(e);
        _this.resetImageTranslate(_this.core.index);
        _this.core.touchAction = 'pinch';
        startDist = _this.getTouchDistance(e);
      }
    });
    this.core.$inner.on('touchmove.lg', function (e) {
      if (e.touches.length === 2 && _this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        e.preventDefault();
        var endDist = _this.getTouchDistance(e);
        var distance = startDist - endDist;
        if (!pinchStarted && Math.abs(distance) > 5) {
          pinchStarted = true;
        }
        if (pinchStarted) {
          prevScale = _this.scale;
          var _scale = Math.max(1, initScale + -distance * 0.02);
          _this.scale = Math.round((_scale + Number.EPSILON) * 100) / 100;
          var diff = _this.scale - prevScale;
          _this.zoomImage(_this.scale, Math.round((diff + Number.EPSILON) * 100) / 100, false, false);
        }
      }
    });
    this.core.$inner.on('touchend.lg', function (e) {
      if (_this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        pinchStarted = false;
        startDist = 0;
        if (_this.scale <= 1) {
          _this.resetZoom();
        } else {
          var actualSizeScale = _this.getCurrentImageActualSizeScale();
          if (_this.scale >= actualSizeScale) {
            var scaleDiff = actualSizeScale - _this.scale;
            if (scaleDiff === 0) {
              scaleDiff = 0.01;
            }
            _this.zoomImage(actualSizeScale, scaleDiff, false, true);
          }
          _this.manageActualPixelClassNames();
          _this.core.outer.addClass('lg-zoomed');
        }
        _this.core.touchAction = undefined;
      }
    });
  };
  Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, touchDuration) {
    var distanceXnew = endCoords.x - startCoords.x;
    var distanceYnew = endCoords.y - startCoords.y;
    var speedX = Math.abs(distanceXnew) / touchDuration + 1;
    var speedY = Math.abs(distanceYnew) / touchDuration + 1;
    if (speedX > 2) {
      speedX += 1;
    }
    if (speedY > 2) {
      speedY += 1;
    }
    distanceXnew = distanceXnew * speedX;
    distanceYnew = distanceYnew * speedY;
    var _LGel = this.core.getSlideItem(this.core.index).find('.lg-img-wrap').first();
    var distance = {};
    distance.x = this.left + distanceXnew;
    distance.y = this.top + distanceYnew;
    var possibleSwipeCords = this.getPossibleSwipeDragCords();
    if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
      if (allowY) {
        if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
          distance.y = possibleSwipeCords.minY;
        } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
          distance.y = possibleSwipeCords.maxY;
        }
      }
      if (allowX) {
        if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
          distance.x = possibleSwipeCords.minX;
        } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
          distance.x = possibleSwipeCords.maxX;
        }
      }
      if (allowY) {
        this.top = distance.y;
      } else {
        distance.y = this.top;
      }
      if (allowX) {
        this.left = distance.x;
      } else {
        distance.x = this.left;
      }
      this.setZoomSwipeStyles(_LGel, distance);
      this.positionChanged = true;
    }
  };
  Zoom.prototype.getZoomSwipeCords = function (startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
    var distance = {};
    if (allowY) {
      distance.y = this.top + (endCoords.y - startCoords.y);
      if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
        var diffMinY = possibleSwipeCords.minY - distance.y;
        distance.y = possibleSwipeCords.minY - diffMinY / 6;
      } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
        var diffMaxY = distance.y - possibleSwipeCords.maxY;
        distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
      }
    } else {
      distance.y = this.top;
    }
    if (allowX) {
      distance.x = this.left + (endCoords.x - startCoords.x);
      if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
        var diffMinX = possibleSwipeCords.minX - distance.x;
        distance.x = possibleSwipeCords.minX - diffMinX / 6;
      } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
        var difMaxX = distance.x - possibleSwipeCords.maxX;
        distance.x = possibleSwipeCords.maxX + difMaxX / 6;
      }
    } else {
      distance.x = this.left;
    }
    return distance;
  };
  Zoom.prototype.isBeyondPossibleLeft = function (x, minX) {
    return x >= minX;
  };
  Zoom.prototype.isBeyondPossibleRight = function (x, maxX) {
    return x <= maxX;
  };
  Zoom.prototype.isBeyondPossibleTop = function (y, minY) {
    return y >= minY;
  };
  Zoom.prototype.isBeyondPossibleBottom = function (y, maxY) {
    return y <= maxY;
  };
  Zoom.prototype.isImageSlide = function (index) {
    var currentItem = this.core.galleryItems[index];
    return this.core.getSlideType(currentItem) === 'image';
  };
  Zoom.prototype.getPossibleSwipeDragCords = function (scale) {
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    var bottom = this.core.mediaContainerPosition.bottom;
    var imgRect = $image.get().getBoundingClientRect();
    var imageHeight = imgRect.height;
    var imageWidth = imgRect.width;
    if (scale) {
      imageHeight = imageHeight + scale * imageHeight;
      imageWidth = imageWidth + scale * imageWidth;
    }
    var minY = (imageHeight - this.containerRect.height) / 2;
    var maxY = (this.containerRect.height - imageHeight) / 2 + bottom;
    var minX = (imageWidth - this.containerRect.width) / 2;
    var maxX = (this.containerRect.width - imageWidth) / 2;
    var possibleSwipeCords = {
      minY: minY,
      maxY: maxY,
      minX: minX,
      maxX: maxX
    };
    return possibleSwipeCords;
  };
  Zoom.prototype.setZoomSwipeStyles = function (LGel, distance) {
    LGel.css('transform', 'translate3d(' + distance.x + 'px, ' + distance.y + 'px, 0)');
  };
  Zoom.prototype.zoomSwipe = function () {
    var _this = this;
    var startCoords = {};
    var endCoords = {};
    var isMoved = false;
    // Allow x direction drag
    var allowX = false;
    // Allow Y direction drag
    var allowY = false;
    var startTime = new Date();
    var endTime = new Date();
    var possibleSwipeCords;
    var _LGel;
    var $item = this.core.getSlideItem(this.core.index);
    this.core.$inner.on('touchstart.lg', function (e) {
      // Allow zoom only on image
      if (!_this.isImageSlide(_this.core.index)) {
        return;
      }
      $item = _this.core.getSlideItem(_this.core.index);
      if ((_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && e.touches.length === 1 && _this.core.outer.hasClass('lg-zoomed')) {
        e.preventDefault();
        startTime = new Date();
        _this.core.touchAction = 'zoomSwipe';
        _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();
        var dragAllowedAxises = _this.getDragAllowedAxises(0);
        allowY = dragAllowedAxises.allowY;
        allowX = dragAllowedAxises.allowX;
        if (allowX || allowY) {
          startCoords = _this.getSwipeCords(e);
        }
        possibleSwipeCords = _this.getPossibleSwipeDragCords();
        // reset opacity and transition duration
        _this.core.outer.addClass('lg-zoom-dragging lg-zoom-drag-transition');
      }
    });
    this.core.$inner.on('touchmove.lg', function (e) {
      if (e.touches.length === 1 && _this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        e.preventDefault();
        _this.core.touchAction = 'zoomSwipe';
        endCoords = _this.getSwipeCords(e);
        var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
        if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
          isMoved = true;
          _this.setZoomSwipeStyles(_LGel, distance);
        }
      }
    });
    this.core.$inner.on('touchend.lg', function (e) {
      if (_this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        e.preventDefault();
        _this.core.touchAction = undefined;
        _this.core.outer.removeClass('lg-zoom-dragging');
        if (!isMoved) {
          return;
        }
        isMoved = false;
        endTime = new Date();
        var touchDuration = endTime.valueOf() - startTime.valueOf();
        _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
      }
    });
  };
  Zoom.prototype.zoomDrag = function () {
    var _this = this;
    var startCoords = {};
    var endCoords = {};
    var isDragging = false;
    var isMoved = false;
    // Allow x direction drag
    var allowX = false;
    // Allow Y direction drag
    var allowY = false;
    var startTime;
    var endTime;
    var possibleSwipeCords;
    var _LGel;
    this.core.outer.on('mousedown.lg.zoom', function (e) {
      // Allow zoom only on image
      if (!_this.isImageSlide(_this.core.index)) {
        return;
      }
      var $item = _this.core.getSlideItem(_this.core.index);
      if (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
        startTime = new Date();
        _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();
        var dragAllowedAxises = _this.getDragAllowedAxises(0);
        allowY = dragAllowedAxises.allowY;
        allowX = dragAllowedAxises.allowX;
        if (_this.core.outer.hasClass('lg-zoomed')) {
          if (_this.$LG(e.target).hasClass('lg-object') && (allowX || allowY)) {
            e.preventDefault();
            startCoords = _this.getDragCords(e);
            possibleSwipeCords = _this.getPossibleSwipeDragCords();
            isDragging = true;
            _this.core.outer.removeClass('lg-grab').addClass('lg-grabbing lg-zoom-drag-transition lg-zoom-dragging');
            // reset opacity and transition duration
          }
        }
      }
    });
    this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (e) {
      if (isDragging) {
        isMoved = true;
        endCoords = _this.getDragCords(e);
        var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
        _this.setZoomSwipeStyles(_LGel, distance);
      }
    });
    this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (e) {
      if (isDragging) {
        endTime = new Date();
        isDragging = false;
        _this.core.outer.removeClass('lg-zoom-dragging');
        // Fix for chrome mouse move on click
        if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
          endCoords = _this.getDragCords(e);
          var touchDuration = endTime.valueOf() - startTime.valueOf();
          _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
        }
        isMoved = false;
      }
      _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
    });
  };
  Zoom.prototype.closeGallery = function () {
    this.resetZoom();
    this.zoomInProgress = false;
  };
  Zoom.prototype.destroy = function () {
    // Unbind all events added by lightGallery zoom plugin
    this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
    this.core.LGel.off('.lg.zoom');
    this.core.LGel.off('.zoom');
    clearTimeout(this.zoomableTimeout);
    this.zoomableTimeout = false;
  };
  return Zoom;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zoom);

/***/ }),

/***/ 81292:
/*!*****************************************************************!*\
  !*** ./node_modules/lightgallery/plugins/video/lg-video.es5.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.9.0 | October 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var videoSettings = {
  autoplayFirstVideo: true,
  youTubePlayerParams: false,
  vimeoPlayerParams: false,
  wistiaPlayerParams: false,
  gotoNextSlideOnVideoEnd: true,
  autoplayVideoOnSlide: false,
  videojs: false,
  videojsTheme: '',
  videojsOptions: {}
};

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
  afterAppendSlide: 'lgAfterAppendSlide',
  init: 'lgInit',
  hasVideo: 'lgHasVideo',
  containerResize: 'lgContainerResize',
  updateSlides: 'lgUpdateSlides',
  afterAppendSubHtml: 'lgAfterAppendSubHtml',
  beforeOpen: 'lgBeforeOpen',
  afterOpen: 'lgAfterOpen',
  slideItemLoad: 'lgSlideItemLoad',
  beforeSlide: 'lgBeforeSlide',
  afterSlide: 'lgAfterSlide',
  posterClick: 'lgPosterClick',
  dragStart: 'lgDragStart',
  dragMove: 'lgDragMove',
  dragEnd: 'lgDragEnd',
  beforeNextSlide: 'lgBeforeNextSlide',
  beforePrevSlide: 'lgBeforePrevSlide',
  beforeClose: 'lgBeforeClose',
  afterClose: 'lgAfterClose',
  rotateLeft: 'lgRotateLeft',
  rotateRight: 'lgRotateRight',
  flipHorizontal: 'lgFlipHorizontal',
  flipVertical: 'lgFlipVertical',
  autoplay: 'lgAutoplay',
  autoplayStart: 'lgAutoplayStart',
  autoplayStop: 'lgAutoplayStop'
};
var param = function (obj) {
  return Object.keys(obj).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
};
var paramsToObject = function (url) {
  var paramas = url.slice(1).split('&').map(function (p) {
    return p.split('=');
  }).reduce(function (obj, pair) {
    var _a = pair.map(decodeURIComponent),
      key = _a[0],
      value = _a[1];
    obj[key] = value;
    return obj;
  }, {});
  return paramas;
};
var getYouTubeParams = function (videoInfo, youTubePlayerParamsSettings) {
  if (!videoInfo.youtube) return '';
  var slideUrlParams = videoInfo.youtube[2] ? paramsToObject(videoInfo.youtube[2]) : '';
  // For youtube first params gets priority if duplicates found
  var defaultYouTubePlayerParams = {
    wmode: 'opaque',
    autoplay: 0,
    mute: 1,
    enablejsapi: 1
  };
  var playerParamsSettings = youTubePlayerParamsSettings || {};
  var youTubePlayerParams = __assign(__assign(__assign({}, defaultYouTubePlayerParams), playerParamsSettings), slideUrlParams);
  var youTubeParams = "?" + param(youTubePlayerParams);
  return youTubeParams;
};
var isYouTubeNoCookie = function (url) {
  return url.includes('youtube-nocookie.com');
};
var getVimeoURLParams = function (defaultParams, videoInfo) {
  if (!videoInfo || !videoInfo.vimeo) return '';
  var urlParams = videoInfo.vimeo[2] || '';
  var defaultVimeoPlayerParams = Object.assign({}, {
    autoplay: 0,
    muted: 1
  }, defaultParams);
  var defaultPlayerParams = defaultVimeoPlayerParams && Object.keys(defaultVimeoPlayerParams).length !== 0 ? param(defaultVimeoPlayerParams) : '';
  // Support private video
  var urlWithHash = videoInfo.vimeo[0].split('/').pop() || '';
  var urlWithHashWithParams = urlWithHash.split('?')[0] || '';
  var hash = urlWithHashWithParams.split('#')[0];
  var isPrivate = videoInfo.vimeo[1] !== hash;
  if (isPrivate) {
    urlParams = urlParams.replace("/" + hash, '');
  }
  urlParams = urlParams[0] == '?' ? '&' + urlParams.slice(1) : urlParams || '';
  var privateUrlParams = isPrivate ? "h=" + hash : '';
  defaultPlayerParams = privateUrlParams ? "&" + defaultPlayerParams : defaultPlayerParams;
  var vimeoPlayerParams = "?" + privateUrlParams + defaultPlayerParams + urlParams;
  return vimeoPlayerParams;
};

/**
 * Video module for lightGallery
 * Supports HTML5, YouTube, Vimeo, wistia videos
 *
 *
 * @ref Wistia
 * https://wistia.com/support/integrations/wordpress(How to get url)
 * https://wistia.com/support/developers/embed-options#using-embed-options
 * https://wistia.com/support/developers/player-api
 * https://wistia.com/support/developers/construct-an-embed-code
 * http://jsfiddle.net/xvnm7xLm/
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * https://wistia.com/support/embed-and-share/sharing-videos
 * https://private-sharing.wistia.com/medias/mwhrulrucj
 *
 * @ref Youtube
 * https://developers.google.com/youtube/player_parameters#enablejsapi
 * https://developers.google.com/youtube/iframe_api_reference
 * https://developer.chrome.com/blog/autoplay/#iframe-delegation
 *
 * @ref Vimeo
 * https://stackoverflow.com/questions/10488943/easy-way-to-get-vimeo-id-from-a-vimeo-url
 * https://vimeo.zendesk.com/hc/en-us/articles/360000121668-Starting-playback-at-a-specific-timecode
 * https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters
 */
var Video = /** @class */function () {
  function Video(instance) {
    // get lightGallery core plugin instance
    this.core = instance;
    this.settings = __assign(__assign({}, videoSettings), this.core.settings);
    return this;
  }
  Video.prototype.init = function () {
    var _this = this;
    /**
     * Event triggered when video url found without poster
     * Append video HTML
     * Play if autoplayFirstVideo is true
     */
    this.core.LGel.on(lGEvents.hasVideo + ".video", this.onHasVideo.bind(this));
    this.core.LGel.on(lGEvents.posterClick + ".video", function () {
      var $el = _this.core.getSlideItem(_this.core.index);
      _this.loadVideoOnPosterClick($el);
    });
    this.core.LGel.on(lGEvents.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
    // @desc fired immediately before each slide transition.
    this.core.LGel.on(lGEvents.beforeSlide + ".video", this.onBeforeSlide.bind(this));
    // @desc fired immediately after each slide transition.
    this.core.LGel.on(lGEvents.afterSlide + ".video", this.onAfterSlide.bind(this));
  };
  /**
   * @desc Event triggered when a slide is completely loaded
   *
   * @param {Event} event - lightGalley custom event
   */
  Video.prototype.onSlideItemLoad = function (event) {
    var _this = this;
    var _a = event.detail,
      isFirstSlide = _a.isFirstSlide,
      index = _a.index;
    // Should check the active slide as well as user may have moved to different slide before the first slide is loaded
    if (this.settings.autoplayFirstVideo && isFirstSlide && index === this.core.index) {
      // Delay is just for the transition effect on video load
      setTimeout(function () {
        _this.loadAndPlayVideo(index);
      }, 200);
    }
    // Should not call on first slide. should check only if the slide is active
    if (!isFirstSlide && this.settings.autoplayVideoOnSlide && index === this.core.index) {
      this.loadAndPlayVideo(index);
    }
  };
  /**
   * @desc Event triggered when video url or poster found
   * Append video HTML is poster is not given
   * Play if autoplayFirstVideo is true
   *
   * @param {Event} event - Javascript Event object.
   */
  Video.prototype.onHasVideo = function (event) {
    var _a = event.detail,
      index = _a.index,
      src = _a.src,
      html5Video = _a.html5Video,
      hasPoster = _a.hasPoster;
    if (!hasPoster) {
      // All functions are called separately if poster exist in loadVideoOnPosterClick function
      this.appendVideos(this.core.getSlideItem(index), {
        src: src,
        addClass: 'lg-object',
        index: index,
        html5Video: html5Video
      });
      // Automatically navigate to next slide once video reaches the end.
      this.gotoNextSlideOnVideoEnd(src, index);
    }
  };
  /**
   * @desc fired immediately before each slide transition.
   * Pause the previous video
   * Hide the download button if the slide contains YouTube, Vimeo, or Wistia videos.
   *
   * @param {Event} event - Javascript Event object.
   * @param {number} prevIndex - Previous index of the slide.
   * @param {number} index - Current index of the slide
   */
  Video.prototype.onBeforeSlide = function (event) {
    if (this.core.lGalleryOn) {
      var prevIndex = event.detail.prevIndex;
      this.pauseVideo(prevIndex);
    }
  };
  /**
   * @desc fired immediately after each slide transition.
   * Play video if autoplayVideoOnSlide option is enabled.
   *
   * @param {Event} event - Javascript Event object.
   * @param {number} prevIndex - Previous index of the slide.
   * @param {number} index - Current index of the slide
   * @todo should check on onSlideLoad as well if video is not loaded on after slide
   */
  Video.prototype.onAfterSlide = function (event) {
    var _this = this;
    var _a = event.detail,
      index = _a.index,
      prevIndex = _a.prevIndex;
    // Do not call on first slide
    var $slide = this.core.getSlideItem(index);
    if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
      if ($slide.hasClass('lg-complete')) {
        setTimeout(function () {
          _this.loadAndPlayVideo(index);
        }, 100);
      }
    }
  };
  Video.prototype.loadAndPlayVideo = function (index) {
    var $slide = this.core.getSlideItem(index);
    var currentGalleryItem = this.core.galleryItems[index];
    if (currentGalleryItem.poster) {
      this.loadVideoOnPosterClick($slide, true);
    } else {
      this.playVideo(index);
    }
  };
  /**
   * Play HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
   * @param {number} index - Index of the slide
   */
  Video.prototype.playVideo = function (index) {
    this.controlVideo(index, 'play');
  };
  /**
   * Pause HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
   * @param {number} index - Index of the slide
   */
  Video.prototype.pauseVideo = function (index) {
    this.controlVideo(index, 'pause');
  };
  Video.prototype.getVideoHtml = function (src, addClass, index, html5Video) {
    var video = '';
    var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
    var currentGalleryItem = this.core.galleryItems[index];
    var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
    videoTitle = videoTitle ? 'title="' + videoTitle + '"' : '';
    var commonIframeProps = "allowtransparency=\"true\"\n            frameborder=\"0\"\n            scrolling=\"no\"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen";
    if (videoInfo.youtube) {
      var videoId = 'lg-youtube' + index;
      var youTubeParams = getYouTubeParams(videoInfo, this.settings.youTubePlayerParams);
      var isYouTubeNoCookieURL = isYouTubeNoCookie(src);
      var youtubeURL = isYouTubeNoCookieURL ? '//www.youtube-nocookie.com/' : '//www.youtube.com/';
      video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-youtube " + addClass + "\" " + videoTitle + " src=\"" + youtubeURL + "embed/" + (videoInfo.youtube[1] + youTubeParams) + "\" " + commonIframeProps + "></iframe>";
    } else if (videoInfo.vimeo) {
      var videoId = 'lg-vimeo' + index;
      var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
      video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-vimeo " + addClass + "\" " + videoTitle + " src=\"//player.vimeo.com/video/" + (videoInfo.vimeo[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
    } else if (videoInfo.wistia) {
      var wistiaId = 'lg-wistia' + index;
      var playerParams = param(this.settings.wistiaPlayerParams);
      playerParams = playerParams ? '?' + playerParams : '';
      video = "<iframe allow=\"autoplay\" id=\"" + wistiaId + "\" src=\"//fast.wistia.net/embed/iframe/" + (videoInfo.wistia[4] + playerParams) + "\" " + videoTitle + " class=\"wistia_embed lg-video-object lg-wistia " + addClass + "\" name=\"wistia_embed\" " + commonIframeProps + "></iframe>";
    } else if (videoInfo.html5) {
      var html5VideoMarkup = '';
      for (var i = 0; i < html5Video.source.length; i++) {
        var type = html5Video.source[i].type;
        var typeAttr = type ? "type=\"" + type + "\"" : '';
        html5VideoMarkup += "<source src=\"" + html5Video.source[i].src + "\" " + typeAttr + ">";
      }
      if (html5Video.tracks) {
        var _loop_1 = function (i) {
          var trackAttributes = '';
          var track = html5Video.tracks[i];
          Object.keys(track || {}).forEach(function (key) {
            trackAttributes += key + "=\"" + track[key] + "\" ";
          });
          html5VideoMarkup += "<track " + trackAttributes + ">";
        };
        for (var i = 0; i < html5Video.tracks.length; i++) {
          _loop_1(i);
        }
      }
      var html5VideoAttrs_1 = '';
      var videoAttributes_1 = html5Video.attributes || {};
      Object.keys(videoAttributes_1 || {}).forEach(function (key) {
        html5VideoAttrs_1 += key + "=\"" + videoAttributes_1[key] + "\" ";
      });
      video = "<video class=\"lg-video-object lg-html5 " + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + ' ' : '') + " " + (this.settings.videojs ? ' video-js' : '') + "\" " + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
    }
    return video;
  };
  /**
   * @desc - Append videos to the slide
   *
   * @param {HTMLElement} el - slide element
   * @param {Object} videoParams - Video parameters, Contains src, class, index, htmlVideo
   */
  Video.prototype.appendVideos = function (el, videoParams) {
    var _a;
    var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
    el.find('.lg-video-cont').append(videoHtml);
    var $videoElement = el.find('.lg-video-object').first();
    if (videoParams.html5Video) {
      $videoElement.on('mousedown.lg.video', function (e) {
        e.stopPropagation();
      });
    }
    if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
      try {
        return videojs($videoElement.get(), this.settings.videojsOptions);
      } catch (e) {
        console.error('lightGallery:- Make sure you have included videojs');
      }
    }
  };
  Video.prototype.gotoNextSlideOnVideoEnd = function (src, index) {
    var _this = this;
    var $videoElement = this.core.getSlideItem(index).find('.lg-video-object').first();
    var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
    if (this.settings.gotoNextSlideOnVideoEnd) {
      if (videoInfo.html5) {
        $videoElement.on('ended', function () {
          _this.core.goToNextSlide();
        });
      } else if (videoInfo.vimeo) {
        try {
          // https://github.com/vimeo/player.js/#ended
          new Vimeo.Player($videoElement.get()).on('ended', function () {
            _this.core.goToNextSlide();
          });
        } catch (e) {
          console.error('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
        }
      } else if (videoInfo.wistia) {
        try {
          window._wq = window._wq || [];
          // @todo Event is gettign triggered multiple times
          window._wq.push({
            id: $videoElement.attr('id'),
            onReady: function (video) {
              video.bind('end', function () {
                _this.core.goToNextSlide();
              });
            }
          });
        } catch (e) {
          console.error('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
        }
      }
    }
  };
  Video.prototype.controlVideo = function (index, action) {
    var $videoElement = this.core.getSlideItem(index).find('.lg-video-object').first();
    var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
    if (!$videoElement.get()) return;
    if (videoInfo.youtube) {
      try {
        $videoElement.get().contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + action + "Video\",\"args\":\"\"}", '*');
      } catch (e) {
        console.error("lightGallery:- " + e);
      }
    } else if (videoInfo.vimeo) {
      try {
        new Vimeo.Player($videoElement.get())[action]();
      } catch (e) {
        console.error('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
      }
    } else if (videoInfo.html5) {
      if (this.settings.videojs) {
        try {
          videojs($videoElement.get())[action]();
        } catch (e) {
          console.error('lightGallery:- Make sure you have included videojs');
        }
      } else {
        $videoElement.get()[action]();
      }
    } else if (videoInfo.wistia) {
      try {
        window._wq = window._wq || [];
        // @todo Find a way to destroy wistia player instance
        window._wq.push({
          id: $videoElement.attr('id'),
          onReady: function (video) {
            video[action]();
          }
        });
      } catch (e) {
        console.error('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
      }
    }
  };
  Video.prototype.loadVideoOnPosterClick = function ($el, forcePlay) {
    var _this = this;
    // check slide has poster
    if (!$el.hasClass('lg-video-loaded')) {
      // check already video element present
      if (!$el.hasClass('lg-has-video')) {
        $el.addClass('lg-has-video');
        var _html = void 0;
        var _src = this.core.galleryItems[this.core.index].src;
        var video = this.core.galleryItems[this.core.index].video;
        if (video) {
          _html = typeof video === 'string' ? JSON.parse(video) : video;
        }
        var videoJsPlayer_1 = this.appendVideos($el, {
          src: _src,
          addClass: '',
          index: this.core.index,
          html5Video: _html
        });
        this.gotoNextSlideOnVideoEnd(_src, this.core.index);
        var $tempImg = $el.find('.lg-object').first().get();
        // @todo make sure it is working
        $el.find('.lg-video-cont').first().append($tempImg);
        $el.addClass('lg-video-loading');
        videoJsPlayer_1 && videoJsPlayer_1.ready(function () {
          videoJsPlayer_1.on('loadedmetadata', function () {
            _this.onVideoLoadAfterPosterClick($el, _this.core.index);
          });
        });
        $el.find('.lg-video-object').first().on('load.lg error.lg loadedmetadata.lg', function () {
          setTimeout(function () {
            _this.onVideoLoadAfterPosterClick($el, _this.core.index);
          }, 50);
        });
      } else {
        this.playVideo(this.core.index);
      }
    } else if (forcePlay) {
      this.playVideo(this.core.index);
    }
  };
  Video.prototype.onVideoLoadAfterPosterClick = function ($el, index) {
    $el.addClass('lg-video-loaded');
    this.playVideo(index);
  };
  Video.prototype.destroy = function () {
    this.core.LGel.off('.lg.video');
    this.core.LGel.off('.video');
  };
  return Video;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),

/***/ 90828:
/*!*******************************************************!*\
  !*** ./node_modules/lightgallery/lightgallery.es5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.9.0 | October 1st 2025
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
  afterAppendSlide: 'lgAfterAppendSlide',
  init: 'lgInit',
  hasVideo: 'lgHasVideo',
  containerResize: 'lgContainerResize',
  updateSlides: 'lgUpdateSlides',
  afterAppendSubHtml: 'lgAfterAppendSubHtml',
  beforeOpen: 'lgBeforeOpen',
  afterOpen: 'lgAfterOpen',
  slideItemLoad: 'lgSlideItemLoad',
  beforeSlide: 'lgBeforeSlide',
  afterSlide: 'lgAfterSlide',
  posterClick: 'lgPosterClick',
  dragStart: 'lgDragStart',
  dragMove: 'lgDragMove',
  dragEnd: 'lgDragEnd',
  beforeNextSlide: 'lgBeforeNextSlide',
  beforePrevSlide: 'lgBeforePrevSlide',
  beforeClose: 'lgBeforeClose',
  afterClose: 'lgAfterClose',
  rotateLeft: 'lgRotateLeft',
  rotateRight: 'lgRotateRight',
  flipHorizontal: 'lgFlipHorizontal',
  flipVertical: 'lgFlipVertical',
  autoplay: 'lgAutoplay',
  autoplayStart: 'lgAutoplayStart',
  autoplayStop: 'lgAutoplayStop'
};
var lightGalleryCoreSettings = {
  mode: 'lg-slide',
  easing: 'ease',
  speed: 400,
  licenseKey: '0000-0000-000-0000',
  height: '100%',
  width: '100%',
  addClass: '',
  startClass: 'lg-start-zoom',
  backdropDuration: 300,
  container: '',
  startAnimationDuration: 400,
  zoomFromOrigin: true,
  hideBarsDelay: 0,
  showBarsAfter: 10000,
  slideDelay: 0,
  supportLegacyBrowser: true,
  allowMediaOverlap: false,
  videoMaxSize: '1280-720',
  loadYouTubePoster: true,
  defaultCaptionHeight: 0,
  ariaLabelledby: '',
  ariaDescribedby: '',
  resetScrollPosition: true,
  hideScrollbar: false,
  closable: true,
  swipeToClose: true,
  closeOnTap: true,
  showCloseIcon: true,
  showMaximizeIcon: false,
  loop: true,
  escKey: true,
  keyPress: true,
  trapFocus: true,
  controls: true,
  slideEndAnimation: true,
  hideControlOnEnd: false,
  mousewheel: false,
  getCaptionFromTitleOrAlt: true,
  appendSubHtmlTo: '.lg-sub-html',
  subHtmlSelectorRelative: false,
  preload: 2,
  numberOfSlideItemsInDom: 10,
  selector: '',
  selectWithin: '',
  nextHtml: '',
  prevHtml: '',
  index: 0,
  iframeWidth: '100%',
  iframeHeight: '100%',
  iframeMaxWidth: '100%',
  iframeMaxHeight: '100%',
  download: true,
  counter: true,
  appendCounterTo: '.lg-toolbar',
  swipeThreshold: 50,
  enableSwipe: true,
  enableDrag: true,
  dynamic: false,
  dynamicEl: [],
  extraProps: [],
  exThumbImage: '',
  isMobile: undefined,
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false
  },
  plugins: [],
  strings: {
    closeGallery: 'Close gallery',
    toggleMaximize: 'Toggle maximize',
    previousSlide: 'Previous slide',
    nextSlide: 'Next slide',
    download: 'Download',
    playVideo: 'Play video',
    mediaLoadingFailed: 'Oops... Failed to load content...'
  }
};
function initLgPolyfills() {
  (function () {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: null
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    window.CustomEvent = CustomEvent;
  })();
  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
  })();
}
var lgQuery = /** @class */function () {
  function lgQuery(selector) {
    this.cssVenderPrefixes = ['TransitionDuration', 'TransitionTimingFunction', 'Transform', 'Transition'];
    this.selector = this._getSelector(selector);
    this.firstElement = this._getFirstEl();
    return this;
  }
  lgQuery.generateUUID = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };
  lgQuery.prototype._getSelector = function (selector, context) {
    if (context === void 0) {
      context = document;
    }
    if (typeof selector !== 'string') {
      return selector;
    }
    context = context || document;
    var fl = selector.substring(0, 1);
    if (fl === '#') {
      return context.querySelector(selector);
    } else {
      return context.querySelectorAll(selector);
    }
  };
  lgQuery.prototype._each = function (func) {
    if (!this.selector) {
      return this;
    }
    if (this.selector.length !== undefined) {
      [].forEach.call(this.selector, func);
    } else {
      func(this.selector, 0);
    }
    return this;
  };
  lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
    // prettier-ignore
    var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
      return group1.toUpperCase();
    });
    if (this.cssVenderPrefixes.indexOf(property) !== -1) {
      el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
      el.style['webkit' + property] = value;
      el.style['moz' + property] = value;
      el.style['ms' + property] = value;
      el.style['o' + property] = value;
    } else {
      el.style[property] = value;
    }
  };
  lgQuery.prototype._getFirstEl = function () {
    if (this.selector && this.selector.length !== undefined) {
      return this.selector[0];
    } else {
      return this.selector;
    }
  };
  lgQuery.prototype.isEventMatched = function (event, eventName) {
    var eventNamespace = eventName.split('.');
    return event.split('.').filter(function (e) {
      return e;
    }).every(function (e) {
      return eventNamespace.indexOf(e) !== -1;
    });
  };
  lgQuery.prototype.attr = function (attr, value) {
    if (value === undefined) {
      if (!this.firstElement) {
        return '';
      }
      return this.firstElement.getAttribute(attr);
    }
    this._each(function (el) {
      el.setAttribute(attr, value);
    });
    return this;
  };
  lgQuery.prototype.find = function (selector) {
    return $LG(this._getSelector(selector, this.selector));
  };
  lgQuery.prototype.first = function () {
    if (this.selector && this.selector.length !== undefined) {
      return $LG(this.selector[0]);
    } else {
      return $LG(this.selector);
    }
  };
  lgQuery.prototype.eq = function (index) {
    return $LG(this.selector[index]);
  };
  lgQuery.prototype.parent = function () {
    return $LG(this.selector.parentElement);
  };
  lgQuery.prototype.get = function () {
    return this._getFirstEl();
  };
  lgQuery.prototype.removeAttr = function (attributes) {
    var attrs = attributes.split(' ');
    this._each(function (el) {
      attrs.forEach(function (attr) {
        return el.removeAttribute(attr);
      });
    });
    return this;
  };
  lgQuery.prototype.wrap = function (className) {
    if (!this.firstElement) {
      return this;
    }
    var wrapper = document.createElement('div');
    wrapper.className = className;
    this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
    this.firstElement.parentNode.removeChild(this.firstElement);
    wrapper.appendChild(this.firstElement);
    return this;
  };
  lgQuery.prototype.addClass = function (classNames) {
    if (classNames === void 0) {
      classNames = '';
    }
    this._each(function (el) {
      // IE doesn't support multiple arguments
      classNames.split(' ').forEach(function (className) {
        if (className) {
          el.classList.add(className);
        }
      });
    });
    return this;
  };
  lgQuery.prototype.removeClass = function (classNames) {
    this._each(function (el) {
      // IE doesn't support multiple arguments
      classNames.split(' ').forEach(function (className) {
        if (className) {
          el.classList.remove(className);
        }
      });
    });
    return this;
  };
  lgQuery.prototype.hasClass = function (className) {
    if (!this.firstElement) {
      return false;
    }
    return this.firstElement.classList.contains(className);
  };
  lgQuery.prototype.hasAttribute = function (attribute) {
    if (!this.firstElement) {
      return false;
    }
    return this.firstElement.hasAttribute(attribute);
  };
  lgQuery.prototype.toggleClass = function (className) {
    if (!this.firstElement) {
      return this;
    }
    if (this.hasClass(className)) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }
    return this;
  };
  lgQuery.prototype.css = function (property, value) {
    var _this = this;
    this._each(function (el) {
      _this._setCssVendorPrefix(el, property, value);
    });
    return this;
  };
  // Need to pass separate namespaces for separate elements
  lgQuery.prototype.on = function (events, listener) {
    var _this = this;
    if (!this.selector) {
      return this;
    }
    events.split(' ').forEach(function (event) {
      if (!Array.isArray(lgQuery.eventListeners[event])) {
        lgQuery.eventListeners[event] = [];
      }
      lgQuery.eventListeners[event].push(listener);
      _this.selector.addEventListener(event.split('.')[0], listener);
    });
    return this;
  };
  // @todo - test this
  lgQuery.prototype.once = function (event, listener) {
    var _this = this;
    this.on(event, function () {
      _this.off(event);
      listener(event);
    });
    return this;
  };
  lgQuery.prototype.off = function (event) {
    var _this = this;
    if (!this.selector) {
      return this;
    }
    Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
      if (_this.isEventMatched(event, eventName)) {
        lgQuery.eventListeners[eventName].forEach(function (listener) {
          _this.selector.removeEventListener(eventName.split('.')[0], listener);
        });
        lgQuery.eventListeners[eventName] = [];
      }
    });
    return this;
  };
  lgQuery.prototype.trigger = function (event, detail) {
    if (!this.firstElement) {
      return this;
    }
    var customEvent = new CustomEvent(event.split('.')[0], {
      detail: detail || null
    });
    this.firstElement.dispatchEvent(customEvent);
    return this;
  };
  // Does not support IE
  lgQuery.prototype.load = function (url) {
    var _this = this;
    fetch(url).then(function (res) {
      return res.text();
    }).then(function (html) {
      _this.selector.innerHTML = html;
    });
    return this;
  };
  lgQuery.prototype.html = function (html) {
    if (html === undefined) {
      if (!this.firstElement) {
        return '';
      }
      return this.firstElement.innerHTML;
    }
    this._each(function (el) {
      el.innerHTML = html;
    });
    return this;
  };
  lgQuery.prototype.append = function (html) {
    this._each(function (el) {
      if (typeof html === 'string') {
        el.insertAdjacentHTML('beforeend', html);
      } else {
        el.appendChild(html);
      }
    });
    return this;
  };
  lgQuery.prototype.prepend = function (html) {
    this._each(function (el) {
      if (typeof html === 'string') {
        el.insertAdjacentHTML('afterbegin', html);
      } else if (html instanceof HTMLElement) {
        el.insertBefore(html.cloneNode(true), el.firstChild);
      }
    });
    return this;
  };
  lgQuery.prototype.remove = function () {
    this._each(function (el) {
      el.parentNode.removeChild(el);
    });
    return this;
  };
  lgQuery.prototype.empty = function () {
    this._each(function (el) {
      el.innerHTML = '';
    });
    return this;
  };
  lgQuery.prototype.scrollTop = function (scrollTop) {
    if (scrollTop !== undefined) {
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
      return this;
    } else {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
  };
  lgQuery.prototype.scrollLeft = function (scrollLeft) {
    if (scrollLeft !== undefined) {
      document.body.scrollLeft = scrollLeft;
      document.documentElement.scrollLeft = scrollLeft;
      return this;
    } else {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
  };
  lgQuery.prototype.offset = function () {
    if (!this.firstElement) {
      return {
        left: 0,
        top: 0
      };
    }
    var rect = this.firstElement.getBoundingClientRect();
    var bodyMarginLeft = $LG('body').style().marginLeft;
    // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
    return {
      left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
      top: rect.top + this.scrollTop()
    };
  };
  lgQuery.prototype.style = function () {
    if (!this.firstElement) {
      return {};
    }
    return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
  };
  // Width without padding and border even if box-sizing is used.
  lgQuery.prototype.width = function () {
    var style = this.style();
    return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  };
  // Height without padding and border even if box-sizing is used.
  lgQuery.prototype.height = function () {
    var style = this.style();
    return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  };
  lgQuery.eventListeners = {};
  return lgQuery;
}();
function $LG(selector) {
  initLgPolyfills();
  return new lgQuery(selector);
}
var defaultDynamicOptions = ['src', 'sources', 'subHtml', 'subHtmlUrl', 'html', 'video', 'poster', 'slideName', 'responsive', 'srcset', 'sizes', 'iframe', 'downloadUrl', 'download', 'width', 'facebookShareUrl', 'tweetText', 'iframeTitle', 'twitterShareUrl', 'pinterestShareUrl', 'pinterestText', 'fbHtml', 'disqusIdentifier', 'disqusUrl'];
// Convert html data-attribute to camalcase
function convertToData(attr) {
  // FInd a way for lgsize
  if (attr === 'href') {
    return 'src';
  }
  attr = attr.replace('data-', '');
  attr = attr.charAt(0).toLowerCase() + attr.slice(1);
  attr = attr.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return attr;
}
var utils = {
  /**
   * Fetches HTML content from a given URL and inserts it into a specified element.
   *
   * @param url - The URL to fetch the HTML content from.
   * @param element - The DOM element (jQuery object) to insert the HTML content into.
   * @param insertMethod - The method to insert the HTML ('append' or 'replace').
   */
  fetchCaptionFromUrl: function (url, element, insertMethod) {
    // Fetch content from the URL
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (htmlContent) {
      if (insertMethod === 'append') {
        var contentDiv = "<div class=\"lg-sub-html\">" + htmlContent + "</div>";
        element.append(contentDiv);
      } else {
        element.html(htmlContent);
      }
    });
  },
  /**
   * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
   */
  getSize: function (el, container, spacing, defaultLgSize) {
    if (spacing === void 0) {
      spacing = 0;
    }
    var LGel = $LG(el);
    var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
    if (!lgSize) {
      return;
    }
    var isResponsiveSizes = lgSize.split(',');
    // if at-least two viewport sizes are available
    if (isResponsiveSizes[1]) {
      var wWidth = window.innerWidth;
      for (var i = 0; i < isResponsiveSizes.length; i++) {
        var size_1 = isResponsiveSizes[i];
        var responsiveWidth = parseInt(size_1.split('-')[2], 10);
        if (responsiveWidth > wWidth) {
          lgSize = size_1;
          break;
        }
        // take last item as last option
        if (i === isResponsiveSizes.length - 1) {
          lgSize = size_1;
        }
      }
    }
    var size = lgSize.split('-');
    var width = parseInt(size[0], 10);
    var height = parseInt(size[1], 10);
    var cWidth = container.width();
    var cHeight = container.height() - spacing;
    var maxWidth = Math.min(cWidth, width);
    var maxHeight = Math.min(cHeight, height);
    var ratio = Math.min(maxWidth / width, maxHeight / height);
    return {
      width: width * ratio,
      height: height * ratio
    };
  },
  /**
   * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
   * @param {jQuery Element}
   * @returns {String} Transform CSS string
   */
  getTransform: function (el, container, top, bottom, imageSize) {
    if (!imageSize) {
      return;
    }
    var LGel = $LG(el).find('img').first();
    if (!LGel.get()) {
      return;
    }
    var containerRect = container.get().getBoundingClientRect();
    var wWidth = containerRect.width;
    // using innerWidth to include mobile safari bottom bar
    var wHeight = container.height() - (top + bottom);
    var elWidth = LGel.width();
    var elHeight = LGel.height();
    var elStyle = LGel.style();
    var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
    var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
    var scX = elWidth / imageSize.width;
    var scY = elHeight / imageSize.height;
    var transform = 'translate3d(' + (x *= -1) + 'px, ' + (y *= -1) + 'px, 0) scale3d(' + scX + ', ' + scY + ', 1)';
    return transform;
  },
  getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
    var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
    return "<div class=\"lg-media-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
  },
  getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
    var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
    var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
    var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
    var sourceTag = '';
    if (sources) {
      var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
      sourceTag = sourceObj.map(function (source) {
        var attrs = '';
        Object.keys(source).forEach(function (key) {
          // Do not remove the first space as it is required to separate the attributes
          attrs += " " + key + "=\"" + source[key] + "\"";
        });
        return "<source " + attrs + "></source>";
      });
    }
    return "" + sourceTag + imgMarkup;
  },
  // Get src from responsive src
  getResponsiveSrc: function (srcItms) {
    var rsWidth = [];
    var rsSrc = [];
    var src = '';
    for (var i = 0; i < srcItms.length; i++) {
      var _src = srcItms[i].split(' ');
      // Manage empty space
      if (_src[0] === '') {
        _src.splice(0, 1);
      }
      rsSrc.push(_src[0]);
      rsWidth.push(_src[1]);
    }
    var wWidth = window.innerWidth;
    for (var j = 0; j < rsWidth.length; j++) {
      if (parseInt(rsWidth[j], 10) > wWidth) {
        src = rsSrc[j];
        break;
      }
    }
    return src;
  },
  isImageLoaded: function (img) {
    if (!img) return false;
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
      return false;
    }
    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.
    if (img.naturalWidth === 0) {
      return false;
    }
    // No other way of checking: assume it’s ok.
    return true;
  },
  getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
    var videoClass = '';
    if (_isVideo && _isVideo.youtube) {
      videoClass = 'lg-has-youtube';
    } else if (_isVideo && _isVideo.vimeo) {
      videoClass = 'lg-has-vimeo';
    } else {
      videoClass = 'lg-has-html5';
    }
    var _dummy = dummyImg;
    if (typeof dummyImg !== 'string') {
      _dummy = dummyImg.outerHTML;
    }
    return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + _dummy + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
  },
  getFocusableElements: function (container) {
    var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var visibleElements = [].filter.call(elements, function (element) {
      var style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
    return visibleElements;
  },
  /**
   * @desc Create dynamic elements array from gallery items when dynamic option is false
   * It helps to avoid frequent DOM interaction
   * and avoid multiple checks for dynamic elments
   *
   * @returns {Array} dynamicEl
   */
  getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
    var dynamicElements = [];
    var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
    [].forEach.call(items, function (item) {
      var dynamicEl = {};
      for (var i = 0; i < item.attributes.length; i++) {
        var attr = item.attributes[i];
        if (attr.specified) {
          var dynamicAttr = convertToData(attr.name);
          var label = '';
          if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
            label = dynamicAttr;
          }
          if (label) {
            dynamicEl[label] = attr.value;
          }
        }
      }
      var currentItem = $LG(item);
      var alt = currentItem.find('img').first().attr('alt');
      var title = currentItem.attr('title');
      var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find('img').first().attr('src');
      dynamicEl.thumb = thumb;
      if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
        dynamicEl.subHtml = title || alt || '';
      }
      dynamicEl.alt = alt || title || '';
      dynamicElements.push(dynamicEl);
    });
    return dynamicElements;
  },
  isMobile: function () {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  },
  /**
   * @desc Check the given src is video
   * @param {String} src
   * @return {Object} video type
   * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
   *
   * @todo - this information can be moved to dynamicEl to avoid frequent calls
   */
  isVideo: function (src, isHTML5VIdeo, index) {
    if (!src) {
      if (isHTML5VIdeo) {
        return {
          html5: true
        };
      } else {
        console.error('lightGallery :- data-src is not provided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
        return;
      }
    }
    var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
    var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
    var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
    if (youtube) {
      return {
        youtube: youtube
      };
    } else if (vimeo) {
      return {
        vimeo: vimeo
      };
    } else if (wistia) {
      return {
        wistia: wistia
      };
    }
  }
};

// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery
var lgId = 0;
var LightGallery = /** @class */function () {
  function LightGallery(element, options) {
    this.lgOpened = false;
    this.index = 0;
    // lightGallery modules
    this.plugins = [];
    // false when lightGallery load first slide content;
    this.lGalleryOn = false;
    // True when a slide animation is in progress
    this.lgBusy = false;
    this.currentItemsInDom = [];
    // Scroll top value before lightGallery is opened
    this.prevScrollTop = 0;
    this.bodyPaddingRight = 0;
    this.isDummyImageRemoved = false;
    this.dragOrSwipeEnabled = false;
    this.mediaContainerPosition = {
      top: 0,
      bottom: 0
    };
    if (!element) {
      return this;
    }
    lgId++;
    this.lgId = lgId;
    this.el = element;
    this.LGel = $LG(element);
    this.generateSettings(options);
    this.buildModules();
    // When using dynamic mode, ensure dynamicEl is an array
    if (this.settings.dynamic && this.settings.dynamicEl !== undefined && !Array.isArray(this.settings.dynamicEl)) {
      throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
    }
    this.galleryItems = this.getItems();
    this.normalizeSettings();
    // Gallery items
    this.init();
    this.validateLicense();
    return this;
  }
  LightGallery.prototype.generateSettings = function (options) {
    // lightGallery settings
    this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
    if (this.settings.isMobile && typeof this.settings.isMobile === 'function' ? this.settings.isMobile() : utils.isMobile()) {
      var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
      this.settings = __assign(__assign({}, this.settings), mobileSettings);
    }
  };
  LightGallery.prototype.normalizeSettings = function () {
    if (this.settings.slideEndAnimation) {
      this.settings.hideControlOnEnd = false;
    }
    if (!this.settings.closable) {
      this.settings.swipeToClose = false;
    }
    // And reset it on close to get the correct value next time
    this.zoomFromOrigin = this.settings.zoomFromOrigin;
    // At the moment, Zoom from image doesn't support dynamic options
    // @todo add zoomFromOrigin support for dynamic images
    if (this.settings.dynamic) {
      this.zoomFromOrigin = false;
    }
    if (this.settings.container) {
      var container = this.settings.container;
      if (typeof container === 'function') {
        this.settings.container = container();
      } else if (typeof container === 'string') {
        var el = document.querySelector(container);
        this.settings.container = el !== null && el !== void 0 ? el : document.body;
      }
    } else {
      this.settings.container = document.body;
    }
    // settings.preload should not be grater than $item.length
    this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
  };
  LightGallery.prototype.init = function () {
    var _this = this;
    this.addSlideVideoInfo(this.galleryItems);
    this.buildStructure();
    this.LGel.trigger(lGEvents.init, {
      instance: this
    });
    if (this.settings.keyPress) {
      this.keyPress();
    }
    setTimeout(function () {
      _this.enableDrag();
      _this.enableSwipe();
      _this.triggerPosterClick();
    }, 50);
    this.arrow();
    if (this.settings.mousewheel) {
      this.mousewheel();
    }
    if (!this.settings.dynamic) {
      this.openGalleryOnItemClick();
    }
  };
  LightGallery.prototype.openGalleryOnItemClick = function () {
    var _this = this;
    var _loop_1 = function (index) {
      var element = this_1.items[index];
      var $element = $LG(element);
      // Using different namespace for click because click event should not unbind if selector is same object('this')
      // @todo manage all event listners - should have namespace that represent element
      var uuid = lgQuery.generateUUID();
      $element.attr('data-lg-id', uuid).on("click.lgcustom-item-" + uuid, function (e) {
        e.preventDefault();
        var currentItemIndex = _this.settings.index || index;
        _this.openGallery(currentItemIndex, element);
      });
    };
    var this_1 = this;
    // Using for loop instead of using bubbling as the items can be any html element.
    for (var index = 0; index < this.items.length; index++) {
      _loop_1(index);
    }
  };
  /**
   * Module constructor
   * Modules are build incrementally.
   * Gallery should be opened only once all the modules are initialized.
   * use moduleBuildTimeout to make sure this
   */
  LightGallery.prototype.buildModules = function () {
    var _this = this;
    this.settings.plugins.forEach(function (plugin) {
      _this.plugins.push(new plugin(_this, $LG));
    });
  };
  LightGallery.prototype.validateLicense = function () {
    if (!this.settings.licenseKey) {
      console.error('Please provide a valid license key');
    } else if (this.settings.licenseKey === '0000-0000-000-0000') {
      console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
    }
  };
  LightGallery.prototype.getSlideItem = function (index) {
    return $LG(this.getSlideItemId(index));
  };
  LightGallery.prototype.getSlideItemId = function (index) {
    return "#lg-item-" + this.lgId + "-" + index;
  };
  LightGallery.prototype.getIdName = function (id) {
    return id + "-" + this.lgId;
  };
  LightGallery.prototype.getElementById = function (id) {
    return $LG("#" + this.getIdName(id));
  };
  LightGallery.prototype.manageSingleSlideClassName = function () {
    if (this.galleryItems.length < 2) {
      this.outer.addClass('lg-single-item');
    } else {
      this.outer.removeClass('lg-single-item');
    }
  };
  LightGallery.prototype.buildStructure = function () {
    var _this = this;
    var container = this.$container && this.$container.get();
    if (container) {
      return;
    }
    var controls = '';
    var subHtmlCont = '';
    // Create controls
    if (this.settings.controls) {
      controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
    }
    if (this.settings.appendSubHtmlTo !== '.lg-item') {
      subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
    }
    var addClasses = '';
    if (this.settings.allowMediaOverlap) {
      // Do not remove space before last single quote
      addClasses += 'lg-media-overlap ';
    }
    var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : '';
    var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : '';
    var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
    var closeIcon = this.settings.closable && this.settings.showCloseIcon ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>" : '';
    var maximizeIcon = this.settings.showMaximizeIcon ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>" : '';
    var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer' ? subHtmlCont : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html' ? subHtmlCont : '') + "\n                </div>\n            </div>\n        </div>\n        ";
    $LG(this.settings.container).append(template);
    if (document.body !== this.settings.container) {
      $LG(this.settings.container).css('position', 'relative');
    }
    this.outer = this.getElementById('lg-outer');
    this.$lgComponents = this.getElementById('lg-components');
    this.$backdrop = this.getElementById('lg-backdrop');
    this.$container = this.getElementById('lg-container');
    this.$inner = this.getElementById('lg-inner');
    this.$content = this.getElementById('lg-content');
    this.$toolbar = this.getElementById('lg-toolbar');
    this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
    var outerClassNames = this.settings.mode + " ";
    this.manageSingleSlideClassName();
    if (this.settings.enableDrag) {
      outerClassNames += 'lg-grab ';
    }
    this.outer.addClass(outerClassNames);
    this.$inner.css('transition-timing-function', this.settings.easing);
    this.$inner.css('transition-duration', this.settings.speed + 'ms');
    if (this.settings.download) {
      this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
    }
    this.counter();
    $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
      _this.refreshOnResize();
    });
    this.hideBars();
    this.manageCloseGallery();
    this.toggleMaximize();
    this.initModules();
  };
  LightGallery.prototype.refreshOnResize = function () {
    if (this.lgOpened) {
      var currentGalleryItem = this.galleryItems[this.index];
      var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
      this.mediaContainerPosition = this.getMediaContainerPosition();
      var _a = this.mediaContainerPosition,
        top_1 = _a.top,
        bottom = _a.bottom;
      this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
      if (__slideVideoInfo) {
        this.resizeVideoSlide(this.index, this.currentImageSize);
      }
      if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
        this.outer.find('.lg-current .lg-dummy-img').first().attr('style', imgStyle);
      }
      this.LGel.trigger(lGEvents.containerResize);
    }
  };
  LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
    var lgVideoStyle = this.getVideoContStyle(imageSize);
    var currentSlide = this.getSlideItem(index);
    currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
  };
  /**
   * Update slides dynamically.
   * Add, edit or delete slides dynamically when lightGallery is opened.
   * Modify the current gallery items and pass it via updateSlides method
   * @note
   * - Do not mutate existing lightGallery items directly.
   * - Always pass new list of gallery items
   * - You need to take care of thumbnails outside the gallery if any
   * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
   * @param items Gallery items
   * @param index After the update operation, which slide gallery should navigate to
   * @category lGPublicMethods
   * @example
   * const plugin = lightGallery();
   *
   * // Adding slides dynamically
   * let galleryItems = [
   * // Access existing lightGallery items
   * // galleryItems are automatically generated internally from the gallery HTML markup
   * // or directly from galleryItems when dynamic gallery is used
   *   ...plugin.galleryItems,
   *     ...[
   *       {
   *         src: 'img/img-1.png',
   *           thumb: 'img/thumb1.png',
   *         },
   *     ],
   *   ];
   *   plugin.updateSlides(
   *     galleryItems,
   *     plugin.index,
   *   );
   *
   *
   * // Remove slides dynamically
   * galleryItems = JSON.parse(
   *   JSON.stringify(updateSlideInstance.galleryItems),
   * );
   * galleryItems.shift();
   * updateSlideInstance.updateSlides(galleryItems, 1);
   * @see <a href="/demos/update-slides/">Demo</a>
   */
  LightGallery.prototype.updateSlides = function (items, index) {
    if (this.index > items.length - 1) {
      this.index = items.length - 1;
    }
    if (items.length === 1) {
      this.index = 0;
    }
    if (!items.length) {
      this.closeGallery();
      return;
    }
    var currentSrc = this.galleryItems[index].src;
    this.galleryItems = items;
    this.updateControls();
    this.$inner.empty();
    this.currentItemsInDom = [];
    var _index = 0;
    // Find the current index based on source value of the slide
    this.galleryItems.some(function (galleryItem, itemIndex) {
      if (galleryItem.src === currentSrc) {
        _index = itemIndex;
        return true;
      }
      return false;
    });
    this.currentItemsInDom = this.organizeSlideItems(_index, -1);
    this.loadContent(_index, true);
    this.getSlideItem(_index).addClass('lg-current');
    this.index = _index;
    this.updateCurrentCounter(_index);
    this.LGel.trigger(lGEvents.updateSlides);
  };
  // Get gallery items based on multiple conditions
  LightGallery.prototype.getItems = function () {
    // Gallery items
    this.items = [];
    if (!this.settings.dynamic) {
      if (this.settings.selector === 'this') {
        this.items.push(this.el);
      } else if (this.settings.selector) {
        if (typeof this.settings.selector === 'string') {
          if (this.settings.selectWithin) {
            var selectWithin = $LG(this.settings.selectWithin);
            this.items = selectWithin.find(this.settings.selector).get();
          } else {
            this.items = this.el.querySelectorAll(this.settings.selector);
          }
        } else {
          this.items = this.settings.selector;
        }
      } else {
        this.items = this.el.children;
      }
      return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
    } else {
      return this.settings.dynamicEl || [];
    }
  };
  LightGallery.prototype.shouldHideScrollbar = function () {
    return this.settings.hideScrollbar && document.body === this.settings.container;
  };
  LightGallery.prototype.hideScrollbar = function () {
    if (!this.shouldHideScrollbar()) {
      return;
    }
    this.bodyPaddingRight = parseFloat($LG('body').style().paddingRight);
    var bodyRect = document.documentElement.getBoundingClientRect();
    var scrollbarWidth = window.innerWidth - bodyRect.width;
    $LG(document.body).css('padding-right', scrollbarWidth + this.bodyPaddingRight + 'px');
    $LG(document.body).addClass('lg-overlay-open');
  };
  LightGallery.prototype.resetScrollBar = function () {
    if (!this.shouldHideScrollbar()) {
      return;
    }
    $LG(document.body).css('padding-right', this.bodyPaddingRight + 'px');
    $LG(document.body).removeClass('lg-overlay-open');
  };
  /**
   * Open lightGallery.
   * Open gallery with specific slide by passing index of the slide as parameter.
   * @category lGPublicMethods
   * @param {Number} index  - index of the slide
   * @param {HTMLElement} element - Which image lightGallery should zoom from
   *
   * @example
   * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
   * const dynamicGallery = lightGallery($dynamicGallery, {
   *     dynamic: true,
   *     dynamicEl: [
   *         {
   *              src: 'img/1.jpg',
   *              thumb: 'img/thumb-1.jpg',
   *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
   *         },
   *         ...
   *     ],
   * });
   * $dynamicGallery.addEventListener('click', function () {
   *     // Starts with third item.(Optional).
   *     // This is useful if you want use dynamic mode with
   *     // custom thumbnails (thumbnails outside gallery),
   *     dynamicGallery.openGallery(2);
   * });
   *
   */
  LightGallery.prototype.openGallery = function (index, element) {
    var _this = this;
    if (index === void 0) {
      index = this.settings.index;
    }
    // prevent accidental double execution
    if (this.lgOpened) return;
    this.lgOpened = true;
    this.outer.removeClass('lg-hide-items');
    this.hideScrollbar();
    // Add display block, but still has opacity 0
    this.$container.addClass('lg-show');
    var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
    this.currentItemsInDom = itemsToBeInsertedToDom;
    var items = '';
    itemsToBeInsertedToDom.forEach(function (item) {
      items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
    });
    this.$inner.append(items);
    this.addHtml(index);
    var transform = '';
    this.mediaContainerPosition = this.getMediaContainerPosition();
    var _a = this.mediaContainerPosition,
      top = _a.top,
      bottom = _a.bottom;
    if (!this.settings.allowMediaOverlap) {
      this.setMediaContainerPosition(top, bottom);
    }
    var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
    if (this.zoomFromOrigin && element) {
      this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
      transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
    }
    if (!this.zoomFromOrigin || !transform) {
      this.outer.addClass(this.settings.startClass);
      this.getSlideItem(index).removeClass('lg-complete');
    }
    var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
    setTimeout(function () {
      _this.outer.addClass('lg-components-open');
    }, timeout);
    this.index = index;
    this.LGel.trigger(lGEvents.beforeOpen);
    // add class lg-current to remove initial transition
    this.getSlideItem(index).addClass('lg-current');
    this.lGalleryOn = false;
    // Store the current scroll top value to scroll back after closing the gallery..
    this.prevScrollTop = $LG(window).scrollTop();
    setTimeout(function () {
      // Need to check both zoomFromOrigin and transform values as we need to set set the
      // default opening animation if user missed to add the lg-size attribute
      if (_this.zoomFromOrigin && transform) {
        var currentSlide_1 = _this.getSlideItem(index);
        currentSlide_1.css('transform', transform);
        setTimeout(function () {
          currentSlide_1.addClass('lg-start-progress lg-start-end-progress').css('transition-duration', _this.settings.startAnimationDuration + 'ms');
          _this.outer.addClass('lg-zoom-from-image');
        });
        setTimeout(function () {
          currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
        }, 100);
      }
      setTimeout(function () {
        _this.$backdrop.addClass('in');
        _this.$container.addClass('lg-show-in');
      }, 10);
      setTimeout(function () {
        if (_this.settings.trapFocus && document.body === _this.settings.container) {
          _this.trapFocus();
        }
      }, _this.settings.backdropDuration + 50);
      // lg-visible class resets gallery opacity to 1
      if (!_this.zoomFromOrigin || !transform) {
        setTimeout(function () {
          _this.outer.addClass('lg-visible');
        }, _this.settings.backdropDuration);
      }
      // initiate slide function
      _this.slide(index, false, false, false);
      _this.LGel.trigger(lGEvents.afterOpen);
    });
    if (document.body === this.settings.container) {
      $LG('html').addClass('lg-on');
    }
  };
  /**
   * Note - Changing the position of the media on every slide transition creates a flickering effect.
   * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
   * if you have dynamic captions for each media,
   * you can provide an appropriate height for the captions via allowMediaOverlap option
   */
  LightGallery.prototype.getMediaContainerPosition = function () {
    if (this.settings.allowMediaOverlap) {
      return {
        top: 0,
        bottom: 0
      };
    }
    var top = this.$toolbar.get().clientHeight || 0;
    var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
    var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
    var thumbContainer = this.outer.find('.lg-thumb-outer').get();
    var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
    var bottom = thumbHeight + captionHeight;
    return {
      top: top,
      bottom: bottom
    };
  };
  LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
    if (top === void 0) {
      top = 0;
    }
    if (bottom === void 0) {
      bottom = 0;
    }
    this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
  };
  LightGallery.prototype.hideBars = function () {
    var _this = this;
    // Hide controllers if mouse doesn't move for some period
    setTimeout(function () {
      _this.outer.removeClass('lg-hide-items');
      if (_this.settings.hideBarsDelay > 0) {
        _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
          _this.outer.removeClass('lg-hide-items');
          clearTimeout(_this.hideBarTimeout);
          // Timeout will be cleared on each slide movement also
          _this.hideBarTimeout = setTimeout(function () {
            _this.outer.addClass('lg-hide-items');
          }, _this.settings.hideBarsDelay);
        });
        _this.outer.trigger('mousemove.lg');
      }
    }, this.settings.showBarsAfter);
  };
  LightGallery.prototype.initPictureFill = function ($img) {
    if (this.settings.supportLegacyBrowser) {
      try {
        picturefill({
          elements: [$img.get()]
        });
      } catch (e) {
        console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
      }
    }
  };
  /**
   *  @desc Create image counter
   *  Ex: 1/10
   */
  LightGallery.prototype.counter = function () {
    if (this.settings.counter) {
      var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
      this.outer.find(this.settings.appendCounterTo).append(counterHtml);
    }
  };
  /**
   *  @desc add sub-html into the slide
   *  @param {Number} index - index of the slide
   */
  LightGallery.prototype.addHtml = function (index) {
    var subHtml;
    var subHtmlUrl;
    if (this.galleryItems[index].subHtmlUrl) {
      subHtmlUrl = this.galleryItems[index].subHtmlUrl;
    } else {
      subHtml = this.galleryItems[index].subHtml;
    }
    if (!subHtmlUrl) {
      if (subHtml) {
        // get first letter of sub-html
        // if first letter starts with . or # get the html form the jQuery object
        var fL = subHtml.substring(0, 1);
        if (fL === '.' || fL === '#') {
          try {
            if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) {
              subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
            } else {
              subHtml = $LG(subHtml).first().html();
            }
          } catch (error) {
            console.warn("Error processing subHtml selector \"" + subHtml + "\"");
            subHtml = '';
          }
        }
      } else {
        subHtml = '';
      }
    }
    if (this.settings.appendSubHtmlTo !== '.lg-item') {
      if (subHtmlUrl) {
        utils.fetchCaptionFromUrl(subHtmlUrl, this.outer.find('.lg-sub-html'), 'replace');
      } else {
        this.outer.find('.lg-sub-html').html(subHtml);
      }
    } else {
      var currentSlide = $LG(this.getSlideItemId(index));
      if (subHtmlUrl) {
        utils.fetchCaptionFromUrl(subHtmlUrl, currentSlide, 'append');
      } else {
        currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
      }
    }
    // Add lg-empty-html class if title doesn't exist
    if (typeof subHtml !== 'undefined' && subHtml !== null) {
      if (subHtml === '') {
        this.outer.find(this.settings.appendSubHtmlTo).addClass('lg-empty-html');
      } else {
        this.outer.find(this.settings.appendSubHtmlTo).removeClass('lg-empty-html');
      }
    }
    this.LGel.trigger(lGEvents.afterAppendSubHtml, {
      index: index
    });
  };
  /**
   *  @desc Preload slides
   *  @param {Number} index - index of the slide
   * @todo preload not working for the first slide, Also, should work for the first and last slide as well
   */
  LightGallery.prototype.preload = function (index) {
    for (var i = 1; i <= this.settings.preload; i++) {
      if (i >= this.galleryItems.length - index) {
        break;
      }
      this.loadContent(index + i, false);
    }
    for (var j = 1; j <= this.settings.preload; j++) {
      if (index - j < 0) {
        break;
      }
      this.loadContent(index - j, false);
    }
  };
  LightGallery.prototype.getDummyImgStyles = function (imageSize) {
    if (!imageSize) return '';
    return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
  };
  LightGallery.prototype.getVideoContStyle = function (imageSize) {
    if (!imageSize) return '';
    return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
  };
  LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
    var $currentItem;
    if (!this.settings.dynamic) {
      $currentItem = $LG(this.items).eq(index);
    }
    if ($currentItem) {
      var _dummyImgSrc = void 0;
      if (!this.settings.exThumbImage) {
        _dummyImgSrc = $currentItem.find('img').first().attr('src');
      } else {
        _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
      }
      if (!_dummyImgSrc) return '';
      var imgStyle = this.getDummyImgStyles(this.currentImageSize);
      var dummyImgContentImg = document.createElement('img');
      dummyImgContentImg.alt = alt || '';
      dummyImgContentImg.src = _dummyImgSrc;
      dummyImgContentImg.className = "lg-dummy-img";
      dummyImgContentImg.style.cssText = imgStyle;
      $currentSlide.addClass('lg-first-slide');
      this.outer.addClass('lg-first-slide-loading');
      return dummyImgContentImg;
    }
    return '';
  };
  LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
    var currentGalleryItem = this.galleryItems[index];
    var alt = currentGalleryItem.alt,
      srcset = currentGalleryItem.srcset,
      sizes = currentGalleryItem.sizes,
      sources = currentGalleryItem.sources;
    // Use the thumbnail as dummy image which will be resized to actual image size and
    // displayed on top of actual image
    var imgContent = '';
    var altAttr = alt ? 'alt="' + alt + '"' : '';
    if (this.isFirstSlideWithZoomAnimation()) {
      imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
    } else {
      imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
    }
    var picture = document.createElement('picture');
    picture.className = 'lg-img-wrap';
    $LG(picture).append(imgContent);
    $currentSlide.prepend(picture);
  };
  LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
    var mediaObject = $slide.find('.lg-object').first();
    if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) {
      onLoad();
    } else {
      mediaObject.on('load.lg error.lg', function () {
        onLoad && onLoad();
      });
      mediaObject.on('error.lg', function () {
        onError && onError();
      });
    }
  };
  /**
   *
   * @param $el Current slide item
   * @param index
   * @param delay Delay is 0 except first time
   * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
   * @param isFirstSlide
   */
  LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
    var _this = this;
    this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
      _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
    }, function () {
      currentSlide.addClass('lg-complete lg-complete_');
      currentSlide.html('<span class="lg-error-msg">' + _this.settings.strings['mediaLoadingFailed'] + '</span>');
    });
  };
  LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
    var _this = this;
    var currentGalleryItem = this.galleryItems[index];
    // Adding delay for video slides without poster for better performance and user experience
    // Videos should start playing once once the gallery is completely loaded
    var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === 'video' && !currentGalleryItem.poster ? speed : 0;
    setTimeout(function () {
      $currentSlide.addClass('lg-complete lg-complete_');
      _this.LGel.trigger(lGEvents.slideItemLoad, {
        index: index,
        delay: delay || 0,
        isFirstSlide: isFirstSlide
      });
    }, _speed);
  };
  LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
    return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
  };
  // Add video slideInfo
  LightGallery.prototype.addSlideVideoInfo = function (items) {
    var _this = this;
    items.forEach(function (element, index) {
      element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
      if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) {
        element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
      }
    });
  };
  /**
   *  Load slide content into slide.
   *  This is used to load content into slides that is not visible too
   *  @param {Number} index - index of the slide.
   *  @param {Boolean} rec - if true call loadcontent() function again.
   */
  LightGallery.prototype.loadContent = function (index, rec) {
    var _this = this;
    var currentGalleryItem = this.galleryItems[index];
    var $currentSlide = $LG(this.getSlideItemId(index));
    var poster = currentGalleryItem.poster,
      srcset = currentGalleryItem.srcset,
      sizes = currentGalleryItem.sizes,
      sources = currentGalleryItem.sources;
    var src = currentGalleryItem.src;
    var video = currentGalleryItem.video;
    var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
    if (currentGalleryItem.responsive) {
      var srcDyItms = currentGalleryItem.responsive.split(',');
      src = utils.getResponsiveSrc(srcDyItms) || src;
    }
    var videoInfo = currentGalleryItem.__slideVideoInfo;
    var lgVideoStyle = '';
    var iframe = !!currentGalleryItem.iframe;
    var isFirstSlide = !this.lGalleryOn;
    // delay for adding complete class. it is 0 except first time.
    var delay = 0;
    if (isFirstSlide) {
      if (this.zoomFromOrigin && this.currentImageSize) {
        delay = this.settings.startAnimationDuration + 10;
      } else {
        delay = this.settings.backdropDuration + 10;
      }
    }
    if (!$currentSlide.hasClass('lg-loaded')) {
      if (videoInfo) {
        var _a = this.mediaContainerPosition,
          top_2 = _a.top,
          bottom = _a.bottom;
        var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
        lgVideoStyle = this.getVideoContStyle(videoSize);
      }
      if (iframe) {
        var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
        $currentSlide.prepend(markup);
      } else if (poster) {
        var dummyImg = '';
        var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
        if (hasStartAnimation) {
          dummyImg = this.getDummyImageContent($currentSlide, index, '');
        }
        var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
        $currentSlide.prepend(markup);
      } else if (videoInfo) {
        var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
        $currentSlide.prepend(markup);
      } else {
        this.setImgMarkup(src, $currentSlide, index);
        if (srcset || sources) {
          var $img = $currentSlide.find('.lg-object');
          this.initPictureFill($img);
        }
      }
      if (poster || videoInfo) {
        this.LGel.trigger(lGEvents.hasVideo, {
          index: index,
          src: src,
          html5Video: _html5Video,
          hasPoster: !!poster
        });
      }
      this.LGel.trigger(lGEvents.afterAppendSlide, {
        index: index
      });
      if (this.lGalleryOn && this.settings.appendSubHtmlTo === '.lg-item') {
        this.addHtml(index);
      }
    }
    // For first time add some delay for displaying the start animation.
    var _speed = 0;
    // Do not change the delay value because it is required for zoom plugin.
    // If gallery opened from direct url (hash) speed value should be 0
    if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
      _speed = delay;
    }
    // Only for first slide and zoomFromOrigin is enabled
    if (this.isFirstSlideWithZoomAnimation()) {
      setTimeout(function () {
        $currentSlide.removeClass('lg-start-end-progress lg-start-progress').removeAttr('style');
      }, this.settings.startAnimationDuration + 100);
      if (!$currentSlide.hasClass('lg-loaded')) {
        setTimeout(function () {
          if (_this.getSlideType(currentGalleryItem) === 'image') {
            var alt = currentGalleryItem.alt;
            var altAttr = alt ? 'alt="' + alt + '"' : '';
            $currentSlide.find('.lg-img-wrap').append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
            if (srcset || sources) {
              var $img = $currentSlide.find('.lg-object');
              _this.initPictureFill($img);
            }
          }
          if (_this.getSlideType(currentGalleryItem) === 'image' || _this.getSlideType(currentGalleryItem) === 'video' && poster) {
            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
            // load remaining slides once the slide is completely loaded
            _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
              _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
            }, function () {
              _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
            });
          }
        }, this.settings.startAnimationDuration + 100);
      }
    }
    // SLide content has been added to dom
    $currentSlide.addClass('lg-loaded');
    if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === 'video' && !poster) {
      this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
    }
    // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
    if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass('lg-complete_') && !this.lGalleryOn) {
      setTimeout(function () {
        $currentSlide.addClass('lg-complete');
      }, this.settings.backdropDuration);
    }
    // Content loaded
    // Need to set lGalleryOn before calling preload function
    this.lGalleryOn = true;
    if (rec === true) {
      if (!$currentSlide.hasClass('lg-complete_')) {
        $currentSlide.find('.lg-object').first().on('load.lg error.lg', function () {
          _this.preload(index);
        });
      } else {
        this.preload(index);
      }
    }
  };
  /**
   * @desc Remove dummy image content and load next slides
   * Called only for the first time if zoomFromOrigin animation is enabled
   * @param index
   * @param $currentSlide
   * @param speed
   */
  LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
    var _this = this;
    setTimeout(function () {
      $currentSlide.find('.lg-dummy-img').remove();
      $currentSlide.removeClass('lg-first-slide');
      _this.outer.removeClass('lg-first-slide-loading');
      _this.isDummyImageRemoved = true;
      _this.preload(index);
    }, speed + 300);
  };
  LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
    var _this = this;
    if (numberOfItems === void 0) {
      numberOfItems = 0;
    }
    var itemsToBeInsertedToDom = [];
    // Minimum 2 items should be there
    var possibleNumberOfItems = Math.max(numberOfItems, 3);
    possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
    var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
    if (this.galleryItems.length <= 3) {
      this.galleryItems.forEach(function (_element, index) {
        itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
      });
      return itemsToBeInsertedToDom;
    }
    if (index < (this.galleryItems.length - 1) / 2) {
      for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
      }
      var numberOfExistingItems = itemsToBeInsertedToDom.length;
      for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
      }
    } else {
      for (var idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
      }
      var numberOfExistingItems = itemsToBeInsertedToDom.length;
      for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
      }
    }
    if (this.settings.loop) {
      if (index === this.galleryItems.length - 1) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
      } else if (index === 0) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
      }
    }
    if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
      itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
    }
    return itemsToBeInsertedToDom;
  };
  LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
    var _this = this;
    var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
    itemsToBeInsertedToDom.forEach(function (item) {
      if (_this.currentItemsInDom.indexOf(item) === -1) {
        _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
      }
    });
    this.currentItemsInDom.forEach(function (item) {
      if (itemsToBeInsertedToDom.indexOf(item) === -1) {
        $LG("#" + item).remove();
      }
    });
    return itemsToBeInsertedToDom;
  };
  /**
   * Get previous index of the slide
   */
  LightGallery.prototype.getPreviousSlideIndex = function () {
    var prevIndex = 0;
    try {
      var currentItemId = this.outer.find('.lg-current').first().attr('id');
      prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
    } catch (error) {
      prevIndex = 0;
    }
    return prevIndex;
  };
  LightGallery.prototype.setDownloadValue = function (index) {
    if (this.settings.download) {
      var currentGalleryItem = this.galleryItems[index];
      var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === 'false';
      if (hideDownloadBtn) {
        this.outer.addClass('lg-hide-download');
      } else {
        var $download = this.getElementById('lg-download');
        this.outer.removeClass('lg-hide-download');
        $download.attr('href', currentGalleryItem.downloadUrl || currentGalleryItem.src);
        if (currentGalleryItem.download) {
          $download.attr('download', currentGalleryItem.download);
        }
      }
    }
  };
  LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
    var _this = this;
    if (this.lGalleryOn) {
      previousSlideItem.addClass('lg-slide-progress');
    }
    setTimeout(function () {
      // remove all transitions
      _this.outer.addClass('lg-no-trans');
      _this.outer.find('.lg-item').removeClass('lg-prev-slide lg-next-slide');
      if (direction === 'prev') {
        //prevslide
        currentSlideItem.addClass('lg-prev-slide');
        previousSlideItem.addClass('lg-next-slide');
      } else {
        // next slide
        currentSlideItem.addClass('lg-next-slide');
        previousSlideItem.addClass('lg-prev-slide');
      }
      // give 50 ms for browser to add/remove class
      setTimeout(function () {
        _this.outer.find('.lg-item').removeClass('lg-current');
        currentSlideItem.addClass('lg-current');
        // reset all transitions
        _this.outer.removeClass('lg-no-trans');
      }, 50);
    }, this.lGalleryOn ? this.settings.slideDelay : 0);
  };
  /**
   * Goto a specific slide.
   * @param {Number} index - index of the slide
   * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
   * @param {Boolean} fromThumb - true if slide function called via thumbnail click
   * @param {String} direction - Direction of the slide(next/prev)
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  // to go to 3rd slide
   *  plugin.slide(2);
   *
   */
  LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
    var _this = this;
    var prevIndex = this.getPreviousSlideIndex();
    this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
    // Prevent multiple call, Required for hsh plugin
    if (this.lGalleryOn && prevIndex === index) {
      return;
    }
    var numberOfGalleryItems = this.galleryItems.length;
    if (!this.lgBusy) {
      if (this.settings.counter) {
        this.updateCurrentCounter(index);
      }
      var currentSlideItem = this.getSlideItem(index);
      var previousSlideItem_1 = this.getSlideItem(prevIndex);
      var currentGalleryItem = this.galleryItems[index];
      var videoInfo = currentGalleryItem.__slideVideoInfo;
      this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
      this.setDownloadValue(index);
      if (videoInfo) {
        var _a = this.mediaContainerPosition,
          top_3 = _a.top,
          bottom = _a.bottom;
        var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
        this.resizeVideoSlide(index, videoSize);
      }
      this.LGel.trigger(lGEvents.beforeSlide, {
        prevIndex: prevIndex,
        index: index,
        fromTouch: !!fromTouch,
        fromThumb: !!fromThumb
      });
      this.lgBusy = true;
      clearTimeout(this.hideBarTimeout);
      this.arrowDisable(index);
      if (!direction) {
        if (index < prevIndex) {
          direction = 'prev';
        } else if (index > prevIndex) {
          direction = 'next';
        }
      }
      if (!fromTouch) {
        this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
      } else {
        this.outer.find('.lg-item').removeClass('lg-prev-slide lg-current lg-next-slide');
        var touchPrev = void 0;
        var touchNext = void 0;
        if (numberOfGalleryItems > 2) {
          touchPrev = index - 1;
          touchNext = index + 1;
          if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
            // next slide
            touchNext = 0;
            touchPrev = numberOfGalleryItems - 1;
          } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
            // prev slide
            touchNext = 0;
            touchPrev = numberOfGalleryItems - 1;
          }
        } else {
          touchPrev = 0;
          touchNext = 1;
        }
        if (direction === 'prev') {
          this.getSlideItem(touchNext).addClass('lg-next-slide');
        } else {
          this.getSlideItem(touchPrev).addClass('lg-prev-slide');
        }
        currentSlideItem.addClass('lg-current');
      }
      // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
      if (!this.lGalleryOn) {
        this.loadContent(index, true);
      } else {
        setTimeout(function () {
          _this.loadContent(index, true);
          // Add title if this.settings.appendSubHtmlTo === lg-sub-html
          if (_this.settings.appendSubHtmlTo !== '.lg-item') {
            _this.addHtml(index);
          }
        }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
      }
      setTimeout(function () {
        _this.lgBusy = false;
        previousSlideItem_1.removeClass('lg-slide-progress');
        _this.LGel.trigger(lGEvents.afterSlide, {
          prevIndex: prevIndex,
          index: index,
          fromTouch: fromTouch,
          fromThumb: fromThumb
        });
      }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
    }
    this.index = index;
  };
  LightGallery.prototype.updateCurrentCounter = function (index) {
    this.getElementById('lg-counter-current').html(index + 1 + '');
  };
  LightGallery.prototype.updateCounterTotal = function () {
    this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
  };
  LightGallery.prototype.getSlideType = function (item) {
    if (item.__slideVideoInfo) {
      return 'video';
    } else if (item.iframe) {
      return 'iframe';
    } else {
      return 'image';
    }
  };
  LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
    var distanceX = endCoords.pageX - startCoords.pageX;
    var distanceY = endCoords.pageY - startCoords.pageY;
    var allowSwipe = false;
    if (this.swipeDirection) {
      allowSwipe = true;
    } else {
      if (Math.abs(distanceX) > 15) {
        this.swipeDirection = 'horizontal';
        allowSwipe = true;
      } else if (Math.abs(distanceY) > 15) {
        this.swipeDirection = 'vertical';
        allowSwipe = true;
      }
    }
    if (!allowSwipe) {
      return;
    }
    var $currentSlide = this.getSlideItem(this.index);
    if (this.swipeDirection === 'horizontal') {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      // reset opacity and transition duration
      this.outer.addClass('lg-dragging');
      // move current slide
      this.setTranslate($currentSlide, distanceX, 0);
      // move next and prev slide with current slide
      var width = $currentSlide.get().offsetWidth;
      var slideWidthAmount = width * 15 / 100;
      var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
      this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
      this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
    } else if (this.swipeDirection === 'vertical') {
      if (this.settings.swipeToClose) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        this.$container.addClass('lg-dragging-vertical');
        var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
        this.$backdrop.css('opacity', opacity);
        var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
        this.setTranslate($currentSlide, 0, distanceY, scale, scale);
        if (Math.abs(distanceY) > 100) {
          this.outer.addClass('lg-hide-items').removeClass('lg-components-open');
        }
      }
    }
  };
  LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
    var _this = this;
    var distance;
    // keep slide animation for any mode while dragg/swipe
    if (this.settings.mode !== 'lg-slide') {
      this.outer.addClass('lg-slide');
    }
    // set transition duration
    setTimeout(function () {
      _this.$container.removeClass('lg-dragging-vertical');
      _this.outer.removeClass('lg-dragging lg-hide-items').addClass('lg-components-open');
      var triggerClick = true;
      if (_this.swipeDirection === 'horizontal') {
        distance = endCoords.pageX - startCoords.pageX;
        var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
        if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
          _this.goToNextSlide(true);
          triggerClick = false;
        } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
          _this.goToPrevSlide(true);
          triggerClick = false;
        }
      } else if (_this.swipeDirection === 'vertical') {
        distance = Math.abs(endCoords.pageY - startCoords.pageY);
        if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
          _this.closeGallery();
          return;
        } else {
          _this.$backdrop.css('opacity', 1);
        }
      }
      _this.outer.find('.lg-item').removeAttr('style');
      if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
        // Trigger click if distance is less than 5 pix
        var target = $LG(event.target);
        if (_this.isPosterElement(target)) {
          _this.LGel.trigger(lGEvents.posterClick);
        }
      }
      _this.swipeDirection = undefined;
    });
    // remove slide class once drag/swipe is completed if mode is not slide
    setTimeout(function () {
      if (!_this.outer.hasClass('lg-dragging') && _this.settings.mode !== 'lg-slide') {
        _this.outer.removeClass('lg-slide');
      }
    }, this.settings.speed + 100);
  };
  LightGallery.prototype.enableSwipe = function () {
    var _this = this;
    var startCoords = {};
    var endCoords = {};
    var isMoved = false;
    var isSwiping = false;
    if (this.settings.enableSwipe) {
      this.$inner.on('touchstart.lg', function (e) {
        _this.dragOrSwipeEnabled = true;
        var $item = _this.getSlideItem(_this.index);
        if (($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && !_this.outer.hasClass('lg-zoomed') && !_this.lgBusy && e.touches.length === 1) {
          isSwiping = true;
          _this.touchAction = 'swipe';
          _this.manageSwipeClass();
          startCoords = {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY
          };
        }
      });
      this.$inner.on('touchmove.lg', function (e) {
        if (isSwiping && _this.touchAction === 'swipe' && e.touches.length === 1) {
          endCoords = {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY
          };
          _this.touchMove(startCoords, endCoords, e);
          isMoved = true;
        }
      });
      this.$inner.on('touchend.lg', function (event) {
        if (_this.touchAction === 'swipe') {
          if (isMoved) {
            isMoved = false;
            _this.touchEnd(endCoords, startCoords, event);
          } else if (isSwiping) {
            var target = $LG(event.target);
            if (_this.isPosterElement(target)) {
              _this.LGel.trigger(lGEvents.posterClick);
            }
          }
          _this.touchAction = undefined;
          isSwiping = false;
        }
      });
    }
  };
  LightGallery.prototype.enableDrag = function () {
    var _this = this;
    var startCoords = {};
    var endCoords = {};
    var isDraging = false;
    var isMoved = false;
    if (this.settings.enableDrag) {
      this.outer.on('mousedown.lg', function (e) {
        _this.dragOrSwipeEnabled = true;
        var $item = _this.getSlideItem(_this.index);
        if ($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
          if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
            e.preventDefault();
            if (!_this.lgBusy) {
              _this.manageSwipeClass();
              startCoords = {
                pageX: e.pageX,
                pageY: e.pageY
              };
              isDraging = true;
              // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
              _this.outer.get().scrollLeft += 1;
              _this.outer.get().scrollLeft -= 1;
              // *
              _this.outer.removeClass('lg-grab').addClass('lg-grabbing');
              _this.LGel.trigger(lGEvents.dragStart);
            }
          }
        }
      });
      $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
        if (isDraging && _this.lgOpened) {
          isMoved = true;
          endCoords = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          _this.touchMove(startCoords, endCoords);
          _this.LGel.trigger(lGEvents.dragMove);
        }
      });
      $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
        if (!_this.lgOpened) {
          return;
        }
        var target = $LG(event.target);
        if (isMoved) {
          isMoved = false;
          _this.touchEnd(endCoords, startCoords, event);
          _this.LGel.trigger(lGEvents.dragEnd);
        } else if (_this.isPosterElement(target)) {
          _this.LGel.trigger(lGEvents.posterClick);
        }
        // Prevent execution on click
        if (isDraging) {
          isDraging = false;
          _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
        }
      });
    }
  };
  LightGallery.prototype.triggerPosterClick = function () {
    var _this = this;
    this.$inner.on('click.lg', function (event) {
      if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) {
        _this.LGel.trigger(lGEvents.posterClick);
      }
    });
  };
  LightGallery.prototype.manageSwipeClass = function () {
    var _touchNext = this.index + 1;
    var _touchPrev = this.index - 1;
    if (this.settings.loop && this.galleryItems.length > 2) {
      if (this.index === 0) {
        _touchPrev = this.galleryItems.length - 1;
      } else if (this.index === this.galleryItems.length - 1) {
        _touchNext = 0;
      }
    }
    this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
    if (_touchPrev > -1) {
      this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
    }
    this.getSlideItem(_touchNext).addClass('lg-next-slide');
  };
  /**
   * Go to next slide
   * @param {Boolean} fromTouch - true if slide function called via touch event
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  plugin.goToNextSlide();
   * @see <a href="/demos/methods/">Demo</a>
   */
  LightGallery.prototype.goToNextSlide = function (fromTouch) {
    var _this = this;
    var _loop = this.settings.loop;
    if (fromTouch && this.galleryItems.length < 3) {
      _loop = false;
    }
    if (!this.lgBusy) {
      if (this.index + 1 < this.galleryItems.length) {
        this.index++;
        this.LGel.trigger(lGEvents.beforeNextSlide, {
          index: this.index
        });
        this.slide(this.index, !!fromTouch, false, 'next');
      } else {
        if (_loop) {
          this.index = 0;
          this.LGel.trigger(lGEvents.beforeNextSlide, {
            index: this.index
          });
          this.slide(this.index, !!fromTouch, false, 'next');
        } else if (this.settings.slideEndAnimation && !fromTouch) {
          this.outer.addClass('lg-right-end');
          setTimeout(function () {
            _this.outer.removeClass('lg-right-end');
          }, 400);
        }
      }
    }
  };
  /**
   * Go to previous slides
   * @param {Boolean} fromTouch - true if slide function called via touch event
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery({});
   *  plugin.goToPrevSlide();
   * @see <a href="/demos/methods/">Demo</a>
   *
   */
  LightGallery.prototype.goToPrevSlide = function (fromTouch) {
    var _this = this;
    var _loop = this.settings.loop;
    if (fromTouch && this.galleryItems.length < 3) {
      _loop = false;
    }
    if (!this.lgBusy) {
      if (this.index > 0) {
        this.index--;
        this.LGel.trigger(lGEvents.beforePrevSlide, {
          index: this.index,
          fromTouch: fromTouch
        });
        this.slide(this.index, !!fromTouch, false, 'prev');
      } else {
        if (_loop) {
          this.index = this.galleryItems.length - 1;
          this.LGel.trigger(lGEvents.beforePrevSlide, {
            index: this.index,
            fromTouch: fromTouch
          });
          this.slide(this.index, !!fromTouch, false, 'prev');
        } else if (this.settings.slideEndAnimation && !fromTouch) {
          this.outer.addClass('lg-left-end');
          setTimeout(function () {
            _this.outer.removeClass('lg-left-end');
          }, 400);
        }
      }
    }
  };
  LightGallery.prototype.keyPress = function () {
    var _this = this;
    $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
      if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
        e.preventDefault();
        if (_this.settings.allowMediaOverlap && _this.outer.hasClass('lg-can-toggle') && _this.outer.hasClass('lg-components-open')) {
          _this.outer.removeClass('lg-components-open');
        } else {
          _this.closeGallery();
        }
      }
      if (_this.lgOpened && _this.galleryItems.length > 1) {
        if (e.keyCode === 37) {
          e.preventDefault();
          _this.goToPrevSlide();
        }
        if (e.keyCode === 39) {
          e.preventDefault();
          _this.goToNextSlide();
        }
      }
    });
  };
  LightGallery.prototype.arrow = function () {
    var _this = this;
    this.getElementById('lg-prev').on('click.lg', function () {
      _this.goToPrevSlide();
    });
    this.getElementById('lg-next').on('click.lg', function () {
      _this.goToNextSlide();
    });
  };
  LightGallery.prototype.arrowDisable = function (index) {
    // Disable arrows if settings.hideControlOnEnd is true
    if (!this.settings.loop && this.settings.hideControlOnEnd) {
      var $prev = this.getElementById('lg-prev');
      var $next = this.getElementById('lg-next');
      if (index + 1 === this.galleryItems.length) {
        $next.attr('disabled', 'disabled').addClass('disabled');
      } else {
        $next.removeAttr('disabled').removeClass('disabled');
      }
      if (index === 0) {
        $prev.attr('disabled', 'disabled').addClass('disabled');
      } else {
        $prev.removeAttr('disabled').removeClass('disabled');
      }
    }
  };
  LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
    if (scaleX === void 0) {
      scaleX = 1;
    }
    if (scaleY === void 0) {
      scaleY = 1;
    }
    $el.css('transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px) scale3d(' + scaleX + ', ' + scaleY + ', 1)');
  };
  LightGallery.prototype.mousewheel = function () {
    var _this = this;
    var lastCall = 0;
    this.outer.on('wheel.lg', function (e) {
      if (!e.deltaY || _this.galleryItems.length < 2) {
        return;
      }
      e.preventDefault();
      var now = new Date().getTime();
      if (now - lastCall < 1000) {
        return;
      }
      lastCall = now;
      if (e.deltaY > 0) {
        _this.goToNextSlide();
      } else if (e.deltaY < 0) {
        _this.goToPrevSlide();
      }
    });
  };
  LightGallery.prototype.isSlideElement = function (target) {
    return target.hasClass('lg-outer') || target.hasClass('lg-item') || target.hasClass('lg-img-wrap') || target.hasClass('lg-img-rotate');
  };
  LightGallery.prototype.isPosterElement = function (target) {
    var playButton = this.getSlideItem(this.index).find('.lg-video-play-button').get();
    return target.hasClass('lg-video-poster') || target.hasClass('lg-video-play-button') || playButton && playButton.contains(target.get());
  };
  /**
   * Maximize minimize inline gallery.
   * @category lGPublicMethods
   */
  LightGallery.prototype.toggleMaximize = function () {
    var _this = this;
    this.getElementById('lg-maximize').on('click.lg', function () {
      _this.$container.toggleClass('lg-inline');
      _this.refreshOnResize();
    });
  };
  LightGallery.prototype.invalidateItems = function () {
    for (var index = 0; index < this.items.length; index++) {
      var element = this.items[index];
      var $element = $LG(element);
      $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
    }
  };
  LightGallery.prototype.trapFocus = function () {
    var _this = this;
    this.$container.get().focus({
      preventScroll: true
    });
    $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
      if (!_this.lgOpened) {
        return;
      }
      var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
      if (!isTabPressed) {
        return;
      }
      var focusableEls = utils.getFocusableElements(_this.$container.get());
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  };
  LightGallery.prototype.manageCloseGallery = function () {
    var _this = this;
    if (!this.settings.closable) return;
    var mousedown = false;
    this.getElementById('lg-close').on('click.lg', function () {
      _this.closeGallery();
    });
    if (this.settings.closeOnTap) {
      // If you drag the slide and release outside gallery gets close on chrome
      // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
      this.outer.on('mousedown.lg', function (e) {
        var target = $LG(e.target);
        if (_this.isSlideElement(target)) {
          mousedown = true;
        } else {
          mousedown = false;
        }
      });
      this.outer.on('mousemove.lg', function () {
        mousedown = false;
      });
      this.outer.on('mouseup.lg', function (e) {
        var target = $LG(e.target);
        if (_this.isSlideElement(target) && mousedown) {
          if (!_this.outer.hasClass('lg-dragging')) {
            _this.closeGallery();
          }
        }
      });
    }
  };
  /**
   * Close lightGallery if it is opened.
   *
   * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
   * @return returns the estimated time to close gallery completely including the close animation duration
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  plugin.closeGallery();
   *
   */
  LightGallery.prototype.closeGallery = function (force) {
    var _this = this;
    if (!this.lgOpened || !this.settings.closable && !force) {
      return 0;
    }
    this.LGel.trigger(lGEvents.beforeClose);
    if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
      $LG(window).scrollTop(this.prevScrollTop);
    }
    var currentItem = this.items[this.index];
    var transform;
    if (this.zoomFromOrigin && currentItem) {
      var _a = this.mediaContainerPosition,
        top_4 = _a.top,
        bottom = _a.bottom;
      var _b = this.galleryItems[this.index],
        __slideVideoInfo = _b.__slideVideoInfo,
        poster = _b.poster;
      var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
      transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
    }
    if (this.zoomFromOrigin && transform) {
      this.outer.addClass('lg-closing lg-zoom-from-image');
      this.getSlideItem(this.index).addClass('lg-start-end-progress').css('transition-duration', this.settings.startAnimationDuration + 'ms').css('transform', transform);
    } else {
      this.outer.addClass('lg-hide-items');
      // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
      // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
      this.outer.removeClass('lg-zoom-from-image');
    }
    // Unbind all events added by lightGallery
    // @todo
    //this.$el.off('.lg.tm');
    this.destroyModules();
    this.lGalleryOn = false;
    this.isDummyImageRemoved = false;
    this.zoomFromOrigin = this.settings.zoomFromOrigin;
    clearTimeout(this.hideBarTimeout);
    this.hideBarTimeout = false;
    $LG('html').removeClass('lg-on');
    this.outer.removeClass('lg-visible lg-components-open');
    // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
    this.$backdrop.removeClass('in').css('opacity', 0);
    var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
    this.$container.removeClass('lg-show-in');
    // Once the closign animation is completed and gallery is invisible
    setTimeout(function () {
      if (_this.zoomFromOrigin && transform) {
        _this.outer.removeClass('lg-zoom-from-image');
      }
      _this.$container.removeClass('lg-show');
      // Reset scrollbar
      _this.resetScrollBar();
      // Need to remove inline opacity as it is used in the stylesheet as well
      _this.$backdrop.removeAttr('style').css('transition-duration', _this.settings.backdropDuration + 'ms');
      _this.outer.removeClass("lg-closing " + _this.settings.startClass);
      _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
      _this.$inner.empty();
      if (_this.lgOpened) {
        _this.LGel.trigger(lGEvents.afterClose, {
          instance: _this
        });
      }
      if (_this.$container.get()) {
        _this.$container.get().blur();
      }
      _this.lgOpened = false;
    }, removeTimeout + 100);
    return removeTimeout + 100;
  };
  LightGallery.prototype.initModules = function () {
    this.plugins.forEach(function (module) {
      try {
        module.init();
      } catch (err) {
        console.warn("lightGallery:- make sure lightGallery module is properly initiated");
      }
    });
  };
  LightGallery.prototype.destroyModules = function (destroy) {
    this.plugins.forEach(function (module) {
      try {
        if (destroy) {
          module.destroy();
        } else {
          module.closeGallery && module.closeGallery();
        }
      } catch (err) {
        console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
      }
    });
  };
  /**
   * Refresh lightGallery with new set of children.
   *
   * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
   *
   * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
   * @see <a href="/demos/dynamic-mode/">Demo</a>
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  // Delete or add children, then call
   *  plugin.refresh();
   *
   */
  LightGallery.prototype.refresh = function (galleryItems) {
    if (!this.settings.dynamic) {
      this.invalidateItems();
    }
    if (galleryItems) {
      this.galleryItems = galleryItems;
    } else {
      this.galleryItems = this.getItems();
    }
    this.updateControls();
    this.openGalleryOnItemClick();
    this.LGel.trigger(lGEvents.updateSlides);
  };
  LightGallery.prototype.updateControls = function () {
    this.addSlideVideoInfo(this.galleryItems);
    this.updateCounterTotal();
    this.manageSingleSlideClassName();
  };
  LightGallery.prototype.destroyGallery = function () {
    this.destroyModules(true);
    if (!this.settings.dynamic) {
      this.invalidateItems();
    }
    $LG(window).off(".lg.global" + this.lgId);
    this.LGel.off('.lg');
    this.$container.remove();
  };
  /**
   * Destroy lightGallery.
   * Destroy lightGallery and its plugin instances completely
   *
   * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
   * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
   * You can use refresh method most of the times.
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  plugin.destroy();
   *
   */
  LightGallery.prototype.destroy = function () {
    var closeTimeout = this.closeGallery(true);
    if (closeTimeout) {
      setTimeout(this.destroyGallery.bind(this), closeTimeout);
    } else {
      this.destroyGallery();
    }
    return closeTimeout;
  };
  return LightGallery;
}();
function lightGallery(el, options) {
  return new LightGallery(el, options);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightGallery);

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
//# sourceMappingURL=7791.js.map