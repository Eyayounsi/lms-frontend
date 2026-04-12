"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5708],{

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

/***/ }),

/***/ 95708:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/instructor/settings/instructor-settings/instructor-settings.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorSettingsComponent: () => (/* binding */ InstructorSettingsComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/service/profile/profile.service */ 98428);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/service/auth/auth.service */ 34530);








function InstructorSettingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.loadError);
  }
}
function InstructorSettingsComponent_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 49);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.getAvatarUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function InstructorSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r1.avatarInitialBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.avatarInitial, " ");
  }
}
function InstructorSettingsComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InstructorSettingsComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Upload... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InstructorSettingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.avatarSuccessMessage);
  }
}
function InstructorSettingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.avatarErrorMessage);
  }
}
function InstructorSettingsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function InstructorSettingsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function InstructorSettingsComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 57);
  }
}
function InstructorSettingsComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.emailSuccessMessage);
  }
}
function InstructorSettingsComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.emailErrorMessage);
  }
}
let InstructorSettingsComponent = /*#__PURE__*/(() => {
  class InstructorSettingsComponent {
    profileService;
    authService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // Modèle du formulaire — lié aux inputs via [(ngModel)]
    profileForm = {
      fullName: '',
      email: '',
      phone: '',
      designation: '',
      address: '',
      bio: ''
    };
    // Section changement d'email
    newEmail = '';
    // Messages d'état
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
        error: err => {
          console.error('Erreur chargement profil:', err);
          this.loadError = 'Impossible de charger le profil. Vérifiez que le serveur est démarré.';
        }
      });
    }
    // Appelée quand l'utilisateur clique "Update Profile"
    // (ngSubmit) déclenche cette méthode depuis le formulaire HTML
    onUpdateProfile() {
      this.successMessage = '';
      this.errorMessage = '';
      this.profileService.updateProfile(this.profileForm).subscribe({
        next: data => {
          this.successMessage = 'Profil mis a jour avec succes.';
          // Mettre à jour le localStorage avec le nouveau nom
          localStorage.setItem('fullName', data.fullName);
          localStorage.setItem('email', data.email);
          this.newEmail = data.email || this.newEmail;
        },
        error: err => {
          this.errorMessage = err.error?.message || 'Erreur lors de la mise à jour';
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
      return this.profileForm.fullName?.trim()?.charAt(0)?.toUpperCase() || 'U';
    }
    get avatarInitialBg() {
      return 'linear-gradient(135deg, #7c3aed, #ec4899)';
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
    static ɵfac = function InstructorSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: InstructorSettingsComponent,
      selectors: [["app-instructor-settings"]],
      decls: 87,
      vars: 25,
      consts: [["profileFormRef", "ngForm"], ["class", "alert alert-warning mb-3", 4, "ngIf"], [1, "mb-4", 3, "ngSubmit"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "mb-1", "fs-18"], [1, "text-muted", "mb-0"], [1, "ins-set-photo-row", "mb-4"], ["class", "ins-set-photo-avatar", "alt", "Photo profil", 3, "src", 4, "ngIf"], ["class", "ins-set-photo-avatar ins-set-photo-avatar--initial", 3, "background", 4, "ngIf"], [1, "ins-set-photo-content"], [1, "mb-1"], [1, "text-muted", "mb-2"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "ins-set-photo-btn", "ins-set-photo-btn--upload"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change", "disabled"], [4, "ngIf"], ["class", "d-flex align-items-center gap-2", 4, "ngIf"], ["type", "button", 1, "ins-set-photo-btn", "ins-set-photo-btn--delete", 3, "click", "disabled"], ["class", "alert alert-success mb-3", 4, "ngIf"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "my-4"], [1, "row"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "fullName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "designation", "placeholder", "Ex: Formateur Angular senior", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], ["type", "email", "name", "email", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", "placeholder", "Ville, pays...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-0"], ["name", "bio", "rows", "4", "placeholder", "Pr\u00E9sentez votre expertise, vos objectifs et votre approche p\u00E9dagogique...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "alert alert-success mb-2", 4, "ngIf"], ["class", "alert alert-danger mb-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-4"], [1, "row", "align-items-end"], [1, "col-md-8"], [1, "mb-3", "mb-md-0"], ["type", "email", "name", "newEmail", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4", "d-grid"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "alert alert-success mt-3 mb-0", 4, "ngIf"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "alert", "alert-warning", "mb-3"], ["alt", "Photo profil", 1, "ins-set-photo-avatar", 3, "src"], [1, "ins-set-photo-avatar", "ins-set-photo-avatar--initial"], [1, "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"], [1, "alert", "alert-success", "mb-3"], [1, "alert", "alert-danger", "mb-3"], [1, "alert", "alert-success", "mb-2"], [1, "alert", "alert-danger", "mb-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-success", "mt-3", "mb-0"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
      template: function InstructorSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InstructorSettingsComponent_div_0_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function InstructorSettingsComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onUpdateProfile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Informations personnelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Mettez a jour vos informations de base.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InstructorSettingsComponent_img_11_Template, 1, 1, "img", 9)(12, InstructorSettingsComponent_div_12_Template, 2, 3, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "h6", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Profile Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "PNG or JPG no bigger than 800px width and height");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "label", 15)(20, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function InstructorSettingsComponent_Template_input_change_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onAvatarSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, InstructorSettingsComponent_span_21_Template, 2, 0, "span", 17)(22, InstructorSettingsComponent_span_22_Template, 3, 0, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InstructorSettingsComponent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.removeAvatar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Delete ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, InstructorSettingsComponent_div_25_Template, 2, 1, "div", 20)(26, InstructorSettingsComponent_div_26_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "hr", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 23)(29, "div", 24)(30, "div", 5)(31, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Nom complet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.profileForm.fullName, $event) || (ctx.profileForm.fullName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 24)(37, "div", 5)(38, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Telephone");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.profileForm.phone, $event) || (ctx.profileForm.phone = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 24)(42, "div", 5)(43, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Titre instructeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.profileForm.designation, $event) || (ctx.profileForm.designation = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 30)(47, "div", 5)(48, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "E-mail actuel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.profileForm.email, $event) || (ctx.profileForm.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 30)(52, "div", 5)(53, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.profileForm.address, $event) || (ctx.profileForm.address = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 30)(57, "div", 33)(58, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Bio instructeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "textarea", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_textarea_ngModelChange_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.profileForm.bio, $event) || (ctx.profileForm.bio = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "hr", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, InstructorSettingsComponent_div_62_Template, 2, 1, "div", 35)(63, InstructorSettingsComponent_div_63_Template, 2, 1, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Enregistrer le profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 38)(67, "div", 4)(68, "div", 5)(69, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Changer l'adresse e-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 39)(74, "div", 40)(75, "div", 41)(76, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Nouvelle adresse e-mail ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorSettingsComponent_Template_input_ngModelChange_80_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.newEmail, $event) || (ctx.newEmail = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 43)(82, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InstructorSettingsComponent_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onChangeEmail());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, InstructorSettingsComponent_span_83_Template, 1, 0, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Mettre a jour l'adresse e-mail ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, InstructorSettingsComponent_div_85_Template, 2, 1, "div", 46)(86, InstructorSettingsComponent_div_86_Template, 2, 1, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.getAvatarUrl());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.getAvatarUrl());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.avatarUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.avatarUploading || !ctx.avatarPath);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.avatarSuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.avatarErrorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.designation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.bio);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Adresse e-mail actuelle : ", ctx.profileForm.email || "\u2014");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.newEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.updatingEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.updatingEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.emailSuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.emailErrorMessage);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".danger-zone-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(220, 53, 69, 0.35);\n  background: linear-gradient(180deg, #fff 0%, #fff7f8 100%);\n}\n\n.ins-set-photo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 4px 0;\n}\n\n.ins-set-photo-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #e5e7eb;\n  border: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n\n.ins-set-photo-avatar--initial[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 30px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.ins-set-photo-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.ins-set-photo-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 34px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.ins-set-photo-btn--upload[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #111827;\n}\n.ins-set-photo-btn--upload[_ngcontent-%COMP%]:hover {\n  background: #d1d5db;\n}\n\n.ins-set-photo-btn--delete[_ngcontent-%COMP%] {\n  background: #ff4667;\n  color: #fff;\n}\n.ins-set-photo-btn--delete[_ngcontent-%COMP%]:hover:enabled {\n  background: #e83b5b;\n}\n.ins-set-photo-btn--delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.ins-set-photo-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n\n@media (max-width: 576px) {\n  .ins-set-photo-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .ins-set-photo-avatar[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9zZXR0aW5ncy9pbnN0cnVjdG9yLXNldHRpbmdzL2luc3RydWN0b3Itc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5Q0FBQTtFQUNBLDBEQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtBQUNEOztBQUVBO0VBQ0Msb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFDRDtBQUNDO0VBQ0MsbUJBQUE7QUFDRjs7QUFHQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQUFEO0FBRUM7RUFDQyxtQkFBQTtBQUFGO0FBR0M7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFLQTtFQUNDLGFBQUE7RUFDQSxvQkFBQTtBQUZEOztBQUtBO0VBQ0M7SUFDQyx1QkFBQTtFQUZBO0VBS0Q7SUFDQyxXQUFBO0lBQ0EsWUFBQTtFQUhBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFuZ2VyLXpvbmUtY2FyZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDUzLCA2OSwgMC4zNSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiAwJSwgI2ZmZjdmOCAxMDAlKTtcclxufVxyXG5cclxuLmlucy1zZXQtcGhvdG8tcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxNnB4O1xyXG5cdHBhZGRpbmc6IDRweCAwO1xyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1hdmF0YXIge1xyXG5cdHdpZHRoOiA1NnB4O1xyXG5cdGhlaWdodDogNTZweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0YmFja2dyb3VuZDogI2U1ZTdlYjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG5cdGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1hdmF0YXItLWluaXRpYWwge1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmlucy1zZXQtcGhvdG8tY29udGVudCB7XHJcblx0bWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW5zLXNldC1waG90by1idG4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAzNHB4O1xyXG5cdHBhZGRpbmc6IDAgMTRweDtcclxuXHRib3JkZXI6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxufVxyXG5cclxuLmlucy1zZXQtcGhvdG8tYnRuLS11cGxvYWQge1xyXG5cdGJhY2tncm91bmQ6ICNlNWU3ZWI7XHJcblx0Y29sb3I6ICMxMTE4Mjc7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogI2QxZDVkYjtcclxuXHR9XHJcbn1cclxuXHJcbi5pbnMtc2V0LXBob3RvLWJ0bi0tZGVsZXRlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmY0NjY3O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cclxuXHQmOmhvdmVyOmVuYWJsZWQge1xyXG5cdFx0YmFja2dyb3VuZDogI2U4M2I1YjtcclxuXHR9XHJcblxyXG5cdCY6ZGlzYWJsZWQge1xyXG5cdFx0b3BhY2l0eTogLjY1O1xyXG5cdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHR9XHJcbn1cclxuXHJcbi5pbnMtc2V0LXBob3RvLWJ0bi5kaXNhYmxlZCB7XHJcblx0b3BhY2l0eTogLjc1O1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHQuaW5zLXNldC1waG90by1yb3cge1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cclxuXHQuaW5zLXNldC1waG90by1hdmF0YXIge1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return InstructorSettingsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=5708.js.map