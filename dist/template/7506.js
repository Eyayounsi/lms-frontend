"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7506],{

/***/ 73290:
/*!**************************************************************************************!*\
  !*** ./src/app/features/student/common/student-sidebar/student-sidebar.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentSidebarComponent: () => (/* binding */ StudentSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/service/common/common.service */ 89544);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/service/message/message.service */ 40376);











function StudentSidebarComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 32);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.userAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function StudentSidebarComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.userInitials);
  }
}
function StudentSidebarComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.unreadMsgCount > 99 ? "99+" : ctx_r1.unreadMsgCount);
  }
}
let StudentSidebarComponent = /*#__PURE__*/(() => {
  class StudentSidebarComponent {
    common;
    authService;
    messageService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    base = '';
    page = '';
    last = '';
    userName = localStorage.getItem('fullName') || 'Etudiant';
    userAvatarUrl = '';
    unreadMsgCount = 0;
    pollSub;
    identitySub;
    get userInitials() {
      return (this.userName || 'E').split(' ').map(part => part.charAt(0)).join('').toUpperCase().slice(0, 2);
    }
    constructor(common, authService, messageService) {
      this.common = common;
      this.authService = authService;
      this.messageService = messageService;
      this.common.base.subscribe(base => {
        this.base = base;
      });
      this.common.page.subscribe(page => {
        this.page = page;
      });
      this.common.last.subscribe(last => {
        this.last = last;
      });
    }
    ngOnInit() {
      this.authService.ensureProfileIdentityLoaded();
      this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
      this.identitySub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
      this.identitySub.add(this.authService.currentFullName$.subscribe(name => {
        if (name) this.userName = name;
      }));
      this.identitySub.add(this.authService.currentAvatarPath$.subscribe(path => {
        this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
      }));
      this.refreshCount();
      this.pollSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.messageService.getUnreadCount())).subscribe({
        next: res => {
          this.unreadMsgCount = res?.count ?? res ?? 0;
        },
        error: () => {}
      });
    }
    ngOnDestroy() {
      this.pollSub?.unsubscribe();
      this.identitySub?.unsubscribe();
    }
    refreshCount() {
      this.messageService.getUnreadCount().subscribe({
        next: res => {
          this.unreadMsgCount = res?.count ?? res ?? 0;
        },
        error: () => {}
      });
    }
    onLogout() {
      this.authService.logout();
    }
    static ɵfac = function StudentSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_10__.MessageService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: StudentSidebarComponent,
      selectors: [["app-student-sidebar"]],
      decls: 93,
      vars: 25,
      consts: [["studentSidebarInitials", ""], [1, "settings-sidebar"], [1, "student-sidebar-profile", "mb-3"], [1, "student-sidebar-profile__avatar"], ["alt", "Avatar", "class", "student-sidebar-profile__avatar-img", 3, "src", 4, "ngIf", "ngIfElse"], [1, "mb-0"], [1, "mb-3"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "fa-solid", "fa-user", "me-2"], [1, "isax", "isax-teacher5", "me-2"], [1, "fa-solid", "fa-graduation-cap", "me-2"], [1, "isax", "isax-note-215", "me-2"], [1, "isax", "isax-heart5", "me-2"], [1, "isax", "isax-star5", "me-2"], [1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-award5", "me-2"], [1, "isax", "isax-shopping-cart5", "me-2"], [1, "isax", "isax-tag-user5", "me-2"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-messages-35", "me-2"], ["class", "badge rounded-pill ms-1 sidebar-badge sidebar-badge--msg", 4, "ngIf"], [1, "isax", "isax-message-question5", "me-2"], [1, "ti", "ti-briefcase", "me-2"], [1, "ti", "ti-trophy", "me-2"], [1, "ti", "ti-gift", "me-2"], [1, "isax", "isax-ticket5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], ["href", "javascript:void(0)", 1, "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-logout5", "me-2"], ["alt", "Avatar", 1, "student-sidebar-profile__avatar-img", 3, "src"], [1, "badge", "rounded-pill", "ms-1", "sidebar-badge", "sidebar-badge--msg"]],
      template: function StudentSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, StudentSidebarComponent_img_4_Template, 1, 1, "img", 4)(5, StudentSidebarComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div")(8, "h6", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Espace Etudiant");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Menu principal");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ul", 7)(15, "li")(16, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Tableau de bord");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "li")(20, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Mon profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "li")(24, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Cours inscrits");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "li")(28, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Mes Cours Achet\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "li")(32, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Certificats");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "li")(36, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Wishlist");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "li")(40, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "li")(44, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "My Quiz Attempts");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "li")(48, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Order History");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "li")(52, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Referrals");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "li")(56, "a", 20)(57, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, StudentSidebarComponent_span_60_Template, 2, 1, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "li")(62, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Q&A");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "li")(66, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Offres d'Emploi");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "li")(70, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Challenges");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "li")(74, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "\u00C9changer des Points");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "li")(78, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Support Tickets");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h6", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Parametres du compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "ul")(85, "li")(86, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Parametres");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "li")(90, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentSidebarComponent_Template_a_click_90_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onLogout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Deconnexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const studentSidebarInitials_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userAvatarUrl)("ngIfElse", studentSidebarInitials_r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.students_Dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.students_profile);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentCourses);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentMyCourses);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.student_Certificate);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentWishlist);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentReviews);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.page === "student-quiz" || ctx.page === "student-quiz-questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentQuiz);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentOrderHistory);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.students_referral);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentsMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.unreadMsgCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentQa);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.student_job_offers);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentChallenges);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentPointsExchange);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.students_tickets);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.last === "student-settings" || ctx.last === "student-change-password" || ctx.last === "student-social-profile" || ctx.last === "student-linked-accounts" || ctx.last === "student-notifications" || ctx.last === "student-billing-address");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentSettings);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
      styles: [".settings-sidebar[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);\n  padding: 14px;\n}\n.settings-sidebar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n  font-weight: 800;\n}\n.settings-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.settings-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.settings-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  padding: 9px 10px;\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: #334155;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.settings-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n  transition: transform 0.2s ease, color 0.2s ease;\n}\n.settings-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #eef2ff, #f8faff);\n  color: #3730a3;\n  transform: translateX(3px);\n}\n.settings-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #4338ca;\n  transform: scale(1.1);\n}\n.settings-sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #eef2ff, #e8edff);\n  color: #3730a3;\n  font-weight: 700;\n  box-shadow: inset 3px 0 0 #6366f1;\n}\n.settings-sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.settings-sidebar[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: #edf2f7;\n  opacity: 1;\n}\n\n.student-sidebar-profile[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #dbe5ff;\n  background: linear-gradient(135deg, #f7faff 0%, #eef4ff 100%);\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.student-sidebar-profile[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  text-transform: none;\n  letter-spacing: 0;\n  color: #1e3a8a;\n  font-weight: 800;\n}\n.student-sidebar-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n}\n\n.student-sidebar-profile__avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.76rem;\n  font-weight: 800;\n  color: #fff;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);\n  overflow: hidden;\n}\n\n.student-sidebar-profile__avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.sidebar-badge[_ngcontent-%COMP%] {\n  min-width: 18px;\n  height: 18px;\n  padding: 0 6px;\n  font-size: 10px;\n  line-height: 18px;\n  font-weight: 700;\n  color: #fff;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.18);\n  animation: _ngcontent-%COMP%_badgePulse 1.8s ease-in-out infinite;\n}\n\n.sidebar-badge--msg[_ngcontent-%COMP%] {\n  background: #4a1d96;\n}\n\n@keyframes _ngcontent-%COMP%_badgePulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.08);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3R1ZGVudC9jb21tb24vc3R1ZGVudC1zaWRlYmFyL3N0dWRlbnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFBSjtBQUdFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUlJO0VBQ0UsY0FBQTtFQUNBLGdEQUFBO0FBRk47QUFLSTtFQUNFLHFEQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBSE47QUFLTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUhSO0FBT0k7RUFDRSxxREFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBTE47QUFPTTtFQUNFLGNBQUE7QUFMUjtBQVVFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBUko7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQVRGO0FBV0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFUSjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBVko7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLCtDQUFBO0FBWEY7O0FBY0E7RUFDRSxtQkFBQTtBQVhGOztBQWNBO0VBQ0U7SUFBVyxtQkFBQTtFQVZYO0VBV0E7SUFBTSxzQkFBQTtFQVJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3Mtc2lkZWJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNHB4O1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuODNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzYzNjZmMTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWVmMmZmLCAjZjhmYWZmKTtcclxuICAgICAgY29sb3I6ICMzNzMwYTM7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICM0MzM4Y2E7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWVmMmZmLCAjZThlZGZmKTtcclxuICAgICAgY29sb3I6ICMzNzMwYTM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDNweCAwIDAgIzYzNjZmMTtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjNGY0NmU1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZGYyZjc7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnN0dWRlbnQtc2lkZWJhci1wcm9maWxlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmU1ZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y3ZmFmZiAwJSwgI2VlZjRmZiAxMDAlKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDlweDtcclxuXHJcbiAgaDYge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGNvbG9yOiAjMWUzYThhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICB9XHJcbn1cclxuXHJcbi5zdHVkZW50LXNpZGViYXItcHJvZmlsZV9fYXZhdGFyIHtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSwgIzhiNWNmNik7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3R1ZGVudC1zaWRlYmFyLXByb2ZpbGVfX2F2YXRhci1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGViYXItYmFkZ2Uge1xyXG4gIG1pbi13aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTRweCByZ2JhKDE1LCAyMywgNDIsIDAuMTgpO1xyXG4gIGFuaW1hdGlvbjogYmFkZ2VQdWxzZSAxLjhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uc2lkZWJhci1iYWRnZS0tbXNnIHtcclxuICBiYWNrZ3JvdW5kOiAjNGExZDk2O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhZGdlUHVsc2Uge1xyXG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return StudentSidebarComponent;
})();

