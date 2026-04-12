"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3407],{

/***/ 1805:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/structural-styles.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StructuralStylesLoader: () => (/* binding */ _StructuralStylesLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);



/**
 * Component used to load structural styles for focus indicators.
 * @docs-private
 */
let _StructuralStylesLoader = /*#__PURE__*/(() => {
  class _StructuralStylesLoader {
    static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StructuralStylesLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _StructuralStylesLoader,
      selectors: [["structural-styles"]],
      decls: 0,
      vars: 0,
      template: function _StructuralStylesLoader_Template(rf, ctx) {},
      styles: [".mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:\"\"}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _StructuralStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
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

/***/ 51935:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/animation.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationCurves: () => (/* binding */ AnimationCurves),
/* harmony export */   AnimationDurations: () => (/* binding */ AnimationDurations),
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _animationsDisabled: () => (/* binding */ _animationsDisabled),
/* harmony export */   _getAnimationsState: () => (/* binding */ _getAnimationsState)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 27797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);



/** Injection token used to configure the animations in Angular Material. */
const MATERIAL_ANIMATIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MATERIAL_ANIMATIONS');
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationCurves = /*#__PURE__*/(() => {
  class AnimationCurves {
    static STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    static DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    static ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    static SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
  }
  return AnimationCurves;
})();
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationDurations = /*#__PURE__*/(() => {
  class AnimationDurations {
    static COMPLEX = '375ms';
    static ENTERING = '225ms';
    static EXITING = '195ms';
  }
  return AnimationDurations;
})();
let reducedMotion = null;
/**
 * Gets the the configured animations state.
 * @docs-private
 */
function _getAnimationsState() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return 'di-disabled';
  }
  reducedMotion ??= (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher).matchMedia('(prefers-reduced-motion)').matches;
  return reducedMotion ? 'reduced-motion' : 'enabled';
}
/**
 * Returns whether animations have been disabled by DI. Must be called in a DI context.
 * @docs-private
 */
function _animationsDisabled() {
  return _getAnimationsState() !== 'enabled';
}


/***/ }),

/***/ 61780:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/fake-event-detection.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when `event.buttons` is zero, or
  // `event.detail` is zero depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `detail` works on Chrome, but fails on Firefox.
  return event.buttons === 0 || event.detail === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}


/***/ }),

/***/ 64992:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/slider.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSlider: () => (/* binding */ MatSlider),
/* harmony export */   MatSliderChange: () => (/* binding */ MatSliderChange),
/* harmony export */   MatSliderModule: () => (/* binding */ MatSliderModule),
/* harmony export */   MatSliderRangeThumb: () => (/* binding */ MatSliderRangeThumb),
/* harmony export */   MatSliderThumb: () => (/* binding */ MatSliderThumb),
/* harmony export */   MatSliderVisualThumb: () => (/* binding */ MatSliderVisualThumb)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 17170);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 37579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ripple_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ripple.mjs */ 74157);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/private */ 86739);
/* harmony import */ var _animation_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation.mjs */ 51935);
/* harmony import */ var _structural_styles_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./structural-styles.mjs */ 1805);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _common_module_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common-module.mjs */ 80097);
/* harmony import */ var _ripple_module_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ripple-module.mjs */ 86362);
















/**
 * Thumb types: range slider has two thumbs (START, END) whereas single point
 * slider only has one thumb (END).
 */
