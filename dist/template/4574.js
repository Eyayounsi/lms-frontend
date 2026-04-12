"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[4574],{

/***/ 34574:
/*!******************************************************************************************************!*\
  !*** ./src/app/features/student/settings/student-social-profile/student-social-profile.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentSocialProfileComponent: () => (/* binding */ StudentSocialProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/service/profile/profile.service */ 98428);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 54285);







function StudentSocialProfileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function StudentSocialProfileComponent_Conditional_3_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.successMsg);
  }
}
function StudentSocialProfileComponent_Conditional_3_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
  }
}
function StudentSocialProfileComponent_Conditional_3_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 23);
  }
}
function StudentSocialProfileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function StudentSocialProfileComponent_Conditional_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5)(2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Twitter / X");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7)(5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentSocialProfileComponent_Conditional_3_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.socialForm.twitterUrl, $event) || (ctx_r1.socialForm.twitterUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentSocialProfileComponent_Conditional_3_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.socialForm.facebookUrl, $event) || (ctx_r1.socialForm.facebookUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5)(16, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Instagram");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7)(19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentSocialProfileComponent_Conditional_3_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.socialForm.instagramUrl, $event) || (ctx_r1.socialForm.instagramUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5)(23, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "LinkedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 7)(26, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentSocialProfileComponent_Conditional_3_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.socialForm.linkedinUrl, $event) || (ctx_r1.socialForm.linkedinUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 5)(30, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "YouTube");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 7)(33, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentSocialProfileComponent_Conditional_3_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.socialForm.youtubeUrl, $event) || (ctx_r1.socialForm.youtubeUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](36, StudentSocialProfileComponent_Conditional_3_Conditional_36_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](37, StudentSocialProfileComponent_Conditional_3_Conditional_37_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 21)(39, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](40, StudentSocialProfileComponent_Conditional_3_Conditional_40_Template, 1, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Save Social Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.socialForm.twitterUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.socialForm.facebookUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.socialForm.instagramUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.socialForm.linkedinUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.socialForm.youtubeUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.successMsg ? 36 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.errorMsg ? 37 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r1.saving ? 40 : -1);
  }
}
let StudentSocialProfileComponent = /*#__PURE__*/(() => {
  class StudentSocialProfileComponent {
    profileService;
    toastr;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes;
    socialForm = {
      twitterUrl: '',
      facebookUrl: '',
      instagramUrl: '',
      linkedinUrl: '',
      youtubeUrl: ''
    };
    loading = false;
    saving = false;
    successMsg = '';
    errorMsg = '';
    constructor(profileService, toastr) {
      this.profileService = profileService;
      this.toastr = toastr;
    }
    ngOnInit() {
      this.loading = true;
      this.profileService.getProfile().subscribe({
        next: profile => {
          this.socialForm.twitterUrl = profile.twitterUrl || '';
          this.socialForm.facebookUrl = profile.facebookUrl || '';
          this.socialForm.instagramUrl = profile.instagramUrl || '';
          this.socialForm.linkedinUrl = profile.linkedinUrl || '';
          this.socialForm.youtubeUrl = profile.youtubeUrl || '';
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toastr.error('Impossible de charger le profil.');
        }
      });
    }
    onSave() {
      this.saving = true;
      this.successMsg = '';
      this.errorMsg = '';
      this.profileService.updateProfile(this.socialForm).subscribe({
        next: () => {
          this.saving = false;
          this.successMsg = 'Réseaux sociaux mis à jour avec succès.';
          this.toastr.success('Réseaux sociaux sauvegardés !');
          setTimeout(() => this.successMsg = '', 4000);
        },
        error: err => {
          this.saving = false;
          this.errorMsg = err?.error || 'Erreur lors de la sauvegarde.';
          this.toastr.error(this.errorMsg);
        }
      });
    }
    static ɵfac = function StudentSocialProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentSocialProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: StudentSocialProfileComponent,
      selectors: [["app-student-social-profile"]],
      decls: 4,
      vars: 1,
      consts: [[1, "card"], [1, "card-body"], [1, "text-center", "py-4"], [1, "spinner-border", "text-secondary", "spinner-border-sm"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label"], [1, "position-relative", "input-icon-start"], ["type", "url", "name", "twitter", "placeholder", "https://www.twitter.com/votre-profil", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "social-icon"], [1, "fa-brands", "fa-x-twitter", "fs-14"], ["type", "url", "name", "facebook", "placeholder", "https://www.facebook.com/votre-profil", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fa-brands", "fa-square-facebook", "fs-14"], ["type", "url", "name", "instagram", "placeholder", "https://www.instagram.com/votre-profil", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fa-brands", "fa-instagram", "fs-14"], ["type", "url", "name", "linkedin", "placeholder", "https://www.linkedin.com/in/votre-profil", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fa-brands", "fa-linkedin-in", "fs-14"], ["type", "url", "name", "youtube", "placeholder", "https://www.youtube.com/@votre-chaine", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fa-brands", "fa-youtube", "fs-14"], [1, "alert", "alert-success", "py-2", "mb-3"], [1, "alert", "alert-danger", "py-2", "mb-3"], [1, "mt-4"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"]],
      template: function StudentSocialProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](2, StudentSocialProfileComponent_Conditional_2_Template, 2, 0, "div", 2)(3, StudentSocialProfileComponent_Conditional_3_Template, 42, 9, "form");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.loading ? 2 : 3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentSocialProfileComponent;
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
//# sourceMappingURL=4574.js.map