"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7401],{

/***/ 57401:
/*!*************************************************************************!*\
  !*** ./src/app/features/pages/notifications/notifications.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/notification/notification.service */ 30116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_notification_notification_actions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/notification/notification-actions.service */ 57554);
/* harmony import */ var _shared_service_notification_websocket_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/notification/websocket-notification.service */ 42626);







const _forTrack0 = ($index, $item) => $item.id;
function NotificationsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
  }
}
function NotificationsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Aucune notification. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
  }
}
function NotificationsComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](6, "div")(7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_6_For_4_Template_a_click_7_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.markAsRead(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](11, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](13, "div", 19)(14, "div", 20)(15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_6_For_4_Template_button_click_15_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.markAsRead(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](16, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_6_For_4_Template_button_click_18_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteNotification(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Suppr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("notification-item--unread", !item_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate1"]("isax ", ctx_r2.getNotifIcon(item_r2.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatNotifDate(item_r2.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomProperty"]("disabled", item_r2.read);
  }
}
function NotificationsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 5)(1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Aujourd'hui");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](3, NotificationsComponent_Conditional_6_For_4_Template, 21, 9, "div", 10, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.notificationsToday);
  }
}
function NotificationsComponent_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](6, "div")(7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_7_For_4_Template_a_click_7_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.markAsRead(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](11, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](13, "div", 19)(14, "div", 20)(15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_7_For_4_Template_button_click_15_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.markAsRead(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](16, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_7_For_4_Template_button_click_18_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteNotification(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Suppr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("notification-item--unread", !item_r5.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate1"]("isax ", ctx_r2.getNotifIcon(item_r5.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatNotifDate(item_r5.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomProperty"]("disabled", item_r5.read);
  }
}
function NotificationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 5)(1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Hier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](3, NotificationsComponent_Conditional_7_For_4_Template, 21, 9, "div", 10, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.notificationsYesterday);
  }
}
function NotificationsComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](6, "div")(7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_8_For_4_Template_a_click_7_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.markAsRead(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](11, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](13, "div", 19)(14, "div", 20)(15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_8_For_4_Template_button_click_15_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.markAsRead(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](16, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_8_For_4_Template_button_click_18_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteNotification(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](19, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Suppr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("notification-item--unread", !item_r7.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate1"]("isax ", ctx_r2.getNotifIcon(item_r7.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r7.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatNotifDate(item_r7.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomProperty"]("disabled", item_r7.read);
  }
}
function NotificationsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 5)(1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Plus ancien");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](3, NotificationsComponent_Conditional_8_For_4_Template, 21, 9, "div", 10, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.notificationsEarlier);
  }
}
function NotificationsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 6)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](3, "div", 26)(4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_9_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomListener"]("click", function NotificationsComponent_Conditional_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Suivant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Page ", ctx_r2.currentPage, " / ", ctx_r2.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomProperty"]("disabled", ctx_r2.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomProperty"]("disabled", ctx_r2.currentPage >= ctx_r2.totalPages);
  }
}
let NotificationsComponent = /*#__PURE__*/(() => {
  class NotificationsComponent {
    notificationService;
    router;
    notificationActionsService;
    wsNotifService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    loading = true;
    allNotifications = [];
    notificationsToday = [];
    notificationsYesterday = [];
    notificationsEarlier = [];
    pageSize = 8;
    currentPage = 1;
    totalPages = 1;
    headerActionsSub;
    wsSub;
    constructor(notificationService, router, notificationActionsService, wsNotifService) {
      this.notificationService = notificationService;
      this.router = router;
      this.notificationActionsService = notificationActionsService;
      this.wsNotifService = wsNotifService;
    }
    ngOnInit() {
      const role = (localStorage.getItem('role') || '').toUpperCase();
      if (role.includes('INSTRUCTOR') && this.router.url.startsWith('/pages/notifications')) {
        this.router.navigateByUrl(_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes.instructorNotifications);
        return;
      }
      this.loadNotifications();
      this.wsNotifService.connect();
      this.wsSub = this.wsNotifService.getNewNotifications$().subscribe(notif => {
        if (!notif) return;
        this.allNotifications = [notif, ...this.allNotifications.filter(n => n.id !== notif.id)];
        this.currentPage = 1;
        this.rebuildBucketsFromCurrentPage();
      });
      this.headerActionsSub = this.notificationActionsService.actions$.subscribe(action => {
        if (action === 'mark-all-read') {
          this.markAllAsRead();
        } else if (action === 'delete-all') {
          this.deleteAllNotifications();
        }
      });
    }
    ngOnDestroy() {
      this.headerActionsSub?.unsubscribe();
      this.wsSub?.unsubscribe();
      this.wsNotifService.disconnect();
    }
    loadNotifications() {
      this.loading = true;
      this.notificationService.getMyNotifications().subscribe({
        next: items => {
          this.allNotifications = Array.isArray(items) ? [...items] : [];
          this.currentPage = 1;
          this.rebuildBucketsFromCurrentPage();
          this.loading = false;
        },
        error: () => {
          this.allNotifications = [];
          this.notificationsToday = [];
          this.notificationsYesterday = [];
          this.notificationsEarlier = [];
          this.totalPages = 1;
          this.loading = false;
        }
      });
    }
    markAllAsRead() {
      if (this.allNotifications.length === 0) return;
      this.notificationService.markAllAsRead().subscribe({
        next: () => {
          this.allNotifications = this.allNotifications.map(n => ({
            ...n,
            read: true
          }));
          this.rebuildBucketsFromCurrentPage();
        },
        error: () => {}
      });
    }
    deleteNotification(item) {
      this.allNotifications = this.allNotifications.filter(n => n.id !== item.id);
      this.rebuildBucketsFromCurrentPage();
    }
    deleteAllNotifications() {
      this.allNotifications = [];
      this.currentPage = 1;
      this.rebuildBucketsFromCurrentPage();
    }
    previousPage() {
      if (this.currentPage <= 1) return;
      this.currentPage -= 1;
      this.rebuildBucketsFromCurrentPage();
    }
    nextPage() {
      if (this.currentPage >= this.totalPages) return;
      this.currentPage += 1;
      this.rebuildBucketsFromCurrentPage();
    }
    markAsRead(item) {
      if (item.read) return;
      this.notificationService.markAsRead(item.id).subscribe({
        next: () => {
          item.read = true;
        },
        error: () => {}
      });
    }
    unreadCount() {
      return this.allNotifications.filter(item => !item.read).length;
    }
    formatNotifDate(dateStr) {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - d.getTime();
      const diffMin = Math.floor(diffMs / 60000);
      if (diffMin < 1) return 'A l\'instant';
      if (diffMin < 60) return `il y a ${diffMin} min`;
      const diffH = Math.floor(diffMin / 60);
      if (diffH < 24) return `il y a ${diffH}h`;
      return d.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    }
    getNotifIcon(type) {
      switch ((type || '').toUpperCase()) {
        case 'COURSE_APPROVED':
        case 'COURSE_MODIFICATION_APPROVED':
          return 'isax-tick-circle';
        case 'COURSE_REJECTED':
          return 'isax-close-circle';
        case 'COURSE_ARCHIVED_BY_INSTRUCTOR':
        case 'COURSE_ARCHIVED_BY_ADMIN':
          return 'isax-archive-minus';
        case 'COURSE_UNARCHIVED_BY_INSTRUCTOR':
        case 'COURSE_UNARCHIVED_BY_ADMIN':
          return 'isax-refresh-circle';
        case 'COURSE_PROMOTION_UPDATED':
          return 'isax-discount-circle';
        case 'NEW_REVENUE':
        case 'PAYOUT_PAID':
          return 'isax-dollar-circle';
        case 'PAYOUT_REJECTED':
          return 'isax-wallet-remove';
        case 'NEW_MESSAGE':
          return 'isax-messages-3';
        default:
          return 'isax-notification';
      }
    }
    splitByDateBuckets(items) {
      const now = new Date();
      const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const startYesterday = startToday - 24 * 60 * 60 * 1000;
      this.notificationsToday = [];
      this.notificationsYesterday = [];
      this.notificationsEarlier = [];
      items.forEach(item => {
        const t = new Date(item.createdAt).getTime();
        if (Number.isNaN(t)) {
          this.notificationsEarlier.push(item);
          return;
        }
        if (t >= startToday) {
          this.notificationsToday.push(item);
        } else if (t >= startYesterday) {
          this.notificationsYesterday.push(item);
        } else {
          this.notificationsEarlier.push(item);
        }
      });
    }
    rebuildBucketsFromCurrentPage() {
      const sorted = [...this.allNotifications].sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      this.totalPages = Math.max(1, Math.ceil(sorted.length / this.pageSize));
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      const pageItems = sorted.slice(start, end);
      this.splitByDateBuckets(pageItems);
    }
    static ɵfac = function NotificationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_notification_notification_actions_service__WEBPACK_IMPORTED_MODULE_6__.NotificationActionsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_notification_websocket_notification_service__WEBPACK_IMPORTED_MODULE_7__.WebSocketNotificationService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 10,
      vars: 6,
      consts: [[1, "content"], [1, "container"], [1, "notification-content"], [1, "text-center", "py-5"], [1, "text-center", "py-5", "text-muted"], [1, ""], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mt-3", "pt-2", "border-top"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "isax", "isax-notification", "fs-1", "d-block", "mb-2"], [1, "fs-18", "fw-semibold", "mb-3"], [1, "notification-item", "mb-3", 3, "notification-item--unread"], [1, "notification-item", "mb-3"], [1, "row", "row-gap-3"], [1, "col-md-10"], [1, "d-flex", "align-items-center"], [1, "rounded-circle", "me-2", "notification-icon-wrap"], ["href", "javascript:void(0);", 1, "text-gray-5", "fs-16", "mb-0", 3, "click"], [1, "name-highlight"], [1, "text-gray-5", "fs-16", "mb-0"], [1, "col-md-2", "d-flex", "align-items-center", "justify-content-end"], [1, "d-flex", "align-items-center", "gap-2", "justify-content-end"], ["type", "button", 1, "btn", "btn-delete-hidden", "rounded-pill", 3, "click", "disabled"], [1, "isax", "isax-tick-square", "me-1"], ["type", "button", 1, "btn", "btn-delete-hidden", "rounded-pill", 3, "click"], [1, "isax", "isax-trash", "me-1"], [1, "mb-0", "text-muted", "fs-14"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "button", 1, "btn", "btn-sm", "btn-light", "rounded-pill", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "isax", "isax-arrow-right-3", "ms-1"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](4, NotificationsComponent_Conditional_4_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](5, NotificationsComponent_Conditional_5_Template, 3, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](6, NotificationsComponent_Conditional_6_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](7, NotificationsComponent_Conditional_7_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](8, NotificationsComponent_Conditional_8_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](9, NotificationsComponent_Conditional_9_Template, 10, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.loading ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.loading && ctx.allNotifications.length === 0 ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.loading && ctx.notificationsToday.length > 0 ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.loading && ctx.notificationsYesterday.length > 0 ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.loading && ctx.notificationsEarlier.length > 0 ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](!ctx.loading && ctx.allNotifications.length > 0 ? 9 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.notification-content[_ngcontent-%COMP%] {\n  border: 1px solid #e6eaf2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n}\n\n.notification-head[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #e9edf5;\n  background: linear-gradient(180deg, #fbfcff, #f8fafc);\n}\n\n.notification-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 20px;\n}\n\n.notification-item[_ngcontent-%COMP%] {\n  border: 1px solid #e9edf5;\n  border-radius: 12px;\n  padding: 12px;\n  background: #fff;\n  transition: all 0.2s ease;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  border-color: #c7d2fe;\n  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.08);\n}\n\n.notification-item--unread[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #f9fbff, #ffffff);\n  border-color: #dbe3ff;\n}\n\n.notification-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #eef2ff;\n  color: #4f46e5;\n  border: 1px solid #dbe3ff;\n}\n\n.mark-all-btn[_ngcontent-%COMP%] {\n  border-color: #d8e0ef;\n}\n\n.delete-all-btn[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n}\n\n.btn-delete-hidden[_ngcontent-%COMP%] {\n  border: 1px solid #dbe2f0;\n  background: #fff;\n  color: #4f46e5;\n  font-size: 12px;\n  padding: 6px 10px;\n}\n.btn-delete-hidden[_ngcontent-%COMP%]:hover {\n  background: #eef2ff;\n  border-color: #a5b4fc;\n}\n\n.name-highlight[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscURBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNEO0FBQ0M7RUFDQyxxQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBR0E7RUFDQyxxREFBQTtFQUNBLHFCQUFBO0FBQUQ7O0FBR0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQUQ7O0FBR0E7RUFDQyxxQkFBQTtBQUFEOztBQUdBO0VBQ0MseUJBQUE7QUFBRDs7QUFHQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUQ7QUFFQztFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFJQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQUREIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNvbnRlbnQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmVhZjI7XHJcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAuMDYpO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taGVhZCB7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWRmNTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJmY2ZmLCAjZjhmYWZjKTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1jb250ZW50ID4gZGl2Omxhc3QtY2hpbGQge1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taXRlbSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWRmNTtcclxuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdHBhZGRpbmc6IDEycHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjYzdkMmZlO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSg3OSwgNzAsIDIyOSwgLjA4KTtcclxuXHR9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taXRlbS0tdW5yZWFkIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjlmYmZmLCAjZmZmZmZmKTtcclxuXHRib3JkZXItY29sb3I6ICNkYmUzZmY7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taWNvbi13cmFwIHtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjZWVmMmZmO1xyXG5cdGNvbG9yOiAjNGY0NmU1O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkYmUzZmY7XHJcbn1cclxuXHJcbi5tYXJrLWFsbC1idG4ge1xyXG5cdGJvcmRlci1jb2xvcjogI2Q4ZTBlZjtcclxufVxyXG5cclxuLmRlbGV0ZS1hbGwtYnRuIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZS1oaWRkZW4ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkYmUyZjA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzRmNDZlNTtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0cGFkZGluZzogNnB4IDEwcHg7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZDogI2VlZjJmZjtcclxuXHRcdGJvcmRlci1jb2xvcjogI2E1YjRmYztcclxuXHR9XHJcbn1cclxuXHJcbi5uYW1lLWhpZ2hsaWdodCB7XHJcblx0Y29sb3I6ICMxZTI5M2I7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return NotificationsComponent;
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
//# sourceMappingURL=7401.js.map