"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[218],{

/***/ 45966:
/*!********************************************************************************!*\
  !*** ./src/app/features/admin/common/admin-sidebar/admin-sidebar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSidebarComponent: () => (/* binding */ AdminSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/auth/auth.service */ 34530);





let AdminSidebarComponent = /*#__PURE__*/(() => {
  class AdminSidebarComponent {
    authService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    userName = localStorage.getItem('fullName') || 'Admin';
    nameSub;
    constructor(authService) {
      this.authService = authService;
    }
    ngOnInit() {
      this.nameSub = this.authService.currentFullName$.subscribe(name => {
        if (name) this.userName = name;
      });
    }
    ngOnDestroy() {
      this.nameSub?.unsubscribe();
    }
    onLogout() {
      this.authService.logout();
    }
    static ɵfac = function AdminSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AdminSidebarComponent,
      selectors: [["app-admin-sidebar"]],
      decls: 84,
      vars: 10,
      consts: [[1, "adm-sidebar"], [1, "adm-profile-card"], [1, "adm-profile-glow"], [1, "d-flex", "align-items-center", "gap-3", "position-relative"], [1, "adm-profile-shield-wrap"], [1, "adm-profile-shield-ring"], [1, "adm-profile-shield-box"], [1, "ti", "ti-shield-check", "adm-profile-shield-icon"], [1, "adm-profile-shield-pulse"], [1, "overflow-hidden"], [1, "mb-0", "fw-bold", "text-truncate", 2, "max-width", "140px", "font-size", "14px", "color", "#1e293b"], [1, "adm-role-badge"], [1, "ti", "ti-shield-half", "me-1", 2, "font-size", "9px"], [1, "adm-nav-section"], [1, "adm-nav-label"], [1, "adm-nav-list"], ["routerLinkActive", "adm-active", 1, "adm-nav-item", 3, "routerLink"], [1, "adm-nav-ico", "adm-ico-blue"], [1, "ti", "ti-layout-dashboard"], [1, "adm-nav-text"], [1, "adm-nav-ico", "adm-ico-sky"], [1, "ti", "ti-users"], [1, "adm-nav-ico", "adm-ico-amber"], [1, "ti", "ti-school"], [1, "adm-nav-ico", "adm-ico-teal"], [1, "ti", "ti-category"], [1, "adm-nav-ico", "adm-ico-rose"], [1, "ti", "ti-news"], [1, "adm-nav-ico", "adm-ico-orange"], [1, "ti", "ti-headset"], [1, "adm-nav-ico", "adm-ico-green"], [1, "ti", "ti-transfer"], [1, "adm-nav-ico", "adm-ico-indigo"], [1, "ti", "ti-brain"], [1, "adm-nav-divider"], [1, "adm-nav-ico", "adm-ico-secondary"], [1, "ti", "ti-user-circle"], ["href", "javascript:void(0)", 1, "adm-nav-item", "adm-nav-item-danger", 3, "click"], [1, "adm-nav-ico", "adm-ico-danger"], [1, "ti", "ti-logout-2"]],
      template: function AdminSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9)(10, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Administrateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13)(16, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Menu Principal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 15)(19, "li")(20, "a", 16)(21, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Tableau de bord");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li")(26, "a", 16)(27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Gestion des Utilisateurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li")(32, "a", 16)(33, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Gestion des Cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li")(38, "a", 16)(39, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li")(44, "a", 16)(45, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Gestion Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li")(50, "a", 16)(51, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Support Tickets");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li")(56, "a", 16)(57, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Virements");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "li")(62, "a", 16)(63, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Analytics IA");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 13)(69, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "ul", 15)(72, "li")(73, "a", 16)(74, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Mon Profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "li")(79, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminSidebarComponent_Template_a_click_79_listener() {
            return ctx.onLogout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_users);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_courses);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_blog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_tickets);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.admin_payouts);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.adminAnalytics);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.adminSettings);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.adm-sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #EDEAF8;\n  overflow: hidden;\n  padding-bottom: 8px;\n  box-shadow: 0 4px 24px rgba(57, 44, 125, 0.07);\n}\n\n\n\n.adm-profile-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);\n  border-bottom: 1px solid #e0e7ff;\n  padding: 20px 18px 18px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n\n.adm-profile-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.adm-profile-shield-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n\n.adm-profile-shield-ring[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(253, 57, 149, 0.12), rgba(2, 168, 181, 0.08));\n  border: 2px solid rgba(253, 57, 149, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 2;\n}\n\n.adm-profile-shield-box[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #FD3995, #9b59b6, #5625E8, #02a8b5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 3px 12px rgba(253, 57, 149, 0.35);\n}\n\n.adm-profile-shield-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n}\n\n.adm-profile-shield-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  border: 2px solid rgba(253, 57, 149, 0.2);\n  animation: _ngcontent-%COMP%_adm-sb-pulse 2.2s ease-out infinite;\n  z-index: 1;\n}\n\n\n\n.adm-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(253, 57, 149, 0.08);\n  border: 1px solid rgba(253, 57, 149, 0.2);\n  color: #9b59b6;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  padding: 2px 8px;\n  border-radius: 20px;\n  margin-top: 3px;\n}\n\n\n\n.adm-nav-section[_ngcontent-%COMP%] {\n  padding: 10px 12px 4px;\n}\n\n.adm-nav-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  color: #9ca3af;\n  padding: 0 6px;\n  margin-bottom: 6px;\n}\n\n.adm-nav-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #F4F0FF;\n  margin: 4px 12px;\n}\n\n\n\n.adm-nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n\n\n.adm-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: 10px;\n  text-decoration: none !important;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.18s ease;\n  position: relative;\n}\n.adm-nav-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 0;\n  border-radius: 0 3px 3px 0;\n  background: currentColor;\n  transition: height 0.18s ease;\n}\n.adm-nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n  color: inherit;\n}\n.adm-nav-item[_ngcontent-%COMP%]:hover::before {\n  height: 60%;\n}\n.adm-nav-item[_ngcontent-%COMP%]:hover   .adm-nav-ico[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n  filter: brightness(1.1);\n}\n.adm-nav-item.adm-active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  font-weight: 600;\n}\n.adm-nav-item.adm-active[_ngcontent-%COMP%]::before {\n  height: 70%;\n}\n.adm-nav-item.adm-active[_ngcontent-%COMP%]   .adm-nav-ico[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n}\n\n.adm-nav-item-danger[_ngcontent-%COMP%] {\n  color: #6B7280;\n}\n.adm-nav-item-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 13, 13, 0.06);\n  color: #E70D0D;\n}\n.adm-nav-item-danger[_ngcontent-%COMP%]:hover::before {\n  background: linear-gradient(180deg, #E70D0D, #c00);\n}\n\n\n\n.adm-nav-ico[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n\n\n\n\n\n.adm-ico-blue[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n}\n\n\n\n.adm-ico-sky[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.12);\n  color: #0DCAF0;\n}\n\n\n\n.adm-ico-teal[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n}\n\n\n\n.adm-ico-rose[_ngcontent-%COMP%] {\n  background: rgba(253, 57, 149, 0.1);\n  color: #FD3995;\n}\n\n\n\n.adm-ico-orange[_ngcontent-%COMP%] {\n  background: rgba(255, 70, 103, 0.1);\n  color: #FF4667;\n}\n\n\n\n.adm-ico-green[_ngcontent-%COMP%] {\n  background: rgba(29, 78, 216, 0.1);\n  color: #1d4ed8;\n}\n\n\n\n.adm-ico-indigo[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.1);\n  color: #5625E8;\n}\n\n\n\n.adm-ico-amber[_ngcontent-%COMP%] {\n  background: rgba(253, 57, 149, 0.1);\n  color: #FD3995;\n}\n\n\n\n.adm-ico-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 70, 103, 0.1);\n  color: #FF4667;\n}\n\n\n\n.adm-ico-danger[_ngcontent-%COMP%] {\n  background: rgba(231, 13, 13, 0.1);\n  color: #E70D0D;\n}\n\n.adm-nav-text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_adm-sb-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n.dark-mode[_nghost-%COMP%]   .adm-sidebar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-sidebar[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.07);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.dark-mode[_nghost-%COMP%]   .adm-profile-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-profile-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a2b 0%, #111119 100%);\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .adm-nav-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-nav-label[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.dark-mode[_nghost-%COMP%]   .adm-nav-divider[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-nav-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .adm-nav-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-nav-item[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .adm-nav-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .adm-nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .adm-nav-item.adm-active[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .adm-nav-item.adm-active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vY29tbW9uL2FkbWluLXNpZGViYXIvYWRtaW4tc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OztnRkFBQTtBQUtBLCtFQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQSwrRUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSw2REFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUEsZ0NBQUE7QUFDQTtFQUEyQixrQkFBQTtFQUFvQixjQUFBO0FBRy9DOztBQUZBO0VBQ0UsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUMzQixzRkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLGtCQUFBO0VBQW9CLFVBQUE7QUFVdEI7O0FBUkE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQzNCLHVFQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLCtDQUFBO0FBZUY7O0FBYkE7RUFBMkIsZUFBQTtFQUFpQixXQUFBO0FBa0I1Qzs7QUFqQkE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFDakMseUNBQUE7RUFDQSw4Q0FBQTtFQUFnRCxVQUFBO0FBdUJsRDs7QUFwQkEsZUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFBc0IsbUJBQUE7RUFDdEIsb0NBQUE7RUFBa0MseUNBQUE7RUFDbEMsY0FBQTtFQUFnQixnQkFBQTtFQUFrQixnQkFBQTtFQUNsQyxxQkFBQTtFQUFzQix5QkFBQTtFQUN0QixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixlQUFBO0FB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cmNlc0NvbnRlbnQiOlsiLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBBZG1pbiBTaWRlYmFyICDDosKAwpQgIERyZWFtcyBMTVMgRGVzaWduIFN5c3RlbVxuICAgUHJpbWFyeTogIzM5MkM3RCAgfCAgU2Vjb25kYXJ5OiAjRkY0NjY3XG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFNJREVCQVIgU0hFTEwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWRtLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRURFQUY4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoNTcsNDQsMTI1LC4wNyk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBQUk9GSUxFIENBUkQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWRtLXByb2ZpbGUtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmZiAwJSwgI2VlZjJmZiAxMDAlKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGU3ZmY7XG4gIHBhZGRpbmc6IDIwcHggMThweCAxOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5hZG0tcHJvZmlsZS1nbG93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hpZWxkIGFuaW3Dg8KpIGRhbnMgbGUgcHJvZmlsICovXG4uYWRtLXByb2ZpbGUtc2hpZWxkLXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwOyB9XG4uYWRtLXByb2ZpbGUtc2hpZWxkLXJpbmcge1xuICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjUzLDU3LDE0OSwuMTIpLCByZ2JhKDIsMTY4LDE4MSwuMDgpKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTMsNTcsMTQ5LC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7XG59XG4uYWRtLXByb2ZpbGUtc2hpZWxkLWJveCB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZEMzk5NSwgIzliNTliNiwgIzU2MjVFOCwgIzAyYThiNSk7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoMjUzLDU3LDE0OSwuMzUpO1xufVxuLmFkbS1wcm9maWxlLXNoaWVsZC1pY29uIHsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogI2ZmZjsgfVxuLmFkbS1wcm9maWxlLXNoaWVsZC1wdWxzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IC0zcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTMsNTcsMTQ5LC4yKTtcbiAgYW5pbWF0aW9uOiBhZG0tc2ItcHVsc2UgMi4ycyBlYXNlLW91dCBpbmZpbml0ZTsgei1pbmRleDogMTtcbn1cblxuLyogUm9sZSBiYWRnZSAqL1xuLmFkbS1yb2xlLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUzLDU3LDE0OSwuMDgpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1Myw1NywxNDksLjIpO1xuICBjb2xvcjogIzliNTliNjsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC40cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDJweCA4cHg7IGJvcmRlci1yYWRpdXM6IDIwcHg7IG1hcmdpbi10b3A6IDNweDtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFNFQ1RJT05TIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbS1uYXYtc2VjdGlvbiB7IHBhZGRpbmc6IDEwcHggMTJweCA0cHg7IH1cbi5hZG0tbmF2LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuN3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzljYTNhZjsgcGFkZGluZzogMCA2cHg7IG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5hZG0tbmF2LWRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogI0Y0RjBGRjtcbiAgbWFyZ2luOiA0cHggMTJweDtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIE5BViBMSVNUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFkbS1uYXYtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogMDsgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAycHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBOQVYgSVRFTSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG0tbmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDlweCAxMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzNzQxNTE7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4xOHMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogM3B4OyBoZWlnaHQ6IDA7IGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjE4cyBlYXNlO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjA0KTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAmOjpiZWZvcmUgeyBoZWlnaHQ6IDYwJTsgfVxuICAgIC5hZG0tbmF2LWljbyB7IHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpOyB9XG4gIH1cbiAgJi5hZG0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wNCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAmOjpiZWZvcmUgeyBoZWlnaHQ6IDcwJTsgfVxuICAgIC5hZG0tbmF2LWljbyB7IGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLDAsMCwuMTUpOyB9XG4gIH1cbn1cbi5hZG0tbmF2LWl0ZW0tZGFuZ2VyIHtcbiAgY29sb3I6ICM2QjcyODA7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwxMywxMywuMDYpOyBjb2xvcjogI0U3MEQwRDtcbiAgICAmOjpiZWZvcmUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRTcwRDBELCAjYzAwKTsgfSB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBOQVYgSUNPTiBCT1hFUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5hZG0tbmF2LWljbyB7XG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMThzIGVhc2UsIGJveC1zaGFkb3cgLjE4cyBlYXNlO1xufVxuLyogQ291bGV1cnMgaXNzdWVzIGV4Y2x1c2l2ZW1lbnQgZGUgbGEgcGFsZXR0ZSBvZmZpY2llbGxlIGR1IHRlbXBsYXRlICovXG4vKiBEYXNoYm9hcmQgw6LChsKSIFByaW1hcnkgKi9cbi5hZG0taWNvLWJsdWUgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoNTcsNDQsMTI1LC4xKTsgICBjb2xvcjogIzM5MkM3RDsgfVxuLyogVXRpbGlzYXRldXJzIMOiwobCkiBTa3libHVlICovXG4uYWRtLWljby1za3kgICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDEzLDIwMiwyNDAsLjEyKTsgY29sb3I6ICMwRENBRjA7IH1cbi8qIENhdMODwqlnb3JpZXMgw6LChsKSIFByaW1hcnkgdmlvbGV0ICovXG4uYWRtLWljby10ZWFsICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDU3LDQ0LDEyNSwuMSk7ICBjb2xvcjogIzM5MkM3RDsgfVxuLyogQmxvZyDDosKGwpIgUGluayAqL1xuLmFkbS1pY28tcm9zZSAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyNTMsNTcsMTQ5LC4xKTsgIGNvbG9yOiAjRkQzOTk1OyB9XG4vKiBUaWNrZXRzIMOiwobCkiBTZWNvbmRhcnkgKi9cbi5hZG0taWNvLW9yYW5nZSAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDcwLDEwMywuMSk7ICBjb2xvcjogI0ZGNDY2NzsgfVxuLyogVmlyZW1lbnRzIMOiwobCkiBCbHVlICovXG4uYWRtLWljby1ncmVlbiAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI5LDc4LDIxNiwuMSk7ICAgY29sb3I6ICMxZDRlZDg7IH1cbi8qIEFuYWx5dGljcyBJQSDDosKGwpIgSW5mbyAqL1xuLmFkbS1pY28taW5kaWdvICAgIHsgYmFja2dyb3VuZDogcmdiYSg4NiwzNywyMzIsLjEpOyAgIGNvbG9yOiAjNTYyNUU4OyB9XG4vKiBDb3VycyDDosKGwpIgUGluayAqL1xuLmFkbS1pY28tYW1iZXIgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyNTMsNTcsMTQ5LC4xKTsgICBjb2xvcjogI0ZEMzk5NTsgfVxuLyogUHJvZmlsIC8gUGFyYW3Dg8KodHJlcyDDosKGwpIgU2Vjb25kYXJ5ICovXG4uYWRtLWljby1zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSw3MCwxMDMsLjEpOyAgY29sb3I6ICNGRjQ2Njc7IH1cbi8qIETDg8KpY29ubmV4aW9uIMOiwobCkiBEYW5nZXIgKi9cbi5hZG0taWNvLWRhbmdlciAgICB7IGJhY2tncm91bmQ6IHJnYmEoMjMxLDEzLDEzLC4xKTsgICBjb2xvcjogI0U3MEQwRDsgfVxuXG4uYWRtLW5hdi10ZXh0IHsgZmxleC1ncm93OiAxOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQU5JTUFUSU9OUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBrZXlmcmFtZXMgYWRtLXNiLXB1bHNlIHsgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNjsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyBvcGFjaXR5OiAwOyB9IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIERBUksgTU9ERSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbjpob3N0LWNvbnRleHQoLmRhcmstbW9kZSkge1xuICAuYWRtLXNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMmI7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNyk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsMCwwLC4zNSk7XG4gIH1cbiAgLmFkbS1wcm9maWxlLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTFhMmIgMCUsICMxMTExMTkgMTAwJSk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDcpO1xuICB9XG4gIC5hZG0tbmF2LWxhYmVsIHsgY29sb3I6ICM0NzU1Njk7IH1cbiAgLmFkbS1uYXYtZGl2aWRlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA2KTsgfVxuICAuYWRtLW5hdi1pdGVtIHtcbiAgICBjb2xvcjogIzk0YTNiODtcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDUpOyBjb2xvcjogI2UyZThmMDsgfVxuICAgICYuYWRtLWFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgY29sb3I6ICNlMmU4ZjA7IH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AdminSidebarComponent;
})();

/***/ }),

/***/ 60218:
/*!***************************************************!*\
  !*** ./src/app/features/admin/admin.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _common_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/admin-sidebar/admin-sidebar.component */ 45966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 85422);




let AdminComponent = /*#__PURE__*/(() => {
  class AdminComponent {
    static ɵfac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 7,
      vars: 0,
      consts: [[1, "content"], [1, "container"], [1, "row", "g-4", "align-items-start"], [1, "col-lg-3", "admin-sidebar-col"], [1, "col-lg-9"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-admin-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _common_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.AdminSidebarComponent],
      styles: ["\n\n.admin-sidebar-col[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 80px;\n  align-self: flex-start;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZG1pbiBDb21wb25lbnQgU3R5bGVzICovXHJcblxyXG4uYWRtaW4tc2lkZWJhci1jb2wge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AdminComponent;
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
//# sourceMappingURL=218.js.map