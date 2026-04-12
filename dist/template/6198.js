"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6198],{

/***/ 34658:
/*!*****************************************************************!*\
  !*** ./src/app/shared/service/mongo-logs/mongo-logs.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MongoLogsService: () => (/* binding */ MongoLogsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 63855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);




let MongoLogsService = /*#__PURE__*/(() => {
  class MongoLogsService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getAuthLogs(page, size, provider = '', email = '') {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page).set('size', size).set('provider', provider).set('email', email);
      return this.http.get(`${this.apiUrl}/superadmin/mongo-logs/auth`, {
        params
      });
    }
    getRecommendationLogs(page, size, type = '') {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page).set('size', size).set('type', type);
      return this.http.get(`${this.apiUrl}/superadmin/mongo-logs/recommendations`, {
        params
      });
    }
    getAiSessionLogs(page, size, sessionId = '', userEmail = '') {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', page).set('size', size).set('sessionId', sessionId).set('userEmail', userEmail);
      return this.http.get(`${this.apiUrl}/superadmin/mongo-logs/ai-sessions`, {
        params
      });
    }
    static ɵfac = function MongoLogsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MongoLogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MongoLogsService,
      factory: MongoLogsService.ɵfac,
      providedIn: 'root'
    });
  }
  return MongoLogsService;
})();

/***/ }),

/***/ 96198:
/*!*******************************************************************!*\
  !*** ./src/app/features/admin/admin-logs/admin-logs.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLogsComponent: () => (/* binding */ AdminLogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_mongo_logs_mongo_logs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/mongo-logs/mongo-logs.service */ 34658);







