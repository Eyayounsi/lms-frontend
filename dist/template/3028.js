"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3028],{

/***/ 73028:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/recruiter/recruiter-dashboard/recruiter-dashboard.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterDashboardComponent: () => (/* binding */ RecruiterDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_recruiter_recruiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/recruiter/recruiter.service */ 64280);






function RecruiterDashboardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 37)(5, "div", 38)(6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 34)(8, "div", 35)(9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 37)(11, "div", 38)(12, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 34)(14, "div", 35)(15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 37)(17, "div", 38)(18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 34)(20, "div", 35)(21, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 37)(23, "div", 38)(24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function RecruiterDashboardComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.statsError, "\n");
  }
}
function RecruiterDashboardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 42)(3, "div", 36)(4, "div", 43)(5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Partag\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Profils Partag\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 34)(16, "div", 51)(17, "div", 36)(18, "div", 43)(19, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Inscrits");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Total \u00C9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 34)(30, "div", 54)(31, "div", 36)(32, "div", 43)(33, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Actives");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Mes Offres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 34)(44, "div", 57)(45, "div", 36)(46, "div", 43)(47, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Non lus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.stats.sharedProfiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", (ctx_r0.stats.totalStudents > 0 ? ctx_r0.stats.sharedProfiles / ctx_r0.stats.totalStudents * 100 : 0) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.stats.totalStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.stats.pendingOffers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.stats.scheduledInterviews);
  }
}
function RecruiterDashboardComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Acc\u00E8s Rapides");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Fonctionnalit\u00E9s principales");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 67)(11, "div", 68)(12, "a", 69)(13, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 72)(16, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Profils \u00C9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Consulter les profils partag\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 68)(22, "a", 76)(23, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 72)(26, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u00C9tudiants Certifi\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Rechercher par certification");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 68)(32, "a", 78)(33, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 72)(36, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Offres d'Emploi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "G\u00E9rer mes offres et stages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 68)(42, "a", 80)(43, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 72)(46, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Messagerie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u00C9changer avec les \u00E9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 68)(52, "a", 82)(53, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 72)(56, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Modifier mes informations");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_shared_profiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_certified_students);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_job_offers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiterSettings);
  }
}
function RecruiterDashboardComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 84)(1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 72)(4, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Conseil du jour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Compl\u00E9tez votre profil recruteur pour appara\u00EEtre dans les recommandations aux \u00E9tudiants. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Compl\u00E9ter maintenant \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiterSettings);
  }
}
let RecruiterDashboardComponent = /*#__PURE__*/(() => {
  class RecruiterDashboardComponent {
    recruiterService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    // Informations de l'utilisateur connecté
    userName = '';
    userRole = '';
    // Statistiques depuis le backend
    stats = {
      sharedProfiles: 0,
      totalStudents: 0,
      pendingOffers: 0,
      scheduledInterviews: 0
    };
    statsLoading = true;
    statsError = '';
    constructor(recruiterService) {
      this.recruiterService = recruiterService;
    }
    ngOnInit() {
      this.userName = localStorage.getItem('fullName') || 'Recruteur';
      this.userRole = localStorage.getItem('role') || '';
      this.loadStats();
    }
    loadStats() {
      this.statsLoading = true;
      this.statsError = '';
      this.recruiterService.getStats().subscribe({
        next: data => {
          this.stats = data;
          this.statsLoading = false;
        },
        error: err => {
          this.statsError = 'Impossible de charger les statistiques.';
          this.statsLoading = false;
          console.error(err);
        }
      });
    }
    static ɵfac = function RecruiterDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RecruiterDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_recruiter_recruiter_service__WEBPACK_IMPORTED_MODULE_4__.RecruiterService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RecruiterDashboardComponent,
      selectors: [["app-recruiter-dashboard"]],
      decls: 53,
      vars: 9,
      consts: [[1, "rct-hero", "mb-4"], [1, "rct-glow", "rct-glow-1"], [1, "rct-glow", "rct-glow-2"], [1, "rct-hero-body"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "d-flex", "align-items-center", "gap-4", "mb-1"], [1, "rct-av-wrap"], [1, "rct-av-ring"], [1, "rct-av-border"], [1, "rct-av-circle"], [1, "ti", "ti-briefcase", 2, "font-size", "26px", "color", "#fff"], [1, "rct-av-pulse"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "rct-chip"], [1, "ti", "ti-star", "me-1", 2, "font-size", "9px"], [1, "rct-live"], [1, "rct-live-dot"], [1, "mb-0", "text-white", "fw-bold", 2, "letter-spacing", "-.3px"], [1, "mb-0", "mt-1", 2, "color", "rgba(255,255,255,.6)", "font-size", "13px"], [1, "col-lg-5"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "gap-3", "mt-3", "mt-lg-0"], [1, "rct-glass", "d-none", "d-md-flex", "align-items-center"], [1, "rct-stat", "text-center"], [1, "d-block", "fw-bold", "text-white", "fs-18"], [2, "color", "rgba(255,255,255,.55)", "font-size", "10px"], [1, "rct-stat-div"], ["title", "Actualiser", 1, "rct-refresh", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-refresh", 2, "font-size", "14px"], ["class", "row g-3 mb-4", 4, "ngIf"], ["class", "rct-alert-warn mb-4", 4, "ngIf"], ["class", "row g-4 mb-4", 4, "ngIf"], ["class", "rct-tip-banner", 4, "ngIf"], [1, "row", "g-3", "mb-4"], [1, "col-md-6", "col-xl-3"], [1, "rct-kpi"], [1, "rct-kpi-body"], [1, "rct-sk", "rct-sk-sm", "mb-2", 2, "width", "45%"], [1, "rct-sk", "rct-sk-lg", "mb-3", 2, "width", "55%"], [1, "rct-sk", 2, "width", "100%", "height", "5px", "border-radius", "5px"], [1, "rct-alert-warn", "mb-4"], [1, "ti", "ti-alert-circle", "me-2"], [1, "rct-kpi", "rct-kpi-emerald"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "rct-kpi-icon"], [1, "ti", "ti-users", "fs-20"], [1, "rct-kpi-badge"], [1, "rct-kpi-val", "fw-bold", "mb-1"], [1, "rct-kpi-label", "mb-2"], [1, "rct-kpi-bar-t"], [1, "rct-kpi-bar-f"], [1, "rct-kpi", "rct-kpi-violet"], [1, "ti", "ti-school", "fs-20"], [1, "rct-kpi-bar-f", 2, "width", "75%"], [1, "rct-kpi", "rct-kpi-amber"], [1, "ti", "ti-file-text", "fs-20"], [1, "rct-kpi-bar-f", 2, "width", "50%"], [1, "rct-kpi", "rct-kpi-sky"], [1, "ti", "ti-message-circle", "fs-20"], [1, "rct-kpi-bar-f", 2, "width", "35%"], [1, "row", "g-4", "mb-4"], [1, "col-12"], [1, "rct-section-hd", "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "rct-section-ico"], [1, "ti", "ti-bolt", 2, "font-size", "17px"], [1, "fw-bold", "mb-0", 2, "font-size", "15px", "letter-spacing", "-.2px"], [1, "text-muted", "small", "mb-0"], [1, "row", "g-3"], [1, "col-md-4", "col-sm-6"], [1, "rct-quick-link", "rct-ql-emerald", 3, "routerLink"], [1, "rct-ql-icon"], [1, "ti", "ti-users"], [1, "flex-grow-1"], [1, "fw-semibold", "mb-0", "small"], [1, "text-muted"], [1, "ti", "ti-chevron-right", "rct-ql-arrow", "text-muted", "small"], [1, "rct-quick-link", "rct-ql-amber", 3, "routerLink"], [1, "ti", "ti-medal"], [1, "rct-quick-link", "rct-ql-violet", 3, "routerLink"], [1, "ti", "ti-briefcase"], [1, "rct-quick-link", "rct-ql-sky", 3, "routerLink"], [1, "ti", "ti-message-circle"], [1, "rct-quick-link", "rct-ql-rose", 3, "routerLink"], [1, "ti", "ti-user-circle"], [1, "rct-tip-banner"], [1, "rct-tip-icon"], [1, "ti", "ti-sparkles", 2, "font-size", "22px", "color", "#03C95A"], [1, "fw-bold", "mb-0", "small"], [1, "rct-tip-link", "ms-1", 3, "routerLink"]],
      template: function RecruiterDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div")(14, "div", 13)(15, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Recruteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "ACTIF");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h3", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Tableau de bord recruteur \u2014 g\u00E9rez vos offres et trouvez les meilleurs talents ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 20)(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "small", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Profils");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 23)(35, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "small", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Offres");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 23)(41, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "small", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u00C9tudiants");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecruiterDashboardComponent_Template_button_click_45_listener() {
            return ctx.loadStats();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, RecruiterDashboardComponent_div_48_Template, 25, 0, "div", 29)(49, RecruiterDashboardComponent_div_49_Template, 3, 1, "div", 30)(50, RecruiterDashboardComponent_div_50_Template, 57, 6, "div", 29)(51, RecruiterDashboardComponent_div_51_Template, 61, 5, "div", 31)(52, RecruiterDashboardComponent_div_52_Template, 10, 1, "div", 32);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Bienvenue,\u00A0", ctx.userName, "\u00A0! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.stats.sharedProfiles);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.stats.pendingOffers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.stats.totalStudents);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statsError && !ctx.statsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.statsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.statsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.statsLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.rct-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03C95A 0%, #392C7D 55%, #0DCAF0 100%);\n  border-radius: 20px;\n  padding: 28px 28px 24px;\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_rct-fade-in 0.5s ease;\n  box-shadow: 0 12px 40px rgba(3, 201, 90, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.14);\n}\n.rct-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n  background-size: 24px 24px;\n}\n\n.rct-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.rct-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.rct-glow-1[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n  background: radial-gradient(circle, rgba(13, 202, 240, 0.22) 0%, transparent 70%);\n  top: -120px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_rct-float 7s ease-in-out infinite;\n}\n\n.rct-glow-2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  background: radial-gradient(circle, rgba(3, 201, 90, 0.15) 0%, transparent 70%);\n  bottom: -70px;\n  left: 5%;\n  animation: _ngcontent-%COMP%_rct-float 9s ease-in-out infinite reverse;\n}\n\n\n\n.rct-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 68px;\n  height: 68px;\n}\n\n.rct-av-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -8px;\n  border-radius: 50%;\n  border: 1.5px dashed rgba(255, 255, 255, 0.45);\n  animation: _ngcontent-%COMP%_rct-rotate 12s linear infinite;\n}\n\n.rct-av-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #392C7D, #0DCAF0);\n}\n\n.rct-av-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #392C7D);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rct-av-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -10px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(3, 201, 90, 0.35);\n  animation: _ngcontent-%COMP%_rct-pulse 2.5s ease-out infinite;\n}\n\n\n\n.rct-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 16px;\n  padding: 10px 4px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n\n.rct-stat[_ngcontent-%COMP%] {\n  padding: 0 14px;\n  min-width: 72px;\n}\n\n.rct-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n\n\n.rct-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.rct-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_rct-blink 1.2s ease-in-out infinite;\n}\n\n.rct-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n\n\n\n.rct-refresh[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  color: #fff;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 24px;\n  cursor: pointer;\n  transition: all 0.22s;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.rct-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  border-color: rgba(255, 255, 255, 0.45);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(3, 201, 90, 0.3);\n}\n\n\n\n.rct-kpi[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.055);\n  background: #fff;\n  overflow: hidden;\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;\n  animation: _ngcontent-%COMP%_rct-fade-up 0.35s ease both;\n}\n.rct-kpi[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  border-radius: 16px 16px 0 0;\n}\n.rct-kpi[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.01);\n  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.11);\n}\n.rct-kpi[_ngcontent-%COMP%]:hover::before {\n  height: 4px;\n}\n\n.rct-kpi-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n}\n\n.rct-kpi-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.rct-kpi-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n  margin: 6px 0 2px;\n}\n\n.rct-kpi-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 12px;\n  margin: 0;\n}\n\n.rct-kpi-bar-t[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n.rct-kpi-bar-f[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.6s ease;\n}\n\n.rct-kpi-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.rct-kpi-emerald[_ngcontent-%COMP%]::before {\n  background: rgb(3, 201, 90);\n}\n.rct-kpi-emerald[_ngcontent-%COMP%]   .rct-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: rgb(3, 201, 90);\n}\n.rct-kpi-emerald[_ngcontent-%COMP%]   .rct-kpi-val[_ngcontent-%COMP%] {\n  color: rgb(3, 201, 90);\n}\n.rct-kpi-emerald[_ngcontent-%COMP%]   .rct-kpi-bar-f[_ngcontent-%COMP%] {\n  background: rgb(3, 201, 90);\n}\n.rct-kpi-emerald[_ngcontent-%COMP%]   .rct-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: rgb(3, 201, 90);\n}\n.rct-kpi-emerald[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(3, 201, 90, 0.15);\n}\n\n.rct-kpi-violet[_ngcontent-%COMP%]::before {\n  background: rgb(57, 44, 125);\n}\n.rct-kpi-violet[_ngcontent-%COMP%]   .rct-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: rgb(57, 44, 125);\n}\n.rct-kpi-violet[_ngcontent-%COMP%]   .rct-kpi-val[_ngcontent-%COMP%] {\n  color: rgb(57, 44, 125);\n}\n.rct-kpi-violet[_ngcontent-%COMP%]   .rct-kpi-bar-f[_ngcontent-%COMP%] {\n  background: rgb(57, 44, 125);\n}\n.rct-kpi-violet[_ngcontent-%COMP%]   .rct-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: rgb(57, 44, 125);\n}\n.rct-kpi-violet[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(57, 44, 125, 0.15);\n}\n\n.rct-kpi-amber[_ngcontent-%COMP%]::before {\n  background: rgb(245, 159, 11);\n}\n.rct-kpi-amber[_ngcontent-%COMP%]   .rct-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 159, 11, 0.1);\n  color: rgb(245, 159, 11);\n}\n.rct-kpi-amber[_ngcontent-%COMP%]   .rct-kpi-val[_ngcontent-%COMP%] {\n  color: rgb(245, 159, 11);\n}\n.rct-kpi-amber[_ngcontent-%COMP%]   .rct-kpi-bar-f[_ngcontent-%COMP%] {\n  background: rgb(245, 159, 11);\n}\n.rct-kpi-amber[_ngcontent-%COMP%]   .rct-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(245, 159, 11, 0.1);\n  color: rgb(245, 159, 11);\n}\n.rct-kpi-amber[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(245, 159, 11, 0.15);\n}\n\n.rct-kpi-sky[_ngcontent-%COMP%]::before {\n  background: rgb(13, 202, 240);\n}\n.rct-kpi-sky[_ngcontent-%COMP%]   .rct-kpi-icon[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.1);\n  color: rgb(13, 202, 240);\n}\n.rct-kpi-sky[_ngcontent-%COMP%]   .rct-kpi-val[_ngcontent-%COMP%] {\n  color: rgb(13, 202, 240);\n}\n.rct-kpi-sky[_ngcontent-%COMP%]   .rct-kpi-bar-f[_ngcontent-%COMP%] {\n  background: rgb(13, 202, 240);\n}\n.rct-kpi-sky[_ngcontent-%COMP%]   .rct-kpi-badge[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.1);\n  color: rgb(13, 202, 240);\n}\n.rct-kpi-sky[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(13, 202, 240, 0.15);\n}\n\n\n\n.rct-sk[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_rct-shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n\n.rct-sk-sm[_ngcontent-%COMP%] {\n  height: 14px;\n}\n\n.rct-sk-lg[_ngcontent-%COMP%] {\n  height: 28px;\n}\n\n\n\n.rct-section-ico[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.12), rgba(57, 44, 125, 0.1));\n  color: #03C95A;\n  border: 1px solid rgba(3, 201, 90, 0.16);\n}\n\n\n\n.rct-quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 15px;\n  border-radius: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  background: linear-gradient(135deg, #fafcff, #f6f8ff);\n  text-decoration: none !important;\n  color: #374151;\n  transition: all 0.22s ease;\n}\n.rct-quick-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);\n  color: inherit;\n}\n.rct-quick-link[_ngcontent-%COMP%]:hover   .rct-ql-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.rct-quick-link[_ngcontent-%COMP%]   .rct-ql-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.rct-quick-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: color 0.2s;\n}\n\n.rct-ql-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: transform 0.2s ease;\n}\n\n.rct-ql-emerald[_ngcontent-%COMP%]   .rct-ql-icon[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.1);\n  color: rgb(3, 201, 90);\n}\n.rct-ql-emerald[_ngcontent-%COMP%]:hover {\n  border-color: rgba(3, 201, 90, 0.28);\n  background: rgba(3, 201, 90, 0.04);\n}\n.rct-ql-emerald[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: rgb(3, 201, 90) !important;\n}\n.rct-ql-emerald[_ngcontent-%COMP%]:hover   .rct-ql-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background: rgba(3, 201, 90, 0.16);\n}\n.rct-ql-emerald[_ngcontent-%COMP%]:hover   .rct-ql-arrow[_ngcontent-%COMP%] {\n  color: rgb(3, 201, 90) !important;\n}\n\n.rct-ql-violet[_ngcontent-%COMP%]   .rct-ql-icon[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.1);\n  color: rgb(57, 44, 125);\n}\n.rct-ql-violet[_ngcontent-%COMP%]:hover {\n  border-color: rgba(57, 44, 125, 0.28);\n  background: rgba(57, 44, 125, 0.04);\n}\n.rct-ql-violet[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: rgb(57, 44, 125) !important;\n}\n.rct-ql-violet[_ngcontent-%COMP%]:hover   .rct-ql-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background: rgba(57, 44, 125, 0.16);\n}\n.rct-ql-violet[_ngcontent-%COMP%]:hover   .rct-ql-arrow[_ngcontent-%COMP%] {\n  color: rgb(57, 44, 125) !important;\n}\n\n.rct-ql-amber[_ngcontent-%COMP%]   .rct-ql-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 159, 11, 0.1);\n  color: rgb(245, 159, 11);\n}\n.rct-ql-amber[_ngcontent-%COMP%]:hover {\n  border-color: rgba(245, 159, 11, 0.28);\n  background: rgba(245, 159, 11, 0.04);\n}\n.rct-ql-amber[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: rgb(245, 159, 11) !important;\n}\n.rct-ql-amber[_ngcontent-%COMP%]:hover   .rct-ql-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background: rgba(245, 159, 11, 0.16);\n}\n.rct-ql-amber[_ngcontent-%COMP%]:hover   .rct-ql-arrow[_ngcontent-%COMP%] {\n  color: rgb(245, 159, 11) !important;\n}\n\n.rct-ql-sky[_ngcontent-%COMP%]   .rct-ql-icon[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.1);\n  color: rgb(13, 202, 240);\n}\n.rct-ql-sky[_ngcontent-%COMP%]:hover {\n  border-color: rgba(13, 202, 240, 0.28);\n  background: rgba(13, 202, 240, 0.04);\n}\n.rct-ql-sky[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: rgb(13, 202, 240) !important;\n}\n.rct-ql-sky[_ngcontent-%COMP%]:hover   .rct-ql-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background: rgba(13, 202, 240, 0.16);\n}\n.rct-ql-sky[_ngcontent-%COMP%]:hover   .rct-ql-arrow[_ngcontent-%COMP%] {\n  color: rgb(13, 202, 240) !important;\n}\n\n.rct-ql-rose[_ngcontent-%COMP%]   .rct-ql-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 70, 103, 0.1);\n  color: rgb(255, 70, 103);\n}\n.rct-ql-rose[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 70, 103, 0.28);\n  background: rgba(255, 70, 103, 0.04);\n}\n.rct-ql-rose[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: rgb(255, 70, 103) !important;\n}\n.rct-ql-rose[_ngcontent-%COMP%]:hover   .rct-ql-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  background: rgba(255, 70, 103, 0.16);\n}\n.rct-ql-rose[_ngcontent-%COMP%]:hover   .rct-ql-arrow[_ngcontent-%COMP%] {\n  color: rgb(255, 70, 103) !important;\n}\n\n\n\n.rct-alert-warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.09);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  color: #92400e;\n  border-radius: 12px;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n}\n\n\n\n.rct-tip-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.04));\n  border: 1px solid rgba(3, 201, 90, 0.16);\n  border-radius: 14px;\n  padding: 16px 18px;\n  animation: _ngcontent-%COMP%_rct-fade-in 0.6s ease 0.2s both;\n}\n\n.rct-tip-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(3, 201, 90, 0.1);\n}\n\n.rct-tip-link[_ngcontent-%COMP%] {\n  color: #392C7D;\n  font-weight: 600;\n  text-decoration: none;\n}\n.rct-tip-link[_ngcontent-%COMP%]:hover {\n  color: #03C95A;\n  text-decoration: underline;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_rct-fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-18px);\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.6;\n  }\n  100% {\n    transform: scale(1.55);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n\n.dark-mode[_nghost-%COMP%]   .rct-kpi[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-kpi[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-kpi[_ngcontent-%COMP%]   .rct-kpi-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-kpi[_ngcontent-%COMP%]   .rct-kpi-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .rct-kpi[_ngcontent-%COMP%]   .rct-kpi-bar-t[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-kpi[_ngcontent-%COMP%]   .rct-kpi-bar-t[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04) !important;\n  border-color: rgba(255, 255, 255, 0.07) !important;\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e2e8f0 !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #64748b !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-quick-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-section-ico[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-section-ico[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.12), rgba(57, 44, 125, 0.12)) !important;\n  border-color: rgba(3, 201, 90, 0.18) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-tip-banner[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-tip-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.07), rgba(57, 44, 125, 0.05)) !important;\n  border-color: rgba(3, 201, 90, 0.14) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-sk[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-sk[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1a1a2b 25%, #222235 50%, #1a1a2b 75%) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-alert-warn[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-alert-warn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1) !important;\n  border-color: rgba(245, 158, 11, 0.2) !important;\n  color: #fde68a !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL3JlY3J1aXRlci1kYXNoYm9hcmQvcmVjcnVpdGVyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OztnRkFBQTtBQUtBLGtGQUFBO0FBQ0E7RUFDRSwwRUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1RkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFBb0IsUUFBQTtFQUFVLG9CQUFBO0VBQXNCLFVBQUE7RUFDcEQsd0ZBQUE7RUFDQSwwQkFBQTtBQUlKOztBQURBO0VBQWlCLGtCQUFBO0VBQW9CLFVBQUE7QUFNckM7O0FBSkE7RUFBWSxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixvQkFBQTtBQVVwRDs7QUFUQTtFQUNFLFlBQUE7RUFBYyxhQUFBO0VBQ2QsaUZBQUE7RUFDQSxXQUFBO0VBQWEsU0FBQTtFQUNiLDRDQUFBO0FBY0Y7O0FBWkE7RUFDRSxZQUFBO0VBQWMsYUFBQTtFQUNkLCtFQUFBO0VBQ0EsYUFBQTtFQUFlLFFBQUE7RUFDZixvREFBQTtBQWlCRjs7QUFkQSxXQUFBO0FBQ0E7RUFBZSxrQkFBQTtFQUFvQixjQUFBO0VBQWdCLFdBQUE7RUFBYSxZQUFBO0FBcUJoRTs7QUFwQkE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFDakMsOENBQUE7RUFDQSx5Q0FBQTtBQXlCRjs7QUF2QkE7RUFDRSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFDOUIsOERBQUE7QUE0QkY7O0FBMUJBO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGtCQUFBO0VBQ2hDLHFEQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBaUN0Qzs7QUEvQkE7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VB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V0o7QUEzV0k7RUFBaUIsY0FBQTtBQThXckI7QUE3V0k7RUFBaUIsZ0RBQUE7QUFnWHJCO0FBN1dFO0VBQ0UsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLHlCQUFBO0FBK1dKO0FBOVdJO0VBQUkseUJBQUE7QUFpWFI7QUFoWEk7RUFBUSx5QkFBQTtBQW1YWjtBQWxYSTtFQUNFLGdEQUFBO0FBb1hOO0FBaFhFO0VBQ0UsK0ZBQUE7RUFDQSwrQ0FBQTtBQWtYSjtBQS9XRTtFQUNFLCtGQUFBO0VBQ0EsK0NBQUE7QUFpWEo7QUE5V0U7RUFDRSxvRkFBQTtBQWdYSjtBQTdXRTtFQUNFLDhDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtBQStXSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgUmVjcnVpdGVyIERhc2hib2FyZCDDosKAwpQgUHJlbWl1bSBSZWRlc2lnblxuICAgUGFsZXR0ZTogRW1lcmFsZCAjMDNDOTVBIMOCwrcgVmlvbGV0ICMzOTJDN0Qgw4LCtyBBbWJlciAjRjU5RTBCIMOCwrcgU2t5ICMwRENBRjBcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgSGVybyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5yY3QtaGVybyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEgMCUsICMzOTJDN0QgNTUlLCAjMERDQUYwIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyOHB4IDI4cHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHJjdC1mYWRlLWluIC41cyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDMsMjAxLDkwLC4yOCksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMTQpO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwuMSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xuICB9XG59XG4ucmN0LWhlcm8tYm9keSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgfVxuXG4ucmN0LWdsb3cgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1yYWRpdXM6IDUwJTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5yY3QtZ2xvdy0xIHtcbiAgd2lkdGg6IDM2MHB4OyBoZWlnaHQ6IDM2MHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDEzLDIwMiwyNDAsLjIyKSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgdG9wOiAtMTIwcHg7IHJpZ2h0OiAyJTtcbiAgYW5pbWF0aW9uOiByY3QtZmxvYXQgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG4ucmN0LWdsb3ctMiB7XG4gIHdpZHRoOiAyMjBweDsgaGVpZ2h0OiAyMjBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgzLDIwMSw5MCwuMTUpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICBib3R0b206IC03MHB4OyBsZWZ0OiA1JTtcbiAgYW5pbWF0aW9uOiByY3QtZmxvYXQgOXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgcmV2ZXJzZTtcbn1cblxuLyogQXZhdGFyICovXG4ucmN0LWF2LXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwOyB3aWR0aDogNjhweDsgaGVpZ2h0OiA2OHB4OyB9XG4ucmN0LWF2LXJpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHJnYmEoMjU1LDI1NSwyNTUsLjQ1KTtcbiAgYW5pbWF0aW9uOiByY3Qtcm90YXRlIDEycyBsaW5lYXIgaW5maW5pdGU7XG59XG4ucmN0LWF2LWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzQzk1QSwgIzM5MkM3RCwgIzBEQ0FGMCk7XG59XG4ucmN0LWF2LWNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDNweDsgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDNDOTVBLCAjMzkyQzdEKTtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucmN0LWF2LXB1bHNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDMsMjAxLDkwLC4zNSk7XG4gIGFuaW1hdGlvbjogcmN0LXB1bHNlIDIuNXMgZWFzZS1vdXQgaW5maW5pdGU7XG59XG5cbi8qIEdsYXNzIHBhbmVsICovXG4ucmN0LWdsYXNzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjE4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMTBweCA0cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xufVxuLnJjdC1zdGF0IHsgcGFkZGluZzogMCAxNHB4OyBtaW4td2lkdGg6IDcycHg7IH1cbi5yY3Qtc3RhdC1kaXYgeyB3aWR0aDogMXB4OyBoZWlnaHQ6IDMycHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyB9XG5cbi8qIExpdmUgLyBjaGlwICovXG4ucmN0LWxpdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7IGZvbnQtc2l6ZTogOS41cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMTBweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5yY3QtbGl2ZS1kb3Qge1xuICB3aWR0aDogN3B4OyBoZWlnaHQ6IDdweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjNGFkZTgwO1xuICBhbmltYXRpb246IHJjdC1ibGluayAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLnJjdC1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE0KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiA5LjVweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC43cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDRweCAxMnB4OyBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBSZWZyZXNoIENUQSAqL1xuLnJjdC1yZWZyZXNoIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTQpOyBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI4KTtcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNjAwOyBwYWRkaW5nOiA4cHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgLjIycztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjI2KTsgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC40NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMywyMDEsOTAsLjMpO1xuICB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBLUEkgQ2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmN0LWtwaSB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA1NSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycywgYm94LXNoYWRvdyAuMnMsIGJvcmRlci1jb2xvciAuMnM7XG4gIGFuaW1hdGlvbjogcmN0LWZhZGUtdXAgLjM1cyBlYXNlIGJvdGg7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDtcbiAgICBoZWlnaHQ6IDNweDsgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wMSk7XG4gICAgYm94LXNoYWRvdzogMCAxOHB4IDM4cHggcmdiYSgwLDAsMCwuMTEpO1xuICAgICY6OmJlZm9yZSB7IGhlaWdodDogNHB4OyB9XG4gIH1cbn1cbi5yY3Qta3BpLWJvZHkgeyBwYWRkaW5nOiAxOHB4IDE4cHggMTZweDsgfVxuLnJjdC1rcGktaWNvbiB7XG4gIHdpZHRoOiA0NnB4OyBoZWlnaHQ6IDQ2cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7IGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4O1xufVxuLnJjdC1rcGktdmFsICAgeyBmb250LXNpemU6IDJyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGxldHRlci1zcGFjaW5nOiAtLjVweDsgbGluZS1oZWlnaHQ6IDEuMTsgbWFyZ2luOiA2cHggMCAycHg7IH1cbi5yY3Qta3BpLWxhYmVsIHsgY29sb3I6ICM2YjcyODA7IGZvbnQtc2l6ZTogMTJweDsgbWFyZ2luOiAwOyB9XG4ucmN0LWtwaS1iYXItdCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4wNik7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbi10b3A6IDEwcHg7IH1cbi5yY3Qta3BpLWJhci1mIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiA1cHg7IHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlOyB9XG4ucmN0LWtwaS1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5AbWl4aW4gcmN0LWtwaS1jb2xvcigkciwkZywkYikge1xuICAmOjpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2IoJHIsJGcsJGIpOyB9XG4gIC5yY3Qta3BpLWljb24geyBiYWNrZ3JvdW5kOiByZ2JhKCRyLCRnLCRiLC4xKTsgY29sb3I6IHJnYigkciwkZywkYik7IH1cbiAgLnJjdC1rcGktdmFsICB7IGNvbG9yOiByZ2IoJHIsJGcsJGIpOyB9XG4gIC5yY3Qta3BpLWJhci1mIHsgYmFja2dyb3VuZDogcmdiKCRyLCRnLCRiKTsgfVxuICAucmN0LWtwaS1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoJHIsJGcsJGIsLjEpOyBjb2xvcjogcmdiKCRyLCRnLCRiKTsgfVxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgkciwkZywkYiwuMTUpOyB9XG59XG4ucmN0LWtwaS1lbWVyYWxkIHsgQGluY2x1ZGUgcmN0LWtwaS1jb2xvcigzLCAgMjAxLCAgOTApOyB9XG4ucmN0LWtwaS12aW9sZXQgIHsgQGluY2x1ZGUgcmN0LWtwaS1jb2xvcig1NywgIDQ0LCAxMjUpOyB9XG4ucmN0LWtwaS1hbWJlciAgIHsgQGluY2x1ZGUgcmN0LWtwaS1jb2xvcigyNDUsMTU5LCAgMTEpOyB9XG4ucmN0LWtwaS1za3kgICAgIHsgQGluY2x1ZGUgcmN0LWtwaS1jb2xvcigxMywgMjAyLCAyNDApOyB9XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBTa2VsZXRvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5yY3Qtc2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMGY0ZjggMjUlLCAjZTJlYWYwIDUwJSwgI2YwZjRmOCA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiByY3Qtc2hpbW1lciAxLjRzIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7IGRpc3BsYXk6IGJsb2NrO1xufVxuLnJjdC1zay1zbSB7IGhlaWdodDogMTRweDsgfVxuLnJjdC1zay1sZyB7IGhlaWdodDogMjhweDsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgU2VjdGlvbiBoZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmN0LXNlY3Rpb24taGQgeyB9XG4ucmN0LXNlY3Rpb24taWNvIHtcbiAgd2lkdGg6IDM4cHg7IGhlaWdodDogMzhweDsgYm9yZGVyLXJhZGl1czogMTBweDsgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsMjAxLDkwLC4xMiksIHJnYmEoNTcsNDQsMTI1LC4xKSk7XG4gIGNvbG9yOiAjMDNDOTVBO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMsMjAxLDkwLC4xNik7XG59XG5cbi8qIMOiwpTCgMOiwpTCgMOiwpTCgCBRdWljayBMaW5rcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5yY3QtcXVpY2stbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDtcbiAgcGFkZGluZzogMTNweCAxNXB4OyBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmYWZjZmYsICNmNmY4ZmYpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsgY29sb3I6ICMzNzQxNTE7XG4gIHRyYW5zaXRpb246IGFsbCAuMjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsMCwwLC4wOSk7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLnJjdC1xbC1hcnJvdyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpOyB9XG4gIH1cbiAgLnJjdC1xbC1hcnJvdyB7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IH1cbiAgcCB7IHRyYW5zaXRpb246IGNvbG9yIC4yczsgfVxufVxuXG4ucmN0LXFsLWljb24ge1xuICB3aWR0aDogNDJweDsgaGVpZ2h0OiA0MnB4OyBib3JkZXItcmFkaXVzOiAxMXB4OyBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xufVxuXG5AbWl4aW4gcmN0LXFsLWNvbG9yKCRyLCRnLCRiKSB7XG4gIC5yY3QtcWwtaWNvbiB7IGJhY2tncm91bmQ6IHJnYmEoJHIsJGcsJGIsLjEpOyBjb2xvcjogcmdiKCRyLCRnLCRiKTsgfVxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJHIsJGcsJGIsLjI4KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRyLCRnLCRiLC4wNCk7XG4gICAgcCB7IGNvbG9yOiByZ2IoJHIsJGcsJGIpICFpbXBvcnRhbnQ7IH1cbiAgICAucmN0LXFsLWljb24geyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IGJhY2tncm91bmQ6IHJnYmEoJHIsJGcsJGIsLjE2KTsgfVxuICAgIC5yY3QtcWwtYXJyb3cgeyBjb2xvcjogcmdiKCRyLCRnLCRiKSAhaW1wb3J0YW50OyB9XG4gIH1cbn1cbi5yY3QtcWwtZW1lcmFsZCB7IEBpbmNsdWRlIHJjdC1xbC1jb2xvcigzLCAgMjAxLCAgOTApOyB9XG4ucmN0LXFsLXZpb2xldCAgeyBAaW5jbHVkZSByY3QtcWwtY29sb3IoNTcsICA0NCwgMTI1KTsgfVxuLnJjdC1xbC1hbWJlciAgIHsgQGluY2x1ZGUgcmN0LXFsLWNvbG9yKDI0NSwxNTksICAxMSk7IH1cbi5yY3QtcWwtc2t5ICAgICB7IEBpbmNsdWRlIHJjdC1xbC1jb2xvcigxMywgMjAyLCAyNDApOyB9XG4ucmN0LXFsLXJvc2UgICAgeyBAaW5jbHVkZSByY3QtcWwtY29sb3IoMjU1LCA3MCwgMTAzKTsgfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgQWxlcnQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmN0LWFsZXJ0LXdhcm4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjA5KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTU4LDExLC4zKTtcbiAgY29sb3I6ICM5MjQwMGU7IGJvcmRlci1yYWRpdXM6IDEycHg7IHBhZGRpbmc6IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFRpcCBCYW5uZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmN0LXRpcC1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsMjAxLDkwLC4wNiksIHJnYmEoNTcsNDQsMTI1LC4wNCkpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMsMjAxLDkwLC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7IHBhZGRpbmc6IDE2cHggMThweDtcbiAgYW5pbWF0aW9uOiByY3QtZmFkZS1pbiAuNnMgZWFzZSAuMnMgYm90aDtcbn1cbi5yY3QtdGlwLWljb24ge1xuICB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywyMDEsOTAsLjEpO1xufVxuLnJjdC10aXAtbGluayB7XG4gIGNvbG9yOiAjMzkyQzdEOyBmb250LXdlaWdodDogNjAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIgeyBjb2xvcjogIzAzQzk1QTsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEFuaW1hdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG5Aa2V5ZnJhbWVzIHJjdC1mYWRlLWluICB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IG5vbmU7IH0gfVxuQGtleWZyYW1lcyByY3QtZmFkZS11cCAgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBub25lOyB9IH1cbkBrZXlmcmFtZXMgcmN0LWZsb2F0ICAgIHsgMCUsMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE4cHgpOyB9IH1cbkBrZXlmcmFtZXMgcmN0LXJvdGF0ZSAgIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cbkBrZXlmcmFtZXMgcmN0LXB1bHNlICAgIHsgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAuNjsgfSAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjU1KTsgb3BhY2l0eTogMDsgfSB9XG5Aa2V5ZnJhbWVzIHJjdC1ibGluayAgICB7IDAlLDEwMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IC40OyB9IH1cbkBrZXlmcmFtZXMgcmN0LXNoaW1tZXIgIHsgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH0gMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH0gfVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgREFSSyBNT0RFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuOmhvc3QtY29udGV4dCguZGFyay1tb2RlKSB7XG4gIC5yY3Qta3BpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTJiICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNykgIWltcG9ydGFudDtcbiAgICAucmN0LWtwaS1sYWJlbCB7IGNvbG9yOiAjNjQ3NDhiOyB9XG4gICAgLnJjdC1rcGktYmFyLXQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNykgIWltcG9ydGFudDsgfVxuICB9XG5cbiAgLnJjdC1xdWljay1saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNCkgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZTJlOGYwICFpbXBvcnRhbnQ7XG4gICAgcCB7IGNvbG9yOiAjZTJlOGYwICFpbXBvcnRhbnQ7IH1cbiAgICBzbWFsbCB7IGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7IH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA3KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5yY3Qtc2VjdGlvbi1pY28ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMywyMDEsOTAsLjEyKSwgcmdiYSg1Nyw0NCwxMjUsLjEyKSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMywyMDEsOTAsLjE4KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJjdC10aXAtYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsMjAxLDkwLC4wNyksIHJnYmEoNTcsNDQsMTI1LC4wNSkpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDMsMjAxLDkwLC4xNCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yY3Qtc2sge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFhMWEyYiAyNSUsICMyMjIyMzUgNTAlLCAjMWExYTJiIDc1JSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yY3QtYWxlcnQtd2FybiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLC4xKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsMTU4LDExLC4yKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmRlNjhhICFpbXBvcnRhbnQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return RecruiterDashboardComponent;
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
//# sourceMappingURL=3028.js.map