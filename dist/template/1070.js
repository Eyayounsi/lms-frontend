"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[1070],{

/***/ 21070:
/*!*************************************************************!*\
  !*** ./src/app/features/layouts/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _footer_top_container_footer_top_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-top-container/footer-top-container.component */ 92160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/common/common.service */ 89544);









function FooterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-footer-top-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FooterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    common;
    router;
    base = '';
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
    currentUrl = '';
    routerSub;
    constructor(common, router) {
      this.common = common;
      this.router = router;
      this.common.base.subscribe(res => {
        this.base = res;
      });
      this.currentUrl = this.router.url || '';
      this.routerSub = this.router.events.subscribe(event => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects || event.url || '';
        }
      });
    }
    get showFullFooter() {
      const isIndex = this.currentUrl === '/index' || this.currentUrl.startsWith('/index?');
      return isIndex;
    }
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_0__.init({
        duration: 1500,
        once: true
      });
    }
    ngOnDestroy() {
      if (this.routerSub) {
        this.routerSub.unsubscribe();
      }
    }
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 21,
      vars: 14,
      consts: [[1, "footer", "footer-one"], ["class", "footer-top aos", "data-aos", "fade-up", "data-aos-duration", "1500", 4, "ngIf"], [1, "footer-bottom"], [1, "container"], [1, "row", "row-gap-2", "align-items-center"], [1, "text-secondary"], [3, "routerLink"], ["class", "col-lg-3", 4, "ngIf"], ["data-aos", "fade-up", "data-aos-duration", "1500", 1, "footer-top", "aos"], [1, "col-lg-3"], [1, "social-icon"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div")(7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Copyright 2025 \u00A9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "DreamsLMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, ". Tous droits r\u00E9serv\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div")(13, "ul")(14, "li")(15, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Conditions d'utilisation");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li")(18, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Politique de confidentialit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, FooterComponent_div_20_Template, 12, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("footer-compact", !ctx.showFullFooter);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFullFooter);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.showFullFooter ? "col-lg-5" : "col-lg-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.showFullFooter ? "text-center text-lg-start" : "text-center text-lg-start mb-1 mb-lg-0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.showFullFooter ? "col-lg-4" : "col-lg-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.showFullFooter ? "d-flex align-items-center justify-content-center footer-link" : "d-flex align-items-center justify-content-center justify-content-lg-end footer-link mb-0");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.page_term_condition);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.page_privacy_policy);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFullFooter);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _footer_top_container_footer_top_container_component__WEBPACK_IMPORTED_MODULE_5__.FooterTopContainerComponent],
      styles: [".footer.footer-one.footer-compact[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-top: 1px solid #ececf5;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5625e8 0%, #6f36ea 100%);\n  padding: 14px 0;\n  margin-top: 0;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: #ffd8ff !important;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  gap: 1.1rem;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]::before {\n  content: \"|\";\n  position: absolute;\n  left: -0.65rem;\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f5e9ff;\n}\n\n@media (max-width: 991.98px) {\n  .footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n    padding: 12px 0;\n  }\n  .footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .footer.footer-one.footer-compact[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSw2QkFBQTtBQUNEOztBQUVBO0VBQ0MsNkRBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNEOztBQUVBOztFQUVDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLFNBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFDRDs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EscUJBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDO0lBQ0MsZUFBQTtFQUNBO0VBRUQ7SUFDQyxrQkFBQTtFQUFBO0VBR0Q7SUFDQyxrQ0FBQTtFQURBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLmZvb3Rlci1vbmUuZm9vdGVyLWNvbXBhY3Qge1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlY2VjZjU7XHJcbn1cclxuXHJcbi5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWJvdHRvbSB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2MjVlOCAwJSwgIzZmMzZlYSAxMDAlKTtcclxuXHRwYWRkaW5nOiAxNHB4IDA7XHJcblx0bWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmZvb3Rlci5mb290ZXItb25lLmZvb3Rlci1jb21wYWN0IC5mb290ZXItYm90dG9tIHAsXHJcbi5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWJvdHRvbSAuZm9vdGVyLWxpbmsgYSB7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWJvdHRvbSBwIHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmZvb3Rlci5mb290ZXItb25lLmZvb3Rlci1jb21wYWN0IC5mb290ZXItYm90dG9tIC50ZXh0LXNlY29uZGFyeSB7XHJcblx0Y29sb3I6ICNmZmQ4ZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3Rlci5mb290ZXItb25lLmZvb3Rlci1jb21wYWN0IC5mb290ZXItbGluayB7XHJcblx0Z2FwOiAxLjFyZW07XHJcbn1cclxuXHJcbi5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWxpbmsgbGkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvb3Rlci5mb290ZXItb25lLmZvb3Rlci1jb21wYWN0IC5mb290ZXItbGluayBsaSArIGxpOjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICd8JztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogLTAuNjVyZW07XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbn1cclxuXHJcbi5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWxpbmsgYSB7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWxpbmsgYTpob3ZlciB7XHJcblx0Y29sb3I6ICNmNWU5ZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG5cdC5mb290ZXIuZm9vdGVyLW9uZS5mb290ZXItY29tcGFjdCAuZm9vdGVyLWJvdHRvbSB7XHJcblx0XHRwYWRkaW5nOiAxMnB4IDA7XHJcblx0fVxyXG5cclxuXHQuZm9vdGVyLmZvb3Rlci1vbmUuZm9vdGVyLWNvbXBhY3QgLmZvb3Rlci1ib3R0b20gLnJvdyB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZm9vdGVyLmZvb3Rlci1vbmUuZm9vdGVyLWNvbXBhY3QgLmZvb3Rlci1saW5rIHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return FooterComponent;
})();

/***/ }),