/***/ }),

/***/ 77506:
/*!*******************************************************!*\
  !*** ./src/app/features/student/student.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentComponent: () => (/* binding */ StudentComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/routes/routes */ 92643);
/* harmony import */ var _common_student_sidebar_student_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/student-sidebar/student-sidebar.component */ 73290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/auth/auth.service */ 34530);











function StudentComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchToInstructor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Tableau instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function StudentComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentComponent_button_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchToInstructor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Devenir Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function StudentComponent_Conditional_141_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.switchToInstructorError, " ");
  }
}
function StudentComponent_Conditional_141_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function StudentComponent_Conditional_141_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "En cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function StudentComponent_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "div", 71)(4, "div", 11)(5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div")(8, "h6", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Acc\u00E9der au tableau de bord Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "small", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Confirmez votre identit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentComponent_Conditional_141_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.showSwitchToInstructorModal = false;
      ctx_r1.switchToInstructorPassword = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchToInstructorError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 77)(14, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Pour acc\u00E9der au r\u00F4le ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "strong", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, ", veuillez entrer votre mot de passe pour plus de s\u00E9curit\u00E9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Mot de passe actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 81)(22, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function StudentComponent_Conditional_141_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.switchToInstructorPassword, $event) || (ctx_r1.switchToInstructorPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function StudentComponent_Conditional_141_Template_input_keyup_enter_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.confirmSwitchToInstructor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](25, StudentComponent_Conditional_141_Conditional_25_Template, 3, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 86)(27, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentComponent_Conditional_141_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.showSwitchToInstructorModal = false;
      ctx_r1.switchToInstructorPassword = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchToInstructorError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentComponent_Conditional_141_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.confirmSwitchToInstructor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, StudentComponent_Conditional_141_span_30_Template, 3, 0, "span", 89)(31, StudentComponent_Conditional_141_span_31_Template, 3, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "div", 91);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.switchToInstructorPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r1.switchToInstructorError ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.switchingToInstructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.switchingToInstructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.switchingToInstructor);
  }
}
let StudentComponent = /*#__PURE__*/(() => {
  class StudentComponent {
    router;
    authService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes;
    last = '';
    userName = '';
    // ✅ Modal de vérification password pour switch vers instructor
    showSwitchToInstructorModal = false;
    switchToInstructorPassword = '';
    switchToInstructorError = '';
    switchingToInstructor = false;
    get userInitials() {
      return (this.userName || 'S').split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
    }
    /** Vrai si le compte possède aussi le rôle INSTRUCTOR (primaire ou secondaire) */
    get hasInstructorRole() {
      const primaryRole = localStorage.getItem('role') || '';
      const secondary = JSON.parse(localStorage.getItem('secondaryRoles') || '[]');
      return primaryRole === 'INSTRUCTOR' || secondary.includes('INSTRUCTOR');
    }
    ngOnInit() {
      this.userName = localStorage.getItem('fullName') || 'Student';
    }
    constructor(router, authService) {
      this.router = router;
      this.authService = authService;
      this.updateLastFromUrl(this.router.url);
      this.router.events.subscribe(data => {
        if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart) {
          this.updateLastFromUrl(data.url);
        }
      });
    }
    updateLastFromUrl(url) {
      const parts = url.split('/');
      const lastPart = parts[2]?.replace('student-', '').trim();
      if (lastPart === 'profile') {
        this.last = 'My Profile';
      } else if (lastPart === 'courses') {
        this.last = 'Enrolled Courses';
      } else if (lastPart === 'chat') {
        this.last = 'Messages';
      } else if (lastPart === 'quiz') {
        this.last = 'My Quiz Attempts';
      } else if (lastPart === 'qa') {
        this.last = 'Question & Answer';
      } else if (lastPart === 'tickets') {
        this.last = 'Support Tickets';
      } else if (lastPart === 'certificate') {
        this.last = 'My Certificates';
      } else if (lastPart === 'quiz-questions') {
        this.last = 'My Quiz Attempts';
      } else {
        this.last = lastPart;
      }
    }
    /** Afficher la modal pour saisir le mot de passe avant de basculer vers instructeur */
    switchToInstructor() {
      this.switchToInstructorPassword = '';
      this.switchToInstructorError = '';
      this.showSwitchToInstructorModal = true;
    }
    /** Confirmer et basculer vers le rôle instructeur après vérification du password */
    confirmSwitchToInstructor() {
      if (!this.switchToInstructorPassword.trim()) {
        this.switchToInstructorError = 'Mot de passe requis';
        return;
      }
      this.switchingToInstructor = true;
      this.switchToInstructorError = '';
      this.authService.switchRole('INSTRUCTOR', this.switchToInstructorPassword).subscribe({
        next: resp => {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('role', resp.role);
          if (resp.secondaryRoles) {
            localStorage.setItem('secondaryRoles', JSON.stringify(resp.secondaryRoles));
          }
          this.authService.setCurrentRole(resp.role);
          this.authService.scheduleAutoLogout();
          // Fermer la modal
          this.showSwitchToInstructorModal = false;
          this.switchToInstructorPassword = '';
          this.switchingToInstructor = false;
          this.router.navigate([this.routes.instructor_dashboard]);
        },
        error: err => {
          this.switchingToInstructor = false;
          this.switchToInstructorError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
        }
      });
    }
    static ɵfac = function StudentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: StudentComponent,
      selectors: [["app-student"]],
      decls: 142,
      vars: 17,
      consts: [[1, "content"], [1, "container"], [1, "row", "align-items-start", "row-gap-4"], [1, "col-lg-3", "student-sidebar-col"], [1, "col-lg-9", "std-content-wrapper"], [1, "std-shell-hero", "mb-4"], [1, "std-shell-glow", "std-shell-glow-1"], [1, "std-shell-glow", "std-shell-glow-2"], [1, "std-shell-hero-inner"], [1, "row", "align-items-center", "w-100"], [1, "col-lg-8"], [1, "d-flex", "align-items-center", "gap-3"], [1, "std-shell-av-wrap"], [1, "std-shell-av-ring"], [1, "std-shell-av-border"], [1, "std-shell-av-circle"], [1, "std-shell-av-initials"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "std-shell-role-chip"], [1, "ti", "ti-school", "me-1", 2, "font-size", "9px"], [1, "std-shell-live"], [1, "std-shell-live-dot"], [1, "std-shell-hero-title", "mb-0"], [1, "std-shell-hero-subtitle", "mb-0", "mt-1"], [1, "col-lg-4"], [1, "d-flex", "justify-content-lg-end", "mt-3", "mt-lg-0", "gap-2", "flex-wrap"], [1, "std-shell-action-btn", "std-shell-action-btn--neutral", 3, "routerLink"], [1, "ti", "ti-search"], ["type", "button", "class", "std-shell-action-btn", 3, "click", 4, "ngIf"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "ti", "ti-send", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], ["type", "button", 1, "std-shell-action-btn", 3, "click"], [1, "ti", "ti-briefcase"], [1, "ti", "ti-plus"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content", "border-0", 2, "border-radius", "16px", "box-shadow", "0 24px 48px rgba(0,0,0,.16)", "animation", "popInModal .2s ease"], [1, "modal-header", "border-0", "pb-0", "pt-4", "px-4"], [2, "width", "48px", "height", "48px", "border-radius", "14px", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "isax", "isax-book-1", 2, "font-size", "22px", "color", "#fff"], [1, "fw-bold", "mb-0", 2, "font-size", "15px"], [1, "text-muted"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4", "pt-3", "pb-2"], [1, "text-muted", "small", "mb-3"], [1, "text-primary"], [1, "form-label", "small", "fw-semibold"], [1, "input-group"], [1, "input-group-text", "bg-light", "border-end-0", 2, "border-radius", "8px 0 0 8px"], [1, "isax", "isax-lock", 2, "font-size", "15px", "color", "#6b7280"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", "border-start-0", "ps-0", 2, "border-radius", "0 8px 8px 0", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mt-2", "py-2", "px-3", 2, "border-radius", "8px", "font-size", "12px"], [1, "modal-footer", "border-0", "px-4", "pb-4", "pt-2", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "flex-fill", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "flex-fill", "text-white", "fw-semibold", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "border", "none", 3, "click", "disabled"], [4, "ngIf"], ["class", "d-flex align-items-center justify-content-center gap-2", 4, "ngIf"], [1, "modal-backdrop", "fade", "show"], [1, "isax", "isax-close-circle"], [1, "isax", "isax-arrow-swap-horizontal", "me-1"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"]],
      template: function StudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-student-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "div", 13)(15, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 15)(17, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div")(20, "div", 17)(21, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\u00C9tudiant");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Actif");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "h3", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Bienvenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 24)(32, "div", 25)(33, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Parcourir cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, StudentComponent_button_37_Template, 4, 0, "button", 28)(38, StudentComponent_button_38_Template, 4, 0, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "footer", 29)(41, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "img", 31)(43, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 33)(45, "div", 1)(46, "div", 34)(47, "div", 24)(48, "div", 35)(49, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 38)(54, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "img", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 10)(59, "div", 34)(60, "div", 43)(61, "div", 44)(62, "h5", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "For Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "ul")(65, "li")(66, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Browse Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "li")(69, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "li")(72, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "li")(75, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "My Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "li")(78, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 43)(81, "div", 44)(82, "h5", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "For Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "ul")(85, "li")(86, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Become Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "li")(89, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "li")(92, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "li")(95, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "li")(98, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 47)(101, "div", 48)(102, "h5", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Newsletter");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 49)(105, "form", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](106, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Subscribe");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 54)(111, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "img", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, "3556 Beech Street, San Francisco,");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](115, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, " California, CA 94108");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "dreamslms@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](122, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "+19 123-456-7890");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "div", 59)(126, "div", 1)(127, "div", 60)(128, "div", 61)(129, "div", 62)(130, "p", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Copyright \u00A9 2026 DreamsLMS. All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 61)(133, "div")(134, "ul", 64)(135, "li")(136, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "Terms & Conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "li")(139, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](141, StudentComponent_Conditional_141_Template, 33, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userInitials);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.courseGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasInstructorRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.hasInstructorRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.courseGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.login);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.students_Dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.instructorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.login);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.instructor_dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.page_term_condition);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.page_privacy_policy);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.showSwitchToInstructorModal ? 141 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _common_student_sidebar_student_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.StudentSidebarComponent],
      styles: [".student-sidebar-col[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 80px;\n  align-self: flex-start;\n}\n\n.std-shell-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n  padding: 1.2rem 1.4rem;\n  background: linear-gradient(135deg, #fd3995 0%, #9b59b6 34%, #5625e8 68%, #02a8b5 100%);\n  box-shadow: 0 12px 40px rgba(253, 57, 149, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.14);\n  color: #fff;\n}\n.std-shell-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.std-shell-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.std-shell-glow-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  top: -90px;\n  right: 4%;\n  background: radial-gradient(circle, rgba(2, 168, 181, 0.22) 0%, transparent 70%);\n  animation: _ngcontent-%COMP%_std-shell-float 8s ease-in-out infinite;\n}\n\n.std-shell-glow-2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bottom: -70px;\n  left: 5%;\n  background: radial-gradient(circle, rgba(253, 57, 149, 0.16) 0%, transparent 70%);\n  animation: _ngcontent-%COMP%_std-shell-float 10s ease-in-out infinite reverse;\n}\n\n.std-shell-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.std-shell-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  flex-shrink: 0;\n}\n\n.std-shell-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(255, 255, 255, 0.45);\n  animation: _ngcontent-%COMP%_std-shell-rotate 12s linear infinite;\n}\n\n.std-shell-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #fd3995, #5625e8, #02a8b5);\n}\n\n.std-shell-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625e8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.58rem;\n  line-height: 1;\n}\n\n.std-shell-av-initials[_ngcontent-%COMP%] {\n  font-size: 1.22rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  color: #fff;\n}\n\n.std-shell-role-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.std-shell-hero-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.42rem;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n  color: #fff;\n}\n\n.std-shell-hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.72);\n  margin: 0.3rem 0 0 0;\n}\n\n.std-shell-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.std-shell-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_std-shell-blink 1.2s ease-in-out infinite;\n}\n\n.std-shell-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1rem;\n  border-radius: 999px;\n  text-decoration: none;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;\n  cursor: pointer;\n}\n.std-shell-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.std-shell-action-btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.24);\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);\n}\n.std-shell-action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.std-shell-action-btn--neutral[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n}\n.std-shell-action-btn--neutral[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n\n.std-shell-action-btn--danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: rgba(239, 68, 68, 0.4);\n}\n.std-shell-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.3);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.2);\n}\n\n.std-shell-glass-panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 16px;\n  padding: 10px 4px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.std-shell-mini-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 82px;\n  text-align: center;\n}\n.std-shell-mini-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.std-shell-mini-stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.std-shell-mini-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 0 4px;\n}\n\n.std-content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@keyframes _ngcontent-%COMP%_std-shell-float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n@keyframes _ngcontent-%COMP%_std-shell-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_std-shell-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (max-width: 991px) {\n  .student-sidebar-col[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 2rem;\n  }\n  .std-shell-hero[_ngcontent-%COMP%] {\n    padding: 1rem 1.2rem;\n  }\n  .std-shell-hero-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .std-shell-av-wrap[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .std-shell-av-ring[_ngcontent-%COMP%] {\n    inset: -6px;\n  }\n}\n@media (max-width: 576px) {\n  .std-shell-hero[_ngcontent-%COMP%] {\n    padding: 0.8rem 1rem;\n    border-radius: 16px;\n  }\n  .std-shell-hero-inner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .std-shell-glow-1[_ngcontent-%COMP%], \n   .std-shell-glow-2[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    opacity: 0.5;\n  }\n  .std-shell-av-wrap[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n  }\n  .std-shell-hero-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .std-shell-hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .std-shell-glass-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 0.5rem;\n  }\n  .std-shell-mini-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUZBQUE7RUFDQSx5RkFBQTtFQUNBLFdBQUE7QUFMRjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0ZBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxrREFBQTtBQVBGOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGlGQUFBO0VBQ0EsMkRBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSwrQ0FBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQVRGOztBQVlBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0FBVEY7O0FBYUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyRUFBQTtFQUNBLGVBQUE7QUFWRjtBQVlFO0VBQ0UsaUJBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBQVhKO0FBY0U7RUFDRSx3QkFBQTtBQVpKOztBQWdCQTtFQUNFLHFDQUFBO0FBYkY7QUFlRTtFQUNFLHFDQUFBO0FBYko7O0FBaUJBO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQWRGO0FBZ0JFO0VBQ0Usa0NBQUE7RUFDQSw2Q0FBQTtBQWRKOztBQW1CQTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1EQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWhCRjtBQWtCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFoQko7QUFtQkU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFqQko7O0FBcUJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUFsQkY7O0FBc0JBO0VBQ0Usa0JBQUE7QUFuQkY7O0FBdUJBO0VBQ0U7SUFDRSwwQkFBQTtFQXBCRjtFQXNCQTtJQUNFLDRCQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRTtJQUNFLHVCQUFBO0VBckJGO0VBdUJBO0lBQ0UseUJBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFO0lBQ0UsVUFBQTtFQXRCRjtFQXdCQTtJQUNFLFlBQUE7RUF0QkY7QUFDRjtBQTBCQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQXhCRjtFQTJCQTtJQUNFLG9CQUFBO0VBekJGO0VBNEJBO0lBQ0UsaUJBQUE7RUExQkY7RUE2QkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQTNCRjtFQThCQTtJQUNFLFdBQUE7RUE1QkY7QUFDRjtBQStCQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxtQkFBQTtFQTdCRjtFQWdDQTtJQUNFLHNCQUFBO0VBOUJGO0VBaUNBOztJQUVFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQS9CRjtFQWtDQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBaENGO0VBbUNBO0lBQ0UsZUFBQTtFQWpDRjtFQW9DQTtJQUNFLGtCQUFBO0VBbENGO0VBcUNBO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0Esb0JBQUE7RUFuQ0Y7RUFzQ0E7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUFwQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBTVFVERU5UIERBU0hCT0FSRCAtIERFU0lHTiBQUk9GRVNTSU9OTkVMIE1PREVSTkVcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU3RpY2t5IFNpZGViYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zdHVkZW50LXNpZGViYXItY29sIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogODBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSGVybyBTZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLXNoZWxsLWhlcm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMS4ycmVtIDEuNHJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmQzOTk1IDAlLCAjOWI1OWI2IDM0JSwgIzU2MjVlOCA2OCUsICMwMmE4YjUgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgyNTMsIDU3LCAxNDksIDAuMjUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGbG9hdGluZyBHbG93cyAoQmFja2dyb3VuZCBFZmZlY3RzKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1zaGVsbC1nbG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3RkLXNoZWxsLWdsb3ctMSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgdG9wOiAtOTBweDtcclxuICByaWdodDogNCU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyLDE2OCwxODEsLjIyKSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcclxuICBhbmltYXRpb246IHN0ZC1zaGVsbC1mbG9hdCA4cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLnN0ZC1zaGVsbC1nbG93LTIge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvdHRvbTogLTcwcHg7XHJcbiAgbGVmdDogNSU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTMsNTcsMTQ5LC4xNikgMCUsIHRyYW5zcGFyZW50IDcwJSk7XHJcbiAgYW5pbWF0aW9uOiBzdGQtc2hlbGwtZmxvYXQgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbi5zdGQtc2hlbGwtaGVyby1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBBdmF0YXIgU3R5bGVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLXNoZWxsLWF2LXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5zdGQtc2hlbGwtYXYtcmluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAtOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDEuNXB4IGRhc2hlZCByZ2JhKDI1NSwyNTUsMjU1LC40NSk7XHJcbiAgYW5pbWF0aW9uOiBzdGQtc2hlbGwtcm90YXRlIDEycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5zdGQtc2hlbGwtYXYtYm9yZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZDM5OTUsICM1NjI1ZTgsICMwMmE4YjUpO1xyXG59XHJcblxyXG4uc3RkLXNoZWxsLWF2LWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YjU5YjYsICM1NjI1ZTgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuNThyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5zdGQtc2hlbGwtYXYtaW5pdGlhbHMge1xyXG4gIGZvbnQtc2l6ZTogMS4yMnJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBCYWRnZSAmIExhYmVsIFN0eWxlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1zaGVsbC1yb2xlLWNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDkuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC43cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiA0cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG4uc3RkLXNoZWxsLWhlcm8tdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuNDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLS4zcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zdGQtc2hlbGwtaGVyby1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAuODJyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcyKTtcclxuICBtYXJnaW46IDAuM3JlbSAwIDAgMDtcclxufVxyXG5cclxuLnN0ZC1zaGVsbC1saXZlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuODUpO1xyXG4gIGZvbnQtc2l6ZTogOS41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGQtc2hlbGwtbGl2ZS1kb3Qge1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICM0YWRlODA7XHJcbiAgYW5pbWF0aW9uOiBzdGQtc2hlbGwtYmxpbmsgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEFjdGlvbiBCdXR0b25zIChIZWFkZXIgQ29udHJvbHMpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLXNoZWxsLWFjdGlvbi1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAuNXJlbTtcclxuICBwYWRkaW5nOiAuNnJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IC44MnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UsIGJhY2tncm91bmQgLjJzIGVhc2UsIGJveC1zaGFkb3cgLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjI0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgxNSwgMjMsIDQyLCAuMik7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RkLXNoZWxsLWFjdGlvbi1idG4tLW5ldXRyYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE4KTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4yOCk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RkLXNoZWxsLWFjdGlvbi1idG4tLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgLjIpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgLjQpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyMzksIDY4LCA2OCwgLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEdsYXNzIFBhbmVsIChTdGF0cyBCYXIpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3RkLXNoZWxsLWdsYXNzLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMTgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMTBweCA0cHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RkLXNoZWxsLW1pbmktc3RhdCB7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIG1pbi13aWR0aDogODJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnN0ZC1zaGVsbC1taW5pLWRpdmlkZXIge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDb250ZW50IENvbnRhaW5lciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnN0ZC1jb250ZW50LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEFuaW1hdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBrZXlmcmFtZXMgc3RkLXNoZWxsLWZsb2F0IHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0ZC1zaGVsbC1yb3RhdGUge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0ZC1zaGVsbC1ibGluayB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIERlc2lnbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnN0dWRlbnQtc2lkZWJhci1jb2wge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAuc3RkLXNoZWxsLWhlcm8ge1xyXG4gICAgcGFkZGluZzogMXJlbSAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAuc3RkLXNoZWxsLWhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAuc3RkLXNoZWxsLWF2LXdyYXAge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuc3RkLXNoZWxsLWF2LXJpbmcge1xyXG4gICAgaW5zZXQ6IC02cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuc3RkLXNoZWxsLWhlcm8ge1xyXG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZC1zaGVsbC1oZXJvLWlubmVyIC5yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5zdGQtc2hlbGwtZ2xvdy0xLFxyXG4gIC5zdGQtc2hlbGwtZ2xvdy0yIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAuc3RkLXNoZWxsLWF2LXdyYXAge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgfVxyXG5cclxuICAuc3RkLXNoZWxsLWhlcm8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnN0ZC1zaGVsbC1oZXJvLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB9XHJcblxyXG4gIC5zdGQtc2hlbGwtZ2xhc3MtcGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnN0ZC1zaGVsbC1taW5pLWRpdmlkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentComponent;
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
//# sourceMappingURL=7506.js.map