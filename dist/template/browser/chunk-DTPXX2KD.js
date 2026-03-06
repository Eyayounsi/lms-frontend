import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/recruiter/common/recruiter-sidebar/recruiter-sidebar.component.ts
var RecruiterSidebarComponent = class _RecruiterSidebarComponent {
  authService;
  routes = routes;
  constructor(authService) {
    this.authService = authService;
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function RecruiterSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterSidebarComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterSidebarComponent, selectors: [["app-recruiter-sidebar"]], decls: 25, vars: 3, consts: [[1, "settings-sidebar", "mb-lg-0"], [1, "mb-3"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "isax", "isax-profile-2user5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], ["href", "javascript:void(0)", 1, "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-logout5", "me-2"]], template: function RecruiterSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h6", 1);
      \u0275\u0275text(3, "Espace Recruteur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul", 2)(5, "li")(6, "a", 3);
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Tableau de bord ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 3);
      \u0275\u0275element(11, "i", 5);
      \u0275\u0275text(12, "Profils \xC9tudiants ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(13, "hr");
      \u0275\u0275elementStart(14, "h6", 1);
      \u0275\u0275text(15, "Param\xE8tres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul")(17, "li")(18, "a", 3);
      \u0275\u0275element(19, "i", 6);
      \u0275\u0275text(20, "Mon Profil ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 7);
      \u0275\u0275listener("click", function RecruiterSidebarComponent_Template_a_click_22_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275element(23, "i", 8);
      \u0275\u0275text(24, "D\xE9connexion ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.recruiter_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.recruiter_shared_profiles);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.recruiterSettings);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ["\n\n/*# sourceMappingURL=recruiter-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: '<div class="settings-sidebar mb-lg-0">\r\n    <div>\r\n        <h6 class="mb-3">Espace Recruteur</h6>\r\n        <ul class="mb-3 pb-1">\r\n            <li>\r\n                <a [routerLink]="routes.recruiter_dashboard" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-grid-35 me-2"></i>Tableau de bord\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]="routes.recruiter_shared_profiles" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-profile-2user5 me-2"></i>Profils \xC9tudiants\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <hr>\r\n        <h6 class="mb-3">Param\xE8tres</h6>\r\n        <ul>\r\n            <li>\r\n                <a [routerLink]="routes.recruiterSettings" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-setting-25 me-2"></i>Mon Profil\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0)" (click)="onLogout()" class="d-inline-flex align-items-center">\r\n                    <i class="isax isax-logout5 me-2"></i>D\xE9connexion\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n', styles: ["/* src/app/features/recruiter/common/recruiter-sidebar/recruiter-sidebar.component.scss */\n/*# sourceMappingURL=recruiter-sidebar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterSidebarComponent, { className: "RecruiterSidebarComponent", filePath: "src/app/features/recruiter/common/recruiter-sidebar/recruiter-sidebar.component.ts", lineNumber: 14 });
})();

// src/app/features/recruiter/recruiter.component.ts
var RecruiterComponent = class _RecruiterComponent {
  static \u0275fac = function RecruiterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterComponent, selectors: [["app-recruiter"]], decls: 6, vars: 0, consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"]], template: function RecruiterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-recruiter-sidebar", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule, RouterOutlet, RecruiterSidebarComponent], styles: ["\n\n/*# sourceMappingURL=recruiter.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter", imports: [RouterModule, RecruiterSidebarComponent], template: '<div class="content">\r\n  <div class="container">\r\n    <div class="row">\r\n\r\n      <!-- Sidebar Recruteur -->\r\n      <app-recruiter-sidebar class="col-lg-3"></app-recruiter-sidebar>\r\n      <!-- /Sidebar Recruteur -->\r\n\r\n      <!-- Contenu principal -->\r\n      <div class="col-lg-9">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <!-- /Contenu principal -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/recruiter/recruiter.component.scss */\n/*# sourceMappingURL=recruiter.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterComponent, { className: "RecruiterComponent", filePath: "src/app/features/recruiter/recruiter.component.ts", lineNumber: 11 });
})();
export {
  RecruiterComponent
};
//# sourceMappingURL=chunk-DTPXX2KD.js.map
