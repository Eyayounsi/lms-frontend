import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/admin/admin-categories/admin-categories.component.ts
function AdminCategoriesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_1_Template_button_click_3_listener() {
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
function AdminCategoriesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_2_Template_button_click_3_listener() {
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
function AdminCategoriesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminCategoriesComponent_div_11_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3, " Aucune cat\xE9gorie. Cr\xE9ez-en une pour commencer. ");
    \u0275\u0275elementEnd()();
  }
}
function AdminCategoriesComponent_div_11_tr_19_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
  if (rf & 2) {
    const cat_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(cat_r5.icon);
  }
}
function AdminCategoriesComponent_div_11_tr_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesComponent_div_11_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275template(4, AdminCategoriesComponent_div_11_tr_19_i_4_Template, 1, 2, "i", 32)(5, AdminCategoriesComponent_div_11_tr_19_span_5_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "code", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 36)(14, "button", 37);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_11_tr_19_Template_button_click_14_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(cat_r5));
    });
    \u0275\u0275element(15, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 39);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_11_tr_19_Template_button_click_16_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDelete(cat_r5));
    });
    \u0275\u0275element(17, "i", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cat_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cat_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.description || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r5.slug);
  }
}
function AdminCategoriesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "table", 21)(3, "thead", 22)(4, "tr")(5, "th", 23);
    \u0275\u0275text(6, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 24);
    \u0275\u0275text(8, "Ic\xF4ne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 25);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, AdminCategoriesComponent_div_11_tr_18_Template, 4, 0, "tr", 26)(19, AdminCategoriesComponent_div_11_tr_19_Template, 18, 6, "tr", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.categories.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function AdminCategoriesComponent_div_12_i_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 73);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.form.icon);
  }
}
function AdminCategoriesComponent_div_12_i_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 74);
  }
}
function AdminCategoriesComponent_div_12_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_12_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.icon = "");
    });
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesComponent_div_12_div_24_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_12_div_24_button_4_Template_button_click_0_listener() {
      const icon_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectIcon(icon_r11.cls));
    });
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "span", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn-primary", ctx_r1.form.icon === icon_r11.cls)("btn-outline-secondary", ctx_r1.form.icon !== icon_r11.cls);
    \u0275\u0275property("title", \u0275\u0275interpolate(icon_r11.label));
    \u0275\u0275advance();
    \u0275\u0275classMap(icon_r11.cls);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(icon_r11.label);
  }
}
function AdminCategoriesComponent_div_12_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1, " Aucune ic\xF4ne trouv\xE9e. Saisissez la classe manuellement dans le champ ci-dessus. ");
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesComponent_div_12_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_div_12_div_24_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.iconSearch, $event) || (ctx_r1.iconSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 80);
    \u0275\u0275template(4, AdminCategoriesComponent_div_12_div_24_button_4_Template, 4, 9, "button", 81)(5, AdminCategoriesComponent_div_12_div_24_div_5_Template, 2, 0, "div", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.iconSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredIcons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredIcons.length === 0);
  }
}
function AdminCategoriesComponent_div_12_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 87);
  }
}
function AdminCategoriesComponent_div_12_i_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 88);
  }
}
function AdminCategoriesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "div", 46)(4, "h5", 47);
    \u0275\u0275element(5, "i", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 49);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "div", 51)(10, "label", 52);
    \u0275\u0275text(11, "Ic\xF4ne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 53)(13, "div", 54);
    \u0275\u0275template(14, AdminCategoriesComponent_div_12_i_14_Template, 1, 2, "i", 55)(15, AdminCategoriesComponent_div_12_i_15_Template, 1, 0, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 57)(17, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_div_12_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.icon, $event) || (ctx_r1.form.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 59);
    \u0275\u0275text(19, "Saisie libre ou utilise le s\xE9lecteur ci-dessous.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 60);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_12_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.showIconPicker = !ctx_r1.showIconPicker;
      return \u0275\u0275resetView(ctx_r1.iconSearch = "");
    });
    \u0275\u0275element(21, "i", 61);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminCategoriesComponent_div_12_button_23_Template, 2, 0, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminCategoriesComponent_div_12_div_24_Template, 6, 3, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 51)(26, "label", 64);
    \u0275\u0275text(27, "Nom ");
    \u0275\u0275elementStart(28, "span", 65);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_div_12_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 51)(32, "label", 64);
    \u0275\u0275text(33, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCategoriesComponent_div_12_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 68)(36, "button", 69);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_12_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(37, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 70);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_12_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275template(39, AdminCategoriesComponent_div_12_span_39_Template, 1, 0, "span", 71)(40, AdminCategoriesComponent_div_12_i_40_Template, 1, 0, "i", 72);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.editId ? "Modifier la cat\xE9gorie" : "Nouvelle cat\xE9gorie", " ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.form.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.icon);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.showIconPicker ? "Fermer" : "Choisir", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showIconPicker);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.form.name.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement..." : "Enregistrer", " ");
  }
}
function AdminCategoriesComponent_div_13_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 87);
  }
}
function AdminCategoriesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "div", 89)(4, "div", 90);
    \u0275\u0275element(5, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 92);
    \u0275\u0275text(7, "Supprimer ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 93);
    \u0275\u0275text(12, " Cette action est irr\xE9versible.");
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " Les cours li\xE9s \xE0 cette cat\xE9gorie n'auront plus de cat\xE9gorie assign\xE9e. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 94)(16, "button", 95);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDelete());
    });
    \u0275\u0275text(17, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 96);
    \u0275\u0275listener("click", function AdminCategoriesComponent_div_13_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275template(19, AdminCategoriesComponent_div_13_span_19_Template, 1, 0, "span", 71);
    \u0275\u0275text(20, " Supprimer ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.categoryToDelete == null ? null : ctx_r1.categoryToDelete.name);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleting);
  }
}
var ISAX_ICONS = [
  // Technologie & Dev
  { label: "Code", cls: "isax isax-code" },
  { label: "Monitor", cls: "isax isax-monitor" },
  { label: "CPU", cls: "isax isax-cpu" },
  { label: "Mobile", cls: "isax isax-mobile" },
  { label: "Wifi", cls: "isax isax-wifi" },
  { label: "Cloud", cls: "isax isax-cloud" },
  { label: "Database", cls: "isax isax-data" },
  { label: "Terminal", cls: "isax isax-command" },
  { label: "Git", cls: "isax isax-code-circle" },
  { label: "S\xE9curit\xE9", cls: "isax isax-shield-tick" },
  { label: "API", cls: "isax isax-refresh-circle" },
  { label: "Serveur", cls: "isax isax-grid-2" },
  // Design & Créativité
  { label: "Design", cls: "isax isax-brush" },
  { label: "Image", cls: "isax isax-image" },
  { label: "Palette", cls: "isax isax-color-swatch" },
  { label: "Crayon", cls: "isax isax-edit" },
  { label: "Forme", cls: "isax isax-shapes" },
  { label: "Vid\xE9o", cls: "isax isax-video-play" },
  { label: "Appareil photo", cls: "isax isax-camera" },
  { label: "Musique", cls: "isax isax-music" },
  // Business & Finance
  { label: "Business", cls: "isax isax-briefcase" },
  { label: "Graphique", cls: "isax isax-chart" },
  { label: "Finance", cls: "isax isax-wallet" },
  { label: "Marketing", cls: "isax isax-speaker" },
  { label: "Globe", cls: "isax isax-global" },
  { label: "R\xE9seau", cls: "isax isax-people" },
  { label: "B\xE2timent", cls: "isax isax-building" },
  { label: "Pr\xE9sentation", cls: "isax isax-presentation-chart" },
  // Éducation & Science
  { label: "Livre", cls: "isax isax-book" },
  { label: "Dipl\xF4me", cls: "isax isax-award" },
  { label: "Science", cls: "isax isax-health" },
  { label: "Ampoule", cls: "isax isax-lamp-on" },
  { label: "Calculatrice", cls: "isax isax-calculator" },
  { label: "Microscope", cls: "isax isax-eye" },
  { label: "Stylo", cls: "isax isax-pen-tool" },
  { label: "Classe", cls: "isax isax-teacher" },
  // Divers
  { label: "Langue", cls: "isax isax-language-circle" },
  { label: "Sport", cls: "isax isax-activity" },
  { label: "Cuisine", cls: "isax isax-coffee" },
  { label: "Voyages", cls: "isax isax-airplane" },
  { label: "Sant\xE9", cls: "isax isax-heart" },
  { label: "Jeux vid\xE9o", cls: "isax isax-game" },
  { label: "Photographie", cls: "isax isax-gallery" },
  { label: "Robotique", cls: "isax isax-cpu-setting" }
];
var AdminCategoriesComponent = class _AdminCategoriesComponent {
  courseService;
  categories = [];
  loading = true;
  successMessage = "";
  errorMessage = "";
  // Formulaire créer / modifier
  showForm = false;
  editId = null;
  form = { name: "", description: "", icon: "" };
  saving = false;
  // Icon picker
  showIconPicker = false;
  iconSearch = "";
  ALL_ICONS = ISAX_ICONS;
  get filteredIcons() {
    const q = this.iconSearch.toLowerCase();
    return q ? this.ALL_ICONS.filter((i) => i.label.toLowerCase().includes(q) || i.cls.includes(q)) : this.ALL_ICONS;
  }
  selectIcon(cls) {
    this.form.icon = cls;
    this.showIconPicker = false;
    this.iconSearch = "";
  }
  // Confirmation suppression
  showDeleteModal = false;
  categoryToDelete = null;
  deleting = false;
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.courseService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openCreate() {
    this.editId = null;
    this.form = { name: "", description: "", icon: "" };
    this.showForm = true;
    this.showIconPicker = false;
    this.iconSearch = "";
  }
  openEdit(cat) {
    this.editId = cat.id;
    this.form = { name: cat.name, description: cat.description || "", icon: cat.icon || "" };
    this.showForm = true;
    this.showIconPicker = false;
    this.iconSearch = "";
  }
  cancelForm() {
    this.showForm = false;
    this.editId = null;
    this.showIconPicker = false;
  }
  save() {
    if (!this.form.name.trim())
      return;
    this.saving = true;
    const obs = this.editId ? this.courseService.updateCategory(this.editId, this.form) : this.courseService.createCategory(this.form);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showForm = false;
        this.showSuccess(this.editId ? "Cat\xE9gorie mise \xE0 jour !" : "Cat\xE9gorie cr\xE9\xE9e !");
        this.editId = null;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.errorMessage = e?.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }
  openDelete(cat) {
    this.categoryToDelete = cat;
    this.showDeleteModal = true;
  }
  closeDelete() {
    this.showDeleteModal = false;
    this.categoryToDelete = null;
  }
  confirmDelete() {
    if (!this.categoryToDelete)
      return;
    this.deleting = true;
    this.courseService.deleteCategory(this.categoryToDelete.id).subscribe({
      next: () => {
        this.deleting = false;
        this.closeDelete();
        this.showSuccess("Cat\xE9gorie supprim\xE9e.");
        this.load();
      },
      error: (e) => {
        this.deleting = false;
        this.errorMessage = e?.error?.message || "Erreur lors de la suppression.";
        this.closeDelete();
      }
    });
  }
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3e3);
  }
  static \u0275fac = function AdminCategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCategoriesComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCategoriesComponent, selectors: [["app-admin-categories"]], decls: 14, vars: 6, consts: [[1, "page-content"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0"], [1, "fa-solid", "fa-tags", "me-2", "text-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus", "me-1"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card shadow-sm", 4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "card", "shadow-sm"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [2, "width", "40px"], [2, "width", "48px"], [1, "text-end", 2, "width", "120px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "6", 1, "text-center", "text-muted", "py-5"], [1, "fa-solid", "fa-tags", "fa-2x", "mb-2", "d-block"], [1, "text-muted", "small"], [1, "text-center"], ["style", "font-size:1.3rem;", 3, "class", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "fw-semibold"], [1, "small", "text-secondary"], [1, "text-end"], ["title", "Modifier", 1, "btn", "btn-sm", "btn-outline-warning", "me-1", 3, "click"], [1, "fa-solid", "fa-pen"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], [2, "font-size", "1.3rem"], [1, "text-muted"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], [1, "fa-solid", "fa-tag", "me-2"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded", "border", "bg-light", 2, "width", "48px", "height", "48px", "flex-shrink", "0"], ["style", "font-size:1.6rem;", 3, "class", 4, "ngIf"], ["class", "fa-solid fa-image text-muted", "style", "font-size:1.3rem;", 4, "ngIf"], [1, "flex-grow-1"], ["type", "text", "placeholder", "Ex: isax isax-code  ou  ti ti-code  ou  fa-solid fa-laptop", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-text"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "flex-shrink-0", 3, "click"], [1, "isax", "isax-grid", "me-1"], ["type", "button", "class", "btn btn-outline-danger btn-sm flex-shrink-0", "title", "Effacer l'ic\xF4ne", 3, "click", 4, "ngIf"], ["class", "border rounded-3 p-2 bg-white", "style", "max-height:280px;overflow-y:auto;", 4, "ngIf"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "Ex: D\xE9veloppement Web", "autofocus", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Description de la cat\xE9gorie...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "fa-solid fa-check me-1", 4, "ngIf"], [2, "font-size", "1.6rem"], [1, "fa-solid", "fa-image", "text-muted", 2, "font-size", "1.3rem"], ["type", "button", "title", "Effacer l'ic\xF4ne", 1, "btn", "btn-outline-danger", "btn-sm", "flex-shrink-0", 3, "click"], [1, "isax", "isax-close-circle"], [1, "border", "rounded-3", "p-2", "bg-white", 2, "max-height", "280px", "overflow-y", "auto"], [1, "mb-2", "px-1"], ["type", "text", "placeholder", "Rechercher une ic\xF4ne... (code, design, livre...)", "autofocus", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "flex-wrap", "gap-1"], ["type", "button", "class", "btn btn-sm d-flex flex-column align-items-center justify-content-center p-2 gap-1", "style", "width:68px;min-height:58px;font-size:11px;", 3, "btn-primary", "btn-outline-secondary", "title", "click", 4, "ngFor", "ngForOf"], ["class", "text-muted small p-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "d-flex", "flex-column", "align-items-center", "justify-content-center", "p-2", "gap-1", 2, "width", "68px", "min-height", "58px", "font-size", "11px", 3, "click", "title"], [2, "font-size", "1.4rem"], [1, "text-truncate", 2, "max-width", "62px"], [1, "text-muted", "small", "p-2"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fa-solid", "fa-check", "me-1"], [1, "modal-body", "text-center", "py-4"], [1, "mb-3", 2, "width", "60px", "height", "60px", "background", "rgba(220,53,69,0.1)", "border-radius", "50%", "display", "inline-flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-trash", "fa-xl", "text-danger"], [1, "mb-2"], [1, "text-muted", "mb-4"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-light", "rounded-pill", "px-4", 3, "click"], [1, "btn", "btn-danger", "rounded-pill", "px-4", 3, "click", "disabled"]], template: function AdminCategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AdminCategoriesComponent_div_1_Template, 4, 1, "div", 1)(2, AdminCategoriesComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h4", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275text(6, "Gestion des Cat\xE9gories ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function AdminCategoriesComponent_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9, "Nouvelle cat\xE9gorie ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, AdminCategoriesComponent_div_10_Template, 4, 0, "div", 8)(11, AdminCategoriesComponent_div_11_Template, 20, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, AdminCategoriesComponent_div_12_Template, 42, 13, "div", 10)(13, AdminCategoriesComponent_div_13_Template, 21, 3, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=admin-categories.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-admin-categories", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-content">\r
\r
  <!-- Messages -->\r
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show">\r
    <i class="fa-solid fa-check-circle me-2"></i>{{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>\r
  </div>\r
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">\r
    <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>\r
  </div>\r
\r
  <!-- Header -->\r
  <div class="d-flex justify-content-between align-items-center mb-4">\r
    <h4 class="mb-0">\r
      <i class="fa-solid fa-tags me-2 text-primary"></i>Gestion des Cat\xE9gories\r
    </h4>\r
    <button class="btn btn-primary" (click)="openCreate()">\r
      <i class="fa-solid fa-plus me-1"></i>Nouvelle cat\xE9gorie\r
    </button>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status"></div>\r
    <p class="mt-2 text-muted">Chargement...</p>\r
  </div>\r
\r
  <!-- Tableau -->\r
  <div *ngIf="!loading" class="card shadow-sm">\r
    <div class="table-responsive">\r
      <table class="table table-hover align-middle mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th style="width:40px">#</th>\r
            <th style="width:48px">Ic\xF4ne</th>\r
            <th>Nom</th>\r
            <th>Description</th>\r
            <th>Slug</th>\r
            <th class="text-end" style="width:120px">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="categories.length === 0">\r
            <td colspan="6" class="text-center text-muted py-5">\r
              <i class="fa-solid fa-tags fa-2x mb-2 d-block"></i>\r
              Aucune cat\xE9gorie. Cr\xE9ez-en une pour commencer.\r
            </td>\r
          </tr>\r
          <tr *ngFor="let cat of categories; let i = index">\r
            <td class="text-muted small">{{ i + 1 }}</td>\r
            <td class="text-center">\r
              <i *ngIf="cat.icon" [class]="cat.icon" style="font-size:1.3rem;"></i>\r
              <span *ngIf="!cat.icon" class="text-muted">\u2014</span>\r
            </td>\r
            <td class="fw-semibold">{{ cat.name }}</td>\r
            <td class="text-muted small">{{ cat.description || '\u2014' }}</td>\r
            <td><code class="small text-secondary">{{ cat.slug }}</code></td>\r
            <td class="text-end">\r
              <button class="btn btn-sm btn-outline-warning me-1" (click)="openEdit(cat)" title="Modifier">\r
                <i class="fa-solid fa-pen"></i>\r
              </button>\r
              <button class="btn btn-sm btn-outline-danger" (click)="openDelete(cat)" title="Supprimer">\r
                <i class="fa-solid fa-trash"></i>\r
              </button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL CR\xC9ER / MODIFIER                               -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="showForm" class="modal fade show d-block" tabindex="-1"\r
     style="background-color: rgba(0,0,0,0.5);">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header bg-primary text-white">\r
        <h5 class="modal-title">\r
          <i class="fa-solid fa-tag me-2"></i>{{ editId ? 'Modifier la cat\xE9gorie' : 'Nouvelle cat\xE9gorie' }}\r
        </h5>\r
        <button type="button" class="btn-close btn-close-white" (click)="cancelForm()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="mb-3">\r
          <label class="form-label fw-semibold">Ic\xF4ne</label>\r
\r
          <!-- Pr\xE9visualisation + bouton ouvrir le s\xE9lecteur -->\r
          <div class="d-flex align-items-center gap-2 mb-2">\r
            <div class="d-flex align-items-center justify-content-center rounded border bg-light"\r
                 style="width:48px;height:48px;flex-shrink:0;">\r
              <i *ngIf="form.icon" [class]="form.icon" style="font-size:1.6rem;"></i>\r
              <i *ngIf="!form.icon" class="fa-solid fa-image text-muted" style="font-size:1.3rem;"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <input type="text" class="form-control form-control-sm" [(ngModel)]="form.icon"\r
                     placeholder="Ex: isax isax-code  ou  ti ti-code  ou  fa-solid fa-laptop">\r
              <div class="form-text">Saisie libre ou utilise le s\xE9lecteur ci-dessous.</div>\r
            </div>\r
            <button type="button" class="btn btn-outline-primary btn-sm flex-shrink-0"\r
                    (click)="showIconPicker = !showIconPicker; iconSearch = ''">\r
              <i class="isax isax-grid me-1"></i>{{ showIconPicker ? 'Fermer' : 'Choisir' }}\r
            </button>\r
            <button *ngIf="form.icon" type="button" class="btn btn-outline-danger btn-sm flex-shrink-0"\r
                    title="Effacer l'ic\xF4ne" (click)="form.icon = ''">\r
              <i class="isax isax-close-circle"></i>\r
            </button>\r
          </div>\r
\r
          <!-- S\xE9lecteur visuel (grid d'ic\xF4nes) -->\r
          <div *ngIf="showIconPicker" class="border rounded-3 p-2 bg-white" style="max-height:280px;overflow-y:auto;">\r
            <!-- Recherche -->\r
            <div class="mb-2 px-1">\r
              <input type="text" class="form-control form-control-sm" [(ngModel)]="iconSearch"\r
                     placeholder="Rechercher une ic\xF4ne... (code, design, livre...)"\r
                     autofocus>\r
            </div>\r
            <!-- Grille -->\r
            <div class="d-flex flex-wrap gap-1">\r
              <button *ngFor="let icon of filteredIcons" type="button"\r
                      class="btn btn-sm d-flex flex-column align-items-center justify-content-center p-2 gap-1"\r
                      [class.btn-primary]="form.icon === icon.cls"\r
                      [class.btn-outline-secondary]="form.icon !== icon.cls"\r
                      style="width:68px;min-height:58px;font-size:11px;"\r
                      title="{{ icon.label }}"\r
                      (click)="selectIcon(icon.cls)">\r
                <i [class]="icon.cls" style="font-size:1.4rem;"></i>\r
                <span class="text-truncate" style="max-width:62px;">{{ icon.label }}</span>\r
              </button>\r
              <div *ngIf="filteredIcons.length === 0" class="text-muted small p-2">\r
                Aucune ic\xF4ne trouv\xE9e. Saisissez la classe manuellement dans le champ ci-dessus.\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">Nom <span class="text-danger">*</span></label>\r
          <input type="text" class="form-control" [(ngModel)]="form.name"\r
                 placeholder="Ex: D\xE9veloppement Web" autofocus>\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">Description</label>\r
          <textarea class="form-control" rows="3" [(ngModel)]="form.description"\r
                    placeholder="Description de la cat\xE9gorie..."></textarea>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button class="btn btn-secondary" (click)="cancelForm()">Annuler</button>\r
        <button class="btn btn-primary" (click)="save()"\r
                [disabled]="saving || !form.name.trim()">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
          <i *ngIf="!saving" class="fa-solid fa-check me-1"></i>\r
          {{ saving ? 'Enregistrement...' : 'Enregistrer' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL CONFIRMER SUPPRESSION                          -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="showDeleteModal" class="modal fade show d-block" tabindex="-1"\r
     style="background-color: rgba(0,0,0,0.5);">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-body text-center py-4">\r
        <div class="mb-3"\r
             style="width:60px;height:60px;background:rgba(220,53,69,0.1);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;">\r
          <i class="fa-solid fa-trash fa-xl text-danger"></i>\r
        </div>\r
        <h5 class="mb-2">Supprimer <strong>{{ categoryToDelete?.name }}</strong> ?</h5>\r
        <p class="text-muted mb-4">\r
          Cette action est irr\xE9versible.<br>\r
          Les cours li\xE9s \xE0 cette cat\xE9gorie n'auront plus de cat\xE9gorie assign\xE9e.\r
        </p>\r
        <div class="d-flex justify-content-center gap-2">\r
          <button class="btn btn-light rounded-pill px-4" (click)="closeDelete()">Annuler</button>\r
          <button class="btn btn-danger rounded-pill px-4" (click)="confirmDelete()" [disabled]="deleting">\r
            <span *ngIf="deleting" class="spinner-border spinner-border-sm me-1"></span>\r
            Supprimer\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/admin/admin-categories/admin-categories.component.scss */\n/*# sourceMappingURL=admin-categories.component.css.map */\n"] }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCategoriesComponent, { className: "AdminCategoriesComponent", filePath: "src/app/features/admin/admin-categories/admin-categories.component.ts", lineNumber: 66 });
})();
export {
  AdminCategoriesComponent
};
//# sourceMappingURL=chunk-4HW75777.js.map
