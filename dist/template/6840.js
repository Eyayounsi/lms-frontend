"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6840],{

/***/ 66840:
/*!************************************************************************************************!*\
  !*** ./src/app/features/recruiter/settings/recruiter-settings/recruiter-settings.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterSettingsComponent: () => (/* binding */ RecruiterSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/profile/profile.service */ 98428);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/service/auth/auth.service */ 34530);







function RecruiterSettingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.loadError);
  }
}
function RecruiterSettingsComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 49);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.getAvatarUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function RecruiterSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r1.avatarInitialBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.avatarInitial, " ");
  }
}
function RecruiterSettingsComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Uploader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RecruiterSettingsComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RecruiterSettingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.avatarSuccessMessage);
  }
}
function RecruiterSettingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.avatarErrorMessage);
  }
}
function RecruiterSettingsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function RecruiterSettingsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function RecruiterSettingsComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 57);
  }
}
function RecruiterSettingsComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.emailSuccessMessage);
  }
}
function RecruiterSettingsComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.emailErrorMessage);
  }
}
let RecruiterSettingsComponent = /*#__PURE__*/(() => {
  class RecruiterSettingsComponent {
    profileService;
    authService;
    profileForm = {
      fullName: '',
      email: '',
      phone: '',
      designation: '',
      address: '',
      bio: ''
    };
    newEmail = '';
    successMessage = '';
    errorMessage = '';
    emailSuccessMessage = '';
    emailErrorMessage = '';
    loadError = '';
    updatingEmail = false;
    avatarPreview = null;
    avatarUploading = false;
    avatarPath = '';
    avatarSuccessMessage = '';
    avatarErrorMessage = '';
    constructor(profileService, authService) {
      this.profileService = profileService;
      this.authService = authService;
    }
    ngOnInit() {
      this.profileService.getProfile().subscribe({
        next: data => {
          this.profileForm.fullName = data.fullName || '';
          this.profileForm.email = data.email || '';
          this.profileForm.phone = data.phone || '';
          this.profileForm.designation = data.designation || '';
          this.profileForm.address = data.address || '';
          this.profileForm.bio = data.bio || '';
          this.newEmail = data.email || '';
          this.avatarPath = data.avatarPath || '';
        },
        error: () => {
          this.loadError = 'Impossible de charger le profil. Verifiez que le serveur est demarre.';
        }
      });
    }
    onUpdateProfile() {
      this.successMessage = '';
      this.errorMessage = '';
      this.profileService.updateProfile(this.profileForm).subscribe({
        next: data => {
          this.successMessage = 'Profil mis a jour avec succes.';
          localStorage.setItem('fullName', data.fullName);
          localStorage.setItem('email', data.email);
          this.newEmail = data.email || this.newEmail;
        },
        error: err => {
          this.errorMessage = err.error?.message || 'Erreur lors de la mise a jour';
        }
      });
    }
    onChangeEmail() {
      this.emailSuccessMessage = '';
      this.emailErrorMessage = '';
      const nextEmail = (this.newEmail || '').trim();
      if (!nextEmail) {
        this.emailErrorMessage = 'Veuillez saisir une adresse e-mail.';
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(nextEmail)) {
        this.emailErrorMessage = 'Format e-mail invalide.';
        return;
      }
      if (nextEmail.toLowerCase() === (this.profileForm.email || '').toLowerCase()) {
        this.emailErrorMessage = 'Le nouvel e-mail est identique a l\'actuel.';
        return;
      }
      this.updatingEmail = true;
      this.profileService.updateProfile({
        ...this.profileForm,
        email: nextEmail
      }).subscribe({
        next: data => {
          this.profileForm.email = data?.email || nextEmail;
          this.newEmail = this.profileForm.email;
          localStorage.setItem('email', this.profileForm.email);
          this.emailSuccessMessage = 'Adresse e-mail mise a jour avec succes.';
          this.updatingEmail = false;
        },
        error: err => {
          this.emailErrorMessage = err?.error?.message || 'Impossible de modifier l\'e-mail.';
          this.updatingEmail = false;
        }
      });
    }
    getAvatarUrl() {
      if (this.avatarPreview) return this.avatarPreview;
      if (!this.avatarPath) return '';
      return this.authService.resolveAvatarUrl(this.avatarPath) || '';
    }
    get avatarInitial() {
      return this.profileForm.fullName?.trim()?.charAt(0)?.toUpperCase() || 'R';
    }
    get avatarInitialBg() {
      return 'linear-gradient(135deg, #10b981, #059669)';
    }
    onAvatarSelected(event) {
      this.avatarSuccessMessage = '';
      this.avatarErrorMessage = '';
      const input = event.target;
      if (!input.files?.length) return;
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        this.avatarErrorMessage = 'Veuillez choisir un fichier image valide (PNG/JPG).';
        input.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        this.avatarPreview = e.target?.result;
      };
      reader.readAsDataURL(file);
      this.avatarUploading = true;
      this.profileService.uploadAvatar(file).subscribe({
        next: res => {
          this.avatarUploading = false;
          this.avatarPreview = null;
          this.avatarPath = res?.avatarPath || '';
          this.authService.setAvatarPath(this.avatarPath);
          this.avatarSuccessMessage = 'Photo de profil mise a jour avec succes.';
          input.value = '';
        },
        error: err => {
          this.avatarUploading = false;
          this.avatarPreview = null;
          this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de mettre a jour la photo.';
          input.value = '';
        }
      });
    }
    removeAvatar() {
      this.avatarSuccessMessage = '';
      this.avatarErrorMessage = '';
      if (!this.avatarPath) {
        this.avatarErrorMessage = 'Aucune photo de profil a supprimer.';
        return;
      }
      const confirmed = window.confirm('Voulez-vous supprimer votre photo de profil ?');
      if (!confirmed) return;
      this.avatarUploading = true;
      this.profileService.deleteAvatar().subscribe({
        next: () => {
          this.avatarUploading = false;
          this.avatarPreview = null;
          this.avatarPath = '';
          this.authService.setAvatarPath('');
          this.avatarSuccessMessage = 'Photo de profil supprimee avec succes.';
        },
        error: err => {
          this.avatarUploading = false;
          this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de supprimer la photo.';
        }
      });
    }
    static ɵfac = function RecruiterSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RecruiterSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RecruiterSettingsComponent,
      selectors: [["app-recruiter-settings"]],
      decls: 87,
      vars: 25,
      consts: [["profileFormRef", "ngForm"], ["class", "alert alert-warning mb-3", 4, "ngIf"], [1, "mb-4", 3, "ngSubmit"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "mb-1", "fs-18"], [1, "text-muted", "mb-0"], [1, "ins-set-photo-row", "mb-4"], ["class", "ins-set-photo-avatar", "alt", "Photo profil", 3, "src", 4, "ngIf"], ["class", "ins-set-photo-avatar ins-set-photo-avatar--initial", 3, "background", 4, "ngIf"], [1, "ins-set-photo-content"], [1, "mb-1"], [1, "text-muted", "mb-2"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "ins-set-photo-btn", "ins-set-photo-btn--upload"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change", "disabled"], [4, "ngIf"], ["class", "d-flex align-items-center gap-2", 4, "ngIf"], ["type", "button", 1, "ins-set-photo-btn", "ins-set-photo-btn--delete", 3, "click", "disabled"], ["class", "alert alert-success mb-3", 4, "ngIf"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "my-4"], [1, "row"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "fullName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "designation", "placeholder", "Ex: Talent Acquisition Manager", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], ["type", "email", "name", "email", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", "placeholder", "Ville, pays...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-0"], ["name", "bio", "rows", "4", "placeholder", "Parlez de votre mission de recrutement et des profils recherches...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "alert alert-success mb-2", 4, "ngIf"], ["class", "alert alert-danger mb-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-4"], [1, "row", "align-items-end"], [1, "col-md-8"], [1, "mb-3", "mb-md-0"], ["type", "email", "name", "newEmail", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4", "d-grid"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "alert alert-success mt-3 mb-0", 4, "ngIf"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "alert", "alert-warning", "mb-3"], ["alt", "Photo profil", 1, "ins-set-photo-avatar", 3, "src"], [1, "ins-set-photo-avatar", "ins-set-photo-avatar--initial"], [1, "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"], [1, "alert", "alert-success", "mb-3"], [1, "alert", "alert-danger", "mb-3"], [1, "alert", "alert-success", "mb-2"], [1, "alert", "alert-danger", "mb-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-success", "mt-3", "mb-0"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
      template: function RecruiterSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RecruiterSettingsComponent_div_0_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RecruiterSettingsComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onUpdateProfile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Informations du recruteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Mettez a jour les informations publiques de votre compte.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RecruiterSettingsComponent_img_11_Template, 1, 1, "img", 9)(12, RecruiterSettingsComponent_div_12_Template, 2, 3, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "h6", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Photo de profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "PNG ou JPG (800x800 max recommande)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14)(19, "label", 15)(20, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RecruiterSettingsComponent_Template_input_change_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onAvatarSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, RecruiterSettingsComponent_span_21_Template, 2, 0, "span", 17)(22, RecruiterSettingsComponent_span_22_Template, 3, 0, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecruiterSettingsComponent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.removeAvatar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Supprimer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RecruiterSettingsComponent_div_25_Template, 2, 1, "div", 20)(26, RecruiterSettingsComponent_div_26_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "hr", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 23)(29, "div", 24)(30, "div", 5)(31, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Nom complet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.profileForm.fullName, $event) || (ctx.profileForm.fullName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 24)(37, "div", 5)(38, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Telephone");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.profileForm.phone, $event) || (ctx.profileForm.phone = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 24)(42, "div", 5)(43, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Poste");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.profileForm.designation, $event) || (ctx.profileForm.designation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 30)(47, "div", 5)(48, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "E-mail actuel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.profileForm.email, $event) || (ctx.profileForm.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 30)(52, "div", 5)(53, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.profileForm.address, $event) || (ctx.profileForm.address = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 30)(57, "div", 33)(58, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Presentation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "textarea", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_textarea_ngModelChange_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.profileForm.bio, $event) || (ctx.profileForm.bio = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "hr", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, RecruiterSettingsComponent_div_62_Template, 2, 1, "div", 35)(63, RecruiterSettingsComponent_div_63_Template, 2, 1, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Enregistrer le profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 38)(67, "div", 4)(68, "div", 5)(69, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Changer l'adresse e-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 39)(74, "div", 40)(75, "div", 41)(76, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Nouvelle adresse e-mail ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterSettingsComponent_Template_input_ngModelChange_80_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newEmail, $event) || (ctx.newEmail = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 43)(82, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecruiterSettingsComponent_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onChangeEmail());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, RecruiterSettingsComponent_span_83_Template, 1, 0, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Mettre a jour l'adresse e-mail ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, RecruiterSettingsComponent_div_85_Template, 2, 1, "div", 46)(86, RecruiterSettingsComponent_div_86_Template, 2, 1, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getAvatarUrl());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.getAvatarUrl());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.avatarUploading || !ctx.avatarPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.avatarSuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.avatarErrorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.designation);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.bio);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Adresse e-mail actuelle : ", ctx.profileForm.email || "\u2014");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.updatingEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatingEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailSuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.emailErrorMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: [".danger-zone-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(220, 53, 69, 0.35);\n  background: linear-gradient(180deg, #fff 0%, #fff7f8 100%);\n}\n\n.ins-set-photo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 4px 0;\n}\n\n.ins-set-photo-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #e5e7eb;\n  border: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n\n.ins-set-photo-avatar--initial[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 30px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.ins-set-photo-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.ins-set-photo-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ins-set-photo-btn--upload[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #111827;\n}\n.ins-set-photo-btn--upload[_ngcontent-%COMP%]:hover {\n  background: #d1d5db;\n}\n\n.ins-set-photo-btn--delete[_ngcontent-%COMP%] {\n  background: #ff4667;\n  color: #fff;\n}\n.ins-set-photo-btn--delete[_ngcontent-%COMP%]:hover:enabled {\n  background: #e83b5b;\n}\n.ins-set-photo-btn--delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.ins-set-photo-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n\n@media (max-width: 576px) {\n  .ins-set-photo-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .ins-set-photo-avatar[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL3NldHRpbmdzL3JlY3J1aXRlci1zZXR0aW5ncy9yZWNydWl0ZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSx1QkFBQTtFQUZGO0VBS0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFuZ2VyLXpvbmUtY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDUzLCA2OSwgMC4zNSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiAwJSwgI2ZmZjdmOCAxMDAlKTtcclxufVxyXG5cclxuLmlucy1zZXQtcGhvdG8tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1hdmF0YXIge1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1hdmF0YXItLWluaXRpYWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmlucy1zZXQtcGhvdG8tY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnMtc2V0LXBob3RvLWJ0bi0tdXBsb2FkIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xyXG4gIGNvbG9yOiAjMTExODI3O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1idG4tLWRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmNDY2NztcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgJjpob3ZlcjplbmFibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNlODNiNWI7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuLmlucy1zZXQtcGhvdG8tYnRuLmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuaW5zLXNldC1waG90by1yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuaW5zLXNldC1waG90by1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return RecruiterSettingsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=6840.js.map