const _c0 = (a0, a1, a2) => ({
  "lg-badge-gold": a0,
  "lg-badge-silver": a1,
  "lg-badge-bronze": a2
});
function AdminLogsComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mongoTotalElements);
  }
}
function AdminLogsComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mongoTotalElements);
  }
}
function AdminLogsComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mongoTotalElements);
  }
}
function AdminLogsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chargement des logs\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AdminLogsComponent_ng_container_63_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 58)(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", log_r3.provider === "google" ? "ti-brand-google" : log_r3.provider === "github" ? "ti-brand-github" : "ti-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r3.provider, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r3.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", log_r3.success ? "published" : "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r3.success ? "Succ\u00E8s" : "\u00C9chec", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r3.reason || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 8, log_r3.createdAt, "dd/MM/yy HH:mm"));
  }
}
function AdminLogsComponent_ng_container_63_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 66)(2, "div", 67)(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Aucun log d'authentification trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function AdminLogsComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43)(2, "div", 44)(3, "div", 45)(4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminLogsComponent_ng_container_63_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.authProviderFilter, $event) || (ctx_r0.authProviderFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 45)(8, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminLogsComponent_ng_container_63_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.authEmailFilter, $event) || (ctx_r0.authEmailFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 45)(12, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_ng_container_63_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.applyMongoFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Appliquer le filtre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 51)(16, "div", 52)(17, "table", 53)(18, "thead", 54)(19, "tr")(20, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "R\u00F4le");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Raison");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AdminLogsComponent_ng_container_63_tr_33_Template, 17, 11, "tr", 57)(34, AdminLogsComponent_ng_container_63_tr_34_Template, 7, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.authProviderFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.authEmailFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.authLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.authLogs.length === 0);
  }
}
function AdminLogsComponent_ng_container_64_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 58)(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td")(7, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 73)(10, "div", 77)(11, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("#", log_r5.courseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.recommendationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](18, _c0, log_r5.recommendationBadge === "GOLD", log_r5.recommendationBadge === "SILVER", log_r5.recommendationBadge === "BRONZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.recommendationBadge);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 12, log_r5.engagementScore, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", log_r5.engagementScore < 100 ? log_r5.engagementScore : 100, "%")("background", log_r5.engagementScore > 70 ? "#16a34a" : log_r5.engagementScore > 40 ? "#f59e0b" : "#dc2626");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.totalDetections);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.enrollmentCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r5.avgRating != null ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 15, log_r5.avgRating, "1.1-1") + " \u2605" : "\u2014");
  }
}
function AdminLogsComponent_ng_container_64_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 84)(2, "div", 67)(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Aucun log de recommandation trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function AdminLogsComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43)(2, "div", 44)(3, "div", 71)(4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Type de recommandation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminLogsComponent_ng_container_64_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.recommendationTypeFilter, $event) || (ctx_r0.recommendationTypeFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 45)(8, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_ng_container_64_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.applyMongoFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Appliquer le filtre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 51)(12, "div", 52)(13, "table", 53)(14, "thead", 54)(15, "tr")(16, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Cours ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Engagement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "D\u00E9tections");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Inscriptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Moy. Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AdminLogsComponent_ng_container_64_tr_31_Template, 23, 22, "tr", 57)(32, AdminLogsComponent_ng_container_64_tr_32_Template, 7, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.recommendationTypeFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.recommendationLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.recommendationLogs.length === 0);
  }
}
function AdminLogsComponent_ng_container_65_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 58)(1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 73)(10, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const log_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r7.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r7.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", log_r7.prompt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r7.prompt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", log_r7.latencyMs && log_r7.latencyMs > 2000 ? "lg-latency-slow" : log_r7.latencyMs && log_r7.latencyMs > 1000 ? "lg-latency-med" : "lg-latency-fast");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r7.latencyMs != null ? log_r7.latencyMs + " ms" : "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", log_r7.success ? "published" : "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r7.success ? "Succ\u00E8s" : "Erreur", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 9, log_r7.createdAt, "dd/MM/yy HH:mm"));
  }
}
function AdminLogsComponent_ng_container_65_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 66)(2, "div", 67)(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Aucune session IA trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function AdminLogsComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 43)(2, "div", 44)(3, "div", 45)(4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Session ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminLogsComponent_ng_container_65_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.aiSessionIdFilter, $event) || (ctx_r0.aiSessionIdFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 45)(8, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminLogsComponent_ng_container_65_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.aiUserEmailFilter, $event) || (ctx_r0.aiUserEmailFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 45)(12, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_ng_container_65_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.applyMongoFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Appliquer le filtre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 51)(16, "div", 52)(17, "table", 53)(18, "thead", 54)(19, "tr")(20, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Mod\u00E8le");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Prompt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Latence");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AdminLogsComponent_ng_container_65_tr_33_Template, 18, 12, "tr", 57)(34, AdminLogsComponent_ng_container_65_tr_34_Template, 7, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.aiSessionIdFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.aiUserEmailFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.aiLogs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.aiLogs.length === 0);
  }
}
function AdminLogsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 92)(1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " sur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " \u2014 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " entr\u00E9e(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 93)(13, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_div_66_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changeMongoPage(-1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_div_66_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.changeMongoPage(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mongoPage + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mongoTotalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.mongoTotalElements);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.mongoPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.mongoPage >= ctx_r0.mongoTotalPages - 1);
  }
}
let AdminLogsComponent = /*#__PURE__*/(() => {
  class AdminLogsComponent {
    mongoLogsService;
    mongoKind = 'auth';
    mongoLoading = false;
    mongoError = '';
    authLogs = [];
    recommendationLogs = [];
    aiLogs = [];
    mongoPage = 0;
    mongoSize = 20;
    mongoTotalPages = 0;
    mongoTotalElements = 0;
    authProviderFilter = '';
    authEmailFilter = '';
    recommendationTypeFilter = '';
    aiSessionIdFilter = '';
    aiUserEmailFilter = '';
    constructor(mongoLogsService) {
      this.mongoLogsService = mongoLogsService;
    }
    ngOnInit() {
      this.loadMongoLogs();
    }
    onMongoKindChange(kind) {
      this.mongoKind = kind;
      this.mongoPage = 0;
      this.loadMongoLogs();
    }
    applyMongoFilters() {
      this.mongoPage = 0;
      this.loadMongoLogs();
    }
    changeMongoPage(delta) {
      const next = this.mongoPage + delta;
      if (next < 0 || next >= this.mongoTotalPages) return;
      this.mongoPage = next;
      this.loadMongoLogs();
    }
    loadMongoLogs() {
      this.mongoLoading = true;
      this.mongoError = '';
      if (this.mongoKind === 'auth') {
        this.mongoLogsService.getAuthLogs(this.mongoPage, this.mongoSize, this.authProviderFilter, this.authEmailFilter).subscribe({
          next: res => {
            this.authLogs = res.content;
            this.mongoTotalPages = res.totalPages;
            this.mongoTotalElements = res.totalElements;
            this.mongoLoading = false;
          },
          error: () => {
            this.authLogs = [];
            this.mongoTotalPages = 0;
            this.mongoTotalElements = 0;
            this.mongoError = 'Impossible de charger les logs (auth).';
            this.showToast('error', this.mongoError);
            this.mongoLoading = false;
          }
        });
        return;
      }
      if (this.mongoKind === 'recommendations') {
        this.mongoLogsService.getRecommendationLogs(this.mongoPage, this.mongoSize, this.recommendationTypeFilter).subscribe({
          next: res => {
            this.recommendationLogs = res.content;
            this.mongoTotalPages = res.totalPages;
            this.mongoTotalElements = res.totalElements;
            this.mongoLoading = false;
          },
          error: () => {
            this.recommendationLogs = [];
            this.mongoTotalPages = 0;
            this.mongoTotalElements = 0;
            this.mongoError = 'Impossible de charger les logs (recommendations).';
            this.showToast('error', this.mongoError);
            this.mongoLoading = false;
          }
        });
        return;
      }
      this.mongoLogsService.getAiSessionLogs(this.mongoPage, this.mongoSize, this.aiSessionIdFilter, this.aiUserEmailFilter).subscribe({
        next: res => {
          this.aiLogs = res.content;
          this.mongoTotalPages = res.totalPages;
          this.mongoTotalElements = res.totalElements;
          this.mongoLoading = false;
        },
        error: () => {
          this.aiLogs = [];
          this.mongoTotalPages = 0;
          this.mongoTotalElements = 0;
          this.mongoError = 'Impossible de charger les logs (AI sessions).';
          this.showToast('error', this.mongoError);
          this.mongoLoading = false;
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
    static ɵfac = function AdminLogsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_mongo_logs_mongo_logs_service__WEBPACK_IMPORTED_MODULE_5__.MongoLogsService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdminLogsComponent,
      selectors: [["app-admin-logs"]],
      decls: 67,
      vars: 17,
      consts: [[1, "page-content"], [1, "lg-hero", "mb-4"], [1, "lg-glow", "lg-glow-1"], [1, "lg-glow", "lg-glow-2"], [1, "lg-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "lg-av-wrap"], [1, "lg-av-ring"], [1, "lg-av-border"], [1, "lg-av-circle"], [1, "ti", "ti-terminal-2", 2, "font-size", "26px", "color", "#fff"], [1, "lg-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "lg-chip"], [1, "ti", "ti-database", "me-1", 2, "font-size", "9px"], [1, "lg-live"], [1, "lg-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.5)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], [1, "lg-glass", "d-none", "d-md-flex", "align-items-center"], [1, "lg-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.5)", "font-size", "10px"], [1, "lg-stat-div"], [1, "lg-refresh", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-refresh", 2, "font-size", "14px"], [1, "lg-tabs", "mb-4"], [1, "lg-tab", 3, "click"], [1, "ti", "ti-lock", "me-2"], ["class", "lg-tab-pill", 4, "ngIf"], [1, "ti", "ti-bulb", "me-2"], [1, "ti", "ti-robot", "me-2"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["class", "lg-pagination d-flex justify-content-between align-items-center mt-2 mb-4", 4, "ngIf"], [1, "lg-tab-pill"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", 2, "color", "#0ea5e9", "width", "2rem", "height", "2rem"], [1, "mt-2", "text-muted", "small"], [1, "ac-card", "p-3", "mb-3"], [1, "row", "g-2", "align-items-end"], [1, "col-md-4"], [1, "lg-filter-label"], ["type", "text", "placeholder", "google, local\u2026", 1, "form-control", "lg-filter-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "user@email.com", 1, "form-control", "lg-filter-input", 3, "ngModelChange", "ngModel"], [1, "lg-btn-filter", "w-100", 3, "click"], [1, "ti", "ti-filter-search", "me-1"], [1, "ac-card", "mb-3"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "lg-thead"], [1, "ps-4"], [1, "pe-4"], ["class", "lg-row", 4, "ngFor", "ngForOf"], [1, "lg-row"], [1, "ps-4", "fw-semibold", 2, "color", "#0f172a"], [1, "lg-badge-provider"], [1, "ti", 2, "font-size", "10px", 3, "ngClass"], [1, "text-muted", "small"], [1, "ac-status", 3, "ngClass"], [1, "text-muted", "small", 2, "max-width", "180px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "text-muted", "small", "pe-4"], ["colspan", "6"], [1, "ac-empty", "py-5"], [1, "ac-empty-icon"], [1, "ti", "ti-lock-off"], [1, "text-muted"], [1, "col-md-8"], ["type", "text", "placeholder", "ex: SCORE_BASED, COLLABORATIVE\u2026", 1, "form-control", "lg-filter-input", 3, "ngModelChange", "ngModel"], [1, "text-end"], [1, "text-end", "pe-4"], [1, "lg-badge-type"], [1, "lg-badge-badge", 3, "ngClass"], [1, "lg-score-bar-wrap"], [1, "small", "fw-semibold", "mx-1"], [1, "lg-score-bar-track"], [1, "lg-score-bar-fill"], [1, "text-end", "fw-semibold", 2, "color", "#0ea5e9"], [1, "text-end", "fw-semibold", 2, "color", "#7c3aed"], [1, "text-end", "pe-4", "text-muted", "small"], ["colspan", "7"], [1, "ti", "ti-bulb-off"], ["type", "text", "placeholder", "ID de session\u2026", 1, "form-control", "lg-filter-input", 3, "ngModelChange", "ngModel"], [1, "lg-badge-model"], [1, "ti", "ti-robot", 2, "font-size", "10px"], [1, "text-muted", "small", 2, "max-width", "220px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis", 3, "title"], [1, "lg-latency", 3, "ngClass"], [1, "ti", "ti-robot-off"], [1, "lg-pagination", "d-flex", "justify-content-between", "align-items-center", "mt-2", "mb-4"], [1, "d-flex", "gap-2"], [1, "lg-page-btn", 3, "click", "disabled"], [1, "ti", "ti-chevron-left"], [1, "lg-page-btn", "lg-page-btn-next", 3, "click", "disabled"], [1, "ti", "ti-chevron-right"]],
      template: function AdminLogsComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "MongoDB");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "STREAMING");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Journal des activit\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Logs authentification \u00B7 Recommandations \u00B7 Sessions IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "div", 24)(30, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "small", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Entr\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 24)(36, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "small", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 24)(42, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "small", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Par page");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_Template_button_click_46_listener() {
            return ctx.loadMongoLogs();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 30)(50, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_Template_button_click_50_listener() {
            return ctx.onMongoKindChange("auth");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Authentification ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, AdminLogsComponent_span_53_Template, 2, 1, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_Template_button_click_54_listener() {
            return ctx.onMongoKindChange("recommendations");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Recommandations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, AdminLogsComponent_span_57_Template, 2, 1, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminLogsComponent_Template_button_click_58_listener() {
            return ctx.onMongoKindChange("ai");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Sessions IA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, AdminLogsComponent_span_61_Template, 2, 1, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, AdminLogsComponent_div_62_Template, 4, 0, "div", 36)(63, AdminLogsComponent_ng_container_63_Template, 35, 4, "ng-container", 37)(64, AdminLogsComponent_ng_container_64_Template, 33, 3, "ng-container", 37)(65, AdminLogsComponent_ng_container_65_Template, 35, 4, "ng-container", 37)(66, AdminLogsComponent_div_66_Template, 19, 5, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.mongoTotalElements);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.mongoTotalPages);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.mongoSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.mongoKind === "auth");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mongoKind === "auth");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.mongoKind === "recommendations");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mongoKind === "recommendations");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.mongoKind === "ai");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mongoKind === "ai");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mongoLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mongoLoading && ctx.mongoKind === "auth");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mongoLoading && ctx.mongoKind === "recommendations");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mongoLoading && ctx.mongoKind === "ai");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mongoLoading && ctx.mongoTotalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n.lg-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #020c18 0%, #0a1a2e 25%, #0d3a66 50%, #5625E8 75%, #0DCAF0 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_lg-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(86, 37, 232, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.lg-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(13, 202, 240, 0.12) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.lg-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.lg-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.lg-glow-1[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background: radial-gradient(circle, rgba(13, 202, 240, 0.22) 0%, transparent 70%);\n  top: -130px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_lg-float 7s ease-in-out infinite;\n}\n\n.lg-glow-2[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(86, 37, 232, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_lg-float 9s ease-in-out infinite reverse;\n}\n\n.lg-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.lg-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(13, 202, 240, 0.5);\n  animation: _ngcontent-%COMP%_lg-rotate 12s linear infinite;\n}\n\n.lg-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #0DCAF0, #38bdf8, #5625E8, #392C7D);\n}\n\n.lg-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18, #0d3a66);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.lg-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(13, 202, 240, 0.35);\n  animation: _ngcontent-%COMP%_lg-pulse 2.5s ease-out infinite;\n}\n\n.lg-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 16px;\n  padding: 10px 4px;\n}\n\n.lg-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 64px;\n}\n\n.lg-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.lg-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(13, 202, 240, 0.15);\n  border: 1px solid rgba(13, 202, 240, 0.3);\n  color: #a5f3fc;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.lg-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_lg-blink 1.2s ease-in-out infinite;\n}\n\n.lg-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n.lg-refresh[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.18);\n  border: 1.5px solid rgba(13, 202, 240, 0.35);\n  color: #a5f3fc;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n}\n.lg-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(13, 202, 240, 0.32);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(13, 202, 240, 0.25);\n}\n\n\n\n.lg-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.lg-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 22px;\n  border-radius: 50px;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s;\n  white-space: nowrap;\n}\n.lg-tab[_ngcontent-%COMP%]:hover {\n  border-color: #0ea5e9;\n  color: #0284c7;\n  background: #f0f9ff;\n}\n.lg-tab.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625E8, #392C7D);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(86, 37, 232, 0.3);\n}\n\n.lg-tab-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 4px;\n}\n\n\n\n.lg-filter-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.lg-filter-input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  font-size: 13px;\n  padding: 8px 14px;\n  transition: border 0.2s, box-shadow 0.2s;\n}\n.lg-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9;\n  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);\n  outline: none;\n}\n\n.lg-btn-filter[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #0369a1);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 9px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.22s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lg-btn-filter[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(14, 165, 233, 0.3);\n}\n\n\n\n.lg-thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);\n  border-bottom: 1px solid #bae6fd;\n}\n.lg-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #0369a1;\n}\n\n.lg-row[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.lg-row[_ngcontent-%COMP%]:hover {\n  background: #f0f9ff !important;\n}\n\n\n\n.lg-badge-provider[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  color: #0369a1;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n\n.lg-badge-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  color: #5b21b6;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 20px;\n}\n\n.lg-badge-model[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #0f172a;\n  color: #7dd3fc;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.lg-badge-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n}\n\n.lg-badge-gold[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  border: 1px solid #fde047;\n  color: #92400e;\n}\n\n.lg-badge-silver[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n}\n\n.lg-badge-bronze[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  color: #92400e;\n}\n\n\n\n.lg-score-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n}\n\n.lg-score-bar-track[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 6px;\n  border-radius: 4px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n\n.lg-score-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n\n\n.lg-latency[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  display: inline-block;\n}\n\n.lg-latency-fast[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #14532d;\n  border: 1px solid #bbf7d0;\n}\n\n.lg-latency-med[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #78350f;\n  border: 1px solid #fde68a;\n}\n\n.lg-latency-slow[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #7f1d1d;\n  border: 1px solid #fca5a5;\n}\n\n\n\n.lg-page-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 8px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.lg-page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #0ea5e9;\n  color: #0284c7;\n  background: #f0f9ff;\n}\n.lg-page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.lg-page-btn-next[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0ea5e9, #0369a1);\n  border-color: transparent;\n  color: #fff;\n}\n.lg-page-btn-next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #38bdf8, #0284c7);\n  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_lg-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_lg-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_lg-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_lg-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_lg-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.dark-mode[_nghost-%COMP%]   .lg-tab[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-tab[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.09);\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .lg-tab[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .lg-tab[_ngcontent-%COMP%]:hover {\n  border-color: #0ea5e9;\n  color: #38bdf8;\n  background: rgba(14, 165, 233, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .lg-filter-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-filter-input[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .lg-filter-input[_ngcontent-%COMP%]:focus, .dark-mode   [_nghost-%COMP%]   .lg-filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #0ea5e9;\n}\n.dark-mode[_nghost-%COMP%]   .lg-filter-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-filter-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .lg-thead[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(3, 105, 161, 0.07));\n  border-bottom-color: rgba(14, 165, 233, 0.18);\n}\n.dark-mode[_nghost-%COMP%]   .lg-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n}\n.dark-mode[_nghost-%COMP%]   .lg-row[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .lg-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.dark-mode[_nghost-%COMP%]   .lg-badge-provider[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-badge-provider[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.1);\n  border-color: rgba(14, 165, 233, 0.2);\n}\n.dark-mode[_nghost-%COMP%]   .lg-badge-type[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-badge-type[_ngcontent-%COMP%] {\n  background: rgba(91, 33, 182, 0.12);\n  border-color: rgba(91, 33, 182, 0.2);\n}\n.dark-mode[_nghost-%COMP%]   .lg-latency-fast[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-latency-fast[_ngcontent-%COMP%] {\n  background: rgba(20, 83, 45, 0.2);\n  border-color: rgba(20, 83, 45, 0.3);\n  color: #86efac;\n}\n.dark-mode[_nghost-%COMP%]   .lg-latency-med[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-latency-med[_ngcontent-%COMP%] {\n  background: rgba(120, 53, 15, 0.2);\n  border-color: rgba(120, 53, 15, 0.3);\n  color: #fde68a;\n}\n.dark-mode[_nghost-%COMP%]   .lg-latency-slow[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-latency-slow[_ngcontent-%COMP%] {\n  background: rgba(127, 29, 29, 0.2);\n  border-color: rgba(127, 29, 29, 0.3);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .lg-score-bar-track[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-score-bar-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_nghost-%COMP%]   .lg-page-btn[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .lg-page-btn[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .lg-page-btn[_ngcontent-%COMP%]:hover:not(:disabled), .dark-mode   [_nghost-%COMP%]   .lg-page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #0ea5e9;\n  color: #38bdf8;\n  background: rgba(14, 165, 233, 0.08);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4tbG9ncy9hZG1pbi1sb2dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7OzREQUFBO0FBS0E7RUFDRSxvR0FBQTtFQUNBLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3JCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQ3BCLCtCQUFBO0VBQ0Esd0ZBQUE7QUFHRjtBQUZFO0VBQVksV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFFBQUE7RUFBVSxvQkFBQTtFQUFzQixVQUFBO0VBQVksd0ZBQUE7RUFBc0YsMEJBQUE7QUFXakw7O0FBVEE7RUFBZ0Isa0JBQUE7RUFBb0IsVUFBQTtBQWNwQzs7QUFiQTtFQUFXLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLG9CQUFBO0FBbUJuRDs7QUFsQkE7RUFBYSxZQUFBO0VBQWMsYUFBQTtFQUFlLGlGQUFBO0VBQStFLFdBQUE7RUFBYSxTQUFBO0VBQVcsMkNBQUE7QUEyQmpKOztBQTFCQTtFQUFhLFlBQUE7RUFBYyxhQUFBO0VBQWUsZ0ZBQUE7RUFBOEUsYUFBQTtFQUFlLFFBQUE7RUFBVSxtREFBQTtBQW1Dako7O0FBbENBO0VBQWdCLGtCQUFBO0VBQW9CLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLFlBQUE7QUF5Q2pFOztBQXhDQTtFQUFnQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsNENBQUE7RUFBMEMsd0NBQUE7QUFnRC9HOztBQS9DQTtFQUFnQixrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFBb0IsdUVBQUE7QUFzRGxFOztBQXJEQTtFQUFnQixrQkFBQTtFQUFvQixVQUFBO0VBQVksa0JBQUE7RUFBb0IscURBQUE7RUFBdUQsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBK0QvSjs7QUE5REE7RUFBZ0Isa0JBQUE7RUFBb0IsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLDRDQUFBO0VBQTBDLDBDQUFBO0FBc0VoSDs7QUFyRUE7RUFBZSxxQ0FBQTtFQUFtQywyQkFBQTtFQUE2QixtQ0FBQTtFQUFxQywyQ0FBQTtFQUF5QyxtQkFBQTtFQUFxQixpQkFBQTtBQThFbEw7O0FBN0VBO0VBQWUsZUFBQTtFQUFpQixlQUFBO0FBa0ZoQzs7QUFqRkE7RUFBZSxVQUFBO0VBQVksWUFBQTtFQUFjLHFDQUFBO0FBdUZ6Qzs7QUF0RkE7RUFBVyxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0VBQVUsb0NBQUE7RUFBa0MseUNBQUE7RUFBdUMsY0FBQTtFQUFnQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixxQkFBQTtFQUFzQix5QkFBQTtFQUEyQixpQkFBQTtFQUFtQixtQkFBQTtBQXFHalE7O0FBcEdBO0VBQWUsVUFBQTtFQUFZLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQiw2Q0FBQTtBQTRHakY7O0FBM0dBO0VBQVcsb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsb0NBQUE7RUFBa0MsMENBQUE7RUFBd0MsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXNCLHlCQUFBO0VBQTJCLGlCQUFBO0VBQW1CLG1CQUFBO0FBeUhyUDs7QUF4SEE7RUFBYyxvQ0FBQTtFQUFrQyw0Q0FBQTtFQUEwQyxjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIscUJBQUE7QUFvSXhNO0FBcEk4TjtFQUFVLG9DQUFBO0VBQWtDLDJCQUFBO0VBQTZCLCtDQUFBO0FBeUl2Uzs7QUF2SUEsNERBQUE7QUFDQTtFQUFXLGFBQUE7RUFBZSxRQUFBO0VBQVUsZUFBQTtBQTZJcEM7O0FBNUlBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsa0JBQUE7RUFDM0MsbUJBQUE7RUFBcUIsMkJBQUE7RUFBNkIsZ0JBQUE7RUFDbEQsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixlQUFBO0VBQ3JELHFCQUFBO0VBQXNCLG1CQUFBO0FBdUp4QjtBQXRKRTtFQUFVLHFCQUFBO0VBQXVCLGNBQUE7RUFBZ0IsbUJBQUE7QUEySm5EO0FBMUpFO0VBQVcscURBQUE7RUFBdUQseUJBQUE7RUFBMkIsV0FBQTtFQUFhLDZDQUFBO0FBZ0s1Rzs7QUE5SkE7RUFBZSxxQ0FBQTtFQUFtQyxXQUFBO0VBQWEsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixnQkFBQTtBQXdLekk7O0FBdEtBLDREQUFBO0FBQ0E7RUFBbUIsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLHFCQUFBO0FBZ0x2STs7QUEvS0E7RUFBbUIsbUJBQUE7RUFBcUIsMkJBQUE7RUFBNkIsZUFBQTtFQUFpQixpQkFBQTtFQUFtQix3Q0FBQTtBQXVMekc7QUF2TGlKO0VBQVUscUJBQUE7RUFBdUIsOENBQUE7RUFBNEMsYUFBQTtBQTRMOU47O0FBM0xBO0VBQWlCLHFEQUFBO0VBQXVELFdBQUE7RUFBYSxZQUFBO0VBQWMsbUJBQUE7RUFBcUIsaUJBQUE7RUFBbUIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLHFCQUFBO0VBQXNCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtBQTBNelA7QUExTWtSO0VBQVUsMkJBQUE7RUFBNkIsOENBQUE7QUE4TXpUOztBQTVNQSw0REFBQTtBQUNBO0VBQ0UscURBQUE7RUFDQSxnQ0FBQTtBQStNRjtBQTlNRTtFQUFLLGlCQUFBO0VBQW1CLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHlCQUFBO0VBQTJCLHFCQUFBO0VBQXNCLGNBQUE7QUFzTmhIOztBQXBOQTtFQUFVLDRCQUFBO0FBd05WO0FBeE51QztFQUFVLDhCQUFBO0FBMk5qRDs7QUF6TkEsNERBQUE7QUFDQTtFQUFxQixvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0VBQVUsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLG1CQUFBO0VBQXFCLDBCQUFBO0FBdU9yTjs7QUF0T0E7RUFBcUIscUJBQUE7RUFBdUIsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQixtQkFBQTtBQWlQcEs7O0FBaFBBO0VBQXFCLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxtQkFBQTtFQUFxQixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsbUJBQUE7QUE0UHJLOztBQTNQQTtFQUFrQixxQkFBQTtFQUF1QixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQixtQkFBQTtFQUFxQix5QkFBQTtBQW9RdEg7O0FBblFBO0VBQW1CLG1CQUFBO0VBQXFCLHlCQUFBO0VBQTJCLGNBQUE7QUF5UW5FOztBQXhRQTtFQUFtQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQixjQUFBO0FBOFFuRTs7QUE3UUE7RUFBbUIsbUJBQUE7RUFBcUIseUJBQUE7RUFBMkIsY0FBQTtBQW1SbkU7O0FBalJBLDREQUFBO0FBQ0E7RUFBc0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHlCQUFBO0VBQTJCLFFBQUE7QUF3UnJGOztBQXZSQTtFQUFzQixXQUFBO0VBQWEsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLG1CQUFBO0VBQXFCLGdCQUFBO0FBK1J6Rjs7QUE5UkE7RUFBc0IsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLG1EQUFBO0FBb1N4RDs7QUFsU0EsNERBQUE7QUFDQTtFQUFtQixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQixtQkFBQTtFQUFxQixxQkFBQTtBQTBTaEc7O0FBelNBO0VBQW1CLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IseUJBQUE7QUErU3hEOztBQTlTQTtFQUFtQixtQkFBQTtFQUFxQixjQUFBO0VBQWdCLHlCQUFBO0FBb1R4RDs7QUFuVEE7RUFBbUIsbUJBQUE7RUFBcUIsY0FBQTtFQUFnQix5QkFBQTtBQXlUeEQ7O0FBdlRBLDREQUFBO0FBRUE7RUFBZSxnQkFBQTtFQUFrQiwyQkFBQTtFQUE2QixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixvQkFBQTtFQUFxQixvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixRQUFBO0FBcVUxTztBQXJVb1A7RUFBeUIscUJBQUE7RUFBdUIsY0FBQTtFQUFnQixtQkFBQTtBQTBVcFQ7QUExVTJVO0VBQWEsWUFBQTtFQUFjLG1CQUFBO0FBOFV0Vzs7QUE3VUE7RUFBb0IscURBQUE7RUFBdUQseUJBQUE7RUFBMkIsV0FBQTtBQW1WdEc7QUFuVm1IO0VBQXlCLHFEQUFBO0VBQXVELDhDQUFBO0FBdVZuTTs7QUFyVkEsNERBQUE7QUFDQTtFQUF3QjtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQTJWekM7RUEzVndFO0lBQUssVUFBQTtJQUFZLGVBQUE7RUErVnpGO0FBQ0Y7QUEvVkE7RUFBd0I7SUFBVSx3QkFBQTtFQW1XaEM7RUFuVzREO0lBQU0sNEJBQUE7RUFzV2xFO0FBQ0Y7QUF0V0E7RUFBd0I7SUFBSyx5QkFBQTtFQTBXM0I7QUFDRjtBQTFXQTtFQUF3QjtJQUFLLG1CQUFBO0lBQXFCLFlBQUE7RUErV2hEO0VBL1crRDtJQUFPLHNCQUFBO0lBQXdCLFVBQUE7RUFtWDlGO0FBQ0Y7QUFuWEE7RUFBd0I7SUFBVSxVQUFBO0VBdVhoQztFQXZYOEM7SUFBTSxZQUFBO0VBMFhwRDtBQUNGO0FBdlhFO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7QUF5WEo7QUF4WEk7RUFBVSxxQkFBQTtFQUF1QixjQUFBO0VBQWdCLG9DQUFBO0FBNlhyRDtBQTNYRTtFQUNFLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FBNlhKO0FBNVhJO0VBQVUscUJBQUE7QUErWGQ7QUE3WEU7RUFBbUIsY0FBQTtBQWdZckI7QUEvWEU7RUFDRSxxRkFBQTtFQUNBLDZDQUFBO0FBaVlKO0FBaFlJO0VBQUssY0FBQTtBQW1ZVDtBQWpZRTtFQUFnQixnREFBQTtBQW9ZbEI7QUFuWUU7RUFBcUIsbUNBQUE7RUFBaUMscUNBQUE7QUF1WXhEO0FBdFlFO0VBQXFCLG1DQUFBO0VBQWlDLG9DQUFBO0FBMFl4RDtBQXpZRTtFQUFtQixpQ0FBQTtFQUErQixtQ0FBQTtFQUFpQyxjQUFBO0FBOFlyRjtBQTdZRTtFQUFtQixrQ0FBQTtFQUFnQyxvQ0FBQTtFQUFrQyxjQUFBO0FBa1p2RjtBQWpaRTtFQUFtQixrQ0FBQTtFQUFnQyxvQ0FBQTtFQUFrQyxjQUFBO0FBc1p2RjtBQXJaRTtFQUFzQixvQ0FBQTtBQXdaeEI7QUF2WkU7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQXlaSjtBQXhaSTtFQUF5QixxQkFBQTtFQUF1QixjQUFBO0VBQWdCLG9DQUFBO0FBNlpwRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQWRtaW4gTG9ncyDDosKAwpQgVGVybWluYWwgRGFyayBEZXNpZ25cbiAgIFByaW1hcnk6ICMwZWE1ZTkgKFNreS9DeWFuKSBvbiAjMGMwZDBmIGRhcmtcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4ubGctaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMjBjMTggMCUsICMwYTFhMmUgMjUlLCAjMGQzYTY2IDUwJSwgIzU2MjVFOCA3NSUsICMwRENBRjAgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDI4cHggMjhweCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogbGctZmFkZS1pbiAuNXMgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSg4NiwzNywyMzIsLjM1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4wOCk7XG4gICY6OmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogMDsgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMywyMDIsMjQwLC4xMikgMXB4LCB0cmFuc3BhcmVudCAxcHgpOyBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDsgfVxufVxuLmxnLWhlcm8tYm9keSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgfVxuLmxnLWdsb3cgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDUwJTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5sZy1nbG93LTEgeyB3aWR0aDogMzgwcHg7IGhlaWdodDogMzgwcHg7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTMsMjAyLDI0MCwuMjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpOyB0b3A6IC0xMzBweDsgcmlnaHQ6IDIlOyBhbmltYXRpb246IGxnLWZsb2F0IDdzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XG4ubGctZ2xvdy0yIHsgd2lkdGg6IDI0MHB4OyBoZWlnaHQ6IDI0MHB4OyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDg2LDM3LDIzMiwuMTUpIDAlLCB0cmFuc3BhcmVudCA3MCUpOyBib3R0b206IC03MHB4OyBsZWZ0OiA1JTsgYW5pbWF0aW9uOiBsZy1mbG9hdCA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSByZXZlcnNlOyB9XG4ubGctYXYtd3JhcCAgIHsgcG9zaXRpb246IHJlbGF0aXZlOyBmbGV4LXNocmluazogMDsgd2lkdGg6IDY4cHg7IGhlaWdodDogNjhweDsgfVxuLmxnLWF2LXJpbmcgICB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IC04cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAxLjVweCBkYXNoZWQgcmdiYSgxMywyMDIsMjQwLC41KTsgYW5pbWF0aW9uOiBsZy1yb3RhdGUgMTJzIGxpbmVhciBpbmZpbml0ZTsgfVxuLmxnLWF2LWJvcmRlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBEQ0FGMCwgIzM4YmRmOCwgIzU2MjVFOCwgIzM5MkM3RCk7IH1cbi5sZy1hdi1jaXJjbGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAyMGMxOCwgIzBkM2E2Nik7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4ubGctYXYtcHVsc2UgIHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDEzLDIwMiwyNDAsLjM1KTsgYW5pbWF0aW9uOiBsZy1wdWxzZSAyLjVzIGVhc2Utb3V0IGluZmluaXRlOyB9XG4ubGctZ2xhc3MgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNyk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjEyKTsgYm9yZGVyLXJhZGl1czogMTZweDsgcGFkZGluZzogMTBweCA0cHg7IH1cbi5sZy1zdGF0ICAgICB7IHBhZGRpbmc6IDAgMTRweDsgbWluLXdpZHRoOiA2NHB4OyB9XG4ubGctc3RhdC1kaXYgeyB3aWR0aDogMXB4OyBoZWlnaHQ6IDMycHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTsgfVxuLmxnLWxpdmUgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IGJhY2tncm91bmQ6IHJnYmEoMTMsMjAyLDI0MCwuMTUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzLDIwMiwyNDAsLjMpOyBjb2xvcjogI2E1ZjNmYzsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC41cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4ubGctbGl2ZS1kb3QgeyB3aWR0aDogN3B4OyBoZWlnaHQ6IDdweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjNGFkZTgwOyBhbmltYXRpb246IGxnLWJsaW5rIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cbi5sZy1jaGlwIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAuN3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBwYWRkaW5nOiA0cHggMTJweDsgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuLmxnLXJlZnJlc2ggeyBiYWNrZ3JvdW5kOiByZ2JhKDEzLDIwMiwyNDAsLjE4KTsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDEzLDIwMiwyNDAsLjM1KTsgY29sb3I6ICNhNWYzZmM7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNjAwOyBwYWRkaW5nOiA4cHggMThweDsgYm9yZGVyLXJhZGl1czogMjRweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjIyczsgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTMsMjAyLDI0MCwuMzIpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMywyMDIsMjQwLC4yNSk7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgVGFiIE5hdmlnYXRpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubGctdGFicyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBmbGV4LXdyYXA6IHdyYXA7IH1cbi5sZy10YWIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMTBweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4OyBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7IGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDEzLjVweDsgZm9udC13ZWlnaHQ6IDYwMDsgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjIyczsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogIzBlYTVlOTsgY29sb3I6ICMwMjg0Yzc7IGJhY2tncm91bmQ6ICNmMGY5ZmY7IH1cbiAgJi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTYyNUU4LCAjMzkyQzdEKTsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgY29sb3I6ICNmZmY7IGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSg4NiwzNywyMzIsLjMpOyB9XG59XG4ubGctdGFiLXBpbGwgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDFweCA4cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IG1hcmdpbi1sZWZ0OiA0cHg7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEZpbHRlciBSb3cgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubGctZmlsdGVyLWxhYmVsIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTEuNXB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY0NzQ4YjsgbWFyZ2luLWJvdHRvbTogNHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjRweDsgfVxuLmxnLWZpbHRlci1pbnB1dCB7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogMS41cHggc29saWQgI2UyZThmMDsgZm9udC1zaXplOiAxM3B4OyBwYWRkaW5nOiA4cHggMTRweDsgdHJhbnNpdGlvbjogYm9yZGVyIC4ycywgYm94LXNoYWRvdyAuMnM7ICY6Zm9jdXMgeyBib3JkZXItY29sb3I6ICMwZWE1ZTk7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE0LDE2NSwyMzMsLjEyKTsgb3V0bGluZTogbm9uZTsgfSB9XG4ubGctYnRuLWZpbHRlciB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZWE1ZTksICMwMzY5YTEpOyBjb2xvcjogI2ZmZjsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA5cHggMThweDsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAuMjJzOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgJjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDE0LDE2NSwyMzMsLjMpOyB9IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFRhYmxlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5sZy10aGVhZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGY5ZmYsICNlMGYyZmUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JhZTZmZDtcbiAgdGggeyBwYWRkaW5nOiAxMnB4IDhweDsgZm9udC1zaXplOiAxMS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuNHB4OyBjb2xvcjogIzAzNjlhMTsgfVxufVxuLmxnLXJvdyB7IHRyYW5zaXRpb246IGJhY2tncm91bmQgLjE1czsgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmMGY5ZmYgIWltcG9ydGFudDsgfSB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBCYWRnZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubGctYmFkZ2UtcHJvdmlkZXIgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IGJhY2tncm91bmQ6ICNmMGY5ZmY7IGJvcmRlcjogMXB4IHNvbGlkICNiYWU2ZmQ7IGNvbG9yOiAjMDM2OWExOyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuLmxnLWJhZGdlLXR5cGUgICAgIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kOiAjZjVmM2ZmOyBib3JkZXI6IDFweCBzb2xpZCAjZGRkNmZlOyBjb2xvcjogIzViMjFiNjsgZm9udC1zaXplOiAxMC41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IHBhZGRpbmc6IDJweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4ubGctYmFkZ2UtbW9kZWwgICAgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IGJhY2tncm91bmQ6ICMwZjE3MmE7IGNvbG9yOiAjN2RkM2ZjOyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG4ubGctYmFkZ2UtYmFkZ2UgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTAuNXB4OyBmb250LXdlaWdodDogNzAwOyBwYWRkaW5nOiAycHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuLmxnLWJhZGdlLWdvbGQgICB7IGJhY2tncm91bmQ6ICNmZWY5YzM7IGJvcmRlcjogMXB4IHNvbGlkICNmZGUwNDc7IGNvbG9yOiAjOTI0MDBlOyB9XG4ubGctYmFkZ2Utc2lsdmVyIHsgYmFja2dyb3VuZDogI2YxZjVmOTsgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTsgY29sb3I6ICM0NzU1Njk7IH1cbi5sZy1iYWRnZS1icm9uemUgeyBiYWNrZ3JvdW5kOiAjZmZmN2VkOyBib3JkZXI6IDFweCBzb2xpZCAjZmVkN2FhOyBjb2xvcjogIzkyNDAwZTsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU2NvcmUgQmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmxnLXNjb3JlLWJhci13cmFwICB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IGdhcDogNHB4OyB9XG4ubGctc2NvcmUtYmFyLXRyYWNrIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJhY2tncm91bmQ6ICNlMmU4ZjA7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5sZy1zY29yZS1iYXItZmlsbCAgeyBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDRweDsgdHJhbnNpdGlvbjogd2lkdGggLjZzIGN1YmljLWJlemllciguNCwwLC4yLDEpOyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBMYXRlbmN5IEJhZGdlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmxnLWxhdGVuY3kgICAgICB7IGZvbnQtc2l6ZTogMTEuNXB4OyBmb250LXdlaWdodDogNjAwOyBwYWRkaW5nOiAycHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4ubGctbGF0ZW5jeS1mYXN0IHsgYmFja2dyb3VuZDogI2RjZmNlNzsgY29sb3I6ICMxNDUzMmQ7IGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7IH1cbi5sZy1sYXRlbmN5LW1lZCAgeyBiYWNrZ3JvdW5kOiAjZmVmM2M3OyBjb2xvcjogIzc4MzUwZjsgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTsgfVxuLmxnLWxhdGVuY3ktc2xvdyB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjN2YxZDFkOyBib3JkZXI6IDFweCBzb2xpZCAjZmNhNWE1OyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdpbmF0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmxnLXBhZ2luYXRpb24geyB9XG4ubGctcGFnZS1idG4geyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7IGNvbG9yOiAjNDc1NTY5OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmc6IDhweCAxNnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAuMnM7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJvcmRlci1jb2xvcjogIzBlYTVlOTsgY29sb3I6ICMwMjg0Yzc7IGJhY2tncm91bmQ6ICNmMGY5ZmY7IH0gJjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNDsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfSB9XG4ubGctcGFnZS1idG4tbmV4dCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZWE1ZTksICMwMzY5YTEpOyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyBjb2xvcjogI2ZmZjsgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzOGJkZjgsICMwMjg0YzcpOyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTQsMTY1LDIzMywuMyk7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQW5pbWF0aW9ucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBrZXlmcmFtZXMgbGctZmFkZS1pbiB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG5vbmU7IH0gfVxuQGtleWZyYW1lcyBsZy1mbG9hdCAgIHsgMCUsMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpOyB9IH1cbkBrZXlmcmFtZXMgbGctcm90YXRlICB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5Aa2V5ZnJhbWVzIGxnLXB1bHNlICAgeyAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IC42OyB9IDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuNTUpOyBvcGFjaXR5OiAwOyB9IH1cbkBrZXlmcmFtZXMgbGctYmxpbmsgICB7IDAlLDEwMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IC40OyB9IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIERBUksgTU9ERSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0LWNvbnRleHQoLmRhcmstbW9kZSkge1xuICAubGctdGFiIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTJiO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDkpO1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICY6aG92ZXIgeyBib3JkZXItY29sb3I6ICMwZWE1ZTk7IGNvbG9yOiAjMzhiZGY4OyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsLjA4KTsgfVxuICB9XG4gIC5sZy1maWx0ZXItaW5wdXQge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmI7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgICBjb2xvcjogI2UyZThmMDtcbiAgICAmOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjMGVhNWU5OyB9XG4gIH1cbiAgLmxnLWZpbHRlci1sYWJlbCB7IGNvbG9yOiAjOTRhM2I4OyB9XG4gIC5sZy10aGVhZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNCwxNjUsMjMzLC4xKSwgcmdiYSgzLDEwNSwxNjEsLjA3KSk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxNCwxNjUsMjMzLC4xOCk7XG4gICAgdGggeyBjb2xvcjogIzdkZDNmYzsgfVxuICB9XG4gIC5sZy1yb3c6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNCkgIWltcG9ydGFudDsgfVxuICAubGctYmFkZ2UtcHJvdmlkZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LDE2NSwyMzMsLjEpOyBib3JkZXItY29sb3I6IHJnYmEoMTQsMTY1LDIzMywuMik7IH1cbiAgLmxnLWJhZGdlLXR5cGUgICAgIHsgYmFja2dyb3VuZDogcmdiYSg5MSwzMywxODIsLjEyKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDkxLDMzLDE4MiwuMik7IH1cbiAgLmxnLWxhdGVuY3ktZmFzdCB7IGJhY2tncm91bmQ6IHJnYmEoMjAsODMsNDUsLjIpOyBib3JkZXItY29sb3I6IHJnYmEoMjAsODMsNDUsLjMpOyBjb2xvcjogIzg2ZWZhYzsgfVxuICAubGctbGF0ZW5jeS1tZWQgIHsgYmFja2dyb3VuZDogcmdiYSgxMjAsNTMsMTUsLjIpOyBib3JkZXItY29sb3I6IHJnYmEoMTIwLDUzLDE1LC4zKTsgY29sb3I6ICNmZGU2OGE7IH1cbiAgLmxnLWxhdGVuY3ktc2xvdyB7IGJhY2tncm91bmQ6IHJnYmEoMTI3LDI5LDI5LC4yKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDEyNywyOSwyOSwuMyk7IGNvbG9yOiAjZmNhNWE1OyB9XG4gIC5sZy1zY29yZS1iYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTsgfVxuICAubGctcGFnZS1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmI7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgICBjb2xvcjogIzk0YTNiODtcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYm9yZGVyLWNvbG9yOiAjMGVhNWU5OyBjb2xvcjogIzM4YmRmODsgYmFja2dyb3VuZDogcmdiYSgxNCwxNjUsMjMzLC4wOCk7IH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AdminLogsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=6198.js.map