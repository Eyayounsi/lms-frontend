"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5591],{

/***/ 55591:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/blog/blog-details-right-sidebar/blog-details-right-sidebar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailsRightSidebarComponent: () => (/* binding */ BlogDetailsRightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let BlogDetailsRightSidebarComponent = /*#__PURE__*/(() => {
  class BlogDetailsRightSidebarComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function BlogDetailsRightSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogDetailsRightSidebarComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BlogDetailsRightSidebarComponent,
      selectors: [["app-blog-details-right-sidebar"]],
      decls: 305,
      vars: 16,
      consts: [[1, "blog-sec", "blog-details"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], ["src", "./assets/img/blog/blog-detail-image.jpg", "alt", "img", 1, "img-fluid", "rounded-2"], [1, "blog-info", "my-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "avatar", "avatar-sm", "rounded-pill", "me-2", "flex-shrink-0"], [3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/icons/tag.svg", "alt", "img", 1, "me-1"], [1, "mb-3"], [1, "p-3", "my-4", "bg-light-900", "blog-blockquote"], [1, "text-gray-9"], [1, "row"], [1, "col-lg-6"], ["src", "./assets/img/blog/blog-29.jpg", "alt", "img", 1, "img-fluid", "rounded-2"], ["src", "./assets/img/blog/blog-30.jpg", "alt", "img", 1, "img-fluid", "rounded-2"], [1, "p-3", "text-center", "text-md-start", "p-lg-4", "my-4", "bg-light-900", "rounded-2", "d-md-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "blog-avatar"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "img-fluid", "rounded-pill"], [1, "ps-md-3", "mt-2", "mt-md-0"], [1, "text-secondary", "mb-1"], [1, "mb-1", "fs-18"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "previous-post", "d-flex", "flex-column"], ["href", "javascript:void(0);", 1, "fs-14", "fw-medium", "mb-1"], [1, "isax", "isax-arrow-left", "me-1"], [1, "fs-14", "d-none", "d-md-flex"], [1, "next-post", "d-flex", "flex-column", "text-end"], [1, "isax", "isax-arrow-right-1", "ms-1"], [1, "blog-widget"], [1, "fs-18", "mb-3"], [1, "latest-tags"], [1, "tags", "d-flex", "flex-wrap"], ["href", "javascript:void(0);", 1, "tag", "rounded-1", "p-2", "fs-10", "fw-medium", "d-flex"], [1, "blog-reviews", "mb-3"], [1, "mb-3", "fs-18"], [1, "review-item", "shadow-none", "mb-3"], [1, "review-info"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "mb-2"], [1, "avatar", "avatar-lg", "me-2", "flex-shrink-0"], ["src", "assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-16", "fw-medium"], [1, "d-flex", "align-items-center", "flex-wrap", "date-info"], [1, "mb-0", "fs-14"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "d-inline-flex", "align-items-center", "me-2", "mb-2", "text-gray-5"], [1, "isax", "isax-repeat", "me-1"], [1, "mb-2", "mt-1"], [1, "d-inline-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "text-gray-5", "d-inline-flex", "align-items-center", "me-3", "fs-14"], [1, "isax", "isax-like-15", "me-1"], [1, "isax", "isax-dislike5", "me-1"], [1, "isax", "isax-heart5", "text-danger", "me-1"], [1, "review-item", "shadow-none", "mb-0"], ["src", "assets/img/user/user-26.jpg", "alt", "img", 1, "rounded-circle"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "d-inline-flex", "align-items-center", "mb-2", "text-gray-5"], [1, "review-info", "border-0", "bg-light-900", "reply", "mt-4", "p-3", "rounded-2"], ["src", "assets/img/user/user-25.jpg", "alt", "img", 1, "rounded-circle"], [1, "mb-2"], [1, "comment"], [1, "form-label", "mb-1"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "col-lg-12"], [1, "form-control"], [1, "custom_check"], ["type", "checkbox", "name", "select_specialist"], [1, "checkmark"], [1, "btn", "btn-secondary"], [1, "col-lg-4", "sidebar-left", "mt-4", "mt-lg-0", "theiaStickySidebar"], [1, "search-widget", "blog-search", "blog-widget"], [1, "search-form"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control"], ["type", "submit", 1, "search-btn"], [1, "isax", "isax-search-normal-1"], [1, "categories-list"], ["href", "javascript:void(0);"], [1, "isax", "isax-arrow-right-3", "fs-14", "text-secondary", "fw-bold"], [1, "float-end"], [1, "recent-blog-list"], [1, "post-thumb"], ["src", "assets/img/blog/recent-blog-1.jpg", "alt", "Img", 1, "img-fluid"], [1, "post-info"], [1, "text-truncate", "line-clamb-2"], ["src", "assets/img/icons/calendar2.svg", "alt", "Img", 1, "img-fluid", "me-1"], ["src", "assets/img/blog/recent-blog-2.jpg", "alt", "Img", 1, "img-fluid"], [1, "mb-0"], ["src", "assets/img/blog/recent-blog-3.jpg", "alt", "Img", 1, "img-fluid"], [1, "blog-widget", "mb-0"], [1, "card-body"]],
      template: function BlogDetailsRightSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "ul", 6)(7, "li")(8, "div", 7)(9, "span")(10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p")(13, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "John Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Programming, Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Learn Web App Development from Experts in 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Web app development continues to be one of the most sought-after skills in the tech industry, and 2024 is the perfect year to start your journey. With businesses across the globe increasingly relying on web applications for their operations, the demand for skilled developers is at an all-time high. From lucrative job opportunities to the chance to work on cutting-edge technologies, learning web app development opens doors to a wide array of possibilities. Emerging trends like Progressive Web Apps (PWAs), serverless architectures, and AI integration are transforming the field, making it an exciting time to dive in.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13)(28, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "To succeed in web app development, it\u2019s crucial to master a range of skills. On the frontend, knowledge of HTML5, CSS3, and JavaScript is foundational, along with frameworks like React or Vue.js. For backend development, expertise in Node.js, Python (Django or Flask), or PHP is essential. Familiarity with databases, including SQL and NoSQL options like MongoDB and PostgreSQL, is equally important. Tools like Git for version control and Jest or Selenium for testing round out the technical skill set. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15)(31, "div", 16)(32, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16)(35, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "One of the key advantages of starting in 2024 is the availability of advanced tools, frameworks, and learning resources. Frameworks like React, Angular, and Vue.js have matured, making development more efficient and user-friendly. Additionally, the rise of online platforms and boot camps provides access to high-quality training, whether you're a beginner or an experienced programmer. The developer community is also thriving, with frequent conferences, virtual meetups, and forums that offer networking and collaborative opportunities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "If you\u2019re ready to embark on this exciting journey, now is the time to invest in your future. With expert mentorship, practical experience, and a commitment to continuous learning, you can unlock a world of opportunities in web app development in 2024 and beyond.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 19)(42, "div", 20)(43, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 22)(46, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "h5", 24)(49, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Robert Hollenbeck");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "I am experienced project manager and consultant with a rich background in digital project execution and freelance talent acquisition. With over 10 years in the industry, I have mastered the art of identifying and collaborating with top-tier freelance talent across various fields including technology, marketing, and creative services.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 25)(54, "div", 26)(55, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Previous Post");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Transform Education with the Power of an LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 30)(61, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Previous Post");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Revolutionize Learning with a Modern LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 32)(67, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Latest Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 34)(70, "ul", 35)(71, "li")(72, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li")(75, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li")(78, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 37)(81, "h5", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 39)(84, "div", 40)(85, "div", 41)(86, "div", 42)(87, "span", 43)(88, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div")(91, "h5", 45)(92, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Adrian Hendriques");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 46)(95, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "I highly recommend to anyone looking to learn . Their passion for the subject and dedication to students make them an outstanding instructor. I would definitely take another course with them in the future.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 51)(103, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "21");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 56)(113, "div", 40)(114, "div", 41)(115, "div", 42)(116, "span", 43)(117, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div")(120, "h5", 45)(121, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Adrian Hendriques");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 46)(124, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "a", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "While I learned a lot from this course, I feel like I could have used more practical examples or exercises that apply the theory. The course focused a lot on lecture-based content and could have incorporated more real-world scenarios.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 51)(132, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "21");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 59)(142, "div", 41)(143, "div", 42)(144, "span", 43)(145, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "img", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div")(148, "h6", 45)(149, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Rolands Granger");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 46)(152, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "p", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Thanks! Best luck for Future");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 51)(160, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "21");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 62)(170, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Leave a Comment");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "form")(173, "div", 15)(174, "div", 16)(175, "div", 12)(176, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 16)(180, "div", 12)(181, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 66)(185, "div", 12)(186, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Comment");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "textarea", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 66)(190, "div", 12)(191, "label", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "input", 69)(193, "span", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Save my name & email in this browser for the next time I comment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 66)(196, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 72)(199, "div", 73)(200, "div")(201, "h5", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "form", 74)(204, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "input", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "button", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "i", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 32)(209, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 79)(212, "h6")(213, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, " Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "04");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "h6")(219, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, " Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "h6")(225, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, " Graphics Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "14");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "h6")(231, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](232, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, " Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "h6")(237, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](238, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, " Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 32)(243, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Recent Blogs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "ul", 83)(246, "li")(247, "div", 84)(248, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](249, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 86)(251, "h6", 87)(252, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](255, "img", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "li")(258, "div", 84)(259, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](260, "img", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 86)(262, "h6", 87)(263, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](266, "img", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "16 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "li", 90)(269, "div", 84)(270, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "img", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 86)(273, "h6", 87)(274, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](277, "img", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "12 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "div", 92)(280, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "Latest Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 93)(283, "ul", 34)(284, "li")(285, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "li")(288, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Javascript");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "li")(291, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Benefits");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "li")(294, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](295, "Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "li")(297, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "li")(300, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "Career Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "li")(303, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Guidelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BlogDetailsRightSidebarComponent;
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
//# sourceMappingURL=5591.js.map