const _c0 = ["knob"];
const _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.valueIndicatorText);
  }
}
const _c2 = ["trackActive"];
const _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const ɵ$index_14_r2 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("transform", ctx_r2._calcTickMarkTransform(ɵ$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb = /*#__PURE__*/function (_MatThumb) {
  _MatThumb[_MatThumb["START"] = 1] = "START";
  _MatThumb[_MatThumb["END"] = 2] = "END";
  return _MatThumb;
}(_MatThumb || {});
/** Tick mark enum, for discrete sliders. */
var _MatTickMark = /*#__PURE__*/function (_MatTickMark) {
  _MatTickMark[_MatTickMark["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark[_MatTickMark["INACTIVE"] = 1] = "INACTIVE";
  return _MatTickMark;
}(_MatTickMark || {});
/**
 * Injection token that can be used for a `MatSlider` to provide itself as a
 * parent to the `MatSliderThumb` and `MatSliderRangeThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('_MatSlider');
/**
 * Injection token that can be used to query for a `MatSliderThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER_THUMB = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('_MatSliderThumb');
/**
 * Injection token that can be used to query for a `MatSliderRangeThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER_RANGE_THUMB = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('_MatSliderRangeThumb');
/**
 * Injection token that can be used to query for a `MatSliderVisualThumb`.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
const MAT_SLIDER_VISUAL_THUMB = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('_MatSliderVisualThumb');
/**
 * A simple change event emitted by the MatSlider component.
 * @deprecated Use event bindings directly on the MatSliderThumbs for `change` and `input` events. See https://v17.material.angular.dev/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatSliderChange {
  /** The MatSliderThumb that was interacted with. */
  source;
  /** The MatSlider that was interacted with. */
  parent;
  /** The new value of the source slider. */
  value;
}

/**
 * The visual slider thumb.
 *
 * Handles the slider thumb ripple states (hover, focus, and active),
 * and displaying the value tooltip on discrete sliders.
 * @docs-private
 */
let MatSliderVisualThumb = /*#__PURE__*/(() => {
  class MatSliderVisualThumb {
    _cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    _slider = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_SLIDER);
    _renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2);
    _listenerCleanups;
    /** Whether the slider displays a numeric value label upon pressing the thumb. */
    discrete;
    /** Indicates which slider thumb this input corresponds to. */
    thumbPosition;
    /** The display value of the slider thumb. */
    valueIndicatorText;
    /** The MatRipple for this slider thumb. */
    _ripple;
    /** The slider thumb knob. */
    _knob;
    /** The slider thumb value indicator container. */
    _valueIndicatorContainer;
    /** The slider input corresponding to this slider thumb. */
    _sliderInput;
    /** The native html element of the slider input corresponding to this thumb. */
    _sliderInputEl;
    /** The RippleRef for the slider thumbs hover state. */
    _hoverRippleRef;
    /** The RippleRef for the slider thumbs focus state. */
    _focusRippleRef;
    /** The RippleRef for the slider thumbs active state. */
    _activeRippleRef;
    /** Whether the slider thumb is currently being hovered. */
    _isHovered = false;
    /** Whether the slider thumb is currently being pressed. */
    _isActive = false;
    /** Whether the value indicator tooltip is visible. */
    _isValueIndicatorVisible = false;
    /** The host native HTML input element. */
    _hostElement = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef).nativeElement;
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
    constructor() {}
    ngAfterViewInit() {
      const sliderInput = this._slider._getInput(this.thumbPosition);
      // No-op if the slider isn't configured properly. `MatSlider` will
      // throw an error instructing the user how to set up the slider.
      if (!sliderInput) {
        return;
      }
      this._ripple.radius = 24;
      this._sliderInput = sliderInput;
      this._sliderInputEl = this._sliderInput._hostElement;
      // These listeners don't update any data bindings so we bind them outside
      // of the NgZone to prevent Angular from needlessly running change detection.
      this._ngZone.runOutsideAngular(() => {
        const input = this._sliderInputEl;
        const renderer = this._renderer;
        this._listenerCleanups = [renderer.listen(input, 'pointermove', this._onPointerMove), renderer.listen(input, 'pointerdown', this._onDragStart), renderer.listen(input, 'pointerup', this._onDragEnd), renderer.listen(input, 'pointerleave', this._onMouseLeave), renderer.listen(input, 'focus', this._onFocus), renderer.listen(input, 'blur', this._onBlur)];
      });
    }
    ngOnDestroy() {
      this._listenerCleanups?.forEach(cleanup => cleanup());
    }
    _onPointerMove = event => {
      if (this._sliderInput._isFocused) {
        return;
      }
      const rect = this._hostElement.getBoundingClientRect();
      const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
      this._isHovered = isHovered;
      if (isHovered) {
        this._showHoverRipple();
      } else {
        this._hideRipple(this._hoverRippleRef);
      }
    };
    _onMouseLeave = () => {
      this._isHovered = false;
      this._hideRipple(this._hoverRippleRef);
    };
    _onFocus = () => {
      // We don't want to show the hover ripple on top of the focus ripple.
      // Happen when the users cursor is over a thumb and then the user tabs to it.
      this._hideRipple(this._hoverRippleRef);
      this._showFocusRipple();
      this._hostElement.classList.add('mdc-slider__thumb--focused');
    };
    _onBlur = () => {
      // Happens when the user tabs away while still dragging a thumb.
      if (!this._isActive) {
        this._hideRipple(this._focusRippleRef);
      }
      // Happens when the user tabs away from a thumb but their cursor is still over it.
      if (this._isHovered) {
        this._showHoverRipple();
      }
      this._hostElement.classList.remove('mdc-slider__thumb--focused');
    };
    _onDragStart = event => {
      if (event.button !== 0) {
        return;
      }
      this._isActive = true;
      this._showActiveRipple();
    };
    _onDragEnd = () => {
      this._isActive = false;
      this._hideRipple(this._activeRippleRef);
      // Happens when the user starts dragging a thumb, tabs away, and then stops dragging.
      if (!this._sliderInput._isFocused) {
        this._hideRipple(this._focusRippleRef);
      }
      // On Safari we need to immediately re-show the hover ripple because
      // sliders do not retain focus from pointer events on that platform.
      if (this._platform.SAFARI) {
        this._showHoverRipple();
      }
    };
    /** Handles displaying the hover ripple. */
    _showHoverRipple() {
      if (!this._isShowingRipple(this._hoverRippleRef)) {
        this._hoverRippleRef = this._showRipple({
          enterDuration: 0,
          exitDuration: 0
        });
        this._hoverRippleRef?.element.classList.add('mat-mdc-slider-hover-ripple');
      }
    }
    /** Handles displaying the focus ripple. */
    _showFocusRipple() {
      // Show the focus ripple event if noop animations are enabled.
      if (!this._isShowingRipple(this._focusRippleRef)) {
        this._focusRippleRef = this._showRipple({
          enterDuration: 0,
          exitDuration: 0
        }, true);
        this._focusRippleRef?.element.classList.add('mat-mdc-slider-focus-ripple');
      }
    }
    /** Handles displaying the active ripple. */
    _showActiveRipple() {
      if (!this._isShowingRipple(this._activeRippleRef)) {
        this._activeRippleRef = this._showRipple({
          enterDuration: 225,
          exitDuration: 400
        });
        this._activeRippleRef?.element.classList.add('mat-mdc-slider-active-ripple');
      }
    }
    /** Whether the given rippleRef is currently fading in or visible. */
    _isShowingRipple(rippleRef) {
      return rippleRef?.state === _ripple_mjs__WEBPACK_IMPORTED_MODULE_5__.RippleState.FADING_IN || rippleRef?.state === _ripple_mjs__WEBPACK_IMPORTED_MODULE_5__.RippleState.VISIBLE;
    }
    /** Manually launches the slider thumb ripple using the specified ripple animation config. */
    _showRipple(animation, ignoreGlobalRippleConfig) {
      if (this._slider.disabled) {
        return;
      }
      this._showValueIndicator();
      if (this._slider._isRange) {
        const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
        sibling._showValueIndicator();
      }
      if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
        return;
      }
      return this._ripple.launch({
        animation: this._slider._noopAnimations ? {
          enterDuration: 0,
          exitDuration: 0
        } : animation,
        centered: true,
        persistent: true
      });
    }
    /**
     * Fades out the given ripple.
     * Also hides the value indicator if no ripple is showing.
     */
    _hideRipple(rippleRef) {
      rippleRef?.fadeOut();
      if (this._isShowingAnyRipple()) {
        return;
      }
      if (!this._slider._isRange) {
        this._hideValueIndicator();
      }
      const sibling = this._getSibling();
      if (!sibling._isShowingAnyRipple()) {
        this._hideValueIndicator();
        sibling._hideValueIndicator();
      }
    }
    /** Shows the value indicator ui. */
    _showValueIndicator() {
      this._hostElement.classList.add('mdc-slider__thumb--with-indicator');
    }
    /** Hides the value indicator ui. */
    _hideValueIndicator() {
      this._hostElement.classList.remove('mdc-slider__thumb--with-indicator');
    }
    _getSibling() {
      return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
    }
    /** Gets the value indicator container's native HTML element. */
    _getValueIndicatorContainer() {
      return this._valueIndicatorContainer?.nativeElement;
    }
    /** Gets the native HTML element of the slider thumb knob. */
    _getKnob() {
      return this._knob.nativeElement;
    }
    _isShowingAnyRipple() {
      return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
    }
    static ɵfac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSliderVisualThumb)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatSliderVisualThumb,
      selectors: [["mat-slider-visual-thumb"]],
      viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ripple_mjs__WEBPACK_IMPORTED_MODULE_5__.MatRipple, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._ripple = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._knob = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._valueIndicatorContainer = _t.first);
        }
      },
      hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
      inputs: {
        discrete: "discrete",
        thumbPosition: "thumbPosition",
        valueIndicatorText: "valueIndicatorText"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }])],
      decls: 4,
      vars: 2,
      consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
      template: function MatSliderVisualThumb_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 3, 0)(3, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.discrete ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", true);
        }
      },
      dependencies: [_ripple_mjs__WEBPACK_IMPORTED_MODULE_5__.MatRipple],
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatSliderVisualThumb;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO(wagnermaciel): maybe handle the following edge case:
// 1. start dragging discrete slider
// 2. tab to disable checkbox
// 3. without ending drag, disable the slider
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
let MatSlider = /*#__PURE__*/(() => {
  class MatSlider {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    _cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.Directionality, {
      optional: true
    });
    _globalRippleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ripple_mjs__WEBPACK_IMPORTED_MODULE_5__.MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    /** The active portion of the slider track. */
    _trackActive;
    /** The slider thumb(s). */
    _thumbs;
    /** The sliders hidden range input(s). */
    _input;
    /** The sliders hidden range input(s). */
    _inputs;
    /** Whether the slider is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(v) {
      this._disabled = v;
      const endInput = this._getInput(_MatThumb.END);
      const startInput = this._getInput(_MatThumb.START);
      if (endInput) {
        endInput.disabled = this._disabled;
      }
      if (startInput) {
        startInput.disabled = this._disabled;
      }
    }
    _disabled = false;
    /** Whether the slider displays a numeric value label upon pressing the thumb. */
    get discrete() {
      return this._discrete;
    }
    set discrete(v) {
      this._discrete = v;
      this._updateValueIndicatorUIs();
    }
    _discrete = false;
    /** Whether the slider displays tick marks along the slider track. */
    get showTickMarks() {
      return this._showTickMarks;
    }
    set showTickMarks(value) {
      this._showTickMarks = value;
      if (this._hasViewInitialized) {
        this._updateTickMarkUI();
        this._updateTickMarkTrackUI();
      }
    }
    _showTickMarks = false;
    /** The minimum value that the slider can have. */
    get min() {
      return this._min;
    }
    set min(v) {
      const min = v === undefined || v === null || isNaN(v) ? this._min : v;
      if (this._min !== min) {
        this._updateMin(min);
      }
    }
    _min = 0;
    /**
     * Theme color of the slider. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slider/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Whether ripples are disabled in the slider. */
    disableRipple = false;
    _updateMin(min) {
      const prevMin = this._min;
      this._min = min;
      this._isRange ? this._updateMinRange({
        old: prevMin,
        new: min
      }) : this._updateMinNonRange(min);
      this._onMinMaxOrStepChange();
    }
    _updateMinRange(min) {
      const endInput = this._getInput(_MatThumb.END);
      const startInput = this._getInput(_MatThumb.START);
      const oldEndValue = endInput.value;
      const oldStartValue = startInput.value;
      startInput.min = min.new;
      endInput.min = Math.max(min.new, startInput.value);
      startInput.max = Math.min(endInput.max, endInput.value);
      startInput._updateWidthInactive();
      endInput._updateWidthInactive();
      min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
      if (oldEndValue !== endInput.value) {
        this._onValueChange(endInput);
      }
      if (oldStartValue !== startInput.value) {
        this._onValueChange(startInput);
      }
    }
    _updateMinNonRange(min) {
      const input = this._getInput(_MatThumb.END);
      if (input) {
        const oldValue = input.value;
        input.min = min;
        input._updateThumbUIByValue();
        this._updateTrackUI(input);
        if (oldValue !== input.value) {
          this._onValueChange(input);
        }
      }
    }
    /** The maximum value that the slider can have. */
    get max() {
      return this._max;
    }
    set max(v) {
      const max = v === undefined || v === null || isNaN(v) ? this._max : v;
      if (this._max !== max) {
        this._updateMax(max);
      }
    }
    _max = 100;
    _updateMax(max) {
      const prevMax = this._max;
      this._max = max;
      this._isRange ? this._updateMaxRange({
        old: prevMax,
        new: max
      }) : this._updateMaxNonRange(max);
      this._onMinMaxOrStepChange();
    }
    _updateMaxRange(max) {
      const endInput = this._getInput(_MatThumb.END);
      const startInput = this._getInput(_MatThumb.START);
      const oldEndValue = endInput.value;
      const oldStartValue = startInput.value;
      endInput.max = max.new;
      startInput.max = Math.min(max.new, endInput.value);
      endInput.min = startInput.value;
      endInput._updateWidthInactive();
      startInput._updateWidthInactive();
      max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
      if (oldEndValue !== endInput.value) {
        this._onValueChange(endInput);
      }
      if (oldStartValue !== startInput.value) {
        this._onValueChange(startInput);
      }
    }
    _updateMaxNonRange(max) {
      const input = this._getInput(_MatThumb.END);
      if (input) {
        const oldValue = input.value;
        input.max = max;
        input._updateThumbUIByValue();
        this._updateTrackUI(input);
        if (oldValue !== input.value) {
          this._onValueChange(input);
        }
      }
    }
    /** The values at which the thumb will snap. */
    get step() {
      return this._step;
    }
    set step(v) {
      const step = isNaN(v) ? this._step : v;
      if (this._step !== step) {
        this._updateStep(step);
      }
    }
    _step = 1;
    _updateStep(step) {
      this._step = step;
      this._isRange ? this._updateStepRange() : this._updateStepNonRange();
      this._onMinMaxOrStepChange();
    }
    _updateStepRange() {
      const endInput = this._getInput(_MatThumb.END);
      const startInput = this._getInput(_MatThumb.START);
      const oldEndValue = endInput.value;
      const oldStartValue = startInput.value;
      const prevStartValue = startInput.value;
      endInput.min = this._min;
      startInput.max = this._max;
      endInput.step = this._step;
      startInput.step = this._step;
      if (this._platform.SAFARI) {
        endInput.value = endInput.value;
        startInput.value = startInput.value;
      }
      endInput.min = Math.max(this._min, startInput.value);
      startInput.max = Math.min(this._max, endInput.value);
      startInput._updateWidthInactive();
      endInput._updateWidthInactive();
      endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
      if (oldEndValue !== endInput.value) {
        this._onValueChange(endInput);
      }
      if (oldStartValue !== startInput.value) {
        this._onValueChange(startInput);
      }
    }
    _updateStepNonRange() {
      const input = this._getInput(_MatThumb.END);
      if (input) {
        const oldValue = input.value;
        input.step = this._step;
        if (this._platform.SAFARI) {
          input.value = input.value;
        }
        input._updateThumbUIByValue();
        if (oldValue !== input.value) {
          this._onValueChange(input);
        }
      }
    }
    /**
     * Function that will be used to format the value before it is displayed
     * in the thumb label. Can be used to format very large number in order
     * for them to fit into the slider thumb.
     */
    displayWith = value => `${value}`;
    /** Used to keep track of & render the active & inactive tick marks on the slider track. */
    _tickMarks;
    /** Whether animations have been disabled. */
    _noopAnimations = (0,_animation_mjs__WEBPACK_IMPORTED_MODULE_7__._animationsDisabled)();
    /** Subscription to changes to the directionality (LTR / RTL) context for the application. */
    _dirChangeSubscription;
    /** Observer used to monitor size changes in the slider. */
    _resizeObserver;
    // Stored dimensions to avoid calling getBoundingClientRect redundantly.
    _cachedWidth;
    _cachedLeft;
    _rippleRadius = 24;
    // The value indicator tooltip text for the visual slider thumb(s).
    /** @docs-private */
    startValueIndicatorText = '';
    /** @docs-private */
    endValueIndicatorText = '';
    // Used to control the translateX of the visual slider thumb(s).
    _endThumbTransform;
    _startThumbTransform;
    _isRange = false;
    /** Whether the slider is rtl. */
    _isRtl = false;
    _hasViewInitialized = false;
    /**
     * The width of the tick mark track.
     * The tick mark track width is different from full track width
     */
    _tickMarkTrackWidth = 0;
    _hasAnimation = false;
    _resizeTimer = null;
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_6__._CdkPrivateStyleLoader).load(_structural_styles_mjs__WEBPACK_IMPORTED_MODULE_8__._StructuralStylesLoader);
      if (this._dir) {
        this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
        this._isRtl = this._dir.value === 'rtl';
      }
    }
    /** The radius of the native slider's knob. AFAIK there is no way to avoid hardcoding this. */
    _knobRadius = 8;
    _inputPadding;
    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        this._updateDimensions();
      }
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      this._isRange = !!eInput && !!sInput;
      this._cdr.detectChanges();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
      }
      const thumb = this._getThumb(_MatThumb.END);
      this._rippleRadius = thumb._ripple.radius;
      this._inputPadding = this._rippleRadius - this._knobRadius;
      this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
      this._updateTrackUI(eInput);
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
      this._observeHostResize();
      this._cdr.detectChanges();
    }
    _initUINonRange(eInput) {
      eInput.initProps();
      eInput.initUI();
      this._updateValueIndicatorUI(eInput);
      this._hasViewInitialized = true;
      eInput._updateThumbUIByValue();
    }
    _initUIRange(eInput, sInput) {
      eInput.initProps();
      eInput.initUI();
      sInput.initProps();
      sInput.initUI();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      this._updateValueIndicatorUIs();
      this._hasViewInitialized = true;
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
    }
    ngOnDestroy() {
      this._dirChangeSubscription.unsubscribe();
      this._resizeObserver?.disconnect();
      this._resizeObserver = null;
    }
    /** Handles updating the slider ui after a dir change. */
    _onDirChange() {
      this._isRtl = this._dir?.value === 'rtl';
      this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
      this._updateTickMarkUI();
    }
    _onDirChangeRange() {
      const endInput = this._getInput(_MatThumb.END);
      const startInput = this._getInput(_MatThumb.START);
      endInput._setIsLeftThumb();
      startInput._setIsLeftThumb();
      endInput.translateX = endInput._calcTranslateXByValue();
      startInput.translateX = startInput._calcTranslateXByValue();
      endInput._updateStaticStyles();
      startInput._updateStaticStyles();
      endInput._updateWidthInactive();
      startInput._updateWidthInactive();
      endInput._updateThumbUIByValue();
      startInput._updateThumbUIByValue();
    }
    _onDirChangeNonRange() {
      const input = this._getInput(_MatThumb.END);
      input._updateThumbUIByValue();
    }
    /** Starts observing and updating the slider if the host changes its size. */
    _observeHostResize() {
      if (typeof ResizeObserver === 'undefined' || !ResizeObserver) {
        return;
      }
      this._ngZone.runOutsideAngular(() => {
        this._resizeObserver = new ResizeObserver(() => {
          if (this._isActive()) {
            return;
          }
          if (this._resizeTimer) {
            clearTimeout(this._resizeTimer);
          }
          this._onResize();
        });
        this._resizeObserver.observe(this._elementRef.nativeElement);
      });
    }
    /** Whether any of the thumbs are currently active. */
    _isActive() {
      return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
    }
    _getValue(thumbPosition = _MatThumb.END) {
      const input = this._getInput(thumbPosition);
      if (!input) {
        return this.min;
      }
      return input.value;
    }
    _skipUpdate() {
      return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
    }
    /** Stores the slider dimensions. */
    _updateDimensions() {
      this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
      this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
    }
    /** Sets the styles for the active portion of the track. */
    _setTrackActiveStyles(styles) {
      const trackStyle = this._trackActive.nativeElement.style;
      trackStyle.left = styles.left;
      trackStyle.right = styles.right;
      trackStyle.transformOrigin = styles.transformOrigin;
      trackStyle.transform = styles.transform;
    }
    /** Returns the translateX positioning for a tick mark based on it's index. */
    _calcTickMarkTransform(index) {
      // TODO(wagnermaciel): See if we can avoid doing this and just using flex to position these.
      const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
      const translateX = this._isRtl ? this._cachedWidth - 6 - offset : offset;
      return `translateX(${translateX}px`;
    }
    // Handlers for updating the slider ui.
    _onTranslateXChange(source) {
      if (!this._hasViewInitialized) {
        return;
      }
      this._updateThumbUI(source);
      this._updateTrackUI(source);
      this._updateOverlappingThumbUI(source);
    }
    _onTranslateXChangeBySideEffect(input1, input2) {
      if (!this._hasViewInitialized) {
        return;
      }
      input1._updateThumbUIByValue();
      input2._updateThumbUIByValue();
    }
    _onValueChange(source) {
      if (!this._hasViewInitialized) {
        return;
      }
      this._updateValueIndicatorUI(source);
      this._updateTickMarkUI();
      this._cdr.detectChanges();
    }
    _onMinMaxOrStepChange() {
      if (!this._hasViewInitialized) {
        return;
      }
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
      this._cdr.markForCheck();
    }
    _onResize() {
      if (!this._hasViewInitialized) {
        return;
      }
      this._updateDimensions();
      if (this._isRange) {
        const eInput = this._getInput(_MatThumb.END);
        const sInput = this._getInput(_MatThumb.START);
        eInput._updateThumbUIByValue();
        sInput._updateThumbUIByValue();
        eInput._updateStaticStyles();
        sInput._updateStaticStyles();
        eInput._updateMinMax();
        sInput._updateMinMax();
        eInput._updateWidthInactive();
        sInput._updateWidthInactive();
      } else {
        const eInput = this._getInput(_MatThumb.END);
        if (eInput) {
          eInput._updateThumbUIByValue();
        }
      }
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
      this._cdr.detectChanges();
    }
    /** Whether or not the slider thumbs overlap. */
    _thumbsOverlap = false;
    /** Returns true if the slider knobs are overlapping one another. */
    _areThumbsOverlapping() {
      const startInput = this._getInput(_MatThumb.START);
      const endInput = this._getInput(_MatThumb.END);
      if (!startInput || !endInput) {
        return false;
      }
      return endInput.translateX - startInput.translateX < 20;
    }
    /**
     * Updates the class names of overlapping slider thumbs so
     * that the current active thumb is styled to be on "top".
     */
    _updateOverlappingThumbClassNames(source) {
      const sibling = source.getSibling();
      const sourceThumb = this._getThumb(source.thumbPosition);
      const siblingThumb = this._getThumb(sibling.thumbPosition);
      siblingThumb._hostElement.classList.remove('mdc-slider__thumb--top');
      sourceThumb._hostElement.classList.toggle('mdc-slider__thumb--top', this._thumbsOverlap);
    }
    /** Updates the UI of slider thumbs when they begin or stop overlapping. */
    _updateOverlappingThumbUI(source) {
      if (!this._isRange || this._skipUpdate()) {
        return;
      }
      if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
        this._thumbsOverlap = !this._thumbsOverlap;
        this._updateOverlappingThumbClassNames(source);
      }
    }
    // _MatThumb styles update conditions
    //
    // 1. TranslateX, resize, or dir change
    //    - Reason: The thumb styles need to be updated according to the new translateX.
    // 2. Min, max, or step
    //    - Reason: The value may have silently changed.
    /** Updates the translateX of the given thumb. */
    _updateThumbUI(source) {
      if (this._skipUpdate()) {
        return;
      }
      const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
      thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
    }
    // Value indicator text update conditions
    //
    // 1. Value
    //    - Reason: The value displayed needs to be updated.
    // 2. Min, max, or step
    //    - Reason: The value may have silently changed.
    /** Updates the value indicator tooltip ui for the given thumb. */
    _updateValueIndicatorUI(source) {
      if (this._skipUpdate()) {
        return;
      }
      const valuetext = this.displayWith(source.value);
      this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute('aria-valuetext', valuetext);
      if (this.discrete) {
        source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
        const visualThumb = this._getThumb(source.thumbPosition);
        valuetext.length < 3 ? visualThumb._hostElement.classList.add('mdc-slider__thumb--short-value') : visualThumb._hostElement.classList.remove('mdc-slider__thumb--short-value');
      }
    }
    /** Updates all value indicator UIs in the slider. */
    _updateValueIndicatorUIs() {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      if (eInput) {
        this._updateValueIndicatorUI(eInput);
      }
      if (sInput) {
        this._updateValueIndicatorUI(sInput);
      }
    }
    // Update Tick Mark Track Width
    //
    // 1. Min, max, or step
    //    - Reason: The maximum reachable value may have changed.
    //    - Side note: The maximum reachable value is different from the maximum value set by the
    //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
    //      reachable value of 95.
    // 2. Resize
    //    - Reason: The position for the maximum reachable value needs to be recalculated.
    /** Updates the width of the tick mark track. */
    _updateTickMarkTrackUI() {
      if (!this.showTickMarks || this._skipUpdate()) {
        return;
      }
      const step = this._step && this._step > 0 ? this._step : 1;
      const maxValue = Math.floor(this.max / step) * step;
      const percentage = (maxValue - this.min) / (this.max - this.min);
      this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
    }
    // Track active update conditions
    //
    // 1. TranslateX
    //    - Reason: The track active should line up with the new thumb position.
    // 2. Min or max
    //    - Reason #1: The 'active' percentage needs to be recalculated.
    //    - Reason #2: The value may have silently changed.
    // 3. Step
    //    - Reason: The value may have silently changed causing the thumb(s) to shift.
    // 4. Dir change
    //    - Reason: The track active will need to be updated according to the new thumb position(s).
    // 5. Resize
    //    - Reason: The total width the 'active' tracks translateX is based on has changed.
    /** Updates the scale on the active portion of the track. */
    _updateTrackUI(source) {
      if (this._skipUpdate()) {
        return;
      }
      this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
    }
    _updateTrackUIRange(source) {
      const sibling = source.getSibling();
      if (!sibling || !this._cachedWidth) {
        return;
      }
      const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
      if (source._isLeftThumb && this._cachedWidth) {
        this._setTrackActiveStyles({
          left: 'auto',
          right: `${this._cachedWidth - sibling.translateX}px`,
          transformOrigin: 'right',
          transform: `scaleX(${activePercentage})`
        });
      } else {
        this._setTrackActiveStyles({
          left: `${sibling.translateX}px`,
          right: 'auto',
          transformOrigin: 'left',
          transform: `scaleX(${activePercentage})`
        });
      }
    }
    _updateTrackUINonRange(source) {
      this._isRtl ? this._setTrackActiveStyles({
        left: 'auto',
        right: '0px',
        transformOrigin: 'right',
        transform: `scaleX(${1 - source.fillPercentage})`
      }) : this._setTrackActiveStyles({
        left: '0px',
        right: 'auto',
        transformOrigin: 'left',
        transform: `scaleX(${source.fillPercentage})`
      });
    }
    // Tick mark update conditions
    //
    // 1. Value
    //    - Reason: a tick mark which was once active might now be inactive or vice versa.
    // 2. Min, max, or step
    //    - Reason #1: the number of tick marks may have changed.
    //    - Reason #2: The value may have silently changed.
    /** Updates the dots along the slider track. */
    _updateTickMarkUI() {
      if (!this.showTickMarks || this.step === undefined || this.min === undefined || this.max === undefined) {
        return;
      }
      const step = this.step > 0 ? this.step : 1;
      this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
    }
    _updateTickMarkUINonRange(step) {
      const value = this._getValue();
      let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
      let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
      this._isRtl ? numActive++ : numInactive++;
      this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
    }
    _updateTickMarkUIRange(step) {
      const endValue = this._getValue();
      const startValue = this._getValue(_MatThumb.START);
      const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
      const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
      const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
      this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
    }
    /** Gets the slider thumb input of the given thumb position. */
    _getInput(thumbPosition) {
      if (thumbPosition === _MatThumb.END && this._input) {
        return this._input;
      }
      if (this._inputs?.length) {
        return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
      }
      return;
    }
    /** Gets the slider thumb HTML input element of the given thumb position. */
    _getThumb(thumbPosition) {
      return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
    }
    _setTransition(withAnimation) {
      this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
      this._elementRef.nativeElement.classList.toggle('mat-mdc-slider-with-animation', this._hasAnimation);
    }
    /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
    _isCursorOnSliderThumb(event, rect) {
      const radius = rect.width / 2;
      const centerX = rect.x + radius;
      const centerY = rect.y + radius;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
    }
    static ɵfac = function MatSlider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSlider)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatSlider,
      selectors: [["mat-slider"]],
      contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_SLIDER_THUMB, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._input = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._inputs = _t);
        }
      },
      viewQuery: function MatSlider_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MAT_SLIDER_VISUAL_THUMB, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._trackActive = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._thumbs = _t);
        }
      },
      hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
      hostVars: 12,
      hostBindings: function MatSlider_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute],
        discrete: [2, "discrete", "discrete", _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute],
        showTickMarks: [2, "showTickMarks", "showTickMarks", _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute],
        min: [2, "min", "min", _angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute],
        color: "color",
        disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute],
        max: [2, "max", "max", _angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute],
        step: [2, "step", "step", _angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute],
        displayWith: "displayWith"
      },
      exportAs: ["matSlider"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }])],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 5,
      consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
      template: function MatSlider_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-slider-visual-thumb", 7);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.showTickMarks ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx._isRange ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
        }
      },
      dependencies: [MatSliderVisualThumb],
      styles: [".mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:\"\";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:\"\"}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatSlider;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Ensures that there is not an invalid configuration for the slider thumb inputs. */
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute('matSliderStartThumb');
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? 'matSliderEndThumb' : 'matSliderThumb');
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}

