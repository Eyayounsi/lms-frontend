"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3339],{

/***/ 83339:
/*!***********************************************************************!*\
  !*** ./src/app/features/pages/pricing-plan/pricing-plan.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingPlanComponent: () => (/* binding */ PricingPlanComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let PricingPlanComponent = /*#__PURE__*/(() => {
  class PricingPlanComponent {
    pricingPlan = [];
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function PricingPlanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PricingPlanComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PricingPlanComponent,
      selectors: [["app-pricing-plan"]],
      decls: 254,
      vars: 4,
      consts: [[1, "pricing-plan-sec"], [1, "container"], [1, "row"], [1, "col-lg-5", "mx-auto"], [1, "text-center"], [1, "fw-medium", "text-secondary", "mb-2"], [1, "main-title", "mb-2"], [1, "text-end"], ["src", "./assets/img/icons/save-10.svg", "alt", "img"], [1, "enable-item", "d-flex", "align-items-center", "justify-content-center", "text-gray-9"], [1, "mb-0", "me-2"], [1, "form-check", "form-switch", "check-on", "m-0"], ["type", "checkbox", "id", "flexSwitchCheckChecked", 1, "form-check-input"], [1, "mb-0", "ms-2"], [1, "row", "pricing-cover"], [1, "col-xl-3", "col-md-6", "px-2", "d-flex"], [1, "pricing-item", "flex-fill"], [1, "mb-2"], [1, "fs-24", "me-1"], [1, "border-top", "pt-3", "mt-3"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-circle", "fs-5", "me-2"], [1, "btn", "btn-start-free", "w-100", 3, "routerLink"], [1, "d-flex", "align-items-center", "text-truncate", "mb-3"], [1, "fw-bold", "mb-2", "pb-2"], [1, "fw-bold", "mb-2", "pb-2", "mt-4"], [1, "table-responsive", "mt-4"], [1, "table", "table-price"], [1, "bg-transparent"], [1, "bg-primary-100", "text-primary"], ["colspan", "2", 1, "bg-primary-100", "text-primary"], [1, "basic"], [1, "border-0"], [1, "isax", "isax-tick-circle5", "fs-24", "text-success"], [1, "isax", "isax-close-circle5", "fs-24", "text-danger"]],
      template: function PricingPlanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "We keep it simple");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Choose The Right Plan");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Improve the way your work, discover a brand new tool and drop the hassle once and for all.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9)(14, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Monthly");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Annualy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h1", 17)(26, "sup", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Perfect for individuals or small teams taking their first step into online. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19)(32, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "10 active courses ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Basic course creation tools ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Student progress tracking ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "1 GB storage ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Email notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Community support ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 15)(53, "div", 16)(54, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Standard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "h1", 17)(57, "sup", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Ideal for growing institutions that need advanced tools and greater flexibility. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 19)(63, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Access to 20 courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Custom course certificates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Basic analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "10 GB storage");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Course scheduling");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Priority email and chat support");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 15)(84, "div", 16)(85, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Premium");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "h1", 17)(88, "sup", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " Designed for large-scale learning with robust features and custom branding. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 19)(94, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Unlimited courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Advanced course creation tools");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Detailed student analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "100 GB storage");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Integration with third-party tools");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Completion certificates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 15)(115, "div", 16)(116, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Benefits");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Access to slack community ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Access to support team ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Algorithmic bidding ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Keyword and ASIN harvesting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "h5", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Search term isolation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Total Sales Analytics ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Best seller rank ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Placement optimization ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Start For Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 26)(147, "table", 27)(148, "thead")(149, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Self-Employed & Freelance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " Small businesses that need accounting, invoicing or payroll ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "tbody")(156, "tr", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "td", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "tr")(165, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Separate business/personal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](168, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "tr")(174, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Track deductible mileage");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "tr")(183, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Download online banking");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "tr")(192, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Multi-device");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "tr")(201, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Create invoices & estimates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](208, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "tr")(210, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "Manage VAT");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "tr")(219, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Manage bills & payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "tr")(228, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Multiple currencies");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](233, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](235, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "tr")(237, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Create budgets");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](242, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "tr")(246, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, "Track time");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](249, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "td", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return PricingPlanComponent;
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
//# sourceMappingURL=3339.js.map