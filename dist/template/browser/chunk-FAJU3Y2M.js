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
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/settings/instructor-settings/instructor-settings.component.ts
var _c0 = () => ({ adaptivePosition: true });
function InstructorSettingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadError);
  }
}
function InstructorSettingsComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function InstructorSettingsComponent_div_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function InstructorSettingsComponent_div_186_Template(rf, ctx) {
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
var InstructorSettingsComponent = class _InstructorSettingsComponent {
  profileService;
  authService;
  routes = routes;
  // Modèle du formulaire — lié aux inputs via [(ngModel)]
  profileForm = {
    fullName: "",
    email: "",
    phone: ""
  };
  // Modèle pour la suppression de compte
  deletePassword = "";
  // Messages d'état
  successMessage = "";
  errorMessage = "";
  deleteError = "";
  loadError = "";
  constructor(profileService, authService) {
    this.profileService = profileService;
    this.authService = authService;
  }
  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profileForm.fullName = data.fullName || "";
        this.profileForm.email = data.email || "";
        this.profileForm.phone = data.phone || "";
      },
      error: (err) => {
        console.error("Erreur chargement profil:", err);
        this.loadError = "Impossible de charger le profil. V\xE9rifiez que le serveur est d\xE9marr\xE9.";
      }
    });
  }
  // Appelée quand l'utilisateur clique "Update Profile"
  // (ngSubmit) déclenche cette méthode depuis le formulaire HTML
  onUpdateProfile() {
    this.successMessage = "";
    this.errorMessage = "";
    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (data) => {
        this.successMessage = "Profil mis \xE0 jour avec succ\xE8s !";
        localStorage.setItem("fullName", data.fullName);
        localStorage.setItem("email", data.email);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de la mise \xE0 jour";
      }
    });
  }
  // Appelée quand l'utilisateur confirme la suppression dans le modal
  onDeleteAccount() {
    this.deleteError = "";
    if (!this.deletePassword.trim()) {
      this.deleteError = "Veuillez entrer votre mot de passe pour confirmer.";
      return;
    }
    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        alert("Votre compte a \xE9t\xE9 supprim\xE9 d\xE9finitivement.");
        this.authService.logout();
      },
      error: (err) => {
        this.deleteError = err.error || "Mot de passe incorrect. Suppression refus\xE9e.";
      }
    });
  }
  static \u0275fac = function InstructorSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSettingsComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSettingsComponent, selectors: [["app-instructor-settings"]], decls: 192, vars: 18, consts: [["profileFormRef", "ngForm"], ["class", "alert alert-warning m-3", 4, "ngIf"], [3, "ngSubmit"], [1, "card"], [1, "card-body"], [1, "profile-upload-group"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxxl", "avatar-rounded", "border", "me-3", 3, "routerLink"], ["src", "assets/img/user/user-01.jpg", "alt", "Img", 1, "img-fluid"], [1, "profile-upload-head"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "new-employee-field"], [1, "d-flex", "align-items-center", "mt-2"], [1, "image-upload", "position-relative", "mb-0", "me-2"], ["type", "file"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "btn-sm", "rounded-pill", "image-uploads"], [1, "img-delete"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-sm", "rounded-pill"], [1, "edit-profile-info", "mb-3"], [1, "mb-1", "fs-18"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "fullName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], [1, "mb-4"], ["rows", "4", 1, "form-control"], [1, "mt-3", "mb-3"], [1, "col-xl-7"], ["type", "text", "value", "", 1, "form-control"], [1, "col-xl-5"], [1, "mb-3", "ngxdate"], [1, "input-icon", "position-relative", "calender-input"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "mb-3", "ngxdate1"], [1, "input-icon-addon", "calender-input"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["href", "javascript:void(0);", "id", "add-new-topic-btn", 1, "d-inline-flex", "align-items-center", "text-secondary", "fw-medium", "mb-3"], [1, "isax", "isax-add", "me-1"], [1, "mb-3", "ngxdate2"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate2", "placeholder", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "mb-3", "ngxdate3"], ["type", "text", "bsDatepicker", "", "placeholder", "", "container", ".ngxdate3", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["href", "javascript:void(0);", "id", "add-new-topic-btn2", 1, "d-inline-flex", "align-items-center", "text-secondary", "fw-medium", "mb-3"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-0"], [1, "fs-18", "mb-3"], [1, "mb-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_account", 1, "btn", "btn-secondary"], ["id", "delete_account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "text-muted"], ["type", "password", "name", "deletePassword", "placeholder", "Votre mot de passe", 1, "form-control", "mt-2", 3, "ngModelChange", "ngModel"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "rounded-pill", 3, "click"], [1, "alert", "alert-warning", "m-3"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "alert", "alert-danger", "mt-2"]], template: function InstructorSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, InstructorSettingsComponent_div_0_Template, 2, 1, "div", 1);
      \u0275\u0275elementStart(1, "form", 2, 0);
      \u0275\u0275listener("ngSubmit", function InstructorSettingsComponent_Template_form_ngSubmit_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpdateProfile());
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "h6")(11, "a", 10);
      \u0275\u0275text(12, "Your Avatar");
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
      \u0275\u0275text(34, "First Name ");
      \u0275\u0275elementStart(35, "span", 25);
      \u0275\u0275text(36, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.fullName, $event) || (ctx.profileForm.fullName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 22)(39, "div", 23)(40, "label", 24);
      \u0275\u0275text(41, "Phone Number ");
      \u0275\u0275elementStart(42, "span", 25);
      \u0275\u0275text(43, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.phone, $event) || (ctx.profileForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 22)(46, "div", 23)(47, "label", 24);
      \u0275\u0275text(48, "Email ");
      \u0275\u0275elementStart(49, "span", 25);
      \u0275\u0275text(50, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.profileForm.email, $event) || (ctx.profileForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 29)(53, "div", 30)(54, "label", 24);
      \u0275\u0275text(55, "Bio ");
      \u0275\u0275elementStart(56, "span", 25);
      \u0275\u0275text(57, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "textarea", 31);
      \u0275\u0275text(59, "I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 32)(61, "h5", 20);
      \u0275\u0275text(62, "Educational Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Edit your Educational information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 29)(66, "div", 21)(67, "div", 33)(68, "div", 21)(69, "div", 22)(70, "div", 23)(71, "label", 24);
      \u0275\u0275text(72, "Degree");
      \u0275\u0275elementStart(73, "span", 25);
      \u0275\u0275text(74, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(75, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 22)(77, "div", 23)(78, "label", 24);
      \u0275\u0275text(79, "University");
      \u0275\u0275elementStart(80, "span", 25);
      \u0275\u0275text(81, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(82, "input", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 35)(84, "div", 21)(85, "div", 22)(86, "div", 36)(87, "label", 24);
      \u0275\u0275text(88, "From Date");
      \u0275\u0275elementStart(89, "span", 25);
      \u0275\u0275text(90, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 37)(92, "span", 38);
      \u0275\u0275element(93, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "input", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 22)(96, "div", 41)(97, "label", 24);
      \u0275\u0275text(98, "To Date");
      \u0275\u0275elementStart(99, "span", 25);
      \u0275\u0275text(100, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 37)(102, "span", 42);
      \u0275\u0275element(103, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "input", 43);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(105, "a", 44);
      \u0275\u0275element(106, "i", 45);
      \u0275\u0275text(107, " Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 32)(109, "h5", 20);
      \u0275\u0275text(110, "Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, "Edit your Experience");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 29)(114, "div", 21)(115, "div", 33)(116, "div", 21)(117, "div", 22)(118, "div", 23)(119, "label", 24);
      \u0275\u0275text(120, "Company");
      \u0275\u0275elementStart(121, "span", 25);
      \u0275\u0275text(122, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(123, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 22)(125, "div", 23)(126, "label", 24);
      \u0275\u0275text(127, "Position");
      \u0275\u0275elementStart(128, "span", 25);
      \u0275\u0275text(129, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(130, "input", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "div", 35)(132, "div", 21)(133, "div", 22)(134, "div", 46)(135, "label", 24);
      \u0275\u0275text(136, "From Date");
      \u0275\u0275elementStart(137, "span", 25);
      \u0275\u0275text(138, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 37)(140, "span", 38);
      \u0275\u0275element(141, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(142, "input", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div", 22)(144, "div", 48)(145, "label", 24);
      \u0275\u0275text(146, "To Date");
      \u0275\u0275elementStart(147, "span", 25);
      \u0275\u0275text(148, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 37)(150, "span", 42);
      \u0275\u0275element(151, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(152, "input", 49);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(153, "a", 50);
      \u0275\u0275element(154, "i", 45);
      \u0275\u0275text(155, " Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 29);
      \u0275\u0275template(157, InstructorSettingsComponent_div_157_Template, 2, 1, "div", 51)(158, InstructorSettingsComponent_div_158_Template, 2, 1, "div", 52);
      \u0275\u0275elementStart(159, "button", 53);
      \u0275\u0275text(160, "Update Profile");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(161, "div", 54)(162, "div", 4)(163, "h5", 55);
      \u0275\u0275text(164, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "h6", 56);
      \u0275\u0275text(166, "Are you sure you want to delete your account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 23);
      \u0275\u0275text(168, "Refers to the action of permanently removing a user's account and associated data from a system, service and platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "a", 57);
      \u0275\u0275text(170, "Delete Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "div", 58)(172, "div", 59)(173, "div", 60)(174, "div", 61)(175, "h5");
      \u0275\u0275text(176, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "button", 62);
      \u0275\u0275element(178, "i", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 64)(180, "div", 23)(181, "h6");
      \u0275\u0275text(182, "Confirmez la suppression du compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "p", 65);
      \u0275\u0275text(184, "Cette action est irr\xE9versible. Veuillez saisir votre mot de passe pour confirmer.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "input", 66);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_185_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deletePassword, $event) || (ctx.deletePassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(186, InstructorSettingsComponent_div_186_Template, 2, 1, "div", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 68)(188, "button", 69);
      \u0275\u0275text(189, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "button", 70);
      \u0275\u0275listener("click", function InstructorSettingsComponent_Template_button_click_190_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeleteAccount());
      });
      \u0275\u0275text(191, "Supprimer D\xE9finitivement");
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
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.phone);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.profileForm.email);
      \u0275\u0275advance(43);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance(38);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(27);
      \u0275\u0275twoWayProperty("ngModel", ctx.deletePassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteError);
    }
  }, dependencies: [RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-settings", imports: [RouterLink, BsDatepickerModule, FormsModule, CommonModule], template: `\r
        <div *ngIf="loadError" class="alert alert-warning m-3">{{ loadError }}</div>\r
\r
        <form (ngSubmit)="onUpdateProfile()" #profileFormRef="ngForm">\r
        <div class="card">\r
            <div class="card-body">									\r
            <div class="profile-upload-group">									\r
                <div class="d-flex align-items-center">\r
                    <a [routerLink]="routes.studentProfile" class="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\r
                    <div class="profile-upload-head">\r
                        <h6><a [routerLink]="routes.studentProfile">Your Avatar</a></h6>\r
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
                        <h5 class="mb-1 fs-18">Personal Details</h5>\r
                        <p>Edit your personal information</p>\r
                    </div>\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">First Name <span class="text-danger"> *</span></label>\r
                                <input type="text" name="fullName" class="form-control" [(ngModel)]="profileForm.fullName" required>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Phone Number <span class="text-danger"> *</span></label>\r
                                <input type="text" name="phone" class="form-control" [(ngModel)]="profileForm.phone">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Email <span class="text-danger"> *</span></label>\r
                                <input type="email" name="email" class="form-control" [(ngModel)]="profileForm.email" required>\r
                            </div>\r
                        </div>\r
            \r
                        <div class="col-md-12">\r
                            <div class="mb-4">\r
                                <label class="form-label">Bio <span class="text-danger"> *</span></label>\r
                                <textarea rows="4" class="form-control">I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.</textarea>\r
                            </div>\r
                        </div>\r
                        <div class="mt-3 mb-3">\r
                            <h5 class="mb-1 fs-18">Educational Details</h5>\r
                            <p>Edit your Educational information</p>\r
                        </div>\r
                        <div class="col-md-12">                                                    \r
                            <div class="row">\r
                                <div class="col-xl-7">\r
                                  <div class="row">\r
                                   <div class="col-md-6">\r
                                    <div class="mb-3">\r
                                        <label class="form-label">Degree<span class="text-danger"> *</span></label>\r
                                        <input type="text" class="form-control" value="">\r
                                    </div>\r
                                   </div>\r
                                   <div class="col-md-6">\r
                                    <div class="mb-3">\r
                                        <label class="form-label">University<span class="text-danger"> *</span></label>\r
                                        <input type="text" class="form-control" value="">\r
                                    </div>\r
                                   </div>\r
                                </div>\r
                               </div>\r
                                <div class="col-xl-5">\r
                                    <div class="row">\r
                                    <div class="col-md-6">\r
                                        <div class="mb-3 ngxdate">\r
                                        <label class="form-label">From Date<span class="text-danger"> *</span></label>\r
                                        <div class="input-icon position-relative calender-input">\r
                                            <span class="input-icon-addon">\r
                                                <i class="isax isax-calendar"></i>\r
                                            </span>\r
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" [bsConfig]="{ adaptivePosition: true }" placeholder="">\r
                                        </div>\r
                                    </div>\r
                                    </div>\r
                                    <div class="col-md-6">\r
                                        <div class="mb-3 ngxdate1">\r
                                        <label class="form-label">To Date<span class="text-danger"> *</span></label>\r
                                        <div class="input-icon position-relative calender-input">\r
                                            <span class="input-icon-addon calender-input">\r
                                                <i class="isax isax-calendar"></i>\r
                                            </span>\r
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate1" [bsConfig]="{ adaptivePosition: true }" placeholder="">\r
                                        </div>\r
                                    </div>\r
                                    </div>\r
                                   </div>\r
                                </div>\r
                            </div>\r
                            <a href="javascript:void(0);" class="d-inline-flex align-items-center text-secondary fw-medium mb-3" id="add-new-topic-btn">\r
                                <i class="isax isax-add me-1"></i> Add New\r
                            </a>\r
                        </div>\r
                        <div class="mt-3 mb-3">\r
                            <h5 class="mb-1 fs-18">Experience</h5>\r
                            <p>Edit your Experience</p>\r
                        </div>\r
                        <div class="col-md-12">                                                    \r
                            <div class="row">\r
                                <div class="col-xl-7">\r
                                  <div class="row">\r
                                   <div class="col-md-6">\r
                                    <div class="mb-3">\r
                                        <label class="form-label">Company<span class="text-danger"> *</span></label>\r
                                        <input type="text" class="form-control" value="">\r
                                    </div>\r
                                   </div>\r
                                   <div class="col-md-6">\r
                                    <div class="mb-3">\r
                                        <label class="form-label">Position<span class="text-danger"> *</span></label>\r
                                        <input type="text" class="form-control" value="">\r
                                    </div>\r
                                   </div>\r
                                </div>\r
                               </div>\r
                                <div class="col-xl-5">\r
                                    <div class="row">\r
                                    <div class="col-md-6">\r
                                        <div class="mb-3 ngxdate2">\r
                                        <label class="form-label">From Date<span class="text-danger"> *</span></label>\r
                                        <div class="input-icon position-relative calender-input">\r
                                            <span class="input-icon-addon">\r
                                                <i class="isax isax-calendar"></i>\r
                                            </span>\r
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate2" [bsConfig]="{ adaptivePosition: true }" placeholder="">\r
                                        </div>\r
                                       </div>\r
                                    </div>\r
                                    <div class="col-md-6">\r
                                        <div class="mb-3 ngxdate3">\r
                                        <label class="form-label">To Date<span class="text-danger"> *</span></label>\r
                                        <div class="input-icon position-relative calender-input">\r
                                            <span class="input-icon-addon calender-input">\r
                                                <i class="isax isax-calendar"></i>\r
                                            </span>\r
                                            <input type="text" class="form-control datetimepicker" bsDatepicker placeholder="" container=".ngxdate3" [bsConfig]="{ adaptivePosition: true }">\r
                                        </div>\r
                                        </div>\r
                                    </div>\r
                                   </div>\r
                                </div>\r
                            </div>\r
                            <a href="javascript:void(0);" class="d-inline-flex align-items-center text-secondary fw-medium mb-3" id="add-new-topic-btn2">\r
                                <i class="isax isax-add me-1"></i> Add New\r
                              </a>\r
                        </div>\r
                        <div class="col-md-12">\r
                            <div class="alert alert-success" *ngIf="successMessage">{{ successMessage }}</div>\r
                            <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>\r
                            <button class="btn btn-secondary rounded-pill" type="submit">Update Profile</button>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
            <div class="card mb-0">\r
                <div class="card-body">	\r
                    <h5 class="fs-18 mb-3">Delete Account</h5>								\r
                    <h6 class="mb-1">Are you sure you want to delete your account?</h6>\r
                    <p class="mb-3">Refers to the action of permanently removing a user's account and associated data from a system, service and platform.</p>\r
                    <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#delete_account">Delete Account</a>								\r
                </div>\r
            </div>\r
        </form>\r
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
  }], () => [{ type: ProfileService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSettingsComponent, { className: "InstructorSettingsComponent", filePath: "src/app/features/instructor/settings/instructor-settings/instructor-settings.component.ts", lineNumber: 16 });
})();
export {
  InstructorSettingsComponent
};
//# sourceMappingURL=chunk-FAJU3Y2M.js.map
