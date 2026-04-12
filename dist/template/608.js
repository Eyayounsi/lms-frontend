"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[608],{

/***/ 10401:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/visitor-chatbot/visitor-chatbot.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorChatbotComponent: () => (/* binding */ VisitorChatbotComponent)
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _service_chatbot_visitor_chatbot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/chatbot/visitor-chatbot.service */ 21555);







function VisitorChatbotComponent_button_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.unreadCount, " ");
  }
}
function VisitorChatbotComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisitorChatbotComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Assistant IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VisitorChatbotComponent_button_1_span_5_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.unreadCount > 0);
  }
}
function VisitorChatbotComponent_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Parlez avec votre assistant LMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Paiement Stripe, recommandation de cours et orientation rapide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VisitorChatbotComponent_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-end", item_r4.sender === "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("visitor-chatbot-meta-user", item_r4.sender === "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.sender === "user" ? "V" : "IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.sender === "user" ? "Vous" : "Assistant LMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-primary", item_r4.sender === "user")("bg-light", item_r4.sender === "assistant")("text-dark", item_r4.sender === "assistant")("visitor-chatbot-bubble-user", item_r4.sender === "user")("visitor-chatbot-bubble-assistant", item_r4.sender === "assistant");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", item_r4.sender === "assistant" ? ctx_r1.formatAssistantText(item_r4.text) : item_r4.text, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function VisitorChatbotComponent_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "L'assistant \u00E9crit...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VisitorChatbotComponent_div_2_div_20_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisitorChatbotComponent_div_2_div_20_button_1_Template_button_click_0_listener() {
      const suggestion_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.sendSuggestion(suggestion_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", suggestion_r6, " ");
  }
}
function VisitorChatbotComponent_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VisitorChatbotComponent_div_2_div_20_button_1_Template, 2, 1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.suggestedPrompts)("ngForTrackBy", ctx_r1.trackByIndex);
  }
}
function VisitorChatbotComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 13)(6, "div", 14)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Assistant LMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "EN LIGNE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Conseils clairs et rapides pour vos actions sur la plateforme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisitorChatbotComponent_div_2_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, VisitorChatbotComponent_div_2_div_17_Template, 7, 0, "div", 20)(18, VisitorChatbotComponent_div_2_div_18_Template, 7, 17, "div", 21)(19, VisitorChatbotComponent_div_2_div_19_Template, 7, 0, "div", 22)(20, VisitorChatbotComponent_div_2_div_20_Template, 2, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 24)(22, "div", 25)(23, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function VisitorChatbotComponent_div_2_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.draftMessage, $event) || (ctx_r1.draftMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function VisitorChatbotComponent_div_2_Template_input_keydown_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handleEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisitorChatbotComponent_div_2_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copyLastAssistantReply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisitorChatbotComponent_div_2_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.messages.length <= 1 && !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.messages)("ngForTrackBy", ctx_r1.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.draftMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.messages.length < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
  }
}
let VisitorChatbotComponent = /*#__PURE__*/(() => {
  class VisitorChatbotComponent {
    visitorChatbotService;
    isOpen = false;
    isLoading = false;
    draftMessage = '';
    unreadCount = 0;
    suggestedPrompts = ['Comment acheter un cours via Stripe ?', 'Recommande-moi 3 cours disponibles pour débuter', 'Quels cours pour Python / Data / Web ?', 'Comment obtenir un certificat ?'];
    messages = [{
      sender: 'assistant',
      text: 'Bienvenue 👋 Je peux vous aider à découvrir les cours, les certificats et les étapes pour commencer.',
      time: new Date()
    }];
    constructor(visitorChatbotService) {
      this.visitorChatbotService = visitorChatbotService;
    }
    toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.unreadCount = 0;
      }
    }
    send() {
      const message = this.draftMessage.trim();
      if (!message || this.isLoading) {
        return;
      }
      this.messages.push({
        sender: 'user',
        text: message,
        time: new Date()
      });
      this.draftMessage = '';
      this.isLoading = true;
      this.visitorChatbotService.ask(message).subscribe({
        next: res => {
          this.pushAssistantMessage(res?.reply?.trim() || 'Je n\'ai pas de réponse pour le moment. Pouvez-vous reformuler ?');
          this.isLoading = false;
        },
        error: () => {
          this.pushAssistantMessage('Service temporairement indisponible. Réessayez dans un instant.');
          this.isLoading = false;
        }
      });
    }
    clearConversation() {
      if (this.isLoading) {
        return;
      }
      this.messages = [{
        sender: 'assistant',
        text: 'Bienvenue 👋 Je peux vous aider à découvrir les cours, le paiement Stripe et les certificats.',
        time: new Date()
      }];
    }
    copyLastAssistantReply() {
      var _this = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const lastAssistant = [..._this.messages].reverse().find(m => m.sender === 'assistant');
        const text = lastAssistant?.text?.trim();
        if (!text) {
          return;
        }
        try {
          yield navigator.clipboard.writeText(text);
        } catch {
          // no-op: browser may block clipboard in insecure contexts
        }
      })();
    }
    formatAssistantText(text) {
      const escaped = (text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    }
    pushAssistantMessage(text) {
      this.messages.push({
        sender: 'assistant',
        text,
        time: new Date()
      });
      if (!this.isOpen) {
        this.unreadCount += 1;
      }
    }
    sendSuggestion(suggestion) {
      if (this.isLoading) {
        return;
      }
      this.draftMessage = suggestion;
      this.send();
    }
    trackByIndex(index) {
      return index;
    }
    handleEnter(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.send();
      }
    }
    static ɵfac = function VisitorChatbotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VisitorChatbotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_chatbot_visitor_chatbot_service__WEBPACK_IMPORTED_MODULE_5__.VisitorChatbotService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: VisitorChatbotComponent,
      selectors: [["app-visitor-chatbot"]],
      decls: 3,
      vars: 2,
      consts: [[1, "visitor-chatbot-shell"], ["type", "button", "class", "btn btn-primary rounded-pill d-flex align-items-center gap-2 shadow visitor-chatbot-toggle", 3, "click", 4, "ngIf"], ["class", "card shadow-lg mt-2 visitor-chatbot-panel visitor-chatbot-panel-enter", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "rounded-pill", "d-flex", "align-items-center", "gap-2", "shadow", "visitor-chatbot-toggle", 3, "click"], [1, "visitor-chatbot-toggle-icon", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-message-circle"], ["class", "badge rounded-pill bg-light text-dark visitor-chatbot-unread-badge", 4, "ngIf"], [1, "badge", "rounded-pill", "bg-light", "text-dark", "visitor-chatbot-unread-badge"], [1, "card", "shadow-lg", "mt-2", "visitor-chatbot-panel", "visitor-chatbot-panel-enter"], [1, "card-header", "visitor-chatbot-header", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "gap-2"], [1, "visitor-chatbot-avatar", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-robot"], [1, "d-flex", "flex-column"], [1, "fw-semibold", "d-flex", "align-items-center", "gap-2"], [1, "visitor-chatbot-status"], [1, "visitor-chatbot-subtitle"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "visitor-chatbot-header-btn", 3, "click"], [1, "ti", "ti-x"], [1, "card-body", "visitor-chatbot-messages"], ["class", "visitor-chatbot-empty", 4, "ngIf"], ["class", "mb-2", 3, "text-end", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-muted small d-flex align-items-center gap-2 visitor-chatbot-typing-wrap", 4, "ngIf"], ["class", "d-flex flex-wrap gap-2 mt-2", 4, "ngIf"], [1, "card-footer"], [1, "visitor-chatbot-composer", "d-flex", "align-items-center", "gap-2"], ["type", "text", "placeholder", "Ex: cours Python d\u00E9butant, paiement, certificat...", 1, "form-control", 3, "ngModelChange", "keydown", "disabled", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", "visitor-chatbot-copy", 3, "click", "disabled"], [1, "ti", "ti-copy"], ["type", "button", 1, "btn", "btn-primary", "visitor-chatbot-send", 3, "click", "disabled"], [1, "ti", "ti-send"], [1, "visitor-chatbot-empty"], [1, "visitor-chatbot-empty-icon"], [1, "visitor-chatbot-empty-title"], [1, "visitor-chatbot-empty-sub"], [1, "mb-2"], [1, "visitor-chatbot-meta"], [1, "visitor-chatbot-msg-avatar"], [1, "badge", "p-2", "text-wrap", "visitor-chatbot-bubble", 3, "innerHTML"], [1, "text-muted", "small", "d-flex", "align-items-center", "gap-2", "visitor-chatbot-typing-wrap"], [1, "visitor-chatbot-typing-dots"], [1, "d-flex", "flex-wrap", "gap-2", "mt-2"], ["type", "button", "class", "btn btn-sm btn-outline-secondary visitor-chatbot-chip", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "visitor-chatbot-chip", 3, "click"]],
      template: function VisitorChatbotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VisitorChatbotComponent_button_1_Template, 6, 1, "button", 1)(2, VisitorChatbotComponent_div_2_Template, 28, 9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".visitor-chatbot-shell[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 1.25rem;\n  bottom: 1.25rem;\n  z-index: 1050;\n}\n\n.visitor-chatbot-toggle[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  animation: _ngcontent-%COMP%_chatbotFloat 4s ease-in-out infinite;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  border: none;\n  box-shadow: 0 10px 28px rgba(79, 70, 229, 0.35);\n  position: relative;\n}\n.visitor-chatbot-toggle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: -4px;\n  border-radius: 999px;\n  border: 2px solid rgba(124, 58, 237, 0.3);\n  animation: _ngcontent-%COMP%_chatbotRing 2.8s ease-out infinite;\n  pointer-events: none;\n}\n\n.visitor-chatbot-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.03);\n}\n\n.visitor-chatbot-toggle-icon[_ngcontent-%COMP%], \n.visitor-chatbot-avatar[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 999px;\n  background: rgba(var(--bs-light-rgb), 0.2);\n}\n\n.visitor-chatbot-unread-badge[_ngcontent-%COMP%] {\n  min-width: 1.4rem;\n  animation: _ngcontent-%COMP%_chatbotPulse 1.6s ease-in-out infinite;\n}\n\n.visitor-chatbot-panel[_ngcontent-%COMP%] {\n  width: min(410px, 100vw - 2.5rem);\n  height: min(560px, 75vh);\n  border-radius: 18px;\n  overflow: hidden;\n  border: 1px solid #e0e7ff;\n  box-shadow: 0 20px 58px rgba(79, 70, 229, 0.22), 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n\n.visitor-chatbot-panel-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_chatbotSlideUp 0.2s ease-out;\n}\n\n.visitor-chatbot-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);\n  color: #fff;\n  border-bottom: none;\n  min-height: 72px;\n}\n\n.visitor-chatbot-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  line-height: 1.35;\n  color: rgba(255, 255, 255, 0.9);\n  margin-top: 0.08rem;\n}\n\n.visitor-chatbot-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.62rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 0.1rem 0.45rem;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.28);\n}\n\n.visitor-chatbot-header-btn[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.55);\n  color: #fff;\n  background: rgba(255, 255, 255, 0.14);\n}\n.visitor-chatbot-header-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.26);\n  border-color: rgba(255, 255, 255, 0.7);\n  color: #fff;\n}\n\n.visitor-chatbot-messages[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  background: linear-gradient(180deg, #f8faff 0%, #f4f3ff 100%);\n}\n\n.visitor-chatbot-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 0.75rem 0.25rem 0.5rem;\n}\n\n.visitor-chatbot-empty-icon[_ngcontent-%COMP%] {\n  width: 2.8rem;\n  height: 2.8rem;\n  border-radius: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  margin-bottom: 0.45rem;\n  background: linear-gradient(135deg, #dbeafe, #cffafe);\n}\n\n.visitor-chatbot-empty-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #4338ca;\n}\n\n.visitor-chatbot-empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n}\n\n.visitor-chatbot-meta[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #6366f1;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-bottom: 0.15rem;\n}\n\n.visitor-chatbot-meta-user[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.visitor-chatbot-msg-avatar[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.58rem;\n  font-weight: 700;\n  background: linear-gradient(135deg, #e0e7ff, #ede9fe);\n  color: #4f46e5;\n}\n\n.visitor-chatbot-panel[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--bs-border-color);\n}\n\n.visitor-chatbot-panel[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n  white-space: normal;\n  line-height: 1.35;\n}\n\n.visitor-chatbot-bubble[_ngcontent-%COMP%] {\n  max-width: 88%;\n  padding: 0.55rem 0.72rem !important;\n  border-radius: 0.85rem !important;\n  font-size: 0.82rem;\n  line-height: 1.5;\n  border: 1.5px solid #e0e7ff;\n}\n\n.visitor-chatbot-bubble-user[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0.4rem;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed) !important;\n  border-color: transparent;\n}\n\n.visitor-chatbot-bubble-assistant[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.4rem;\n  background: #fff !important;\n  color: #0f172a !important;\n}\n\n.visitor-chatbot-typing-wrap[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.1rem;\n}\n\n.visitor-chatbot-typing-dots[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.2rem;\n}\n\n.visitor-chatbot-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.35rem;\n  height: 0.35rem;\n  border-radius: 999px;\n  background-color: #6366f1;\n  animation: _ngcontent-%COMP%_typingDot 1.2s infinite ease-in-out;\n}\n\n.visitor-chatbot-chip[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border: 1px solid #c7d2fe;\n  color: #4338ca;\n  background: #eef2ff;\n}\n.visitor-chatbot-chip[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-color: transparent;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n}\n\n.visitor-chatbot-composer[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1.5px solid #e0e7ff;\n  border-radius: 10px;\n}\n.visitor-chatbot-composer[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n\n.visitor-chatbot-copy[_ngcontent-%COMP%], \n.visitor-chatbot-send[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  min-width: 2.25rem;\n}\n\n.visitor-chatbot-send[_ngcontent-%COMP%] {\n  border: none;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n}\n\n@media (max-width: 576px) {\n  .visitor-chatbot-shell[_ngcontent-%COMP%] {\n    right: 0.75rem;\n    bottom: 0.75rem;\n  }\n  .visitor-chatbot-panel[_ngcontent-%COMP%] {\n    width: calc(100vw - 1.5rem);\n    height: min(560px, 72vh);\n  }\n}\n.visitor-chatbot-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n\n.visitor-chatbot-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n\n@keyframes _ngcontent-%COMP%_typingDot {\n  0%, 80%, 100% {\n    transform: translateY(0);\n    opacity: 0.45;\n  }\n  40% {\n    transform: translateY(-2px);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_chatbotPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_chatbotSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_chatbotFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-2px);\n  }\n}\n@keyframes _ngcontent-%COMP%_chatbotRing {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1.14);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmlzaXRvci1jaGF0Ym90L3Zpc2l0b3ItY2hhdGJvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHFEQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBQ0UsdUNBQUE7QUFBRjs7QUFHQTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsaURBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwrRUFBQTtBQUFGOztBQUdBO0VBQ0UsdUNBQUE7QUFBRjs7QUFHQTtFQUNFLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtBQUFGOztBQUdBO0VBQ0UsdUNBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUFBRjtBQUVFO0VBQ0UscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDZEQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSxnRUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFEQUFBO0FBREo7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsOENBQUE7QUFGSjs7QUFNQTs7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EscURBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUFIRjtFQU1BO0lBQ0UsMkJBQUE7SUFDQSx3QkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFLHNCQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGFBQUE7RUFMRjtFQU9BO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0U7SUFDRSxtQkFBQTtFQU5GO0VBUUE7SUFDRSxzQkFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBUEY7RUFTQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQVBGO0FBQ0Y7QUFVQTtFQUNFO0lBQ0Usd0JBQUE7RUFSRjtFQVVBO0lBQ0UsMkJBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUFLLG1CQUFBO0lBQXFCLFlBQUE7RUFQMUI7RUFRQTtJQUFPLHNCQUFBO0lBQXdCLFVBQUE7RUFKL0I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi52aXNpdG9yLWNoYXRib3Qtc2hlbGwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMS4yNXJlbTtcclxuICBib3R0b206IDEuMjVyZW07XHJcbiAgei1pbmRleDogMTA1MDtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC10b2dnbGUge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG4gIGFuaW1hdGlvbjogY2hhdGJvdEZsb2F0IDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZjQ2ZTUsICM3YzNhZWQpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjhweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjM1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IC00cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTI0LCA1OCwgMjM3LCAwLjMpO1xyXG4gICAgYW5pbWF0aW9uOiBjaGF0Ym90UmluZyAyLjhzIGVhc2Utb3V0IGluZmluaXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LXRvZ2dsZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDMpO1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LXRvZ2dsZS1pY29uLFxyXG4udmlzaXRvci1jaGF0Ym90LWF2YXRhciB7XHJcbiAgd2lkdGg6IDEuNzVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tYnMtbGlnaHQtcmdiKSwgMC4yKTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC11bnJlYWQtYmFkZ2Uge1xyXG4gIG1pbi13aWR0aDogMS40cmVtO1xyXG4gIGFuaW1hdGlvbjogY2hhdGJvdFB1bHNlIDEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3QtcGFuZWwge1xyXG4gIHdpZHRoOiBtaW4oNDEwcHgsIGNhbGMoMTAwdncgLSAyLjVyZW0pKTtcclxuICBoZWlnaHQ6IG1pbig1NjBweCwgNzV2aCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGU3ZmY7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDU4cHggcmdiYSg3OSwgNzAsIDIyOSwgMC4yMiksIDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1wYW5lbC1lbnRlciB7XHJcbiAgYW5pbWF0aW9uOiBjaGF0Ym90U2xpZGVVcCAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzQzMzhjYSAwJSwgIzdjM2FlZCAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDcycHg7XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3Qtc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zNTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIG1hcmdpbi10b3A6IDAuMDhyZW07XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3Qtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICBmb250LXNpemU6IDAuNjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBwYWRkaW5nOiAwLjFyZW0gMC40NXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOCk7XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3QtaGVhZGVyLWJ0biB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LW1lc3NhZ2VzIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNDVyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y4ZmFmZiAwJSwgI2Y0ZjNmZiAxMDAlKTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1lbXB0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3QtZW1wdHktaWNvbiB7XHJcbiAgd2lkdGg6IDIuOHJlbTtcclxuICBoZWlnaHQ6IDIuOHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40NXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGJlYWZlLCAjY2ZmYWZlKTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1lbXB0eS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzQzMzhjYTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1lbXB0eS1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1tZXRhIHtcclxuICBmb250LXNpemU6IDAuNjhyZW07XHJcbiAgY29sb3I6ICM2MzY2ZjE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMTVyZW07XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3QtbWV0YS11c2VyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LW1zZy1hdmF0YXIge1xyXG4gIHdpZHRoOiAxLjFyZW07XHJcbiAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNThyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTBlN2ZmLCAjZWRlOWZlKTtcclxuICBjb2xvcjogIzRmNDZlNTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1wYW5lbCAuY2FyZC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1icy1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LXBhbmVsIC5iYWRnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LWJ1YmJsZSB7XHJcbiAgbWF4LXdpZHRoOiA4OCU7XHJcbiAgcGFkZGluZzogMC41NXJlbSAwLjcycmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC44NXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2UwZTdmZjtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1idWJibGUtdXNlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNHJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGY0NmU1LCAjN2MzYWVkKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3QtYnViYmxlLWFzc2lzdGFudCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzBmMTcyYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LXR5cGluZy13cmFwIHtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuMXJlbTtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC10eXBpbmctZG90cyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3QtdHlwaW5nLWRvdHMgc3BhbiB7XHJcbiAgd2lkdGg6IDAuMzVyZW07XHJcbiAgaGVpZ2h0OiAwLjM1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzY2ZjE7XHJcbiAgYW5pbWF0aW9uOiB0eXBpbmdEb3QgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnZpc2l0b3ItY2hhdGJvdC1jaGlwIHtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzdkMmZlO1xyXG4gIGNvbG9yOiAjNDMzOGNhO1xyXG4gIGJhY2tncm91bmQ6ICNlZWYyZmY7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzdjM2FlZCk7XHJcbiAgfVxyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LWNvbXBvc2VyIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2UwZTdmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzYzNjZmMTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xMik7XHJcbiAgfVxyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LWNvcHksXHJcbi52aXNpdG9yLWNoYXRib3Qtc2VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtaW4td2lkdGg6IDIuMjVyZW07XHJcbn1cclxuXHJcbi52aXNpdG9yLWNoYXRib3Qtc2VuZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZjQ2ZTUsICM3YzNhZWQpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAudmlzaXRvci1jaGF0Ym90LXNoZWxsIHtcclxuICAgIHJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgYm90dG9tOiAwLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnZpc2l0b3ItY2hhdGJvdC1wYW5lbCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEuNXJlbSk7XHJcbiAgICBoZWlnaHQ6IG1pbig1NjBweCwgNzJ2aCk7XHJcbiAgfVxyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LXR5cGluZy1kb3RzIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xyXG59XHJcblxyXG4udmlzaXRvci1jaGF0Ym90LXR5cGluZy1kb3RzIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwaW5nRG90IHtcclxuICAwJSwgODAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDAuNDU7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGF0Ym90UHVsc2Uge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGF0Ym90U2xpZGVVcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNoYXRib3RGbG9hdCB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGF0Ym90UmluZyB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAwLjg7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE0KTsgb3BhY2l0eTogMDsgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return VisitorChatbotComponent;
})();

