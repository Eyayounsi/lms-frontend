"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5719],{

/***/ 95719:
/*!*******************************************************************!*\
  !*** ./src/app/auth/session-expired/session-expired.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionExpiredComponent: () => (/* binding */ SessionExpiredComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/auth/auth.service */ 34530);



let SessionExpiredComponent = /*#__PURE__*/(() => {
  class SessionExpiredComponent {
    authService;
    countdown = 5;
    progressPct = 100;
    tickInterval = null;
    endTimeout = null;
    startedAt = 0;
    totalMs = 5000;
    constructor(authService) {
      this.authService = authService;
    }
    ngOnInit() {
      this.startedAt = Date.now();
      this.tickInterval = setInterval(() => {
        const elapsed = Date.now() - this.startedAt;
        const remainingMs = Math.max(0, this.totalMs - elapsed);
        this.progressPct = Math.ceil(remainingMs / this.totalMs * 100);
        this.countdown = Math.max(0, Math.ceil(remainingMs / 1000));
      }, 120);
      this.endTimeout = setTimeout(() => {
        this.confirmLogout();
      }, this.totalMs);
    }
    ngOnDestroy() {
      if (this.tickInterval) {
        clearInterval(this.tickInterval);
        this.tickInterval = null;
      }
      if (this.endTimeout) {
        clearTimeout(this.endTimeout);
        this.endTimeout = null;
      }
    }
    confirmLogout() {
      console.log('🔴 session-expired.component - user confirmed logout or timer expired');
      this.ngOnDestroy();
      this.authService.completeMandatoryLogout();
    }
    static ɵfac = function SessionExpiredComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SessionExpiredComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SessionExpiredComponent,
      selectors: [["app-session-expired"]],
      decls: 19,
      vars: 4,
      consts: [[1, "session-expired-wrap", "d-flex", "align-items-center", "justify-content-center", "min-vh-100"], [1, "session-expired-card", "p-4", "p-md-5"], [1, "d-flex", "align-items-center", "mb-3"], [1, "session-expired-icon", "me-3"], [1, "mb-1"], [1, "mb-0", "text-muted"], [1, "mb-2"], ["role", "progressbar", "aria-label", "Logout countdown", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "mb-4"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], ["type", "button", 1, "btn", "btn-dark", "w-100", 3, "click"]],
      template: function SessionExpiredComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](5, "div")(6, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Session expiree");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](8, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Votre session a depasse la duree autorisee.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Redirection vers la connexion dans ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomListener"]("click", function SessionExpiredComponent_Template_button_click_17_listener() {
            return ctx.confirmLogout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Se deconnecter maintenant ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.countdown, "s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.progressPct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.progressPct, "%");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: [".session-expired-wrap[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at top, #f3f6ff 0%, #eef1f9 45%, #e8edf7 100%);\n}\n\n.session-expired-card[_ngcontent-%COMP%] {\n  width: min(92vw, 460px);\n  background: #fff;\n  border: 1px solid #e6eaf2;\n  border-radius: 16px;\n  box-shadow: 0 20px 40px rgba(20, 31, 66, 0.08);\n}\n\n.session-expired-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  color: #8a2d2d;\n  background: #fde9e9;\n  border: 1px solid #f5c6c6;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 9px;\n  border-radius: 999px;\n  background: #ecf0f7;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #ff7a59 0%, #ff4d6d 100%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9zZXNzaW9uLWV4cGlyZWQvc2Vzc2lvbi1leHBpcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUZBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNERBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLWV4cGlyZWQtd3JhcCB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AsICNmM2Y2ZmYgMCUsICNlZWYxZjkgNDUlLCAjZThlZGY3IDEwMCUpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi1leHBpcmVkLWNhcmQge1xyXG4gIHdpZHRoOiBtaW4oOTJ2dywgNDYwcHgpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZWFmMjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMjAsIDMxLCA2NiwgMC4wOCk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLWV4cGlyZWQtaWNvbiB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzhhMmQyZDtcclxuICBiYWNrZ3JvdW5kOiAjZmRlOWU5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2YzY7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgaGVpZ2h0OiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogI2VjZjBmNztcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY3YTU5IDAlLCAjZmY0ZDZkIDEwMCUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return SessionExpiredComponent;
})();

/***/ })

}]);
//# sourceMappingURL=5719.js.map