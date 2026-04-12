"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8370],{

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

/***/ 98370:
/*!********************************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorDashboardComponent: () => (/* binding */ InstructorDashboardComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 54285);















const _c0 = ["chart"];
const _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
const _c2 = () => [1, 2, 3, 4, 5];
function InstructorDashboardComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 10);
  }
}
function InstructorDashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, InstructorDashboardComponent_div_0_div_3_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 6)(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c1));
  }
}
function InstructorDashboardComponent_ng_container_1_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 133);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.userAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function InstructorDashboardComponent_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.userName.charAt(0).toUpperCase());
  }
}
function InstructorDashboardComponent_ng_container_1_i_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 78);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", s_r3 <= ctx_r1.avgRating ? "#f59e0b" : "var(--bs-border-color,#e5e7eb)");
  }
}
function InstructorDashboardComponent_ng_container_1_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "apx-chart", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("series", ctx_r1.enrollmentChart.series)("chart", ctx_r1.enrollmentChart.chart)("plotOptions", ctx_r1.enrollmentChart.plotOptions)("xaxis", ctx_r1.enrollmentChart.xaxis)("yaxis", ctx_r1.enrollmentChart.yaxis)("colors", ctx_r1.enrollmentChart.colors)("fill", ctx_r1.enrollmentChart.fill)("dataLabels", ctx_r1.enrollmentChart.dataLabels)("grid", ctx_r1.enrollmentChart.grid)("legend", ctx_r1.enrollmentChart.legend)("tooltip", ctx_r1.enrollmentChart.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_div_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "apx-chart", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("series", ctx_r1.completionDonut.series)("chart", ctx_r1.completionDonut.chart)("labels", ctx_r1.completionDonut.labels)("colors", ctx_r1.completionDonut.colors)("legend", ctx_r1.completionDonut.legend)("dataLabels", ctx_r1.completionDonut.dataLabels)("plotOptions", ctx_r1.completionDonut.plotOptions)("responsive", ctx_r1.completionDonut.responsive)("tooltip", ctx_r1.completionDonut.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_div_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Aucun \u00E9tudiant inscrit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function InstructorDashboardComponent_ng_container_1_div_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "apx-chart", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("series", ctx_r1.revenueChart.series)("chart", ctx_r1.revenueChart.chart)("stroke", ctx_r1.revenueChart.stroke)("xaxis", ctx_r1.revenueChart.xaxis)("yaxis", ctx_r1.revenueChart.yaxis)("colors", ctx_r1.revenueChart.colors)("fill", ctx_r1.revenueChart.fill)("dataLabels", ctx_r1.revenueChart.dataLabels)("grid", ctx_r1.revenueChart.grid)("tooltip", ctx_r1.revenueChart.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_div_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "apx-chart", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("series", ctx_r1.statusChart.series)("chart", ctx_r1.statusChart.chart)("plotOptions", ctx_r1.statusChart.plotOptions)("xaxis", ctx_r1.statusChart.xaxis)("colors", ctx_r1.statusChart.colors)("dataLabels", ctx_r1.statusChart.dataLabels)("grid", ctx_r1.statusChart.grid)("tooltip", ctx_r1.statusChart.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_div_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Aucun cours cr\u00E9\u00E9 pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function InstructorDashboardComponent_ng_container_1_div_205_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function InstructorDashboardComponent_ng_container_1_div_205_div_1_img_2_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const c_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onCourseImageError(c_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.getCourseImage(c_r5), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", c_r5.title);
  }
}
function InstructorDashboardComponent_ng_container_1_div_205_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r1.getPlaceholderGradient(c_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](c_r5.title || "Cours");
  }
}
function InstructorDashboardComponent_ng_container_1_div_205_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 144)(1, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, InstructorDashboardComponent_ng_container_1_div_205_div_1_img_2_Template, 1, 2, "img", 146)(3, InstructorDashboardComponent_ng_container_1_div_205_div_1_div_3_Template, 4, 3, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 148)(5, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " \u00C9diter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 152)(11, "h6", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 154)(14, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("animation-delay", i_r6 * 0.05 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("has-image", ctx_r1.hasValidImage(c_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.hasValidImage(c_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hasValidImage(c_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r1.routes.instructorCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("status-" + (c_r5.courseStatus || c_r5.status || "DRAFT").toLowerCase().replace("_", "-"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getCourseStatusLabel(c_r5), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", c_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](c_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r5.enrollmentCount || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r5.averageRating ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](20, 14, c_r5.averageRating, "1.1-1") : "\u2014", " ");
  }
}
function InstructorDashboardComponent_ng_container_1_div_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, InstructorDashboardComponent_ng_container_1_div_205_div_1_Template, 21, 17, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](2, 1, ctx_r1.courses, 0, 8));
  }
}
function InstructorDashboardComponent_ng_container_1_option_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", c_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](c_r7.title);
  }
}
function InstructorDashboardComponent_ng_container_1_div_224_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Aucun \u00E9tudiant inscrit pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 163)(2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Aucun r\u00E9sultat pour cette recherche.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_16_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function InstructorDashboardComponent_ng_container_1_div_225_tr_16_img_4_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onStudentAvatarError(s_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.getStudentAvatarUrl(s_r9), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", s_r9.studentName || "\u00C9tudiant");
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getStudentInitial(s_r9));
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Compl\u00E9t\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "En cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Non commenc\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 165)(1, "td")(2, "div", 166)(3, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, InstructorDashboardComponent_ng_container_1_div_225_tr_16_img_4_Template, 1, 2, "img", 168)(5, InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_5_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div")(7, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td")(12, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td")(15, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td")(20, "div", 174)(21, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_26_Template, 3, 0, "span", 178)(27, InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_27_Template, 3, 0, "span", 179)(28, InstructorDashboardComponent_ng_container_1_div_225_tr_16_span_28_Template, 2, 0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r1.getStudentAvatarGradient(s_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.hasStudentAvatar(s_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.hasStudentAvatar(s_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](s_r9.studentName || "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](s_r9.studentEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](s_r9.courseName || s_r9.courseTitle || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 15, s_r9.enrolledAt, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", s_r9.completionPercentage || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r1.getProgressClass(s_r9.completionPercentage));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", s_r9.completionPercentage || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", s_r9.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !s_r9.completed && (s_r9.completionPercentage || 0) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !s_r9.completed && !(s_r9.completionPercentage || 0));
  }
}
function InstructorDashboardComponent_ng_container_1_div_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 160)(1, "table", 161)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Inscrit le");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, InstructorDashboardComponent_ng_container_1_div_225_tr_15_Template, 6, 0, "tr", 1)(16, InstructorDashboardComponent_ng_container_1_div_225_tr_16_Template, 29, 18, "tr", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.filteredStudents.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.filteredStudents);
  }
}
function InstructorDashboardComponent_ng_container_1_Conditional_226_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.switchToStudentError, " ");
  }
}
function InstructorDashboardComponent_ng_container_1_Conditional_226_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstructorDashboardComponent_ng_container_1_Conditional_226_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "En cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstructorDashboardComponent_ng_container_1_Conditional_226_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 187)(1, "div", 188)(2, "div", 189)(3, "div", 190)(4, "div", 114)(5, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div")(8, "h6", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Acc\u00E9der au tableau de bord \u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "small", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Confirmez votre identit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstructorDashboardComponent_ng_container_1_Conditional_226_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r1.showSwitchToStudentModal = false;
      ctx_r1.switchToStudentPassword = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.switchToStudentError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 196)(14, "p", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Pour acc\u00E9der au r\u00F4le ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "strong", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, ", veuillez entrer votre mot de passe pour plus de s\u00E9curit\u00E9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Mot de passe actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 200)(22, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function InstructorDashboardComponent_ng_container_1_Conditional_226_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.switchToStudentPassword, $event) || (ctx_r1.switchToStudentPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup.enter", function InstructorDashboardComponent_ng_container_1_Conditional_226_Template_input_keyup_enter_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.confirmSwitchToStudent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](25, InstructorDashboardComponent_ng_container_1_Conditional_226_Conditional_25_Template, 3, 1, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 205)(27, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstructorDashboardComponent_ng_container_1_Conditional_226_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r1.showSwitchToStudentModal = false;
      ctx_r1.switchToStudentPassword = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.switchToStudentError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstructorDashboardComponent_ng_container_1_Conditional_226_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.confirmSwitchToStudent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, InstructorDashboardComponent_ng_container_1_Conditional_226_span_30_Template, 3, 0, "span", 1)(31, InstructorDashboardComponent_ng_container_1_Conditional_226_span_31_Template, 3, 0, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "div", 209);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.switchToStudentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.switchToStudentError ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.switchingToStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.switchingToStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.switchingToStudent);
  }
}
function InstructorDashboardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 13)(4, "div", 14)(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 16)(7, "div", 17)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, InstructorDashboardComponent_ng_container_1_img_9_Template, 1, 1, "img", 19)(10, InstructorDashboardComponent_ng_container_1_span_10_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 21)(13, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Bienvenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 26)(21, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Cr\u00E9er un cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstructorDashboardComponent_ng_container_1_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.switchToStudent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Tableau \u00E9tudiant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 31)(28, "div", 32)(29, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 35)(32, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Total cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "div", 39)(38, "div", 40)(39, "div", 41)(40, "div", 42)(41, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 44)(43, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 35)(46, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Publi\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "div", 47)(52, "div", 48)(53, "div", 49)(54, "div", 50)(55, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 52)(57, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 35)(60, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "\u00C9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "div", 55)(66, "div", 56)(67, "div", 57)(68, "div", 58)(69, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 60)(71, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](72, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 35)(74, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Ce mois-ci");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "div", 63)(81, "div", 64)(82, "div", 65)(83, "div", 66)(84, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 68)(86, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](87, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 35)(89, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](91, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "Revenu total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "div", 71)(96, "div", 72)(97, "div", 73)(98, "div", 74)(99, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 76)(101, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 35)(104, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "Note moyenne");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](111, InstructorDashboardComponent_ng_container_1_i_111_Template, 1, 2, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 81)(113, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](114, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div", 35)(116, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "Compl\u00E9tion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](121, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div", 86)(123, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](124, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "div", 35)(126, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](131, "div", 89)(132, "div", 90)(133, "div", 91)(134, "div", 92)(135, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "div", 94)(137, "div", 95)(138, "div", 96)(139, "div", 97)(140, "div", 98)(141, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](142, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "div")(144, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "Inscriptions par cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "Top 8 cours les plus populaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](148, InstructorDashboardComponent_ng_container_1_div_148_Template, 2, 11, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "div", 102)(150, "div", 96)(151, "div", 97)(152, "div", 98)(153, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](154, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "div")(156, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157, "Progression");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "Statut des \u00E9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](160, InstructorDashboardComponent_ng_container_1_div_160_Template, 2, 9, "div", 101)(161, InstructorDashboardComponent_ng_container_1_div_161_Template, 4, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "div", 94)(163, "div", 95)(164, "div", 96)(165, "div", 97)(166, "div", 98)(167, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](168, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "div")(170, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "\u00C9volution des revenus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "6 derniers mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](175, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](176);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](177, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](178, InstructorDashboardComponent_ng_container_1_div_178_Template, 2, 10, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "div", 102)(180, "div", 96)(181, "div", 97)(182, "div", 98)(183, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](184, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "div")(186, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, "Statut des cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](189, "R\u00E9partition par statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](190, InstructorDashboardComponent_ng_container_1_div_190_Template, 2, 8, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "div", 112)(192, "div", 113)(193, "div", 114)(194, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](195, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "div")(197, "h5", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "Mes cours r\u00E9cents");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, " Voir tout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](203, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](204, InstructorDashboardComponent_ng_container_1_div_204_Template, 4, 0, "div", 120)(205, InstructorDashboardComponent_ng_container_1_div_205_Template, 3, 5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](206, "div", 122)(207, "div", 97)(208, "div", 98)(209, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](210, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "div")(212, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](213, "Mes \u00E9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "div", 125)(217, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](218, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function InstructorDashboardComponent_ng_container_1_Template_input_ngModelChange_219_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.searchStudent, $event) || (ctx_r1.searchStudent = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function InstructorDashboardComponent_ng_container_1_Template_select_ngModelChange_220_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.filterCourse, $event) || (ctx_r1.filterCourse = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "Tous les cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](223, InstructorDashboardComponent_ng_container_1_option_223_Template, 2, 2, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](224, InstructorDashboardComponent_ng_container_1_div_224_Template, 4, 0, "div", 120)(225, InstructorDashboardComponent_ng_container_1_div_225_Template, 17, 2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](226, InstructorDashboardComponent_ng_container_1_Conditional_226_Template, 33, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.userAvatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.userAvatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", ctx_r1.userRole || "Instructeur", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r1.routes.instructorAddCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.displayTotalCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.displayPublishedCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.displayTotalStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](76, 37, ctx_r1.displayCurrentMonthRevenue, "1.0-0"), "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](91, 40, ctx_r1.displayTotalRevenue, "1.0-0"), "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.displayAvgRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](46, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.displayCompletionRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", ctx_r1.completionRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ins-kpi-alert", ctx_r1.pendingCourses > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.displayPendingCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.enrollmentChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.completionDonut && ctx_r1.students.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.students.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total : ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](177, 43, ctx_r1.totalRevenue, "1.0-0"), "\u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.revenueChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.statusChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r1.courses.length, " cours au total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx_r1.routes.instructorCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.courses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.courses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.filteredStudents.length, " / ", ctx_r1.students.length, " affich\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filterCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.students.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.students.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.showSwitchToStudentModal ? 226 : -1);
  }
}
let InstructorDashboardComponent = /*#__PURE__*/(() => {
  class InstructorDashboardComponent {
    courseService;
    authService;
    router;
    toastr;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    chart;
    failedImageKeys = new Set();
    failedStudentAvatarKeys = new Set();
    backendBaseUrl = (_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl || '').replace(/\/api\/?$/, '');
    // ── User info ──
    userName = '';
    userRole = '';
    userAvatarUrl = '';
    // ── Stats cards ──
    totalCourses = 0;
    publishedCourses = 0;
    pendingCourses = 0;
    totalStudents = 0;
    totalRevenue = 0;
    currentMonthRevenue = 0;
    avgRating = 0;
    completionRate = 0;
    // ── Animated display values (counter effect) ──
    displayTotalCourses = 0;
    displayPublishedCourses = 0;
    displayPendingCourses = 0;
    displayTotalStudents = 0;
    displayTotalRevenue = 0;
    displayCurrentMonthRevenue = 0;
    displayAvgRating = 0;
    displayCompletionRate = 0;
    // ── Raw data ──
    courses = [];
    students = [];
    revenueData = null;
    loading = true;
    // ── Student table filter ──
    searchStudent = '';
    filterCourse = 0;
    // ✅ Modal de vérification password pour switch vers student
    showSwitchToStudentModal = false;
    switchToStudentPassword = '';
    switchToStudentError = '';
    switchingToStudent = false;
    get filteredStudents() {
      return this.students.filter(s => {
        const matchSearch = !this.searchStudent || (s.studentName || '').toLowerCase().includes(this.searchStudent.toLowerCase()) || (s.studentEmail || '').toLowerCase().includes(this.searchStudent.toLowerCase());
        const matchCourse = !this.filterCourse || s.courseId === this.filterCourse;
        return matchSearch && matchCourse;
      });
    }
    // ── Charts ──
    enrollmentChart;
    revenueChart;
    completionDonut;
    statusChart;
    constructor(courseService, authService, router, toastr) {
      this.courseService = courseService;
      this.authService = authService;
      this.router = router;
      this.toastr = toastr;
    }
    ngOnInit() {
      this.authService.ensureProfileIdentityLoaded();
      this.userName = localStorage.getItem('fullName') || 'Instructor';
      this.userRole = localStorage.getItem('role') || '';
      this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
      this.authService.currentFullName$.subscribe(name => {
        if (name) this.userName = name;
      });
      this.authService.currentAvatarPath$.subscribe(path => {
        this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
        courses: this.courseService.getMyCourses(),
        students: this.courseService.getInstructorStudents(),
        revenue: this.courseService.getInstructorRevenue()
      }).subscribe({
        next: ({
          courses,
          students,
          revenue
        }) => {
          this.courses = courses || [];
          this.students = students || [];
          this.revenueData = revenue;
          this.computeStats();
          this.buildCharts();
          this.loading = false;
          this.animateCounters();
        },
        error: () => {
          this.courseService.getMyCourses().subscribe({
            next: courses => {
              this.courses = courses || [];
              this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
              this.computeStats();
              this.buildCharts();
              this.loading = false;
              this.animateCounters();
            },
            error: () => {
              this.loading = false;
            }
          });
        }
      });
    }
    computeStats() {
      this.totalCourses = this.courses.length;
      this.publishedCourses = this.courses.filter(c => this.normalizeCourseStatus(c) === 'PUBLISHED').length;
      this.pendingCourses = this.courses.filter(c => this.normalizeCourseStatus(c) === 'PENDING_REVIEW').length;
      if (this.revenueData) {
        this.totalStudents = this.revenueData.totalStudents || 0;
        this.totalRevenue = parseFloat(this.revenueData.totalRevenue) || 0;
        this.currentMonthRevenue = parseFloat(this.revenueData.currentMonthRevenue) || 0;
      } else {
        this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
      }
      if (this.students.length > 0) {
        const completed = this.students.filter(s => s.completed).length;
        this.completionRate = Math.round(completed / this.students.length * 100);
      }
      const rated = this.courses.filter(c => c.averageRating && c.averageRating > 0);
      if (rated.length > 0) {
        this.avgRating = Math.round(rated.reduce((s, c) => s + c.averageRating, 0) / rated.length * 10) / 10;
      }
    }
    buildCharts() {
      // Enrollment bar chart (top 8 courses by students)
      const top = [...this.courses].sort((a, b) => (b.enrollmentCount || 0) - (a.enrollmentCount || 0)).slice(0, 8);
      this.enrollmentChart = {
        chart: {
          type: 'bar',
          height: 300,
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            speed: 900,
            easing: 'easeinout'
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            borderRadiusApplication: 'end',
            horizontal: false,
            columnWidth: '54%',
            distributed: true
          }
        },
        series: [{
          name: 'Étudiants',
          data: top.map(c => c.enrollmentCount || 0)
        }],
        xaxis: {
          categories: top.map(c => (c.title?.length > 15 ? c.title.substring(0, 13) + '…' : c.title) || 'Cours'),
          labels: {
            style: {
              fontSize: '11px',
              fontWeight: 600,
              colors: '#6b7280'
            }
          }
        },
        yaxis: {
          labels: {
            offsetX: -10,
            style: {
              colors: '#6b7280'
            }
          }
        },
        colors: ['#14b8a6', '#f59e0b', '#8b5cf6', '#ec4899', '#0ea5e9', '#22c55e', '#f97316', '#6366f1'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            opacityFrom: 0.98,
            opacityTo: 0.72,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: '#e5e7eb',
          strokeDashArray: 3
        },
        legend: {
          show: false
        },
        tooltip: {
          y: {
            formatter: v => v + ' étudiants'
          }
        }
      };
      // Monthly revenue area chart
      const monthly = this.revenueData?.monthly || [];
      const lastMonths = this.generateLastMonths(6);
      const revenueMap = new Map(monthly.map(m => [m.month, parseFloat(m.revenue) || 0]));
      this.revenueChart = {
        chart: {
          type: 'area',
          height: 280,
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            speed: 900,
            easing: 'easeinout'
          },
          dropShadow: {
            enabled: true,
            top: 8,
            left: 0,
            blur: 10,
            color: '#0ea5e9',
            opacity: 0.18
          }
        },
        series: [{
          name: 'Revenus (€)',
          data: lastMonths.map(m => revenueMap.get(m) || 0)
        }],
        stroke: {
          curve: 'smooth',
          width: 4
        },
        markers: {
          size: 4,
          strokeWidth: 2,
          hover: {
            size: 6
          }
        },
        xaxis: {
          categories: lastMonths.map(m => this.formatMonth(m)),
          labels: {
            style: {
              fontSize: '11px',
              colors: '#6b7280',
              fontWeight: 600
            }
          }
        },
        yaxis: {
          labels: {
            formatter: v => '€' + v.toFixed(0),
            style: {
              colors: '#6b7280'
            }
          }
        },
        colors: ['#0ea5e9'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            gradientToColors: ['#14b8a6'],
            opacityFrom: 0.55,
            opacityTo: 0.06,
            stops: [0, 90, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: '#e5e7eb',
          strokeDashArray: 3
        },
        tooltip: {
          y: {
            formatter: v => '€' + v.toFixed(2)
          }
        }
      };
      // Completion donut
      const completedCount = this.students.filter(s => s.completed).length;
      const inProgressCount = this.students.filter(s => !s.completed && (s.completionPercentage || 0) > 0).length;
      const notStartedCount = this.students.filter(s => !s.completed && !(s.completionPercentage || 0)).length;
      this.completionDonut = {
        chart: {
          type: 'donut',
          height: 260,
          animations: {
            enabled: true,
            speed: 850,
            easing: 'easeinout'
          }
        },
        series: [completedCount || 0, inProgressCount || 0, notStartedCount || 0],
        labels: ['Complété', 'En cours', 'Non commencé'],
        colors: ['#14b8a6', '#f59e0b', '#a78bfa'],
        legend: {
          position: 'bottom',
          fontSize: '13px',
          markers: {
            width: 10,
            height: 10,
            radius: 12
          }
        },
        dataLabels: {
          enabled: true,
          formatter: v => `${Math.round(v)}%`
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              height: 220
            }
          }
        }],
        plotOptions: {
          pie: {
            donut: {
              size: '62%',
              labels: {
                show: true,
                total: {
                  show: true,
                  label: 'Étudiants',
                  formatter: () => `${this.students.length}`
                }
              }
            }
          }
        },
        tooltip: {
          y: {
            formatter: v => v + ' étudiants'
          }
        }
      };
      // Course status histogram (vertical bars)
      const statusCounts = [this.courses.filter(c => this.normalizeCourseStatus(c) === 'PUBLISHED').length, this.courses.filter(c => this.normalizeCourseStatus(c) === 'PENDING_REVIEW').length, this.courses.filter(c => this.normalizeCourseStatus(c) === 'DRAFT').length, this.courses.filter(c => this.normalizeCourseStatus(c) === 'ARCHIVED').length];
      const statusLabels = ['Publié', 'En attente', 'Brouillon', 'Archivé'];
      const statusColors = ['#10b981', '#f59e0b', '#9ca3af', '#ef4444'];
      this.statusChart = {
        chart: {
          type: 'bar',
          height: 280,
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            speed: 800,
            easing: 'easeinout'
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            horizontal: false,
            columnWidth: '58%',
            distributed: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        series: [{
          name: 'Cours',
          data: statusCounts
        }],
        xaxis: {
          categories: statusLabels,
          labels: {
            style: {
              fontSize: '12px',
              fontWeight: 700,
              colors: '#6b7280'
            }
          }
        },
        yaxis: {
          min: 0,
          forceNiceScale: true,
          tickAmount: 4,
          labels: {
            formatter: v => `${Math.max(0, Math.round(v))}`,
            style: {
              colors: '#6b7280'
            }
          }
        },
        colors: statusColors,
        dataLabels: {
          enabled: true,
          formatter: v => `${Math.round(v)}`,
          style: {
            fontSize: '12px',
            fontWeight: 700
          },
          offsetY: -8
        },
        grid: {
          borderColor: '#e5e7eb',
          strokeDashArray: 3,
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          y: {
            formatter: v => v + ' cours'
          }
        }
      };
    }
    normalizeCourseStatus(course) {
      const raw = (course?.courseStatus || course?.status || '').toString().trim().toUpperCase();
      if (raw === 'PENDING') return 'PENDING_REVIEW';
      if (raw === 'PENDING_REVIEW') return 'PENDING_REVIEW';
      if (raw === 'PUBLISHED') return 'PUBLISHED';
      if (raw === 'ARCHIVED') return 'ARCHIVED';
      return 'DRAFT';
    }
    generateLastMonths(n) {
      const months = [];
      const now = new Date();
      for (let i = n - 1; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        months.push(`${y}-${m}`);
      }
      return months;
    }
    formatMonth(m) {
      const [, mo] = m.split('-');
      const names = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
      return names[parseInt(mo) - 1];
    }
    getProgressClass(pct) {
      if (!pct) return 'bg-secondary';
      if (pct >= 100) return 'bg-success';
      if (pct >= 50) return 'bg-primary';
      return 'bg-warning';
    }
    getStatusBadge(status) {
      const map = {
        PUBLISHED: 'bg-success-transparent text-success',
        PENDING_REVIEW: 'bg-warning-transparent text-warning',
        DRAFT: 'bg-secondary-transparent text-secondary',
        ARCHIVED: 'bg-danger-transparent text-danger'
      };
      return map[status] || 'bg-light text-dark';
    }
    getStatusLabel(status) {
      const map = {
        PUBLISHED: 'Publié',
        PENDING_REVIEW: 'En attente',
        DRAFT: 'Brouillon',
        ARCHIVED: 'Archivé'
      };
      return map[status] || status;
    }
    getCourseStatusLabel(course) {
      return this.getStatusLabel(this.normalizeCourseStatus(course));
    }
    getCourseImage(course) {
      const candidates = [course?.coverImage, course?.thumbnailUrl, course?.coverImageUrl, course?.thumbnail, course?.imageUrl, course?.image, course?.courseImageUrl, course?.courseImage];
      const found = candidates.find(v => typeof v === 'string' && v.trim().length > 0);
      if (!found) return '';
      const normalized = found.trim().replace(/\\/g, '/');
      if (normalized.startsWith('http://') || normalized.startsWith('https://')) return normalized;
      if (normalized.startsWith('preset:')) {
        const presetName = this.normalizeLegacyPresetFileName(normalized.replace('preset:', '').trim());
        return this.resolveAssetPresetImage(presetName);
      }
      if (normalized.startsWith('assets/')) return normalized;
      // Some records store only preset-like file names (e.g. "course-img3.jpg").
      if (!normalized.includes('/')) {
        const fileName = this.normalizeLegacyPresetFileName(normalized);
        if (/^(course-img|courses-)/i.test(fileName)) {
          return this.resolveAssetPresetImage(fileName);
        }
      }
      if (normalized.startsWith('/')) {
        return `${this.backendBaseUrl}${normalized}`;
      }
      return `${this.backendBaseUrl}/${normalized}`;
    }
    normalizeLegacyPresetFileName(name) {
      const trimmed = (name || '').trim();
      const m = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
      if (!m) return trimmed;
      return `course-img${m[1]}.${m[2]}`;
    }
    resolveAssetPresetImage(fileName) {
      if (/^course-img/i.test(fileName) || /^courses-/i.test(fileName)) {
        return `assets/img/course-img/${fileName}`;
      }
      return `assets/img/course/${fileName}`;
    }
    hasValidImage(course) {
      const key = this.getCourseKey(course);
      return !!this.getCourseImage(course) && !this.failedImageKeys.has(key);
    }
    onCourseImageError(course) {
      this.failedImageKeys.add(this.getCourseKey(course));
    }
    getPlaceholderGradient(course) {
      const gradients = ['linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)', 'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)', 'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)', 'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'];
      const key = this.getCourseKey(course);
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
      }
      return gradients[Math.abs(hash) % gradients.length];
    }
    getCourseKey(course) {
      return String(course?.id || course?.slug || course?.title || Math.random());
    }
    getStudentAvatarUrl(student) {
      const raw = student?.studentAvatar || student?.avatarPath || student?.avatar || '';
      if (!raw || typeof raw !== 'string') return '';
      const resolved = this.authService.resolveAvatarUrl(raw);
      return resolved || '';
    }
    hasStudentAvatar(student) {
      const key = this.getStudentKey(student);
      return !!this.getStudentAvatarUrl(student) && !this.failedStudentAvatarKeys.has(key);
    }
    onStudentAvatarError(student) {
      this.failedStudentAvatarKeys.add(this.getStudentKey(student));
    }
    getStudentInitial(student) {
      return (student?.studentName || 'E').trim().charAt(0).toUpperCase() || 'E';
    }
    getStudentAvatarGradient(student) {
      const gradients = ['linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)', 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)', 'linear-gradient(135deg, #f97316 0%, #eab308 100%)'];
      const key = this.getStudentKey(student);
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
      }
      return gradients[Math.abs(hash) % gradients.length];
    }
    getStudentKey(student) {
      return String(student?.studentId || student?.id || student?.studentEmail || student?.studentName || Math.random());
    }
    animateCounters() {
      const duration = 1300;
      const steps = 60;
      const interval = duration / steps;
      const targets = [{
        key: 'displayTotalCourses',
        target: this.totalCourses
      }, {
        key: 'displayPublishedCourses',
        target: this.publishedCourses
      }, {
        key: 'displayPendingCourses',
        target: this.pendingCourses
      }, {
        key: 'displayTotalStudents',
        target: this.totalStudents
      }, {
        key: 'displayTotalRevenue',
        target: this.totalRevenue
      }, {
        key: 'displayCurrentMonthRevenue',
        target: this.currentMonthRevenue
      }, {
        key: 'displayAvgRating',
        target: this.avgRating
      }, {
        key: 'displayCompletionRate',
        target: this.completionRate
      }];
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        targets.forEach(t => {
          this[t.key] = parseFloat((t.target * ease).toFixed(1));
        });
        if (step >= steps) {
          clearInterval(timer);
          this.displayTotalCourses = this.totalCourses;
          this.displayPublishedCourses = this.publishedCourses;
          this.displayPendingCourses = this.pendingCourses;
          this.displayTotalStudents = this.totalStudents;
          this.displayTotalRevenue = this.totalRevenue;
          this.displayCurrentMonthRevenue = this.currentMonthRevenue;
          this.displayAvgRating = this.avgRating;
          this.displayCompletionRate = this.completionRate;
        }
      }, interval);
    }
    /** Afficher la modal pour saisir le mot de passe avant de basculer vers étudiant */
    switchToStudent() {
      this.switchToStudentPassword = '';
      this.switchToStudentError = '';
      this.showSwitchToStudentModal = true;
    }
    /** Confirmer et basculer vers le rôle étudiant après vérification du password */
    confirmSwitchToStudent() {
      if (!this.switchToStudentPassword.trim()) {
        this.switchToStudentError = 'Mot de passe requis';
        return;
      }
      this.switchingToStudent = true;
      this.switchToStudentError = '';
      this.authService.switchRole('STUDENT', this.switchToStudentPassword).subscribe({
        next: resp => {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('role', resp.role);
          if (resp.secondaryRoles) {
            localStorage.setItem('secondaryRoles', JSON.stringify(resp.secondaryRoles));
          }
          this.authService.setCurrentRole(resp.role);
          this.authService.scheduleAutoLogout();
          // Fermer la modal
          this.showSwitchToStudentModal = false;
          this.switchToStudentPassword = '';
          this.switchingToStudent = false;
          this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes.students_Dashboard]);
        },
        error: err => {
          this.switchingToStudent = false;
          this.switchToStudentError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
        }
      });
    }
    static ɵfac = function InstructorDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: InstructorDashboardComponent,
      selectors: [["app-instructor-dashboard"]],
      viewQuery: function InstructorDashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 2,
      vars: 2,
      consts: [["class", "ins-dash-skeleton-wrapper", 4, "ngIf"], [4, "ngIf"], [1, "ins-dash-skeleton-wrapper"], [1, "ins-dash-skeleton-hero", "shimmer"], [1, "ins-dash-kpi-grid", "mt-4"], ["class", "ins-dash-skeleton-card shimmer", 4, "ngFor", "ngForOf"], [1, "row", "g-4", "mt-2"], [1, "col-lg-8"], [1, "ins-dash-skeleton-chart", "shimmer"], [1, "col-lg-4"], [1, "ins-dash-skeleton-card", "shimmer"], [1, "ins-dash-hero", "mb-4"], [1, "ins-dash-hero-orbs"], [1, "ins-orb", "ins-orb-1"], [1, "ins-orb", "ins-orb-2"], [1, "ins-orb", "ins-orb-3"], [1, "ins-dash-hero-inner"], [1, "d-flex", "align-items-center", "gap-4"], [1, "ins-dash-hero-avatar"], ["alt", "Avatar", "class", "ins-dash-hero-avatar-img", 3, "src", 4, "ngIf"], [1, "ins-dash-avatar-ring"], [1, "ins-dash-hero-text"], [1, "ins-dash-hero-greeting"], [1, "ins-dash-hero-name"], [1, "ins-dash-hero-badge"], [1, "ti", "ti-award"], [1, "ins-dash-hero-actions"], [1, "ins-dash-btn-primary", 3, "routerLink"], [1, "ti", "ti-circle-plus"], [1, "ins-dash-btn-student", 3, "click"], [1, "ti", "ti-school"], [1, "ins-dash-kpi-grid", "mb-4"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#6366f1", "--kpi-glow", "rgba(99,102,241,.25)", "animation-delay", ".00s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)"], [1, "ti", "ti-book-2"], [1, "ins-dash-kpi-info"], [1, "ins-dash-kpi-value"], [1, "ins-dash-kpi-label"], [1, "ins-dash-kpi-sparkline"], [1, "ins-kpi-bar", 2, "height", "55%", "background", "#6366f1"], [1, "ins-kpi-bar", 2, "height", "80%", "background", "#6366f1"], [1, "ins-kpi-bar", 2, "height", "50%", "background", "#6366f1"], [1, "ins-kpi-bar", 2, "height", "90%", "background", "#6366f1"], [1, "ins-kpi-bar", 2, "height", "70%", "background", "#6366f1"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#10b981", "--kpi-glow", "rgba(16,185,129,.25)", "animation-delay", ".06s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#10b981,#059669)"], [1, "ti", "ti-rocket"], [1, "ins-kpi-bar", 2, "height", "40%", "background", "#10b981"], [1, "ins-kpi-bar", 2, "height", "70%", "background", "#10b981"], [1, "ins-kpi-bar", 2, "height", "55%", "background", "#10b981"], [1, "ins-kpi-bar", 2, "height", "85%", "background", "#10b981"], [1, "ins-kpi-bar", 2, "height", "65%", "background", "#10b981"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#06b6d4", "--kpi-glow", "rgba(6,182,212,.25)", "animation-delay", ".12s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#06b6d4,#0891b2)"], [1, "ti", "ti-users"], [1, "ins-kpi-bar", 2, "height", "50%", "background", "#06b6d4"], [1, "ins-kpi-bar", 2, "height", "65%", "background", "#06b6d4"], [1, "ins-kpi-bar", 2, "height", "80%", "background", "#06b6d4"], [1, "ins-kpi-bar", 2, "height", "70%", "background", "#06b6d4"], [1, "ins-kpi-bar", 2, "height", "92%", "background", "#06b6d4"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#f59e0b", "--kpi-glow", "rgba(245,158,11,.25)", "animation-delay", ".18s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#f59e0b,#d97706)"], [1, "ti", "ti-currency-euro"], [1, "ins-kpi-bar", 2, "height", "30%", "background", "#f59e0b"], [1, "ins-kpi-bar", 2, "height", "55%", "background", "#f59e0b"], [1, "ins-kpi-bar", 2, "height", "45%", "background", "#f59e0b"], [1, "ins-kpi-bar", 2, "height", "75%", "background", "#f59e0b"], [1, "ins-kpi-bar", 2, "height", "85%", "background", "#f59e0b"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#8b5cf6", "--kpi-glow", "rgba(139,92,246,.25)", "animation-delay", ".24s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#8b5cf6,#7c3aed)"], [1, "ti", "ti-chart-bar"], [1, "ins-kpi-bar", 2, "height", "45%", "background", "#8b5cf6"], [1, "ins-kpi-bar", 2, "height", "60%", "background", "#8b5cf6"], [1, "ins-kpi-bar", 2, "height", "75%", "background", "#8b5cf6"], [1, "ins-kpi-bar", 2, "height", "65%", "background", "#8b5cf6"], [1, "ins-kpi-bar", 2, "height", "80%", "background", "#8b5cf6"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#f59e0b", "--kpi-glow", "rgba(245,158,11,.25)", "animation-delay", ".30s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#f59e0b,#fbbf24)"], [1, "ti", "ti-star-filled"], [1, "ins-dash-kpi-stars"], ["class", "ti ti-star-filled", 3, "color", 4, "ngFor", "ngForOf"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#6366f1", "--kpi-glow", "rgba(99,102,241,.25)", "animation-delay", ".36s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#6366f1,#06b6d4)"], [1, "ti", "ti-trophy"], [1, "ins-dash-kpi-progress-wrap"], [1, "ins-dash-kpi-progress-bar"], [1, "ins-dash-kpi-card", 2, "--kpi-color", "#ef4444", "--kpi-glow", "rgba(239,68,68,.25)", "animation-delay", ".42s"], [1, "ins-dash-kpi-icon-wrap", 2, "background", "linear-gradient(135deg,#ef4444,#dc2626)", "position", "relative"], [1, "ti", "ti-clock"], [1, "ins-kpi-bar", 2, "height", "35%", "background", "#ef4444"], [1, "ins-kpi-bar", 2, "height", "60%", "background", "#ef4444"], [1, "ins-kpi-bar", 2, "height", "45%", "background", "#ef4444"], [1, "ins-kpi-bar", 2, "height", "70%", "background", "#ef4444"], [1, "ins-kpi-bar", 2, "height", "50%", "background", "#ef4444"], [1, "row", "g-4", "mb-4"], [1, "col-xl-8", "col-lg-7"], [1, "ins-dash-glass-card", "h-100"], [1, "ins-dash-card-header"], [1, "ins-dash-card-title"], [1, "ins-dash-card-icon", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)"], [1, "ti", "ti-chart-bar-popular"], ["class", "ins-dash-chart-body", 4, "ngIf"], [1, "col-xl-4", "col-lg-5"], [1, "ins-dash-card-icon", 2, "background", "linear-gradient(135deg,#10b981,#059669)"], [1, "ti", "ti-chart-donut-3"], ["class", "ins-dash-empty-state", "style", "padding:3rem 1rem", 4, "ngIf"], [1, "ins-dash-card-icon", 2, "background", "linear-gradient(135deg,#06b6d4,#0891b2)"], [1, "ti", "ti-trending-up"], [1, "ins-dash-revenue-badge"], [1, "ti", "ti-arrow-up-right"], [1, "ins-dash-card-icon", 2, "background", "linear-gradient(135deg,#8b5cf6,#7c3aed)"], [1, "ti", "ti-layout-distribute-horizontal"], [1, "ins-dash-section-wrap", "mb-4"], [1, "ins-dash-section-header"], [1, "d-flex", "align-items-center", "gap-3"], [1, "ins-dash-section-icon", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)"], [1, "ti", "ti-books"], [1, "mb-0"], [1, "ins-dash-view-all", 3, "routerLink"], [1, "ti", "ti-arrow-right"], ["class", "ins-dash-empty-state", "style", "padding:3rem", 4, "ngIf"], ["class", "ins-dash-courses-grid", 4, "ngIf"], [1, "ins-dash-glass-card"], [1, "ins-dash-card-icon", 2, "background", "linear-gradient(135deg,#06b6d4,#6366f1)"], [1, "ti", "ti-user-check"], [1, "ins-dash-filters"], [1, "ins-dash-search-wrap"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Rechercher un \u00E9tudiant...", 1, "ins-dash-search", 3, "ngModelChange", "ngModel"], [1, "ins-dash-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "ins-dash-table-responsive", 4, "ngIf"], ["alt", "Avatar", 1, "ins-dash-hero-avatar-img", 3, "src"], [1, "ins-dash-chart-body"], [3, "series", "chart", "plotOptions", "xaxis", "yaxis", "colors", "fill", "dataLabels", "grid", "legend", "tooltip"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "responsive", "tooltip"], [1, "ins-dash-empty-state", 2, "padding", "3rem 1rem"], [1, "ti", "ti-users-group"], [3, "series", "chart", "stroke", "xaxis", "yaxis", "colors", "fill", "dataLabels", "grid", "tooltip"], [3, "series", "chart", "plotOptions", "xaxis", "colors", "dataLabels", "grid", "tooltip"], [1, "ins-dash-empty-state", 2, "padding", "3rem"], [1, "ins-dash-courses-grid"], ["class", "ins-dash-course-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "ins-dash-course-card"], [1, "ins-dash-course-thumb"], [3, "src", "alt", "error", 4, "ngIf"], ["class", "ins-dash-course-placeholder", 3, "background", 4, "ngIf"], [1, "ins-dash-course-overlay"], [1, "ins-dash-quick-edit", 3, "routerLink"], [1, "ti", "ti-edit"], [1, "ins-dash-course-status-pill"], [1, "ins-dash-course-body"], [1, "ins-dash-course-title", 3, "title"], [1, "ins-dash-course-meta"], [1, "ins-dash-course-stat"], [1, "ti", "ti-star-filled", 2, "color", "#f59e0b"], [3, "error", "src", "alt"], [1, "ins-dash-course-placeholder"], [1, "ins-dash-placeholder-text"], [1, "ins-dash-table-responsive"], [1, "ins-dash-table"], ["class", "ins-dash-table-row", 4, "ngFor", "ngForOf"], ["colspan", "5", 1, "ins-dash-empty"], [1, "ins-dash-empty-state"], [1, "ins-dash-table-row"], [1, "ins-dash-student-cell"], [1, "ins-dash-student-avatar"], ["class", "ins-dash-student-avatar-img", 3, "src", "alt", "error", 4, "ngIf"], [1, "ins-dash-student-name"], [1, "ins-dash-student-email"], [1, "ins-dash-course-chip"], [1, "ins-dash-date"], [1, "ti", "ti-calendar"], [1, "ins-dash-prog-wrap"], [1, "ins-dash-prog-bar"], [1, "ins-dash-prog-fill", 3, "ngClass"], [1, "ins-dash-prog-pct"], ["class", "ins-dash-badge bg-success-transparent text-success", 4, "ngIf"], ["class", "ins-dash-badge bg-warning-transparent text-warning", 4, "ngIf"], ["class", "ins-dash-badge bg-secondary-transparent text-secondary", 4, "ngIf"], [1, "ins-dash-student-avatar-img", 3, "error", "src", "alt"], [1, "ins-dash-badge", "bg-success-transparent", "text-success"], [1, "ti", "ti-circle-check", "me-1"], [1, "ins-dash-badge", "bg-warning-transparent", "text-warning"], [1, "ti", "ti-loader", "me-1"], [1, "ins-dash-badge", "bg-secondary-transparent", "text-secondary"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content", "border-0", 2, "border-radius", "16px", "box-shadow", "0 24px 48px rgba(0,0,0,.16)", "animation", "popInModal .2s ease"], [1, "modal-header", "border-0", "pb-0", "pt-4", "px-4"], [2, "width", "48px", "height", "48px", "border-radius", "14px", "background", "linear-gradient(135deg,#10b981,#059669)", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "ti", "ti-school", 2, "font-size", "22px", "color", "#fff"], [1, "fw-bold", "mb-0", 2, "font-size", "15px"], [1, "text-muted"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4", "pt-3", "pb-2"], [1, "text-muted", "small", "mb-3"], [1, "text-success"], [1, "form-label", "small", "fw-semibold"], [1, "input-group"], [1, "input-group-text", "bg-light", "border-end-0", 2, "border-radius", "8px 0 0 8px"], [1, "ti", "ti-lock", 2, "font-size", "15px", "color", "#6b7280"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", "border-start-0", "ps-0", 2, "border-radius", "0 8px 8px 0", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mt-2", "py-2", "px-3", 2, "border-radius", "8px", "font-size", "12px"], [1, "modal-footer", "border-0", "px-4", "pb-4", "pt-2", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "flex-fill", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "flex-fill", "text-white", "fw-semibold", 2, "background", "linear-gradient(135deg,#10b981,#059669)", "border", "none", 3, "click", "disabled"], ["class", "d-flex align-items-center justify-content-center gap-2", 4, "ngIf"], [1, "modal-backdrop", "fade", "show"], [1, "ti", "ti-alert-circle"], [1, "ti", "ti-arrow-swap-horizontal", "me-1"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"]],
      template: function InstructorDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, InstructorDashboardComponent_div_0_Template, 9, 2, "div", 0)(1, InstructorDashboardComponent_ng_container_1_Template, 227, 47, "ng-container", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.NgApexchartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_ins-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-kpi-pop {\n  from {\n    opacity: 0;\n    transform: translateY(18px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-orb-1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(28px, -18px) scale(1.06);\n  }\n  66% {\n    transform: translate(-14px, 14px) scale(0.97);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-orb-2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(-22px, 18px) scale(1.08);\n  }\n  66% {\n    transform: translate(18px, -10px) scale(0.95);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-orb-3 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(14px, 22px) scale(1.04);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-avatar-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 12px rgba(99, 102, 241, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-badge-beat {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.18);\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.ins-dash-skeleton-wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.ins-dash-skeleton-chart[_ngcontent-%COMP%], .ins-dash-skeleton-card[_ngcontent-%COMP%], .ins-dash-skeleton-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--bs-border-color, #e5e7eb) 0%, var(--bs-tertiary-bg, #f3f4f6) 50%, var(--bs-border-color, #e5e7eb) 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_ins-shimmer 1.6s ease-in-out infinite;\n}\n\n.ins-dash-skeleton-hero[_ngcontent-%COMP%] {\n  height: 165px;\n  border-radius: 20px;\n}\n\n.ins-dash-skeleton-card[_ngcontent-%COMP%] {\n  height: 120px;\n  border-radius: 16px;\n}\n\n.ins-dash-skeleton-chart[_ngcontent-%COMP%] {\n  height: 340px;\n  border-radius: 16px;\n}\n\n.ins-dash-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 38%, #0ea5e9 75%, #38bdf8 100%);\n  padding: 2rem 2.5rem 1.75rem;\n  color: #fff;\n  animation: _ngcontent-%COMP%_ins-fade-up 0.45s ease both;\n}\n.ins-dash-hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -48%;\n  right: -16%;\n  width: 64%;\n  height: 180%;\n  pointer-events: none;\n  background: linear-gradient(125deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 22%, rgba(255, 255, 255, 0) 58%);\n  transform: rotate(7deg);\n  z-index: 1;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-orbs[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(55px);\n  opacity: 0.38;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-orb.ins-orb-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: radial-gradient(circle, #a5b4fc, transparent);\n  top: -80px;\n  right: 8%;\n  animation: _ngcontent-%COMP%_ins-orb-1 9s ease-in-out infinite;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-orb.ins-orb-2[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, #c4b5fd, transparent);\n  bottom: -60px;\n  left: 22%;\n  animation: _ngcontent-%COMP%_ins-orb-2 11s ease-in-out infinite;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-orb.ins-orb-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: radial-gradient(circle, #bae6fd, transparent);\n  top: 10%;\n  left: 52%;\n  animation: _ngcontent-%COMP%_ins-orb-3 13s ease-in-out infinite;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-avatar[_ngcontent-%COMP%]   .ins-dash-hero-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-avatar[_ngcontent-%COMP%]   .ins-dash-avatar-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -4px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  animation: _ngcontent-%COMP%_ins-avatar-pulse 2.8s ease-in-out infinite;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-text[_ngcontent-%COMP%]   .ins-dash-hero-greeting[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  opacity: 1;\n  color: rgba(255, 255, 255, 0.92);\n  letter-spacing: 0.02em;\n  font-weight: 600;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-text[_ngcontent-%COMP%]   .ins-dash-hero-name[_ngcontent-%COMP%] {\n  margin: 0.15rem 0;\n  font-size: 1.75rem;\n  font-weight: 800;\n  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.65));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-text[_ngcontent-%COMP%]   .ins-dash-hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.2rem 0.8rem;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #fff;\n}\n.ins-dash-hero[_ngcontent-%COMP%]   .ins-dash-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.ins-dash-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.25rem;\n  border-radius: 12px;\n  background: rgba(99, 102, 241, 0.9);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-decoration: none;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  transition: all 0.25s ease;\n}\n.ins-dash-btn-primary[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(99, 102, 241, 0.45);\n}\n\n.ins-dash-btn-glass[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.25rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-decoration: none;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  transition: all 0.25s ease;\n}\n.ins-dash-btn-glass[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  transform: translateY(-2px);\n}\n\n.ins-dash-btn-student[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.25rem;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #ec4899 0%, #a855f7 52%, #7c3aed 100%);\n  color: #fff !important;\n  font-weight: 600;\n  font-size: 0.875rem;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.38);\n  transition: all 0.25s ease;\n}\n.ins-dash-btn-student[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(147, 51, 234, 0.46);\n  filter: saturate(1.06);\n}\n.ins-dash-btn-student[_ngcontent-%COMP%]:hover, .ins-dash-btn-student[_ngcontent-%COMP%]:focus, .ins-dash-btn-student[_ngcontent-%COMP%]:active {\n  color: #fff !important;\n}\n\n.ins-dash-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 1199.98px) {\n  .ins-dash-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575.98px) {\n  .ins-dash-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ins-dash-kpi-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  padding: 1.25rem;\n  background: var(--bs-body-bg, #fff);\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  overflow: hidden;\n  cursor: default;\n  animation: _ngcontent-%COMP%_ins-kpi-pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n.ins-dash-kpi-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--kpi-color, #6366f1);\n  border-radius: 16px 16px 0 0;\n}\n.ins-dash-kpi-card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n  background: radial-gradient(circle at 25% 105%, var(--kpi-glow, rgba(99, 102, 241, 0.15)), transparent 65%);\n  transition: opacity 0.3s ease;\n  border-radius: inherit;\n}\n.ins-dash-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 14px 32px var(--kpi-glow, rgba(99, 102, 241, 0.2));\n  border-color: var(--kpi-color, #6366f1);\n}\n.ins-dash-kpi-card[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.ins-dash-kpi-card[_ngcontent-%COMP%]:hover   .ins-dash-kpi-icon-wrap[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-5deg);\n}\n.ins-dash-kpi-card.ins-kpi-alert[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ins-kpi-pop 0.55s both;\n}\n\n.ins-dash-kpi-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.3rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);\n  transition: transform 0.3s ease;\n  flex-shrink: 0;\n}\n.ins-dash-kpi-icon-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.ins-dash-kpi-notif[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ef4444;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--bs-body-bg, #fff);\n  animation: _ngcontent-%COMP%_ins-badge-beat 1.6s ease-in-out infinite;\n}\n\n.ins-dash-kpi-info[_ngcontent-%COMP%]   .ins-dash-kpi-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: var(--bs-body-color, #111827);\n  line-height: 1.1;\n}\n.ins-dash-kpi-info[_ngcontent-%COMP%]   .ins-dash-kpi-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  opacity: 0.55;\n}\n.ins-dash-kpi-info[_ngcontent-%COMP%]   .ins-dash-kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-weight: 600;\n  color: var(--bs-secondary-color, #6b7280);\n}\n\n.ins-dash-kpi-sparkline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 3px;\n  height: 28px;\n  margin-top: auto;\n}\n.ins-dash-kpi-sparkline[_ngcontent-%COMP%]   .ins-kpi-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 2px;\n  opacity: 0.45;\n  transition: opacity 0.3s;\n}\n\n.ins-dash-kpi-card[_ngcontent-%COMP%]:hover   .ins-kpi-bar[_ngcontent-%COMP%] {\n  opacity: 0.82;\n}\n\n.ins-dash-kpi-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  margin-top: auto;\n  font-size: 0.82rem;\n}\n\n.ins-dash-kpi-progress-wrap[_ngcontent-%COMP%] {\n  margin-top: auto;\n  height: 5px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.ins-dash-kpi-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #6366f1, #06b6d4);\n  border-radius: 4px;\n  transition: width 1.2s ease;\n}\n\n.ins-dash-glass-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: var(--bs-body-bg, #fff);\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_ins-fade-up 0.45s ease both;\n}\n\n.ins-dash-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);\n}\n\n.ins-dash-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n}\n.ins-dash-card-title[_ngcontent-%COMP%]   .ins-dash-card-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.ins-dash-card-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: var(--bs-body-color, #111827);\n}\n.ins-dash-card-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--bs-secondary-color, #6b7280);\n}\n\n.ins-dash-revenue-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.8rem;\n  border-radius: 20px;\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.12));\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  color: #10b981;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n\n.ins-dash-chart-body[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.5rem;\n}\n\n.ins-dash-section-wrap[_ngcontent-%COMP%] {\n  background: var(--bs-body-bg, #fff);\n  border-radius: 16px;\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_ins-fade-up 0.45s ease both;\n}\n\n.ins-dash-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);\n}\n.ins-dash-section-header[_ngcontent-%COMP%]   .ins-dash-section-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.ins-dash-section-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: var(--bs-body-color, #111827);\n}\n.ins-dash-section-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--bs-secondary-color, #6b7280);\n  font-size: 0.72rem;\n}\n\n.ins-dash-view-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #0f766e;\n  text-decoration: none;\n  padding: 0.38rem 0.875rem;\n  border-radius: 8px;\n  background: rgba(20, 184, 166, 0.09);\n  border: 1px solid rgba(20, 184, 166, 0.2);\n  transition: all 0.2s ease;\n}\n.ins-dash-view-all[_ngcontent-%COMP%]:hover {\n  background: rgba(20, 184, 166, 0.16);\n  color: #0f766e;\n  transform: translateX(2px);\n}\n\n.ins-dash-courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  padding: 1.5rem;\n}\n@media (max-width: 1199.98px) {\n  .ins-dash-courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 767.98px) {\n  .ins-dash-courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575.98px) {\n  .ins-dash-courses-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ins-dash-course-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--bs-body-bg, #fff);\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  transition: all 0.25s ease;\n  animation: _ngcontent-%COMP%_ins-kpi-pop 0.5s ease both;\n}\n.ins-dash-course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n\n.ins-dash-course-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n}\n.ins-dash-course-thumb.has-image[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 0.45rem;\n  color: #fff;\n  padding: 0.9rem;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-placeholder[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: -40% -30%;\n  background: linear-gradient(115deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 45%, rgba(255, 255, 255, 0.16) 90%);\n  transform: translateX(-45%) rotate(10deg);\n  transition: transform 0.6s ease;\n  pointer-events: none;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  opacity: 0.9;\n  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-placeholder-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  line-height: 1.25;\n  letter-spacing: 0.01em;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);\n  word-break: break-word;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-quick-edit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.48rem 0.95rem;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #14b8a6, #0ea5e9);\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-decoration: none;\n  transform: translateY(8px);\n  transition: transform 0.3s ease;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-status-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  padding: 0.18rem 0.58rem;\n  border-radius: 20px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-status-pill.status-published[_ngcontent-%COMP%] {\n  background: rgba(2, 168, 181, 0.88);\n  color: #fff;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-status-pill.status-pending_review[_ngcontent-%COMP%], .ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-status-pill.status-pending-review[_ngcontent-%COMP%] {\n  background: rgba(253, 57, 149, 0.88);\n  color: #fff;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-status-pill.status-draft[_ngcontent-%COMP%] {\n  background: rgba(155, 89, 182, 0.88);\n  color: #fff;\n}\n.ins-dash-course-thumb[_ngcontent-%COMP%]   .ins-dash-course-status-pill.status-archived[_ngcontent-%COMP%] {\n  background: rgba(86, 37, 232, 0.88);\n  color: #fff;\n}\n\n.ins-dash-course-card[_ngcontent-%COMP%]:hover   .ins-dash-course-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ins-dash-course-card[_ngcontent-%COMP%]:hover   .ins-dash-quick-edit[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.ins-dash-course-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.ins-dash-course-card[_ngcontent-%COMP%]:hover   .ins-dash-course-placeholder[_ngcontent-%COMP%]::before {\n  transform: translateX(45%) rotate(10deg);\n}\n\n.ins-dash-course-body[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n}\n\n.ins-dash-course-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--bs-body-color, #111827);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n\n.ins-dash-course-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n\n.ins-dash-course-stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.28rem;\n  font-size: 0.73rem;\n  color: var(--bs-secondary-color, #6b7280);\n}\n.ins-dash-course-stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n}\n\n.ins-dash-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.ins-dash-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ins-dash-search-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  color: var(--bs-secondary-color, #9ca3af);\n  font-size: 0.88rem;\n}\n.ins-dash-search-wrap[_ngcontent-%COMP%]   .ins-dash-search[_ngcontent-%COMP%] {\n  padding: 0.52rem 0.875rem 0.52rem 2.15rem;\n  border-radius: 10px;\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  background: var(--bs-tertiary-bg, #f9fafb);\n  font-size: 0.82rem;\n  color: var(--bs-body-color);\n  width: 215px;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.ins-dash-search-wrap[_ngcontent-%COMP%]   .ins-dash-search[_ngcontent-%COMP%]:focus {\n  border-color: #14b8a6;\n  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14);\n  background: var(--bs-body-bg, #fff);\n}\n\n.ins-dash-select[_ngcontent-%COMP%] {\n  padding: 0.52rem 2rem 0.52rem 0.875rem;\n  border-radius: 10px;\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  background: var(--bs-tertiary-bg, #f9fafb);\n  font-size: 0.82rem;\n  color: var(--bs-body-color);\n  cursor: pointer;\n  outline: none;\n  transition: border-color 0.2s ease;\n}\n.ins-dash-select[_ngcontent-%COMP%]:focus {\n  border-color: #14b8a6;\n  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.14);\n}\n\n.ins-dash-table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.ins-dash-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ins-dash-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--bs-secondary-color, #6b7280);\n  background: var(--bs-tertiary-bg, #f9fafb);\n  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);\n  white-space: nowrap;\n}\n.ins-dash-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ins-dash-table-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);\n  transition: background 0.15s ease;\n}\n.ins-dash-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ins-dash-table-row[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.035);\n}\n.ins-dash-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ins-dash-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ins-dash-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ins-dash-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  vertical-align: middle;\n}\n\n.ins-dash-student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 180px;\n}\n\n.ins-dash-student-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.14);\n}\n\n.ins-dash-student-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.ins-dash-student-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--bs-body-color, #111827);\n}\n\n.ins-dash-student-email[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--bs-secondary-color, #6b7280);\n}\n\n.ins-dash-course-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.58rem;\n  border-radius: 6px;\n  background: rgba(245, 158, 11, 0.14);\n  color: #92400e;\n  font-size: 0.7rem;\n  font-weight: 600;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ins-dash-date[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.28rem;\n  font-size: 0.76rem;\n  color: var(--bs-secondary-color, #6b7280);\n  white-space: nowrap;\n}\n.ins-dash-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n}\n\n.ins-dash-prog-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  min-width: 130px;\n}\n\n.ins-dash-prog-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  border-radius: 6px;\n  background: var(--bs-border-color, #e5e7eb);\n  overflow: hidden;\n}\n\n.ins-dash-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.9s ease;\n}\n.ins-dash-prog-fill.bg-success[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #10b981, #059669);\n}\n.ins-dash-prog-fill.bg-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #6366f1, #8b5cf6);\n}\n.ins-dash-prog-fill.bg-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #f59e0b, #d97706);\n}\n.ins-dash-prog-fill.bg-secondary[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n\n.ins-dash-prog-pct[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 600;\n  color: var(--bs-secondary-color, #6b7280);\n  min-width: 32px;\n}\n\n.ins-dash-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.24rem 0.68rem;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.ins-dash-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n\n.ins-dash-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--bs-secondary-color, #9ca3af);\n}\n.ins-dash-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.35;\n}\n.ins-dash-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLWRhc2hib2FyZC9pbnN0cnVjdG9yLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OztvRUFBQTtBQWNBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFObkI7RUFPQTtJQUFPLFVBQUE7SUFBWSx3QkFBQTtFQUhuQjtBQUNGO0FBS0E7RUFDRTtJQUFPLFVBQUE7SUFBWSx1Q0FBQTtFQURuQjtFQUVBO0lBQU8sVUFBQTtJQUFZLGlDQUFBO0VBRW5CO0FBQ0Y7QUFBQTtFQUNFO0lBQVUsbUNBQUE7RUFHVjtFQUZBO0lBQVUsNkNBQUE7RUFLVjtFQUpBO0lBQVUsNkNBQUE7RUFPVjtBQUNGO0FBTEE7RUFDRTtJQUFVLG1DQUFBO0VBUVY7RUFQQTtJQUFVLDZDQUFBO0VBVVY7RUFUQTtJQUFVLDZDQUFBO0VBWVY7QUFDRjtBQVZBO0VBQ0U7SUFBVSxtQ0FBQTtFQWFWO0VBWkE7SUFBVSw0Q0FBQTtFQWVWO0FBQ0Y7QUFiQTtFQUNFO0lBQVUsMkNBQUE7RUFnQlY7RUFmQTtJQUFVLDRDQUFBO0VBa0JWO0FBQ0Y7QUFoQkE7RUFDRTtJQUFVLG1CQUFBO0VBbUJWO0VBbEJBO0lBQVUsc0JBQUE7RUFxQlY7QUFDRjtBQW5CQTtFQUNFO0lBQU8sNEJBQUE7RUFzQlA7RUFyQkE7SUFBTywyQkFBQTtFQXdCUDtBQUNGO0FBckJBO0VBQTZCLFVBQUE7QUF3QjdCOztBQXRCQTtFQUNFLGdKQUFBO0VBTUEsMEJBQUE7RUFDQSxnREFBQTtBQW9CRjs7QUFqQkE7RUFBMkIsYUFBQTtFQUFlLG1CQUFBO0FBc0IxQzs7QUFyQkE7RUFBMkIsYUFBQTtFQUFlLG1CQUFBO0FBMEIxQzs7QUF6QkE7RUFBMkIsYUFBQTtFQUFlLG1CQUFBO0FBOEIxQzs7QUEzQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJB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RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsbUJBQUE7RUFBcUIsV0FBQTtFQUM1RCx5Q0FBQTtBQTJURjtBQTFURTtFQUFJLGlCQUFBO0VBQW1CLGFBQUE7QUE4VHpCO0FBN1RFO0VBQUksU0FBQTtFQUFXLG1CQUFBO0FBaVVqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4gICBJTlNUUlVDVE9SIERBU0hCT0FSRCDDosKAwpQgUFJFTUlVTSBHTEFTU01PUlBISVNNIFJFREVTSUdOXHJcbiAgIFByZWZpeDogaW5zLWRhc2gtICB8ICBpbnMtb3JiLSAgfCAgaW5zLWtwaS1cclxuw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRGVzaWduIHRva2VucyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuJHByaW1hcnk6ICAjNjM2NmYxO1xyXG4kcHVycGxlOiAgICM4YjVjZjY7XHJcbiRlbWVyYWxkOiAgIzEwYjk4MTtcclxuJGFtYmVyOiAgICAjZjU5ZTBiO1xyXG4kY3lhbjogICAgICMwNmI2ZDQ7XHJcbiRkYW5nZXI6ICAgI2VmNDQ0NDtcclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBLZXlmcmFtZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBrZXlmcmFtZXMgaW5zLWZhZGUtdXAge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjJweCk7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5zLWtwaS1wb3Age1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMThweCkgc2NhbGUoMC45Nik7IH1cclxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApICAgIHNjYWxlKDEpOyAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5zLW9yYi0xIHtcclxuICAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgICAwKSAgIHNjYWxlKDEpOyAgICB9XHJcbiAgMzMlICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDI4cHgsLTE4cHgpIHNjYWxlKDEuMDYpOyB9XHJcbiAgNjYlICAgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHB4LDE0cHgpIHNjYWxlKDAuOTcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5zLW9yYi0yIHtcclxuICAwJSwxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgICAgc2NhbGUoMSk7ICAgIH1cclxuICAzMyUgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIycHgsMThweCkgc2NhbGUoMS4wOCk7IH1cclxuICA2NiUgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMThweCwtMTBweCkgc2NhbGUoMC45NSk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnMtb3JiLTMge1xyXG4gIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgIDApICAgc2NhbGUoMSk7ICAgIH1cclxuICA1MCUgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTRweCwyMnB4KSBzY2FsZSgxLjA0KTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGlucy1hdmF0YXItcHVsc2Uge1xyXG4gIDAlLDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwICAgcmdiYSg5OSwxMDIsMjQxLC41KTsgfVxyXG4gIDUwJSAgICAgeyBib3gtc2hhZG93OiAwIDAgMCAxMnB4IHJnYmEoOTksMTAyLDI0MSwwKTsgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnMtYmFkZ2UtYmVhdCB7XHJcbiAgMCUsMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7ICAgIH1cclxuICA1MCUgICAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE4KTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGlucy1zaGltbWVyIHtcclxuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMjAwJSAwOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTa2VsZXRvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmlucy1kYXNoLXNrZWxldG9uLXdyYXBwZXIgeyBwYWRkaW5nOiAwOyB9XHJcblxyXG4lc2hpbW1lci1iZyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICB2YXIoLS1icy1ib3JkZXItY29sb3IsICNlNWU3ZWIpIDAlLFxyXG4gICAgdmFyKC0tYnMtdGVydGlhcnktYmcsICAjZjNmNGY2KSA1MCUsXHJcbiAgICB2YXIoLS1icy1ib3JkZXItY29sb3IsICNlNWU3ZWIpIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xyXG4gIGFuaW1hdGlvbjogaW5zLXNoaW1tZXIgMS42cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmlucy1kYXNoLXNrZWxldG9uLWhlcm8gIHsgaGVpZ2h0OiAxNjVweDsgYm9yZGVyLXJhZGl1czogMjBweDsgQGV4dGVuZCAlc2hpbW1lci1iZzsgfVxyXG4uaW5zLWRhc2gtc2tlbGV0b24tY2FyZCAgeyBoZWlnaHQ6IDEyMHB4OyBib3JkZXItcmFkaXVzOiAxNnB4OyBAZXh0ZW5kICVzaGltbWVyLWJnOyB9XHJcbi5pbnMtZGFzaC1za2VsZXRvbi1jaGFydCB7IGhlaWdodDogMzQwcHg7IGJvcmRlci1yYWRpdXM6IDE2cHg7IEBleHRlbmQgJXNoaW1tZXItYmc7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIZXJvIGJhbm5lciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmlucy1kYXNoLWhlcm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzYzNjZmMSAzOCUsICMwZWE1ZTkgNzUlLCAjMzhiZGY4IDEwMCUpO1xyXG4gIHBhZGRpbmc6IDJyZW0gMi41cmVtIDEuNzVyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYW5pbWF0aW9uOiBpbnMtZmFkZS11cCAuNDVzIGVhc2UgYm90aDtcclxuXHJcbiAgLy8gc3VidGxlIHJlZmxlY3Rpb24gbGF5ZXJcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00OCU7XHJcbiAgICByaWdodDogLTE2JTtcclxuICAgIHdpZHRoOiA2NCU7XHJcbiAgICBoZWlnaHQ6IDE4MCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjVkZWcsIHJnYmEoMjU1LDI1NSwyNTUsLjE2KSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwuMDYpIDIyJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA1OCUpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLy8gZmxvYXRpbmcgb3Jic1xyXG4gIC5pbnMtZGFzaC1oZXJvLW9yYnMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG5cclxuICAuaW5zLW9yYiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNTVweCk7XHJcbiAgICBvcGFjaXR5OiAuMzg7XHJcblxyXG4gICAgJi5pbnMtb3JiLTEge1xyXG4gICAgICB3aWR0aDogMzAwcHg7IGhlaWdodDogMzAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNhNWI0ZmMsIHRyYW5zcGFyZW50KTtcclxuICAgICAgdG9wOiAtODBweDsgcmlnaHQ6IDglO1xyXG4gICAgICBhbmltYXRpb246IGlucy1vcmItMSA5cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgICYuaW5zLW9yYi0yIHtcclxuICAgICAgd2lkdGg6IDI0MHB4OyBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjYzRiNWZkLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIGJvdHRvbTogLTYwcHg7IGxlZnQ6IDIyJTtcclxuICAgICAgYW5pbWF0aW9uOiBpbnMtb3JiLTIgMTFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgJi5pbnMtb3JiLTMge1xyXG4gICAgICB3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNiYWU2ZmQsIHRyYW5zcGFyZW50KTtcclxuICAgICAgdG9wOiAxMCU7IGxlZnQ6IDUyJTtcclxuICAgICAgYW5pbWF0aW9uOiBpbnMtb3JiLTMgMTNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaW5uZXIgcm93XHJcbiAgLmlucy1kYXNoLWhlcm8taW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC8vIGF2YXRhclxyXG4gIC5pbnMtZGFzaC1oZXJvLWF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkcHJpbWFyeSwgJHB1cnBsZSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogI2ZmZjsgZmxleC1zaHJpbms6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5pbnMtZGFzaC1oZXJvLWF2YXRhci1pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucy1kYXNoLWF2YXRhci1yaW5nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogLTRweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcclxuICAgICAgYW5pbWF0aW9uOiBpbnMtYXZhdGFyLXB1bHNlIDIuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0ZXh0XHJcbiAgLmlucy1kYXNoLWhlcm8tdGV4dCB7XHJcbiAgICAuaW5zLWRhc2gtaGVyby1ncmVldGluZyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAuODVyZW07XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45Mik7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuMDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5pbnMtZGFzaC1oZXJvLW5hbWUge1xyXG4gICAgICBtYXJnaW46IC4xNXJlbSAwO1xyXG4gICAgICBmb250LXNpemU6IDEuNzVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsI2ZmZixyZ2JhKDI1NSwyNTUsMjU1LC42NSkpO1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB9XHJcbiAgICAuaW5zLWRhc2gtaGVyby1iYWRnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IC4zcmVtO1xyXG4gICAgICBwYWRkaW5nOiAuMnJlbSAuOHJlbTsgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG4gICAgICBmb250LXNpemU6IC43MnJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IC4wOGVtO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENUQSBidXR0b25zXHJcbiAgLmlucy1kYXNoLWhlcm8tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogLjc1cmVtOyBmbGV4LXdyYXA6IHdyYXA7IH1cclxufVxyXG5cclxuLy8gaGVybyBidXR0b25zXHJcbi5pbnMtZGFzaC1idG4tcHJpbWFyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogLjRyZW07XHJcbiAgcGFkZGluZzogLjZyZW0gMS4yNXJlbTsgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsLjkpOyBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IC44NzVyZW07IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yKTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5OyBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIycHggcmdiYSg5OSwxMDIsMjQxLC40NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLWRhc2gtYnRuLWdsYXNzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAuNHJlbTtcclxuICBwYWRkaW5nOiAuNnJlbSAxLjI1cmVtOyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpOyBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IC44NzVyZW07IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIpOyBjb2xvcjogI2ZmZjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOyB9XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1idG4tc3R1ZGVudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogLjRyZW07XHJcbiAgcGFkZGluZzogLjZyZW0gMS4yNXJlbTsgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWM0ODk5IDAlLCAjYTg1NWY3IDUyJSwgIzdjM2FlZCAxMDAlKTtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMTY4LCA4NSwgMjQ3LCAuMzgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDE0NywgNTEsIDIzNCwgLjQ2KTtcclxuICAgIGZpbHRlcjogc2F0dXJhdGUoMS4wNik7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMsXHJcbiAgJjphY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBLUEkgZ3JpZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmlucy1kYXNoLWtwaS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAxcmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBLUEkgY2FyZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmlucy1kYXNoLWtwaS1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMS4yNXJlbTsgYmFja2dyb3VuZDogdmFyKC0tYnMtYm9keS1iZywgI2ZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsLjA1KTtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IC43NXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYW5pbWF0aW9uOiBpbnMta3BpLXBvcCAuNTVzIGN1YmljLWJlemllciguMzQsMS41NiwuNjQsMSkgYm90aDtcclxuXHJcbiAgLy8gdG9wIGNvbG9yIHN0cmlwZVxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1rcGktY29sb3IsICM2MzY2ZjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcclxuICB9XHJcblxyXG4gIC8vIGhvdmVyIGdsb3cgb3ZlcmxheVxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDI1JSAxMDUlLCB2YXIoLS1rcGktZ2xvdywgcmdiYSg5OSwxMDIsMjQxLC4xNSkpLCB0cmFuc3BhcmVudCA2NSUpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTsgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDMycHggdmFyKC0ta3BpLWdsb3csIHJnYmEoOTksMTAyLDI0MSwuMikpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1rcGktY29sb3IsICM2MzY2ZjEpO1xyXG4gICAgJjo6YWZ0ZXIgeyBvcGFjaXR5OiAxOyB9XHJcbiAgICAuaW5zLWRhc2gta3BpLWljb24td3JhcCB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTVkZWcpOyB9XHJcbiAgfVxyXG5cclxuICAmLmlucy1rcGktYWxlcnQge1xyXG4gICAgYW5pbWF0aW9uOiBpbnMta3BpLXBvcCAuNTVzIGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpY29uIGNpcmNsZVxyXG4uaW5zLWRhc2gta3BpLWljb24td3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMTQpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBpIHsgZm9udC1zaXplOiAxLjNyZW07IH1cclxufVxyXG5cclxuLy8gbm90aWZpY2F0aW9uIGRvdFxyXG4uaW5zLWRhc2gta3BpLW5vdGlmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTZweDsgcmlnaHQ6IC02cHg7XHJcbiAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICRkYW5nZXI7IGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogLjYycmVtOyBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJzLWJvZHktYmcsICNmZmYpO1xyXG4gIGFuaW1hdGlvbjogaW5zLWJhZGdlLWJlYXQgMS42cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLy8gdGV4dCBibG9ja1xyXG4uaW5zLWRhc2gta3BpLWluZm8ge1xyXG4gIC5pbnMtZGFzaC1rcGktdmFsdWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMS42NXJlbTsgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yLCAjMTExODI3KTsgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIHNtYWxsIHsgZm9udC1zaXplOiAuODVyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IG9wYWNpdHk6IC41NTsgfVxyXG4gIH1cclxuICAuaW5zLWRhc2gta3BpLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogLjcycmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wN2VtOyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwgIzZiNzI4MCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtaW5pIHNwYXJrbGluZSBiYXJzXHJcbi5pbnMtZGFzaC1rcGktc3BhcmtsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGdhcDogM3B4O1xyXG4gIGhlaWdodDogMjhweDsgbWFyZ2luLXRvcDogYXV0bztcclxuICAuaW5zLWtwaS1iYXIgeyBmbGV4OiAxOyBib3JkZXItcmFkaXVzOiAycHg7IG9wYWNpdHk6IC40NTsgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7IH1cclxufVxyXG4uaW5zLWRhc2gta3BpLWNhcmQ6aG92ZXIgLmlucy1rcGktYmFyIHsgb3BhY2l0eTogLjgyOyB9XHJcblxyXG4vLyBzdGFyIHJvd1xyXG4uaW5zLWRhc2gta3BpLXN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4OyBnYXA6IDNweDsgbWFyZ2luLXRvcDogYXV0bzsgZm9udC1zaXplOiAuODJyZW07XHJcbn1cclxuXHJcbi8vIHByb2dyZXNzIGJhciAoY29tcGxldGlvbiBjYXJkKVxyXG4uaW5zLWRhc2gta3BpLXByb2dyZXNzLXdyYXAge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87IGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjA3KTsgYm9yZGVyLXJhZGl1czogNHB4OyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbnMtZGFzaC1rcGktcHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkcHJpbWFyeSwgJGN5YW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgdHJhbnNpdGlvbjogd2lkdGggMS4ycyBlYXNlO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgR2xhc3MgY2FyZCAoY2hhcnRzICsgc3R1ZGVudHMpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uaW5zLWRhc2gtZ2xhc3MtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icy1ib2R5LWJnLCAjZmZmKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIycHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiBpbnMtZmFkZS11cCAuNDVzIGVhc2UgYm90aDtcclxufVxyXG5cclxuLmlucy1kYXNoLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAuNzVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IC45cmVtO1xyXG5cclxuICAuaW5zLWRhc2gtY2FyZC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEuMXJlbTsgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDA7IGZvbnQtc2l6ZTogLjkycmVtOyBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IsICMxMTE4MjcpO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogLjczcmVtOyBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yLCAjNmI3MjgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1yZXZlbnVlLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAuM3JlbTtcclxuICBwYWRkaW5nOiAuM3JlbSAuOHJlbTsgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTYsMTg1LDEyOSwuMTIpLHJnYmEoNiwxODIsMjEyLC4xMikpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwuMjUpO1xyXG4gIGNvbG9yOiAkZW1lcmFsZDsgZm9udC1zaXplOiAuNzhyZW07IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1jaGFydC1ib2R5IHsgcGFkZGluZzogLjc1cmVtIC41cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ291cnNlcyBzZWN0aW9uIHdyYXBwZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5pbnMtZGFzaC1zZWN0aW9uLXdyYXAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJzLWJvZHktYmcsICNmZmYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMnB4IHJnYmEoMCwwLDAsLjA1KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogaW5zLWZhZGUtdXAgLjQ1cyBlYXNlIGJvdGg7XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtOyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogLjc1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xyXG5cclxuICAuaW5zLWRhc2gtc2VjdGlvbi1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEuMXJlbTsgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICBoNSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAuOTJyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yLCMxMTE4MjcpOyB9XHJcbiAgc21hbGwgeyBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yLCM2YjcyODApOyBmb250LXNpemU6IC43MnJlbTsgfVxyXG59XHJcblxyXG4uaW5zLWRhc2gtdmlldy1hbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IC4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogLjc4cmVtOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzBmNzY2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHBhZGRpbmc6IC4zOHJlbSAuODc1cmVtOyBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwxODQsMTY2LC4wOSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAsMTg0LDE2NiwuMik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIwLDE4NCwxNjYsLjE2KTsgY29sb3I6ICMwZjc2NmU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDb3Vyc2UgY2FyZCBncmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uaW5zLWRhc2gtY291cnNlcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7IGdhcDogMXJlbTsgcGFkZGluZzogMS41cmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpOyB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7IH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1jb3Vyc2UtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icy1ib2R5LWJnLCNmZmYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG4gIGFuaW1hdGlvbjogaW5zLWtwaS1wb3AgLjVzIGVhc2UgYm90aDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLC4zKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1jb3Vyc2UtdGh1bWIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgYXNwZWN0LXJhdGlvOiAxNi85OyBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmLmhhcy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb3ZlcjsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmlucy1kYXNoLWNvdXJzZS1wbGFjZWhvbGRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAuNDVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC45cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBpbnNldDogLTQwJSAtMzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LC4xOCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNDUlLCByZ2JhKDI1NSwyNTUsMjU1LC4xNikgOTAlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDRweCAxOHB4IHJnYmEoMCwgMCwgMCwgLjIyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnMtZGFzaC1wbGFjZWhvbGRlci10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogLjc4cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICBsaW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIH1cclxuXHJcbiAgLmlucy1kYXNoLWNvdXJzZS1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LDIzLDQyLC43Mik7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7IHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuaW5zLWRhc2gtcXVpY2stZWRpdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAuM3JlbTtcclxuICAgIHBhZGRpbmc6IC40OHJlbSAuOTVyZW07IGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxNGI4YTYsICMwZWE1ZTkpOyBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogLjc4cmVtOyBmb250LXdlaWdodDogNjAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmlucy1kYXNoLWNvdXJzZS1zdGF0dXMtcGlsbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogOHB4OyBsZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nOiAuMThyZW0gLjU4cmVtOyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAuNjJyZW07IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogLjA1ZW07XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgICYuc3RhdHVzLXB1Ymxpc2hlZCAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyLDE2OCwxODEsLjg4KTsgY29sb3I6I2ZmZjsgfVxyXG4gICAgJi5zdGF0dXMtcGVuZGluZ19yZXZpZXcsXHJcbiAgICAmLnN0YXR1cy1wZW5kaW5nLXJldmlldyB7IGJhY2tncm91bmQ6IHJnYmEoMjUzLDU3LDE0OSwuODgpOyBjb2xvcjojZmZmOyB9XHJcbiAgICAmLnN0YXR1cy1kcmFmdCAgICAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTU1LDg5LDE4MiwuODgpOyBjb2xvcjojZmZmOyB9XHJcbiAgICAmLnN0YXR1cy1hcmNoaXZlZCAgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoODYsMzcsMjMyLC44OCk7ICBjb2xvcjojZmZmOyB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLWRhc2gtY291cnNlLWNhcmQ6aG92ZXIge1xyXG4gIC5pbnMtZGFzaC1jb3Vyc2Utb3ZlcmxheSB7IG9wYWNpdHk6IDE7IH1cclxuICAuaW5zLWRhc2gtcXVpY2stZWRpdCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIGltZyB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNik7IH1cclxuICAuaW5zLWRhc2gtY291cnNlLXBsYWNlaG9sZGVyOjpiZWZvcmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDUlKSByb3RhdGUoMTBkZWcpOyB9XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1jb3Vyc2UtYm9keSB7IHBhZGRpbmc6IC44NzVyZW07IH1cclxuXHJcbi5pbnMtZGFzaC1jb3Vyc2UtdGl0bGUge1xyXG4gIG1hcmdpbjogMCAwIC40NXJlbTsgZm9udC1zaXplOiAuODJyZW07IGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IsIzExMTgyNyk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW5zLWRhc2gtY291cnNlLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IC44NzVyZW07IH1cclxuXHJcbi5pbnMtZGFzaC1jb3Vyc2Utc3RhdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogLjI4cmVtO1xyXG4gIGZvbnQtc2l6ZTogLjczcmVtOyBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yLCM2YjcyODApO1xyXG4gIGkgeyBmb250LXNpemU6IC43M3JlbTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU2VhcmNoIC8gRmlsdGVyIGJhciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmlucy1kYXNoLWZpbHRlcnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IC43NXJlbTsgZmxleC13cmFwOiB3cmFwOyB9XHJcblxyXG4uaW5zLWRhc2gtc2VhcmNoLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAuNzVyZW07IGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IsIzljYTNhZik7IGZvbnQtc2l6ZTogLjg4cmVtOyB9XHJcbiAgLmlucy1kYXNoLXNlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAuNTJyZW0gLjg3NXJlbSAuNTJyZW0gMi4xNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJzLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJzLXRlcnRpYXJ5LWJnLCNmOWZhZmIpO1xyXG4gICAgZm9udC1zaXplOiAuODJyZW07IGNvbG9yOiB2YXIoLS1icy1ib2R5LWNvbG9yKTsgd2lkdGg6IDIxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTsgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzE0YjhhNjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjAsMTg0LDE2NiwuMTQpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icy1ib2R5LWJnLCNmZmYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlucy1kYXNoLXNlbGVjdCB7XHJcbiAgcGFkZGluZzogLjUycmVtIDJyZW0gLjUycmVtIC44NzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJzLXRlcnRpYXJ5LWJnLCNmOWZhZmIpO1xyXG4gIGZvbnQtc2l6ZTogLjgycmVtOyBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBvdXRsaW5lOiBub25lOyB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2U7XHJcbiAgJjpmb2N1cyB7IGJvcmRlci1jb2xvcjogIzE0YjhhNjsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjAsMTg0LDE2NiwuMTQpOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTdHVkZW50cyB0YWJsZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmlucy1kYXNoLXRhYmxlLXJlc3BvbnNpdmUgeyBvdmVyZmxvdy14OiBhdXRvOyB9XHJcblxyXG4uaW5zLWRhc2gtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICB0aGVhZCB0ciB0aCB7XHJcbiAgICBwYWRkaW5nOiAuODc1cmVtIDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IC42OHJlbTsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAuMDhlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1icy1zZWNvbmRhcnktY29sb3IsIzZiNzI4MCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icy10ZXJ0aWFyeS1iZywjZjlmYWZiKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IsI2U1ZTdlYik7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkgLmlucy1kYXNoLXRhYmxlLXJvdyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnMtYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzIGVhc2U7XHJcbiAgICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLC4wMzUpOyB9XHJcbiAgICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XHJcbiAgICB0ZCB7IHBhZGRpbmc6IC44NzVyZW0gMS4yNXJlbTsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxyXG4gIH1cclxufVxyXG5cclxuLmlucy1kYXNoLXN0dWRlbnQtY2VsbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogLjc1cmVtOyBtaW4td2lkdGg6IDE4MHB4OyB9XHJcblxyXG4uaW5zLWRhc2gtc3R1ZGVudC1hdmF0YXIge1xyXG4gIHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDM4cHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAuODVyZW07XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE1LCAyMywgNDIsIC4xNCk7XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1zdHVkZW50LWF2YXRhci1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmlucy1kYXNoLXN0dWRlbnQtbmFtZSAgeyBmb250LXNpemU6IC44NHJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IsIzExMTgyNyk7IH1cclxuLmlucy1kYXNoLXN0dWRlbnQtZW1haWwgeyBmb250LXNpemU6IC43M3JlbTsgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwjNmI3MjgwKTsgfVxyXG5cclxuLmlucy1kYXNoLWNvdXJzZS1jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IC4ycmVtIC41OHJlbTsgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwuMTQpOyBjb2xvcjogIzkyNDAwZTtcclxuICBmb250LXNpemU6IC43cmVtOyBmb250LXdlaWdodDogNjAwO1xyXG4gIG1heC13aWR0aDogMTYwcHg7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uaW5zLWRhc2gtZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogLjI4cmVtO1xyXG4gIGZvbnQtc2l6ZTogLjc2cmVtOyBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yLCM2YjcyODApOyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGkgeyBmb250LXNpemU6IC43NnJlbTsgfVxyXG59XHJcblxyXG4uaW5zLWRhc2gtcHJvZy13cmFwIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAuNnJlbTsgbWluLXdpZHRoOiAxMzBweDsgfVxyXG5cclxuLmlucy1kYXNoLXByb2ctYmFyIHtcclxuICBmbGV4OiAxOyBoZWlnaHQ6IDZweDsgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJzLWJvcmRlci1jb2xvciwjZTVlN2ViKTsgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmlucy1kYXNoLXByb2ctZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiA2cHg7IHRyYW5zaXRpb246IHdpZHRoIC45cyBlYXNlO1xyXG4gICYuYmctc3VjY2VzcyAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCRlbWVyYWxkLCMwNTk2NjkpOyB9XHJcbiAgJi5iZy1wcmltYXJ5ICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsJHByaW1hcnksJHB1cnBsZSk7IH1cclxuICAmLmJnLXdhcm5pbmcgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywkYW1iZXIsI2Q5NzcwNik7IH1cclxuICAmLmJnLXNlY29uZGFyeSB7IGJhY2tncm91bmQ6ICM5Y2EzYWY7IH1cclxufVxyXG5cclxuLmlucy1kYXNoLXByb2ctcGN0IHtcclxuICBmb250LXNpemU6IC43M3JlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeS1jb2xvciwjNmI3MjgwKTtcclxuICBtaW4td2lkdGg6IDMycHg7XHJcbn1cclxuXHJcbi5pbnMtZGFzaC1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogLjI0cmVtIC42OHJlbTsgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IC43cmVtOyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLyBlbXB0eSBzdGF0ZVxyXG4uaW5zLWRhc2gtZW1wdHkgeyBwYWRkaW5nOiAycmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuXHJcbi5pbnMtZGFzaC1lbXB0eS1zdGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tYnMtc2Vjb25kYXJ5LWNvbG9yLCM5Y2EzYWYpO1xyXG4gIGkgeyBmb250LXNpemU6IDIuNXJlbTsgb3BhY2l0eTogLjM1OyB9XHJcbiAgcCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAuODc1cmVtOyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InstructorDashboardComponent;
})();

/***/ })

}]);
//# sourceMappingURL=8370.js.map