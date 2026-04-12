"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[579],{

/***/ 40579:
/*!*******************************************************************************!*\
  !*** ./src/app/features/courses/course-checkout/course-checkout.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseCheckoutComponent: () => (/* binding */ CourseCheckoutComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let CourseCheckoutComponent = /*#__PURE__*/(() => {
  class CourseCheckoutComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function CourseCheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseCheckoutComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CourseCheckoutComponent,
      selectors: [["app-course-checkout"]],
      decls: 216,
      vars: 2,
      consts: [[1, "content"], [1, "container"], [1, "checkout-content"], [1, "row"], [1, "col-lg-8"], [1, "checkout-item-1"], [1, "border-bottom", "pb-3", "mb-3"], [1, "col-md-6"], [1, "input-block"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-md-12"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "d-flex"], ["type", "checkbox", "value", "", "id", "flexCheckDefault1", 1, "form-check-input"], ["for", "flexCheckDefault1", 1, "form-check-label"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["role", "tablist", 1, "nav-tabs", "mb-3", "nav-justified", "border-0", "nav-style-1", "d-sm-flex", "d-block"], [1, "nav-item", "active"], ["data-bs-toggle", "tab", "role", "tab", "href", "#overview", "aria-selected", "false", 1, "btn", "nav-link", "p-3", "active"], [1, "d-flex", "justify-content-center", "align-items-center"], ["src", "assets/img/icons/card.svg", "alt", "card", 1, "img-fluid", "me-2"], [1, "fw-medium"], [1, "nav-item"], ["data-bs-toggle", "tab", "role", "tab", "href", "#notes", "aria-selected", "false", 1, "btn", "nav-link", "p-3"], ["src", "assets/img/icons/paypal-2.svg", "alt", "card", 1, "img-fluid", "me-2"], ["data-bs-toggle", "tab", "role", "tab", "href", "#faq", "aria-selected", "true", 1, "btn", "nav-link", "p-3"], ["src", "assets/img/icons/stripe.svg", "alt", "card", 1, "img-fluid", "me-2"], [1, "tab-content"], ["id", "overview", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "notes", "role", "tabpanel", 1, "tab-pane"], ["id", "faq", "role", "tabpanel", 1, "tab-pane"], [1, "col-lg-4"], [1, "checkout-item-2"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "checkout-item-3", "bg-light", "p-3", "rounded-3", "border", "mb-3"], [1, "row", "row-gap-2", "mb-3"], [1, "col-md-12", "d-flex", "align-items-center"], [1, "order-img", "flex-shrink-0", "me-3"], ["src", "assets/img/course/course-01.jpg", "alt", "img", 1, "img-fluid", "h-100", "w-100"], ["href", "javascript:void(0);", 1, "btn", "p-1", "rounded-circle"], [1, "isax", "isax-trash"], [1, "mb-2"], [3, "routerLink"], [1, "text-secondary"], [1, "row", "row-gap-2"], ["src", "assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid", "h-100", "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "text-gray-9", "fw-medium", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "total", "d-flex", "align-items-center", "justify-content-between"]],
      template: function CourseCheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Billing Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "div", 8)(12, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7)(18, "div", 8)(19, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12)(25, "div", 8)(26, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Phone Number (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 12)(30, "div", 8)(31, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Address Line 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 12)(37, "div", 8)(38, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Address Line 2 (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 13)(42, "div", 8)(43, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 13)(49, "div", 8)(50, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 13)(56, "div", 8)(57, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 12)(63, "div", 14)(64, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Shipping address is the same as my billing address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 18)(69, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Save this information for next time ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 5)(74, "div", 6)(75, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Payment Method ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "ul", 21)(78, "li", 22)(79, "a", 23)(80, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "li", 27)(85, "a", 28)(86, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Paypal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "li", 27)(91, "a", 30)(92, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Stripe");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 32)(97, "div", 33)(98, "div", 3)(99, "div", 7)(100, "div", 8)(101, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Card Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 7)(107, "div", 8)(108, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Name on Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](112, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 7)(114, "div", 8)(115, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Expiry Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 7)(121, "div", 8)(122, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Security Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 12)(128, "div", 34)(129, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Pay $200.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 36)(132, "div", 3)(133, "div", 7)(134, "div", 8)(135, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 7)(141, "div", 8)(142, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 12)(148, "div", 34)(149, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Pay $200.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 37)(152, "div", 3)(153, "div", 7)(154, "div", 8)(155, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 7)(161, "div", 8)(162, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 12)(168, "div", 34)(169, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Pay $200.25");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 38)(172, "div", 39)(173, "div", 40)(174, "h5", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Order Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 42)(177, "div", 43)(178, "div", 44)(179, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div")(184, "h6", 49)(185, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Information About UI/UX Design Degree");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "h6", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "$120");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 52)(190, "div", 44)(191, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "img", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](194, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div")(196, "h6", 49)(197, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "Sketch from A to Z (2024): Become an app designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "h6", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "$160");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 54)(202, "p", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Sub Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "p", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "$200.20");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 56)(207, "p", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Tax (VAT)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "p", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "$25");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 57)(212, "h6", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "h4", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "$225.20");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](185);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CourseCheckoutComponent;
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
//# sourceMappingURL=579.js.map