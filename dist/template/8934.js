"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8934],{

/***/ 35365:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/avatar-image.util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAvatarImage: () => (/* binding */ resolveAvatarImage)
/* harmony export */ });
const AVATAR_API_ROOT = 'http://localhost:8081';
function resolveAvatarImage(path, fallback = '') {
  if (!path || !String(path).trim()) {
    return fallback;
  }
  const raw = String(path).trim().replace(/\\/g, '/');
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:image')) {
    return raw;
  }
  if (raw.startsWith('assets/')) {
    return raw;
  }
  if (raw.startsWith('preset:')) {
    return `assets/img/course-img/${raw.replace('preset:', '')}`;
  }
  if (raw.startsWith('/')) {
    return `${AVATAR_API_ROOT}${raw}`;
  }
  if (raw.startsWith('api/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  if (raw.includes('/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  return `${AVATAR_API_ROOT}/api/files/${raw}`;
}

/***/ }),

/***/ 88934:
/*!***************************************************************************************!*\
  !*** ./src/app/features/recruiter/recruiter-messages/recruiter-messages.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterMessagesComponent: () => (/* binding */ RecruiterMessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_recruiter_recruiter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/recruiter/recruiter.service */ 64280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_message_message_realtime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/message/message-realtime.service */ 85718);









