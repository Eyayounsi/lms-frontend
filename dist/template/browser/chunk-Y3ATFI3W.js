import {
  ProfileService
} from "./chunk-TQDXDFIT.js";
import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  Router
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgIf
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/components/user-profile/user-profile.component.ts
function UserProfileComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function UserProfileComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function UserProfileComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deleteError);
  }
}
var UserProfileComponent = class _UserProfileComponent {
  profileService;
  authService;
  router;
  routes = routes;
  profileForm = { fullName: "", email: "", phone: "" };
  successMessage = "";
  errorMessage = "";
  deletePassword = "";
  deleteError = "";
  userRole = "";
  constructor(profileService, authService, router) {
    this.profileService = profileService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.userRole = localStorage.getItem("role") || "";
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profileForm.fullName = data.fullName || "";
        this.profileForm.email = data.email || "";
        this.profileForm.phone = data.phone || "";
      },
      error: (err) => {
        console.error("Erreur chargement profil:", err);
        this.errorMessage = "Impossible de charger le profil. V\xE9rifiez la connexion au serveur.";
      }
    });
  }
  onUpdateProfile() {
    this.successMessage = "";
    this.errorMessage = "";
    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (data) => {
        this.successMessage = "Profil mis \xE0 jour avec succ\xE8s !";
        localStorage.setItem("fullName", data.fullName || "");
        if (data.email)
          localStorage.setItem("email", data.email);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || err.error || "Erreur lors de la mise \xE0 jour.";
      }
    });
  }
  onDeleteAccount() {
    this.deleteError = "";
    if (!this.deletePassword.trim()) {
      this.deleteError = "Veuillez entrer votre mot de passe pour confirmer.";
      return;
    }
    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        this.authService.logout();
        this.router.navigate([this.routes.login]);
      },
      error: (err) => {
        this.deleteError = err.error || "Mot de passe incorrect.";
      }
    });
  }
  static \u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], decls: 64, vars: 7, consts: [["profileFormRef", "ngForm"], [1, "content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "mb-4"], [1, "text-muted"], [1, "card", "mb-4"], [1, "card-body"], [1, "mb-3", "fs-18"], [3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "fullName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", "placeholder", "Ex : 0612345678", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "alert alert-success mt-2", 4, "ngIf"], ["class", "alert alert-danger mt-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill", "mt-2"], [1, "fs-18", "mb-2", "text-danger"], [1, "text-muted", "mb-3"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#delete_account_modal", 1, "btn", "btn-outline-danger"], ["id", "delete_account_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body"], ["type", "password", "name", "deletePassword", "placeholder", "Votre mot de passe", 1, "form-control", "mt-2", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "rounded-pill", 3, "click"], [1, "alert", "alert-success", "mt-2"], [1, "alert", "alert-danger", "mt-2"]], template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4");
      \u0275\u0275text(6, "Mon Profil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "G\xE9rez vos informations personnelles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h5", 9);
      \u0275\u0275text(12, "Informations personnelles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "form", 10, 0);
      \u0275\u0275listener("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpdateProfile());
      });
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "label", 13);
      \u0275\u0275text(18, "Nom complet ");
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.fullName, $event) || (ctx.profileForm.fullName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 12)(23, "label", 13);
      \u0275\u0275text(24, "Email ");
      \u0275\u0275elementStart(25, "span", 14);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.email, $event) || (ctx.profileForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 12)(29, "label", 13);
      \u0275\u0275text(30, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.phone, $event) || (ctx.profileForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(32, UserProfileComponent_div_32_Template, 2, 1, "div", 18)(33, UserProfileComponent_div_33_Template, 2, 1, "div", 19);
      \u0275\u0275elementStart(34, "button", 20);
      \u0275\u0275text(35, " Enregistrer les modifications ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 7)(37, "div", 8)(38, "h5", 21);
      \u0275\u0275text(39, "Supprimer mon compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p", 22);
      \u0275\u0275text(41, " Cette action est irr\xE9versible. Toutes vos donn\xE9es seront d\xE9finitivement supprim\xE9es. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 23);
      \u0275\u0275text(43, " Supprimer mon compte ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(44, "div", 24)(45, "div", 25)(46, "div", 26)(47, "div", 27)(48, "h5", 14);
      \u0275\u0275text(49, "Supprimer le compte");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "button", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 29)(52, "p", 6);
      \u0275\u0275text(53, " Confirmez la suppression en saisissant votre mot de passe. Cette action est ");
      \u0275\u0275elementStart(54, "strong");
      \u0275\u0275text(55, "irr\xE9versible");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function UserProfileComponent_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deletePassword, $event) || (ctx.deletePassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, UserProfileComponent_div_58_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 31)(60, "button", 32);
      \u0275\u0275text(61, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 33);
      \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeleteAccount());
      });
      \u0275\u0275text(63, " Supprimer d\xE9finitivement ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.fullName);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.phone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.deletePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteError);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n/*# sourceMappingURL=user-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", imports: [CommonModule, FormsModule], template: '<div class="content">\r\n  <div class="container">\r\n    <div class="row justify-content-center">\r\n      <div class="col-lg-8">\r\n\r\n        <!-- En-t\xEAte -->\r\n        <div class="mb-4">\r\n          <h4>Mon Profil</h4>\r\n          <p class="text-muted">G\xE9rez vos informations personnelles</p>\r\n        </div>\r\n\r\n        <!-- Carte Edit profil -->\r\n        <div class="card mb-4">\r\n          <div class="card-body">\r\n            <h5 class="mb-3 fs-18">Informations personnelles</h5>\r\n            <form (ngSubmit)="onUpdateProfile()" #profileFormRef="ngForm">\r\n              <div class="row">\r\n                <div class="col-md-6 mb-3">\r\n                  <label class="form-label">Nom complet <span class="text-danger">*</span></label>\r\n                  <input type="text" class="form-control"\r\n                         [(ngModel)]="profileForm.fullName" name="fullName" required>\r\n                </div>\r\n                <div class="col-md-6 mb-3">\r\n                  <label class="form-label">Email <span class="text-danger">*</span></label>\r\n                  <input type="email" class="form-control"\r\n                         [(ngModel)]="profileForm.email" name="email" required>\r\n                </div>\r\n                <div class="col-md-6 mb-3">\r\n                  <label class="form-label">T\xE9l\xE9phone</label>\r\n                  <input type="text" class="form-control"\r\n                         [(ngModel)]="profileForm.phone" name="phone"\r\n                         placeholder="Ex : 0612345678">\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf="successMessage" class="alert alert-success mt-2">{{ successMessage }}</div>\r\n              <div *ngIf="errorMessage" class="alert alert-danger mt-2">{{ errorMessage }}</div>\r\n\r\n              <button class="btn btn-secondary rounded-pill mt-2" type="submit">\r\n                Enregistrer les modifications\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Carte supprimer compte -->\r\n        <div class="card mb-4">\r\n          <div class="card-body">\r\n            <h5 class="fs-18 mb-2 text-danger">Supprimer mon compte</h5>\r\n            <p class="text-muted mb-3">\r\n              Cette action est irr\xE9versible. Toutes vos donn\xE9es seront d\xE9finitivement supprim\xE9es.\r\n            </p>\r\n            <button class="btn btn-outline-danger" type="button"\r\n                    data-bs-toggle="modal" data-bs-target="#delete_account_modal">\r\n              Supprimer mon compte\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal suppression -->\r\n<div class="modal fade" id="delete_account_modal">\r\n  <div class="modal-dialog modal-dialog-centered">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <h5 class="text-danger">Supprimer le compte</h5>\r\n        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r\n      </div>\r\n      <div class="modal-body">\r\n        <p class="text-muted">\r\n          Confirmez la suppression en saisissant votre mot de passe.\r\n          Cette action est <strong>irr\xE9versible</strong>.\r\n        </p>\r\n        <input type="password" class="form-control mt-2"\r\n               [(ngModel)]="deletePassword" name="deletePassword"\r\n               placeholder="Votre mot de passe">\r\n        <div class="alert alert-danger mt-2" *ngIf="deleteError">{{ deleteError }}</div>\r\n      </div>\r\n      <div class="modal-footer">\r\n        <button class="btn bg-gray-100 rounded-pill me-2" type="button"\r\n                data-bs-dismiss="modal">Annuler</button>\r\n        <button class="btn btn-danger rounded-pill" type="button"\r\n                (click)="onDeleteAccount()" data-bs-dismiss="modal">\r\n          Supprimer d\xE9finitivement\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/shared/components/user-profile/user-profile.component.scss */\n/*# sourceMappingURL=user-profile.component.css.map */\n"] }]
  }], () => [{ type: ProfileService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/app/shared/components/user-profile/user-profile.component.ts", lineNumber: 15 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=chunk-Y3ATFI3W.js.map
