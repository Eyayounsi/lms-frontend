"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9046],{

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

/***/ 99046:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/student/settings/student-linked-accounts/student-linked-accounts.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentLinkedAccountsComponent: () => (/* binding */ StudentLinkedAccountsComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);



let StudentLinkedAccountsComponent = /*#__PURE__*/(() => {
  class StudentLinkedAccountsComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function StudentLinkedAccountsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentLinkedAccountsComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: StudentLinkedAccountsComponent,
      selectors: [["app-student-linked-accounts"]],
      decls: 48,
      vars: 0,
      consts: [[1, "card", "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "d-flex", "align-items-center", "border-bottom", "mb-4", "pb-4"], [1, "flex-shrink-0", "me-3"], ["src", "assets/img/icon/fb-icon.svg", "alt", "Img"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "w-100"], [1, "mb-2", "mb-sm-0"], [1, "mb-1"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "flex-shrink-0"], ["src", "assets/img/icon/google-icon.svg", "alt", "Img"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "flex-shrink-0"], ["src", "assets/img/icon/github-icon.svg", "alt", "Img"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icon/twitter-x-icon.svg", "alt", "Img"]],
      template: function StudentLinkedAccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](7, "div", 7)(8, "div", 8)(9, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](11, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Facebook is a social platform for connecting, sharing, and building communities globally.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](13, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](15, "div", 4)(16, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](17, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](18, "div", 7)(19, "div", 8)(20, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](22, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Google is widely used for search, maps, email, and other services.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](24, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Link Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](26, "div", 4)(27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](28, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](29, "div", 7)(30, "div", 8)(31, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Github");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](33, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "GitHub is a version control and collaboration platform for hosting, managing, and sharing code.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](35, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Link Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](37, "div", 15)(38, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](39, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](40, "div", 7)(41, "div", 8)(42, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](44, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Twitter is a platform for sharing news, updates, and global conversations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](46, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Link Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentLinkedAccountsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=9046.js.map