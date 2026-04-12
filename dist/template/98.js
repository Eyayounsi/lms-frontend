"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[98],{

/***/ 30098:
/*!*****************************************************!*\
  !*** ./src/app/shared/service/data/data.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ 92643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63855);




let DataService = /*#__PURE__*/(() => {
  class DataService {
    http;
    messages = '';
    message;
    constructor(http) {
      this.http = http;
      this.message = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.messages);
    }
    nextmessage(data) {
      this.message.next(data);
    }
    getInstructorCourseList() {
      return this.http.get('assets/JSON/instructorCourseList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getInstructorQuizResult() {
      return this.http.get('assets/JSON/instructor-quiz-result.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getPayout() {
      return this.http.get('assets/JSON/payouts.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getStudentList() {
      return this.http.get('assets/JSON/studentList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getInstructionStatement() {
      return this.http.get('assets/JSON/instruction-statement.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getInstructionTicket() {
      return this.http.get('assets/JSON/instructor-ticket.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getInstructionPlan() {
      return this.http.get('assets/JSON/instruction-plan.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getStudentOrderHistory() {
      return this.http.get('assets/JSON/student-order-history.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    getStudentRefferal() {
      return this.http.get('assets/JSON/student-refferal.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    allCourseList() {
      return this.http.get('assets/JSON/courseList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    gridCourseList() {
      return this.http.get('assets/JSON/courseGrid.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    allInstructorList() {
      return this.http.get('assets/JSON/allInstructorList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    allInstructorGrid() {
      return this.http.get('assets/JSON/allInstructorGrid.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    instructorTicket1() {
      return this.http.get('assets/JSON/instructorTicket1.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    instructorTicket4() {
      return this.http.get('assets/JSON/instructorTicket4.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    instructorTicket2() {
      return this.http.get('assets/JSON/instructorTicket2.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    instructorTicket3() {
      return this.http.get('assets/JSON/instructorTicket3.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    latestTransactionsList() {
      return this.http.get('assets/JSON/latestTransaction.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    InstructorWithdraw() {
      return this.http.get('assets/JSON/instructor-withdraw.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
        return res;
      }));
    }
    welcomeLogin = [{
      img: 'assets/img/auth/auth-1.svg',
      content1: 'Welcome to',
      content2: 'Dreams',
      content3: 'LMS',
      content4: 'Courses.',
      paragraph: 'Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.'
    }, {
      img: 'assets/img/auth/auth-1.svg',
      content1: 'Welcome to',
      content2: 'Dreams',
      content3: 'LMS',
      content4: 'Courses.',
      paragraph: 'Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.'
    }, {
      img: 'assets/img/auth/auth-1.svg',
      content1: 'Welcome to',
      content2: 'Dreams',
      content3: 'LMS',
      content4: 'Courses.',
      paragraph: 'Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.'
    }];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sideBar = [{
      tittle: 'Home',
      base: 'index',
      base2: 'index-two',
      base3: 'index-three',
      base4: 'index-four',
      base5: 'index-five',
      base6: 'index-six',
      showAsTab: false,
      separateRoute: false,
      menu: [{
        menuValue: 'Home',
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.home,
        img: 'home-01.jpg',
        hasSubRoute: false,
        showSubRoute: false,
        base: 'index',
        subMenus: []
      }, {
        menuValue: 'Home Two',
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.home2,
        img: 'home-02.jpg',
        hasSubRoute: false,
        showSubRoute: false,
        base: 'index-two',
        subMenus: []
      }, {
        menuValue: 'Home Three',
        img: 'home-03.jpg',
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.home3,
        hasSubRoute: false,
        showSubRoute: false,
        base: 'index-three',
        subMenus: []
      }, {
        menuValue: 'Home Four',
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.home4,
        img: 'home-04.jpg',
        hasSubRoute: false,
        showSubRoute: false,
        base: 'index-four',
        subMenus: []
      }, {
        menuValue: 'Home Five',
        img: 'home-05.jpg',
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.home5,
        hasSubRoute: false,
        showSubRoute: false,
        base: 'index-five',
        subMenus: []
      }, {
        menuValue: 'Home Six',
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.home6,
        img: 'home-06.jpg',
        hasSubRoute: false,
        showSubRoute: false,
        base: 'index-six',
        subMenus: []
      }]
    }, {
      tittle: "Courses",
      base: "courses",
      showAsTab: false,
      separateRoute: false,
      menu: [{
        menuValue: "Course",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'course-grid',
        base1: 'course-list',
        base2: '',
        base3: '',
        base4: '',
        base5: '',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "Course Grid",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseGrid,
          page: 'course-grid',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Course List",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseList,
          page: 'course-list',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Course Category",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'course-category',
        base1: 'course-category-2',
        base2: 'course-category-3',
        base3: '',
        base4: '',
        base5: '',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "Course Category",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseCategory,
          page: 'course-category',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Course Category 2",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseCategory2,
          page: 'course-category-2',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Course Category 3",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseCategory3,
          page: 'course-category-3',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Course Details",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'course-details',
        base1: 'course-details',
        base2: '',
        base3: '',
        base4: '',
        base5: '',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "Course Details",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseDetails,
          page: 'course-details',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Course Details 2",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseDetails2,
          page: 'course-details-2',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Course Resume",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseResume,
        page: 'course-resume',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Course Watch",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.courseWatch,
        page: 'course-watch',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Course Cart",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.cart,
        page: 'cart',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Course Checkout",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.checkout,
        page: 'checkout',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Add Course",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.addCourse,
        hasSubRoute: false,
        showSubRoute: false,
        page: "add-course",
        subMenus: []
      }]
    }, {
      tittle: "Dashboard",
      base: "instructor",
      base2: "student",
      showAsTab: false,
      separateRoute: false,
      menu: [{
        menuValue: "Instructor",
        hasSubRoute: true,
        showSubRoute: true,
        base: 'instructor-dashboard',
        base1: 'instructor-profile',
        base2: 'instructor-course',
        base5: 'students-grid',
        base6: 'instructor-quiz',
        base7: 'instructor-quiz-results',
        base8: 'instructor-certificate',
        base9: 'instructor-earnings',
        base10: 'instructor-payouts',
        base11: 'instructor-statements',
        base12: 'instructor-tickets',
        base14: 'students-list',
        base15: 'students-details',
        showAsTab2: false,
        subMenus: [{
          menuValue: "Dashboard",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructor_dashboard,
          page: 'instructor-dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "My Profile",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorProfile,
          page: 'instructor-profile',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Course",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorCourse,
          page: 'instructor-course',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Student",
          hasSubRoute: true,
          showSubRoute: true,
          showAsTab2: false,
          page: 'students-grid',
          page1: 'students-list',
          page2: 'students-details',
          subMenus: [{
            menuValue: "Student Grid",
            route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentsGrid,
            page: "students-grid",
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: []
          }, {
            menuValue: "Student List",
            route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentsList,
            page: "students-list",
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: []
          }, {
            menuValue: "Student Details",
            route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentsDetails,
            page: "students-details",
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: []
          }]
        }, {
          menuValue: "Quiz",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorQuiz,
          page: 'instructor-quiz',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Resultats Quiz",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorQuizResult,
          page: 'instructor-quiz-results',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Certificats",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorCertificate,
          page: 'instructor-certificate',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Revenus",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructor_payouts,
          page: 'instructor-payouts',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Tickets support",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorTickets,
          page: 'instructor-tickets',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Parametres",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorSettings,
          page: 'settings',
          last: 'instructor-settings',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Student",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'student-dashboard',
        base1: 'student-profile',
        base2: 'student-courses',
        base3: 'student-certificate',
        base4: 'student-wishlist',
        base5: 'student-reviews',
        base6: 'student-quiz',
        base7: 'student-order-history',
        base8: 'student-referral',
        base9: 'student-message',
        base10: 'student-tickets',
        subMenus: [{
          menuValue: "Student Dashboard",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.students_Dashboard,
          page: 'student-dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "My Profile",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentProfile,
          page: 'student-profile',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Enrolled Course",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentCourses,
          page: 'student-courses',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "My Certificates",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.student_Certificate,
          page: 'student-certificate',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Wishlist",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.student_Wishlist,
          page: 'student-wishlist',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Reviews",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentReviews,
          page: 'student-reviews',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "My Quiz Attempts",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentQuiz,
          page: 'student-quiz',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Order History",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentOrderHistory,
          page: 'student-order-history',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Referrals",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.students_referral,
          page: 'student-referral',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Messages",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentsMessage,
          page: 'student-message',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Support Ticket",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.students_tickets,
          page: 'student-tickets',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Settings",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.studentSettings,
          page: 'settings',
          last: 'student-settings',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }]
    }, {
      tittle: "Pages",
      showAsTab: false,
      separateRoute: false,
      base: 'pages',
      base3: 'about-us',
      menu: [{
        menuValue: "Instructors",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'instructor-grid',
        base1: 'instructor-list',
        base2: 'instructor-details',
        base3: '',
        base4: '',
        base5: '',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "Instructor Grid",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorGrid,
          page: 'instructor-grid',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Instructor List",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorList,
          page: 'instructor-list',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Instructor Details",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.instructorDetails,
          page: 'instructor-details',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "About Us",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.aboutUs,
        page: 'about-us',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Contact Us",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.contactUs,
        page: 'contact-us',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Notification",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.page_notifications,
        page: 'notifications',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Become an Instructor",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.becomeAnExpert,
        page: 'become-an-expert',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Testimonials",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.testimonial,
        page: 'testimonial',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Authentication",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'login',
        base1: 'register',
        base2: 'forgot-password',
        base3: 'set-password',
        base4: 'otp',
        base5: 'lock-screen',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "Login",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.login,
          page: 'login',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Register",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.register,
          page: 'register',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Forgot Password",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.forgot_password,
          page: 'forgot-password',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Set Password",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.setPassword,
          page: 'set-password',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "OTP",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.otp,
          page: 'otp',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Lock Screen",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.lockScreen,
          page: 'lock-screen',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Error",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: '404',
        base1: '500',
        base2: '',
        base3: '',
        base4: '',
        base5: '',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "404 Error",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.error_404,
          page: '404',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "500 Error",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.error_500,
          page: '500',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Pricing Plan",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.page_pricing_plan,
        page: 'pricing-plan',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "FAQ",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.page_faq,
        page: 'faq',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Coming Soon",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.comming_soon,
        page: 'coming-soon',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Under Construction",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.under_construction,
        page: 'under-construction',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Terms & Conditions",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.page_term_condition,
        page: 'term-condition',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }, {
        menuValue: "Privacy Policy",
        route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.page_privacy_policy,
        page: 'privacy-policy',
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: []
      }]
    }, {
      tittle: "Blog",
      showAsTab: false,
      separateRoute: false,
      base: 'blog',
      menu: [{
        menuValue: "Blog Layouts",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'blog-grid',
        base1: 'blog-2-grid',
        base2: 'blog-3-grid',
        base3: 'blog-carousal',
        base4: 'blog-masonry',
        base5: 'blog-left-sidebar',
        base6: 'blog-right-sidebar',
        base7: '',
        subMenus: [{
          menuValue: "Blog 1 Grid",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_grid,
          page: 'blog-grid',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog 2 Grid",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_grid2,
          page: 'blog-2-grid',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog 3 Grid",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_grid3,
          page: 'blog-3-grid',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog Carousal",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_carousal,
          page: 'blog-carousal',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog Mansory",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_masonry,
          page: 'blog-masonry',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog Left Sidebar",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_left_sidebar,
          page: 'blog-left-sidebar',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog Right Sidebar",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_right_sidebar,
          page: 'blog-right-sidebar',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }, {
        menuValue: "Blog Details",
        hasSubRoute: true,
        showSubRoute: true,
        showAsTab2: false,
        base: 'blog-details',
        base1: 'blog-details-left-sidebar',
        base2: 'blog-details-right-sidebar',
        base3: '',
        base4: '',
        base5: '',
        base6: '',
        base7: '',
        subMenus: [{
          menuValue: "Blog Details",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_details,
          page: 'blog-details',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog Details Sidebar Left",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_details_left_sidebar,
          page: 'blog-details-left-sidebar',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }, {
          menuValue: "Blog Details Sidebar Right",
          route: _routes_routes__WEBPACK_IMPORTED_MODULE_2__.routes.blog_details_right_sidebar,
          page: 'blog-details-right-sidebar',
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: []
        }]
      }]
    }];
    static ɵfac = function DataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
  }
  return DataService;
})();

/***/ })

}]);
//# sourceMappingURL=98.js.map