const _c0 = ["messagesContainer"];
const _c1 = () => [1, 2, 3];
function RecruiterMessagesComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.totalUnread());
  }
}
function RecruiterMessagesComponent_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 23);
  }
}
function RecruiterMessagesComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 24);
  }
}
function RecruiterMessagesComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Aucun r\u00E9sultat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecruiterMessagesComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function RecruiterMessagesComponent_div_14_div_2_Template_div_mousedown_0_listener() {
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.startConversationWith(s_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 32)(3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(s_r3.avatarPath, s_r3.fullName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", s_r3.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r3.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r3.designation || "\u00C9tudiant");
  }
}
function RecruiterMessagesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecruiterMessagesComponent_div_14_div_1_Template, 3, 0, "div", 26)(2, RecruiterMessagesComponent_div_14_div_2_Template, 8, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.studentSearchResults.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.studentSearchResults);
  }
}
function RecruiterMessagesComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 41)(4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function RecruiterMessagesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecruiterMessagesComponent_div_16_div_1_Template, 5, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c1));
  }
}
function RecruiterMessagesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.conversationsError, " ");
  }
}
function RecruiterMessagesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucune conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Recherchez un \u00E9tudiant ci-dessus pour d\u00E9marrer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function RecruiterMessagesComponent_div_19_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Vous : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecruiterMessagesComponent_div_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const conv_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](conv_r5.unreadCount);
  }
}
function RecruiterMessagesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_div_19_Template_div_click_0_listener() {
      const conv_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.selectConversation(conv_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 50)(3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 52)(5, "div", 53)(6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 56)(11, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, RecruiterMessagesComponent_div_19_span_12_Template, 2, 0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RecruiterMessagesComponent_div_19_span_14_Template, 2, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const conv_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rct-msg-conv-active", (ctx_r0.selectedConversation == null ? null : ctx_r0.selectedConversation.conversationId) === conv_r5.conversationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(conv_r5.participantAvatar, conv_r5.participantName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", conv_r5.participantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](conv_r5.participantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatDate(conv_r5.lastMessageAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", conv_r5.lastMessageIsOwn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", conv_r5.lastMessage || "Nouvelle conversation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", conv_r5.unreadCount > 0);
  }
}
function RecruiterMessagesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "S\u00E9lectionnez une conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Ou recherchez un \u00E9tudiant pour d\u00E9marrer une nouvelle conversation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function RecruiterMessagesComponent_ng_container_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecruiterMessagesComponent_ng_container_22_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.messagesError, " ");
  }
}
function RecruiterMessagesComponent_ng_container_22_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 91)(1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "D\u00E9marrez la conversation !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Envoyez un message \u00E0 ", ctx_r0.selectedConversation.participantName, ".");
  }
}
function RecruiterMessagesComponent_ng_container_22_ng_container_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 102)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const msg_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatDate(msg_r7.sentAt));
  }
}
function RecruiterMessagesComponent_ng_container_22_ng_container_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(ctx_r0.selectedConversation.participantAvatar, ctx_r0.selectedConversation.participantName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r0.selectedConversation.participantName);
  }
}
function RecruiterMessagesComponent_ng_container_22_ng_container_18_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 105);
  }
  if (rf & 2) {
    const msg_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", msg_r7.isRead ? "#03C95A" : "inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ti-checks", msg_r7.isRead)("ti-check", !msg_r7.isRead);
  }
}
function RecruiterMessagesComponent_ng_container_22_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecruiterMessagesComponent_ng_container_22_ng_container_18_div_1_Template, 3, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, RecruiterMessagesComponent_ng_container_22_ng_container_18_div_3_Template, 2, 2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 97)(5, "div", 98)(6, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RecruiterMessagesComponent_ng_container_22_ng_container_18_i_10_Template, 1, 6, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showDateSeparator(ctx_r0.messages, i_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rct-msg-mine", ctx_r0.isFromMe(msg_r7))("rct-msg-theirs", !ctx_r0.isFromMe(msg_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isFromMe(msg_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rct-msg-bubble-mine", ctx_r0.isFromMe(msg_r7))("rct-msg-bubble-theirs", !ctx_r0.isFromMe(msg_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r7.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rct-msg-meta-right", ctx_r0.isFromMe(msg_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatTime(msg_r7.sentAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isFromMe(msg_r7));
  }
}
function RecruiterMessagesComponent_ng_container_22_div_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_ng_container_22_div_20_span_1_Template_span_click_0_listener() {
      const e_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.insertEmoji(e_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](e_r10);
  }
}
function RecruiterMessagesComponent_ng_container_22_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RecruiterMessagesComponent_ng_container_22_div_20_span_1_Template, 2, 1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.emojis);
  }
}
function RecruiterMessagesComponent_ng_container_22_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecruiterMessagesComponent_ng_container_22_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecruiterMessagesComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 65)(2, "div", 66)(3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 68)(5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 69)(7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " En ligne");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 74, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RecruiterMessagesComponent_ng_container_22_div_15_Template, 2, 0, "div", 75)(16, RecruiterMessagesComponent_ng_container_22_div_16_Template, 3, 1, "div", 76)(17, RecruiterMessagesComponent_ng_container_22_div_17_Template, 7, 1, "div", 77)(18, RecruiterMessagesComponent_ng_container_22_ng_container_18_Template, 11, 15, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_ng_container_22_Template_div_click_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RecruiterMessagesComponent_ng_container_22_div_20_Template, 2, 1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 81)(22, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_ng_container_22_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.toggleEmojiPicker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 84)(25, "textarea", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterMessagesComponent_ng_container_22_Template_textarea_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newMessage, $event) || (ctx_r0.newMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function RecruiterMessagesComponent_ng_container_22_Template_textarea_keydown_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_ng_container_22_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RecruiterMessagesComponent_ng_container_22_span_27_Template, 2, 0, "span", 21)(28, RecruiterMessagesComponent_ng_container_22_span_28_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(ctx_r0.selectedConversation.participantAvatar, ctx_r0.selectedConversation.participantName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r0.selectedConversation.participantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selectedConversation.participantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loadingMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.messagesError && !ctx_r0.loadingMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loadingMessages && !ctx_r0.messagesError && ctx_r0.messages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showEmojiPicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.sendingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.newMessage.trim() || ctx_r0.sendingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.sendingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.sendingMessage);
  }
}
let RecruiterMessagesComponent = /*#__PURE__*/(() => {
  class RecruiterMessagesComponent {
    recruiterService;
    route;
    messageRealtimeService;
    messagesContainer;
    conversations = [];
    selectedConversation = null;
    messages = [];
    newMessage = '';
    loadingConversations = true;
    loadingMessages = false;
    sendingMessage = false;
    conversationsError = '';
    messagesError = '';
    currentUserId = null;
    shouldScrollToBottom = false;
    // Recherche d'étudiant
    studentSearchQuery = '';
    studentSearchResults = [];
    allStudents = [];
    showSearchDropdown = false;
    startingConversationWith = null;
    realtimeSub;
    subscribedConversationId = null;
    // Emoji picker
    showEmojiPicker = false;
    emojis = ['😊', '😂', '👍', '❤️', '🎉', '🙏', '👋', '😎', '🔥', '✅', '💼', '🎓', '📄', '💡', '🚀', '⭐', '💪', '🤝', '📝', '👏'];
    constructor(recruiterService, route, messageRealtimeService) {
      this.recruiterService = recruiterService;
      this.route = route;
      this.messageRealtimeService = messageRealtimeService;
    }
    ngOnInit() {
      const idStr = localStorage.getItem('id');
      this.currentUserId = idStr ? +idStr : null;
      this.messageRealtimeService.connect();
      this.realtimeSub = this.messageRealtimeService.events$.subscribe(event => this.handleRealtimeEvent(event));
      this.loadConversations();
      this.loadStudents();
    }
    ngOnDestroy() {
      this.realtimeSub?.unsubscribe();
      if (this.subscribedConversationId) {
        this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
        this.subscribedConversationId = null;
      }
    }
    loadStudents() {
      this.recruiterService.getSharedProfiles().subscribe({
        next: data => {
          this.allStudents = data;
        },
        error: () => {}
      });
    }
    onStudentSearch() {
      const q = this.studentSearchQuery.toLowerCase().trim();
      if (!q) {
        this.studentSearchResults = [];
        this.showSearchDropdown = false;
        return;
      }
      this.studentSearchResults = this.allStudents.filter(s => (s.fullName || '').toLowerCase().includes(q) || (s.email || '').toLowerCase().includes(q) || (s.designation || '').toLowerCase().includes(q)).slice(0, 6);
      this.showSearchDropdown = this.studentSearchResults.length > 0;
    }
    startConversationWith(student) {
      this.studentSearchQuery = '';
      this.studentSearchResults = [];
      this.showSearchDropdown = false;
      this.startingConversationWith = student.id;
      this.recruiterService.startConversation(student.id).subscribe({
        next: res => {
          const existing = this.conversations.find(c => c.conversationId === res.conversationId);
          if (existing) {
            this.selectConversation(existing);
          } else {
            const newConv = {
              conversationId: res.conversationId,
              participantId: res.participantId,
              participantName: res.participantName,
              participantAvatar: res.participantAvatar,
              participantRole: 'STUDENT',
              unreadCount: 0,
              lastMessage: null,
              lastMessageAt: new Date().toISOString(),
              lastMessageIsOwn: false
            };
            this.conversations.unshift(newConv);
            this.selectConversation(newConv);
          }
          this.startingConversationWith = null;
        },
        error: () => {
          this.startingConversationWith = null;
        }
      });
    }
    closeSearchDropdown() {
      // Delay to allow mousedown on dropdown items to fire before blur hides them
      setTimeout(() => {
        this.showSearchDropdown = false;
      }, 200);
    }
    ngAfterViewChecked() {
      if (this.shouldScrollToBottom) {
        this.scrollToBottom();
        this.shouldScrollToBottom = false;
      }
    }
    loadConversations() {
      this.loadingConversations = true;
      this.conversationsError = '';
      this.recruiterService.getConversations().subscribe({
        next: data => {
          this.conversations = data;
          this.loadingConversations = false;
          // Auto-select conversation from query param
          this.route.queryParams.subscribe(params => {
            if (params['conversationId']) {
              const id = +params['conversationId'];
              const conv = this.conversations.find(c => c.conversationId === id);
              if (conv) {
                this.selectConversation(conv);
              } else {
                // Conversation exists but might not be in list yet — reload
                this.recruiterService.getConversations().subscribe(refreshed => {
                  this.conversations = refreshed;
                  const found = this.conversations.find(c => c.conversationId === id);
                  if (found) this.selectConversation(found);
                });
              }
            }
          });
        },
        error: () => {
          this.conversationsError = 'Impossible de charger les conversations.';
          this.loadingConversations = false;
        }
      });
    }
    selectConversation(conv) {
      if (this.subscribedConversationId && this.subscribedConversationId !== conv.conversationId) {
        this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
      }
      this.selectedConversation = conv;
      this.messages = [];
      this.messagesError = '';
      this.loadMessages(conv.conversationId);
      this.messageRealtimeService.subscribeConversation(conv.conversationId);
      this.subscribedConversationId = conv.conversationId;
      // Reset unread count locally
      conv.unreadCount = 0;
    }
    loadMessages(conversationId) {
      this.loadingMessages = true;
      this.recruiterService.getMessages(conversationId).subscribe({
        next: data => {
          this.messages = data;
          this.loadingMessages = false;
          this.shouldScrollToBottom = true;
        },
        error: () => {
          this.messagesError = 'Impossible de charger les messages.';
          this.loadingMessages = false;
        }
      });
    }
    sendMessage() {
      const content = this.newMessage.trim();
      if (!content || !this.selectedConversation || this.sendingMessage) return;
      this.sendingMessage = true;
      this.recruiterService.sendMessage(this.selectedConversation.conversationId, content).subscribe({
        next: msg => {
          this.upsertMessage(msg);
          this.newMessage = '';
          this.sendingMessage = false;
          this.shouldScrollToBottom = true;
          // Update conversation preview
          this.updateConversationPreview(msg);
        },
        error: () => {
          this.sendingMessage = false;
        }
      });
    }
    onKeyDown(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    }
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    }
    insertEmoji(emoji) {
      this.newMessage += emoji;
      this.showEmojiPicker = false;
    }
    closeEmojiPicker() {
      this.showEmojiPicker = false;
    }
    showDateSeparator(messages, index) {
      if (index === 0) return true;
      const prev = new Date(messages[index - 1].sentAt).toDateString();
      const curr = new Date(messages[index].sentAt).toDateString();
      return prev !== curr;
    }
    isFromMe(msg) {
      return this.currentUserId !== null && msg.senderId === this.currentUserId;
    }
    getAvatarUrl(avatarPath, name) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_2__.resolveAvatarImage)(avatarPath, this.generateInitialAvatar(name || 'U'));
    }
    generateInitialAvatar(name) {
      const initial = (name || 'U').charAt(0).toUpperCase();
      const colors = ['#392C7D', '#03C95A', '#0DCAF0', '#6d28d9', '#059669'];
      const bg = colors[(name || 'U').charCodeAt(0) % colors.length];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="40" y="53" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">${initial}</text></svg>`;
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }
    formatTime(dateStr) {
      if (!dateStr) return '';
      return new Date(dateStr).toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    formatDate(dateStr) {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      const today = new Date();
      const isToday = d.toDateString() === today.toDateString();
      if (isToday) return "Aujourd'hui";
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (d.toDateString() === yesterday.toDateString()) return 'Hier';
      return d.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short'
      });
    }
    scrollToBottom() {
      try {
        if (this.messagesContainer) {
          const el = this.messagesContainer.nativeElement;
          el.scrollTop = el.scrollHeight;
          setTimeout(() => {
            el.scrollTop = el.scrollHeight;
          }, 0);
          setTimeout(() => {
            el.scrollTop = el.scrollHeight;
          }, 80);
        }
      } catch {}
    }
    totalUnread() {
      return this.conversations.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
    }
    handleRealtimeEvent(event) {
      if (!event || event.type !== 'MESSAGE_CREATED' || !event.conversationId || !event.message) {
        return;
      }
      const msg = event.message;
      const conversationId = event.conversationId;
      if (this.selectedConversation?.conversationId === conversationId) {
        this.upsertMessage(msg);
        this.shouldScrollToBottom = true;
        if (this.currentUserId !== null && msg.senderId !== this.currentUserId) {
          this.selectedConversation.unreadCount = 0;
        }
      } else {
        const conv = this.conversations.find(c => c.conversationId === conversationId);
        if (conv && this.currentUserId !== null && msg.senderId !== this.currentUserId) {
          conv.unreadCount = (conv.unreadCount || 0) + 1;
        }
      }
      this.updateConversationPreview(msg, conversationId);
      this.moveConversationToTop(conversationId);
    }
    upsertMessage(msg) {
      const exists = this.messages.some(m => m.id === msg.id);
      if (!exists) {
        this.messages.push(msg);
      }
    }
    updateConversationPreview(msg, forcedConversationId) {
      const conversationId = forcedConversationId ?? this.selectedConversation?.conversationId;
      if (!conversationId) {
        return;
      }
      const conv = this.conversations.find(c => c.conversationId === conversationId);
      if (!conv) {
        return;
      }
      conv.lastMessage = msg.content;
      conv.lastMessageAt = msg.sentAt;
      conv.lastMessageIsOwn = this.currentUserId !== null && msg.senderId === this.currentUserId;
    }
    moveConversationToTop(conversationId) {
      const index = this.conversations.findIndex(c => c.conversationId === conversationId);
      if (index <= 0) {
        return;
      }
      const [conv] = this.conversations.splice(index, 1);
      this.conversations.unshift(conv);
    }
    static ɵfac = function RecruiterMessagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RecruiterMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_recruiter_recruiter_service__WEBPACK_IMPORTED_MODULE_5__.RecruiterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_message_message_realtime_service__WEBPACK_IMPORTED_MODULE_7__.MessageRealtimeService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RecruiterMessagesComponent,
      selectors: [["app-recruiter-messages"]],
      viewQuery: function RecruiterMessagesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
        }
      },
      decls: 23,
      vars: 11,
      consts: [["messagesContainer", ""], [1, "rct-msg-wrapper", 3, "click"], [1, "rct-msg-panel-left"], [1, "rct-msg-panel-hd"], [1, "rct-msg-panel-hd-top"], [1, "rct-msg-panel-title"], [1, "ti", "ti-messages"], ["class", "rct-msg-badge-unread", 4, "ngIf"], [1, "rct-msg-search-wrap", 3, "click"], [1, "rct-msg-search-box"], ["class", "ti ti-search rct-msg-search-icon", 4, "ngIf"], ["class", "spinner-border spinner-border-sm rct-msg-search-spin", 4, "ngIf"], ["type", "text", "placeholder", "Rechercher un \u00E9tudiant...", 1, "rct-msg-search-input", 3, "ngModelChange", "blur", "ngModel"], ["class", "rct-msg-search-dropdown", 4, "ngIf"], [1, "rct-msg-conv-list"], ["class", "rct-msg-loading", 4, "ngIf"], ["class", "rct-msg-error-box", 4, "ngIf"], ["class", "rct-msg-conv-empty", 4, "ngIf"], ["class", "rct-msg-conv-item", 3, "rct-msg-conv-active", "click", 4, "ngFor", "ngForOf"], [1, "rct-msg-chat"], ["class", "rct-msg-chat-empty", 4, "ngIf"], [4, "ngIf"], [1, "rct-msg-badge-unread"], [1, "ti", "ti-search", "rct-msg-search-icon"], [1, "spinner-border", "spinner-border-sm", "rct-msg-search-spin"], [1, "rct-msg-search-dropdown"], ["class", "rct-msg-search-empty", 4, "ngIf"], ["class", "rct-msg-search-item", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "rct-msg-search-empty"], [1, "ti", "ti-user-off"], [1, "rct-msg-search-item", 3, "mousedown"], [1, "rct-msg-search-av", 3, "src", "alt"], [1, "rct-msg-search-info"], [1, "rct-msg-search-name"], [1, "rct-msg-search-sub"], [1, "ti", "ti-plus", "rct-msg-search-plus"], [1, "rct-msg-loading"], ["class", "rct-msg-sk-wrap", 4, "ngFor", "ngForOf"], [1, "rct-msg-sk-wrap"], [1, "rct-msg-sk-av"], [1, "rct-msg-sk-lines"], [1, "rct-msg-sk", "rct-msg-sk-lg"], [1, "rct-msg-sk", "rct-msg-sk-sm"], [1, "rct-msg-error-box"], [1, "ti", "ti-alert-circle"], [1, "rct-msg-conv-empty"], [1, "rct-msg-conv-empty-ico"], [1, "ti", "ti-message-off"], [1, "rct-msg-conv-item", 3, "click"], [1, "rct-msg-conv-av-wrap"], [1, "rct-msg-conv-av", 3, "src", "alt"], [1, "rct-msg-online-dot"], [1, "rct-msg-conv-info"], [1, "rct-msg-conv-row1"], [1, "rct-msg-conv-name"], [1, "rct-msg-conv-time"], [1, "rct-msg-conv-row2"], [1, "rct-msg-conv-preview"], ["class", "rct-msg-you", 4, "ngIf"], ["class", "rct-msg-unread-bubble", 4, "ngIf"], [1, "rct-msg-you"], [1, "rct-msg-unread-bubble"], [1, "rct-msg-chat-empty"], [1, "rct-msg-chat-empty-ico"], [1, "ti", "ti-message-circle-2"], [1, "rct-msg-chat-hd"], [1, "rct-msg-chat-hd-left"], [1, "rct-msg-chat-hd-av-wrap"], [1, "rct-msg-chat-hd-av", 3, "src", "alt"], [1, "rct-msg-chat-hd-info"], [1, "rct-msg-chat-hd-name"], [1, "rct-msg-chat-hd-status"], [1, "rct-msg-online-pulse"], [1, "rct-msg-chat-hd-actions"], [1, "rct-msg-chat-body"], ["class", "rct-msg-messages-loading", 4, "ngIf"], ["class", "rct-msg-messages-err", 4, "ngIf"], ["class", "rct-msg-messages-empty", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "rct-msg-input-area", 3, "click"], ["class", "rct-msg-emoji-picker", 4, "ngIf"], [1, "rct-msg-input-row"], ["title", "\u00C9mojis", 1, "rct-msg-input-btn", 3, "click"], [1, "ti", "ti-mood-smile"], [1, "rct-msg-input-wrap"], ["rows", "1", "placeholder", "\u00C9crivez un message... (Shift+Entr\u00E9e pour nouvelle ligne)", 1, "rct-msg-input", 3, "ngModelChange", "keydown", "ngModel", "disabled"], ["title", "Envoyer (Entr\u00E9e)", 1, "rct-msg-send-btn", 3, "click", "disabled"], [1, "rct-msg-messages-loading"], [1, "spinner-border", "text-primary", 2, "width", "2rem", "height", "2rem"], [1, "rct-msg-messages-err"], [1, "ti", "ti-alert-circle", "me-1"], [1, "rct-msg-messages-empty"], [1, "rct-msg-messages-empty-ico"], [1, "ti", "ti-message-dots"], ["class", "rct-msg-date-sep", 4, "ngIf"], [1, "rct-msg-row"], ["class", "rct-msg-row-av-wrap", 4, "ngIf"], [1, "rct-msg-bubble-wrap"], [1, "rct-msg-bubble"], [1, "rct-msg-text"], [1, "rct-msg-meta"], ["class", "ti ms-1", 3, "ti-checks", "ti-check", "color", 4, "ngIf"], [1, "rct-msg-date-sep"], [1, "rct-msg-row-av-wrap"], [1, "rct-msg-row-av", 3, "src", "alt"], [1, "ti", "ms-1"], [1, "rct-msg-emoji-picker"], ["class", "rct-msg-emoji-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "rct-msg-emoji-item", 3, "click"], [1, "ti", "ti-send-2"], [1, "spinner-border", "spinner-border-sm"]],
      template: function RecruiterMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_Template_div_click_0_listener() {
            return ctx.closeEmojiPicker();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "aside", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Messagerie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, RecruiterMessagesComponent_span_8_Template, 2, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecruiterMessagesComponent_Template_div_click_9_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, RecruiterMessagesComponent_i_11_Template, 1, 0, "i", 10)(12, RecruiterMessagesComponent_span_12_Template, 1, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterMessagesComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.studentSearchQuery, $event) || (ctx.studentSearchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RecruiterMessagesComponent_Template_input_ngModelChange_13_listener() {
            return ctx.onStudentSearch();
          })("blur", function RecruiterMessagesComponent_Template_input_blur_13_listener() {
            return ctx.closeSearchDropdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RecruiterMessagesComponent_div_14_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, RecruiterMessagesComponent_div_16_Template, 2, 2, "div", 15)(17, RecruiterMessagesComponent_div_17_Template, 3, 1, "div", 16)(18, RecruiterMessagesComponent_div_18_Template, 7, 0, "div", 17)(19, RecruiterMessagesComponent_div_19_Template, 15, 9, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "main", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RecruiterMessagesComponent_div_21_Template, 7, 0, "div", 20)(22, RecruiterMessagesComponent_ng_container_22_Template, 29, 13, "ng-container", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalUnread() > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.startingConversationWith);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.startingConversationWith);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.studentSearchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSearchDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingConversations);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.conversationsError);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loadingConversations && !ctx.conversationsError && ctx.conversations.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.conversations);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selectedConversation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedConversation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n.rct-msg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 180px);\n  min-height: 560px;\n  border-radius: 20px;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid rgba(57, 44, 125, 0.1);\n  box-shadow: 0 8px 32px rgba(57, 44, 125, 0.1);\n  animation: _ngcontent-%COMP%_rct-msg-fade 0.4s ease;\n}\n\n\n\n.rct-msg-panel-left[_ngcontent-%COMP%] {\n  width: 320px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(180deg, #fafcff 0%, #f4f7ff 100%);\n}\n\n\n\n.rct-msg-panel-hd[_ngcontent-%COMP%] {\n  padding: 16px 18px 14px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.04));\n}\n\n.rct-msg-panel-hd-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.rct-msg-panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #1e1b4b;\n}\n.rct-msg-panel-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #03C95A;\n}\n\n.rct-msg-badge-unread[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n\n\n\n.rct-msg-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.rct-msg-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1.5px solid rgba(57, 44, 125, 0.12);\n  border-radius: 12px;\n  padding: 8px 12px;\n  box-shadow: 0 2px 8px rgba(57, 44, 125, 0.06);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.rct-msg-search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(57, 44, 125, 0.3);\n  box-shadow: 0 0 0 3px rgba(57, 44, 125, 0.07);\n}\n\n.rct-msg-search-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 15px;\n  flex-shrink: 0;\n}\n\n.rct-msg-search-spin[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.rct-msg-search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  width: 100%;\n  color: #374151;\n}\n.rct-msg-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n\n.rct-msg-search-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n  border-radius: 14px;\n  box-shadow: 0 8px 24px rgba(57, 44, 125, 0.15);\n  z-index: 1050;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_rct-msg-fade 0.15s ease;\n}\n\n.rct-msg-search-empty[_ngcontent-%COMP%] {\n  padding: 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 12px;\n}\n.rct-msg-search-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.rct-msg-search-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.rct-msg-search-item[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.05);\n}\n.rct-msg-search-item[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid rgba(57, 44, 125, 0.07);\n}\n\n.rct-msg-search-av[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid rgba(3, 201, 90, 0.2);\n}\n\n.rct-msg-search-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.rct-msg-search-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e1b4b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.rct-msg-search-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n\n.rct-msg-search-plus[_ngcontent-%COMP%] {\n  color: #03C95A;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n\n\n\n.rct-msg-conv-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.rct-msg-conv-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.rct-msg-conv-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(57, 44, 125, 0.15);\n  border-radius: 10px;\n}\n.rct-msg-conv-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n\n\n.rct-msg-sk-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.06);\n}\n\n.rct-msg-sk-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_rct-msg-sk 1.4s infinite;\n  flex-shrink: 0;\n}\n\n.rct-msg-sk-lines[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.rct-msg-sk[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  display: block;\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_rct-msg-sk 1.4s infinite;\n}\n\n.rct-msg-sk-lg[_ngcontent-%COMP%] {\n  height: 12px;\n  margin-bottom: 6px;\n  width: 70%;\n}\n\n.rct-msg-sk-sm[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 50%;\n}\n\n\n\n.rct-msg-error-box[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 12.5px;\n  color: #dc2626;\n}\n.rct-msg-error-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.rct-msg-conv-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.rct-msg-conv-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.rct-msg-conv-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 11.5px;\n}\n\n.rct-msg-conv-empty-ico[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n}\n.rct-msg-conv-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: rgba(57, 44, 125, 0.3);\n}\n\n\n\n.rct-msg-conv-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 18px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.06);\n  transition: background 0.15s;\n}\n.rct-msg-conv-item[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.035);\n}\n.rct-msg-conv-item.rct-msg-conv-active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.05));\n  border-left: 3px solid #03C95A;\n  padding-left: 15px;\n}\n\n.rct-msg-conv-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n\n.rct-msg-conv-av[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 2px 8px rgba(57, 44, 125, 0.1);\n}\n\n.rct-msg-online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #03C95A;\n  border: 2px solid #fff;\n}\n\n.rct-msg-conv-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.rct-msg-conv-row1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 3px;\n}\n\n.rct-msg-conv-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #1e1b4b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 150px;\n}\n\n.rct-msg-conv-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  flex-shrink: 0;\n  margin-left: 4px;\n}\n\n.rct-msg-conv-row2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n\n.rct-msg-conv-preview[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n\n.rct-msg-you[_ngcontent-%COMP%] {\n  color: #392C7D;\n  font-weight: 600;\n}\n\n.rct-msg-unread-bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03C95A, #059669);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n\n\n\n.rct-msg-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  background: #fff;\n}\n\n\n\n.rct-msg-chat-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  text-align: center;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.03), rgba(57, 44, 125, 0.03));\n}\n.rct-msg-chat-empty[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 800;\n  margin: 16px 0 8px;\n}\n.rct-msg-chat-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 13px;\n  max-width: 280px;\n}\n\n.rct-msg-chat-empty-ico[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.1), rgba(57, 44, 125, 0.08));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid rgba(57, 44, 125, 0.12);\n}\n.rct-msg-chat-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: rgba(57, 44, 125, 0.4);\n}\n\n\n\n.rct-msg-chat-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.05), rgba(57, 44, 125, 0.04));\n}\n\n.rct-msg-chat-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.rct-msg-chat-hd-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n\n.rct-msg-chat-hd-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(3, 201, 90, 0.25);\n  box-shadow: 0 2px 10px rgba(57, 44, 125, 0.12);\n}\n\n.rct-msg-chat-hd-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.rct-msg-chat-hd-name[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 800;\n  color: #1e1b4b;\n}\n\n.rct-msg-chat-hd-status[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #03C95A;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 600;\n}\n\n.rct-msg-online-pulse[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #03C95A;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0 rgba(3, 201, 90, 0.4);\n  animation: _ngcontent-%COMP%_rct-msg-pulse 2s infinite;\n}\n\n.rct-msg-chat-hd-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.rct-msg-action-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 1px solid rgba(57, 44, 125, 0.1);\n  background: rgba(57, 44, 125, 0.04);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #6b7280;\n  transition: all 0.15s;\n}\n.rct-msg-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.rct-msg-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n  border-color: rgba(57, 44, 125, 0.2);\n}\n\n\n\n.rct-msg-chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: linear-gradient(180deg, #f8faff 0%, #f1f4ff 100%);\n}\n.rct-msg-chat-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.rct-msg-chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.rct-msg-chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(57, 44, 125, 0.15);\n  border-radius: 10px;\n}\n\n.rct-msg-messages-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 0;\n}\n\n.rct-msg-messages-err[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n  color: #dc2626;\n  font-size: 13px;\n}\n\n.rct-msg-messages-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  text-align: center;\n  padding: 40px;\n}\n.rct-msg-messages-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #374151;\n  margin: 12px 0 4px;\n}\n.rct-msg-messages-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 12px;\n}\n\n.rct-msg-messages-empty-ico[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n}\n.rct-msg-messages-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(57, 44, 125, 0.35);\n}\n\n\n\n.rct-msg-date-sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 14px 0 8px;\n}\n.rct-msg-date-sep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  background: rgba(57, 44, 125, 0.06);\n  padding: 4px 12px;\n  border-radius: 20px;\n  letter-spacing: 0.4px;\n}\n.rct-msg-date-sep[_ngcontent-%COMP%]::before, .rct-msg-date-sep[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: rgba(57, 44, 125, 0.1);\n}\n\n\n\n.rct-msg-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_rct-msg-in 0.22s ease;\n  margin-bottom: 4px;\n}\n.rct-msg-row.rct-msg-mine[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rct-msg-row.rct-msg-theirs[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.rct-msg-row-av-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.rct-msg-row-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(57, 44, 125, 0.12);\n}\n\n.rct-msg-bubble-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 65%;\n}\n\n.rct-msg-mine[_ngcontent-%COMP%]   .rct-msg-bubble-wrap[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n\n.rct-msg-theirs[_ngcontent-%COMP%]   .rct-msg-bubble-wrap[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n\n.rct-msg-bubble[_ngcontent-%COMP%] {\n  padding: 11px 15px;\n  border-radius: 18px;\n  word-break: break-word;\n  line-height: 1.6;\n}\n.rct-msg-bubble.rct-msg-bubble-mine[_ngcontent-%COMP%] {\n  background: #c6ecd8;\n  color: #1a4731;\n  border: 1px solid rgba(3, 201, 90, 0.22);\n  border-bottom-right-radius: 4px;\n  box-shadow: 0 1px 4px rgba(3, 201, 90, 0.15);\n}\n.rct-msg-bubble.rct-msg-bubble-theirs[_ngcontent-%COMP%] {\n  background: #edeae4;\n  color: #2d2926;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-bottom-left-radius: 4px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n\n.rct-msg-text[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n}\n\n.rct-msg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 10px;\n  margin-top: 5px;\n  color: rgba(57, 44, 125, 0.45);\n}\n.rct-msg-mine[_ngcontent-%COMP%]   .rct-msg-meta[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  color: rgba(3, 100, 50, 0.5);\n}\n\n\n\n.rct-msg-input-area[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(57, 44, 125, 0.09);\n  background: #fff;\n  position: relative;\n  padding: 12px 16px;\n}\n\n\n\n.rct-msg-emoji-picker[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 16px;\n  background: #fff;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n  border-radius: 14px;\n  padding: 10px 12px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  max-width: 280px;\n  box-shadow: 0 8px 24px rgba(57, 44, 125, 0.15);\n  animation: _ngcontent-%COMP%_rct-msg-fade 0.15s ease;\n  z-index: 100;\n}\n\n.rct-msg-emoji-item[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.1s, transform 0.1s;\n}\n.rct-msg-emoji-item[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.08);\n  transform: scale(1.2);\n}\n\n.rct-msg-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n\n.rct-msg-input-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n  background: rgba(57, 44, 125, 0.04);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #6b7280;\n  flex-shrink: 0;\n  transition: all 0.15s;\n}\n.rct-msg-input-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.rct-msg-input-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.1);\n  color: #392C7D;\n}\n\n.rct-msg-input-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.rct-msg-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid rgba(57, 44, 125, 0.15);\n  border-radius: 14px;\n  padding: 10px 14px;\n  font-size: 13.5px;\n  resize: none;\n  max-height: 100px;\n  overflow-y: auto;\n  background: #fff;\n  color: #1e1b4b;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.rct-msg-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(57, 44, 125, 0.35);\n  box-shadow: 0 0 0 3px rgba(57, 44, 125, 0.07);\n}\n.rct-msg-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.rct-msg-input[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.rct-msg-input[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(57, 44, 125, 0.2);\n  border-radius: 10px;\n}\n\n.rct-msg-send-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(3, 201, 90, 0.4);\n  transition: transform 0.18s, box-shadow 0.18s;\n}\n.rct-msg-send-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.rct-msg-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n  box-shadow: 0 6px 22px rgba(3, 201, 90, 0.55);\n}\n.rct-msg-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_rct-msg-fade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-msg-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-msg-sk {\n  from {\n    background-position: 200% center;\n  }\n  to {\n    background-position: -200% center;\n  }\n}\n@keyframes _ngcontent-%COMP%_rct-msg-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(3, 201, 90, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(3, 201, 90, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(3, 201, 90, 0);\n  }\n}\n\n\n.dark-mode[_nghost-%COMP%]   .rct-msg-wrapper[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-wrapper[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.07);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-panel-left[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-panel-left[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #1a1a2b, #111119);\n  border-right-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-panel-hd[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-panel-hd[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.07));\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-panel-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-panel-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-box[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-search-box[_ngcontent-%COMP%] {\n  background: #111119;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-box[_ngcontent-%COMP%]:focus-within, .dark-mode   [_nghost-%COMP%]   .rct-msg-search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(57, 44, 125, 0.4);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-search-input[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-input[_ngcontent-%COMP%]::placeholder, .dark-mode   [_nghost-%COMP%]   .rct-msg-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #4b5563;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-dropdown[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-search-dropdown[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-search-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-msg-search-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-search-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-search-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-conv-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-conv-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-conv-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-msg-conv-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-conv-item.rct-msg-conv-active[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-conv-item.rct-msg-conv-active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.07));\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-conv-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-conv-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-sk[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-sk[_ngcontent-%COMP%], .dark-mode[_nghost-%COMP%]   .rct-msg-sk-av[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-sk-av[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1a1a2b 25%, #222235 50%, #1a1a2b 75%) !important;\n  background-size: 200% 100%;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-chat[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-chat[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-chat-empty[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-chat-empty[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.04), rgba(57, 44, 125, 0.04));\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-chat-empty[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-chat-empty[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-chat-hd[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-chat-hd[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.08));\n  border-bottom-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-chat-hd-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-chat-hd-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-chat-body[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-chat-body[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #111119, #0d0d17);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-bubble-theirs[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-bubble-theirs[_ngcontent-%COMP%] {\n  background: #1e243a !important;\n  color: #e2e8f0 !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-bubble-mine[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-bubble-mine[_ngcontent-%COMP%] {\n  background: #0d2e1e !important;\n  color: #a7f3d0 !important;\n  border-color: rgba(3, 201, 90, 0.2) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-input-area[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-input-area[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-top-color: rgba(255, 255, 255, 0.07);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-input[_ngcontent-%COMP%] {\n  background: #111119;\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-input[_ngcontent-%COMP%]::placeholder, .dark-mode   [_nghost-%COMP%]   .rct-msg-input[_ngcontent-%COMP%]::placeholder {\n  color: #4b5563;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-input[_ngcontent-%COMP%]:focus, .dark-mode   [_nghost-%COMP%]   .rct-msg-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(57, 44, 125, 0.35);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-action-btn[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-action-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #9ca3af;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-action-btn[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-msg-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.15);\n  color: #a78bfa;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-input-btn[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-input-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.08);\n  color: #9ca3af;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-input-btn[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-msg-input-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.15);\n  color: #a78bfa;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-emoji-picker[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-emoji-picker[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-emoji-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-msg-emoji-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-date-sep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-date-sep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(57, 44, 125, 0.15);\n  color: #6b7280;\n}\n.dark-mode[_nghost-%COMP%]   .rct-msg-messages-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-messages-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL3JlY3J1aXRlci1tZXNzYWdlcy9yZWNydWl0ZXItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Z0ZBQUE7QUFLQSxtRkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQSxtRkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDZEQUFBO0FBQ0Y7O0FBRUEsaUJBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvRkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLG1CQUFBO0FBS3RFOztBQUhBO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7RUFDcEMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBVXJDO0FBVEU7RUFBSSxlQUFBO0VBQWlCLGNBQUE7QUFhdkI7O0FBWEE7RUFDRSxxREFBQTtFQUFxRCxXQUFBO0VBQ3JELGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsbUJBQUE7RUFDckQsNENBQUE7QUFrQkY7O0FBZkEsZUFBQTtBQUNBO0VBQXVCLGtCQUFBO0FBbUJ2Qjs7QUFsQkE7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtFQUNwQyxnQkFBQTtFQUFrQiwyQ0FBQTtFQUNsQixtQkFBQTtFQUFxQixpQkFBQTtFQUNyQiw2Q0FBQTtFQUNBLDhDQUFBO0FBeUJGO0FBeEJFO0VBQWlCLG9DQUFBO0VBQWtDLDZDQUFBO0FBNEJyRDs7QUExQkE7RUFBdUIsY0FBQTtFQUFnQixl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QThwQjlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBSZWNydWl0ZXIgTWVzc2FnZXMgw6LCgMKUIFByZW1pdW0gUmVkZXNpZ24gdjJcbiAgIFBhbGV0dGU6IEVtZXJhbGQgIzAzQzk1QSDDgsK3IFZpb2xldCAjMzkyQzdEIMOCwrcgU2t5ICMwRENBRjBcbiAgIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkCAqL1xuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgV3JhcHBlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5yY3QtbXNnLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XG4gIG1pbi1oZWlnaHQ6IDU2MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMSk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSg1Nyw0NCwxMjUsLjEpO1xuICBhbmltYXRpb246IHJjdC1tc2ctZmFkZSAuNHMgZWFzZTtcbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIExFRlQgUEFORUwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ucmN0LW1zZy1wYW5lbC1sZWZ0IHtcbiAgd2lkdGg6IDMyMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjA5KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjZmFmY2ZmIDAlLCNmNGY3ZmYgMTAwJSk7XG59XG5cbi8qIFBhbmVsIGhlYWRlciAqL1xuLnJjdC1tc2ctcGFuZWwtaGQge1xuICBwYWRkaW5nOiAxNnB4IDE4cHggMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4wOSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMDYpLHJnYmEoNTcsNDQsMTI1LC4wNCkpO1xufVxuLnJjdC1tc2ctcGFuZWwtaGQtdG9wIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnJjdC1tc2ctcGFuZWwtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogIzFlMWI0YjtcbiAgaSB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICMwM0M5NUE7IH1cbn1cbi5yY3QtbXNnLWJhZGdlLXVucmVhZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsI2VmNDQ0NCwjZGMyNjI2KTsgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMjM5LDY4LDY4LC4zKTtcbn1cblxuLyogU2VhcmNoIGJveCAqL1xuLnJjdC1tc2ctc2VhcmNoLXdyYXAgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5yY3QtbXNnLXNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMTIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNTcsNDQsMTI1LC4wNik7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzO1xuICAmOmZvY3VzLXdpdGhpbiB7IGJvcmRlci1jb2xvcjogcmdiYSg1Nyw0NCwxMjUsLjMpOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1Nyw0NCwxMjUsLjA3KTsgfVxufVxuLnJjdC1tc2ctc2VhcmNoLWljb24geyBjb2xvcjogIzljYTNhZjsgZm9udC1zaXplOiAxNXB4OyBmbGV4LXNocmluazogMDsgfVxuLnJjdC1tc2ctc2VhcmNoLXNwaW4geyBmbGV4LXNocmluazogMDsgfVxuLnJjdC1tc2ctc2VhcmNoLWlucHV0IHtcbiAgYm9yZGVyOiBub25lOyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxM3B4OyB3aWR0aDogMTAwJTsgY29sb3I6ICMzNzQxNTE7XG4gICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICM5Y2EzYWY7IH1cbn1cbi5yY3QtbXNnLXNlYXJjaC1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiBjYWxjKDEwMCUgKyA2cHgpOyBsZWZ0OiAwOyByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDsgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDU3LDQ0LDEyNSwuMTUpO1xuICB6LWluZGV4OiAxMDUwOyBvdmVyZmxvdzogaGlkZGVuOyBhbmltYXRpb246IHJjdC1tc2ctZmFkZSAuMTVzIGVhc2U7XG59XG4ucmN0LW1zZy1zZWFyY2gtZW1wdHkge1xuICBwYWRkaW5nOiAxNHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjOWNhM2FmOyBmb250LXNpemU6IDEycHg7XG4gIGkgeyBtYXJnaW4tcmlnaHQ6IDZweDsgfVxufVxuLnJjdC1tc2ctc2VhcmNoLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xMnM7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDU3LDQ0LDEyNSwuMDUpOyB9XG4gICY6bm90KDpsYXN0LWNoaWxkKSB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMDcpOyB9XG59XG4ucmN0LW1zZy1zZWFyY2gtYXYgeyB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG9iamVjdC1maXQ6IGNvdmVyOyBmbGV4LXNocmluazogMDsgYm9yZGVyOiAycHggc29saWQgcmdiYSgzLDIwMSw5MCwuMik7IH1cbi5yY3QtbXNnLXNlYXJjaC1pbmZvIHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4ucmN0LW1zZy1zZWFyY2gtbmFtZSB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMxZTFiNGI7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4ucmN0LW1zZy1zZWFyY2gtc3ViIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogIzljYTNhZjsgfVxuLnJjdC1tc2ctc2VhcmNoLXBsdXMgeyBjb2xvcjogIzAzQzk1QTsgZm9udC1zaXplOiAxNnB4OyBmbGV4LXNocmluazogMDsgfVxuXG4vKiBDb252ZXJzYXRpb25zIGxpc3QgKi9cbi5yY3QtbXNnLWNvbnYtbGlzdCB7IGZsZXg6IDE7IG92ZXJmbG93LXk6IGF1dG87ICY6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjRweH0gJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMTUpO2JvcmRlci1yYWRpdXM6MTBweH0gJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0gfVxuXG4vKiBTa2VsZXRvbiAqL1xuLnJjdC1tc2ctc2std3JhcCB7IGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7cGFkZGluZzoxMnB4IDE2cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjA2KTsgfVxuLnJjdC1tc2ctc2stYXYgeyB3aWR0aDo0NHB4O2hlaWdodDo0NHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCNmMGY0ZjggMjUlLCNlMmVhZjAgNTAlLCNmMGY0ZjggNzUlKTtiYWNrZ3JvdW5kLXNpemU6MjAwJSAxMDAlO2FuaW1hdGlvbjpyY3QtbXNnLXNrIDEuNHMgaW5maW5pdGU7ZmxleC1zaHJpbms6MDsgfVxuLnJjdC1tc2ctc2stbGluZXMgeyBmbGV4OjE7IH1cbi5yY3QtbXNnLXNrIHsgYm9yZGVyLXJhZGl1czo2cHg7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjZjBmNGY4IDI1JSwjZTJlYWYwIDUwJSwjZjBmNGY4IDc1JSk7YmFja2dyb3VuZC1zaXplOjIwMCUgMTAwJTthbmltYXRpb246cmN0LW1zZy1zayAxLjRzIGluZmluaXRlOyB9XG4ucmN0LW1zZy1zay1sZyB7IGhlaWdodDoxMnB4O21hcmdpbi1ib3R0b206NnB4O3dpZHRoOjcwJTsgfVxuLnJjdC1tc2ctc2stc20geyBoZWlnaHQ6MTBweDt3aWR0aDo1MCU7IH1cblxuLyogRXJyb3JzIC8gZW1wdHkgKi9cbi5yY3QtbXNnLWVycm9yLWJveCB7IHBhZGRpbmc6MTRweCAxNnB4O2ZvbnQtc2l6ZToxMi41cHg7Y29sb3I6I2RjMjYyNjsgaXttYXJnaW4tcmlnaHQ6NnB4O30gfVxuLnJjdC1tc2ctY29udi1lbXB0eSB7XG4gIGRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzo0MHB4IDIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XG4gIHAgeyBmb250LXNpemU6MTMuNXB4O2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMzc0MTUxO21hcmdpbjowIDAgNHB4OyB9XG4gIHNtYWxsIHsgY29sb3I6IzljYTNhZjtmb250LXNpemU6MTEuNXB4OyB9XG59XG4ucmN0LW1zZy1jb252LWVtcHR5LWljbyB7XG4gIHdpZHRoOjYwcHg7aGVpZ2h0OjYwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMywyMDEsOTAsLjA4KSxyZ2JhKDU3LDQ0LDEyNSwuMDYpKTtcbiAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206MTJweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4xMik7XG4gIGkgeyBmb250LXNpemU6MjZweDtjb2xvcjpyZ2JhKDU3LDQ0LDEyNSwuMyk7IH1cbn1cblxuLyogQ29udmVyc2F0aW9uIGl0ZW1zICovXG4ucmN0LW1zZy1jb252LWl0ZW0ge1xuICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O3BhZGRpbmc6MTNweCAxOHB4O1xuICBjdXJzb3I6cG9pbnRlcjtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMDYpO1xuICB0cmFuc2l0aW9uOmJhY2tncm91bmQgLjE1cztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6cmdiYSg1Nyw0NCwxMjUsLjAzNSk7IH1cbiAgJi5yY3QtbXNnLWNvbnYtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMywyMDEsOTAsLjA4KSxyZ2JhKDU3LDQ0LDEyNSwuMDUpKTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwM0M5NUE7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG59XG4ucmN0LW1zZy1jb252LWF2LXdyYXAgeyBwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LXNocmluazowOyB9XG4ucmN0LW1zZy1jb252LWF2IHsgd2lkdGg6NDZweDtoZWlnaHQ6NDZweDtib3JkZXItcmFkaXVzOjUwJTtvYmplY3QtZml0OmNvdmVyO2JvcmRlcjoycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuOCk7Ym94LXNoYWRvdzowIDJweCA4cHggcmdiYSg1Nyw0NCwxMjUsLjEpOyB9XG4ucmN0LW1zZy1vbmxpbmUtZG90IHsgcG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjFweDtyaWdodDoxcHg7d2lkdGg6MTFweDtoZWlnaHQ6MTFweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiMwM0M5NUE7Ym9yZGVyOjJweCBzb2xpZCAjZmZmOyB9XG4ucmN0LW1zZy1jb252LWluZm8geyBmbGV4OjE7bWluLXdpZHRoOjA7IH1cbi5yY3QtbXNnLWNvbnYtcm93MSB7IGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpiYXNlbGluZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tYm90dG9tOjNweDsgfVxuLnJjdC1tc2ctY29udi1uYW1lIHsgZm9udC1zaXplOjEzLjVweDtmb250LXdlaWdodDo3MDA7Y29sb3I6IzFlMWI0YjtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7bWF4LXdpZHRoOjE1MHB4OyB9XG4ucmN0LW1zZy1jb252LXRpbWUgeyBmb250LXNpemU6MTBweDtjb2xvcjojOWNhM2FmO2ZsZXgtc2hyaW5rOjA7bWFyZ2luLWxlZnQ6NHB4OyB9XG4ucmN0LW1zZy1jb252LXJvdzIgeyBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDo2cHg7IH1cbi5yY3QtbXNnLWNvbnYtcHJldmlldyB7IGZvbnQtc2l6ZToxMnB4O2NvbG9yOiM2YjcyODA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO2ZsZXg6MTsgfVxuLnJjdC1tc2cteW91IHsgY29sb3I6ICMzOTJDN0Q7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5yY3QtbXNnLXVucmVhZC1idWJibGUgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAzQzk1QSwjMDU5NjY5KTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjcwMDtwYWRkaW5nOjFweCA3cHg7Ym9yZGVyLXJhZGl1czoyMHB4O2ZsZXgtc2hyaW5rOjA7IH1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIFJJR0hUOiBDSEFUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnJjdC1tc2ctY2hhdCB7XG4gIGZsZXg6MTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDowO2JhY2tncm91bmQ6I2ZmZjtcbn1cblxuLyogRW1wdHkgc3RhdGUgKi9cbi5yY3QtbXNnLWNoYXQtZW1wdHkge1xuICBmbGV4OjE7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgcGFkZGluZzo0MHB4O3RleHQtYWxpZ246Y2VudGVyO1xuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMDMpLHJnYmEoNTcsNDQsMTI1LC4wMykpO1xuICBoNSB7IGNvbG9yOiMzNzQxNTE7Zm9udC13ZWlnaHQ6ODAwO21hcmdpbjoxNnB4IDAgOHB4OyB9XG4gIHAgeyBjb2xvcjojOWNhM2FmO2ZvbnQtc2l6ZToxM3B4O21heC13aWR0aDoyODBweDsgfVxufVxuLnJjdC1tc2ctY2hhdC1lbXB0eS1pY28ge1xuICB3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlci1yYWRpdXM6NTAlO1xuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMSkscmdiYSg1Nyw0NCwxMjUsLjA4KSk7XG4gIGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMTIpO1xuICBpIHsgZm9udC1zaXplOjM2cHg7Y29sb3I6cmdiYSg1Nyw0NCwxMjUsLjQpOyB9XG59XG5cbi8qIENoYXQgaGVhZGVyICovXG4ucmN0LW1zZy1jaGF0LWhkIHtcbiAgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzoxNHB4IDIwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjA5KTtcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMywyMDEsOTAsLjA1KSxyZ2JhKDU3LDQ0LDEyNSwuMDQpKTtcbn1cbi5yY3QtbXNnLWNoYXQtaGQtbGVmdCB7IGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEycHg7IH1cbi5yY3QtbXNnLWNoYXQtaGQtYXYtd3JhcCB7IHBvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtc2hyaW5rOjA7IH1cbi5yY3QtbXNnLWNoYXQtaGQtYXYgeyB3aWR0aDo0NHB4O2hlaWdodDo0NHB4O2JvcmRlci1yYWRpdXM6NTAlO29iamVjdC1maXQ6Y292ZXI7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDMsMjAxLDkwLC4yNSk7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoNTcsNDQsMTI1LC4xMik7IH1cbi5yY3QtbXNnLWNoYXQtaGQtaW5mbyB7IGRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47IH1cbi5yY3QtbXNnLWNoYXQtaGQtbmFtZSB7IGZvbnQtc2l6ZToxNC41cHg7Zm9udC13ZWlnaHQ6ODAwO2NvbG9yOiMxZTFiNGI7IH1cbi5yY3QtbXNnLWNoYXQtaGQtc3RhdHVzIHsgZm9udC1zaXplOjExLjVweDtjb2xvcjojMDNDOTVBO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjVweDtmb250LXdlaWdodDo2MDA7IH1cbi5yY3QtbXNnLW9ubGluZS1wdWxzZSB7XG4gIHdpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6IzAzQzk1QTtmbGV4LXNocmluazowO1xuICBib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgzLDIwMSw5MCwuNCk7YW5pbWF0aW9uOnJjdC1tc2ctcHVsc2UgMnMgaW5maW5pdGU7XG59XG4ucmN0LW1zZy1jaGF0LWhkLWFjdGlvbnMgeyBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7IH1cbi5yY3QtbXNnLWFjdGlvbi1idG4ge1xuICB3aWR0aDozNnB4O2hlaWdodDozNnB4O2JvcmRlci1yYWRpdXM6MTBweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4xKTtcbiAgYmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMDQpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgY3Vyc29yOnBvaW50ZXI7Y29sb3I6IzZiNzI4MDt0cmFuc2l0aW9uOmFsbCAuMTVzO1xuICBpIHsgZm9udC1zaXplOjE2cHg7IH1cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6cmdiYSg1Nyw0NCwxMjUsLjEpO2NvbG9yOiMzOTJDN0Q7Ym9yZGVyLWNvbG9yOnJnYmEoNTcsNDQsMTI1LC4yKTsgfVxufVxuXG4vKiBNZXNzYWdlcyBhcmVhICovXG4ucmN0LW1zZy1jaGF0LWJvZHkge1xuICBmbGV4OjE7b3ZlcmZsb3cteTphdXRvO3BhZGRpbmc6MjBweCAyMnB4O1xuICBkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo0cHg7XG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjZjhmYWZmIDAlLCNmMWY0ZmYgMTAwJSk7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjVweH0gJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0gJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMTUpO2JvcmRlci1yYWRpdXM6MTBweH1cbn1cbi5yY3QtbXNnLW1lc3NhZ2VzLWxvYWRpbmcgeyBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzo0MHB4IDA7IH1cbi5yY3QtbXNnLW1lc3NhZ2VzLWVyciB7IHRleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MjBweCAwO2NvbG9yOiNkYzI2MjY7Zm9udC1zaXplOjEzcHg7IH1cbi5yY3QtbXNnLW1lc3NhZ2VzLWVtcHR5IHtcbiAgZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo0MHB4O1xuICBwIHsgZm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMzNzQxNTE7bWFyZ2luOjEycHggMCA0cHg7IH1cbiAgc21hbGwgeyBjb2xvcjojOWNhM2FmO2ZvbnQtc2l6ZToxMnB4OyB9XG59XG4ucmN0LW1zZy1tZXNzYWdlcy1lbXB0eS1pY28geyB3aWR0aDo2NHB4O2hlaWdodDo2NHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDMsMjAxLDkwLC4wOCkscmdiYSg1Nyw0NCwxMjUsLjA2KSk7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlcjoxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjEyKTsgaSB7IGZvbnQtc2l6ZToyOHB4O2NvbG9yOnJnYmEoNTcsNDQsMTI1LC4zNSk7IH0gfVxuXG4vKiBEYXRlIHNlcGFyYXRvciAqL1xuLnJjdC1tc2ctZGF0ZS1zZXAge1xuICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O21hcmdpbjoxNHB4IDAgOHB4O1xuICBzcGFuIHsgZm9udC1zaXplOjExcHg7Y29sb3I6IzljYTNhZjtmb250LXdlaWdodDo2MDA7YmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMDYpO3BhZGRpbmc6NHB4IDEycHg7Ym9yZGVyLXJhZGl1czoyMHB4O2xldHRlci1zcGFjaW5nOi40cHg7IH1cbiAgJjo6YmVmb3JlLCAmOjphZnRlciB7IGNvbnRlbnQ6Jyc7ZmxleDoxO2hlaWdodDoxcHg7YmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMSk7IH1cbn1cblxuLyogTWVzc2FnZSByb3dzICovXG4ucmN0LW1zZy1yb3cge1xuICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1lbmQ7Z2FwOjhweDthbmltYXRpb246cmN0LW1zZy1pbiAuMjJzIGVhc2U7XG4gICYucmN0LW1zZy1taW5lIHsgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7IH1cbiAgJi5yY3QtbXNnLXRoZWlycyB7IGZsZXgtZGlyZWN0aW9uOnJvdzsgfVxuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ucmN0LW1zZy1yb3ctYXYtd3JhcCB7IGZsZXgtc2hyaW5rOjA7IH1cbi5yY3QtbXNnLXJvdy1hdiB7IHdpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7Ym9yZGVyLXJhZGl1czo1MCU7b2JqZWN0LWZpdDpjb3Zlcjtib3JkZXI6MnB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4xMik7IH1cblxuLnJjdC1tc2ctYnViYmxlLXdyYXAgeyBkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21heC13aWR0aDo2NSU7IH1cbi5yY3QtbXNnLW1pbmUgLnJjdC1tc2ctYnViYmxlLXdyYXAgeyBhbGlnbi1pdGVtczpmbGV4LWVuZDsgfVxuLnJjdC1tc2ctdGhlaXJzIC5yY3QtbXNnLWJ1YmJsZS13cmFwIHsgYWxpZ24taXRlbXM6ZmxleC1zdGFydDsgfVxuXG4ucmN0LW1zZy1idWJibGUge1xuICBwYWRkaW5nOjExcHggMTVweDtib3JkZXItcmFkaXVzOjE4cHg7d29yZC1icmVhazpicmVhay13b3JkO2xpbmUtaGVpZ2h0OjEuNjtcbiAgJi5yY3QtbXNnLWJ1YmJsZS1taW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzZlY2Q4O1xuICAgIGNvbG9yOiAjMWE0NzMxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywyMDEsOTAsLjIyKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDMsMjAxLDkwLC4xNSk7XG4gIH1cbiAgJi5yY3QtbXNnLWJ1YmJsZS10aGVpcnMge1xuICAgIGJhY2tncm91bmQ6ICNlZGVhZTQ7XG4gICAgY29sb3I6ICMyZDI5MjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDgpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMDYpO1xuICB9XG59XG4ucmN0LW1zZy10ZXh0IHsgZm9udC1zaXplOiAxMy41cHg7IH1cbi5yY3QtbXNnLW1ldGEge1xuICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDozcHg7Zm9udC1zaXplOjEwcHg7bWFyZ2luLXRvcDo1cHg7XG4gIGNvbG9yOiByZ2JhKDU3LDQ0LDEyNSwuNDUpO1xuICAucmN0LW1zZy1taW5lICYgeyBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7IGNvbG9yOiByZ2JhKDMsMTAwLDUwLC41KTsgfVxufVxuXG4vKiDDosKUwoDDosKUwoDDosKUwoAgSU5QVVQgQVJFQSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5yY3QtbXNnLWlucHV0LWFyZWEge1xuICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMDkpO2JhY2tncm91bmQ6I2ZmZjtcbiAgcG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzoxMnB4IDE2cHg7XG59XG5cbi8qIEVtb2ppIHBpY2tlciAqL1xuLnJjdC1tc2ctZW1vamktcGlja2VyIHtcbiAgcG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOmNhbGMoMTAwJSArIDZweCk7bGVmdDoxNnB4O1xuICBiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMTIpO1xuICBib3JkZXItcmFkaXVzOjE0cHg7cGFkZGluZzoxMHB4IDEycHg7XG4gIGRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6NnB4O21heC13aWR0aDoyODBweDtcbiAgYm94LXNoYWRvdzowIDhweCAyNHB4IHJnYmEoNTcsNDQsMTI1LC4xNSk7XG4gIGFuaW1hdGlvbjpyY3QtbXNnLWZhZGUgLjE1cyBlYXNlO3otaW5kZXg6MTAwO1xufVxuLnJjdC1tc2ctZW1vamktaXRlbSB7XG4gIHdpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBmb250LXNpemU6MThweDtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjhweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjFzLHRyYW5zZm9ybSAuMXM7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOnJnYmEoNTcsNDQsMTI1LC4wOCk7dHJhbnNmb3JtOnNjYWxlKDEuMik7IH1cbn1cblxuLnJjdC1tc2ctaW5wdXQtcm93IHsgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmZsZXgtZW5kO2dhcDo4cHg7IH1cbi5yY3QtbXNnLWlucHV0LWJ0biB7XG4gIHdpZHRoOjM4cHg7aGVpZ2h0OjM4cHg7Ym9yZGVyLXJhZGl1czoxMHB4O2JvcmRlcjoxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjEyKTtcbiAgYmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMDQpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgY3Vyc29yOnBvaW50ZXI7Y29sb3I6IzZiNzI4MDtmbGV4LXNocmluazowO3RyYW5zaXRpb246YWxsIC4xNXM7XG4gIGkgeyBmb250LXNpemU6MThweDsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMSk7Y29sb3I6IzM5MkM3RDsgfVxufVxuLnJjdC1tc2ctaW5wdXQtd3JhcCB7IGZsZXg6MTsgfVxuLnJjdC1tc2ctaW5wdXQge1xuICB3aWR0aDoxMDAlO2JvcmRlcjoxLjVweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMTUpO2JvcmRlci1yYWRpdXM6MTRweDtcbiAgcGFkZGluZzoxMHB4IDE0cHg7Zm9udC1zaXplOjEzLjVweDtyZXNpemU6bm9uZTtcbiAgbWF4LWhlaWdodDoxMDBweDtvdmVyZmxvdy15OmF1dG87YmFja2dyb3VuZDojZmZmO2NvbG9yOiMxZTFiNGI7XG4gIHRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4ycyxib3gtc2hhZG93IC4ycztcbiAgJjpmb2N1cyB7IG91dGxpbmU6bm9uZTtib3JkZXItY29sb3I6cmdiYSg1Nyw0NCwxMjUsLjM1KTtib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDU3LDQ0LDEyNSwuMDcpOyB9XG4gICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6IzljYTNhZjsgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOjNweDsgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6cmdiYSg1Nyw0NCwxMjUsLjIpO2JvcmRlci1yYWRpdXM6MTBweDsgfVxufVxuLnJjdC1tc2ctc2VuZC1idG4ge1xuICB3aWR0aDo0NHB4O2hlaWdodDo0NHB4O2JvcmRlci1yYWRpdXM6NTAlO2ZsZXgtc2hyaW5rOjA7XG4gIGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMwM0M5NUEsIzA1OTY2OSk7XG4gIGJvcmRlcjpub25lO2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7XG4gIGJveC1zaGFkb3c6MCA0cHggMTRweCByZ2JhKDMsMjAxLDkwLC40KTtcbiAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjE4cyxib3gtc2hhZG93IC4xOHM7XG4gIGkgeyBmb250LXNpemU6MTlweDsgfVxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgdHJhbnNmb3JtOnNjYWxlKDEuMSk7Ym94LXNoYWRvdzowIDZweCAyMnB4IHJnYmEoMywyMDEsOTAsLjU1KTsgfVxuICAmOmRpc2FibGVkIHsgb3BhY2l0eTouNTtjdXJzb3I6bm90LWFsbG93ZWQ7dHJhbnNmb3JtOm5vbmU7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIEFuaW1hdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG5Aa2V5ZnJhbWVzIHJjdC1tc2ctZmFkZSB7IGZyb217b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDhweCl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfSB9XG5Aa2V5ZnJhbWVzIHJjdC1tc2ctaW4gICB7IGZyb217b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDRweCl9dG97b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfSB9XG5Aa2V5ZnJhbWVzIHJjdC1tc2ctc2sgICB7IGZyb217YmFja2dyb3VuZC1wb3NpdGlvbjoyMDAlIGNlbnRlcn10b3tiYWNrZ3JvdW5kLXBvc2l0aW9uOi0yMDAlIGNlbnRlcn0gfVxuQGtleWZyYW1lcyByY3QtbXNnLXB1bHNlIHtcbiAgMCUgIHsgYm94LXNoYWRvdzowIDAgMCAwIHJnYmEoMywyMDEsOTAsLjQpOyB9XG4gIDcwJSB7IGJveC1zaGFkb3c6MCAwIDAgNnB4IHJnYmEoMywyMDEsOTAsMCk7IH1cbiAgMTAwJXsgYm94LXNoYWRvdzowIDAgMCAwIHJnYmEoMywyMDEsOTAsMCk7IH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAIERBUksgTU9ERSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbjpob3N0LWNvbnRleHQoLmRhcmstbW9kZSkge1xuICAucmN0LW1zZy13cmFwcGVyIHsgYmFja2dyb3VuZDojMWExYTJiO2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNyk7Ym94LXNoYWRvdzowIDhweCAzMnB4IHJnYmEoMCwwLDAsLjQpOyB9XG4gIC5yY3QtbXNnLXBhbmVsLWxlZnQgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIzFhMWEyYiwjMTExMTE5KTtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDcpOyB9XG4gIC5yY3QtbXNnLXBhbmVsLWhkIHsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMywyMDEsOTAsLjA2KSxyZ2JhKDU3LDQ0LDEyNSwuMDcpKTtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgfVxuICAucmN0LW1zZy1wYW5lbC10aXRsZSB7IGNvbG9yOiNlMmU4ZjA7IH1cbiAgLnJjdC1tc2ctc2VhcmNoLWJveCB7IGJhY2tncm91bmQ6IzExMTExOTtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSk7ICY6Zm9jdXMtd2l0aGlue2JvcmRlci1jb2xvcjpyZ2JhKDU3LDQ0LDEyNSwuNCk7fSB9XG4gIC5yY3QtbXNnLXNlYXJjaC1pbnB1dCB7IGNvbG9yOiNlMmU4ZjA7ICY6OnBsYWNlaG9sZGVye2NvbG9yOiM0YjU1NjM7fSB9XG4gIC5yY3QtbXNnLXNlYXJjaC1kcm9wZG93biB7IGJhY2tncm91bmQ6IzFhMWEyYjtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDgpO2JveC1zaGFkb3c6MCA4cHggMjRweCByZ2JhKDAsMCwwLC4zNSk7IH1cbiAgLnJjdC1tc2ctc2VhcmNoLWl0ZW0geyAmOmhvdmVye2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDUpO30gYm9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wNik7IH1cbiAgLnJjdC1tc2ctc2VhcmNoLW5hbWUgeyBjb2xvcjojZTJlOGYwOyB9XG4gIC5yY3QtbXNnLWNvbnYtaXRlbSB7IGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDYpOyAmOmhvdmVye2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDQpO30gJi5yY3QtbXNnLWNvbnYtYWN0aXZle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDMsMjAxLDkwLC4wOCkscmdiYSg1Nyw0NCwxMjUsLjA3KSk7fSB9XG4gIC5yY3QtbXNnLWNvbnYtbmFtZSB7IGNvbG9yOiNlMmU4ZjA7IH1cbiAgLnJjdC1tc2ctc2ssIC5yY3QtbXNnLXNrLWF2IHsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzFhMWEyYiAyNSUsIzIyMjIzNSA1MCUsIzFhMWEyYiA3NSUpICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1zaXplOjIwMCUgMTAwJTsgfVxuICAucmN0LW1zZy1jaGF0IHsgYmFja2dyb3VuZDojMWExYTJiOyB9XG4gIC5yY3QtbXNnLWNoYXQtZW1wdHkgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgzLDIwMSw5MCwuMDQpLHJnYmEoNTcsNDQsMTI1LC4wNCkpOyBoNXtjb2xvcjojZTJlOGYwO30gfVxuICAucmN0LW1zZy1jaGF0LWhkIHsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMywyMDEsOTAsLjA2KSxyZ2JhKDU3LDQ0LDEyNSwuMDgpKTtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgfVxuICAucmN0LW1zZy1jaGF0LWhkLW5hbWUgeyBjb2xvcjojZTJlOGYwOyB9XG4gIC5yY3QtbXNnLWNoYXQtYm9keSB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjMTExMTE5LCMwZDBkMTcpOyB9XG4gIC5yY3QtbXNnLWJ1YmJsZS10aGVpcnMgeyBiYWNrZ3JvdW5kOiMxZTI0M2EgIWltcG9ydGFudDtjb2xvcjojZTJlOGYwICFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA4KSAhaW1wb3J0YW50OyB9XG4gIC5yY3QtbXNnLWJ1YmJsZS1taW5lICAgeyBiYWNrZ3JvdW5kOiMwZDJlMWUgIWltcG9ydGFudDtjb2xvcjojYTdmM2QwICFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOnJnYmEoMywyMDEsOTAsLjIpICFpbXBvcnRhbnQ7IH1cbiAgLnJjdC1tc2ctaW5wdXQtYXJlYSB7IGJhY2tncm91bmQ6IzFhMWEyYjtib3JkZXItdG9wLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjA3KTsgfVxuICAucmN0LW1zZy1pbnB1dCB7IGJhY2tncm91bmQ6IzExMTExOTtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSk7Y29sb3I6I2UyZThmMDsgJjo6cGxhY2Vob2xkZXJ7Y29sb3I6IzRiNTU2Mzt9ICY6Zm9jdXN7Ym9yZGVyLWNvbG9yOnJnYmEoNTcsNDQsMTI1LC4zNSk7fSB9XG4gIC5yY3QtbXNnLWFjdGlvbi1idG4geyBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjA0KTtib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMDgpO2NvbG9yOiM5Y2EzYWY7ICY6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDU3LDQ0LDEyNSwuMTUpO2NvbG9yOiNhNzhiZmE7fSB9XG4gIC5yY3QtbXNnLWlucHV0LWJ0biB7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMDQpO2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wOCk7Y29sb3I6IzljYTNhZjsgJjpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoNTcsNDQsMTI1LC4xNSk7Y29sb3I6I2E3OGJmYTt9IH1cbiAgLnJjdC1tc2ctZW1vamktcGlja2VyIHsgYmFja2dyb3VuZDojMWExYTJiO2JvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4wOCk7Ym94LXNoYWRvdzowIDhweCAyNHB4IHJnYmEoMCwwLDAsLjM1KTsgfVxuICAucmN0LW1zZy1lbW9qaS1pdGVtIHsgJjpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjA4KTt9IH1cbiAgLnJjdC1tc2ctZGF0ZS1zZXAgc3BhbiB7IGJhY2tncm91bmQ6cmdiYSg1Nyw0NCwxMjUsLjE1KTtjb2xvcjojNmI3MjgwOyB9XG4gIC5yY3QtbXNnLW1lc3NhZ2VzLWVtcHR5IHAgeyBjb2xvcjojZTJlOGYwOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return RecruiterMessagesComponent;
})();

/***/ })

}]);
//# sourceMappingURL=8934.js.map