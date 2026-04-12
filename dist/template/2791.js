"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2791],{

/***/ 62791:
/*!************************************************************************************************!*\
  !*** ./src/app/features/blog/blog-details-left-sidebar/blog-details-left-sidebar.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailsLeftSidebarComponent: () => (/* binding */ BlogDetailsLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let BlogDetailsLeftSidebarComponent = /*#__PURE__*/(() => {
  class BlogDetailsLeftSidebarComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function BlogDetailsLeftSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogDetailsLeftSidebarComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BlogDetailsLeftSidebarComponent,
      selectors: [["app-blog-details-left-sidebar"]],
      decls: 305,
      vars: 16,
      consts: [[1, "blog-sec", "blog-details"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-4", "sidebar-left", "mt-4", "mt-lg-0", "theiaStickySidebar"], [1, "search-widget", "blog-search", "blog-widget"], [1, "mb-3", "fs-18"], [1, "search-form"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control"], ["type", "submit", 1, "search-btn"], [1, "isax", "isax-search-normal-1"], [1, "blog-widget"], [1, "fs-18", "mb-3"], [1, "categories-list"], ["href", "javascript:void(0);"], [1, "isax", "isax-arrow-right-3", "fs-14", "text-secondary", "fw-bold"], [1, "float-end"], [1, "recent-blog-list"], [1, "post-thumb"], [3, "routerLink"], ["src", "assets/img/blog/recent-blog-1.jpg", "alt", "Img", 1, "img-fluid"], [1, "post-info"], [1, "text-truncate", "line-clamb-2"], ["src", "assets/img/icons/calendar2.svg", "alt", "Img", 1, "img-fluid", "me-1"], ["src", "assets/img/blog/recent-blog-2.jpg", "alt", "Img", 1, "img-fluid"], [1, "mb-0"], ["src", "assets/img/blog/recent-blog-3.jpg", "alt", "Img", 1, "img-fluid"], [1, "card-body"], [1, "latest-tags"], ["href", "javascript:void(0);", 1, "tag", "rounded-1", "p-2", "fs-10", "fw-medium", "d-flex"], [1, "col-lg-8"], ["src", "./assets/img/blog/blog-detail-image.jpg", "alt", "img", 1, "img-fluid", "rounded-2"], [1, "blog-info", "my-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "avatar", "avatar-sm", "rounded-pill", "me-2", "flex-shrink-0"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/icons/tag.svg", "alt", "img", 1, "me-1"], [1, "mb-3"], [1, "p-3", "my-4", "bg-light-900", "blog-blockquote"], [1, "text-gray-9"], [1, "row"], [1, "col-lg-6"], ["src", "./assets/img/blog/blog-29.jpg", "alt", "img", 1, "img-fluid", "rounded-2"], ["src", "./assets/img/blog/blog-30.jpg", "alt", "img", 1, "img-fluid", "rounded-2"], [1, "p-3", "text-center", "text-md-start", "p-lg-4", "my-4", "bg-light-900", "rounded-2", "d-md-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "blog-avatar"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "img-fluid", "rounded-pill"], [1, "ps-md-3", "mt-2", "mt-md-0"], [1, "text-secondary", "mb-1"], [1, "mb-1", "fs-18"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "previous-post", "d-flex", "flex-column"], ["href", "javascript:void(0);", 1, "fs-14", "fw-medium", "mb-1"], [1, "isax", "isax-arrow-left", "me-1"], [1, "fs-14", "d-none", "d-md-flex"], [1, "next-post", "d-flex", "flex-column", "text-end"], [1, "isax", "isax-arrow-right-1", "ms-1"], [1, "tags", "d-flex", "flex-wrap"], [1, "blog-reviews", "mb-3"], [1, "review-item", "shadow-none", "mb-3"], [1, "review-info"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "mb-2"], [1, "avatar", "avatar-lg", "me-2", "flex-shrink-0"], ["src", "assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-circle"], [1, "fs-16", "fw-medium"], [1, "d-flex", "align-items-center", "flex-wrap", "date-info"], [1, "mb-0", "fs-14"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "d-inline-flex", "align-items-center", "me-2", "mb-2", "text-gray-5"], [1, "isax", "isax-repeat", "me-1"], [1, "mb-2", "mt-1"], [1, "d-inline-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "text-gray-5", "d-inline-flex", "align-items-center", "me-3", "fs-14"], [1, "isax", "isax-like-15", "me-1"], [1, "isax", "isax-dislike5", "me-1"], [1, "isax", "isax-heart5", "text-danger", "me-1"], [1, "review-item", "shadow-none", "mb-0"], ["src", "assets/img/user/user-26.jpg", "alt", "img", 1, "rounded-circle"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "d-inline-flex", "align-items-center", "mb-2", "text-gray-5"], [1, "review-info", "border-0", "bg-light-900", "reply", "mt-4", "p-3", "rounded-2"], ["src", "assets/img/user/user-25.jpg", "alt", "img", 1, "rounded-circle"], [1, "mb-2"], [1, "comment"], [1, "form-label", "mb-1"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "col-lg-12"], [1, "form-control"], [1, "custom_check"], ["type", "checkbox", "name", "select_specialist"], [1, "checkmark"], [1, "btn", "btn-secondary"]],
      template: function BlogDetailsLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6)(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "h6")(18, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "04");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h6")(24, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6")(30, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Graphics Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "14");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h6")(36, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h6")(42, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 11)(48, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Recent Blogs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ul", 17)(51, "li")(52, "div", 18)(53, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 21)(56, "h6", 22)(57, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "li")(63, "div", 18)(64, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 21)(67, "h6", 22)(68, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "16 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "li", 25)(74, "div", 18)(75, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 21)(78, "h6", 22)(79, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "12 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 11)(85, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Latest Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 27)(88, "ul", 28)(89, "li")(90, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li")(93, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Javascript");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "li")(96, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Benefits");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li")(99, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "li")(102, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "li")(105, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Career Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "li")(108, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Guidelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 32)(113, "ul", 33)(114, "li")(115, "div", 34)(116, "span")(117, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "p")(120, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "John Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Programming, Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "h5", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Learn Web App Development from Experts in 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Web app development continues to be one of the most sought-after skills in the tech industry, and 2024 is the perfect year to start your journey. With businesses across the globe increasingly relying on web applications for their operations, the demand for skilled developers is at an all-time high. From lucrative job opportunities to the chance to work on cutting-edge technologies, learning web app development opens doors to a wide array of possibilities. Emerging trends like Progressive Web Apps (PWAs), serverless architectures, and AI integration are transforming the field, making it an exciting time to dive in.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 39)(135, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "To succeed in web app development, it\u2019s crucial to master a range of skills. On the frontend, knowledge of HTML5, CSS3, and JavaScript is foundational, along with frameworks like React or Vue.js. For backend development, expertise in Node.js, Python (Django or Flask), or PHP is essential. Familiarity with databases, including SQL and NoSQL options like MongoDB and PostgreSQL, is equally important. Tools like Git for version control and Jest or Selenium for testing round out the technical skill set. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 41)(138, "div", 42)(139, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 42)(142, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "img", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "One of the key advantages of starting in 2024 is the availability of advanced tools, frameworks, and learning resources. Frameworks like React, Angular, and Vue.js have matured, making development more efficient and user-friendly. Additionally, the rise of online platforms and boot camps provides access to high-quality training, whether you're a beginner or an experienced programmer. The developer community is also thriving, with frequent conferences, virtual meetups, and forums that offer networking and collaborative opportunities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "If you\u2019re ready to embark on this exciting journey, now is the time to invest in your future. With expert mentorship, practical experience, and a commitment to continuous learning, you can unlock a world of opportunities in web app development in 2024 and beyond.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 45)(149, "div", 46)(150, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "img", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 48)(153, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Author");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "h5", 50)(156, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Robert Hollenbeck");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "I am experienced project manager and consultant with a rich background in digital project execution and freelance talent acquisition. With over 10 years in the industry, I have mastered the art of identifying and collaborating with top-tier freelance talent across various fields including technology, marketing, and creative services.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 51)(161, "div", 52)(162, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, " Previous Post");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Transform Education with the Power of an LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 56)(168, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Previous Post");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Revolutionize Learning with a Modern LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 11)(174, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Latest Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 28)(177, "ul", 58)(178, "li")(179, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "li")(182, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "li")(185, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 59)(188, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "div", 60)(191, "div", 61)(192, "div", 62)(193, "div", 63)(194, "span", 64)(195, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "img", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div")(198, "h5", 66)(199, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "Adrian Hendriques");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 67)(202, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "a", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "p", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "I highly recommend to anyone looking to learn . Their passion for the subject and dedication to students make them an outstanding instructor. I would definitely take another course with them in the future.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "div", 72)(210, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "21");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 77)(220, "div", 61)(221, "div", 62)(222, "div", 63)(223, "span", 64)(224, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](225, "img", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div")(227, "h5", 66)(228, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Adrian Hendriques");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 67)(231, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "a", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "p", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "While I learned a lot from this course, I feel like I could have used more practical examples or exercises that apply the theory. The course focused a lot on lecture-based content and could have incorporated more real-world scenarios.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 72)(239, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "21");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](243, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](246, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 80)(249, "div", 62)(250, "div", 63)(251, "span", 64)(252, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "img", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div")(255, "h6", 66)(256, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "Rolands Granger");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 67)(259, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "2 days ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "a", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "p", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Thanks! Best luck for Future");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 72)(267, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](268, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "21");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](274, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "45");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 83)(277, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Leave a Comment");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "form")(280, "div", 41)(281, "div", 42)(282, "div", 38)(283, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](285, "input", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 42)(287, "div", 38)(288, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](290, "input", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "div", 87)(292, "div", 38)(293, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "Comment");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](295, "textarea", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "div", 87)(297, "div", 38)(298, "label", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](299, "input", 90)(300, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "Save my name & email in this browser for the next time I comment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "div", 87)(303, "button", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
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
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BlogDetailsLeftSidebarComponent;
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
//# sourceMappingURL=2791.js.map