/**
 * Provider that allows the slider thumb to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MatSliderThumb),
  multi: true
};
/**
 * Provider that allows the range slider thumb to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MatSliderRangeThumb),
  multi: true
};
/**
 * Directive that adds slider-specific behaviors to an input element inside `<mat-slider>`.
 * Up to two may be placed inside of a `<mat-slider>`.
 *
 * If one is used, the selector `matSliderThumb` must be used, and the outcome will be a normal
 * slider. If two are used, the selectors `matSliderStartThumb` and `matSliderEndThumb` must be
 * used, and the outcome will be a range slider with two slider thumbs.
 */
let MatSliderThumb = /*#__PURE__*/(() => {
  class MatSliderThumb {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    _cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    _slider = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(MAT_SLIDER);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform);
    _listenerCleanups;
    get value() {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute)(this._hostElement.value, 0);
    }
    set value(value) {
      if (value === null) {
        value = this._getDefaultValue();
      }
      value = isNaN(value) ? 0 : value;
      const stringValue = value + '';
      if (!this._hasSetInitialValue) {
        this._initialValue = stringValue;
        return;
      }
      if (this._isActive) {
        return;
      }
      this._setValue(stringValue);
    }
    /**
     * Handles programmatic value setting. This has been split out to
     * allow the range thumb to override it and add additional necessary logic.
     */
    _setValue(value) {
      this._hostElement.value = value;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
      this._slider._cdr.markForCheck();
    }
    /** Event emitted when the `value` is changed. */
    valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** Event emitted when the slider thumb starts being dragged. */
    dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** Event emitted when the slider thumb stops being dragged. */
    dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * The current translateX in px of the slider visual thumb.
     * @docs-private
     */
    get translateX() {
      if (this._slider.min >= this._slider.max) {
        this._translateX = this._tickMarkOffset;
        return this._translateX;
      }
      if (this._translateX === undefined) {
        this._translateX = this._calcTranslateXByValue();
      }
      return this._translateX;
    }
    set translateX(v) {
      this._translateX = v;
    }
    _translateX;
    /**
     * Indicates whether this thumb is the start or end thumb.
     * @docs-private
     */
    thumbPosition = _MatThumb.END;
    /** @docs-private */
    get min() {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute)(this._hostElement.min, 0);
    }
    set min(v) {
      this._hostElement.min = v + '';
      this._cdr.detectChanges();
    }
    /** @docs-private */
    get max() {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute)(this._hostElement.max, 0);
    }
    set max(v) {
      this._hostElement.max = v + '';
      this._cdr.detectChanges();
    }
    get step() {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute)(this._hostElement.step, 0);
    }
    set step(v) {
      this._hostElement.step = v + '';
      this._cdr.detectChanges();
    }
    /** @docs-private */
    get disabled() {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute)(this._hostElement.disabled);
    }
    set disabled(v) {
      this._hostElement.disabled = v;
      this._cdr.detectChanges();
      if (this._slider.disabled !== this.disabled) {
        this._slider.disabled = this.disabled;
      }
    }
    /** The percentage of the slider that coincides with the value. */
    get percentage() {
      if (this._slider.min >= this._slider.max) {
        return this._slider._isRtl ? 1 : 0;
      }
      return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
    }
    /** @docs-private */
    get fillPercentage() {
      if (!this._slider._cachedWidth) {
        return this._slider._isRtl ? 1 : 0;
      }
      if (this._translateX === 0) {
        return 0;
      }
      return this.translateX / this._slider._cachedWidth;
    }
    /** The host native HTML input element. */
    _hostElement = this._elementRef.nativeElement;
    /** The aria-valuetext string representation of the input's value. */
    _valuetext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('', ...(ngDevMode ? [{
      debugName: "_valuetext"
    }] : []));
    /** The radius of a native html slider's knob. */
    _knobRadius = 8;
    /** The distance in px from the start of the slider track to the first tick mark. */
    _tickMarkOffset = 3;
    /** Whether user's cursor is currently in a mouse down state on the input. */
    _isActive = false;
    /** Whether the input is currently focused (either by tab or after clicking). */
    _isFocused = false;
    /** Used to relay updates to _isFocused to the slider visual thumbs. */
    _setIsFocused(v) {
      this._isFocused = v;
    }
    /**
     * Whether the initial value has been set.
     * This exists because the initial value cannot be immediately set because the min and max
     * must first be relayed from the parent MatSlider component, which can only happen later
     * in the component lifecycle.
     */
    _hasSetInitialValue = false;
    /** The stored initial value. */
    _initialValue;
    /** Defined when a user is using a form control to manage slider value & validation. */
    _formControl;
    /** Emits when the component is destroyed. */
    _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    /**
     * Indicates whether UI updates should be skipped.
     *
     * This flag is used to avoid flickering
     * when correcting values on pointer up/down.
     */
    _skipUIUpdate = false;
    /** Callback called when the slider input value changes. */
    _onChangeFn;
    /** Callback called when the slider input has been touched. */
    _onTouchedFn = () => {};
    /**
     * Whether the NgModel has been initialized.
     *
     * This flag is used to ignore ghost null calls to
     * writeValue which can break slider initialization.
     *
     * See https://github.com/angular/angular/issues/14988.
     */
    _isControlInitialized = false;
    constructor() {
      const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2);
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [renderer.listen(this._hostElement, 'pointerdown', this._onPointerDown.bind(this)), renderer.listen(this._hostElement, 'pointermove', this._onPointerMove.bind(this)), renderer.listen(this._hostElement, 'pointerup', this._onPointerUp.bind(this))];
      });
    }
    ngOnDestroy() {
      this._listenerCleanups.forEach(cleanup => cleanup());
      this._destroyed.next();
      this._destroyed.complete();
      this.dragStart.complete();
      this.dragEnd.complete();
    }
    /** @docs-private */
    initProps() {
      this._updateWidthInactive();
      // If this or the parent slider is disabled, just make everything disabled.
      if (this.disabled !== this._slider.disabled) {
        // The MatSlider setter for disabled will relay this and disable both inputs.
        this._slider.disabled = true;
      }
      this.step = this._slider.step;
      this.min = this._slider.min;
      this.max = this._slider.max;
      this._initValue();
    }
    /** @docs-private */
    initUI() {
      this._updateThumbUIByValue();
    }
    _initValue() {
      this._hasSetInitialValue = true;
      if (this._initialValue === undefined) {
        this.value = this._getDefaultValue();
      } else {
        this._hostElement.value = this._initialValue;
        this._updateThumbUIByValue();
        this._slider._onValueChange(this);
        this._cdr.detectChanges();
      }
    }
    _getDefaultValue() {
      return this.min;
    }
    _onBlur() {
      this._setIsFocused(false);
      this._onTouchedFn();
    }
    _onFocus() {
      this._slider._setTransition(false);
      this._slider._updateTrackUI(this);
      this._setIsFocused(true);
    }
    _onChange() {
      this.valueChange.emit(this.value);
      // only used to handle the edge case where user
      // mousedown on the slider then uses arrow keys.
      if (this._isActive) {
        this._updateThumbUIByValue({
          withAnimation: true
        });
      }
    }
    _onInput() {
      this._onChangeFn?.(this.value);
      // handles arrowing and updating the value when
      // a step is defined.
      if (this._slider.step || !this._isActive) {
        this._updateThumbUIByValue({
          withAnimation: true
        });
      }
      this._slider._onValueChange(this);
    }
    _onNgControlValueChange() {
      // only used to handle when the value change
      // originates outside of the slider.
      if (!this._isActive || !this._isFocused) {
        this._slider._onValueChange(this);
        this._updateThumbUIByValue();
      }
      this._slider.disabled = this._formControl.disabled;
    }
    _onPointerDown(event) {
      if (this.disabled || event.button !== 0) {
        return;
      }
      // On IOS, dragging only works if the pointer down happens on the
      // slider thumb and the slider does not receive focus from pointer events.
      if (this._platform.IOS) {
        const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
        this._isActive = isCursorOnSliderThumb;
        this._updateWidthActive();
        this._slider._updateDimensions();
        return;
      }
      this._isActive = true;
      this._setIsFocused(true);
      this._updateWidthActive();
      this._slider._updateDimensions();
      // Does nothing if a step is defined because we
      // want the value to snap to the values on input.
      if (!this._slider.step) {
        this._updateThumbUIByPointerEvent(event, {
          withAnimation: true
        });
      }
      if (!this.disabled) {
        this._handleValueCorrection(event);
        this.dragStart.emit({
          source: this,
          parent: this._slider,
          value: this.value
        });
      }
    }
    /**
     * Corrects the value of the slider on pointer up/down.
     *
     * Called on pointer down and up because the value is set based
     * on the inactive width instead of the active width.
     */
    _handleValueCorrection(event) {
      // Don't update the UI with the current value! The value on pointerdown
      // and pointerup is calculated in the split second before the input(s)
      // resize. See _updateWidthInactive() and _updateWidthActive() for more
      // details.
      this._skipUIUpdate = true;
      // Note that this function gets triggered before the actual value of the
      // slider is updated. This means if we were to set the value here, it
      // would immediately be overwritten. Using setTimeout ensures the setting
      // of the value happens after the value has been updated by the
      // pointerdown event.
      setTimeout(() => {
        this._skipUIUpdate = false;
        this._fixValue(event);
      }, 0);
    }
    /** Corrects the value of the slider based on the pointer event's position. */
    _fixValue(event) {
      const xPos = event.clientX - this._slider._cachedLeft;
      const width = this._slider._cachedWidth;
      const step = this._slider.step === 0 ? 1 : this._slider.step;
      const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
      const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
      // To ensure the percentage is rounded to the necessary number of decimals.
      const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
      const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
      const value = Math.round(impreciseValue / step) * step;
      const prevValue = this.value;
      if (value === prevValue) {
        // Because we prevented UI updates, if it turns out that the race
        // condition didn't happen and the value is already correct, we
        // have to apply the ui updates now.
        this._slider._onValueChange(this);
        this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
          withAnimation: this._slider._hasAnimation
        });
        return;
      }
      this.value = value;
      this.valueChange.emit(this.value);
      this._onChangeFn?.(this.value);
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
    }
    _onPointerMove(event) {
      // Again, does nothing if a step is defined because
      // we want the value to snap to the values on input.
      if (!this._slider.step && this._isActive) {
        this._updateThumbUIByPointerEvent(event);
      }
    }
    _onPointerUp() {
      if (this._isActive) {
        this._isActive = false;
        if (this._platform.SAFARI) {
          this._setIsFocused(false);
        }
        this.dragEnd.emit({
          source: this,
          parent: this._slider,
          value: this.value
        });
        // This setTimeout is to prevent the pointerup from triggering a value
        // change on the input based on the inactive width. It's not clear why
        // but for some reason on IOS this race condition is even more common so
        // the timeout needs to be increased.
        setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
      }
    }
    _clamp(v) {
      const min = this._tickMarkOffset;
      const max = this._slider._cachedWidth - this._tickMarkOffset;
      return Math.max(Math.min(v, max), min);
    }
    _calcTranslateXByValue() {
      if (this._slider._isRtl) {
        return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
      }
      return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    _calcTranslateXByPointerEvent(event) {
      return event.clientX - this._slider._cachedLeft;
    }
    /**
     * Used to set the slider width to the correct
     * dimensions while the user is dragging.
     */
    _updateWidthActive() {}
    /**
     * Sets the slider input to disproportionate dimensions to allow for touch
     * events to be captured on touch devices.
     */
    _updateWidthInactive() {
      this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
      this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
    _updateThumbUIByValue(options) {
      this.translateX = this._clamp(this._calcTranslateXByValue());
      this._updateThumbUI(options);
    }
    _updateThumbUIByPointerEvent(event, options) {
      this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
      this._updateThumbUI(options);
    }
    _updateThumbUI(options) {
      this._slider._setTransition(!!options?.withAnimation);
      this._slider._onTranslateXChange(this);
    }
    /**
     * Sets the input's value.
     * @param value The new value of the input
     * @docs-private
     */
    writeValue(value) {
      if (this._isControlInitialized || value !== null) {
        this.value = value;
      }
    }
    /**
     * Registers a callback to be invoked when the input's value changes from user input.
     * @param fn The callback to register
     * @docs-private
     */
    registerOnChange(fn) {
      this._onChangeFn = fn;
      this._isControlInitialized = true;
    }
    /**
     * Registers a callback to be invoked when the input is blurred by the user.
     * @param fn The callback to register
     * @docs-private
     */
    registerOnTouched(fn) {
      this._onTouchedFn = fn;
    }
    /**
     * Sets the disabled state of the slider.
     * @param isDisabled The new disabled state
     * @docs-private
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    focus() {
      this._hostElement.focus();
    }
    blur() {
      this._hostElement.blur();
    }
    static ɵfac = function MatSliderThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSliderThumb)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatSliderThumb,
      selectors: [["input", "matSliderThumb", ""]],
      hostAttrs: ["type", "range", 1, "mdc-slider__input"],
      hostVars: 1,
      hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MatSliderThumb_change_HostBindingHandler() {
            return ctx._onChange();
          })("input", function MatSliderThumb_input_HostBindingHandler() {
            return ctx._onInput();
          })("blur", function MatSliderThumb_blur_HostBindingHandler() {
            return ctx._onBlur();
          })("focus", function MatSliderThumb_focus_HostBindingHandler() {
            return ctx._onFocus();
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-valuetext", ctx._valuetext());
        }
      },
      inputs: {
        value: [2, "value", "value", _angular_core__WEBPACK_IMPORTED_MODULE_4__.numberAttribute]
      },
      outputs: {
        valueChange: "valueChange",
        dragStart: "dragStart",
        dragEnd: "dragEnd"
      },
      exportAs: ["matSliderThumb"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }])]
    });
  }
  return MatSliderThumb;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSliderRangeThumb = /*#__PURE__*/(() => {
  class MatSliderRangeThumb extends MatSliderThumb {
    _cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    /** @docs-private */
    getSibling() {
      if (!this._sibling) {
        this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
      }
      return this._sibling;
    }
    _sibling;
    /**
     * Returns the minimum translateX position allowed for this slider input's visual thumb.
     * @docs-private
     */
    getMinPos() {
      const sibling = this.getSibling();
      if (!this._isLeftThumb && sibling) {
        return sibling.translateX;
      }
      return this._tickMarkOffset;
    }
    /**
     * Returns the maximum translateX position allowed for this slider input's visual thumb.
     * @docs-private
     */
    getMaxPos() {
      const sibling = this.getSibling();
      if (this._isLeftThumb && sibling) {
        return sibling.translateX;
      }
      return this._slider._cachedWidth - this._tickMarkOffset;
    }
    _setIsLeftThumb() {
      this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
    }
    /** Whether this slider corresponds to the input on the left hand side. */
    _isLeftThumb;
    /** Whether this slider corresponds to the input with greater value. */
    _isEndThumb;
    constructor() {
      super();
      this._isEndThumb = this._hostElement.hasAttribute('matSliderEndThumb');
      this._setIsLeftThumb();
      this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
    }
    _getDefaultValue() {
      return this._isEndThumb && this._slider._isRange ? this.max : this.min;
    }
    _onInput() {
      super._onInput();
      this._updateSibling();
      if (!this._isActive) {
        this._updateWidthInactive();
      }
    }
    _onNgControlValueChange() {
      super._onNgControlValueChange();
      this.getSibling()?._updateMinMax();
    }
    _onPointerDown(event) {
      if (this.disabled || event.button !== 0) {
        return;
      }
      if (this._sibling) {
        this._sibling._updateWidthActive();
        this._sibling._hostElement.classList.add('mat-mdc-slider-input-no-pointer-events');
      }
      super._onPointerDown(event);
    }
    _onPointerUp() {
      super._onPointerUp();
      if (this._sibling) {
        setTimeout(() => {
          this._sibling._updateWidthInactive();
          this._sibling._hostElement.classList.remove('mat-mdc-slider-input-no-pointer-events');
        });
      }
    }
    _onPointerMove(event) {
      super._onPointerMove(event);
      if (!this._slider.step && this._isActive) {
        this._updateSibling();
      }
    }
    _fixValue(event) {
      super._fixValue(event);
      this._sibling?._updateMinMax();
    }
    _clamp(v) {
      return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
    }
    _updateMinMax() {
      const sibling = this.getSibling();
      if (!sibling) {
        return;
      }
      if (this._isEndThumb) {
        this.min = Math.max(this._slider.min, sibling.value);
        this.max = this._slider.max;
      } else {
        this.min = this._slider.min;
        this.max = Math.min(this._slider.max, sibling.value);
      }
    }
    _updateWidthActive() {
      const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
      const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
      const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
      const width = maxWidth * percentage + minWidth;
      this._hostElement.style.width = `${width}px`;
      this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    }
    _updateWidthInactive() {
      const sibling = this.getSibling();
      if (!sibling) {
        return;
      }
      const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
      const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
      const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
      const percentage = this._slider.min < this._slider.max ? _percentage : 1;
      // Extend the native input width by the radius of the ripple
      let ripplePadding = this._slider._rippleRadius;
      // If one of the inputs is maximally sized (the value of both thumbs is
      // equal to the min or max), make that input take up all of the width and
      // make the other unselectable.
      if (percentage === 1) {
        ripplePadding = 48;
      } else if (percentage === 0) {
        ripplePadding = 0;
      }
      const width = maxWidth * percentage + ripplePadding;
      this._hostElement.style.width = `${width}px`;
      this._hostElement.style.padding = '0px';
      if (this._isLeftThumb) {
        this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
        this._hostElement.style.right = 'auto';
      } else {
        this._hostElement.style.left = 'auto';
        this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      }
    }
    _updateStaticStyles() {
      this._hostElement.classList.toggle('mat-slider__right-input', !this._isLeftThumb);
    }
    _updateSibling() {
      const sibling = this.getSibling();
      if (!sibling) {
        return;
      }
      sibling._updateMinMax();
      if (this._isActive) {
        sibling._updateWidthActive();
      } else {
        sibling._updateWidthInactive();
      }
    }
    /**
     * Sets the input's value.
     * @param value The new value of the input
     * @docs-private
     */
    writeValue(value) {
      if (this._isControlInitialized || value !== null) {
        this.value = value;
        this._updateWidthInactive();
        this._updateSibling();
      }
    }
    _setValue(value) {
      super._setValue(value);
      this._updateWidthInactive();
      this._updateSibling();
    }
    static ɵfac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSliderRangeThumb)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatSliderRangeThumb,
      selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
      exportAs: ["matSliderRangeThumb"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatSliderRangeThumb;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSliderModule = /*#__PURE__*/(() => {
  class MatSliderModule {
    static ɵfac = function MatSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSliderModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatSliderModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_common_module_mjs__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, _ripple_module_mjs__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule]
    });
  }
  return MatSliderModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
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

/***/ }),

/***/ 93585:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/passive-listeners.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners)
/* harmony export */ });
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}


/***/ })

}]);
//# sourceMappingURL=3407.js.map