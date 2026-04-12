"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[4194],{

/***/ 34194:
/*!******************************************************************************************!*\
  !*** ./src/app/features/student/settings/student-settings/student-settings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentSettingsComponent: () => (/* binding */ StudentSettingsComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 16060);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/service/profile/profile.service */ 98428);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 8724);














const _c0 = () => ({
  adaptivePosition: true
});
function StudentSettingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.loadError);
  }
}
function StudentSettingsComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function StudentSettingsComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function StudentSettingsComponent_span_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 70);
  }
}
function StudentSettingsComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.shareSuccess);
  }
}
function StudentSettingsComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.shareError);
  }
}
function StudentSettingsComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.deleteError);
  }
}
let StudentSettingsComponent = /*#__PURE__*/(() => {
  class StudentSettingsComponent {
    profileService;
    authService;
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    profileForm = {
      fullName: '',
      email: '',
      phone: ''
    };
    successMessage = '';
    errorMessage = '';
    deletePassword = '';
    deleteError = '';
    // Share with recruiters
    shareWithRecruiters = false;
    shareLoading = false;
    shareSuccess = '';
    shareError = '';
    constructor(profileService, authService, router) {
      this.profileService = profileService;
      this.authService = authService;
      this.router = router;
    }
    loadError = '';
    ngOnInit() {
      this.profileService.getProfile().subscribe({
        next: profile => {
          this.profileForm.fullName = profile.fullName || '';
          this.profileForm.email = profile.email || '';
          this.profileForm.phone = profile.phone || '';
          this.shareWithRecruiters = profile.shareWithRecruiters === true;
        },
        error: err => {
          console.error('Erreur chargement profil:', err);
          this.loadError = 'Impossible de charger le profil. Vérifiez que le serveur est démarré.';
        }
      });
    }
    onUpdateProfile() {
      this.successMessage = '';
      this.errorMessage = '';
      this.profileService.updateProfile(this.profileForm).subscribe({
        next: updated => {
          this.successMessage = 'Profil mis à jour avec succès.';
          localStorage.setItem('fullName', updated.fullName || '');
          if (updated.email) localStorage.setItem('email', updated.email);
        },
        error: err => {
          this.errorMessage = err.error || 'Erreur lors de la mise à jour.';
        }
      });
    }
    onToggleShare(event) {
      const checked = event.target.checked;
      this.shareLoading = true;
      this.shareSuccess = '';
      this.shareError = '';
      this.profileService.toggleShareWithRecruiters(checked).subscribe({
        next: () => {
          this.shareWithRecruiters = checked;
          this.shareLoading = false;
          this.shareSuccess = checked ? 'Votre profil est maintenant visible par les recruteurs.' : 'Votre profil est masqué des recruteurs.';
          setTimeout(() => this.shareSuccess = '', 3000);
        },
        error: err => {
          this.shareLoading = false;
          this.shareError = err.error || 'Erreur lors de la mise à jour.';
          // Revert toggle 
          this.shareWithRecruiters = !checked;
        }
      });
    }
    onDeleteAccount() {
      this.deleteError = '';
      this.profileService.deleteAccount(this.deletePassword).subscribe({
        next: () => {
          this.authService.logout();
          this.router.navigate([this.routes.login]);
        },
        error: err => {
          this.deleteError = err.error || 'Mot de passe incorrect.';
        }
      });
    }
    get avatarInitial() {
      return this.profileForm.fullName?.trim()?.charAt(0)?.toUpperCase() || 'U';
    }
    static ɵfac = function StudentSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: StudentSettingsComponent,
      selectors: [["app-student-settings"]],
      decls: 134,
      vars: 21,
      consts: [["profileFormRef", "ngForm"], ["class", "alert alert-warning m-3", 4, "ngIf"], [1, "card"], [1, "card-body"], [3, "ngSubmit"], [1, "profile-upload-group"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxxl", "avatar-rounded", "border", "me-3", "d-inline-flex", "align-items-center", "justify-content-center", 2, "background", "linear-gradient(135deg,#4f46e5,#0ea5e9)", "color", "#fff", "font-size", "40px", "font-weight", "800", "text-transform", "uppercase", 3, "routerLink"], [1, "profile-upload-head"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "new-employee-field"], [1, "d-flex", "align-items-center", "mt-2"], [1, "image-upload", "position-relative", "mb-0", "me-2"], ["type", "file"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "btn-sm", "rounded-pill", "image-uploads"], [1, "img-delete"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-sm", "rounded-pill"], [1, "edit-profile-info", "mb-3"], [1, "mb-1"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "fullName", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-3", "ngxdate"], [1, "input-icon-end", "position-relative"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", "container", ".ngxdate", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], [1, "col-md-12"], ["rows", "4", 1, "form-control"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fs-18", "mb-1"], [1, "ti", "ti-share", "me-2"], [1, "text-muted", "mb-0"], [1, "form-check", "form-switch", "ms-3"], ["type", "checkbox", "role", "switch", "id", "shareToggle", 1, "form-check-input", 3, "change", "checked", "disabled"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge"], ["class", "spinner-border spinner-border-sm text-muted", 4, "ngIf"], ["class", "alert alert-success py-2 mt-2 fs-13", 4, "ngIf"], ["class", "alert alert-danger py-2 mt-2 fs-13", 4, "ngIf"], [1, "fs-18", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_account", 1, "btn", "btn-secondary"], ["id", "delete_account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "text-muted"], ["type", "password", "name", "deletePassword", "placeholder", "Votre mot de passe", 1, "form-control", "mt-2", 3, "ngModelChange", "ngModel"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "rounded-pill", 3, "click"], [1, "alert", "alert-warning", "m-3"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "text-muted"], [1, "alert", "alert-success", "py-2", "mt-2", "fs-13"], [1, "alert", "alert-danger", "py-2", "mt-2", "fs-13"], [1, "alert", "alert-danger", "mt-2"]],
      template: function StudentSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, StudentSettingsComponent_div_0_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "form", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function StudentSettingsComponent_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onUpdateProfile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8)(10, "h6")(11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Profile Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "PNG or JPG no bigger than 800px width and height");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 16)(22, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div")(25, "div", 18)(26, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Personal Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Edit your personal information");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Nom complet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.profileForm.fullName, $event) || (ctx.profileForm.fullName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 21)(39, "div", 22)(40, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.profileForm.email, $event) || (ctx.profileForm.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 21)(46, "div", 22)(47, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "T\u00C3\u00A9l\u00C3\u00A9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.profileForm.phone, $event) || (ctx.profileForm.phone = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 21)(51, "div", 22)(52, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Gender ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-select", 28)(57, "mat-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Male");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Female");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 21)(64, "div", 30)(65, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "DOB ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 35)(74, "div", 22)(75, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Bio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "textarea", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, StudentSettingsComponent_div_82_Template, 2, 1, "div", 37)(83, StudentSettingsComponent_div_83_Template, 2, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Update Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 40)(87, "div", 3)(88, "div", 41)(89, "div")(90, "h5", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Partage du profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "p", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Rendez votre profil visible par les recruteurs de la plateforme pour recevoir des opportunit\u00E9s professionnelles.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 45)(96, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function StudentSettingsComponent_Template_input_change_96_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onToggleShare($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 47)(98, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, StudentSettingsComponent_span_100_Template, 1, 0, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, StudentSettingsComponent_div_101_Template, 2, 1, "div", 50)(102, StudentSettingsComponent_div_102_Template, 2, 1, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 40)(104, "div", 3)(105, "h5", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "Delete Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "h6", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "Are you sure you want to delete your account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Refers to the action of permanently removing a user's account and associated data from a system, service and platform.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "Delete Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 54)(114, "div", 55)(115, "div", 56)(116, "div", 57)(117, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Delete Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](120, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 60)(122, "div", 22)(123, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "Confirmez la suppression du compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "p", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Cette action est irr\u00E9versible. Veuillez saisir votre mot de passe pour confirmer.");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function StudentSettingsComponent_Template_input_ngModelChange_127_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.deletePassword, $event) || (ctx.deletePassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, StudentSettingsComponent_div_128_Template, 2, 1, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 64)(130, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "button", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StudentSettingsComponent_Template_button_click_132_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onDeleteAccount());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "Supprimer D\u00E9finitivement");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.avatarInitial, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", ctx.routes.studentProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](20, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.shareWithRecruiters)("disabled", ctx.shareLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.shareWithRecruiters ? "bg-success" : "bg-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.shareWithRecruiters ? "Profil visible par les recruteurs" : "Profil masqu\u00E9", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.shareLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.shareSuccess);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.shareError);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.deletePassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.deleteError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatOption, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentSettingsComponent;
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
//# sourceMappingURL=4194.js.map