import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/message/message.service.ts
var MessageService = class _MessageService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getConversations() {
    return this.http.get(`${this.apiUrl}/user/messages/conversations`);
  }
  getOrCreateConversation(otherUserId) {
    return this.http.post(`${this.apiUrl}/user/messages/conversations/${otherUserId}`, {});
  }
  getMessages(conversationId) {
    return this.http.get(`${this.apiUrl}/user/messages/conversations/${conversationId}/messages`);
  }
  sendMessage(conversationId, data) {
    return this.http.post(`${this.apiUrl}/user/messages/conversations/${conversationId}/messages`, data);
  }
  markAsRead(conversationId) {
    return this.http.put(`${this.apiUrl}/user/messages/conversations/${conversationId}/read`, {}, { responseType: "text" });
  }
  getUnreadCount() {
    return this.http.get(`${this.apiUrl}/user/messages/unread-count`);
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessageService, factory: _MessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MessageService
};
//# sourceMappingURL=chunk-ZJTZEPHA.js.map