/***/ }),

/***/ 18876:
/*!***********************************************************!*\
  !*** ./src/app/shared/service/sidebar/sidebar.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarService: () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.service */ 89544);



let SidebarService = /*#__PURE__*/(() => {
  class SidebarService {
    common;
    renderer;
    base = '';
    page = '';
    last = '';
    toogleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(localStorage.getItem('sidebarPosition') === 'true' ? 'true' : 'false');
    themeColors = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(localStorage.getItem('themeColor') || 'light-mode');
    constructor(rendererFactory, common) {
      this.common = common;
      this.renderer = rendererFactory.createRenderer(null, null);
      this.common.base.subscribe(res => {
        this.base = res;
      });
      this.common.page.subscribe(res => {
        this.page = res;
      });
      this.common.last.subscribe(res => {
        this.last = res;
      });
    }
    openSidebar() {
      // to set sidebar position app component html using "menu-opened" class
      if (localStorage.getItem('sidebarPosition')) {
        localStorage.removeItem('sidebarPosition');
        this.toogleSidebar.next('false');
      } else {
        localStorage.setItem('sidebarPosition', 'true');
        this.toogleSidebar.next('true');
      }
    }
    closeSidebar() {
      // hide sidebar
      this.toogleSidebar.next('false');
      localStorage.removeItem('sidebarPosition');
    }
    changeThemeColor(themeColors) {
      this.themeColors.next(themeColors);
      localStorage.setItem('themeColor', themeColors);
      this.renderer.setAttribute(document.documentElement, 'class', themeColors === 'light-mode' ? 'light-mode' : 'dark-mode');
    }
    static ɵfac = function SidebarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SidebarService,
      factory: SidebarService.ɵfac,
      providedIn: 'root'
    });
  }
  return SidebarService;
})();

/***/ }),

/***/ 20608:
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturesComponent: () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/header/header.component */ 37418);
/* harmony import */ var _layouts_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-header/admin-header.component */ 64438);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _shared_components_visitor_chatbot_visitor_chatbot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/visitor-chatbot/visitor-chatbot.component */ 10401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/service/sidebar/sidebar.service */ 18876);
/* harmony import */ var _shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/common/common.service */ 89544);
/* harmony import */ var _shared_service_auth_blocked_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/service/auth/blocked.service */ 63688);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/service/auth/auth.service */ 34530);













const _c0 = (a0, a1, a2, a3) => ({
  "home-3": a0,
  "home-4": a1,
  "home-five": a2,
  "index-six": a3
});
function FeaturesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
  }
}
function FeaturesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-admin-header");
  }
}
function FeaturesComponent_app_visitor_chatbot_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-visitor-chatbot");
  }
}
function FeaturesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Compte bloqu\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FeaturesComponent_Conditional_6_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onBlockedLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Se d\u00E9connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.blockedMessage);
  }
}
let FeaturesComponent = /*#__PURE__*/(() => {
  class FeaturesComponent {
    Router;
    sidebar;
    common;
    sidebarService;
    blockedService;
    authService;
    showMiniSidebar = false;
    base = '';
    page = '';
    last = '';
    isuserHeader;
    themeMode = '';
    darkTheme = false;
    isAdminHeader;
    showDark = false;
    mainFooter;
    routeStatus;
    routeStatusSub;
    renderer;
    showBackToTop = false;
    // Modal compte bloqué
    blockedMessage = null;
    blockedSub;
    pingInterval = null;
    showVisitorChatbot = false;
    onWindowScroll() {
      // Show the button after scrolling 200px down
      this.showBackToTop = window.scrollY > 200;
    }
    // Scroll to the top of the page
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    constructor(Router, sidebar, common, sidebarService, blockedService, authService) {
      this.Router = Router;
      this.sidebar = sidebar;
      this.common = common;
      this.sidebarService = sidebarService;
      this.blockedService = blockedService;
      this.authService = authService;
      this.common.base.subscribe(res => {
        this.base = res;
        this.scrollToTop();
      });
      this.common.page.subscribe(res => {
        this.page = res;
        this.scrollToTop();
      });
      this.common.last.subscribe(res => {
        this.last = res;
      });
      this.Router.events.subscribe(data => {
        if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart) {
          this.setRouting(data);
        }
      });
      this.setRouting(this.Router);
      this.common.isAdminHeader.subscribe(res => {
        this.isAdminHeader = res;
      });
      this.common.isuserHeader.subscribe(res => {
        this.isuserHeader = res;
      });
      this.common.mainFooter.subscribe(res => {
        this.mainFooter = res;
      });
      this.sidebar.toogleSidebar.subscribe(res => {
        if (res == 'true') {
          this.showMiniSidebar = true;
        } else {
          this.showMiniSidebar = false;
        }
      });
    }
    setRouting(data) {
      this.routeStatus = data.url.split('/')[1]?.split('?')[0];
      this.routeStatusSub = data.url.split('/')[2]?.split('?')[0];
      this.common.base.next(data.url.split('/')[1]?.split('?')[0]);
      this.common.page.next(data.url.split('/')[2]?.split('?')[0]);
      this.common.last.next(data.url.split('/')[3]?.split('?')[0]);
      if (this.routeStatus == 'index' || this.routeStatus == 'index-two' || this.routeStatus == 'index-three' || this.routeStatus == 'index-four' || this.routeStatus == 'index-five' || this.routeStatus == 'index-six') {
        this.common.isuserHeader.next(true);
        this.common.isAdminHeader.next(false);
        this.common.mainFooter.next(false);
      } else {
        this.common.mainFooter.next(true);
      }
      if (this.routeStatus == 'instructor' || this.routeStatus == 'student' || this.routeStatus == 'admin' || this.routeStatus == 'recruiter' || this.routeStatus == 'superadmin') {
        this.common.isuserHeader.next(false);
        this.common.isAdminHeader.next(true);
      } else {
        this.common.isuserHeader.next(true);
        this.common.isAdminHeader.next(false);
      }
      this.updateVisitorChatbotVisibility();
    }
    updateVisitorChatbotVisibility() {
      const excludedRoutes = new Set(['auth', 'student', 'instructor', 'admin', 'recruiter', 'superadmin', 'error-404', 'error-500', 'under-construction', 'coming-soon']);
      this.showVisitorChatbot = !this.authService.isLoggedIn() && !excludedRoutes.has(this.routeStatus);
    }
    ngOnInit() {
      this.blockedSub = this.blockedService.blocked$.subscribe(msg => {
        this.blockedMessage = msg;
      });
      // Vérification périodique toutes les 30 secondes pour détecter un blocage en temps réel
      this.pingInterval = setInterval(() => {
        if (this.authService.isLoggedIn()) {
          this.authService.ping().subscribe({
            error: () => {} // 423 est géré par blockedInterceptor automatiquement
          });
        }
      }, 30000);
      this.updateVisitorChatbotVisibility();
    }
    onBlockedLogout() {
      // Sauvegarder le message pour l'afficher sur la page de login
      if (this.blockedMessage) {
        localStorage.setItem('blockedMessage', this.blockedMessage);
      }
      this.blockedService.clear();
      this.blockedMessage = null;
      this.authService.logout();
    }
    ngOnDestroy() {
      this.sidebarService.changeThemeColor('light-mode');
      if (this.blockedSub) this.blockedSub.unsubscribe();
      if (this.pingInterval) clearInterval(this.pingInterval);
    }
    static ɵfac = function FeaturesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_10__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_auth_blocked_service__WEBPACK_IMPORTED_MODULE_11__.BlockedService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FeaturesComponent,
      selectors: [["app-features"]],
      hostBindings: function FeaturesComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function FeaturesComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 10,
      consts: [[1, "main-wrapper", 3, "ngClass"], [4, "ngIf"], [1, "blocked-overlay"], [1, "blocked-modal"], [1, "blocked-icon"], [1, "ti", "ti-ban"], [1, "blocked-title"], [1, "blocked-text"], [1, "btn", "btn-danger", "w-100", "mt-2", 3, "click"], [1, "ti", "ti-logout", "me-2"]],
      template: function FeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](1, FeaturesComponent_Conditional_1_Template, 1, 0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, FeaturesComponent_Conditional_2_Template, 1, 0, "app-admin-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, FeaturesComponent_app_visitor_chatbot_5_Template, 1, 0, "app-visitor-chatbot", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](6, FeaturesComponent_Conditional_6_Template, 11, 1, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction4"](5, _c0, ctx.base === "index-three", ctx.base === "index-four", ctx.base === "index-five", ctx.base === "index-six"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.isuserHeader ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.isAdminHeader ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showVisitorChatbot);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.blockedMessage ? 6 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _layouts_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_4__.AdminHeaderComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__.SlickCarouselModule, _shared_components_visitor_chatbot_visitor_chatbot_component__WEBPACK_IMPORTED_MODULE_6__.VisitorChatbotComponent],
      styles: [".blocked-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.blocked-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem 2rem;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_popIn 0.25s ease-out;\n}\n\n.blocked-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: #fee2e2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.blocked-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #dc2626;\n}\n\n.blocked-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.75rem;\n}\n\n.blocked-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n  line-height: 1.6;\n}\n\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0.85);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFBTyxzQkFBQTtJQUF3QixVQUFBO0VBRS9CO0VBREE7SUFBTyxtQkFBQTtJQUF3QixVQUFBO0VBSy9CO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2tlZC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbn1cclxuXHJcbi5ibG9ja2VkLW1vZGFsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMi41cmVtIDJyZW07XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYW5pbWF0aW9uOiBwb3BJbiAwLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJsb2NrZWQtaWNvbiB7XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZWUyZTI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0byAxLjI1cmVtO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjZGMyNjI2O1xyXG4gIH1cclxufVxyXG5cclxuLmJsb2NrZWQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLmJsb2NrZWQtdGV4dCB7XHJcbiAgY29sb3I6ICM2YjcyODA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcG9wSW4ge1xyXG4gIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuODUpOyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8gICB7IHRyYW5zZm9ybTogc2NhbGUoMSk7ICAgIG9wYWNpdHk6IDE7IH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return FeaturesComponent;
})();

/***/ }),

/***/ 21555:
/*!*******************************************************************!*\
  !*** ./src/app/shared/service/chatbot/visitor-chatbot.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorChatbotService: () => (/* binding */ VisitorChatbotService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let VisitorChatbotService = /*#__PURE__*/(() => {
  class VisitorChatbotService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    ask(message) {
      const payload = {
        message
      };
      return this.http.post(`${this.apiUrl}/public/chatbot/message`, payload);
    }
    static ɵfac = function VisitorChatbotService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VisitorChatbotService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VisitorChatbotService,
      factory: VisitorChatbotService.ɵfac,
      providedIn: 'root'
    });
  }
  return VisitorChatbotService;
})();

/***/ }),

/***/ 37418:
/*!*************************************************************!*\
  !*** ./src/app/features/layouts/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/common/common.service */ 89544);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/data/data.service */ 30098);
/* harmony import */ var _shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/sidebar/sidebar.service */ 18876);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/service/message/message.service */ 40376);
/* harmony import */ var _shared_service_notification_websocket_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/service/notification/websocket-notification.service */ 42626);














