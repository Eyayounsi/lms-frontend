import {
  ProfileService
} from "./chunk-TQDXDFIT.js";
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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/auth/force-change-password/force-change-password.component.ts
function ForceChangePasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function ForceChangePasswordComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.successMessage, " ");
  }
}
function ForceChangePasswordComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
var ForceChangePasswordComponent = class _ForceChangePasswordComponent {
  profileService;
  router;
  oldPassword = "";
  newPassword = "";
  confirmPassword = "";
  errorMessage = "";
  successMessage = "";
  loading = false;
  showOld = false;
  showNew = false;
  showConfirm = false;
  constructor(profileService, router) {
    this.profileService = profileService;
    this.router = router;
  }
  onSubmit() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.errorMessage = "Veuillez remplir tous les champs.";
      return;
    }
    if (this.newPassword.length < 8) {
      this.errorMessage = "Le nouveau mot de passe doit contenir au moins 8 caract\xE8res.";
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Les mots de passe ne correspondent pas.";
      return;
    }
    if (this.oldPassword === this.newPassword) {
      this.errorMessage = "Le nouveau mot de passe doit \xEAtre diff\xE9rent de l'ancien.";
      return;
    }
    this.loading = true;
    this.profileService.changePassword({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }).subscribe({
      next: () => {
        this.loading = false;
        localStorage.setItem("firstLogin", "false");
        this.successMessage = "Mot de passe modifi\xE9 avec succ\xE8s ! Redirection...";
        setTimeout(() => {
          this.router.navigate([routes.recruiter_dashboard]);
        }, 1500);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || err.error || "Erreur lors du changement de mot de passe.";
      }
    });
  }
  static \u0275fac = function ForceChangePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForceChangePasswordComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForceChangePasswordComponent, selectors: [["app-force-change-password"]], decls: 37, vars: 17, consts: [[1, "container", "d-flex", "align-items-center", "justify-content-center", "min-vh-100"], [1, "card", "shadow-lg", 2, "max-width", "500px", "width", "100%"], [1, "card-body", "p-4", "p-md-5"], [1, "text-center", "mb-4"], [1, "rounded-circle", "bg-warning", "bg-opacity-10", "d-inline-flex", "align-items-center", "justify-content-center", "mb-3", 2, "width", "64px", "height", "64px"], [1, "ti", "ti-lock", "fs-24", "text-warning"], [1, "fw-bold", "mb-1"], [1, "text-muted", "fs-14"], ["class", "alert alert-danger py-2 fs-13", 4, "ngIf"], ["class", "alert alert-success py-2 fs-13", 4, "ngIf"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], ["name", "oldPassword", "placeholder", "Entrez votre mot de passe actuel", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["name", "newPassword", "placeholder", "Minimum 8 caract\xE8res", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], [1, "mb-4"], ["name", "confirmPassword", "placeholder", "Retapez le nouveau mot de passe", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "fs-13"], [1, "ti", "ti-alert-circle", "me-1"], [1, "alert", "alert-success", "py-2", "fs-13"], [1, "ti", "ti-check", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function ForceChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h4", 6);
      \u0275\u0275text(7, "Changement de mot de passe obligatoire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Pour des raisons de s\xE9curit\xE9, veuillez d\xE9finir un nouveau mot de passe lors de votre premi\xE8re connexion.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, ForceChangePasswordComponent_div_10_Template, 3, 1, "div", 8)(11, ForceChangePasswordComponent_div_11_Template, 3, 1, "div", 9);
      \u0275\u0275elementStart(12, "form", 10);
      \u0275\u0275listener("ngSubmit", function ForceChangePasswordComponent_Template_form_ngSubmit_12_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(13, "div", 11)(14, "label", 12);
      \u0275\u0275text(15, "Mot de passe actuel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13)(17, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ForceChangePasswordComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.oldPassword, $event) || (ctx.oldPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 15);
      \u0275\u0275listener("click", function ForceChangePasswordComponent_Template_button_click_18_listener() {
        return ctx.showOld = !ctx.showOld;
      });
      \u0275\u0275element(19, "i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 11)(21, "label", 12);
      \u0275\u0275text(22, "Nouveau mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 13)(24, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ForceChangePasswordComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 15);
      \u0275\u0275listener("click", function ForceChangePasswordComponent_Template_button_click_25_listener() {
        return ctx.showNew = !ctx.showNew;
      });
      \u0275\u0275element(26, "i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "label", 12);
      \u0275\u0275text(29, "Confirmer le nouveau mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 13)(31, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ForceChangePasswordComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 15);
      \u0275\u0275listener("click", function ForceChangePasswordComponent_Template_button_click_32_listener() {
        return ctx.showConfirm = !ctx.showConfirm;
      });
      \u0275\u0275element(33, "i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "button", 19);
      \u0275\u0275template(35, ForceChangePasswordComponent_span_35_Template, 1, 0, "span", 20);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(6);
      \u0275\u0275property("type", ctx.showOld ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.oldPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.showOld ? "ti ti-eye-off" : "ti ti-eye");
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showNew ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.showNew ? "ti ti-eye-off" : "ti ti-eye");
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showConfirm ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.showConfirm ? "ti ti-eye-off" : "ti ti-eye");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Modification..." : "Changer le mot de passe", " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: 100vh;\n}\n/*# sourceMappingURL=force-change-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForceChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-force-change-password", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="container d-flex align-items-center justify-content-center min-vh-100">\r
  <div class="card shadow-lg" style="max-width: 500px; width: 100%;">\r
    <div class="card-body p-4 p-md-5">\r
      <!-- Header -->\r
      <div class="text-center mb-4">\r
        <div class="rounded-circle bg-warning bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3"\r
             style="width: 64px; height: 64px;">\r
          <i class="ti ti-lock fs-24 text-warning"></i>\r
        </div>\r
        <h4 class="fw-bold mb-1">Changement de mot de passe obligatoire</h4>\r
        <p class="text-muted fs-14">Pour des raisons de s\xE9curit\xE9, veuillez d\xE9finir un nouveau mot de passe lors de votre premi\xE8re connexion.</p>\r
      </div>\r
\r
      <!-- Alert messages -->\r
      <div class="alert alert-danger py-2 fs-13" *ngIf="errorMessage">\r
        <i class="ti ti-alert-circle me-1"></i>{{ errorMessage }}\r
      </div>\r
      <div class="alert alert-success py-2 fs-13" *ngIf="successMessage">\r
        <i class="ti ti-check me-1"></i>{{ successMessage }}\r
      </div>\r
\r
      <!-- Form -->\r
      <form (ngSubmit)="onSubmit()">\r
        <div class="mb-3">\r
          <label class="form-label">Mot de passe actuel</label>\r
          <div class="input-group">\r
            <input [type]="showOld ? 'text' : 'password'" class="form-control" \r
                   [(ngModel)]="oldPassword" name="oldPassword" placeholder="Entrez votre mot de passe actuel" required>\r
            <button class="btn btn-outline-secondary" type="button" (click)="showOld = !showOld">\r
              <i [class]="showOld ? 'ti ti-eye-off' : 'ti ti-eye'"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="mb-3">\r
          <label class="form-label">Nouveau mot de passe</label>\r
          <div class="input-group">\r
            <input [type]="showNew ? 'text' : 'password'" class="form-control" \r
                   [(ngModel)]="newPassword" name="newPassword" placeholder="Minimum 8 caract\xE8res" required>\r
            <button class="btn btn-outline-secondary" type="button" (click)="showNew = !showNew">\r
              <i [class]="showNew ? 'ti ti-eye-off' : 'ti ti-eye'"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="mb-4">\r
          <label class="form-label">Confirmer le nouveau mot de passe</label>\r
          <div class="input-group">\r
            <input [type]="showConfirm ? 'text' : 'password'" class="form-control" \r
                   [(ngModel)]="confirmPassword" name="confirmPassword" placeholder="Retapez le nouveau mot de passe" required>\r
            <button class="btn btn-outline-secondary" type="button" (click)="showConfirm = !showConfirm">\r
              <i [class]="showConfirm ? 'ti ti-eye-off' : 'ti ti-eye'"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <button type="submit" class="btn btn-primary w-100" [disabled]="loading">\r
          <span class="spinner-border spinner-border-sm me-1" *ngIf="loading"></span>\r
          {{ loading ? 'Modification...' : 'Changer le mot de passe' }}\r
        </button>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/force-change-password/force-change-password.component.scss */\n:host {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  min-height: 100vh;\n}\n/*# sourceMappingURL=force-change-password.component.css.map */\n"] }]
  }], () => [{ type: ProfileService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForceChangePasswordComponent, { className: "ForceChangePasswordComponent", filePath: "src/app/auth/force-change-password/force-change-password.component.ts", lineNumber: 15 });
})();
export {
  ForceChangePasswordComponent
};
//# sourceMappingURL=chunk-VBV4SLNR.js.map
