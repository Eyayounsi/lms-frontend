"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9753],{

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

/***/ 99753:
/*!**********************************************************************!*\
  !*** ./src/app/features/blog/blog-masonry/blog-masonry.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogMasonryComponent: () => (/* binding */ BlogMasonryComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let BlogMasonryComponent = /*#__PURE__*/(() => {
  class BlogMasonryComponent {
    blogMasonry = [];
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function BlogMasonryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogMasonryComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BlogMasonryComponent,
      selectors: [["app-blog-masonry"]],
      decls: 240,
      vars: 36,
      consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "blog"], [1, "blog-image"], [3, "routerLink"], ["src", "./assets/img/blog/blog-7.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-item"], [1, "badge", "bg-success", "mb-2"], [1, "mb-2"], [1, "text-truncate", "line-clamb-2"], [1, "blog-info"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-between"], [1, "d-flex", "align-items-center", "user-profile"], [1, "user-img", 3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "user-name", 3, "routerLink"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/blog/blog-11.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-06.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-26.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-08.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-27.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-01.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-10.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-02.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-14.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-03.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/user/user-09.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-28.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/blog/blog-12.jpg", "alt", "img", 1, "img-fluid"], [1, "row", "align-items-center", "mt-2"], [1, "col-md-12"], [1, "pagination", "justify-content-center"], [1, "page-item", "prev"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"]],
      template: function BlogMasonryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h5", 10)(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Learn Web App Development from Experts in 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Master the art of web application development with expert-led courses that cover the latest tools, fram...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "John Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ul", 18)(24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "23 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 4)(29, "div", 5)(30, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8)(33, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h5", 10)(36, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Programming Content Guideline For Beginners");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Kickstart your programming journey with beginner-friendly guidelines designed to simplify coding ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 12)(41, "div", 13)(42, "div", 14)(43, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Lewis Devine");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "ul", 18)(48, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "10 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 4)(53, "div", 5)(54, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 8)(57, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h5", 10)(60, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Revolutionize Learning with a Modern LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "An LMS streamlines training and development with centralized resources, progress tracking, and flexible..");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 12)(65, "div", 13)(66, "div", 14)(67, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Francis Bishop");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "ul", 18)(72, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "20 Feb 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 3)(77, "div", 4)(78, "div", 5)(79, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 8)(82, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h5", 10)(85, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 12)(90, "div", 13)(91, "div", 14)(92, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Cedric Glenn");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "ul", 18)(97, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 4)(102, "div", 5)(103, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 8)(106, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Technical");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "h5", 10)(109, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Learn Mobile Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Elevate your skills with expert-led training in mobile application development! Learn to design, develop ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 12)(114, "div", 13)(115, "div", 14)(116, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "John Reyes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "ul", 18)(121, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "04 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 4)(126, "div", 5)(127, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 8)(130, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "h5", 10)(133, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 12)(138, "div", 13)(139, "div", 14)(140, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "ul", 18)(145, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 3)(150, "div", 4)(151, "div", 5)(152, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 8)(155, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "h5", 10)(158, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 12)(163, "div", 13)(164, "div", 14)(165, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "ul", 18)(170, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 4)(175, "div", 5)(176, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 8)(179, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "h5", 10)(182, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 12)(187, "div", 13)(188, "div", 14)(189, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "ul", 18)(194, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 4)(199, "div", 5)(200, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 8)(203, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "h5", 10)(206, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 12)(211, "div", 13)(212, "div", 14)(213, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "ul", 18)(218, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](219, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 33)(223, "div", 34)(224, "ul", 35)(225, "li", 36)(226, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "li", 39)(229, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "li", 41)(232, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "li", 41)(235, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "li", 42)(238, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BlogMasonryComponent;
})();

/***/ })

}]);
//# sourceMappingURL=9753.js.map