const _c0 = ["stickyMenu"];
const _c1 = a0 => ({
  "home-six": a0
});
const _c2 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "header-one": a0,
  "header-two": a1,
  "header-three": a2,
  "position-fixed": a3,
  "header-four": a4,
  "header-two header-five position-fixed": a5,
  "fixed": a6
});
const _c3 = a0 => ({
  "active": a0
});
const _c4 = a0 => ({
  "activate": a0
});
const _c5 = a0 => ({
  "opened": a0
});
const _c6 = a0 => ({
  "submenu": a0
});
const _c7 = a0 => ({
  display: a0
});
const _c8 = a0 => ({
  "custom-last": a0
});
function HeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44)(1, "div", 3)(2, "div", 45)(3, "div", 46)(4, "div", 47)(5, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Tunis, Tunisie \u2014 Centre d'Innovation Digitale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "+216 71 XXX XXX");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 46)(12, "div", 52)(13, "div", 53)(14, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "ENG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ul", 24)(18, "li")(19, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "ENG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li")(23, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "ARA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li")(27, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "FRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 55)(31, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " USD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "ul", 24)(34, "li")(35, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "li")(38, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "YEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "li")(41, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "EURO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "ul", 56)(44, "li", 57)(45, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "li", 57)(48, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "li", 57)(51, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "li", 57)(54, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "li")(57, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
  }
}
function HeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span")(2, "span")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.home);
  }
}
function HeaderComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.home);
  }
}
function HeaderComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 18)(1, "li")(2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Accueil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "li")(5, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li")(8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "V\u00E9rifier Certificat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li")(11, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Become Instructor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li")(14, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u00C0 propos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li")(17, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li")(20, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c3, ctx_r0.isHovered));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.isHomeRoute(ctx_r0.routes.home) || ctx_r0.isHomeRoute(ctx_r0.routes.home2) || ctx_r0.isHomeRoute(ctx_r0.routes.home3) || ctx_r0.isHomeRoute(ctx_r0.routes.home4) || ctx_r0.isHomeRoute(ctx_r0.routes.home5) || ctx_r0.isHomeRoute(ctx_r0.routes.home6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.home);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.base === "courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === "certificate-verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.verifyCertificate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === "become-an-instructor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.becomeAnExpert);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === "about-us");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.aboutUs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === "contact-us");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.contactUs);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.base === "blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.blog_grid);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76)(1, "div", 77)(2, "div", 78)(3, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 81)(6, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const menu_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.base === menu_r3.base);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menu_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinterpolate1"]("assets/img/home/", menu_r3.img), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menu_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menu_r3.menuValue);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function HeaderComponent_Conditional_21_ng_container_1_Conditional_1_Template_li_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isHovered = true);
    })("mouseleave", function HeaderComponent_Conditional_21_ng_container_1_Conditional_1_Template_li_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isHovered = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_21_ng_container_1_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.openSubMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 74)(5, "li")(6, "div", 75)(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](8, HeaderComponent_Conditional_21_ng_container_1_Conditional_1_For_9_Template, 8, 7, "div", 76, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const mainMenus_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.base === mainMenus_r4.base || ctx_r0.base === mainMenus_r4.base2 || ctx_r0.base === mainMenus_r4.base3 || ctx_r0.base === mainMenus_r4.base4 || ctx_r0.base === mainMenus_r4.base5 || ctx_r0.base === mainMenus_r4.base6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c6, ctx_r0.isDropdownOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", mainMenus_r4.tittle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c7, ctx_r0.isDropdownOpen ? "block" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](mainMenus_r4.menu);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 82)(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mainMenus_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.base === mainMenus_r4.base);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", mainMenus_r4.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.translateNavItem(mainMenus_r4.tittle), " ");
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === menu_r7.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", menu_r7.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menu_r7.menuValue);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === subMenu_r9.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subMenu_r9.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subMenu_r9.menuValue);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenu2_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === subMenu2_r10.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subMenu2_r10.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subMenu2_r10.menuValue);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 82)(1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](4, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template, 3, 4, "li", 84, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === subMenu_r9.page || ctx_r0.page === subMenu_r9.page1 || ctx_r0.page === subMenu_r9.page2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subMenu_r9.menuValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](subMenu_r9.subMenus);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template, 3, 4, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template, 6, 3, "li", 70);
  }
  if (rf & 2) {
    const subMenu_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](subMenu_r9.hasSubRoute === false ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](subMenu_r9.hasSubRoute === true ? 1 : -1);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 82)(1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.openSubMenu1(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](4, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_For_5_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === menu_r7.base || ctx_r0.page === menu_r7.base1 || ctx_r0.page === menu_r7.base2 || ctx_r0.page === menu_r7.base3 || ctx_r0.page === menu_r7.base4 || ctx_r0.page === menu_r7.base5 || ctx_r0.page === menu_r7.base6 || ctx_r0.page === menu_r7.base7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c6, ctx_r0.isDropdownOpen1 === i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](menu_r7.menuValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c7, ctx_r0.isDropdownOpen1 === i_r6 ? "block" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](menu_r7.subMenus);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_0_Template, 3, 4, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Conditional_1_Template, 6, 9, "li", 70);
  }
  if (rf & 2) {
    const menu_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](menu_r7.hasSubRoute === false ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](menu_r7.hasSubRoute === true ? 1 : -1);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 82)(1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_21_ng_container_1_Conditional_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.toggleSubMenu(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](5, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_For_6_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const mainMenus_r4 = ctx_r10.$implicit;
    const i_r6 = ctx_r10.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.base === mainMenus_r4.base || ctx_r0.base === mainMenus_r4.base2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c6, ctx_r0.openDropdownIndex === i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.translateNavItem(mainMenus_r4.tittle), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c7, ctx_r0.openDropdownIndex === i_r6 ? "block" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](mainMenus_r4.menu);
  }
}
function HeaderComponent_Conditional_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, HeaderComponent_Conditional_21_ng_container_1_Conditional_1_Template, 10, 9, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](2, HeaderComponent_Conditional_21_ng_container_1_Conditional_2_Template, 4, 4, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](3, HeaderComponent_Conditional_21_ng_container_1_Conditional_3_Template, 7, 9, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const mainMenus_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](mainMenus_r4.separateRoute === false && mainMenus_r4.tittle === "Home" ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](mainMenus_r4.separateRoute === true ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](mainMenus_r4.separateRoute === false && mainMenus_r4.tittle !== "Home" ? 3 : -1);
  }
}
function HeaderComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_Conditional_21_ng_container_1_Template, 4, 3, "ng-container", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "li")(3, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "V\u00E9rifier certificat");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c3, ctx_r0.isHovered));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.sidebar);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.page === "certificate-verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.verifyCertificate);
  }
}
function HeaderComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 86)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Panier");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 87)(4, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
  }
}
function HeaderComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Inscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 94)(2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Mon Profil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Mon Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_ng_container_66_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.doLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "D\u00E9connexion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 5, ctx_r0.userRole));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.profileRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 103)(1, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 24)(4, "li")(5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "ENG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li")(9, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "ARA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li")(13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "FRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 106)(17, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ul", 24)(20, "li")(21, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "YEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li")(27, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "EURO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function HeaderComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 109)(1, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
  }
}
function HeaderComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 111)(1, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c8, ctx_r0.base === "index-six"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
  }
}
function HeaderComponent_ng_container_77_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadMsgCount > 99 ? "99+" : ctx_r0.unreadMsgCount, " ");
  }
}
function HeaderComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 113)(2, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HeaderComponent_ng_container_77_span_4_Template, 2, 1, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.dashboardRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.unreadMsgCount > 0);
  }
}
function HeaderComponent_Conditional_78_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Connexion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Inscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_Conditional_78_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 120)(2, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_78_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.toggleProfileDropdown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 124)(8, "li", 125)(9, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li")(14, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_78_ng_container_1_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isProfileDropdownOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li")(18, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_78_ng_container_1_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isProfileDropdownOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Mon Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "hr", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_78_ng_container_1_Template_a_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.doLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r0.isProfileDropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r0.isProfileDropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.profileRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HeaderComponent_Conditional_78_ng_container_0_Template, 5, 2, "ng-container", 32)(1, HeaderComponent_Conditional_78_ng_container_1_Template, 27, 10, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);
  }
}
function HeaderComponent_Conditional_79_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_Conditional_79_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 120)(2, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_79_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.toggleProfileDropdown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 124)(6, "li", 125)(7, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li")(13, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_79_ng_container_1_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isProfileDropdownOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li")(17, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_79_ng_container_1_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isProfileDropdownOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Mon Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "hr", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li")(23, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_79_ng_container_1_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.doLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r0.isProfileDropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r0.isProfileDropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, ctx_r0.userRole));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.profileRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HeaderComponent_Conditional_79_ng_container_0_Template, 5, 2, "ng-container", 32)(1, HeaderComponent_Conditional_79_ng_container_1_Template, 26, 11, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);
  }
}
function HeaderComponent_Conditional_80_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_Conditional_80_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 120)(2, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_80_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.toggleProfileDropdown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 124)(8, "li", 125)(9, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li")(15, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_80_ng_container_1_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isProfileDropdownOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "li")(19, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_80_ng_container_1_Template_a_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.isProfileDropdownOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Mon Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "hr", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "li")(25, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Conditional_80_ng_container_1_Template_a_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.doLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r0.isProfileDropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userInitials);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx_r0.isProfileDropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 10, ctx_r0.userRole));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.profileRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HeaderComponent_Conditional_80_ng_container_0_Template, 7, 2, "ng-container", 32)(1, HeaderComponent_Conditional_80_ng_container_1_Template, 28, 12, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);
  }
}
function HeaderComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_81_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.sidebarService.changeThemeColor("dark-mode"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_81_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.sidebarService.changeThemeColor("light-mode"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 135)(7, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "ENG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ul", 24)(11, "li")(12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "ENG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li")(16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "ARA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li")(20, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "FRE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 136)(24, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " USD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ul", 24)(27, "li")(28, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li")(31, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "YEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "li")(34, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "EURO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c4, ctx_r0.themeColor === "light-mode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c4, ctx_r0.themeColor === "dark-mode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx_r0.routes.register);
  }
}
let HeaderComponent = /*#__PURE__*/(() => {
  class HeaderComponent {
    common;
    data;
    sidebarService;
    renderer;
    el;
    authService;
    router;
    messageService;
    wsNotifService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    menuElement;
    headerpage = false;
    sticky = false;
    elementPosition;
    headerClass = true;
    isHovered = false;
    isFixed = false;
    isOpened = false;
    isDropdownOpen = false;
    isDropdownOpen1 = null;
    indexMoreOpen = false;
    homeDropdownOpen = false;
    base = '';
    page = '';
    last = '';
    headerMenuactive = '';
    openDropdownIndex = null;
    themeColor = 'light-mode';
    islight = true;
    isdark = false;
    showDark = false;
    white_bg = false;
    // ── User state ──
    isLoggedIn = false;
    userName = '';
    userRole = '';
    isProfileDropdownOpen = false;
    unreadMsgCount = 0;
    pollSub;
    get userInitials() {
      if (!this.userName) return 'U';
      return this.userName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
    }
    get isStudent() {
      return this.userRole.includes('STUDENT');
    }
    get isInstructor() {
      return this.userRole.includes('INSTRUCTOR');
    }
    get isAdmin() {
      return this.userRole.includes('ADMIN') && !this.userRole.includes('SUPERADMIN');
    }
    get isSuperAdmin() {
      return this.userRole.includes('SUPERADMIN');
    }
    get isRecruiter() {
      return this.userRole.includes('RECRUITER');
    }
    get showCart() {
      return this.isStudent || !this.isLoggedIn;
    }
    get showCartOnPublicCoursePages() {
      const url = this.router.url || '';
      return url.includes('/courses/course-list-public') || url.includes('/courses/course-details');
    }
    get dashboardRoute() {
      if (this.isSuperAdmin) return '/superadmin/superadmin-dashboard';
      if (this.isAdmin) return '/admin/admin-dashboard';
      if (this.isInstructor) return '/instructor/instructor-dashboard';
      if (this.isStudent) return '/student/student-dashboard';
      if (this.isRecruiter) return '/recruiter/recruiter-dashboard';
      return '/';
    }
    get profileRoute() {
      if (this.isSuperAdmin) return '/superadmin/superadmin-settings';
      if (this.isAdmin) return '/admin/admin-settings';
      if (this.isInstructor) return '/instructor/settings/instructor-settings';
      if (this.isStudent) return '/student/student-profile';
      if (this.isRecruiter) return '/recruiter/settings/recruiter-settings';
      return '/';
    }
    get roleLabel() {
      if (this.isSuperAdmin) return 'Super Admin';
      if (this.isAdmin) return 'Admin';
      if (this.isInstructor) return 'Instructeur';
      if (this.isStudent) return 'Étudiant';
      if (this.isRecruiter) return 'Recruteur';
      return this.userRole;
    }
    doLogout() {
      this.isProfileDropdownOpen = false;
      this.authService.logout();
    }
    toggleProfileDropdown() {
      this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    }
    sidebar;
    constructor(common, data, sidebarService, renderer, el, authService, router, messageService, wsNotifService) {
      this.common = common;
      this.data = data;
      this.sidebarService = sidebarService;
      this.renderer = renderer;
      this.el = el;
      this.authService = authService;
      this.router = router;
      this.messageService = messageService;
      this.wsNotifService = wsNotifService;
      this.common.base.subscribe(res => {
        this.base = res;
        this.renderer.removeClass(document.documentElement, 'menu-opened');
        this.isOpened = false;
      });
      this.common.page.subscribe(res => {
        this.page = res;
        this.renderer.removeClass(document.documentElement, 'menu-opened');
        this.isOpened = false;
      });
      this.common.last.subscribe(res => {
        this.last = res;
      });
      this.sidebar = this.data.sideBar;
      this.sidebarService.themeColors.subscribe(res => {
        this.themeColor = res;
      });
    }
    onWindowScroll() {
      // Add a fixed class when the scroll position is greater than 50px
      this.isFixed = window.pageYOffset > 40;
    }
    toggleSidebar() {
      this.sidebarService.openSidebar();
      this.isOpened = !this.isOpened;
      if (this.isOpened === true) {
        this.renderer.addClass(document.documentElement, 'menu-opened');
      } else {
        this.renderer.removeClass(document.documentElement, 'menu-opened');
      }
    }
    hideSidebar() {
      this.sidebarService.closeSidebar();
      this.isOpened = false;
      this.renderer.removeClass(document.documentElement, 'menu-opened');
    }
    themeMode = 'light_mode';
    isDarkMode = false;
    // toggleMode(isDark: boolean) {
    //   this.isDarkMode = isDark;
    //   this.applyTheme();
    // }
    openSubMenu() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.openDropdownIndex = null;
    }
    toggleHomeDropdown() {
      this.homeDropdownOpen = !this.homeDropdownOpen;
    }
    isHomeRoute(route) {
      return this.base === route;
    }
    openSubMenu1(index) {
      this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
    }
    toggleSubMenu(index) {
      // If the clicked menu is already open, close it
      this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
      this.isDropdownOpen = false;
    }
    switchTheme() {
      this.isdark = !this.isdark;
      this.islight = !this.islight;
    }
    ngOnInit() {
      const themeColor = localStorage.getItem('themeColor') || 'light-mode';
      this.sidebarService.changeThemeColor(themeColor);
      this.isLoggedIn = this.authService.isLoggedIn();
      this.userName = localStorage.getItem('fullName') || 'Utilisateur';
      this.userRole = localStorage.getItem('role') || '';
      if (this.isLoggedIn) {
        this.refreshUnreadCount();
        // Poll every 30 seconds
        this.pollSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.messageService.getUnreadCount())).subscribe({
          next: res => {
            this.unreadMsgCount = res?.count ?? res ?? 0;
          },
          error: () => {}
        });
        // 🚀 Démarrer WebSocket pour les notifications temps réel
        try {
          this.wsNotifService.connect();
        } catch (e) {
          console.error('[HEADER] ❌ Erreur WebSocket:', e);
        }
      }
    }
    ngOnDestroy() {
      this.pollSub?.unsubscribe();
      // Déconnecter WebSocket
      this.wsNotifService.disconnect();
    }
    refreshUnreadCount() {
      this.messageService.getUnreadCount().subscribe({
        next: res => {
          this.unreadMsgCount = res?.count ?? res ?? 0;
        },
        error: () => {}
      });
    }
    /** Translate nav top-level titles to French */
    translateNavItem(tittle) {
      const map = {
        'Home': 'Accueil',
        'Courses': 'Cours',
        'Dashboard': 'Tableau de bord',
        'Pages': 'Pages',
        'Blog': 'Blog'
      };
      return map[tittle] ?? tittle;
    }
    static ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_8__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_9__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_12__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_notification_websocket_notification_service__WEBPACK_IMPORTED_MODULE_13__.WebSocketNotificationService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
        }
      },
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        }
      },
      decls: 83,
      vars: 44,
      consts: [["class", "header-topbar text-center", 4, "ngIf"], [3, "ngClass"], [1, "", 3, "ngClass"], [1, "container"], [1, "header-nav"], [1, "navbar-header"], ["id", "mobile_btn", "href", "javascript:void(0);", 3, "click"], [1, "bar-icon"], [1, "navbar-logo"], ["class", "logo-white header-logo", 3, "routerLink", 4, "ngIf"], [1, "logo-dark", "header-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo", 1, "logo"], [1, "main-menu-wrapper", 3, "ngClass"], [1, "menu-header"], [1, "menu-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], ["id", "menu_close", "href", "javascript:void(0);", 1, "menu-close", 3, "click"], [1, "fas", "fa-times"], [1, "main-nav", 3, "ngClass"], [1, "menu-dropdown"], ["class", "cart-item", 4, "ngIf"], [1, "dropdown", "flag-dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown-menu", "p-2", "mt-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded", "d-flex", "align-items-center"], ["src", "assets/img/flags/arab-flag.svg", "alt", "flag", 1, "me-2"], ["src", "assets/img/flags/france-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded"], [1, "menu-login"], [4, "ngIf"], [3, "hidden"], [1, "header-btn", "d-flex", "align-items-center"], [1, "icon-btn", "me-2"], ["href", "javascript:void(0);", "id", "dark-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-sun-15"], ["href", "javascript:void(0);", "id", "light-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-moon"], ["class", "icon-btn me-3", 4, "ngIf"], ["class", "icon-btn me-3", 3, "ngClass", 4, "ngIf"], ["class", "header-btn d-flex align-items-center", 4, "ngIf"], [1, "sidebar-overlay", 3, "click", "ngClass"], [1, "header-topbar", "text-center"], [1, "row"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2", "me-3"], [1, "isax", "isax-location5", "me-2"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2"], [1, "isax", "isax-call-calling5", "me-2"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-end"], [1, "dropdown", "flag-dropdown", "mb-2", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-inline-flex", "align-items-center"], [1, "dropdown", "mb-2", "me-3"], [1, "social-icon", "d-flex", "align-items-center", "mb-2"], [1, "me-2"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"], [1, "isax", "isax-menu"], [1, "logo-white", "header-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "logo"], [3, "routerLink"], [4, "ngFor", "ngForOf"], [1, "has-submenu", "megamenu", 3, "active"], [1, "has-submenu", 3, "active"], [1, "has-submenu", "megamenu", 3, "mouseenter", "mouseleave"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "fas", "fa-chevron-down"], [1, "submenu", "mega-submenu", 3, "ngStyle"], [1, "megamenu-wrapper"], [1, "col-lg-2"], [1, "single-demo"], [1, "demo-img"], [1, "inner-demo-img", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "demo-info"], [1, "has-submenu"], [1, "submenu", 3, "ngStyle"], [3, "active"], [1, "submenu"], [1, "cart-item"], [1, "icon-btn"], [1, "position-relative", 3, "routerLink"], [1, "isax", "isax-shopping-cart5"], [1, "btn", "btn-primary", "w-100", "mb-2", 3, "routerLink"], [1, "isax", "isax-user", "me-2"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "isax", "isax-user-edit", "me-2"], [1, "d-flex", "align-items-center", "gap-2", "p-2", "rounded-3", "bg-light", "mb-2"], [1, "user-avatar-circle", 2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "14px", "flex-shrink", "0"], [1, "mb-0", "fw-semibold", "fs-14", "text-truncate", 2, "max-width", "160px"], [1, "badge", "bg-primary-subtle", "text-primary", "small"], [1, "dropdown-item", "rounded", "py-2", "px-2", "d-flex", "align-items-center", "gap-2", "mb-1", 3, "routerLink"], [1, "isax", "isax-user-square", "fs-18", "text-primary"], [1, "isax", "isax-home-2", "fs-18", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-danger", "w-100", "mt-2", 3, "click"], [1, "isax", "isax-logout", "me-2"], [1, "dropdown", "flag-dropdown", "icon-btn", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-inline-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag"], [1, "dropdown", "icon-btn", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false"], [1, "isax", "isax-dollar-circle4"], [1, "icon-btn", "me-3"], ["title", "Panier", 1, "position-relative", 3, "routerLink"], [1, "icon-btn", "me-3", 3, "ngClass"], [1, "count-icon", "bg-success", "p-1", "rounded-pill", "text-white", "fs-10", "fw-bold"], [1, "icon-btn", "me-3", "position-relative"], ["title", "Messages", 1, "position-relative", 3, "routerLink"], [1, "isax", "isax-messages-35", "fs-20"], ["style", "position:absolute;top:-6px;right:-8px;background:#4a1d96;color:#fff;border-radius:50%;font-size:10px;font-weight:700;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;padding:0 3px;", 4, "ngIf"], [2, "position", "absolute", "top", "-6px", "right", "-8px", "background", "#4a1d96", "color", "#fff", "border-radius", "50%", "font-size", "10px", "font-weight", "700", "min-width", "18px", "height", "18px", "display", "flex", "align-items", "center", "justify-content", "center", "padding", "0 3px"], [1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "me-2", 3, "routerLink"], [1, "btn", "btn-secondary", "me-0", 3, "routerLink"], [1, "dropdown", "me-0"], [1, "btn", "p-0", "border-0", "bg-transparent", "d-flex", "align-items-center", "gap-2", 2, "outline", "none", 3, "click"], [2, "width", "38px", "height", "38px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "13px", "flex-shrink", "0"], [1, "d-none", "d-lg-inline", "fw-medium", "fs-14"], [1, "dropdown-menu", "dropdown-menu-end", "p-2", "mt-2", 2, "min-width", "220px", "border-radius", "12px", "box-shadow", "0 8px 32px rgba(0,0,0,.13)"], [1, "px-3", "py-2", "border-bottom", "mb-1"], [1, "mb-0", "fw-semibold"], [1, "dropdown-item", "rounded", "d-flex", "align-items-center", "gap-2", "py-2", 3, "click", "routerLink"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded", "d-flex", "align-items-center", "gap-2", "py-2", "text-danger", 3, "click"], [1, "isax", "isax-logout", "fs-18"], [1, "btn", "p-0", "border-0", "bg-transparent", 2, "outline", "none", 3, "click"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "14px"], [1, "btn", "btn-light", "d-inline-flex", "align-items-center", "me-2", 3, "routerLink"], [1, "isax", "isax-lock-circle", "me-2"], [1, "dropdown", "flag-dropdown", "me-3"], [1, "dropdown", "me-3"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 59, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() {
            return ctx.toggleSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](7, HeaderComponent_Conditional_7_Template, 2, 0, "span", 7)(8, HeaderComponent_Conditional_8_Template, 4, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 2, 1, "a", 9)(11, HeaderComponent_a_11_Template, 2, 1, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() {
            return ctx.hideSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](20, HeaderComponent_Conditional_20_Template, 22, 24, "ul", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](21, HeaderComponent_Conditional_21_Template, 5, 7, "ul", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, HeaderComponent_div_23_Template, 6, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 21)(25, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "ENG ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ul", 24)(29, "li")(30, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "ENG ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "li")(34, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "ARA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "li")(38, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "FRE ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 28)(42, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " USD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ul", 24)(45, "li")(46, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "USD");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "li")(49, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "YEN");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "li")(52, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "EURO");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 28)(55, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Clair ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "ul", 24)(58, "li")(59, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Clair");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "li")(62, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Sombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, HeaderComponent_ng_container_65_Template, 7, 2, "ng-container", 32)(66, HeaderComponent_ng_container_66_Template, 19, 7, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 33)(68, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](69, HeaderComponent_Conditional_69_Template, 29, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 35)(71, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_71_listener() {
            return ctx.sidebarService.changeThemeColor("dark-mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_73_listener() {
            return ctx.sidebarService.changeThemeColor("light-mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, HeaderComponent_div_75_Template, 3, 1, "div", 40)(76, HeaderComponent_div_76_Template, 5, 4, "div", 41)(77, HeaderComponent_ng_container_77_Template, 5, 2, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](78, HeaderComponent_Conditional_78_Template, 2, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](79, HeaderComponent_Conditional_79_Template, 2, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](80, HeaderComponent_Conditional_80_Template, 2, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, HeaderComponent_div_81_Template, 40, 8, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_82_listener() {
            return ctx.hideSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.base === "index-two");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c1, ctx.base === "index-six"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction7"](28, _c2, ctx.base === "index", ctx.base === "index-two" || ctx.base === "courses", ctx.base === "index-three" || ctx.base === "index-six", ctx.base === "index-three", ctx.base === "index-four", ctx.base === "index-five", ctx.isFixed));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base.includes("index") ? 7 : 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.base === "index-two" || ctx.base === "index-three" || ctx.base === "index-four" || ctx.base === "index-five" || ctx.base === "index-six" || ctx.base === "courses" || ctx.base === "pages" || ctx.base === "blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.base === "index");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](36, _c3, ctx.isHovered));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base === "index" || ctx.base === "pages" || ctx.base === "courses" || ctx.base === "blog" ? 20 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base !== "index" && ctx.base !== "pages" && ctx.base !== "courses" && ctx.base !== "blog" ? 21 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.base === "index-three" || ctx.base === "index-four");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base === "index-two" || ctx.base === "index-three" || ctx.base === "index-four" || ctx.base === "index-five" || ctx.base === "index-six" ? 69 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](38, _c4, ctx.themeColor === "light-mode"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](40, _c4, ctx.themeColor === "dark-mode"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.base === "index" || ctx.showCartOnPublicCoursePages) && ctx.showCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.base !== "index" && ctx.base !== "pages" && ctx.base !== "courses" && ctx.base !== "blog" && !ctx.showCartOnPublicCoursePages && ctx.showCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.base !== "index" && ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base === "index" || ctx.base === "pages" || ctx.base === "courses" || ctx.base === "blog" ? 78 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base === "index-six" ? 79 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.base === "index-two" ? 80 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.base === "index-three" || ctx.base === "index-four");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](42, _c5, ctx.isOpened));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
      styles: ["@charset \"UTF-8\";\n.disply-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.disply-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.index-nav-more[_ngcontent-%COMP%] {\n  position: relative;\n}\n.index-nav-more[_ngcontent-%COMP%]   .index-more-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 260px;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.14);\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  padding: 10px;\n  z-index: 9999;\n  list-style: none;\n}\n.index-nav-more[_ngcontent-%COMP%]   .index-more-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  color: #0f172a;\n  transition: background 0.2s ease;\n}\n.index-nav-more[_ngcontent-%COMP%]   .index-more-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n\n\n.index-more-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 17px;\n}\n\n\n\n.cat-p-indigo.index-more-icon[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4338ca;\n}\n\n.cat-p-purple.index-more-icon[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #7e22ce;\n}\n\n.cat-p-emerald.index-more-icon[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n}\n\n\n\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.2s ease;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus-visible {\n  color: #be185d !important;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], \n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus-visible   i[_ngcontent-%COMP%] {\n  color: #be185d !important;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .header-nav[_ngcontent-%COMP%]   .main-menu-wrapper[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus-visible {\n  background: linear-gradient(135deg, #fff1f7, #fdf4ff);\n  color: #9d174d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQSx3Q0FBQTtBQUNBO0VBQ0ksa0JBQUE7QUFHSjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBR1I7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFHWjtBQURZO0VBQ0ksbUJBQUE7QUFHaEI7O0FBR0EsaUNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBLGlEQUFBO0FBQ0E7RUFBZ0MsbUJBQUE7RUFBcUIsY0FBQTtBQUVyRDs7QUFEQTtFQUFnQyxtQkFBQTtFQUFxQixjQUFBO0FBTXJEOztBQUxBO0VBQWlDLG1CQUFBO0VBQXFCLGNBQUE7QUFVdEQ7O0FBUkEscURBQUE7QUFFSTtFQUNJLDJCQUFBO0FBVVI7QUFQSTs7RUFFSSx5QkFBQTtBQVNSO0FBTkk7O0VBRUkseUJBQUE7QUFRUjtBQUxJOztFQUVJLHFEQUFBO0VBQ0EsY0FBQTtBQU9SIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BseS1ub25le1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uZGlzcGx5LWJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiDDosKUwoDDosKUwoAgXCJQbHVzXCIgZHJvcGRvd24gZm9yIGluZGV4IG5hdiDDosKUwoDDosKUwoAgKi9cbi5pbmRleC1uYXYtbW9yZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmluZGV4LW1vcmUtbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjE0KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjYsIDIzMiwgMjQwLCAwLjgpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgIGxpIGEge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogaWNvbiBidWJibGUgcmV1c2VkIGZyb20gaG9tZSAqL1xuLmluZGV4LW1vcmUtaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi8qIFJldXNlIGNhdC1wLSogY29sb3VyIGNsYXNzZXMgZnJvbSBob21lL2FkbWluICovXG4uY2F0LXAtaW5kaWdvLmluZGV4LW1vcmUtaWNvbiB7IGJhY2tncm91bmQ6ICNlZWYyZmY7IGNvbG9yOiAjNDMzOGNhOyB9XG4uY2F0LXAtcHVycGxlLmluZGV4LW1vcmUtaWNvbiB7IGJhY2tncm91bmQ6ICNmYWY1ZmY7IGNvbG9yOiAjN2UyMmNlOyB9XG4uY2F0LXAtZW1lcmFsZC5pbmRleC1tb3JlLWljb24geyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBjb2xvcjogIzE1ODAzZDsgfVxuXG4vKiBTdWJ0bGUgcGluayBhY2NlbnQgZm9yIG5hdmJhciBob3Zlci9mb2N1cyBzdGF0ZXMgKi9cbjpob3N0IHtcbiAgICBoZWFkZXIgLmhlYWRlci1uYXYgLm1haW4tbWVudS13cmFwcGVyIC5tYWluLW5hdiA+IGxpID4gYSB7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICBoZWFkZXIgLmhlYWRlci1uYXYgLm1haW4tbWVudS13cmFwcGVyIC5tYWluLW5hdiA+IGxpID4gYTpob3ZlcixcbiAgICBoZWFkZXIgLmhlYWRlci1uYXYgLm1haW4tbWVudS13cmFwcGVyIC5tYWluLW5hdiA+IGxpID4gYTpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgY29sb3I6ICNiZTE4NWQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBoZWFkZXIgLmhlYWRlci1uYXYgLm1haW4tbWVudS13cmFwcGVyIC5tYWluLW5hdiA+IGxpID4gYTpob3ZlciBpLFxuICAgIGhlYWRlciAuaGVhZGVyLW5hdiAubWFpbi1tZW51LXdyYXBwZXIgLm1haW4tbmF2ID4gbGkgPiBhOmZvY3VzLXZpc2libGUgaSB7XG4gICAgICAgIGNvbG9yOiAjYmUxODVkICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaGVhZGVyIC5oZWFkZXItbmF2IC5tYWluLW1lbnUtd3JhcHBlciAubWFpbi1uYXYgPiBsaSAuc3VibWVudSA+IGxpID4gYTpob3ZlcixcbiAgICBoZWFkZXIgLmhlYWRlci1uYXYgLm1haW4tbWVudS13cmFwcGVyIC5tYWluLW5hdiA+IGxpIC5zdWJtZW51ID4gbGkgPiBhOmZvY3VzLXZpc2libGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmMWY3LCAjZmRmNGZmKTtcbiAgICAgICAgY29sb3I6ICM5ZDE3NGQ7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return HeaderComponent;
})();

