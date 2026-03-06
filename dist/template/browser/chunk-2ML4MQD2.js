import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/course-checkout/course-checkout.component.ts
var CourseCheckoutComponent = class _CourseCheckoutComponent {
  routes = routes;
  static \u0275fac = function CourseCheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseCheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseCheckoutComponent, selectors: [["app-course-checkout"]], decls: 216, vars: 2, consts: [[1, "content"], [1, "container"], [1, "checkout-content"], [1, "row"], [1, "col-lg-8"], [1, "checkout-item-1"], [1, "border-bottom", "pb-3", "mb-3"], [1, "col-md-6"], [1, "input-block"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-md-12"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "mb-3"], [1, "form-check", "d-flex"], ["type", "checkbox", "value", "", "id", "flexCheckDefault1", 1, "form-check-input"], ["for", "flexCheckDefault1", 1, "form-check-label"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["role", "tablist", 1, "nav-tabs", "mb-3", "nav-justified", "border-0", "nav-style-1", "d-sm-flex", "d-block"], [1, "nav-item", "active"], ["data-bs-toggle", "tab", "role", "tab", "href", "#overview", "aria-selected", "false", 1, "btn", "nav-link", "p-3", "active"], [1, "d-flex", "justify-content-center", "align-items-center"], ["src", "assets/img/icons/card.svg", "alt", "card", 1, "img-fluid", "me-2"], [1, "fw-medium"], [1, "nav-item"], ["data-bs-toggle", "tab", "role", "tab", "href", "#notes", "aria-selected", "false", 1, "btn", "nav-link", "p-3"], ["src", "assets/img/icons/paypal-2.svg", "alt", "card", 1, "img-fluid", "me-2"], ["data-bs-toggle", "tab", "role", "tab", "href", "#faq", "aria-selected", "true", 1, "btn", "nav-link", "p-3"], ["src", "assets/img/icons/stripe.svg", "alt", "card", 1, "img-fluid", "me-2"], [1, "tab-content"], ["id", "overview", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "notes", "role", "tabpanel", 1, "tab-pane"], ["id", "faq", "role", "tabpanel", 1, "tab-pane"], [1, "col-lg-4"], [1, "checkout-item-2"], [1, "pb-3", "border-bottom", "mb-3"], [1, "mb-0"], [1, "checkout-item-3", "bg-light", "p-3", "rounded-3", "border", "mb-3"], [1, "row", "row-gap-2", "mb-3"], [1, "col-md-12", "d-flex", "align-items-center"], [1, "order-img", "flex-shrink-0", "me-3"], ["src", "assets/img/course/course-01.jpg", "alt", "img", 1, "img-fluid", "h-100", "w-100"], ["href", "javascript:void(0);", 1, "btn", "p-1", "rounded-circle"], [1, "isax", "isax-trash"], [1, "mb-2"], [3, "routerLink"], [1, "text-secondary"], [1, "row", "row-gap-2"], ["src", "assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid", "h-100", "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "text-gray-9", "fw-medium", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "pb-3", "mb-3"], [1, "total", "d-flex", "align-items-center", "justify-content-between"]], template: function CourseCheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5");
      \u0275\u0275text(8, "Billing Address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 7)(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13, "First Name");
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "div", 8)(19, "label", 9);
      \u0275\u0275text(20, "Last Name");
      \u0275\u0275elementStart(21, "span", 10);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 8)(26, "label", 9);
      \u0275\u0275text(27, "Phone Number (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 12)(30, "div", 8)(31, "label", 9);
      \u0275\u0275text(32, "Address Line 1");
      \u0275\u0275elementStart(33, "span", 10);
      \u0275\u0275text(34, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 12)(37, "div", 8)(38, "label", 9);
      \u0275\u0275text(39, "Address Line 2 (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 13)(42, "div", 8)(43, "label", 9);
      \u0275\u0275text(44, "Country");
      \u0275\u0275elementStart(45, "span", 10);
      \u0275\u0275text(46, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 8)(50, "label", 9);
      \u0275\u0275text(51, "State");
      \u0275\u0275elementStart(52, "span", 10);
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 13)(56, "div", 8)(57, "label", 9);
      \u0275\u0275text(58, "City");
      \u0275\u0275elementStart(59, "span", 10);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 12)(63, "div", 14)(64, "div", 15);
      \u0275\u0275element(65, "input", 16);
      \u0275\u0275elementStart(66, "label", 17);
      \u0275\u0275text(67, " Shipping address is the same as my billing address ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 18)(69, "div", 15);
      \u0275\u0275element(70, "input", 19);
      \u0275\u0275elementStart(71, "label", 20);
      \u0275\u0275text(72, " Save this information for next time ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "div", 5)(74, "div", 6)(75, "h5");
      \u0275\u0275text(76, "Payment Method ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "ul", 21)(78, "li", 22)(79, "a", 23)(80, "div", 24);
      \u0275\u0275element(81, "img", 25);
      \u0275\u0275elementStart(82, "p", 26);
      \u0275\u0275text(83, "Card");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "li", 27)(85, "a", 28)(86, "div", 24);
      \u0275\u0275element(87, "img", 29);
      \u0275\u0275elementStart(88, "p", 26);
      \u0275\u0275text(89, "Paypal");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "li", 27)(91, "a", 30)(92, "div", 24);
      \u0275\u0275element(93, "img", 31);
      \u0275\u0275elementStart(94, "p", 26);
      \u0275\u0275text(95, "Stripe");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(96, "div", 32)(97, "div", 33)(98, "div", 3)(99, "div", 7)(100, "div", 8)(101, "label", 9);
      \u0275\u0275text(102, "Card Number");
      \u0275\u0275elementStart(103, "span", 10);
      \u0275\u0275text(104, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(105, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 7)(107, "div", 8)(108, "label", 9);
      \u0275\u0275text(109, "Name on Card");
      \u0275\u0275elementStart(110, "span", 10);
      \u0275\u0275text(111, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(112, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 7)(114, "div", 8)(115, "label", 9);
      \u0275\u0275text(116, "Expiry Date");
      \u0275\u0275elementStart(117, "span", 10);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(119, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 7)(121, "div", 8)(122, "label", 9);
      \u0275\u0275text(123, "Security Number");
      \u0275\u0275elementStart(124, "span", 10);
      \u0275\u0275text(125, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 12)(128, "div", 34)(129, "a", 35);
      \u0275\u0275text(130, "Pay $200.25");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(131, "div", 36)(132, "div", 3)(133, "div", 7)(134, "div", 8)(135, "label", 9);
      \u0275\u0275text(136, "Email Address");
      \u0275\u0275elementStart(137, "span", 10);
      \u0275\u0275text(138, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(139, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 7)(141, "div", 8)(142, "label", 9);
      \u0275\u0275text(143, "Password");
      \u0275\u0275elementStart(144, "span", 10);
      \u0275\u0275text(145, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(146, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 12)(148, "div", 34)(149, "a", 35);
      \u0275\u0275text(150, "Pay $200.25");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(151, "div", 37)(152, "div", 3)(153, "div", 7)(154, "div", 8)(155, "label", 9);
      \u0275\u0275text(156, "Email Address");
      \u0275\u0275elementStart(157, "span", 10);
      \u0275\u0275text(158, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(159, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 7)(161, "div", 8)(162, "label", 9);
      \u0275\u0275text(163, "Password");
      \u0275\u0275elementStart(164, "span", 10);
      \u0275\u0275text(165, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(166, "input", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 12)(168, "div", 34)(169, "a", 35);
      \u0275\u0275text(170, "Pay $200.25");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(171, "div", 38)(172, "div", 39)(173, "div", 40)(174, "h5", 41);
      \u0275\u0275text(175, "Order Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 42)(177, "div", 43)(178, "div", 44)(179, "div", 45);
      \u0275\u0275element(180, "img", 46);
      \u0275\u0275elementStart(181, "a", 47);
      \u0275\u0275element(182, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div")(184, "h6", 49)(185, "a", 50);
      \u0275\u0275text(186, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "h6", 51);
      \u0275\u0275text(188, "$120");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 52)(190, "div", 44)(191, "div", 45);
      \u0275\u0275element(192, "img", 53);
      \u0275\u0275elementStart(193, "a", 47);
      \u0275\u0275element(194, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div")(196, "h6", 49)(197, "a", 50);
      \u0275\u0275text(198, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "h6", 51);
      \u0275\u0275text(200, "$160");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(201, "div", 54)(202, "p", 41);
      \u0275\u0275text(203, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p", 55);
      \u0275\u0275text(205, "$200.20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 56)(207, "p", 41);
      \u0275\u0275text(208, "Tax (VAT)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "p", 55);
      \u0275\u0275text(210, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 57)(212, "h6", 41);
      \u0275\u0275text(213, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "h4", 41);
      \u0275\u0275text(215, "$225.20");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(185);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseCheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-course-checkout", imports: [CommonModule, RouterLink], template: '			<!-- Checkout -->\n			<div class="content">\n				<div class="container">\n					<div class="checkout-content">\n						<div class="row">\n							<div class="col-lg-8">\n								<div class="checkout-item-1">\n									<div class="border-bottom pb-3 mb-3">\n										<h5>Billing Address</h5>\n									</div>\n									<div class="row">\n										<div class="col-md-6">\n											<div class="input-block">\n												<label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-6">\n											<div class="input-block">\n												<label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-12">\n											<div class="input-block">\n												<label class="form-label">Phone Number (Optional)</label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-12">\n											<div class="input-block">\n												<label class="form-label">Address Line 1<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-12">\n											<div class="input-block">\n												<label class="form-label">Address Line 2 (Optional)</label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-4">\n											<div class="input-block">\n												<label class="form-label">Country<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-4">\n											<div class="input-block">\n												<label class="form-label">State<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-4">\n											<div class="input-block">\n												<label class="form-label">City<span class="text-danger ms-1">*</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-md-12">\n											<div class="d-flex align-items-center mb-3">\n												<div class="form-check d-flex">\n													<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">\n													<label class="form-check-label" for="flexCheckDefault1">\n														Shipping address is the same as my billing address\n													</label>\n												  </div>\n											</div>\n											<div class="d-flex align-items-center">\n												<div class="form-check d-flex">\n													<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">\n													<label class="form-check-label" for="flexCheckDefault">\n														Save this information for next time\n													</label>\n												  </div>\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="checkout-item-1">\n										<div class="border-bottom pb-3 mb-3">\n											<h5>Payment Method </h5>\n										</div>\n										<ul class="nav-tabs mb-3 nav-justified border-0 nav-style-1 d-sm-flex d-block" role="tablist">\n											<li class="nav-item active">\n											<a class="btn nav-link p-3 active" data-bs-toggle="tab" role="tab" href="#overview" aria-selected="false">\n												<div class="d-flex justify-content-center align-items-center">\n													<img src="assets/img/icons/card.svg" alt="card" class="img-fluid me-2">\n													<p class="fw-medium">Card</p>\n												</div>\n											</a>\n											</li>\n											<li class="nav-item">\n											<a class="btn nav-link p-3" data-bs-toggle="tab" role="tab" href="#notes" aria-selected="false">\n												<div class="d-flex justify-content-center align-items-center">\n													<img src="assets/img/icons/paypal-2.svg" alt="card" class="img-fluid me-2">\n													<p class="fw-medium">Paypal</p>\n												</div>\n											</a>\n											</li>\n											<li class="nav-item">\n											<a class="btn nav-link p-3" data-bs-toggle="tab" role="tab" href="#faq" aria-selected="true">\n												<div class="d-flex justify-content-center align-items-center">\n													<img src="assets/img/icons/stripe.svg" alt="card" class="img-fluid me-2">\n													<p class="fw-medium">Stripe</p>\n												</div>\n											</a>\n											</li>\n										</ul>\n										<div class="tab-content">\n											<div class="tab-pane active show" id="overview" role="tabpanel">\n												<div class="row">\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Card Number<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Name on Card<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Expiry Date<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Security Number<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-12">\n														<div class="d-flex align-items-center justify-content-end">\n															<a href="javascript:void(0);" class="btn btn-secondary rounded-pill">Pay $200.25</a>\n														</div>\n													</div>\n												</div>\n											</div>\n											<div class="tab-pane" id="notes" role="tabpanel">\n												<div class="row">\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Email Address<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Password<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-12">\n														<div class="d-flex align-items-center justify-content-end">\n															<a href="javascript:void(0);" class="btn btn-secondary rounded-pill">Pay $200.25</a>\n														</div>\n													</div>\n												</div>\n											</div>\n											<div class="tab-pane" id="faq" role="tabpanel">\n												<div class="row">\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Email Address<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-6">\n														<div class="input-block">\n															<label class="form-label">Password<span class="text-danger ms-1">*</span></label>\n															<input type="text" class="form-control">\n														</div>\n													</div>\n													<div class="col-md-12">\n														<div class="d-flex align-items-center justify-content-end">\n															<a href="javascript:void(0);" class="btn btn-secondary rounded-pill">Pay $200.25</a>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n								</div>\n							</div>\n							<div class="col-lg-4">\n									<div class="checkout-item-2">\n										<div class="pb-3 border-bottom mb-3">\n											<h5 class="mb-0">Order Details</h5>\n										</div>\n										<div class="checkout-item-3 bg-light p-3 rounded-3 border mb-3">\n											<div class="row row-gap-2 mb-3">\n												<div class="col-md-12 d-flex align-items-center">\n													<div class="order-img flex-shrink-0 me-3">\n														<img src="assets/img/course/course-01.jpg" alt="img" class="img-fluid h-100 w-100">\n														<a href="javascript:void(0);" class="btn p-1 rounded-circle"><i class="isax isax-trash"></i></a>\n													</div>\n													<div>\n														<h6 class="mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h6>\n														<h6 class="text-secondary">$120</h6>\n													</div>\n												</div>\n											</div>\n											<div class="row row-gap-2">\n												<div class="col-md-12 d-flex align-items-center">\n													<div class="order-img flex-shrink-0 me-3">\n														<img src="assets/img/course/course-03.jpg" alt="img" class="img-fluid h-100 w-100">\n														<a href="javascript:void(0);" class="btn p-1 rounded-circle"><i class="isax isax-trash"></i></a>\n													</div>\n													<div>\n														<h6 class="mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>\n														<h6 class="text-secondary">$160</h6>\n													</div>\n												</div>											\n											</div>\n										</div>\n										<div class="d-flex align-items-center justify-content-between mb-2">\n											<p class="mb-0">Sub Total</p>\n											<p class="text-gray-9 fw-medium mb-0">$200.20</p>\n										</div>\n										<div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n											<p class="mb-0">Tax (VAT)</p>\n											<p class="text-gray-9 fw-medium mb-0">$25</p>\n										</div>\n										<div class="total d-flex align-items-center justify-content-between">\n											<h6 class="mb-0">Total</h6>\n											<h4 class="mb-0">$225.20</h4>\n										</div>\n									</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div >\n			<!-- /Checkout -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseCheckoutComponent, { className: "CourseCheckoutComponent", filePath: "src/app/features/courses/course-checkout/course-checkout.component.ts", lineNumber: 12 });
})();
export {
  CourseCheckoutComponent
};
//# sourceMappingURL=chunk-2ML4MQD2.js.map
