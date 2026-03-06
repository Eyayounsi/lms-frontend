import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/admin/services/admin-api.service.ts
var AdminApiService = class _AdminApiService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getAllUsers() {
    return this.http.get(`${this.apiUrl}/admin/users`);
  }
  deleteUser(id) {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, { responseType: "text" });
  }
  toggleBlock(id) {
    return this.http.put(`${this.apiUrl}/admin/users/${id}/toggle-block`, {});
  }
  changeUserRole(id, role) {
    return this.http.put(`${this.apiUrl}/admin/users/${id}/change-role?role=${role}`, {});
  }
  static \u0275fac = function AdminApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminApiService, factory: _AdminApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/admin/admin-users/admin-users.component.ts
function AdminUsersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function AdminUsersComponent_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMessage, " ");
  }
}
function AdminUsersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function AdminUsersComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function AdminUsersComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "p", 59);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementStart(2, "p", 61);
    \u0275\u0275text(3, "Aucun utilisateur trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_61_tr_23_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2, "Actif ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_61_tr_23_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2, "Bloqu\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_61_tr_23_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2, "En attente ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_61_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 69)(5, "div", 70)(6, "span", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 61);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "select", 73);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_div_61_tr_23_Template_select_ngModelChange_15_listener($event) {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeRole(user_r5, $event));
    });
    \u0275\u0275elementStart(16, "option", 24);
    \u0275\u0275text(17, "\xC9tudiant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 23);
    \u0275\u0275text(19, "Instructeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 25);
    \u0275\u0275text(21, "Recruteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 22);
    \u0275\u0275text(23, "Admin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275template(25, AdminUsersComponent_div_61_tr_23_span_25_Template, 3, 0, "span", 74)(26, AdminUsersComponent_div_61_tr_23_span_26_Template, 3, 0, "span", 75)(27, AdminUsersComponent_div_61_tr_23_span_27_Template, 3, 0, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 77);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 66)(31, "div", 78)(32, "input", 79);
    \u0275\u0275listener("change", function AdminUsersComponent_div_61_tr_23_Template_input_change_32_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBlock(user_r5));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "td", 66)(34, "button", 80);
    \u0275\u0275listener("click", function AdminUsersComponent_div_61_tr_23_Template_button_click_34_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(user_r5));
    });
    \u0275\u0275element(35, "i", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r5.fullName.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", user_r5.role)("disabled", user_r5.role.includes("ADMIN"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", user_r5.accountStatus === "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r5.accountStatus === "BLOCKED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r5.accountStatus === "PENDING");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(user_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", user_r5.accountStatus === "BLOCKED")("disabled", user_r5.role.includes("ADMIN"))("title", user_r5.role.includes("ADMIN") ? "Impossible de bloquer un admin" : user_r5.accountStatus === "BLOCKED" ? "D\xE9bloquer" : "Bloquer");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", user_r5.role.includes("ADMIN"))("title", user_r5.role.includes("ADMIN") ? "Impossible de supprimer un admin" : "Supprimer");
  }
}
function AdminUsersComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "table", 63)(2, "thead", 64)(3, "tr")(4, "th", 65);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Date cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 66);
    \u0275\u0275text(19, "Bloquer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 66);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AdminUsersComponent_div_61_tr_23_Template, 36, 16, "tr", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
  }
}
function AdminUsersComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 88);
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  adminApi;
  users = [];
  filteredUsers = [];
  searchTerm = "";
  filterRole = "";
  filterStatus = "";
  loading = false;
  errorMessage = "";
  successMessage = "";
  // For delete confirmation modal
  userToDelete = null;
  constructor(adminApi) {
    this.adminApi = adminApi;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.errorMessage = "";
    this.adminApi.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Impossible de charger les utilisateurs.";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    this.filteredUsers = this.users.filter((u) => {
      const matchSearch = !this.searchTerm || u.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole = !this.filterRole || u.role.includes(this.filterRole);
      const matchStatus = !this.filterStatus || u.accountStatus === this.filterStatus;
      return matchSearch && matchRole && matchStatus;
    });
  }
  onSearchChange() {
    this.applyFilters();
  }
  onFilterChange() {
    this.applyFilters();
  }
  confirmDelete(user) {
    if (user.role.includes("ADMIN"))
      return;
    this.userToDelete = user;
  }
  cancelDelete() {
    this.userToDelete = null;
  }
  deleteUser() {
    if (!this.userToDelete)
      return;
    const id = this.userToDelete.id;
    this.adminApi.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter((u) => u.id !== id);
        this.applyFilters();
        this.userToDelete = null;
        this.showSuccess("Utilisateur supprim\xE9 avec succ\xE8s.");
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Impossible de supprimer cet utilisateur.";
        this.userToDelete = null;
      }
    });
  }
  toggleBlock(user) {
    if (user.role.includes("ADMIN"))
      return;
    this.adminApi.toggleBlock(user.id).subscribe({
      next: (updated) => {
        user.accountStatus = updated.accountStatus;
        const action = user.accountStatus === "BLOCKED" ? "bloqu\xE9" : "d\xE9bloqu\xE9";
        this.showSuccess(`Utilisateur ${action} avec succ\xE8s.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Impossible de modifier le statut.";
      }
    });
  }
  changeRole(user, newRole) {
    if (user.role.includes("ADMIN"))
      return;
    const oldRole = user.role;
    this.adminApi.changeUserRole(user.id, newRole).subscribe({
      next: (updated) => {
        user.role = updated.role;
        this.showSuccess(`R\xF4le de ${user.fullName} chang\xE9 en ${this.getRoleLabel(updated.role)}.`);
      },
      error: (err) => {
        user.role = oldRole;
        this.errorMessage = err.error?.message || "Impossible de changer le r\xF4le.";
      }
    });
  }
  showSuccess(msg) {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = "", 4e3);
  }
  getRoleBadgeClass(role) {
    if (role.includes("ADMIN"))
      return "badge bg-danger";
    if (role.includes("INSTRUCTOR"))
      return "badge bg-primary";
    if (role.includes("STUDENT"))
      return "badge bg-success";
    if (role.includes("RECRUITER"))
      return "badge bg-warning text-dark";
    return "badge bg-secondary";
  }
  getRoleLabel(role) {
    if (role.includes("ADMIN"))
      return "Admin";
    if (role.includes("INSTRUCTOR"))
      return "Instructeur";
    if (role.includes("STUDENT"))
      return "\xC9tudiant";
    if (role.includes("RECRUITER"))
      return "Recruteur";
    return role;
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    try {
      return new Date(dateStr).toLocaleDateString("fr-FR");
    } catch {
      return dateStr;
    }
  }
  static \u0275fac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(AdminApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 85, vars: 15, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "bg-danger", "text-white"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-3"], [1, "icon-box", "bg-white", "bg-opacity-25", "flex-shrink-0"], [1, "ti", "ti-users", "fs-20", "text-white"], [1, "mb-0", "text-white"], [1, "text-white", "opacity-75"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-3", "align-items-end"], [1, "col-md-5"], [1, "form-label", "fw-semibold"], [1, "input-group"], [1, "input-group-text"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Nom ou email...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "ADMIN"], ["value", "INSTRUCTOR"], ["value", "STUDENT"], ["value", "RECRUITER"], ["value", "ACTIVE"], ["value", "BLOCKED"], ["value", "PENDING"], [1, "col-md-1"], ["title", "Rafra\xEEchir", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "ti", "ti-refresh"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "badge", "bg-primary-transparent", "text-primary"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow-sm"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title"], [1, "ti", "ti-alert-triangle", "text-danger", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-muted", "small", "mb-0"], [1, "modal-footer", "border-0"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "ti", "ti-trash", "me-1"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "ti", "ti-circle-check", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "ti", "ti-alert-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "ti", "ti-users-off", "fs-40", "text-muted", "d-block", "mb-2"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-3"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "ps-3", "text-muted", "small"], [1, "d-flex", "align-items-center", "gap-2"], [1, "avatar", "avatar-sm", "bg-primary-transparent", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "36px", "height", "36px"], [1, "text-primary", "fw-bold", "text-uppercase"], [1, "fw-semibold"], [1, "form-select", "form-select-sm", "role-select", 3, "ngModelChange", "ngModel", "disabled"], ["class", "badge bg-success-transparent text-success", 4, "ngIf"], ["class", "badge bg-danger-transparent text-danger", 4, "ngIf"], ["class", "badge bg-warning-transparent text-warning", 4, "ngIf"], [1, "text-muted", "small"], [1, "form-check", "form-switch", "d-flex", "justify-content-center", "mb-0"], ["type", "checkbox", "role", "switch", 1, "form-check-input", 3, "change", "checked", "disabled", "title"], [1, "btn", "btn-sm", "btn-danger", 3, "click", "disabled", "title"], [1, "ti", "ti-trash"], [1, "badge", "bg-success-transparent", "text-success"], [1, "ti", "ti-circle-check", "me-1"], [1, "badge", "bg-danger-transparent", "text-danger"], [1, "ti", "ti-ban", "me-1"], [1, "badge", "bg-warning-transparent", "text-warning"], [1, "ti", "ti-clock", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function AdminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h5", 6);
      \u0275\u0275text(8, "Gestion des Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "small", 7);
      \u0275\u0275text(10, "G\xE9rer, bloquer ou supprimer les comptes utilisateurs");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(11, AdminUsersComponent_div_11_Template, 4, 1, "div", 8)(12, AdminUsersComponent_div_12_Template, 4, 1, "div", 9);
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "label", 14);
      \u0275\u0275text(18, "Rechercher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15)(20, "span", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_22_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19)(24, "label", 14);
      \u0275\u0275text(25, "R\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterRole, $event) || (ctx.filterRole = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_26_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(27, "option", 21);
      \u0275\u0275text(28, "Tous les r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 22);
      \u0275\u0275text(30, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 23);
      \u0275\u0275text(32, "Instructeur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 24);
      \u0275\u0275text(34, "\xC9tudiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 25);
      \u0275\u0275text(36, "Recruteur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 19)(38, "label", 14);
      \u0275\u0275text(39, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminUsersComponent_Template_select_ngModelChange_40_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(41, "option", 21);
      \u0275\u0275text(42, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 26);
      \u0275\u0275text(44, "Actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 27);
      \u0275\u0275text(46, "Bloqu\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 28);
      \u0275\u0275text(48, "En attente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 29)(50, "button", 30);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_50_listener() {
        return ctx.loadUsers();
      });
      \u0275\u0275element(51, "i", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "div", 32)(53, "div", 33)(54, "h5", 34);
      \u0275\u0275text(55, "Liste des Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 35);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 36);
      \u0275\u0275template(59, AdminUsersComponent_div_59_Template, 4, 0, "div", 37)(60, AdminUsersComponent_div_60_Template, 4, 0, "div", 37)(61, AdminUsersComponent_div_61_Template, 24, 1, "div", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 39)(63, "div", 40)(64, "div", 41)(65, "div", 42)(66, "h5", 43);
      \u0275\u0275element(67, "i", 44);
      \u0275\u0275text(68, "Confirmer la suppression");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 45);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_69_listener() {
        return ctx.cancelDelete();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 46)(71, "p");
      \u0275\u0275text(72, "\xCAtes-vous s\xFBr de vouloir supprimer le compte de ");
      \u0275\u0275elementStart(73, "strong");
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, " ? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 47);
      \u0275\u0275text(77, "Cette action est irr\xE9versible.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 48)(79, "button", 49);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_79_listener() {
        return ctx.cancelDelete();
      });
      \u0275\u0275text(80, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 50);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_81_listener() {
        return ctx.deleteUser();
      });
      \u0275\u0275element(82, "i", 51);
      \u0275\u0275text(83, "Supprimer ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(84, AdminUsersComponent_div_84_Template, 1, 0, "div", 52);
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterRole);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate1("", ctx.filteredUsers.length, " utilisateur(s)");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredUsers.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredUsers.length > 0);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.userToDelete ? "block" : "none");
      \u0275\u0275classProp("show", ctx.userToDelete);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.userToDelete == null ? null : ctx.userToDelete.fullName);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.userToDelete);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 2.2em;\n  height: 1.2em;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.role-select[_ngcontent-%COMP%] {\n  min-width: 130px;\n  font-size: 0.82rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=admin-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersComponent, [{
    type: Component,
    args: [{ selector: "app-admin-users", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Header -->\r
    <div class="row mb-4">\r
      <div class="col-12">\r
        <div class="card border-0 bg-danger text-white">\r
          <div class="card-body d-flex align-items-center gap-3 py-3">\r
            <span class="icon-box bg-white bg-opacity-25 flex-shrink-0">\r
              <i class="ti ti-users fs-20 text-white"></i>\r
            </span>\r
            <div>\r
              <h5 class="mb-0 text-white">Gestion des Utilisateurs</h5>\r
              <small class="text-white opacity-75">G\xE9rer, bloquer ou supprimer les comptes utilisateurs</small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Messages -->\r
    <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">\r
      <i class="ti ti-circle-check me-2"></i>{{ successMessage }}\r
      <button type="button" class="btn-close" (click)="successMessage=''"></button>\r
    </div>\r
    <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">\r
      <i class="ti ti-alert-circle me-2"></i>{{ errorMessage }}\r
      <button type="button" class="btn-close" (click)="errorMessage=''"></button>\r
    </div>\r
\r
    <!-- Filters -->\r
    <div class="card mb-3">\r
      <div class="card-body">\r
        <div class="row g-3 align-items-end">\r
          <div class="col-md-5">\r
            <label class="form-label fw-semibold">Rechercher</label>\r
            <div class="input-group">\r
              <span class="input-group-text"><i class="ti ti-search"></i></span>\r
              <input type="text" class="form-control" placeholder="Nom ou email..."\r
                [(ngModel)]="searchTerm" (ngModelChange)="onSearchChange()">\r
            </div>\r
          </div>\r
          <div class="col-md-3">\r
            <label class="form-label fw-semibold">R\xF4le</label>\r
            <select class="form-select" [(ngModel)]="filterRole" (ngModelChange)="onFilterChange()">\r
              <option value="">Tous les r\xF4les</option>\r
              <option value="ADMIN">Admin</option>\r
              <option value="INSTRUCTOR">Instructeur</option>\r
              <option value="STUDENT">\xC9tudiant</option>\r
              <option value="RECRUITER">Recruteur</option>\r
            </select>\r
          </div>\r
          <div class="col-md-3">\r
            <label class="form-label fw-semibold">Statut</label>\r
            <select class="form-select" [(ngModel)]="filterStatus" (ngModelChange)="onFilterChange()">\r
              <option value="">Tous les statuts</option>\r
              <option value="ACTIVE">Actif</option>\r
              <option value="BLOCKED">Bloqu\xE9</option>\r
              <option value="PENDING">En attente</option>\r
            </select>\r
          </div>\r
          <div class="col-md-1">\r
            <button class="btn btn-outline-secondary w-100" (click)="loadUsers()" title="Rafra\xEEchir">\r
              <i class="ti ti-refresh"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Table -->\r
    <div class="card">\r
      <div class="card-header d-flex justify-content-between align-items-center">\r
        <h5 class="card-title mb-0">Liste des Utilisateurs</h5>\r
        <span class="badge bg-primary-transparent text-primary">{{ filteredUsers.length }} utilisateur(s)</span>\r
      </div>\r
      <div class="card-body p-0">\r
\r
        <!-- Loading -->\r
        <div *ngIf="loading" class="text-center py-5">\r
          <div class="spinner-border text-primary" role="status"></div>\r
          <p class="mt-2 text-muted">Chargement...</p>\r
        </div>\r
\r
        <!-- Empty state -->\r
        <div *ngIf="!loading && filteredUsers.length === 0" class="text-center py-5">\r
          <i class="ti ti-users-off fs-40 text-muted d-block mb-2"></i>\r
          <p class="text-muted">Aucun utilisateur trouv\xE9</p>\r
        </div>\r
\r
        <!-- Table -->\r
        <div *ngIf="!loading && filteredUsers.length > 0" class="table-responsive">\r
          <table class="table table-hover align-middle mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th class="ps-3">#</th>\r
                <th>Nom complet</th>\r
                <th>Email</th>\r
                <th>T\xE9l\xE9phone</th>\r
                <th>R\xF4le</th>\r
                <th>Statut</th>\r
                <th>Date cr\xE9ation</th>\r
                <th class="text-center">Bloquer</th>\r
                <th class="text-center">Actions</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let user of filteredUsers; let i = index">\r
                <td class="ps-3 text-muted small">{{ i + 1 }}</td>\r
                <td>\r
                  <div class="d-flex align-items-center gap-2">\r
                    <div class="avatar avatar-sm bg-primary-transparent rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:36px;height:36px;">\r
                      <span class="text-primary fw-bold text-uppercase">{{ user.fullName.charAt(0) }}</span>\r
                    </div>\r
                    <span class="fw-semibold">{{ user.fullName }}</span>\r
                  </div>\r
                </td>\r
                <td class="text-muted">{{ user.email }}</td>\r
                <td class="text-muted">{{ user.phone || '-' }}</td>\r
                <td>\r
                  <select class="form-select form-select-sm role-select"\r
                    [ngModel]="user.role"\r
                    [disabled]="user.role.includes('ADMIN')"\r
                    (ngModelChange)="changeRole(user, $event)">\r
                    <option value="STUDENT">\xC9tudiant</option>\r
                    <option value="INSTRUCTOR">Instructeur</option>\r
                    <option value="RECRUITER">Recruteur</option>\r
                    <option value="ADMIN">Admin</option>\r
                  </select>\r
                </td>\r
                <td>\r
                  <span *ngIf="user.accountStatus === 'ACTIVE'" class="badge bg-success-transparent text-success">\r
                    <i class="ti ti-circle-check me-1"></i>Actif\r
                  </span>\r
                  <span *ngIf="user.accountStatus === 'BLOCKED'" class="badge bg-danger-transparent text-danger">\r
                    <i class="ti ti-ban me-1"></i>Bloqu\xE9\r
                  </span>\r
                  <span *ngIf="user.accountStatus === 'PENDING'" class="badge bg-warning-transparent text-warning">\r
                    <i class="ti ti-clock me-1"></i>En attente\r
                  </span>\r
                </td>\r
                <td class="text-muted small">{{ formatDate(user.createdAt) }}</td>\r
                <td class="text-center">\r
                  <!-- Toggle switch block/unblock : d\xE9sactiv\xE9 pour les admins -->\r
                  <div class="form-check form-switch d-flex justify-content-center mb-0">\r
                    <input class="form-check-input" type="checkbox" role="switch"\r
                      [checked]="user.accountStatus === 'BLOCKED'"\r
                      [disabled]="user.role.includes('ADMIN')"\r
                      [title]="user.role.includes('ADMIN') ? 'Impossible de bloquer un admin' : (user.accountStatus === 'BLOCKED' ? 'D\xE9bloquer' : 'Bloquer')"\r
                      (change)="toggleBlock(user)">\r
                  </div>\r
                </td>\r
                <td class="text-center">\r
                  <button class="btn btn-sm btn-danger" (click)="confirmDelete(user)"\r
                          [disabled]="user.role.includes('ADMIN')"\r
                          [title]="user.role.includes('ADMIN') ? 'Impossible de supprimer un admin' : 'Supprimer'">\r
                    <i class="ti ti-trash"></i>\r
                  </button>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
<!-- Delete Confirmation Modal -->\r
<div class="modal fade" [class.show]="userToDelete" [style.display]="userToDelete ? 'block' : 'none'"\r
  tabindex="-1" role="dialog" aria-modal="true">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content border-0 shadow-sm">\r
      <div class="modal-header border-0 pb-0">\r
        <h5 class="modal-title"><i class="ti ti-alert-triangle text-danger me-2"></i>Confirmer la suppression</h5>\r
        <button type="button" class="btn-close" (click)="cancelDelete()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <p>\xCAtes-vous s\xFBr de vouloir supprimer le compte de\r
          <strong>{{ userToDelete?.fullName }}</strong> ?\r
        </p>\r
        <p class="text-muted small mb-0">Cette action est irr\xE9versible.</p>\r
      </div>\r
      <div class="modal-footer border-0">\r
        <button type="button" class="btn btn-outline-secondary" (click)="cancelDelete()">Annuler</button>\r
        <button type="button" class="btn btn-danger" (click)="deleteUser()">\r
          <i class="ti ti-trash me-1"></i>Supprimer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="userToDelete"></div>\r
`, styles: ["/* src/app/features/admin/admin-users/admin-users.component.scss */\n.table th {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.form-check-input {\n  cursor: pointer;\n  width: 2.2em;\n  height: 1.2em;\n}\n.form-check-input:checked {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.role-select {\n  min-width: 130px;\n  font-size: 0.82rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=admin-users.component.css.map */\n"] }]
  }], () => [{ type: AdminApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin/admin-users/admin-users.component.ts", lineNumber: 13 });
})();
export {
  AdminUsersComponent
};
//# sourceMappingURL=chunk-RN3FXECD.js.map