/***/ 89544:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/common/common.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);


let CommonService = /*#__PURE__*/(() => {
  class CommonService {
    base = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    page = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    last = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    isuserHeader = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    isAdminHeader = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    isstudentHeader = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    mainFooter = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    static ɵfac = function CommonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommonService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
  }
  return CommonService;
})();

/***/ }),

/***/ 92160:
/*!************************************************************************************************!*\
  !*** ./src/app/features/layouts/footer/footer-top-container/footer-top-container.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterTopContainerComponent: () => (/* binding */ FooterTopContainerComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let FooterTopContainerComponent = /*#__PURE__*/(() => {
  class FooterTopContainerComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function FooterTopContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterTopContainerComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FooterTopContainerComponent,
      selectors: [["app-footer-top-container"]],
      decls: 89,
      vars: 10,
      consts: [[1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo-white.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-5"], [1, "col-lg-4", "col-md-4"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-3"], [1, "footer-widget", "footer-contact"], [1, "footer-newsletter"], ["action", "javascript:void(0);"], [1, "subscribe-form"], [1, "isax", "isax-message-text"], ["type", "email", "placeholder", "Adresse e-mail", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "btn-xl", "w-100"]],
      template: function FooterTopContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Plateforme con\u00E7ue pour aider les organisations, les formateurs et les apprenants \u00E0 g\u00E9rer, diffuser et suivre les activit\u00E9s de formation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "div", 1)(15, "div", 12)(16, "div", 13)(17, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ul")(20, "li")(21, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Formations");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cr\u00E9er un compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li")(27, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "V\u00E9rifier un certificat");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li")(30, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Contacter le support");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li")(33, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 12)(36, "div", 13)(37, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u00C0 propos");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ul")(40, "li")(41, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li")(44, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "li")(47, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Qui sommes-nous");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li")(50, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li")(53, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 12)(56, "div", 13)(57, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Liens utiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul")(60, "li")(61, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Nos valeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li")(64, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Notre \u00E9quipe");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "li")(67, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Nos partenaires");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "li")(70, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Devenir partenaire");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li")(73, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Nous rejoindre");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 16)(76, "div", 17)(77, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Newsletter");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 18)(80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Inscrivez-vous pour recevoir nos actualit\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "form", 19)(83, "div", 20)(84, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "S'abonner");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseListPublic);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.verifyCertificate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.contactUs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.aboutUs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_faq);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.contactUs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FooterTopContainerComponent;
})();

/***/ })

}]);
//# sourceMappingURL=1070.js.map