/***/ }),

/***/ 64438:
/*!*************************************************************************!*\
  !*** ./src/app/features/layouts/admin-header/admin-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminHeaderComponent: () => (/* binding */ AdminHeaderComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/common/common.service */ 89544);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/service/data/data.service */ 30098);
/* harmony import */ var _shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/sidebar/sidebar.service */ 18876);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _shared_service_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/notification/notification.service */ 30116);
/* harmony import */ var _shared_service_notification_websocket_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/service/notification/websocket-notification.service */ 42626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 85422);














const _c0 = ["stickyMenu"];
const _c1 = a0 => ({
  "active": a0
});
const _c2 = a0 => ({
  "activate": a0
});
const _c3 = () => ({
  "background": "rgba(255,255,255,.18)",
  "color": "#fff",
  "border": "1px solid rgba(255,255,255,.35)"
});
const _c4 = () => ({
  "background": "rgba(99,102,241,.12)",
  "color": "#6366f1"
});
const _c5 = () => ({
  "background": "rgba(16,185,129,.12)",
  "color": "#059669"
});
const _c6 = () => ({
  "background": "rgba(14,165,233,.12)",
  "color": "#0284c7"
});
const _c7 = a0 => ({
  "opened": a0
});
function AdminHeaderComponent_ul_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 57)(1, "li")(2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Param\u00E8tres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "superadmin-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "superadmin-users");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "superadmin-logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_logs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "superadmin-settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadminSettings);
  }
}
function AdminHeaderComponent_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 63)(1, "li")(2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Cat\u00E9gories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li")(22, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "admin-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "admin-users");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "admin-courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "admin-categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "admin-analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.adminAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "admin-tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_tickets);
  }
}
function AdminHeaderComponent_ul_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 70)(1, "li")(2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Mes cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\u00C9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Revenus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li")(22, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "instructor-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructor_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "instructor-my-courses" || ctx_r0.page === "instructor-course");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "students-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.studentsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "instructor-quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorQuiz);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "instructor-earnings" || ctx_r0.page === "instructor-payouts" || ctx_r0.page === "instructor-statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructor_payouts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "instructor-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorMessage);
  }
}
function AdminHeaderComponent_ul_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 75)(1, "li")(2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Mes cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Favoris");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Certificats");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Q&A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li")(22, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "student-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.students_Dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "student-my-courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.studentMyCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "student-wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.studentWishlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "student-certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.student_Certificate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "student-qa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.studentQa);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function AdminHeaderComponent_ul_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 79)(1, "li")(2, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Profils");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Certifi\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Offres");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "recruiter-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "recruiter-shared-profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_shared_profiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "recruiter-certified-students");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_certified_students);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "recruiter-job-offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_job_offers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.page === "recruiter-messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_messages);
  }
}
function AdminHeaderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Panier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 32)(5, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
  }
}
function AdminHeaderComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.showBecomeInstructorModal = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Devenir Instructeur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
  }
}
function AdminHeaderComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorMessage);
  }
}
function AdminHeaderComponent_div_47_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.unreadCount > 9 ? "9+" : ctx_r0.unreadCount);
  }
}
function AdminHeaderComponent_div_47_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.unreadCount);
  }
}
function AdminHeaderComponent_div_47_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_div_47_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.markAllNotifsAsRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tout lire");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_div_47_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 105)(1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Aucune notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Vous \u00EAtes \u00E0 jour !");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminHeaderComponent_div_47_a_14_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notif_r5.message);
  }
}
function AdminHeaderComponent_div_47_a_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 116);
  }
}
function AdminHeaderComponent_div_47_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_div_47_a_14_Template_a_click_0_listener() {
      const notif_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.markNotifAsRead(notif_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 110)(4, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AdminHeaderComponent_div_47_a_14_p_6_Template, 2, 1, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminHeaderComponent_div_47_a_14_span_9_Template, 1, 0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("rct-notif-unread", !notif_r5.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("ti ", ctx_r0.getNotifIconTi(notif_r5.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notif_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notif_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatNotifDate(notif_r5.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !notif_r5.read);
  }
}
function AdminHeaderComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89)(1, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AdminHeaderComponent_div_47_span_3_Template, 2, 1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 93)(5, "div", 94)(6, "div", 95)(7, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminHeaderComponent_div_47_span_11_Template, 2, 1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AdminHeaderComponent_div_47_button_12_Template, 2, 0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AdminHeaderComponent_div_47_div_13_Template, 7, 0, "div", 100)(14, AdminHeaderComponent_div_47_a_14_Template, 10, 9, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("rct-notif-ring", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.notifications.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
  }
}
function AdminHeaderComponent_div_48_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount > 9 ? "9+" : ctx_r0.unreadCount, " ");
  }
}
function AdminHeaderComponent_div_48_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_div_48_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.markAllNotifsAsRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Tout marquer lu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_div_48_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Aucune notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminHeaderComponent_div_48_a_10_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notif_r8.message);
  }
}
function AdminHeaderComponent_div_48_a_10_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 138);
  }
}
function AdminHeaderComponent_div_48_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_div_48_a_10_Template_a_click_0_listener() {
      const notif_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.markNotifAsRead(notif_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 133)(4, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AdminHeaderComponent_div_48_a_10_p_6_Template, 2, 1, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminHeaderComponent_div_48_a_10_span_9_Template, 1, 0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notif_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", notif_r8.read ? "" : "rgba(var(--bs-primary-rgb),0.06)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("isax ", ctx_r0.getNotifIcon(notif_r8.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](notif_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", notif_r8.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatNotifDate(notif_r8.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !notif_r8.read);
  }
}
function AdminHeaderComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 117)(1, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AdminHeaderComponent_div_48_span_3_Template, 2, 1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 120)(5, "div", 121)(6, "h6", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminHeaderComponent_div_48_button_8_Template, 2, 0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminHeaderComponent_div_48_div_9_Template, 4, 0, "div", 124)(10, AdminHeaderComponent_div_48_a_10_Template, 10, 9, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.notifications.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
  }
}
function AdminHeaderComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 141)(4, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.userInitials);
  }
}
function AdminHeaderComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 147)(4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.userInitials);
  }
}
function AdminHeaderComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 153)(4, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.userInitials);
  }
}
function AdminHeaderComponent_ng_container_54_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.avatarBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.userInitials, " ");
  }
}
function AdminHeaderComponent_ng_container_54_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 159);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.userAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function AdminHeaderComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminHeaderComponent_ng_container_54_span_1_Template, 2, 3, "span", 156)(2, AdminHeaderComponent_ng_container_54_img_2_Template, 1, 1, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.userAvatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.userAvatarUrl);
  }
}
function AdminHeaderComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 141)(4, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.userInitials);
  }
}
function AdminHeaderComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 147)(4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.userInitials);
  }
}
function AdminHeaderComponent_ng_container_65_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r0.avatarBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.userInitials, " ");
  }
}
function AdminHeaderComponent_ng_container_65_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 165);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.userAvatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function AdminHeaderComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminHeaderComponent_ng_container_65_span_1_Template, 2, 3, "span", 162)(2, AdminHeaderComponent_ng_container_65_img_2_Template, 1, 1, "img", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.userAvatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.userAvatarUrl);
  }
}
function AdminHeaderComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li")(2, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Logs syst\u00E8me");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadmin_logs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.superadminSettings);
  }
}
function AdminHeaderComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li")(2, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.admin_courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.adminAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.adminSettings);
  }
}
function AdminHeaderComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li")(2, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Mes cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Revenus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructor_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorEarning);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorSettings);
  }
}
function AdminHeaderComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li")(2, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Mes cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Mes certificats");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Mon panier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.students_Dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.studentMyCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.student_Certificate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.studentSettings);
  }
}
function AdminHeaderComponent_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li")(2, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li")(6, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Profils \u00C9tudiants");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Certifi\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Offres d'emploi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Messagerie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "hr", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li")(24, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Mon Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_dashboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_shared_profiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_certified_students);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_job_offers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiter_messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.routes.recruiterSettings);
  }
}
function AdminHeaderComponent_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 194)(2, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_ng_container_79_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.showBecomeInstructorModal = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 197)(6, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Devenir Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Cr\u00E9ez et vendez vos cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function AdminHeaderComponent_Conditional_84_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.becomeInstructorError, " ");
  }
}
function AdminHeaderComponent_Conditional_84_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Devenir Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_Conditional_84_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "En cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 200)(1, "div", 201)(2, "div", 202)(3, "div", 203)(4, "div", 204)(5, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "h6", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Devenir Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Confirmez votre identit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Conditional_84_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.showBecomeInstructorModal = false;
      ctx_r0.becomeInstructorPassword = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.becomeInstructorError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 210)(14, "p", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Votre compte obtiendra le r\u00F4le ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "strong", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, ". Vous pourrez cr\u00E9er et vendre des cours tout en gardant votre acc\u00E8s \u00E9tudiant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 213)(20, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Cr\u00E9er des cours illimit\u00E9es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "G\u00E9rer vos \u00E9tudiants et revenus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Conserver l'acc\u00E8s \u00E9tudiant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Mot de passe actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 217)(32, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminHeaderComponent_Conditional_84_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.becomeInstructorPassword, $event) || (ctx_r0.becomeInstructorPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function AdminHeaderComponent_Conditional_84_Template_input_keyup_enter_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.becomeInstructor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](35, AdminHeaderComponent_Conditional_84_Conditional_35_Template, 3, 1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 222)(37, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Conditional_84_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.showBecomeInstructorModal = false;
      ctx_r0.becomeInstructorPassword = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.becomeInstructorError = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Conditional_84_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.becomeInstructor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AdminHeaderComponent_Conditional_84_span_40_Template, 3, 0, "span", 41)(41, AdminHeaderComponent_Conditional_84_span_41_Template, 3, 0, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "div", 226);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.becomeInstructorPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.becomeInstructorError ? 35 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.becomingInstructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.becomingInstructor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.becomingInstructor);
  }
}
function AdminHeaderComponent_Conditional_85_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.switchRoleError, " ");
  }
}
function AdminHeaderComponent_Conditional_85_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Changer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_Conditional_85_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "En cours... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminHeaderComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 200)(1, "div", 201)(2, "div", 202)(3, "div", 203)(4, "div", 204)(5, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "h6", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Confirmez votre acc\u00E8s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "V\u00E9rification de s\u00E9curit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Conditional_85_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.showSwitchRoleModal = false;
      ctx_r0.switchRolePassword = "";
      ctx_r0.switchRoleError = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.switchRoleTargetRole = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 210)(14, "p", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Pour acc\u00E9der au r\u00F4le ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "strong", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, ", veuillez entrer votre mot de passe. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Mot de passe actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 217)(22, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminHeaderComponent_Conditional_85_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.switchRolePassword, $event) || (ctx_r0.switchRolePassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup.enter", function AdminHeaderComponent_Conditional_85_Template_input_keyup_enter_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.confirmSwitchRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](25, AdminHeaderComponent_Conditional_85_Conditional_25_Template, 3, 1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 222)(27, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Conditional_85_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r0.showSwitchRoleModal = false;
      ctx_r0.switchRolePassword = "";
      ctx_r0.switchRoleError = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.switchRoleTargetRole = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Conditional_85_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.confirmSwitchRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AdminHeaderComponent_Conditional_85_span_30_Template, 3, 0, "span", 41)(31, AdminHeaderComponent_Conditional_85_span_31_Template, 3, 0, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 226);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getRoleSwitchLabel(ctx_r0.switchRoleTargetRole || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.switchRolePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r0.switchRoleError ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.switchingRoleWithPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.switchingRoleWithPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.switchingRoleWithPassword);
  }
}
class AdminHeaderComponent {
  common;
  data;
  sidebarService;
  renderer;
  authService;
  notificationService;
  wsNotifService;
  router;
  routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  menuElement;
  headerpage = false;
  sticky = false;
  elementPosition;
  headerClass = true;
  isHovered = false;
  isFixed = false;
  isOpened = false;
  isDropdownOpen = false;
  isDropdownOpen1 = null;
  base = '';
  page = '';
  last = '';
  headerMenuactive = '';
  openDropdownIndex = null;
  themeColor = 'light-mode';
  islight = true;
  isdark = false;
  sidebar;
  onWindowScroll() {
    // Add a fixed class when the scroll position is greater than 50px
    this.isFixed = window.pageYOffset > 40;
  }
  toggleSidebar() {
    this.sidebarService.openSidebar();
    this.isOpened = !this.isOpened;
    if (this.isOpened === true) {
      this.renderer.addClass(document.documentElement, 'menu-opened');
    } else {
      this.renderer.removeClass(document.documentElement, 'menu-opened');
    }
  }
  hideSidebar() {
    this.sidebarService.closeSidebar();
    this.isOpened = false;
    this.renderer.removeClass(document.documentElement, 'menu-opened');
  }
  openSubMenu() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.openDropdownIndex = null;
  }
  openSubMenu1(index) {
    this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
  }
  toggleSubMenu(index) {
    // If the clicked menu is already open, close it
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen = false;
  }
  switchTheme() {
    this.isdark = !this.isdark;
    this.islight = !this.islight;
  }
  userName = '';
  userEmail = '';
  userRole = '';
  userAvatarUrl = '';
  secondaryRoles = [];
  isSwitchingRole = false;
  // ─── Devenir Instructeur ─────────────────────────────────────────────────
  showBecomeInstructorModal = false;
  becomeInstructorPassword = '';
  becomingInstructor = false;
  becomeInstructorError = '';
  // ✅ Modal générique de vérification password pour switch de rôle
  showSwitchRoleModal = false;
  switchRoleTargetRole = null;
  switchRolePassword = '';
  switchRoleError = '';
  switchingRoleWithPassword = false;
  /** Vrai si l'utilisateur est étudiant et ne possède pas encore le rôle instructeur */
  get canBecomeInstructor() {
    return this.isStudent && !this.secondaryRoles.includes('INSTRUCTOR') && !this.isInstructor;
  }
  /** Vrai si l'instructeur peut accéder au dashboard étudiant */
  get canAccessStudentDashboard() {
    return this.isInstructor && this.availableSwitchRoles.includes('STUDENT');
  }
  get isStudent() {
    return this.userRole.includes('STUDENT');
  }
  get isInstructor() {
    return this.userRole.includes('INSTRUCTOR');
  }
  get isAdmin() {
    return this.userRole.includes('ADMIN') && !this.userRole.includes('SUPERADMIN');
  }
  get isSuperAdmin() {
    return this.userRole.includes('SUPERADMIN');
  }
  get isRecruiter() {
    return this.userRole.includes('RECRUITER');
  }
  get userInitials() {
    if (!this.userName) return 'U';
    return this.userName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  }
  get roleLabel() {
    if (this.isSuperAdmin) return 'Super Admin';
    if (this.isAdmin) return 'Admin';
    if (this.isInstructor) return 'Instructeur';
    if (this.isStudent) return 'Étudiant';
    if (this.isRecruiter) return 'Recruteur';
    return this.userRole;
  }
  get roleBadgeClass() {
    if (this.isSuperAdmin) return 'badge-superadmin';
    if (this.isAdmin) return 'badge-admin';
    if (this.isInstructor) return 'badge-instructor';
    if (this.isStudent) return 'badge-student';
    if (this.isRecruiter) return 'badge-recruiter';
    return '';
  }
  get avatarBg() {
    if (this.isSuperAdmin) return 'linear-gradient(135deg,#020c18,#0d3a66,#5625E8,#0DCAF0)';
    if (this.isAdmin) return 'linear-gradient(135deg,#ef4444,#dc2626)';
    if (this.isInstructor) return 'linear-gradient(135deg,#6366f1,#8b5cf6)';
    if (this.isStudent) return 'linear-gradient(135deg,#10b981,#059669)';
    if (this.isRecruiter) return 'linear-gradient(135deg,#0ea5e9,#0284c7)';
    return 'linear-gradient(135deg,#6b7280,#4b5563)';
  }
  get accentColor() {
    if (this.isSuperAdmin) return '#0DCAF0';
    if (this.isAdmin) return '#5625E8';
    if (this.isInstructor) return '#6366f1';
    if (this.isStudent) return '#10b981';
    if (this.isRecruiter) return '#0ea5e9';
    return '#6b7280';
  }
  // Notifications
  notifications = [];
  unreadCount = 0;
  unreadMessageCount = 0;
  notifInterval;
  wsNotifSub;
  /** Rôles vers lesquels l'utilisateur peut basculer (sans le rôle actif) */
  get availableSwitchRoles() {
    return this.secondaryRoles.filter(r => r !== this.userRole);
  }
  getRoleSwitchLabel(role) {
    const map = {
      STUDENT: 'Étudiant',
      INSTRUCTOR: 'Instructeur',
      ADMIN: 'Admin',
      RECRUITER: 'Recruteur',
      SUPERADMIN: 'Super Admin'
    };
    return map[role] || role;
  }
  getRoleSwitchIcon(role) {
    const map = {
      STUDENT: 'isax-teacher',
      INSTRUCTOR: 'isax-book-1',
      ADMIN: 'isax-shield-tick',
      RECRUITER: 'isax-briefcase',
      SUPERADMIN: 'isax-shield-star'
    };
    return map[role] || 'isax-profile-circle';
  }
  getRoleSwitchColor(role) {
    const map = {
      STUDENT: '#10b981',
      INSTRUCTOR: '#6366f1',
      ADMIN: '#ef4444',
      RECRUITER: '#0ea5e9',
      SUPERADMIN: '#0DCAF0'
    };
    return map[role] || '#6b7280';
  }
  becomeInstructor() {
    if (!this.becomeInstructorPassword.trim()) {
      this.becomeInstructorError = 'Mot de passe requis.';
      return;
    }
    this.becomingInstructor = true;
    this.becomeInstructorError = '';
    const email = localStorage.getItem('email') || '';
    this.authService.addRole({
      email,
      password: this.becomeInstructorPassword,
      newRole: 'INSTRUCTOR'
    }).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('secondaryRoles', JSON.stringify(res.secondaryRoles || []));
        // Synchroniser le BehaviorSubject AVANT navigation
        this.authService.setCurrentRole(res.role);
        this.becomingInstructor = false;
        this.showBecomeInstructorModal = false;
        this.becomeInstructorPassword = '';
        this.router.navigate(['/instructor/instructor-dashboard']);
      },
      error: err => {
        this.becomingInstructor = false;
        this.becomeInstructorError = err.error?.message || err.error || 'Mot de passe incorrect ou erreur serveur.';
      }
    });
  }
  /** Afficher la modal pour vérifier le password avant de changer de rôle */
  switchToRole(targetRole) {
    if (this.isSwitchingRole) return;
    this.switchRoleTargetRole = targetRole;
    this.switchRolePassword = '';
    this.switchRoleError = '';
    this.showSwitchRoleModal = true;
  }
  /** Changer de rôle après vérification du password (modal) */
  confirmSwitchRole() {
    if (!this.switchRoleTargetRole) return;
    if (!this.switchRolePassword.trim()) {
      this.switchRoleError = 'Mot de passe requis';
      return;
    }
    this.switchingRoleWithPassword = true;
    this.switchRoleError = '';
    this.isSwitchingRole = true;
    this.authService.switchRole(this.switchRoleTargetRole, this.switchRolePassword).subscribe({
      next: res => {
        // Mettre à jour le localStorage avec le nouveau token et rôle
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('secondaryRoles', JSON.stringify(res.secondaryRoles || []));
        if (res.fullName) localStorage.setItem('fullName', res.fullName);
        if (res.email) localStorage.setItem('email', res.email);
        // Relancer le timer auto-logout avec le nouveau token
        this.authService.scheduleAutoLogout();
        // Synchroniser le BehaviorSubject AVANT toute navigation
        this.authService.setCurrentRole(res.role);
        // Mettre à jour les propriétés du composant immédiatement
        this.userRole = res.role;
        this.secondaryRoles = res.secondaryRoles || [];
        if (res.fullName) this.userName = res.fullName;
        if (res.email) this.userEmail = res.email;
        // Fermer la modal
        this.showSwitchRoleModal = false;
        this.switchRoleTargetRole = null;
        this.switchRolePassword = '';
        // Rediriger vers le dashboard approprié
        const dashMap = {
          SUPERADMIN: '/superadmin/superadmin-dashboard',
          ADMIN: '/admin/admin-dashboard',
          INSTRUCTOR: '/instructor/instructor-dashboard',
          STUDENT: '/student/student-dashboard',
          RECRUITER: '/recruiter/recruiter-dashboard'
        };
        const dest = dashMap[res.role] || '/index';
        this.switchingRoleWithPassword = false;
        this.isSwitchingRole = false;
        // Vider immédiatement les notifs de l'ancien rôle, puis recharger selon le nouveau
        this.notifications = [];
        this.unreadCount = 0;
        this.loadNotifications();
        this.router.navigate([dest]);
      },
      error: err => {
        this.switchingRoleWithPassword = false;
        this.isSwitchingRole = false;
        this.switchRoleError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
      }
    });
  }
  constructor(common, data, sidebarService, renderer, authService, notificationService, wsNotifService, router) {
    this.common = common;
    this.data = data;
    this.sidebarService = sidebarService;
    this.renderer = renderer;
    this.authService = authService;
    this.notificationService = notificationService;
    this.wsNotifService = wsNotifService;
    this.router = router;
    this.common.base.subscribe(res => {
      this.base = res;
    });
    this.common.page.subscribe(res => {
      this.page = res;
    });
    this.common.last.subscribe(res => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.themeColors.subscribe(res => {
      this.themeColor = res;
    });
  }
  ngOnInit() {
    const themeColor = localStorage.getItem('themeColor') || 'light-mode';
    this.sidebarService.changeThemeColor(themeColor);
    this.authService.ensureProfileIdentityLoaded();
    this.userName = localStorage.getItem('fullName') || 'Utilisateur';
    this.userEmail = localStorage.getItem('email') || '';
    this.userRole = localStorage.getItem('role') || '';
    this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
    const stored = localStorage.getItem('secondaryRoles');
    try {
      this.secondaryRoles = stored ? JSON.parse(stored) : [];
    } catch {
      this.secondaryRoles = [];
    }
    // Règle implicite : INSTRUCTOR peut toujours basculer en STUDENT
    if (this.userRole.includes('INSTRUCTOR') && !this.secondaryRoles.includes('STUDENT')) {
      this.secondaryRoles.push('STUDENT');
    }
    // Écouter les changements de rôle émis depuis n'importe quel composant
    this.authService.currentRole$.subscribe(role => {
      if (role && role !== this.userRole) {
        this.userRole = role;
        this.userName = localStorage.getItem('fullName') || this.userName;
        this.userEmail = localStorage.getItem('email') || this.userEmail;
        this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
        const sr = localStorage.getItem('secondaryRoles');
        try {
          this.secondaryRoles = sr ? JSON.parse(sr) : [];
        } catch {
          this.secondaryRoles = [];
        }
      }
    });
    // Écouter les changements de nom (mise à jour profil) — mise à jour en temps réel
    this.authService.currentFullName$.subscribe(name => {
      if (name) this.userName = name;
    });
    this.authService.currentAvatarPath$.subscribe(path => {
      this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
    });
    this.loadNotifications();
    if (this.isRecruiter) this.loadUnreadMessageCount();
    // Démarrer le temps réel sur les layouts back-office
    this.wsNotifService.connect();
    this.wsNotifSub = this.wsNotifService.getNewNotifications$().subscribe(notif => {
      if (!notif || !this.shouldDisplayNotification(notif)) return;
      this.notifications = [notif, ...this.notifications.filter(n => n.id !== notif.id)].slice(0, 10);
      if (!notif.read) this.unreadCount += 1;
    });
    this.notifInterval = setInterval(() => {
      this.loadNotifications();
      if (this.isRecruiter) this.loadUnreadMessageCount();
    }, 60000);
  }
  ngOnDestroy() {
    if (this.notifInterval) clearInterval(this.notifInterval);
    this.wsNotifSub?.unsubscribe();
    this.wsNotifService.disconnect();
  }
  // Types de notifs appartenant à chaque rôle
  static INSTRUCTOR_NOTIF_TYPES = new Set(['COURSE_APPROVED', 'COURSE_REJECTED', 'NEW_REVENUE', 'PAYOUT_PAID', 'PAYOUT_REJECTED', 'COURSE_MODIFICATION_APPROVED', 'COURSE_MODIFICATION_PENDING', 'COURSE_PROMOTION_UPDATED', 'COURSE_ARCHIVED_BY_ADMIN', 'COURSE_UNARCHIVED_BY_ADMIN']);
  static STUDENT_NOTIF_TYPES = new Set(['PURCHASE_CONFIRMED', 'CERTIFICATE_ISSUED', 'CHALLENGE_UNLOCKED']);
  loadUnreadMessageCount() {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.notificationService.getUnreadMessageCount().subscribe({
      next: count => {
        this.unreadMessageCount = count;
      },
      error: () => {}
    });
  }
  loadNotifications() {
    const token = localStorage.getItem('token');
    if (!token) return;
    // Effacer immédiatement avant tout chargement
    this.notifications = [];
    this.unreadCount = 0;
    // Notifications visibles pour Admin, SuperAdmin, Recruiter et Instructor
    if (!this.isAdmin && !this.isSuperAdmin && !this.isRecruiter && !this.isInstructor) return;
    this.notificationService.getMyNotifications().subscribe({
      next: data => {
        // Filtrer selon le rôle actif pour éviter les flux mélangés
        const filtered = data.filter(n => this.shouldDisplayNotification(n));
        this.notifications = filtered.slice(0, 10);
        this.unreadCount = filtered.filter(n => !n.read).length;
      },
      error: () => {}
    });
  }
  shouldDisplayNotification(n) {
    const t = (n.type || '').toUpperCase();
    if (this.isInstructor) {
      return AdminHeaderComponent.INSTRUCTOR_NOTIF_TYPES.has(t);
    }
    return !AdminHeaderComponent.INSTRUCTOR_NOTIF_TYPES.has(t) && !AdminHeaderComponent.STUDENT_NOTIF_TYPES.has(t);
  }
  markNotifAsRead(notif) {
    if (!notif.read) {
      this.notificationService.markAsRead(notif.id).subscribe({
        next: () => {
          notif.read = true;
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        },
        error: () => {}
      });
    }
  }
  markAllNotifsAsRead() {
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.unreadCount = 0;
      },
      error: () => {}
    });
  }
  getNotifIconTi(type) {
    switch ((type || '').toUpperCase()) {
      case 'PURCHASE_CONFIRMED':
        return 'ti-shopping-cart';
      case 'COURSE_APPROVED':
        return 'ti-circle-check';
      case 'COURSE_REJECTED':
        return 'ti-circle-x';
      case 'COURSE_ARCHIVED_BY_INSTRUCTOR':
        return 'ti-archive';
      case 'COURSE_UNARCHIVED_BY_INSTRUCTOR':
        return 'ti-arrow-back-up';
      case 'COURSE_ARCHIVED_BY_ADMIN':
        return 'ti-archive';
      case 'COURSE_UNARCHIVED_BY_ADMIN':
        return 'ti-arrow-back-up';
      case 'CERTIFICATE_ISSUED':
        return 'ti-certificate';
      case 'NEW_REVENUE':
        return 'ti-currency-dollar';
      case 'COURSE_PROMOTION_UPDATED':
        return 'ti-ticket';
      case 'PROFILE_SHARED':
        return 'ti-user-share';
      case 'NEW_JOB_APPLICATION':
        return 'ti-briefcase';
      case 'NEW_MESSAGE':
        return 'ti-message-circle';
      default:
        return 'ti-bell';
    }
  }
  getNotifIcon(type) {
    switch (type) {
      case 'PURCHASE_CONFIRMED':
        return 'isax-shopping-cart';
      case 'COURSE_APPROVED':
        return 'isax-tick-circle';
      case 'COURSE_REJECTED':
        return 'isax-close-circle';
      case 'COURSE_ARCHIVED_BY_INSTRUCTOR':
        return 'isax-archive-minus';
      case 'COURSE_UNARCHIVED_BY_INSTRUCTOR':
        return 'isax-refresh-circle';
      case 'COURSE_ARCHIVED_BY_ADMIN':
        return 'isax-archive-minus';
      case 'COURSE_UNARCHIVED_BY_ADMIN':
        return 'isax-refresh-circle';
      case 'CERTIFICATE_ISSUED':
        return 'isax-award';
      case 'NEW_REVENUE':
        return 'isax-dollar-circle';
      case 'COURSE_PROMOTION_UPDATED':
        return 'isax-discount-circle';
      default:
        return 'isax-notification';
    }
  }
  formatNotifDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return 'à l\'instant';
    if (diffMin < 60) return `il y a ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `il y a ${diffH}h`;
    return d.toLocaleDateString('fr-FR');
  }
  onLogout() {
    this.authService.logout();
  }
  static ɵfac = function AdminHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_common_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_8__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_notification_websocket_notification_service__WEBPACK_IMPORTED_MODULE_11__.WebSocketNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AdminHeaderComponent,
    selectors: [["app-admin-header"]],
    viewQuery: function AdminHeaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
      }
    },
    hostBindings: function AdminHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function AdminHeaderComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      }
    },
    decls: 87,
    vars: 69,
    consts: [[1, "header-two"], [1, "container"], [1, "header-nav"], [1, "navbar-header"], ["id", "mobile_btn", "href", "javascript:void(0);", 3, "click"], [1, "bar-icon"], [1, "navbar-logo"], [1, "logo-white", "header-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "logo"], [1, "logo-dark", "header-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo", 1, "logo"], [1, "main-menu-wrapper", 3, "ngClass"], [1, "menu-header"], [1, "menu-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], ["id", "menu_close", "href", "javascript:void(0);", 1, "menu-close", 3, "click"], [1, "fas", "fa-times"], ["class", "sa-admin-nav nav-superadmin", 4, "ngIf"], ["class", "sa-admin-nav nav-admin", 4, "ngIf"], ["class", "sa-admin-nav nav-instructor", 4, "ngIf"], ["class", "sa-admin-nav nav-student", 4, "ngIf"], ["class", "sa-admin-nav nav-recruiter", 4, "ngIf"], ["class", "menu-dropdown", 4, "ngIf"], [1, "menu-login"], [1, "d-flex", "align-items-center", "gap-2", "p-2", "rounded-3", "bg-light", "mb-2"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "14px", "flex-shrink", "0"], [1, "mb-0", "fw-semibold", "fs-14", "text-truncate", 2, "max-width", "160px"], [1, "badge", "bg-primary-subtle", "text-primary", "small"], ["href", "javascript:void(0)", "onmouseover", "this.style.borderColor='#6d28d9';this.style.color='#6d28d9'", "onmouseout", "this.style.borderColor='#e2e8f0';this.style.color='#64748b'", 1, "btn", "w-100", 2, "border", "1.5px solid #e2e8f0", "color", "#64748b", "border-radius", "8px", "font-size", "13px", "font-weight", "600", "transition", "all .2s", 3, "click"], [1, "isax", "isax-logout", "me-2"], [1, "header-btn", "d-flex", "align-items-center", "gap-2"], ["class", "btn-header-cta btn-become-instructor d-none d-lg-flex", 3, "click", 4, "ngIf"], [1, "icon-btn"], ["href", "javascript:void(0);", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-sun-15"], [1, "isax", "isax-moon"], ["class", "icon-btn", 4, "ngIf"], ["class", "dropdown icon-btn rct-notif-dropdown", 4, "ngIf"], ["class", "dropdown icon-btn notification-dropdown", 4, "ngIf"], [1, "dropdown", "profile-dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-flex", "align-items-center", "gap-2"], [4, "ngIf"], [1, "d-none", "d-lg-flex", "flex-column", 2, "line-height", "1.2", "text-align", "left"], [1, "fw-semibold", "small", "text-dark", 2, "font-size", "12.5px"], [1, "text-muted", 2, "font-size", "10px"], [1, "isax", "isax-arrow-down5", "d-none", "d-lg-inline", "text-muted", 2, "font-size", "11px"], [1, "dropdown-menu", "dropdown-menu-end", "p-0", 2, "min-width", "240px", "border-radius", "12px", "box-shadow", "0 8px 32px rgba(0,0,0,.15)"], [1, "d-flex", "align-items-center", "gap-3", "px-3", "py-3", "border-bottom"], [1, "min-w-0"], [1, "mb-0", "fw-bold", "text-truncate", 2, "max-width", "150px"], [1, "mb-0", "small", "text-truncate", 2, "font-size", "11px", "max-width", "150px"], [1, "badge", "mt-1", 2, "font-size", "10px", "font-weight", "700", "padding", "2px 8px", "border-radius", "20px", 3, "ngStyle"], [1, "profile-body", "py-1"], [1, "profile-footer", "border-top", "pt-2", "pb-2", "px-2"], ["href", "javascript:void(0)", "onmouseover", "this.style.borderColor='#6d28d9';this.style.color='#6d28d9'", "onmouseout", "this.style.borderColor='#e2e8f0';this.style.color='#64748b'", 1, "btn", "d-flex", "align-items-center", "justify-content-center", "w-100", "gap-2", 2, "border", "1.5px solid #e2e8f0", "color", "#64748b", "border-radius", "8px", "font-size", "13px", "font-weight", "600", "transition", "all .2s", 3, "click"], [1, "isax", "isax-logout"], [1, "sidebar-overlay", 3, "click", "ngClass"], [1, "sa-admin-nav", "nav-superadmin"], [3, "routerLink"], [1, "ti", "ti-layout-dashboard"], [1, "ti", "ti-users"], [1, "ti", "ti-file-analytics"], [1, "ti", "ti-user-circle"], [1, "sa-admin-nav", "nav-admin"], [1, "isax", "isax-grid-35"], [1, "isax", "isax-profile-2user5"], [1, "isax", "isax-book-1"], [1, "isax", "isax-category"], [1, "isax", "isax-trend-up"], [1, "isax", "isax-message-question"], [1, "sa-admin-nav", "nav-instructor"], [1, "isax", "isax-book"], [1, "isax", "isax-note-2"], [1, "isax", "isax-dollar-circle"], [1, "isax", "isax-message-text-1"], [1, "sa-admin-nav", "nav-student"], [1, "isax", "isax-heart"], [1, "isax", "isax-award"], [1, "isax", "isax-search-normal"], [1, "sa-admin-nav", "nav-recruiter"], [1, "ti", "ti-certificate"], [1, "ti", "ti-briefcase"], [1, "ti", "ti-message-circle"], [1, "menu-dropdown"], [1, "cart-item"], [1, "position-relative", 3, "routerLink"], [1, "isax", "isax-shopping-cart5"], [1, "btn-header-cta", "btn-become-instructor", "d-none", "d-lg-flex", 3, "click"], [1, "isax", "isax-teacher"], [1, "dropdown", "icon-btn", "rct-notif-dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "position-relative"], [1, "ti", "ti-bell"], ["class", "rct-notif-badge", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-end", "p-0", "rct-notif-menu"], [1, "rct-notif-hd"], [1, "rct-notif-hd-left"], [1, "rct-notif-hd-ico"], [1, "ti", "ti-bell-ringing"], ["class", "rct-notif-hd-count", 4, "ngIf"], ["class", "rct-notif-mark-all", 3, "click", 4, "ngIf"], ["class", "rct-notif-empty", 4, "ngIf"], ["href", "javascript:void(0);", "class", "rct-notif-item", 3, "rct-notif-unread", "click", 4, "ngFor", "ngForOf"], [1, "rct-notif-badge"], [1, "rct-notif-hd-count"], [1, "rct-notif-mark-all", 3, "click"], [1, "rct-notif-empty"], [1, "rct-notif-empty-ico"], [1, "ti", "ti-bell-off"], ["href", "javascript:void(0);", 1, "rct-notif-item", 3, "click"], [1, "rct-notif-item-ico"], [1, "rct-notif-item-body"], [1, "rct-notif-item-title"], ["class", "rct-notif-item-msg", 4, "ngIf"], [1, "rct-notif-item-time"], ["class", "rct-notif-dot", 4, "ngIf"], [1, "rct-notif-item-msg"], [1, "rct-notif-dot"], [1, "dropdown", "icon-btn", "notification-dropdown"], [1, "isax", "isax-notification"], ["class", "count-icon bg-danger p-1 rounded-pill text-white fs-10 fw-bold", "style", "min-width:16px;text-align:center;", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-end", "p-0", 2, "width", "320px", "max-height", "420px", "overflow-y", "auto", "border-radius", "12px", "box-shadow", "0 8px 32px rgba(0,0,0,.13)"], [1, "d-flex", "justify-content-between", "align-items-center", "px-3", "py-2", "border-bottom", "bg-light", "rounded-top"], [1, "mb-0", "fw-semibold"], ["class", "btn btn-link btn-sm p-0 text-primary text-decoration-none", 3, "click", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["href", "javascript:void(0);", "class", "d-flex align-items-start px-3 py-2 border-bottom text-decoration-none", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "count-icon", "bg-danger", "p-1", "rounded-pill", "text-white", "fs-10", "fw-bold", 2, "min-width", "16px", "text-align", "center"], [1, "btn", "btn-link", "btn-sm", "p-0", "text-primary", "text-decoration-none", 3, "click"], [1, "text-center", "py-4", "text-muted"], [1, "isax", "isax-notification", 2, "font-size", "2rem", "opacity", "0.3"], [1, "mt-2", "mb-0", "small"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-start", "px-3", "py-2", "border-bottom", "text-decoration-none", 3, "click"], [1, "me-3", "mt-1", 2, "font-size", "1.2rem", "opacity", "0.75"], [1, "flex-grow-1", "overflow-hidden"], [1, "mb-0", "fw-medium", "text-dark", "small", 2, "white-space", "normal", "line-height", "1.3"], ["class", "mb-0 text-muted", "style", "font-size:11px;white-space:normal;", 4, "ngIf"], ["class", "rounded-circle bg-primary ms-2 flex-shrink-0", "style", "width:8px;height:8px;margin-top:6px;", 4, "ngIf"], [1, "mb-0", "text-muted", 2, "font-size", "11px", "white-space", "normal"], [1, "rounded-circle", "bg-primary", "ms-2", "flex-shrink-0", 2, "width", "8px", "height", "8px", "margin-top", "6px"], [1, "sa-header-avatar-wrap"], [1, "sa-hav-border"], [1, "sa-hav-inner"], [1, "sa-hav-initial"], [1, "sa-hav-crown"], [1, "ti", "ti-shield-bolt"], [1, "adm-header-avatar-wrap"], [1, "adm-hav-border"], [1, "adm-hav-inner"], [1, "adm-hav-initial"], [1, "adm-hav-badge"], [1, "ti", "ti-shield-check"], [1, "rct-header-avatar-wrap"], [1, "rct-hav-border"], [1, "rct-hav-inner"], [1, "rct-hav-initial"], [1, "rct-hav-badge"], ["class", "d-flex align-items-center justify-content-center rounded-circle fw-bold text-white flex-shrink-0", "style", "width:38px;height:38px;font-size:13px;letter-spacing:.5px;", 3, "background", 4, "ngIf"], ["alt", "Avatar", "class", "rounded-circle flex-shrink-0", "style", "width:38px;height:38px;object-fit:cover;", 3, "src", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "fw-bold", "text-white", "flex-shrink-0", 2, "width", "38px", "height", "38px", "font-size", "13px", "letter-spacing", ".5px"], ["alt", "Avatar", 1, "rounded-circle", "flex-shrink-0", 2, "width", "38px", "height", "38px", "object-fit", "cover", 3, "src"], [1, "sa-header-avatar-wrap", "sa-hav-lg", 2, "flex-shrink", "0"], [1, "adm-header-avatar-wrap", "adm-hav-lg", 2, "flex-shrink", "0"], ["class", "d-flex align-items-center justify-content-center rounded-circle fw-bold text-white flex-shrink-0", "style", "width:44px;height:44px;font-size:16px;", 3, "background", 4, "ngIf"], ["alt", "Avatar", "class", "rounded-circle flex-shrink-0", "style", "width:44px;height:44px;object-fit:cover;", 3, "src", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "fw-bold", "text-white", "flex-shrink-0", 2, "width", "44px", "height", "44px", "font-size", "16px"], ["alt", "Avatar", 1, "rounded-circle", "flex-shrink-0", 2, "width", "44px", "height", "44px", "object-fit", "cover", 3, "src"], [1, "dropdown-item", "d-inline-flex", "align-items-center", "rounded", "py-2", "sa-drop-item", 3, "routerLink"], [1, "ti", "ti-layout-dashboard", "me-2", 2, "color", "#38bdf8"], [1, "ti", "ti-users", "me-2", 2, "color", "#38bdf8"], [1, "ti", "ti-file-analytics", "me-2", 2, "color", "#38bdf8"], [1, "ti", "ti-user-circle", "me-2", 2, "color", "#38bdf8"], [1, "dropdown-item", "d-inline-flex", "align-items-center", "rounded", "py-2", "adm-drop-item", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2", 2, "color", "#5625E8"], [1, "isax", "isax-profile-2user5", "me-2", 2, "color", "#5625E8"], [1, "isax", "isax-book-1", "me-2", 2, "color", "#5625E8"], [1, "isax", "isax-trend-up", "me-2", 2, "color", "#5625E8"], [1, "isax", "isax-setting-2", "me-2", 2, "color", "#5625E8"], [1, "dropdown-item", "d-inline-flex", "align-items-center", "rounded", "py-2", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2", "text-primary"], [1, "isax", "isax-book", "me-2", "text-primary"], [1, "isax", "isax-dollar-circle", "me-2", "text-primary"], [1, "isax", "isax-setting-2", "me-2", "text-primary"], [1, "isax", "isax-grid-35", "me-2", "text-success"], [1, "isax", "isax-book", "me-2", "text-success"], [1, "isax", "isax-award", "me-2", "text-success"], [1, "isax", "isax-shopping-cart", "me-2", "text-success"], [1, "isax", "isax-setting-2", "me-2", "text-success"], [1, "ti", "ti-layout-dashboard", "me-2", 2, "color", "#03C95A"], [1, "ti", "ti-users", "me-2", 2, "color", "#03C95A"], [1, "ti", "ti-certificate", "me-2", 2, "color", "#03C95A"], [1, "ti", "ti-briefcase", "me-2", 2, "color", "#03C95A"], [1, "ti", "ti-message-circle", "me-2", 2, "color", "#03C95A"], [1, "dropdown-divider", "my-1"], [1, "ti", "ti-user-edit", "me-2", 2, "color", "#392C7D"], [1, "px-3", "pt-2", "pb-2", "border-top"], [1, "become-instructor-dropdown-btn", "w-100", 3, "click"], [1, "bi-icon"], [1, "text-start"], [1, "d-block", "fw-bold", 2, "font-size", "12.5px"], [1, "isax", "isax-arrow-right-3", "ms-auto", 2, "font-size", "13px", "opacity", ".5"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content", "border-0", 2, "border-radius", "16px", "box-shadow", "0 24px 48px rgba(0,0,0,.16)", "animation", "popInModal .2s ease"], [1, "modal-header", "border-0", "pb-0", "pt-4", "px-4"], [1, "d-flex", "align-items-center", "gap-3"], [2, "width", "48px", "height", "48px", "border-radius", "14px", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "isax", "isax-teacher", 2, "font-size", "22px", "color", "#fff"], [1, "fw-bold", "mb-0", 2, "font-size", "15px"], [1, "text-muted"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "px-4", "pt-3", "pb-2"], [1, "text-muted", "small", "mb-3"], [1, "text-primary"], [1, "d-flex", "flex-column", "gap-1", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "text-muted", "small"], [1, "isax", "isax-tick-circle", "text-success"], [1, "form-label", "small", "fw-semibold"], [1, "input-group"], [1, "input-group-text", "bg-light", "border-end-0", 2, "border-radius", "8px 0 0 8px"], [1, "isax", "isax-lock", 2, "font-size", "15px", "color", "#6b7280"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-control", "border-start-0", "ps-0", 2, "border-radius", "0 8px 8px 0", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mt-2", "py-2", "px-3", 2, "border-radius", "8px", "font-size", "12px"], [1, "modal-footer", "border-0", "px-4", "pb-4", "pt-2", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "flex-fill", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "flex-fill", "text-white", "fw-semibold", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "border", "none", 3, "click", "disabled"], ["class", "d-flex align-items-center justify-content-center gap-2", 4, "ngIf"], [1, "modal-backdrop", "fade", "show"], [1, "isax", "isax-close-circle"], [1, "isax", "isax-teacher", "me-1"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], [1, "spinner-border", "spinner-border-sm"], [2, "width", "48px", "height", "48px", "border-radius", "14px", "background", "linear-gradient(135deg,#5625E8,#FF4667)", "display", "flex", "align-items", "center", "justify-content", "center", "flex-shrink", "0"], [1, "isax", "isax-shield-tick", 2, "font-size", "22px", "color", "#fff"], ["type", "button", 1, "btn", "btn-sm", "flex-fill", "text-white", "fw-semibold", 2, "background", "linear-gradient(135deg,#5625E8,#8b5cf6)", "border", "none", 3, "click", "disabled"], [1, "isax", "isax-arrow-swap-horizontal", "me-1"]],
    template: function AdminHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_4_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span")(7, "span")(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_18_listener() {
          return ctx.hideSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminHeaderComponent_ul_20_Template, 17, 12, "ul", 17)(21, AdminHeaderComponent_ul_21_Template, 25, 18, "ul", 18)(22, AdminHeaderComponent_ul_22_Template, 25, 18, "ul", 19)(23, AdminHeaderComponent_ul_23_Template, 25, 16, "ul", 20)(24, AdminHeaderComponent_ul_24_Template, 21, 15, "ul", 21)(25, AdminHeaderComponent_div_25_Template, 7, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 23)(27, "div", 24)(28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div")(31, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_35_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "D\u00E9connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, AdminHeaderComponent_button_39_Template, 3, 0, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 32)(41, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_41_listener() {
          return ctx.sidebarService.changeThemeColor("dark-mode");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_43_listener() {
          return ctx.sidebarService.changeThemeColor("light-mode");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AdminHeaderComponent_div_45_Template, 3, 1, "div", 36)(46, AdminHeaderComponent_div_46_Template, 3, 1, "div", 36)(47, AdminHeaderComponent_div_47_Template, 15, 7, "div", 37)(48, AdminHeaderComponent_div_48_Template, 11, 4, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 39)(50, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, AdminHeaderComponent_ng_container_51_Template, 8, 1, "ng-container", 41)(52, AdminHeaderComponent_ng_container_52_Template, 8, 1, "ng-container", 41)(53, AdminHeaderComponent_ng_container_53_Template, 8, 1, "ng-container", 41)(54, AdminHeaderComponent_ng_container_54_Template, 3, 2, "ng-container", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 42)(56, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 46)(62, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, AdminHeaderComponent_ng_container_63_Template, 8, 1, "ng-container", 41)(64, AdminHeaderComponent_ng_container_64_Template, 8, 1, "ng-container", 41)(65, AdminHeaderComponent_ng_container_65_Template, 3, 2, "ng-container", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 48)(67, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, AdminHeaderComponent_ng_container_74_Template, 17, 4, "ng-container", 41)(75, AdminHeaderComponent_ng_container_75_Template, 21, 5, "ng-container", 41)(76, AdminHeaderComponent_ng_container_76_Template, 17, 4, "ng-container", 41)(77, AdminHeaderComponent_ng_container_77_Template, 21, 5, "ng-container", 41)(78, AdminHeaderComponent_ng_container_78_Template, 27, 6, "ng-container", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, AdminHeaderComponent_ng_container_79_Template, 11, 0, "ng-container", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 53)(81, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_a_click_81_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "D\u00E9connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](84, AdminHeaderComponent_Conditional_84_Template, 43, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](85, AdminHeaderComponent_Conditional_85_Template, 33, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminHeaderComponent_Template_div_click_86_listener() {
          return ctx.hideSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("border-top", "3px solid " + ctx.accentColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fixed", ctx.isFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](56, _c1, ctx.isHovered));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isRecruiter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.avatarBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userInitials, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.roleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canBecomeInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](58, _c2, ctx.themeColor === "light-mode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](60, _c2, ctx.themeColor === "dark-mode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isRecruiter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isSuperAdmin || ctx.isInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isRecruiter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSuperAdmin && !ctx.isAdmin && !ctx.isRecruiter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.roleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx.isSuperAdmin ? "linear-gradient(135deg, #020c18 0%, #0d3a66 50%, #5625E8 100%)" : ctx.isAdmin ? "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)" : "linear-gradient(135deg," + ctx.accentColor + "18,transparent)")("color", ctx.isSuperAdmin || ctx.isAdmin ? "#fff" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isSuperAdmin && !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx.isSuperAdmin ? "#a5f3fc" : ctx.isAdmin ? "#fff" : "var(--bs-dark)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx.isSuperAdmin || ctx.isAdmin ? "rgba(255,255,255,.65)" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx.isSuperAdmin ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](62, _c3) : ctx.isAdmin ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](63, _c3) : ctx.isInstructor ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](64, _c4) : ctx.isStudent ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](65, _c5) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](66, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.roleLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isRecruiter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.canBecomeInstructor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.showBecomeInstructorModal ? 84 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.showSwitchRoleModal ? 85 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](67, _c7, ctx.isOpened));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".sa-header-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.sa-header-avatar-wrap[_ngcontent-%COMP%]   .sa-hav-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18 0%, #0d3a66 35%, #5625E8 65%, #0DCAF0 100%);\n  transition: transform 0.2s ease;\n}\n.sa-header-avatar-wrap[_ngcontent-%COMP%]   .sa-hav-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18, #0d3a66);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sa-header-avatar-wrap[_ngcontent-%COMP%]   .sa-hav-initial[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  color: #a5f3fc;\n  line-height: 1;\n  letter-spacing: 0.3px;\n}\n.sa-header-avatar-wrap[_ngcontent-%COMP%]   .sa-hav-crown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #0DCAF0, #0284c7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #fff;\n  box-shadow: 0 2px 6px rgba(13, 202, 240, 0.7);\n  z-index: 5;\n  animation: _ngcontent-%COMP%_sa-hdr-crownPop 2.5s ease-in-out infinite;\n}\n.sa-header-avatar-wrap[_ngcontent-%COMP%]   .sa-hav-crown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 6px;\n  color: #fff;\n}\n.sa-header-avatar-wrap[_ngcontent-%COMP%]:hover   .sa-hav-border[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.sa-hav-lg[_ngcontent-%COMP%] {\n  width: 46px !important;\n  height: 46px !important;\n}\n.sa-hav-lg[_ngcontent-%COMP%]   .sa-hav-inner[_ngcontent-%COMP%] {\n  inset: 2.5px !important;\n}\n.sa-hav-lg[_ngcontent-%COMP%]   .sa-hav-initial[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n}\n.sa-hav-lg[_ngcontent-%COMP%]   .sa-hav-crown[_ngcontent-%COMP%] {\n  width: 17px !important;\n  height: 17px !important;\n}\n.sa-hav-lg[_ngcontent-%COMP%]   .sa-hav-crown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 7px !important;\n}\n\n@keyframes _ngcontent-%COMP%_sa-hdr-crownPop {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.22);\n    box-shadow: 0 3px 10px rgba(13, 202, 240, 0.9);\n  }\n}\n.sa-header-avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #020c18 0%, #0d3a66 35%, #5625E8 65%, #0DCAF0 100%);\n  box-shadow: 0 2px 8px rgba(2, 12, 24, 0.45);\n  flex-shrink: 0;\n  cursor: pointer;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.sa-header-avatar[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(13, 202, 240, 0.5);\n  transform: scale(1.06);\n}\n.sa-header-avatar--lg[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n\nul.sa-admin-nav[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: row;\n  align-items: center;\n  gap: 2px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 13px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  border-radius: 10px;\n  text-decoration: none !important;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  position: relative;\n}\nul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #a5b4d4;\n  opacity: 0.85;\n  transition: opacity 0.18s, color 0.18s;\n}\nul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #5625E8;\n}\nul.sa-admin-nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20px;\n  height: 2.5px;\n  border-radius: 2px;\n}\n\nul.sa-admin-nav.nav-superadmin[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(86, 37, 232, 0.08);\n  color: #5625E8;\n}\nul.sa-admin-nav.nav-superadmin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(86, 37, 232, 0.12), rgba(13, 202, 240, 0.06));\n  color: #5625E8;\n  font-weight: 700;\n}\nul.sa-admin-nav.nav-superadmin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n  background: linear-gradient(90deg, #5625E8, #0DCAF0);\n}\nul.sa-admin-nav.nav-superadmin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #5625E8;\n}\n\nul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(29, 78, 216, 0.09);\n  color: #1d4ed8;\n}\nul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(29, 78, 216, 0.13), rgba(29, 78, 216, 0.04));\n  color: #1d4ed8;\n  font-weight: 700;\n}\nul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n  background: linear-gradient(90deg, #FD3995, #9b59b6, #5625E8, #02a8b5);\n}\n\n.adm-header-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.adm-header-avatar-wrap[_ngcontent-%COMP%]   .adm-hav-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #FD3995, #9b59b6, #5625E8, #02a8b5);\n  transition: transform 0.2s ease;\n}\n.adm-header-avatar-wrap[_ngcontent-%COMP%]   .adm-hav-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #9b59b6, #5625E8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.adm-header-avatar-wrap[_ngcontent-%COMP%]   .adm-hav-initial[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  color: #fff;\n  line-height: 1;\n  letter-spacing: 0.3px;\n}\n.adm-header-avatar-wrap[_ngcontent-%COMP%]   .adm-hav-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #FD3995, #5625E8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #fff;\n  box-shadow: 0 2px 6px rgba(253, 57, 149, 0.6);\n  z-index: 5;\n  animation: _ngcontent-%COMP%_adm-hdr-badgePop 2.8s ease-in-out infinite;\n}\n.adm-header-avatar-wrap[_ngcontent-%COMP%]   .adm-hav-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 6px;\n  color: #fff;\n}\n.adm-header-avatar-wrap[_ngcontent-%COMP%]:hover   .adm-hav-border[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.adm-hav-lg[_ngcontent-%COMP%] {\n  width: 46px !important;\n  height: 46px !important;\n}\n.adm-hav-lg[_ngcontent-%COMP%]   .adm-hav-inner[_ngcontent-%COMP%] {\n  inset: 2.5px !important;\n}\n.adm-hav-lg[_ngcontent-%COMP%]   .adm-hav-initial[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n}\n.adm-hav-lg[_ngcontent-%COMP%]   .adm-hav-badge[_ngcontent-%COMP%] {\n  width: 17px !important;\n  height: 17px !important;\n}\n.adm-hav-lg[_ngcontent-%COMP%]   .adm-hav-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 7px !important;\n}\n\n@keyframes _ngcontent-%COMP%_adm-hdr-badgePop {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.22);\n    box-shadow: 0 3px 10px rgba(253, 57, 149, 0.9);\n  }\n}\nul.sa-admin-nav.nav-instructor[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.09);\n  color: #6366f1;\n}\nul.sa-admin-nav.nav-instructor[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nul.sa-admin-nav.nav-instructor[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #6366f1;\n  font-weight: 700;\n}\nul.sa-admin-nav.nav-instructor[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\nul.sa-admin-nav.nav-student[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.09);\n  color: #059669;\n}\nul.sa-admin-nav.nav-student[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nul.sa-admin-nav.nav-student[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  font-weight: 700;\n}\nul.sa-admin-nav.nav-student[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\nul.sa-admin-nav.nav-recruiter[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(14, 165, 233, 0.09);\n  color: #0284c7;\n}\nul.sa-admin-nav.nav-recruiter[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nul.sa-admin-nav.nav-recruiter[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.12);\n  color: #0284c7;\n  font-weight: 700;\n}\nul.sa-admin-nav.nav-recruiter[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.role-switch-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid var(--rsw-color, #6b7280);\n  background: transparent;\n  color: var(--rsw-color, #6b7280);\n  cursor: pointer;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n}\n.role-switch-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--rsw-color, #6b7280);\n  color: #fff;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.role-switch-btn[_ngcontent-%COMP%]:disabled, .role-switch-btn.role-switch-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.rct-header-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.rct-header-avatar-wrap[_ngcontent-%COMP%]   .rct-hav-border[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #392C7D, #0DCAF0);\n  transition: transform 0.2s ease;\n}\n.rct-header-avatar-wrap[_ngcontent-%COMP%]   .rct-hav-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #392C7D);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rct-header-avatar-wrap[_ngcontent-%COMP%]   .rct-hav-initial[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 900;\n  color: #fff;\n  line-height: 1;\n  letter-spacing: 0.3px;\n}\n.rct-header-avatar-wrap[_ngcontent-%COMP%]   .rct-hav-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #fff;\n  box-shadow: 0 2px 6px rgba(3, 201, 90, 0.6);\n  z-index: 5;\n  animation: _ngcontent-%COMP%_rct-hdr-badgePop 2.8s ease-in-out infinite;\n}\n.rct-header-avatar-wrap[_ngcontent-%COMP%]   .rct-hav-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 6px;\n  color: #fff;\n}\n.rct-header-avatar-wrap[_ngcontent-%COMP%]:hover   .rct-hav-border[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n@keyframes _ngcontent-%COMP%_rct-hdr-badgePop {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.22);\n    box-shadow: 0 3px 10px rgba(3, 201, 90, 0.9);\n  }\n}\n.student-dash-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  flex-shrink: 0;\n}\n.student-dash-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.btn-become-instructor[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;\n  border: none;\n  cursor: pointer;\n}\n\n.become-instructor-dropdown-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(99, 102, 241, 0.2);\n  background: rgba(99, 102, 241, 0.05);\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.become-instructor-dropdown-btn[_ngcontent-%COMP%]   .bi-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #fff;\n}\n.become-instructor-dropdown-btn[_ngcontent-%COMP%]   .bi-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.become-instructor-dropdown-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.5);\n  background: rgba(99, 102, 241, 0.1);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.15);\n}\n\n@keyframes _ngcontent-%COMP%_popInModal {\n  from {\n    opacity: 0;\n    transform: scale(0.92) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n[_nghost-%COMP%]     a.sa-drop-item:hover, \n[_nghost-%COMP%]     a.sa-drop-item:focus {\n  background-color: rgba(86, 37, 232, 0.08) !important;\n  color: #5625E8 !important;\n}\n[_nghost-%COMP%]     a.sa-drop-item:hover i, \n[_nghost-%COMP%]     a.sa-drop-item:focus i {\n  color: #0DCAF0 !important;\n}\n[_nghost-%COMP%]     a.adm-drop-item:hover, \n[_nghost-%COMP%]     a.adm-drop-item:focus {\n  background-color: rgba(86, 37, 232, 0.08) !important;\n  color: #5625E8 !important;\n}\n[_nghost-%COMP%]     a.adm-drop-item:hover i, \n[_nghost-%COMP%]     a.adm-drop-item:focus i {\n  color: #5625E8 !important;\n}\n\n.btn-header-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #fff !important;\n  white-space: nowrap;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.btn-header-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-header-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);\n  color: #fff !important;\n}\n\n.dark-mode[_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #64748b;\n  opacity: 1;\n}\n.dark-mode[_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   ul.sa-admin-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n.dark-mode[_nghost-%COMP%]   ul.sa-admin-nav.nav-superadmin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   ul.sa-admin-nav.nav-superadmin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #a5f3fc;\n}\n.dark-mode[_nghost-%COMP%]   ul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   ul.sa-admin-nav.nav-admin[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #fda4af;\n}\n.dark-mode[_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background: #1a1a2b;\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.dark-mode[_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.dark-mode[_nghost-%COMP%]   .bg-light[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .bg-light[_ngcontent-%COMP%] {\n  background: #111119 !important;\n}\n\n.rct-notif-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.rct-notif-dropdown[_ngcontent-%COMP%]   .ti-bell[_ngcontent-%COMP%], .rct-notif-dropdown[_ngcontent-%COMP%]   .ti-bell-ringing[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #374151;\n  transition: color 0.2s;\n}\n.rct-notif-dropdown[_ngcontent-%COMP%]:hover   .ti-bell[_ngcontent-%COMP%], .rct-notif-dropdown[_ngcontent-%COMP%]:hover   .ti-bell-ringing[_ngcontent-%COMP%] {\n  color: #03C95A;\n}\n.rct-notif-dropdown[_ngcontent-%COMP%]   .rct-notif-ring[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rct-bell-shake 0.5s ease;\n  color: #03C95A !important;\n}\n.rct-notif-dropdown[_ngcontent-%COMP%]   .rct-notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -6px;\n  min-width: 17px;\n  height: 17px;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 800;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n  border: 2px solid #fff;\n  box-shadow: 0 2px 6px rgba(3, 201, 90, 0.35);\n  letter-spacing: 0.3px;\n}\n\n.rct-notif-menu[_ngcontent-%COMP%] {\n  width: 330px !important;\n  max-height: 440px;\n  overflow-y: auto;\n  border-radius: 14px !important;\n  box-shadow: 0 10px 36px rgba(57, 44, 125, 0.15) !important;\n  border: 1px solid rgba(57, 44, 125, 0.1) !important;\n  padding: 0 !important;\n}\n.rct-notif-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.rct-notif-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(57, 44, 125, 0.2);\n  border-radius: 10px;\n}\n.rct-notif-menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.rct-notif-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.09);\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.04));\n  border-radius: 14px 14px 0 0;\n}\n\n.rct-notif-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 800;\n  color: #1e1b4b;\n}\n\n.rct-notif-hd-ico[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.rct-notif-hd-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.rct-notif-hd-count[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #03C95A, #059669);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n\n.rct-notif-mark-all[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #03C95A;\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.15s;\n}\n.rct-notif-mark-all[_ngcontent-%COMP%]:hover {\n  color: #059669;\n}\n\n.rct-notif-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 36px 20px;\n  text-align: center;\n}\n.rct-notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  margin: 10px 0 3px;\n}\n.rct-notif-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 11.5px;\n}\n\n.rct-notif-empty-ico[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.08), rgba(57, 44, 125, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(57, 44, 125, 0.1);\n}\n.rct-notif-empty-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: rgba(57, 44, 125, 0.3);\n}\n\n.rct-notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 11px 16px;\n  border-bottom: 1px solid rgba(57, 44, 125, 0.07);\n  text-decoration: none;\n  color: inherit;\n  transition: background 0.13s;\n  position: relative;\n}\n.rct-notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(57, 44, 125, 0.04);\n}\n.rct-notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.rct-notif-unread[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.04) !important;\n}\n\n.rct-notif-item-ico[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.1), rgba(57, 44, 125, 0.08));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid rgba(3, 201, 90, 0.15);\n}\n.rct-notif-item-ico[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #03C95A;\n}\n\n.rct-notif-item-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.rct-notif-item-title[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1e1b4b;\n  white-space: normal;\n  line-height: 1.35;\n}\n\n.rct-notif-item-msg[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 11px;\n  color: #6b7280;\n  white-space: normal;\n}\n\n.rct-notif-item-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n}\n\n.rct-notif-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #03C95A;\n  flex-shrink: 0;\n  margin-top: 6px;\n  box-shadow: 0 0 0 2px rgba(3, 201, 90, 0.25);\n}\n\n.rct-msg-icon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -7px;\n  min-width: 16px;\n  height: 16px;\n  background: linear-gradient(135deg, #03C95A, #059669);\n  color: #fff;\n  font-size: 8.5px;\n  font-weight: 800;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  border: 2px solid #fff;\n  box-shadow: 0 2px 5px rgba(3, 201, 90, 0.35);\n  letter-spacing: 0.2px;\n  pointer-events: none;\n}\n\n.dark-mode[_nghost-%COMP%]   .rct-msg-icon-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-msg-icon-badge[_ngcontent-%COMP%] {\n  border-color: #111119;\n}\n\n@keyframes _ngcontent-%COMP%_rct-bell-shake {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  15% {\n    transform: rotate(15deg);\n  }\n  30% {\n    transform: rotate(-13deg);\n  }\n  45% {\n    transform: rotate(8deg);\n  }\n  60% {\n    transform: rotate(-6deg);\n  }\n  75% {\n    transform: rotate(3deg);\n  }\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]   .ti-bell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]   .ti-bell[_ngcontent-%COMP%], .dark-mode[_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]   .ti-bell-ringing[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]   .ti-bell-ringing[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]:hover   .ti-bell[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]:hover   .ti-bell[_ngcontent-%COMP%], .dark-mode[_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]:hover   .ti-bell-ringing[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]:hover   .ti-bell-ringing[_ngcontent-%COMP%] {\n  color: #03C95A;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]   .rct-notif-badge[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-dropdown[_ngcontent-%COMP%]   .rct-notif-badge[_ngcontent-%COMP%] {\n  border-color: #111119;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-menu[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-menu[_ngcontent-%COMP%] {\n  background: #1a1a2b !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-hd[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-hd[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(3, 201, 90, 0.06), rgba(57, 44, 125, 0.07));\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-hd-left[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-hd-left[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-item[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-item[_ngcontent-%COMP%]:hover, .dark-mode   [_nghost-%COMP%]   .rct-notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-unread[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-unread[_ngcontent-%COMP%] {\n  background: rgba(3, 201, 90, 0.06) !important;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-item-title[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-item-title[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.dark-mode[_nghost-%COMP%]   .rct-notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .rct-notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n\n.dark-mode[_nghost-%COMP%]   header.header-two[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   header.header-two[_ngcontent-%COMP%] {\n  background-color: #1a1a2b !important;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGF5b3V0cy9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQWEsWUFBQTtFQUFjLGNBQUE7RUFBZ0IsZUFBQTtBQUc3QztBQURFO0VBQ0Usa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGtCQUFBO0VBQzlCLHVGQUFBO0VBQ0EsK0JBQUE7QUFLSjtBQUhFO0VBQ0Usa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGtCQUFBO0VBQ2hDLHFEQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0FBU3hDO0FBUEU7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsY0FBQTtFQUNuRCxxQkFBQTtBQVlKO0FBVkU7RUFDRSxrQkFBQTtFQUFvQixTQUFBO0VBQVcsV0FBQTtFQUMvQixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQzNCLHFEQUFBO0VBQ0EsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQ3BDLHdCQUFBO0VBQ0EsNkNBQUE7RUFBMkMsVUFBQTtFQUMzQyxvREFBQTtBQW1CSjtBQWxCSTtFQUFJLGNBQUE7RUFBZ0IsV0FBQTtBQXNCeEI7QUFuQkU7RUFBeUIscUJBQUE7QUFzQjNCOztBQW5CQTtFQUNFLHNCQUFBO0VBQXdCLHVCQUFBO0FBdUIxQjtBQXRCRTtFQUFnQix1QkFBQTtBQXlCbEI7QUF4QkU7RUFBa0IsMEJBQUE7QUEyQnBCO0FBMUJFO0VBQWdCLHNCQUFBO0VBQXdCLHVCQUFBO0FBOEIxQztBQTlCbUU7RUFBSSx5QkFBQTtBQWlDdkU7O0FBOUJBO0VBQ0U7SUFBVSxtQkFBQTtFQWtDVjtFQWpDQTtJQUFNLHNCQUFBO0lBQXdCLDhDQUFBO0VBcUM5QjtBQUNGO0FBbkNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUMzQix1RkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUFnQixlQUFBO0VBQ2hCLDJDQUFBO0FBd0NGO0FBdkNFO0VBQVUsOENBQUE7RUFBNEMsc0JBQUE7QUEyQ3hEO0FBMUNFO0VBQVEsV0FBQTtFQUFhLFlBQUE7QUE4Q3ZCOztBQTFDQTtFQUNFLHdCQUFBO0VBQTBCLG1CQUFBO0VBQXFCLG1CQUFBO0VBQy9DLFFBQUE7RUFBVSxnQkFBQTtFQUFrQixVQUFBO0VBQVksU0FBQTtBQWtEMUM7QUFoREU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtFQUNwQyxpQkFBQTtFQUFtQixlQUFBO0VBQWlCLGdCQUFBO0VBQ3BDLGNBQUE7RUFBZ0IsbUJBQUE7RUFDaEIsZ0NBQUE7RUFBa0MsMEJBQUE7RUFDbEMsbUJBQUE7RUFBcUIsa0JBQUE7QUF5RHpCO0FBeERJO0VBQUksZUFBQTtFQUFpQixjQUFBO0VBQWdCLGFBQUE7RUFBYyxzQ0FBQTtBQThEdkQ7QUE3RGM7RUFBSSxVQUFBO0VBQVksY0FBQTtBQWlFOUI7QUEvREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFNBQUE7RUFBVywyQkFBQTtFQUM1QyxXQUFBO0VBQWEsYUFBQTtFQUFlLGtCQUFBO0FBc0VoQzs7QUEvREk7RUFBVSxtQ0FBQTtFQUFpQyxjQUFBO0FBb0UvQztBQWxFRTtFQUNFLHFGQUFBO0VBQ0EsY0FBQTtFQUFnQixnQkFBQTtBQXFFcEI7QUFwRUk7RUFBVyxvREFBQTtBQXVFZjtBQXRFSTtFQUFJLFVBQUE7RUFBWSxjQUFBO0FBMEVwQjs7QUFuRUk7RUFBWSxtQ0FBQTtFQUFpQyxjQUFBO0FBd0VqRDtBQXhFaUU7RUFBSSxVQUFBO0FBMkVyRTtBQTFFSTtFQUNFLG9GQUFBO0VBQ0EsY0FBQTtFQUFnQixnQkFBQTtBQTZFdEI7QUE1RU07RUFBSSxVQUFBO0FBK0VWO0FBOUVNO0VBQVcsc0VBQUE7QUFpRmpCOztBQTNFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUFhLFlBQUE7RUFBYyxjQUFBO0VBQWdCLGVBQUE7QUFpRjdDO0FBL0VFO0VBQ0Usa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGtCQUFBO0VBQzlCLHVFQUFBO0VBQ0EsK0JBQUE7QUFtRko7QUFqRkU7RUFDRSxrQkFBQTtFQUFvQixVQUFBO0VBQVksa0JBQUE7RUFDaEMscURBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUF1RnhDO0FBckZFO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixXQUFBO0VBQWEsY0FBQTtFQUNoRCxxQkFBQTtBQTBGSjtBQXhGRTtFQUNFLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxXQUFBO0VBQy9CLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFDM0IscURBQUE7RUFDQSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFDcEMsd0JBQUE7RUFDQSw2Q0FBQTtFQUEyQyxVQUFBO0VBQzNDLHFEQUFBO0FBaUdKO0FBaEdJO0VBQUksY0FBQTtFQUFnQixXQUFBO0FBb0d4QjtBQWpHRTtFQUEwQixxQkFBQTtBQW9HNUI7O0FBaEdBO0VBQ0Usc0JBQUE7RUFBd0IsdUJBQUE7QUFvRzFCO0FBbkdFO0VBQWlCLHVCQUFBO0FBc0duQjtBQXJHRTtFQUFtQiwwQkFBQTtBQXdHckI7QUF2R0U7RUFBaUIsc0JBQUE7RUFBd0IsdUJBQUE7QUEyRzNDO0FBM0dvRTtFQUFJLHlCQUFBO0FBOEd4RTs7QUEzR0E7RUFDRTtJQUFVLG1CQUFBO0VBK0dWO0VBOUdBO0lBQU0sc0JBQUE7SUFBd0IsOENBQUE7RUFrSDlCO0FBQ0Y7QUE5R0k7RUFBWSxvQ0FBQTtFQUFxQyxjQUFBO0FBa0hyRDtBQWxIcUU7RUFBSSxVQUFBO0FBcUh6RTtBQXBISTtFQUFlLG9DQUFBO0VBQXFDLGNBQUE7RUFBZ0IsZ0JBQUE7QUF5SHhFO0FBekgwRjtFQUFJLFVBQUE7QUE0SDlGOztBQXRISTtFQUFZLG9DQUFBO0VBQXFDLGNBQUE7QUEySHJEO0FBM0hxRTtFQUFJLFVBQUE7QUE4SHpFO0FBN0hJO0VBQWUsb0NBQUE7RUFBcUMsY0FBQTtFQUFnQixnQkFBQTtBQWtJeEU7QUFsSTBGO0VBQUksVUFBQTtBQXFJOUY7O0FBL0hJO0VBQVksb0NBQUE7RUFBcUMsY0FBQTtBQW9JckQ7QUFwSXFFO0VBQUksVUFBQTtBQXVJekU7QUF0SUk7RUFBZSxvQ0FBQTtFQUFxQyxjQUFBO0VBQWdCLGdCQUFBO0FBMkl4RTtBQTNJMEY7RUFBSSxVQUFBO0FBOEk5Rjs7QUF6SUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQTRJRjtBQTFJRTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QUE0SUo7QUF6SUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUEySUo7O0FBdElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQWEsWUFBQTtFQUFjLGNBQUE7RUFBZ0IsZUFBQTtBQTRJN0M7QUExSUU7RUFDRSxrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFDOUIsOERBQUE7RUFDQSwrQkFBQTtBQThJSjtBQTVJRTtFQUNFLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxrQkFBQTtFQUNoQyxxREFBQTtFQUNBLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtBQWtKeEM7QUFoSkU7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxjQUFBO0VBQ2hELHFCQUFBO0FBcUpKO0FBbkpFO0VBQ0Usa0JBQUE7RUFBb0IsU0FBQTtFQUFXLFdBQUE7RUFDL0IsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUMzQixxREFBQTtFQUNBLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUNwQyx3QkFBQTtFQUNBLDJDQUFBO0VBQXlDLFVBQUE7RUFDekMscURBQUE7QUE0Sko7QUEzSkk7RUFBSSxjQUFBO0VBQWdCLFdBQUE7QUErSnhCO0FBNUpFO0VBQTBCLHFCQUFBO0FBK0o1Qjs7QUE1SkE7RUFDRTtJQUFVLG1CQUFBO0VBZ0tWO0VBL0pBO0lBQU0sc0JBQUE7SUFBd0IsNENBQUE7RUFtSzlCO0FBQ0Y7QUFoS0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWtLRjtBQWhLRTtFQUFJLGVBQUE7QUFtS047O0FBL0pBO0VBQ0UsZ0VBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWtLRjs7QUE5SkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFpS0Y7QUEvSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBaUtKO0FBL0pJO0VBQUksZUFBQTtBQWtLUjtBQS9KRTtFQUNFLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FBaUtKOztBQTdKQTtFQUNFO0lBQU8sVUFBQTtJQUFZLHNDQUFBO0VBa0tuQjtFQWpLQTtJQUFPLFVBQUE7SUFBWSxpQ0FBQTtFQXFLbkI7QUFDRjtBQWpLRTs7RUFFRSxvREFBQTtFQUNBLHlCQUFBO0FBbUtKO0FBbEtJOztFQUFJLHlCQUFBO0FBc0tSO0FBcEtFOztFQUVFLG9EQUFBO0VBQ0EseUJBQUE7QUFzS0o7QUFyS0k7O0VBQUkseUJBQUE7QUF5S1I7O0FBcEtBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUF1S0Y7QUFyS0U7RUFBSSxlQUFBO0FBd0tOO0FBdEtFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FBd0tKOztBQWpLRTtFQUNFLGNBQUE7QUFvS0o7QUFuS0k7RUFBSSxjQUFBO0VBQWdCLFVBQUE7QUF1S3hCO0FBdEtJO0VBQVUsY0FBQTtBQXlLZDtBQXpLOEI7RUFBSSxjQUFBO0FBNEtsQztBQTFLRTtFQUFpRCxjQUFBO0FBNktuRDtBQTVLRTtFQUE0QyxjQUFBO0FBK0s5QztBQTVLRTtFQUNFLG1CQUFBO0VBQ0EsdUNBQUE7QUE4S0o7QUE3S0k7RUFBaUIsY0FBQTtBQWdMckI7QUEvS0k7RUFBdUIscUNBQUE7RUFBbUMsV0FBQTtBQW1MOUQ7QUFoTEU7RUFBWSw4QkFBQTtBQW1MZDs7QUEvS0E7RUFDRSxrQkFBQTtBQWtMRjtBQS9LRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFpTEo7QUEvS0U7RUFDMkIsY0FBQTtBQWlMN0I7QUE5S0U7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0FBZ0xKO0FBNUtFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQVcsV0FBQTtFQUNYLGVBQUE7RUFBaUIsWUFBQTtFQUNqQixxREFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtBQWdMSjs7QUEzS0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBEQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtBQThLRjtBQTVLRTtFQUF1QixVQUFBO0FBK0t6QjtBQTlLRTtFQUE2QixrQ0FBQTtFQUFnQyxtQkFBQTtBQWtML0Q7QUFqTEU7RUFBNkIsdUJBQUE7QUFvTC9COztBQWhMQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLG9GQUFBO0VBQ0EsNEJBQUE7QUFtTEY7O0FBakxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFvTEY7O0FBbExBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBcUxGO0FBcExFO0VBQUksZUFBQTtBQXVMTjs7QUFyTEE7RUFDRSxxREFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBd0xGOztBQXRMQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQXlMRjtBQXhMRTtFQUFVLGNBQUE7QUEyTFo7O0FBdkxBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEwTEY7QUF6TEU7RUFBSSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0Isa0JBQUE7QUErTHpEO0FBOUxFO0VBQVEsY0FBQTtFQUFnQixpQkFBQTtBQWtNMUI7O0FBaE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9GQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtBQW1NRjtBQWxNRTtFQUFJLGVBQUE7RUFBaUIsNkJBQUE7QUFzTXZCOztBQWxNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQXFNRjtBQW5NRTtFQUFVLG1DQUFBO0FBc01aO0FBck1FO0VBQWUsbUJBQUE7QUF3TWpCOztBQXRNQTtFQUFvQiw2Q0FBQTtBQTBNcEI7O0FBek1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1GQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUE0TUY7QUEzTUU7RUFBSSxlQUFBO0VBQWlCLGNBQUE7QUErTXZCOztBQTdNQTtFQUF1QixPQUFBO0VBQVMsWUFBQTtBQWtOaEM7O0FBak5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQW9ORjs7QUFsTkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXFORjs7QUFuTkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXNORjs7QUFwTkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FBdU5GOztBQW5OQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLFdBQUE7RUFDWCxlQUFBO0VBQWlCLFlBQUE7RUFDakIscURBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUF3TkY7O0FBdE5BO0VBQWdELHFCQUFBO0FBME5oRDs7QUF2TkE7RUFDRTtJQUFVLHVCQUFBO0VBMk5WO0VBMU5BO0lBQVcsd0JBQUE7RUE2Tlg7RUE1TkE7SUFBVyx5QkFBQTtFQStOWDtFQTlOQTtJQUFXLHVCQUFBO0VBaU9YO0VBaE9BO0lBQVcsd0JBQUE7RUFtT1g7RUFsT0E7SUFBVyx1QkFBQTtFQXFPWDtBQUNGO0FBaE9JO0VBQTZCLGNBQUE7QUFtT2pDO0FBbE9JO0VBQzJCLGNBQUE7QUFvTy9CO0FBbk9JO0VBQW1CLHFCQUFBO0FBc092QjtBQXBPRTtFQUFrQiw4QkFBQTtFQUFnQyxrREFBQTtBQXdPcEQ7QUF2T0U7RUFBZ0Isb0ZBQUE7RUFBNEUsOENBQUE7QUEyTzlGO0FBMU9FO0VBQXFCLGNBQUE7QUE2T3ZCO0FBNU9FO0VBQWtCLDhDQUFBO0FBK09wQjtBQS9PZ0U7RUFBVSxnREFBQTtBQWtQMUU7QUFqUEU7RUFBb0IsNkNBQUE7QUFvUHRCO0FBblBFO0VBQXdCLGNBQUE7QUFzUDFCO0FBclBFO0VBQXFCLGNBQUE7QUF3UHZCOztBQXJQQTtFQUNFLG9DQUFBO0VBQ0EscURBQUE7RUFDQSw2REFBQTtBQXdQRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQcmVtaXVtIEF2YXRhciBTdXBlckFkbWluIChoZWFkZXIgdHJpZ2dlcikgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5zYS1oZWFkZXItYXZhdGFyLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzhweDsgaGVpZ2h0OiAzOHB4OyBmbGV4LXNocmluazogMDsgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuc2EtaGF2LWJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDIwYzE4IDAlLCAjMGQzYTY2IDM1JSwgIzU2MjVFOCA2NSUsICMwRENBRjAgMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbiAgfVxyXG4gIC5zYS1oYXYtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDIwYzE4LCAjMGQzYTY2KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuc2EtaGF2LWluaXRpYWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogOTAwOyBjb2xvcjogI2E1ZjNmYzsgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICB9XHJcbiAgLnNhLWhhdi1jcm93biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTNweDsgcmlnaHQ6IC0zcHg7XHJcbiAgICB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMERDQUYwLCAjMDI4NGM3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMTMsMjAyLDI0MCwuNyk7IHotaW5kZXg6IDU7XHJcbiAgICBhbmltYXRpb246IHNhLWhkci1jcm93blBvcCAyLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgaSB7IGZvbnQtc2l6ZTogNnB4OyBjb2xvcjogI2ZmZjsgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAuc2EtaGF2LWJvcmRlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxyXG59XHJcblxyXG4uc2EtaGF2LWxnIHtcclxuICB3aWR0aDogNDZweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcclxuICAuc2EtaGF2LWlubmVyIHsgaW5zZXQ6IDIuNXB4ICFpbXBvcnRhbnQ7IH1cclxuICAuc2EtaGF2LWluaXRpYWwgeyBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDsgfVxyXG4gIC5zYS1oYXYtY3Jvd24geyB3aWR0aDogMTdweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDsgaSB7IGZvbnQtc2l6ZTogN3B4ICFpbXBvcnRhbnQ7IH0gfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNhLWhkci1jcm93blBvcCB7XHJcbiAgMCUsMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMjIpOyBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMTMsMjAyLDI0MCwuOSk7IH1cclxufVxyXG5cclxuLnNhLWhlYWRlci1hdmF0YXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM2cHg7IGhlaWdodDogMzZweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMjBjMTggMCUsICMwZDNhNjYgMzUlLCAjNTYyNUU4IDY1JSwgIzBEQ0FGMCAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyLDEyLDI0LC40NSk7XHJcbiAgZmxleC1zaHJpbms6IDA7IGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycywgdHJhbnNmb3JtIC4ycztcclxuICAmOmhvdmVyIHsgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEzLDIwMiwyNDAsLjUpOyB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyB9XHJcbiAgJi0tbGcgeyB3aWR0aDogNDRweDsgaGVpZ2h0OiA0NHB4OyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBOYXZpZ2F0aW9uIFN1cGVyQWRtaW4gKHRvcGJhcikgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbnVsLnNhLWFkbWluLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnB4OyBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7XHJcblxyXG4gID4gbGkgPiBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xyXG4gICAgcGFkZGluZzogN3B4IDEzcHg7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzc0MTUxOyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMThzIGVhc2U7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogI2E1YjRkNDsgb3BhY2l0eTogLjg1OyB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xOHMsIGNvbG9yIC4xOHM7IH1cclxuICAgICY6aG92ZXIgeyBpIHsgb3BhY2l0eTogMTsgY29sb3I6ICM1NjI1RTg7IH0gfVxyXG4gIH1cclxuICA+IGxpLmFjdGl2ZSA+IGE6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDJweDsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogMjBweDsgaGVpZ2h0OiAyLjVweDsgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3VwZXJBZG1pbiDDosKAwpQgbWlkbmlnaHQtaW5kaWdvLXNreSBhY3RpdmUgcGlsbFxyXG51bC5zYS1hZG1pbi1uYXYubmF2LXN1cGVyYWRtaW4ge1xyXG4gID4gbGkgPiBhIHtcclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDg2LDM3LDIzMiwuMDgpOyBjb2xvcjogIzU2MjVFODsgfVxyXG4gIH1cclxuICA+IGxpLmFjdGl2ZSA+IGEge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDg2LDM3LDIzMiwuMTIpLCByZ2JhKDEzLDIwMiwyNDAsLjA2KSk7XHJcbiAgICBjb2xvcjogIzU2MjVFODsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICY6OmFmdGVyIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTYyNUU4LCAjMERDQUYwKTsgfVxyXG4gICAgaSB7IG9wYWNpdHk6IDE7IGNvbG9yOiAjNTYyNUU4OyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUm9sZS1zcGVjaWZpYyBuYXYgY29sb3Igb3ZlcnJpZGVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG51bC5zYS1hZG1pbi1uYXYubmF2LWFkbWluIHtcclxuICA+IGxpIHtcclxuICAgID4gYTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjksNzgsMjE2LC4wOSk7IGNvbG9yOiAjMWQ0ZWQ4OyBpIHsgb3BhY2l0eTogMTsgfSB9XHJcbiAgICAmLmFjdGl2ZSA+IGEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjksNzgsMjE2LC4xMyksIHJnYmEoMjksNzgsMjE2LC4wNCkpO1xyXG4gICAgICBjb2xvcjogIzFkNGVkODsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgaSB7IG9wYWNpdHk6IDE7IH1cclxuICAgICAgJjo6YWZ0ZXIgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRDM5OTUsICM5YjU5YjYsICM1NjI1RTgsICMwMmE4YjUpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUHJlbWl1bSBBdmF0YXIgQWRtaW4gKGhlYWRlciB0cmlnZ2VyKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmFkbS1oZWFkZXItYXZhdGFyLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzhweDsgaGVpZ2h0OiAzOHB4OyBmbGV4LXNocmluazogMDsgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuYWRtLWhhdi1ib3JkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZEMzk5NSwgIzliNTliNiwgIzU2MjVFOCwgIzAyYThiNSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbiAgfVxyXG4gIC5hZG0taGF2LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDJweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzliNTliNiwgIzU2MjVFOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFkbS1oYXYtaW5pdGlhbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA5MDA7IGNvbG9yOiAjZmZmOyBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG4gIH1cclxuICAuYWRtLWhhdi1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTNweDsgcmlnaHQ6IC0zcHg7XHJcbiAgICB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkQzOTk1LCAjNTYyNUU4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMjUzLDU3LDE0OSwuNik7IHotaW5kZXg6IDU7XHJcbiAgICBhbmltYXRpb246IGFkbS1oZHItYmFkZ2VQb3AgMi44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIGkgeyBmb250LXNpemU6IDZweDsgY29sb3I6ICNmZmY7IH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIgLmFkbS1oYXYtYm9yZGVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XHJcbn1cclxuXHJcbi8vIEFkbWluIMOiwoDClCBsZyB2YXJpYW50IChpbnNpZGUgZHJvcGRvd24gaGVhZGVyKVxyXG4uYWRtLWhhdi1sZyB7XHJcbiAgd2lkdGg6IDQ2cHggIWltcG9ydGFudDsgaGVpZ2h0OiA0NnB4ICFpbXBvcnRhbnQ7XHJcbiAgLmFkbS1oYXYtaW5uZXIgeyBpbnNldDogMi41cHggIWltcG9ydGFudDsgfVxyXG4gIC5hZG0taGF2LWluaXRpYWwgeyBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDsgfVxyXG4gIC5hZG0taGF2LWJhZGdlIHsgd2lkdGg6IDE3cHggIWltcG9ydGFudDsgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7IGkgeyBmb250LXNpemU6IDdweCAhaW1wb3J0YW50OyB9IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhZG0taGRyLWJhZGdlUG9wIHtcclxuICAwJSwxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yMik7IGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgyNTMsNTcsMTQ5LC45KTsgfVxyXG59XHJcblxyXG51bC5zYS1hZG1pbi1uYXYubmF2LWluc3RydWN0b3Ige1xyXG4gID4gbGkge1xyXG4gICAgPiBhOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIC4wOSk7IGNvbG9yOiAjNjM2NmYxOyBpIHsgb3BhY2l0eTogMTsgfSB9XHJcbiAgICAmLmFjdGl2ZSA+IGEgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgLjEyKTsgY29sb3I6ICM2MzY2ZjE7IGZvbnQtd2VpZ2h0OiA3MDA7IGkgeyBvcGFjaXR5OiAxOyB9IH1cclxuICB9XHJcbn1cclxuXHJcbnVsLnNhLWFkbWluLW5hdi5uYXYtc3R1ZGVudCB7XHJcbiAgPiBsaSB7XHJcbiAgICA+IGE6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgLjA5KTsgY29sb3I6ICMwNTk2Njk7IGkgeyBvcGFjaXR5OiAxOyB9IH1cclxuICAgICYuYWN0aXZlID4gYSB7IGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAuMTIpOyBjb2xvcjogIzA1OTY2OTsgZm9udC13ZWlnaHQ6IDcwMDsgaSB7IG9wYWNpdHk6IDE7IH0gfVxyXG4gIH1cclxufVxyXG5cclxudWwuc2EtYWRtaW4tbmF2Lm5hdi1yZWNydWl0ZXIge1xyXG4gID4gbGkge1xyXG4gICAgPiBhOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxNCwgMTY1LCAyMzMsIC4wOSk7IGNvbG9yOiAjMDI4NGM3OyBpIHsgb3BhY2l0eTogMTsgfSB9XHJcbiAgICAmLmFjdGl2ZSA+IGEgeyBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxNjUsIDIzMywgLjEyKTsgY29sb3I6ICMwMjg0Yzc7IGZvbnQtd2VpZ2h0OiA3MDA7IGkgeyBvcGFjaXR5OiAxOyB9IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSb2xlIFN3aXRjaGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucm9sZS1zd2l0Y2gtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1yc3ctY29sb3IsICM2YjcyODApO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1yc3ctY29sb3IsICM2YjcyODApO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xOHMgZWFzZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJzdy1jb2xvciwgIzZiNzI4MCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMTUpO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCwgJi5yb2xlLXN3aXRjaC1sb2FkaW5nIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUHJlbWl1bSBBdmF0YXIgUmVjcnVpdGVyIChoZWFkZXIgdHJpZ2dlcikgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5yY3QtaGVhZGVyLWF2YXRhci13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM4cHg7IGhlaWdodDogMzhweDsgZmxleC1zaHJpbms6IDA7IGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLnJjdC1oYXYtYm9yZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEsICMzOTJDN0QsICMwRENBRjApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xyXG4gIH1cclxuICAucmN0LWhhdi1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAycHg7IGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEsICMzOTJDN0QpO1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yY3QtaGF2LWluaXRpYWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogOTAwOyBjb2xvcjogI2ZmZjsgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICB9XHJcbiAgLnJjdC1oYXYtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC0zcHg7IHJpZ2h0OiAtM3B4O1xyXG4gICAgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzQzk1QSwgIzA1OTY2OSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDMsMjAxLDkwLC42KTsgei1pbmRleDogNTtcclxuICAgIGFuaW1hdGlvbjogcmN0LWhkci1iYWRnZVBvcCAyLjhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgaSB7IGZvbnQtc2l6ZTogNnB4OyBjb2xvcjogI2ZmZjsgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAucmN0LWhhdi1ib3JkZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByY3QtaGRyLWJhZGdlUG9wIHtcclxuICAwJSwxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yMik7IGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgzLDIwMSw5MCwuOSk7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFN0dWRlbnQgRGFzaGJvYXJkIHBpbGwgKGluIGluc3RydWN0b3IgZHJvcGRvd24pIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc3R1ZGVudC1kYXNoLXBpbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgaSB7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRGV2ZW5pciBJbnN0cnVjdGV1ciDDosKAwpQgYm91dG9uIENUQSBoZWFkZXIgKMODwql0dWRpYW50cykgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5idG4tYmVjb21lLWluc3RydWN0b3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICM4YjVjZjYpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIERldmVuaXIgSW5zdHJ1Y3RldXIgw6LCgMKUIGJvdXRvbiBkYW5zIGxlIGRyb3Bkb3duIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uYmVjb21lLWluc3RydWN0b3ItZHJvcGRvd24tYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsLjIpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwuMDUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xOHMgZWFzZTtcclxuXHJcbiAgLmJpLWljb24ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGkgeyBmb250LXNpemU6IDE1cHg7IH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsLjUpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLC4xKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSg5OSwxMDIsMjQxLC4xNSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcEluTW9kYWwge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpIHRyYW5zbGF0ZVkoOHB4KTsgfVxyXG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpICAgIHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFByb2ZpbGUgRHJvcGRvd24gaG92ZXIgw6LCgMKUIFNBICYgQWRtaW4gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgYS5zYS1kcm9wLWl0ZW06aG92ZXIsXHJcbiAgYS5zYS1kcm9wLWl0ZW06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwzNywyMzIsLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1NjI1RTggIWltcG9ydGFudDtcclxuICAgIGkgeyBjb2xvcjogIzBEQ0FGMCAhaW1wb3J0YW50OyB9XHJcbiAgfVxyXG4gIGEuYWRtLWRyb3AtaXRlbTpob3ZlcixcclxuICBhLmFkbS1kcm9wLWl0ZW06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwzNywyMzIsLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1NjI1RTggIWltcG9ydGFudDtcclxuICAgIGkgeyBjb2xvcjogIzU2MjVFOCAhaW1wb3J0YW50OyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUXVpY2sgQ1RBIGJ1dHRvbiAoQ3LDg8KpZXIgdW4gY291cnMgcG91ciBpbnN0cnVjdGV1cikgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5idG4taGVhZGVyLWN0YSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcblxyXG4gIGkgeyBmb250LXNpemU6IDE2cHg7IH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgLjE4KTtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgREFSSyBNT0RFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG46aG9zdC1jb250ZXh0KC5kYXJrLW1vZGUpIHtcclxuICAvLyBOYXZiYXIgU0EvQWRtaW4gbmF2IGxpbmtzIMOiwoDClCB0ZXh0ZSBsaXNpYmxlIHN1ciBmb25kIHNvbWJyZVxyXG4gIHVsLnNhLWFkbWluLW5hdiA+IGxpID4gYSB7XHJcbiAgICBjb2xvcjogIzk0YTNiODtcclxuICAgIGkgeyBjb2xvcjogIzY0NzQ4Yjsgb3BhY2l0eTogMTsgfVxyXG4gICAgJjpob3ZlciB7IGNvbG9yOiAjZTJlOGYwOyBpIHsgY29sb3I6ICNhNWI0ZmM7IH0gfVxyXG4gIH1cclxuICB1bC5zYS1hZG1pbi1uYXYubmF2LXN1cGVyYWRtaW4gPiBsaS5hY3RpdmUgPiBhIHsgY29sb3I6ICNhNWYzZmM7IH1cclxuICB1bC5zYS1hZG1pbi1uYXYubmF2LWFkbWluID4gbGkuYWN0aXZlID4gYSB7IGNvbG9yOiAjZmRhNGFmOyB9XHJcblxyXG4gIC8vIERyb3Bkb3duIHByb2ZpbCDDosKAwpQgZm9uZCBzb21icmVcclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTJiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wOCk7XHJcbiAgICAuZHJvcGRvd24taXRlbSB7IGNvbG9yOiAjY2JkNWUxOyB9XHJcbiAgICAuZHJvcGRvd24taXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA2KTsgY29sb3I6ICNmZmY7IH1cclxuICB9XHJcbiAgLy8gTm90aWZpY2F0aW9uIGRyb3Bkb3duIGhlYWRlclxyXG4gIC5iZy1saWdodCB7IGJhY2tncm91bmQ6ICMxMTExMTkgIWltcG9ydGFudDsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUmVjcnVpdGVyIE5vdGlmaWNhdGlvbiBCZWxsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucmN0LW5vdGlmLWRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC8vIEJlbGwgaWNvbiBzdHlsaW5nXHJcbiAgLnRpLWJlbGwsIC50aS1iZWxsLXJpbmdpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgfVxyXG4gICY6aG92ZXIgLnRpLWJlbGwsXHJcbiAgJjpob3ZlciAudGktYmVsbC1yaW5naW5nIHsgY29sb3I6ICMwM0M5NUE7IH1cclxuXHJcbiAgLy8gQW5pbWF0ZWQgcmluZyBvbiB1bnJlYWRcclxuICAucmN0LW5vdGlmLXJpbmcge1xyXG4gICAgYW5pbWF0aW9uOiByY3QtYmVsbC1zaGFrZSAuNXMgZWFzZTtcclxuICAgIGNvbG9yOiAjMDNDOTVBICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBCYWRnZSBjb3VudFxyXG4gIC5yY3Qtbm90aWYtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNHB4OyByaWdodDogLTZweDtcclxuICAgIG1pbi13aWR0aDogMTdweDsgaGVpZ2h0OiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzQzk1QSwgIzA1OTY2OSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMywyMDEsOTAsLjM1KTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRHJvcGRvd24gbWVudSBwYW5lbFxyXG4ucmN0LW5vdGlmLW1lbnUge1xyXG4gIHdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDQ0MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzNnB4IHJnYmEoNTcsNDQsMTI1LC4xNSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMSkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDRweDsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogcmdiYSg1Nyw0NCwxMjUsLjIpOyBib3JkZXItcmFkaXVzOiAxMHB4OyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxyXG59XHJcblxyXG4vLyBQYW5lbCBoZWFkZXJcclxuLnJjdC1ub3RpZi1oZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTcsNDQsMTI1LC4wOSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzLDIwMSw5MCwuMDYpLCByZ2JhKDU3LDQ0LDEyNSwuMDQpKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4IDE0cHggMCAwO1xyXG59XHJcbi5yY3Qtbm90aWYtaGQtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMWUxYjRiO1xyXG59XHJcbi5yY3Qtbm90aWYtaGQtaWNvIHtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEsICMwNTk2NjkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBpIHsgZm9udC1zaXplOiAxNHB4OyB9XHJcbn1cclxuLnJjdC1ub3RpZi1oZC1jb3VudCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAzQzk1QSwgIzA1OTY2OSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMXB4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5yY3Qtbm90aWYtbWFyay1hbGwge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwM0M5NUE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjE1cztcclxuICAmOmhvdmVyIHsgY29sb3I6ICMwNTk2Njk7IH1cclxufVxyXG5cclxuLy8gRW1wdHkgc3RhdGVcclxuLnJjdC1ub3RpZi1lbXB0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzZweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwIHsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzM3NDE1MTsgbWFyZ2luOiAxMHB4IDAgM3B4OyB9XHJcbiAgc21hbGwgeyBjb2xvcjogIzljYTNhZjsgZm9udC1zaXplOiAxMS41cHg7IH1cclxufVxyXG4ucmN0LW5vdGlmLWVtcHR5LWljbyB7XHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsMjAxLDkwLC4wOCksIHJnYmEoNTcsNDQsMTI1LC4wNikpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LDQ0LDEyNSwuMSk7XHJcbiAgaSB7IGZvbnQtc2l6ZTogMjRweDsgY29sb3I6IHJnYmEoNTcsNDQsMTI1LC4zKTsgfVxyXG59XHJcblxyXG4vLyBOb3RpZmljYXRpb24gaXRlbVxyXG4ucmN0LW5vdGlmLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDExcHggMTZweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1Nyw0NCwxMjUsLjA3KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTNzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoNTcsNDQsMTI1LC4wNCk7IH1cclxuICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XHJcbn1cclxuLnJjdC1ub3RpZi11bnJlYWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDMsMjAxLDkwLC4wNCkgIWltcG9ydGFudDsgfVxyXG4ucmN0LW5vdGlmLWl0ZW0taWNvIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMsMjAxLDkwLC4xKSwgcmdiYSg1Nyw0NCwxMjUsLjA4KSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMywyMDEsOTAsLjE1KTtcclxuICBpIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogIzAzQzk1QTsgfVxyXG59XHJcbi5yY3Qtbm90aWYtaXRlbS1ib2R5IHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5yY3Qtbm90aWYtaXRlbS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxZTFiNGI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS4zNTtcclxufVxyXG4ucmN0LW5vdGlmLWl0ZW0tbXNnIHtcclxuICBtYXJnaW46IDAgMCAzcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuLnJjdC1ub3RpZi1pdGVtLXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzljYTNhZjtcclxufVxyXG4ucmN0LW5vdGlmLWRvdCB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzAzQzk1QTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMywyMDEsOTAsLjI1KTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1lc3NhZ2UgaWNvbiB1bnJlYWQgYmFkZ2Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5yY3QtbXNnLWljb24tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01cHg7IHJpZ2h0OiAtN3B4O1xyXG4gIG1pbi13aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwM0M5NUEsICMwNTk2NjkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogOC41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDMsMjAxLDkwLC4zNSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuOmhvc3QtY29udGV4dCguZGFyay1tb2RlKSAucmN0LW1zZy1pY29uLWJhZGdlIHsgYm9yZGVyLWNvbG9yOiAjMTExMTE5OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQmVsbCBhbmltYXRpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBrZXlmcmFtZXMgcmN0LWJlbGwtc2hha2Uge1xyXG4gIDAlLDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDE1JSAgICAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpOyB9XHJcbiAgMzAlICAgICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTNkZWcpOyB9XHJcbiAgNDUlICAgICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKTsgfVxyXG4gIDYwJSAgICAgIHsgdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpOyB9XHJcbiAgNzUlICAgICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRGFyayBtb2RlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG46aG9zdC1jb250ZXh0KC5kYXJrLW1vZGUpIHtcclxuICAucmN0LW5vdGlmLWRyb3Bkb3duIHtcclxuICAgIC50aS1iZWxsLCAudGktYmVsbC1yaW5naW5nIHsgY29sb3I6ICM5NGEzYjg7IH1cclxuICAgICY6aG92ZXIgLnRpLWJlbGwsXHJcbiAgICAmOmhvdmVyIC50aS1iZWxsLXJpbmdpbmcgeyBjb2xvcjogIzAzQzk1QTsgfVxyXG4gICAgLnJjdC1ub3RpZi1iYWRnZSB7IGJvcmRlci1jb2xvcjogIzExMTExOTsgfVxyXG4gIH1cclxuICAucmN0LW5vdGlmLW1lbnUgeyBiYWNrZ3JvdW5kOiAjMWExYTJiICFpbXBvcnRhbnQ7IGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDgpICFpbXBvcnRhbnQ7IH1cclxuICAucmN0LW5vdGlmLWhkIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDMsMjAxLDkwLC4wNikscmdiYSg1Nyw0NCwxMjUsLjA3KSk7IGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjA4KTsgfVxyXG4gIC5yY3Qtbm90aWYtaGQtbGVmdCB7IGNvbG9yOiAjZTJlOGYwOyB9XHJcbiAgLnJjdC1ub3RpZi1pdGVtIHsgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDYpOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDQpICFpbXBvcnRhbnQ7IH0gfVxyXG4gIC5yY3Qtbm90aWYtdW5yZWFkIHsgYmFja2dyb3VuZDogcmdiYSgzLDIwMSw5MCwuMDYpICFpbXBvcnRhbnQ7IH1cclxuICAucmN0LW5vdGlmLWl0ZW0tdGl0bGUgeyBjb2xvcjogI2UyZThmMDsgfVxyXG4gIC5yY3Qtbm90aWYtZW1wdHkgcCB7IGNvbG9yOiAjZTJlOGYwOyB9XHJcbn1cclxuLy8gSGVhZGVyIGJhY2tncm91bmQgKGdsb2JhbCBzY29wZSBzaW5jZSA6aG9zdC1jb250ZXh0IGRvZXNuJ3QgcmVhY2ggPGhlYWRlcj4pXHJcbjpob3N0LWNvbnRleHQoLmRhcmstbW9kZSkgaGVhZGVyLmhlYWRlci10d28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMmIgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwwLDAsLjM1KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4wNikgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 89544:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/common/common.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);


let CommonService = /*#__PURE__*/(() => {
  class CommonService {
    base = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    page = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    last = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    isuserHeader = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    isAdminHeader = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    isstudentHeader = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    mainFooter = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    static ɵfac = function CommonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommonService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
  }
  return CommonService;
})();

/***/ })

}]);
//# sourceMappingURL=608.js.map