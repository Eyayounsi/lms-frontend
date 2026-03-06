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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.ts
var SuperadminSidebarComponent = class _SuperadminSidebarComponent {
  authService;
  routes = routes;
  userName = localStorage.getItem("fullName") || "Super Administrateur";
  constructor(authService) {
    this.authService = authService;
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function SuperadminSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminSidebarComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSidebarComponent, selectors: [["app-superadmin-sidebar"]], decls: 32, vars: 4, consts: [[1, "settings-sidebar", "mb-lg-0"], [1, "d-flex", "align-items-center", "gap-3", "p-3", "mb-3", "rounded-3", "superadmin-profile-box"], [1, "avatar", "avatar-md", "rounded-circle", "bg-warning", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "48px", "height", "48px"], [1, "ti", "ti-crown", "fs-22", "text-white"], [1, "overflow-hidden"], [1, "mb-0", "fw-bold", "text-truncate", "text-white", 2, "max-width", "150px"], [1, "badge", "bg-warning", "text-dark", "small"], [1, "mb-3", "text-muted", "text-uppercase", "small", "fw-semibold"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "isax", "isax-profile-2user5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], ["href", "javascript:void(0)", 1, "d-inline-flex", "align-items-center", "text-danger", 3, "click"], [1, "isax", "isax-logout5", "me-2"]], template: function SuperadminSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Super Administrateur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "h6", 7);
      \u0275\u0275text(10, "Menu Principal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 8)(12, "li")(13, "a", 9);
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, "Tableau de bord ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 9);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19, "Gestion des Utilisateurs ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(20, "hr");
      \u0275\u0275elementStart(21, "h6", 7);
      \u0275\u0275text(22, "Param\xE8tres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "ul")(24, "li")(25, "a", 9);
      \u0275\u0275element(26, "i", 12);
      \u0275\u0275text(27, "Mon Profil ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 13);
      \u0275\u0275listener("click", function SuperadminSidebarComponent_Template_a_click_29_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275element(30, "i", 14);
      \u0275\u0275text(31, "D\xE9connexion ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.userName);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_users);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadminSettings);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ["\n\n.superadmin-profile-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n/*# sourceMappingURL=superadmin-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: '<div class="settings-sidebar mb-lg-0">\r\n\r\n  <!-- Avatar + Nom -->\r\n  <div class="d-flex align-items-center gap-3 p-3 mb-3 rounded-3 superadmin-profile-box">\r\n    <div class="avatar avatar-md rounded-circle bg-warning d-flex align-items-center justify-content-center flex-shrink-0"\r\n         style="width:48px;height:48px;">\r\n      <i class="ti ti-crown fs-22 text-white"></i>\r\n    </div>\r\n    <div class="overflow-hidden">\r\n      <p class="mb-0 fw-bold text-truncate text-white" style="max-width:150px">{{ userName }}</p>\r\n      <span class="badge bg-warning text-dark small">Super Administrateur</span>\r\n    </div>\r\n  </div>\r\n\r\n  <h6 class="mb-3 text-muted text-uppercase small fw-semibold">Menu Principal</h6>\r\n  <ul class="mb-3 pb-1">\r\n    <li>\r\n      <a [routerLink]="routes.superadmin_dashboard"\r\n         class="d-inline-flex align-items-center"\r\n         routerLinkActive="active">\r\n        <i class="isax isax-grid-35 me-2"></i>Tableau de bord\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]="routes.superadmin_users"\r\n         class="d-inline-flex align-items-center"\r\n         routerLinkActive="active">\r\n        <i class="isax isax-profile-2user5 me-2"></i>Gestion des Utilisateurs\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <hr>\r\n\r\n  <h6 class="mb-3 text-muted text-uppercase small fw-semibold">Param\xE8tres</h6>\r\n  <ul>\r\n    <li>\r\n      <a [routerLink]="routes.superadminSettings"\r\n         class="d-inline-flex align-items-center"\r\n         routerLinkActive="active">\r\n        <i class="isax isax-setting-25 me-2"></i>Mon Profil\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href="javascript:void(0)" (click)="onLogout()" class="d-inline-flex align-items-center text-danger">\r\n        <i class="isax isax-logout5 me-2"></i>D\xE9connexion\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n', styles: ["/* src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.scss */\n.superadmin-profile-box {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n/*# sourceMappingURL=superadmin-sidebar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSidebarComponent, { className: "SuperadminSidebarComponent", filePath: "src/app/features/superadmin/common/superadmin-sidebar/superadmin-sidebar.component.ts", lineNumber: 14 });
})();

// src/app/features/superadmin/superadmin.component.ts
var SuperadminComponent = class _SuperadminComponent {
  static \u0275fac = function SuperadminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminComponent, selectors: [["app-superadmin"]], decls: 6, vars: 0, consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"]], template: function SuperadminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-superadmin-sidebar", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule, RouterOutlet, SuperadminSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin", standalone: true, imports: [RouterModule, SuperadminSidebarComponent], template: '<div class="content">\r\n  <div class="container">\r\n    <div class="row">\r\n      <app-superadmin-sidebar class="col-lg-3"></app-superadmin-sidebar>\r\n      <div class="col-lg-9">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminComponent, { className: "SuperadminComponent", filePath: "src/app/features/superadmin/superadmin.component.ts", lineNumber: 12 });
})();
export {
  SuperadminComponent
};
//# sourceMappingURL=chunk-52PKPDDY.js.map
