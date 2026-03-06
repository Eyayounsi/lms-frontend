import {
  SuperAdminApiService
} from "./chunk-VHGRD3QT.js";
import "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/superadmin/superadmin-users/superadmin-users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SuperadminUsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function SuperadminUsersComponent_Conditional_14_Template_button_click_3_listener() {
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
function SuperadminUsersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function SuperadminUsersComponent_Conditional_15_Template_button_click_3_listener() {
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
function SuperadminUsersComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementStart(2, "p", 45);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminUsersComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "p", 47);
    \u0275\u0275text(3, "Aucun utilisateur trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 56);
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-danger", user_r5.role === "ADMIN")("text-primary", user_r5.role !== "ADMIN");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.fullName.charAt(0), " ");
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, "Super Admin ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 69);
    \u0275\u0275listener("ngModelChange", function SuperadminUsersComponent_Conditional_65_For_22_Conditional_17_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeRole(user_r5, $event));
    });
    \u0275\u0275elementStart(1, "option", 28);
    \u0275\u0275text(2, "\xC9tudiant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 27);
    \u0275\u0275text(4, "Instructeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 29);
    \u0275\u0275text(6, "Recruteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 26);
    \u0275\u0275text(8, "Administrateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 25);
    \u0275\u0275text(10, "Super Admin");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", user_r5.role);
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, "Actif ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, "Bloqu\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, "En attente ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function SuperadminUsersComponent_Conditional_65_For_22_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(user_r5));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SuperadminUsersComponent_Conditional_65_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 54)(5, "div", 55);
    \u0275\u0275conditionalCreate(6, SuperadminUsersComponent_Conditional_65_For_22_Conditional_6_Template, 1, 0, "i", 56)(7, SuperadminUsersComponent_Conditional_65_For_22_Conditional_7_Template, 2, 5, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "p", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 59);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275conditionalCreate(16, SuperadminUsersComponent_Conditional_65_For_22_Conditional_16_Template, 3, 0, "span", 37)(17, SuperadminUsersComponent_Conditional_65_For_22_Conditional_17_Template, 11, 1, "select", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275conditionalCreate(19, SuperadminUsersComponent_Conditional_65_For_22_Conditional_19_Template, 3, 0, "span", 61)(20, SuperadminUsersComponent_Conditional_65_For_22_Conditional_20_Template, 3, 0, "span", 62)(21, SuperadminUsersComponent_Conditional_65_For_22_Conditional_21_Template, 3, 0, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 59);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 51)(25, "div", 64)(26, "input", 65);
    \u0275\u0275listener("change", function SuperadminUsersComponent_Conditional_65_For_22_Template_input_change_26_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleBlock(user_r5));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "td", 51);
    \u0275\u0275conditionalCreate(28, SuperadminUsersComponent_Conditional_65_For_22_Conditional_28_Template, 2, 0, "button", 66)(29, SuperadminUsersComponent_Conditional_65_For_22_Conditional_29_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const \u0275$index_172_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-warning-subtle", user_r5.role === "SUPERADMIN")("table-danger-subtle", user_r5.role === "ADMIN");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_172_r8 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-warning", user_r5.role === "SUPERADMIN")("bg-danger-transparent", user_r5.role === "ADMIN")("bg-primary-transparent", user_r5.role !== "SUPERADMIN" && user_r5.role !== "ADMIN");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r5.role === "SUPERADMIN" ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.phone || "Pas de t\xE9l.");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r5.role === "SUPERADMIN" ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r5.accountStatus === "ACTIVE" ? 19 : user_r5.accountStatus === "BLOCKED" ? 20 : 21);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(user_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", user_r5.accountStatus === "BLOCKED")("disabled", user_r5.role === "SUPERADMIN")("title", user_r5.role === "SUPERADMIN" ? "Impossible de bloquer un Super Admin" : user_r5.accountStatus === "BLOCKED" ? "D\xE9bloquer" : "Bloquer");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r5.role !== "SUPERADMIN" ? 28 : 29);
  }
}
function SuperadminUsersComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 48)(2, "thead", 49)(3, "tr")(4, "th", 50);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 51);
    \u0275\u0275text(17, "Bloquer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 51);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, SuperadminUsersComponent_Conditional_65_For_22_Template, 30, 22, "tr", 52, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.filteredUsers);
  }
}
function SuperadminUsersComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "div", 78)(4, "h5", 79);
    \u0275\u0275element(5, "i", 80);
    \u0275\u0275text(6, "Confirmer la suppression ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275listener("click", function SuperadminUsersComponent_Conditional_66_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 81)(9, "p");
    \u0275\u0275text(10, "\xCAtes-vous s\xFBr de vouloir supprimer le compte de ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 82);
    \u0275\u0275text(15, "Cette action est irr\xE9versible.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 83)(17, "button", 84);
    \u0275\u0275listener("click", function SuperadminUsersComponent_Conditional_66_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(18, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 85);
    \u0275\u0275listener("click", function SuperadminUsersComponent_Conditional_66_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteUser());
    });
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275text(21, "Supprimer ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(22, "div", 87);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.userToDelete.fullName);
  }
}
var SuperadminUsersComponent = class _SuperadminUsersComponent {
  superAdminApi;
  users = [];
  filteredUsers = [];
  searchTerm = "";
  filterRole = "";
  filterStatus = "";
  loading = false;
  errorMessage = "";
  successMessage = "";
  userToDelete = null;
  constructor(superAdminApi) {
    this.superAdminApi = superAdminApi;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.errorMessage = "";
    this.superAdminApi.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Impossible de charger les utilisateurs.";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    this.filteredUsers = this.users.filter((u) => {
      const matchSearch = !this.searchTerm || u.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole = !this.filterRole || u.role === this.filterRole;
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
    this.userToDelete = user;
  }
  cancelDelete() {
    this.userToDelete = null;
  }
  deleteUser() {
    if (!this.userToDelete)
      return;
    const id = this.userToDelete.id;
    this.superAdminApi.deleteUser(id).subscribe({
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
    if (user.role === "SUPERADMIN")
      return;
    this.superAdminApi.toggleBlock(user.id).subscribe({
      next: (updated) => {
        user.accountStatus = updated.accountStatus;
        this.showSuccess(`Utilisateur ${user.accountStatus === "BLOCKED" ? "bloqu\xE9" : "d\xE9bloqu\xE9"}.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Impossible de modifier le statut.";
      }
    });
  }
  changeRole(user, newRole) {
    if (user.role === "SUPERADMIN")
      return;
    const oldRole = user.role;
    this.superAdminApi.changeUserRole(user.id, newRole).subscribe({
      next: (updated) => {
        user.role = updated.role;
        this.showSuccess(`R\xF4le chang\xE9 en ${this.getRoleLabel(updated.role)}.`);
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
    if (role === "SUPERADMIN")
      return "badge bg-warning text-dark";
    if (role === "ADMIN")
      return "badge bg-danger-transparent text-danger";
    if (role === "INSTRUCTOR")
      return "badge bg-primary-transparent text-primary";
    if (role === "STUDENT")
      return "badge bg-info-transparent text-info";
    if (role === "RECRUITER")
      return "badge bg-secondary-transparent text-secondary";
    return "badge bg-light text-dark";
  }
  getRoleLabel(role) {
    const labels = {
      STUDENT: "\xC9tudiant",
      INSTRUCTOR: "Instructeur",
      ADMIN: "Admin",
      RECRUITER: "Recruteur",
      SUPERADMIN: "Super Admin"
    };
    return labels[role] || role;
  }
  formatDate(date) {
    if (!date)
      return "-";
    return new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
  }
  getRoleIcon(role) {
    const icons = {
      STUDENT: "ti ti-school",
      INSTRUCTOR: "ti ti-chalkboard",
      ADMIN: "ti ti-shield",
      RECRUITER: "ti ti-briefcase",
      SUPERADMIN: "ti ti-crown"
    };
    return icons[role] || "ti ti-user";
  }
  static \u0275fac = function SuperadminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminUsersComponent)(\u0275\u0275directiveInject(SuperAdminApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminUsersComponent, selectors: [["app-superadmin-users"]], decls: 67, vars: 10, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "sa-header-banner"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-3"], [1, "icon-box", "bg-white", "bg-opacity-25", "flex-shrink-0"], [1, "ti", "ti-users", "fs-20", "text-white"], [1, "flex-grow-1"], [1, "mb-0", "text-white"], [1, "text-white", "opacity-75"], [1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "ti", "ti-refresh", "me-1"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "card", "mb-3", "border-0"], [1, "card-body"], [1, "row", "g-3", "align-items-end"], [1, "col-md-4"], [1, "form-label", "fw-semibold"], [1, "input-group"], [1, "input-group-text"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Nom ou email...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "SUPERADMIN"], ["value", "ADMIN"], ["value", "INSTRUCTOR"], ["value", "STUDENT"], ["value", "RECRUITER"], ["value", "ACTIVE"], ["value", "BLOCKED"], [1, "col-md-2"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "card", "border-0"], [1, "card-header", "bg-transparent", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0", "fw-bold"], [1, "badge", "bg-warning", "text-dark"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], [1, "ti", "ti-circle-check", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ti", "ti-alert-circle", "me-2"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "mt-2", "text-muted"], [1, "ti", "ti-users-off", "fs-40", "text-muted", "d-block", "mb-2"], [1, "text-muted"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "ps-3"], [1, "text-center"], [3, "table-warning-subtle", "table-danger-subtle"], [1, "ps-3", "text-muted", "small"], [1, "d-flex", "align-items-center", "gap-2"], [1, "user-avatar", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "flex-shrink-0"], [1, "ti", "ti-crown", "text-white"], [1, "fw-bold", "text-uppercase", 3, "text-danger", "text-primary"], [1, "mb-0", "fw-semibold"], [1, "text-muted", "small"], [1, "form-select", "form-select-sm", "role-select", 3, "ngModel"], [1, "badge", "bg-success-transparent", "text-success"], [1, "badge", "bg-danger-transparent", "text-danger"], [1, "badge", "bg-warning-transparent", "text-warning"], [1, "form-check", "form-switch", "d-flex", "justify-content-center", "mb-0"], ["type", "checkbox", "role", "switch", 1, "form-check-input", 3, "change", "checked", "disabled", "title"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger"], [1, "fw-bold", "text-uppercase"], [1, "ti", "ti-crown", "me-1"], [1, "form-select", "form-select-sm", "role-select", 3, "ngModelChange", "ngModel"], [1, "ti", "ti-circle-check", "me-1"], [1, "ti", "ti-ban", "me-1"], [1, "ti", "ti-clock", "me-1"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "ti", "ti-trash"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "shadow-sm"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title"], [1, "ti", "ti-alert-triangle", "text-danger", "me-2"], [1, "modal-body"], [1, "text-muted", "small", "mb-0"], [1, "modal-footer", "border-0"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "ti", "ti-trash", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function SuperadminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "h5", 7);
      \u0275\u0275text(8, "Gestion Globale des Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "small", 8);
      \u0275\u0275text(10, "Super-Admin \u2014 G\xE9rer tous les comptes, y compris les administrateurs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function SuperadminUsersComponent_Template_button_click_11_listener() {
        return ctx.loadUsers();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, "Actualiser ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(14, SuperadminUsersComponent_Conditional_14_Template, 4, 1, "div", 11);
      \u0275\u0275conditionalCreate(15, SuperadminUsersComponent_Conditional_15_Template, 4, 1, "div", 12);
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "label", 17);
      \u0275\u0275text(21, "Rechercher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 18)(23, "span", 19);
      \u0275\u0275element(24, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminUsersComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminUsersComponent_Template_input_ngModelChange_25_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 22)(27, "label", 17);
      \u0275\u0275text(28, "R\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterRole, $event) || (ctx.filterRole = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_29_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(30, "option", 24);
      \u0275\u0275text(31, "Tous les r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 25);
      \u0275\u0275text(33, "Super Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 26);
      \u0275\u0275text(35, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 27);
      \u0275\u0275text(37, "Instructeur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 28);
      \u0275\u0275text(39, "\xC9tudiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 29);
      \u0275\u0275text(41, "Recruteur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 22)(43, "label", 17);
      \u0275\u0275text(44, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminUsersComponent_Template_select_ngModelChange_45_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(46, "option", 24);
      \u0275\u0275text(47, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 30);
      \u0275\u0275text(49, "Actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 31);
      \u0275\u0275text(51, "Bloqu\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 32)(53, "button", 33);
      \u0275\u0275listener("click", function SuperadminUsersComponent_Template_button_click_53_listener() {
        return ctx.loadUsers();
      });
      \u0275\u0275element(54, "i", 10);
      \u0275\u0275text(55, "Refresh ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div", 34)(57, "div", 35)(58, "h6", 36);
      \u0275\u0275text(59, "Liste Compl\xE8te des Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 37);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 38);
      \u0275\u0275conditionalCreate(63, SuperadminUsersComponent_Conditional_63_Template, 4, 0, "div", 39);
      \u0275\u0275conditionalCreate(64, SuperadminUsersComponent_Conditional_64_Template, 4, 0, "div", 39);
      \u0275\u0275conditionalCreate(65, SuperadminUsersComponent_Conditional_65_Template, 23, 0, "div", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(66, SuperadminUsersComponent_Conditional_66_Template, 23, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.successMessage ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 15 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterRole);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", ctx.filteredUsers.length, " utilisateur(s)");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredUsers.length === 0 ? 64 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredUsers.length > 0 ? 65 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.userToDelete ? 66 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.sa-header-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%) !important;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n}\n.role-select[_ngcontent-%COMP%] {\n  min-width: 130px;\n  font-size: 12px;\n}\n.table-warning-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.05) !important;\n}\n.table-danger-subtle[_ngcontent-%COMP%] {\n  background-color: rgba(239, 68, 68, 0.04) !important;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n/*# sourceMappingURL=superadmin-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminUsersComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-users", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Header -->\r
<div class="row mb-4">\r
  <div class="col-12">\r
    <div class="card border-0 sa-header-banner">\r
      <div class="card-body d-flex align-items-center gap-3 py-3">\r
        <span class="icon-box bg-white bg-opacity-25 flex-shrink-0">\r
          <i class="ti ti-users fs-20 text-white"></i>\r
        </span>\r
        <div class="flex-grow-1">\r
          <h5 class="mb-0 text-white">Gestion Globale des Utilisateurs</h5>\r
          <small class="text-white opacity-75">Super-Admin \u2014 G\xE9rer tous les comptes, y compris les administrateurs</small>\r
        </div>\r
        <button class="btn btn-light btn-sm" (click)="loadUsers()">\r
          <i class="ti ti-refresh me-1"></i>Actualiser\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Alertes -->\r
@if (successMessage) {\r
  <div class="alert alert-success alert-dismissible fade show" role="alert">\r
    <i class="ti ti-circle-check me-2"></i>{{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage=''"></button>\r
  </div>\r
}\r
@if (errorMessage) {\r
  <div class="alert alert-danger alert-dismissible fade show" role="alert">\r
    <i class="ti ti-alert-circle me-2"></i>{{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage=''"></button>\r
  </div>\r
}\r
\r
<!-- Filtres -->\r
<div class="card mb-3 border-0">\r
  <div class="card-body">\r
    <div class="row g-3 align-items-end">\r
      <div class="col-md-4">\r
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
          <option value="SUPERADMIN">Super Admin</option>\r
          <option value="ADMIN">Admin</option>\r
          <option value="INSTRUCTOR">Instructeur</option>\r
          <option value="STUDENT">\xC9tudiant</option>\r
          <option value="RECRUITER">Recruteur</option>\r
        </select>\r
      </div>\r
      <div class="col-md-3">\r
        <label class="form-label fw-semibold">Statut</label>\r
        <select class="form-select" [(ngModel)]="filterStatus" (ngModelChange)="onFilterChange()">\r
          <option value="">Tous</option>\r
          <option value="ACTIVE">Actif</option>\r
          <option value="BLOCKED">Bloqu\xE9</option>\r
        </select>\r
      </div>\r
      <div class="col-md-2">\r
        <button class="btn btn-outline-secondary w-100" (click)="loadUsers()">\r
          <i class="ti ti-refresh me-1"></i>Refresh\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Table -->\r
<div class="card border-0">\r
  <div class="card-header bg-transparent d-flex justify-content-between align-items-center">\r
    <h6 class="card-title mb-0 fw-bold">Liste Compl\xE8te des Utilisateurs</h6>\r
    <span class="badge bg-warning text-dark">{{ filteredUsers.length }} utilisateur(s)</span>\r
  </div>\r
  <div class="card-body p-0">\r
\r
    @if (loading) {\r
      <div class="text-center py-5">\r
        <div class="spinner-border text-warning" role="status"></div>\r
        <p class="mt-2 text-muted">Chargement...</p>\r
      </div>\r
    }\r
\r
    @if (!loading && filteredUsers.length === 0) {\r
      <div class="text-center py-5">\r
        <i class="ti ti-users-off fs-40 text-muted d-block mb-2"></i>\r
        <p class="text-muted">Aucun utilisateur trouv\xE9</p>\r
      </div>\r
    }\r
\r
    @if (!loading && filteredUsers.length > 0) {\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th class="ps-3">#</th>\r
              <th>Utilisateur</th>\r
              <th>Email</th>\r
              <th>R\xF4le</th>\r
              <th>Statut</th>\r
              <th>Inscription</th>\r
              <th class="text-center">Bloquer</th>\r
              <th class="text-center">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (user of filteredUsers; let i = $index; track user.id) {\r
              <tr [class.table-warning-subtle]="user.role === 'SUPERADMIN'"\r
                  [class.table-danger-subtle]="user.role === 'ADMIN'">\r
                <td class="ps-3 text-muted small">{{ i + 1 }}</td>\r
                <td>\r
                  <div class="d-flex align-items-center gap-2">\r
                    <div class="user-avatar d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"\r
                         [class.bg-warning]="user.role === 'SUPERADMIN'"\r
                         [class.bg-danger-transparent]="user.role === 'ADMIN'"\r
                         [class.bg-primary-transparent]="user.role !== 'SUPERADMIN' && user.role !== 'ADMIN'">\r
                      @if (user.role === 'SUPERADMIN') {\r
                        <i class="ti ti-crown text-white"></i>\r
                      } @else {\r
                        <span class="fw-bold text-uppercase"\r
                          [class.text-danger]="user.role === 'ADMIN'"\r
                          [class.text-primary]="user.role !== 'ADMIN'">\r
                          {{ user.fullName.charAt(0) }}\r
                        </span>\r
                      }\r
                    </div>\r
                    <div>\r
                      <p class="mb-0 fw-semibold">{{ user.fullName }}</p>\r
                      <small class="text-muted">{{ user.phone || 'Pas de t\xE9l.' }}</small>\r
                    </div>\r
                  </div>\r
                </td>\r
                <td class="text-muted small">{{ user.email }}</td>\r
                <td>\r
                  @if (user.role === 'SUPERADMIN') {\r
                    <!-- SuperAdmin : non modifiable -->\r
                    <span class="badge bg-warning text-dark">\r
                      <i class="ti ti-crown me-1"></i>Super Admin\r
                    </span>\r
                  } @else {\r
                    <select class="form-select form-select-sm role-select"\r
                      [ngModel]="user.role"\r
                      (ngModelChange)="changeRole(user, $event)">\r
                      <option value="STUDENT">\xC9tudiant</option>\r
                      <option value="INSTRUCTOR">Instructeur</option>\r
                      <option value="RECRUITER">Recruteur</option>\r
                      <option value="ADMIN">Administrateur</option>\r
                      <option value="SUPERADMIN">Super Admin</option>\r
                    </select>\r
                  }\r
                </td>\r
                <td>\r
                  @if (user.accountStatus === 'ACTIVE') {\r
                    <span class="badge bg-success-transparent text-success">\r
                      <i class="ti ti-circle-check me-1"></i>Actif\r
                    </span>\r
                  } @else if (user.accountStatus === 'BLOCKED') {\r
                    <span class="badge bg-danger-transparent text-danger">\r
                      <i class="ti ti-ban me-1"></i>Bloqu\xE9\r
                    </span>\r
                  } @else {\r
                    <span class="badge bg-warning-transparent text-warning">\r
                      <i class="ti ti-clock me-1"></i>En attente\r
                    </span>\r
                  }\r
                </td>\r
                <td class="text-muted small">{{ formatDate(user.createdAt) }}</td>\r
                <td class="text-center">\r
                  <div class="form-check form-switch d-flex justify-content-center mb-0">\r
                    <input class="form-check-input" type="checkbox" role="switch"\r
                      [checked]="user.accountStatus === 'BLOCKED'"\r
                      [disabled]="user.role === 'SUPERADMIN'"\r
                      [title]="user.role === 'SUPERADMIN' ? 'Impossible de bloquer un Super Admin' : (user.accountStatus === 'BLOCKED' ? 'D\xE9bloquer' : 'Bloquer')"\r
                      (change)="toggleBlock(user)">\r
                  </div>\r
                </td>\r
                <td class="text-center">\r
                  @if (user.role !== 'SUPERADMIN') {\r
                    <button class="btn btn-sm btn-outline-danger" (click)="confirmDelete(user)" title="Supprimer">\r
                      <i class="ti ti-trash"></i>\r
                    </button>\r
                  } @else {\r
                    <span class="text-muted small">\u2014</span>\r
                  }\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    }\r
\r
  </div>\r
</div>\r
\r
<!-- Modal de suppression -->\r
@if (userToDelete) {\r
  <div class="modal fade show d-block" tabindex="-1" role="dialog" aria-modal="true">\r
    <div class="modal-dialog modal-dialog-centered">\r
      <div class="modal-content border-0 shadow-sm">\r
        <div class="modal-header border-0 pb-0">\r
          <h5 class="modal-title">\r
            <i class="ti ti-alert-triangle text-danger me-2"></i>Confirmer la suppression\r
          </h5>\r
          <button type="button" class="btn-close" (click)="cancelDelete()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <p>\xCAtes-vous s\xFBr de vouloir supprimer le compte de <strong>{{ userToDelete.fullName }}</strong> ?</p>\r
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
  <div class="modal-backdrop fade show"></div>\r
}\r
`, styles: ["/* src/app/features/superadmin/superadmin-users/superadmin-users.component.scss */\n.sa-header-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%) !important;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n}\n.role-select {\n  min-width: 130px;\n  font-size: 12px;\n}\n.table-warning-subtle {\n  background-color: rgba(245, 158, 11, 0.05) !important;\n}\n.table-danger-subtle {\n  background-color: rgba(239, 68, 68, 0.04) !important;\n}\n.card {\n  border-radius: 12px !important;\n}\n/*# sourceMappingURL=superadmin-users.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminUsersComponent, { className: "SuperadminUsersComponent", filePath: "src/app/features/superadmin/superadmin-users/superadmin-users.component.ts", lineNumber: 13 });
})();
export {
  SuperadminUsersComponent
};
//# sourceMappingURL=chunk-EZ6WCTDZ.js.map
