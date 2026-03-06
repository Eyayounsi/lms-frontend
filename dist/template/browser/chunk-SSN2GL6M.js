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

// src/app/features/pages/notifications/notifications.component.ts
var NotificationsComponent = class _NotificationsComponent {
  routes = routes;
  notificationsToday = [];
  notificationsYesterday = [];
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 143, vars: 10, consts: [[1, "content"], [1, "container"], [1, "notification-content"], [1, "notification-head"], [1, "row", "align-items-center", "row-gap-3"], [1, "col-lg-8"], [1, "fs-32", "fw-bold"], [1, "col-lg-4"], [1, "d-flex", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn", "mark-all-btn", "btn-light", "rounded-pill", "me-2"], [1, "isax", "isax-tick-square", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_all_modal", 1, "btn", "delete-all-btn", "btn-secondary", "rounded-pill"], [1, "isax", "isax-trash", "me-2"], [1, ""], [1, "fs-18", "fw-semibold", "mb-3"], [1, "notification-item", "mb-3"], [1, "row", "row-gap-3"], [1, "col-md-10"], [1, "d-flex", "align-items-center"], [1, "rounded-circle", "me-2", 3, "routerLink"], ["src", "assets/img/user/user-11.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "text-gray-5", "fs-16", "mb-0", 3, "routerLink"], [1, "name-highlight"], [1, "text-gray-5", "fs-16", "mb-0"], [1, "col-md-2", "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "btn", "btn-delete-hidden", "rounded-pill"], [1, "isax", "isax-trash", "me-1"], [1, "row"], ["src", "assets/img/user/user-12.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], ["src", "assets/img/user/user-13.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], ["src", "assets/img/user/user-14.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "notification-item"], ["src", "assets/img/user/user-15.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "delete_all_modal", 1, "modal", "fade"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      \u0275\u0275text(7, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Improve the way your work, discover a brand new tool and drop the hassle once and for all.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "a", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14, " Mark All as Read");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, "Delete All");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(18, "div")(19, "div", 13)(20, "h6", 14);
      \u0275\u0275text(21, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 18)(26, "a", 19);
      \u0275\u0275element(27, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div")(29, "a", 21)(30, "span", 22);
      \u0275\u0275text(31, "Thompson Hicks");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " enroll a new course on Programming");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 23);
      \u0275\u0275text(34, "05 mins ago");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 24)(36, "a", 25);
      \u0275\u0275element(37, "i", 26);
      \u0275\u0275text(38, " Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 15)(40, "div", 27)(41, "div", 17)(42, "div", 18)(43, "a", 19);
      \u0275\u0275element(44, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div")(46, "a", 21)(47, "span", 22);
      \u0275\u0275text(48, "Jennifer Tovar");
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " has submitted their assignment for UI/UX Course.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 23);
      \u0275\u0275text(51, "10 mins ago");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 24)(53, "a", 25);
      \u0275\u0275element(54, "i", 26);
      \u0275\u0275text(55, " Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div", 13)(57, "h6", 14);
      \u0275\u0275text(58, "Yesterday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 15)(60, "div", 27)(61, "div", 17)(62, "div", 18)(63, "a", 19);
      \u0275\u0275element(64, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div")(66, "a", 21)(67, "span", 22);
      \u0275\u0275text(68, "James Schulte ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, "has requested feedback for their assignment in WordPress Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 23);
      \u0275\u0275text(71, "20 Dec 2024");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 24)(73, "a", 25);
      \u0275\u0275element(74, "i", 26);
      \u0275\u0275text(75, " Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 15)(77, "div", 27)(78, "div", 17)(79, "div", 18)(80, "a", 19);
      \u0275\u0275element(81, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div")(83, "a", 21);
      \u0275\u0275text(84, "You have a new message from ");
      \u0275\u0275elementStart(85, "span", 22);
      \u0275\u0275text(86, "William Aragon");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " regarding HTML Course.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 23);
      \u0275\u0275text(89, "05 mins ago");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 24)(91, "a", 25);
      \u0275\u0275element(92, "i", 26);
      \u0275\u0275text(93, " Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 31)(95, "div", 27)(96, "div", 17)(97, "div", 18)(98, "a", 19);
      \u0275\u0275element(99, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div")(101, "a", 21)(102, "span", 22);
      \u0275\u0275text(103, "Shirley Lis");
      \u0275\u0275elementEnd();
      \u0275\u0275text(104, " has completed Quiz in WordPress Course with a score of 80%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 23);
      \u0275\u0275text(106, "05 mins ago");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "div", 24)(108, "a", 25);
      \u0275\u0275element(109, "i", 26);
      \u0275\u0275text(110, " Delete");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(111, "div", 33)(112, "div", 34)(113, "div", 35)(114, "div", 36)(115, "span", 37);
      \u0275\u0275element(116, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div")(118, "h4", 39);
      \u0275\u0275text(119, "Delete Notification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p", 40);
      \u0275\u0275text(121, "Are you sure you want to delete notification?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 41)(123, "a", 42);
      \u0275\u0275text(124, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "a", 43);
      \u0275\u0275text(126, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(127, "div", 44)(128, "div", 34)(129, "div", 35)(130, "div", 36)(131, "span", 37);
      \u0275\u0275element(132, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div")(134, "h4", 39);
      \u0275\u0275text(135, "Delete All Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 40);
      \u0275\u0275text(137, "Are you sure you want to delete all notifications?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 41)(139, "a", 42);
      \u0275\u0275text(140, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "a", 43);
      \u0275\u0275text(142, "Yes, Delete All");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", imports: [CommonModule, RouterLink], template: '<div class="content">\n  <div class="container">\n    <div class="notification-content">\n      <div class="notification-head">\n        <div class="row align-items-center row-gap-3">\n          <div class="col-lg-8">\n            <h2 class="fs-32 fw-bold">Notifications</h2>\n            <p>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>\n          </div>\n          <div class="col-lg-4">\n            <div class="d-flex justify-content-end">\n              <a href="javascript:void(0);" class="btn mark-all-btn btn-light rounded-pill me-2"><i class="isax isax-tick-square me-2"></i> Mark All as Read</a>\n              <a href="javascript:void(0);" class="btn delete-all-btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_all_modal"><i class="isax isax-trash me-2"></i>Delete All</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class="">\n          <h6 class="fs-18 fw-semibold mb-3">Today</h6>\n          <div class="notification-item mb-3">\n            <div class="row row-gap-3">\n              <div class="col-md-10">\n                <div class="d-flex align-items-center">\n                  <a [routerLink]="routes.studentsDetails" class="rounded-circle me-2">\n                    <img src="assets/img/user/user-11.jpg" alt="img" class="img-fluid rounded-circle">\n                  </a>\n                  <div>\n                    <a [routerLink]="routes.studentsDetails" class="text-gray-5 fs-16 mb-0"><span class="name-highlight">Thompson Hicks</span> enroll a new course on Programming</a>\n                    <p class="text-gray-5 fs-16 mb-0">05 mins ago</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-2 d-flex align-items-center justify-content-end">\n                <a href="javascript:void(0);" class="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i> Delete</a>\n              </div>\n            </div>\n          </div>\n          <div class="notification-item mb-3">\n            <div class="row">\n              <div class="col-md-10">\n                <div class="d-flex align-items-center">\n                  <a [routerLink]="routes.studentsDetails" class="rounded-circle me-2">\n                    <img src="assets/img/user/user-12.jpg" alt="img" class="img-fluid rounded-circle">\n                  </a>\n                  <div>\n                    <a [routerLink]="routes.studentsDetails" class="text-gray-5 fs-16 mb-0"><span class="name-highlight">Jennifer Tovar</span> has submitted their assignment for UI/UX Course.</a>\n                    <p class="text-gray-5 fs-16 mb-0">10 mins ago</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-2 d-flex align-items-center justify-content-end">\n                <a href="javascript:void(0);" class="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i> Delete</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="">\n          <h6 class="fs-18 fw-semibold mb-3">Yesterday</h6>\n          <div class="notification-item mb-3">\n            <div class="row">\n              <div class="col-md-10">\n                <div class="d-flex align-items-center">\n                  <a [routerLink]="routes.studentsDetails" class="rounded-circle me-2">\n                    <img src="assets/img/user/user-13.jpg" alt="img" class="img-fluid rounded-circle">\n                  </a>\n                  <div>\n                    <a [routerLink]="routes.studentsDetails" class="text-gray-5 fs-16 mb-0"><span class="name-highlight">James Schulte </span>has requested feedback for their assignment in WordPress Course</a>\n                    <p class="text-gray-5 fs-16 mb-0">20 Dec 2024</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-2 d-flex align-items-center justify-content-end">\n                <a href="javascript:void(0);" class="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i> Delete</a>\n              </div>\n            </div>\n          </div>\n          <div class="notification-item mb-3">\n            <div class="row">\n              <div class="col-md-10">\n                <div class="d-flex align-items-center">\n                  <a [routerLink]="routes.studentsDetails" class="rounded-circle me-2">\n                    <img src="assets/img/user/user-14.jpg" alt="img" class="img-fluid rounded-circle">\n                  </a>\n                  <div>\n                    <a [routerLink]="routes.studentsDetails" class="text-gray-5 fs-16 mb-0">You have a new message from <span class="name-highlight">William Aragon</span> regarding HTML Course.</a>\n                    <p class="text-gray-5 fs-16 mb-0">05 mins ago</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-2 d-flex align-items-center justify-content-end">\n                <a href="javascript:void(0);" class="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i> Delete</a>\n              </div>\n            </div>\n          </div>\n          <div class="notification-item">\n            <div class="row">\n              <div class="col-md-10">\n                <div class="d-flex align-items-center">\n                  <a [routerLink]="routes.studentsDetails" class="rounded-circle me-2">\n                    <img src="assets/img/user/user-15.jpg" alt="img" class="img-fluid rounded-circle">\n                  </a>\n                  <div>\n                    <a [routerLink]="routes.studentsDetails" class="text-gray-5 fs-16 mb-0"><span class="name-highlight">Shirley Lis</span> has completed Quiz in WordPress Course with a score of 80%</a>\n                    <p class="text-gray-5 fs-16 mb-0">05 mins ago</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-2 d-flex align-items-center justify-content-end">\n                <a href="javascript:void(0);" class="btn btn-delete-hidden rounded-pill" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i> Delete</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div >\n\n\n			<!-- Delete Modal -->\n			<div class="modal fade" id="delete_modal">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="modal-body text-center custom-modal-body">\n							<span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">\n								<i class="isax isax-trash fs-24 text-danger"></i>\n							</span>\n							<div>\n								<h4 class="mb-2">Delete Notification</h4>\n								<p class="mb-3">Are you sure you want to delete notification?</p>\n								<div class="d-flex align-items-center justify-content-center">\n									<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>\n									<a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Delete</a>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Delete Modal -->\n\n			<!-- Delete All Modal -->\n			<div class="modal fade" id="delete_all_modal">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="modal-body text-center custom-modal-body">\n							<span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">\n								<i class="isax isax-trash fs-24 text-danger"></i>\n							</span>\n							<div>\n								<h4 class="mb-2">Delete All Notifications</h4>\n								<p class="mb-3">Are you sure you want to delete all notifications?</p>\n								<div class="d-flex align-items-center justify-content-center">\n									<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>\n									<a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Delete All</a>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Delete Modal -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/features/pages/notifications/notifications.component.ts", lineNumber: 15 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-SSN2GL6M.js.map
