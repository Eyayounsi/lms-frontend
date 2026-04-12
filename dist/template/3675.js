"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3675],{

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

/***/ 53675:
/*!***********************************************************!*\
  !*** ./src/app/features/home-list/home/home.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 21070);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/service/data/data.service */ 30098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/service/profile/profile.service */ 98428);




















const _c0 = () => ({
  role: "INSTRUCTOR"
});
const _c1 = a0 => ({
  "active": a0
});
const _c2 = (a0, a1) => ({
  "active": a0,
  "fc-fav-disabled": a1
});
const _c3 = (a0, a1) => [a0, a1];
function HomeComponent_li_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_li_44_Template_a_click_1_listener() {
      const cat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.selectCategory(cat_r3.id, cat_r3.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r3.getCategoryIconClass(cat_r3.icon, cat_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", cat_r3.name, " ");
  }
}
function HomeComponent_li_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li")(1, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_99_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r3.getPromotionPercent(course_r6), "% off ");
  }
}
function HomeComponent_div_99_p_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 2, course_r6.averageRating, "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", course_r6.reviewCount || 0, " avis ");
  }
}
function HomeComponent_div_99_p_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Nouveau cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_99_small_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "small", 287)(1, "span", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "PROMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 1, course_r6.price, "1.2-2"), " \u20AC");
  }
}
function HomeComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 251)(1, "div", 252)(2, "div", 253)(3, "div", 254)(4, "img", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function HomeComponent_div_99_Template_img_error_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.onCourseCoverError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "i", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 259)(11, "div", 260)(12, "div", 261)(13, "a", 262)(14, "img", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function HomeComponent_div_99_Template_img_error_14_listener($event) {
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.onCourseInstructorAvatarError($event, course_r6.instructorName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 264)(16, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Formateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "a", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "span", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "h6", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, HomeComponent_div_99_span_24_Template, 2, 1, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_div_99_Template_a_click_25_listener() {
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.goToCourseDetail(course_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, HomeComponent_div_99_p_28_Template, 6, 5, "p", 273)(29, HomeComponent_div_99_p_29_Template, 3, 0, "p", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 275)(31, "div", 276)(32, "h6", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, HomeComponent_div_99_small_34_Template, 6, 4, "small", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "a", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_div_99_Template_a_click_35_listener() {
      const course_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.goToCourseDetail(course_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, " D\u00E9couvrir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "i", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const course_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("z-index", ctx_r3.bannerCourses.length - i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("swiper-slide-active", i_r7 === ctx_r3.activeHeroCardIndex)("swiper-slide-next", i_r7 === (ctx_r3.activeHeroCardIndex + 1) % ctx_r3.bannerCourses.length)("hero-card-primary", i_r7 === ctx_r3.activeHeroCardIndex)("hero-card-secondary", i_r7 === (ctx_r3.activeHeroCardIndex + 1) % ctx_r3.bannerCourses.length)("hero-card-tertiary", i_r7 === (ctx_r3.activeHeroCardIndex + 2) % ctx_r3.bannerCourses.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinterpolate"](course_r6.title))("src", ctx_r3.getCourseImage(course_r6), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](course_r6.categoryName || "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r3.getCourseInstructorAvatar(course_r6), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](course_r6.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", course_r6.reviewCount || 0, " avis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.hasActivePromotion(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](course_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", course_r6.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !course_r6.averageRating && ctx_r3.isCourseNew(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.formatPrice(course_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.hasActivePromotion(course_r6));
  }
}
function HomeComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const partner_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", partner_r8.logo, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"])("alt", partner_r8.name);
  }
}
function HomeComponent_section_165_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 301)(1, "div", 302)(2, "a", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_section_165_div_14_Template_a_click_2_listener() {
      const cat_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.selectCategory(cat_r10.id, cat_r10.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h6", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Explorer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r3.getCategoryColorClass(cat_r10.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r3.getCategoryIconClass(cat_r10.icon, cat_r10.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](cat_r10.name);
  }
}
function HomeComponent_section_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 7)(3, "div", 61)(4, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Explorer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Nos cat\u00E9gories de cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Trouvez le domaine qui vous passionne et commencez d\u00E8s aujourd'hui.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 296)(12, "ngx-slick-carousel", 84, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, HomeComponent_section_165_div_14_Template, 10, 4, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 298)(16, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "i", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, " Voir toutes les cat\u00E9gories ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r3.topCourseSlider);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.categories)("ngForTrackBy", ctx_r3.trackByCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", ctx_r3.routes.courseCategory);
  }
}
function HomeComponent_section_166_div_13_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r3.getPromotionPercent(course_r12), "% off ");
  }
}
function HomeComponent_section_166_div_13_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 1, course_r12.averageRating, "1.1-1"), " ");
  }
}
function HomeComponent_section_166_div_13_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Nouveau");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function HomeComponent_section_166_div_13_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 338)(1, "span", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "PROMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 1, course_r12.price, "1.2-2"), " \u20AC");
  }
}
function HomeComponent_section_166_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 301)(1, "div", 314)(2, "div", 315)(3, "a", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_section_166_div_13_Template_a_click_3_listener() {
      const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.goToCourseDetail(course_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "img", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function HomeComponent_section_166_div_13_Template_img_error_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.onCourseCoverError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 320)(9, "a", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_section_166_div_13_Template_a_click_9_listener() {
      const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.toggleCartFromCard(course_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 324)(14, "div", 325)(15, "h6", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, HomeComponent_section_166_div_13_span_16_Template, 2, 1, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_section_166_div_13_Template_a_click_17_listener() {
      const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.goToCourseDetail(course_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_section_166_div_13_Template_a_click_19_listener() {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.iconSelect(i_r13 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 329)(22, "img", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function HomeComponent_section_166_div_13_Template_img_error_22_listener($event) {
      const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.onCourseInstructorAvatarError($event, course_r12.instructorName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, HomeComponent_section_166_div_13_span_25_Template, 4, 4, "span", 332)(26, HomeComponent_section_166_div_13_span_26_Template, 2, 0, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, HomeComponent_section_166_div_13_div_27_Template, 6, 4, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_section_166_div_13_Template_a_click_28_listener() {
      const course_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.goToCourseDetail(course_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, " Voir le cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const course_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("data-aos-delay", i_r13 * 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinterpolate"](course_r12.title))("src", ctx_r3.getCourseImage(course_r12), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.formatPrice(course_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](15, _c1, ctx_r3.isInCart(course_r12.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](course_r12.categoryName || "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.hasActivePromotion(course_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](course_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](17, _c2, ctx_r3.isSelected[i_r13 + 1], !ctx_r3.canUseWishlist));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r3.getCourseInstructorAvatar(course_r12), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](course_r12.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", course_r12.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !course_r12.averageRating && ctx_r3.isCourseNew(course_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.hasActivePromotion(course_r12));
  }
}
function HomeComponent_section_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 308)(1, "div", 7)(2, "div", 61)(3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Cours populaires ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Les formations du moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "D\u00E9couvrez nos cours les plus demand\u00E9s, s\u00E9lectionn\u00E9s pour booster votre carri\u00E8re.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 310)(11, "ngx-slick-carousel", 84, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, HomeComponent_section_166_div_13_Template, 31, 20, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 311)(15, "a", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "i", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Voir tous les cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r3.featureCourseSlider2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.featuredCourses)("ngForTrackBy", ctx_r3.trackByCourseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", "/courses/course-list-public");
  }
}
function HomeComponent_div_226_div_13_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 353)(1, "img", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function HomeComponent_div_226_div_13_a_3_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const inst_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.onInstructorAvatarError(inst_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const inst_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](3, _c3, ctx_r3.routes.instructorDetails, inst_r15.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("alt", inst_r15.name)("src", ctx_r3.getInstructorAvatarUrl(inst_r15), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_226_div_13_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 355)(1, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const inst_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c3, ctx_r3.routes.instructorDetails, inst_r15.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.getInstructorInitial(inst_r15));
  }
}
function HomeComponent_div_226_div_13_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inst_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](inst_r15.avgRating);
  }
}
function HomeComponent_div_226_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 301)(1, "div", 345)(2, "div", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, HomeComponent_div_226_div_13_a_3_Template, 2, 6, "a", 347)(4, HomeComponent_div_226_div_13_ng_template_4_Template, 5, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 348)(7, "div")(8, "h3", 349)(9, "a", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Formateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, HomeComponent_div_226_div_13_p_13_Template, 3, 1, "p", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const inst_r15 = ctx.$implicit;
    const instructorAvatarFallback_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("has-image", ctx_r3.hasInstructorAvatar(inst_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.hasInstructorAvatar(inst_r15))("ngIfElse", instructorAvatarFallback_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](7, _c3, ctx_r3.routes.instructorDetails, inst_r15.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](inst_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inst_r15.avgRating);
  }
}
function HomeComponent_div_226_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 339)(1, "div", 7)(2, "div", 340)(3, "span", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Nos formateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h2", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Des experts passionn\u00E9s \u00E0 votre service");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "p", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Apprenez directement aupr\u00E8s de professionnels reconnus dans leur domaine.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 344)(11, "ngx-slick-carousel", 84, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, HomeComponent_div_226_div_13_Template, 14, 10, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx_r3.instructorSlider);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.topInstructors)("ngForTrackBy", ctx_r3.trackByInstructorId);
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    DataService;
    router;
    courseService;
    authService;
    profileService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    newCourseWindowDays = 30;
    isSelected = [false];
    cartSet = new Set();
    activeHeroCardIndex = 0;
    heroCardIntervalId;
    searchTerm = '';
    categories = [];
    selectedCategoryName = 'Sélectionner';
    featuredCourses = [];
    topInstructors = [];
    bannerCourses = [];
    recruiterPartners = [{
      name: 'ClickUp',
      logo: 'assets/img/client/client-33.svg'
    }, {
      name: 'Loom',
      logo: 'assets/img/client/client-34.svg'
    }, {
      name: 'Lattice',
      logo: 'assets/img/client/client-35.svg'
    }, {
      name: 'Airtable',
      logo: 'assets/img/client/client-36.svg'
    }, {
      name: 'Dropbox',
      logo: 'assets/img/client/client-37.svg'
    }, {
      name: 'GitLab',
      logo: 'assets/img/client/client-38.svg'
    }, {
      name: 'ClickUp',
      logo: 'assets/img/client/client-33.svg'
    }, {
      name: 'Loom',
      logo: 'assets/img/client/client-34.svg'
    }];
    failedInstructorAvatarKeys = new Set();
    constructor(DataService, router, courseService, authService, profileService) {
      this.DataService = DataService;
      this.router = router;
      this.courseService = courseService;
      this.authService = authService;
      this.profileService = profileService;
    }
    get isLoggedIn() {
      return this.authService.isLoggedIn();
    }
    get canUseWishlist() {
      return this.isLoggedIn && (localStorage.getItem('role') || '').includes('STUDENT');
    }
    onSubmit() {
      const q = this.searchTerm.trim();
      if (q) {
        this.router.navigate(['/courses/course-list-public'], {
          queryParams: {
            search: q
          }
        });
      } else {
        this.router.navigate(['/courses/course-list-public']);
      }
    }
    selectCategory(catId, catName) {
      this.selectedCategoryName = catName;
      this.router.navigate(['/courses/course-list-public'], {
        queryParams: {
          categoryId: catId
        }
      });
    }
    //   config: SwiperOptions = {
    //     effect: 'cards',
    //     loop: false,
    //     grabCursor: true,
    //     slidesPerView: 'auto',
    //   };
    bannercard = [];
    slideConfig = {
      lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2600,
      autoplaySpeed: 0,
      cssEase: 'linear',
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      arrows: false,
      draggable: false,
      swipe: false,
      touchMove: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
    };
    topCourseSlider = {
      infinite: true,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 1500,
      pauseOnHover: false,
      pauseOnFocus: false,
      cssEase: 'ease-out',
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    };
    featureCourseSlider2 = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    brandSlide = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
    };
    instructorSlider = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScrol: 1
        }
      }]
    };
    testimonialSlider = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    };
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_2__.init({
        duration: 1200,
        once: true
      });
      this.loadCartState();
      this.courseService.getCategories().subscribe({
        next: cats => {
          this.categories = cats;
        },
        error: () => {}
      });
      this.courseService.getPublishedCourses().subscribe({
        next: courses => {
          // Featured courses (up to 8)
          this.featuredCourses = courses.slice(0, 8);
          // Banner courses (up to 3)
          this.bannerCourses = courses.slice(0, 3);
          this.startHeroCardRotation();
          // Top instructors derived from courses
          const map = new Map();
          for (const c of courses) {
            if (!c.instructorId) continue;
            if (!map.has(c.instructorId)) {
              map.set(c.instructorId, {
                id: c.instructorId,
                name: c.instructorName || 'Instructeur',
                avatar: c.instructorAvatar,
                totalRating: 0,
                ratingCount: 0
              });
            }
            const inst = map.get(c.instructorId);
            if (c.averageRating) {
              inst.totalRating += c.averageRating;
              inst.ratingCount++;
            }
          }
          this.topInstructors = Array.from(map.values()).map(i => ({
            ...i,
            avgRating: i.ratingCount > 0 ? (i.totalRating / i.ratingCount).toFixed(1) : null
          })).slice(0, 8);
          this.refreshTopInstructorProfiles();
        },
        error: () => {}
      });
    }
    ngOnDestroy() {
      if (this.heroCardIntervalId) {
        clearInterval(this.heroCardIntervalId);
        this.heroCardIntervalId = undefined;
      }
    }
    refreshTopInstructorProfiles() {
      if (!this.topInstructors.length) return;
      const requests = this.topInstructors.map(inst => {
        const id = Number(inst?.id || 0);
        if (!Number.isFinite(id) || id <= 0) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(inst);
        }
        return this.profileService.getInstructorProfile(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(profile => ({
          ...inst,
          name: profile?.fullName || inst?.name || 'Instructeur',
          avatar: profile?.avatarPath || inst?.avatar || ''
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(inst)));
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(requests).subscribe({
        next: resolved => {
          this.topInstructors = resolved;
          const avatarByInstructor = new Map();
          for (const inst of resolved) {
            const id = Number(inst?.id || 0);
            if (id > 0 && inst?.avatar) {
              avatarByInstructor.set(id, inst.avatar);
            }
          }
          this.featuredCourses = this.featuredCourses.map(course => {
            if (course?.instructorAvatar) return course;
            const avatar = avatarByInstructor.get(Number(course?.instructorId || 0));
            return avatar ? {
              ...course,
              instructorAvatar: avatar
            } : course;
          });
          this.bannerCourses = this.bannerCourses.map(course => {
            if (course?.instructorAvatar) return course;
            const avatar = avatarByInstructor.get(Number(course?.instructorId || 0));
            return avatar ? {
              ...course,
              instructorAvatar: avatar
            } : course;
          });
        },
        error: () => {
          // Keep initial values from courses if profile refresh fails.
        }
      });
    }
    toggleClass(slide) {
      slide.active = !slide.active;
    }
    directPath() {
      this.router.navigate(['/pages/course/course-list']);
    }
    iconSelect(index) {
      if (!this.canUseWishlist) {
        return;
      }
      this.isSelected[index] = !this.isSelected[index];
    }
    isInCart(courseId) {
      return this.cartSet.has(courseId);
    }
    toggleCartFromCard(courseId) {
      if (!this.isLoggedIn) {
        const cart = JSON.parse(localStorage.getItem('guest_cart') || '[]');
        const exists = cart.some(c => c.id === courseId);
        if (exists) {
          const updated = cart.filter(c => c.id !== courseId);
          localStorage.setItem('guest_cart', JSON.stringify(updated));
          this.cartSet.delete(courseId);
        } else {
          const course = this.featuredCourses.find(c => c.id === courseId) || this.bannerCourses.find(c => c.id === courseId);
          cart.push({
            id: courseId,
            title: course?.title || '',
            coverImage: course?.coverImage || '',
            price: course?.price || 0,
            effectivePrice: course?.effectivePrice || 0,
            instructorName: course?.instructorName || ''
          });
          localStorage.setItem('guest_cart', JSON.stringify(cart));
          this.cartSet.add(courseId);
        }
        return;
      }
      const role = localStorage.getItem('role') || '';
      if (!role.includes('STUDENT')) {
        return;
      }
      if (this.cartSet.has(courseId)) {
        this.courseService.removeFromCart(courseId).subscribe({
          next: () => this.cartSet.delete(courseId),
          error: () => {}
        });
      } else {
        this.courseService.addToCart(courseId).subscribe({
          next: () => this.cartSet.add(courseId),
          error: () => {}
        });
      }
    }
    loadCartState() {
      if (!this.isLoggedIn) {
        const guest = JSON.parse(localStorage.getItem('guest_cart') || '[]');
        guest.forEach(c => this.cartSet.add(c.id));
        return;
      }
      const role = localStorage.getItem('role') || '';
      if (!role.includes('STUDENT')) {
        return;
      }
      this.courseService.getCart().subscribe({
        next: items => {
          this.cartSet.clear();
          items.forEach(i => this.cartSet.add(i.courseId ?? i.id));
        },
        error: () => {}
      });
    }
    isCategoryImage(icon) {
      return !!icon && icon.startsWith('preset-img:');
    }
    getCategoryIconClass(icon, categoryName) {
      const name = (categoryName || '').toLowerCase();
      // Specific keywords checked first (most precise → least precise)
      if (name.includes('devsecops') || name.includes('devsec')) return 'fa-solid fa-shield-halved';
      if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'fa-solid fa-cloud';
      if (name.includes('cyber') || name.includes('securit') || name.includes('secsec') || name === 'security') return 'fa-solid fa-shield-halved';
      if (name.includes('devops') || name.includes('cicd') || name.includes('ci/cd') || name.includes(' ops')) return 'fa-solid fa-infinity';
      if (name.includes('network') || name.includes('réseau') || name.includes('reseaux')) return 'fa-solid fa-network-wired';
      if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter') || name.includes('react native')) return 'fa-solid fa-mobile-screen';
      if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'fa-solid fa-pen-ruler';
      if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'fa-solid fa-chart-line';
      if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('informat') || name.includes('code')) return 'fa-solid fa-code';
      if (name.includes('data') || name.includes(' ia') || name.includes(' ai') || name.includes('machine') || name.includes('intelligence')) return 'fa-solid fa-brain';
      if (name.includes('lang') || name.includes('communication')) return 'fa-solid fa-language';
      if (name.includes('photo') || name.includes('video') || name.includes('media')) return 'fa-solid fa-camera-retro';
      if (name.includes('music') || name.includes('audio')) return 'fa-solid fa-music';
      if (name.includes('finance') || name.includes('compta')) return 'fa-solid fa-wallet';
      if (name.includes('health') || name.includes('sant')) return 'fa-solid fa-heart-pulse';
      if (name.includes('law') || name.includes('droit')) return 'fa-solid fa-scale-balanced';
      if (name.includes('education') || name.includes('teaching') || name.includes('formation')) return 'fa-solid fa-graduation-cap';
      if (!icon || this.isCategoryImage(icon)) return 'fa-solid fa-layer-group';
      return icon.startsWith('fa-') ? icon : 'fa-solid fa-layer-group';
    }
    getCategoryColorClass(categoryName) {
      const name = (categoryName || '').toLowerCase();
      if (name.includes('devsecops') || name.includes('devsec')) return 'cat-red';
      if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'cat-sky';
      if (name.includes('cyber') || name.includes('securit') || name.includes('secsec')) return 'cat-red';
      if (name.includes('devops') || name.includes('cicd') || name.includes(' ops')) return 'cat-amber';
      if (name.includes('network') || name.includes('réseau') || name.includes('reseaux')) return 'cat-teal';
      if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter')) return 'cat-teal';
      if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'cat-pink';
      if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'cat-emerald';
      if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('code')) return 'cat-indigo';
      if (name.includes('data') || name.includes(' ia') || name.includes(' ai') || name.includes('machine') || name.includes('intelligence')) return 'cat-purple';
      if (name.includes('photo') || name.includes('video') || name.includes('media')) return 'cat-amber';
      if (name.includes('finance') || name.includes('compta')) return 'cat-yellow';
      if (name.includes('health') || name.includes('sant')) return 'cat-rose';
      if (name.includes('lang') || name.includes('communication')) return 'cat-blue';
      return 'cat-slate';
    }
    startHeroCardRotation() {
      if (this.heroCardIntervalId || this.bannerCourses.length <= 1) {
        return;
      }
      this.heroCardIntervalId = setInterval(() => {
        this.activeHeroCardIndex = (this.activeHeroCardIndex + 1) % this.bannerCourses.length;
      }, 2500);
    }
    trackByCourseId(_, course) {
      return Number(course?.id || 0);
    }
    trackByCategoryId(_, category) {
      return Number(category?.id || 0);
    }
    trackByInstructorId(_, instructor) {
      return Number(instructor?.id || 0);
    }
    trackByPartnerName(_, partner) {
      return partner.name;
    }
    getImageUrl(path) {
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_7__.resolveCourseImage)(path, 'assets/img/course-img/courses-01.jpg');
    }
    getAvatarUrl(path) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_8__.resolveAvatarImage)(path, 'assets/img/avatar/avatar10.jpg');
    }
    getCourseImage(course) {
      const raw = course?.coverImage || course?.thumbnailUrl || course?.coverImageUrl || course?.thumbnail || course?.imageUrl || course?.image || course?.courseImageUrl || course?.courseImage || '';
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_7__.resolveCourseImage)(raw, 'assets/img/course-img/courses-01.jpg');
    }
    getCourseInstructorAvatar(course) {
      const raw = course?.instructorAvatar || course?.instructorAvatarPath || course?.instructorImage || course?.instructorProfileImage || course?.instructorPhoto || course?.instructor?.avatar || course?.avatarPath || course?.instructor?.avatarPath || '';
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_8__.resolveAvatarImage)(raw, 'assets/img/avatar/avatar10.jpg');
    }
    getInstructorAvatarUrl(inst) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_8__.resolveAvatarImage)(inst?.avatar || '', '');
    }
    hasInstructorAvatar(inst) {
      const key = this.getInstructorKey(inst);
      return !!this.getInstructorAvatarUrl(inst) && !this.failedInstructorAvatarKeys.has(key);
    }
    onInstructorAvatarError(inst) {
      this.failedInstructorAvatarKeys.add(this.getInstructorKey(inst));
    }
    onCourseCoverError(event) {
      const img = event?.target;
      if (!img) return;
      const fallback = 'assets/img/course-img/courses-01.jpg';
      if (!img.src.endsWith(fallback)) {
        img.src = fallback;
      }
    }
    onCourseInstructorAvatarError(event, name) {
      const img = event?.target;
      if (!img) return;
      img.src = this.generateInitialAvatar(name || 'F');
    }
    getInstructorInitial(inst) {
      return String(inst?.name || 'F').trim().charAt(0).toUpperCase() || 'F';
    }
    getInstructorKey(inst) {
      return String(inst?.id || inst?.name || 'unknown-instructor');
    }
    generateInitialAvatar(name) {
      const initial = String(name || 'F').trim().charAt(0).toUpperCase() || 'F';
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs><rect width="80" height="80" rx="40" fill="url(#g)"/><text x="40" y="52" text-anchor="middle" font-size="32" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff">${initial}</text></svg>`;
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
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
    isCourseNew(course) {
      const publishedRaw = course?.publishedAt ?? course?.published_at ?? course?.publishedDate ?? course?.publishedOn ?? course?.publicationDate ?? course?.datePublished;
      if (!publishedRaw) {
        return false;
      }
      const publishedTs = new Date(publishedRaw).getTime();
      if (!Number.isFinite(publishedTs)) {
        return false;
      }
      const ageMs = Date.now() - publishedTs;
      if (ageMs < 0) {
        return true;
      }
      const maxAgeMs = this.newCourseWindowDays * 24 * 60 * 60 * 1000;
      return ageMs <= maxAgeMs;
    }
    goToCourseDetail(courseId) {
      const id = Number(courseId || 0);
      if (!Number.isFinite(id) || id <= 0) {
        return;
      }
      this.router.navigate(['/courses/course-details-2'], {
        queryParams: {
          courseId: id
        }
      });
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_15__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_17__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_19__.ProfileService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 528,
      vars: 26,
      consts: [["slickModal", "slick-carousel"], ["instructorAvatarFallback", ""], [1, "banner-section"], ["src", "assets/img/bg/bg-15.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg1"], ["src", "assets/img/bg/bg-16.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg2"], ["src", "assets/img/bg/bg-17.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg3"], ["src", "assets/img/bg/bg-18.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg4"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-xl-7", "col-lg-7"], [1, "banner-content", "pe-xxl-5"], [1, "hero-title", "hero-eyebrow-enhanced"], [1, "fa-solid", "fa-graduation-cap", "me-2"], [1, "mb-3", "text-white"], [1, "d-none", "d-lg-block"], [1, "hero-subtitle", "pb-2", "pb-md-3", "mb-3"], [1, "hero-social-proof", "mb-4"], [1, "hero-sp-avatars"], ["src", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenante"], ["src", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenant"], ["src", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenante"], [1, "hero-sp-more"], [1, "hero-sp-text"], [1, "hero-sp-stars"], [1, "fa-solid", "fa-star", "text-warning"], [1, "banner-search", 3, "ngSubmit"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "hero-dropdown"], [1, "isax", "isax-arrow-down5", "fs-12"], [1, "dropdown-menu", "p-1"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["type", "text", "name", "search", "placeholder", "Rechercher un cours, un formateur...", 1, "border-0", "form-control", "p-0", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-secondary", "ms-auto"], [1, "isax", "isax-search-normal-1"], [1, "hero-counters-row", "mt-3"], [1, "hero-counter-chip", "hero-counter-purple"], [1, "hero-counter-val"], [1, "hero-counter-label"], [1, "hero-counter-divider"], [1, "hero-counter-chip", "hero-counter-sky"], [1, "hero-counter-chip", "hero-counter-green"], [1, "hero-counter-chip", "hero-counter-amber"], [1, "col-xl-4", "col-lg-5"], [1, "hero-right-wrap"], [1, "hero-glow-orb", "d-none", "d-lg-block"], [1, "hero-float-card", "hero-float-rating", "d-none", "d-xl-flex"], [1, "hero-float-icon", "hero-float-icon-gold"], [1, "fa-solid", "fa-star"], [1, "hero-float-val"], [1, "hero-float-unit"], [1, "hero-float-sub"], [1, "hero-float-card", "hero-float-cert", "d-none", "d-xl-flex"], [1, "hero-float-icon", "hero-float-icon-green"], [1, "fa-solid", "fa-certificate"], [1, "banner-image", "hero-card-stage", "pe-0"], [1, "swiper", "swiper-slider-banner", "w-auto"], [1, "swiper-wrapper"], [1, "swiper", "swiper-cards", "swiper-3d", "swiper-initialized", "swiper-horizontal", "swiper-pointer-events", "swiper-watch-progress"], ["class", "swiper-slide ng-star-inserted swiper-slide-visible", 3, "swiper-slide-active", "swiper-slide-next", "hero-card-primary", "hero-card-secondary", "hero-card-tertiary", "z-index", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "benefit-section"], [1, "section-header", "text-center"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "row"], ["data-aos", "fade-up", 1, "col-lg-4", "col-md-6"], [1, "card", "shadow-sm", "border-0", "h-100"], [1, "card-body", "p-4"], [1, "position-absolute", "top-0", "end-0", "mt-n3", "me-n4"], ["src", "./assets/img/shapes/bg-1.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-primary-transparent", "d-inline-flex"], [1, "fa-solid", "fa-laptop-code", "fs-24", "text-primary"], [1, "mt-3", "mb-1"], ["data-aos", "fade-up", "data-aos-delay", "150", 1, "col-lg-4", "col-md-6"], ["src", "assets/img/shapes/bg-2.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-secondary-transparent", "d-inline-flex"], [1, "fa-solid", "fa-certificate", "fs-24", "text-secondary"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], ["src", "assets/img/shapes/bg-3.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-skyblue-transparent", "d-inline-flex"], [1, "fa-solid", "fa-user-tie", "fs-24", "text-info"], [1, "client-section", "recruiter-strip"], ["data-aos", "fade-up", "data-aos-delay", "80", 1, "text-center", "recruiter-copy", "mb-4"], ["data-aos", "fade-up", "data-aos-delay", "120", 1, "text-center", "recruiter-trusted", "mb-3"], ["data-aos", "fade-up", "data-aos-delay", "140", 1, "institutions-slider", "lazy", "slider"], [3, "config"], ["class", "institutions-items p-1", "ngxSlickItem", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "top-courses-sec", 4, "ngIf"], ["class", "featured-courses-section", 4, "ngIf"], [1, "how-it-works-sec-two"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-up", 1, "me-5", 2, "position", "relative"], ["src", "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=85&auto=format&fit=crop", "alt", "Apprentissage en ligne", 1, "img-fluid", "rounded-5", 2, "width", "100%", "object-fit", "cover", "max-height", "520px"], [2, "position", "absolute", "bottom", "24px", "left", "24px", "background", "rgba(255,255,255,.95)", "border-radius", "16px", "padding", "14px 20px", "box-shadow", "0 8px 32px rgba(99,102,241,.18)", "display", "flex", "align-items", "center", "gap", "12px"], [2, "background", "linear-gradient(135deg,#6366f1,#7c3aed)", "border-radius", "50%", "width", "44px", "height", "44px", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "fa-solid", "fa-play", "text-white", "fs-14"], [2, "font-weight", "700", "font-size", ".95rem", "color", "#1e1b4b"], [2, "font-size", ".8rem", "color", "#6b7280"], ["data-aos", "fade-up", 1, "how-it-works-content", "aos"], [1, "section-header"], [1, "mb-1"], [1, "d-flex", "align-items-center", "works-items"], [1, "count"], [1, "fa-solid", "fa-user-plus", "me-2", "text-primary"], [1, "fa-solid", "fa-compass", "me-2", "text-info"], [1, "fa-solid", "fa-play-circle", "me-2", "text-success"], [1, "d-flex", "align-items-center", "works-items", "mb-0", "pb-0", "border-0"], [1, "fa-solid", "fa-award", "me-2", "text-warning"], ["class", "featured-instructor-sec", 4, "ngIf"], [1, "community-to-learn"], ["data-aos", "fade-right", 1, "section-header"], [1, "fa-solid", "fa-shield-halved", "me-1"], [1, "community-item", "d-flex", "align-items-center"], [1, "community-icon-1"], [1, "fa-solid", "fa-qrcode"], [1, "mb-2"], [1, "mb-0"], [1, "community-icon-2"], [1, "fa-solid", "fa-globe"], [1, "community-icon-3"], [1, "fa-solid", "fa-lock"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-secondary", "btn-md", 3, "routerLink"], [1, "fa-solid", "fa-search", "me-2"], [1, "btn", "btn-dark", "btn-md", 3, "routerLink"], [1, "fa-solid", "fa-rocket", "me-2"], [1, "community-img", "d-none", "d-lg-flex"], ["src", "assets/img/shapes/shape-5.png", "alt", "img", 1, "img-fluid", "community-img-01"], ["src", "assets/img/shapes/shape-6.png", "alt", "img", 1, "img-fluid", "community-img-02"], ["src", "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=501&h=667&q=85&auto=format&fit=crop", "alt", "Professionnelle certifi\u00E9e", 1, "img-fluid", "community-img-03"], ["src", "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&h=880&q=85&auto=format&fit=crop", "alt", "\u00C9tudiant en ligne", 1, "img-fluid", "community-img-04"], [1, "cert-float-badge"], [1, "cert-float-icon"], [1, "fa-solid", "fa-trophy"], [1, "cert-float-val"], [1, "cert-float-sub"], [1, "community-count", "p-2"], [1, "enrolled-list"], [1, "avatar-list-stacked", "mb-2"], [1, "avatar", "avatar-rounded"], ["src", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenante", 1, "border", "border-white"], ["src", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenant", 1, "border", "border-white"], ["src", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenante", 1, "border", "border-white"], ["src", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenant", 1, "border", "border-white"], [1, "text-secondary", "fw-bold"], [1, "faq-section", "faq-banner-bg"], ["src", "assets/img/bg/bg-21.svg", "alt", "img", 1, "d-lg-flex", "d-none", "faq-bg2"], ["src", "assets/img/bg/bg-22.svg", "alt", "img", 1, "d-lg-flex", "d-none", "faq-bg3"], ["data-aos", "fade-up", 1, "faq-img"], ["src", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85&auto=format&fit=crop&crop=center", "alt", "Questions fr\u00E9quentes - e-learning", 1, "img-fluid", "rounded-5", 2, "width", "100%", "object-fit", "cover", "min-height", "420px", "max-height", "560px", "display", "block"], [1, "fa-solid", "fa-circle-question"], [1, "faq-content"], ["data-aos", "fade-up", 1, "section-header"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], ["data-aos", "fade-up", 1, "accordion-item"], ["id", "headFaq1", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collFaq1", "aria-expanded", "true", 1, "accordion-button"], [1, "isax", "isax-add", "fs-20", "fw-semibold", "ms-1"], ["id", "collFaq1", "aria-labelledby", "headFaq1", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pt-0"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "accordion-item"], ["id", "headFaq2", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collFaq2", "aria-expanded", "false", 1, "accordion-button", "collapsed"], ["id", "collFaq2", "aria-labelledby", "headFaq2", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "accordion-item"], ["id", "headFaq3", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collFaq3", "aria-expanded", "false", 1, "accordion-button", "collapsed"], ["id", "collFaq3", "aria-labelledby", "headFaq3", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "accordion-item"], ["id", "headFaq4", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collFaq4", "aria-expanded", "false", 1, "accordion-button", "collapsed"], ["id", "collFaq4", "aria-labelledby", "headFaq4", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "accordion-item"], ["id", "headFaq5", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collFaq5", "aria-expanded", "false", 1, "accordion-button", "collapsed"], ["id", "collFaq5", "aria-labelledby", "headFaq5", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], [1, "become-instructor-sec"], [1, "bi-blob", "bi-blob-1"], [1, "bi-blob", "bi-blob-2"], [1, "bi-blob", "bi-blob-3"], [1, "row", "align-items-center", "justify-content-between", "g-4", "g-lg-5", "position-relative", 2, "z-index", "2"], ["data-aos", "fade-up", 1, "col-lg-5"], [1, "bi-illustration-wrapper"], [1, "bi-illustration-card"], ["src", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=85&auto=format&fit=crop&crop=center", "alt", "Devenir formateur", 1, "img-fluid", "rounded-4", 2, "width", "100%", "object-fit", "cover", "height", "380px", "display", "block", "box-shadow", "0 20px 60px rgba(86,37,232,.2)"], [1, "bi-float-badge", "bi-float-badge-1"], [1, "fa-solid", "fa-video"], [1, "bi-float-badge", "bi-float-badge-2"], [1, "fa-solid", "fa-chart-line"], [1, "bi-float-badge", "bi-float-badge-3"], [1, "fa-solid", "fa-users"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-7"], [1, "bi-content-wrapper"], [1, "bi-eyebrow"], [1, "bi-title"], [1, "bi-accent"], [1, "bi-description"], [1, "bi-features-grid"], [1, "bi-feature-item"], [1, "bi-feature-icon"], [1, "fa-solid", "fa-rocket"], [1, "bi-feature-content"], [1, "fa-solid", "fa-chart-bar"], [1, "fa-solid", "fa-shield-check"], [1, "fa-solid", "fa-headset"], [1, "bi-stats-row"], [1, "bi-stat"], [1, "bi-stat-value"], [1, "bi-stat-label"], [1, "bi-cta-buttons"], [1, "btn", "bi-btn-primary", "btn-lg", 3, "routerLink"], [1, "fa-solid", "fa-play-circle", "me-2"], [1, "btn", "bi-btn-secondary", "btn-lg", 3, "routerLink", "queryParams"], [1, "fa-solid", "fa-user-plus", "me-2"], [1, "bi-trust-text"], [1, "cta-final-sec"], ["data-aos", "fade-up", 1, "cta-final-card"], [1, "cta-blob", "cta-blob-1"], [1, "cta-blob", "cta-blob-2"], [1, "cta-blob", "cta-blob-3"], [1, "row", "align-items-center", "justify-content-between", "g-4", "position-relative", 2, "z-index", "2"], [1, "col-lg-7", "text-center", "text-lg-start"], [1, "cta-eyebrow", "mb-3", "d-inline-flex", "align-items-center", "gap-2"], [1, "fa-solid", "fa-fire-flame-curved"], [1, "text-white", "mb-3", "cta-title"], [1, "cta-title-accent"], [1, "text-white", "cta-desc", "mb-4"], [1, "cta-social-proof", "mb-4"], [1, "cta-avatars"], ["src", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&q=80&auto=format&fit=crop&crop=face", "alt", "Apprenant"], [1, "cta-avatars-more"], [1, "cta-social-text", "mb-0"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap", "justify-content-center", "justify-content-lg-start"], [1, "btn", "cta-btn-primary", "btn-lg", 3, "routerLink"], [1, "btn", "cta-btn-ghost", "btn-lg", 3, "routerLink"], [1, "fa-solid", "fa-compass", "me-2"], [1, "col-lg-4"], [1, "cta-stats-grid"], ["data-aos", "zoom-in", "data-aos-delay", "100", 1, "cta-stat-card"], [1, "cta-stat-icon"], [1, "cta-stat-value"], [1, "cta-stat-label"], ["data-aos", "zoom-in", "data-aos-delay", "200", 1, "cta-stat-card"], [1, "fa-solid", "fa-book-open"], ["data-aos", "zoom-in", "data-aos-delay", "300", 1, "cta-stat-card"], ["data-aos", "zoom-in", "data-aos-delay", "400", 1, "cta-stat-card"], [1, "fa-solid", "fa-chalkboard-user"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "me-2"], [1, "dropdown-item", "text-muted"], [1, "swiper-slide", "ng-star-inserted", "swiper-slide-visible"], [1, "swiper-slide", "hero-card-shell"], [1, "course-item-two", "course-item", "hero-course-card", "mb-0"], [1, "course-img", "hero-card-media"], ["loading", "lazy", "decoding", "async", 1, "img-fluid", 3, "error", "src", "alt"], [1, "hero-card-overlay"], [1, "hero-card-floating-badge"], [1, "fa-solid", "fa-layer-group"], [1, "course-content", "hero-card-body"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3", "hero-card-topline"], [1, "d-flex", "align-items-center", "hero-card-instructor"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "hero-avatar-ring"], ["alt", "instructeur", "loading", "lazy", "decoding", "async", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle", 3, "error", "src"], [1, "ms-2"], [1, "hero-card-label"], ["href", "javascript:void(0);", 1, "link-default", "fs-14", "hero-card-instructor-name"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "hero-card-chip"], [1, "fa-solid", "fa-star", "me-1"], [1, "mb-2", "hero-course-title"], ["class", "badge bg-danger text-white me-2 mb-2 d-inline-block", 4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], [1, "hero-card-meta", "mb-3"], ["class", "d-flex align-items-center mb-0 hero-rating-pill", 4, "ngIf"], ["class", "d-flex align-items-center mb-0 hero-rating-pill hero-rating-pill-muted", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "hero-card-footer"], [1, "d-flex", "flex-column", "align-items-start"], [1, "text-secondary", "fs-16", "fw-semi-bold", "mb-0", "hero-price-tag"], ["class", "text-muted", 4, "ngIf"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", "hero-card-action", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "badge", "bg-danger", "text-white", "me-2", "mb-2", "d-inline-block"], [1, "d-flex", "align-items-center", "mb-0", "hero-rating-pill"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "hero-meta-sep"], [1, "d-flex", "align-items-center", "mb-0", "hero-rating-pill", "hero-rating-pill-muted"], [1, "fa-regular", "fa-star", "me-2"], [1, "text-muted"], [1, "text-decoration-line-through", "me-1"], [1, "badge", "bg-danger"], ["ngxSlickItem", "", 1, "institutions-items", "p-1"], ["loading", "lazy", "decoding", "async", 1, "img-fluid", 3, "src", "alt"], [1, "top-courses-sec"], ["src", "./assets/img/bg/bg-20.png", "alt", "img", 1, "top-courses-bg"], [1, "cat-section-badge", "mb-3", "d-inline-flex", "align-items-center", "gap-2"], [1, "fa-solid", "fa-compass"], [1, "top-courses-slider", "lazy"], ["ngxSlickItem", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center", "mt-4"], [1, "btn", "btn-primary", "btn-md", "d-inline-flex", "align-items-center", "gap-2", 3, "routerLink"], [1, "fa-solid", "fa-th-large"], ["ngxSlickItem", ""], ["data-aos", "fade-up", 1, "cat-card", 3, "ngClass"], ["href", "javascript:void(0);", 1, "cat-card-link", 3, "click"], [1, "cat-icon-wrap"], [1, "cat-label"], [1, "cat-cta"], [1, "fa-solid", "fa-arrow-right", "ms-1"], [1, "featured-courses-section"], [1, "fa-solid", "fa-fire", "me-1"], [1, "feature-course-slider-2"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "btn", "btn-primary", "btn-md", 3, "routerLink"], [1, "fa-solid", "fa-arrow-right", "me-2"], ["data-aos", "fade-up", 1, "fc-card"], [1, "fc-img-wrap"], ["href", "javascript:void(0);", 1, "fc-img-link", 3, "click"], ["loading", "lazy", "decoding", "async", 1, "fc-img", 3, "error", "src", "alt"], [1, "fc-img-overlay"], [1, "fc-price-badge"], [1, "fc-action-stack"], ["href", "javascript:void(0);", 1, "fc-fav-btn", "fc-cart-btn", 3, "click", "ngClass"], [1, "isax", "isax-shopping-cart"], [1, "fc-cat-chip"], [1, "fc-body"], [1, "fc-body-top"], [1, "fc-title", "mb-0"], ["href", "javascript:void(0);", 1, "fc-fav-btn", "fc-body-fav", 3, "click", "ngClass"], [1, "isax", "isax-heart"], [1, "fc-instructor-row"], ["alt", "instructeur", "loading", "lazy", "decoding", "async", 1, "fc-avatar", 3, "error", "src"], [1, "fc-inst-name"], ["class", "fc-rating ms-auto", 4, "ngIf"], ["class", "fc-new-tag ms-auto", 4, "ngIf"], ["class", "mb-2 text-muted small", 4, "ngIf"], ["href", "javascript:void(0);", 1, "fc-cta-btn", 3, "click"], [1, "fc-rating", "ms-auto"], [1, "fc-new-tag", "ms-auto"], [1, "mb-2", "text-muted", "small"], [1, "featured-instructor-sec"], ["data-aos", "fade-up", 1, "section-header", "text-center"], [1, "fw-medium", "text-light", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "text-white"], [1, "text-light"], [1, "featured-instructor-slider", "lazy"], ["data-aos", "flip-left", 1, "instructor-item", "instructor-item-three", "mb-0"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink", 4, "ngIf", "ngIfElse"], [1, "instructor-content"], [1, "title"], [3, "routerLink"], [1, "designation"], ["class", "rating", 4, "ngIf"], ["tabindex", "0", 3, "routerLink"], ["loading", "lazy", "decoding", "async", 1, "img-fluid", 3, "error", "alt", "src"], ["tabindex", "0", 1, "featured-inst-avatar-fallback-link", 3, "routerLink"], [1, "featured-inst-avatar-fallback"], [1, "ti", "ti-user"], [1, "rating"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 3)(2, "img", 4)(3, "img", 5)(4, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " La plateforme e-learning de r\u00E9f\u00E9rence ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "h1", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " D\u00E9veloppez vos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Comp\u00E9tences");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "br", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " avec les meilleurs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Formateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, " Des cours en ligne con\u00E7us par des experts pour vous accompagner dans votre parcours professionnel, o\u00F9 que vous soyez. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 16)(23, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "img", 18)(25, "img", 19)(26, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "+5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 22)(30, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "i", 24)(32, "i", 24)(33, "i", 24)(34, "i", 24)(35, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "+5\u202F000 apprenants satisfaits");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "form", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 26)(40, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "ul", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, HomeComponent_li_44_Template, 4, 3, "li", 30)(45, HomeComponent_li_45_Template, 3, 0, "li", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](48, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 35)(50, "div", 36)(51, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "Cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 40)(57, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, "Cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](61, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 41)(63, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](66, "Formateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](67, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 42)(69, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "98%");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72, "Satisfaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 43)(74, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](75, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 46)(77, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](78, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div")(80, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "4.9");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83, "/5");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "Note moyenne");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "div", 52)(87, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](88, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "div")(90, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, "Certifi\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "V\u00E9rifiable en ligne");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "div", 55)(95, "div", 56)(96, "div", 57)(97, "div", 58)(98, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](99, HomeComponent_div_99_Template, 38, 25, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "section", 60)(101, "div", 7)(102, "div", 61)(103, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](104, "Nos Avantages");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "Pourquoi choisir notre plateforme ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "Une exp\u00E9rience d'apprentissage moderne, flexible et certifiante.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "div", 63)(110, "div", 64)(111, "div", 65)(112, "div", 66)(113, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](114, "img", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](116, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "h5", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118, "Apprentissage flexible");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, "Acc\u00E9dez \u00E0 vos cours \u00E0 tout moment, depuis n'importe quel appareil. Progressez \u00E0 votre rythme.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "div", 72)(122, "div", 65)(123, "div", 66)(124, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](125, "img", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](127, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "h5", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](129, "Certificats v\u00E9rifiables");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, "Obtenez un certificat \u00E0 la fin de chaque formation, v\u00E9rifiable en ligne par les recruteurs.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "div", 76)(133, "div", 65)(134, "div", 66)(135, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](136, "img", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](138, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "h5", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](140, "Formateurs qualifi\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142, "Nos instructeurs sont des professionnels exp\u00E9riment\u00E9s, passionn\u00E9s par la transmission de leur savoir.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "section", 80)(144, "div", 7)(145, "p", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](146, " Sur Dreams LMS, vous ne faites pas que monter en comp\u00E9tences : vous acc\u00E9dez \u00E0 un ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](148, "lien direct avec des recruteurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](149, " pour transformer votre apprentissage en ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](151, "exp\u00E9rience terrain");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152, " et en ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](153, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](154, "opportunit\u00E9s professionnelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](155, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "h6", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](157, " Trusted by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](158, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](159, "20+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](160, " Institutions Around the World ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](161, "div", 83)(162, "ngx-slick-carousel", 84, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](164, HomeComponent_div_164_Template, 2, 2, "div", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](165, HomeComponent_section_165_Template, 19, 4, "section", 86)(166, HomeComponent_section_166_Template, 18, 4, "section", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "div", 88)(168, "div", 7)(169, "div", 89)(170, "div", 90)(171, "div", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](172, "img", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](173, "div", 93)(174, "span", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](175, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "div")(177, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178, "4 \u00E9tapes simples");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](179, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](180, "Pour d\u00E9marrer votre parcours");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "div", 90)(182, "div", 98)(183, "div", 99)(184, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](185, "Comment \u00E7a marche");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](186, "h2", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](187, "Commencez votre parcours en 4 \u00E9tapes");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](188, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](189, "Rejoignez notre communaut\u00E9 d'apprenants et donnez un nouvel \u00E9lan \u00E0 votre carri\u00E8re.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](190, "div", 101)(191, "span", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](192, "01");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](193, "div")(194, "h5", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](195, "i", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](196, " Cr\u00E9ez votre compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](197, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](198, "Inscrivez-vous gratuitement en quelques secondes avec votre email.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](199, "div", 101)(200, "span", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](201, "02");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](202, "div")(203, "h5", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](204, "i", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](205, " Explorez les cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](206, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](207, "Parcourez notre catalogue et choisissez la formation qui vous correspond.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](208, "div", 101)(209, "span", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](210, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](211, "div")(212, "h5", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](213, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](214, " Apprenez \u00E0 votre rythme");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](215, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](216, "Suivez les le\u00E7ons vid\u00E9o, compl\u00E9tez les quiz et progressez selon vos disponibilit\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](217, "div", 106)(218, "span", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](219, "04");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](220, "div")(221, "h5", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](222, "i", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](223, " Obtenez votre certificat");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](224, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](225, "Validez vos acquis et recevez un certificat v\u00E9rifiable que vous pouvez partager.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](226, HomeComponent_div_226_Template, 14, 3, "div", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](227, "section", 109)(228, "div", 7)(229, "div", 89)(230, "div", 90)(231, "div", 110)(232, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](233, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](234, " Confiance & Transparence ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](235, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](236, "V\u00E9rifiez l'authenticit\u00E9 d'un certificat");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](237, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](238, "Chaque certificat poss\u00E8de un code unique v\u00E9rifiable en ligne. Recruteurs, employeurs : confirmez la validit\u00E9 d'une certification en un clic.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](239, "div", 112)(240, "span", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](241, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](242, "div")(243, "h5", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](244, "Code unique par certificat");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](245, "p", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](246, "Chaque apprenant re\u00E7oit un code de v\u00E9rification unique li\u00E9 \u00E0 sa formation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](247, "div", 112)(248, "span", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](249, "i", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](250, "div")(251, "h5", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](252, "Accessible partout dans le monde");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](253, "p", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](254, "La v\u00E9rification est disponible 24h/24, sans connexion requise.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](255, "div", 112)(256, "span", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](257, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](258, "div")(259, "h5", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](260, "S\u00E9curit\u00E9 garantie");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](261, "p", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](262, "Les certificats sont infalsifiables et li\u00E9s au profil de l'apprenant.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](263, "div", 121)(264, "a", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](265, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](266, " V\u00E9rifier un certificat ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](267, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](268, "i", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](269, " S'inscrire gratuitement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](270, "div", 90)(271, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](272, "img", 127)(273, "img", 128)(274, "img", 129)(275, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](276, "div", 131)(277, "div", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](278, "i", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](279, "div")(280, "div", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](281, "+500");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](282, "div", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](283, "Dipl\u00F4m\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](284, "div", 136)(285, "div", 137)(286, "div", 138)(287, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](288, "img", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](289, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](290, "img", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](291, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](292, "img", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](293, "span", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](294, "img", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](295, "p", 116)(296, "span", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](297, "Certifi\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](298, " & V\u00E9rifiable");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](299, "div", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](300, "img", 146)(301, "img", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](302, "div", 7)(303, "div", 89)(304, "div", 90)(305, "div", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](306, "img", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](307, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](308, "i", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](309, "div", 90)(310, "div", 151)(311, "div", 152)(312, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](313, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](314, "h2", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](315, "Questions fr\u00E9quentes");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](316, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](317, "Tout ce que vous devez savoir sur notre plateforme.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](318, "div", 153)(319, "div", 154)(320, "h2", 155)(321, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](322, " Comment m'inscrire \u00E0 un cours ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](323, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](324, "div", 158)(325, "div", 159)(326, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](327, "Cr\u00E9ez un compte gratuit, parcourez notre catalogue, et cliquez sur \u00AB S'inscrire \u00BB. Vous pouvez commencer imm\u00E9diatement.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](328, "div", 160)(329, "h2", 161)(330, "a", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](331, " Combien de temps ai-je acc\u00E8s \u00E0 un cours ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](332, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](333, "div", 163)(334, "div", 159)(335, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](336, "Une fois inscrit, vous avez un acc\u00E8s illimit\u00E9 au cours. Revenez quand vous le souhaitez.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](337, "div", 164)(338, "h2", 165)(339, "a", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](340, " Quels moyens de paiement acceptez-vous ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](341, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](342, "div", 167)(343, "div", 159)(344, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](345, "Nous acceptons les cartes bancaires (Visa, Mastercard) via Stripe. Paiement s\u00E9curis\u00E9 et instantan\u00E9.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](346, "div", 168)(347, "h2", 169)(348, "a", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](349, " Vais-je obtenir un certificat ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](350, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](351, "div", 171)(352, "div", 159)(353, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](354, "Oui ! \u00C0 la fin de chaque formation, vous recevez un certificat avec un code de v\u00E9rification unique.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](355, "div", 172)(356, "h2", 173)(357, "a", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](358, " Comment v\u00E9rifier un certificat ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](359, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](360, "div", 175)(361, "div", 159)(362, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](363, "Rendez-vous sur \u00AB V\u00E9rifier Certificat \u00BB dans le menu, entrez le code unique et consultez les informations valid\u00E9es.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](364, "section", 176)(365, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](366, "div", 177)(367, "div", 178)(368, "div", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](369, "div", 180)(370, "div", 181)(371, "div", 182)(372, "div", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](373, "img", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](374, "div", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](375, "i", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](376, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](377, "Cr\u00E9ez vos cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](378, "div", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](379, "i", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](380, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](381, "Gagnez plus");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](382, "div", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](383, "i", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](384, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](385, "Impactez 1000s");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](386, "div", 191)(387, "div", 192)(388, "span", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](389, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](390, " Opportunit\u00E9 pour experts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](391, "h2", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](392, " Devenez ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](393, "span", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](394, "formateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](395, " et");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](396, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](397, "partagez votre expertise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](398, "p", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](399, " Rejoignez des milliers d'experts qui transforment leurs connaissances en revenus durables. Sur Dreams LMS, vous contr\u00F4lez votre contenu, fixez vos tarifs et touchez une audience mondiale. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](400, "div", 197)(401, "div", 198)(402, "div", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](403, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](404, "div", 201)(405, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](406, "Lancez rapidement");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](407, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](408, "Outils simples et intuitifs pour cr\u00E9er votre premier cours en heures, pas en semaines.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](409, "div", 198)(410, "div", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](411, "i", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](412, "div", 201)(413, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](414, "Analysez vos r\u00E9sultats");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](415, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](416, "Tableaux de bord d\u00E9taill\u00E9s pour suivre les inscriptions, le taux de satisfaction et vos revenus.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](417, "div", 198)(418, "div", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](419, "i", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](420, "div", 201)(421, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](422, "Paiements s\u00E9curis\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](423, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](424, "Recevez vos gains mensuels via virement bancaire s\u00E9curis\u00E9 sans frais surprises.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](425, "div", 198)(426, "div", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](427, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](428, "div", 201)(429, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](430, "Support 24/7");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](431, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](432, "\u00C9quipe d\u00E9di\u00E9e pour vous accompagner \u00E0 chaque \u00E9tape de votre parcours de formateur.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](433, "div", 205)(434, "div", 206)(435, "span", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](436, "500+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](437, "span", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](438, "Formateurs actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](439, "div", 206)(440, "span", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](441, "50K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](442, "span", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](443, "Apprenants atteints");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](444, "div", 206)(445, "span", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](446, "$2M+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](447, "span", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](448, "Revenus distribu\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](449, "div", 209)(450, "a", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](451, "i", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](452, " Devenir formateur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](453, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](454, "i", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](455, " Register Now ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](456, "p", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](457, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](458, " Inscription gratuite \u2022 Aucune carte bancaire requise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](459, "section", 215)(460, "div", 7)(461, "div", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](462, "div", 217)(463, "div", 218)(464, "div", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](465, "div", 220)(466, "div", 221)(467, "span", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](468, "i", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](469, " Rejoignez la communaut\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](470, "h2", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](471, " D\u00E9veloppez vos comp\u00E9tences.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](472, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](473, "span", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](474, "Changez votre carri\u00E8re.");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](475, "p", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](476, " Des milliers d'apprenants ont d\u00E9j\u00E0 transform\u00E9 leur vie professionnelle gr\u00E2ce \u00E0 Dreams LMS. Et vous ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](477, "div", 227)(478, "div", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](479, "img", 18)(480, "img", 19)(481, "img", 20)(482, "img", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](483, "span", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](484, "+5k");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](485, "p", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](486, "i", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](487, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](488, "4.9/5");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](489, " \u00B7 Plus de 5 000 apprenants satisfaits ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](490, "div", 233)(491, "a", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](492, "i", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](493, " Commencer gratuitement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](494, "a", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](495, "i", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](496, " Voir les cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](497, "div", 237)(498, "div", 238)(499, "div", 239)(500, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](501, "i", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](502, "div", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](503, "5 000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](504, "div", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](505, "Apprenants actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](506, "div", 243)(507, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](508, "i", 244);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](509, "div", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](510);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](511, "div", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](512, "Cours disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](513, "div", 245)(514, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](515, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](516, "div", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](517, "98%");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](518, "div", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](519, "Taux de satisfaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](520, "div", 246)(521, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](522, "i", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](523, "div", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](524);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](525, "div", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](526, "Formateurs experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](527, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.selectedCategoryName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackByCategoryId);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.categories.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx.featuredCourses.length || "50", "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.categories.length || "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.topInstructors.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.bannerCourses)("ngForTrackBy", ctx.trackByCourseId);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("config", ctx.slideConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.recruiterPartners)("ngForTrackBy", ctx.trackByPartnerName);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.categories.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.featuredCourses.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.topInstructors.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", ctx.routes.verifyCertificate);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](183);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", ctx.routes.becomeAnExpert);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", ctx.routes.register)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", "/courses/course-list-public");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx.featuredCourses.length || "50", "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx.topInstructors.length || "20", "+");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickItemDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
      styles: ["@charset \"UTF-8\";\n/* \u2500\u2500 Home Page Custom Styles \u2500\u2500 */\n/* Smooth card hover effect */\n.course-item {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.course-item:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n}\n\n.banner-image {\n  perspective: 1400px;\n}\n\n.hero-card-stage {\n  position: relative;\n  min-height: 460px;\n}\n\n.hero-card-stage .swiper-slider-banner,\n.hero-card-stage .swiper-cards,\n.hero-card-stage .swiper-cards > .swiper-wrapper {\n  position: relative;\n  min-height: 460px;\n  width: 100%;\n}\n\n.hero-card-stage .swiper-cards > .swiper-wrapper > .swiper-slide.ng-star-inserted {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: auto;\n  width: 270px;\n  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease, filter 0.7s ease;\n}\n\n.hero-card-shell {\n  padding-top: 34px;\n  width: 270px;\n}\n\n.hero-course-card {\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 28px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(18px) saturate(1.6);\n  -webkit-backdrop-filter: blur(18px) saturate(1.6);\n  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.55);\n  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;\n}\n\n.hero-card-primary {\n  transform: translate3d(0, 0, 0) rotate(-2deg) scale(1);\n  opacity: 1;\n  filter: blur(0);\n  z-index: 10 !important;\n}\n\n.hero-card-secondary {\n  transform: translate3d(36px, 18px, 0) rotate(4deg) scale(0.88);\n  opacity: 0.72;\n  filter: saturate(0.8) blur(0.5px);\n  z-index: 9 !important;\n}\n\n.hero-card-tertiary {\n  transform: translate3d(66px, 38px, 0) rotate(8deg) scale(0.76);\n  opacity: 0.45;\n  filter: saturate(0.6) blur(1px);\n  z-index: 8 !important;\n}\n\n.hero-card-primary .hero-course-card {\n  animation: heroCardFloat 5.5s ease-in-out infinite;\n  box-shadow: 0 30px 80px rgba(99, 102, 241, 0.3), 0 8px 24px rgba(15, 23, 42, 0.18) !important;\n}\n\n@keyframes heroCardFloat {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n.hero-card-media {\n  position: relative;\n  height: 160px;\n  overflow: hidden;\n  /* Fallback gradient when course image fails to load */\n  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4f46e5 75%, #7c3aed 100%);\n}\n\n.hero-card-media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1.03);\n}\n\n.hero-card-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(15, 23, 42, 0.03) 0%, rgba(15, 23, 42, 0.3) 100%);\n}\n\n.hero-card-floating-badge {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.92);\n  color: #111827;\n  font-size: 12px;\n  font-weight: 700;\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.14);\n}\n\n.hero-card-body {\n  padding: 18px 18px 20px;\n}\n\n.hero-card-topline {\n  gap: 12px;\n}\n\n.hero-card-instructor {\n  min-width: 0;\n}\n\n.hero-avatar-ring {\n  border: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.12);\n}\n\n.hero-card-label {\n  display: block;\n  color: #6b7280;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-card-instructor-name {\n  display: block;\n  max-width: 132px;\n  overflow: hidden;\n  color: #0f172a;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.hero-card-chip {\n  flex-shrink: 0;\n  padding: 8px 11px;\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  background: #fff !important;\n  color: #475569 !important;\n}\n\n.hero-course-title {\n  min-height: 52px;\n  line-height: 1.3;\n}\n\n.hero-course-title a {\n  display: -webkit-box;\n  overflow: hidden;\n  color: #0f172a;\n  font-size: 20px;\n  font-weight: 800;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.hero-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.hero-rating-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: #fff7ed;\n  color: #9a3412;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.hero-rating-pill-muted {\n  background: #f8fafc;\n  color: #64748b;\n}\n\n.hero-meta-sep {\n  width: 4px;\n  height: 4px;\n  margin: 0 10px;\n  border-radius: 999px;\n  background: currentColor;\n  opacity: 0.45;\n}\n\n.hero-card-footer {\n  gap: 14px;\n}\n\n.hero-price-tag {\n  color: #ff4d6d !important;\n  font-size: 24px !important;\n  font-weight: 800 !important;\n  letter-spacing: -0.03em;\n}\n\n.hero-card-action {\n  padding: 9px 15px !important;\n  border-radius: 999px !important;\n  background: linear-gradient(135deg, #111827, #312e81) !important;\n  border: 0 !important;\n  box-shadow: 0 12px 22px rgba(17, 24, 39, 0.2);\n  font-size: 13px !important;\n}\n\n.hero-card-action:hover {\n  transform: translateY(-1px) scale(1.02) !important;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   HERO ENHANCED \u2014 social proof, counters, floating cards\n   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n/* Eyebrow badge glassmorphism overlay */\n.hero-eyebrow-enhanced {\n  background: rgba(255, 255, 255, 0.1) !important;\n  border: 1px solid rgba(255, 255, 255, 0.22) !important;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: rgba(255, 255, 255, 0.92) !important;\n}\n\n/* Subtitle override */\n.hero-subtitle {\n  color: rgba(255, 255, 255, 0.74) !important;\n  font-size: 1.05rem !important;\n  line-height: 1.68 !important;\n  text-align: left !important;\n  margin-bottom: 0 !important;\n}\n\n/* Recruiter strip (same spirit as Home2 client band) */\n.client-section.recruiter-strip {\n  background: #ffffff;\n  margin-top: -4px;\n  padding: 18px 0 14px;\n  border-top: 1px solid #eef1f6;\n  border-bottom: 1px solid #eef1f6;\n}\n\n.client-section.recruiter-strip .recruiter-copy {\n  color: #4f46e5;\n  max-width: 1040px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: 1.55;\n  font-size: 1rem;\n}\n\n.client-section.recruiter-strip .recruiter-copy strong {\n  color: #ff4d6d;\n  font-weight: 800;\n  background: linear-gradient(120deg, #ff4d6d 0%, #ff6f91 50%, #ff4d6d 100%);\n  background-size: 220% 220%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: recruiterStrongShift 4s ease-in-out infinite;\n}\n\n@keyframes recruiterStrongShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.client-section.recruiter-strip .recruiter-trusted {\n  color: #111827;\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n\n.client-section.recruiter-strip .recruiter-trusted span {\n  color: #ff4d6d;\n  font-weight: 800;\n}\n\n.client-section.recruiter-strip .institutions-slider {\n  background: #ffffff;\n  border: 0;\n  border-radius: 0;\n  padding: 2px 0 0;\n}\n\n.client-section.recruiter-strip .institutions-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 60px;\n}\n\n.client-section.recruiter-strip .institutions-items img {\n  height: 36px;\n  width: auto;\n  max-width: 170px;\n  object-fit: contain;\n  filter: none;\n  opacity: 1;\n}\n\n@media (max-width: 767.98px) {\n  .client-section.recruiter-strip {\n    padding: 14px 0 12px;\n  }\n  .client-section.recruiter-strip .recruiter-copy {\n    font-size: 0.92rem;\n    padding: 0 10px;\n  }\n  .client-section.recruiter-strip .recruiter-trusted {\n    font-size: 0.92rem;\n  }\n  .client-section.recruiter-strip .institutions-items img {\n    height: 28px;\n    max-width: 130px;\n  }\n}\n/* \u2500\u2500 Social proof \u2500\u2500 */\n.hero-social-proof {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.hero-sp-avatars {\n  display: flex;\n  align-items: center;\n}\n.hero-sp-avatars img {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.85);\n  margin-right: -10px;\n  object-fit: cover;\n  flex-shrink: 0;\n  transition: transform 0.2s;\n}\n.hero-sp-avatars img:hover {\n  transform: scale(1.15);\n  z-index: 5;\n}\n\n.hero-sp-more {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 10px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  flex-shrink: 0;\n}\n\n.hero-sp-text .hero-sp-stars {\n  margin-bottom: 3px;\n}\n.hero-sp-text .hero-sp-stars i {\n  font-size: 11px;\n  margin-right: 1px;\n}\n.hero-sp-text span {\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 12.5px;\n  font-weight: 500;\n}\n\n/* \u2500\u2500 Counter chips glassmorphism \u2500\u2500 */\n.hero-counters-row {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 16px;\n  padding: 16px 8px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  gap: 0;\n  flex-wrap: wrap;\n}\n@media (max-width: 576px) {\n  .hero-counters-row {\n    padding: 12px 4px;\n    gap: 8px;\n  }\n}\n\n.hero-counter-chip {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  padding: 0 10px;\n  min-width: 68px;\n  transition: transform 0.2s;\n}\n.hero-counter-chip:hover {\n  transform: translateY(-2px);\n}\n\n.hero-counter-val {\n  font-size: 1.4rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 4px;\n  letter-spacing: -0.02em;\n}\n\n.hero-counter-label {\n  font-size: 0.67rem;\n  color: rgba(255, 255, 255, 0.58);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n}\n\n.hero-counter-divider {\n  width: 1px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.14);\n  flex-shrink: 0;\n}\n\n.hero-counter-purple .hero-counter-val {\n  color: #c4b5fd;\n}\n\n.hero-counter-sky .hero-counter-val {\n  color: #7dd3fc;\n}\n\n.hero-counter-green .hero-counter-val {\n  color: #6ee7b7;\n}\n\n.hero-counter-amber .hero-counter-val {\n  color: #fde68a;\n}\n\n/* \u2500\u2500 Right side wrapper \u2500\u2500 */\n.hero-right-wrap {\n  position: relative;\n  padding: 16px 0 24px;\n}\n\n/* Halo / glow orb behind cards */\n.hero-glow-orb {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  height: 380px;\n  background: radial-gradient(circle, rgba(139, 92, 246, 0.42) 0%, rgba(99, 102, 241, 0.22) 45%, transparent 70%);\n  filter: blur(36px);\n  pointer-events: none;\n  z-index: 0;\n  border-radius: 50%;\n  animation: heroGlowPulse 6s ease-in-out infinite;\n}\n\n@keyframes heroGlowPulse {\n  0%, 100% {\n    opacity: 0.85;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.08);\n  }\n}\n/* \u2500\u2500 Floating mini-cards \u2500\u2500 */\n.hero-float-card {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.97);\n  border-radius: 15px;\n  padding: 10px 14px;\n  box-shadow: 0 10px 32px rgba(15, 23, 42, 0.16), 0 2px 6px rgba(15, 23, 42, 0.08);\n  z-index: 20;\n  border: 1px solid rgba(226, 232, 240, 0.85);\n}\n\n.hero-float-rating {\n  top: 24px;\n  left: -20px;\n  animation: heroFloatUp 4.2s ease-in-out infinite;\n}\n\n.hero-float-cert {\n  bottom: 40px;\n  right: -14px;\n  animation: heroFloatUp 4.2s ease-in-out infinite;\n  animation-delay: 2.1s;\n}\n\n.hero-float-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n\n.hero-float-icon-gold {\n  background: linear-gradient(135deg, #fef3c7, #fde68a);\n  color: #92400e;\n}\n\n.hero-float-icon-green {\n  background: linear-gradient(135deg, #d1fae5, #a7f3d0);\n  color: #065f46;\n}\n\n.hero-float-icon-purple {\n  background: linear-gradient(135deg, #ede9fe, #c4b5fd);\n  color: #5b21b6;\n}\n\n.hero-float-val {\n  font-size: 13px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.15;\n}\n.hero-float-val .hero-float-unit {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6b7280;\n}\n\n.hero-float-sub {\n  font-size: 10.5px;\n  color: #6b7280;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n@keyframes heroFloatUp {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   FEATURED COURSE CARDS \u2014 fc-card\n   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.fc-card {\n  margin: 0 10px 24px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid rgba(226, 232, 240, 0.7);\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.25s ease;\n}\n.fc-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.14);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.fc-card:hover .fc-img {\n  transform: scale(1.06);\n}\n.fc-card:hover .fc-img-overlay {\n  opacity: 1;\n}\n.fc-card:hover .fc-cta-btn {\n  background: linear-gradient(135deg, #6366f1, #7c3aed);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 8px 22px rgba(99, 102, 241, 0.35);\n}\n\n/* Image area */\n.fc-img-wrap {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n  /* gradient fallback quand pas d'image */\n  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4f46e5 75%, #7c3aed 100%);\n}\n\n.fc-img-link {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.fc-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.fc-img-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 40%, rgba(15, 23, 42, 0.45) 100%);\n  opacity: 0.6;\n  transition: opacity 0.3s;\n}\n\n/* Price badge */\n.fc-price-badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(255, 255, 255, 0.96);\n  color: #0f172a;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n  padding: 5px 12px;\n  border-radius: 50px;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n/* Fav button */\n.fc-action-stack {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.fc-fav-btn {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n  font-size: 14px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  transition: background 0.2s, color 0.2s, transform 0.2s;\n}\n.fc-fav-btn:hover, .fc-fav-btn.active {\n  background: #fff;\n  color: #f43f5e;\n  transform: scale(1.12);\n}\n\n.fc-cart-btn {\n  background: #ffffff;\n  color: #111111;\n  border-color: rgba(15, 23, 42, 0.12);\n}\n.fc-cart-btn:hover {\n  background: #f8fafc;\n  color: #111111;\n  transform: none;\n}\n.fc-cart-btn.active {\n  background: #111111;\n  color: #ffffff;\n  border-color: #111111;\n  transform: none;\n}\n\n.fc-fav-disabled {\n  opacity: 0.65;\n  cursor: default;\n  pointer-events: none;\n}\n\n/* Category chip on image */\n.fc-cat-chip {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  background: rgba(99, 102, 241, 0.88);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 10px;\n  border-radius: 50px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  text-transform: uppercase;\n}\n\n/* Card body */\n.fc-body {\n  padding: 18px 18px 20px;\n}\n\n.fc-body-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n\n.fc-title {\n  margin-bottom: 14px;\n  line-height: 1.4;\n  min-height: 48px;\n  flex: 1;\n}\n.fc-title a {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  color: #0f172a;\n  font-size: 15px;\n  font-weight: 700;\n  transition: color 0.2s;\n}\n.fc-title a:hover {\n  color: #6366f1;\n}\n\n.fc-body-fav {\n  flex-shrink: 0;\n  width: 34px;\n  height: 34px;\n  position: relative;\n}\n.fc-body-fav:hover, .fc-body-fav.active {\n  background: rgba(255, 255, 255, 0.9);\n  color: #94a3b8;\n  transform: none;\n}\n.fc-body-fav::before, .fc-body-fav::after {\n  content: none !important;\n}\n.fc-body-fav i {\n  font-size: 16px;\n  line-height: 1;\n}\n\n.fc-body-fav.fc-fav-disabled:hover,\n.fc-body-fav.fc-fav-disabled:focus,\n.fc-body-fav.fc-fav-disabled.active {\n  background: rgba(255, 255, 255, 0.9) !important;\n  color: #94a3b8 !important;\n  transform: none !important;\n}\n\n.fc-instructor-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(226, 232, 240, 0.7);\n}\n\n.fc-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e0e7ff;\n  flex-shrink: 0;\n  /* Gradient fallback */\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n}\n\n.fc-inst-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #4338ca;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fc-rating {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #92400e;\n  background: #fef3c7;\n  padding: 3px 9px;\n  border-radius: 50px;\n  flex-shrink: 0;\n}\n.fc-rating i {\n  color: #f59e0b;\n  font-size: 11px;\n}\n\n.fc-new-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: #065f46;\n  background: #d1fae5;\n  padding: 3px 9px;\n  border-radius: 50px;\n  flex-shrink: 0;\n}\n\n.fc-cta-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 11px 16px;\n  border-radius: 12px;\n  background: #f8f7ff;\n  color: #4338ca;\n  font-size: 13.5px;\n  font-weight: 700;\n  border: 1.5px solid #e0e7ff;\n  text-decoration: none;\n  letter-spacing: 0.01em;\n  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;\n}\n.fc-cta-btn:hover {\n  background: linear-gradient(135deg, #6366f1, #7c3aed);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 8px 22px rgba(99, 102, 241, 0.35);\n  transform: translateY(-1px);\n}\n\n/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   CERTIFICATE SECTION \u2014 geometry & floating badge\n   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n/* Constrain the cyan rhombus \u2014 keep original template position, just limit size */\n.community-img-02 {\n  max-width: 90px !important;\n  opacity: 0.8;\n}\n\n/* Floating trophy badge replacing missing shape-7.svg */\n.cert-float-badge {\n  position: absolute;\n  top: 108px;\n  left: 10px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: rgba(255, 255, 255, 0.97);\n  border: 1px solid rgba(226, 232, 240, 0.85);\n  border-radius: 14px;\n  padding: 9px 14px;\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.13);\n  z-index: 5;\n  animation: heroFloatUp 4.5s ease-in-out infinite;\n  animation-delay: 1.8s;\n}\n.cert-float-badge .cert-float-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #fef3c7, #fde68a);\n  color: #92400e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.cert-float-badge .cert-float-val {\n  font-size: 14px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.15;\n}\n.cert-float-badge .cert-float-sub {\n  font-size: 11px;\n  color: #6b7280;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   BENEFIT SECTION\n   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.benefit-section .card {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border-radius: 16px;\n}\n.benefit-section .card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);\n}\n\n/* \u2500\u2500 Category Section Badge \u2500\u2500 */\n.cat-section-badge {\n  padding: 6px 18px 6px 14px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.12));\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: #4338ca;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n\n/* \u2500\u2500 Category Modern Cards \u2500\u2500 */\n.cat-card {\n  margin: 8px 6px;\n}\n.cat-card .cat-card-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 28px 14px 20px;\n  border-radius: 22px;\n  background: #fff;\n  border: 1px solid rgba(226, 232, 240, 0.85);\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);\n  text-decoration: none;\n  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;\n}\n.cat-card .cat-card-link:hover {\n  transform: translateY(-8px);\n}\n.cat-card .cat-card-link:hover .cat-icon-wrap {\n  transform: scale(1.12) rotate(-6deg);\n}\n.cat-card .cat-card-link:hover .cat-cta {\n  opacity: 1;\n  transform: translateY(0);\n  max-height: 28px;\n}\n.cat-card .cat-icon-wrap {\n  width: 76px;\n  height: 76px;\n  border-radius: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  font-size: 28px;\n  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.cat-card .cat-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  text-align: center;\n  margin-bottom: 6px;\n  line-height: 1.4;\n}\n.cat-card .cat-cta {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  opacity: 0;\n  transform: translateY(6px);\n  max-height: 0;\n  overflow: hidden;\n  transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease;\n}\n\n/* \u2500\u2500 Color Variants \u2500\u2500 */\n.cat-indigo .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(67, 56, 202, 0.18);\n}\n.cat-indigo .cat-icon-wrap {\n  background: linear-gradient(135deg, #eef2ff, #c7d2fe);\n  color: #4338ca;\n}\n.cat-indigo .cat-cta {\n  color: #4338ca;\n}\n\n.cat-sky .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(3, 105, 161, 0.18);\n}\n.cat-sky .cat-icon-wrap {\n  background: linear-gradient(135deg, #e0f2fe, #bae6fd);\n  color: #0369a1;\n}\n.cat-sky .cat-cta {\n  color: #0369a1;\n}\n\n.cat-red .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(190, 18, 60, 0.18);\n}\n.cat-red .cat-icon-wrap {\n  background: linear-gradient(135deg, #fff1f2, #fecdd3);\n  color: #be123c;\n}\n.cat-red .cat-cta {\n  color: #be123c;\n}\n\n.cat-amber .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(194, 65, 12, 0.18);\n}\n.cat-amber .cat-icon-wrap {\n  background: linear-gradient(135deg, #fff7ed, #fed7aa);\n  color: #c2410c;\n}\n.cat-amber .cat-cta {\n  color: #c2410c;\n}\n\n.cat-purple .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(126, 34, 206, 0.18);\n}\n.cat-purple .cat-icon-wrap {\n  background: linear-gradient(135deg, #faf5ff, #e9d5ff);\n  color: #7e22ce;\n}\n.cat-purple .cat-cta {\n  color: #7e22ce;\n}\n\n.cat-pink .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(190, 24, 93, 0.18);\n}\n.cat-pink .cat-icon-wrap {\n  background: linear-gradient(135deg, #fdf2f8, #fbcfe8);\n  color: #be185d;\n}\n.cat-pink .cat-cta {\n  color: #be185d;\n}\n\n.cat-teal .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(15, 118, 110, 0.18);\n}\n.cat-teal .cat-icon-wrap {\n  background: linear-gradient(135deg, #f0fdfa, #99f6e4);\n  color: #0f766e;\n}\n.cat-teal .cat-cta {\n  color: #0f766e;\n}\n\n.cat-emerald .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(21, 128, 61, 0.18);\n}\n.cat-emerald .cat-icon-wrap {\n  background: linear-gradient(135deg, #f0fdf4, #bbf7d0);\n  color: #15803d;\n}\n.cat-emerald .cat-cta {\n  color: #15803d;\n}\n\n.cat-yellow .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(180, 83, 9, 0.18);\n}\n.cat-yellow .cat-icon-wrap {\n  background: linear-gradient(135deg, #fffbeb, #fde68a);\n  color: #b45309;\n}\n.cat-yellow .cat-cta {\n  color: #b45309;\n}\n\n.cat-rose .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(225, 29, 72, 0.18);\n}\n.cat-rose .cat-icon-wrap {\n  background: linear-gradient(135deg, #fff1f2, #ffd7d7);\n  color: #e11d48;\n}\n.cat-rose .cat-cta {\n  color: #e11d48;\n}\n\n.cat-blue .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(29, 78, 216, 0.18);\n}\n.cat-blue .cat-icon-wrap {\n  background: linear-gradient(135deg, #eff6ff, #bfdbfe);\n  color: #1d4ed8;\n}\n.cat-blue .cat-cta {\n  color: #1d4ed8;\n}\n\n.cat-slate .cat-card-link:hover {\n  box-shadow: 0 20px 50px rgba(71, 85, 105, 0.18);\n}\n.cat-slate .cat-icon-wrap {\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  color: #475569;\n}\n.cat-slate .cat-cta {\n  color: #475569;\n}\n\n@media (max-width: 1199.98px) {\n  .hero-card-stage {\n    min-height: 460px;\n  }\n  .hero-card-stage .swiper-slider-banner,\n  .hero-card-stage .swiper-cards,\n  .hero-card-stage .swiper-cards > .swiper-wrapper {\n    min-height: 460px;\n  }\n  .hero-card-secondary {\n    transform: translate3d(42px, 18px, 0) rotate(4deg) scale(0.91);\n  }\n  .hero-card-tertiary {\n    transform: translate3d(78px, 38px, 0) rotate(7deg) scale(0.84);\n  }\n}\n@media (max-width: 991.98px) {\n  .hero-card-stage,\n  .hero-card-stage .swiper-slider-banner,\n  .hero-card-stage .swiper-cards,\n  .hero-card-stage .swiper-cards > .swiper-wrapper {\n    min-height: auto;\n  }\n  .hero-card-stage .swiper-cards > .swiper-wrapper > .swiper-slide.ng-star-inserted {\n    position: relative;\n    top: auto;\n    right: auto;\n    left: auto;\n    width: 100%;\n    margin-bottom: 18px;\n  }\n  .hero-card-shell {\n    width: 100%;\n  }\n  .hero-card-primary,\n  .hero-card-secondary,\n  .hero-card-tertiary {\n    transform: none;\n    opacity: 1;\n    filter: none;\n  }\n  .hero-course-card {\n    animation: none;\n  }\n}\n/* Instructor card hover */\n.instructor-item {\n  transition: transform 0.3s ease;\n}\n.instructor-item:hover {\n  transform: translateY(-4px);\n}\n\n.featured-instructor-sec .instructors-img {\n  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4f46e5 70%, #6d28d9 100%);\n  min-height: 220px;\n}\n\n.featured-instructor-sec .instructors-img.has-image {\n  background: transparent;\n}\n\n.featured-instructor-sec .instructors-img img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n  display: block;\n}\n\n.featured-inst-avatar-fallback-link {\n  display: block;\n  text-decoration: none;\n}\n\n.featured-inst-avatar-fallback {\n  min-height: 220px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  color: #fff;\n}\n\n.featured-inst-avatar-fallback i {\n  font-size: 1.35rem;\n}\n\n.featured-inst-avatar-fallback span {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n/* \u2500\u2500 CTA FINAL \u2500\u2500 */\n.cta-final-sec {\n  padding: 80px 0 100px;\n  background: #f8f7ff;\n}\n\n.cta-final-card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 32px;\n  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4f46e5 70%, #6d28d9 100%);\n  padding: 64px 56px;\n  box-shadow: 0 32px 80px rgba(99, 102, 241, 0.35), 0 8px 24px rgba(15, 23, 42, 0.2);\n}\n@media (max-width: 768px) {\n  .cta-final-card {\n    padding: 40px 24px;\n  }\n}\n\n/* Blobs d\u00E9coratifs */\n.cta-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  pointer-events: none;\n}\n\n.cta-blob-1 {\n  width: 400px;\n  height: 400px;\n  background: rgba(124, 58, 237, 0.35);\n  top: -120px;\n  right: -80px;\n}\n\n.cta-blob-2 {\n  width: 280px;\n  height: 280px;\n  background: rgba(99, 102, 241, 0.25);\n  bottom: -60px;\n  left: 10%;\n}\n\n.cta-blob-3 {\n  width: 180px;\n  height: 180px;\n  background: rgba(236, 72, 153, 0.18);\n  top: 30%;\n  left: 40%;\n}\n\n/* Eyebrow badge */\n.cta-eyebrow {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: #e0e7ff;\n  font-size: 0.82rem;\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 6px 16px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n/* Title */\n.cta-title {\n  font-size: clamp(1.8rem, 3.5vw, 2.6rem);\n  font-weight: 800;\n  line-height: 1.2;\n}\n\n.cta-title-accent {\n  background: linear-gradient(90deg, #f9a8d4, #c4b5fd);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n/* Description */\n.cta-desc {\n  color: rgba(255, 255, 255, 0.78) !important;\n  font-size: 1.05rem;\n  max-width: 520px;\n}\n\n/* Social proof */\n.cta-social-proof {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.cta-avatars {\n  display: flex;\n  align-items: center;\n}\n.cta-avatars img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2.5px solid rgba(255, 255, 255, 0.8);\n  margin-right: -10px;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n.cta-avatars img:hover {\n  transform: scale(1.15);\n  z-index: 10;\n}\n\n.cta-avatars-more {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  border: 2.5px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 4px;\n}\n\n.cta-social-text {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.9rem;\n}\n\n/* Buttons */\n.cta-btn-primary {\n  background: linear-gradient(135deg, #f43f5e, #ec4899);\n  border: none;\n  color: #fff;\n  font-weight: 700;\n  border-radius: 50px;\n  padding: 14px 32px;\n  box-shadow: 0 8px 24px rgba(244, 63, 94, 0.4);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.cta-btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(244, 63, 94, 0.55);\n  color: #fff;\n}\n\n.cta-btn-ghost {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 14px 32px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  transition: background 0.2s, border-color 0.2s, transform 0.2s;\n}\n.cta-btn-ghost:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.6);\n  color: #fff;\n  transform: translateY(-2px);\n}\n\n/* Stats grid */\n.cta-stats-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.cta-stat-card {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 20px;\n  padding: 22px 16px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  transition: background 0.25s, transform 0.25s;\n}\n.cta-stat-card:hover {\n  background: rgba(255, 255, 255, 0.14);\n  transform: translateY(-3px);\n}\n\n.cta-stat-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n  font-size: 1.1rem;\n  color: #c4b5fd;\n}\n\n.cta-stat-value {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n  margin-bottom: 4px;\n}\n\n.cta-stat-label {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 500;\n}\n\n/* Buy course button */\n.buy-course-btn {\n  transition: all 0.2s ease;\n}\n.buy-course-btn:hover {\n  transform: scale(1.03);\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   BECOME AN INSTRUCTOR - COMMERCIAL SECTION\n   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.become-instructor-sec {\n  position: relative;\n  padding: 64px 0;\n  background: linear-gradient(135deg, #4a3a90 0%, #57429f 28%, #6346a8 58%, #533d97 80%, #3f2e7f 100%);\n  overflow: hidden;\n}\n@media (max-width: 991px) {\n  .become-instructor-sec {\n    padding: 50px 0;\n  }\n}\n@media (max-width: 576px) {\n  .become-instructor-sec {\n    padding: 34px 0;\n  }\n}\n\n/* Decorative blobs */\n.bi-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n}\n\n.bi-blob-1 {\n  width: 500px;\n  height: 500px;\n  background: rgba(99, 102, 241, 0.25);\n  top: -150px;\n  right: -100px;\n}\n\n.bi-blob-2 {\n  width: 350px;\n  height: 350px;\n  background: rgba(236, 72, 153, 0.15);\n  bottom: -50px;\n  left: 5%;\n}\n\n.bi-blob-3 {\n  width: 280px;\n  height: 280px;\n  background: rgba(13, 202, 240, 0.12);\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n/* \u2500\u2500 Illustration Wrapper \u2500\u2500 */\n.bi-illustration-wrapper {\n  position: relative;\n}\n\n.bi-illustration-card {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n}\n.bi-illustration-card img {\n  width: 100%;\n  height: auto;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);\n}\n.bi-illustration-card:hover img {\n  transform: scale(1.06);\n}\n\n/* Floating badges on illustration */\n.bi-float-badge {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.95);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  animation: floatBadge 3s ease-in-out infinite;\n}\n.bi-float-badge i {\n  font-size: 16px;\n  color: #5625e8;\n}\n\n.bi-float-badge-1 {\n  top: 24px;\n  left: 24px;\n  animation-delay: 0s;\n}\n\n.bi-float-badge-2 {\n  top: 50%;\n  right: -20px;\n  transform: translateY(-50%);\n  animation-delay: 0.3s;\n}\n\n.bi-float-badge-3 {\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  animation-delay: 0.6s;\n}\n\n@keyframes floatBadge {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n/* \u2500\u2500 Content Wrapper \u2500\u2500 */\n.bi-content-wrapper {\n  position: relative;\n  z-index: 3;\n  padding-right: 20px;\n}\n@media (max-width: 991px) {\n  .bi-content-wrapper {\n    padding-right: 0;\n  }\n}\n\n/* Eyebrow badge */\n.bi-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  background: rgba(86, 37, 232, 0.15);\n  border: 1px solid rgba(86, 37, 232, 0.35);\n  color: #a0aef6;\n  font-size: 0.85rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  margin-bottom: 16px;\n}\n.bi-eyebrow i {\n  font-size: 12px;\n  color: #f472b6;\n}\n\n/* Main title */\n.bi-title {\n  font-size: 2.6rem;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.2;\n  margin-bottom: 20px;\n  letter-spacing: -0.02em;\n}\n@media (max-width: 991px) {\n  .bi-title {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 576px) {\n  .bi-title {\n    font-size: 1.65rem;\n  }\n}\n\n.bi-accent {\n  background: linear-gradient(135deg, #f9a8d4 0%, #f472b6 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  position: relative;\n  display: inline-block;\n}\n\n/* Description */\n.bi-description {\n  font-size: 1.02rem;\n  color: rgba(255, 255, 255, 0.82);\n  line-height: 1.65;\n  margin-bottom: 26px;\n  max-width: 480px;\n}\n@media (max-width: 576px) {\n  .bi-description {\n    font-size: 1rem;\n    margin-bottom: 24px;\n  }\n}\n\n/* \u2500\u2500 Features Grid \u2500\u2500 */\n.bi-features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 30px;\n}\n@media (max-width: 576px) {\n  .bi-features-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    margin-bottom: 32px;\n  }\n}\n\n.bi-feature-item {\n  display: flex;\n  gap: 14px;\n  padding: 15px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.bi-feature-item:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(160, 174, 246, 0.3);\n  transform: translateY(-4px);\n}\n\n.bi-feature-icon {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, rgba(86, 37, 232, 0.2), rgba(160, 174, 246, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #a0aef6;\n  font-size: 20px;\n}\n\n.bi-feature-content h4 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 6px;\n}\n.bi-feature-content p {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.72);\n  margin: 0;\n  line-height: 1.5;\n}\n\n/* \u2500\u2500 Stats Row \u2500\u2500 */\n.bi-stats-row {\n  display: flex;\n  gap: 26px;\n  margin-bottom: 30px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n@media (max-width: 768px) {\n  .bi-stats-row {\n    gap: 24px;\n    margin-bottom: 32px;\n    padding-bottom: 24px;\n  }\n}\n@media (max-width: 576px) {\n  .bi-stats-row {\n    justify-content: space-around;\n    gap: 16px;\n  }\n}\n\n.bi-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.bi-stat-value {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #f472b6;\n  line-height: 1;\n}\n@media (max-width: 576px) {\n  .bi-stat-value {\n    font-size: 1.2rem;\n  }\n}\n\n.bi-stat-label {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.72);\n  font-weight: 500;\n}\n\n/* \u2500\u2500 CTA Buttons \u2500\u2500 */\n.bi-cta-buttons {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 576px) {\n  .bi-cta-buttons {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n\n.bi-btn-primary {\n  background: linear-gradient(135deg, #ff6b6b 0%, #ff875a 100%);\n  border: 0;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 14px 28px;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  box-shadow: 0 12px 32px rgba(255, 107, 107, 0.3);\n}\n.bi-btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 48px rgba(255, 107, 107, 0.4);\n  background: linear-gradient(135deg, #ff5252 0%, #ff7043 100%);\n  color: #ffffff;\n}\n.bi-btn-primary:focus {\n  color: #ffffff;\n}\n.bi-btn-primary i {\n  font-size: 14px;\n}\n\n.bi-btn-secondary {\n  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 14px 28px;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.bi-btn-secondary:hover {\n  transform: translateY(-2px);\n  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: #ffffff;\n}\n.bi-btn-secondary:focus {\n  color: #ffffff;\n}\n.bi-btn-secondary i {\n  font-size: 14px;\n}\n\n/* \u2500\u2500 Trust Text \u2500\u2500 */\n.bi-trust-text {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.68);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bi-trust-text i {\n  color: #a0aef6;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS1saXN0L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsa0NBQUE7QUFFQSw2QkFBQTtBQUNBO0VBQ0UscURBQUE7QUFDRjtBQUFFO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtBQUVKOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTs7O0VBR0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhGQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxpREFBQTtFQUNBLHVGQUNFO0VBRUYsK0VBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsOERBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsOERBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0Usa0RBQUE7RUFDQSw2RkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSwwQkFBQTtFQURGO0VBR0E7SUFDRSw0QkFBQTtFQURGO0VBR0E7SUFDRSwwQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSx1RkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFD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QkFBQTtFQTZDRjtBQUNGOztBQTFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQTZDRjs7QUExQ0Esc0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUE2Q0Y7QUEzQ0U7RUFMRjtJQU1JLHNCQUFBO0lBQ0EsU0FBQTtFQThDRjtBQUNGOztBQTNDQTtFQUNFLDZEQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtBQThDRjtBQTVDRTtFQUNFLDJCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7QUE4Q0o7QUEzQ0U7RUFDRSxjQUFBO0FBNkNKO0FBMUNFO0VBQ0UsZUFBQTtBQTRDSjs7QUF4Q0E7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTJDRjtBQXpDRTtFQUNFLDJCQUFBO0VBQ0EsNkRBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUEyQ0o7QUF4Q0U7RUFDRSxjQUFBO0FBMENKO0FBdkNFO0VBQ0UsZUFBQTtBQXlDSjs7QUFyQ0EscUJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBd0NGO0FBdENFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF3Q0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDDosKUwoDDosKUwoAgSG9tZSBQYWdlIEN1c3RvbSBTdHlsZXMgw6LClMKAw6LClMKAICovXG5cbi8qIFNtb290aCBjYXJkIGhvdmVyIGVmZmVjdCAqL1xuLmNvdXJzZS1pdGVtIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG59XG5cbi5iYW5uZXItaW1hZ2Uge1xuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xufVxuXG4uaGVyby1jYXJkLXN0YWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA0NjBweDtcbn1cblxuLmhlcm8tY2FyZC1zdGFnZSAuc3dpcGVyLXNsaWRlci1iYW5uZXIsXG4uaGVyby1jYXJkLXN0YWdlIC5zd2lwZXItY2FyZHMsXG4uaGVyby1jYXJkLXN0YWdlIC5zd2lwZXItY2FyZHMgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDQ2MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlcm8tY2FyZC1zdGFnZSAuc3dpcGVyLWNhcmRzID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZS5uZy1zdGFyLWluc2VydGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB3aWR0aDogMjcwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjIyLCAxLCAwLjM2LCAxKSwgb3BhY2l0eSAwLjdzIGVhc2UsIGZpbHRlciAwLjdzIGVhc2U7XG59XG5cbi5oZXJvLWNhcmQtc2hlbGwge1xuICBwYWRkaW5nLXRvcDogMzRweDtcbiAgd2lkdGg6IDI3MHB4O1xufVxuXG4uaGVyby1jb3Vyc2UtY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KSBzYXR1cmF0ZSgxLjYpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KSBzYXR1cmF0ZSgxLjYpO1xuICBib3gtc2hhZG93OlxuICAgIDAgMjZweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4yMiksXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC4yMiwgMSwgMC4zNiwgMSksIGJveC1zaGFkb3cgMC40cyBlYXNlO1xufVxuXG4uaGVyby1jYXJkLXByaW1hcnkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZSgtMmRlZykgc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYmx1cigwKTtcbiAgei1pbmRleDogMTAgIWltcG9ydGFudDtcbn1cblxuLmhlcm8tY2FyZC1zZWNvbmRhcnkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDM2cHgsIDE4cHgsIDApIHJvdGF0ZSg0ZGVnKSBzY2FsZSgwLjg4KTtcbiAgb3BhY2l0eTogMC43MjtcbiAgZmlsdGVyOiBzYXR1cmF0ZSgwLjgwKSBibHVyKDAuNXB4KTtcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xufVxuXG4uaGVyby1jYXJkLXRlcnRpYXJ5IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg2NnB4LCAzOHB4LCAwKSByb3RhdGUoOGRlZykgc2NhbGUoMC43Nik7XG4gIG9wYWNpdHk6IDAuNDU7XG4gIGZpbHRlcjogc2F0dXJhdGUoMC42MCkgYmx1cigxcHgpO1xuICB6LWluZGV4OiA4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZXJvLWNhcmQtcHJpbWFyeSAuaGVyby1jb3Vyc2UtY2FyZCB7XG4gIGFuaW1hdGlvbjogaGVyb0NhcmRGbG9hdCA1LjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBib3gtc2hhZG93OiAwIDMwcHggODBweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zMCksIDAgOHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAwLjE4KSAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGhlcm9DYXJkRmxvYXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5cbi5oZXJvLWNhcmQtbWVkaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIEZhbGxiYWNrIGdyYWRpZW50IHdoZW4gY291cnNlIGltYWdlIGZhaWxzIHRvIGxvYWQgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFlMWI0YiAwJSwgIzMxMmU4MSA0NSUsICM0ZjQ2ZTUgNzUlLCAjN2MzYWVkIDEwMCUpO1xufVxuXG4uaGVyby1jYXJkLW1lZGlhIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uaGVyby1jYXJkLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE1LCAyMywgNDIsIDAuMDMpIDAlLCByZ2JhKDE1LCAyMywgNDIsIDAuMykgMTAwJSk7XG59XG5cbi5oZXJvLWNhcmQtZmxvYXRpbmctYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA3cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIGNvbG9yOiAjMTExODI3O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjE0KTtcbn1cblxuLmhlcm8tY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMThweCAxOHB4IDIwcHg7XG59XG5cbi5oZXJvLWNhcmQtdG9wbGluZSB7XG4gIGdhcDogMTJweDtcbn1cblxuLmhlcm8tY2FyZC1pbnN0cnVjdG9yIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uaGVyby1hdmF0YXItcmluZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xufVxuXG4uaGVyby1jYXJkLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oZXJvLWNhcmQtaW5zdHJ1Y3Rvci1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTMycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhlcm8tY2FyZC1jaGlwIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDhweCAxMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuOSk7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0NzU1NjkgIWltcG9ydGFudDtcbn1cblxuLmhlcm8tY291cnNlLXRpdGxlIHtcbiAgbWluLWhlaWdodDogNTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLmhlcm8tY291cnNlLXRpdGxlIGEge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xufVxuXG4uaGVyby1jYXJkLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oZXJvLXJhdGluZy1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweCAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2ZmZjdlZDtcbiAgY29sb3I6ICM5YTM0MTI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmhlcm8tcmF0aW5nLXBpbGwtbXV0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmhlcm8tbWV0YS1zZXAge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIG9wYWNpdHk6IDAuNDU7XG59XG5cbi5oZXJvLWNhcmQtZm9vdGVyIHtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uaGVyby1wcmljZS10YWcge1xuICBjb2xvcjogI2ZmNGQ2ZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbn1cblxuLmhlcm8tY2FyZC1hY3Rpb24ge1xuICBwYWRkaW5nOiA5cHggMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA5OTlweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTExODI3LCAjMzEyZTgxKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDIycHggcmdiYSgxNywgMjQsIDM5LCAwLjIpO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmhlcm8tY2FyZC1hY3Rpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgc2NhbGUoMS4wMikgIWltcG9ydGFudDtcbn1cblxuLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBIRVJPIEVOSEFOQ0VEIMOiwoDClCBzb2NpYWwgcHJvb2YsIGNvdW50ZXJzLCBmbG9hdGluZyBjYXJkc1xuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbi8qIEV5ZWJyb3cgYmFkZ2UgZ2xhc3Ntb3JwaGlzbSBvdmVybGF5ICovXG4uaGVyby1leWVicm93LWVuaGFuY2VkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKSAhaW1wb3J0YW50O1xufVxuXG4vKiBTdWJ0aXRsZSBvdmVycmlkZSAqL1xuLmhlcm8tc3VidGl0bGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMDVyZW0gIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNjggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8qIFJlY3J1aXRlciBzdHJpcCAoc2FtZSBzcGlyaXQgYXMgSG9tZTIgY2xpZW50IGJhbmQpICovXG4uY2xpZW50LXNlY3Rpb24ucmVjcnVpdGVyLXN0cmlwIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgcGFkZGluZzogMThweCAwIDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVmMWY2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZjFmNjtcbn1cblxuLmNsaWVudC1zZWN0aW9uLnJlY3J1aXRlci1zdHJpcCAucmVjcnVpdGVyLWNvcHkge1xuICBjb2xvcjogIzRmNDZlNTtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jbGllbnQtc2VjdGlvbi5yZWNydWl0ZXItc3RyaXAgLnJlY3J1aXRlci1jb3B5IHN0cm9uZyB7XG4gIGNvbG9yOiAjZmY0ZDZkO1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZmY0ZDZkIDAlLCAjZmY2ZjkxIDUwJSwgI2ZmNGQ2ZCAxMDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlIDIyMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiByZWNydWl0ZXJTdHJvbmdTaGlmdCA0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByZWNydWl0ZXJTdHJvbmdTaGlmdCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbn1cblxuLmNsaWVudC1zZWN0aW9uLnJlY3J1aXRlci1zdHJpcCAucmVjcnVpdGVyLXRydXN0ZWQge1xuICBjb2xvcjogIzExMTgyNztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2xpZW50LXNlY3Rpb24ucmVjcnVpdGVyLXN0cmlwIC5yZWNydWl0ZXItdHJ1c3RlZCBzcGFuIHtcbiAgY29sb3I6ICNmZjRkNmQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jbGllbnQtc2VjdGlvbi5yZWNydWl0ZXItc3RyaXAgLmluc3RpdHV0aW9ucy1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDJweCAwIDA7XG59XG5cbi5jbGllbnQtc2VjdGlvbi5yZWNydWl0ZXItc3RyaXAgLmluc3RpdHV0aW9ucy1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG4uY2xpZW50LXNlY3Rpb24ucmVjcnVpdGVyLXN0cmlwIC5pbnN0aXR1dGlvbnMtaXRlbXMgaW1nIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxNzBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgZmlsdGVyOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmNsaWVudC1zZWN0aW9uLnJlY3J1aXRlci1zdHJpcCB7XG4gICAgcGFkZGluZzogMTRweCAwIDEycHg7XG4gIH1cblxuICAuY2xpZW50LXNlY3Rpb24ucmVjcnVpdGVyLXN0cmlwIC5yZWNydWl0ZXItY29weSB7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gIC5jbGllbnQtc2VjdGlvbi5yZWNydWl0ZXItc3RyaXAgLnJlY3J1aXRlci10cnVzdGVkIHtcbiAgICBmb250LXNpemU6IDAuOTJyZW07XG4gIH1cblxuICAuY2xpZW50LXNlY3Rpb24ucmVjcnVpdGVyLXN0cmlwIC5pbnN0aXR1dGlvbnMtaXRlbXMgaW1nIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgU29jaWFsIHByb29mIMOiwpTCgMOiwpTCgCAqL1xuLmhlcm8tc29jaWFsLXByb29mIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5oZXJvLXNwLWF2YXRhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICB6LWluZGV4OiA1O1xuICAgIH1cbiAgfVxufVxuXG4uaGVyby1zcC1tb3JlIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5oZXJvLXNwLXRleHQge1xuICAuaGVyby1zcC1zdGFycyB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICB9XG4gIH1cblxuICBzcGFuIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgICBmb250LXNpemU6IDEyLjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBDb3VudGVyIGNoaXBzIGdsYXNzbW9ycGhpc20gw6LClMKAw6LClMKAICovXG4uaGVyby1jb3VudGVycy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBnYXA6IDA7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBwYWRkaW5nOiAxMnB4IDRweDtcbiAgICBnYXA6IDhweDtcbiAgfVxufVxuXG4uaGVyby1jb3VudGVyLWNoaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1pbi13aWR0aDogNjhweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG59XG5cbi5oZXJvLWNvdW50ZXItdmFsIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4uaGVyby1jb3VudGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjY3cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhlcm8tY291bnRlci1kaXZpZGVyIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmhlcm8tY291bnRlci1wdXJwbGUgLmhlcm8tY291bnRlci12YWwgeyBjb2xvcjogI2M0YjVmZDsgfVxuLmhlcm8tY291bnRlci1za3kgICAgLmhlcm8tY291bnRlci12YWwgeyBjb2xvcjogIzdkZDNmYzsgfVxuLmhlcm8tY291bnRlci1ncmVlbiAgLmhlcm8tY291bnRlci12YWwgeyBjb2xvcjogIzZlZTdiNzsgfVxuLmhlcm8tY291bnRlci1hbWJlciAgLmhlcm8tY291bnRlci12YWwgeyBjb2xvcjogI2ZkZTY4YTsgfVxuXG4vKiDDosKUwoDDosKUwoAgUmlnaHQgc2lkZSB3cmFwcGVyIMOiwpTCgMOiwpTCgCAqL1xuLmhlcm8tcmlnaHQtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTZweCAwIDI0cHg7XG59XG5cbi8qIEhhbG8gLyBnbG93IG9yYiBiZWhpbmQgY2FyZHMgKi9cbi5oZXJvLWdsb3ctb3JiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDM4MHB4O1xuICBoZWlnaHQ6IDM4MHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgY2lyY2xlLFxuICAgIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjQyKSAwJSxcbiAgICByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yMikgNDUlLFxuICAgIHRyYW5zcGFyZW50IDcwJVxuICApO1xuICBmaWx0ZXI6IGJsdXIoMzZweCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogaGVyb0dsb3dQdWxzZSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBoZXJvR2xvd1B1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjg1OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjA4KTsgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgRmxvYXRpbmcgbWluaS1jYXJkcyDDosKUwoDDosKUwoAgKi9cbi5oZXJvLWZsb2F0LWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzJweCByZ2JhKDE1LCAyMywgNDIsIDAuMTYpLCAwIDJweCA2cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgei1pbmRleDogMjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI2LCAyMzIsIDI0MCwgMC44NSk7XG59XG5cbi5oZXJvLWZsb2F0LXJhdGluZyB7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogLTIwcHg7XG4gIGFuaW1hdGlvbjogaGVyb0Zsb2F0VXAgNC4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmhlcm8tZmxvYXQtY2VydCB7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IC0xNHB4O1xuICBhbmltYXRpb246IGhlcm9GbG9hdFVwIDQuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcbn1cblxuLmhlcm8tZmxvYXQtaWNvbiB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uaGVyby1mbG9hdC1pY29uLWdvbGQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmRlNjhhKTtcbiAgY29sb3I6ICM5MjQwMGU7XG59XG5cbi5oZXJvLWZsb2F0LWljb24tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDFmYWU1LCAjYTdmM2QwKTtcbiAgY29sb3I6ICMwNjVmNDY7XG59XG5cbi5oZXJvLWZsb2F0LWljb24tcHVycGxlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZTlmZSwgI2M0YjVmZCk7XG4gIGNvbG9yOiAjNWIyMWI2O1xufVxuXG4uaGVyby1mbG9hdC12YWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBsaW5lLWhlaWdodDogMS4xNTtcblxuICAuaGVyby1mbG9hdC11bml0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgfVxufVxuXG4uaGVyby1mbG9hdC1zdWIge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBrZXlmcmFtZXMgaGVyb0Zsb2F0VXAge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4gICBGRUFUVVJFRCBDT1VSU0UgQ0FSRFMgw6LCgMKUIGZjLWNhcmRcbiAgIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmZjLWNhcmQge1xuICBtYXJnaW46IDAgMTBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuNyk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGN1YmljLWJlemllcigwLjIyLCAxLCAwLjM2LCAxKSxcbiAgICAgICAgICAgICAgYm94LXNoYWRvdyAwLjM1cyBlYXNlLFxuICAgICAgICAgICAgICBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTQpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMjUpO1xuXG4gICAgLmZjLWltZyB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNik7IH1cbiAgICAuZmMtaW1nLW92ZXJsYXkgeyBvcGFjaXR5OiAxOyB9XG4gICAgLmZjLWN0YS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgIzdjM2FlZCk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjM1KTtcbiAgICB9XG4gIH1cbn1cblxuLyogSW1hZ2UgYXJlYSAqL1xuLmZjLWltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBncmFkaWVudCBmYWxsYmFjayBxdWFuZCBwYXMgZCdpbWFnZSAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWUxYjRiIDAlLCAjMzEyZTgxIDQ1JSwgIzRmNDZlNSA3NSUsICM3YzNhZWQgMTAwJSk7XG59XG5cbi5mYy1pbWctbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmMtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjIyLCAxLCAwLjM2LCAxKTtcbn1cblxuLmZjLWltZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDE1LCAyMywgNDIsIDApIDQwJSxcbiAgICByZ2JhKDE1LCAyMywgNDIsIDAuNDUpIDEwMCVcbiAgKTtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59XG5cbi8qIFByaWNlIGJhZGdlICovXG4uZmMtcHJpY2UtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nik7XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi8qIEZhdiBidXR0b24gKi9cbi5mYy1hY3Rpb24tc3RhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5mYy1mYXYtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjOTRhM2I4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgY29sb3IgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG5cbiAgJjpob3ZlciwgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICNmNDNmNWU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbiAgfVxufVxuXG4uZmMtY2FydC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzExMTExMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgY29sb3I6ICMxMTExMTE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTExMTExO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uZmMtZmF2LWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogQ2F0ZWdvcnkgY2hpcCBvbiBpbWFnZSAqL1xuLmZjLWNhdC1jaGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjg4KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKiBDYXJkIGJvZHkgKi9cbi5mYy1ib2R5IHtcbiAgcGFkZGluZzogMThweCAxOHB4IDIwcHg7XG59XG5cbi5mYy1ib2R5LXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmZjLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZmxleDogMTtcblxuICBhIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG5cbiAgICAmOmhvdmVyIHsgY29sb3I6ICM2MzY2ZjE7IH1cbiAgfVxufVxuXG4uZmMtYm9keS1mYXYge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6aG92ZXIsXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLy8gRW1ww4PCqmNoZSB0b3V0IHBzZXVkby1jb250ZW51IGTDg8KpY29yYXRpZiBhdSBzdXJ2b2wgKHBvaW50L2Vtb2ppIHJvdWdlKS5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5cbi5mYy1ib2R5LWZhdi5mYy1mYXYtZGlzYWJsZWQ6aG92ZXIsXG4uZmMtYm9keS1mYXYuZmMtZmF2LWRpc2FibGVkOmZvY3VzLFxuLmZjLWJvZHktZmF2LmZjLWZhdi1kaXNhYmxlZC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5NGEzYjggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mYy1pbnN0cnVjdG9yLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjI2LCAyMzIsIDI0MCwgMC43KTtcbn1cblxuLmZjLWF2YXRhciB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMGU3ZmY7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICAvKiBHcmFkaWVudCBmYWxsYmFjayAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTtcbn1cblxuLmZjLWluc3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0MzM4Y2E7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZmMtcmF0aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM5MjQwMGU7XG4gIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIGkgeyBjb2xvcjogI2Y1OWUwYjsgZm9udC1zaXplOiAxMXB4OyB9XG59XG5cbi5mYy1uZXctdGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwNjVmNDY7XG4gIGJhY2tncm91bmQ6ICNkMWZhZTU7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZmMtY3RhLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTFweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmN2ZmO1xuICBjb2xvcjogIzQzMzhjYTtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2UwZTdmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UsIGNvbG9yIDAuMjVzIGVhc2UsXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgIzdjM2FlZCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjM1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4gICBDRVJUSUZJQ0FURSBTRUNUSU9OIMOiwoDClCBnZW9tZXRyeSAmIGZsb2F0aW5nIGJhZGdlXG4gICDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi8qIENvbnN0cmFpbiB0aGUgY3lhbiByaG9tYnVzIMOiwoDClCBrZWVwIG9yaWdpbmFsIHRlbXBsYXRlIHBvc2l0aW9uLCBqdXN0IGxpbWl0IHNpemUgKi9cbi5jb21tdW5pdHktaW1nLTAyIHtcbiAgbWF4LXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuODA7XG59XG5cbi8qIEZsb2F0aW5nIHRyb3BoeSBiYWRnZSByZXBsYWNpbmcgbWlzc2luZyBzaGFwZS03LnN2ZyAqL1xuLmNlcnQtZmxvYXQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTA4cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuODUpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMTMpO1xuICB6LWluZGV4OiA1O1xuICBhbmltYXRpb246IGhlcm9GbG9hdFVwIDQuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMS44cztcblxuICAuY2VydC1mbG9hdC1pY29uIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmRlNjhhKTtcbiAgICBjb2xvcjogIzkyNDAwZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLmNlcnQtZmxvYXQtdmFsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgfVxuXG4gIC5jZXJ0LWZsb2F0LXN1YiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbiAgIEJFTkVGSVQgU0VDVElPTlxuICAgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYmVuZWZpdC1zZWN0aW9uIC5jYXJkIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjE1KTtcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgQ2F0ZWdvcnkgU2VjdGlvbiBCYWRnZSDDosKUwoDDosKUwoAgKi9cbi5jYXQtc2VjdGlvbi1iYWRnZSB7XG4gIHBhZGRpbmc6IDZweCAxOHB4IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSksIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjEyKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xuICBjb2xvcjogIzQzMzhjYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4vKiDDosKUwoDDosKUwoAgQ2F0ZWdvcnkgTW9kZXJuIENhcmRzIMOiwpTCgMOiwpTCgCAqL1xuLmNhdC1jYXJkIHtcbiAgbWFyZ2luOiA4cHggNnB4O1xuXG4gIC5jYXQtY2FyZC1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyOHB4IDE0cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjYsIDIzMiwgMjQwLCAwLjg1KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cyBjdWJpYy1iZXppZXIoMC4yMiwgMSwgMC4zNiwgMSksIGJveC1zaGFkb3cgMC4zNXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuXG4gICAgICAuY2F0LWljb24td3JhcCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xMikgcm90YXRlKC02ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLmNhdC1jdGEge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhdC1pY29uLXdyYXAge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGhlaWdodDogNzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yMiwgMSwgMC4zNiwgMSk7XG4gIH1cblxuICAuY2F0LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cblxuICAuY2F0LWN0YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yOHMgZWFzZSwgdHJhbnNmb3JtIDAuMjhzIGVhc2UsIG1heC1oZWlnaHQgMC4yOHMgZWFzZTtcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgQ29sb3IgVmFyaWFudHMgw6LClMKAw6LClMKAICovXG4uY2F0LWluZGlnbyB7XG4gIC5jYXQtY2FyZC1saW5rOmhvdmVyIHsgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSg2NywgNTYsIDIwMiwgMC4xOCk7IH1cbiAgLmNhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWVmMmZmLCAjYzdkMmZlKTsgY29sb3I6ICM0MzM4Y2E7IH1cbiAgLmNhdC1jdGEgeyBjb2xvcjogIzQzMzhjYTsgfVxufVxuXG4uY2F0LXNreSB7XG4gIC5jYXQtY2FyZC1saW5rOmhvdmVyIHsgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgzLCAxMDUsIDE2MSwgMC4xOCk7IH1cbiAgLmNhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTBmMmZlLCAjYmFlNmZkKTsgY29sb3I6ICMwMzY5YTE7IH1cbiAgLmNhdC1jdGEgeyBjb2xvcjogIzAzNjlhMTsgfVxufVxuXG4uY2F0LXJlZCB7XG4gIC5jYXQtY2FyZC1saW5rOmhvdmVyIHsgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgxOTAsIDE4LCA2MCwgMC4xOCk7IH1cbiAgLmNhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmMWYyLCAjZmVjZGQzKTsgY29sb3I6ICNiZTEyM2M7IH1cbiAgLmNhdC1jdGEgeyBjb2xvcjogI2JlMTIzYzsgfVxufVxuXG4uY2F0LWFtYmVyIHtcbiAgLmNhdC1jYXJkLWxpbms6aG92ZXIgeyBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDE5NCwgNjUsIDEyLCAwLjE4KTsgfVxuICAuY2F0LWljb24td3JhcCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmY3ZWQsICNmZWQ3YWEpOyBjb2xvcjogI2MyNDEwYzsgfVxuICAuY2F0LWN0YSB7IGNvbG9yOiAjYzI0MTBjOyB9XG59XG5cbi5jYXQtcHVycGxlIHtcbiAgLmNhdC1jYXJkLWxpbms6aG92ZXIgeyBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDEyNiwgMzQsIDIwNiwgMC4xOCk7IH1cbiAgLmNhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmFmNWZmLCAjZTlkNWZmKTsgY29sb3I6ICM3ZTIyY2U7IH1cbiAgLmNhdC1jdGEgeyBjb2xvcjogIzdlMjJjZTsgfVxufVxuXG4uY2F0LXBpbmsge1xuICAuY2F0LWNhcmQtbGluazpob3ZlciB7IGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMTkwLCAyNCwgOTMsIDAuMTgpOyB9XG4gIC5jYXQtaWNvbi13cmFwIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZkZjJmOCwgI2ZiY2ZlOCk7IGNvbG9yOiAjYmUxODVkOyB9XG4gIC5jYXQtY3RhIHsgY29sb3I6ICNiZTE4NWQ7IH1cbn1cblxuLmNhdC10ZWFsIHtcbiAgLmNhdC1jYXJkLWxpbms6aG92ZXIgeyBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDE1LCAxMTgsIDExMCwgMC4xOCk7IH1cbiAgLmNhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjBmZGZhLCAjOTlmNmU0KTsgY29sb3I6ICMwZjc2NmU7IH1cbiAgLmNhdC1jdGEgeyBjb2xvcjogIzBmNzY2ZTsgfVxufVxuXG4uY2F0LWVtZXJhbGQge1xuICAuY2F0LWNhcmQtbGluazpob3ZlciB7IGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMjEsIDEyOCwgNjEsIDAuMTgpOyB9XG4gIC5jYXQtaWNvbi13cmFwIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwZmRmNCwgI2JiZjdkMCk7IGNvbG9yOiAjMTU4MDNkOyB9XG4gIC5jYXQtY3RhIHsgY29sb3I6ICMxNTgwM2Q7IH1cbn1cblxuLmNhdC15ZWxsb3cge1xuICAuY2F0LWNhcmQtbGluazpob3ZlciB7IGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMTgwLCA4MywgOSwgMC4xOCk7IH1cbiAgLmNhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmYmViLCAjZmRlNjhhKTsgY29sb3I6ICNiNDUzMDk7IH1cbiAgLmNhdC1jdGEgeyBjb2xvcjogI2I0NTMwOTsgfVxufVxuXG4uY2F0LXJvc2Uge1xuICAuY2F0LWNhcmQtbGluazpob3ZlciB7IGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMjI1LCAyOSwgNzIsIDAuMTgpOyB9XG4gIC5jYXQtaWNvbi13cmFwIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjFmMiwgI2ZmZDdkNyk7IGNvbG9yOiAjZTExZDQ4OyB9XG4gIC5jYXQtY3RhIHsgY29sb3I6ICNlMTFkNDg7IH1cbn1cblxuLmNhdC1ibHVlIHtcbiAgLmNhdC1jYXJkLWxpbms6aG92ZXIgeyBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDI5LCA3OCwgMjE2LCAwLjE4KTsgfVxuICAuY2F0LWljb24td3JhcCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZmY2ZmYsICNiZmRiZmUpOyBjb2xvcjogIzFkNGVkODsgfVxuICAuY2F0LWN0YSB7IGNvbG9yOiAjMWQ0ZWQ4OyB9XG59XG5cbi5jYXQtc2xhdGUge1xuICAuY2F0LWNhcmQtbGluazpob3ZlciB7IGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoNzEsIDg1LCAxMDUsIDAuMTgpOyB9XG4gIC5jYXQtaWNvbi13cmFwIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmFmYywgI2UyZThmMCk7IGNvbG9yOiAjNDc1NTY5OyB9XG4gIC5jYXQtY3RhIHsgY29sb3I6ICM0NzU1Njk7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaGVyby1jYXJkLXN0YWdlIHtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuXG4gIC5oZXJvLWNhcmQtc3RhZ2UgLnN3aXBlci1zbGlkZXItYmFubmVyLFxuICAuaGVyby1jYXJkLXN0YWdlIC5zd2lwZXItY2FyZHMsXG4gIC5oZXJvLWNhcmQtc3RhZ2UgLnN3aXBlci1jYXJkcyA+IC5zd2lwZXItd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogNDYwcHg7XG4gIH1cblxuICAuaGVyby1jYXJkLXNlY29uZGFyeSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0MnB4LCAxOHB4LCAwKSByb3RhdGUoNGRlZykgc2NhbGUoMC45MSk7XG4gIH1cblxuICAuaGVyby1jYXJkLXRlcnRpYXJ5IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDc4cHgsIDM4cHgsIDApIHJvdGF0ZSg3ZGVnKSBzY2FsZSgwLjg0KTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmhlcm8tY2FyZC1zdGFnZSxcbiAgLmhlcm8tY2FyZC1zdGFnZSAuc3dpcGVyLXNsaWRlci1iYW5uZXIsXG4gIC5oZXJvLWNhcmQtc3RhZ2UgLnN3aXBlci1jYXJkcyxcbiAgLmhlcm8tY2FyZC1zdGFnZSAuc3dpcGVyLWNhcmRzID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmhlcm8tY2FyZC1zdGFnZSAuc3dpcGVyLWNhcmRzID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZS5uZy1zdGFyLWluc2VydGVkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiBhdXRvO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgfVxuXG4gIC5oZXJvLWNhcmQtc2hlbGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlcm8tY2FyZC1wcmltYXJ5LFxuICAuaGVyby1jYXJkLXNlY29uZGFyeSxcbiAgLmhlcm8tY2FyZC10ZXJ0aWFyeSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBub25lO1xuICB9XG5cbiAgLmhlcm8tY291cnNlLWNhcmQge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuXG4vKiBJbnN0cnVjdG9yIGNhcmQgaG92ZXIgKi9cbi5pbnN0cnVjdG9yLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIH1cbn1cblxuLmZlYXR1cmVkLWluc3RydWN0b3Itc2VjIC5pbnN0cnVjdG9ycy1pbWcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWUxYjRiIDAlLCAjMzEyZTgxIDQwJSwgIzRmNDZlNSA3MCUsICM2ZDI4ZDkgMTAwJSk7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xufVxuXG4uZmVhdHVyZWQtaW5zdHJ1Y3Rvci1zZWMgLmluc3RydWN0b3JzLWltZy5oYXMtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmZlYXR1cmVkLWluc3RydWN0b3Itc2VjIC5pbnN0cnVjdG9ycy1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZlYXR1cmVkLWluc3QtYXZhdGFyLWZhbGxiYWNrLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmVhdHVyZWQtaW5zdC1hdmF0YXItZmFsbGJhY2sge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC4zNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mZWF0dXJlZC1pbnN0LWF2YXRhci1mYWxsYmFjayBpIHtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xufVxuXG4uZmVhdHVyZWQtaW5zdC1hdmF0YXItZmFsbGJhY2sgc3BhbiB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBDVEEgRklOQUwgw6LClMKAw6LClMKAICovXG4uY3RhLWZpbmFsLXNlYyB7XG4gIHBhZGRpbmc6IDgwcHggMCAxMDBweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjdmZjtcbn1cblxuLmN0YS1maW5hbC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWUxYjRiIDAlLCAjMzEyZTgxIDQwJSwgIzRmNDZlNSA3MCUsICM2ZDI4ZDkgMTAwJSk7XG4gIHBhZGRpbmc6IDY0cHggNTZweDtcbiAgYm94LXNoYWRvdzogMCAzMnB4IDgwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMzUpLCAwIDhweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4yKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gIH1cbn1cblxuLyogQmxvYnMgZMODwqljb3JhdGlmcyAqL1xuLmN0YS1ibG9iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbHRlcjogYmx1cig2MHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY3RhLWJsb2ItMSB7XG4gIHdpZHRoOiA0MDBweDsgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjQsIDU4LCAyMzcsIDAuMzUpO1xuICB0b3A6IC0xMjBweDsgcmlnaHQ6IC04MHB4O1xufVxuLmN0YS1ibG9iLTIge1xuICB3aWR0aDogMjgwcHg7IGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjI1KTtcbiAgYm90dG9tOiAtNjBweDsgbGVmdDogMTAlO1xufVxuLmN0YS1ibG9iLTMge1xuICB3aWR0aDogMTgwcHg7IGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM2LCA3MiwgMTUzLCAwLjE4KTtcbiAgdG9wOiAzMCU7IGxlZnQ6IDQwJTtcbn1cblxuLyogRXllYnJvdyBiYWRnZSAqL1xuLmN0YS1leWVicm93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKTtcbiAgY29sb3I6ICNlMGU3ZmY7XG4gIGZvbnQtc2l6ZTogLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGxldHRlci1zcGFjaW5nOiAuMDRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyogVGl0bGUgKi9cbi5jdGEtdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgMy41dncsIDIuNnJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uY3RhLXRpdGxlLWFjY2VudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y5YThkNCwgI2M0YjVmZCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLyogRGVzY3JpcHRpb24gKi9cbi5jdGEtZGVzYyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbn1cblxuLyogU29jaWFsIHByb29mICovXG4uY3RhLXNvY2lhbC1wcm9vZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmN0YS1hdmF0YXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAmOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgei1pbmRleDogMTA7IH1cbiAgfVxufVxuLmN0YS1hdmF0YXJzLW1vcmUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xOCk7XG4gIGJvcmRlcjogMi41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmN0YS1zb2NpYWwtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuODUpO1xuICBmb250LXNpemU6IC45cmVtO1xufVxuXG4vKiBCdXR0b25zICovXG4uY3RhLWJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y0M2Y1ZSwgI2VjNDg5OSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDE0cHggMzJweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDI0NCwgNjMsIDk0LCAwLjQpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDI0NCwgNjMsIDk0LCAwLjU1KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuLmN0YS1idG4tZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDE0cHggMzJweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnMsIHRyYW5zZm9ybSAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbn1cblxuLyogU3RhdHMgZ3JpZCAqL1xuLmN0YS1zdGF0cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE2cHg7XG59XG4uY3RhLXN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIycHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICB9XG59XG4uY3RhLXN0YXQtaWNvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICNjNGI1ZmQ7XG59XG4uY3RhLXN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY3RhLXN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IC43OHJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIEJ1eSBjb3Vyc2UgYnV0dG9uICovXG4uYnV5LWNvdXJzZS1idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICB9XG59XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQkVDT01FIEFOIElOU1RSVUNUT1IgLSBDT01NRVJDSUFMIFNFQ1RJT05cbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4uYmVjb21lLWluc3RydWN0b3Itc2VjIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA2NHB4IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0YTNhOTAgMCUsICM1NzQyOWYgMjglLCAjNjM0NmE4IDU4JSwgIzUzM2Q5NyA4MCUsICMzZjJlN2YgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgcGFkZGluZzogMzRweCAwO1xuICB9XG59XG5cbi8qIERlY29yYXRpdmUgYmxvYnMgKi9cbi5iaS1ibG9iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbHRlcjogYmx1cig4MHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iaS1ibG9iLTEge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjI1KTtcbiAgdG9wOiAtMTUwcHg7XG4gIHJpZ2h0OiAtMTAwcHg7XG59XG5cbi5iaS1ibG9iLTIge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM2LCA3MiwgMTUzLCAwLjE1KTtcbiAgYm90dG9tOiAtNTBweDtcbiAgbGVmdDogNSU7XG59XG5cbi5iaS1ibG9iLTMge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMjgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDIwMiwgMjQwLCAwLjEyKTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgSWxsdXN0cmF0aW9uIFdyYXBwZXIgw6LClMKAw6LClMKAICovXG4uYmktaWxsdXN0cmF0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iaS1pbGx1c3RyYXRpb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC4yMiwgMSwgMC4zNiwgMSk7XG4gIH1cblxuICAmOmhvdmVyIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcbiAgfVxufVxuXG4vKiBGbG9hdGluZyBiYWRnZXMgb24gaWxsdXN0cmF0aW9uICovXG4uYmktZmxvYXQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGFuaW1hdGlvbjogZmxvYXRCYWRnZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1NjI1ZTg7XG4gIH1cbn1cblxuLmJpLWZsb2F0LWJhZGdlLTEge1xuICB0b3A6IDI0cHg7XG4gIGxlZnQ6IDI0cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5iaS1mbG9hdC1iYWRnZS0yIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5iaS1mbG9hdC1iYWRnZS0zIHtcbiAgYm90dG9tOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0QmFkZ2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAIENvbnRlbnQgV3JhcHBlciDDosKUwoDDosKUwoAgKi9cbi5iaS1jb250ZW50LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4vKiBFeWVicm93IGJhZGdlICovXG4uYmktZXllYnJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoODYsIDM3LCAyMzIsIDAuMTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDg2LCAzNywgMjMyLCAwLjM1KTtcbiAgY29sb3I6ICNhMGFlZjY7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZjQ3MmI2O1xuICB9XG59XG5cbi8qIE1haW4gdGl0bGUgKi9cbi5iaS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xuICB9XG59XG5cbi5iaS1hY2NlbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjlhOGQ0IDAlLCAjZjQ3MmI2IDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBEZXNjcmlwdGlvbiAqL1xuLmJpLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjAycmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKTtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIG1heC13aWR0aDogNDgwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAIEZlYXR1cmVzIEdyaWQgw6LClMKAw6LClMKAICovXG4uYmktZmVhdHVyZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIH1cbn1cblxuLmJpLWZlYXR1cmUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTYwLCAxNzQsIDI0NiwgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIH1cbn1cblxuLmJpLWZlYXR1cmUtaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDg2LCAzNywgMjMyLCAwLjIpLCByZ2JhKDE2MCwgMTc0LCAyNDYsIDAuMSkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNhMGFlZjY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJpLWZlYXR1cmUtY29udGVudCB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAIFN0YXRzIFJvdyDDosKUwoDDosKUwoAgKi9cbi5iaS1zdGF0cy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdhcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG59XG5cbi5iaS1zdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5iaS1zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2Y0NzJiNjtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLmJpLXN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiDDosKUwoDDosKUwoAgQ1RBIEJ1dHRvbnMgw6LClMKAw6LClMKAICovXG4uYmktY3RhLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLmJpLWJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmNmI2YiAwJSwgI2ZmODc1YSAxMDAlKTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4zKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDQ4cHggcmdiYSgyNTUsIDEwNywgMTA3LCAwLjQpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjUyNTIgMCUsICNmZjcwNDMgMTAwJSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uYmktYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZjI5MzcgMCUsICMzNzQxNTEgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmQzNzQ4IDAlLCAjNGE1NTY4IDEwMCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICBpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAIFRydXN0IFRleHQgw6LClMKAw6LClMKAICovXG4uYmktdHJ1c3QtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG5cbiAgaSB7XG4gICAgY29sb3I6ICNhMGFlZjY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
  return HomeComponent;
})();

/***/ })

}]);
//# sourceMappingURL=3675.js.map