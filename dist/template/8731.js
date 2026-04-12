"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8731],{

/***/ 49953:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm2022/ngx-slick-carousel.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlickCarouselComponent: () => (/* binding */ SlickCarouselComponent),
/* harmony export */   SlickCarouselModule: () => (/* binding */ SlickCarouselModule),
/* harmony export */   SlickItemDirective: () => (/* binding */ SlickItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);





/**
 * Slick component
 */
const _c0 = ["*"];
let SlickCarouselComponent = /*#__PURE__*/(() => {
  class SlickCarouselComponent {
    config;
    afterChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.output)();
    beforeChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.output)();
    breakpoint = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.output)();
    destroy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.output)();
    init = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.output)();
    $instance;
    // access from parent component can be a problem with change detection timing. Please use afterChange output
    currentIndex = 0;
    slides = [];
    initialized = false;
    _removedSlides = [];
    _addedSlides = [];
    el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
    isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
    /**
     * On component destroy
     */
    ngOnDestroy() {
      this.unslick();
    }
    ngAfterViewInit() {
      this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     */
    ngAfterViewChecked() {
      if (this.isServer) {
        return;
      }
      if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
        const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
        if (!this.initialized) {
          if (nextSlidesLength > 0) {
            this.initSlick();
          }
          // if nextSlidesLength is zere, do nothing
        } else if (nextSlidesLength === 0) {
          // unslick case
          this.unslick();
        } else {
          this._addedSlides.forEach(slickItem => {
            this.slides.push(slickItem);
            this.$instance.slick('slickAdd', slickItem.el.nativeElement);
          });
          this._addedSlides = [];
          this._removedSlides.forEach(slickItem => {
            const idx = this.slides.indexOf(slickItem);
            this.slides = this.slides.filter(s => s !== slickItem);
            this.$instance.slick('slickRemove', idx);
          });
          this._removedSlides = [];
        }
      }
    }
    /**
     * init slick
     */
    initSlick() {
      this.slides = this._addedSlides;
      this._addedSlides = [];
      this._removedSlides = [];
      this.$instance = jQuery(this.el.nativeElement);
      this.$instance.on('init', (event, slick) => {
        this.zone.run(() => {
          this.init.emit({
            event,
            slick
          });
        });
      });
      this.$instance.slick(this.config);
      this.zone.run(() => {
        this.initialized = true;
        this.currentIndex = this.config?.initialSlide || 0;
      });
      this.$instance.on('afterChange', (event, slick, currentSlide) => {
        this.zone.run(() => {
          this.afterChange.emit({
            event,
            slick,
            currentSlide,
            first: currentSlide === 0,
            last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
          });
          this.currentIndex = currentSlide;
        });
      });
      this.$instance.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        this.zone.run(() => {
          this.beforeChange.emit({
            event,
            slick,
            currentSlide,
            nextSlide
          });
          this.currentIndex = nextSlide;
        });
      });
      this.$instance.on('breakpoint', (event, slick, breakpoint) => {
        this.zone.run(() => {
          this.breakpoint.emit({
            event,
            slick,
            breakpoint
          });
        });
      });
      this.$instance.on('destroy', (event, slick) => {
        this.zone.run(() => {
          this.destroy.emit({
            event,
            slick
          });
          this.initialized = false;
        });
      });
    }
    addSlide(slickItem) {
      this._addedSlides.push(slickItem);
    }
    removeSlide(slickItem) {
      this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     */
    slickGoTo(index) {
      this.$instance.slick('slickGoTo', index);
    }
    slickNext() {
      this.$instance.slick('slickNext');
    }
    slickPrev() {
      this.$instance.slick('slickPrev');
    }
    slickPause() {
      this.$instance.slick('slickPause');
    }
    slickPlay() {
      this.$instance.slick('slickPlay');
    }
    unslick() {
      if (this.$instance) {
        this.$instance.slick('unslick');
        this.$instance = undefined;
      }
      this.initialized = false;
    }
    ngOnChanges(changes) {
      if (this.initialized) {
        const config = changes['config'];
        if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
          const refresh = config.currentValue['refresh'];
          const newOptions = Object.assign({}, config.currentValue);
          delete newOptions['refresh'];
          this.$instance.slick('slickSetOption', newOptions, refresh);
        }
      }
    }
    /** @nocollapse */
    static ɵfac = function SlickCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SlickCarouselComponent)();
    };
    /** @nocollapse */
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SlickCarouselComponent,
      selectors: [["ngx-slick-carousel"]],
      inputs: {
        config: "config"
      },
      outputs: {
        afterChange: "afterChange",
        beforeChange: "beforeChange",
        breakpoint: "breakpoint",
        destroy: "destroy",
        init: "init"
      },
      exportAs: ["slick-carousel"],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => SlickCarouselComponent),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SlickCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
  }
  return SlickCarouselComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SlickItemDirective = /*#__PURE__*/(() => {
  class SlickItemDirective {
    carousel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(SlickCarouselComponent, {
      host: true
    });
    renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2);
    el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
    ngOnInit() {
      this.carousel.addSlide(this);
      if (this.isServer && this.carousel.slides.length > 0) {
        // Do not show other slides in server side rendering (broken ui can be affacted to Core Web Vitals)
        this.renderer.setStyle(this.el, 'display', 'none');
      }
    }
    ngOnDestroy() {
      this.carousel.removeSlide(this);
    }
    /** @nocollapse */
    static ɵfac = function SlickItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SlickItemDirective)();
    };
    /** @nocollapse */
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: SlickItemDirective,
      selectors: [["", "ngxSlickItem", ""]],
      standalone: false
    });
  }
  return SlickItemDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SlickCarouselModule = /*#__PURE__*/(() => {
  class SlickCarouselModule {
    /** @nocollapse */static ɵfac = function SlickCarouselModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SlickCarouselModule)();
    };
    /** @nocollapse */
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SlickCarouselModule
    });
    /** @nocollapse */
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
  return SlickCarouselModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



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
//# sourceMappingURL=8731.js.map