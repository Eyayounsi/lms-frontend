"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7452],{

/***/ 17452:
/*!****************************************************************************************!*\
  !*** ./src/app/features/instructor/instructor-message/instructor-message.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstructorMessageComponent: () => (/* binding */ InstructorMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/message/message.service */ 40376);
/* harmony import */ var _shared_service_message_message_realtime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/message/message-realtime.service */ 85718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 85422);









const _c0 = ["messagesContainer"];
const _c1 = () => [1, 2, 3];
function InstructorMessageComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.totalUnread());
  }
}
function InstructorMessageComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 25)(4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function InstructorMessageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InstructorMessageComponent_div_13_div_1_Template, 5, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c1));
  }
}
function InstructorMessageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.conversationsError, " ");
  }
}
function InstructorMessageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucune conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Vos messages apparaitront ici.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function InstructorMessageComponent_div_16_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Vous : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InstructorMessageComponent_div_16_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const conv_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](conv_r3.unreadCount);
  }
}
function InstructorMessageComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InstructorMessageComponent_div_16_Template_div_click_0_listener() {
      const conv_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openConversation(conv_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 33)(3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 35)(5, "div", 36)(6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 39)(11, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, InstructorMessageComponent_div_16_span_12_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, InstructorMessageComponent_div_16_span_14_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const conv_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ins-msg-conv-active", (ctx_r0.activeConversation == null ? null : ctx_r0.activeConversation.conversationId) === conv_r3.conversationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(ctx_r0.getConversationAvatar(conv_r3), ctx_r0.getConversationName(conv_r3)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r0.getConversationName(conv_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getConversationName(conv_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatDate(conv_r3.lastMessageAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", conv_r3.lastMessageIsOwn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", conv_r3.lastMessage || "Nouvelle conversation", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", conv_r3.unreadCount > 0);
  }
}
function InstructorMessageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Selectionnez une conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Choisissez un contact a gauche pour demarrer le chat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function InstructorMessageComponent_ng_container_19_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InstructorMessageComponent_ng_container_19_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.messagesError, " ");
  }
}
function InstructorMessageComponent_ng_container_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69)(1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Demarrez la conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Envoyez un message a ", ctx_r0.getConversationName(ctx_r0.activeConversation), ".");
  }
}
function InstructorMessageComponent_ng_container_19_ng_container_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 79)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const msg_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatDate(msg_r5.sentAt));
  }
}
function InstructorMessageComponent_ng_container_19_ng_container_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(ctx_r0.getConversationAvatar(ctx_r0.activeConversation), ctx_r0.getConversationName(ctx_r0.activeConversation)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r0.getConversationName(ctx_r0.activeConversation));
  }
}
function InstructorMessageComponent_ng_container_19_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InstructorMessageComponent_ng_container_19_ng_container_17_div_1_Template, 3, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InstructorMessageComponent_ng_container_19_ng_container_17_div_3_Template, 2, 2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 75)(5, "div", 76)(6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showDateSeparator(ctx_r0.messages, i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ins-msg-mine", ctx_r0.isSent(msg_r5))("ins-msg-theirs", !ctx_r0.isSent(msg_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isSent(msg_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ins-msg-bubble-mine", ctx_r0.isSent(msg_r5))("ins-msg-bubble-theirs", !ctx_r0.isSent(msg_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](msg_r5.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ins-msg-meta-right", ctx_r0.isSent(msg_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.formatTime(msg_r5.sentAt), " ");
  }
}
function InstructorMessageComponent_ng_container_19_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InstructorMessageComponent_ng_container_19_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function InstructorMessageComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 48)(2, "div", 49)(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 51)(5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 52)(7, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " En ligne");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 56, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, InstructorMessageComponent_ng_container_19_div_14_Template, 2, 0, "div", 57)(15, InstructorMessageComponent_ng_container_19_div_15_Template, 2, 1, "div", 58)(16, InstructorMessageComponent_ng_container_19_div_16_Template, 7, 1, "div", 59)(17, InstructorMessageComponent_ng_container_19_ng_container_17_Template, 10, 14, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 61)(19, "div", 62)(20, "div", 63)(21, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorMessageComponent_ng_container_19_Template_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.newMessage, $event) || (ctx_r0.newMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function InstructorMessageComponent_ng_container_19_Template_textarea_keydown_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InstructorMessageComponent_ng_container_19_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, InstructorMessageComponent_ng_container_19_span_23_Template, 2, 0, "span", 18)(24, InstructorMessageComponent_ng_container_19_span_24_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getAvatarUrl(ctx_r0.getConversationAvatar(ctx_r0.activeConversation), ctx_r0.getConversationName(ctx_r0.activeConversation)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r0.getConversationName(ctx_r0.activeConversation));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getConversationName(ctx_r0.activeConversation));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loadingMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.messagesError && !ctx_r0.loadingMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.loadingMessages && !ctx_r0.messagesError && ctx_r0.messages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
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
let InstructorMessageComponent = /*#__PURE__*/(() => {
  class InstructorMessageComponent {
    messageService;
    messageRealtimeService;
    route;
    messagesContainer;
    searchQuery = '';
    conversations = [];
    activeConversation = null;
    messages = [];
    newMessage = '';
    loading = true;
    conversationsError = '';
    loadingMessages = false;
    messagesError = '';
    sendingMessage = false;
    currentUserId = 0;
    realtimeSub;
    subscribedConversationId = null;
    shouldScrollToBottom = false;
    pendingParticipantId = null;
    pendingParticipantName = '';
    pendingParticipantAvatar = null;
    constructor(messageService, messageRealtimeService, route) {
      this.messageService = messageService;
      this.messageRealtimeService = messageRealtimeService;
      this.route = route;
    }
    ngOnInit() {
      this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
      const params = this.route.snapshot.queryParamMap;
      const studentUserId = Number(params.get('studentUserId') || 0);
      const legacyStudentId = Number(params.get('studentId') || 0);
      this.pendingParticipantId = studentUserId || legacyStudentId || null;
      this.pendingParticipantName = params.get('studentName') || '';
      this.pendingParticipantAvatar = params.get('studentAvatar');
      this.messageRealtimeService.connect();
      this.realtimeSub = this.messageRealtimeService.events$.subscribe(event => this.handleRealtimeEvent(event));
      this.loadConversations();
    }
    ngOnDestroy() {
      this.realtimeSub?.unsubscribe();
      if (this.subscribedConversationId) {
        this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
        this.subscribedConversationId = null;
      }
    }
    ngAfterViewChecked() {
      if (this.shouldScrollToBottom) {
        this.scrollMessagesToBottom();
        this.shouldScrollToBottom = false;
      }
    }
    get filteredConversations() {
      const q = this.searchQuery.trim().toLowerCase();
      if (!q) return this.conversations;
      return this.conversations.filter(c => this.getConversationName(c).toLowerCase().includes(q) || String(c?.lastMessage || '').toLowerCase().includes(q));
    }
    getConversationName(conv) {
      return String(conv?.otherParticipantName || conv?.participantName || conv?.fullName || conv?.name || 'Utilisateur');
    }
    getConversationAvatar(conv) {
      return conv?.otherParticipantAvatar || conv?.participantAvatar || conv?.avatarPath || conv?.avatar || null;
    }
    totalUnread() {
      return this.conversations.reduce((sum, c) => sum + Number(c?.unreadCount || 0), 0);
    }
    loadConversations() {
      this.loading = true;
      this.conversationsError = '';
      this.messageService.getConversations().subscribe({
        next: data => {
          this.conversations = data || [];
          this.loading = false;
          if (this.pendingParticipantId) {
            const match = this.conversations.find(c => Number(c?.otherParticipantId || c?.participantId || c?.otherUserId || c?.userId || 0) === this.pendingParticipantId);
            if (match) {
              this.openConversation(match);
              this.pendingParticipantId = null;
            } else {
              this.openOrCreateConversation(this.pendingParticipantId);
            }
          }
        },
        error: () => {
          this.conversationsError = 'Impossible de charger les conversations.';
          this.loading = false;
        }
      });
    }
    openOrCreateConversation(otherUserId) {
      if (!otherUserId) return;
      this.messageService.getOrCreateConversation(otherUserId).subscribe({
        next: res => {
          const conversationId = Number(res?.conversationId || res?.id || 0);
          if (!conversationId) return;
          const existing = this.conversations.find(c => c.conversationId === conversationId);
          if (existing) {
            this.openConversation(existing);
            this.pendingParticipantId = null;
            return;
          }
          const newConv = {
            conversationId,
            otherParticipantId: Number(res?.participantId || res?.otherParticipantId || otherUserId),
            otherParticipantName: res?.participantName || res?.otherParticipantName || this.pendingParticipantName || 'Etudiant',
            otherParticipantAvatar: res?.participantAvatar || res?.otherParticipantAvatar || this.pendingParticipantAvatar,
            unreadCount: 0,
            lastMessage: null,
            lastMessageAt: new Date().toISOString(),
            lastMessageIsOwn: false
          };
          this.conversations.unshift(newConv);
          this.openConversation(newConv);
          this.pendingParticipantId = null;
        },
        error: () => {}
      });
    }
    openConversation(conv) {
      if (this.subscribedConversationId && this.subscribedConversationId !== conv.conversationId) {
        this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
      }
      this.activeConversation = conv;
      this.loadingMessages = true;
      this.messagesError = '';
      this.messages = [];
      this.messageService.getMessages(conv.conversationId).subscribe({
        next: msgs => {
          this.messages = msgs || [];
          this.loadingMessages = false;
          this.requestScrollToBottom();
          this.messageService.markAsRead(conv.conversationId).subscribe();
          conv.unreadCount = 0;
        },
        error: () => {
          this.messagesError = 'Impossible de charger les messages.';
          this.loadingMessages = false;
        }
      });
      this.messageRealtimeService.subscribeConversation(conv.conversationId);
      this.subscribedConversationId = conv.conversationId;
    }
    sendMessage() {
      if (!this.newMessage.trim() || !this.activeConversation || this.sendingMessage) return;
      this.sendingMessage = true;
      this.messageService.sendMessage(this.activeConversation.conversationId, {
        content: this.newMessage,
        messageType: 'TEXT'
      }).subscribe({
        next: msg => {
          this.upsertMessage(msg);
          this.updateConversationPreview(msg, this.activeConversation?.conversationId);
          this.requestScrollToBottom();
          this.newMessage = '';
          this.sendingMessage = false;
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
    isSent(msg) {
      return msg.senderId === this.currentUserId;
    }
    showDateSeparator(messages, index) {
      if (index === 0) return true;
      const prev = new Date(messages[index - 1].sentAt).toDateString();
      const curr = new Date(messages[index].sentAt).toDateString();
      return prev !== curr;
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
      if (d.toDateString() === today.toDateString()) return "Aujourd'hui";
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (d.toDateString() === yesterday.toDateString()) return 'Hier';
      return d.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short'
      });
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
    handleRealtimeEvent(event) {
      if (!event || event.type !== 'MESSAGE_CREATED' || !event.conversationId || !event.message) {
        return;
      }
      const msg = event.message;
      const conversationId = event.conversationId;
      if (this.activeConversation?.conversationId === conversationId) {
        this.upsertMessage(msg);
        this.requestScrollToBottom();
        if (msg.senderId !== this.currentUserId) {
          this.messageService.markAsRead(conversationId).subscribe();
          this.activeConversation.unreadCount = 0;
        }
      } else {
        const conv = this.conversations.find(c => c.conversationId === conversationId);
        if (conv && msg.senderId !== this.currentUserId) {
          conv.unreadCount = (conv.unreadCount || 0) + 1;
        }
      }
      this.updateConversationPreview(msg, conversationId);
      this.moveConversationToTop(conversationId);
    }
    upsertMessage(msg) {
      if (!this.messages.some(m => m.id === msg.id)) {
        this.messages.push(msg);
      }
    }
    updateConversationPreview(msg, conversationId) {
      if (!conversationId) return;
      const conv = this.conversations.find(c => c.conversationId === conversationId);
      if (!conv) return;
      conv.lastMessage = msg.content;
      conv.lastMessageAt = msg.sentAt;
      conv.lastMessageIsOwn = msg.senderId === this.currentUserId;
    }
    moveConversationToTop(conversationId) {
      const index = this.conversations.findIndex(c => c.conversationId === conversationId);
      if (index <= 0) return;
      const [conv] = this.conversations.splice(index, 1);
      this.conversations.unshift(conv);
    }
    requestScrollToBottom() {
      this.shouldScrollToBottom = true;
    }
    scrollMessagesToBottom() {
      const el = this.messagesContainer?.nativeElement;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
    }
    static ɵfac = function InstructorMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstructorMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_message_message_realtime_service__WEBPACK_IMPORTED_MODULE_6__.MessageRealtimeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: InstructorMessageComponent,
      selectors: [["app-instructor-message"]],
      viewQuery: function InstructorMessageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
        }
      },
      decls: 20,
      vars: 8,
      consts: [["messagesContainer", ""], [1, "ins-msg-wrapper"], [1, "ins-msg-panel-left"], [1, "ins-msg-panel-hd"], [1, "ins-msg-panel-hd-top"], [1, "ins-msg-panel-title"], [1, "isax", "isax-message-text"], ["class", "ins-msg-badge-unread", 4, "ngIf"], [1, "ins-msg-search-box"], [1, "isax", "isax-search-normal-1", "ins-msg-search-icon"], ["type", "text", "placeholder", "Rechercher une conversation...", 1, "ins-msg-search-input", 3, "ngModelChange", "ngModel"], [1, "ins-msg-conv-list"], ["class", "ins-msg-loading", 4, "ngIf"], ["class", "ins-msg-error-box", 4, "ngIf"], ["class", "ins-msg-conv-empty", 4, "ngIf"], ["class", "ins-msg-conv-item", 3, "ins-msg-conv-active", "click", 4, "ngFor", "ngForOf"], [1, "ins-msg-chat"], ["class", "ins-msg-chat-empty", 4, "ngIf"], [4, "ngIf"], [1, "ins-msg-badge-unread"], [1, "ins-msg-loading"], ["class", "ins-msg-sk-wrap", 4, "ngFor", "ngForOf"], [1, "ins-msg-sk-wrap"], [1, "ins-msg-sk-av"], [1, "ins-msg-sk-lines"], [1, "ins-msg-sk", "ins-msg-sk-lg"], [1, "ins-msg-sk", "ins-msg-sk-sm"], [1, "ins-msg-error-box"], [1, "ins-msg-conv-empty"], [1, "ins-msg-conv-empty-ico"], [1, "isax", "isax-message-remove"], [1, "ins-msg-conv-item", 3, "click"], [1, "ins-msg-conv-av-wrap"], [1, "ins-msg-conv-av", 3, "src", "alt"], [1, "ins-msg-online-dot"], [1, "ins-msg-conv-info"], [1, "ins-msg-conv-row1"], [1, "ins-msg-conv-name"], [1, "ins-msg-conv-time"], [1, "ins-msg-conv-row2"], [1, "ins-msg-conv-preview"], ["class", "ins-msg-you", 4, "ngIf"], ["class", "ins-msg-unread-bubble", 4, "ngIf"], [1, "ins-msg-you"], [1, "ins-msg-unread-bubble"], [1, "ins-msg-chat-empty"], [1, "ins-msg-chat-empty-ico"], [1, "isax", "isax-message"], [1, "ins-msg-chat-hd"], [1, "ins-msg-chat-hd-left"], [1, "ins-msg-chat-hd-av-wrap"], [1, "ins-msg-chat-hd-av", 3, "src", "alt"], [1, "ins-msg-chat-hd-info"], [1, "ins-msg-chat-hd-name"], [1, "ins-msg-chat-hd-status"], [1, "ins-msg-online-pulse"], [1, "ins-msg-chat-body"], ["class", "ins-msg-messages-loading", 4, "ngIf"], ["class", "ins-msg-messages-err", 4, "ngIf"], ["class", "ins-msg-messages-empty", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ins-msg-input-area"], [1, "ins-msg-input-row"], [1, "ins-msg-input-wrap"], ["rows", "1", "placeholder", "Ecrivez un message... (Shift+Entree pour nouvelle ligne)", 1, "ins-msg-input", 3, "ngModelChange", "keydown", "ngModel", "disabled"], ["title", "Envoyer", 1, "ins-msg-send-btn", 3, "click", "disabled"], [1, "ins-msg-messages-loading"], [1, "spinner-border", "text-primary", 2, "width", "2rem", "height", "2rem"], [1, "ins-msg-messages-err"], [1, "ins-msg-messages-empty"], [1, "ins-msg-messages-empty-ico"], [1, "isax", "isax-message-text-1"], ["class", "ins-msg-date-sep", 4, "ngIf"], [1, "ins-msg-row"], ["class", "ins-msg-row-av-wrap", 4, "ngIf"], [1, "ins-msg-bubble-wrap"], [1, "ins-msg-bubble"], [1, "ins-msg-text"], [1, "ins-msg-meta"], [1, "ins-msg-date-sep"], [1, "ins-msg-row-av-wrap"], [1, "ins-msg-row-av", 3, "src", "alt"], [1, "isax", "isax-send-1"], [1, "spinner-border", "spinner-border-sm"]],
      template: function InstructorMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "aside", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Messagerie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, InstructorMessageComponent_span_8_Template, 2, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function InstructorMessageComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, InstructorMessageComponent_div_13_Template, 2, 2, "div", 12)(14, InstructorMessageComponent_div_14_Template, 2, 1, "div", 13)(15, InstructorMessageComponent_div_15_Template, 7, 0, "div", 14)(16, InstructorMessageComponent_div_16_Template, 15, 9, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "main", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, InstructorMessageComponent_div_18_Template, 7, 0, "div", 17)(19, InstructorMessageComponent_ng_container_19_Template, 25, 12, "ng-container", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalUnread() > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.conversationsError);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.conversationsError && ctx.filteredConversations.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredConversations);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.activeConversation);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeConversation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: [".ins-msg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 180px);\n  min-height: 560px;\n  border-radius: 20px;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid rgba(57, 44, 125, 0.1);\n  box-shadow: 0 8px 32px rgba(57, 44, 125, 0.1);\n  animation: _ngcontent-%COMP%_ins-msg-fade 0.4s ease;\n}\n\n.ins-msg-panel-left[_ngcontent-%COMP%] {\n  width: 340px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(180deg, #fafcff 0%, #f4f7ff 100%);\n}\n\n.ins-msg-panel-hd[_ngcontent-%COMP%] {\n  padding: 16px 18px 14px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.04));\n}\n\n.ins-msg-panel-hd-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.ins-msg-panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 800;\n  color: #1e1b4b;\n}\n.ins-msg-panel-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #03c95a;\n  font-size: 18px;\n}\n\n.ins-msg-badge-unread[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n\n.ins-msg-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1.5px solid rgba(57, 44, 125, 0.12);\n  border-radius: 12px;\n  padding: 8px 12px;\n  box-shadow: 0 2px 8px rgba(57, 44, 125, 0.06);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.ins-msg-search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(57, 44, 125, 0.3);\n  box-shadow: 0 0 0 3px rgba(57, 44, 125, 0.07);\n}\n\n.ins-msg-search-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 15px;\n}\n\n.ins-msg-search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  width: 100%;\n  color: #374151;\n}\n.ins-msg-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n\n.ins-msg-conv-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.ins-msg-conv-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.ins-msg-conv-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(57, 44, 125, 0.15);\n  border-radius: 10px;\n}\n\n.ins-msg-sk-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.06);\n}\n\n.ins-msg-sk-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_ins-msg-sk 1.4s infinite;\n}\n\n.ins-msg-sk-lines[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.ins-msg-sk[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  display: block;\n  background: linear-gradient(90deg, #f0f4f8 25%, #e2eaf0 50%, #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_ins-msg-sk 1.4s infinite;\n}\n\n.ins-msg-sk-lg[_ngcontent-%COMP%] {\n  height: 12px;\n  margin-bottom: 6px;\n  width: 70%;\n}\n\n.ins-msg-sk-sm[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 50%;\n}\n\n.ins-msg-error-box[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  font-size: 12.5px;\n  color: #dc2626;\n}\n\n.ins-msg-conv-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.ins-msg-conv-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 4px;\n}\n.ins-msg-conv-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 11.5px;\n}\n\n.ins-msg-conv-empty-ico[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n}\n.ins-msg-conv-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: rgba(57, 44, 125, 0.3);\n}\n\n.ins-msg-conv-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 18px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.06);\n  transition: background 0.15s;\n}\n.ins-msg-conv-item[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.035);\n}\n.ins-msg-conv-item.ins-msg-conv-active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.05));\n  border-left: 3px solid #03c95a;\n  padding-left: 15px;\n}\n\n.ins-msg-conv-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n\n.ins-msg-conv-av[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 2px 8px rgba(57, 44, 125, 0.1);\n}\n\n.ins-msg-online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #03c95a;\n  border: 2px solid #fff;\n}\n\n.ins-msg-conv-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.ins-msg-conv-row1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 3px;\n}\n\n.ins-msg-conv-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #1e1b4b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ins-msg-conv-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  margin-left: 4px;\n}\n\n.ins-msg-conv-row2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n\n.ins-msg-conv-preview[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n\n.ins-msg-you[_ngcontent-%COMP%] {\n  color: #392c7d;\n  font-weight: 600;\n}\n\n.ins-msg-unread-bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03c95a, #059669);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n\n.ins-msg-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.ins-msg-chat-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  text-align: center;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.03), rgba(57, 44, 125, 0.03));\n}\n.ins-msg-chat-empty[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 800;\n  margin: 16px 0 8px;\n}\n.ins-msg-chat-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 13px;\n  max-width: 280px;\n}\n\n.ins-msg-chat-empty-ico[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.1), rgba(57, 44, 125, 0.08));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid rgba(57, 44, 125, 0.12);\n}\n.ins-msg-chat-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 34px;\n  color: rgba(57, 44, 125, 0.4);\n}\n\n.ins-msg-chat-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.05), rgba(57, 44, 125, 0.04));\n}\n\n.ins-msg-chat-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.ins-msg-chat-hd-av-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.ins-msg-chat-hd-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(3, 201, 90, 0.25);\n}\n\n.ins-msg-chat-hd-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.ins-msg-chat-hd-name[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 800;\n  color: #1e1b4b;\n}\n\n.ins-msg-chat-hd-status[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #03c95a;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 600;\n}\n\n.ins-msg-online-pulse[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #03c95a;\n  box-shadow: 0 0 0 0 rgba(3, 201, 90, 0.4);\n  animation: _ngcontent-%COMP%_ins-msg-pulse 2s infinite;\n}\n\n.ins-msg-chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: linear-gradient(180deg, #f8faff 0%, #f1f4ff 100%);\n}\n.ins-msg-chat-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.ins-msg-chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(57, 44, 125, 0.15);\n  border-radius: 10px;\n}\n\n.ins-msg-messages-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 0;\n}\n\n.ins-msg-messages-err[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n  color: #dc2626;\n  font-size: 13px;\n}\n\n.ins-msg-messages-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  text-align: center;\n  padding: 40px;\n}\n.ins-msg-messages-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #374151;\n  margin: 12px 0 4px;\n}\n.ins-msg-messages-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 12px;\n}\n\n.ins-msg-messages-empty-ico[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(57, 44, 125, 0.12);\n}\n.ins-msg-messages-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(57, 44, 125, 0.35);\n}\n\n.ins-msg-date-sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 14px 0 8px;\n}\n.ins-msg-date-sep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  background: rgba(57, 44, 125, 0.06);\n  padding: 4px 12px;\n  border-radius: 20px;\n}\n.ins-msg-date-sep[_ngcontent-%COMP%]::before, .ins-msg-date-sep[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: rgba(57, 44, 125, 0.1);\n}\n\n.ins-msg-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_ins-msg-in 0.22s ease;\n  margin-bottom: 4px;\n}\n.ins-msg-row.ins-msg-mine[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.ins-msg-row-av[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(57, 44, 125, 0.12);\n}\n\n.ins-msg-bubble-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 65%;\n}\n\n.ins-msg-mine[_ngcontent-%COMP%]   .ins-msg-bubble-wrap[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n\n.ins-msg-theirs[_ngcontent-%COMP%]   .ins-msg-bubble-wrap[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n\n.ins-msg-bubble[_ngcontent-%COMP%] {\n  padding: 11px 15px;\n  border-radius: 18px;\n  word-break: break-word;\n  line-height: 1.6;\n}\n\n.ins-msg-bubble-mine[_ngcontent-%COMP%] {\n  background: #c6ecd8;\n  color: #1a4731;\n  border: 1px solid rgba(3, 201, 90, 0.22);\n  border-bottom-right-radius: 4px;\n}\n\n.ins-msg-bubble-theirs[_ngcontent-%COMP%] {\n  background: #edeae4;\n  color: #2d2926;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-bottom-left-radius: 4px;\n}\n\n.ins-msg-text[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  margin: 0;\n}\n\n.ins-msg-meta[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 5px;\n  color: rgba(57, 44, 125, 0.45);\n}\n\n.ins-msg-meta-right[_ngcontent-%COMP%] {\n  text-align: right;\n  color: rgba(3, 100, 50, 0.6);\n}\n\n.ins-msg-input-area[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(57, 44, 125, 0.09);\n  background: #fff;\n  padding: 12px 16px;\n}\n\n.ins-msg-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n\n.ins-msg-input-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.ins-msg-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid rgba(57, 44, 125, 0.15);\n  border-radius: 14px;\n  padding: 10px 14px;\n  font-size: 13.5px;\n  resize: none;\n  max-height: 100px;\n  overflow-y: auto;\n}\n.ins-msg-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(57, 44, 125, 0.35);\n  box-shadow: 0 0 0 3px rgba(57, 44, 125, 0.07);\n}\n\n.ins-msg-send-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #03c95a, #059669);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(3, 201, 90, 0.4);\n  transition: transform 0.18s, box-shadow 0.18s;\n}\n.ins-msg-send-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.ins-msg-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n  box-shadow: 0 6px 22px rgba(3, 201, 90, 0.55);\n}\n.ins-msg-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media (max-width: 991px) {\n  .ins-msg-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    min-height: 70vh;\n  }\n  .ins-msg-panel-left[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid rgba(57, 44, 125, 0.09);\n    max-height: 340px;\n  }\n  .ins-msg-bubble-wrap[_ngcontent-%COMP%] {\n    max-width: 84%;\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-msg-fade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-msg-in {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-msg-sk {\n  from {\n    background-position: 200% center;\n  }\n  to {\n    background-position: -200% center;\n  }\n}\n@keyframes _ngcontent-%COMP%_ins-msg-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(3, 201, 90, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(3, 201, 90, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(3, 201, 90, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLW1lc3NhZ2UvaW5zdHJ1Y3Rvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSw2REFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxnREFBQTtFQUNBLG9GQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0UscURBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0FBQUY7QUFFRTtFQUNFLG9DQUFBO0VBQ0EsNkNBQUE7QUFBSjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBREY7QUFHRTtFQUNFLGNBQUE7QUFESjs7QUFLQTtFQUNFLE9BQUE7RUFDQSxnQkFB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QUE7QUFyQkY7O0FBd0JBO0VBQ0UsT0FBQTtBQXJCRjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXJCRjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0FBckJKOztBQXlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkNBQUE7QUF0QkY7QUF3QkU7RUFDRSxlQUFBO0FBdEJKO0FBeUJFO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQXZCSjtBQTBCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXhCSjs7QUE0QkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBekJGO0VBNEJBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0RBQUE7SUFDQSxpQkFBQTtFQTFCRjtFQTZCQTtJQUNFLGNBQUE7RUEzQkY7QUFDRjtBQThCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBNUJGO0VBOEJBO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUE1QkY7QUFDRjtBQStCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBN0JGO0VBK0JBO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUE3QkY7QUFDRjtBQWdDQTtFQUNFO0lBQ0UsZ0NBQUE7RUE5QkY7RUFnQ0E7SUFDRSxpQ0FBQTtFQTlCRjtBQUNGO0FBaUNBO0VBQ0U7SUFDRSx5Q0FBQTtFQS9CRjtFQWlDQTtJQUNFLHlDQUFBO0VBL0JGO0VBaUNBO0lBQ0UsdUNBQUE7RUEvQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnMtbXNnLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6IDU2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsIDQ0LCAxMjUsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDU3LCA0NCwgMTI1LCAwLjEpO1xyXG4gIGFuaW1hdGlvbjogaW5zLW1zZy1mYWRlIDAuNHMgZWFzZTtcclxufVxyXG5cclxuLmlucy1tc2ctcGFuZWwtbGVmdCB7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDU3LCA0NCwgMTI1LCAwLjA5KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmY2ZmIDAlLCAjZjRmN2ZmIDEwMCUpO1xyXG59XHJcblxyXG4uaW5zLW1zZy1wYW5lbC1oZCB7XHJcbiAgcGFkZGluZzogMTZweCAxOHB4IDE0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTcsIDQ0LCAxMjUsIDAuMDkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMywgMjAxLCA5MCwgMC4wNiksIHJnYmEoNTcsIDQ0LCAxMjUsIDAuMDQpKTtcclxufVxyXG5cclxuLmlucy1tc2ctcGFuZWwtaGQtdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5pbnMtbXNnLXBhbmVsLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxZTFiNGI7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICMwM2M5NWE7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1iYWRnZS11bnJlYWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZjQ0NDQsICNkYzI2MjYpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyMzksIDY4LCA2OCwgMC4zKTtcclxufVxyXG5cclxuLmlucy1tc2ctc2VhcmNoLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDU3LCA0NCwgMTI1LCAwLjEyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDU3LCA0NCwgMTI1LCAwLjA2KTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTcsIDQ0LCAxMjUsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1NywgNDQsIDEyNSwgMC4wNyk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1zZWFyY2gtaWNvbiB7XHJcbiAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uaW5zLW1zZy1zZWFyY2gtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzM3NDE1MTtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1jb252LWxpc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDRweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDQ0LCAxMjUsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnMtbXNnLXNrLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDU3LCA0NCwgMTI1LCAwLjA2KTtcclxufVxyXG5cclxuLmlucy1tc2ctc2stYXYge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjBmNGY4IDI1JSwgI2UyZWFmMCA1MCUsICNmMGY0ZjggNzUlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICBhbmltYXRpb246IGlucy1tc2ctc2sgMS40cyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmlucy1tc2ctc2stbGluZXMge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5pbnMtbXNnLXNrIHtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjBmNGY4IDI1JSwgI2UyZWFmMCA1MCUsICNmMGY0ZjggNzUlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICBhbmltYXRpb246IGlucy1tc2ctc2sgMS40cyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmlucy1tc2ctc2stbGcge1xyXG4gIGhlaWdodDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmlucy1tc2ctc2stc20ge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaW5zLW1zZy1lcnJvci1ib3gge1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBmb250LXNpemU6IDEyLjVweDtcclxuICBjb2xvcjogI2RjMjYyNjtcclxufVxyXG5cclxuLmlucy1tc2ctY29udi1lbXB0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzM3NDE1MTtcclxuICAgIG1hcmdpbjogMCAwIDRweDtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGNvbG9yOiAjOWNhM2FmO1xyXG4gICAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1jb252LWVtcHR5LWljbyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsIDIwMSwgOTAsIDAuMDgpLCByZ2JhKDU3LCA0NCwgMTI1LCAwLjA2KSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1NywgNDQsIDEyNSwgMC4xMik7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoNTcsIDQ0LCAxMjUsIDAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1jb252LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTNweCAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1NywgNDQsIDEyNSwgMC4wNik7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA0NCwgMTI1LCAwLjAzNSk7XHJcbiAgfVxyXG5cclxuICAmLmlucy1tc2ctY29udi1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzLCAyMDEsIDkwLCAwLjA4KSwgcmdiYSg1NywgNDQsIDEyNSwgMC4wNSkpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDNjOTVhO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmlucy1tc2ctY29udi1hdi13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWNvbnYtYXYge1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDU3LCA0NCwgMTI1LCAwLjEpO1xyXG59XHJcblxyXG4uaW5zLW1zZy1vbmxpbmUtZG90IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICB3aWR0aDogMTFweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMwM2M5NWE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmlucy1tc2ctY29udi1pbmZvIHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmlucy1tc2ctY29udi1yb3cxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uaW5zLW1zZy1jb252LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTFiNGI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uaW5zLW1zZy1jb252LXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzljYTNhZjtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4uaW5zLW1zZy1jb252LXJvdzIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWNvbnYtcHJldmlldyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uaW5zLW1zZy15b3Uge1xyXG4gIGNvbG9yOiAjMzkyYzdkO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pbnMtbXNnLXVucmVhZC1idWJibGUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM2M5NWEsICMwNTk2NjkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDFweCA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmlucy1tc2ctY2hhdCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW5zLW1zZy1jaGF0LWVtcHR5IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMywgMjAxLCA5MCwgMC4wMyksIHJnYmEoNTcsIDQ0LCAxMjUsIDAuMDMpKTtcclxuXHJcbiAgaDUge1xyXG4gICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgOHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzljYTNhZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1jaGF0LWVtcHR5LWljbyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsIDIwMSwgOTAsIDAuMSksIHJnYmEoNTcsIDQ0LCAxMjUsIDAuMDgpKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NywgNDQsIDEyNSwgMC4xMik7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoNTcsIDQ0LCAxMjUsIDAuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1jaGF0LWhkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1NywgNDQsIDEyNSwgMC4wOSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzLCAyMDEsIDkwLCAwLjA1KSwgcmdiYSg1NywgNDQsIDEyNSwgMC4wNCkpO1xyXG59XHJcblxyXG4uaW5zLW1zZy1jaGF0LWhkLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWNoYXQtaGQtYXYtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5zLW1zZy1jaGF0LWhkLWF2IHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMywgMjAxLCA5MCwgMC4yNSk7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWNoYXQtaGQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW5zLW1zZy1jaGF0LWhkLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICMxZTFiNGI7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWNoYXQtaGQtc3RhdHVzIHtcclxuICBmb250LXNpemU6IDExLjVweDtcclxuICBjb2xvcjogIzAzYzk1YTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmlucy1tc2ctb25saW5lLXB1bHNlIHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDNjOTVhO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgzLCAyMDEsIDkwLCAwLjQpO1xyXG4gIGFuaW1hdGlvbjogaW5zLW1zZy1wdWxzZSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmlucy1tc2ctY2hhdC1ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMjBweCAyMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjhmYWZmIDAlLCAjZjFmNGZmIDEwMCUpO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NywgNDQsIDEyNSwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmlucy1tc2ctbWVzc2FnZXMtbG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxufVxyXG5cclxuLmlucy1tc2ctbWVzc2FnZXMtZXJyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGNvbG9yOiAjZGMyNjI2O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmlucy1tc2ctbWVzc2FnZXMtZW1wdHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMzc0MTUxO1xyXG4gICAgbWFyZ2luOiAxMnB4IDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgc21hbGwge1xyXG4gICAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1tZXNzYWdlcy1lbXB0eS1pY28ge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzLCAyMDEsIDkwLCAwLjA4KSwgcmdiYSg1NywgNDQsIDEyNSwgMC4wNikpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LCA0NCwgMTI1LCAwLjEyKTtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogcmdiYSg1NywgNDQsIDEyNSwgMC4zNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5zLW1zZy1kYXRlLXNlcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW46IDE0cHggMCA4cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1NywgNDQsIDEyNSwgMC4wNik7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUsXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA0NCwgMTI1LCAwLjEpO1xyXG4gIH1cclxufVxyXG5cclxuLmlucy1tc2ctcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDhweDtcclxuICBhbmltYXRpb246IGlucy1tc2ctaW4gMC4yMnMgZWFzZTtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICYuaW5zLW1zZy1taW5lIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnMtbXNnLXJvdy1hdiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDU3LCA0NCwgMTI1LCAwLjEyKTtcclxufVxyXG5cclxuLmlucy1tc2ctYnViYmxlLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDY1JTtcclxufVxyXG5cclxuLmlucy1tc2ctbWluZSAuaW5zLW1zZy1idWJibGUtd3JhcCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaW5zLW1zZy10aGVpcnMgLmlucy1tc2ctYnViYmxlLXdyYXAge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uaW5zLW1zZy1idWJibGUge1xyXG4gIHBhZGRpbmc6IDExcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmlucy1tc2ctYnViYmxlLW1pbmUge1xyXG4gIGJhY2tncm91bmQ6ICNjNmVjZDg7XHJcbiAgY29sb3I6ICMxYTQ3MzE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzLCAyMDEsIDkwLCAwLjIyKTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaW5zLW1zZy1idWJibGUtdGhlaXJzIHtcclxuICBiYWNrZ3JvdW5kOiAjZWRlYWU0O1xyXG4gIGNvbG9yOiAjMmQyOTI2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaW5zLW1zZy10ZXh0IHtcclxuICBmb250LXNpemU6IDEzLjVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pbnMtbXNnLW1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6IHJnYmEoNTcsIDQ0LCAxMjUsIDAuNDUpO1xyXG59XHJcblxyXG4uaW5zLW1zZy1tZXRhLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSgzLCAxMDAsIDUwLCAwLjYpO1xyXG59XHJcblxyXG4uaW5zLW1zZy1pbnB1dC1hcmVhIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1NywgNDQsIDEyNSwgMC4wOSk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWlucHV0LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWlucHV0LXdyYXAge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5pbnMtbXNnLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoNTcsIDQ0LCAxMjUsIDAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTcsIDQ0LCAxMjUsIDAuMzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTcsIDQ0LCAxMjUsIDAuMDcpO1xyXG4gIH1cclxufVxyXG5cclxuLmlucy1tc2ctc2VuZC1idG4ge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM2M5NWEsICMwNTk2NjkpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDMsIDIwMSwgOTAsIDAuNCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMThzLCBib3gtc2hhZG93IDAuMThzO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjJweCByZ2JhKDMsIDIwMSwgOTAsIDAuNTUpO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmlucy1tc2ctd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxuICB9XHJcblxyXG4gIC5pbnMtbXNnLXBhbmVsLWxlZnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1NywgNDQsIDEyNSwgMC4wOSk7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcclxuICB9XHJcblxyXG4gIC5pbnMtbXNnLWJ1YmJsZS13cmFwIHtcclxuICAgIG1heC13aWR0aDogODQlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnMtbXNnLWZhZGUge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnMtbXNnLWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5zLW1zZy1zayB7XHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIGNlbnRlcjtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbnMtbXNnLXB1bHNlIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMywgMjAxLCA5MCwgMC40KTtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDMsIDIwMSwgOTAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgzLCAyMDEsIDkwLCAwKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InstructorMessageComponent;
})();

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=7452.js.map