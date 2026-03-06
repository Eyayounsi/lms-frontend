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

// src/app/features/admin/common/admin-sidebar/admin-sidebar.component.ts
var AdminSidebarComponent = class _AdminSidebarComponent {
  authService;
  routes = routes;
  constructor(authService) {
    this.authService = authService;
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function AdminSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSidebarComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSidebarComponent, selectors: [["app-admin-sidebar"]], decls: 33, vars: 5, consts: [[1, "settings-sidebar", "mb-lg-0"], [1, "mb-3"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "isax", "isax-profile-2user5", "me-2"], [1, "isax", "isax-teacher5", "me-2"], [1, "isax", "isax-category5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], ["href", "javascript:void(0)", 1, "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-logout5", "me-2"]], template: function AdminSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h6", 1);
      \u0275\u0275text(3, "Menu Principal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul", 2)(5, "li")(6, "a", 3);
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Tableau de bord ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 3);
      \u0275\u0275element(11, "i", 5);
      \u0275\u0275text(12, "Gestion des Utilisateurs ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 3);
      \u0275\u0275element(15, "i", 6);
      \u0275\u0275text(16, "Validation des Cours ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 3);
      \u0275\u0275element(19, "i", 7);
      \u0275\u0275text(20, "Cat\xE9gories ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(21, "hr");
      \u0275\u0275elementStart(22, "h6", 1);
      \u0275\u0275text(23, "Param\xE8tres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ul")(25, "li")(26, "a", 3);
      \u0275\u0275element(27, "i", 8);
      \u0275\u0275text(28, "Mon Profil ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 9);
      \u0275\u0275listener("click", function AdminSidebarComponent_Template_a_click_30_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275element(31, "i", 10);
      \u0275\u0275text(32, "D\xE9connexion ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.admin_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.admin_users);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.admin_courses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.admin_categories);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.adminSettings);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ["\n\n/*# sourceMappingURL=admin-sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-admin-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: '<div class="settings-sidebar mb-lg-0">\r\n    <div>\r\n        <h6 class="mb-3">Menu Principal</h6>\r\n        <ul class="mb-3 pb-1">\r\n            <li>\r\n                <a [routerLink]="routes.admin_dashboard" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-grid-35 me-2"></i>Tableau de bord\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]="routes.admin_users" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-profile-2user5 me-2"></i>Gestion des Utilisateurs\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]="routes.admin_courses" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-teacher5 me-2"></i>Validation des Cours\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]="routes.admin_categories" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-category5 me-2"></i>Cat\xE9gories\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <hr>\r\n        <h6 class="mb-3">Param\xE8tres</h6>\r\n        <ul>\r\n            <li>\r\n                <a [routerLink]="routes.adminSettings" class="d-inline-flex align-items-center" routerLinkActive="active">\r\n                    <i class="isax isax-setting-25 me-2"></i>Mon Profil\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href="javascript:void(0)" (click)="onLogout()" class="d-inline-flex align-items-center">\r\n                    <i class="isax isax-logout5 me-2"></i>D\xE9connexion\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n', styles: ["/* src/app/features/admin/common/admin-sidebar/admin-sidebar.component.scss */\n/*# sourceMappingURL=admin-sidebar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSidebarComponent, { className: "AdminSidebarComponent", filePath: "src/app/features/admin/common/admin-sidebar/admin-sidebar.component.ts", lineNumber: 14 });
})();

// src/app/features/admin/admin.component.ts
var AdminComponent = class _AdminComponent {
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 6, vars: 0, consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-admin-sidebar", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule, RouterOutlet, AdminSidebarComponent], styles: ["\n\n/*# sourceMappingURL=admin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{ selector: "app-admin", imports: [RouterModule, AdminSidebarComponent], template: '<div class="content">\r\n  <div class="container">\r\n    <div class="row">\r\n\r\n      <!-- Sidebar Admin -->\r\n      <app-admin-sidebar class="col-lg-3"></app-admin-sidebar>\r\n      <!-- /Sidebar Admin -->\r\n\r\n      <!-- Contenu principal -->\r\n      <div class="col-lg-9">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <!-- /Contenu principal -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/admin/admin.component.scss */\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/features/admin/admin.component.ts", lineNumber: 11 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-5DLUD76E.js.map
