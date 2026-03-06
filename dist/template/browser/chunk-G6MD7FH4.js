import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YSUELB2P.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import {
  ProfileService
} from "./chunk-TQDXDFIT.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-X7KXZKIQ.js";
import "./chunk-RE3U2CBZ.js";
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
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/settings/student-settings/student-settings.component.ts
var _c0 = () => ({ adaptivePosition: true });
function StudentSettingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadError);
  }
}
function StudentSettingsComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function StudentSettingsComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function StudentSettingsComponent_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
}
function StudentSettingsComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.shareSuccess);
  }
}
function StudentSettingsComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.shareError);
  }
}
function StudentSettingsComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deleteError);
  }
}
var StudentSettingsComponent = class _StudentSettingsComponent {
  profileService;
  authService;
  router;
  routes = routes;
  profileForm = { fullName: "", email: "", phone: "" };
  successMessage = "";
  errorMessage = "";
  deletePassword = "";
  deleteError = "";
  // Share with recruiters
  shareWithRecruiters = false;
  shareLoading = false;
  shareSuccess = "";
  shareError = "";
  constructor(profileService, authService, router) {
    this.profileService = profileService;
    this.authService = authService;
    this.router = router;
  }
  loadError = "";
  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.profileForm.fullName = profile.fullName || "";
        this.profileForm.email = profile.email || "";
        this.profileForm.phone = profile.phone || "";
        this.shareWithRecruiters = profile.shareWithRecruiters === true;
      },
      error: (err) => {
        console.error("Erreur chargement profil:", err);
        this.loadError = "Impossible de charger le profil. V\xE9rifiez que le serveur est d\xE9marr\xE9.";
      }
    });
  }
  onUpdateProfile() {
    this.successMessage = "";
    this.errorMessage = "";
    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (updated) => {
        this.successMessage = "Profil mis \xE0 jour avec succ\xE8s.";
        localStorage.setItem("fullName", updated.fullName || "");
        if (updated.email)
          localStorage.setItem("email", updated.email);
      },
      error: (err) => {
        this.errorMessage = err.error || "Erreur lors de la mise \xE0 jour.";
      }
    });
  }
  onToggleShare(event) {
    const checked = event.target.checked;
    this.shareLoading = true;
    this.shareSuccess = "";
    this.shareError = "";
    this.profileService.toggleShareWithRecruiters(checked).subscribe({
      next: () => {
        this.shareWithRecruiters = checked;
        this.shareLoading = false;
        this.shareSuccess = checked ? "Votre profil est maintenant visible par les recruteurs." : "Votre profil est masqu\xE9 des recruteurs.";
        setTimeout(() => this.shareSuccess = "", 3e3);
      },
      error: (err) => {
        this.shareLoading = false;
        this.shareError = err.error || "Erreur lors de la mise \xE0 jour.";
        this.shareWithRecruiters = !checked;
      }
    });
  }
  onDeleteAccount() {
    this.deleteError = "";
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
  static \u0275fac = function StudentSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSettingsComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSettingsComponent, selectors: [["app-student-settings"]], decls: 134, vars: 20, consts: [["profileFormRef", "ngForm"], ["class", "alert alert-warning m-3", 4, "ngIf"], [1, "card"], [1, "card-body"], [3, "ngSubmit"], [1, "profile-upload-group"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxxl", "avatar-rounded", "border", "me-3", 3, "routerLink"], ["src", "assets/img/user/user-02.jpg", "alt", "Img", 1, "img-fluid"], [1, "profile-upload-head"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "new-employee-field"], [1, "d-flex", "align-items-center", "mt-2"], [1, "image-upload", "position-relative", "mb-0", "me-2"], ["type", "file"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "btn-sm", "rounded-pill", "image-uploads"], [1, "img-delete"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-sm", "rounded-pill"], [1, "edit-profile-info", "mb-3"], [1, "mb-1"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "fullName", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-3", "ngxdate"], [1, "input-icon-end", "position-relative"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", "container", ".ngxdate", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], [1, "col-md-12"], ["rows", "4", 1, "form-control"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fs-18", "mb-1"], [1, "ti", "ti-share", "me-2"], [1, "text-muted", "mb-0"], [1, "form-check", "form-switch", "ms-3"], ["type", "checkbox", "role", "switch", "id", "shareToggle", 1, "form-check-input", 3, "change", "checked", "disabled"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge"], ["class", "spinner-border spinner-border-sm text-muted", 4, "ngIf"], ["class", "alert alert-success py-2 mt-2 fs-13", 4, "ngIf"], ["class", "alert alert-danger py-2 mt-2 fs-13", 4, "ngIf"], [1, "fs-18", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_account", 1, "btn", "btn-secondary"], ["id", "delete_account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "text-muted"], ["type", "password", "name", "deletePassword", "placeholder", "Votre mot de passe", 1, "form-control", "mt-2", 3, "ngModelChange", "ngModel"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "rounded-pill", 3, "click"], [1, "alert", "alert-warning", "m-3"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "text-muted"], [1, "alert", "alert-success", "py-2", "mt-2", "fs-13"], [1, "alert", "alert-danger", "py-2", "mt-2", "fs-13"], [1, "alert", "alert-danger", "mt-2"]], template: function StudentSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, StudentSettingsComponent_div_0_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "form", 4, 0);
      \u0275\u0275listener("ngSubmit", function StudentSettingsComponent_Template_form_ngSubmit_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpdateProfile());
      });
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "h6")(11, "a", 10);
      \u0275\u0275text(12, "Profile Photo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 11);
      \u0275\u0275text(14, "PNG or JPG no bigger than 800px width and height");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14);
      \u0275\u0275element(18, "input", 15);
      \u0275\u0275elementStart(19, "a", 16);
      \u0275\u0275text(20, "Upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 17)(22, "a", 18);
      \u0275\u0275text(23, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(24, "div")(25, "div", 19)(26, "h5", 20);
      \u0275\u0275text(27, "Personal Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Edit your personal information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "div", 23)(33, "label", 24);
      \u0275\u0275text(34, "Nom complet ");
      \u0275\u0275elementStart(35, "span", 25);
      \u0275\u0275text(36, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.fullName, $event) || (ctx.profileForm.fullName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 22)(39, "div", 23)(40, "label", 24);
      \u0275\u0275text(41, "Email ");
      \u0275\u0275elementStart(42, "span", 25);
      \u0275\u0275text(43, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.email, $event) || (ctx.profileForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 22)(46, "div", 23)(47, "label", 24);
      \u0275\u0275text(48, "T\xC3\xA9l\xC3\xA9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.phone, $event) || (ctx.profileForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 22)(51, "div", 23)(52, "label", 24);
      \u0275\u0275text(53, "Gender ");
      \u0275\u0275elementStart(54, "span", 25);
      \u0275\u0275text(55, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "mat-select", 29)(57, "mat-option", 30);
      \u0275\u0275text(58, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 30);
      \u0275\u0275text(60, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-option", 30);
      \u0275\u0275text(62, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 22)(64, "div", 31)(65, "label", 24);
      \u0275\u0275text(66, "DOB ");
      \u0275\u0275elementStart(67, "span", 25);
      \u0275\u0275text(68, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 32);
      \u0275\u0275element(70, "input", 33);
      \u0275\u0275elementStart(71, "span", 34);
      \u0275\u0275element(72, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 36)(74, "div", 23)(75, "label", 24);
      \u0275\u0275text(76, "Bio ");
      \u0275\u0275elementStart(77, "span", 25);
      \u0275\u0275text(78, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "textarea", 37);
      \u0275\u0275text(80, "Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 36);
      \u0275\u0275template(82, StudentSettingsComponent_div_82_Template, 2, 1, "div", 38)(83, StudentSettingsComponent_div_83_Template, 2, 1, "div", 39);
      \u0275\u0275elementStart(84, "button", 40);
      \u0275\u0275text(85, "Update Profile");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(86, "div", 41)(87, "div", 3)(88, "div", 42)(89, "div")(90, "h5", 43);
      \u0275\u0275element(91, "i", 44);
      \u0275\u0275text(92, "Partage du profil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 45);
      \u0275\u0275text(94, "Rendez votre profil visible par les recruteurs de la plateforme pour recevoir des opportunit\xE9s professionnelles.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 46)(96, "input", 47);
      \u0275\u0275listener("change", function StudentSettingsComponent_Template_input_change_96_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onToggleShare($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 48)(98, "span", 49);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd();
      \u0275\u0275template(100, StudentSettingsComponent_span_100_Template, 1, 0, "span", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275template(101, StudentSettingsComponent_div_101_Template, 2, 1, "div", 51)(102, StudentSettingsComponent_div_102_Template, 2, 1, "div", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 41)(104, "div", 3)(105, "h5", 53);
      \u0275\u0275text(106, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "h6", 20);
      \u0275\u0275text(108, "Are you sure you want to delete your account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 23);
      \u0275\u0275text(110, "Refers to the action of permanently removing a user's account and associated data from a system, service and platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "a", 54);
      \u0275\u0275text(112, "Delete Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 55)(114, "div", 56)(115, "div", 57)(116, "div", 58)(117, "h5");
      \u0275\u0275text(118, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "button", 59);
      \u0275\u0275element(120, "i", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 61)(122, "div", 23)(123, "h6");
      \u0275\u0275text(124, "Confirmez la suppression du compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p", 62);
      \u0275\u0275text(126, "Cette action est irr\xE9versible. Veuillez saisir votre mot de passe pour confirmer.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "input", 63);
      \u0275\u0275twoWayListener("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_127_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deletePassword, $event) || (ctx.deletePassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(128, StudentSettingsComponent_div_128_Template, 2, 1, "div", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 65)(130, "button", 66);
      \u0275\u0275text(131, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "button", 67);
      \u0275\u0275listener("click", function StudentSettingsComponent_Template_button_click_132_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeleteAccount());
      });
      \u0275\u0275text(133, "Supprimer D\xE9finitivement");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loadError);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.fullName);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.email);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.phone);
      \u0275\u0275advance(21);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(13);
      \u0275\u0275property("checked", ctx.shareWithRecruiters)("disabled", ctx.shareLoading);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.shareWithRecruiters ? "bg-success" : "bg-secondary");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.shareWithRecruiters ? "Profil visible par les recruteurs" : "Profil masqu\xE9", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shareLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shareSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.shareError);
      \u0275\u0275advance(25);
      \u0275\u0275twoWayProperty("ngModel", ctx.deletePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteError);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-student-settings", imports: [CommonModule, RouterLink, MatSelectModule, BsDatepickerModule, FormsModule], template: `\r
\r
        <div *ngIf="loadError" class="alert alert-warning m-3">{{ loadError }}</div>\r
\r
        <div class="card">\r
            <div class="card-body">\r
        <form (ngSubmit)="onUpdateProfile()" #profileFormRef="ngForm">\r
            <div class="profile-upload-group">									\r
                <div class="d-flex align-items-center">\r
                    <a [routerLink]="routes.studentProfile" class="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\r
                    <div class="profile-upload-head">\r
                        <h6><a [routerLink]="routes.studentProfile">Profile Photo</a></h6>\r
                        <p class="fs-14 mb-0">PNG or JPG no bigger than 800px width and height</p>\r
                        <div class="new-employee-field">\r
                            <div class="d-flex align-items-center mt-2">\r
                                <div class="image-upload position-relative mb-0 me-2">\r
                                    <input type="file">\r
                                    <a href="javascript:void(0);" class="btn bg-gray-100 btn-sm rounded-pill image-uploads">Upload</a>\r
                                </div>\r
                                <div class="img-delete">\r
                                    <a href="javascript:void(0);" class="btn btn-secondary btn-sm rounded-pill">Delete</a>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>											\r
            </div>\r
                <div>\r
                    <div class="edit-profile-info mb-3">\r
                        <h5 class="mb-1">Personal Details</h5>\r
                        <p>Edit your personal information</p>\r
                    </div>\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Nom complet <span class="text-danger"> *</span></label>\r
                                <input type="text" class="form-control" [(ngModel)]="profileForm.fullName" name="fullName">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Email <span class="text-danger"> *</span></label>\r
                                <input type="email" class="form-control" [(ngModel)]="profileForm.email" name="email">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">T\xC3\xA9l\xC3\xA9phone</label>\r
                                <input type="text" class="form-control" [(ngModel)]="profileForm.phone" name="phone">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Gender <span class="text-danger"> *</span></label>\r
                                <mat-select class="custom-mat-select select" placeholder="Select">\r
                                    <mat-option value="1">Select</mat-option>\r
                                    <mat-option value="1">Male</mat-option>\r
                                    <mat-option value="1">Female</mat-option>\r
                                </mat-select>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3 ngxdate">\r
                                <label class="form-label">DOB <span class="text-danger"> *</span></label>\r
                                <div class="input-icon-end position-relative">\r
                                    <input type="text" class="form-control datetimepicker" bsDatepicker placeholder="dd/mm/yyyy" container=".ngxdate" [bsConfig]="{ adaptivePosition: true }">\r
                                    <span class="input-icon-addon">\r
                                        <i class="isax isax-calendar"></i>\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-12">\r
                            <div class="mb-3">\r
                                <label class="form-label">Bio <span class="text-danger"> *</span></label>\r
                                <textarea rows="4" class="form-control">Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.</textarea>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-12">\r
                            <div *ngIf="successMessage" class="alert alert-success">{{ successMessage }}</div>\r
                            <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>\r
                            <button class="btn btn-secondary rounded-pill" type="submit">Update Profile</button>\r
                        </div>\r
                    </div>\r
                </div>\r
        </form>\r
            </div>\r
        </div>\r
        <div class="card mb-0">\r
            <div class="card-body">\r
                <div class="d-flex align-items-center justify-content-between mb-2">\r
                    <div>\r
                        <h5 class="fs-18 mb-1"><i class="ti ti-share me-2"></i>Partage du profil</h5>\r
                        <p class="text-muted mb-0">Rendez votre profil visible par les recruteurs de la plateforme pour recevoir des opportunit\xE9s professionnelles.</p>\r
                    </div>\r
                    <div class="form-check form-switch ms-3">\r
                        <input class="form-check-input" type="checkbox" role="switch" id="shareToggle"\r
                               [checked]="shareWithRecruiters"\r
                               (change)="onToggleShare($event)"\r
                               [disabled]="shareLoading">\r
                    </div>\r
                </div>\r
                <div class="d-flex align-items-center gap-2">\r
                    <span class="badge" [class]="shareWithRecruiters ? 'bg-success' : 'bg-secondary'">\r
                        {{ shareWithRecruiters ? 'Profil visible par les recruteurs' : 'Profil masqu\xE9' }}\r
                    </span>\r
                    <span class="spinner-border spinner-border-sm text-muted" *ngIf="shareLoading"></span>\r
                </div>\r
                <div class="alert alert-success py-2 mt-2 fs-13" *ngIf="shareSuccess">{{ shareSuccess }}</div>\r
                <div class="alert alert-danger py-2 mt-2 fs-13" *ngIf="shareError">{{ shareError }}</div>\r
            </div>\r
        </div>\r
\r
        <div class="card mb-0">\r
            <div class="card-body">	\r
                <h5 class="fs-18 mb-3">Delete Account</h5>								\r
                <h6 class="mb-1">Are you sure you want to delete your account?</h6>\r
                <p class="mb-3">Refers to the action of permanently removing a user's account and associated data from a system, service and platform.</p>\r
                <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#delete_account">Delete Account</a>	\r
            </div>\r
        </div>\r
\r
\r
        			<!-- Delete Modal -->\r
			<div class="modal fade" id="delete_account">\r
				<div class="modal-dialog modal-dialog-centered modal-lg">\r
					<div class="modal-content">\r
						<div class="modal-header">\r
							<h5>Delete Account</h5>\r
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\r
								<i class="isax isax-close-circle5"></i>\r
							</button>\r
						</div>\r
						<div class="modal-body">\r
							<div class="mb-3">\r
								<h6>Confirmez la suppression du compte</h6>\r
								<p class="text-muted">Cette action est irr&eacute;versible. Veuillez saisir votre mot de passe pour confirmer.</p>\r
								<input type="password" class="form-control mt-2" [(ngModel)]="deletePassword" name="deletePassword" placeholder="Votre mot de passe">\r
								<div class="alert alert-danger mt-2" *ngIf="deleteError">{{ deleteError }}</div>\r
							</div>\r
						</div>\r
						<div class="modal-footer">\r
							<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Annuler</button>\r
							<button class="btn btn-danger rounded-pill" type="button" (click)="onDeleteAccount()" data-bs-dismiss="modal">Supprimer D&eacute;finitivement</button>\r
						</div>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Delete Modal -->\r
` }]
  }], () => [{ type: ProfileService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSettingsComponent, { className: "StudentSettingsComponent", filePath: "src/app/features/student/settings/student-settings/student-settings.component.ts", lineNumber: 18 });
})();
export {
  StudentSettingsComponent
};
//# sourceMappingURL=chunk-G6MD7FH4.js.map
