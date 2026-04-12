"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[417],{

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

/***/ 40417:
/*!*************************************************************************************!*\
  !*** ./src/app/features/courses/course-list-public/course-list-public.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseListPublicComponent: () => (/* binding */ CourseListPublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 85422);













function CourseListPublicComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.successMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.successMessage, " ");
  }
}
function CourseListPublicComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.errorMessage, " ");
  }
}
function CourseListPublicComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "label", 20)(2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_div_26_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.selectedCategoryId, $event) || (ctx_r1.selectedCategoryId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_div_26_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onFilterChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", cat_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", cat_r5.name, " ");
  }
}
function CourseListPublicComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseListPublicComponent_h6_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r1.filteredCourses.length, " cours trouv\u00E9", ctx_r1.filteredCourses.length > 1 ? "s" : "", " ");
  }
}
function CourseListPublicComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Chargement des cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h5", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Aucun cours trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Essayez de modifier vos crit\u00E8res de recherche.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_144_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "R\u00E9initialiser les filtres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_145_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" -", ctx_r1.getPromotionPercent(course_r8), "% ");
  }
}
function CourseListPublicComponent_div_145_div_1_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 2, course_r8.averageRating, "1.1-1"), " (", course_r8.reviewCount || 0, " avis) ");
  }
}
function CourseListPublicComponent_div_145_div_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Aucun avis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function CourseListPublicComponent_div_145_div_1_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 81)(1, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "PROMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 1, course_r8.price, "1.2-2"), " \u20AC");
  }
}
function CourseListPublicComponent_div_145_div_1_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_145_div_1_ng_container_27_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Acc\u00E9der");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function CourseListPublicComponent_div_145_div_1_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 117)(1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_145_div_1_ng_template_28_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.addToCart(course_r8.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_145_div_1_ng_template_28_Template_a_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r1.goToDetail(course_r8.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Voir");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_145_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_145_div_1_Template_div_click_1_listener() {
      const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToDetail(course_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CourseListPublicComponent_div_145_div_1_span_5_Template, 2, 1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_145_div_1_Template_a_click_6_listener($event) {
      const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleWishlist(course_r8, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 94)(9, "div", 95)(10, "div", 96)(11, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function CourseListPublicComponent_div_145_div_1_Template_img_error_11_listener($event) {
      const course_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onInstructorAvatarError($event, course_r8.instructorName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 98)(13, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, CourseListPublicComponent_div_145_div_1_p_19_Template, 4, 5, "p", 102)(20, CourseListPublicComponent_div_145_div_1_ng_template_20_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 103)(23, "div", 104)(24, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, CourseListPublicComponent_div_145_div_1_small_26_Template, 6, 4, "small", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, CourseListPublicComponent_div_145_div_1_ng_container_27_Template, 4, 0, "ng-container", 107)(28, CourseListPublicComponent_div_145_div_1_ng_template_28_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const course_r8 = ctx.$implicit;
    const noRating_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);
    const notEnrolledGrid_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](29);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](course_r8.title))("src", ctx_r1.getImageUrl(course_r8.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasActivePromotion(course_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("selected", ctx_r1.isInWishlist(course_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](ctx_r1.isInWishlist(course_r8.id) ? "Retirer de la wishlist" : "Ajouter \u00E0 la wishlist"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.getInstructorAvatar(course_r8.instructorAvatar, course_r8.instructorName), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](course_r8.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", course_r8.categoryName || "Cours", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](course_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", course_r8.averageRating)("ngIfElse", noRating_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatPrice(course_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasActivePromotion(course_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isEnrolled(course_r8.id))("ngIfElse", notEnrolledGrid_r12);
  }
}
function CourseListPublicComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseListPublicComponent_div_145_div_1_Template, 30, 18, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedCourses);
  }
}
function CourseListPublicComponent_div_146_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" -", ctx_r1.getPromotionPercent(course_r14), "% ");
  }
}
function CourseListPublicComponent_div_146_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 96)(1, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 3, course_r14.averageRating, "1.1-1"), " (", course_r14.reviewCount || 0, " avis) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getLevelLabel(course_r14.level));
  }
}
function CourseListPublicComponent_div_146_div_1_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 81)(1, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "PROMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 1, course_r14.price, "1.2-2"), " \u20AC");
  }
}
function CourseListPublicComponent_div_146_div_1_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_146_div_1_ng_container_26_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Acc\u00E9der");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function CourseListPublicComponent_div_146_div_1_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 141)(1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_146_div_1_ng_template_27_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.addToCart(course_r14.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_146_div_1_ng_template_27_Template_a_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r1.goToDetail(course_r14.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Voir le cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_146_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_146_div_1_Template_div_click_1_listener() {
      const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToDetail(course_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 125)(3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CourseListPublicComponent_div_146_div_1_span_6_Template, 2, 1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_146_div_1_Template_a_click_7_listener($event) {
      const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleWishlist(course_r14, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 130)(10, "div", 131)(11, "div", 96)(12, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("error", function CourseListPublicComponent_div_146_div_1_Template_img_error_12_listener($event) {
      const course_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onInstructorAvatarError($event, course_r14.instructorName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span")(16, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_146_div_1_Template_a_click_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "h4", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CourseListPublicComponent_div_146_div_1_div_20_Template, 8, 6, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 137)(22, "div", 104)(23, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, CourseListPublicComponent_div_146_div_1_small_25_Template, 6, 4, "small", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, CourseListPublicComponent_div_146_div_1_ng_container_26_Template, 4, 0, "ng-container", 107)(27, CourseListPublicComponent_div_146_div_1_ng_template_27_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const course_r14 = ctx.$implicit;
    const notEnrolledList_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](28);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate"](course_r14.title))("src", ctx_r1.getImageUrl(course_r14.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasActivePromotion(course_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("selected", ctx_r1.isInWishlist(course_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.getInstructorAvatar(course_r14.instructorAvatar, course_r14.instructorName), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](course_r14.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](course_r14.categoryName || "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](course_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", course_r14.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.formatPrice(course_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasActivePromotion(course_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isEnrolled(course_r14.id))("ngIfElse", notEnrolledList_r17);
  }
}
function CourseListPublicComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CourseListPublicComponent_div_146_div_1_Template, 29, 15, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedCourses);
  }
}
function CourseListPublicComponent_div_147_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 155)(1, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_147_li_9_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_147_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 156)(1, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_147_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 155)(1, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_147_li_11_Template_a_click_1_listener() {
      const p_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(p_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", p_r21 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](p_r21);
  }
}
function CourseListPublicComponent_div_147_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 156)(1, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function CourseListPublicComponent_div_147_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 155)(1, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_147_li_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.totalPages));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.totalPages);
  }
}
function CourseListPublicComponent_div_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 142)(1, "div", 143)(2, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 145)(5, "ul", 146)(6, "li", 147)(7, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_147_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CourseListPublicComponent_div_147_li_9_Template, 3, 0, "li", 150)(10, CourseListPublicComponent_div_147_li_10_Template, 3, 0, "li", 151)(11, CourseListPublicComponent_div_147_li_11_Template, 3, 3, "li", 152)(12, CourseListPublicComponent_div_147_li_12_Template, 3, 0, "li", 151)(13, CourseListPublicComponent_div_147_li_13_Template, 3, 1, "li", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "li", 153)(15, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_div_147_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("Page ", ctx_r1.currentPage, " sur ", ctx_r1.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentPage > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentPage > 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.getPageRange());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentPage < ctx_r1.totalPages - 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentPage < ctx_r1.totalPages - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
let CourseListPublicComponent = /*#__PURE__*/(() => {
  class CourseListPublicComponent {
    courseService;
    router;
    route;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_6__.routes;
    stars = [1, 2, 3, 4, 5];
    // Data
    courses = [];
    filteredCourses = [];
    paginatedCourses = [];
    categories = [];
    loading = true;
    errorMessage = '';
    successMessage = '';
    // Filters
    searchTerm = '';
    selectedCategoryId = null;
    selectedLevels = [];
    priceFilter = 'all';
    minRating = 0;
    sortBy = 'newest';
    viewMode = 'grid';
    // Pagination
    pageSize = 12;
    currentPage = 1;
    totalPages = 1;
    // Auth
    isLoggedIn = false;
    wishlistSet = new Set();
    enrolledSet = new Set();
    buyingCourseId = null;
    addingToCartId = null;
    searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    constructor(courseService, router, route) {
      this.courseService = courseService;
      this.router = router;
      this.route = route;
    }
    ngOnInit() {
      this.isLoggedIn = !!localStorage.getItem('token');
      this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(350), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)()).subscribe(() => {
        this.currentPage = 1;
        this.applyFilters();
      });
      this.courseService.getCategories().subscribe({
        next: cats => this.categories = cats,
        error: () => {}
      });
      if (this.isLoggedIn) {
        this.courseService.getWishlist().subscribe({
          next: items => items.forEach(i => this.wishlistSet.add(i.courseId ?? i.id)),
          error: () => {}
        });
        this.courseService.getMyEnrolledCourses().subscribe({
          next: items => items.forEach(c => this.enrolledSet.add(c.id)),
          error: () => {}
        });
      }
      this.route.queryParams.subscribe(params => {
        if (params['search']) this.searchTerm = params['search'];
        if (params['categoryId']) this.selectedCategoryId = Number(params['categoryId']);
        if (params['level']) this.selectedLevels = [params['level']];
        if (params['sort']) this.sortBy = params['sort'];
        this.loadCourses();
      });
    }
    ngOnDestroy() {
      this.searchSubject.complete();
    }
    loadCourses() {
      this.loading = true;
      this.courseService.getPublishedCourses().subscribe({
        next: data => {
          this.courses = data;
          this.currentPage = 1;
          this.applyFilters();
          this.loading = false;
        },
        error: () => {
          this.errorMessage = 'Erreur lors du chargement des cours.';
          this.loading = false;
        }
      });
    }
    onSearchInput() {
      this.searchSubject.next(this.searchTerm);
    }
    onFilterChange() {
      this.currentPage = 1;
      this.applyFilters();
    }
    clearFilters() {
      this.searchTerm = '';
      this.selectedCategoryId = null;
      this.selectedLevels = [];
      this.priceFilter = 'all';
      this.minRating = 0;
      this.sortBy = 'newest';
      this.currentPage = 1;
      this.applyFilters();
    }
    toggleLevel(level) {
      const idx = this.selectedLevels.indexOf(level);
      if (idx > -1) this.selectedLevels.splice(idx, 1);else this.selectedLevels.push(level);
      this.onFilterChange();
    }
    isLevelSelected(level) {
      return this.selectedLevels.includes(level);
    }
    applyFilters() {
      let r = [...this.courses];
      if (this.searchTerm.trim()) {
        const q = this.searchTerm.toLowerCase();
        r = r.filter(c => c.title?.toLowerCase().includes(q) || c.description?.toLowerCase().includes(q) || c.instructorName?.toLowerCase().includes(q));
      }
      if (this.selectedCategoryId) r = r.filter(c => c.categoryId === this.selectedCategoryId);
      if (this.selectedLevels.length > 0) r = r.filter(c => this.selectedLevels.includes(c.level));
      if (this.priceFilter === 'free') r = r.filter(c => +(c.effectivePrice ?? c.price ?? 0) === 0);else if (this.priceFilter === 'paid') r = r.filter(c => +(c.effectivePrice ?? c.price ?? 0) > 0);
      if (this.minRating > 0) r = r.filter(c => (c.averageRating ?? 0) >= this.minRating);
      switch (this.sortBy) {
        case 'newest':
          r.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
          break;
        case 'top-rated':
          r.sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0));
          break;
        case 'popular':
          r.sort((a, b) => (b.enrollmentCount ?? 0) - (a.enrollmentCount ?? 0));
          break;
        case 'price-asc':
          r.sort((a, b) => +(a.effectivePrice ?? a.price ?? 0) - +(b.effectivePrice ?? b.price ?? 0));
          break;
        case 'price-desc':
          r.sort((a, b) => +(b.effectivePrice ?? b.price ?? 0) - +(a.effectivePrice ?? a.price ?? 0));
          break;
      }
      this.filteredCourses = r;
      this.totalPages = Math.max(1, Math.ceil(r.length / this.pageSize));
      if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
      const start = (this.currentPage - 1) * this.pageSize;
      this.paginatedCourses = r.slice(start, start + this.pageSize);
    }
    goToPage(p) {
      if (p < 1 || p > this.totalPages) return;
      this.currentPage = p;
      const start = (p - 1) * this.pageSize;
      this.paginatedCourses = this.filteredCourses.slice(start, start + this.pageSize);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    getPageRange() {
      const range = [];
      for (let i = Math.max(1, this.currentPage - 2); i <= Math.min(this.totalPages, this.currentPage + 2); i++) range.push(i);
      return range;
    }
    goToDetail(courseId) {
      this.router.navigate([this.routes.courseDetails], {
        queryParams: {
          courseId
        }
      });
    }
    isInWishlist(id) {
      return this.wishlistSet.has(id);
    }
    isEnrolled(id) {
      return this.enrolledSet.has(id);
    }
    toggleWishlist(course, event) {
      event.stopPropagation();
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth/login']);
        return;
      }
      if (this.isInWishlist(course.id)) {
        this.courseService.removeFromWishlist(course.id).subscribe({
          next: () => this.wishlistSet.delete(course.id),
          error: () => {}
        });
      } else {
        this.courseService.addToWishlist(course.id).subscribe({
          next: () => {
            this.wishlistSet.add(course.id);
            this.showSuccess('Ajoute a la wishlist !');
          },
          error: e => {
            this.errorMessage = e.error?.message || 'Erreur wishlist';
          }
        });
      }
    }
    buyCourse(courseId, event) {
      event.stopPropagation();
      if (!this.isLoggedIn) {
        this.router.navigate(['/auth/login']);
        return;
      }
      this.buyingCourseId = courseId;
      this.courseService.createCheckoutSession(courseId).subscribe({
        next: r => {
          window.location.href = r.url;
        },
        error: e => {
          this.buyingCourseId = null;
          this.errorMessage = e.error?.error || 'Erreur paiement';
          setTimeout(() => this.errorMessage = '', 5000);
        }
      });
    }
    addToCart(courseId, event) {
      event.stopPropagation();
      if (!this.isLoggedIn) {
        const course = this.courses.find(c => c.id === courseId);
        const cart = JSON.parse(localStorage.getItem('guest_cart') || '[]');
        if (!cart.some(c => c.id === courseId)) {
          cart.push({
            id: courseId,
            title: course?.title || '',
            coverImage: course?.coverImage || '',
            price: course?.price || 0,
            effectivePrice: course?.effectivePrice || 0,
            instructorName: course?.instructorName || ''
          });
          localStorage.setItem('guest_cart', JSON.stringify(cart));
          this.showSuccess('Ajoute au panier ! Connectez-vous pour finaliser l\'achat.');
        } else {
          this.router.navigate([this.routes.cart]);
        }
        return;
      }
      // Non-student roles cannot use the student cart
      const role = localStorage.getItem('role') || '';
      if (!role.includes('STUDENT')) {
        return;
      }
      this.addingToCartId = courseId;
      this.courseService.addToCart(courseId).subscribe({
        next: () => {
          this.addingToCartId = null;
          this.showSuccess('Ajoute au panier !');
        },
        error: e => {
          this.addingToCartId = null;
          const status = e?.status;
          if (status === 500 || status === 409 || status === 400) {
            this.router.navigate([this.routes.cart]);
            return;
          }
          this.errorMessage = e.error?.message || 'Erreur';
          setTimeout(() => this.errorMessage = '', 4000);
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
    formatPrice(course) {
      const price = +(course.effectivePrice ?? course.price ?? 0);
      return price === 0 ? 'Gratuit' : price.toFixed(2) + ' €';
    }
    hasActivePromotion(course) {
      const original = +(course?.price ?? 0);
      const effective = +(course?.effectivePrice ?? original);
      return !!course?.onSale && this.isPromotionStillValid(course) && original > 0 && effective < original;
    }
    getPromotionPercent(course) {
      const original = +(course?.price ?? 0);
      const effective = +(course?.effectivePrice ?? original);
      if (original <= 0 || effective >= original) {
        return 0;
      }
      return Math.round((original - effective) / original * 100);
    }
    isPromotionStillValid(course) {
      const endsAt = course?.discountEndsAt;
      if (!endsAt) {
        return true;
      }
      const expiresAt = new Date(endsAt).getTime();
      return Number.isFinite(expiresAt) && expiresAt > Date.now();
    }
    getImageUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_7__.resolveCourseImage)(path, 'assets/img/course/course-01.jpg');
    }
    getInstructorAvatar(path, name) {
      const resolved = (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_8__.resolveAvatarImage)(path, '');
      return resolved || this.generateInitialAvatar(name || 'I');
    }
    onInstructorAvatarError(event, name) {
      const img = event?.target;
      if (!img) return;
      img.src = this.generateInitialAvatar(name || 'I');
    }
    generateInitialAvatar(name) {
      const initial = String(name || 'I').trim().charAt(0).toUpperCase() || 'I';
      const palette = ['#ec4899', '#a855f7', '#8b5cf6', '#6366f1', '#3b82f6', '#0ea5e9'];
      const color = palette[initial.charCodeAt(0) % palette.length];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="${color}"/><text x="32" y="42" text-anchor="middle" font-size="28" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff">${initial}</text></svg>`;
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
    showSuccess(msg) {
      this.successMessage = msg;
      this.errorMessage = '';
      setTimeout(() => this.successMessage = '', 3000);
    }
    static ɵfac = function CourseListPublicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseListPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_11__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: CourseListPublicComponent,
      selectors: [["app-course-list-public"]],
      decls: 148,
      vars: 32,
      consts: [["noRating", ""], ["notEnrolledGrid", ""], ["notEnrolledList", ""], [1, "course-content", "course-list-content"], [1, "container"], ["class", "alert alert-success alert-dismissible fade show mt-3", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mt-3", 4, "ngIf"], [1, "row", "align-items-baseline"], [1, "col-lg-3", "theiaStickySidebar"], [1, "filter-clear"], [1, "clear-filter", "mb-4", "pb-lg-2", "d-flex", "align-items-center", "justify-content-between"], [1, "feather-filter", "me-2"], ["href", "javascript:void(0);", 1, "clear-text", 3, "click"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], [1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterCat", "aria-expanded", "true", 1, "accordion-button"], [1, "fa-solid", "fa-chevron-down"], ["id", "filterCat", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "custom_check"], ["type", "radio", "name", "cat", 3, "ngModelChange", "change", "value", "ngModel"], [1, "checkmark"], [4, "ngFor", "ngForOf"], ["class", "text-muted small", 4, "ngIf"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterPrice", "aria-expanded", "true", 1, "accordion-button"], ["id", "filterPrice", 1, "accordion-collapse", "collapse", "show"], [1, "custom_check", "custom_one"], ["type", "radio", "name", "price", "value", "all", 3, "ngModelChange", "change", "ngModel"], ["type", "radio", "name", "price", "value", "free", 3, "ngModelChange", "change", "ngModel"], [1, "custom_check", "custom_one", "mb-0"], ["type", "radio", "name", "price", "value", "paid", 3, "ngModelChange", "change", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterLevel", "aria-expanded", "true", 1, "accordion-button"], ["id", "filterLevel", 1, "accordion-collapse", "collapse", "show"], ["type", "checkbox", 3, "change", "checked"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#filterRating", "aria-expanded", "true", 1, "accordion-button"], ["id", "filterRating", 1, "accordion-collapse", "collapse", "show"], ["type", "radio", "name", "rating", 3, "ngModelChange", "change", "value", "ngModel"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fa-solid", "fa-star", "text-light", "me-1"], [1, "fa-solid", "fa-star", "text-light"], [1, "col-lg-9"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], ["class", "fw-medium", 4, "ngIf"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], ["action", "#"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], ["href", "javascript:void(0);", 1, "grid-view", 3, "click"], [1, "feather", "icon-grid"], ["href", "javascript:void(0);", 1, "list-view", 3, "click"], [1, "isax", "isax-task"], ["name", "sortBy", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "newest"], ["value", "top-rated"], ["value", "popular"], ["value", "price-asc"], ["value", "price-desc"], [1, "search-group"], [1, "feather-search"], ["type", "text", "placeholder", "Rechercher...", "name", "searchTerm", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row course-list-wrap", 4, "ngIf"], ["class", "row align-items-center mt-4", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mt-3"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mt-3"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-muted", "small"], [1, "fw-medium"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-magnifying-glass", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-outline-primary", "btn-sm", "rounded-pill", "px-4", 3, "click"], [1, "fa-solid", "fa-rotate-left", "me-1"], [1, "row"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "course-item-two", "course-item", "mx-0", "flex-fill", 2, "cursor", "pointer", 3, "click"], [1, "course-img"], [1, "img-fluid", 2, "height", "185px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["class", "badge bg-danger text-white me-2", 4, "ngIf"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto", 3, "click", "title"], [1, "isax", "isax-heart"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], ["alt", "instructeur", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle", 3, "error", "src"], [1, "ms-2"], [1, "link-default", "fs-14"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], ["class", "d-flex align-items-center mb-3", 4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "flex-column", "align-items-start"], [1, "text-secondary", "mb-0"], ["class", "text-muted", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "badge", "bg-danger", "text-white", "me-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "mb-3", "text-muted", "small"], [1, "fa-regular", "fa-star", "me-2"], [1, "text-decoration-line-through", "me-1"], [1, "badge", "bg-danger"], ["routerLink", "/student/student-my-courses", 1, "btn", "btn-success", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "gap-1"], ["href", "javascript:void(0);", "title", "Ajouter au panier", 1, "btn", "btn-outline-secondary", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-shopping-cart", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "row", "course-list-wrap"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "courses-list-item", 2, "cursor", "pointer", 3, "click"], [1, "d-md-flex", "align-items-center"], [1, "position-relative", "overflow-hidden", "rounded-3", "card-image"], [1, "img-fluid", "rounded-3", 2, "min-height", "120px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "like", 3, "click"], [1, "course-list-contents", "w-100", "ps-0", "ps-md-3", "pt-4", "pt-md-0"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], ["alt", "instructeur", 1, "img-fluid", "rounded-circle", "me-2", 2, "width", "28px", "height", "28px", "object-fit", "cover", 3, "error", "src"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "tag-btn", 3, "click"], [1, "mt-3", "mb-2"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], [1, "d-flex", "align-items-center", "mb-0"], [1, "dot"], [1, "fs-8", "fas", "fa-angle-right", "ms-2"], [1, "d-flex", "gap-2"], [1, "row", "align-items-center", "mt-4"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "fas", "fa-angle-left"], ["class", "page-item", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "page-item"], [1, "page-item", "disabled"], [1, "page-link"]],
      template: function CourseListPublicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 3)(1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CourseListPublicComponent_div_2_Template, 4, 1, "div", 5)(3, CourseListPublicComponent_div_3_Template, 4, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Filtres");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_Template_a_click_11_listener() {
            return ctx.clearFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Effacer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "h2", 15)(16, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Cat\u00E9gories ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 18)(20, "div", 19)(21, "div")(22, "label", 20)(23, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.selectedCategoryId, $event) || (ctx.selectedCategoryId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_23_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " Toutes les cat\u00E9gories ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, CourseListPublicComponent_div_26_Template, 5, 3, "div", 23)(27, CourseListPublicComponent_div_27_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 14)(29, "h2", 15)(30, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " Prix ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 26)(34, "div", 19)(35, "div")(36, "label", 27)(37, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.priceFilter, $event) || (ctx.priceFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_37_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " Tous ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div")(41, "label", 27)(42, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.priceFilter, $event) || (ctx.priceFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_42_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Gratuit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div")(46, "label", 30)(47, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.priceFilter, $event) || (ctx.priceFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_47_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, " Payant ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 14)(51, "h2", 15)(52, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, " Niveau ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 33)(56, "div", 19)(57, "div")(58, "label", 27)(59, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_59_listener() {
            return ctx.toggleLevel("BEGINNER");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, " D\u00E9butant ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div")(63, "label", 27)(64, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_64_listener() {
            return ctx.toggleLevel("INTERMEDIATE");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, " Interm\u00E9diaire ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div")(68, "label", 30)(69, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_69_listener() {
            return ctx.toggleLevel("ADVANCED");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, " Avanc\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 14)(73, "h2", 15)(74, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, " Note ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](76, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 36)(78, "div", 19)(79, "div")(80, "label", 27)(81, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_81_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.minRating, $event) || (ctx.minRating = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_81_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, " Toutes les notes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div")(85, "label", 27)(86, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_86_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.minRating, $event) || (ctx.minRating = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_86_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](87, "span", 22)(88, "i", 38)(89, "i", 38)(90, "i", 38)(91, "i", 38)(92, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, " & plus ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "div")(95, "label", 27)(96, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_96_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.minRating, $event) || (ctx.minRating = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_96_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](97, "span", 22)(98, "i", 38)(99, "i", 38)(100, "i", 38)(101, "i", 40)(102, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, " & plus ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div")(105, "label", 30)(106, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.minRating, $event) || (ctx.minRating = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_input_change_106_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "span", 22)(108, "i", 38)(109, "i", 38)(110, "i", 40)(111, "i", 40)(112, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " & plus ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "div", 42)(115, "div", 43)(116, "div", 44)(117, "div", 45)(118, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](119, CourseListPublicComponent_h6_119_Template, 2, 2, "h6", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 48)(121, "div", 49)(122, "form", 50)(123, "div", 51)(124, "div", 52)(125, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_Template_a_click_125_listener() {
            return ctx.viewMode = "grid";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](126, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CourseListPublicComponent_Template_a_click_127_listener() {
            return ctx.viewMode = "list";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](128, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "select", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_select_ngModelChange_129_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.sortBy, $event) || (ctx.sortBy = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CourseListPublicComponent_Template_select_change_129_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "option", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "R\u00E9cemment publi\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "Mieux not\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "option", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "Plus populaires");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, "Prix croissant");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "Prix d\u00E9croissant");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](141, "i", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function CourseListPublicComponent_Template_input_ngModelChange_142_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function CourseListPublicComponent_Template_input_input_142_listener() {
            return ctx.onSearchInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](143, CourseListPublicComponent_div_143_Template, 4, 0, "div", 66)(144, CourseListPublicComponent_div_144_Template, 9, 0, "div", 66)(145, CourseListPublicComponent_div_145_Template, 2, 1, "div", 67)(146, CourseListPublicComponent_div_146_Template, 2, 1, "div", 68)(147, CourseListPublicComponent_div_147_Template, 17, 11, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategoryId);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.categories.length === 0 && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.priceFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.priceFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.priceFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.isLevelSelected("BEGINNER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.isLevelSelected("INTERMEDIATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.isLevelSelected("ADVANCED"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.minRating);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.minRating);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.minRating);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.minRating);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.viewMode === "grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.sortBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredCourses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.paginatedCourses.length > 0 && ctx.viewMode === "grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.paginatedCourses.length > 0 && ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.totalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: [".course-card[_ngcontent-%COMP%] {\n  transition: transform 0.3s, box-shadow 0.3s;\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\n\n.course-card[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY291cnNlcy9jb3Vyc2UtbGlzdC1wdWJsaWMvY291cnNlLWxpc3QtcHVibGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSwyQkFBQTtFQUNBLHNEQUFBO0FBQ0o7O0FBR0E7RUFDRSwwQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Vyc2UtY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLDAsMCwwLjEyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5jb3Vyc2UtY2FyZDpob3ZlciAuY2FyZC1pbWctdG9wIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return CourseListPublicComponent;
})();

/***/ }),

/***/ 52575:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
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
//# sourceMappingURL=417.js.map